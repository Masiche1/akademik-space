import type { Lesson } from "../../../types.ts";

export const lesson413: Lesson = {
  id: "cial-p-u4-lesson-4-3",
  code: "4-3",
  title: "Standing waves and resonance",
  goal: "I CAN explain standing waves, harmonics and resonance.",
  standards: ["9702 9: standing waves"],
  vocabulary: [
    { term: "Standing wave", definition: "Wave pattern with fixed nodes and antinodes — no net energy transfer." },
    { term: "Node", definition: "Point of zero amplitude in standing wave." },
    { term: "Antinode", definition: "Point of maximum amplitude in standing wave." },
    { term: "Harmonic", definition: "Allowed frequency of standing wave — fundamental, 2nd, 3rd..." },
    { term: "Resonance", definition: "Large amplitude oscillation when driving frequency matches natural frequency." },
    { term: "Natural frequency", definition: "Frequency at which system oscillates freely." },
  ],
  concepts: [
    {
      id: "cial-p-u4-standing",
      title: "Standing waves",
      skill: "Explain formation of standing waves and harmonics on strings and in pipes.",
      lesson:
      {
        sections: [
          {
            heading: "Formation",
            body: "Two identical waves travelling in opposite directions superpose → standing wave. Nodes (zero amplitude) and antinodes (max amplitude) fixed in space. No net energy transfer — energy oscillates between KE and PE.",
          },
          {
            heading: "String harmonics",
            body: "String fixed at both ends: fundamental has one antinode ($\\lambda = 2L$), 2nd harmonic two antinodes ($\\lambda = L$), nth harmonic n antinodes. $f_n = nf_1$ where $f_1 = \\frac{1}{2L}\\sqrt{T/\\mu}$.",
          },
          {
            heading: "Pipe harmonics",
            body: "Open pipe: antinodes at both ends — same as string ($\\lambda = 2L/n$). Closed pipe: node at closed end, antinode at open — only odd harmonics ($\\lambda = 4L/n$, n odd). Musical instruments exploit these.",
          },
        ],
        keyFormulas: [
          { name: "String", statement: "$f_n = \\frac{n}{2L}\\sqrt{T/\\mu}$" },
          { name: "Open pipe", statement: "$\\lambda = 2L/n$" },
          { name: "Closed pipe", statement: "$\\lambda = 4L/n$ (n odd)" },
        ],
        workedExample: {
          problem: "A string 1 m long has fundamental frequency 100 Hz. Find 3rd harmonic frequency.",
          solution: "$f_3 = 3f_1 = 300\\ Hz$.",
        },
      },
      questions: [
        {
          id: "cial-p-u4-sw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a standing wave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixed nodes and antinodes — no net energy transfer" },
              { id: "b", text: "Wave with varying frequency" },
              { id: "c", text: "Wave travelling at constant speed" },
              { id: "d", text: "Single pulse moving along medium" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Standing wave", statement: "Nodes+antinodes fixed; no net energy flow." }],
            steps: [{ reasoning: "Standing wave = fixed pattern from superposition.", marks: 1, markCode: "A" }],
            finalAnswer: "Fixed nodes/antinodes",
          },
        },
        {
          id: "cial-p-u4-sw-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How are standing waves formed?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Standing waves", statement: "Two identical waves in opposite directions superpose." }],
            steps: [
              { reasoning: "Incident and reflected waves travel opposite directions.", marks: 1, markCode: "M" },
              { reasoning: "Superposition creates fixed nodes and antinodes.", marks: 1, markCode: "M" },
              { reasoning: "No net energy transfer along string.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Superposition of counter-propagating waves",
          },
        },
        {
          id: "cial-p-u4-sw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A closed pipe has fundamental frequency 200 Hz. What is the 3rd harmonic frequency?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Pipe harmonics", statement: "Closed pipe: only odd harmonics." }],
            steps: [
              { reasoning: "Closed pipe supports odd harmonics only.", marks: 1, markCode: "M" },
              { reasoning: "3rd harmonic = 3 × fundamental = 600 Hz.", marks: 1, markCode: "M" },
              { reasoning: "Even harmonics absent.", marks: 1, markCode: "A" },
              { reasoning: "Harmonics at odd multiples of f₁.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$f_3 = 600\\ Hz$",
          },
        },
        {
          id: "cial-p-u4-sw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Standing waves.",
          parts: [
            { label: "a", prompt: "Define standing wave and name its features.", marks: 3 },
            { label: "b", prompt: "How are standing waves formed?", marks: 2 },
            { label: "c", prompt: "Compare open and closed pipe harmonics.", marks: 2 },
            { label: "d", prompt: "What is resonance?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Standing waves", statement: "Nodes/antinodes; pipe harmonics differ." }],
            steps: [
              { part: "a", reasoning: "Fixed pattern from superposition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Nodes (zero amplitude) and antinodes (max).", marks: 1, markCode: "A" },
              { part: "a", reasoning: "No net energy transfer.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Two waves in opposite directions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Superposition creates fixed pattern.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Open: all harmonics; closed: odd only.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Max amplitude when driving f = natural f.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Energy transfer most efficient at resonance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) nodes/antinodes (b) superposition (c) open vs closed (d) f_match",
          },
        },
        {
          id: "cial-p-u4-sw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A node in a standing wave is a point where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The amplitude is zero" },
              { id: "b", text: "The frequency is zero" },
              { id: "c", text: "The amplitude is maximum" },
              { id: "d", text: "The wavelength is zero" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Node", statement: "Point of zero amplitude in a standing wave." }],
            steps: [{ reasoning: "Nodes never move — amplitude is always zero there.", marks: 1, markCode: "A" }],
            finalAnswer: "Zero amplitude",
          },
        },
        {
          id: "cial-p-u4-sw-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "An antinode in a standing wave is a point where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The amplitude is maximum" },
              { id: "b", text: "There is no displacement ever" },
              { id: "c", text: "The wave changes direction" },
              { id: "d", text: "The amplitude is minimum" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Antinode", statement: "Point of maximum amplitude in a standing wave." }],
            steps: [{ reasoning: "Antinodes oscillate with the largest amplitude.", marks: 1, markCode: "A" }],
            finalAnswer: "Maximum amplitude",
          },
        },
        {
          id: "cial-p-u4-sw-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A string fixed at both ends vibrates with a fundamental frequency of $125\\ Hz$. Calculate the frequency of its second harmonic.",
          response: { type: "numeric", parts: [{ label: "frequency", answer: 250, unit: "Hz" }] },
          markscheme: {
            principles: [{ kind: "law", name: "String harmonics", statement: "$f_n = nf_1$." }],
            steps: [
              { reasoning: "$f_2 = 2 \\times 125$.", marks: 1, markCode: "M" },
              { reasoning: "$f_2 = 250\\ Hz$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f_2 = 250\\ Hz$",
          },
        },
        {
          id: "cial-p-u4-sw-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A pipe closed at one end has length $0.85\\ m$. Taking the speed of sound as $340\\ m\\ s^{-1}$, calculate its fundamental frequency.",
          response: { type: "numeric", parts: [{ label: "frequency", answer: 100, unit: "Hz" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Closed pipe", statement: "$f_1 = v/4L$ for a pipe closed at one end." }],
            steps: [
              { reasoning: "$f_1 = 340/(4 \\times 0.85) = 340/3.4$.", marks: 1, markCode: "M" },
              { reasoning: "$f_1 = 100\\ Hz$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f_1 = 100\\ Hz$",
          },
        },
        {
          id: "cial-p-u4-sw-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An open pipe of length $0.50\\ m$ supports a standing wave. Given the speed of sound is $340\\ m\\ s^{-1}$, calculate the wavelength of the fundamental.",
          response: { type: "numeric", parts: [{ label: "wavelength", answer: 1.0, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Open pipe", statement: "Fundamental $\\lambda = 2L$." }],
            steps: [
              { reasoning: "$\\lambda = 2 \\times 0.50$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 1.0\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 1.0\\ m$",
          },
        },
        {
          id: "cial-p-u4-sw-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A string of length $1.2\\ m$ has wave speed $240\\ m\\ s^{-1}$ and is fixed at both ends. Calculate its fundamental frequency.",
          response: { type: "numeric", parts: [{ label: "frequency", answer: 100, unit: "Hz" }] },
          markscheme: {
            principles: [{ kind: "law", name: "String", statement: "$f_1 = v/2L$ for a string fixed at both ends." }],
            steps: [
              { reasoning: "Fundamental wavelength $\\lambda = 2L = 2.4\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "$f_1 = v/\\lambda = 240/2.4$.", marks: 1, markCode: "M" },
              { reasoning: "$f_1 = 100\\ Hz$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f_1 = 100\\ Hz$",
          },
        },
        {
          id: "cial-p-u4-sw-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a pipe open at both ends, the standing wave has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nodes at both ends" },
              { id: "b", text: "A node at one end and antinode at the other" },
              { id: "c", text: "Antinodes at both ends" },
              { id: "d", text: "No displacement anywhere" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Open pipe", statement: "Open ends are antinodes; closed ends are nodes." }],
            steps: [{ reasoning: "Both ends open → antinode at each end.", marks: 1, markCode: "A" }],
            finalAnswer: "Antinodes at both ends",
          },
        },
        {
          id: "cial-p-u4-sw-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A pipe closed at one end does not support even harmonics because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The pipe is too short" },
              { id: "b", text: "The closed end must be a node and the open end an antinode" },
              { id: "c", text: "Even harmonics have zero frequency" },
              { id: "d", text: "Sound cannot travel in closed pipes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Closed pipe", statement: "Node at closed end + antinode at open end → only odd harmonics." }],
            steps: [{ reasoning: "Boundary conditions only allow odd multiples of the fundamental.", marks: 1, markCode: "A" }],
            finalAnswer: "Boundary conditions allow odd harmonics only",
          },
        },
        {
          id: "cial-p-u4-sw-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Unlike a progressive wave, a standing wave:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transfers energy along the medium" },
              { id: "b", text: "Requires no medium" },
              { id: "c", text: "Travels at the wave speed" },
              { id: "d", text: "Has fixed nodes and antinodes and no net energy transfer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Standing wave", statement: "Fixed pattern; energy oscillates locally but does not travel." }],
            steps: [{ reasoning: "Standing waves store energy rather than transporting it.", marks: 1, markCode: "A" }],
            finalAnswer: "No net energy transfer",
          },
        },
        {
          id: "cial-p-u4-sw-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The nth harmonic of a string fixed at both ends contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n$ antinodes" },
              { id: "b", text: "$n + 1$ antinodes" },
              { id: "c", text: "$2n$ antinodes" },
              { id: "d", text: "$n/2$ antinodes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Harmonics", statement: "nth harmonic has n antinodes and n+1 nodes (including ends)." }],
            steps: [{ reasoning: "Each harmonic adds one antinode.", marks: 1, markCode: "A" }],
            finalAnswer: "$n$ antinodes",
          },
        },
        {
          id: "cial-p-u4-sw-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a standing wave forms on a string fixed at both ends, and describe the features of its fundamental mode.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Standing waves", statement: "Superposition of waves travelling in opposite directions." }],
            steps: [
              { reasoning: "Waves travelling along the string are reflected at the fixed ends.", marks: 1, markCode: "M" },
              { reasoning: "Incident and reflected waves superpose to form a fixed pattern.", marks: 1, markCode: "M" },
              { reasoning: "Nodes form at the fixed ends; one antinode at the centre for the fundamental.", marks: 1, markCode: "M" },
              { reasoning: "Fundamental wavelength $\\lambda = 2L$ and no net energy transfer occurs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Reflection + superposition → fixed nodes/antinodes",
          },
        },
        {
          id: "cial-p-u4-sw-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the harmonic series produced by a string fixed at both ends and a pipe closed at one end, explaining the difference in terms of boundary conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Harmonics", statement: "String/open pipe: all harmonics; closed pipe: odd harmonics only." }],
            steps: [
              { reasoning: "String fixed at both ends: nodes at both ends → all integer harmonics $f_n = nf_1$.", marks: 1, markCode: "M" },
              { reasoning: "Closed pipe: node at closed end, antinode at open end.", marks: 1, markCode: "M" },
              { reasoning: "Boundary conditions only allow odd harmonics $f_n = nf_1$ with $n = 1, 3, 5, ...$.", marks: 1, markCode: "M" },
              { reasoning: "Even harmonics would require a node at the open end — impossible.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "String all harmonics; closed pipe odd only",
          },
        },
      ],
    },
    {
      id: "cial-p-u4-resonance",
      title: "Resonance",
      skill: "Explain resonance and its applications/ dangers.",
      lesson: {
        sections: [
          {
            heading: "Natural frequency",
            body: "Every system has natural frequency of free oscillation. Driving it at this frequency → resonance → maximum amplitude. Damping reduces resonance amplitude.",
          },
          {
            heading: "Resonance curve",
            body: "Amplitude vs driving frequency: peak at natural frequency. Light damping → sharp high peak; heavy damping → broad low peak. Critical damping: fastest return without oscillation.",
          },
          {
            heading: "Applications and dangers",
            body: "Applications: radio tuning, musical instruments, MRI. Dangers: bridge collapse (Tacoma Narrows), mechanical failure. Engineers use damping to prevent destructive resonance.",
          },
        ],
        keyFormulas: [
          { name: "Resonance", statement: "Driving frequency = natural frequency → max amplitude" },
          { name: "Damping", statement: "Reduces oscillation amplitude over time" },
        ],
        workedExample: {
          problem: "Why does a wine glass shatter when a singer hits the right note?",
          solution: "Singing at glass's natural frequency → resonance → large amplitude vibrations → glass breaks if exceeds elastic limit.",
        },
      },
      questions: [
        {
          id: "cial-p-u4-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is resonance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero amplitude oscillation" },
              { id: "b", text: "Maximum amplitude when driving frequency matches natural frequency" },
              { id: "c", text: "Random frequency change" },
              { id: "d", text: "Complete destruction of system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Resonance", statement: "f_drive = f_natural → max amplitude." }],
            steps: [{ reasoning: "Resonance = frequency match.", marks: 1, markCode: "A" }],
            finalAnswer: "Frequency match → max amplitude",
          },
        },
        {
          id: "cial-p-u4-re-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is damping and why is it useful?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Damping", statement: "Force opposing oscillation — reduces amplitude." }],
            steps: [
              { reasoning: "Damping = friction/resistance opposing motion.", marks: 1, markCode: "M" },
              { reasoning: "Reduces amplitude of oscillations.", marks: 1, markCode: "A" },
              { reasoning: "Prevents destructive resonance — car suspensions, buildings.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Opposes oscillation → prevents resonance damage",
          },
        },
        {
          id: "cial-p-u4-re-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the resonance curve for light vs heavy damping.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Resonance curve", statement: "Light damping: sharp high peak; heavy: broad low peak." }],
            steps: [
              { reasoning: "Light damping: sharp peak at natural frequency.", marks: 1, markCode: "M" },
              { reasoning: "Heavy damping: broad low peak.", marks: 1, markCode: "M" },
              { reasoning: "Peak height = max amplitude.", marks: 1, markCode: "A" },
              { reasoning: "Critical damping: no oscillation, fastest return.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Light=sharp peak; heavy=broad low",
          },
        },
        {
          id: "cial-p-u4-re-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Resonance.",
          parts: [
            { label: "a", prompt: "Define natural frequency.", marks: 2 },
            { label: "b", prompt: "Define resonance.", marks: 2 },
            { label: "c", prompt: "What is damping?", marks: 2 },
            { label: "d", prompt: "Give one beneficial and one dangerous example of resonance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Resonance", statement: "f_match → max amplitude; damping reduces it." }],
            steps: [
              { part: "a", reasoning: "Frequency of free oscillation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "System's inherent frequency.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Max amplitude at f_drive = f_natural.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Force opposing oscillation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reduces amplitude over time.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Beneficial: radio tuning, instruments.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Dangerous: bridge collapse, machine failure.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Damping prevents dangerous cases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) free f (b) f_match (c) opposes osc (d) radio/bridge",
          },
        },
        {
          id: "cial-p-u4-re-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The natural frequency of a system is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The frequency of the driving force" },
              { id: "b", text: "The frequency at which it oscillates freely" },
              { id: "c", text: "The frequency at which it oscillates when driven" },
              { id: "d", text: "The highest frequency it can reach" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Natural frequency", statement: "Frequency of free oscillation." }],
            steps: [{ reasoning: "Natural frequency is an inherent property of the system.", marks: 1, markCode: "A" }],
            finalAnswer: "Frequency of free oscillation",
          },
        },
        {
          id: "cial-p-u4-re-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Damping of an oscillating system:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduces the amplitude of oscillations" },
              { id: "b", text: "Increases the natural frequency" },
              { id: "c", text: "Removes all nodes from standing waves" },
              { id: "d", text: "Increases the amplitude over time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Damping", statement: "Force opposing oscillation; reduces amplitude." }],
            steps: [{ reasoning: "Damping dissipates energy, so oscillations decay.", marks: 1, markCode: "A" }],
            finalAnswer: "Reduces amplitude",
          },
        },
        {
          id: "cial-p-u4-re-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The amplitude of oscillation of a system is measured while the driving frequency is varied. The amplitude peaks at a driving frequency of $250\\ Hz$. State the natural frequency of the system and explain your answer.",
          response: { type: "numeric", parts: [{ label: "natural frequency", answer: 250, unit: "Hz" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Resonance", statement: "Peak amplitude occurs when $f_{drive} = f_{natural}$." }],
            steps: [
              { reasoning: "Maximum amplitude occurs at resonance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore $f_{natural} = 250\\ Hz$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f_{natural} = 250\\ Hz$",
          },
        },
        {
          id: "cial-p-u4-re-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A system oscillates with maximum amplitude of $20\\ mm$ at resonance. When heavier damping is applied, the peak amplitude falls to $8\\ mm$. Calculate the percentage reduction in amplitude.",
          response: { type: "numeric", parts: [{ label: "percentage reduction", answer: 60, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Damping", statement: "Heavier damping lowers and broadens the resonance peak." }],
            steps: [
              { reasoning: "Reduction $= 20 - 8 = 12\\ mm$; percentage $= 12/20 \\times 100$.", marks: 1, markCode: "M" },
              { reasoning: "Percentage reduction $= 60\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\%$",
          },
        },
        {
          id: "cial-p-u4-re-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A system has a natural frequency of $440\\ Hz$. What driving frequency will produce resonance? Calculate the period of the oscillation at resonance.",
          response: {
            type: "numeric",
            parts: [
              { label: "driving frequency", answer: 440, unit: "Hz" },
              { label: "period", answer: 0.00227, unit: "s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Resonance", statement: "$f_{drive} = f_{natural}$; $T = 1/f$." }],
            steps: [
              { reasoning: "$f_{drive} = 440\\ Hz$ for resonance.", marks: 1, markCode: "M" },
              { reasoning: "$T = 1/440 = 2.3\\times10^{-3}\\ s$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f = 440\\ Hz$, $T = 2.3\\times10^{-3}\\ s$",
          },
        },
        {
          id: "cial-p-u4-re-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A driven oscillator has a resonant amplitude of $15\\ cm$. When damping is increased, the amplitude at resonance is reduced by $60\\%$. Calculate the new resonant amplitude.",
          response: { type: "numeric", parts: [{ label: "amplitude", answer: 6, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Damping", statement: "Increased damping reduces peak amplitude." }],
            steps: [
              { reasoning: "Reduction $= 60\\%$ of $15\\ cm = 9\\ cm$.", marks: 1, markCode: "M" },
              { reasoning: "New amplitude $= 15 - 9$.", marks: 1, markCode: "M" },
              { reasoning: "New amplitude $= 6\\ cm$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A = 6\\ cm$",
          },
        },
        {
          id: "cial-p-u4-re-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The collapse of the Tacoma Narrows Bridge is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diffraction" },
              { id: "b", text: "Total internal reflection" },
              { id: "c", text: "Constructive interference" },
              { id: "d", text: "Destructive resonance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "application", name: "Resonance", statement: "Wind drove the bridge at its natural frequency → large amplitude." }],
            steps: [{ reasoning: "Matching driving frequency to natural frequency caused destructive resonance.", marks: 1, markCode: "A" }],
            finalAnswer: "Resonance",
          },
        },
        {
          id: "cial-p-u4-re-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Critical damping is the condition in which a displaced system:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Returns to equilibrium in the shortest time without oscillating" },
              { id: "b", text: "Never returns to equilibrium" },
              { id: "c", text: "Resonates at maximum amplitude" },
              { id: "d", text: "Oscillates forever with constant amplitude" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Critical damping", statement: "Fastest non-oscillatory return to equilibrium." }],
            steps: [{ reasoning: "Critical damping gives aperiodic, rapid decay.", marks: 1, markCode: "A" }],
            finalAnswer: "Fastest return without oscillation",
          },
        },
        {
          id: "cial-p-u4-re-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Resonance occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Damping is maximum" },
              { id: "b", text: "The amplitude is zero" },
              { id: "c", text: "The driving frequency equals the natural frequency" },
              { id: "d", text: "The frequency is doubled" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Resonance", statement: "$f_{drive} = f_{natural}$ → maximum amplitude." }],
            steps: [{ reasoning: "Frequency match is the condition for resonance.", marks: 1, markCode: "A" }],
            finalAnswer: "$f_{drive} = f_{natural}$",
          },
        },
        {
          id: "cial-p-u4-re-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A resonance curve for light damping compared with heavy damping has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A higher and sharper peak" },
              { id: "b", text: "A lower and broader peak" },
              { id: "c", text: "The same peak shifted to higher frequency" },
              { id: "d", text: "No peak at all" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Resonance curve", statement: "Light damping → sharp high peak; heavy damping → broad low peak." }],
            steps: [{ reasoning: "Less damping allows larger amplitude at resonance.", marks: 1, markCode: "A" }],
            finalAnswer: "Higher, sharper peak",
          },
        },
        {
          id: "cial-p-u4-re-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the shape of the resonance curve depends on damping, and describe one beneficial and one dangerous consequence of resonance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Resonance", statement: "Peak height/width set by damping; applications vs hazards." }],
            steps: [
              { reasoning: "Light damping gives a tall, narrow peak at the natural frequency.", marks: 1, markCode: "M" },
              { reasoning: "Heavy damping gives a low, broad peak over a range of frequencies.", marks: 1, markCode: "M" },
              { reasoning: "Beneficial: radio tuning, musical instruments, MRI select signals at resonance.", marks: 1, markCode: "M" },
              { reasoning: "Dangerous: bridge or machine failure when driven at natural frequency; damping used to prevent it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Damping sets peak shape; useful vs destructive resonance",
          },
        },
        {
          id: "cial-p-u4-re-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two ways engineers prevent destructive resonance in structures such as bridges and buildings.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Damping", statement: "Damping and detuning reduce resonant amplitude." }],
            steps: [
              { reasoning: "Add damping materials (e.g. shock absorbers, viscoelastic layers) to dissipate energy.", marks: 1, markCode: "M" },
              { reasoning: "Change the natural frequency (stiffen structure, add mass) so it does not match common driving frequencies.", marks: 1, markCode: "M" },
              { reasoning: "Use tuned mass dampers that oscillate out of phase to cancel motion.", marks: 1, markCode: "M" },
              { reasoning: "Any two correct methods with brief justification score full marks.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Damping + detuning/tuned mass dampers",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u4-standing-resonance-notes",
      title: "Standing waves and resonance — revision notes",
      summary: "Nodes/antinodes, pipe harmonics, resonance and damping.",
      sections: [
        {
          heading: "Standing waves",
          body: "Superposition of counter-propagating waves → fixed nodes/antinodes. String: $f_n = nf_1$. Open pipe: all harmonics; closed: odd only ($\\lambda = 4L/n$).",
        },
        {
          heading: "Resonance",
          body: "Driving at natural frequency → max amplitude. Damping reduces peak. Light damping = sharp peak; heavy = broad. Applications: radio, instruments; dangers: bridges, machines.",
        },
        {
          heading: "Exam checklist",
          body: "For pipes identify open/closed ends first — determines harmonic series. Resonance always needs frequency match.",
        },
      ],
    },
  ],
};
