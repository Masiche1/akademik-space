import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "eph10-u2-lesson-2-3",
  code: "2-3",
  title: "Mains Electricity and Static Electricity",
  goal: "I CAN describe mains wiring, fuses and earthing, and explain static charge using the movement of electrons.",
  standards: ["4PH1 2.1", "4PH1 2.2", "4PH1 2.3", "4PH1 2.4", "4PH1 2.5", "4PH1 2.6", "4PH1 2.7"],
  vocabulary: [
    { term: "Live wire", definition: "The brown wire in a mains cable. It carries the alternating pd of about $230\\text{ V}$ and is dangerous to touch." },
    { term: "Neutral wire", definition: "The blue wire in a mains cable. It completes the circuit and is at about $0\\text{ V}$." },
    { term: "Earth wire", definition: "The green and yellow wire. It connects the metal case of an appliance to the ground so that a fault current flows safely away." },
    { term: "Fuse", definition: "A thin wire in the live side of a circuit that melts and breaks the circuit if the current is too large." },
    { term: "Earthing", definition: "Connecting a metal object to the ground by a wire so that charge can flow away and the object cannot stay at a dangerous pd." },
    { term: "Electrostatic charging", definition: "The build-up of charge on an insulator, caused by electrons transferring from one surface to another when they are rubbed together." },
    { term: "Electric field", definition: "A region in which a charged object experiences a force." },
  ],
  concepts: [
    {
      id: "eph10-u2-mains-fuses-earthing",
      title: "Mains electricity, fuses and earthing",
      skill: "Identify the mains wires, choose a fuse rating and explain how fuses and earth wires make appliances safe.",
      lesson: {
        sections: [
          {
            heading: "The mains supply and the three-core cable",
            body: "In the UK the mains supply is **alternating current (a.c.)** at about **$230\\text{ V}$** and a frequency of **$50\\text{ Hz}$**. A cell supplies direct current (d.c.), which flows in one direction only.\n\nA three-pin plug has three wires:\n\n| Wire | Colour | Job |\n| --- | --- | --- |\n| Live | brown | carries the high alternating pd |\n| Neutral | blue | completes the circuit, about $0\\text{ V}$ |\n| Earth | green and yellow | safety wire to the metal case |\n\nThe cable is covered in **plastic insulation**, because plastic is an electrical insulator and keeps the user safe. The plug pins are brass, which is a good conductor.",
          },
          {
            heading: "Fuses and circuit breakers",
            body: "A **fuse** is fitted in the **live** wire. If the current is too large, the fuse wire heats up and melts, which breaks the circuit and switches off the appliance. A **circuit breaker** does the same job using an electromagnet and can be reset.\n\nChoose a fuse with a rating **just above** the normal working current. Common fuses are $3\\text{ A}$, $5\\text{ A}$ and $13\\text{ A}$. A $1\\text{ A}$ current needs a $3\\text{ A}$ fuse; a $4\\text{ A}$ current needs a $5\\text{ A}$ fuse. If the fuse is too high, it will not melt in time and the wires may overheat and start a fire. If it is too low, it will melt during normal use.",
          },
          {
            heading: "Earthing and double insulation",
            body: "Many appliances have a **metal case**. The **earth wire** connects the case to the ground.\n\nIf the live wire comes loose and touches the case, a large current flows through the earth wire to the ground, because the earth wire has a very low resistance. This large current **melts the fuse**, which disconnects the live wire. The case can no longer become live, so nobody gets a shock.\n\nAppliances with a plastic case, such as hairdryers, are **double insulated**. They do not need an earth wire, because the plastic case cannot conduct. A switch should always be on the live side, so the appliance is dead when switched off.",
          },
        ],
        keyFormulas: [
          { name: "Mains supply (UK)", statement: "about $230\\text{ V}$ a.c. at $50\\text{ Hz}$" },
          { name: "Working current", statement: "$I = \\frac{P}{V}$, then choose the fuse just above this value" },
          { name: "Wire colours", statement: "live brown, neutral blue, earth green and yellow" },
        ],
        workedExample: {
          problem: "A hairdryer is rated $230\\text{ V}$, $1.4\\text{ kW}$. Calculate its working current and choose a fuse from $3\\text{ A}$, $5\\text{ A}$ and $13\\text{ A}$.",
          solution: "$P = 1400\\text{ W}$, so $I = \\frac{P}{V} = \\frac{1400}{230} = 6.1\\text{ A}$.\n\n$3\\text{ A}$ and $5\\text{ A}$ are below the working current and would melt in normal use. The $13\\text{ A}$ fuse is the one just above $6.1\\text{ A}$.",
        },
      },
      questions: [
        {
          id: "eph10-u2-mains-fuses-earthing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a UK three-pin plug, which colour is the earth wire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Green and yellow" },
              { id: "b", text: "Brown" },
              { id: "c", text: "Blue" },
              { id: "d", text: "Red" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Wire colours", statement: "Live is brown, neutral is blue and earth is green and yellow." },
            ],
            steps: [
              { reasoning: "The earth wire has green and yellow stripes. Brown is live and blue is neutral.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Green and yellow",
            commonErrors: ["Choosing (a): brown is the live wire.", "Choosing (d): red is the old live colour and is not used in current UK plugs."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph10-u2-mains-fuses-earthing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A toaster is rated $230\\text{ V}$, $920\\text{ W}$. Calculate the current in the toaster when it works normally, and state which fuse from $3\\text{ A}$, $5\\text{ A}$ and $13\\text{ A}$ should be fitted. Give the current as the numeric answer, in amperes.",
          response: {
            type: "numeric",
            parts: [{ label: "Working current", answer: 4, unit: "A", tolerance: 0.05 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P = IV$, so $I = \\frac{P}{V}$." },
              { kind: "principle", name: "Fuse choice", statement: "The fuse rating is the next value above the working current." },
            ],
            steps: [
              { reasoning: "Rearrange $P = IV$ and substitute.", working: "I = \\frac{920}{230}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "I = 4.0\\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "The fuse rating must be just above $4.0\\text{ A}$, so the $5\\text{ A}$ fuse is used.", working: "5\\text{ A}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$4.0\\text{ A}$; fit the $5\\text{ A}$ fuse",
            commonErrors: ["Choosing the $13\\text{ A}$ fuse, which would not protect the toaster properly.", "Choosing $3\\text{ A}$, which is below the working current and would melt immediately."],
            examinerNote: "The fuse mark depends on a correct current (allow ecf). A numeric entry is checked for the current only.",
          },
        },
        {
          id: "eph10-u2-mains-fuses-earthing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A metal-cased electric heater has a fuse and an earth wire. The live wire inside the heater becomes loose and touches the metal case. Explain how the fuse and the earth wire together protect a person who touches the case.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Earthing and fuses", statement: "The earth wire provides a low-resistance path to ground; the large fault current melts the fuse and disconnects the live supply." },
            ],
            steps: [
              { reasoning: "The case is connected to the earth wire, which has a very low resistance.", marks: 1, markCode: "B" },
              { reasoning: "A large current flows from the live wire through the case and the earth wire to the ground.", marks: 1, markCode: "B" },
              { reasoning: "This large current is above the fuse rating, so the fuse melts (heats up and breaks).", marks: 1, markCode: "B" },
              { reasoning: "The live supply is disconnected, so the case cannot stay at a high pd and the person does not receive an electric shock.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The earth wire gives a low-resistance path, a large current flows, the fuse melts and disconnects the live wire, so the case is no longer live.",
            commonErrors: ["Saying that the earth wire stops the current from flowing.", "Placing the fuse in the neutral wire.", "Saying the fuse 'absorbs' the extra current."],
            examinerNote: "Allow 'circuit breaker trips' for fuse melts (oe). Reject 'the earth wire melts the fuse' without reference to the large current.",
          },
        },
        {
          id: "eph10-u2-mains-fuses-earthing-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student is wiring a three-pin plug for a $230\\text{ V}$, $1.2\\text{ kW}$ iron with a metal base plate.",
          parts: [
            { label: "a", prompt: "Name the three wires in the cable and give the colour of the insulation on each.", marks: 3 },
            { label: "b", prompt: "Calculate the working current of the iron. Give your answer to 2 significant figures.", marks: 2 },
            { label: "c", prompt: "The plug may be fitted with a $3\\text{ A}$, $5\\text{ A}$ or $13\\text{ A}$ fuse. Choose the correct fuse and give a reason.", marks: 2 },
            { label: "d", prompt: "Explain why the cable is covered with plastic and why the iron needs an earth wire.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$I = \\frac{P}{V}$" },
              { kind: "principle", name: "Fuse choice", statement: "Fit a fuse with a rating just above the working current." },
              { kind: "principle", name: "Earthing", statement: "A metal case must be earthed so that a fault current flows to the ground." },
            ],
            steps: [
              { part: "a", reasoning: "Live is brown.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Neutral is blue.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Earth is green and yellow.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Convert to watts and substitute into $I = \\frac{P}{V}$.", working: "I = \\frac{1200}{230}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 2 significant figures.", working: "I = 5.2\\text{ A}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Choose the $13\\text{ A}$ fuse.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It is the only rating above the working current of $5.2\\text{ A}$; the $3\\text{ A}$ and $5\\text{ A}$ fuses would melt in normal use.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Plastic is an electrical insulator, so it stops the user touching the live wire or current flowing to the user.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The earth wire connects the metal base plate to the ground.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "If the live wire touches the plate, a large current flows to earth and melts the fuse, so the plate cannot give a shock.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) live brown, neutral blue, earth green and yellow (b) $5.2\\text{ A}$ (c) $13\\text{ A}$, because the working current is above $5\\text{ A}$ (d) plastic insulates; earth wire gives a low-resistance path so the fuse melts if the case becomes live",
            commonErrors: ["Choosing the $5\\text{ A}$ fuse because 5.2 'rounds down' to 5.", "Swapping the colours of live and neutral.", "Saying the plastic 'blocks electricity from escaping the wire' with no reference to safety."],
            examinerNote: "In (a) all three names and colours are needed for 3 marks; two correct earn 2 marks, one correct earns 1. In (b) allow 5.22 (ecf for (c)).",
          },
        },
      ],
    },
    {
      id: "eph10-u2-static-electricity",
      title: "Static electricity",
      skill: "Explain charging by friction, attraction and repulsion, and the uses and dangers of static charge.",
      lesson: {
        sections: [
          {
            heading: "Charging by friction",
            body: "All materials contain positive protons and negative electrons. Normally an object is **neutral**, with equal positive and negative charge.\n\nWhen two **insulators** are rubbed together, **electrons** (not protons) transfer from one surface to the other.\n\n- The surface that **gains electrons** becomes **negatively** charged.\n- The surface that **loses electrons** becomes **positively** charged.\n\nBoth surfaces gain equal and opposite charges. For example, rubbing a polythene rod with a cloth moves electrons from the cloth to the rod, so the rod is negative and the cloth is positive. Metals cannot hold static charge in the hand because charge leaks away through the body.",
          },
          {
            heading: "Forces between charges",
            body: "- **Like charges repel** (positive and positive, or negative and negative).\n- **Unlike charges attract** (positive and negative).\n\nThe forces act through an **electric field**, a region where a charged object feels a force. The force is stronger when the charges are closer together.\n\nA charged object also attracts a **neutral insulator**. The charge on the object pushes the electrons in the neutral material slightly, so the near surface becomes the opposite charge. This opposite charge is closer than the same charge, so the attraction wins. That is why a rubbed balloon sticks to a wall or picks up small pieces of paper.",
          },
          {
            heading: "Uses and dangers",
            body: "**Uses:**\n- paint spraying: the droplets all have the same charge and repel, giving an even coat, and are attracted to the earthed object\n- photocopiers and electrostatic precipitators that remove dust from chimney gases\n\n**Dangers:**\n- a charged object can discharge with a **spark**, which could ignite fuel vapour or flammable gases; fuel tankers and aircraft are **earthed** while refuelling\n- lightning and small electric shocks from clothing or car doors\n\nEarthing lets electrons flow between the object and the ground, so the charge cannot build up. Electrons flow to earth from a negatively charged object, and from earth to a positively charged object.",
          },
        ],
        keyFormulas: [
          { name: "Charging", statement: "Electrons are transferred; the surface that gains electrons is negative, the one that loses them is positive" },
          { name: "Forces", statement: "Like charges repel; unlike charges attract" },
          { name: "Charge flow", statement: "$Q = It$" },
        ],
        workedExample: {
          problem: "A cloth is used to rub a polythene rod, which becomes negatively charged. Explain what has happened to the cloth.",
          solution: "The rod has gained electrons, so those electrons must have come from the cloth. The cloth has lost electrons, so it has an excess of positive charge and is positively charged. It has the same size of charge as the rod, but the opposite sign.",
        },
      },
      questions: [
        {
          id: "eph10-u2-static-electricity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A polythene rod becomes negatively charged when it is rubbed with a cloth. What has happened?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rod has lost electrons to the cloth." },
              { id: "b", text: "The rod has gained protons from the cloth." },
              { id: "c", text: "The rod has gained electrons from the cloth." },
              { id: "d", text: "The rod has lost protons to the cloth." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Charging by friction", statement: "Electrons transfer between surfaces; the surface that gains electrons becomes negative." },
            ],
            steps: [
              { reasoning: "Only electrons move when objects are rubbed. A negative object has gained extra electrons.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The rod has gained electrons from the cloth.",
            commonErrors: ["Choosing (b) or (d): protons are fixed in the nuclei and do not move.", "Choosing (c), the opposite direction of transfer."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "eph10-u2-static-electricity-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A metal sphere is charged and then discharged through a wire to earth. The current in the wire is a steady $2.0\\ \\mu\\text{A}$ for $30\\text{ s}$. Calculate the charge that flows. Give your answer in microcoulombs ($\\mu\\text{C}$).",
          response: {
            type: "numeric",
            parts: [{ label: "Charge", answer: 60, unit: "$\\mu$C", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Charge", statement: "$Q = It$" },
            ],
            steps: [
              { reasoning: "Substitute into $Q = It$. A current in microamperes gives a charge in microcoulombs.", working: "Q = 2.0 \\times 30", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "Q = 60\\ \\mu\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\ \\mu\\text{C}$",
            commonErrors: ["Dividing $\\frac{30}{2.0} = 15$."],
            examinerNote: "A1 for 60 $\\mu$C. Allow $6.0 \\times 10^{-5}\\text{ C}$.",
          },
        },
        {
          id: "eph10-u2-static-electricity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A balloon is rubbed on a jumper and then placed against a wall. It sticks to the wall, although the wall is neutral. Explain why the balloon sticks to the wall.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Charging by friction", statement: "Rubbing transfers electrons, leaving the balloon charged." },
              { kind: "principle", name: "Electrostatic attraction", statement: "Unlike charges attract. A charged object induces the opposite charge on the near surface of a neutral insulator." },
            ],
            steps: [
              { reasoning: "Rubbing transfers electrons to the balloon (from the jumper), so the balloon becomes negatively charged.", marks: 1, markCode: "B" },
              { reasoning: "The negative charge on the balloon repels electrons in the wall surface, which move slightly away.", marks: 1, markCode: "B" },
              { reasoning: "The wall surface nearest the balloon therefore has a positive charge.", marks: 1, markCode: "B" },
              { reasoning: "Unlike charges attract, and the attraction to the nearer positive charge is greater than the repulsion from the farther negative charge, so the balloon sticks.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The balloon gains electrons and is negative; it makes the near surface of the wall positive; unlike charges attract.",
            commonErrors: ["Saying that the wall is positively charged to begin with.", "Saying that protons move on the wall.", "Saying that 'static' alone makes it stick."],
            examinerNote: "Allow a balloon that is positive if the sign is consistent throughout. Do not allow movement of protons.",
          },
        },
        {
          id: "eph10-u2-static-electricity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student rubs a polythene rod with a dry woollen duster. The rod becomes negatively charged.",
          parts: [
            { label: "a", prompt: "State which type of particle is transferred when the rod is rubbed.", marks: 1 },
            { label: "b", prompt: "State the sign of the charge on the duster and give a reason.", marks: 2 },
            { label: "c", prompt: "The charged rod is brought close to a second, identical negatively charged rod hanging from a thread. Describe what happens to the hanging rod and name the force.", marks: 2 },
            { label: "d", prompt: "The student holds the charged rod near small pieces of paper. Explain why the paper is attracted to the rod, and why some pieces then fall off.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Charging by friction", statement: "Electrons are transferred between insulators." },
              { kind: "law", name: "Forces between charges", statement: "Like charges repel; unlike charges attract." },
            ],
            steps: [
              { part: "a", reasoning: "Electrons are the particles that transfer.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The duster is positive.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "It has lost electrons to the rod, leaving more positive charge than negative.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The hanging rod is pushed away (repelled) from the first rod.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The force is an electrostatic force between like charges (repulsion).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The charged rod pushes electrons in the paper away, so the near side of the paper becomes positive.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The paper is attracted because the nearer positive charge is attracted more than the farther negative charge is repelled.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Pieces fall off when they touch the rod and gain electrons from it, so they become negatively charged like the rod and are repelled.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) electrons (b) positive, as it lost electrons (c) repelled by an electrostatic force between like charges (d) induced positive charge on near side attracts the paper; on contact the paper gains negative charge and is repelled",
            commonErrors: ["Saying the paper is attracted because it has an opposite charge to start with.", "Saying that the rod and the second rod attract because both are charged.", "Saying that protons are transferred."],
            examinerNote: "In (d) the third mark may be gained by 'the pieces become charged by contact and then repel' (oe). Allow ecf for the sign of the duster in (b) only if it is consistent with (a).",
          },
        },
      ],
    },
  ],
};
