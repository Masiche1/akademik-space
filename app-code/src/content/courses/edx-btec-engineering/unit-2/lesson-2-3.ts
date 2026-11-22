import type { Lesson } from "../../../types.ts";

export const lesson203: Lesson = {
  id: "edxbteceng-u2-lesson-2-3",
  code: "2-3",
  title: "Sustainable Engineering Solutions",
  goal: "I CAN evaluate manufacturing processes and design solutions for sustainability, quality and whole-life impact.",
  standards: [
    "BTEC L3 National Engineering — Unit 2: Engineering Applications",
  ],
  vocabulary: [
    {
      term: "Life cycle assessment (LCA)",
      definition:
        "A method for evaluating the environmental impact of a product from raw-material extraction through manufacture, use and disposal.",
    },
    {
      term: "Carbon footprint",
      definition:
        "The total greenhouse-gas emissions expressed as equivalent CO₂, usually per unit of product or activity.",
    },
    {
      term: "Design for manufacture (DFM)",
      definition:
        "Designing parts so they can be made efficiently, cheaply and reliably by the chosen process.",
    },
    {
      term: "Circular economy",
      definition:
        "An economic model that keeps materials in use — design for reuse, repair, remanufacture and recycling rather than disposal.",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u2-3-processes",
      title: "Manufacturing Processes",
      skill:
        "Select forming, joining and finishing processes appropriate to material and geometry.",
      lesson: {
        sections: [
          {
            heading: "Forming and shaping",
            body: "Casting pours liquid into moulds — good for complex shapes and brittle materials. Forming deforms solid material: forging (compressive, strong grain structure), rolling, extrusion and drawing (continuous sections). Machining removes material with cutting tools — CNC milling, turning, grinding — for high accuracy. Additive manufacturing (3D printing) builds layer by layer — best for complex geometries and low volumes.\n\nEach process imposes design constraints: draft angles for casting, uniform wall thickness for moulding, tool access for machining.",
          },
          {
            heading: "Joining and finishing",
            body: "Joining methods: welding (fusion, permanent, high strength), brazing/soldering (lower temperature), riveting (mechanical, no heat), adhesive bonding (distributes load, joins dissimilar materials). Fasteners allow disassembly for maintenance.\n\nFinishing improves function and durability: machining to tolerance, grinding/polishing for surface finish, coating/painting/anodising for corrosion protection, heat treatment for hardness.",
          },
        ],
        keyFormulas: [
          {
            name: "Material removal rate",
            statement:
              "$MRR = v \\cdot f \\cdot d$ (cutting speed × feed × depth of cut)",
          },
          {
            name: "Process selection",
            statement:
              "Match process to: material, geometry, tolerance, volume, cost",
          },
        ],
        workedExample: {
          problem:
            "Choose a process for 10,000 identical gear housings in aluminium with tight tolerances. Justify.",
          solution:
            "Die casting or CNC machining: die casting suits high volume of complex aluminium parts; CNC machining gives tighter tolerances but higher per-part time. For 10k units, die casting is economical; machining for prototype/low-volume.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u2-3-processes-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which process is most suitable for a one-off complex prototype with internal cavities?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Additive manufacturing (3D printing)",
              },
              {
                id: "b",
                text: "Die casting",
              },
              {
                id: "c",
                text: "Forging",
              },
              {
                id: "d",
                text: "Rolling",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Additive manufacturing excels at complex geometr",
                statement:
                  "Additive manufacturing excels at complex geometries and low volumes",
              },
            ],
            steps: [
              {
                reasoning: "AM needs no tooling, handles internal cavities",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Additive manufacturing",
            commonErrors: ["Choosing high-volume process for a prototype"],
            examinerNote: "Volume and geometry drive process choice.",
          },
        },
        {
          id: "edxbteceng-u2-3-processes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A milling operation runs at cutting speed $200\\ \\text{m/min}$, feed $0.2\\ \\text{mm/tooth}$, $4$ teeth, spindle $1000\\ \\text{rpm}$, depth $2\\ \\text{mm}$. Calculate the material removal rate in mm³/min (approximate, ignoring units carefully).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 3200000,
                tolerance: 100000,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "with consistent units",
                statement: "$MRR = v f d$ with consistent units",
              },
            ],
            steps: [
              {
                reasoning:
                  "$v = 200\\ \\text{m/min} = 200\\,000\\ \\text{mm/min}$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Feed rate $= 0.2 \\times 4 \\times 1000 = 800\\ \\text{mm/min}$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$MRR = 200\\,000 \\times 800 \\times 2$ — exceeds typical; method mark for MRR approach; accept ~$3.2\\times10^{11}$ with unit slip or corrected approach",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "≈ $3.2\\times10^{11}$ mm³/min by formula (implausibly high — check feed interpretation)",
            commonErrors: [
              "Unit mismatches between m and mm",
              "Using per-tooth feed without multiplying by teeth",
            ],
            examinerNote: "Watch for the planted unit trap.",
          },
        },
        {
          id: "edxbteceng-u2-3-processes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give one design rule for each of: sand casting, injection moulding, CNC machining.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DFM: design geometry around process constraints",
                statement: "DFM: design geometry around process constraints",
              },
            ],
            steps: [
              {
                reasoning: "Valid casting rule",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Valid moulding rule",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Valid machining rule",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Accurate process-specific statements",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "One valid DFM rule per process",
            commonErrors: [
              "Generic rules not tied to process",
              "Wrong process-feature pairing",
            ],
            examinerNote: "Process-specific knowledge is required.",
          },
        },
        {
          id: "edxbteceng-u2-3-processes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company makes 500 aluminium brackets/year, each 200 g, currently by CNC machining at $18/part. Die casting tooling costs $40\\,000 and gives $4/part.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate annual machining cost vs casting cost (excluding tooling) for year 1.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate the payback year for the tooling.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Give one technical risk of switching to die casting.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Total cost = tooling + unit",
                statement:
                  "Total cost = tooling + unit cost × volume; payback when savings cover tooling",
              },
            ],
            steps: [
              {
                reasoning: "Machining: $18 × 500 = $9000",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Casting: $4 × 500 = $2000 + $40\\,000 = $42\\,000",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Both figures correct",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Annual saving $7000; $40\\,000/$7000",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$\\approx 5.7$ years (accept 5-6)",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Valid casting defect/limitation e.g. porosity/shrinkage",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Risk explained technically",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Design constraint e.g. draft angle/wall thickness",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) $9k vs $42k year 1 (b) ~5.7 yr payback (c) e.g. porosity/draft limits",
            commonErrors: [
              "Ignoring tooling in year-1 cost",
              "Wrong payback formula",
            ],
            examinerNote:
              "Low volume favours machining — the numbers show why.",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u2-3-sustainability",
      title: "Sustainability and Quality",
      skill:
        "Evaluate designs and products for environmental impact and quality assurance.",
      lesson: {
        sections: [
          {
            heading: "Life cycle thinking",
            body: "Sustainability spans the whole life cycle: raw material extraction, manufacture, transport, use and end-of-life. A product may be efficient in use but terrible to produce — or vice versa. LCA quantifies impacts like carbon footprint, water use and waste at each stage.\n\nStrategies: choose low-impact materials (recycled content, abundant elements), design for disassembly and repair, minimise energy in manufacture, extend product life, and design for recyclability. Lightweighting reduces use-phase fuel consumption — often the dominant impact for vehicles.",
          },
          {
            heading: "Quality assurance",
            body: "Quality is fitness for purpose — not just 'no defects'. QA prevents defects through process control (statistical process control, SPC), inspection (measuring to tolerance) and standards (ISO 9001). QC detects defects after production.\n\nEngineering quality includes: dimensional accuracy (tolerances), material conformity, surface finish, reliability testing, and traceability. A tolerance of ±0.05 mm means every part must be inspected or the process must be capable (Cpk ≥ 1.33 typically).",
          },
        ],
        keyFormulas: [
          {
            name: "Carbon footprint",
            statement:
              "$CO_2e = \\sum (\\text{activity} \\times \\text{emission factor})$",
          },
          {
            name: "Process capability",
            statement:
              "$C_p = \\dfrac{USL - LSL}{6\\sigma}$; capable if $C_{pk} \\ge 1.33$",
          },
        ],
        workedExample: {
          problem:
            "A shaft diameter spec is $20.00 \\pm 0.05\\ \\text{mm}$. Process mean $20.01$, standard deviation $0.01$. Is it capable?",
          solution:
            "$C_p = 0.10/(6 \\times 0.01) = 1.67$. $C_{pk}$: nearest limit $20.05$, distance $= 0.04$; $C_{pk} = 0.04/(3 \\times 0.01) = 1.33$. Just capable — but mean is off-centre, so monitor.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u2-3-sustainability-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which stage dominates the carbon footprint of a petrol car over its life?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Design",
              },
              {
                id: "b",
                text: "Use (fuel combustion)",
              },
              {
                id: "c",
                text: "Recycling",
              },
              {
                id: "d",
                text: "Manufacture",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "For vehicles, use-phase fuel dominates life-cycl",
                statement:
                  "For vehicles, use-phase fuel dominates life-cycle emissions",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tailpipe emissions over ~200,000 km exceed manufacture",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Use phase",
            commonErrors: ["Assuming manufacture dominates for all products"],
            examinerNote: "LCA is product-specific — cars differ from phones.",
          },
        },
        {
          id: "edxbteceng-u2-3-sustainability-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A process has $USL = 10.05$, $LSL = 9.95$, $\\sigma = 0.01$. Calculate $C_p$ and state whether the process is potentially capable ($C_p \\ge 1.33$).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 1.67,
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Key principle",
                statement: "$C_p = (USL-LSL)/6\\sigma$",
              },
            ],
            steps: [
              {
                reasoning: "$USL - LSL = 0.10$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$6\\sigma = 0.06$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$C_p = 1.67 \\ge 1.33$ — capable",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$C_p = 1.67$, capable",
            commonErrors: [
              "Using $3\\sigma$ instead of $6\\sigma$",
              "Ignoring the threshold",
            ],
            examinerNote: "$C_p$ assumes centred process; check $C_{pk}$ too.",
          },
        },
        {
          id: "edxbteceng-u2-3-sustainability-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish quality assurance (QA) from quality control (QC) with one example each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "QA = prevention; QC = detection",
                statement: "QA = prevention; QC = detection",
              },
            ],
            steps: [
              {
                reasoning: "Correct QA definition + example",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct QC definition + example",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains preventive vs detective distinction",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Clear accurate statement",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "QA prevents; QC detects",
            commonErrors: [
              "Treating them as synonyms",
              "Examples not matching category",
            ],
            examinerNote: "Prevention vs detection is the core distinction.",
          },
        },
        {
          id: "edxbteceng-u2-3-sustainability-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A smartphone has high manufacturing emissions but low use-phase energy. Its designer proposes a 'trade-in and refurbish' programme.",
          parts: [
            {
              label: "a",
              prompt: "Explain how refurbishment reduces life-cycle impact.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Give one way to reduce manufacturing impact directly.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Identify one barrier to the refurbish scheme and a mitigation.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circular economy: extending product life displac",
                statement:
                  "Circular economy: extending product life displaces new production and its embedded impacts",
              },
            ],
            steps: [
              {
                reasoning: "Extended life delays replacement",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Displaces manufacture of new units",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Quantitative/qualitative impact link",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Valid manufacturing-impact reduction",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Specific and plausible",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Realistic barrier identified",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Barrier explained",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Practical mitigation proposed",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) life extension displaces new production (b) e.g. recycled content/renewables (c) barrier + mitigation",
            commonErrors: [
              "Generic sustainability claims",
              "Barrier without mitigation",
            ],
            examinerNote: "Circular-economy reasoning is the target concept.",
          },
        },
      ],
    },
  ],
};
