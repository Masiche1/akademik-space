import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "myps2-u3-lesson-3-3",
  code: "3-3",
  title: "Magnetism and Motion",
  goal: "I CAN describe magnetic fields and plan a fair test on electromagnets, and use speed, distance-time graphs and pressure calculations.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
    "Key concept: Relationships",
    "Related concept: Movement",
  ],
  vocabulary: [
    { term: "Magnetic field", definition: "The region around a magnet where a magnetic material or another magnet feels a force." },
    { term: "Electromagnet", definition: "A magnet made by passing an electric current through a coil of wire, usually wrapped round an iron core. It can be switched on and off." },
    { term: "Average speed", definition: "The total distance travelled divided by the total time taken." },
    { term: "Gradient", definition: "The steepness of a graph line. On a distance-time graph it represents the speed." },
    { term: "Pressure", definition: "The force acting on each unit of area, measured in pascals ($\\text{Pa}$), where $1\\ \\text{Pa} = 1\\ \\text{N/m}^2$." },
    { term: "Stationary", definition: "Not moving. On a distance-time graph this is shown by a horizontal line." },
  ],
  concepts: [
    {
      id: "myps2-u3-magnets-electromagnets",
      title: "Magnets and electromagnets",
      skill: "Describe magnetic fields, explain how an electromagnet works, and plan a fair test of the factors that affect its strength.",
      lesson: {
        sections: [
          {
            heading: "Magnets and magnetic fields",
            body: "A magnet has two **poles**, north and south. **Like poles repel** and **unlike poles attract**. Only a few materials are magnetic: iron, steel, nickel and cobalt. Copper, aluminium and plastic are not.\n\nThe **magnetic field** is the region around a magnet where it exerts a force. It can be shown with iron filings or a plotting compass. Field lines are drawn from the north pole to the south pole. They are closest together where the field is **strongest**, which is at the poles. A magnetic force is a non-contact force.",
          },
          {
            heading: "Electromagnets",
            body: "A current in a wire produces a magnetic field around the wire. Winding the wire into a coil (a **solenoid**) strengthens the field, and putting a soft iron core inside makes it stronger still. This is an **electromagnet**.\n\nElectromagnets are useful because they can be switched off, and their strength can be changed. They are used in scrapyard cranes, door bells, relays and electric motors.\n\nThe strength of an electromagnet increases if you:\n\n- increase the **current** (use more cells or a higher pd)\n- increase the **number of turns** of the coil\n- use a **soft iron core**",
          },
          {
            heading: "Investigating an electromagnet fairly",
            body: "To test one factor, change only that factor.\n\n- **Independent variable**: the factor you change, for example the number of turns.\n- **Dependent variable**: the strength, measured by the number of paper clips (or the mass of iron filings) picked up.\n- **Control variables**: the current, the size and material of the core, the type of paper clip.\n\nRepeat each test at least three times and calculate a mean. A good hypothesis gives a prediction and a reason, for example: \"More turns will pick up more paper clips because each turn adds to the magnetic field.\"",
          },
        ],
        keyFormulas: [
          { name: "Magnetic poles", statement: "Like poles repel; unlike poles attract" },
          { name: "Electromagnet strength", statement: "Increases with more current, more turns, and a soft iron core" },
          { name: "Mean", statement: "$\\text{mean} = \\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
        ],
        workedExample: {
          problem: "A student tests an electromagnet with 20 turns of wire and picks up 3, 4 and 5 paper clips in three trials. Find the mean number of paper clips picked up.",
          solution: "Mean $= \\dfrac{3 + 4 + 5}{3} = \\dfrac{12}{3} = 4$ paper clips.",
        },
      },
      questions: [
        {
          id: "myps2-u3-magnets-electromagnets-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change would make an electromagnet **stronger**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Putting a soft iron core inside the coil" },
              { id: "b", text: "Reducing the current" },
              { id: "c", text: "Using fewer turns of wire" },
              { id: "d", text: "Replacing the iron core with a plastic rod" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Electromagnet strength", statement: "An electromagnet is stronger with more current, more turns of wire and a soft iron core." },
            ],
            steps: [
              { reasoning: "Soft iron becomes magnetised by the coil's field and adds to it. The other changes weaken the magnet.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Putting a soft iron core inside the coil",
            commonErrors: ["Thinking fewer turns concentrate the field.", "Thinking a plastic rod acts as a core."],
            examinerNote: "B1 for soft iron core.",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two bar magnets are placed on a table with the north pole of magnet 1 facing the north pole of magnet 2.\n\nState what happens, and name the type of force acting between the magnets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Magnetic poles", statement: "Like poles repel and unlike poles attract." },
            ],
            steps: [
              { reasoning: "Two north poles are like poles, so the magnets repel (push each other apart).", marks: 1, markCode: "B" },
              { reasoning: "The force acts without the magnets touching, so it is a non-contact force (a magnetic force).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The magnets repel; the force is a non-contact (magnetic) force.",
            commonErrors: ["Saying unlike poles repel.", "Saying magnetic force is a contact force."],
            examinerNote: "B1 for repel / push apart. B1 for non-contact force (allow magnetic force).",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A scrapyard uses a large electromagnet on a crane to move scrap iron. A permanent magnet of similar strength could also lift iron.\n\nExplain **two** reasons why an electromagnet is more useful than a permanent magnet for this job, and state **one** way to make the electromagnet stronger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Electromagnet control", statement: "An electromagnet can be switched on and off, and its strength can be changed by changing the current." },
            ],
            steps: [
              { reasoning: "It can be switched off by stopping the current, so the scrap iron is released where it is needed. A permanent magnet would keep holding the iron.", marks: 1, markCode: "B" },
              { reasoning: "It can be switched on only when needed, so unwanted iron is not picked up and it is safer to move around.", marks: 1, markCode: "B" },
              { reasoning: "Its strength can be controlled by changing the current, so different loads can be lifted.", marks: 1, markCode: "R" },
              { reasoning: "Make it stronger by increasing the current, adding more turns or using a larger soft iron core (any one).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "It can be switched off to release the load and its strength can be varied; it is made stronger with more current, more turns or a soft iron core.",
            commonErrors: ["Saying an electromagnet is always stronger than a permanent magnet.", "Saying it works without electricity."],
            examinerNote: "Any two of the first three points for 2 marks, then B1 for a correct way to increase strength. Allow 'can be turned off' oe.",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student wants to find out how the number of turns of wire affects the strength of an electromagnet. She winds insulated wire round an iron nail, connects it to a power supply and measures the strength by counting the number of steel paper clips the nail picks up. She tests 10, 20, 30 and 40 turns.\n\nHer results for the number of paper clips picked up were:\n\n- 10 turns: 2, 3, 2\n- 20 turns: 5, 5, 6\n- 30 turns: 8, 9, 7\n- 40 turns: 11, 12, 10",
          parts: [
            { label: "a", prompt: "Write a hypothesis for this investigation, with a scientific reason.", marks: 2 },
            { label: "b", prompt: "State the independent variable, the dependent variable and **two** control variables.", marks: 4 },
            { label: "c", prompt: "Calculate the mean number of paper clips picked up with 30 turns.", marks: 1 },
            { label: "d", prompt: "Describe the pattern in the results and state a conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair test", statement: "Change one variable (independent), measure one (dependent) and keep all others the same (control)." },
              { kind: "property", name: "Electromagnet strength", statement: "More turns of wire produce a stronger magnetic field." },
            ],
            steps: [
              { part: "a", reasoning: "Prediction: the more turns of wire, the more paper clips the electromagnet picks up (stronger magnet).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Reason: each turn of wire adds to the magnetic field, so more turns make the total field stronger.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Independent variable: the number of turns of wire.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Dependent variable: the number of paper clips picked up.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Control variable 1: the current (same power supply setting), because current also changes the strength.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Control variable 2: the same nail (core), the same type of paper clip, or the same wire.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Add the three readings and divide by 3.", working: "\\frac{8 + 9 + 7}{3} = \\frac{24}{3} = 8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Pattern: the mean number of clips rises as the number of turns increases (about 2.3, 5.3, 8, 11 for 10, 20, 30, 40 turns), a steady increase.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Conclusion: the strength of the electromagnet increases as the number of turns increases, which supports the hypothesis.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) More turns gives a stronger magnet because each turn adds to the field (b) independent: turns; dependent: clips picked up; controls: current and nail (c) 8 clips (d) More turns means more clips; supports the hypothesis.",
            commonErrors: ["Naming the number of paper clips as the independent variable.", "Forgetting to keep the current the same.", "Writing a prediction without a reason."],
            examinerNote: "(b) Allow 'strength of the electromagnet' for dependent variable. Allow any two sensible controls. (c) Allow 8.0. (d) Allow description of direct or proportional trend, ignore 'doubles' unless data support it.",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two bar magnets are brought near each other north-pole to north-pole. What happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They attract" },
              { id: "b", text: "They repel" },
              { id: "c", text: "They stick together permanently" },
              { id: "d", text: "Nothing happens" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Magnetic poles", statement: "Like poles repel and unlike poles attract." },
            ],
            steps: [
              { reasoning: "Two north poles are like poles, so they repel each other.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They repel",
            commonErrors: ["Choosing attract, which is for unlike poles."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is magnetic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron" },
              { id: "b", text: "Aluminium" },
              { id: "c", text: "Plastic" },
              { id: "d", text: "Copper" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnetic materials", statement: "Only a few materials are magnetic: iron, steel, nickel and cobalt." },
            ],
            steps: [
              { reasoning: "Iron is magnetic; copper, plastic and aluminium are not.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Iron",
            commonErrors: ["Choosing aluminium because it is a metal."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Outside a bar magnet, in which direction do the magnetic field lines run?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From the middle to the ends" },
              { id: "b", text: "From north pole to south pole" },
              { id: "c", text: "From south pole to north pole" },
              { id: "d", text: "In circles around the magnet" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnetic field", statement: "Field lines are drawn from the north pole to the south pole outside the magnet." },
            ],
            steps: [
              { reasoning: "Outside the magnet the field lines go from north to south; inside they continue from south to north.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** From north pole to south pole",
            commonErrors: ["Reversing the direction."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An electromagnet picks up 5, 7 and 6 paper clips in three trials.\n\nCalculate the mean number of paper clips picked up.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean", answer: 6, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "mean = sum of readings / number of readings" },
            ],
            steps: [
              { reasoning: "Add the readings and divide by 3.", working: "\\frac{5 + 7 + 6}{3} = \\frac{18}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 6\\text{ clips}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 paper clips",
            commonErrors: ["Adding without dividing by 3.", "Dividing by the wrong number."],
            examinerNote: "M1 for 18/3 oe. A1 for 6.",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In three trials an electromagnet lifts 6, 8 and 7 paper clips.\n\nCalculate the mean number of paper clips lifted.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean", answer: 7, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "mean = sum of readings / number of readings" },
            ],
            steps: [
              { reasoning: "Add the readings and divide by 3.", working: "\\frac{6 + 8 + 7}{3} = \\frac{21}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 7\\text{ clips}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 paper clips",
            commonErrors: ["Giving 21 (the sum)."],
            examinerNote: "M1 for 21/3 oe. A1 for 7.",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Three readings of the mass of iron filings picked up by an electromagnet are 4 g, 5 g and 6 g.\n\nCalculate the mean mass picked up.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean mass", answer: 5, tolerance: 0, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "mean = sum of readings / number of readings" },
            ],
            steps: [
              { reasoning: "Add the readings and divide by 3.", working: "\\frac{4 + 5 + 6}{3} = \\frac{15}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 5\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 g",
            commonErrors: ["Dividing by 2 instead of 3."],
            examinerNote: "M1 for 15/3 oe. A1 for 5 g.",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An electromagnet picks up paper clips in three trials with readings 9, 12 and 6. One result looks like an outlier.\n\nCalculate the mean of all three readings, and calculate the mean if the outlier (6) is excluded.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mean of all three", answer: 9, tolerance: 0 },
              { label: "Mean without outlier", answer: 10.5, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "mean = sum of readings / number of readings" },
            ],
            steps: [
              { reasoning: "All three: $\\frac{9 + 12 + 6}{3} = \\frac{27}{3} = 9$.", working: "\\frac{27}{3}", marks: 1, markCode: "M" },
              { reasoning: "Without the outlier: $\\frac{9 + 12}{2} = \\frac{21}{2}$.", working: "\\frac{21}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate both.", working: "9\\text{ and }10.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mean of all three = 9; without outlier = 10.5",
            commonErrors: ["Dividing by 3 in the second calculation."],
            examinerNote: "M1 for each mean setup. A1 for 9 and 10.5.",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "An electromagnet is made by winding wire into a coil (solenoid) around a soft iron core and passing a current through the wire.\n\nExplain how each of these three features affects the strength of the electromagnet: (i) the current, (ii) the number of turns of wire, (iii) the soft iron core.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Electromagnet strength", statement: "Strength increases with more current, more turns of coil, and a soft iron core." },
            ],
            steps: [
              { reasoning: "A larger current produces a stronger magnetic field around each turn of wire.", marks: 1, markCode: "B" },
              { reasoning: "More turns of wire means the fields from each turn add together, making a stronger overall field.", marks: 1, markCode: "B" },
              { reasoning: "The soft iron core becomes magnetised by the coil's field and concentrates/adds to it.", marks: 1, markCode: "B" },
              { reasoning: "All three changes make the electromagnet stronger; removing the current or core makes it weak or zero.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "More current, more turns and a soft iron core all increase the magnetic field strength; they combine to make a stronger electromagnet.",
            commonErrors: ["Saying the core 'stores' electricity."],
            examinerNote: "B1 for each correct feature. R1 for combined effect. Allow oe.",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student wants to find out whether increasing the CURRENT makes an electromagnet stronger. She plans to change the number of batteries in the circuit.\n\nDescribe a fair test she could carry out, naming the independent variable, the dependent variable, and two control variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair test", statement: "Change only the independent variable, measure the dependent variable and keep all other variables constant." },
            ],
            steps: [
              { reasoning: "Independent variable: the current, changed by using a different number of cells / a variable power supply.", marks: 1, markCode: "B" },
              { reasoning: "Dependent variable: the strength, measured by the number of paper clips (or mass of iron filings) picked up.", marks: 1, markCode: "B" },
              { reasoning: "Control variable 1: the same coil (same number of turns, same wire) so only current changes.", marks: 1, markCode: "B" },
              { reasoning: "Control variable 2: the same core (iron nail), same type of paper clip, same method of counting; repeat trials and average.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Change current (cells), measure clips picked up; keep coil turns, core, clips and method the same; repeat and average.",
            commonErrors: ["Changing turns as well as current."],
            examinerNote: "B1 independent. B1 dependent. B1 two distinct controls. Allow any two sensible controls.",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where is the magnetic field of a bar magnet STRONGEST?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the exact centre of the magnet" },
              { id: "b", text: "It is the same everywhere" },
              { id: "c", text: "At the poles" },
              { id: "d", text: "At the weakest point halfway between poles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnetic field", statement: "Field lines are closest together where the field is strongest, at the poles." },
            ],
            steps: [
              { reasoning: "The field is strongest at the poles where the field lines are closest together.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** At the poles",
            commonErrors: ["Thinking the field is uniform."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are electromagnets used in scrapyard cranes instead of permanent magnets?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They can be switched off and their strength can be changed" },
              { id: "b", text: "They are always on, which is safer" },
              { id: "c", text: "They do not need electricity" },
              { id: "d", text: "They are lighter than permanent magnets" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Electromagnets", statement: "Electromagnets can be switched off and their strength adjusted by changing current or turns." },
            ],
            steps: [
              { reasoning: "The crane needs to drop the scrap when finished, so a switchable magnet is essential; strength can also be varied.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They can be switched off and their strength can be changed",
            commonErrors: ["Thinking permanent magnets cannot be turned off at all is the only issue."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-magnets-electromagnets-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student tests how CURRENT affects electromagnet strength. She uses the same coil and core, connects it to a variable power supply and counts paper clips picked up.\n\n| Current (A) | Clips picked up (3 trials) |\n| --- | --- |\n| 0.5 | 3, 4, 3 |\n| 1.0 | 6, 7, 5 |\n| 1.5 | 9, 10, 8 |",
          parts: [
            { label: "a", prompt: "Calculate the mean number of clips picked up at each current.", marks: 3 },
            { label: "b", prompt: "Describe the pattern in the results.", marks:1 },
            { label: "c", prompt: "State the independent variable, the dependent variable and one control variable.", marks: 2 },
            { label: "d", prompt: "Explain why the student used the same coil and core for every trial.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "mean = sum of readings / number of readings" },
              { kind: "property", name: "Electromagnet strength", statement: "Strength increases with current, turns and a soft iron core." },
            ],
            steps: [
              { part: "a", reasoning: "0.5 A: $\\frac{3+4+3}{3} = \\frac{10}{3} \\approx 3.3$.", working: "\\approx 3.3", marks: 1, markCode: "A" },
              { part: "a", reasoning: "1.0 A: $\\frac{6+7+5}{3} = \\frac{18}{3} = 6$.", working: "= 6", marks: 1, markCode: "A" },
              { part: "a", reasoning: "1.5 A: $\\frac{9+10+8}{3} = \\frac{27}{3} = 9$.", working: "= 9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The mean number of clips increases as the current increases: about 3.3, 6, 9 for 0.5, 1.0, 1.5 A.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Independent: the current; dependent: the number of clips picked up.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Control: the same coil (turns) and core, or the same type of paper clip / same method.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Keeping the coil and core the same means only the current changes.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Otherwise turns or core differences would also change the strength and the test would not be fair (no valid conclusion).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) ~3.3, 6, 9 clips (b) More current = more clips / stronger (c) independent: current; dependent: clips; control: coil/core (d) Same coil/core keeps the test fair so only current changes.",
            commonErrors: ["In (a) arithmetic slips in the means.", "In (d) saying it makes the test 'faster'."],
            examinerNote: "(a) Accept 3.3 or 10/3 for the first mean. (c) Allow any valid control. (d) Require fair-test reasoning.",
          },
        },
      ],
    },
    {
      id: "myps2-u3-speed-and-pressure",
      title: "Speed, graphs and pressure",
      skill: "Calculate average speed, interpret distance-time graphs described in words, and use p = F / A.",
      lesson: {
        sections: [
          {
            heading: "Speed",
            body: "**Average speed** is the total distance divided by the total time.\n\n$$\\text{speed} = \\frac{\\text{distance}}{\\text{time}} \\qquad \\text{distance} = \\text{speed} \\times \\text{time} \\qquad \\text{time} = \\frac{\\text{distance}}{\\text{speed}}$$\n\nUse consistent units: metres and seconds give $\\text{m/s}$; kilometres and hours give $\\text{km/h}$. To convert, $1\\ \\text{m/s} = 3.6\\ \\text{km/h}$. A moving object rarely keeps a perfectly steady speed, so the calculated value is an average.",
          },
          {
            heading: "Distance-time graphs",
            body: "On a distance-time graph, time is on the horizontal axis and distance from the start is on the vertical axis.\n\n- A **horizontal line** means the object is **stationary**.\n- A **straight sloping line** means **constant speed**. The steeper the line, the faster the object.\n- A **curve getting steeper** means the object is speeding up; one getting flatter means it is slowing down.\n- The **gradient** equals the speed: $\\dfrac{\\text{change in distance}}{\\text{change in time}}$.\n- A line sloping back down towards zero means the object is returning to the start.",
          },
          {
            heading: "Pressure",
            body: "**Pressure** is the force on each unit area.\n\n$$p = \\frac{F}{A}$$\n\nwith $p$ in pascals ($\\text{Pa}$), $F$ in newtons and $A$ in square metres ($\\text{m}^2$). So $1\\ \\text{Pa} = 1\\ \\text{N/m}^2$.\n\nFor the same force, a **smaller area gives a larger pressure**. That is why knives are sharp and nails have points, and why snowshoes and wide tractor tyres spread the weight over a large area so they do not sink. Convert $\\text{cm}^2$ to $\\text{m}^2$ by dividing by $10\\,000$.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}$" },
          { name: "Gradient of a distance-time graph", statement: "gradient $=$ speed" },
          { name: "Pressure", statement: "$p = \\dfrac{F}{A}$ ($p$ in $\\text{Pa}$, $F$ in $\\text{N}$, $A$ in $\\text{m}^2$)" },
        ],
        workedExample: {
          problem: "A cyclist rides $18\\ \\text{km}$ in $1.5$ hours. Find the average speed in km/h. A box weighing $200\\ \\text{N}$ rests on a surface with a contact area of $0.50\\ \\text{m}^2$. Find the pressure.",
          solution: "Speed $= 18 \\div 1.5 = 12\\ \\text{km/h}$. Pressure $= F \\div A = 200 \\div 0.50 = 400\\ \\text{Pa}$.",
        },
      },
      questions: [
        {
          id: "myps2-u3-speed-and-pressure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a distance-time graph, what does a **horizontal** line show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The object is speeding up." },
              { id: "b", text: "The object is moving at a constant speed." },
              { id: "c", text: "The object is stationary." },
              { id: "d", text: "The object is returning to the start." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading distance-time graphs", statement: "A horizontal line means the distance does not change with time, so the object is stationary." },
            ],
            steps: [
              { reasoning: "Time passes but the distance from the start stays the same, so the object is not moving.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The object is stationary.",
            commonErrors: ["Thinking a horizontal line means constant speed, as it would on a speed-time graph."],
            examinerNote: "B1 for stationary.",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person weighing $600\\ \\text{N}$ stands on both feet. The total area of the soles in contact with the floor is $0.040\\ \\text{m}^2$.\n\nCalculate the pressure on the floor, in pascals.",
          response: { type: "numeric", parts: [{ label: "Pressure", answer: 15000, unit: "Pa" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "$p = \\dfrac{F}{A}$" },
            ],
            steps: [
              { reasoning: "Substitute the force and area into $p = F/A$.", working: "p = \\frac{600}{0.040}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "p = 15\\,000\\text{ Pa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\,000\\ \\text{Pa}$",
            commonErrors: ["Multiplying force by area to get 24.", "Using the area in cm squared."],
            examinerNote: "M1 for 600 / 0.040 (oe). A1 for 15 000 Pa. Allow 15 kPa.",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A runner completes a race in three stages:\n\n- Stage 1: 400 m in 80 s\n- Stage 2: 200 m in 60 s\n- Stage 3: 600 m in 100 s\n\nCalculate the runner's average speed for the whole race, in m/s. Give your answer to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Average speed", answer: 5, tolerance: 0.05, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average speed", statement: "$\\text{average speed} = \\dfrac{\\text{total distance}}{\\text{total time}}$" },
            ],
            steps: [
              { reasoning: "Add the distances of the three stages.", working: "400 + 200 + 600 = 1200\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Add the times of the three stages.", working: "80 + 60 + 100 = 240\\text{ s}", marks: 1, markCode: "M" },
              { reasoning: "Divide the total distance by the total time.", working: "\\frac{1200}{240}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit. To 2 significant figures this is 5.0 m/s.", working: "5.0\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5.0\\ \\text{m/s}$",
            commonErrors: ["Averaging the three stage speeds (5.0, 3.33, 6.0 gives 4.78), which is not the average speed for the whole journey."],
            examinerNote: "M1 total distance. M1 total time. M1 for dividing. A1 for 5.0 m/s (allow 5). Reject the mean of the stage speeds.",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A distance-time graph shows a student's journey from home to school. For the first 10 minutes (600 s) the line slopes upwards steadily from 0 m to 900 m. For the next 4 minutes (240 s) the line is horizontal at 900 m while she waits at a crossing. For the last 6 minutes (360 s) the line slopes upwards more steeply from 900 m to 1800 m.\n\nShe carries a school bag. The bag has a weight of 80 N and a strap of contact area $0.0040\\ \\text{m}^2$ on her shoulder; a wider strap has a contact area of $0.010\\ \\text{m}^2$.",
          parts: [
            { label: "a", prompt: "Calculate her speed during the first 600 s.", marks: 2 },
            { label: "b", prompt: "Describe what the horizontal section of the graph tells you about her motion.", marks: 1 },
            { label: "c", prompt: "Calculate her average speed for the whole journey of 1200 s, in m/s.", marks: 2 },
            { label: "d", prompt: "Calculate the pressure of the bag on her shoulder for the narrow strap and for the wide strap.", marks: 3 },
            { label: "e", prompt: "Explain why the wide strap is more comfortable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}$, which is the gradient of a distance-time graph." },
              { kind: "formula", name: "Pressure", statement: "$p = \\dfrac{F}{A}$" },
            ],
            steps: [
              { part: "a", reasoning: "Speed is the gradient: distance divided by time for the first section.", working: "\\frac{900}{600}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "1.5\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The distance does not change while time passes, so she is stationary (speed 0 m/s) for 240 s.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Average speed is total distance divided by total time (600 + 240 + 360 = 1200 s).", working: "\\frac{1800}{1200}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "1.5\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Narrow strap: substitute into $p = F/A$.", working: "p = \\frac{80}{0.0040} = 20\\,000\\text{ Pa}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Wide strap: the same force on a larger area.", working: "p = \\frac{80}{0.010} = 8000\\text{ Pa}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both answers have the correct unit, pascals.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The weight of the bag is the same for both straps, but the wide strap spreads it over a larger area.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A larger area gives a smaller pressure ($8000\\ \\text{Pa}$ instead of $20\\,000\\ \\text{Pa}$), so the strap presses less hard into her shoulder.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $1.5\\ \\text{m/s}$ (b) Stationary for 240 s (c) $1.5\\ \\text{m/s}$ (d) $20\\,000\\ \\text{Pa}$ and $8000\\ \\text{Pa}$ (e) Same force on a larger area gives a lower pressure.",
            commonErrors: ["Using only the moving time in (c).", "Saying the horizontal line means she is moving at a steady speed.", "Using a smaller area to get a smaller pressure."],
            examinerNote: "(a) Check: last section speed is 900/360 = 2.5 m/s, steeper as described. (c) Reject 'mean of the section speeds'. (d) Allow kPa. (e) Allow 'force is spread out' oe.",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A runner covers 100 m in 20 s. What is her average speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "80 m/s" },
              { id: "b", text: "2000 m/s" },
              { id: "c", text: "0.2 m/s" },
              { id: "d", text: "5 m/s" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "$\\text{speed} = \\frac{100}{20} = 5\\text{ m/s}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 5 m/s",
            commonErrors: ["Dividing 20 by 100 to get 0.2."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a distance-time graph, what does the GRADIENT of a straight line represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speed" },
              { id: "b", text: "The total distance travelled" },
              { id: "c", text: "The acceleration" },
              { id: "d", text: "The time taken" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Distance-time graphs", statement: "The gradient of a distance-time graph equals the speed: change in distance / change in time." },
            ],
            steps: [
              { reasoning: "Gradient = change in distance / change in time = speed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The speed",
            commonErrors: ["Thinking gradient gives acceleration (that is a speed-time graph)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a distance-time graph, a curve that gets STEEPER as time goes on shows that the object is…",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moving at constant speed" },
              { id: "b", text: "Stationary" },
              { id: "c", text: "Slowing down" },
              { id: "d", text: "Speeding up" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Distance-time graphs", statement: "A steeper line/curve means a greater speed; getting steeper means speeding up." },
            ],
            steps: [
              { reasoning: "The gradient equals speed, so an increasing gradient means the object is accelerating / speeding up.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Speeding up",
            commonErrors: ["Confusing with a speed-time graph."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A cyclist travels 240 m in 60 s.\n\nCalculate the average speed.",
          response: {
            type: "numeric",
            parts: [{ label: "Average speed", answer: 4, tolerance: 0.01, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide distance by time.", working: "\\frac{240}{60}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 4.0\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.0 m/s",
            commonErrors: ["Multiplying distance by time."],
            examinerNote: "M1 for 240/60 oe. A1 for 4.0 m/s.",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels 1.5 km in 0.5 hours.\n\nCalculate the average speed in km/h.",
          response: {
            type: "numeric",
            parts: [{ label: "Average speed", answer: 3, tolerance: 0.01, unit: "km/h" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide distance by time in consistent units.", working: "\\frac{1.5}{0.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 3.0\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3.0 km/h",
            commonErrors: ["Mixing km and seconds."],
            examinerNote: "M1 for 1.5/0.5 oe. A1 for 3.0 km/h.",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object moves at a steady speed of $12\\ \\text{m/s}$ for 45 s.\n\nCalculate the distance travelled.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 540, tolerance: 0.01, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{distance} = \\text{speed} \\times \\text{time}$" },
            ],
            steps: [
              { reasoning: "Multiply speed by time.", working: "12 \\times 45", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 540\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "540 m",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 for 12x45 oe. A1 for 540 m.",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A box weighing $300\\ \\text{N}$ rests on a surface with a contact area of $0.25\\ \\text{m}^2$.\n\nCalculate the pressure exerted on the surface.",
          response: {
            type: "numeric",
            parts: [{ label: "Pressure", answer: 1200, tolerance: 0.01, unit: "Pa" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "$p = \\frac{F}{A}$, with $p$ in Pa, $F$ in N and $A$ in m$^2$" },
            ],
            steps: [
              { reasoning: "Substitute force and area into $p = F/A$.", working: "\\frac{300}{0.25}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 1200", marks: 1, markCode: "M" },
              { reasoning: "State the unit, pascals.", working: "1200\\text{ Pa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1200 Pa",
            commonErrors: ["Dividing area by force.", "Forgetting the unit."],
            examinerNote: "M1 for 300/0.25. M1 for value. A1 for Pa.",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A sharp knife cuts food more easily than a blunt one, and a wide snowshoe stops a walker sinking into snow while a narrow boot sinks. Explain both observations using pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "$p = \\frac{F}{A}$; for the same force a smaller area gives a larger pressure." },
            ],
            steps: [
              { reasoning: "The knife's blade has a very small contact area with the food.", marks: 1, markCode: "B" },
              { reasoning: "For the same cutting force, the small area gives a large pressure, which breaks the food easily.", marks: 1, markCode: "R" },
              { reasoning: "The snowshoe spreads the walker's weight over a large area.", marks: 1, markCode: "B" },
              { reasoning: "For the same weight, the large area gives a smaller pressure on the snow, so the walker does not sink; a narrow boot concentrates the force and sinks.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Pressure = force / area. Small blade area gives high pressure (cuts easily); large snowshoe area gives low pressure (does not sink).",
            commonErrors: ["Saying the knife is 'heavier'."],
            examinerNote: "B1 small area. R1 high pressure. B1 large area. R1 low pressure / no sinking. Allow oe.",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A sprinter runs at $10\\ \\text{m/s}$. Convert this speed to km/h, given that $1\\ \\text{m/s} = 3.6\\ \\text{km/h}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Speed in km/h", answer: 36, tolerance: 0.01, unit: "km/h" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Unit conversion", statement: "$1\\ \\text{m/s} = 3.6\\ \\text{km/h}$" },
            ],
            steps: [
              { reasoning: "Multiply the speed in m/s by 3.6.", working: "10 \\times 3.6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 36\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 km/h",
            commonErrors: ["Dividing by 3.6 instead of multiplying."],
            examinerNote: "M1 for 10x3.6 oe. A1 for 36 km/h.",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many km/h is $1\\ \\text{m/s}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "60 km/h" },
              { id: "b", text: "1 km/h" },
              { id: "c", text: "3.6 km/h" },
              { id: "d", text: "100 km/h" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Unit conversion", statement: "$1\\ \\text{m/s} = 3.6\\ \\text{km/h}$" },
            ],
            steps: [
              { reasoning: "One metre per second equals 3.6 kilometres per hour.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 3.6 km/h",
            commonErrors: ["Choosing 60 (confusing seconds and minutes)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a distance-time graph, a horizontal line means the object is…",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slowing down" },
              { id: "b", text: "Speeding up" },
              { id: "c", text: "Stationary" },
              { id: "d", text: "Moving at constant speed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Distance-time graphs", statement: "A horizontal line means the distance does not change with time, so the object is stationary." },
            ],
            steps: [
              { reasoning: "Distance stays constant while time passes, so the object is not moving.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Stationary",
            commonErrors: ["Confusing with a speed-time graph where horizontal means constant speed."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-speed-and-pressure-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A delivery van's journey is recorded:\n\n- Drives 300 m in 100 s\n- Stops for 60 s\n- Drives 450 m in 150 s\n\nThe speed limit is 5 m/s.",
          parts: [
            { label: "a", prompt: "Calculate the speed during each driving section.", marks: 2 },
            { label: "b", prompt: "Calculate the average speed for the whole journey including the stop.", marks: 3 },
            { label: "c", prompt: "State whether the van broke the speed limit and justify your answer.", marks: 2 },
            { label: "d", prompt: "A courier claims the average speed is the same as the speed in part (a). Explain why this is wrong.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$; average speed uses total distance / total time." },
            ],
            steps: [
              { part: "a", reasoning: "First section: $\\frac{300}{100} = 3.0$ m/s.", working: "3.0\\text{ m/s}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Second section: $\\frac{450}{150} = 3.0$ m/s.", working: "3.0\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Total distance = $300 + 450 = 750$ m; total time = $100 + 60 + 150 = 310$ s.", working: "\\frac{750}{310}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide total distance by total time.", working: "750 \\div 310", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\approx 2.4\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No, the van did not break the limit.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Both driving speeds (3.0 m/s) and the average (2.4 m/s) are below 5 m/s.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The average includes the 60 s stop with zero distance, so it is lower than the driving speeds; average speed = total distance / total time, not the speed while moving.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 3.0 m/s and 3.0 m/s (b) ~2.4 m/s (c) No, all speeds below 5 m/s (d) Average includes the stopped time, so it is lower.",
            commonErrors: ["In (b) averaging only the driving times (250 s).", "In (c) saying the stop counts as speeding."],
            examinerNote: "(b) Accept 2.42 m/s. (c) ecf not needed. (d) Require reference to total time including stop.",
          },
        },
      ],
    },
  ],
};
