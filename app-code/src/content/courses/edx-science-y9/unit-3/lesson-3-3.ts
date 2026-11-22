import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "esc9-u3-lesson-3-3",
  code: "3-3",
  title: "Space and Magnetism",
  goal: "I CAN explain gravity, weight and the solar system, and describe magnets, magnetic fields and electromagnets.",
  standards: ["KS3 Physics", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Gravitational field strength", definition: "The force of gravity acting on each kilogram of mass, measured in newtons per kilogram (N/kg). It is 10 N/kg on Earth in this course." },
    { term: "Mass", definition: "The amount of matter in an object, measured in kilograms (kg). It does not change with location." },
    { term: "Weight", definition: "The force of gravity acting on an object, measured in newtons (N). It depends on the gravitational field strength." },
    { term: "Orbit", definition: "The curved path of an object around a star or planet, caused by gravity." },
    { term: "Magnetic field", definition: "The region around a magnet where a magnetic material or another magnet experiences a force." },
    { term: "Electromagnet", definition: "A magnet made from a coil of wire carrying a current, usually wrapped around an iron core, that can be switched on and off." },
    { term: "Magnetic material", definition: "A material attracted by a magnet. Iron, steel, nickel and cobalt are magnetic." },
  ],
  concepts: [
    {
      id: "esc9-u3-gravity-weight-solar",
      title: "Gravity, weight and the solar system",
      skill: "Calculate weight using $W = mg$, distinguish mass from weight, and describe the solar system.",
      lesson: {
        sections: [
          {
            heading: "Gravity, mass and weight",
            body: "Gravity is a non-contact force of attraction between any two objects with mass. It is large only when one of the objects is very massive, such as a planet or star. **Mass** is the amount of matter in an object and is measured in kilograms. **Weight** is the force of gravity on the object, measured in newtons. Mass stays the same everywhere, but weight changes with the gravitational field strength $g$.",
          },
          {
            heading: "Calculating weight",
            body: "Use $W = mg$. On Earth, $g = 10\\text{ N/kg}$ in this course, so a 5 kg bag weighs 50 N. On the Moon $g = 1.6\\text{ N/kg}$, so the same bag weighs $5 \\times 1.6 = 8\\text{ N}$, but its mass is still 5 kg. Weight is measured with a newton meter (a spring balance), mass with a balance.",
          },
          {
            heading: "The solar system",
            body: "The solar system has one star, the Sun, with eight planets in orbit around it. In order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Gravity from the Sun keeps each planet in orbit. Planets further from the Sun take longer to complete one orbit because they have a longer path to travel and the Sun's pull is weaker. Moons orbit planets, and the Moon orbits Earth in about 28 days. The Earth spins on its axis once a day, giving day and night, and it is tilted, which causes the seasons.",
          },
        ],
        keyFormulas: [
          { name: "Weight", statement: "$W = mg$ (weight in N = mass in kg $\\times$ gravitational field strength in N/kg)" },
          { name: "Gravitational field strength", statement: "Earth $10\\text{ N/kg}$, Moon $1.6\\text{ N/kg}$, Mars $3.7\\text{ N/kg}$ (values used in this course)" },
        ],
        workedExample: {
          problem: "A rock has a mass of 12 kg. Calculate its weight on the Moon, where $g = 1.6\\text{ N/kg}$.",
          solution: "$W = mg = 12 \\times 1.6 = 19.2\\text{ N}$. Its mass is still 12 kg.",
        },
      },
      questions: [
        {
          id: "esc9-u3-gravity-weight-solar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An astronaut travels from the Earth to the Moon. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Her mass stays the same and her weight decreases." },
              { id: "b", text: "Her mass and her weight both decrease by the same amount." },
              { id: "c", text: "Her mass decreases and her weight stays the same." },
              { id: "d", text: "Her mass and her weight both stay the same." },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass and weight", statement: "Mass is the amount of matter and does not change. Weight is the force of gravity, $W = mg$, and depends on $g$." },
            ],
            steps: [
              { reasoning: "The amount of matter is unchanged, but the Moon's gravitational field strength is less than Earth's, so her weight is less.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Her mass stays the same and her weight decreases.",
            commonErrors: ["Thinking mass and weight are the same quantity.", "Thinking that mass changes when gravity changes."],
            examinerNote: "B1 for (c) only.",
          },
        },
        {
          id: "esc9-u3-gravity-weight-solar-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An astronaut has a mass of 80 kg. The gravitational field strength on the Moon is 1.6 N/kg. Calculate the weight of the astronaut on the Moon, in newtons.",
          response: { type: "numeric", parts: [{ label: "Weight on the Moon", answer: 128, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
            ],
            steps: [
              { reasoning: "Substitute the mass and the Moon's gravitational field strength.", working: "W = mg = 80 \\times 1.6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "W = 128\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$128\\text{ N}$",
            commonErrors: ["Dividing 80 by 1.6 to get 50.", "Using $g = 10\\text{ N/kg}$ and giving 800 N."],
            examinerNote: "M1 for $80 \\times 1.6$. A1 for 128 N.",
          },
        },
        {
          id: "esc9-u3-gravity-weight-solar-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rock has a weight of 450 N on Earth, where $g = 10\\text{ N/kg}$. On Mars the gravitational field strength is 3.7 N/kg. Calculate the weight of the rock on Mars, in newtons. Give your answer to the nearest newton.",
          response: { type: "numeric", parts: [{ label: "Weight on Mars", answer: 167, tolerance: 1, unit: "N" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$, so $m = \\frac{W}{g}$" },
            ],
            steps: [
              { reasoning: "Find the mass from the weight on Earth. Mass is the same on Mars.", working: "m = \\frac{W}{g} = \\frac{450}{10} = 45\\text{ kg}", marks: 1, markCode: "M" },
              { reasoning: "Use the field strength on Mars.", working: "W = mg = 45 \\times 3.7 = 166.5\\text{ N}", marks: 1, markCode: "M" },
              { reasoning: "Round to the nearest newton.", working: "W \\approx 167\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$167\\text{ N}$ (166.5 N before rounding)",
            commonErrors: ["Multiplying 450 by 3.7 without finding the mass first.", "Assuming the weight is unchanged."],
            examinerNote: "M1 for 45 kg. M1 for $45 \\times 3.7$. A1 for 167 (allow 166.5 or 166).",
          },
        },
        {
          id: "esc9-u3-gravity-weight-solar-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A space probe has a mass of 250 kg. On Earth $g = 10\\text{ N/kg}$. The probe travels to Mars, where $g = 3.7\\text{ N/kg}$, and its weight is measured with a newton meter.",
          parts: [
            { label: "a", prompt: "Calculate the weight of the probe on Earth, in newtons.", marks: 2 },
            { label: "b", prompt: "Calculate the weight of the probe on Mars, in newtons.", marks: 2 },
            { label: "c", prompt: "State the mass of the probe on Mars, in kg.", marks: 1 },
            { label: "d", prompt: "Explain the difference between mass and weight.", marks: 2 },
            { label: "e", prompt: "Mars takes about 687 Earth days to orbit the Sun. Earth takes about 365 days. Suggest two reasons why Mars takes longer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
              { kind: "definition", name: "Mass and weight", statement: "Mass is the amount of matter in kg. Weight is a force in N caused by gravity acting on the mass." },
              { kind: "principle", name: "Orbits", statement: "Planets further from the Sun have a longer orbit path and the Sun's gravitational pull on them is weaker." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into the weight equation with $g = 10\\text{ N/kg}$.", working: "W = 250 \\times 10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "W = 2500\\text{ N}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute the field strength on Mars.", working: "W = 250 \\times 3.7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "W = 925\\text{ N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mass does not depend on location.", working: "250\\text{ kg}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Mass is the amount of matter in an object, measured in kilograms, and it is the same everywhere.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Weight is the force of gravity on the object, measured in newtons, and it changes with the gravitational field strength.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Mars is further from the Sun, so its orbit is longer and it has a greater distance to travel.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The Sun's gravitational pull is weaker at greater distance, so Mars moves more slowly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $2500\\text{ N}$ (b) $925\\text{ N}$ (c) $250\\text{ kg}$ (d) mass is the amount of matter (kg) and constant; weight is the gravitational force (N) and depends on $g$ (e) longer orbit path, weaker gravitational pull so slower orbital motion.",
            commonErrors: ["Dividing mass by $g$ in (a) and (b).", "Giving 925 kg for the mass on Mars in (c).", "Saying that Mars is 'colder' as a reason for the longer year."],
            examinerNote: "In (d) both units or both definitions are needed for the marks. In (e) accept 'bigger orbit' (oe).",
          },
        },
      ],
    },
    {
      id: "esc9-u3-magnets-electromagnets",
      title: "Magnets, magnetic fields and electromagnets",
      skill: "Describe magnetic fields, the forces between magnets, and how to make and strengthen an electromagnet.",
      lesson: {
        sections: [
          {
            heading: "Magnets and magnetic fields",
            body: "A magnet has two poles, north and south. **Like poles repel** and **unlike poles attract**. Magnetic force is a non-contact force. The region around a magnet where it exerts a force is its **magnetic field**. Field lines are drawn from the north pole to the south pole. They are closest together where the field is strongest, at the poles. Only a few materials are magnetic: iron, steel, nickel and cobalt.",
          },
          {
            heading: "Plotting fields and the Earth",
            body: "A plotting compass placed in a magnetic field points along the field line. By moving the compass step by step, the shape of the field can be drawn. The Earth has its own magnetic field, like a giant bar magnet, which is why a compass needle points to the north. The end of the needle that points north is a north-seeking pole, attracted to the magnetic pole in the Earth's northern hemisphere, which is magnetically a south pole.",
          },
          {
            heading: "Electromagnets",
            body: "An electric current flowing in a wire produces a magnetic field around it. Coiling the wire into a **solenoid** concentrates the field, and adding a soft iron core makes the magnet much stronger. An electromagnet can be switched on and off, and its strength changed. To make it stronger: increase the current, add more turns of wire, or use an iron core. Electromagnets are used in scrapyard cranes, electric bells and relays.",
          },
        ],
        keyFormulas: [
          { name: "Forces between poles", statement: "Like poles repel; unlike poles attract" },
          { name: "Stronger electromagnet", statement: "More current, more turns of wire, add an iron core" },
          { name: "Magnetic materials", statement: "Iron, steel, nickel, cobalt" },
        ],
        workedExample: {
          problem: "A student makes an electromagnet by coiling wire around an iron nail and connecting it to a cell. Suggest two ways to make it pick up more paper clips.",
          solution: "Increase the number of turns of wire around the nail, and increase the current (for example by adding a second cell in series). Both strengthen the magnetic field.",
        },
      },
      questions: [
        {
          id: "esc9-u3-magnets-electromagnets-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The north pole of one bar magnet is brought close to the north pole of a second bar magnet. What happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The magnets lose their magnetism." },
              { id: "b", text: "The magnets repel each other." },
              { id: "c", text: "The magnets attract each other." },
              { id: "d", text: "Nothing happens because the poles are the same." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Forces between magnetic poles", statement: "Like poles repel and unlike poles attract." },
            ],
            steps: [
              { reasoning: "Two north poles are like poles, so they repel.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The magnets repel each other.",
            commonErrors: ["Thinking that like poles attract, as with opposite electric charges."],
            examinerNote: "B1 for (b) only.",
          },
        },
        {
          id: "esc9-u3-magnets-electromagnets-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State three ways to increase the strength of an electromagnet made from a coil of wire connected to a battery.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strength of an electromagnet", statement: "The magnetic field is stronger with a larger current, more turns of wire and an iron core." },
            ],
            steps: [
              { reasoning: "Increase the current, for example by using a higher voltage or more cells.", marks: 1, markCode: "B" },
              { reasoning: "Increase the number of turns of wire in the coil.", marks: 1, markCode: "B" },
              { reasoning: "Place a (soft) iron core inside the coil.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Increase the current; add more turns of wire; use an iron core.",
            commonErrors: ["Using a copper or plastic core, which is not magnetic.", "Suggesting a longer wire without increasing the number of turns."],
            examinerNote: "Allow 'more cells / bigger voltage' for the current. Reject 'use a bigger magnet'. Maximum 3 marks.",
          },
        },
        {
          id: "esc9-u3-magnets-electromagnets-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student wants to find out how the number of turns of wire in an electromagnet affects how many steel paper clips it can pick up. Describe how she could carry out the investigation, including two control variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "Change one independent variable, measure the dependent variable and keep all other variables the same." },
            ],
            steps: [
              { reasoning: "Change the number of turns of wire (independent variable), for example 10, 20, 30, 40 and 50 turns.", marks: 1, markCode: "B" },
              { reasoning: "Measure the number of paper clips picked up (dependent variable) each time.", marks: 1, markCode: "B" },
              { reasoning: "Keep two control variables the same, for example the current (or voltage), the type and size of the core, and the type of paper clips.", marks: 1, markCode: "B" },
              { reasoning: "Repeat each measurement and calculate a mean to improve reliability.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Vary the number of turns, count the clips lifted, keep the current and core the same, and repeat to find a mean.",
            commonErrors: ["Changing the current at the same time as the number of turns.", "Describing the dependent variable as 'how strong' without a measurement."],
            examinerNote: "Allow any two sensible controls for the third mark. Allow 'repeat and average' (oe).",
          },
        },
        {
          id: "esc9-u3-magnets-electromagnets-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student uses a plotting compass to investigate the magnetic field around a bar magnet. A scrapyard also uses a large electromagnet on a crane to lift scrap iron.",
          parts: [
            { label: "a", prompt: "State the name of one other material, apart from iron, that is magnetic.", marks: 1 },
            { label: "b", prompt: "Describe how the student could use a plotting compass to draw a field line of the bar magnet.", marks: 3 },
            { label: "c", prompt: "State where the magnetic field of a bar magnet is strongest, and how the field lines show this.", marks: 2 },
            { label: "d", prompt: "Explain one advantage of using an electromagnet rather than a permanent magnet to move scrap iron.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Magnetic field", statement: "A region where a magnetic material or magnet experiences a force. Field lines run from north to south and are closest together where the field is strongest." },
              { kind: "principle", name: "Electromagnet", statement: "An electromagnet is only magnetic while a current flows, so it can be switched on and off." },
            ],
            steps: [
              { part: "a", reasoning: "Nickel, cobalt or steel are magnetic.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Place the compass near one pole of the magnet and mark the position of the needle's two ends with dots.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Move the compass so that its tail is at the dot where the head was, and mark the new position of the head. Repeat.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Join the dots with a smooth line, and mark an arrow pointing from north to south.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The field is strongest at the poles.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The field lines are closest together there.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "An electromagnet can be switched off by turning off the current.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So the crane can release the scrap iron where it is needed, whereas a permanent magnet would keep holding it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) nickel (or cobalt, steel) (b) mark the needle's ends, move the compass along step by step, join the dots and add an arrow from N to S (c) at the poles, where the lines are closest together (d) it can be switched off to release the iron.",
            commonErrors: ["Saying the field is strongest in the middle of the magnet.", "Drawing field lines that cross or point from south to north."],
            examinerNote: "In (a) allow steel; reject aluminium and copper. In (d) allow 'strength can be varied' (oe) for the first mark with a linked use for the second.",
          },
        },
      ],
    },
  ],
};
