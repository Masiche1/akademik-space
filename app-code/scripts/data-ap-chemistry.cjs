// AP Chemistry — atomic structure, reactions/kinetics/equilibrium, thermodynamics/electrochemistry. Spec for scripts/gen-us-elementary.cjs.
const P = (kind, name, statement) => [kind, name, statement];
const S = (reasoning, marks, markCode = "A", working) => ({ reasoning, marks, markCode, ...(working ? { working } : {}) });
const mcq = (difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const num = (difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const op = (difficulty, totalMarks, stem, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const lesson = (slug, title, goal, standards, vocab, concept) => ({ slug, title, goal, standards, vocab, concept });

const apChemistry = {
  id: "ap-chemistry",
  exportName: "apChemistry",
  prefix: "apch",
  title: "AP Chemistry",
  shortTitle: "AP Chem",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description:
    "Atomic structure and periodicity, chemical reactions with kinetics and equilibrium, and thermodynamics with electrochemistry — the AP Chemistry curriculum.",
  ap: { exam: "chemistry" },
  units: [
    {
      id: "apch-u1",
      title: "Atomic Structure and Periodicity",
      description: "Subatomic particles, electron configuration, periodic trends, and intermolecular forces.",
      lessons: [
        lesson("atomic-structure", "Atomic Structure and Electron Configuration", "I CAN describe subatomic particles, write electron configurations, and apply periodic trends.", ["ATO-1"],
          [["Proton", "Positively charged particle in the nucleus; defines the element."], ["Neutron", "Neutral particle in the nucleus; contributes mass."], ["Electron", "Negatively charged particle in orbitals; determines chemistry."], ["Atomic number", "Number of protons — identifies the element."], ["Mass number", "Protons + neutrons in the nucleus."], ["Electron configuration", "Arrangement of electrons in orbitals, e.g., $1s^2 2s^2 2p^6$."], ["Orbital", "Region of space where an electron is most likely found; holds max $2$ electrons."]],
          {
            title: "Atomic structure",
            skill: "Relate atomic composition to identity and electron arrangement.",
            sections: [
              ["Subatomic particles", "Protons ($+1$) and neutrons (0) form the nucleus; electrons ($-1$) occupy orbitals outside. Atomic number $Z$ = protons = electrons in a neutral atom; mass number $A$ = protons + neutrons. Isotopes share $Z$ but differ in neutrons."],
              ["Electron configuration", "Electrons fill orbitals by the aufbau principle: $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, \\ldots$ — note $4s$ fills before $3d$. Each orbital holds max $2$ electrons with opposite spins (Pauli). Configurations explain periodicity: same valence configuration = same group = similar chemistry."],
            ],
            formulas: [
              ["Neutral atom", "$Z = \\text{protons} = \\text{electrons}$"],
              ["Mass number", "$A = \\text{protons} + \\text{neutrons}$"],
              ["Orbital capacity", "Each orbital holds max $2$ electrons"],
            ],
            worked: {
              problem: "Write the electron configuration of oxygen (atomic number $8$).",
              solution: "Fill by aufbau: $1s^2 2s^2 2p^4$ — total $2 + 2 + 4 = 8$ electrons. Noble gas shorthand: $[He]\\,2s^2 2p^4$.",
            },
            questions: [
              mcq("foundation", 1, "The atomic number of an element equals its number of ___.", [["a", "neutrons"], ["b", "protons"], ["c", "electrons + neutrons"], ["d", "orbitals"]], "b",
                [P("definition", "Atomic number", "$Z$ = proton count = element identity.")],
                [S("Atomic number counts protons; in neutral atoms it also equals electrons.", 1, "M")], "Protons", ["Confusing atomic number with mass number."]),
              mcq("core", 1, "Which electron configuration is correct for sodium ($Z = 11$)?", [["a", "$1s^2 2s^2 2p^6 3s^2 3p^1$"], ["b", "$1s^2 2s^2 2p^6 3s^1$"], ["c", "$1s^2 2s^2 2p^6 3p^3$"], ["d", "$1s^2 2s^2 2p^5 3s^2$"]], "b",
                [P("method", "Aufbau", "Fill $1s \\to 2s \\to 2p \\to 3s$ in order: $2+2+6+1 = 11$.")],
                [S("$1s^2 2s^2 2p^6 3s^1$ totals $11$ electrons — sodium's single valence electron explains its reactivity.", 1, "M")], "$1s^2 2s^2 2p^6 3s^1$", ["Putting electrons in $3p$ before $3s$ fills."]),
              num("core", 2, "An atom has $6$ protons and $8$ neutrons. What is its mass number? Enter the value.", [{ label: "$A$", answer: 14 }],
                [P("method", "Mass number", "$A = Z + N = 6 + 8$.")],
                [S("$A = 6 + 8 = 14$ — this is carbon-14.", 1, "M"), S("$A = 14$.", 1, "B")], "$14$", ["Adding atomic number twice or forgetting neutrons."]),
              op("challenge", 3, "Explain why elements in the same group have similar chemical properties, referencing electron configuration.",
                [P("concept", "Valence electrons", "Outer-shell electrons determine reactivity.")],
                [S("Elements in a group share the same number of valence electrons (e.g., all Group 1 have $ns^1$).", 1, "M"), S("Chemical bonding involves valence electrons — same valence configuration means same bonding behavior and similar compounds.", 1, "M"), S("Inner electrons are shielded and don't participate, so they don't affect chemistry.", 1, "B")], "Same valence electron configuration = similar chemistry", ["Saying all electrons matter equally."]),
            ],
          }),
        lesson("periodic-trends", "Periodic Trends", "I CAN predict trends in atomic radius, ionization energy, and electronegativity.", ["PER-1"],
          [["Atomic radius", "Size of the atom; decreases across a period, increases down a group."], ["Ionization energy", "Energy required to remove an electron; increases across, decreases down."], ["Electronegativity", "Ability to attract bonding electrons; increases across, decreases down."], ["Shielding effect", "Inner electrons reduce nuclear pull on outer electrons."], ["Effective nuclear charge", "Net positive charge felt by valence electrons: $Z_{eff} = Z - \\text{shielding}$."]],
          {
            title: "Periodic trends",
            skill: "Rank elements by radius, ionization energy, and electronegativity.",
            sections: [
              ["Across a period", "Moving left to right, protons are added to the same shell — $Z_{eff}$ rises, pulling electrons closer (radius shrinks) and making electrons harder to remove (ionization energy rises) or share (electronegativity rises). Noble gases are the peak."],
              ["Down a group", "Each step adds a shell — radius grows despite more protons. Outer electrons are farther and more shielded, so ionization energy and electronegativity decrease. Fluorine is the most electronegative element; cesium/francium the least (excluding noble gases)."],
            ],
            formulas: [
              ["Trend", "Radius: $\\downarrow$ across, $\\uparrow$ down"],
              ["IE/EN", "$\\uparrow$ across, $\\downarrow$ down"],
            ],
            worked: {
              problem: "Rank Na, Mg, Al by atomic radius (same period).",
              solution: "Radius decreases across a period: Na $>$ Mg $>$ Al — each added proton pulls electrons tighter.",
            },
            questions: [
              mcq("foundation", 1, "Atomic radius generally ___.", [["a", "increases across a period"], ["b", "decreases across a period"], ["c", "stays constant"], ["d", "depends only on mass"]], "b",
                [P("theorem", "Periodic trend", "$Z_{eff}$ increases across a period.")],
                [S("More protons in the same shell pull electrons closer — radius shrinks left to right.", 1, "M")], "Decreases across", ["Thinking more electrons always means bigger atoms."]),
              mcq("core", 1, "Which has the highest electronegativity: F, Cl, or Br?", [["a", "Br"], ["b", "Cl"], ["c", "F"], ["d", "They are equal"]], "c",
                [P("theorem", "EN trend", "EN increases across and decreases down.")],
                [S("F is top-right of the halogens — smallest atom, least shielding, highest EN.", 1, "M")], "F", ["Thinking heavier halogens are more electronegative."]),
              num("core", 2, "Ionization energy of Li is $520$ kJ/mol and Na is $496$ kJ/mol. Which is easier to ionize? Answer 1 for Li, 2 for Na.", [{ label: "Easier", answer: 2 }],
                [P("theorem", "IE trend", "IE decreases down a group.")],
                [S("Na is below Li — its valence electron is farther and more shielded, so easier to remove: Na (2).", 1, "M"), S("$2$.", 1, "B")], "$2$ (Na)", ["Reversing the down-group trend."]),
              op("challenge", 3, "Explain why noble gases have the highest ionization energies in their periods.",
                [P("concept", "Stable octet", "Full valence shell resists electron loss."), P("theorem", "Trend", "IE increases across periods.")],
                [S("Noble gases have completely filled valence shells — maximum stability.", 1, "M"), S("They also have the highest $Z_{eff}$ in their period, pulling electrons tightest.", 1, "M"), S("Both factors make electron removal hardest — hence peak IE before the period resets.", 1, "B")], "Full shell + highest $Z_{eff}$ in period", ["Only citing the octet without the nuclear charge factor."]),
            ],
          }),
        lesson("intermolecular-forces", "Intermolecular Forces and Properties", "I CAN compare IMF types and predict physical properties.", ["IMF-1"],
          [["IMF", "Forces BETWEEN molecules — weaker than bonds, determine physical properties."], ["London dispersion", "Temporary dipoles in all molecules; strength grows with molar mass/polarizability."], ["Dipole-dipole", "Attraction between permanent dipoles — polar molecules only."], ["Hydrogen bonding", "Strong dipole-dipole between H bonded to N, O, or F."], ["Ion-dipole", "Attraction between ions and polar molecules — dissolving salts."], ["Viscosity/surface tension", "Properties that increase with IMF strength."]],
          {
            title: "Intermolecular forces",
            skill: "Rank substances by boiling point, solubility, and physical properties.",
            sections: [
              ["Force hierarchy", "**Ion-dipole** (strongest, for dissolving) $>$ **hydrogen bonding** $>$ **dipole-dipole** $>$ **London dispersion** (weakest, universal). Hydrogen bonding requires H bonded to N/O/F — explains water's unusually high boiling point ($100^\\circ$C vs $\\sim -60^\\circ$C expected)."],
              ["Property predictions", "Stronger IMFs mean higher boiling/melting points, greater viscosity, higher surface tension. For nonpolar substances, larger molar mass means stronger London forces and higher boiling points — why $I_2$ is solid while $Cl_2$ is gas."],
            ],
            formulas: [
              ["IMF order", "Ion-dipole $>$ H-bond $>$ dipole-dipole $>$ London"],
              ["H-bond requirement", "H bonded to N, O, or F"],
            ],
            worked: {
              problem: "Rank $H_2O$, $H_2S$, $CH_4$ by boiling point.",
              solution: "$H_2O$ ($100^\\circ$C, hydrogen bonding) $>$ $H_2S$ ($-60^\\circ$C, dipole-dipole) $>$ $CH_4$ ($-161^\\circ$C, only London). Hydrogen bonding dominates.",
            },
            questions: [
              mcq("foundation", 1, "Which IMF is present in ALL molecules?", [["a", "Hydrogen bonding"], ["b", "London dispersion"], ["c", "Dipole-dipole"], ["d", "Ion-dipole"]], "b",
                [P("theorem", "London forces", "Temporary dipoles occur in every molecule.")],
                [S("London dispersion forces are universal; the others require polarity or ions.", 1, "M")], "London dispersion", ["Thinking only polar molecules have IMFs."]),
              mcq("core", 1, "Why does water have an unusually high boiling point?", [["a", "Strong London forces"], ["b", "Hydrogen bonding"], ["c", "High molar mass"], ["d", "Ionic bonding"]], "b",
                [P("theorem", "H-bonding", "O-H bonds enable strong intermolecular hydrogen bonds.")],
                [S("Each water molecule H-bonds to neighbors — much stronger than typical dipole forces, raising bp dramatically.", 1, "M")], "Hydrogen bonding", ["Attributing it to molar mass — $H_2S$ has similar mass but lower bp."]),
              num("core", 2, "Which has the higher boiling point: $Br_2$ (M = 160) or $I_2$ (M = 254)? Answer 1 for $Br_2$, 2 for $I_2$.", [{ label: "Higher bp", answer: 2 }],
                [P("theorem", "London forces", "Strength scales with molar mass/polarizability.")],
                [S("$I_2$ is larger and more polarizable — stronger London forces, higher bp: $I_2$ (2).", 1, "M"), S("$2$.", 1, "B")], "$2$ ($I_2$)", ["Ignoring molar mass in London force comparisons."]),
              op("challenge", 3, "Explain why NaCl dissolves in water but not in hexane, using IMF concepts.",
                [P("concept", "Ion-dipole", "Water's polarity attracts ions strongly."), P("concept", "'Like dissolves like'", "Nonpolar hexane can't solvate ions.")],
                [S("NaCl is ionic — dissolving requires ion-dipole forces between $Na^+$/$Cl^-$ and polar water molecules.", 1, "M"), S("Water's partial charges hydrate the ions, overcoming the lattice energy.", 1, "M"), S("Hexane is nonpolar — only weak London forces, cannot compete with ionic lattice, so NaCl won't dissolve.", 1, "B")], "Water's ion-dipole hydration vs hexane's weak London forces", ["Saying 'like dissolves like' without explaining the mechanism."]),
            ],
          }),
      ],
    },
    {
      id: "apch-u2",
      title: "Chemical Reactions, Kinetics, and Equilibrium",
      description: "Reaction types, stoichiometry, rate laws, equilibrium, and acid-base chemistry.",
      lessons: [
        lesson("reaction-types-stoichiometry", "Reaction Types and Stoichiometry", "I CAN classify reactions and solve stoichiometric problems.", ["RXN-1"],
          [["Synthesis", "$A + B \\to AB$ — combine into one product."], ["Decomposition", "$AB \\to A + B$ — one reactant splits."], ["Combustion", "Hydrocarbon + $O_2 \\to CO_2 + H_2O$ — releases energy."], ["Single replacement", "$A + BC \\to AC + B$."], ["Double replacement", "$AB + CD \\to AD + CB$ — often forms precipitate/gas/water."], ["Mole ratio", "Coefficients in a balanced equation give mole proportions."]],
          {
            title: "Reactions and stoichiometry",
            skill: "Balance equations and use mole ratios to compute quantities.",
            sections: [
              ["Reaction types", "Classify by pattern: **synthesis** (many-to-one), **decomposition** (one-to-many), **combustion** (fuel + $O_2$), **single/double replacement** (swap partners). Double replacements often produce a precipitate, gas, or water — the driving force."],
              ["Stoichiometry", "Balanced equations give **mole ratios** from coefficients. Convert grams $\\leftrightarrow$ moles via molar mass, use ratios to find unknown quantities, then convert back. The **limiting reagent** runs out first and determines actual yield; percent yield = actual/theoretical $\\times 100\\%$."],
            ],
            formulas: [
              ["Mole ratio", "Coefficients = mole proportions"],
              ["Percent yield", "$\\frac{\\text{actual}}{\\text{theoretical}} \\times 100\\%$"],
            ],
            worked: {
              problem: "$2H_2 + O_2 \\to 2H_2O$. How many moles of $O_2$ react with $6$ mol $H_2$?",
              solution: "Ratio $H_2 : O_2 = 2:1$, so $6$ mol $H_2$ needs $6 \\times \\frac{1}{2} = 3$ mol $O_2$.",
            },
            questions: [
              mcq("foundation", 1, "$CH_4 + 2O_2 \\to CO_2 + 2H_2O$ is a ___.", [["a", "decomposition"], ["b", "combustion"], ["c", "single replacement"], ["d", "synthesis"]], "b",
                [P("definition", "Combustion", "Hydrocarbon burning in oxygen.")],
                [S("Methane reacting with $O_2$ to give $CO_2 + H_2O$ is combustion.", 1, "M")], "Combustion", ["Classifying by number of reactants instead of the reaction pattern."]),
              mcq("core", 1, "In $2H_2 + O_2 \\to 2H_2O$, how many moles of water form from $4$ mol $H_2$?", [["a", "$2$"], ["b", "$4$"], ["c", "$8$"], ["d", "$1$"]], "b",
                [P("method", "Mole ratio", "$H_2 : H_2O = 2:2 = 1:1$.")],
                [S("$4$ mol $H_2$ produces $4$ mol $H_2O$ (1:1 ratio).", 1, "M")], "$4$ mol", ["Using the $O_2$ coefficient or misreading the ratio."]),
              num("core", 2, "Molar mass of $H_2O = 18$ g/mol. How many grams of water form from $2$ mol $H_2$ (complete reaction)? Enter grams.", [{ label: "Grams", answer: 36 }],
                [P("method", "Stoichiometry", "2 mol $H_2 \\to 2$ mol $H_2O$; $2 \\times 18$.")],
                [S("$2$ mol $H_2O \\times 18$ g/mol $= 36$ g.", 1, "M"), S("$36$ g.", 1, "B")], "$36$ g", ["Using $O_2$'s molar mass or halving the moles."]),
              op("challenge", 3, "Explain what a limiting reagent is and how it affects percent yield.",
                [P("definition", "Limiting reagent", "Runs out first, caps product amount."), P("concept", "Percent yield", "Actual/theoretical $\\times 100$."), P("concept", "Excess reagent", "Left over after reaction completes.")],
                [S("The limiting reagent is consumed first — it determines the maximum (theoretical) product via mole ratios.", 1, "M"), S("The other reagent is in excess and remains partially unreacted.", 1, "M"), S("Actual yield is usually below theoretical due to side reactions, losses, or incomplete reaction — percent yield quantifies this.", 1, "B")], "Limiting reagent caps theoretical yield; percent yield measures efficiency", ["Confusing limiting and excess reagents."]),
            ],
          }),
        lesson("kinetics", "Reaction Kinetics", "I CAN write rate laws, determine orders, and analyze activation energy.", ["KIN-1"],
          [["Rate", "Change in concentration per time: $\\text{rate} = -\\frac{d[A]}{dt}$ for reactants."], ["Rate law", "Rate $= k[A]^m[B]^n$ — determined experimentally, not from the equation."], ["Order", "Exponent in the rate law; sum of orders = overall order."], ["Rate constant", "$k$ — depends on temperature, not concentrations."], ["Activation energy", "$E_a$ — minimum energy for reaction; higher $E_a$ = slower."], ["Catalyst", "Lowers $E_a$ without being consumed — speeds reaction."], ["Collision theory", "Reactions need sufficient energy and proper orientation."]],
          {
            title: "Kinetics",
            skill: "Determine rate laws experimentally and explain rate factors.",
            sections: [
              ["Rate laws", "Rate $= k[A]^m[B]^n$ is found by **initial rates** experiments — vary one concentration at a time and see how rate responds. The exponents (orders) are NOT the stoichiometric coefficients. Overall order = sum of exponents; units of $k$ depend on overall order."],
              ["Factors affecting rate", "**Temperature**: raises $k$ exponentially (Arrhenius). **Concentration**: more collisions per time. **Surface area**: more contact for heterogeneous reactions. **Catalysts**: provide alternative pathway with lower $E_a$ — enzymes are biological catalysts. The **activation energy** barrier explains why reactions need energy input even when exothermic."],
            ],
            formulas: [
              ["Rate law", "$\\text{rate} = k[A]^m[B]^n$"],
              ["Arrhenius", "$k = Ae^{-E_a/RT}$"],
              ["Activation energy", "Energy barrier reactants must overcome"],
            ],
            worked: {
              problem: "Rate doubles when $[A]$ doubles and is unchanged when $[B]$ doubles. What is the rate law?",
              solution: "Rate $\\propto [A]^1[B]^0 = k[A]$ — first order in $A$, zero order in $B$. Doubling $A$ doubles rate; $B$ has no effect.",
            },
            questions: [
              mcq("foundation", 1, "The rate law is determined by ___.", [["a", "the balanced equation"], ["b", "experiment"], ["c", "the catalyst"], ["d", "temperature only"]], "b",
                [P("definition", "Rate law", "Exponents found experimentally, not from stoichiometry.")],
                [S("Only initial-rates experiments reveal the true rate law — coefficients can mislead.", 1, "M")], "Experiment", ["Assuming rate law exponents match equation coefficients."]),
              mcq("core", 1, "A catalyst speeds a reaction by ___.", [["a", "raising temperature"], ["b", "lowering activation energy"], ["c", "increasing concentration"], ["d", "shifting equilibrium"]], "b",
                [P("concept", "Catalyst", "Provides alternative pathway with lower $E_a$.")],
                [S("Catalysts don't change $\\Delta H$ or equilibrium — they lower the energy barrier.", 1, "M")], "Lowering activation energy", ["Thinking catalysts are consumed or change thermodynamics."]),
              num("core", 2, "Rate $= k[A]^2$. If $[A]$ triples, by what factor does the rate change? Enter the factor.", [{ label: "Factor", answer: 9 }],
                [P("method", "Rate law", "Rate $\\propto [A]^2$; $3^2 = 9$.")],
                [S("Tripling $[A]$ multiplies rate by $3^2 = 9$ — second-order dependence.", 1, "M"), S("Factor $= 9$.", 1, "B")], "$9$", ["Multiplying by $3$ (first-order thinking) instead of $3^2$."]),
              op("challenge", 3, "Explain why increasing temperature speeds up reactions, referencing both collision frequency and energy.",
                [P("concept", "Collision theory", "More collisions per second at higher T."), P("concept", "Maxwell-Boltzmann", "More molecules exceed $E_a$ at higher T."), P("theorem", "Arrhenius", "$k$ grows exponentially with T.")],
                [S("Higher temperature increases molecular speed — more collisions per unit time.", 1, "M"), S("More importantly, the fraction of molecules with energy $\\ge E_a$ grows exponentially (Arrhenius), so far more successful collisions.", 1, "M"), S("Both effects multiply — small T changes cause large rate changes.", 1, "B")], "More collisions + exponentially more molecules exceed $E_a$", ["Only mentioning 'faster molecules' without the energy distribution argument."]),
            ],
          }),
        lesson("equilibrium-acids", "Chemical Equilibrium and Acids/Bases", "I CAN apply equilibrium principles and classify acids and bases.", ["EQ-1"],
          [["Dynamic equilibrium", "Forward and reverse rates equal — concentrations constant but reactions continue."], ["Equilibrium constant", "$K = \\frac{[products]^{coeff}}{[reactants]^{coeff}}$ — measures position."], ["Le Chatelier", "System shifts to counteract stress: concentration, pressure, temperature."], ["Acid", "Proton donor ($H^+$); Arrhenius: produces $H^+$ in water."], ["Base", "Proton acceptor ($OH^-$ Arrhenius: produces $OH^-$)."], ["pH", "$-\\log[H^+]$ — below $7$ acidic, above $7$ basic."], ["Buffer", "Resists pH change — weak acid + conjugate base pair."]],
          {
            title: "Equilibrium and acids/bases",
            skill: "Predict equilibrium shifts and classify acid-base behavior.",
            sections: [
              ["Equilibrium", "At equilibrium, $Q = K$ and rates balance — it's dynamic, not static. **Le Chatelier's principle**: adding reactant shifts right (more product); increasing pressure shifts toward fewer gas moles; raising temperature shifts toward endothermic direction. $K$ changes only with temperature."],
              ["Acids and bases", "Arrhenius: acids produce $H^+$, bases produce $OH^-$ in water. Brønsted-Lowry: acids donate $H^+$, bases accept $H^+$. **pH** $= -\\log[H^+]$: each unit is a $10\\times$ change in $[H^+]$. Strong acids/bases fully dissociate; weak ones partially. Buffers (weak acid + salt) resist pH change — vital in blood."],
            ],
            formulas: [
              ["Equilibrium constant", "$K = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$"],
              ["pH", "$pH = -\\log[H^+]$; $pOH = -\\log[OH^-]$; $pH + pOH = 14$"],
              ["Le Chatelier", "Shift opposes applied stress"],
            ],
            worked: {
              problem: "$N_2 + 3H_2 \\leftrightarrow 2NH_3$ (exothermic). What happens to $K$ and position if temperature rises?",
              solution: "Raising T shifts equilibrium LEFT (toward reactants, endothermic direction) — less $NH_3$. $K$ decreases since the reaction is exothermic.",
            },
            questions: [
              mcq("foundation", 1, "At equilibrium, the rates of forward and reverse reactions are ___.", [["a", "zero"], ["b", "equal"], ["c", "increasing"], ["d", "different"]], "b",
                [P("definition", "Dynamic equilibrium", "Rates equal — concentrations constant but reactions continue.")],
                [S("At equilibrium, forward rate = reverse rate; both reactions still occur.", 1, "M")], "Equal", ["Thinking equilibrium means reactions stop."]),
              mcq("core", 1, "A solution has $[H^+] = 10^{-3}$ M. Its pH is ___.", [["a", "$11$"], ["b", "$3$"], ["c", "$7$"], ["d", "$10$"]], "b",
                [P("method", "pH", "$pH = -\\log(10^{-3}) = 3$.")],
                [S("$pH = -(-3) = 3$ — acidic.", 1, "M")], "$3$", ["Dropping the negative sign in the log."]),
              num("core", 2, "For $A + B \\leftrightarrow C$ with $K = 10$, at equilibrium $[C] = 0.5$ M and $[A] = [B] = 0.1$ M. Is $Q < K$, $Q = K$, or $Q > K$? Answer 1 for $<$, 2 for $=$, 3 for $>$.", [{ label: "Comparison", answer: 3 }],
                [P("method", "Q vs K", "$Q = \\frac{[C]}{[A][B]} = \\frac{0.5}{0.01} = 50$.")],
                [S("$Q = 50 > K = 10$ — reaction shifts left toward reactants.", 1, "M"), S("$3$ ($Q > K$).", 1, "B")], "$3$ ($Q > K$)", ["Inverting the Q expression or comparing wrong quantities."]),
              op("challenge", 3, "Explain how a buffer maintains stable pH when small amounts of acid or base are added.",
                [P("concept", "Buffer components", "Weak acid HA + conjugate base A$^-$."), P("concept", "Neutralization", "Added $H^+$ consumed by A$^-$; added $OH^-$ consumed by HA.")],
                [S("A buffer contains a weak acid (HA) and its conjugate base (A$^-$) in comparable amounts.", 1, "M"), S("Added strong acid $H^+$ reacts with A$^-$ to form HA — the strong acid is neutralized.", 1, "M"), S("Added strong base $OH^-$ reacts with HA to form A$^-$ and water — similarly neutralized. pH stays nearly constant until buffer capacity is exhausted.", 1, "B")], "Weak acid/conjugate base pair neutralizes added $H^+$ or $OH^-$", ["Saying buffers 'absorb' acid without the chemical mechanism."]),
            ],
          }),
      ],
    },
    {
      id: "apch-u3",
      title: "Thermodynamics, Electrochemistry, and Nuclear Chemistry",
      description: "Enthalpy, entropy, Gibbs free energy, electrochemistry, and nuclear processes.",
      lessons: [
        lesson("thermodynamics", "Thermodynamics: Enthalpy, Entropy, Gibbs", "I CAN apply $\\Delta H$, $\\Delta S$, and $\\Delta G$ to predict spontaneity.", ["THM-1"],
          [["Enthalpy", "$\\Delta H$ — heat change at constant pressure; exothermic $<0$, endothermic $>0$."], ["Entropy", "$\\Delta S$ — disorder/randomness change; positive = more disorder."], ["Gibbs free energy", "$\\Delta G = \\Delta H - T\\Delta S$ — spontaneity criterion."], ["Spontaneous", "$\\Delta G < 0$ — proceeds without outside energy input."], ["Nonspontaneous", "$\\Delta G > 0$ — requires energy input."], ["Hess's law", "Total $\\Delta H$ is path-independent — sum of steps."]],
          {
            title: "Thermodynamics",
            skill: "Predict spontaneity from $\\Delta H$, $\\Delta S$, and temperature.",
            sections: [
              ["Energy changes", "$\\Delta H < 0$ (exothermic) releases heat — energetically favorable. $\\Delta S > 0$ increases disorder — entropically favorable. Neither alone guarantees spontaneity; $\\Delta G = \\Delta H - T\\Delta S$ combines both."],
              ["Spontaneity rules", "$\\Delta G < 0$ spontaneous. Sign depends on temperature: exothermic + entropy increase ($\\Delta H<0, \\Delta S>0$) is spontaneous at ALL temperatures; endothermic + entropy decrease is never spontaneous; the mixed cases depend on whether $T\\Delta S$ or $\\Delta H$ dominates."],
            ],
            formulas: [
              ["Gibbs", "$\\Delta G = \\Delta H - T\\Delta S$"],
              ["Spontaneous", "$\\Delta G < 0$"],
            ],
            worked: {
              problem: "$\\Delta H = -50$ kJ, $\\Delta S = +0.1$ kJ/K, $T = 298$ K. Is the reaction spontaneous?",
              solution: "$\\Delta G = -50 - 298(0.1) = -50 - 29.8 = -79.8$ kJ $< 0$ — spontaneous (both factors favorable).",
            },
            questions: [
              mcq("foundation", 1, "A reaction is spontaneous when ___.", [["a", "$\\Delta G > 0$"], ["b", "$\\Delta G < 0$"], ["c", "$\\Delta H > 0$"], ["d", "$\\Delta S < 0$"]], "b",
                [P("definition", "Spontaneity", "$\\Delta G$ determines spontaneity.")],
                [S("Negative $\\Delta G$ means the process proceeds without energy input.", 1, "M")], "$\\Delta G < 0$", ["Confusing spontaneity with reaction rate."]),
              mcq("core", 1, "For a reaction with $\\Delta H < 0$ and $\\Delta S > 0$, spontaneity is ___.", [["a", "never"], ["b", "always"], ["c", "only at high T"], ["d", "only at low T"]], "b",
                [P("theorem", "Gibbs", "$\\Delta G = \\Delta H - T\\Delta S$: both terms negative $\\Rightarrow$ always negative.")],
                [S("$\\Delta H < 0$ and $-T\\Delta S < 0$ (since $\\Delta S > 0$) — $\\Delta G < 0$ at all temperatures.", 1, "M")], "Always spontaneous", ["Thinking temperature matters when both factors align."]),
              num("core", 2, "$\\Delta H = +40$ kJ, $\\Delta S = +0.2$ kJ/K. At what temperature does $\\Delta G = 0$? Enter K.", [{ label: "$T$", answer: 200 }],
                [P("method", "Set $\\Delta G = 0$", "$\\Delta H = T\\Delta S \\Rightarrow T = \\frac{\\Delta H}{\\Delta S}$.")],
                [S("$T = \\frac{40}{0.2} = 200$ K — above this, entropy term dominates and reaction becomes spontaneous.", 1, "M"), S("$T = 200$ K.", 1, "B")], "$200$ K", ["Dividing in the wrong order or sign error."]),
              op("challenge", 3, "Explain why ice melting at room temperature is spontaneous despite being endothermic ($\\Delta H > 0$).",
                [P("concept", "Entropy", "Solid $\\to$ liquid increases disorder.")],
                [S("Melting ice has $\\Delta H > 0$ (endothermic) but $\\Delta S > 0$ — liquid water is more disordered than ice.", 1, "M"), S("At room temperature ($\\sim 298$ K), the $T\\Delta S$ term exceeds $\\Delta H$: $\\Delta G = \\Delta H - T\\Delta S < 0$.", 1, "M"), S("Entropy drives spontaneity even against enthalpy — heat from surroundings supplies the energy.", 1, "B")], "$\\Delta G < 0$ via entropy term dominating", ["Claiming endothermic reactions can't be spontaneous."]),
            ],
          }),
        lesson("electrochemistry", "Electrochemistry", "I CAN balance redox reactions and predict electrochemical cells.", ["ELC-1"],
          [["Oxidation", "Loss of electrons — oxidation number increases."], ["Reduction", "Gain of electrons — oxidation number decreases."], ["Redox", "Simultaneous oxidation and reduction."], ["Anode", "Electrode where oxidation occurs (negative in voltaic, positive in electrolytic)."], ["Cathode", "Electrode where reduction occurs (positive in voltaic, negative in electrolytic)."], ["Voltaic cell", "Spontaneous redox generating electrical energy."], ["Electrolytic cell", "Nonspontaneous redox driven by external power."]],
          {
            title: "Electrochemistry",
            skill: "Identify redox processes and cell types.",
            sections: [
              ["Redox basics", "Oxidation = electron loss (OIL RIG), reduction = electron gain. Balance half-reactions separately: balance atoms, then add electrons to balance charge, then combine so electrons cancel. In a **voltaic** cell, spontaneous redox produces current — anode is negative (oxidation), cathode positive (reduction)."],
              ["Cell types", "**Voltaic** (galvanic): $\\Delta G < 0$, $E > 0$, spontaneous — batteries. **Electrolytic**: $\\Delta G > 0$, driven by external voltage — electrolysis, charging. **Concentration cells**: same electrodes, different concentrations generate voltage."],
            ],
            formulas: [
              ["OIL RIG", "Oxidation Is Loss, Reduction Is Gain of electrons"],
              ["Cell potential", "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$"],
            ],
            worked: {
              problem: "Zinc metal in $CuSO_4$ solution: $Zn + Cu^{2+} \\to Zn^{2+} + Cu$. Which is oxidized?",
              solution: "Zn goes $0 \\to +2$ (loses electrons = oxidized, anode). $Cu^{2+}$ goes $+2 \\to 0$ (gains electrons = reduced, cathode). Zinc dissolves, copper plates out — spontaneous voltaic.",
            },
            questions: [
              mcq("foundation", 1, "In a voltaic cell, oxidation occurs at the ___.", [["a", "cathode"], ["b", "anode"], ["c", "salt bridge"], ["d", "electrolyte"]], "b",
                [P("definition", "Anode", "Oxidation always occurs at the anode.")],
                [S("Anode = oxidation in both cell types; it's the negative electrode in voltaic cells.", 1, "M")], "Anode", ["Memorizing 'anode = negative' which flips for electrolytic cells — remember anode = oxidation."]),
              mcq("core", 1, "$Zn \\to Zn^{2+} + 2e^-$ is ___.", [["a", "reduction"], ["b", "oxidation"], ["c", "neutralization"], ["d", "disproportionation"]], "b",
                [P("definition", "Oxidation", "Loss of electrons; oxidation number rises $0 \\to +2$.")],
                [S("Zn loses electrons — oxidation.", 1, "M")], "Oxidation", ["Thinking gaining positive charge means reduction."]),
              num("core", 2, "In $2Al + 3Cu^{2+} \\to 2Al^{3+} + 3Cu$, how many electrons does each Al atom lose? Enter the number.", [{ label: "Electrons", answer: 3 }],
                [P("method", "Oxidation number", "Al: $0 \\to +3$ loses $3$ electrons.")],
                [S("Aluminum goes from $0$ to $+3$ — each Al loses $3$ electrons.", 1, "M"), S("$3$.", 1, "B")], "$3$", ["Using the coefficient $2$ instead of the charge change."]),
              op("challenge", 3, "Distinguish voltaic and electrolytic cells in terms of spontaneity, electrode signs, and energy flow.",
                [P("comparison", "Voltaic", "Spontaneous, $E > 0$, chemical $\\to$ electrical energy."), P("comparison", "Electrolytic", "Nonspontaneous, external power, electrical $\\to$ chemical energy.")],
                [S("Voltaic: $\\Delta G < 0$, spontaneous redox produces current; anode negative, cathode positive; batteries.", 1, "M"), S("Electrolytic: $\\Delta G > 0$, external voltage drives nonspontaneous reaction; anode positive, cathode negative; electrolysis/charging.", 1, "M"), S("Key insight: anode is ALWAYS oxidation but its charge sign flips between cell types.", 1, "B")], "Voltaic = spontaneous/chemical→electrical; electrolytic = driven/electrical→chemical", ["Swapping the electrode signs or energy directions."]),
            ],
          }),
        lesson("nuclear-chemistry", "Nuclear Chemistry", "I CAN describe radioactive decay and apply half-life calculations.", ["NUC-1"],
          [["Radioactive decay", "Unstable nucleus emits particles/energy to reach stability."], ["Alpha decay", "$^4_2He$ emission — reduces $A$ by $4$, $Z$ by $2$."], ["Beta decay", "Neutron $\\to$ proton + electron ($\\beta^-$); $A$ same, $Z$ increases by $1$."], ["Gamma decay", "High-energy photon emission; no change in $A$ or $Z$."], ["Half-life", "Time for half the radioactive nuclei to decay — constant for each isotope."], ["Fission", "Heavy nucleus splits releasing energy — power plants, bombs."], ["Fusion", "Light nuclei combine releasing energy — sun, stars."]],
          {
            title: "Nuclear processes",
            skill: "Identify decay types and compute remaining quantities over time.",
            sections: [
              ["Decay types", "**Alpha** ($^4_2He$): heavy nuclei, reduces mass by $4$ and charge by $2$. **Beta** ($\\beta^-$): neutron converts to proton, $Z$ rises by $1$, $A$ unchanged. **Gamma**: pure energy, no particle change. Decay series continue until a stable isotope forms."],
              ["Half-life", "After each half-life $t_{1/2}$, half the remaining nuclei decay: $N = N_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$. Carbon-14 ($t_{1/2} = 5730$ yr) powers radiocarbon dating; iodine-131 treats thyroid cancer; cobalt-60 sterilizes equipment."],
            ],
            formulas: [
              ["Decay equation", "$N = N_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$"],
              ["Alpha", "$^A_Z X \\to ^{A-4}_{Z-2}Y + ^4_2He$"],
              ["Beta", "$^A_Z X \\to ^A_{Z+1}Y + \\beta^-$"],
            ],
            worked: {
              problem: "$^{238}_{92}U$ undergoes alpha decay. What's the product?",
              solution: "$A: 238 - 4 = 234$; $Z: 92 - 2 = 90$ (thorium). Product: $^{234}_{90}Th$.",
            },
            questions: [
              mcq("foundation", 1, "Alpha decay reduces mass number by ___.", [["a", "$2$"], ["b", "$4$"], ["c", "$1$"], ["d", "$0$"]], "b",
                [P("definition", "Alpha particle", "$^4_2He$ — 4 nucleons, 2 protons.")],
                [S("Alpha emission removes $4$ mass units and $2$ charge units.", 1, "M")], "$4$", ["Thinking alpha is just 2 protons — it's the whole helium nucleus."]),
              mcq("core", 1, "After beta-minus decay, the atomic number ___.", [["a", "decreases by 1"], ["b", "increases by 1"], ["c", "stays same"], ["d", "decreases by 2"]], "b",
                [P("method", "Beta decay", "Neutron $\\to$ proton + electron; $Z$ rises by $1$.")],
                [S("$A$ unchanged but $Z$ increases by $1$ — a neutron became a proton.", 1, "M")], "Increases by 1", ["Thinking mass number changes or charge decreases."]),
              num("core", 2, "Carbon-14 half-life is $5730$ yr. A sample has $100$ g; how much remains after $11460$ yr (2 half-lives)? Enter grams.", [{ label: "Remaining", answer: 25 }],
                [P("method", "Half-life", "$100 \\times (\\frac{1}{2})^2$.")],
                [S("$100 \\times \\frac{1}{4} = 25$ g remain.", 1, "M"), S("$25$ g.", 1, "B")], "$25$ g", ["Halving only once or using the wrong exponent."]),
              op("challenge", 3, "Distinguish nuclear fission and fusion, giving one application of each.",
                [P("comparison", "Fission", "Heavy nucleus splits; chain reaction; power plants/bombs."), P("comparison", "Fusion", "Light nuclei combine; needs extreme T/pressure; sun/experimental reactors.")],
                [S("Fission: heavy nuclei like $^{235}U$ split into lighter fragments + neutrons, releasing energy; used in nuclear reactors and atomic weapons.", 1, "M"), S("Fusion: light nuclei like hydrogen isotopes combine into helium, releasing enormous energy; powers the sun and stars, requires millions of degrees.", 1, "M"), S("Key difference: fission splits heavy, fusion joins light — both convert mass to energy via $E = mc^2$.", 1, "B")], "Fission = split heavy (reactors); fusion = join light (sun)", ["Swapping the processes or applications."]),
            ],
          }),
      ],
    },
  ],
};

module.exports = { courses: [apChemistry] };
