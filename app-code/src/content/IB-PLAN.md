# IB Diploma Programme Mathematics: content plan and rules

Read `src/content/AUTHORING.md` first (shape, quality bar, LaTeX rules, verification). This file ADDS the IB rules
and lists every unit. Where they differ, this file wins for IB courses.

## IB-specific rules
- Courses (folder = course id): `ib-aa-sl-1`, `ib-aa-sl-2`, `ib-aa-hl-1`, `ib-aa-hl-2`, `ib-ai-sl-1`, `ib-ai-sl-2`, `ib-ai-hl-1`, `ib-ai-hl-2`.
  Unit folders: `src/content/courses/<course-id>/unit-N/` (Year 1 units 1-3, Year 2 units 4-6). Unit index exports `unitN`, unit `code` is `"N"`.
- HL courses contain ONLY the Additional Higher Level (AHL) content; HL students also study the matching SL core courses.
- Id prefixes (lesson, concept, question): AA SL `aasl-uN-`, AA HL `aahl-uN-`, AI SL `aisl-uN-`, AI HL `aihl-uN-`.
  Question ids: `<prefix><concept-slug>-q1` .. `-q4`.
- Lesson `code`: "N-M" (e.g. "4-2"). `standards`: IB syllabus references written like `"SL 1.2"` or `"AHL 3.14"` (2021 guide, first exams 2021).
- Every question MUST have `paper`:
  - AA (Analysis and Approaches): `"1"` = NO calculator (exact values, clean numbers, surds, $\\pi$, fractions; nothing needing a GDC). `"2"` = GDC allowed.
  - AI (Applications and Interpretation): `"1"` = short response, `"2"` = extended response. Both allow a GDC.
  - `"3"` = HL only: extended problem-solving / investigation, 10-12 marks, structured, leading from specific cases to a generalization or proof.
  - Per concept: q1 (foundation) paper "1"; q2 (core) paper "1" or "2"; q3 (challenge) paper "2" (AA may use "1" when calculator-free);
    q4 (structured): SL courses paper "2" (AA may use "1"); HL courses: in each lesson at least one q4 is paper "3", the other "2".
  - Paper 3 is never used in SL courses.
- Use IB command terms in prompts: "Write down", "Find", "Show that", "Hence", "Hence or otherwise", "Sketch", "Justify", "Prove", "Determine", "Interpret". "Show that" parts must give the answer and the markscheme must show every step (reasoning may say "AG" at the end).
- Mark codes: M (method), A (accuracy, usually dependent on M), R (reasoning). Use B sparingly for independent marks. Mention follow-through (FT) in `examinerNote` where it would apply.
- Rounding: IB answers are to 3 significant figures unless stated otherwise; state the accuracy in the stem and set `tolerance` to match (e.g. 3 s.f. of 12.3 -> 0.05).
- Notation follows the IB guide: $\\log_a x$, $\\ln x$, $f^{-1}(x)$, $(f \\circ g)(x)$, $\\binom{n}{r}$ or ${}^nC_r$, $\\mathrm{P}(A \\mid B)$, $\\mathrm{E}(X)$, $\\mathrm{Var}(X)$, $X \\sim \\mathrm{B}(n, p)$, $X \\sim \\mathrm{N}(\\mu, \\sigma^2)$, $\\mathrm{Po}(m)$, vectors $\\boldsymbol{a}$ or $\\overrightarrow{AB}$ and column vectors with `\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}`.
- For matrices / column vectors in TS strings, the LaTeX row separator `\\` must be written `\\\\`.
- Never put the same key twice in one object (e.g. two `part:` keys) — TypeScript rejects it.

## Unit plan (3 lessons per unit, 2 concepts per lesson: (a) and (b))

### ib-aa-sl-1 — Analysis and Approaches SL, Year 1
- unit-1 "Number and Algebra"
  - 1-1 Sequences and Series: (a) arithmetic sequences and series, sigma notation (SL 1.2) (b) geometric sequences, series and sum to infinity (SL 1.3, SL 1.8)
  - 1-2 Exponents, Logarithms and Finance: (a) laws of exponents and logarithms, change of base, exponential equations (SL 1.5, SL 1.7) (b) compound interest and depreciation (SL 1.4)
  - 1-3 Binomial Theorem and Proof: (a) binomial expansion, ${}^nC_r$, specific terms (SL 1.9) (b) simple deductive proof, LHS to RHS, scientific notation and approximation (SL 1.6, SL 1.1)
- unit-2 "Functions"
  - 2-1 Lines and Function Concepts: (a) lines, gradients, parallel and perpendicular (SL 2.1) (b) domain, range, composite and inverse functions (SL 2.2, SL 2.3, SL 2.5)
  - 2-2 Quadratic and Rational Functions: (a) quadratic forms, discriminant, nature of roots (SL 2.6, SL 2.7) (b) reciprocal and rational functions $\\frac{ax+b}{cx+d}$, asymptotes (SL 2.8)
  - 2-3 Exponential and Logarithmic Functions and Transformations: (a) exponential and log functions, $e$ and $\\ln$, models (SL 2.9) (b) transformations of graphs and solving equations graphically and analytically (SL 2.10, SL 2.11)
- unit-3 "Geometry and Trigonometry"
  - 3-1 Solids and Triangle Trigonometry: (a) 3D distance and midpoint, volume and surface area, angle between line and plane (SL 3.1, SL 3.2) (b) sine rule incl. ambiguous case, cosine rule, area, bearings (SL 3.2, SL 3.3)
  - 3-2 Radians and the Unit Circle: (a) radians, arc length, sector area (SL 3.4) (b) unit circle, exact values, Pythagorean and double angle identities (SL 3.5, SL 3.6)
  - 3-3 Trigonometric Functions and Equations: (a) $a\\sin(b(x+c))+d$ graphs and models (SL 3.7) (b) trig equations on an interval, including quadratic in $\\sin$/$\\cos$ (SL 3.8)

### ib-aa-sl-2 — Analysis and Approaches SL, Year 2
- unit-4 "Statistics and Probability"
  - 4-1 Data and Regression: (a) sampling, measures, quartiles, box plots, outliers, effect of linear transformations (SL 4.1-4.3) (b) Pearson's $r$, regression of $y$ on $x$ and $x$ on $y$ (SL 4.4, SL 4.10)
  - 4-2 Probability: (a) Venn and tree diagrams, conditional probability, independence (SL 4.5, SL 4.6, SL 4.11) (b) discrete random variables, expected value, fair games (SL 4.7)
  - 4-3 Probability Distributions: (a) binomial distribution, mean and variance (SL 4.8) (b) normal distribution, standardization, inverse normal (SL 4.9, SL 4.12)
- unit-5 "Differential Calculus"
  - 5-1 Introduction to Differentiation: (a) limits, derivative as gradient, power rule, increasing/decreasing (SL 5.1, SL 5.2, SL 5.3) (b) tangents and normals (SL 5.4)
  - 5-2 Further Differentiation: (a) derivatives of $\\sin$, $\\cos$, $e^x$, $\\ln x$; chain, product, quotient rules (SL 5.6) (b) second derivative, stationary points, inflection, concavity (SL 5.7, SL 5.8)
  - 5-3 Optimization and Kinematics: (a) optimization (SL 5.8) (b) kinematics: displacement, velocity, acceleration (SL 5.9)
- unit-6 "Integral Calculus"
  - 6-1 Antiderivatives: (a) indefinite integrals of powers, boundary conditions (SL 5.5) (b) integrals of $\\sin$, $\\cos$, $\\frac1x$, $e^x$, linear composites, substitution by inspection (SL 5.10)
  - 6-2 Definite Integrals and Area: (a) definite integrals, area under a curve (SL 5.5, SL 5.11) (b) area between curves (SL 5.11)
  - 6-3 Applications of Integration: (a) distance travelled $\\int |v|\\,dt$, kinematics (SL 5.9, SL 5.11) (b) synthesis problems connecting derivatives and integrals (SL 5.1-5.11)

### ib-aa-hl-1 — Analysis and Approaches HL, Year 1 (AHL content)
- unit-1 "Counting, Proof and Complex Numbers"
  - 1-1 Counting and Binomial Extension: (a) permutations, combinations, counting principles (AHL 1.10) (b) partial fractions and binomial theorem for fractional/negative indices (AHL 1.10, AHL 1.11)
  - 1-2 Complex Numbers: (a) Cartesian form, conjugates, complex roots of polynomials (AHL 1.12, AHL 1.14) (b) modulus-argument and Euler forms, Argand diagram (AHL 1.13)
  - 1-3 Proof and De Moivre's Theorem: (a) induction, contradiction, counterexample (AHL 1.15) (b) De Moivre, powers and $n$th roots (AHL 1.14)
- unit-2 "Further Functions and Trigonometry"
  - 2-1 Polynomials: (a) factor and remainder theorems, division (AHL 2.12) (b) sum and product of roots, polynomial graphs (AHL 2.12)
  - 2-2 Rational Functions, Symmetry and Inequalities: (a) oblique asymptotes, odd/even and self-inverse functions (AHL 2.13, AHL 2.14) (b) inequalities, $|f(x)|$ and $f(|x|)$ (AHL 2.15, AHL 2.16)
  - 2-3 Further Trigonometry: (a) $\\sec$, $\\csc$, $\\cot$, inverse trig functions, Pythagorean identities (AHL 3.9) (b) compound angle identities, $\\tan 2\\theta$, equations (AHL 3.10, AHL 3.11)
- unit-3 "Vectors"
  - 3-1 Vector Basics: (a) magnitude, unit and position vectors (AHL 3.12) (b) scalar product, angles, perpendicularity (AHL 3.13)
  - 3-2 Lines in Three Dimensions: (a) vector and parametric equations of lines, angle between lines (AHL 3.14) (b) intersecting, parallel and skew lines; motion along lines (AHL 3.15)
  - 3-3 Vector Product and Planes: (a) vector product, areas (AHL 3.16) (b) planes, line-plane intersection, angles between line and plane and between planes (AHL 3.17, AHL 3.18)

### ib-aa-hl-2 — Analysis and Approaches HL, Year 2 (AHL content)
- unit-4 "Further Probability and Statistics"
  - 4-1 Bayes' Theorem: (a) Bayes' theorem with two or three events (AHL 4.13) (b) conditional probability with counting methods (AHL 1.10, AHL 4.13)
  - 4-2 Random Variables: (a) discrete variance, $\\mathrm{E}(aX+b)$, $\\mathrm{Var}(aX+b)$ (AHL 4.14) (b) continuous random variables: pdf, mode, median, mean, variance (AHL 4.14)
  - 4-3 Distributions in Depth: (a) multi-stage binomial and normal problems (SL 4.8, SL 4.9, AHL 4.14) (b) investigating a family of pdfs (Paper 3 style) (AHL 4.14)
- unit-5 "Further Differential Calculus"
  - 5-1 Limits, Continuity and First Principles: (a) continuity, differentiability, L'Hopital's rule (AHL 5.12, AHL 5.13) (b) differentiation from first principles (AHL 5.12)
  - 5-2 Further Derivatives: (a) $\\tan$, $\\sec$, $\\csc$, $\\cot$, $a^x$, $\\log_a x$, $\\arcsin$, $\\arccos$, $\\arctan$ (AHL 5.15) (b) implicit differentiation (AHL 5.14)
  - 5-3 Related Rates and Optimization: (a) related rates (AHL 5.14) (b) higher derivatives and HL optimization (AHL 5.12, AHL 5.14)
- unit-6 "Further Integration, Differential Equations and Series"
  - 6-1 Integration Techniques: (a) substitution, $\\frac{1}{a^2+x^2}$ and $\\frac{1}{\\sqrt{a^2-x^2}}$ (AHL 5.15, AHL 5.16) (b) integration by parts incl. repeated (AHL 5.16)
  - 6-2 Volumes and Differential Equations: (a) area with respect to $y$, volumes of revolution (AHL 5.17) (b) separable, homogeneous, integrating factor ODEs and Euler's method (AHL 5.18)
  - 6-3 Maclaurin Series: (a) Maclaurin series by definition, standard series, substitution and products (AHL 5.19) (b) approximations and limits using series, series solutions of differential equations (AHL 5.19)

### ib-ai-sl-1 — Applications and Interpretation SL, Year 1
- unit-1 "Number and Algebra"
  - 1-1 Numbers and Approximation: (a) standard form, rounding, bounds, percentage error (SL 1.1, SL 1.6) (b) laws of exponents, logarithms base 10 and $e$ (SL 1.5)
  - 1-2 Sequences in Context: (a) arithmetic sequences and series in context (SL 1.2, SL 1.3) (b) geometric sequences and series in context (SL 1.3)
  - 1-3 Financial Mathematics: (a) compound interest, depreciation, inflation (SL 1.4) (b) loans, amortization and annuities; systems of linear equations (SL 1.7, SL 1.8)
- unit-2 "Functions and Modelling"
  - 2-1 Linear Models and Function Concepts: (a) linear and piecewise linear models (SL 2.1, SL 2.5) (b) domain, range, inverse, graphs with technology (SL 2.2-SL 2.4)
  - 2-2 Non-linear Models: (a) quadratic models (SL 2.5, SL 2.6) (b) exponential, direct/inverse variation and cubic models (SL 2.5, SL 2.6)
  - 2-3 Periodic Models and the Modelling Process: (a) sinusoidal models (SL 2.5) (b) developing, testing and evaluating models (SL 2.6)
- unit-3 "Geometry and Trigonometry"
  - 3-1 Three-Dimensional Geometry: (a) 3D distance, midpoint, volume and surface area (SL 3.1) (b) angles between lines and between a line and a plane (SL 3.1)
  - 3-2 Trigonometry in Context: (a) right-angled trigonometry, sine and cosine rules, area (SL 3.2) (b) bearings, elevation and depression (SL 3.3)
  - 3-3 Circles and Voronoi Diagrams: (a) arcs, sectors, perpendicular bisectors (SL 3.4, SL 3.5) (b) Voronoi diagrams, adding a site, largest empty circle (SL 3.6)

### ib-ai-sl-2 — Applications and Interpretation SL, Year 2
- unit-4 "Statistics"
  - 4-1 Collecting and Describing Data: (a) sampling methods, data types, bias (SL 4.1) (b) measures, box plots, cumulative frequency, histograms (SL 4.2, SL 4.3)
  - 4-2 Bivariate Data: (a) Pearson's $r$, regression, interpolation and extrapolation (SL 4.4) (b) Spearman's rank correlation (SL 4.10)
  - 4-3 Hypothesis Testing: (a) $\\chi^2$ test for independence (SL 4.11) (b) $\\chi^2$ goodness of fit and the $t$-test (SL 4.11)
- unit-5 "Probability"
  - 5-1 Probability Concepts: (a) theoretical and experimental probability, expected occurrences (SL 4.5) (b) Venn, tree and sample space diagrams, conditional probability (SL 4.6)
  - 5-2 Discrete Distributions: (a) discrete random variables, expected value, fair games (SL 4.7) (b) binomial distribution (SL 4.8)
  - 5-3 The Normal Distribution: (a) normal probabilities with technology (SL 4.9) (b) inverse normal problems in context (SL 4.9)
- unit-6 "Calculus"
  - 6-1 Differentiation: (a) the derivative as a rate of change, power rule incl. negative powers (SL 5.1, SL 5.3) (b) increasing/decreasing, tangents and normals (SL 5.2, SL 5.4)
  - 6-2 Optimization: (a) stationary points, local maxima and minima (SL 5.6) (b) optimization in context (SL 5.7)
  - 6-3 Integration: (a) anti-differentiation, boundary conditions, definite integrals, area (SL 5.5) (b) trapezoidal rule (SL 5.8)

### ib-ai-hl-1 — Applications and Interpretation HL, Year 1 (AHL content)
- unit-1 "Complex Numbers and Matrices"
  - 1-1 Logarithms and Complex Numbers: (a) laws of logarithms, Cartesian complex numbers and operations (AHL 1.9, AHL 1.12) (b) modulus-argument and exponential forms, adding sinusoids (AHL 1.13)
  - 1-2 Matrices: (a) operations, determinants, inverses (AHL 1.14) (b) solving systems with inverse matrices (AHL 1.14)
  - 1-3 Eigenvalues and Eigenvectors: (a) eigenvalues, eigenvectors, characteristic polynomial of 2x2 matrices (AHL 1.15) (b) diagonalization and matrix powers in applications (AHL 1.15)
- unit-2 "Advanced Functions and Modelling"
  - 2-1 Composite, Inverse and Transformed Functions: (a) composite and inverse functions, restricted domains (AHL 2.7) (b) composite transformations of graphs (AHL 2.8)
  - 2-2 Further Models: (a) exponential models with asymptotes, logistic models (AHL 2.9) (b) piecewise, rational and sinusoidal models (AHL 2.9)
  - 2-3 Linearizing Data: (a) log-log and semi-log linearization for $y=ax^b$ and $y=ka^x$ (AHL 2.10) (b) choosing models and $R^2$ (AHL 4.13)
- unit-3 "Vectors and Transformations"
  - 3-1 Vectors and Motion: (a) vectors, position vectors, vector equation of a line (AHL 3.10, AHL 3.11) (b) kinematics with vectors, closest approach (AHL 3.12)
  - 3-2 Scalar and Vector Products: (a) scalar product and angles (AHL 3.13) (b) vector product, areas, components (AHL 3.13)
  - 3-3 Radians and Matrix Transformations: (a) radians, unit circle, identities (AHL 3.7, AHL 3.8) (b) 2D transformations with matrices, area scale factor, compositions (AHL 3.9)

### ib-ai-hl-2 — Applications and Interpretation HL, Year 2 (AHL content)
- unit-4 "Graph Theory"
  - 4-1 Graphs and Adjacency Matrices: (a) terminology, degree, Eulerian and Hamiltonian graphs (AHL 3.14) (b) adjacency matrices, walks, transition matrices for random walks (AHL 3.15)
  - 4-2 Spanning Trees and Route Inspection: (a) Kruskal's and Prim's algorithms (AHL 3.16) (b) Chinese postman problem (AHL 3.16)
  - 4-3 Travelling Salesman Problem: (a) nearest neighbour upper bound (AHL 3.16) (b) deleted vertex lower bound (AHL 3.16)
- unit-5 "Further Statistics and Probability"
  - 5-1 Combinations of Variables and the Poisson Distribution: (a) linear combinations of random variables (AHL 4.14) (b) Poisson distribution (AHL 4.17)
  - 5-2 Estimation and Hypothesis Testing: (a) central limit theorem, confidence intervals (AHL 4.15, AHL 4.16) (b) binomial, Poisson and normal hypothesis tests; type I and II errors (AHL 4.18)
  - 5-3 Markov Chains: (a) transition matrices and state probabilities (AHL 4.19) (b) steady states and long-term behaviour via eigenvectors (AHL 4.19)
- unit-6 "Further Calculus and Differential Equations"
  - 6-1 Further Differentiation: (a) standard derivatives, chain/product/quotient rules, related rates (AHL 5.9) (b) second derivatives, concavity, inflection (AHL 5.10)
  - 6-2 Further Integration: (a) standard integrals, substitution (AHL 5.11) (b) area with respect to $y$, volumes of revolution (AHL 5.12)
  - 6-3 Kinematics and Differential Equations: (a) variable acceleration, setting up and separating differential equations (AHL 5.13, AHL 5.14) (b) slope fields, Euler's method, coupled systems and phase portraits (AHL 5.15-AHL 5.18)

---

# IB Diploma Programme non-mathematics courses: content plan

Same course/unit/lesson/question shape as the maths courses (see AUTHORING.md and the rules above), with these DP additions:
- Course ids: `ib-<subj>-<level>-<year>` where subj is `bio`, `chem`, `phys` (Group 4), `his`, `geo`, `econ`, `bus`, `psych` (Group 3), `lang-a`, `lang-b`, `lang-ab` (Groups 1/2), `arts` subjects (`va`, `music`, `theatre`), and core `tok`, `ee`, `cas`.
- `ib` metadata: `subject` uses the IbSubject union in types.ts; `level` "sl"/"hl" (non-science and DP core courses are "sl" unless HL exists); `year` 1 or 2; HL science courses set `coreCourseIds` to the matching SL course id.
- Id prefixes: `<subj><level>-uN-` e.g. `biosl-u1-`, `chemhl-u2-`, `his-u1-`, `tok-u1-`. Question ids `<prefix><slug>-q1..q4`, unique across the whole catalog.
- `paper`: sciences and Group 3 subjects set `paper` on every question: q1 paper "1"; q2 "1" or "2"; q3 "2"; q4 SL paper "2", HL at least one q4 per lesson paper "3". Language/arts/core courses leave `paper` unset.
- `standards`: syllabus-style tags, e.g. "Paper 1", "Topic A.1", "Paper 2 Section A", "TOK prompt area", "EE research question".
- For Group 4 sciences, HL courses contain ONLY the HL extension (AHL) content; the SL course covers the SL core.
- IB command terms still apply ("Explain", "Discuss", "Analyse", "Evaluate", "To what extent", "Compare", "Distinguish"). Mark codes M/A/R/B as before.
- Language courses: content is in English (the course language is English); focus on skills — text types, analysis, comparative study — rather than teaching another language's grammar.

## Unit plans (3 units per course, 2 concepts per lesson)

### Group 4 — Biology (prefixes biosl-/biohl-, units 1-3 Y1, 4-6 Y2)
- ib-bio-sl-1 "Cell Biology and Genetics" u1: cell ultrastructure/membrane transport; DNA/protein synthesis/inheritance. u2: physiology — enzymes, cell division, homeostasis. u3: ecology — ecosystems, nutrient cycles, populations.
- ib-bio-sl-2 "Continuity and Change" u4: natural selection/evolution evidence; u5: human physiology systems (nervous, endocrine, circulatory, gas exchange); u6: biotechnology/genetic engineering, biodiversity/conservation.
- ib-bio-hl-1/2: AHL — DNA replication detail, transcription/translation mechanisms, meiosis/chromosomes detail, population genetics, communities/ecosystems advanced, human impact evaluation.
### Group 4 — Chemistry (chemsl-/chemhl-)
- ib-chem-sl-1 "Stoichiometry and Bonding" u1: mole concept/empirical formulae; u2: atomic structure/periodic table; u3: bonding/intermolecular forces.
- ib-chem-sl-2 "Reactions and Analysis" u4: stoichiometry/limiting reagent; u5: energetics/kinetics; u6: equilibrium/electrochemistry/organic intro.
- ib-chem-hl-1/2: AHL — quantum model detail, advanced organic mechanisms, kinetics/equilibrium quantitative, thermodynamics, spectroscopy.
### Group 4 — Physics (physsl-/physhl-)
- ib-phys-sl-1 "Mechanics and Thermal Physics" u1: kinematics/forces/Newton; u2: energy/momentum/work; u3: thermal physics/gases.
- ib-phys-sl-2 "Waves, Electricity and Modern Physics" u4: waves/EM spectrum; u5: circuits/electromagnetism; u6: modern physics (quantum, nucleus, space).
- ib-phys-hl-1/2: AHL — circular motion/gravitation SHM, fields (electric/magnetic/gravitational), induction/AC, quantum mechanics detail, astrophysics.
### Group 3 — Individuals and Societies (sl only, prefixes his-/geo-/econ-/bus-/psych-)
- ib-his-sl-1 "History of the Americas and Europe" u1: early societies/causes of WWI-era change; u2: interwar/fascism; u3: WWII/Cold War origins.
- ib-his-sl-2 "20th Century to Present" u4: Cold War detail/decolonisation; u5: civil rights/social movements; u6: globalisation/terrorism/recent conflicts.
- ib-geo-sl-1 "Freshwater and Coastal Environments" u1: hydrological cycle/water scarcity; u2: fluvial processes/coastal systems; u3: hazards/management.
- ib-geo-sl-2 "Ecosystems, Food and Health" u4: ecosystems/services; u5: food/agriculture; u6: health/medical geography.
- ib-econ-sl-1 "Microeconomics" u1: basic economic problem/markets; u2: demand/supply/elasticity; u3: market failure/externalities.
- ib-econ-sl-2 "Macroeconomics" u4: national income/inflation/unemployment; u5: fiscal/monetary policy; u6: growth/development/globalisation.
- ib-bus-sl-1 "Business Fundamentals" u1: business objectives/types; u2: marketing/operations; u3: HR/leadership.
- ib-bus-sl-2 "Finance and Strategy" u4: finance/accounting; u5: HR detail; u6: strategy/ethics/global business.
- ib-psych-sl-1 "Foundations" u1: research methods/biopsychology; u2: cognition/development; u3: learning/motivation/emotion.
- ib-psych-sl-2 "Social and Abnormal" u4: social psychology; u5: abnormal psychology; u6: health/stress/forensic psychology.
### Groups 1/2 — Languages (lang-a-, lang-b-, lang-ab-; English-medium skill courses)
- ib-lang-a-sl-1/2 "Language A: Literature" — literary genres, textual analysis, comparative study, essay writing.
- ib-lang-b-sl-1/2 "Language B" — comprehension, productive skills, text types, intercultural understanding.
- ib-lang-ab-sl-1/2 "Language ab initio" — foundations, survival communication, basic grammar/text types.
### Group 6 — Arts (va-, music-, theatre- prefixes)
- ib-va-sl-1/2 "Visual Arts" — formal elements, art history/movements, studio practice, critical study.
- ib-music-sl-1/2 "Music" — theory/notation, aural skills, repertoire study, composition.
### DP Core (single-year courses, level "sl", year 1)
- ib-tok "Theory of Knowledge" — knowledge questions, areas of knowledge, ways of knowing, TOK essay/presentation.
- ib-ee "Extended Essay" — research question, methodology, academic writing, reflection.
- ib-cas "Creativity, Activity, Service" — CAS components, reflection, learning outcomes.
