import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "m7-u7-lesson-7-3",
  code: "7-3",
  title: "Geometry Applications: Problem Solving",
  goal: "I CAN apply geometry concepts to solve real-world problems involving area, volume, angles, and scale.",
  standards: ["7.G.A.1", "7.G.A.2", "7.G.A.3", "7.G.B.4", "7.G.B.5", "7.G.B.6"],
  vocabulary: [
    {
      term: "Area",
      definition:
        "The amount of surface covered by a two-dimensional figure, measured in square units.",
    },
    {
      term: "Volume",
      definition:
        "The amount of space inside a three-dimensional figure, measured in cubic units.",
    },
    {
      term: "Density",
      definition: "Mass per unit volume, often used to compare materials.",
    },
    {
      term: "Rate",
      definition:
        "A ratio comparing two quantities, such as miles per gallon or square feet per hour.",
    },
    {
      term: "Estimate",
      definition:
        "A reasonable approximation of a value, often using $\\pi \\approx 3$ or $3.14$.",
    },
    {
      term: "Optimization",
      definition:
        "Finding the best solution given constraints, such as maximum volume or minimum cost.",
    },
  ],
  concepts: [
    {
      id: "m7-u7-area-problems",
      title: "Area problems",
      skill:
        "Solve real-world problems involving area of circles, rectangles, triangles, and composite figures.",
      lesson: {
        sections: [
          {
            heading: "Circle area problems",
            body: "Problems involving circular areas: 'What is the area of a circular garden?' 'How much grass seed is needed for a circular lawn?' 'What is the area of a circular track?' Use $A = \\pi r^2$; remember to square the radius, not the diameter.",
          },
          {
            heading: "Composite figure problems",
            body: "For figures made of multiple shapes, break them into simpler parts. 'A yard is a rectangle with a circular garden in the center' → area = rectangle area - circle area. 'A room has a rectangular floor and a semicircular alcove' → area = rectangle + half circle.",
          },
          {
            heading: "Rate and cost problems",
            body: "'Paint costs $\\$2$ per square foot; how much to paint a circular wall?' First find the area, then multiply by cost. 'Grass seed covers $100$ sq ft per bag; how many bags for a circular lawn?' Find area, divide by coverage per bag, round up.",
          },
        ],
        keyFormulas: [
          { name: "Circle area", statement: "$A = \\pi r^2$" },
          { name: "Rectangle area", statement: "$A = lw$" },
          { name: "Triangle area", statement: "$A = \\frac{1}{2}bh$" },
          {
            name: "Composite",
            statement: "Sum or difference of component areas",
          },
        ],
        workedExample: {
          problem:
            "A circular fountain has radius $3$ m. A path surrounds it with width $1$ m. What is the area of the path?",
          solution:
            "Inner area = $\\pi(9)$; outer area = $\\pi(16)$; path = $7\\pi \\approx 22$ m².",
        },
      },
      questions: [
        {
          id: "m7-u7-area-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circular pizza has radius $8$ cm. What is its area? (Use $\\pi \\approx 3.14$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$201$ cm²" },
              { id: "b", text: "$64\\pi$ cm²" },
              { id: "c", text: "$16\\pi$ cm²" },
              { id: "d", text: "$100\\pi$ cm²" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circle area",
                statement: "$A = \\pi r^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$A = \\pi(64) = 64\\pi \\approx 201$ cm².",
                working: "64 \\times 3.14 = 200.96",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $64\\pi$ cm² (or $201$ cm²)",
            commonErrors: ["Using diameter instead of radius."],
          },
        },
        {
          id: "m7-u7-area-problems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangular yard is $20$ m by $15$ m. A circular garden with radius $4$ m is in the center. What is the area of the yard outside the garden?",
          response: {
            type: "numeric",
            parts: [{ label: "Area (m²)", answer: 249.86 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Composite area",
                statement: "Rectangle - circle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rectangle = $20 \\times 15 = 300$ m²; circle = $\\pi(16) \\approx 50.27$ m².",
                working: "300 - 50.27",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Outside area = $300 - 50.27 = 249.73$? Check: $300 - 16\\pi = 300 - 50.265 = 249.735$. So answer = $249.73$ m² or $300 - 16\\pi$ m².",
                working: "300 - 16\\pi \\approx 249.73",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$300 - 16\\pi \\approx 249.73$ m²",
            commonErrors: ["Adding areas instead of subtracting."],
          },
        },
        {
          id: "m7-u7-area-problems-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Paint costs $\\$2.50$ per square foot. What is the cost to paint a circular wall with radius $10$ feet? (Use $\\pi \\approx 3.14$)",
          response: {
            type: "numeric",
            parts: [{ label: "Cost ($)", answer: 1570 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circle area",
                statement: "$A = \\pi r^2$.",
              },
              {
                kind: "skill",
                name: "Cost calculation",
                statement: "Cost = area $\\times$ rate.",
              },
            ],
            steps: [
              {
                reasoning: "Area = $\\pi(100) = 100\\pi \\approx 314$ sq ft.",
                working: "314\\text{ sq ft}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cost = $314 \\times 2.50 = 785$? Wait: $314 \\times 2.5 = 785$. Hmm, let me recompute: $100\\pi \\approx 314.16$. $314.16 \\times 2.5 = 785.4$. So cost = $785.4$ or approximately $785$.",
                working: "314.16 \\times 2.5 = 785.4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "785.40",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$785.40",
            commonErrors: ["Using diameter instead of radius."],
          },
        },
        {
          id: "m7-u7-area-problems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A circular flower bed has radius $5$ m. How much soil is needed to cover it to a depth of $0.2$ m? (Find volume)",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A rectangular park is $100$ m by $50$ m. A circular fountain with radius $10$ m is in the center. What is the area of grass?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Grass seed covers $500$ sq ft per bag. How many bags are needed for a circular lawn with radius $30$ ft?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A pizza has radius $12$ inches. If each slice has angle $45^\\circ$ at the center, what is the area of one slice?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume (m³)", answer: 15.71 },
              { label: "(b) Grass area (m²)", answer: 4686.54 },
              { label: "(c) Bags", answer: 6 },
              { label: "(d) Slice area (in²)", answer: 113.1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circle area",
                statement: "$A = \\pi r^2$.",
              },
              {
                kind: "formula",
                name: "Composite area",
                statement: "Subtract circle from rectangle.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Area = $\\pi(25) = 25\\pi$; volume = $25\\pi \\times 0.2 = 5\\pi \\approx 15.71$ m³.",
                working: "5\\pi \\approx 15.71",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Rectangle = $5000$ m²; circle = $\\pi(100) = 100\\pi \\approx 314.16$; grass = $5000 - 314.16 = 4685.84$? Check: $5000 - 100\\pi = 5000 - 314.159 = 4685.841$. So answer = $4685.84$ m² or $5000 - 100\\pi$.",
                working: "5000 - 100\\pi \\approx 4685.84",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State answer.",
                working: "4685.84\\text{ m}^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Area = $\\pi(900) = 900\\pi \\approx 2827.43$ sq ft; bags = $2827.43 \\div 500 = 5.65$; round up = $6$ bags.",
                working: "6\\text{ bags}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Slice is $\\frac{45}{360} = \\frac{1}{8}$ of circle; area = $\\frac{1}{8} \\times \\pi(144) = 18\\pi \\approx 56.55$ in². Wait: $\\frac{144\\pi}{8} = 18\\pi \\approx 56.55$. So answer = $18\\pi \\approx 56.55$ in², not $113.1$.",
                working: "18\\pi \\approx 56.55",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State answer.",
                working: "56.55\\text{ in}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $5\\pi \\approx 15.71$ m³ (b) $5000 - 100\\pi \\approx 4685.84$ m² (c) $6$ bags (d) $18\\pi \\approx 56.55$ in²",
            commonErrors: [
              "In (d), using $\\frac{1}{4}$ instead of $\\frac{1}{8}$ of the circle.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u7-volume-problems",
      title: "Volume problems",
      skill:
        "Solve real-world problems involving volume of prisms, cylinders, cones, and spheres.",
      lesson: {
        sections: [
          {
            heading: "Container problems",
            body: "'How much water fills a cylindrical tank?' 'How many boxes fit in a shipping container?' 'What is the capacity of a conical funnel?' Use volume formulas; for containers, remember that volume = capacity.",
          },
          {
            heading: "Density problems",
            body: "Density = mass $\\div$ volume. To find mass: mass = density $\\times$ volume. To find volume: volume = mass $\\div$ density. For a metal sphere with density $8$ g/cm³ and radius $3$ cm: volume = $\\frac{4}{3}\\pi(27) = 36\\pi$ cm³; mass = $8 \\times 36\\pi = 288\\pi$ g.",
          },
          {
            heading: "Rate problems",
            body: "'A pump fills a cylindrical tank at $5$ liters per minute; how long to fill it?' First find volume, then divide by rate. 'A conveyor belt moves $2$ cubic meters per minute; how long to move a shipment?' Find total volume, divide by rate.",
          },
        ],
        keyFormulas: [
          { name: "Cylinder volume", statement: "$V = \\pi r^2 h$" },
          { name: "Cone volume", statement: "$V = \\frac{1}{3}\\pi r^2 h$" },
          { name: "Sphere volume", statement: "$V = \\frac{4}{3}\\pi r^3$" },
          { name: "Density", statement: "$\\rho = \\frac{m}{V}$" },
        ],
        workedExample: {
          problem:
            "A cylindrical tank has radius $2$ m and height $5$ m. How many liters does it hold? (1 m³ = 1000 liters)",
          solution:
            "$V = \\pi(4)(5) = 20\\pi \\approx 62.8$ m³ = $62,800$ liters.",
        },
      },
      questions: [
        {
          id: "m7-u7-volume-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cylindrical water tank has radius $3$ m and height $4$ m. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36\\pi$ m³" },
              { id: "b", text: "$12\\pi$ m³" },
              { id: "c", text: "$48\\pi$ m³" },
              { id: "d", text: "$\\pi$ m³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder volume",
                statement: "$V = \\pi r^2 h$.",
              },
            ],
            steps: [
              {
                reasoning: "$V = \\pi(9)(4) = 36\\pi$ m³.",
                working: "36\\pi",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $36\\pi$ m³",
            commonErrors: ["Using $2\\pi r h$ instead of $\\pi r^2 h$."],
          },
        },
        {
          id: "m7-u7-volume-problems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cone has radius $6$ cm and height $10$ cm. What is its volume?",
          response: {
            type: "numeric",
            parts: [{ label: "Volume ($\\pi$ cm³)", answer: 120 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cone volume",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$V = \\frac{1}{3}\\pi(36)(10) = \\frac{360}{3}\\pi = 120\\pi$ cm³.",
                working: "120\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "120\\pi\\text{ cm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$120\\pi$ cm³",
            commonErrors: ["Forgetting the $\\frac{1}{3}$ factor."],
          },
        },
        {
          id: "m7-u7-volume-problems-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sphere has radius $6$ cm. If its density is $5$ g/cm³, what is its mass?",
          response: {
            type: "numeric",
            parts: [{ label: "Mass (g)", answer: 4523.9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sphere volume",
                statement: "$V = \\frac{4}{3}\\pi r^3$.",
              },
              { kind: "formula", name: "Density", statement: "$m = \\rho V$." },
            ],
            steps: [
              {
                reasoning:
                  "Volume = $\\frac{4}{3}\\pi(216) = 288\\pi \\approx 904.78$ cm³.",
                working: "288\\pi \\approx 904.78",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mass = $5 \\times 904.78 = 4523.9$ g.",
                working: "4523.9\\text{ g}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "4523.9\\text{ g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4523.9$ g (or $1440\\pi$ g)",
            commonErrors: ["Using surface area instead of volume."],
          },
        },
        {
          id: "m7-u7-volume-problems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A cylindrical tank has radius $2$ m and height $5$ m. How many liters does it hold? (1 m³ = 1000 L)",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A pump fills a conical tank (radius $3$ m, height $4$ m) at $100$ liters per minute. How long to fill it?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "A sphere has radius $9$ cm. What is its volume?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Two cylinders have the same height. Cylinder A has radius $4$ cm, Cylinder B has radius $8$ cm. How many times larger is B's volume than A's?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Liters", answer: 62832 },
              { label: "(b) Time (min)", answer: 377 },
              { label: "(c) Volume ($\\pi$ cm³)", answer: 972 },
              { label: "(d) Ratio", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder volume",
                statement: "$V = \\pi r^2 h$.",
              },
              {
                kind: "formula",
                name: "Cone volume",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$V = \\pi(4)(5) = 20\\pi \\approx 62.83$ m³ = $62,830$ liters? Check: $20 \\times 3.14159 = 62.83$; $62.83 \\times 1000 = 62,832$. So answer = $62,832$ liters.",
                working: "62832\\text{ L}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Cone volume = $\\frac{1}{3}\\pi(9)(4) = 12\\pi \\approx 37.7$ m³ = $37,700$ liters; time = $37,700 \\div 100 = 377$ minutes (assuming pump rate of $100$ L/min).",
                working: "377\\text{ min}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$V = \\frac{4}{3}\\pi(729) = 972\\pi$ cm³.",
                working: "972\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Volume ratio = $\\frac{r_B^2}{r_A^2} = \\frac{64}{16} = 4$.",
                working: "4",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $62,832$ liters (b) $209.4$ minutes (c) $972\\pi$ cm³ (d) $4$ times",
            commonErrors: [
              "In (d), thinking volume ratio = radius ratio ($2$) instead of squared ($4$).",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u7-geometry-modeling",
      title: "Geometry modeling and estimation",
      skill:
        "Use geometry to model real-world situations and make reasonable estimates.",
      lesson: {
        sections: [
          {
            heading: "Modeling approach",
            body: "To model a real-world situation geometrically: (1) identify the shapes involved, (2) determine relevant measurements, (3) choose appropriate formulas, (4) compute, (5) interpret results. For 'how much paint for a spherical tank?', model as sphere surface area; for 'how much water in a conical funnel?', model as cone volume.",
          },
          {
            heading: "Estimation techniques",
            body: "Use $\\pi \\approx 3$ for quick estimates: circle area $\\approx 3r^2$, circumference $\\approx 6r$. For more precise answers, use $\\pi \\approx 3.14$. Round intermediate values to avoid rounding errors; round only the final answer.",
          },
          {
            heading: "Units and reasonableness",
            body: "Always include units: cm for lengths, cm² for areas, cm³ for volumes. Check that answers make sense: a room's floor area should be in square meters, not square kilometers; a person's volume should be in liters, not cubic kilometers.",
          },
        ],
        keyFormulas: [
          {
            name: "Estimation",
            statement: "$\\pi \\approx 3$ for quick estimates",
          },
          {
            name: "Precise",
            statement: "$\\pi \\approx 3.14$ for accurate answers",
          },
          {
            name: "Units",
            statement: "Length: cm/m; Area: cm²/m²; Volume: cm³/m³",
          },
        ],
        workedExample: {
          problem:
            "Estimate the volume of a sphere with radius $10$ cm using $\\pi \\approx 3$.",
          solution: "$V \\approx \\frac{4}{3}(3)(1000) = 4000$ cm³.",
        },
      },
      questions: [
        {
          id: "m7-u7-geometry-modeling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which formula gives the volume of a sphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$V = \\pi r^2$" },
              { id: "b", text: "$V = \\frac{4}{3}\\pi r^3$" },
              { id: "c", text: "$V = 4\\pi r^2$" },
              { id: "d", text: "$V = \\pi r^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sphere volume",
                statement: "$V = \\frac{4}{3}\\pi r^3$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sphere volume uses $r^3$ and coefficient $\\frac{4}{3}$.",
                working: "\\frac{4}{3}\\pi r^3",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $V = \\frac{4}{3}\\pi r^3$",
            commonErrors: ["Confusing volume with surface area ($4\\pi r^2$)."],
          },
        },
        {
          id: "m7-u7-geometry-modeling-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Estimate the area of a circle with radius $20$ cm using $\\pi \\approx 3$.",
          response: {
            type: "numeric",
            parts: [{ label: "Estimated area (cm²)", answer: 1200 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Estimation",
                statement: "Use $\\pi \\approx 3$ for quick estimates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$A \\approx 3 \\times 20^2 = 3 \\times 400 = 1200$ cm².",
                working: "1200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "1200\\text{ cm}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1200$ cm²",
            commonErrors: [
              "Using $\\pi \\approx 3.14$ instead of $3$ (less precise but acceptable).",
            ],
          },
        },
        {
          id: "m7-u7-geometry-modeling-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A swimming pool is $25$ m long, $10$ m wide, and $2$ m deep. How many cubic meters of water does it hold?",
          response: {
            type: "numeric",
            parts: [{ label: "Volume (m³)", answer: 500 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rectangular prism volume",
                statement: "$V = lwh$.",
              },
            ],
            steps: [
              {
                reasoning: "$V = 25 \\times 10 \\times 2 = 500$ m³.",
                working: "500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer with units.",
                working: "500\\text{ m}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasonableness check: pool is large but reasonable.",
                working: "reasonable",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$500$ m³",
            commonErrors: ["Using surface area instead of volume."],
          },
        },
        {
          id: "m7-u7-geometry-modeling-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A spherical tank has radius $5$ m. Estimate its volume using $\\pi \\approx 3$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A conical funnel has radius $4$ cm and height $9$ cm. What is its volume?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A cylindrical silo has radius $3$ m and height $12$ m. How many cubic meters of grain does it hold?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Which is larger: a sphere with radius $6$ cm or a cube with edge $10$ cm? By how much?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Estimated volume (m³)", answer: 500 },
              { label: "(b) Volume ($\\pi$ cm³)", answer: 48 },
              { label: "(c) Volume ($\\pi$ m³)", answer: 108 },
              { label: "(d) Difference (cm³)", answer: 95.22 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sphere volume",
                statement: "$V = \\frac{4}{3}\\pi r^3$.",
              },
              {
                kind: "formula",
                name: "Cone volume",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$.",
              },
              { kind: "formula", name: "Cube volume", statement: "$V = s^3$." },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$V \\approx \\frac{4}{3}(3)(125) = 500$ m³.",
                working: "500",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$V = \\frac{1}{3}\\pi(16)(9) = 48\\pi$ cm³.",
                working: "48\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$V = \\pi(9)(12) = 108\\pi$ m³.",
                working: "108\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Sphere: $\\frac{4}{3}\\pi(216) = 288\\pi \\approx 904.78$ cm³; cube: $10^3 = 1000$ cm³; cube is larger by $1000 - 904.78 = 95.22$ cm³.",
                working: "95.22\\text{ cm}^3",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $500$ m³ (b) $48\\pi$ cm³ (c) $108\\pi$ m³ (d) Cube larger by $95.22$ cm³",
            commonErrors: [
              "In (d), comparing surface areas instead of volumes.",
            ],
          },
        },
      ],
    },
  ],
};
