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
              { id: "a", text: "Ionic bond" },
              { id: "b", text: "Hydrogen bond" },
              { id: "c", text: "Covalent bond" },
              { id: "d", text: "Peptide bond" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Hydrogen bond",
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
        {
          id: "cial-b-u2-wp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which atoms in a water molecule carry the partial charges that allow hydrogen bonding?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only oxygen is charged" },
              { id: "b", text: "$\\delta^-$ on hydrogen and $\\delta^+$ on oxygen" },
              { id: "c", text: "$\\delta^-$ on oxygen and $\\delta^+$ on each hydrogen" },
              { id: "d", text: "No partial charges" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Water polarity",
                statement: "Oxygen is $\\delta^-$ and each hydrogen is $\\delta^+$ because oxygen is more electronegative.",
              },
            ],
            steps: [
              { reasoning: "Oxygen attracts bonding electrons, becoming slightly negative.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\delta^-$ oxygen, $\\delta^+$ hydrogen",
            commonErrors: ["Reversing the signs of the partial charges."],
          },
        },
        {
          id: "cial-b-u2-wp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which property of water helps organisms maintain a stable body temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absence of hydrogen bonds" },
              { id: "b", text: "Inability to dissolve ions" },
              { id: "c", text: "Low density as a solid" },
              { id: "d", text: "High specific heat capacity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Specific heat capacity",
                statement: "Water absorbs much heat before warming, buffering temperature changes.",
              },
            ],
            steps: [
              { reasoning: "High specific heat capacity stabilises temperature.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** High specific heat capacity",
            commonErrors: ["Choosing low density, which relates to ice."],
          },
        },
        {
          id: "cial-b-u2-wp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does evaporation of sweat cool the skin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water absorbs latent heat from the skin as it evaporates" },
              { id: "b", text: "Hydrogen bonds release heat" },
              { id: "c", text: "Water freezes on the skin" },
              { id: "d", text: "Sweat releases oxygen onto the skin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Latent heat of vaporisation",
                statement: "Evaporation requires energy, drawn from surrounding tissues.",
              },
            ],
            steps: [
              { reasoning: "Latent heat is taken from the skin during evaporation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Latent heat absorbed from skin",
            commonErrors: ["Saying sweat adds heat rather than absorbing it."],
          },
        },
        {
          id: "cial-b-u2-wp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which biological process is helped by the cohesion of water molecules?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water movement up xylem vessels" },
              { id: "b", text: "Cell division" },
              { id: "c", text: "Protein synthesis" },
              { id: "d", text: "Photosynthesis only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cohesion",
                statement: "Hydrogen bonds between water molecules allow continuous columns in xylem.",
              },
            ],
            steps: [
              { reasoning: "Cohesion supports transpiration pull in plants.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water movement in xylem",
            commonErrors: ["Confusing cohesion with adhesion alone."],
          },
        },
        {
          id: "cial-b-u2-wp-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does floating ice benefit aquatic organisms in cold climates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It removes all dissolved oxygen" },
              { id: "b", text: "It insulates the water beneath and slows freezing" },
              { id: "c", text: "It prevents photosynthesis" },
              { id: "d", text: "It increases the density of water below" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ice insulation",
                statement: "Less-dense ice floats and insulates underlying water from cold air.",
              },
            ],
            steps: [
              { reasoning: "Floating ice reduces heat loss from water below.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Insulates water beneath",
            commonErrors: ["Thinking ice sinks and freezes the whole water body."],
          },
        },
        {
          id: "cial-b-u2-wp-q10",
          difficulty: "challenge",
            totalMarks: 1,
          stem: "Why is water described as a universal solvent for biological reactions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It reacts with every substance" },
              { id: "b", text: "It has no dipole" },
              { id: "c", text: "Its polarity dissolves ions and polar molecules" },
              { id: "d", text: "It cannot dissolve non-polar molecules" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solvent properties",
                statement: "Polar water dissolves ions and polar solutes needed for metabolism.",
              },
            ],
            steps: [
              { reasoning: "Polarity allows water to interact with charged and polar species.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Dissolves ions and polar molecules",
            commonErrors: ["Claiming water dissolves everything equally."],
          },
        },
        {
          id: "cial-b-u2-wp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the energy needed to raise the temperature of $50\\ \\text{g}$ of water by $10^\\circ\\text{C}$, using a specific heat capacity of 4.18 J g⁻¹ °C⁻¹.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2090 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Specific heat capacity",
                statement: "Energy $=mc\\Delta T$.",
              },
            ],
            steps: [
              { reasoning: "$E=50 \\times 4.18 \\times 10 = 2090$ J.", marks: 1, markCode: "M" },
              { reasoning: "The required energy is 2090 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2090 J",
            commonErrors: ["Using mass in kilograms without converting units."],
          },
        },
        {
          id: "cial-b-u2-wp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using a latent heat of vaporisation of $2260\\ \\text{J g}^{-1}$, calculate the energy absorbed when $5\\ \\text{g}$ of water evaporates.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 11300 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Latent heat",
                statement: "Energy $=$ mass $\\times$ latent heat of vaporisation.",
              },
            ],
            steps: [
              { reasoning: "$E=5 \\times 2260 = 11300$ J.", marks: 1, markCode: "M" },
              { reasoning: "The absorbed energy is 11300 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11300 J",
            commonErrors: ["Multiplying by specific heat capacity instead of latent heat."],
          },
        },
        {
          id: "cial-b-u2-wp-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "If $2090\\ \\text{J}$ of heat is added to $100\\ \\text{g}$ of water with specific heat capacity 4.18 J g⁻¹ °C⁻¹, calculate the temperature rise in °C.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Specific heat capacity",
                statement: "$\\Delta T=E/(mc)$.",
              },
            ],
            steps: [
              { reasoning: "$\\Delta T=2090/(100 \\times 4.18)=5^\\circ\\text{C}$.", marks: 1, markCode: "M" },
              { reasoning: "The temperature rise is $5^\\circ\\text{C}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5^\\circ\\text{C}$",
            commonErrors: ["Multiplying energy by mass instead of dividing."],
          },
        },
        {
          id: "cial-b-u2-wp-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate the energy absorbed when $10\\ \\text{g}$ of water evaporates, using a latent heat of vaporisation of $2260\\ \\text{J g}^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 22600 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Latent heat",
                statement: "Energy $=$ mass $\\times$ latent heat of vaporisation.",
              },
            ],
            steps: [
              { reasoning: "$E=10 \\times 2260 = 22600$ J.", marks: 1, markCode: "M" },
              { reasoning: "The absorbed energy is 22600 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "22600 J",
            commonErrors: ["Using 4.18 J/g/°C instead of latent heat."],
          },
        },
        {
          id: "cial-b-u2-wp-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student evaporates $2\\ \\text{g}$ of water from skin using a latent heat of vaporisation of $2260\\ \\text{J g}^{-1}$. Calculate the heat removed from the skin in joules.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4520 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Latent heat",
                statement: "Heat removed $=$ mass evaporated $\\times$ latent heat of vaporisation.",
              },
            ],
            steps: [
              { reasoning: "$E=2 \\times 2260 = 4520$ J.", marks: 1, markCode: "M" },
              { reasoning: "The heat removed is 4520 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4520 J",
            commonErrors: ["Treating evaporation as releasing heat."],
          },
        },
        {
          id: "cial-b-u2-wp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how hydrogen bonding contributes to both the high specific heat capacity and high latent heat of vaporisation of water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hydrogen bonding",
                statement: "Extensive hydrogen bonds must be weakened or broken during warming and vaporisation.",
              },
            ],
            steps: [
              { reasoning: "Water molecules are linked by many hydrogen bonds.", marks: 1, markCode: "M" },
              { reasoning: "Energy is needed to weaken bonds for temperature rise and to break them fully for evaporation.", marks: 1, markCode: "M" },
              { reasoning: "This gives high specific heat capacity and high latent heat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hydrogen bonds absorb energy during warming and evaporation, raising heat capacity and latent heat.",
            commonErrors: ["Saying hydrogen bonds are strong covalent bonds."],
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
              { id: "b", text: "A product" },
              { id: "c", text: "A reactant" },
              { id: "d", text: "A type of substrate" },
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
        {
          id: "cial-b-u2-ez-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly describes an enzyme after catalysing a reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is permanently denatured" },
              { id: "b", text: "It is converted into product" },
              { id: "c", text: "It is unchanged and can be reused" },
              { id: "d", text: "It becomes a substrate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enzyme",
                statement: "Enzymes are biological catalysts that are not consumed in the reaction.",
              },
            ],
            steps: [
              { reasoning: "The enzyme is regenerated unchanged.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Unchanged and reusable",
            commonErrors: ["Thinking enzymes are used up."],
          },
        },
        {
          id: "cial-b-u2-ez-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does the substrate bind on an enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the active site" },
              { id: "b", text: "At the R-group only" },
              { id: "c", text: "At the peptide bond" },
              { id: "d", text: "Anywhere on the surface" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active site",
                statement: "The active site is the region complementary to the substrate.",
              },
            ],
            steps: [
              { reasoning: "Substrate binding is specific to the active site.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Active site",
            commonErrors: ["Saying enzymes bind substrates anywhere."],
          },
        },
        {
          id: "cial-b-u2-ez-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the lock-and-key model state about enzyme specificity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any substrate can enter any enzyme" },
              { id: "b", text: "Substrate shape is irrelevant" },
              { id: "c", text: "Enzymes change shape randomly" },
              { id: "d", text: "The active site shape exactly fits the substrate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lock and key",
                statement: "The active site is complementary to a specific substrate.",
              },
            ],
            steps: [
              { reasoning: "Complementary shapes give specificity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Active site fits substrate",
            commonErrors: ["Ignoring shape complementarity."],
          },
        },
        {
          id: "cial-b-u2-ez-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does enzyme activity fall sharply above the optimum temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The active site becomes larger" },
              { id: "b", text: "More product is formed" },
              { id: "c", text: "Heat disrupts bonds maintaining the enzyme's 3D shape" },
              { id: "d", text: "Substrate molecules disappear" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Denaturation",
                statement: "Above optimum, thermal disruption unfolds the enzyme and deforms the active site.",
              },
            ],
            steps: [
              { reasoning: "Loss of tertiary structure prevents substrate binding.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Bonds disrupted; shape lost",
            commonErrors: ["Saying the enzyme is destroyed permanently in all cases."],
          },
        },
        {
          id: "cial-b-u2-ez-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does pH affect enzyme activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher pH always increases activity" },
              { id: "b", text: "Each enzyme has an optimum pH and activity falls away from it" },
              { id: "c", text: "pH has no effect" },
              { id: "d", text: "All enzymes have optimum pH 7" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "pH optimum",
                statement: "Enzymes have characteristic optimum pH values; extremes can denature them.",
              },
            ],
            steps: [
              { reasoning: "Activity is maximal near optimum pH.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Optimum pH varies by enzyme",
            commonErrors: ["Assuming all enzymes work best at pH 7."],
          },
        },
        {
          id: "cial-b-u2-ez-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which inhibitor binds to a site other than the active site and changes the enzyme's shape?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Product" },
              { id: "b", text: "Competitive inhibitor" },
              { id: "c", text: "Substrate" },
              { id: "d", text: "Non-competitive inhibitor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-competitive inhibition",
                statement: "Non-competitive inhibitors bind away from the active site and alter enzyme shape.",
              },
            ],
            steps: [
              { reasoning: "Non-competitive binding changes active-site shape indirectly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Non-competitive inhibitor",
            commonErrors: ["Confusing it with competitive inhibition."],
          },
        },
        {
          id: "cial-b-u2-ez-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Pepsin has an optimum pH of 2 and trypsin an optimum pH of 8. Calculate the difference between their optimum pH values.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "pH difference",
                statement: "Difference $=$ trypsin optimum $-$ pepsin optimum.",
              },
            ],
            steps: [
              { reasoning: "$8-2=6$ pH units.", marks: 1, markCode: "M" },
              { reasoning: "The difference is 6 pH units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 pH units",
            commonErrors: ["Adding the pH values instead of subtracting."],
          },
        },
        {
          id: "cial-b-u2-ez-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "An enzyme-catalysed reaction has rate 10 units min$^{-1}$ at $20^\\circ\\text{C}$ and 30 units min$^{-1}$ at its optimum. Calculate the increase in rate at the optimum.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate difference",
                statement: "Increase $=$ optimum rate $-$ lower-temperature rate.",
              },
            ],
            steps: [
              { reasoning: "$30-10=20$ units min$^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "The rate increases by 20 units min$^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 units min$^{-1}$",
            commonErrors: ["Dividing rates instead of finding the increase."],
          },
        },
        {
          id: "cial-b-u2-ez-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A reaction produces $180\\ \\text{units}$ of product in 3 minutes. What is the average rate in units min$^{-1}$?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate calculation",
                statement: "Average rate $=$ total product formed $\\div$ time.",
              },
            ],
            steps: [
              { reasoning: "$180 \\div 3 = 60$ units min$^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "The average rate is 60 units min$^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 units min$^{-1}$",
            commonErrors: ["Multiplying product by time instead of dividing."],
          },
        },
        {
          id: "cial-b-u2-ez-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "At substrate concentration 2 mmol dm$^{-3}$, the reaction rate is half its maximum. If substrate concentration is doubled to 4 mmol dm$^{-3}$, what is the new substrate concentration in mmol dm$^{-3}$?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Concentration doubling",
                statement: "New concentration $=$ original concentration $\\times 2$.",
              },
            ],
            steps: [
              { reasoning: "The original concentration is 2 mmol dm$^{-3}$.", marks: 1, markCode: "M" },
              { reasoning: "$2 \\times 2 = 4$ mmol dm$^{-3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 mmol dm$^{-3}$",
            commonErrors: ["Doubling twice and answering 8."],
          },
        },
        {
          id: "cial-b-u2-ez-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An enzyme rate rises from 25 units min$^{-1}$ to 50 units min$^{-1}$ when enzyme concentration is doubled. Calculate the absolute increase in rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate difference",
                statement: "Increase $=$ final rate $-$ initial rate.",
              },
            ],
            steps: [
              { reasoning: "$50-25=25$ units min$^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "The increase is 25 units min$^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25 units min$^{-1}$",
            commonErrors: ["Answering the final rate rather than the increase."],
          },
        },
        {
          id: "cial-b-u2-ez-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how increasing substrate concentration can overcome competitive inhibition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Competitive inhibition",
                statement: "A competitive inhibitor resembles substrate and competes for the active site.",
              },
            ],
            steps: [
              { reasoning: "Competitive inhibitors occupy active sites and block substrate binding.", marks: 1, markCode: "M" },
              { reasoning: "Increasing substrate concentration makes substrate more likely to bind active sites.", marks: 1, markCode: "M" },
              { reasoning: "At sufficiently high substrate concentration, inhibition is overcome.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More substrate outcompetes the inhibitor for active sites.",
            commonErrors: ["Saying competitive inhibition cannot be overcome."],
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
