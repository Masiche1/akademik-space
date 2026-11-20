# Pearson Edexcel Science, Years 8-11: content plan and rules

Read `src/content/AUTHORING.md` first (shape, quality bar, LaTeX rules, verification) and `src/content/types.ts`.
Quality reference for file shape: `src/content/courses/edx-maths-y8/unit-1/lesson-1-1.ts` (read it).
This file ADDS the science rules. Where they differ from AUTHORING.md, this file wins.

## Courses (folder = course id)
- Key Stage 3 (Pearson Edexcel International Lower Secondary Science): `edx-science-y8`, `edx-science-y9`.
  Units: unit-1 Biology, unit-2 Chemistry, unit-3 Physics.
- International GCSE (9-1): `edx-biology-y10`, `edx-biology-y11` (4BI1), `edx-chemistry-y10`, `edx-chemistry-y11` (4CH1),
  `edx-physics-y10`, `edx-physics-y11` (4PH1). Units are listed in the plan sections below.
- Unit folders `src/content/courses/<course-id>/unit-N/`. Unit index exports `unitN` (`code: "N"`). Lesson files
  `lesson-N-M.ts` export `lessonNM` (`code: "N-M"`). Do NOT create or edit the course `index.ts`.
- Id prefixes (unit, lesson, concept, question): Science Y8 `esc8-uN-`, Y9 `esc9-uN-`; Biology `ebi10-uN-`, `ebi11-uN-`;
  Chemistry `ech10-uN-`, `ech11-uN-`; Physics `eph10-uN-`, `eph11-uN-`. Unit id e.g. `esc8-u2`. Question ids `<prefix><concept-slug>-q1` .. `-q4`.
- Science is NOT tiered (4BI1, 4CH1 and 4PH1 are untiered): never set `tier` or `paper`.

## Shape (tests enforce)
- 3 lessons per unit, 2 concepts per lesson, exactly 4 questions per concept:
  1. q1 foundation, 1-2 marks, usually `mcq` (identify a structure, state a definition, pick the correct unit). Distractors are real misconceptions.
  2. q2 core, 2-4 marks, `numeric` (a calculation) or `mcq` or `open` (describe / explain).
  3. q3 challenge, 3-6 marks, `open` or `numeric` (explain a result, multi-step calculation, evaluate a method).
  4. q4 structured, 3-5 parts building in demand, total 7-12 marks, mixing recall, a calculation, practical/data analysis and an explanation.
     `response` is `numeric` if every part has a numeric answer, otherwise `open`.
- Step marks MUST sum to totalMarks, and per part to that part's marks (every step of a structured question has `part`).
- Mark codes: `B` for an independent marking point (most describe/explain marks), `M` method and `A` accuracy for calculations,
  `R` for a reasoned conclusion or justification. In `examinerNote` use Edexcel conventions: "allow", "ignore", "reject", "oe", "ecf" (error carried forward).
- `principles` (1-4): use kind `law` (Newton's laws, conservation of mass/energy), `formula` (equations such as $v = f\\lambda$, moles = mass / $M_r$),
  `definition`, `principle` (e.g. diffusion down a concentration gradient, collision theory), `property`.
- Calculations: show the equation, substitution and answer with units in `working` (raw LaTeX, e.g. `"P = \\frac{E}{t} = \\frac{3600}{120} = 30\\text{ W}"`).
  Give `unit` on numeric parts and `tolerance` when rounding. State in the stem how to round (e.g. "Give your answer to 2 significant figures").
- Use Edexcel command words: State, Name, Give, Describe, Explain, Calculate, Suggest, Evaluate, Compare, Determine, Show that, Sketch, Plot.
- Include practical skills: variables (independent, dependent, control), reliability and repeats, anomalous results, risk, reading tables and graphs described in words.
- Equations and formulae: chemistry formulas and equations in math, e.g. `$\\text{CO}_2$`, `$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$`, `$\\text{Na}^+$`. Units: `$\\text{m/s}$`, `$\\text{kg/m}^3$`, `$\\text{J}$`.
- British English: "colour", "fibre", "sulfur", "aluminium", "litre", "metres", "vaporise". No emojis. Money (rare) as `$\\$12$` or £12.
- Every number must be verified. Every chemistry equation must balance. Recheck every answer and distractor.
- Lessons: 2-3 teaching sections, `keyFormulas` (equations, definitions or key facts), and a fully worked example.
- Lesson `standards`: Years 8-9 strand refs e.g. `"KS3 Biology"`, `"KS3 Working Scientifically"`; Years 10-11 4BI1/4CH1/4PH1 specification point numbers e.g. `"4BI1 2.15"`, `"4CH1 1.31"`, `"4PH1 1.5"`. 4-7 vocabulary terms per lesson.

## Unit plan ((a) and (b) are the two concepts of each lesson)

### edx-science-y8 Year 8 Science (KS3)
- unit-1 "Biology: Cells, Organisms and Ecosystems": 1-1 Cells (a) plant and animal cell structures and their functions (b) using a microscope and magnification = image size / actual size; 1-2 Organisation and Diffusion (a) specialised cells, tissues, organs and systems (b) diffusion; 1-3 Ecosystems (a) food chains, food webs and energy transfer (b) adaptation and interdependence
- unit-2 "Chemistry: Particles and Reactions": 2-1 Particle Model (a) solids, liquids and gases (b) changes of state, melting and boiling points; 2-2 Elements, Compounds and Mixtures (a) atoms, elements and compounds, simple formulae (b) separating mixtures: filtration, evaporation, distillation, chromatography; 2-3 Chemical Reactions (a) word equations, conservation of mass (b) acids, alkalis, pH and neutralisation
- unit-3 "Physics: Forces, Energy and Electricity": 3-1 Forces (a) contact and non-contact forces, resultant force (b) speed = distance / time; 3-2 Energy (a) energy stores and transfers, conservation of energy (b) power and energy costs, efficiency; 3-3 Electricity (a) series and parallel circuits, current and voltage (b) resistance, $V = IR$

### edx-science-y9 Year 9 Science (KS3)
- unit-1 "Biology: Body Systems and Inheritance": 1-1 Nutrition and Digestion (a) a balanced diet and food tests (b) digestive system and enzymes; 1-2 Breathing and Respiration (a) gas exchange in the lungs (b) aerobic and anaerobic respiration; 1-3 Inheritance and Variation (a) DNA, genes and chromosomes, inherited and environmental variation (b) natural selection and evolution
- unit-2 "Chemistry: Atoms and the Periodic Table": 2-1 Atomic Structure (a) protons, neutrons, electrons, atomic and mass number (b) electron arrangement; 2-2 The Periodic Table (a) groups, periods, metals and non-metals (b) Group 1, Group 7 and Group 0 trends; 2-3 Reactions of Metals (a) the reactivity series and displacement (b) metals with acids and oxygen, test for hydrogen
- unit-3 "Physics: Waves, Pressure and Space": 3-1 Waves (a) transverse and longitudinal waves, wave speed $v = f\\lambda$ (b) sound and light, reflection and refraction; 3-2 Pressure and Moments (a) pressure = force / area, pressure in fluids (b) moments and the principle of moments; 3-3 Space and Magnetism (a) gravity, weight $W = mg$, the solar system (b) magnets, magnetic fields and electromagnets

### edx-biology-y10 Year 10 Biology (4BI1, first year)
- unit-1 "Organisms and Life Processes": 1-1 (a) characteristics of living organisms and variety of organisms (b) cell structure, specialisation and stem cells; 1-2 (a) biological molecules and food tests (b) enzymes: temperature and pH; 1-3 (a) diffusion, osmosis and active transport (b) surface area to volume ratio
- unit-2 "Nutrition and Transport": 2-1 (a) photosynthesis and limiting factors (b) leaf structure and mineral ions; 2-2 (a) human diet and digestion (b) absorption and energy in food (calorimetry); 2-3 (a) the heart and blood vessels (b) blood and transport in plants (xylem, phloem, transpiration)
- unit-3 "Respiration, Gas Exchange and Excretion": 3-1 (a) aerobic and anaerobic respiration (b) respiration practical: respirometers; 3-2 (a) gas exchange in humans and the effect of exercise (b) gas exchange in plants; 3-3 (a) the kidney and nephron (b) osmoregulation and ADH

### edx-biology-y11 Year 11 Biology (4BI1, second year)
- unit-1 "Coordination and Response": 1-1 (a) the nervous system and reflex arc (b) the eye; 1-2 (a) hormones and the endocrine system (b) blood glucose control and thermoregulation; 1-3 (a) plant tropisms and auxin (b) homeostasis summary questions
- unit-2 "Reproduction and Inheritance": 2-1 (a) sexual and asexual reproduction, flowering plants (b) human reproduction and the menstrual cycle; 2-2 (a) DNA, genes, mitosis and meiosis (b) monohybrid inheritance and genetic diagrams, pedigrees; 2-3 (a) mutation and variation (b) natural selection and antibiotic resistance
- unit-3 "Ecology and Biotechnology": 3-1 (a) ecosystems, quadrats and sampling (b) food webs, pyramids and energy transfer efficiency; 3-2 (a) carbon and nitrogen cycles (b) human impacts: pollution, deforestation, eutrophication; 3-3 (a) food production: crops, fish farming, fermentation (b) genetic modification and cloning

### edx-chemistry-y10 Year 10 Chemistry (4CH1, first year)
- unit-1 "Principles of Chemistry": 1-1 (a) states of matter and diffusion (b) separating mixtures and chromatography Rf values; 1-2 (a) atomic structure and isotopes, relative atomic mass (b) the periodic table and electron configuration; 1-3 (a) chemical formulae and balanced equations (b) relative formula mass and percentage composition
- unit-2 "Moles and Bonding": 2-1 (a) the mole and reacting masses (b) empirical formulae and percentage yield; 2-2 (a) concentration in mol/dm3 and gas volumes (24 dm3) (b) titration calculations; 2-3 (a) ionic bonding and properties (b) covalent and metallic bonding and properties
- unit-3 "Inorganic Chemistry": 3-1 (a) Group 1 and Group 7 (b) gases in the atmosphere, oxygen and carbon dioxide; 3-2 (a) reactivity series and extraction of metals (b) rusting and its prevention; 3-3 (a) acids, alkalis, salts and preparing salts (b) chemical tests for ions and gases

### edx-chemistry-y11 Year 11 Chemistry (4CH1, second year)
- unit-1 "Physical Chemistry": 1-1 (a) energetics: exothermic and endothermic, energy profiles (b) calorimetry and bond energy calculations; 1-2 (a) rates of reaction and collision theory (b) catalysts and rate practicals; 1-3 (a) reversible reactions and equilibrium (b) Le Chatelier's principle and the Haber process
- unit-2 "Electrolysis and Industrial Chemistry": 2-1 (a) electrolysis of molten and aqueous compounds (b) half equations; 2-2 (a) extraction of aluminium and iron (b) fertilisers and the Contact process; 2-3 (a) metals, alloys and properties (b) evaluating industrial processes
- unit-3 "Organic Chemistry": 3-1 (a) crude oil, fractional distillation and fuels (b) cracking and combustion products; 3-2 (a) alkanes, alkenes and the bromine water test (b) isomers and naming; 3-3 (a) alcohols and carboxylic acids, esters (b) addition and condensation polymers

### edx-physics-y10 Year 10 Physics (4PH1, first year)
- unit-1 "Forces and Motion": 1-1 (a) speed, velocity and acceleration (b) distance-time and velocity-time graphs; 1-2 (a) resultant forces and Newton's laws, $F = ma$ (b) weight, stopping distances and terminal velocity; 1-3 (a) momentum and conservation of momentum (b) moments and Hooke's law
- unit-2 "Electricity": 2-1 (a) current, charge $Q = It$, voltage and resistance (b) series and parallel circuits; 2-2 (a) I-V graphs, LDRs, thermistors and diodes (b) power $P = IV$ and energy $E = IVt$; 2-3 (a) mains electricity, fuses and earthing (b) static electricity
- unit-3 "Waves": 3-1 (a) wave properties and $v = f\\lambda$ (b) reflection, refraction and Snell's law; 3-2 (a) the electromagnetic spectrum, uses and dangers (b) total internal reflection and critical angle; 3-3 (a) sound waves and echoes (b) oscilloscope traces, frequency and period

### edx-physics-y11 Year 11 Physics (4PH1, second year)
- unit-1 "Energy and Solids, Liquids and Gases": 1-1 (a) energy stores, transfers and efficiency (b) work, power and gravitational potential and kinetic energy; 1-2 (a) conduction, convection and radiation (b) density and pressure, $p = h\\rho g$; 1-3 (a) specific heat capacity and changes of state (b) gas laws: pressure, volume, temperature in kelvin
- unit-2 "Magnetism and Electromagnetism": 2-1 (a) magnetic fields and electromagnets (b) the motor effect and Fleming's left-hand rule; 2-2 (a) electromagnetic induction and generators (b) transformers, $\\frac{V_p}{V_s} = \\frac{n_p}{n_s}$ and power transmission; 2-3 (a) electricity generation and energy resources (b) evaluating energy resources
- unit-3 "Radioactivity and Astrophysics": 3-1 (a) atomic structure, isotopes and alpha, beta, gamma (b) nuclear equations and half-life calculations; 3-2 (a) uses and dangers of radiation, fission and fusion (b) contamination and irradiation; 3-3 (a) the solar system, orbits and orbital speed $v = \\frac{2\\pi r}{T}$ (b) the life cycle of stars and red shift

## Verify
- `run_tests` with `files: ["src/content/units.test"]` and `testNamePattern` set to your unit path (e.g. `edx-science-y8/unit-2`). Fix every failure.
- `run_lint` target "eslint", fix errors in your files only.
- Recheck every calculation and every balanced equation once more before finishing.
