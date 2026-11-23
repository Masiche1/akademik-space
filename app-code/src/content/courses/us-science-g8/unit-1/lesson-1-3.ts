import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "s8-u1-lesson-1-3",
  code: "1-3",
  title: "Energy",
  goal: "I CAN calculate kinetic energy, relate energy to mass, speed and position, and explain energy transfer, conservation and thermal insulation.",
  standards: [
    "MS-PS3-1",
    "MS-PS3-2",
    "MS-PS3-3",
    "MS-PS3-4",
    "MS-PS3-5",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations and Designing Solutions",
  ],
  vocabulary: [
    {
      term: "Kinetic energy",
      definition:
        "The energy an object has because it is moving. It depends on mass and speed.",
    },
    {
      term: "Gravitational potential energy",
      definition:
        "Energy stored in an object because of its height above the ground: $GPE = mgh$.",
    },
    { term: "Joule", definition: "The SI unit of energy, written J." },
    {
      term: "Conservation of energy",
      definition:
        "Energy cannot be created or destroyed, only transferred from one store or form to another.",
    },
    {
      term: "Thermal energy",
      definition:
        "The total energy of the random motion of the particles in a substance. It flows from hotter to cooler regions.",
    },
    {
      term: "Insulator",
      definition: "A material that transfers thermal energy slowly.",
    },
    {
      term: "Temperature",
      definition:
        "A measure of the average kinetic energy of the particles in a substance.",
    },
  ],
  concepts: [
    {
      id: "s8-u1-kinetic-potential",
      title: "Kinetic and potential energy",
      skill:
        "Calculate kinetic and gravitational potential energy and explain how they depend on mass, speed and height.",
      lesson: {
        sections: [
          {
            heading: "Kinetic energy",
            body: "**Kinetic energy** (KE) is the energy of motion. It depends on mass and on speed.\n\n$$KE=\\frac{1}{2}mv^2$$\n\n$m$ is mass in kilograms and $v$ is speed in $\\text{m/s}$. KE is measured in joules (J).\n\nSpeed is **squared**, so it has a bigger effect than mass. Doubling the mass doubles the KE, but doubling the speed makes the KE **four times** greater. This is why high-speed crashes are so dangerous.",
          },
          {
            heading: "Potential energy",
            body: "**Potential energy** is stored energy that depends on the position of objects or on how they are arranged. **Gravitational potential energy** (GPE) depends on mass and height.\n\n$$GPE=mgh$$\n\n$g$ is the gravitational field strength ($9.8\\text{ N/kg}$ on Earth, which we round to $10\\text{ N/kg}$ in some problems) and $h$ is the height in meters. Lifting an object higher, or lifting a more massive object, stores more GPE.\n\nStretched springs and magnets pulled apart also store potential energy. When an object falls, GPE changes into KE.",
          },
        ],
        keyFormulas: [
          { name: "Kinetic energy", statement: "$KE=\\dfrac{1}{2}mv^2$" },
          { name: "Gravitational potential energy", statement: "$GPE=mgh$" },
          {
            name: "Doubling speed",
            statement: "Kinetic energy becomes 4 times greater",
          },
        ],
        workedExample: {
          problem: "A 2 kg ball moves at 3 m/s. Calculate its kinetic energy.",
          solution:
            "$KE=\\frac{1}{2}mv^2=\\frac{1}{2}\\times2\\times3^2=\\frac{1}{2}\\times2\\times9=9\\text{ J}$.",
        },
      },
      questions: [
        {
          id: "s8-u1-kinetic-potential-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cyclist doubles her speed. The mass of the cyclist and bicycle does not change. What happens to the kinetic energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stays the same." },
              { id: "b", text: "It becomes half as much." },
              { id: "c", text: "It becomes four times greater." },
              { id: "d", text: "It doubles." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kinetic energy",
                statement:
                  "$KE=\\dfrac{1}{2}mv^2$, so KE is proportional to $v^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Speed is squared: $2^2=4$, so the kinetic energy is four times greater.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** It becomes four times greater.",
            commonErrors: [
              "Choosing 'doubles' because KE is wrongly thought to be proportional to speed.",
            ],
            examinerNote: "B1 for four times greater.",
          },
        },
        {
          id: "s8-u1-kinetic-potential-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A runner has a mass of 60 kg and runs at 5 m/s.\n\nCalculate her kinetic energy.",
          response: {
            type: "numeric",
            parts: [{ label: "Kinetic energy", answer: 750, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kinetic energy",
                statement: "$KE=\\dfrac{1}{2}mv^2$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute the values, squaring the speed only.",
                working: "KE=\\frac{1}{2}\\times60\\times5^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate with the unit.",
                working: "KE=30\\times25=750\\text{ J}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$750\\text{ J}$",
            commonErrors: [
              "Squaring the product $mv$ or forgetting to square the speed (giving 150 J).",
              "Forgetting the factor of one half (giving 1500 J).",
            ],
            examinerNote: "M1 for 0.5 x 60 x 25 (oe). A1 for 750 J.",
          },
        },
        {
          id: "s8-u1-kinetic-potential-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car has a mass of 1200 kg and a kinetic energy of 60 000 J.\n\nCalculate the speed of the car in meters per second.",
          response: {
            type: "numeric",
            parts: [{ label: "Speed", answer: 10, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kinetic energy",
                statement:
                  "$KE=\\dfrac{1}{2}mv^2$, so $v=\\sqrt{\\dfrac{2\\,KE}{m}}$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute into the kinetic energy equation.",
                working: "60\\,000=\\frac{1}{2}\\times1200\\times v^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange for $v^2$.",
                working: "v^2=\\frac{2\\times60\\,000}{1200}=100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the square root.",
                working: "v=10\\text{ m/s}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10\\text{ m/s}$",
            commonErrors: [
              "Forgetting to take the square root, giving 100 m/s.",
              "Dividing by 600 instead of multiplying by 2 and dividing by 1200 (inverting the half).",
            ],
            examinerNote:
              "M1 for substitution. M1 for $v^2=100$ (oe). A1 for 10 m/s.",
          },
        },
        {
          id: "s8-u1-kinetic-potential-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A roller coaster car has a mass of 400 kg. It is pulled to the top of a hill 20 m high and released from rest. Use $g=10\\text{ N/kg}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the gravitational potential energy of the car at the top of the hill.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Assume no energy is transferred to the surroundings. State the kinetic energy of the car at the bottom of the hill.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Calculate the speed of the car at the bottom of the hill.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "In reality the car is slower than your answer to (c). Explain why.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "GPE", statement: "$GPE=mgh$" },
              {
                kind: "formula",
                name: "Kinetic energy",
                statement: "$KE=\\dfrac{1}{2}mv^2$",
              },
              {
                kind: "law",
                name: "Conservation of energy",
                statement: "Energy is transferred, not created or destroyed.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Substitute into the GPE equation.",
                working: "GPE=400\\times10\\times20",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "80\\,000\\text{ J}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "All the GPE is transferred to KE.",
                working: "KE=80\\,000\\text{ J}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Substitute into the kinetic energy equation.",
                working: "80\\,000=\\frac{1}{2}\\times400\\times v^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Rearrange.",
                working: "v^2=\\frac{2\\times80\\,000}{400}=400",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Square root.",
                working: "v=20\\text{ m/s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Some energy is transferred to the surroundings as thermal energy because of friction and air resistance (and sound).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "So less than 80 000 J becomes kinetic energy, and the car has a lower speed.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $80\\,000\\text{ J}$ (b) $80\\,000\\text{ J}$ (c) $20\\text{ m/s}$ (d) Friction and air resistance transfer some energy as thermal energy, so less KE.",
            commonErrors: [
              "In (c) forgetting to take the square root.",
              "In (d) saying the energy is 'lost' or destroyed.",
            ],
            examinerNote:
              "(b) Allow ecf from (a). (c) Allow ecf from (b). (d) Reject 'energy is used up' or 'lost' unless transferred to the surroundings is stated.",
          },
        },
      ],
    },
    {
      id: "s8-u1-energy-transfer-thermal",
      title: "Energy transfer, conservation and thermal energy",
      skill:
        "Explain energy transfers using conservation of energy, describe thermal energy transfer, and evaluate insulation designs.",
      lesson: {
        sections: [
          {
            heading: "Conservation of energy",
            body: "The **law of conservation of energy** says that energy cannot be created or destroyed. It can only be **transferred** from one object to another or **transformed** from one form to another. The total energy of a closed system stays the same.\n\nA swinging pendulum continuously changes GPE to KE and back again. Each swing is slightly lower, because some energy is transferred to the surroundings as thermal energy by friction at the pivot and air resistance. This energy is not destroyed, but it is spread out and hard to use again.",
          },
          {
            heading: "Thermal energy and insulation",
            body: "**Temperature** measures the average kinetic energy of the particles in a substance. **Thermal energy** depends on the temperature, the mass, and the type of material. Thermal energy always flows from a **hotter** object to a **cooler** one until the temperatures become equal.\n\nIt moves by conduction, convection and radiation. An **insulator** (such as foam, wool or trapped air) slows the transfer. To design a container that keeps drinks hot:\n\n- use a poor conductor for the walls,\n- trap air or use a vacuum layer,\n- use a lid and a shiny inner surface to reduce losses.\n\nTo test a design, change only one variable, such as the material, and measure the temperature drop in the same time.",
          },
        ],
        keyFormulas: [
          {
            name: "Conservation of energy",
            statement: "Total energy before = total energy after",
          },
          {
            name: "Direction of thermal energy flow",
            statement: "From hotter to cooler",
          },
          {
            name: "Better insulator",
            statement: "Smaller temperature change in the same time",
          },
        ],
        workedExample: {
          problem:
            "A ball at the top of a ramp has 12 J of GPE. At the bottom it has 10 J of KE. Account for the missing energy.",
          solution:
            "Total energy is conserved, so the missing energy is $12-10=2\\text{ J}$. It was transferred to the surroundings as thermal energy (and sound) by friction and air resistance.",
        },
      },
      questions: [
        {
          id: "s8-u1-energy-transfer-thermal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two objects at different temperatures are placed in contact. In which direction does thermal energy flow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thermal energy does not flow." },
              {
                id: "b",
                text: "Equally in both directions, so the temperatures never change.",
              },
              { id: "c", text: "From the cooler object to the hotter object." },
              { id: "d", text: "From the hotter object to the cooler object." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thermal energy transfer",
                statement:
                  "Thermal energy flows from hotter to cooler regions until the temperatures are equal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The hotter object has particles with higher average kinetic energy, so net energy flows to the cooler object.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** From the hotter object to the cooler object.",
            commonErrors: ["Thinking that 'cold' flows into a warm object."],
            examinerNote: "B1 for hotter to cooler.",
          },
        },
        {
          id: "s8-u1-energy-transfer-thermal-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pendulum is released with 6.0 J of gravitational potential energy. At the lowest point of its swing, 0.5 J has been transferred to the surroundings as thermal energy.\n\nCalculate the kinetic energy of the pendulum at the lowest point.",
          response: {
            type: "numeric",
            parts: [{ label: "Kinetic energy", answer: 5.5, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation of energy",
                statement: "Total energy before = total energy after.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract the energy transferred to the surroundings from the starting energy.",
                working: "KE=6.0-0.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate with the unit.",
                working: "KE=5.5\\text{ J}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5.5\\text{ J}$",
            commonErrors: [
              "Adding 6.0 and 0.5.",
              "Saying the 0.5 J was destroyed.",
            ],
            examinerNote: "M1 for 6.0 - 0.5. A1 for 5.5 J.",
          },
        },
        {
          id: "s8-u1-energy-transfer-thermal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests three cups. Each holds 200 mL of water at 80 degrees Celsius. After 10 minutes, the temperature is measured.\n\n- Foam cup: 68 degrees Celsius\n- Paper cup: 61 degrees Celsius\n- Metal cup: 50 degrees Celsius\n\nUse evidence from the data to evaluate which cup is the best insulator and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Insulation",
                statement:
                  "A better insulator slows thermal energy transfer, so the temperature drops less.",
              },
            ],
            steps: [
              {
                reasoning: "Claim: the foam cup is the best insulator.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Evidence: it dropped by 12 degrees Celsius, compared with 19 for paper and 30 for metal.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Reasoning: less thermal energy was transferred from the water to the surroundings through foam.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Fair test: the volume, starting temperature and time were controlled, so the cup material caused the difference. Metal conducts well and lost the most.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Foam is the best insulator: its water cooled by only 12 degrees Celsius (paper 19, metal 30), so it let the least thermal energy escape; volume, start temperature and time were controlled.",
            commonErrors: [
              "Picking the metal cup because it has the lowest temperature.",
              "Not using the temperature drop as evidence.",
            ],
            examinerNote:
              "R1 for foam. B1 for figures (12, 19, 30 or final temperatures). R1 for less thermal energy transferred oe. B1 for control variables or metal as a conductor. Allow ecf if drops are calculated incorrectly but foam is chosen.",
          },
        },
        {
          id: "s8-u1-energy-transfer-thermal-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A team designs a travel mug to keep coffee hot. They test two prototypes. Each holds the same volume of coffee at 90 degrees Celsius, and the room temperature is 20 degrees Celsius. After 30 minutes:\n\n- Prototype A (single steel wall): 55 degrees Celsius\n- Prototype B (double wall with a vacuum gap and a lid): 78 degrees Celsius",
          parts: [
            {
              label: "a",
              prompt: "Calculate the temperature drop for each prototype.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe the direction in which thermal energy is transferred.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Explain, using ideas about particles, why a vacuum gap reduces the transfer of thermal energy by conduction.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain what happens to the energy that leaves the coffee, using the idea of conservation of energy.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Suggest one change to improve Prototype B and one variable that must be controlled to test it fairly.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation of energy",
                statement: "Energy is transferred, not destroyed.",
              },
              {
                kind: "principle",
                name: "Conduction",
                statement:
                  "Conduction needs particles to pass on vibrations; a vacuum has almost no particles.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Prototype A: $90-55=35$ degrees Celsius.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Prototype B: $90-78=12$ degrees Celsius.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "From the hot coffee to the cooler surroundings.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Conduction passes energy between particles that collide or vibrate against each other.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "A vacuum has almost no particles, so very little energy can be passed across the gap.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "The thermal energy lost by the coffee is not destroyed; it is transferred to the mug and the surroundings.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "The total energy stays the same, so the surroundings gain the energy that the coffee loses.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning:
                  "Improvement, for example a thicker lid, a shiny inner surface or a better seal.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "e",
                reasoning:
                  "Control variable: the starting temperature, volume of coffee, room temperature or time.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) A: 35 degrees Celsius; B: 12 degrees Celsius (b) Hot coffee to cooler surroundings (c) A vacuum has no particles to pass on energy (d) Energy is transferred to the surroundings, not destroyed (e) Better lid or seal; control the starting temperature, volume or time.",
            commonErrors: [
              "In (a) using the room temperature as the starting temperature.",
              "In (d) saying the energy disappears.",
            ],
            examinerNote:
              "(a) A1 for each. (c) Reject 'a vacuum is a good insulator' without particles. (e) Allow any sensible design change and any valid control variable.",
          },
        },
      ],
    },
  ],
};
