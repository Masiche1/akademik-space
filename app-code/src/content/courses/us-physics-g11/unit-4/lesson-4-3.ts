import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "phys11-u4-lesson-4-3",
  code: "4-3",
  title: "Information Technology and Waves",
  goal: "I CAN compare analog and digital signals, calculate digital data sizes, and evaluate wave-based technologies such as medical imaging, fiber optics and wireless communication.",
  standards: ["HS-PS4-2", "HS-PS4-5", "SEP: Obtaining, Evaluating, and Communicating Information", "CCC: Systems and System Models"],
  vocabulary: [
    { term: "Analog signal", definition: "A signal that varies continuously, so its value can be any amount within a range." },
    { term: "Digital signal", definition: "A signal that is represented by a limited set of values, usually the binary digits 0 and 1 (bits)." },
    { term: "Sampling rate", definition: "The number of measurements of a signal taken each second, in hertz." },
    { term: "Bit depth", definition: "The number of bits used for each sample. A bit depth of $n$ gives $2^n$ possible levels." },
    { term: "Ultrasound", definition: "Sound with a frequency above the range of human hearing, used for imaging by timing echoes." },
    { term: "Optical fiber", definition: "A thin glass strand that carries light pulses over long distances by total internal reflection." },
    { term: "Carrier wave", definition: "A high-frequency wave that is modified to carry information in wireless communication." },
  ],
  concepts: [
    {
      id: "phys11-u4-digital-analog",
      title: "Analog and digital signals",
      skill: "Compare analog and digital signals and calculate bit rates and file sizes from sampling rate, bit depth and duration.",
      lesson: {
        sections: [
          {
            heading: "Analog versus digital",
            body: "An **analog** signal, such as the voltage from a microphone, varies smoothly and continuously. A **digital** signal stores values as numbers written in binary.\n\nAnalog signals pick up noise as they travel, and the noise cannot be separated from the signal, so each copy gets worse. A digital signal needs only to be recognized as 0 or 1, so a receiver can regenerate a clean copy. Digital data is also easy to store, compress and error-check.",
          },
          {
            heading: "Sampling and quantization",
            body: "To digitize a wave, a converter measures it many times per second (the **sampling rate**) and rounds each measurement to one of $2^n$ levels, where $n$ is the **bit depth**. A higher sampling rate and bit depth reproduce the wave more faithfully but need more data. To capture a wave properly the sampling rate must be more than twice its highest frequency.\n\n$$\\text{bit rate} = \\text{sampling rate} \\times \\text{bit depth} \\times \\text{number of channels}$$\n\nThere are 8 bits in 1 byte.",
          },
        ],
        keyFormulas: [
          { name: "Number of levels", statement: "levels $= 2^n$" },
          { name: "Bit rate", statement: "bit rate $=$ samples per second $\\times$ bits per sample $\\times$ channels" },
          { name: "Sampling requirement", statement: "sampling rate $> 2 \\times$ highest signal frequency" },
        ],
        workedExample: {
          problem: "Mono audio is sampled $8000$ times per second with 8 bits per sample. Find the bit rate and the size of a 10 s recording in bytes.",
          solution: "Bit rate $= 8000 \\times 8 = 64\\,000\\ \\text{bit/s}$. In 10 s: $640\\,000$ bits, and $640\\,000 / 8 = 80\\,000$ bytes.",
        },
      },
      questions: [
        {
          id: "phys11-u4-digital-analog-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the main advantage of transmitting information as a digital signal rather than an analog signal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Digital signals can be regenerated to remove noise, so the copy is as good as the original." },
              { id: "b", text: "Digital signals always need less data to store." },
              { id: "c", text: "Digital signals are not affected by noise at all." },
              { id: "d", text: "Digital signals travel faster than analog signals." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Signal regeneration", statement: "A digital receiver only needs to decide 0 or 1, so noise can be removed and the signal rebuilt." },
            ],
            steps: [
              { reasoning: "Because only two states must be distinguished, repeaters can regenerate the original bits, whereas noise on an analog signal cannot be separated from it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Digital signals can be regenerated to remove noise.",
            commonErrors: ["Believing digital signals are noise-free; they are affected, but errors can be detected and corrected.", "Believing digital signals travel faster; both travel at the speed of the wave."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "phys11-u4-digital-analog-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A telephone line samples a voice signal $8000$ times per second. Each sample is stored using 16 bits and there is one channel.\n\nCalculate the bit rate in bits per second.",
          response: { type: "numeric", parts: [{ label: "Bit rate", answer: 128000, unit: "bit/s", tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Bit rate", statement: "bit rate = sampling rate $\\times$ bit depth $\\times$ channels" },
            ],
            steps: [
              { reasoning: "Multiply samples per second by bits per sample.", working: "8000 \\times 16", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "128\\,000\\text{ bit/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$128\\,000\\ \\text{bit/s}$ ($128\\ \\text{kbit/s}$)",
            commonErrors: ["Dividing by 8 and giving bytes per second (16 000) when bits were requested.", "Using $2^{16}$ in place of 16."],
            examinerNote: "M1 for $8000 \\times 16$. A1 for 128 000 bit/s.",
          },
        },
        {
          id: "phys11-u4-digital-analog-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compact-disc audio is sampled $44\\,100$ times per second with 16 bits per sample, in 2 channels (stereo). There are 8 bits in 1 byte and $1\\ \\text{MB} = 1\\,000\\,000$ bytes.\n\nCalculate the size of a 60 s recording in MB, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "File size", answer: 10.6, unit: "MB", tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Bit rate", statement: "bit rate = sampling rate $\\times$ bit depth $\\times$ channels" },
              { kind: "definition", name: "Byte", statement: "1 byte = 8 bits" },
            ],
            steps: [
              { reasoning: "Find the bit rate for two channels.", working: "44\\,100 \\times 16 \\times 2 = 1\\,411\\,200\\text{ bit/s}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the duration to get total bits.", working: "1\\,411\\,200 \\times 60 = 84\\,672\\,000\\text{ bits}", marks: 1, markCode: "M" },
              { reasoning: "Convert bits to bytes.", working: "84\\,672\\,000 / 8 = 10\\,584\\,000\\text{ bytes}", marks: 1, markCode: "M" },
              { reasoning: "Convert to megabytes.", working: "\\approx 10.6\\text{ MB}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10.6\\ \\text{MB}$",
            commonErrors: ["Forgetting the second channel, giving 5.29 MB.", "Forgetting to divide by 8, giving 84.7 MB."],
            examinerNote: "Allow ecf for one omitted factor if the remaining method is correct (max 3 marks).",
          },
        },
        {
          id: "phys11-u4-digital-analog-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An engineer digitizes the signal from a temperature sensor. The converter has a 12-bit bit depth and an input range of $0$ to $4.096\\ \\text{V}$. The engineer also digitizes speech whose highest important frequency is $4000\\ \\text{Hz}$.",
          parts: [
            { label: "a", prompt: "Calculate the number of different levels the 12-bit converter can represent.", marks: 2 },
            { label: "b", prompt: "Calculate the voltage step between adjacent levels (the resolution), in millivolts.", marks: 2 },
            { label: "c", prompt: "State the minimum sampling rate needed for the speech signal and the rule you used.", marks: 2 },
            { label: "d", prompt: "A signal is copied many times along a long chain of repeaters. Explain why the digital version stays accurate but the analog version does not.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Number of levels", statement: "levels $= 2^n$" },
              { kind: "principle", name: "Sampling requirement", statement: "The sampling rate must exceed twice the highest frequency in the signal." },
            ],
            steps: [
              { part: "a", reasoning: "A bit depth of 12 gives $2^{12}$ levels.", working: "2^{12}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "4096\\text{ levels}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the voltage range by the number of levels.", working: "\\frac{4.096}{4096}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and convert to millivolts.", working: "0.001\\text{ V} = 1.0\\text{ mV}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The sampling rate must be more than twice the highest frequency.", working: "2 \\times 4000 = 8000\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the rule: sampling rate greater than twice the highest frequency (the Nyquist criterion). Strictly the rate must exceed 8000 Hz.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Noise added at each stage of an analog chain becomes part of the signal and builds up, since it cannot be told apart from the signal.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A digital repeater decides 0 or 1 and re-sends clean bits, removing the noise at each stage.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 4096 (b) $1.0\\ \\text{mV}$ (c) just over $8000\\ \\text{Hz}$, since the sampling rate must exceed twice the highest frequency (d) Digital signals can be regenerated at each stage; noise on an analog signal accumulates.",
            commonErrors: ["In (a) calculating $12^2 = 144$ instead of $2^{12}$.", "In (c) using the highest frequency itself as the sampling rate."],
            examinerNote: "(c) Allow 8000 Hz (or 'at least 8000 Hz'). (b) Allow 1 mV.",
          },
        },
      ],
    },
    {
      id: "phys11-u4-wave-technologies",
      title: "Medical imaging, fiber optics and wireless communication",
      skill: "Explain and evaluate technologies that use waves, including ultrasound timing, optical fibers and wireless signals.",
      lesson: {
        sections: [
          {
            heading: "Medical imaging",
            body: "**Ultrasound** imaging sends high-frequency sound pulses into the body and times the echoes from tissue boundaries. Because the pulse travels to the boundary and back, depth $= \\dfrac{vt}{2}$, using about $1540\\ \\text{m/s}$ for soft tissue. It uses non-ionizing sound waves, so it is considered safe for pregnancy.\n\n**X-rays** are absorbed more by dense bone than soft tissue and show shadows on a detector. Because X-ray photons are ionizing, doses are kept as low as practical. **MRI** uses magnetic fields and radio waves, with no ionizing radiation.",
          },
          {
            heading: "Fiber optics and wireless communication",
            body: "An **optical fiber** has a glass core of index $n_1$ surrounded by cladding of lower index $n_2$. Light entering at a shallow angle hits the core-cladding boundary above the critical angle $\\sin\\theta_c = n_2/n_1$ and is totally internally reflected again and again. Fibers carry very high data rates over long distances with little loss and no electrical interference.\n\nWireless systems encode data onto a **carrier wave** of radio or microwave frequency. Signals travel at $c = 3.00 \\times 10^{8}\\ \\text{m/s}$, so the delay for a distance $d$ is $t = d/c$. Higher frequencies can carry more data but are blocked more easily by walls.",
          },
          {
            heading: "Evaluating claims",
            body: "To evaluate a claim about a technology, ask: what type of wave and what photon energy is involved (ionizing or not)? What does the evidence show about dose or intensity? Is there a physical mechanism for the claimed effect? A claim is weak if it ignores photon energy, relies on correlation alone, or confuses intensity with frequency.",
          },
        ],
        keyFormulas: [
          { name: "Echo depth", statement: "depth $= vt/2$" },
          { name: "Critical angle", statement: "$\\sin\\theta_c = n_2 / n_1$ (core $n_1$ > cladding $n_2$)" },
          { name: "Signal delay", statement: "$t = d / c$" },
        ],
        workedExample: {
          problem: "An ultrasound echo returns from a tissue boundary after $0.080\\ \\text{ms}$. How deep is the boundary? (Use $1540\\ \\text{m/s}$.)",
          solution: "The echo travels there and back, so the total distance is $vt = 1540 \\times 8.0 \\times 10^{-5} = 0.1232\\ \\text{m}$. The depth is half of this: $0.0616\\ \\text{m}$, about $6.2\\ \\text{cm}$.",
        },
      },
      questions: [
        {
          id: "phys11-u4-wave-technologies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which wave property allows an optical fiber to keep light inside its core?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Destructive interference inside the core" },
              { id: "b", text: "Absorption by the cladding" },
              { id: "c", text: "Total internal reflection at the core-cladding boundary" },
              { id: "d", text: "Diffraction at the end of the fiber" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Total internal reflection", statement: "Light in a higher-index medium that meets a lower-index boundary above the critical angle is completely reflected." },
            ],
            steps: [
              { reasoning: "The core has a higher index than the cladding, so light hitting the boundary above the critical angle is totally internally reflected along the fiber.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Total internal reflection at the core-cladding boundary.",
            commonErrors: ["Thinking the cladding absorbs light to guide it.", "Confusing refraction with total internal reflection."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "phys11-u4-wave-technologies-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An ultrasound pulse is sent into soft tissue, where the speed of sound is $1540\\ \\text{m/s}$. An echo from an organ boundary returns after $1.0 \\times 10^{-4}\\ \\text{s}$.\n\nCalculate the depth of the boundary in centimeters.",
          response: { type: "numeric", parts: [{ label: "Depth", answer: 7.7, unit: "cm", tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Echo ranging", statement: "depth $= vt/2$, because the pulse travels there and back." },
            ],
            steps: [
              { reasoning: "Find the total distance travelled by the pulse.", working: "d_{\\text{total}} = vt = 1540 \\times 1.0 \\times 10^{-4} = 0.154\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Halve it because the pulse covers the depth twice.", working: "\\text{depth} = 0.154 / 2 = 0.077\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Convert to centimeters.", working: "7.7\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.7\\ \\text{cm}$",
            commonErrors: ["Forgetting to halve, giving 15.4 cm.", "Converting meters to centimeters incorrectly."],
            examinerNote: "Allow 2 marks for 15.4 cm (M1 M1 for $vt$ and unit conversion, no halving, A0).",
          },
        },
        {
          id: "phys11-u4-wave-technologies-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An optical fiber has a core of index $n = 1.48$ and cladding of index $n = 1.46$.\n\nCalculate the critical angle at the core-cladding boundary, and explain why a ray that meets the boundary at $85^\\circ$ to the normal stays in the core.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Critical angle", statement: "$\\sin\\theta_c = n_2 / n_1$ with $n_1 > n_2$" },
              { kind: "principle", name: "Total internal reflection", statement: "Rays meeting the boundary at angles greater than $\\theta_c$ are totally reflected." },
            ],
            steps: [
              { reasoning: "Light goes from the core ($n_1 = 1.48$) to the cladding ($n_2 = 1.46$).", working: "\\sin\\theta_c = \\frac{1.46}{1.48} = 0.9865", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse sine.", working: "\\theta_c = 80.6^\\circ", marks: 1, markCode: "A" },
              { reasoning: "$85^\\circ$ is larger than the critical angle $80.6^\\circ$.", marks: 1, markCode: "B" },
              { reasoning: "So the ray is totally internally reflected, with no light refracted into the cladding, and remains in the core.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$\\theta_c = 80.6^\\circ$; the ray at $85^\\circ$ exceeds $\\theta_c$ and is totally internally reflected.",
            commonErrors: ["Inverting the ratio and getting a sine greater than 1.", "Measuring the angle from the boundary instead of from the normal."],
            examinerNote: "M1 for $1.46/1.48$. A1 for 80.6 degrees (allow 81). B1 for comparing 85 with the critical angle. R1 for total internal reflection conclusion.",
          },
        },
        {
          id: "phys11-u4-wave-technologies-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A wireless router transmits data using microwaves of frequency $2.4 \\times 10^{9}\\ \\text{Hz}$. A communication satellite in geostationary orbit is $3.6 \\times 10^{7}\\ \\text{m}$ above the receiving dish. A social media post claims that mobile-phone signals of frequency $3.5 \\times 10^{9}\\ \\text{Hz}$ \"damage DNA, because they are radiation\". Use $c = 3.00 \\times 10^{8}\\ \\text{m/s}$ and $h = 6.63 \\times 10^{-34}\\ \\text{J·s}$.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength of the router signal in meters.", marks: 2 },
            { label: "b", prompt: "Calculate the time for a signal to travel from the satellite to the dish, and the delay between sending a request to the satellite and receiving a reply from it (a round trip).", marks: 2 },
            { label: "c", prompt: "Calculate the energy of one photon of the $3.5 \\times 10^{9}\\ \\text{Hz}$ phone signal in joules, to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "Evaluate the claim in the post. Ionizing a molecule requires about $2 \\times 10^{-18}\\ \\text{J}$ per photon.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "EM wave equation", statement: "$c = f\\lambda$, and $t = d/c$ for signal delay." },
              { kind: "formula", name: "Photon energy", statement: "$E = hf$" },
              { kind: "principle", name: "Ionizing radiation", statement: "Direct DNA damage needs single photons with energy above the bond or ionization energy." },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange $c = f\\lambda$.", working: "\\lambda = \\frac{3.00 \\times 10^{8}}{2.4 \\times 10^{9}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "\\lambda = 0.125\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "One-way time is distance over the speed of light.", working: "t = \\frac{3.6 \\times 10^{7}}{3.00 \\times 10^{8}} = 0.12\\text{ s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A request and reply is a round trip, which doubles the time.", working: "2 \\times 0.12 = 0.24\\text{ s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute into $E = hf$.", working: "E = (6.63 \\times 10^{-34})(3.5 \\times 10^{9})", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "E = 2.32 \\times 10^{-24}\\text{ J}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The photon energy $2.32 \\times 10^{-24}\\ \\text{J}$ is about a million times smaller than the roughly $2 \\times 10^{-18}\\ \\text{J}$ needed to ionize a molecule.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Intensity only changes the number of photons, so a stronger signal would not make individual photons ionizing; the claim confuses all radiation with ionizing radiation.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclusion: the claim is not supported by the physics for direct DNA damage. Phone signals mainly cause very slight heating, and any further health claims need evidence from controlled studies.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.125\\ \\text{m}$ (b) $0.12\\ \\text{s}$ one way, $0.24\\ \\text{s}$ round trip (c) $2.32 \\times 10^{-24}\\ \\text{J}$ (d) The claim is not supported: photon energy is about $10^6$ times too small to ionize DNA; the word radiation covers non-ionizing waves too.",
            commonErrors: ["In (b) forgetting that a reply needs a round trip.", "In (d) arguing from the word 'radiation' without comparing photon energies."],
            examinerNote: "(b) Allow ecf for a one-way answer used for the delay. (d) Accept comparison giving a ratio of about $10^6$ ($2 \\times 10^{-18} / 2.32 \\times 10^{-24} \\approx 8.6 \\times 10^5$).",
          },
        },
      ],
    },
  ],
};
