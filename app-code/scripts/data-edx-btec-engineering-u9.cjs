module.exports = [
  {
    file: "lesson-9-1.ts", exportName: "lesson91",
    lesson: {
      id: "edxbteceng-u9-lesson-9-1", code: "9-1",
      title: "Simple Mechanisms and Levers",
      goal: "I CAN calculate lever effort and explain the function of common linkages.",
      standards: [
        "Pearson BTEC Level 3 National Engineering — mechanics and machine elements",
        "Simple machines, levers, linkages and mechanisms",
      ],
      vocabulary: [
        { term: "Lever", definition: "A rigid bar that pivots about a fulcrum to transmit force." },
        { term: "Fulcrum", definition: "The fixed pivot point of a lever." },
        { term: "Mechanical advantage", definition: "Ratio of load force to effort force for an ideal mechanism." },
        { term: "Velocity ratio", definition: "Ratio of effort movement to load movement in an ideal mechanism." },
        { term: "Linkage", definition: "An assembly of links and joints that produces controlled motion." },
        { term: "Degrees of freedom", definition: "The number of independent motions available to a mechanism." },
      ],
      concepts: [
        {
          id: "edxbteceng-u9-9-1-lev", title: "Levers and mechanical advantage",
          skill: "Calculate effort, load and mechanical advantage for lever systems.",
          sections: [
            { heading: "Lever classes", body: "A lever consists of a rigid bar, a fulcrum and forces applied at the load and effort points. In class 1, the fulcrum is between load and effort, as in a seesaw or crowbar. In class 2, the load is between fulcrum and effort, as in a wheelbarrow. In class 3, the effort is between fulcrum and load, as in tweezers or a fishing rod. The class affects direction of movement and mechanical advantage but all obey the moment principle." },
            { heading: "Moments and advantage", body: "For equilibrium, clockwise moments equal anticlockwise moments: effort x effort arm = load x load arm. Mechanical advantage MA = load / effort = effort arm / load arm. Velocity ratio VR = effort movement / load movement; for an ideal lever VR equals MA. Real mechanisms lose energy to friction, so actual effort is higher than the ideal value." },
          ],
          keyFormulas: [
            { name: "Moment equilibrium", statement: "effort x effort arm = load x load arm" },
            { name: "Mechanical advantage", statement: "MA = load / effort = effort arm / load arm" },
            { name: "Velocity ratio", statement: "VR = effort distance / load distance" },
          ],
          workedExample: {
            problem: "A crowbar lifts a 600 N rock. The effort arm is 0.80 m and the load arm is 0.20 m. Find the ideal effort and mechanical advantage.",
            solution: "MA = effort arm / load arm = 0.80 / 0.20 = 4. Ideal effort = load / MA = 600 / 4 = 150 N. The operator must move the effort four times farther than the load for an ideal lever.",
          },
          questions: [
            {
              id: "edxbteceng-u9-lev-q1", difficulty: "foundation", totalMarks: 1,
              stem: "In which lever class is the fulcrum between the load and the effort?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Class 1" }, { id: "b", text: "Class 2" }, { id: "c", text: "Class 3" }, { id: "d", text: "Class 4" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lever classes", statement: "Class 1 has fulcrum between load and effort." }],
                steps: [{ reasoning: "Class 1 examples include seesaws and crowbars.", marks: 1, markCode: "M" }],
                finalAnswer: "Class 1",
              },
            },
            {
              id: "edxbteceng-u9-lev-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A lever lifts a 300 N load with a load arm of 0.20 m and an effort arm of 0.60 m. Calculate the ideal effort.",
              response: { type: "numeric", parts: [{ label: "effort", answer: 100, unit: "N" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Lever equilibrium", statement: "Effort x effort arm = load x load arm." }],
                steps: [
                  { reasoning: "Effort = load x load arm / effort arm = 300 x 0.20 / 0.60.", marks: 1, markCode: "M" },
                  { reasoning: "Effort = 100 N.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "100 N",
              },
            },
            {
              id: "edxbteceng-u9-lev-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why mechanical advantage does not create energy in a real lever.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Work conservation", statement: "Mechanical advantage trades force for distance; losses reduce efficiency." }],
                steps: [
                  { reasoning: "Higher MA means smaller effort but larger effort movement.", marks: 1, markCode: "M" },
                  { reasoning: "Work input approximately equals work output for an ideal lever.", marks: 1, markCode: "M" },
                  { reasoning: "Friction at the fulcrum and bar means real effort is greater than ideal.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "MA trades force for distance; friction prevents free energy gain.",
              },
            },
            {
              id: "edxbteceng-u9-lev-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Three tools are described: a seesaw, a wheelbarrow and tweezers.",
              parts: [
                { label: "a", prompt: "Identify the lever class of each tool.", marks: 3 },
                { label: "b", prompt: "Explain which class is most likely to have mechanical advantage greater than 1.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lever classification", statement: "Class depends on positions of fulcrum, load and effort." }],
                steps: [
                  { part: "a", reasoning: "Seesaw = class 1; wheelbarrow = class 2; tweezers = class 3.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "Class 1 and 2 can give MA > 1 when the effort arm is longer; class 3 usually gives MA < 1 but increases movement.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Seesaw class 1, wheelbarrow class 2, tweezers class 3.",
              },
            },
            {
              id: "edxbteceng-u9-lev-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Two levers are combined in a compound lever. The first has MA 2 and the second has MA 3.",
              parts: [
                { label: "a", prompt: "Calculate the overall ideal mechanical advantage.", marks: 2 },
                { label: "b", prompt: "A 900 N load is lifted. Calculate the ideal effort.", marks: 2 },
                { label: "c", prompt: "Explain why the actual effort may be higher.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Compound MA", statement: "Overall MA = product of individual MAs." }],
                steps: [
                  { part: "a", reasoning: "Overall MA = 2 x 3 = 6.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Ideal effort = 900 / 6 = 150 N.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "Friction, wear and imperfect pivots reduce efficiency.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "MA = 6; ideal effort = 150 N; friction increases real effort.",
              },
            },
            {
              id: "edxbteceng-u9-lev-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A workshop jack must lift a 1200 N vehicle corner. The jack has a load arm of 0.05 m and an effort arm of 0.50 m.",
              parts: [
                { label: "a", prompt: "Calculate the ideal effort required.", marks: 2 },
                { label: "b", prompt: "Calculate the mechanical advantage.", marks: 2 },
                { label: "c", prompt: "State the lever class of a typical trolley jack.", marks: 1 },
                { label: "d", prompt: "Explain why a longer handle reduces effort but increases handle movement.", marks: 2 },
                { label: "e", prompt: "Suggest one design improvement to reduce friction losses.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Jack lever", statement: "Effort = load x load arm / effort arm." }],
                steps: [
                  { part: "a", reasoning: "Effort = 1200 x 0.05 / 0.50 = 120 N.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "MA = 0.50 / 0.05 = 10.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "Usually class 1 or a compound lever arrangement.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Longer effort arm increases MA, so less force but greater movement is needed.", marks: 2, markCode: "R" },
                  { part: "e", reasoning: "Use bearings, low-friction pivot or better lubrication at contact points.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Effort 120 N; MA 10; longer handle trades distance for force.",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u9-9-1-lin", title: "Linkages and mechanisms",
          skill: "Identify common linkages and explain their degrees of freedom.",
          sections: [
            { heading: "Common mechanisms", body: "A linkage is a set of rigid links connected by joints. A four-bar linkage has four links and four joints; with one link fixed it can produce rotary or oscillating output. A slider-crank converts rotary motion to reciprocating motion, as in an engine piston. A cam and follower converts rotary motion into a prescribed linear motion. A rack and pinion converts rotary motion to linear motion. The choice of mechanism depends on the required motion, speed and force." },
            { heading: "Degrees of freedom", body: "Degrees of freedom describe how many independent motions a mechanism has. A four-bar planar linkage has one degree of freedom: once the input angle is set, all other positions are determined. A mechanism with too few constraints may be floppy; too many may bind. The Grashof condition for a four-bar predicts whether the shortest link can rotate fully relative to others: s + l <= p + q, where s and l are shortest and longest links and p and q are the other two." },
          ],
          keyFormulas: [
            { name: "Four-bar DOF", statement: "planar four-bar has one degree of freedom" },
            { name: "Grashof condition", statement: "s + l <= p + q for crank rotation" },
            { name: "Slider-crank stroke", statement: "stroke approximately equals twice the crank radius" },
          ],
          workedExample: {
            problem: "A slider-crank has crank radius 30 mm. Estimate the piston stroke.",
            solution: "Stroke approximately equals 2 x crank radius = 2 x 30 = 60 mm, ignoring connecting-rod geometry effects.",
          },
          questions: [
            {
              id: "edxbteceng-u9-lin-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which mechanism converts rotary motion into reciprocating linear motion?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Slider-crank" }, { id: "b", text: "Four-bar" }, { id: "c", text: "Bevel gear" }, { id: "d", text: "Belt drive" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Slider-crank", statement: "Converts rotary crank motion to reciprocating piston motion." }],
                steps: [{ reasoning: "The crank and connecting rod drive the slider.", marks: 1, markCode: "M" }],
                finalAnswer: "Slider-crank",
              },
            },
            {
              id: "edxbteceng-u9-lin-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A four-bar linkage has links of 10, 20, 25 and 30 mm. Apply the Grashof condition and state whether a crank can rotate fully.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Grashof condition", statement: "s + l <= p + q." }],
                steps: [
                  { reasoning: "s = 10, l = 30, p + q = 45.", marks: 1, markCode: "M" },
                  { reasoning: "s + l = 40 <= 45, so the Grashof condition is satisfied.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Yes, Grashof condition satisfied.",
              },
            },
            {
              id: "edxbteceng-u9-lin-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the role of degrees of freedom in a mechanism.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Degrees of freedom", statement: "Independent motions available to a mechanism." }],
                steps: [
                  { reasoning: "DOF determines whether motion is controlled or unpredictable.", marks: 1, markCode: "M" },
                  { reasoning: "A four-bar has one DOF, so input motion determines output motion.", marks: 1, markCode: "M" },
                  { reasoning: "Too much freedom causes floppiness; too little causes binding.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "DOF controls predictability and stability of motion.",
              },
            },
            {
              id: "edxbteceng-u9-lin-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A machine needs to convert a rotating motor shaft into a short reciprocating movement.",
              parts: [
                { label: "a", prompt: "Suggest two suitable mechanisms.", marks: 2 },
                { label: "b", prompt: "Explain why a cam and follower may be chosen.", marks:2 },
                { label: "c", prompt: "State one limitation of a slider-crank for this task.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Mechanism selection", statement: "Match mechanism to required motion profile." }],
                steps: [
                  { part: "a", reasoning: "Slider-crank or cam and follower.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Cam profile can produce a precise non-sinusoidal motion.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Slider-crank gives approximately sinusoidal motion and needs space for the crank.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Slider-crank or cam; cam gives precise motion profile.",
              },
            },
            {
              id: "edxbteceng-u9-lin-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A slider-crank has crank radius 25 mm and connecting rod length 100 mm.",
              parts: [
                { label: "a", prompt: "Estimate the piston stroke.", marks: 2 },
                { label: "b", prompt: "Explain why the actual motion is not perfectly sinusoidal.", marks: 2 },
                { label: "c", prompt: "State one advantage of increasing crank radius.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Slider-crank", statement: "Stroke approximately equals twice crank radius." }],
                steps: [
                  { part: "a", reasoning: "Stroke = 2 x 25 = 50 mm.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Connecting rod angle and finite rod length distort the motion.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Larger crank increases stroke for the same shaft speed.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Stroke about 50 mm; motion not perfectly sinusoidal.",
              },
            },
            {
              id: "edxbteceng-u9-lin-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A packaging machine must move a pusher in and out once per revolution.",
              parts: [
                { label: "a", prompt: "Suggest a suitable mechanism and justify it.", marks: 2 },
                { label: "b", prompt: "State the input and output motions.", marks: 2 },
                { label: "c", prompt: "Explain how the mechanism should be timed to the conveyor.", marks: 2 },
                { label: "d", prompt: "State one safety feature for the moving pusher.", marks: 2 },
                { label: "e", prompt: "Explain why maintenance access should be designed into the mechanism.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Mechanism design", statement: "Select mechanism for motion, timing and serviceability." }],
                steps: [
                  { part: "a", reasoning: "Cam and follower gives controlled reciprocating motion once per revolution.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Input = rotary cam shaft; output = linear pusher motion.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Synchronise cam with conveyor encoder so pusher acts when product arrives.", marks: 2, markCode: "R" },
                  { part: "d", reasoning: "Guard the pusher path and add interlocks or emergency stop.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Easy access reduces downtime and allows lubrication/inspection.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Cam-driven pusher synchronised to conveyor; guard and service access needed.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u9-lev-notes", title: "Levers and mechanisms — notes",
      summary: "Levers trade force for distance; linkages convert rotary motion into useful reciprocating or oscillating motion.",
      sections: [
        { heading: "Levers", body: "Moment equilibrium gives effort x effort arm = load x load arm. MA = effort arm / load arm." },
        { heading: "Mechanisms", body: "Four-bars, slider-cranks and cams provide controlled motion from rotary input." },
        { heading: "Design", body: "Choose mechanism by motion profile, space, force and serviceability." },
      ],
    },
  },
  {
    file: "lesson-9-2.ts", exportName: "lesson92",
    lesson: {
      id: "edxbteceng-u9-lesson-9-2", code: "9-2",
      title: "Gears and Power Transmission",
      goal: "I CAN calculate gear ratios and select suitable power-transmission drives.",
      standards: [
        "Pearson BTEC Level 3 National Engineering — mechanics and machine elements",
        "Gear drives, belt drives, chain drives and shaft power transmission",
      ],
      vocabulary: [
        { term: "Gear ratio", definition: "Ratio of driven speed to driver speed, equal to driver teeth divided by driven teeth." },
        { term: "Spur gear", definition: "Gear with straight teeth parallel to the shaft axis." },
        { term: "Module", definition: "Gear size measure = pitch diameter divided by number of teeth." },
        { term: "Belt drive", definition: "Power transmission using friction between belts and pulleys." },
        { term: "Chain drive", definition: "Positive-drive system using sprockets and roller chain." },
        { term: "Torque", definition: "Turning moment = force x perpendicular distance from axis." },
      ],
      concepts: [
        {
          id: "edxbteceng-u9-9-2-gear", title: "Gear ratios and torque",
          skill: "Calculate gear ratios, speeds and torque changes.",
          sections: [
            { heading: "Gear ratio and speed", body: "For meshing gears, the gear ratio equals the number of teeth on the driver divided by the number on the driven gear. A small driver driving a large driven gear reduces speed and increases torque. The opposite arrangement increases speed and reduces torque. For a simple pair, output speed = input speed x driver teeth / driven teeth. Multiple gear trains multiply individual ratios." },
            { heading: "Module and gear size", body: "Module m = pitch diameter / number of teeth. Gears that mesh must have the same module and pressure angle. Pitch diameter is the diameter at which gears effectively mesh. Larger module means larger, stronger teeth; smaller module gives compact gears but lower load capacity. Backlash is the small clearance between teeth that allows rotation without jamming; too little backlash causes binding, too much causes noise and positioning error." },
          ],
          keyFormulas: [
            { name: "Gear ratio", statement: "GR = driver teeth / driven teeth" },
            { name: "Output speed", statement: "n_out = n_in x driver teeth / driven teeth" },
            { name: "Module", statement: "m = pitch diameter / teeth" },
          ],
          workedExample: {
            problem: "A 20-tooth driver at 1200 rpm drives a 60-tooth gear. Find the output speed and ideal torque ratio.",
            solution: "GR = 20 / 60 = 1/3. Output speed = 1200 x 1/3 = 400 rpm. Ideal torque is multiplied by 3, ignoring losses.",
          },
          questions: [
            {
              id: "edxbteceng-u9-gear-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Using GR = driver teeth / driven teeth, what is the gear ratio for a 15-tooth driver and 45-tooth driven gear?",
              response: { type: "mcq", choices: [
                { id: "a", text: "3" }, { id: "b", text: "0.333" }, { id: "c", text: "30" }, { id: "d", text: "1" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "formula", name: "Gear ratio", statement: "GR = driver teeth / driven teeth." }],
                steps: [{ reasoning: "GR = 15 / 45 = 0.333.", marks: 1, markCode: "M" }],
                finalAnswer: "0.333",
              },
            },
            {
              id: "edxbteceng-u9-gear-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A 20-tooth driver at 1800 rpm drives a 60-tooth gear. Calculate the output speed.",
              response: { type: "numeric", parts: [{ label: "speed", answer: 600, unit: "rpm" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Gear ratio", statement: "n_out = n_in x driver teeth / driven teeth." }],
                steps: [
                  { reasoning: "n_out = 1800 x 20 / 60.", marks: 1, markCode: "M" },
                  { reasoning: "n_out = 600 rpm.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "600 rpm",
              },
            },
            {
              id: "edxbteceng-u9-gear-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the speed-torque trade-off in a gear reduction.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Power conservation", statement: "Reducing speed increases torque for similar power." }],
                steps: [
                  { reasoning: "A small driver driving a large gear reduces speed.", marks: 1, markCode: "M" },
                  { reasoning: "Lower speed allows higher torque for approximately constant power.", marks: 1, markCode: "M" },
                  { reasoning: "Losses mean output torque is less than ideal.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Gear reduction trades speed for torque.",
              },
            },
            {
              id: "edxbteceng-u9-gear-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A gear has pitch diameter 120 mm and 40 teeth.",
              parts: [
                { label: "a", prompt: "Calculate the module.", marks: 2 },
                { label: "b", prompt: "State why gears that mesh must have the same module.", marks: 2 },
                { label: "c", prompt: "State the effect of too little backlash.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Module", statement: "m = pitch diameter / teeth." }],
                steps: [
                  { part: "a", reasoning: "m = 120 / 40 = 3 mm.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Same module gives matching tooth size and pitch for smooth meshing.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Too little backlash can cause binding and tooth damage.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Module 3 mm; matching module needed for correct meshing.",
              },
            },
            {
              id: "edxbteceng-u9-gear-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A compound gear train has a 20-tooth driver, a 40-tooth driven gear on the same shaft as a 15-tooth driver, and a final 30-tooth driven gear.",
              parts: [
                { label: "a", prompt: "Calculate the overall speed ratio.", marks: 3 },
                { label: "b", prompt: "If input speed is 900 rpm, find output speed.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Compound gear train", statement: "Overall ratio is product of stage ratios." }],
                steps: [
                  { part: "a", reasoning: "Stage 1 ratio = 20/40 = 0.5; stage 2 ratio = 15/30 = 0.5; overall speed ratio = 0.25.", marks: 3, markCode: "A" },
                  { part: "b", reasoning: "Output speed = 900 x 0.25 = 225 rpm.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Overall speed ratio 0.25; output 225 rpm.",
              },
            },
            {
              id: "edxbteceng-u9-gear-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A conveyor drive needs 300 rpm output from a 1500 rpm motor and must transmit about 2 kW.",
              parts: [
                { label: "a", prompt: "Calculate the required speed reduction ratio.", marks: 2 },
                { label: "b", prompt: "Choose a suitable tooth pair for the first stage.", marks: 2 },
                { label: "c", prompt: "Calculate the ideal output torque if input torque is 13 N m.", marks: 3 },
                { label: "d", prompt: "State one reason actual torque will be lower.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Gear drive design", statement: "Speed reduction increases torque by approximately the ratio." }],
                steps: [
                  { part: "a", reasoning: "Reduction = 1500 / 300 = 5.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "A 20-tooth driver with a 100-tooth driven gear gives speed ratio 0.2, a reduction factor of 5.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Ideal output torque = 13 x 5 = 65 N m.", marks: 3, markCode: "A" },
                  { part: "d", reasoning: "Friction, bearing losses and tooth losses reduce output torque.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Ratio 5; output torque ideal 65 N m; losses reduce actual torque.",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u9-9-2-belt", title: "Belts, chains and drive selection",
          skill: "Compare belt and chain drives and calculate speed ratios.",
          sections: [
            { heading: "Belt drives", body: "Belt drives transmit power by friction between belts and pulleys. They are quiet, inexpensive and tolerant of slight misalignment, but can slip under overload. The speed ratio is set by pulley diameters: larger driver to smaller driven increases output speed. Open belts are common for parallel shafts; crossed belts reverse direction. Timing belts have teeth and do not slip, making them suitable for synchronous motion." },
            { heading: "Chain drives", body: "Chain drives use sprockets and roller chain to transmit power positively without slip. They are efficient and suitable for longer centres and higher loads than flat belts, but they are noisier and need lubrication. Selection depends on centre distance, speed, load, environment and whether positive timing is required. Shafts must be aligned, supported by bearings and sized to resist bending and torsion." },
          ],
          keyFormulas: [
            { name: "Belt speed ratio", statement: "n_driven / n_driver = D_driver / D_driven" },
            { name: "Torque and power", statement: "P = T x omega" },
            { name: "Centre distance", statement: "chain/belt span depends on pulley sizes and shaft spacing" },
          ],
          workedExample: {
            problem: "A 200 mm driver pulley at 900 rpm drives a 50 mm pulley. Find the driven speed.",
            solution: "Speed ratio = 200 / 50 = 4. Driven speed = 900 x 4 = 3600 rpm.",
          },
          questions: [
            {
              id: "edxbteceng-u9-belt-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What is the main disadvantage of a flat belt drive compared with a chain drive?",
              response: { type: "mcq", choices: [
                { id: "a", text: "It can slip under load" }, { id: "b", text: "It cannot transmit power" }, { id: "c", text: "It requires no maintenance" }, { id: "d", text: "It is always noisy" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "property", name: "Belt friction", statement: "Flat belts rely on friction and can slip." }],
                steps: [{ reasoning: "Slip limits load capacity and exact speed ratio.", marks: 1, markCode: "M" }],
                finalAnswer: "Can slip under load",
              },
            },
            {
              id: "edxbteceng-u9-belt-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A 200 mm driver pulley at 900 rpm drives a 50 mm pulley. Calculate the driven speed.",
              response: { type: "numeric", parts: [{ label: "speed", answer: 3600, unit: "rpm" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Belt ratio", statement: "n_driven = n_driver x D_driver / D_driven." }],
                steps: [
                  { reasoning: "Ratio = 200 / 50 = 4.", marks: 1, markCode: "M" },
                  { reasoning: "n_driven = 900 x 4 = 3600 rpm.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "3600 rpm",
              },
            },
            {
              id: "edxbteceng-u9-belt-q3", difficulty: "core", totalMarks: 3,
              stem: "Compare belt and chain drives for a conveyor.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Drive selection", statement: "Choose drive by load, distance, environment and timing needs." }],
                steps: [
                  { reasoning: "Belts are quiet and cheap but can slip; chains are positive and handle higher loads.", marks: 1, markCode: "M" },
                  { reasoning: "Chains need lubrication and are noisier; belts tolerate misalignment better.", marks: 1, markCode: "M" },
                  { reasoning: "Choose chain for high load/long span, belt for smooth quiet drive.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Belt = quiet/cheap but slips; chain = positive/high load but noisy.",
              },
            },
            {
              id: "edxbteceng-u9-belt-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Two shafts are 600 mm apart. A machine needs positive timing and moderate power.",
              parts: [
                { label: "a", prompt: "Suggest a suitable drive.", marks: 1 },
                { label: "b", prompt: "State two advantages for this application.", marks: 2 },
                { label: "c", prompt: "State two disadvantages or maintenance needs.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Drive selection", statement: "Positive timing and load capacity favour chain." }],
                steps: [
                  { part: "a", reasoning: "Roller chain drive.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Positive drive without slip and good load capacity over distance.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Noise, lubrication and wear require maintenance.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Chain drive for positive timing; needs lubrication and is noisier.",
              },
            },
            {
              id: "edxbteceng-u9-belt-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A motor delivers 1.5 kW at 1500 rpm through a belt drive.",
              parts: [
                { label: "a", prompt: "Calculate the motor torque in N m.", marks: 3 },
                { label: "b", prompt: "Explain how torque changes if the driven pulley is smaller.", marks: 2 },
                { label: "c", prompt: "State why power is approximately conserved.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Power and torque", statement: "P = T x omega; omega = 2 pi n / 60." }],
                steps: [
                  { part: "a", reasoning: "omega = 2 pi x 1500 / 60 = 157.1 rad/s; T = 1500 / 157.1 = 9.55 N m.", marks: 3, markCode: "A" },
                  { part: "b", reasoning: "Smaller driven pulley increases output speed and reduces torque for similar power.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Power is conserved apart from frictional losses.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Torque about 9.55 N m; smaller driven pulley raises speed and lowers torque.",
              },
            },
            {
              id: "edxbteceng-u9-belt-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A packaging line needs to drive a conveyor from a motor 800 mm away.",
              parts: [
                { label: "a", prompt: "List three factors to consider when choosing the drive.", marks: 2 },
                { label: "b", prompt: "Explain why shaft alignment matters.", marks: 2 },
                { label: "c", prompt: "State two maintenance checks for a belt drive.", marks: 2 },
                { label: "d", prompt: "State two maintenance checks for a chain drive.", marks: 2 },
                { label: "e", prompt: "Explain why the drive should be guarded.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Drive maintenance", statement: "Alignment, tension and lubrication determine drive life." }],
                steps: [
                  { part: "a", reasoning: "Load, speed, centre distance, environment and need for positive timing.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Misalignment causes uneven wear, vibration and premature failure.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Check belt tension and wear; inspect for glazing or cracking.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Check lubrication, sprocket wear and chain stretch.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Guards prevent contact with moving belts, chains and pulleys.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Choose by load/distance/timing; align shafts; maintain tension/lubrication; guard moving parts.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u9-gear-notes", title: "Gears and drives — notes",
      summary: "Gear ratios trade speed for torque; belts and chains transmit power with different load and maintenance needs.",
      sections: [
        { heading: "Gears", body: "GR = driver teeth / driven teeth for speed ratio; smaller driver to larger driven reduces speed and increases torque." },
        { heading: "Module", body: "Module = pitch diameter / teeth; mating gears need the same module and pressure angle." },
        { heading: "Drives", body: "Belts are quiet but can slip; chains are positive and stronger but need lubrication." },
      ],
    },
  },
  {
    file: "lesson-9-3.ts", exportName: "lesson93",
    lesson: {
      id: "edxbteceng-u9-lesson-9-3", code: "9-3",
      title: "Bearings, Lubrication and Fasteners",
      goal: "I CAN select bearings and fasteners and explain lubrication regimes.",
      standards: [
        "Pearson BTEC Level 3 National Engineering — machine elements",
        "Bearings, lubrication and bolted joints",
      ],
      vocabulary: [
        { term: "Bearing", definition: "Machine element that supports a rotating shaft while reducing friction." },
        { term: "Radial load", definition: "Load acting perpendicular to the shaft axis." },
        { term: "Axial load", definition: "Load acting along the shaft axis." },
        { term: "Rolling-element bearing", definition: "Bearing using balls or rollers between races." },
        { term: "Lubrication regime", definition: "State of lubrication: boundary, mixed or full fluid film." },
        { term: "Fastener", definition: "Component such as a bolt or screw used to join parts." },
      ],
      concepts: [
        {
          id: "edxbteceng-u9-9-3-bear", title: "Bearing types and selection",
          skill: "Select bearings for load direction and calculate basic bearing life.",
          sections: [
            { heading: "Bearing types", body: "Plain bearings use a sliding surface and are simple and compact but need good lubrication. Rolling-element bearings use balls or rollers to reduce friction and are common in machinery. Deep-groove ball bearings handle radial and some axial loads; taper roller bearings handle combined loads; thrust bearings handle mainly axial loads. Bearing selection depends on load direction, speed, life, environment, cost and space." },
            { heading: "Basic rating life", body: "Bearing manufacturers give dynamic load ratings and L10 life. L10 is the life in millions of revolutions that 90 percent of identical bearings should reach. For ball bearings, L10 = (C/P)^3; for roller bearings the exponent is often 10/3. C is the basic dynamic load rating and P is the equivalent dynamic load. Higher C or lower P gives longer life. Fit, lubrication and alignment strongly affect actual bearing life." },
          ],
          keyFormulas: [
            { name: "L10 ball bearing", statement: "L10 = (C/P)^3 million revolutions" },
            { name: "Equivalent load", statement: "P combines radial and axial loads" },
            { name: "Fit", statement: "shaft/housing fits affect bearing life" },
          ],
          workedExample: {
            problem: "A ball bearing has C = 20 kN and P = 5 kN. Estimate L10 life.",
            solution: "L10 = (20/5)^3 = 4^3 = 64 million revolutions.",
          },
          questions: [
            {
              id: "edxbteceng-u9-bear-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which bearing is best suited mainly to axial load?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Thrust bearing" }, { id: "b", text: "Deep-groove ball bearing" }, { id: "c", text: "Plain bush" }, { id: "d", text: "V-belt" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Thrust bearing", statement: "Designed mainly for axial loads." }],
                steps: [{ reasoning: "Thrust bearings support loads along the shaft axis.", marks: 1, markCode: "M" }],
                finalAnswer: "Thrust bearing",
              },
            },
            {
              id: "edxbteceng-u9-bear-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A ball bearing has C = 20 kN and P = 5 kN. Calculate L10 in millions of revolutions.",
              response: { type: "numeric", parts: [{ label: "L10", answer: 64, unit: "million rev" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "L10 life", statement: "L10 = (C/P)^3 for ball bearings." }],
                steps: [
                  { reasoning: "C/P = 20/5 = 4.", marks: 1, markCode: "M" },
                  { reasoning: "L10 = 4^3 = 64 million revolutions.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "64 million revolutions",
              },
            },
            {
              id: "edxbteceng-u9-bear-q3", difficulty: "core", totalMarks: 3,
              stem: "Compare plain and rolling-element bearings.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bearing comparison", statement: "Plain bearings slide; rolling bearings roll to reduce friction." }],
                steps: [
                  { reasoning: "Plain bearings are compact and handle misalignment but need lubrication.", marks: 1, markCode: "M" },
                  { reasoning: "Rolling bearings have lower friction and longer life under load but cost more.", marks: 1, markCode: "M" },
                  { reasoning: "Choice depends on load, speed, space and maintenance.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Plain = simple/sliding; rolling = lower friction/longer life.",
              },
            },
            {
              id: "edxbteceng-u9-bear-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A shaft has both radial and axial loads and runs at high speed.",
              parts: [
                { label: "a", prompt: "Suggest a suitable bearing type.", marks: 1 },
                { label: "b", prompt: "Explain why deep-groove ball bearings may be limited.", marks: 2 },
                { label: "c", prompt: "State two installation factors affecting bearing life.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Bearing selection", statement: "Match bearing to load direction, speed and environment." }],
                steps: [
                  { part: "a", reasoning: "Taper roller or angular contact bearing for combined loads.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Ball bearings handle limited axial load compared with roller designs.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Correct fit, alignment and lubrication affect life.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Angular contact/taper roller bearing; check fit, alignment and lubrication.",
              },
            },
            {
              id: "edxbteceng-u9-bear-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A bearing fails earlier than its calculated L10 life.",
              parts: [
                { label: "a", prompt: "List three possible causes.", marks: 3 },
                { label: "b", prompt: "State one inspection that could confirm a cause.", marks: 2 },
                { label: "c", prompt: "Explain why calculated life is not guaranteed.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bearing life", statement: "L10 is statistical and assumes correct installation and lubrication." }],
                steps: [
                  { part: "a", reasoning: "Poor lubrication, misalignment, contamination or incorrect fit.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "Inspect lubricant, check alignment and examine raceways for damage.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "L10 means 90% should reach that life under ideal conditions.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Lubrication, alignment, contamination or fit; inspect to confirm.",
              },
            },
            {
              id: "edxbteceng-u9-bear-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A conveyor drive shaft needs bearings at both ends and carries radial load with some axial thrust.",
              parts: [
                { label: "a", prompt: "Choose a bearing arrangement and justify it.", marks: 2 },
                { label: "b", prompt: "Explain the purpose of locating and non-locating bearings.", marks: 2 },
                { label: "c", prompt: "State two maintenance checks for the bearings.", marks: 2 },
                { label: "d", prompt: "Explain how vibration monitoring helps.", marks: 2 },
                { label: "e", prompt: "State one consequence of using the wrong bearing fit.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Bearing arrangement", statement: "Support shaft, control axial location and allow thermal expansion." }],
                steps: [
                  { part: "a", reasoning: "Use angular contact or taper roller bearings where axial load exists.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Locating bearing controls axial position; non-locating allows thermal expansion.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Check lubrication, temperature, noise and vibration.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Vibration trends reveal early bearing defects.", marks: 2, markCode: "R" },
                  { part: "e", reasoning: "Wrong fit can cause looseness, overload or seizure.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Use angular contact/taper bearings; locate axially, allow expansion; monitor condition.",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u9-9-3-lube", title: "Lubrication and bolted joints",
          skill: "Explain lubrication regimes and select fasteners for bolted joints.",
          sections: [
            { heading: "Lubrication regimes", body: "Boundary lubrication occurs when surfaces touch and rely on lubricant films too thin to separate them. Mixed lubrication has partial surface contact. Full fluid-film lubrication separates surfaces completely, giving very low friction and wear. The regime depends on speed, load, viscosity and surface finish. Too little lubricant causes wear; too much can cause churning losses. Viscosity index describes how viscosity changes with temperature." },
            { heading: "Bolted joints", body: "Bolts and screws clamp parts together, creating friction that resists separation. Bolt torque T = K F d, where K is the friction/nut factor, F is preload and d is nominal diameter. Proper tightening sequence and torque matter because uneven clamping can distort parts or loosen under vibration. Lock washers, thread-lock compounds and controlled tightening methods improve joint reliability. Fastener selection must consider load, environment, temperature and whether vibration is present." },
          ],
          keyFormulas: [
            { name: "Bolt torque", statement: "T = K F d" },
            { name: "Lubrication regimes", statement: "boundary -> mixed -> full fluid film" },
            { name: "Preload", statement: "clamping force created by bolt tightening" },
          ],
          workedExample: {
            problem: "A bolt has K = 0.20, preload 8000 N and diameter 12 mm. Find tightening torque.",
            solution: "T = 0.20 x 8000 x 0.012 = 19.2 N m.",
          },
          questions: [
            {
              id: "edxbteceng-u9-lube-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What is the main purpose of lubricating a bearing?",
              response: { type: "mcq", choices: [
                { id: "a", text: "To reduce friction and wear" }, { id: "b", text: "To increase load capacity directly" }, { id: "c", text: "To cool the motor only" }, { id: "d", text: "To change the gear ratio" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lubrication", statement: "Lubricant reduces friction and separates surfaces." }],
                steps: [{ reasoning: "Lubrication protects surfaces and reduces wear.", marks: 1, markCode: "M" }],
                finalAnswer: "Reduce friction and wear",
              },
            },
            {
              id: "edxbteceng-u9-lube-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A bolt has K = 0.20, preload 8000 N and diameter 12 mm. Calculate tightening torque.",
              response: { type: "numeric", parts: [{ label: "torque", answer: 19.2, unit: "N m" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Bolt torque", statement: "T = K F d." }],
                steps: [
                  { reasoning: "T = 0.20 x 8000 x 0.012.", marks: 1, markCode: "M" },
                  { reasoning: "T = 19.2 N m.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "19.2 N m",
              },
            },
            {
              id: "edxbteceng-u9-lube-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the three lubrication regimes.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lubrication regimes", statement: "Boundary, mixed and full film describe surface separation." }],
                steps: [
                  { reasoning: "Boundary: surfaces mostly touch, lubricant only protects.", marks: 1, markCode: "M" },
                  { reasoning: "Mixed: partial contact with some fluid film.", marks: 1, markCode: "M" },
                  { reasoning: "Full film: surfaces separated, lowest friction and wear.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Boundary, mixed and full fluid film.",
              },
            },
            {
              id: "edxbteceng-u9-lube-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A machine frame is joined by bolts and operates in a vibrating environment.",
              parts: [
                { label: "a", prompt: "State two fastener features that improve vibration resistance.", marks: 2 },
                { label: "b", prompt: "Explain why tightening sequence matters.", marks: 2 },
                { label: "c", prompt: "State one consequence of over-tightening.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Bolted joint design", statement: "Control preload, friction and clamp distribution." }],
                steps: [
                  { part: "a", reasoning: "Lock washers, thread-lock compound, serrated flanges or controlled torque.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Even tightening prevents distortion and ensures uniform clamping.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Over-tightening can stretch bolts or crack parts.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Use vibration-resistant features; tighten evenly; avoid over-tightening.",
              },
            },
            {
              id: "edxbteceng-u9-lube-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A gearbox oil is changed every 2000 hours. A new oil analysis programme is proposed.",
              parts: [
                { label: "a", prompt: "Explain how oil analysis could improve the programme.", marks: 2 },
                { label: "b", prompt: "State two lubricant properties to monitor.", marks: 2 },
                { label: "c", prompt: "Explain why viscosity matters.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Lubricant monitoring", statement: "Oil condition indicates wear and contamination." }],
                steps: [
                  { part: "a", reasoning: "Analysis can extend intervals when oil remains good or trigger earlier changes when degraded.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "Viscosity and contamination such as water, particles or wear metals.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Viscosity determines film thickness and load capacity.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Oil analysis optimises intervals; monitor viscosity and contamination.",
              },
            },
            {
              id: "edxbteceng-u9-lube-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A bolted conveyor guard keeps loosening in service.",
              parts: [
                { label: "a", prompt: "List three possible causes.", marks: 3 },
                { label: "b", prompt: "State two inspection checks before tightening.", marks: 2 },
                { label: "c", prompt: "Explain the role of preload in joint security.", marks: 2 },
                { label: "d", prompt: "Suggest two corrective actions.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Joint reliability", statement: "Preload, friction and vibration control determine loosening." }],
                steps: [
                  { part: "a", reasoning: "Vibration, inadequate preload, poor thread condition or missing locking feature.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "Check bolt condition, thread damage, washer presence and surface cleanliness.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Preload creates friction that resists bolt rotation and joint separation.", marks: 2, markCode: "R" },
                  { part: "d", reasoning: "Use thread-lock compound, lock washers or retorque to specified value.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Causes: vibration/preload/threads; inspect before retorque; control preload and locking.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u9-bear-notes", title: "Bearings, lubrication and fasteners — notes",
      summary: "Select bearings for load and life; lubricate to separate surfaces; control preload in bolted joints.",
      sections: [
        { heading: "Bearings", body: "Choose by load direction and speed. L10 = (C/P)^3 for ball bearings gives statistical life." },
        { heading: "Lubrication", body: "Boundary, mixed and full-film regimes depend on speed, load and viscosity." },
        { heading: "Fasteners", body: "Bolt torque T = K F d; even tightening and locking features prevent loosening." },
      ],
    },
  },
];
