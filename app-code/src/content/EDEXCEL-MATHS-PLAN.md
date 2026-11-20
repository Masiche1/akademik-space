# Pearson Edexcel Maths, Years 8-11: content plan and rules

Read `src/content/AUTHORING.md` first (shape, quality bar, LaTeX rules, verification). This file ADDS the Edexcel rules
and lists every unit. Where they differ, this file wins for these courses.

## Rules
- Courses (folder = course id): `edx-maths-y8`, `edx-maths-y9` (Pearson Edexcel International Lower Secondary Curriculum
  Mathematics, Key Stage 3), `edx-maths-y10`, `edx-maths-y11` (Pearson Edexcel International GCSE (9-1) Mathematics A, 4MA1).
- Unit folders: `src/content/courses/<course-id>/unit-N/` (units 1-4). Unit index exports `unitN`, unit `code` is `"N"`.
  Lesson files `lesson-N-M.ts` export `lessonNM`. Lesson `code` is "N-M".
- Id prefixes (unit, lesson, concept, question): Year 8 `edm8-uN-`, Year 9 `edm9-uN-`, Year 10 `edm10-uN-`, Year 11 `edm11-uN-`.
  Question ids: `<prefix><concept-slug>-q1` .. `-q4`.
- British English spelling and terms everywhere: "maths", "factorise", "metres", "colour", "brackets", "nth term",
  "highest common factor (HCF)", "lowest common multiple (LCM)", "standard form", "significant figures", "pie chart". Money in pounds (£) or dollars as appropriate for an international audience.
- `standards`: Years 8-9 use strand references like `"Y8 Number"`, `"Y9 Algebra"`; Years 10-11 use the 4MA1 specification
  section numbers, e.g. `"4MA1 1.4"`, `"4MA1 3.3H"` (suffix H for Higher-only content).
- Edexcel mark codes: M (method), A (accuracy, depends on M), B (independent mark). Use "oe" (or equivalent) and "cao" (correct answer only) and "ft" (follow through) in `examinerNote` where appropriate.
- Accuracy: answers to 3 significant figures unless stated; angles to 1 d.p.; money to 2 d.p. State the required accuracy in the stem and set `tolerance` to match.
- Calculators are allowed on both IGCSE Maths A papers, so calculator questions are fine in Years 10-11. Years 8-9 should mostly be non-calculator friendly.
- Use Edexcel command words: "Work out", "Calculate", "Show that", "Simplify", "Factorise", "Expand", "Solve", "Write down", "Give a reason for your answer", "Prove".

### Tiers (Years 10-11 only)
- Every question in `edx-maths-y10` and `edx-maths-y11` MUST have `tier: "foundation"` or `tier: "higher"`. Years 8-9 questions must NOT set `tier`.
- Concepts below marked **[H]** are Higher-tier only: all 4 questions `tier: "higher"`.
- All other concepts: q1 and q2 `tier: "foundation"` (grade 1-5 style), q3 and q4 `tier: "higher"` (grade 6-9 style, the q4 structured one is a multi-part Higher question).

## Unit plan (3 lessons per unit, 2 concepts per lesson: (a) and (b))

### edx-maths-y8: Year 8 Maths (Key Stage 3)
- unit-1 "Number"
  - 1-1 Integers, Powers and Roots: (a) negative numbers and order of operations (BIDMAS) (b) powers, roots, prime factorisation, HCF and LCM
  - 1-2 Fractions, Decimals and Percentages: (a) operations with fractions and mixed numbers (b) percentages of amounts, percentage increase and decrease
  - 1-3 Ratio and Proportion: (a) simplifying ratios and sharing in a ratio (b) direct proportion, unitary method and best buys
- unit-2 "Algebra"
  - 2-1 Expressions and Formulae: (a) simplifying, expanding single brackets and factorising (b) substitution and writing formulae
  - 2-2 Equations and Inequalities: (a) linear equations including brackets and unknowns on both sides (b) forming equations from contexts and inequalities on a number line
  - 2-3 Sequences and Graphs: (a) term-to-term rules and the nth term of linear sequences (b) coordinates, tables of values and straight-line graphs
- unit-3 "Geometry and Measures"
  - 3-1 Angles: (a) angle facts and angles in parallel lines (b) interior and exterior angles of polygons
  - 3-2 Area and Volume: (a) area of triangles, parallelograms, trapezia, circumference and area of circles (b) volume and surface area of cuboids and prisms
  - 3-3 Transformations and Constructions: (a) reflection, rotation, translation and enlargement (b) bearings, scale drawings and constructions
- unit-4 "Statistics and Probability"
  - 4-1 Averages and Charts: (a) mean, median, mode and range, including from frequency tables (b) bar charts, pie charts and stem-and-leaf diagrams
  - 4-2 Scatter Graphs and Comparing Data: (a) correlation and lines of best fit (b) comparing two distributions using an average and the range
  - 4-3 Probability: (a) the probability scale and the sum of probabilities is 1 (b) sample spaces, relative frequency and expected outcomes

### edx-maths-y9: Year 9 Maths (Key Stage 3)
- unit-1 "Number"
  - 1-1 Indices and Standard Form: (a) index laws including zero and negative indices (b) standard form and calculations with it
  - 1-2 Accuracy and Estimation: (a) rounding to decimal places and significant figures, estimating (b) error intervals
  - 1-3 Percentages and Finance: (a) reverse percentages and percentage change (b) simple interest, compound interest and depreciation
- unit-2 "Algebra"
  - 2-1 Expanding and Factorising: (a) expanding double brackets (b) factorising $x^2+bx+c$ and the difference of two squares
  - 2-2 Equations and Formulae: (a) simultaneous linear equations (b) rearranging formulae and solving linear inequalities
  - 2-3 Graphs: (a) gradient, $y = mx + c$ and parallel lines (b) real-life graphs, distance-time graphs and quadratic graphs
- unit-3 "Geometry and Measures"
  - 3-1 Pythagoras and Trigonometry: (a) Pythagoras' theorem (b) right-angled trigonometry (SOHCAHTOA)
  - 3-2 Circles and Cylinders: (a) arc length and sector area (b) volume and surface area of cylinders and composite solids
  - 3-3 Congruence and Similarity: (a) congruent triangles (SSS, SAS, ASA, RHS) (b) similar shapes and scale factors for length
- unit-4 "Statistics and Probability"
  - 4-1 Grouped Data: (a) estimated mean and modal class from grouped frequency tables (b) frequency polygons and interpreting grouped data
  - 4-2 Combined Probability: (a) tree diagrams for independent events (b) Venn diagrams and two-way tables
  - 4-3 Collecting and Interpreting Data: (a) sampling, bias and questionnaire design (b) interpreting and critiquing statistical diagrams

### edx-maths-y10: Year 10 Maths (International GCSE 4MA1, first year)
- unit-1 "Numbers and the Number System"
  - 1-1 Number Properties and Surds: (a) prime factors, HCF, LCM and converting recurring decimals to fractions (b) **[H]** simplifying surds and rationalising denominators
  - 1-2 Percentages and Ratio: (a) percentage change, reverse percentages and compound interest (b) ratio and proportion problems
  - 1-3 Standard Form and Bounds: (a) standard form calculations (b) **[H]** upper and lower bounds in calculations
- unit-2 "Equations, Formulae and Identities"
  - 2-1 Algebraic Manipulation: (a) expanding brackets and factorising quadratics including $ax^2+bx+c$ (b) **[H]** algebraic fractions
  - 2-2 Equations: (a) quadratic equations by factorising, formula and completing the square (b) simultaneous linear equations
  - 2-3 Inequalities: (a) linear inequalities and integer solutions (b) **[H]** quadratic inequalities and regions on graphs
- unit-3 "Geometry and Trigonometry"
  - 3-1 Polygons and Circle Theorems: (a) angles in polygons with reasons (b) **[H]** circle theorems with reasons
  - 3-2 Trigonometry: (a) right-angled trigonometry, angles of elevation and bearings (b) **[H]** sine rule, cosine rule and area $\\frac12 ab\\sin C$
  - 3-3 Mensuration: (a) arc length, sector area and compound shapes (b) volume and surface area of spheres, cones and pyramids
- unit-4 "Statistics and Probability"
  - 4-1 Representing Data: (a) cumulative frequency, median and interquartile range (b) **[H]** histograms with unequal class widths
  - 4-2 Probability: (a) combined events and tree diagrams (b) **[H]** conditional probability and selection without replacement
  - 4-3 Sets: (a) set notation and Venn diagrams (b) Venn diagrams with probability

### edx-maths-y11: Year 11 Maths (International GCSE 4MA1, second year)
- unit-1 "Sequences, Functions and Graphs"
  - 1-1 Sequences: (a) nth term of linear sequences and simple quadratic sequences (b) **[H]** arithmetic series and the sum of the first $n$ terms
  - 1-2 Functions and Graphs: (a) graphs of quadratic, cubic and reciprocal functions and solving equations graphically (b) **[H]** function notation, domain, range, composite and inverse functions
  - 1-3 Calculus: (a) **[H]** differentiating $ax^n$, gradients and tangents (b) **[H]** turning points and kinematics
- unit-2 "Vectors and Transformation Geometry"
  - 2-1 Transformations: (a) reflections, rotations, translations and enlargements including fractional and negative scale factors (b) describing combined transformations
  - 2-2 Vectors: (a) column vectors, vector arithmetic and magnitude (b) **[H]** vector geometry and proof
  - 2-3 Similarity and Loci: (a) **[H]** similar shapes: area and volume scale factors (b) loci and constructions
- unit-3 "Further Algebra"
  - 3-1 Proportion and Formulae: (a) **[H]** direct and inverse proportion, e.g. $y \\propto x^2$, $y \\propto \\frac{1}{\\sqrt x}$ (b) changing the subject of a formula, including where the subject appears twice
  - 3-2 Quadratics in Depth: (a) completing the square and turning points (b) **[H]** linear and quadratic simultaneous equations, including circles $x^2+y^2=r^2$
  - 3-3 Indices and Proof: (a) fractional and negative indices (b) **[H]** algebraic proof
- unit-4 "Applied and Problem Solving"
  - 4-1 Three-Dimensional Problems: (a) **[H]** Pythagoras and trigonometry in 3D (b) **[H]** the angle between a line and a plane
  - 4-2 Compound Measures and Growth: (a) speed, density, pressure and exchange rates (b) exponential growth and decay
  - 4-3 Multi-step Problem Solving: (a) multi-step geometry problems (b) multi-step statistics and probability problems
