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
              { id: "b", text: "Wave travelling at constant speed" },
              { id: "c", text: "Single pulse moving along medium" },
              { id: "d", text: "Wave with varying frequency" },
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
              { id: "a", text: "Maximum amplitude when driving frequency matches natural frequency" },
              { id: "b", text: "Complete destruction of system" },
              { id: "c", text: "Zero amplitude oscillation" },
              { id: "d", text: "Random frequency change" },
            ],
            correctChoiceId: "a",
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
