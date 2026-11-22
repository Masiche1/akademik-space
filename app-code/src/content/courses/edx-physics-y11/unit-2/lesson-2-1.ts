import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "eph11-u2-lesson-2-1",
  code: "2-1",
  title: "Magnetic Fields, Electromagnets and the Motor Effect",
  goal: "I CAN describe magnetic fields and electromagnets, and use Fleming's left-hand rule to predict the force on a current-carrying wire.",
  standards: ["4PH1 6.1", "4PH1 6.2", "4PH1 6.3", "4PH1 6.4", "4PH1 6.5"],
  vocabulary: [
    { term: "Magnetic field", definition: "A region around a magnet or a current-carrying wire where a magnetic material or another magnet experiences a force." },
    { term: "Field line", definition: "A line showing the direction of the force on a north pole placed in the field. Outside a magnet the lines run from north to south." },
    { term: "Electromagnet", definition: "A coil of wire (solenoid) wrapped around a soft iron core that is magnetic only while a current flows." },
    { term: "Solenoid", definition: "A long coil of wire. Its magnetic field is similar to that of a bar magnet." },
    { term: "Motor effect", definition: "The force on a current-carrying conductor that is placed in a magnetic field, at right angles to the field." },
    { term: "Fleming's left-hand rule", definition: "With the thumb, first finger and second finger of the left hand at right angles: first finger = field, second finger = current, thumb = force (motion)." },
    { term: "Commutator", definition: "A split-ring in a d.c. motor that reverses the current in the coil every half turn so that the coil keeps turning in the same direction." },
  ],
  concepts: [
    {
      id: "eph11-u2-magnetic-fields-electromagnets",
      title: "Magnetic fields and electromagnets",
      skill: "Describe magnetic fields around magnets, wires and solenoids, and explain how to make an electromagnet stronger.",
      lesson: {
        sections: [
          {
            heading: "Magnets and magnetic fields",
            body: "Only a few materials are **magnetic**: iron, steel, cobalt and nickel. A magnet has two poles. **Like poles repel** and **unlike poles attract**. Repulsion is the only sure test for a magnet, because an unmagnetised piece of iron is also attracted to either pole by induced magnetism.\n\nThe **magnetic field** is the region where a magnet exerts a force. Field lines are drawn from the **north pole to the south pole** outside the magnet. Where the lines are closest together the field is strongest, which is at the poles. A **plotting compass** (a tiny magnet) points along the field line at its position, so it can be used to map the field.",
          },
          {
            heading: "Fields around wires and solenoids",
            body: "A current in a wire produces a magnetic field. Around a straight wire the field lines are **concentric circles** centred on the wire. The field is stronger closer to the wire and when the current is larger. Reversing the current reverses the direction of the field.\n\nWinding the wire into a coil, a **solenoid**, adds the fields of each turn together. Inside the solenoid the field is strong and uniform (parallel, evenly spaced lines). Outside it the field looks like that of a **bar magnet**, with a north pole at one end and a south pole at the other.",
          },
          {
            heading: "Electromagnets",
            body: "An **electromagnet** is a solenoid with a **soft iron core**. The core becomes strongly magnetised when a current flows and loses its magnetism when the current is switched off, because soft iron is easy to magnetise and demagnetise. Steel would stay magnetised.\n\nThe strength increases if you:\n\n- increase the **current**\n- increase the **number of turns** of wire\n- use a **soft iron core** (rather than air)\n\nUses include scrapyard cranes, electric bells, relays and loudspeakers, because the magnet can be switched on and off.",
          },
        ],
        keyFormulas: [
          { name: "Magnetic poles", statement: "Like poles repel; unlike poles attract." },
          { name: "Field direction", statement: "Outside a magnet, field lines run from north to south." },
          { name: "Stronger electromagnet", statement: "More current, more turns and a soft iron core." },
        ],
        workedExample: {
          problem: "A plotting compass is placed beside the north pole of a bar magnet. In which direction does its needle point, and why?",
          solution: "Field lines leave the north pole of a magnet. The north end of the compass needle points in the direction of the field, so it points **away from the north pole** of the bar magnet. (Equivalently, the north end of the needle is repelled by the magnet's north pole and the south end of the needle is attracted to it.)",
        },
      },
      questions: [
        {
          id: "eph11-u2-magnetic-fields-electromagnets-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about the magnetic field outside a bar magnet is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The field lines run from the south pole to the north pole." },
              { id: "b", text: "The field lines run from the north pole to the south pole." },
              { id: "c", text: "The field is strongest in the middle of the magnet, between the poles." },
              { id: "d", text: "The field lines are straight and parallel everywhere." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Field direction", statement: "Magnetic field lines outside a magnet run from the north pole to the south pole." },
            ],
            steps: [
              { reasoning: "The direction of the field is the direction of the force on a north pole, which is away from north and towards south.", working: "\\text{N} \\rightarrow \\text{S}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The field lines run from the north pole to the south pole.",
            commonErrors: ["Choosing (a), reversing the direction of the field.", "Choosing (d); the field is strongest at the poles, where the lines are closest together."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph11-u2-magnetic-fields-electromagnets-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student makes an electromagnet by winding insulated wire around an iron nail and connecting it to a d.c. power supply. State **three** ways the student could make the electromagnet stronger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Strength of an electromagnet", statement: "The magnetic field of a solenoid is stronger with a larger current, more turns and a soft iron core." },
            ],
            steps: [
              { reasoning: "Increase the current (for example by raising the voltage of the supply).", marks: 1, markCode: "B" },
              { reasoning: "Increase the number of turns of wire on the nail.", marks: 1, markCode: "B" },
              { reasoning: "Use a (larger) soft iron core, or wind the turns closer together.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Increase the current; increase the number of turns; use a soft iron core (or a larger one).",
            commonErrors: ["Saying 'use a bigger magnet' or 'use more wire' with no mention of more turns.", "Suggesting a steel core, which stays magnetised."],
            examinerNote: "Allow 'increase the voltage' or 'more cells' for the current mark. Ignore 'use a thicker nail' unless linked to the core. Do not accept 'iron nail' as an improvement, since the nail is already iron.",
          },
        },
        {
          id: "eph11-u2-magnetic-fields-electromagnets-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the core of an electromagnet used in a scrapyard crane is made of soft iron and not steel.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnetic hardness", statement: "Soft iron is magnetically soft: it is easily magnetised and loses its magnetism easily. Steel is magnetically hard and stays magnetised." },
            ],
            steps: [
              { reasoning: "Soft iron becomes strongly magnetised when the current flows, so the crane can pick up scrap iron.", marks: 1, markCode: "B" },
              { reasoning: "Soft iron loses its magnetism when the current is switched off, so the scrap is released.", marks: 1, markCode: "B" },
              { reasoning: "Steel would stay magnetised after the current is switched off, so the crane could not release the load.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Soft iron magnetises when the current is on and demagnetises when it is off, so the load can be dropped; steel would remain magnetised.",
            commonErrors: ["Saying steel is 'not magnetic'; steel is magnetic but keeps its magnetism.", "Saying soft iron is a better conductor of electricity."],
            examinerNote: "Allow 'temporary magnet' for soft iron and 'permanent magnet' for steel. The R mark needs the consequence for the crane.",
          },
        },
        {
          id: "eph11-u2-magnetic-fields-electromagnets-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates how the number of turns on an electromagnet affects the number of steel paper clips it can pick up. The coil is wound on an iron core and connected to a d.c. supply. The results are:\n\n- 10 turns: 3 paper clips\n- 20 turns: 6 paper clips\n- 30 turns: 9 paper clips\n- 40 turns: 12 paper clips",
          parts: [
            { label: "a", prompt: "Describe the shape of the magnetic field outside a long solenoid carrying a current.", marks: 1 },
            { label: "b", prompt: "State why the student must use a d.c. supply and not an a.c. supply to pick up paper clips steadily.", marks: 1 },
            { label: "c", prompt: "Identify the independent variable, the dependent variable and one control variable in this investigation.", marks: 3 },
            { label: "d", prompt: "Describe the relationship between the number of turns and the number of paper clips, using the data to support your answer, and predict the number of paper clips for 50 turns.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Field of a solenoid", statement: "Outside a solenoid the field is like that of a bar magnet." },
              { kind: "principle", name: "Controlled investigation", statement: "Change only the independent variable, measure the dependent variable and keep all other variables constant." },
              { kind: "property", name: "Direct proportion", statement: "If doubling one quantity doubles another, they are directly proportional." },
            ],
            steps: [
              { part: "a", reasoning: "The field outside is the same shape as the field of a bar magnet.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "An a.c. supply reverses the current continuously, so the poles would keep reversing and the magnetism would not be steady (the strength would vary, falling to zero).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The independent variable is the one the student changes.", working: "\\text{number of turns}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The dependent variable is the one measured.", working: "\\text{number of paper clips picked up}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any one variable kept constant, such as the current, the core material or the size of the paper clips.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The number of paper clips increases as the number of turns increases (directly proportional).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Evidence from the data: doubling the turns from 10 to 20 doubles the clips from 3 to 6, and the ratio is always 3 clips per 10 turns.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Each extra 10 turns adds 3 clips, so 50 turns gives 15.", working: "12 + 3 = 15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) like a bar magnet (b) a.c. would keep reversing the poles (c) turns; clips; e.g. current (d) directly proportional; 15 paper clips",
            commonErrors: ["Giving the number of clips as the independent variable.", "Saying 'the more turns the more clips' with no use of the data.", "Predicting 14 or 16 by adding a constant that does not match the pattern."],
            examinerNote: "In (b) allow 'the magnet would keep switching on and off' oe. In (c) accept any sensible control such as the same current, same iron core or same make of paper clip. The prediction in (d) is allowed ecf from a stated rate of increase.",
          },
        },
      ],
    },
    {
      id: "eph11-u2-motor-effect-flemings-lhr",
      title: "The motor effect and Fleming's left-hand rule",
      skill: "Use Fleming's left-hand rule to find the direction of the force on a current-carrying wire, and explain how a d.c. motor works.",
      lesson: {
        sections: [
          {
            heading: "The motor effect",
            body: "When a wire carrying a current is placed in a magnetic field, the magnetic field of the wire interacts with the field of the magnet and the wire experiences a **force**. This is the **motor effect**. It is greatest when the wire is at right angles to the field, and there is no force when the wire is parallel to the field.\n\nThe force is larger when you:\n\n- increase the **current**\n- use a **stronger magnet** (a stronger field)\n- use a **longer length** of wire in the field.\n\nThe force reverses if either the current or the field is reversed. If **both** are reversed, the force stays the same.",
          },
          {
            heading: "Fleming's left-hand rule",
            body: "Hold the thumb, first finger and second finger of your **left hand** at right angles to each other:\n\n- **first finger** points along the **field** (north to south)\n- **second finger** points along the **current** (positive to negative, the conventional current)\n- **thumb** points in the direction of the **force** (the motion).\n\nExample: a field pointing north and a current flowing east gives a force upwards.",
          },
          {
            heading: "The d.c. motor",
            body: "A rectangular **coil** is placed between the poles of a magnet. The current flows in opposite directions along the two long sides of the coil, so the forces on them are **opposite**, and the coil turns.\n\nAfter half a turn, the forces would turn the coil back. A **split-ring commutator** swaps the connections to the supply every half turn, which reverses the current in the coil so the forces keep it turning in the **same direction**. Carbon brushes press on the commutator to make contact.\n\nA motor turns faster if you increase the current, use a stronger magnet or add more turns to the coil. Reversing the current or the magnet reverses the direction of rotation.",
          },
        ],
        keyFormulas: [
          { name: "Fleming's left-hand rule", statement: "First finger = field, second finger = current, thumb = force (motion)." },
          { name: "Electrical power", statement: "$P = IV$" },
          { name: "Efficiency", statement: "$\\text{efficiency} = \\frac{\\text{useful output power}}{\\text{total input power}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A wire carries a current of $2.0\\text{ A}$ in a field. The current direction is reversed and the field direction is also reversed. What happens to the direction of the force on the wire?",
          solution: "Reversing the current alone reverses the force. Reversing the field alone also reverses the force. Doing **both** reverses the force twice, so it ends up in the **original direction**. The size of the force is unchanged.",
        },
      },
      questions: [
        {
          id: "eph11-u2-motor-effect-flemings-lhr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Fleming's left-hand rule, what does the thumb represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The direction of the current" },
              { id: "b", text: "The direction of the induced voltage" },
              { id: "c", text: "The direction of the magnetic field" },
              { id: "d", text: "The direction of the force (motion)" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Fleming's left-hand rule", statement: "First finger = field, second finger = current, thumb = force (motion)." },
            ],
            steps: [
              { reasoning: "The thumb gives the direction of the thrust, the force on the wire. The field is the first finger and the current is the second finger.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The direction of the force (motion)",
            commonErrors: ["Choosing (a), confusing the thumb with the first finger.", "Choosing (d); induced voltage belongs to generators, not the motor effect."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph11-u2-motor-effect-flemings-lhr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A straight wire carrying a current is in a magnetic field and experiences a force. State **two** ways to reverse the direction of the force and **one** way to increase its size.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Motor effect", statement: "The force reverses if the current or the field is reversed, and increases with a larger current or stronger field." },
            ],
            steps: [
              { reasoning: "Reverse the direction of the current.", marks: 1, markCode: "B" },
              { reasoning: "Reverse the direction of the magnetic field (swap the poles of the magnet).", marks: 1, markCode: "B" },
              { reasoning: "Increase the current, or use a stronger magnet, or place a longer length of wire in the field.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Reverse the current; reverse the field; increase the current (or use a stronger magnet).",
            commonErrors: ["Saying 'reverse both the current and the field', which leaves the force unchanged.", "Saying 'use a thicker wire'."],
            examinerNote: "Allow 'swap the battery connections' for reversing the current. Reject 'increase the voltage' only if no mention of current; allow 'more cells' oe.",
          },
        },
        {
          id: "eph11-u2-motor-effect-flemings-lhr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A horizontal straight wire carries a current from west to east. It is in a horizontal uniform magnetic field that points north.\n\nUse Fleming's left-hand rule to determine the direction of the force on the wire. Describe how you use the rule, and state what happens to the direction of the force if both the current and the field are reversed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Fleming's left-hand rule", statement: "First finger = field, second finger = current, thumb = force. The three are mutually at right angles." },
            ],
            steps: [
              { reasoning: "Point the first finger north (the field) and the second finger east (the current), at right angles.", marks: 1, markCode: "M" },
              { reasoning: "The thumb, which is at right angles to both, points upwards.", working: "\\text{force upwards}", marks: 1, markCode: "A" },
              { reasoning: "Reversing the current alone would reverse the force, and reversing the field alone would too.", marks: 1, markCode: "B" },
              { reasoning: "Reversing both leaves the force in the same direction, still upwards.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The force is upwards. If both the current and the field are reversed, the force is still upwards.",
            commonErrors: ["Using the right hand, which gives downwards.", "Saying the force is along the wire or along the field; it is always at right angles to both.", "Saying that reversing both reverses the force."],
            examinerNote: "Allow 'vertically up' oe. The A mark is for upwards only. Do not award the R mark for 'no change' with no direction.",
          },
        },
        {
          id: "eph11-u2-motor-effect-flemings-lhr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A simple d.c. motor has a rectangular coil between the poles of two magnets. The motor is connected to a $12\\text{ V}$ supply and draws a current of $3.0\\text{ A}$. It lifts a load and has a useful output power of $27\\text{ W}$.",
          parts: [
            { label: "a", prompt: "Explain why the coil begins to turn when the current is switched on.", marks: 2 },
            { label: "b", prompt: "Explain the purpose of the split-ring commutator.", marks: 2 },
            { label: "c", prompt: "Calculate the electrical power supplied to the motor.", marks: 2 },
            { label: "d", prompt: "Calculate the efficiency of the motor, as a percentage.", marks: 2 },
            { label: "e", prompt: "Suggest one change that would make the motor turn faster.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Motor effect", statement: "A current-carrying conductor in a magnetic field experiences a force." },
              { kind: "formula", name: "Electrical power", statement: "$P = IV$" },
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency} = \\frac{\\text{useful output power}}{\\text{total input power}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "The current in the two long sides of the coil is in opposite directions, so by Fleming's left-hand rule the forces on them are in opposite directions.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The two opposite forces act as a turning effect (a moment), so the coil rotates.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The commutator reverses the current in the coil every half turn.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "So the forces on each side stay in the same direction relative to the field and the coil keeps rotating the same way (instead of stopping or turning back).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Substitute into $P = IV$.", working: "P = IV = 3.0 \\times 12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "36\\text{ W}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide useful output power by the input power and multiply by 100.", working: "\\frac{27}{36} \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "75\\%", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Any one: increase the current, use stronger magnets, or add more turns to the coil.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) forces on opposite sides act in opposite directions and turn the coil (b) reverses the current every half turn so the coil keeps turning in the same direction (c) $36\\text{ W}$ (d) $75\\%$ (e) increase the current (or use stronger magnets, or more turns)",
            commonErrors: ["Saying the commutator 'makes the motor turn faster'.", "Calculating efficiency as $36 \\div 27 \\times 100 = 133\\%$.", "Using $P = V \\div I$."],
            examinerNote: "In (c) allow ecf in (d) from a wrong answer to (c). In (e) allow 'increase the voltage' oe. Reject 'make the coil heavier'.",
          },
        },
      ],
    },
  ],
};
