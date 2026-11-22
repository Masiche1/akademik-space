import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "s8-u1-lesson-1-2",
  code: "1-2",
  title: "Gravity, Electricity and Magnetism",
  goal: "I CAN explain how gravitational forces depend on mass and distance, and describe how electric and magnetic forces and electromagnets work.",
  standards: ["MS-PS2-4", "MS-PS2-3", "MS-PS2-5", "SEP: Engaging in Argument from Evidence", "SEP: Planning and Carrying Out Investigations"],
  vocabulary: [
    { term: "Gravity", definition: "An attractive force between any two objects that have mass." },
    { term: "Weight", definition: "The force of gravity on an object, measured in newtons: $W = mg$." },
    { term: "Field", definition: "A region of space where an object feels a force without touching another object." },
    { term: "Electric charge", definition: "A property of matter that can be positive or negative and causes electric forces." },
    { term: "Magnetic pole", definition: "One of the two ends of a magnet, called north and south, where the magnetic force is strongest." },
    { term: "Electromagnet", definition: "A magnet made by passing an electric current through a coil of wire, usually wrapped around an iron core." },
    { term: "Magnetic field lines", definition: "Lines that show the direction of the magnetic force. Lines close together mean a stronger field." },
  ],
  concepts: [
    {
      id: "s8-u1-gravity-mass-distance",
      title: "Gravitational forces depend on mass and distance",
      skill: "Explain how gravitational force changes with mass and distance, and calculate weight using $W = mg$.",
      lesson: {
        sections: [
          {
            heading: "Gravity is always attractive",
            body: "Every object with mass pulls on every other object with mass. This force is **gravity**. It is always **attractive** and acts without contact, so it is a **non-contact force** acting through a gravitational **field**.\n\nThe strength of the gravitational force depends on two things:\n\n- **Mass:** the larger the masses of the objects, the stronger the force.\n- **Distance:** the farther apart the objects are, the weaker the force.\n\nYou do not notice the pull between everyday objects because their masses are tiny. You notice Earth's pull because Earth's mass is enormous. The Sun's huge mass is why it keeps the planets in orbit.",
          },
          {
            heading: "Mass and weight",
            body: "**Mass** is the amount of matter in an object, in kilograms. It does not change with location. **Weight** is the force of gravity on the object, in newtons.\n\n$$W=mg$$\n\n$g$ is the gravitational field strength, in $\\text{N/kg}$. On Earth $g\\approx9.8\\text{ N/kg}$, on the Moon $g\\approx1.6\\text{ N/kg}$ and on Jupiter $g\\approx24.8\\text{ N/kg}$. An astronaut has the same mass everywhere but weighs less on the Moon, because the Moon has less mass than Earth.",
          },
        ],
        keyFormulas: [
          { name: "Weight", statement: "$W=mg$" },
          { name: "Gravity and mass", statement: "Greater mass means stronger gravitational force" },
          { name: "Gravity and distance", statement: "Greater distance means weaker gravitational force" },
        ],
        workedExample: {
          problem: "A rover has a mass of 90 kg. Calculate its weight on Mars, where $g=3.7\\text{ N/kg}$.",
          solution: "$W=mg=90\\times3.7=333\\text{ N}$. Its mass is still 90 kg.",
        },
      },
      questions: [
        {
          id: "s8-u1-gravity-mass-distance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two objects are moved farther apart. What happens to the gravitational force between them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It gets stronger." },
              { id: "b", text: "It becomes repulsive." },
              { id: "c", text: "It stays the same." },
              { id: "d", text: "It gets weaker." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gravity and distance", statement: "Gravitational force decreases as the distance between objects increases." },
            ],
            steps: [
              { reasoning: "The farther apart the objects are, the weaker the attraction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** It gets weaker.",
            commonErrors: ["Thinking gravity can be repulsive; gravity is always attractive.", "Thinking distance does not matter."],
            examinerNote: "B1 for weaker / decreases.",
          },
        },
        {
          id: "s8-u1-gravity-mass-distance-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A backpack has a mass of 8 kg. The gravitational field strength on Earth is $9.8\\text{ N/kg}$.\n\nCalculate the weight of the backpack in newtons.",
          response: { type: "numeric", parts: [{ label: "Weight", answer: 78.4, tolerance: 0.1, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W=mg$" },
            ],
            steps: [
              { reasoning: "Substitute mass and field strength.", working: "W=8\\times9.8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "W=78.4\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$78.4\\text{ N}$",
            commonErrors: ["Dividing 8 by 9.8.", "Giving the weight in kilograms."],
            examinerNote: "M1 for 8 x 9.8. A1 for 78.4 N. Allow 80 N if 10 N/kg is used.",
          },
        },
        {
          id: "s8-u1-gravity-mass-distance-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rock weighs 196 N on Earth, where $g=9.8\\text{ N/kg}$. The same rock is taken to the Moon, where $g=1.6\\text{ N/kg}$.",
          parts: [
            { label: "a", prompt: "Calculate the mass of the rock in kilograms.", marks: 2 },
            { label: "b", prompt: "Calculate the weight of the rock on the Moon in newtons.", marks: 1 },
          ],
          response: { type: "numeric", parts: [{ label: "a", answer: 20, unit: "kg" }, { label: "b", answer: 32, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W=mg$, so $m=\\dfrac{W}{g}$" },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange the weight equation and substitute the Earth values.", working: "m=\\frac{W}{g}=\\frac{196}{9.8}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "m=20\\text{ kg}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mass is unchanged, so use the Moon's field strength.", working: "W=20\\times1.6=32\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $20\\text{ kg}$ (b) $32\\text{ N}$",
            commonErrors: ["Multiplying 196 by 9.8 in part (a).", "Changing the mass on the Moon."],
            examinerNote: "(a) M1 for 196 / 9.8. A1 for 20. (b) A1 for 32 N; allow ecf from (a).",
          },
        },
        {
          id: "s8-u1-gravity-mass-distance-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The gravitational field strength is $9.8\\text{ N/kg}$ on Earth and $24.8\\text{ N/kg}$ on Jupiter. A probe has a mass of 50 kg.",
          parts: [
            { label: "a", prompt: "Describe how the gravitational force between the probe and a planet changes as the probe moves farther from the planet.", marks: 1 },
            { label: "b", prompt: "Calculate the weight of the probe on Jupiter.", marks: 2 },
            { label: "c", prompt: "Calculate how many times greater the probe's weight is on Jupiter than on Earth. Give your answer to 1 decimal place.", marks: 2 },
            { label: "d", prompt: "Explain why the gravitational field strength is greater on Jupiter than on Earth, even though the probe's mass is the same in both places.", marks: 2 },
            { label: "e", prompt: "Explain why the Sun's gravity keeps the planets in orbit around it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W=mg$" },
              { kind: "principle", name: "Gravity, mass and distance", statement: "Gravitational force increases with mass and decreases with distance." },
            ],
            steps: [
              { part: "a", reasoning: "The force gets weaker as the distance increases.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute into the weight equation.", working: "W=50\\times24.8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "W=1240\\text{ N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Weight on Earth is $50\\times9.8=490\\text{ N}$. Divide the weights.", working: "\\frac{1240}{490}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 1 decimal place.", working: "2.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Jupiter has a much greater mass than Earth.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The greater the mass of a planet, the stronger its gravitational pull on objects near it.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The Sun has a huge mass, so it exerts a very strong attractive force on each planet.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "This force pulls each planet toward the Sun, continually changing its direction so it follows a curved orbit rather than a straight line.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Weaker (b) $1240\\text{ N}$ (c) $2.5$ times (d) Jupiter has far more mass (e) The Sun's large mass produces a strong attractive force that bends the planets' paths into orbits.",
            commonErrors: ["In (c) dividing the field strengths incorrectly as 9.8 / 24.8.", "In (d) saying the probe's mass changes on Jupiter."],
            examinerNote: "(b) A1 for 1240 N. (c) Allow 24.8 / 9.8 = 2.5. (d) Reject 'Jupiter is bigger' unless linked to mass. (e) Allow 'gravity acts as a centripetal force' oe.",
          },
        },
      ],
    },
    {
      id: "s8-u1-electric-magnetic-forces",
      title: "Electric and magnetic forces and electromagnets",
      skill: "Describe electric and magnetic forces, interpret magnetic fields, and explain how to change the strength of an electromagnet.",
      lesson: {
        sections: [
          {
            heading: "Electric and magnetic forces",
            body: "**Electric forces** act between charged objects. **Like charges repel** and **opposite charges attract**. The force is stronger when the charges are larger and when they are closer together.\n\n**Magnetic forces** act between magnets. **Like poles repel** and **opposite poles attract**. A magnet is surrounded by a **magnetic field**, drawn with field lines that point from north to south outside the magnet. Where the lines are closer together, the field is stronger.\n\nElectric and magnetic forces are both non-contact forces that act through fields. They can attract or repel, unlike gravity, which only attracts.",
          },
          {
            heading: "Electromagnets",
            body: "A current in a wire produces a magnetic field. Coiling the wire into a **solenoid** and adding an **iron core** makes a strong **electromagnet**.\n\nThe strength of an electromagnet increases when you:\n\n- increase the **current** (use more batteries or a higher voltage),\n- increase the **number of turns** of wire in the coil,\n- add an **iron core**.\n\nUnlike a permanent magnet, an electromagnet can be switched on and off, and its strength can be controlled. This makes it useful in scrapyard cranes, doorbells, motors and speakers.",
          },
        ],
        keyFormulas: [
          { name: "Electric forces", statement: "Like charges repel; opposite charges attract" },
          { name: "Magnetic forces", statement: "Like poles repel; opposite poles attract" },
          { name: "Stronger electromagnet", statement: "More current, more turns of wire, or an iron core" },
        ],
        workedExample: {
          problem: "A student builds an electromagnet that picks up 4 paper clips. Suggest two changes that will let it pick up more.",
          solution: "Increase the current by adding a second battery, and wind more turns of wire into the coil (or add an iron core if there is none). Each change makes the magnetic field stronger.",
        },
      },
      questions: [
        {
          id: "s8-u1-electric-magnetic-forces-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two magnets are placed with their north poles facing each other. What happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They attract each other." },
              { id: "b", text: "They lose their magnetism." },
              { id: "c", text: "They repel each other." },
              { id: "d", text: "Nothing happens because magnets only affect iron." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Magnetic poles", statement: "Like poles repel; opposite poles attract." },
            ],
            steps: [
              { reasoning: "Two north poles are like poles, so they repel.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** They repel each other.",
            commonErrors: ["Thinking that opposite poles repel.", "Thinking magnets only interact with iron."],
            examinerNote: "B1 for repel.",
          },
        },
        {
          id: "s8-u1-electric-magnetic-forces-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe **two** ways to increase the strength of an electromagnet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Electromagnet strength", statement: "Strength increases with current, number of turns and an iron core." },
            ],
            steps: [
              { reasoning: "One mark for each correct method, from: increase the current, add more turns of wire, add an iron core.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "Any two from: increase the current / voltage; increase the number of turns of wire; add an iron core.",
            commonErrors: ["Making the wire longer without adding turns.", "Reversing the battery, which changes the poles but not the strength."],
            examinerNote: "B1 for each. Allow 'add more batteries' for current. Reject 'use a bigger magnet'.",
          },
        },
        {
          id: "s8-u1-electric-magnetic-forces-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests how the number of turns of wire in a coil affects the strength of an electromagnet. She counts how many paper clips the electromagnet picks up. The current and iron core are the same each time.\n\n- 10 turns: 3 paper clips\n- 20 turns: 6 paper clips\n- 30 turns: 9 paper clips\n\nConstruct an explanation (claim, evidence, reasoning) about the effect of the number of turns on the strength of the electromagnet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electromagnet strength", statement: "More turns of wire produce a stronger magnetic field." },
            ],
            steps: [
              { reasoning: "Claim: increasing the number of turns increases the strength of the electromagnet.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: the number of paper clips rises from 3 to 6 to 9 as turns rise from 10 to 20 to 30.", marks: 1, markCode: "B" },
              { reasoning: "Pattern: doubling the turns doubles the number of paper clips lifted (directly proportional).", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: each turn adds to the magnetic field, so more turns make a stronger field that can attract more clips; current and core were controlled, so turns caused the change.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "More turns give a stronger electromagnet: 10, 20 and 30 turns lifted 3, 6 and 9 clips (proportional), because each turn adds to the field and other variables were controlled.",
            commonErrors: ["Describing the data with no claim or reasoning.", "Saying more clips means more current; current was kept constant."],
            examinerNote: "R1 for claim. B1 for data used. B1 for proportional pattern oe. R1 for reasoning linked to the field or controlled variables.",
          },
        },
        {
          id: "s8-u1-electric-magnetic-forces-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A junkyard uses a crane with a large electromagnet to move scrap iron. A student investigates electromagnets by changing the current. The number of turns and the iron core stay the same.\n\n- 0.5 A: 2 paper clips\n- 1.0 A: 4 paper clips\n- 1.5 A: 6 paper clips",
          parts: [
            { label: "a", prompt: "State what happens when two electrically charged objects with opposite charges are brought near each other.", marks: 1 },
            { label: "b", prompt: "Describe what the spacing of magnetic field lines around a magnet shows.", marks: 2 },
            { label: "c", prompt: "State the independent variable in the student's investigation.", marks: 1 },
            { label: "d", prompt: "Predict the number of paper clips picked up at 2.0 A. Explain how you made your prediction.", marks: 2 },
            { label: "e", prompt: "Explain why an electromagnet is better than a permanent magnet for dropping scrap iron into a truck.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Electric forces", statement: "Opposite charges attract; like charges repel." },
              { kind: "property", name: "Field lines", statement: "Closer field lines show a stronger magnetic field." },
              { kind: "principle", name: "Electromagnet strength", statement: "Strength increases with current." },
            ],
            steps: [
              { part: "a", reasoning: "Opposite charges attract each other.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Where the lines are close together, the magnetic field (force) is strong, as near the poles.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Where the lines are far apart, the field is weaker.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The independent variable is the current (in amperes).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Prediction: 8 paper clips.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The pattern is that each extra 0.5 A adds 2 clips (the number is proportional to the current).", marks: 1, markCode: "R" },
              { part: "e", reasoning: "An electromagnet can be switched off, so the field disappears and the scrap drops.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A permanent magnet cannot be switched off, so the scrap would not fall off.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) They attract (b) Close lines mean a stronger field; far-apart lines mean a weaker field (c) Current (d) 8 clips, because 2 more clips per extra 0.5 A (e) An electromagnet can be switched off to release the scrap.",
            commonErrors: ["In (c) naming the paper clips as the independent variable; that is the dependent variable.", "In (e) saying an electromagnet is stronger than every permanent magnet."],
            examinerNote: "(b) Allow 'field is stronger near the poles'. (d) Allow ecf for the explanation if a different number is given with a valid pattern. (e) Allow 'can be turned on and off' oe.",
          },
        },
      ],
    },
  ],
};
