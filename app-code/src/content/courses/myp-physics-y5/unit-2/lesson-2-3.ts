import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypp5-u2-lesson-2-3",
  code: "2-3",
  title: "Electromagnetic Spectrum and Thermal Energy",
  goal: "I CAN explain advanced applications of the electromagnetic spectrum and analyse thermal energy transfer including the greenhouse effect.",
  standards: [
    "Key concept: Waves",
    "MYP Sciences: Waves and Energy",
    "Criterion D: Communicating scientifically",
  ],
  vocabulary: [
    { term: "Electromagnetic spectrum", definition: "Range of EM waves from radio waves through visible light to gamma rays; all travel at $c = 3 \\times 10^8$ m/s in vacuum." },
    { term: "Wavelength bands", definition: "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma — ordered by decreasing wavelength/increasing frequency." },
    { term: "Infrared radiation", definition: "EM waves with heating effect; emitted by all warm objects; used in thermal imaging and remote controls." },
    { term: "Ultraviolet", definition: "High-energy EM waves causing sunburn and enabling fluorescence; partly absorbed by ozone layer." },
    { term: "Conduction", definition: "Heat transfer through solids by vibrating particles passing energy to neighbours; best in metals." },
    { term: "Greenhouse effect", definition: "Atmospheric gases trap outgoing infrared radiation, warming Earth's surface; enhanced by human emissions." },
  ],
  concepts: [
    {
      id: "mypp5-u2-ems",
      title: "Electromagnetic spectrum applications",
      skill: "Match EM spectrum regions to applications and explain hazards and benefits.",
      lesson: {
        sections: [
          {
            heading: "The spectrum",
            body: "All EM waves travel at $c = 3 \\times 10^8$ m/s in vacuum and obey $v = f\\lambda$. Radio waves (long λ) carry communications; microwaves heat food and enable radar; infrared gives thermal imaging; visible light is detected by eyes; UV causes sunburn but reveals security features; X-rays image bones; gamma rays sterilise and treat cancer.",
          },
          {
            heading: "Hazards and protection",
            body: "Ionising radiation (UV, X-ray, gamma) can damage cells and DNA. Protection: ozone layer absorbs most UV; lead aprons and distance reduce X-ray/gamma exposure; microwave ovens contain radiation with shielding and interlocks.",
          },
          {
            heading: "Technology links",
            body: "Satellite communication uses microwaves and radio; night vision uses infrared; airport scanners use X-rays; PET scans and radiotherapy use gamma. Fibre optics transmit visible/infrared light pulses for internet data.",
          },
        ],
        keyFormulas: [
          { name: "Spectrum order", statement: "Radio → microwave → IR → visible → UV → X-ray → gamma" },
          { name: "Wave relation", statement: "$c = f\\lambda$" },
          { name: "Ionising", statement: "UV, X-ray, gamma ionise atoms" },
        ],
        workedExample: {
          problem: "Which EM region is used for thermal imaging of buildings and why?",
          solution: "Infrared — warm objects emit IR proportional to temperature, so cameras detect heat patterns.",
        },
      },
      questions: [
        {
          id: "mypp5-u2-ems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of EM radiation is used in airport security scanners to image the contents of luggage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "X-rays" },
              { id: "b", text: "Microwaves" },
              { id: "c", text: "Radio waves" },
              { id: "d", text: "Infrared" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "X-rays", statement: "Penetrate soft tissue, absorbed differently by materials → images." }],
            steps: [
              { reasoning: "X-rays image luggage contents.", working: "\\text{X-ray}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** X-rays",
            commonErrors: ["Confusing with gamma rays."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp5-u2-ems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A radio wave and a gamma ray both travel through a vacuum. How do their speeds compare?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gamma ray is faster" },
              { id: "b", text: "Radio wave is faster" },
              { id: "c", text: "Speed depends on wavelength" },
              { id: "d", text: "They are equal at $3 \\times 10^8$ m/s" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "c = fλ", statement: "All EM waves share speed $c$ in vacuum." }],
            steps: [
              { reasoning: "All EM waves travel at speed of light in vacuum.", working: "c=3\\times10^8", marks: 1, markCode: "M" },
              { reasoning: "Equal speeds.", working: "\\text{equal}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(c) both at $3 \\times 10^8$ m/s",
            commonErrors: ["Thinking higher frequency means faster."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-ems-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A satellite uses microwaves rather than radio waves for some communications. Which property of microwaves makes them suitable for this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They can carry more information due to higher frequency" },
              { id: "b", text: "They travel slower" },
              { id: "c", text: "They are less energetic" },
              { id: "d", text: "They do not need dishes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Information capacity", statement: "Higher frequency → more oscillations per second → greater data bandwidth." }],
            steps: [
              { reasoning: "Microwaves have higher frequency than radio waves.", working: "f_{micro} > f_{radio}", marks: 1, markCode: "M" },
              { reasoning: "Higher f allows more data per second.", working: "\\text{more bandwidth}", marks: 1, markCode: "M" },
              { reasoning: "Match choice.", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(b) higher frequency = more data",
            commonErrors: ["Thinking microwaves are 'micro' in energy — they are mid-spectrum."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-ems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A hospital is evaluating whether to install a new full-body scanner that uses backscatter X-rays.",
          parts: [
            { label: "a", prompt: "State two benefits of X-ray imaging in medicine.", marks: 2 },
            { label: "b", prompt: "State two hazards of ionising radiation and a protection measure for each.", marks: 2 },
            { label: "c", prompt: "Compare X-rays with ultrasound for imaging soft tissue, giving one advantage of each.", marks: 2 },
            { label: "d", prompt: "State one ethical concern about routine X-ray security screening.", marks: 1 },
            { label: "e", prompt: "Conclude whether the benefits outweigh the risks and justify your conclusion.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionising radiation", statement: "X-rays image dense structures but can damage cells." },
              { kind: "principle", name: "Risk-benefit", statement: "Low-dose protocols balance diagnostic value against dose." },
            ],
            steps: [
              { part: "a", reasoning: "Sees through tissue to bones/foreign objects; fast, non-invasive diagnosis.", working: "\\text{bones, fast}", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Cell/DNA damage → cancer risk; protection: low dose, lead shielding, only when needed.", working: "\\text{dose+shielding}", marks: 2, markCode: "B" },
              { part: "c", reasoning: "X-ray: sees bone clearly but poor soft tissue; ultrasound: no ionising radiation, real-time soft tissue but poor through bone/air.", working: "\\text{compare}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Concern: cumulative low-dose exposure to large numbers of people without consent; privacy issues.", working: "\\text{dose/privacy}", marks: 1, markCode: "D" },
              { part: "e", reasoning: "Justified if doses kept minimal (ALARA) and screening targeted at higher-risk situations.", working: "\\text{justified}", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) bone imaging, fast diagnosis (b) cancer risk → low dose, shielding (c) X-ray: bone; ultrasound: soft tissue real-time (d) cumulative dose/privacy (e) justified if dose minimised",
            commonErrors: ["One-sided discussion; treating all radiation as equally dangerous."],
            examinerNote: "A2 for (a); B2 for (b); A2 for (c); D1 each for (d),(e).",
          },
        },
        {
          id: "mypp5-u2-ems-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct order of the electromagnetic spectrum from longest to shortest wavelength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio, visible, microwave, IR, UV, X-ray, gamma" },
              { id: "b", text: "Radio, microwave, IR, visible, UV, X-ray, gamma" },
              { id: "c", text: "Visible, radio, microwave, IR, UV, gamma, X-ray" },
              { id: "d", text: "Gamma, X-ray, UV, visible, IR, microwave, radio" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "EM spectrum", statement: "Radio → microwave → IR → visible → UV → X-ray → gamma; wavelength decreases, frequency increases." }],
            steps: [
              { reasoning: "Wavelength decreases along the spectrum.", working: "\\lambda \\downarrow, f \\uparrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** radio to gamma",
            commonErrors: ["Reversing the order or putting visible first."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp5-u2-ems-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A radio wave has frequency $10^9$ Hz. Calculate its wavelength in vacuum ($c = 3 \\times 10^8$ m/s).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.3, unit: "m" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave relation", statement: "$\\lambda = c/f = 3\\times10^8/10^9$" }],
            steps: [
              { reasoning: "$\\lambda = 0.3$ m.", working: "\\frac{3\\times10^8}{10^9}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.3 m",
            commonErrors: ["Exponent errors with powers of ten."],
            examinerNote: "A1 for 0.3.",
          },
        },
        {
          id: "mypp5-u2-ems-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which region of the electromagnetic spectrum is ionising?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UV, X-rays and gamma rays" },
              { id: "b", text: "Radio waves only" },
              { id: "c", text: "Infrared only" },
              { id: "d", text: "Visible light only" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Ionising radiation", statement: "UV, X-ray and gamma have enough energy per photon to ionise atoms." }],
            steps: [
              { reasoning: "High frequency → high photon energy → ionisation possible.", working: "E \\propto f", marks: 1, markCode: "M" },
              { reasoning: "UV, X-ray, gamma are ionising.", working: "\\text{UV, X, }\\gamma", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** UV, X-rays, gamma",
            commonErrors: ["Including infrared or radio as ionising."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-ems-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Visible light has frequency about $6 \\times 10^{14}$ Hz. Calculate its wavelength in vacuum.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5e-7, tolerance: 1e-9, unit: "m" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave relation", statement: "$\\lambda = c/f = 3\\times10^8/6\\times10^{14}$" }],
            steps: [
              { reasoning: "$\\lambda = \\frac{3 \\times 10^8}{6 \\times 10^{14}} = 5 \\times 10^{-7}$ m.", working: "5\\times10^{-7}\\ \\text{m}", marks: 1, markCode: "M" },
              { reasoning: "= 500 nm.", working: "500\\ \\text{nm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5 \\times 10^{-7}$ m (500 nm)",
            commonErrors: ["Sign errors in the power of ten."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-ems-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which EM region is best suited to thermal imaging of buildings at night, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Infrared — warm objects emit IR in proportion to temperature" },
              { id: "b", text: "Radio waves — they travel far" },
              { id: "c", text: "UV — it is energetic" },
              { id: "d", text: "X-rays — they penetrate walls" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Applications", statement: "IR detects heat patterns without visible light." }],
            steps: [
              { reasoning: "All objects emit IR depending on temperature.", working: "\\text{IR emission}", marks: 1, markCode: "M" },
              { reasoning: "IR cameras map temperature differences — ideal for thermal imaging.", working: "\\text{thermal camera}", marks: 1, markCode: "M" },
              { reasoning: "Answer (b).", working: "(b)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** infrared",
            commonErrors: ["Choosing X-rays which would be hazardous and don't image temperature."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-ems-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A gamma ray has frequency $3 \\times 10^{18}$ Hz. Calculate its wavelength.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1e-10, tolerance: 1e-12, unit: "m" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave relation", statement: "$\\lambda = c/f = 3\\times10^8/3\\times10^{18}$" }],
            steps: [
              { reasoning: "$\\lambda = 10^{-10}$ m.", working: "\\frac{3\\times10^8}{3\\times10^{18}}", marks: 1, markCode: "M" },
              { reasoning: "= 0.1 nm — extremely short, highly penetrating.", working: "10^{-10}\\ \\text{m}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1\\times10^{-10}\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10^{-10}$ m",
            commonErrors: ["Misplacing the decimal in the power of ten."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-ems-q11",
          difficulty: "foundation",
          totalMarks: 6,
          stem: "All electromagnetic waves share common properties.",
          parts: [
            { label: "a", prompt: "State the speed of EM waves in a vacuum.", marks: 1 },
            { label: "b", prompt: "State the wave equation relating speed, frequency and wavelength.", marks: 1 },
            { label: "c", prompt: "Name the region of the spectrum used for satellite communications.", marks: 1 },
            { label: "d", prompt: "Name the region used for medical X-ray imaging.", marks: 1 },
            { label: "e", prompt: "Explain why the ozone layer is important for life on Earth.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "EM waves", statement: "$c = 3 \\times 10^8$ m/s; $v = f\\lambda$" },
              { kind: "context", name: "Applications", statement: "Radio/microwave comms; X-ray imaging; ozone absorbs UV." },
            ],
            steps: [
              { part: "a", reasoning: "$c = 3 \\times 10^8$ m/s.", working: "3\\times10^8\\ \\text{m/s}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$v = f\\lambda$ (or $c = f\\lambda$ in vacuum).", working: "c=f\\lambda", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Microwaves (and radio waves).", working: "\\text{microwave/radio}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "X-rays.", working: "\\text{X-ray}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Ozone absorbs harmful UV radiation, protecting living cells/DNA from damage.", working: "\\text{absorbs UV}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Without it, UV would cause sunburn, skin cancer and damage to ecosystems.", working: "\\text{protects cells}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3×10⁸ m/s (b) c = fλ (c) microwave/radio (d) X-ray (e) absorbs UV",
            commonErrors: ["Naming visible light for satellite comms — microwaves/radio are used."],
            examinerNote: "B1 each for (a)-(d); M1 A1 for (e).",
          },
        },
        {
          id: "mypp5-u2-ems-q12",
          difficulty: "core",
          totalMarks: 7,
          stem: "A hospital uses X-rays for bone imaging and ultrasound for soft tissue.",
          parts: [
            { label: "a", prompt: "State one advantage of X-rays for bone imaging.", marks: 1 },
            { label: "b", prompt: "State one hazard of X-rays and a protection measure.", marks: 2 },
            { label: "c", prompt: "Explain why ultrasound is preferred for examining a foetus.", marks: 2 },
            { label: "d", prompt: "Compare the penetrating ability of X-rays and gamma rays.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Medical imaging", statement: "X-rays: ionising, good for bone; ultrasound: non-ionising, real-time soft tissue." },
            ],
            steps: [
              { part: "a", reasoning: "Bones absorb X-rays strongly → clear contrast image; fast diagnosis of fractures.", working: "\\text{bone contrast}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Ionising radiation can damage cells/DNA → cancer risk; protection: lead aprons, minimal dose, distance.", working: "\\text{lead apron, low dose}", marks: 2, markCode: "B" },
              { part: "c", reasoning: "No ionising radiation → safe for foetus; gives real-time images of soft tissue/organs.", working: "\\text{non-ionising, real-time}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Gamma rays are more penetrating than X-rays — they need thicker lead/concrete; X-rays stopped by thinner shielding.", working: "\\gamma > X \\text{ penetration}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) clear bone contrast (b) cell damage → lead/dose (c) safe, real-time soft tissue (d) gamma more penetrating",
            commonErrors: ["Claiming ultrasound uses ionising radiation."],
            examinerNote: "B1 for (a); B2 for (b); A2 for (c); A2 for (d).",
          },
        },
        {
          id: "mypp5-u2-ems-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the speed of all electromagnetic waves in a vacuum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3 \\times 10^6$ m/s" },
              { id: "b", text: "Depends on frequency" },
              { id: "c", text: "340 m/s" },
              { id: "d", text: "$3 \\times 10^8$ m/s" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Speed of light", statement: "$c = 3 \\times 10^8$ m/s for all EM waves in vacuum." }],
            steps: [
              { reasoning: "All EM waves travel at c in vacuum regardless of frequency.", working: "c=3\\times10^8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $3 \\times 10^8$ m/s",
            commonErrors: ["Thinking higher frequency means faster wave."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp5-u2-ems-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the key difference between X-rays and gamma rays?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are identical" },
              { id: "b", text: "X-rays are visible; gamma rays are not" },
              { id: "c", text: "X-rays come from nuclear decay; gamma rays from electron transitions" },
              { id: "d", text: "Gamma rays come from nuclear processes; X-rays from electron transitions in atoms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "X-ray vs gamma", statement: "Origin differs: X-rays from atomic electron transitions, gamma from nucleus; both ionising EM." }],
            steps: [
              { reasoning: "Origin is the distinguishing feature (gamma from nucleus).", working: "\\gamma \\text{ nuclear}", marks: 1, markCode: "M" },
              { reasoning: "Answer (b).", working: "(b)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** origin: nucleus vs electron transitions",
            commonErrors: ["Distinguishing only by penetration, which overlaps."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-ems-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A communications company must choose a frequency band for a new satellite link.",
          parts: [
            { label: "a", prompt: "State two EM regions suitable for satellite communication and one reason for each.", marks: 2 },
            { label: "b", prompt: "Explain why higher frequency allows more data to be transmitted.", marks: 2 },
            { label: "c", prompt: "Discuss one benefit and one drawback of using higher frequency bands.", marks: 2 },
            { label: "d", prompt: "Describe a fair test comparing signal strength of two frequencies through a wall, identifying variables.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Communications", statement: "Radio/microwave bands carry signals; higher f → more bandwidth." },
            ],
            steps: [
              { part: "a", reasoning: "Radio waves: long range, penetrate buildings; microwaves: high bandwidth, directional dishes.", working: "\\text{radio/microwave}", marks: 2, markCode: "B" },
              { part: "b", reasoning: "Higher frequency → shorter wavelength → can carry more oscillations per second → more data (bandwidth).", working: "f\\uparrow \\Rightarrow \\text{bandwidth}\\uparrow", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Benefit: more data capacity; drawback: more easily blocked/absorbed, needs line-of-sight, more power needed.", working: "\\text{capacity vs blockage}", marks: 2, markCode: "D" },
              { part: "d", reasoning: "Independent = frequency; dependent = received signal strength; controlled = transmitter power, distance, wall material/thickness, antenna.", working: "\\text{fair test}", marks: 2, markCode: "B" },
            ],
            finalAnswer: "(a) radio long-range, microwave bandwidth (b) more oscillations/sec (c) capacity vs blockage (d) vary f, measure signal",
            commonErrors: ["Claiming higher frequency always travels further — it diffracts less."],
            examinerNote: "B2 for (a); A2 for (b); D2 for (c); B2 for (d).",
          },
        },
        {
          id: "mypp5-u2-ems-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Electromagnetic waves travel at $c = 3 \\times 10^8$ m/s in vacuum.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength of a radio wave of frequency $10^8$ Hz.", marks: 1 },
            { label: "b", prompt: "Calculate the wavelength of a microwave of frequency $3 \\times 10^9$ Hz.", marks: 1 },
            { label: "c", prompt: "Calculate the wavelength of infrared of frequency $3 \\times 10^{13}$ Hz.", marks: 1 },
            { label: "d", prompt: "Calculate the frequency of an X-ray of wavelength $3 \\times 10^{-11}$ m.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "m" },
              { label: "b", answer: 0.1, unit: "m" },
              { label: "c", answer: 1e-5, tolerance: 1e-7, unit: "m" },
              { label: "d", answer: 1e19, tolerance: 1e17, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Wave relation", statement: "$c = f\\lambda$" }],
            steps: [
              { part: "a", reasoning: "$\\lambda = 3\\times10^8/10^8 = 3$ m.", working: "3\\ \\text{m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\lambda = 3\\times10^8/3\\times10^9 = 0.1$ m.", working: "0.1\\ \\text{m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\lambda = 3\\times10^8/3\\times10^{13} = 10^{-5}$ m.", working: "10^{-5}\\ \\text{m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$f = 3\\times10^8/3\\times10^{-11} = 10^{19}$ Hz.", working: "10^{19}\\ \\text{Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 m (b) 0.1 m (c) $10^{-5}$ m (d) $10^{19}$ Hz",
            commonErrors: ["Power-of-ten slips; mixing up f and λ."],
            examinerNote: "A1 for each part.",
          },
        },
      ],
    },
    {
      id: "mypp5-u2-therm",
      title: "Thermal energy transfer and the greenhouse effect",
      skill: "Explain conduction, convection and radiation, and analyse the greenhouse effect and its enhancement.",
      lesson: {
        sections: [
          {
            heading: "Three transfer methods",
            body: "**Conduction**: particles pass energy through solids — fastest in metals (free electrons). **Convection**: fluids circulate as warm regions rise and cool regions sink — drives weather and central heating. **Radiation**: infrared waves need no medium — how the Sun warms Earth; surfaces that are dark and matt absorb best.",
          },
          {
            heading: "The greenhouse effect",
            body: "Sunlight warms Earth's surface, which emits infrared. Greenhouse gases (CO₂, methane, water vapour) absorb outgoing IR and re-emit in all directions, trapping heat — natural effect keeps Earth habitable. Enhanced greenhouse effect from fossil fuels raises global temperatures.",
          },
          {
            heading: "Keeping warm and cool",
            body: "Insulation targets each method: fibreglass traps air (poor conductor) for conduction; cavity walls stop convection; shiny foil reflects radiation. Vacuum flasks combine all three. Double glazing and loft insulation cut home energy use and emissions.",
          },
        ],
        keyFormulas: [
          { name: "Conduction", statement: "Best in solids, especially metals" },
          { name: "Convection", statement: "Fluid circulation: warm rises, cool sinks" },
          { name: "Greenhouse", statement: "IR absorbed by gases → re-emitted → warming" },
        ],
        workedExample: {
          problem: "Why does a shiny emergency blanket keep a person warm?",
          solution: "It reflects infrared body radiation back, reducing radiative heat loss.",
        },
      },
      questions: [
        {
          id: "mypp5-u2-therm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method of heat transfer does NOT require a medium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radiation" },
              { id: "b", text: "Convection" },
              { id: "c", text: "All require a medium" },
              { id: "d", text: "Conduction" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Radiation", statement: "Infrared waves transfer heat through vacuum." }],
            steps: [
              { reasoning: "Radiation travels as EM waves — no particles needed.", working: "\\text{radiation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Radiation",
            commonErrors: ["Thinking all heat needs contact."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp5-u2-therm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are metals good conductors of heat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have low density" },
              { id: "b", text: "They reflect heat" },
              { id: "c", text: "They are shiny" },
              { id: "d", text: "Free electrons transfer energy quickly between atoms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Conduction in metals", statement: "Free electrons carry thermal energy rapidly." }],
            steps: [
              { reasoning: "Metals have delocalised electrons that transfer energy.", working: "\\text{free } e^-", marks: 1, markCode: "M" },
              { reasoning: "Faster conduction than non-metals.", working: "\\text{fast conduction}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(b) free electrons",
            commonErrors: ["Confusing conduction with radiation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-therm-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which statement best describes the enhanced greenhouse effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ozone layer blocks visible light" },
              { id: "b", text: "Clouds reflect all heat" },
              { id: "c", text: "More sunlight reaches Earth's surface" },
              { id: "d", text: "Increased greenhouse gases trap more outgoing infrared radiation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Enhanced greenhouse", statement: "Extra CO₂/methane absorb more outgoing IR → extra warming." }],
            steps: [
              { reasoning: "Fossil fuel emissions raise greenhouse gas concentration.", working: "CO_2\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "More IR trapped → surface warms beyond natural level.", working: "IR\\text{ trapped}", marks: 1, markCode: "M" },
              { reasoning: "Match choice.", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(b)",
            commonErrors: ["Confusing with ozone depletion or solar output changes."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-therm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A homeowner wants to reduce heating bills and carbon emissions from her house.",
          parts: [
            { label: "a", prompt: "List the three methods of heat transfer that cause heat loss from a house.", marks: 1 },
            { label: "b", prompt: "For each method, suggest one insulation measure that reduces it.", marks: 3 },
            { label: "c", prompt: "Explain why loft insulation reduces conduction specifically.", marks: 1 },
            { label: "d", prompt: "Evaluate whether double glazing is a cost-effective improvement compared with loft insulation.", marks: 2 },
            { label: "e", prompt: "Describe a fair test to compare the insulating properties of two materials, identifying variables.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heat loss", statement: "Conduction through solids, convection through air leaks, radiation through windows." },
              { kind: "principle", name: "Insulation", statement: "Trap air, seal gaps, reflect IR to cut each loss path." },
            ],
            steps: [
              { part: "a", reasoning: "Conduction, convection, radiation.", working: "\\text{3 methods}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Conduction → loft/wall insulation; convection → draught excluders, cavity sealing; radiation → double glazing, reflective coatings.", working: "\\text{insulation}", marks: 3, markCode: "A" },
              { part: "c", reasoning: "Trapped air pockets are poor conductors → slows conduction through ceiling.", working: "\\text{air pockets}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Double glazing cuts radiant+convective loss at windows but costs more per m²; loft insulation usually cheaper per unit energy saved — evaluate payback time.", working: "\\text{cost-benefit}", marks: 2, markCode: "D" },
              { part: "e", reasoning: "Wrap identical hot water containers in each material, measure temperature drop over time; independent = material, dependent = temp drop/rate, controlled = mass, start temp, thickness.", working: "\\text{fair test}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) conduction, convection, radiation (b) insulation, sealing, glazing (c) trapped air (d) loft usually better value (e) compare temp drop",
            commonErrors: ["Ignoring convection through gaps; not justifying cost-effectiveness."],
            examinerNote: "A1 for (a); A3 for (b); A1 for (c); D2 for (d); B1 for (e).",
          },
        },
        {
          id: "mypp5-u2-therm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convection of heat requires which of the following?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A vacuum" },
              { id: "b", text: "Shiny surfaces" },
              { id: "c", text: "A solid material" },
              { id: "d", text: "A fluid (liquid or gas) that can circulate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Convection", statement: "Heat transfer by circulating fluid — warm fluid rises, cool fluid sinks." }],
            steps: [
              { reasoning: "Only fluids can flow and circulate.", working: "\\text{fluid flow}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** a circulating fluid",
            commonErrors: ["Thinking convection works in solids."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp5-u2-therm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate the energy needed to heat 0.5 kg of water from 20 °C to 80 °C. ($c = 4200$ J/kg °C)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 126000, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Specific heat", statement: "$Q = mc\\Delta T = 0.5 \\times 4200 \\times 60$" }],
            steps: [
              { reasoning: "$Q = 0.5 \\times 4200 \\times 60 = 126\\,000$ J.", working: "0.5\\times4200\\times60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "126 000 J",
            commonErrors: ["Using °C values without subtracting for $\\Delta T$."],
            examinerNote: "A1 for 126000.",
          },
        },
        {
          id: "mypp5-u2-therm-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which surface is the best absorber of infrared radiation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light and reflective" },
              { id: "b", text: "Shiny white" },
              { id: "c", text: "Dark and matt" },
              { id: "d", text: "Transparent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Radiation absorption", statement: "Dark, matt surfaces absorb IR best; light shiny surfaces reflect it." }],
            steps: [
              { reasoning: "Dark surfaces absorb; shiny surfaces reflect.", working: "\\text{dark} \\Rightarrow \\text{absorb}", marks: 1, markCode: "M" },
              { reasoning: "Answer (b).", working: "(b)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** dark and matt",
            commonErrors: ["Reversing absorber/emitter properties."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-therm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the energy needed to heat 2 kg of water from 10 °C to 60 °C. ($c = 4200$ J/kg °C)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 420000, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Specific heat", statement: "$Q = mc\\Delta T = 2 \\times 4200 \\times 50$" }],
            steps: [
              { reasoning: "$Q = 2 \\times 4200 \\times 50$.", working: "2\\times4200\\times50", marks: 1, markCode: "M" },
              { reasoning: "$Q = 420\\,000$ J.", working: "420000\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "420 000 J",
            commonErrors: ["Using $\\Delta T = 60$ instead of 50."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-therm-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A vacuum flask keeps drinks hot for hours. Which statement correctly matches flask features to heat transfer methods?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The vacuum stops radiation" },
              { id: "b", text: "Silvered walls reflect radiation; vacuum stops conduction and convection" },
              { id: "c", text: "The flask works mainly by conduction" },
              { id: "d", text: "The lid prevents convection only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Vacuum flask", statement: "Vacuum eliminates conduction/convection; silvered surfaces reflect IR radiation." }],
            steps: [
              { reasoning: "Vacuum has no particles → no conduction or convection.", working: "\\text{vacuum} \\Rightarrow \\text{no C/C}", marks: 1, markCode: "M" },
              { reasoning: "Silvered surfaces reflect infrared radiation.", working: "\\text{silver reflects IR}", marks: 1, markCode: "M" },
              { reasoning: "Answer (a).", working: "(a)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** vacuum stops C/C; silvering reflects radiation",
            commonErrors: ["Thinking vacuum stops radiation — EM waves need no medium."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-therm-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An electric kettle rated at 2 kW heats 1 kg of water from 20 °C to 100 °C. ($c = 4200$ J/kg °C)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 168, unit: "s" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Power and energy", statement: "$Q = mc\\Delta T = 1 \\times 4200 \\times 80 = 336\\,000$ J; $t = Q/P = 336000/2000$" }],
            steps: [
              { reasoning: "$Q = 1 \\times 4200 \\times 80 = 336\\,000$ J.", working: "336000\\ \\text{J}", marks: 1, markCode: "M" },
              { reasoning: "$t = 336000/2000 = 168$ s.", working: "\\frac{336000}{2000}", marks: 1, markCode: "M" },
              { reasoning: "= 168 s ≈ 2.8 min.", working: "168\\ \\text{s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "168 s",
            commonErrors: ["Forgetting kW → W conversion; using $\\Delta T = 100$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp5-u2-therm-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is NOT a method of heat transfer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Condensation" },
              { id: "b", text: "Conduction" },
              { id: "c", text: "Convection" },
              { id: "d", text: "Radiation" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Heat transfer", statement: "Only conduction, convection and radiation transfer heat; condensation is a phase change." }],
            steps: [
              { reasoning: "Condensation is a state change, not a transfer mechanism.", working: "\\text{condensation} \\neq \\text{transfer}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Condensation",
            commonErrors: ["Confusing phase changes with heat transfer methods."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "mypp5-u2-therm-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 0.3 kg aluminium block ($c = 900$ J/kg °C) is heated from 25 °C to 75 °C. Calculate the energy supplied.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 13500, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Specific heat", statement: "$Q = mc\\Delta T = 0.3 \\times 900 \\times 50$" }],
            steps: [
              { reasoning: "$Q = 0.3 \\times 900 \\times 50 = 13\\,500$ J.", working: "0.3\\times900\\times50", marks: 2, markCode: "A" },
            ],
            finalAnswer: "13 500 J",
            commonErrors: ["Using water's specific heat instead of aluminium's."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-therm-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does warm air rise above a radiator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radiation pushes it up" },
              { id: "b", text: "It is pushed by the radiator" },
              { id: "c", text: "Warm air is less dense, so it rises and cooler air sinks to replace it" },
              { id: "d", text: "Warm air has greater mass" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Convection", statement: "Heating expands gas → lower density → rises; cooler dense air sinks." }],
            steps: [
              { reasoning: "Density decreases with temperature → buoyant rise.", working: "\\rho\\downarrow \\Rightarrow \\text{rise}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** less dense warm air rises",
            commonErrors: ["Thinking air rises because of radiation pressure."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp5-u2-therm-q14",
          difficulty: "core",
          totalMarks: 7,
          stem: "A student compares two materials, A and B, as insulators. She wraps each around identical containers of hot water and records the temperature of the water every 5 minutes for an hour.",
          parts: [
            { label: "a", prompt: "Identify the independent, dependent and two controlled variables.", marks: 2 },
            { label: "b", prompt: "State a suitable hypothesis.", marks: 1 },
            { label: "c", prompt: "Explain why the containers must be identical.", marks: 1 },
            { label: "d", prompt: "The water in container A cools by 12 °C and container B by 20 °C. Which material is the better insulator and why?", marks: 1 },
            { label: "e", prompt: "Suggest one limitation of this method and an improvement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "Only the material should differ between runs." },
              { kind: "principle", name: "Insulation", statement: "Better insulator → slower temperature drop." },
            ],
            steps: [
              { part: "a", reasoning: "Independent = material (A or B); dependent = temperature drop/rate of cooling; controlled = water mass, initial temperature, thickness of wrap, ambient temperature, container shape.", working: "material \\rightarrow \\Delta T", marks: 2, markCode: "B" },
              { part: "b", reasoning: "Hypothesis: the better insulator shows a smaller temperature drop over the same time.", working: "\\Delta T_A \\text{ vs } \\Delta T_B", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Different containers would change surface area/heat loss, confounding the comparison.", working: "\\text{same container}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Material A — smaller temperature drop means less heat transferred out.", working: "A \\text{ better}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Limitation: heat loss through lid/base not controlled, or single trial; improvement: insulate lid, use data logger, repeat trials and average.", working: "\\text{control+repeat}", marks: 2, markCode: "B" },
            ],
            finalAnswer: "(a) material→ΔT, control mass/T/thickness (b) smaller ΔT = better (c) same surface/heat capacity (d) A (e) lid losses → repeat, insulate",
            commonErrors: ["Not controlling water mass or initial temperature."],
            examinerNote: "B2 for (a); B1 for (b); A1 for (c); A1 for (d); B2 for (e).",
          },
        },
        {
          id: "mypp5-u2-therm-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which gases are the main greenhouse gases responsible for the enhanced greenhouse effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only ozone" },
              { id: "b", text: "Oxygen and nitrogen" },
              { id: "c", text: "Hydrogen and helium" },
              { id: "d", text: "Carbon dioxide, methane and water vapour" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Greenhouse gases", statement: "CO₂, methane, water vapour and nitrous oxide absorb outgoing IR." }],
            steps: [
              { reasoning: "These gases absorb IR emitted by Earth's surface.", working: "CO_2, CH_4, H_2O", marks: 1, markCode: "M" },
              { reasoning: "O₂ and N₂ dominate air but do not absorb IR significantly.", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** CO₂, methane, water vapour",
            commonErrors: ["Naming oxygen/nitrogen — the main air components are not greenhouse gases."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp5-u2-therm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A heater rated at 500 W is used to heat 2 kg of water from 15 °C to 65 °C. Take $c = 4200$ J/kg °C.",
          parts: [
            { label: "a", prompt: "Calculate the energy required.", marks: 1 },
            { label: "b", prompt: "Calculate the minimum time needed if all energy goes to the water.", marks: 1 },
            { label: "c", prompt: "Calculate the actual time if the heater is only 80% efficient.", marks: 1 },
            { label: "d", prompt: "Calculate the energy wasted as heat given the 80% efficiency.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 420000, unit: "J" },
              { label: "b", answer: 840, unit: "s" },
              { label: "c", answer: 1050, unit: "s" },
              { label: "d", answer: 105000, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Specific heat", statement: "$Q = mc\\Delta T$" },
              { kind: "formula", name: "Power", statement: "$P = Q/t$; efficiency $= $ useful/total." },
            ],
            steps: [
              { part: "a", reasoning: "$Q = 2 \\times 4200 \\times 50 = 420\\,000$ J.", working: "420000\\ \\text{J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$t = Q/P = 420000/500 = 840$ s.", working: "840\\ \\text{s}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Input energy = $420000/0.8 = 525\\,000$ J; $t = 525000/500 = 1050$ s.", working: "1050\\ \\text{s}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Wasted = input − useful = $525000 - 420000 = 105\\,000$ J.", working: "105000\\ \\text{J}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 420 kJ (b) 840 s (c) 1050 s (d) 105 kJ wasted",
            commonErrors: ["Dividing by efficiency the wrong way; forgetting that 20% of input is wasted."],
            examinerNote: "A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
      ],
    },
  ],
};
