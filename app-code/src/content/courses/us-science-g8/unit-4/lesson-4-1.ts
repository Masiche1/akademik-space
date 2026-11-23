import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "s8-u4-lesson-4-1",
  code: "4-1",
  title: "Capstone: Forces, Motion, and Energy",
  goal: "I CAN apply Newton's laws, energy concepts, and momentum principles to analyze real-world motion and collisions.",
  standards: [
    "MS-PS2-1",
    "MS-PS2-2",
    "MS-PS3-1",
    "MS-PS3-3",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Engaging in Argument from Evidence",
  ],
  vocabulary: [
    {
      term: "Net force",
      definition: "The vector sum of all forces acting on an object.",
    },
    {
      term: "Newton's first law",
      definition:
        "An object at rest stays at rest, and an object in motion stays in motion, unless acted on by a net force.",
    },
    {
      term: "Newton's second law",
      definition: "Force equals mass times acceleration: $F = ma$.",
    },
    {
      term: "Newton's third law",
      definition: "For every action, there is an equal and opposite reaction.",
    },
    {
      term: "Kinetic energy",
      definition: "Energy of motion: $KE = \\frac{1}{2}mv^2$.",
    },
    {
      term: "Potential energy",
      definition: "Stored energy due to position or configuration.",
    },
    {
      term: "Momentum",
      definition: "Mass times velocity: $p = mv$. Conserved in collisions.",
    },
    {
      term: "Collision",
      definition:
        "An interaction where objects exert forces on each other over a short time.",
    },
  ],
  concepts: [
    {
      id: "s8-u4-forces-motion",
      title: "Forces and motion in context",
      skill:
        "Apply Newton's laws to explain everyday motion and predict outcomes.",
      lesson: {
        sections: [
          {
            heading: "Newton's laws applied",
            body: "First law: seatbelts needed because objects continue moving when car stops. Second law: $F = ma$ explains why pushing a truck needs more force than a bike. Third law: walking works because you push ground backward, ground pushes you forward.",
          },
          {
            heading: "Friction and motion",
            body: "Friction opposes relative motion — necessary for walking, braking, and holding objects. Too little friction (ice) → sliding; too much (rough surfaces) → harder to move. Friction converts kinetic energy to heat.",
          },
          {
            heading: "Everyday applications",
            body: "Crumple zones: longer collision time = smaller force. Airbags: same principle. Seatbelts: prevent ejection. Anti-lock brakes: maintain friction for steering control. All apply impulse-momentum concepts.",
          },
        ],
        keyFormulas: [
          { name: "Newton's second", statement: "$F = ma$" },
          { name: "Momentum", statement: "$p = mv$" },
          { name: "Kinetic energy", statement: "$KE = \\frac{1}{2}mv^2$" },
        ],
        workedExample: {
          problem: "Why does a ball roll farther on smooth floor than carpet?",
          solution:
            "Less friction on smooth floor → less energy converted to heat → ball retains more kinetic energy.",
        },
      },
      questions: [
        {
          id: "s8-u4-forces-motion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which law explains why you lurch forward when a car brakes suddenly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton's first law" },
              { id: "b", text: "Newton's second law" },
              { id: "c", text: "Newton's third law" },
              { id: "d", text: "Law of gravity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inertia",
                statement: "Objects continue moving unless net force acts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Your body continues forward motion when car decelerates — inertia (first law).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Newton's first law",
            commonErrors: ["Confusing with other laws."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "s8-u4-forces-motion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how crumple zones reduce injury in car crashes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Impulse",
                statement: "$F = \\Delta p/\\Delta t$ — same momentum change.",
              },
              {
                kind: "principle",
                name: "Collision time",
                statement: "Longer time → smaller force.",
              },
            ],
            steps: [
              {
                reasoning: "Crumple zone lengthens collision time.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Same momentum change spread over longer time → smaller average force.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Smaller force = less injury to occupants.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Longer collision time reduces average force on passengers.",
            commonErrors: [
              "Thinking it 'absorbs momentum' — it absorbs energy.",
            ],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "s8-u4-forces-motion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 1000 kg car moving at 20 m/s stops in 5 seconds. Calculate the average force and explain the physics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Momentum",
                statement: "$p = mv = 1000 \\times 20 = 20,000$ kg·m/s.",
              },
              {
                kind: "formula",
                name: "Impulse",
                statement: "$F = \\Delta p/\\Delta t = 20,000/5 = 4,000$ N.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Initial momentum: $p = mv = 1000 \\times 20 = 20,000$ kg·m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Final momentum: 0 (stopped).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "$\\Delta p = 20,000$; $F = 20,000/5 = 4,000$ N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Average force: 4,000 N — that's the braking force needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$F = 4,000$ N",
            commonErrors: ["Using wrong units; forgetting momentum change."],
            examinerNote: "M2, B1, A1.",
          },
        },
        {
          id: "s8-u4-forces-motion-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyze a car crash scenario: 1500 kg car at 30 m/s hits a wall and stops in 0.5 seconds (without crumple zone) vs 2.0 seconds (with crumple zone).",
          parts: [
            {
              label: "a",
              prompt: "Calculate average force without crumple zone.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate average force with crumple zone.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why the difference matters for survival.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What other safety features use similar physics?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Impulse",
                statement: "$F = \\Delta p/\\Delta t$",
              },
              {
                kind: "principle",
                name: "Momentum conservation",
                statement: "Same $\\Delta p$ regardless of time.",
              },
            ],
            steps: [
              {
                reasoning: "$p = 1500 \\times 30 = 45,000$ kg·m/s.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$F = 45,000/0.5 = 90,000$ N.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: $90,000$ N.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$F = 45,000/2.0 = 22,500$ N.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: $22,500$ N — 4× less force.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "4× smaller force dramatically reduces injury risk — body can withstand forces better over longer time.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Airbags, seatbelts, helmets — all increase collision time or distribute force.",
                marks: 2,
                markCode: "B",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 90,000 N (b) 22,500 N (c) 4× less force = safer (d) airbags, seatbelts, helmets.",
            commonErrors: [
              "Not recognizing momentum is same; only force changes.",
            ],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "s8-u4-energy",
      title: "Energy transformation and conservation",
      skill:
        "Track energy through systems and evaluate efficiency in real applications.",
      lesson: {
        sections: [
          {
            heading: "Energy transformations",
            body: "Energy changes form but is never created or destroyed. Car: chemical (fuel) → thermal + mechanical. Power plant: chemical/nuclear → thermal → mechanical → electrical. Solar: light → electrical. Each step loses some energy as heat.",
          },
          {
            heading: "Efficiency",
            body: "Efficiency = useful output / total input × 100%. Real systems always < 100% due to friction, heat loss, incomplete combustion. Improving efficiency means reducing waste.",
          },
          {
            heading: "Energy and society",
            body: "Energy choices affect environment (emissions), economy (costs), and equity (access). Evaluating energy requires considering all impacts, not just efficiency.",
          },
        ],
        keyFormulas: [
          { name: "Kinetic energy", statement: "$KE = \\frac{1}{2}mv^2$" },
          {
            name: "Efficiency",
            statement:
              "$\\eta = \\frac{\\text{useful}}{\\text{input}} \\times 100\\%$",
          },
        ],
        workedExample: {
          problem:
            "A car engine converts 25% of fuel energy to motion. Is this good or bad?",
          solution:
            "Typical for internal combustion (~20-30%). The rest is lost as heat — why engines get hot.",
        },
      },
      questions: [
        {
          id: "s8-u4-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to energy in a real system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All converted to useful work" },
              { id: "b", text: "Some lost as heat and waste" },
              { id: "c", text: "Created from nothing" },
              { id: "d", text: "Destroyed completely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement: "Energy transforms but isn't created/destroyed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Some energy always lost as heat — no system is 100% efficient.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Some lost as heat",
            commonErrors: ["Thinking energy is destroyed."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s8-u4-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A power plant burns fuel containing 1000 J of energy but produces only 350 J of electricity. What is the efficiency and where did the rest go?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency",
                statement: "$\\eta = 350/1000 = 35\\%$.",
              },
              {
                kind: "principle",
                name: "Energy loss",
                statement: "Most lost as heat.",
              },
            ],
            steps: [
              {
                reasoning: "$\\eta = 350/1000 \\times 100 = 35\\%$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "650 J lost — mostly as heat from turbine, generator, transmission.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Some also lost to friction and incomplete combustion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "35% efficient; 650 J lost as heat and waste.",
            commonErrors: ["Forgetting to multiply by 100 for percent."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "s8-u4-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why can't a perpetual motion machine exist? Explain using energy principles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement: "Energy can't be created from nothing.",
              },
              {
                kind: "principle",
                name: "Entropy",
                statement: "Some energy always lost as unusable heat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Would need to output more energy than input — violates conservation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Friction and heat losses mean output < input always.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Entropy increases — some energy becomes unusable.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "First and second laws of thermodynamics forbid it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Violates energy conservation and entropy — output can't exceed input.",
            commonErrors: ["Not citing fundamental laws."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "s8-u4-energy-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A city is choosing between natural gas and solar for electricity generation.",
          parts: [
            {
              label: "a",
              prompt: "Trace energy transformations for each option.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Compare efficiency and environmental impact.",
              marks: 3,
            },
            { label: "c", prompt: "What trade-offs exist?", marks: 2 },
            { label: "d", prompt: "Write a recommendation.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transformation",
                statement: "Track energy through each step.",
              },
              {
                kind: "principle",
                name: "Trade-offs",
                statement: "No perfect solution.",
              },
            ],
            steps: [
              {
                reasoning: "Gas: chemical → thermal → mechanical → electrical.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Solar: light → electrical (photovoltaic) or light → thermal → mechanical → electrical.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Gas: ~35-40% efficient; emits CO₂, NOₓ, particulates.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Solar: ~15-20% panel efficiency; no emissions during operation.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Solar has lower lifecycle emissions but manufacturing impacts.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Gas: reliable, dispatchable; solar: intermittent, weather-dependent.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Trade-off: reliability vs sustainability.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Recommendation: hybrid — solar for bulk + gas backup, or solar+storage as technology improves.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) gas: chem→mech→elec; solar: light→elec (b) gas efficient but emits; solar clean but intermittent (c) reliability vs sustainability (d) hybrid recommended.",
            commonErrors: ["Ignoring trade-offs or lifecycle impacts."],
            examinerNote: "4+3+2+1 = 10.",
          },
        },
      ],
    },
    {
      id: "s8-u4-waves",
      title: "Waves, light, and information",
      skill: "Apply wave properties to communication, sensing, and technology.",
      lesson: {
        sections: [
          {
            heading: "Wave properties",
            body: "$v = f\\lambda$ — wave speed = frequency × wavelength. Frequency determines energy; wavelength determines type. EM spectrum: radio → microwave → infrared → visible → UV → X-ray → gamma. Each region has different applications.",
          },
          {
            heading: "Information transfer",
            body: "All communication uses waves. Modulation encodes data onto carrier waves. Higher frequency = more bandwidth = more data. Fiber optics use light for high bandwidth; wireless uses radio/microwave for mobility.",
          },
          {
            heading: "Applications",
            body: "Radio: communication. Microwave: radar, WiFi. Infrared: remote controls, thermal imaging. Visible: displays, vision. UV: sterilization. X-ray: medical imaging. Gamma: cancer treatment, sterilization.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "$v = f\\lambda$" },
          {
            name: "EM spectrum",
            statement: "Radio → gamma, increasing frequency/energy",
          },
        ],
        workedExample: {
          problem: "Why can't we use X-rays for everyday communication?",
          solution:
            "X-rays are ionizing radiation — harmful to living tissue. Radio frequencies are non-ionizing and safe.",
        },
      },
      questions: [
        {
          id: "s8-u4-waves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines the energy of an electromagnetic wave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wavelength" },
              { id: "b", text: "Frequency" },
              { id: "c", text: "Amplitude" },
              { id: "d", text: "Speed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wave energy",
                statement: "Higher frequency = higher energy.",
              },
            ],
            steps: [
              {
                reasoning: "Frequency determines photon energy: $E = hf$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Frequency",
            commonErrors: ["Confusing frequency and wavelength."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s8-u4-waves-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why fiber optic cables can carry more data than copper wires.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bandwidth",
                statement: "Higher frequency = more data capacity.",
              },
              {
                kind: "principle",
                name: "Light vs electricity",
                statement:
                  "Light has much higher frequency than electrical signals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fiber uses light (very high frequency) vs copper uses low-frequency electrical signals.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Higher frequency allows wider bandwidth = more data per second.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Also less signal loss and no electromagnetic interference.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Light's high frequency = more bandwidth + less interference.",
            commonErrors: ["Not connecting frequency to bandwidth."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "s8-u4-waves-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A radar system uses microwaves. Explain why microwaves are chosen over visible light for this application.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Penetration",
                statement:
                  "Microwaves penetrate clouds/fog better than visible light.",
              },
              {
                kind: "principle",
                name: "Wavelength",
                statement:
                  "Longer wavelength = better for detection at distance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Microwaves penetrate clouds, fog, and light rain — visible light doesn't.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Longer wavelength allows better detection of distant objects.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Radar needs all-weather capability — microwaves work in bad conditions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Also: microwaves are non-ionizing — safe for continuous use.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Microwaves penetrate weather + longer wavelength + safe.",
            commonErrors: ["Not considering weather penetration."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "s8-u4-waves-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A city is choosing between 5G wireless and fiber optic for internet infrastructure.",
          parts: [
            {
              label: "a",
              prompt: "Compare the physics of each technology.",
              marks: 4,
            },
            { label: "b", prompt: "What are the trade-offs?", marks: 3 },
            {
              label: "c",
              prompt: "Which is better for rural areas? Why?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Write a recommendation for mixed urban/rural deployment.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EM vs light",
                statement: "Wireless uses radio/microwave; fiber uses light.",
              },
              {
                kind: "principle",
                name: "Trade-offs",
                statement: "Speed vs coverage vs cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "5G: EM waves through air — mobile but limited range, affected by obstacles.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Fiber: light through glass — very high bandwidth but requires physical connection.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "5G trade-off: convenient/mobile but slower than fiber, signal issues in buildings.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Fiber trade-off: faster/more reliable but expensive to install, not mobile.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Fiber has lower latency and higher bandwidth capacity.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "5G better for rural — no need to lay fiber to every home; wireless coverage easier.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "But fiber backbone still needed for data centers and towers.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Recommendation: fiber for urban fixed infrastructure + 5G for rural/mobile coverage.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 5G EM vs fiber light (b) mobile/convenient vs fast/reliable (c) 5G for rural (d) hybrid.",
            commonErrors: ["Recommending one for everything."],
            examinerNote: "4+3+2+1 = 10.",
          },
        },
      ],
    },
    {
      id: "s8-u4-biology-space",
      title: "Heredity, evolution, and Earth's place",
      skill:
        "Connect genetics, evolution, and astronomy to understand life's diversity and Earth's context.",
      lesson: {
        sections: [
          {
            heading: "Heredity and variation",
            body: "DNA contains genetic instructions passed from parents to offspring. Genes determine traits; mutations create variation. Natural selection acts on variation — advantageous traits become more common over generations.",
          },
          {
            heading: "Evolution evidence",
            body: "Fossils show gradual change over time. Comparative anatomy shows common structures (homologous bones). DNA shows genetic similarities. Biogeography shows related species in nearby regions. All support common descent.",
          },
          {
            heading: "Earth in space",
            body: "Earth is a planet orbiting the Sun — one of 8 planets. Life exists in the 'habitable zone' where liquid water can exist. Earth's magnetic field protects atmosphere; plate tectonics shapes surface; atmosphere provides protection from radiation.",
          },
        ],
        keyFormulas: [
          {
            name: "Natural selection",
            statement: "Variation + selection pressure → adaptation",
          },
          {
            name: "Habitable zone",
            statement: "Distance from star allowing liquid water",
          },
        ],
        workedExample: {
          problem: "How does antibiotic resistance demonstrate evolution?",
          solution:
            "Bacteria with resistance genes survive antibiotics; they reproduce; resistance becomes more common — natural selection in action.",
        },
      },
      questions: [
        {
          id: "s8-u4-biology-space-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organisms choose their traits" },
              { id: "b", text: "Traits that help survival become more common" },
              { id: "c", text: "Random changes in DNA" },
              { id: "d", text: "Individuals adapt during lifetime" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural selection",
                statement: "Advantageous traits increase in frequency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Natural selection favors traits that improve survival/reproduction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Advantageous traits increase",
            commonErrors: ["Thinking organisms choose traits."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s8-u4-biology-space-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how antibiotic resistance is an example of evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variation",
                statement: "Bacteria have genetic variation in resistance.",
              },
              {
                kind: "principle",
                name: "Selection",
                statement:
                  "Antibiotic kills susceptible bacteria; resistant survive.",
              },
            ],
            steps: [
              {
                reasoning: "Some bacteria have resistance genes; others don't.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Antibiotic kills susceptible bacteria; resistant ones survive and reproduce.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Over generations, resistance becomes more common — evolution observed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Resistance genes survive selection → become more common over time.",
            commonErrors: ["Thinking bacteria 'learn' resistance."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "s8-u4-biology-space-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is Earth in the 'habitable zone' while Mars and Venus are not?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Habitable zone",
                statement: "Distance from star allows liquid water.",
              },
              {
                kind: "principle",
                name: "Atmosphere",
                statement:
                  "Greenhouse effect and atmospheric composition matter.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Earth's distance from Sun allows temperatures where water is liquid.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Venus too close — too hot, water evaporated; runaway greenhouse effect.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Mars too far — too cold, water mostly frozen; thin atmosphere can't retain heat.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Earth's atmosphere and distance create the 'Goldilocks' conditions for life.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Earth's distance + atmosphere = liquid water + stable temperatures.",
            commonErrors: ["Only mentioning distance, not atmosphere."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "s8-u4-biology-space-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyze how Earth's position in the solar system and its systems enable life.",
          parts: [
            {
              label: "a",
              prompt: "Explain the role of Earth's orbit and rotation.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe how plate tectonics affects habitability.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain the role of the atmosphere and magnetic field.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "What would happen if Earth were slightly closer to the Sun?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Orbital mechanics",
                statement:
                  "Distance and rotation affect climate and conditions.",
              },
              {
                kind: "principle",
                name: "Earth systems",
                statement:
                  "Geosphere, atmosphere, magnetosphere all contribute.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Orbit: correct distance → liquid water possible; rotation: day/night cycle distributes heat.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Tilt causes seasons — distributes solar energy evenly.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Plate tectonics: recycles nutrients, regulates climate over long timescales.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Mountain building affects weather patterns and creates diverse habitats.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Volcanic activity releases gases that form/maintain atmosphere.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Atmosphere: protects from radiation, regulates temperature, provides oxygen.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Magnetic field: deflects solar wind, protecting atmosphere.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Closer to Sun → hotter → water evaporates → runaway greenhouse like Venus.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) orbit/rotation enable liquid water (b) tectonics recycle nutrients/regulate climate (c) atmosphere+magnetic field protect (d) Venus-like runaway.",
            commonErrors: ["Only mentioning one factor."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
