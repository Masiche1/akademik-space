import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "myps3-u3-lesson-3-2",
  code: "3-2",
  title: "Energy and Waves",
  goal: "I CAN describe energy stores, transfers and efficiency, explain heat transfer methods, and use the wave relationship v = fλ.",
  standards: [
    "Key concept: Energy",
    "MYP Sciences: Energy",
    "Criterion A: Knowing and understanding",
    "Criterion D: Reflecting on the impacts of science",
  ],
  vocabulary: [
    { term: "Energy store", definition: "A place where energy is held, e.g. kinetic, gravitational potential, chemical, thermal, elastic, nuclear." },
    { term: "Energy transfer", definition: "The movement of energy from one store to another, e.g. chemical to kinetic in a falling object." },
    { term: "Efficiency", definition: "The proportion of input energy that is usefully transferred: $\\text{efficiency}=\\frac{\\text{useful output}}{\\text{total input}}\\times100\\%$." },
    { term: "Conduction", definition: "Heat transfer through a material by particle collisions; best in solids." },
    { term: "Convection", definition: "Heat transfer in fluids by the movement of warmer, less dense fluid." },
    { term: "Radiation", definition: "Heat transfer by infrared waves; does not need a medium." },
    { term: "Wavelength", definition: "The distance between two consecutive crests or troughs of a wave, measured in metres." },
    { term: "Frequency", definition: "The number of complete waves passing a point per second, measured in hertz (Hz)." },
  ],
  concepts: [
    {
      id: "myps3-u3-energy",
      title: "Energy stores, transfers and efficiency",
      skill: "Identify energy stores and transfers, calculate efficiency, and describe heat transfer methods.",
      lesson: {
        sections: [
          {
            heading: "Energy stores",
            body: "Energy is stored in several ways: **kinetic** (moving objects), **gravitational potential** (height), **chemical** (fuels, food), **thermal** (hot objects), **elastic** (stretched springs), **nuclear** (atomic nuclei). Energy is never created or destroyed — only transferred between stores.",
          },
          {
            heading: "Efficiency",
            body: "Not all input energy becomes useful output — some is wasted, usually as heat or sound.\n\n$$\\text{efficiency}=\\frac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$$\n\nA lamp with 100 J input producing 25 J of light has efficiency $\\frac{25}{100}\\times100\\%=25\\%$.",
          },
          {
            heading: "Heat transfer",
            body: "Heat moves in three ways: **conduction** (through solids by particle collisions), **convection** (in fluids by circulation of warmer fluid), **radiation** (infrared waves, needs no medium). Insulators reduce heat loss by trapping air, which is a poor conductor.",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\text{efficiency}=\\frac{\\text{useful output}}{\\text{total input}}\\times100\\%$" },
          { name: "Conservation of energy", statement: "Energy is never created or destroyed, only transferred" },
        ],
        workedExample: {
          problem: "A motor uses 500 J of electrical energy to lift a load, doing 400 J of useful work. Calculate its efficiency.",
          solution: "$\\text{efficiency}=\\frac{400}{500}\\times100\\%=80\\%$.",
        },
      },
      questions: [
        {
          id: "myps3-u3-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which energy store does a stretched elastic band have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravitational potential" },
              { id: "b", text: "Chemical" },
              { id: "c", text: "Kinetic" },
              { id: "d", text: "Elastic potential" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Elastic potential energy", statement: "Stored in stretched or compressed elastic objects." },
            ],
            steps: [
              { reasoning: "A stretched band stores elastic potential energy.", working: "\\text{elastic}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Elastic potential",
            commonErrors: ["Choosing kinetic — the band is not moving yet."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u3-energy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A heater uses 2000 J of electrical energy and produces 1600 J of heat. Calculate its efficiency.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 80, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\frac{\\text{useful output}}{\\text{total input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Apply the efficiency formula.", working: "\\frac{1600}{2000}\\times100\\%=80\\%", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80\\%$",
            commonErrors: ["Inverting the fraction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-energy-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a metal spoon feels colder than a wooden spoon in the same freezer, even though they are at the same temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conduction", statement: "Heat transfers faster through better conductors." },
            ],
            steps: [
              { reasoning: "Metal is a better conductor than wood.", working: "\\text{metal conducts better}", marks: 1, markCode: "M" },
              { reasoning: "The metal spoon conducts heat away from your hand faster.", working: "\\text{faster heat transfer}", marks: 1, markCode: "M" },
              { reasoning: "This makes it feel colder even at the same temperature.", working: "\\text{feels colder}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Metal conducts heat away from your hand faster than wood, so it feels colder",
            commonErrors: ["Saying the metal is actually colder."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "myps3-u3-energy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates the efficiency of different light bulbs.",
          parts: [
            { label: "a", prompt: "Identify the energy input and useful output for a light bulb.", marks: 2 },
            { label: "b", prompt: "Describe how the student would measure efficiency.", marks: 2 },
            { label: "c", prompt: "Calculate the efficiency of a bulb using 60 J electrical energy to produce 9 J of light.", marks: 2 },
            { label: "d", prompt: "Discuss why LED bulbs are more efficient than filament bulbs.", marks: 2 },
          ],
          response: { type: "numeric", parts: [{ label: "(c) Efficiency", answer: 15, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\frac{\\text{useful output}}{\\text{total input}}\\times100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Input: electrical energy. Output: light (useful) + heat (wasted).", working: "\\text{input: electrical; output: light + heat}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State clearly.", working: "\\text{electrical}\\to\\text{light+heat}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Measure electrical energy input (power × time) and light output.", working: "\\text{measure energy in and out}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply efficiency formula.", working: "\\text{apply formula}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Efficiency = $\\frac{9}{60}\\times100\\%=15\\%$.", working: "15\\%", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer.", working: "15\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "LEDs convert more electrical energy to light and less to heat.", working: "\\text{less heat waste}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclude higher efficiency.", working: "\\text{higher efficiency}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) input: electrical; output: light + heat (b) measure energy in/out (c) 15% (d) LEDs waste less as heat",
            commonErrors: ["Counting heat as useful output."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 A1 for (d).",
          },
        },
        {
          id: "myps3-u3-energy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ball held at the top of a cliff has energy stored as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elastic potential energy" },
              { id: "b", text: "Gravitational potential energy" },
              { id: "c", text: "Sound energy" },
              { id: "d", text: "Kinetic energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gravitational potential energy", statement: "Energy stored in objects because of their height." },
            ],
            steps: [
              { reasoning: "Height above the ground gives gravitational potential energy.", working: "h\\Rightarrow GPE", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Gravitational potential energy",
            commonErrors: ["Choosing kinetic — the ball is not moving yet."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-energy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In most energy transfers, some energy is wasted as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nuclear energy" },
              { id: "b", text: "Heat and sound" },
              { id: "c", text: "Nothing — all energy is useful" },
              { id: "d", text: "Light only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy dissipation", statement: "Unwanted energy is usually dissipated as heat and sound." },
            ],
            steps: [
              { reasoning: "Most devices waste some input as heat and sound.", working: "\\text{heat+sound}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Heat and sound",
            commonErrors: ["Thinking all input energy becomes useful output."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-energy-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A device uses 100 J of input energy and produces 30 J of useful output. Calculate its efficiency.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 30, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\frac{\\text{useful output}}{\\text{total input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Apply the efficiency formula.", working: "\\frac{30}{100}\\times100\\%=30\\%", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "30\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: ["Inverting the fraction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-energy-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A machine has an efficiency of 50%. If the total input energy is 500 J, calculate the useful output energy.",
          response: { type: "numeric", parts: [{ label: "Useful output", answer: 250, unit: "J" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{useful output}=\\text{efficiency}\\times\\text{input}$" },
            ],
            steps: [
              { reasoning: "Rearrange: useful output = $0.50\\times500=250$ J.", working: "0.5\\times500=250", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "250\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$250$ J",
            commonErrors: ["Multiplying by 50 instead of 0.5."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-energy-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A light bulb is 60% efficient. How much useful light energy does it produce from 800 J of electrical energy?",
          response: { type: "numeric", parts: [{ label: "Light energy", answer: 480, unit: "J" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{useful output}=\\frac{\\text{efficiency}}{100}\\times\\text{input}$" },
            ],
            steps: [
              { reasoning: "Useful output = $0.60\\times800=480$ J.", working: "0.6\\times800=480", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "480\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$480$ J",
            commonErrors: ["Multiplying by 60 instead of 0.6."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-energy-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "As an object falls, the main energy transfer is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinetic to gravitational potential" },
              { id: "b", text: "Chemical to thermal" },
              { id: "c", text: "Gravitational potential to kinetic" },
              { id: "d", text: "Elastic to sound" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy transfer", statement: "Energy moves between stores; falling objects convert GPE to kinetic energy." },
            ],
            steps: [
              { reasoning: "As height decreases and speed increases, GPE transfers to kinetic.", working: "GPE\\to KE", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Gravitational potential to kinetic",
            commonErrors: ["Reversing the direction of transfer."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-energy-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which material is the best thermal insulator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron" },
              { id: "b", text: "Wool" },
              { id: "c", text: "Copper" },
              { id: "d", text: "Aluminium" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insulator", statement: "A material that reduces heat transfer; poor conductors trap air." },
            ],
            steps: [
              { reasoning: "Wool traps air and conducts poorly; metals conduct well.", working: "\\text{wool insulates}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Wool",
            commonErrors: ["Choosing a metal — metals are good conductors."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u3-energy-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A motor uses 200 J of input energy and does 120 J of useful work. Calculate its efficiency.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 60, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\frac{\\text{useful output}}{\\text{total input}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Apply the efficiency formula.", working: "\\frac{120}{200}\\times100\\%=60\\%", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "60\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\%$",
            commonErrors: ["Inverting the fraction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-energy-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The principle of conservation of energy states that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy is always wasted" },
              { id: "b", text: "Energy is never created or destroyed, only transferred or stored" },
              { id: "c", text: "Energy can be created by machines" },
              { id: "d", text: "Energy only exists as heat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of energy", statement: "Energy is never created or destroyed, only transferred." },
            ],
            steps: [
              { reasoning: "Total energy stays constant — it only changes form (e.g. GPE → KE for a falling object).", working: "\\text{total energy constant}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Energy is never created or destroyed, only transferred or stored",
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u3-energy-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A house loses 800 J of heat through its roof. After loft insulation is installed, the loss is 560 J. Calculate the percentage reduction in heat loss.",
          response: { type: "numeric", parts: [{ label: "Reduction", answer: 30, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage decrease = (initial − final) ÷ initial × 100" },
            ],
            steps: [
              { reasoning: "Reduction = 800 − 560 = 240 J; percentage = $\\frac{240}{800}\\times100$.", working: "\\frac{800-560}{800}\\times100", marks: 1, markCode: "M" },
              { reasoning: "The heat loss is reduced by 30%.", working: "\\frac{240}{800}\\times100=30\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: ["Dividing by the final value instead of the original 800 J."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-energy-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why can no machine be 100% efficient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Machines need fuel" },
              { id: "b", text: "Machines wear out" },
              { id: "c", text: "Energy cannot be measured" },
              { id: "d", text: "Some energy is always dissipated as heat and sound" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Efficiency limit", statement: "Some input energy is always wasted, so efficiency is always below 100%." },
            ],
            steps: [
              { reasoning: "Friction and electrical resistance always dissipate some energy as heat/sound.", working: "\\text{always some waste}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Some energy is always dissipated as heat and sound",
            commonErrors: ["Thinking efficiency can reach 100% with better design."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-energy-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A torch uses 60 J of electrical energy and produces 15 J of useful light energy. Calculate its efficiency.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\eta=\\frac{\\text{useful output}}{\\text{total input}}\\times100$" },
            ],
            steps: [
              { reasoning: "Efficiency = useful output ÷ input × 100 = $\\frac{15}{60}\\times100$.", working: "\\frac{15}{60}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Efficiency = 25%; the rest is wasted as heat.", working: "0.25\\times100=25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Dividing input by output instead of output by input."],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
    {
      id: "myps3-u3-waves",
      title: "Wave properties and applications",
      skill: "Describe the electromagnetic spectrum, use the wave relationship v = fλ, and explain wave applications.",
      lesson: {
        sections: [
          {
            heading: "The electromagnetic spectrum",
            body: "Electromagnetic waves travel at the speed of light ($3\\times10^8$ m/s) and include, in order of increasing frequency: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays. Different types have different uses and hazards.",
          },
          {
            heading: "The wave relationship",
            body: "For all waves:\n\n$$v=f\\lambda$$\n\nwhere $v$ is speed (m/s), $f$ is frequency (Hz) and $\\lambda$ is wavelength (m). For example, a wave with frequency 500 Hz and wavelength 0.68 m has speed $500\\times0.68=340$ m/s.",
          },
          {
            heading: "Applications",
            body: "**Ultrasound** (>20 kHz) is used in medical imaging and sonar. **Microwaves** heat food and are used in communications. **Infrared** is used in remote controls and thermal imaging. **X-rays** image bones. Each wave type has properties suited to its use.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "$v=f\\lambda$" },
          { name: "Speed of light", statement: "$c=3\\times10^8\\text{ m/s}$" },
        ],
        workedExample: {
          problem: "A sound wave has frequency 440 Hz and speed 340 m/s. Find its wavelength.",
          solution: "$\\lambda=\\frac{v}{f}=\\frac{340}{440}\\approx0.77$ m.",
        },
      },
      questions: [
        {
          id: "myps3-u3-waves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of electromagnetic wave has the highest frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Microwaves" },
              { id: "b", text: "Radio waves" },
              { id: "c", text: "X-rays" },
              { id: "d", text: "Visible light" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "EM spectrum", statement: "Frequency increases: radio < microwave < infrared < visible < UV < X-ray < gamma." },
            ],
            steps: [
              { reasoning: "X-rays have higher frequency than visible light, which is higher than radio/microwave.", working: "\\text{X-ray highest}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** X-rays",
            commonErrors: ["Choosing gamma rays — not listed."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u3-waves-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A wave has frequency 250 Hz and wavelength 1.36 m. Calculate its speed.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 340, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v=f\\lambda$" },
            ],
            steps: [
              { reasoning: "Multiply frequency by wavelength.", working: "v=250\\times1.36=340", marks: 1, markCode: "M" },
              { reasoning: "State the speed.", working: "340\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$340$ m/s",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-waves-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why ultrasound is used for medical imaging instead of X-rays for scanning a foetus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wave properties", statement: "Different waves have different penetration and safety properties." },
            ],
            steps: [
              { reasoning: "Ultrasound is sound waves — safe, non-ionising.", working: "\\text{safe, non-ionising}", marks: 1, markCode: "M" },
              { reasoning: "X-rays are ionising radiation that can damage cells.", working: "\\text{ionising, harmful}", marks: 1, markCode: "M" },
              { reasoning: "Ultrasound is reflected by tissues to create images without harm.", working: "\\text{reflected for imaging}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Ultrasound is safe and non-ionising; X-rays are ionising and could harm the foetus",
            commonErrors: ["Saying ultrasound can't penetrate tissue."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "myps3-u3-waves-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The speed of sound in air is approximately 340 m/s.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength of a sound wave with frequency 680 Hz.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency of a sound wave with wavelength 0.5 m.", marks: 2 },
            { label: "c", prompt: "Explain why the speed of sound is much slower than the speed of light.", marks: 2 },
            { label: "d", prompt: "Describe how ultrasound is used to measure distance (sonar).", marks: 2 },
          ],
          response: { type: "numeric", parts: [{ label: "(a) Wavelength", answer: 0.5, unit: "m" }, { label: "(b) Frequency", answer: 680, unit: "Hz" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v=f\\lambda$" },
              { kind: "principle", name: "Wave speed", statement: "Sound travels through a medium; light does not need one." },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange: $\\lambda=\\frac{v}{f}=\\frac{340}{680}=0.5$ m.", working: "\\lambda=0.5\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the answer.", working: "0.5\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rearrange: $f=\\frac{v}{\\lambda}=\\frac{340}{0.5}=680$ Hz.", working: "f=680\\text{ Hz}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the answer.", working: "680\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sound travels through particles; collisions between particles slow it down.", working: "\\text{particle collisions}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Light is electromagnetic and doesn't need a medium.", working: "\\text{EM wave, no medium needed}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Emit ultrasound pulse, measure time for echo to return.", working: "d=\\frac{v\\times t}{2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Distance = speed × time ÷ 2 (there and back).", working: "d=\\frac{vt}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.5 m (b) 680 Hz (c) sound needs a medium; light doesn't (d) measure echo time, $d=\\frac{vt}{2}$",
            commonErrors: ["Forgetting to halve the distance in (d)."],
            examinerNote: "M1 A1 per calculation, R1 R1 for explanation, M1 A1 for sonar.",
          },
        },
        {
          id: "myps3-u3-waves-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The wave equation $v=f\\lambda$ relates which three quantities?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volume, force and length" },
              { id: "b", text: "Time, distance and mass" },
              { id: "c", text: "Speed, frequency and wavelength" },
              { id: "d", text: "Amplitude, period and energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v=f\\lambda$ where $v$ is speed, $f$ frequency and $\\lambda$ wavelength." },
            ],
            steps: [
              { reasoning: "$v=f\\lambda$ links speed, frequency and wavelength.", working: "v=f\\lambda", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Speed, frequency and wavelength",
            commonErrors: ["Confusing wavelength with amplitude."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-waves-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of electromagnetic wave has the lowest frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Visible light" },
              { id: "b", text: "Gamma rays" },
              { id: "c", text: "Radio waves" },
              { id: "d", text: "X-rays" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "EM spectrum", statement: "Frequency increases: radio < microwave < infrared < visible < UV < X-ray < gamma." },
            ],
            steps: [
              { reasoning: "Radio waves have the lowest frequency in the spectrum.", working: "\\text{radio lowest}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Radio waves",
            commonErrors: ["Choosing visible light — radio is lower."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u3-waves-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A wave has frequency 200 Hz and wavelength 1.7 m. Calculate its speed.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 340, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$v=f\\lambda$" },
            ],
            steps: [
              { reasoning: "Multiply frequency by wavelength.", working: "v=200\\times1.7=340", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "340\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$340$ m/s",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-waves-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sound wave travels at 340 m/s with a wavelength of 0.68 m. Calculate its frequency.",
          response: { type: "numeric", parts: [{ label: "Frequency", answer: 500, unit: "Hz" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$f=\\frac{v}{\\lambda}$" },
            ],
            steps: [
              { reasoning: "Rearrange and divide speed by wavelength.", working: "f=\\frac{340}{0.68}=500", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "500\\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$500$ Hz",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-waves-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A radio wave has frequency $6\\times10^7$ Hz. Calculate its wavelength, given that electromagnetic waves travel at $3\\times10^8$ m/s.",
          response: { type: "numeric", parts: [{ label: "Wavelength", answer: 5, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$\\lambda=\\frac{v}{f}$" },
            ],
            steps: [
              { reasoning: "Divide speed by frequency.", working: "\\lambda=\\frac{3\\times10^8}{6\\times10^7}=5", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "5\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ m",
            commonErrors: ["Errors in powers of ten when dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-waves-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Wavelength is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of waves per second" },
              { id: "b", text: "The height of a wave" },
              { id: "c", text: "The speed of the wave" },
              { id: "d", text: "The distance between two consecutive crests or troughs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Wavelength", statement: "Distance between two consecutive crests or troughs, measured in metres." },
            ],
            steps: [
              { reasoning: "Wavelength is a length — the distance per wave.", working: "\\lambda=\\text{crest-to-crest}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The distance between two consecutive crests or troughs",
            commonErrors: ["Confusing wavelength with frequency."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-waves-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which type of electromagnetic wave is used in TV remote controls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio waves" },
              { id: "b", text: "Gamma rays" },
              { id: "c", text: "Infrared" },
              { id: "d", text: "Microwaves" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Infrared uses", statement: "Infrared is used in remote controls and thermal imaging." },
            ],
            steps: [
              { reasoning: "Remote controls emit infrared signals.", working: "\\text{infrared}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Infrared",
            commonErrors: ["Choosing radio waves — those are for broadcast communication."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u3-waves-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An ultrasound pulse returns to the detector after 0.5 s. The speed of sound is 340 m/s. Calculate the distance to the object.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 85, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$d=\\frac{v\\times t}{2}$ for an echo (there and back)" },
            ],
            steps: [
              { reasoning: "Total distance travelled = $340\\times0.5=170$ m, but this is there and back.", working: "340\\times0.5=170", marks: 1, markCode: "M" },
              { reasoning: "Distance to object = $\\frac{170}{2}=85$ m.", working: "d=85\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$85$ m",
            commonErrors: ["Forgetting to halve the distance for the return journey."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-waves-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many different types of wave make up the electromagnetic spectrum?",
          response: { type: "numeric", parts: [{ label: "Types", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "EM spectrum", statement: "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma." },
            ],
            steps: [
              { reasoning: "List the types: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.", working: "\\text{list all types}", marks: 1, markCode: "M" },
              { reasoning: "Count them: 7 types.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u3-waves-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "X-rays and gamma rays are hazardous to living tissue mainly because they are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slower than visible light" },
              { id: "b", text: "Ionising radiation that can damage cells and DNA" },
              { id: "c", text: "Low-frequency waves" },
              { id: "d", text: "Unable to travel through air" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionising radiation", statement: "X-rays and gamma rays are ionising — they can damage cells and DNA." },
            ],
            steps: [
              { reasoning: "Their very high energy lets them ionise molecules and damage cells, unlike visible light.", working: "\\text{ionising radiation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ionising radiation that can damage cells and DNA",
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u3-waves-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the speed of electromagnetic waves in a vacuum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1500$ m/s" },
              { id: "b", text: "It depends on the frequency" },
              { id: "c", text: "$3\\times10^8$ m/s" },
              { id: "d", text: "$340$ m/s" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Speed of light", statement: "$c=3\\times10^8$ m/s; all EM waves travel at this speed in vacuum." },
            ],
            steps: [
              { reasoning: "All electromagnetic waves travel at the speed of light in a vacuum.", working: "c=3\\times10^8\\text{ m/s}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $3\\times10^8$ m/s",
            commonErrors: ["Using the speed of sound (340 m/s) — that is for sound waves in air."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u3-waves-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Microwaves are commonly used for cooking because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only travel in a straight line through metal" },
              { id: "b", text: "Are reflected by all food" },
              { id: "c", text: "Are absorbed by water molecules in food, heating it" },
              { id: "d", text: "Have the lowest frequency in the spectrum" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Microwave uses", statement: "Microwaves are used in cooking and communications." },
            ],
            steps: [
              { reasoning: "Microwave energy is absorbed by water in food, producing heat quickly.", working: "\\text{absorbed by water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Are absorbed by water molecules in food, heating it",
            examinerNote: "B1 for (a).",
          },
        },
      ],
    },
  ],
};
