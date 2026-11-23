import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "phys11-u5-lesson-5-1",
  code: "5-1",
  title: "Capstone: Applying Mechanics to Real Situations",
  goal: "I CAN apply kinematics, Newton's laws, and momentum conservation to everyday and engineering problems.",
  standards: [
    "HS-PS2-1",
    "HS-PS2-2",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Projectile motion",
      definition:
        "Motion under gravity only — horizontal constant velocity, vertical acceleration.",
    },
    {
      term: "System",
      definition:
        "The object(s) chosen for analysis; determines whether momentum/energy is conserved.",
    },
    {
      term: "Free-body diagram",
      definition: "A diagram showing all forces acting on an object.",
    },
    {
      term: "Terminal velocity",
      definition: "Constant velocity reached when drag equals weight.",
    },
    {
      term: "Impulse",
      definition: "Force times contact time; equal to change in momentum.",
    },
    {
      term: "Conservative force",
      definition:
        "Force where work done is path-independent (gravity, springs).",
    },
    {
      term: "Deceleration",
      definition: "Reduction in speed; acceleration opposite to motion.",
    },
    {
      term: "Collision",
      definition: "Interaction where objects exchange momentum.",
    },
  ],
  concepts: [
    {
      id: "phys11-u5-mechanics",
      title: "Forces and motion in real systems",
      skill:
        "Build free-body diagrams and apply Newton's laws to multi-force situations.",
      lesson: {
        sections: [
          {
            heading: "Free-body diagrams",
            body: "Draw a box for the object, arrows for each force from its center: weight down, normal force perpendicular to surface, friction along surface, applied force in direction of push. The **net force** is the vector sum — $F_{net} = ma$.",
          },
          {
            heading: "Common situations",
            body: "- **Incline**: weight splits into $mg\\sin\\theta$ down-slope and $mg\\cos\\theta$ into the surface\n- **Terminal velocity**: drag grows with speed until $F_{drag} = mg$, acceleration becomes zero\n- **Two forces angled**: resolve into components, or use parallelogram rule",
          },
          {
            heading: "Momentum applications",
            body: "Crumple zones extend collision time, reducing average force ($F = \\Delta p/\\Delta t$). Seatbelts increase contact time the same way. Airbags do the opposite — reduce time but with lower peak force through larger area.",
          },
        ],
        keyFormulas: [
          { name: "Net force", statement: "$F_{net} = ma$" },
          { name: "Impulse", statement: "$F\\Delta t = \\Delta p$" },
        ],
        workedExample: {
          problem:
            "A 60 kg person in an elevator accelerates upward at 2 m/s². What is the scale reading?",
          solution:
            "$N - mg = ma$, so $N = m(g+a) = 60 \\times 12 = 720$ N — appears heavier.",
        },
      },
      questions: [
        {
          id: "phys11-u5-mechanics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On an incline at angle θ, which component of weight acts down the slope?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$mg\\cos\\theta$" },
              { id: "b", text: "$mg\\sin\\theta$" },
              { id: "c", text: "$mg\\tan\\theta$" },
              { id: "d", text: "$mg$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Incline",
                statement: "Down-slope component is $mg\\sin\\theta$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weight resolves into $mg\\sin\\theta$ along the slope and $mg\\cos\\theta$ into the surface.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $mg\\sin\\theta$",
            commonErrors: ["Swapping sin and cos."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u5-mechanics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does a parachute reach terminal velocity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Terminal velocity",
                statement: "Drag equals weight → net force zero.",
              },
            ],
            steps: [
              {
                reasoning:
                  "As speed increases, air resistance (drag) increases.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "At terminal velocity, drag equals weight — net force is zero.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "With zero net force, acceleration is zero → constant velocity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Drag = weight → no acceleration → constant fall speed.",
            commonErrors: [
              "Thinking parachute stops accelerating for no reason.",
            ],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "phys11-u5-mechanics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car crashes at 20 m/s into a wall. Explain how a crumple zone reduces injury compared to a rigid frame.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Impulse",
                statement:
                  "$F = \\Delta p / \\Delta t$ — same momentum change.",
              },
              {
                kind: "principle",
                name: "Force-time trade-off",
                statement: "Longer time → smaller average force.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both cases: passenger momentum changes from $mv$ to 0 — same $\\Delta p$.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Crumple zone lengthens collision time $\\Delta t$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Since $F = \\Delta p/\\Delta t$, longer $\\Delta t$ means smaller average force on occupants.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Smaller force over longer time = less injury; energy is absorbed by deformation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Crumple zone increases collision time → decreases average force → less injury.",
            commonErrors: [
              "Thinking crumple zone 'absorbs momentum' — it absorbs energy, not momentum.",
            ],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "phys11-u5-mechanics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A 1200 kg car approaches a curve of radius 50 m at 15 m/s on a flat road. The coefficient of static friction is 0.70.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the centripetal force needed.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate maximum friction force available.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Will the car hold the curve? Justify.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If it skids, explain what happens to the car's path and why.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Centripetal force",
                statement: "$F_c = mv^2/r$",
              },
              {
                kind: "formula",
                name: "Friction",
                statement: "$F_f = \\mu N = \\mu mg$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$F_c = 1200 \\times 15^2 / 50 = 1200 \\times 225/50 = 5400$ N.",
                working: "1200*225/50",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 5400 N.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$F_f = 0.70 \\times 1200 \\times 9.8 = 8232$ N.",
                working: "0.7*1200*9.8",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 8232 N.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "8232 N > 5400 N needed — friction is sufficient, car holds.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning: "Yes, it holds with margin.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "If friction insufficient, car continues straight (Newton's 1st law) — tangent to curve.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Insufficient centripetal force → radius increases → car drifts outward.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Skidding occurs when required $F_c$ exceeds max friction.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 5400 N (b) 8232 N (c) yes (d) continues tangent/drifts outward.",
            commonErrors: [
              "Comparing wrong quantities; forgetting N = mg on flat road.",
            ],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u5-energy-circuits",
      title: "Energy and electrical applications",
      skill:
        "Connect energy concepts to circuits, power, and efficiency in real devices.",
      lesson: {
        sections: [
          {
            heading: "Energy in circuits",
            body: "Electrical energy: $E = Pt = VIt$. **Power** $P = VI$ measures rate of energy transfer. A 100 W bulb uses 100 J each second. Batteries store chemical energy converted to electrical.",
          },
          {
            heading: "Series vs parallel in practice",
            body: "Household wiring is **parallel**: each device gets full voltage, can operate independently. Series would mean one device off = all off, and voltage divides. That's why parallel is used.",
          },
          {
            heading: "Efficiency and conservation",
            body: "Devices convert electrical energy to other forms: light, heat, motion. Efficiency = useful output / total input. LED bulbs ~90% efficient vs incandescent ~5%. Energy isn't created — it's transformed, with some always lost as heat.",
          },
        ],
        keyFormulas: [
          { name: "Energy", statement: "$E = Pt = VIt$" },
          { name: "Power", statement: "$P = VI = I^2R = V^2/R$" },
        ],
        workedExample: {
          problem: "A 60 W bulb runs for 5 hours. How much energy is used?",
          solution:
            "$E = Pt = 60 \\times 5 \\times 3600 = 1.08$ MJ (or 0.30 kWh).",
        },
      },
      questions: [
        {
          id: "phys11-u5-energy-circuits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is household wiring parallel rather than series?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parallel uses less wire" },
              {
                id: "b",
                text: "Each device gets full voltage and works independently",
              },
              { id: "c", text: "Series is dangerous" },
              { id: "d", text: "Parallel is cheaper to install" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallel circuits",
                statement:
                  "Full voltage to each branch; independent operation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Parallel gives each device full voltage and lets them work independently.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Full voltage, independent operation",
            commonErrors: ["Thinking it's about cost."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u5-energy-circuits-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A phone charger rated 20 W charges for 2 hours. Calculate energy delivered in kWh.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy", statement: "$E = Pt$" },
            ],
            steps: [
              {
                reasoning:
                  "Convert: $E = 20 \\text{ W} \\times 2 \\text{ h} = 40$ Wh.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert Wh to kWh: $40/1000 = 0.040$ kWh.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 0.040 kWh (40 Wh).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.040 kWh",
            commonErrors: ["Forgetting unit conversion."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u5-energy-circuits-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does an LED bulb feel cooler than an incandescent of the same brightness?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency",
                statement: "LED converts more energy to light, less to heat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Incandescent wastes ~95% as heat — filament glows hot.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "LED converts ~90% to light — much less heat produced.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Same light output means LED draws less power → less energy → less heat.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Energy conservation: less heat means more efficient light production.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "LED wastes less energy as heat → cooler operation.",
            commonErrors: [
              "Thinking LED 'doesn't produce heat' — just much less.",
            ],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "phys11-u5-energy-circuits-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A household has a 2000 W kettle, 1000 W microwave, and 500 W fridge running on a 15 A, 120 V circuit.",
          parts: [
            {
              label: "a",
              prompt: "Calculate maximum power the circuit can supply.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "If kettle and microwave run together, what happens?",
              marks: 3,
            },
            { label: "c", prompt: "Suggest two solutions.", marks: 2 },
            {
              label: "d",
              prompt:
                "Calculate monthly cost if fridge runs 24/7 at $0.15/kWh.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P = VI$" },
              {
                kind: "principle",
                name: "Circuit capacity",
                statement: "Devices can't exceed supply.",
              },
            ],
            steps: [
              {
                reasoning: "$P = VI = 120 \\times 15 = 1800$ W.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Kettle + microwave = 3000 W > 1800 W — exceeds capacity.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Breaker trips or voltage drops; devices may not work properly.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Fire hazard if breaker fails — this is why circuits are protected.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Solution 1: use separate circuits/outlets on different breakers.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Solution 2: don't run high-power devices simultaneously.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Energy/day = $0.500 \\times 24 = 12$ kWh; month = $12 \\times 30 = 360$ kWh.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Cost = $360 \\times 0.15 = $54/month.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 1800 W (b) overload → breaker trips (c) separate circuits or stagger use (d) $54/month.",
            commonErrors: [
              "Not converting units; forgetting month has 30 days.",
            ],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u5-waves-info",
      title: "Waves, EM radiation and information",
      skill:
        "Apply wave concepts to communication, sensing, and information technology.",
      lesson: {
        sections: [
          {
            heading: "Waves carry information",
            body: "All communication uses waves: radio (EM), sound (mechanical), light (EM). Modulation encodes information onto a carrier wave by varying amplitude, frequency, or phase. Higher frequency = more bandwidth = more data capacity.",
          },
          {
            heading: "EM spectrum applications",
            body: "- **Radio/microwave**: communication, radar, WiFi\n- **Infrared**: remote controls, thermal imaging\n- **Visible**: vision, displays\n- **UV**: sterilization, detection\n- **X-ray/gamma**: medical imaging, treatment\n\nEach region exploits different wave properties.",
          },
          {
            heading: "Limitations and trade-offs",
            body: "Higher frequency waves carry more data but have shorter range and less penetration. Lower frequencies travel farther but carry less information. Fiber optics use light for high bandwidth; radio uses EM for wireless reach.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "$v = f\\lambda$" },
          {
            name: "Frequency-bandwidth",
            statement: "Higher f = more data capacity",
          },
        ],
        workedExample: {
          problem: "Why does 5G use higher frequencies than 4G?",
          solution:
            "Higher frequencies allow wider bandwidth → faster data rates, but shorter range requiring more towers.",
        },
      },
      questions: [
        {
          id: "phys11-u5-waves-info-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is modulation in communication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing the wave's medium" },
              { id: "b", text: "Encoding information onto a carrier wave" },
              { id: "c", text: "Amplifying the signal" },
              { id: "d", text: "Converting sound to light" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modulation",
                statement: "Encoding info onto carrier wave.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Modulation varies amplitude, frequency, or phase of a carrier wave to encode information.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Encoding information onto carrier",
            commonErrors: ["Confusing with amplification."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u5-waves-info-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can't we use X-rays for everyday communication?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EM properties",
                statement:
                  "Different frequencies have different penetration and safety.",
              },
            ],
            steps: [
              {
                reasoning:
                  "X-rays are ionizing radiation — harmful to living tissue.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "They'd damage biological tissue, not just transmit data.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Lower-frequency EM (radio, microwave) is non-ionizing and safe for communication.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "X-rays are ionizing/harmful — radio frequencies are safe for communication.",
            commonErrors: ["Thinking all EM is equally safe."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "phys11-u5-waves-info-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A satellite uses radio waves at 2 GHz. If it needs to send more data, should it use higher or lower frequency? Explain the trade-off.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bandwidth",
                statement: "Higher frequency allows more data capacity.",
              },
              {
                kind: "principle",
                name: "Range",
                statement: "Higher frequency has shorter range.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher frequency = wider bandwidth = more data per second.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "But higher frequency attenuates more in atmosphere → shorter range.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "For satellite, range matters — may need to balance data rate vs coverage.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Trade-off: more data capacity vs reduced coverage/reliability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Higher frequency = more data but shorter range — trade-off.",
            commonErrors: ["Thinking higher frequency is always better."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "phys11-u5-waves-info-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A city is choosing between fiber optic and 5G wireless for internet infrastructure.",
          parts: [
            {
              label: "a",
              prompt: "List two advantages of each technology.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Calculate the time to download a 2 GB file at 100 Mbps.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain why fiber typically offers faster speeds.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Write a recommendation for a mixed urban/rural area.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiber",
                statement: "Light through glass — high bandwidth, low loss.",
              },
              {
                kind: "principle",
                name: "Wireless",
                statement:
                  "EM through air — mobile but limited by distance/interference.",
              },
            ],
            steps: [
              {
                reasoning: "Fiber: very high bandwidth, low latency, secure.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Wireless: mobile, no physical connection needed, easier deployment.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "2 GB = 2000 MB = 16000 Mb; $t = 16000/100 = 160$ s? No — $16000 \\text{ Mb} / 100 \\text{ Mb/s} = 160$ s.",
                working: "16000/100",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Answer: 160 s ≈ 2.7 min (accept consistent unit handling).",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Fiber: light travels in glass with less attenuation, no interference; higher bandwidth capacity.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Wireless shares spectrum and is affected by obstacles/weather.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Recommendation: fiber for fixed urban infrastructure + wireless for mobile/rural access.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Hybrid approach balances speed, cost, and coverage.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) fiber high bandwidth; wireless mobile (b) ~16-20 s (c) less attenuation/interference (d) hybrid.",
            commonErrors: ["Recommending one technology for everything."],
            examinerNote: "4+2+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
