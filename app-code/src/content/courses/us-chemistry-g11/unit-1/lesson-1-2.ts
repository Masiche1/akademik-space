import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "chem11-u1-lesson-1-2",
  code: "1-2",
  title: "Molecular Geometry",
  goal: "I CAN use VSEPR theory to predict molecular shapes and bond angles, and explain how lone pairs distort geometry and how shape determines molecular polarity.",
  standards: ["HS-PS1-1", "HS-PS1-2", "CCC: Structure and Function"],
  vocabulary: [
    { term: "VSEPR theory", definition: "Valence Shell Electron Pair Repulsion theory: electron domains around a central atom arrange themselves to be as far apart as possible." },
    { term: "Electron domain", definition: "A region of electron density around an atom: a bonding pair, a lone pair, or a multiple bond counted as one domain." },
    { term: "Molecular geometry", definition: "The three-dimensional arrangement of the atoms in a molecule, ignoring lone pairs." },
    { term: "Electron geometry", definition: "The arrangement of all electron domains, including lone pairs." },
    { term: "Bond angle", definition: "The angle between two bonds sharing a central atom, e.g. $109.5^\\circ$ in a tetrahedron." },
    { term: "Polarity", definition: "Unequal sharing of electrons creating partial charges; a molecule is polar if bond polarities do not cancel." },
    { term: "Trigonal planar", definition: "Electron geometry with three domains at $120^\\circ$, e.g. $\\text{BF}_3$; molecular shape is trigonal planar when no lone pairs are present." },
  ],
  concepts: [
    {
      id: "chem11-u1-vsepr-shapes",
      title: "VSEPR shapes and bond angles",
      skill: "Predict electron and molecular geometry from the number of electron domains and lone pairs.",
      lesson: {
        sections: [
          {
            heading: "Electron domains repel",
            body: "VSEPR theory says that electron domains around a central atom repel each other and arrange to maximize the distance between them. Count **electron domains**: each single, double or triple bond counts as **one** domain, and each lone pair counts as one domain.\n\n- **2 domains**: linear, $180^\\circ$ (e.g. $\\text{CO}_2$)\n- **3 domains**: trigonal planar, $120^\\circ$ (e.g. $\\text{BF}_3$)\n- **4 domains**: tetrahedral, $109.5^\\circ$ (e.g. $\\text{CH}_4$)\n- **5 domains**: trigonal bipyramidal\n- **6 domains**: octahedral, $90^\\circ$ and $180^\\circ$",
          },
          {
            heading: "Lone pairs distort the shape",
            body: "Lone pairs occupy more space than bonding pairs, so they squeeze bond angles smaller. Molecular geometry names only the positions of atoms:\n\n- 4 domains with 1 lone pair: trigonal pyramidal (e.g. $\\text{NH}_3$, angle about $107^\\circ$)\n- 4 domains with 2 lone pairs: bent (e.g. $\\text{H}_2\\text{O}$, angle about $104.5^\\circ$)\n- 3 domains with 1 lone pair: bent (e.g. $\\text{SO}_2$)\n- 5 domains with 1 lone pair: seesaw; with 2 lone pairs: T-shaped; with 3 lone pairs: linear",
          },
          {
            heading: "Steps for predicting shape",
            body: "1. Draw the Lewis structure and identify the central atom.\n2. Count electron domains (bonds count once each regardless of order; add lone pairs).\n3. Determine electron geometry from the domain count.\n4. Name the molecular geometry from the arrangement of atoms only, ignoring lone pairs.\n5. Lone pairs compress bond angles below the ideal values.",
          },
        ],
        keyFormulas: [
          { name: "Domain count", statement: "$\\text{domains} = \\text{sigma bonds} + \\text{lone pairs}$; multiple bonds count as one domain" },
          { name: "Ideal angles", statement: "2: $180^\\circ$; 3: $120^\\circ$; 4: $109.5^\\circ$; 5: $90^\\circ$/$120^\\circ$; 6: $90^\\circ$" },
        ],
        workedExample: {
          problem: "Predict the electron and molecular geometry of $\\text{NH}_3$ and explain why its bond angle is less than $109.5^\\circ$.",
          solution: "Nitrogen has 4 electron domains: 3 N-H bonding pairs and 1 lone pair. Electron geometry is tetrahedral. With one lone pair, the molecular geometry is trigonal pyramidal. The lone pair repels more strongly than bonding pairs, compressing the H-N-H angles to about $107^\\circ$, below the ideal tetrahedral $109.5^\\circ$.",
        },
      },
      questions: [
        {
          id: "chem11-u1-vsepr-shapes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many electron domains are around the central carbon atom in $\\text{CO}_2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "method", name: "Domain counting", statement: "Each bond (single, double or triple) counts as one electron domain; lone pairs each count as one." }],
            steps: [{ reasoning: "$\\text{CO}_2$ has two C=O double bonds and no lone pairs on carbon: 2 domains.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $2$",
            commonErrors: ["Counting each line of the double bond separately, giving 4.", "Adding oxygen's lone pairs to carbon's domain count."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem11-u1-vsepr-shapes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the molecular geometry of $\\text{BF}_3$ and the approximate bond angle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Trigonal planar", statement: "Three electron domains with no lone pairs give trigonal planar geometry with $120^\\circ$ bond angles." }],
            steps: [
              { reasoning: "Boron has 3 bonding domains and no lone pairs, so electron and molecular geometry are both trigonal planar.", marks: 1, markCode: "B" },
              { reasoning: "The bond angle is $120^\\circ$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Trigonal planar, $120^\\circ$",
            commonErrors: ["Answering tetrahedral because boron 'should' have 4 bonds.", "Writing the angle as $109.5^\\circ$."],
            examinerNote: "B1 geometry, B1 angle.",
          },
        },
        {
          id: "chem11-u1-vsepr-shapes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the molecular geometries and bond angles of $\\text{CH}_4$, $\\text{NH}_3$ and $\\text{H}_2\\text{O}$. Explain the trend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electron vs molecular geometry", statement: "Electron geometry includes lone pairs; molecular geometry counts atoms only." },
              { kind: "principle", name: "Lone pair repulsion", statement: "Lone pairs occupy more space and repel bonding pairs more strongly, compressing bond angles." },
            ],
            steps: [
              { reasoning: "$\\text{CH}_4$: 4 bonding domains, no lone pairs: tetrahedral, $109.5^\\circ$.", marks: 1, markCode: "B" },
              { reasoning: "$\\text{NH}_3$: 4 domains, 1 lone pair: trigonal pyramidal, about $107^\\circ$.", marks: 1, markCode: "B" },
              { reasoning: "$\\text{H}_2\\text{O}$: 4 domains, 2 lone pairs: bent, about $104.5^\\circ$.", marks: 1, markCode: "B" },
              { reasoning: "Each added lone pair repels the bonding pairs more strongly, squeezing the bond angle progressively smaller: $109.5 > 107 > 104.5$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$\\text{CH}_4$ tetrahedral $109.5^\\circ$; $\\text{NH}_3$ trigonal pyramidal $\\approx 107^\\circ$; $\\text{H}_2\\text{O}$ bent $\\approx 104.5^\\circ$. More lone pairs mean smaller bond angles.",
            commonErrors: ["Calling $\\text{NH}_3$ tetrahedral; tetrahedral is the electron geometry, not the molecular shape.", "Saying lone pairs 'take up' bonding positions without explaining stronger repulsion."],
            examinerNote: "B1 each geometry, R1 trend explanation.",
          },
        },
        {
          id: "chem11-u1-vsepr-shapes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Consider three molecules: carbon dioxide ($\\text{CO}_2$), sulfur dioxide ($\\text{SO}_2$) and water ($\\text{H}_2\\text{O}$).",
          parts: [
            { label: "a", prompt: "Predict the molecular geometry of each molecule.", marks: 3 },
            { label: "b", prompt: "State the number of lone pairs on the central atom in each.", marks: 3 },
            { label: "c", prompt: "Explain which molecule has the largest bond angle and which the smallest.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "VSEPR procedure", statement: "Count domains around the central atom; lone pairs distort molecular geometry and reduce bond angles." },
              { kind: "principle", name: "Lone pair repulsion", statement: "Lone pair-lone pair > lone pair-bonding pair > bonding pair-bonding pair repulsion." },
            ],
            steps: [
              { reasoning: "$\\text{CO}_2$: 2 domains, no lone pairs: linear. $\\text{SO}_2$: 3 domains, 1 lone pair: bent. $\\text{H}_2\\text{O}$: 4 domains, 2 lone pairs: bent.", marks: 3, markCode: "B", part: "a" },
              { reasoning: "$\\text{CO}_2$: 0 lone pairs on C. $\\text{SO}_2$: 1 lone pair on S. $\\text{H}_2\\text{O}$: 2 lone pairs on O.", marks: 3, markCode: "B", part: "b" },
              { reasoning: "Largest angle: $\\text{CO}_2$ at $180^\\circ$ (linear, no lone pairs).", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Smallest: $\\text{H}_2\\text{O}$ at about $104.5^\\circ$ because two lone pairs compress the angle most.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "$\\text{SO}_2$ is intermediate (about $119^\\circ$) because its single lone pair repels less than two lone pairs but still compresses below $120^\\circ$.", marks: 1, markCode: "R", part: "c" },
            ],
            finalAnswer: "(a) CO2 linear, SO2 bent, H2O bent (b) 0, 1, 2 lone pairs (c) CO2 largest at 180°, H2O smallest at ~104.5°, SO2 intermediate.",
            commonErrors: ["Giving SO2 a trigonal planar molecular geometry; the lone pair makes it bent.", "Forgetting that multiple bonds count as one domain."],
            examinerNote: "3+3+3 = 9. Accept angle values within reasonable ranges.",
          },
        },
      ],
    },
    {
      id: "chem11-u1-polarity-imf",
      title: "Polarity and intermolecular forces",
      skill: "Determine whether a molecule is polar from its geometry and bond polarity, and relate intermolecular forces to physical properties.",
      lesson: {
        sections: [
          {
            heading: "From bonds to molecular polarity",
            body: "A bond is polar when the two atoms have different electronegativities, creating partial charges $\\delta^+$ and $\\delta^-$. A molecule is polar only if the bond dipoles do **not** cancel. In a symmetrical molecule like $\\text{CO}_2$ (linear) or $\\text{CCl}_4$ (tetrahedral), identical bond dipoles cancel and the molecule is nonpolar. In $\\text{H}_2\\text{O}$ or $\\text{NH}_3$ the shape is asymmetrical, so dipoles add to a net molecular dipole.",
          },
          {
            heading: "Three types of intermolecular forces",
            body: "- **London dispersion forces**: present in all molecules, caused by temporary fluctuations in electron distribution. Strength grows with molar mass and surface area.\n- **Dipole-dipole forces**: attractions between the partial charges of polar molecules.\n- **Hydrogen bonding**: a strong dipole-dipole attraction between a hydrogen bonded to N, O or F and a lone pair on another N, O or F atom. It is much stronger than ordinary dipole-dipole forces.",
          },
          {
            heading: "IMF controls physical properties",
            body: "Stronger intermolecular forces mean higher melting and boiling points, lower vapor pressure, higher surface tension and greater viscosity. Water's unusually high boiling point, surface tension and ability to climb narrow tubes (capillary action) all come from hydrogen bonding. 'Like dissolves like': polar and ionic solutes dissolve in polar solvents such as water; nonpolar solutes dissolve in nonpolar solvents such as oil.",
          },
        ],
        keyFormulas: [
          { name: "Polarity test", statement: "Polar bonds + asymmetrical shape $\\rightarrow$ polar molecule; symmetrical shape $\\rightarrow$ nonpolar molecule" },
          { name: "IMF strength", statement: "hydrogen bonding $>$ dipole-dipole $>$ London dispersion (for similar molar masses)" },
        ],
        workedExample: {
          problem: "Explain why ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$, b.p. $78^\\circ\\text{C}$) has a much higher boiling point than dimethyl ether ($\\text{CH}_3\\text{OCH}_3$, b.p. $-24^\\circ\\text{C}$) even though both have formula $\\text{C}_2\\text{H}_6\\text{O}$.",
          solution: "Both molecules are polar and have the same molar mass, so London and dipole-dipole forces are similar. But ethanol has an O-H bond, so its molecules form hydrogen bonds with each other. Dimethyl ether has no O-H bond, so it cannot hydrogen bond. Hydrogen bonding is much stronger, so ethanol needs far more energy to boil.",
        },
      },
      questions: [
        {
          id: "chem11-u1-polarity-imf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which molecule is polar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{CO}_2$" },
              { id: "b", text: "$\\text{CCl}_4$" },
              { id: "c", text: "$\\text{H}_2\\text{O}$" },
              { id: "d", text: "$\\text{CH}_4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Dipole cancellation", statement: "Symmetrical molecules cancel bond dipoles; asymmetrical molecules have a net dipole." }],
            steps: [{ reasoning: "$\\text{H}_2\\text{O}$ is bent, so its polar O-H bonds do not cancel; the others are symmetrical.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** $\\text{H}_2\\text{O}$",
            commonErrors: ["Choosing $\\text{CO}_2$ because C=O bonds are polar; the linear shape cancels them."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "chem11-u1-polarity-imf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rank the following from strongest to weakest intermolecular forces: hydrogen bonding in water, dipole-dipole forces in HCl, London dispersion forces in $\\text{I}_2$ (molar mass $254$ g/mol). Justify briefly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "IMF types", statement: "Hydrogen bonding is strongest, then dipole-dipole, then London dispersion for similar sizes." },
              { kind: "property", name: "London dispersion scaling", statement: "London forces grow with molar mass and electron count." },
            ],
            steps: [
              { reasoning: "Hydrogen bonding in water is strongest because it involves H bonded to O with a strong dipole.", marks: 1, markCode: "B" },
              { reasoning: "Dipole-dipole in HCl is next: permanent partial charges attract, but weaker than H-bonds.", marks: 1, markCode: "B" },
              { reasoning: "$\\text{I}_2$ has only London forces, but its large molar mass ($254$ g/mol) makes them strong; still generally weaker than H-bonds here, so rank: H-bonding $>$ dipole-dipole $>$ London (I2). Accept justification that I2's London forces are large but the ranking holds for this comparison.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Hydrogen bonding (water) $>$ dipole-dipole (HCl) $>$ London dispersion ($\\text{I}_2$), with the caveat that $\\text{I}_2$'s London forces are enhanced by its large size.",
            commonErrors: ["Ranking London forces of I2 first because I2 is heavy; H-bonds still dominate for water.", "Treating all IMF as equal."],
            examinerNote: "B1 each comparison, R1 mass caveat.",
          },
        },
        {
          id: "chem11-u1-polarity-imf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain each observation using intermolecular forces:\n\n(a) Water climbs up a narrow glass tube (capillary action).\n(b) Oil and water do not mix.\n(c) Iodine ($\\text{I}_2$) dissolves in carbon tetrachloride ($\\text{CCl}_4$) but not in water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hydrogen bonding in water", statement: "Water's H-bond network creates strong cohesion and adhesion to polar surfaces." },
              { kind: "principle", name: "Like dissolves like", statement: "Polar solutes dissolve in polar solvents; nonpolar solutes in nonpolar solvents." },
            ],
            steps: [
              { reasoning: "Water molecules hydrogen-bond to each other (cohesion) and to the polar glass surface (adhesion); the adhesive force pulls water up the narrow tube against gravity.", marks: 2, markCode: "B" },
              { reasoning: "Water is polar and oil is nonpolar; water's strong H-bonds hold it together and exclude the nonpolar oil, so they separate.", marks: 1, markCode: "B" },
              { reasoning: "Both $\\text{I}_2$ and $\\text{CCl}_4$ are nonpolar, so London forces allow them to mix; water is polar and cannot interact favorably with nonpolar $\\text{I}_2$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) H-bonding adhesion/cohesion pulls water up narrow tubes (b) polar water and nonpolar oil are immiscible (c) nonpolar I2 dissolves in nonpolar CCl4 but not polar water.",
            commonErrors: ["Attributing capillary action to gravity or air pressure.", "Saying oil is 'lighter' as the reason it doesn't mix; density affects layering, not miscibility."],
            examinerNote: "B2 capillary, B1 miscibility, R1 solubility reasoning.",
          },
        },
        {
          id: "chem11-u1-polarity-imf-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Four substances are compared: ammonia ($\\text{NH}_3$), methane ($\\text{CH}_4$), hydrogen fluoride ($\\text{HF}$) and carbon tetrachloride ($\\text{CCl}_4$).",
          parts: [
            { label: "a", prompt: "For each substance, state whether the molecule is polar or nonpolar and identify the strongest type of intermolecular force between its molecules.", marks: 4 },
            { label: "b", prompt: "Predict which substance has the highest boiling point and which has the lowest. Justify using IMF strength.", marks: 3 },
            { label: "c", prompt: "Explain why $\\text{NH}_3$ is soluble in water but $\\text{CH}_4$ is not.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polarity from geometry", statement: "Asymmetrical polar-bond molecules are polar; symmetrical ones are nonpolar." },
              { kind: "comparison", name: "IMF ranking", statement: "H-bonding > dipole-dipole > London dispersion." },
              { kind: "principle", name: "Like dissolves like", statement: "Polar solutes dissolve in polar solvents." },
            ],
            steps: [
              { reasoning: "$\\text{NH}_3$: polar (trigonal pyramidal), hydrogen bonding (N-H). $\\text{CH}_4$: nonpolar (tetrahedral, C-H nearly nonpolar), London only. $\\text{HF}$: polar, hydrogen bonding (F-H, strongest H-bond). $\\text{CCl}_4$: nonpolar (symmetric), London only.", marks: 4, markCode: "B", part: "a" },
              { reasoning: "Highest boiling point: $\\text{CCl}_4$ (about $77^\\circ\\text{C}$). Although its molecules are nonpolar, four chlorine atoms give a large electron cloud, so London dispersion forces are very strong.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Lowest: $\\text{CH}_4$ (about $-161^\\circ\\text{C}$), the smallest molecule with the weakest London forces.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Hydrogen fluoride (b.p. about $20^\\circ\\text{C}$) beats ammonia (about $-33^\\circ\\text{C}$) because H-F hydrogen bonds are stronger than N-H hydrogen bonds.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Water is polar; $\\text{NH}_3$ is polar and can H-bond/dipole-interact with water, so it dissolves. $\\text{CH}_4$ is nonpolar, so water's H-bond network excludes it.", marks: 2, markCode: "B", part: "c" },
              { reasoning: "Like dissolves like: polar-polar interactions are favorable.", marks: 1, markCode: "R", part: "c" },
            ],
            finalAnswer: "(a) NH3 polar/H-bond, CH4 nonpolar/London, HF polar/H-bond, CCl4 nonpolar/London (b) CCl4 highest (~77°C, strong London forces), CH4 lowest (~-161°C) (c) NH3 is polar and hydrogen-bonds with water; CH4 is nonpolar.",
            commonErrors: ["Calling CCl4 polar because C-Cl bonds are polar; the symmetric tetrahedron cancels dipoles.", "Assuming hydrogen bonding always gives the highest boiling point; large nonpolar molecules can have stronger London forces."],
            examinerNote: "4+3+3 = 10. CCl4 b.p. 76.7°C > HF 19.5°C > NH3 -33°C > CH4 -161°C.",
          },
        },
      ],
    },
  ],
};
