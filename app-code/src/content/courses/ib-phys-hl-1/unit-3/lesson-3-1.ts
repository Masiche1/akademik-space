import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "physhl-u3-lesson-3-1",
  code: "3-1",
  title: "Standing Waves and Harmonics",
  goal: "I CAN describe standing wave formation by superposition, calculate harmonic frequencies and wavelengths for strings and pipes, and explain nodes and antinodes.",
  standards: ["Paper 1", "Paper 2", "AHL C1"],
  vocabulary: [
    {
      term: "Standing wave",
      definition:
        "A wave pattern that appears stationary, formed by superposition of two identical waves travelling in opposite directions.",
    },
    {
      term: "Node",
      definition:
        "A point of zero amplitude in a standing wave where destructive interference always occurs.",
    },
    {
      term: "Antinode",
      definition:
        "A point of maximum amplitude in a standing wave where constructive interference always occurs.",
    },
    {
      term: "Fundamental frequency",
      definition:
        "The lowest natural frequency of a vibrating system; all other frequencies are harmonics (integer multiples).",
    },
    {
      term: "Harmonic",
      definition:
        "A standing wave pattern with a specific number of nodes/antinodes; nth harmonic has frequency n × fundamental.",
    },
    {
      term: "Resonance",
      definition:
        "When driving frequency matches a natural frequency, amplitude reaches maximum.",
    },
  ],
  concepts: [
    {
      id: "physhl-u3-standing-waves",
      title: "Formation of standing waves",
      skill:
        "Explain standing wave formation by superposition, identify nodes and antinodes, and distinguish fixed and free ends.",
      lesson: {
        sections: [
          {
            heading: "Superposition",
            body: "When two identical waves travel in opposite directions along the same medium, they superpose to form a **standing wave** — a pattern that appears stationary. This happens when a wave reflects at a boundary and interferes with the incident wave. The standing wave has fixed positions of maximum (antinodes) and zero (nodes) amplitude.",
          },
          {
            heading: "Nodes and antinodes",
            body: "**Nodes** are points of permanent destructive interference (zero amplitude). **Antinodes** are points of permanent constructive interference (maximum amplitude = 2× individual wave amplitude). Adjacent antinodes are separated by $\\lambda/2$; adjacent nodes are also $\\lambda/2$ apart. A node and adjacent antinode are $\\lambda/4$ apart.",
          },
          {
            heading: "Boundary conditions",
            body: "At a **fixed end** (e.g. string tied to a wall), there must be a node. At a **free end** (e.g. open end of a pipe), there must be an antinode. These boundary conditions determine which harmonics are allowed. A string fixed at both ends has nodes at both ends; a pipe open at both ends has antinodes at both ends.",
          },
        ],
        keyFormulas: [
          {
            name: "Node-antinode spacing",
            statement:
              "Adjacent antinodes/nodes: $\\lambda/2$; node to antinode: $\\lambda/4$.",
          },
          { name: "Fixed end", statement: "Node (zero amplitude)." },
          { name: "Free end", statement: "Antinode (maximum amplitude)." },
        ],
        workedExample: {
          problem:
            "A string of length 2.0 m is fixed at both ends. Draw the pattern for the 3rd harmonic and find the wavelength.",
          solution:
            "3rd harmonic: 3 half-wavelengths fit in 2.0 m → $L = 3\\lambda/2$ → $\\lambda = 2L/3 = 1.33$ m. Pattern has 4 nodes (including ends) and 3 antinodes.",
        },
      },
      questions: [
        {
          id: "physhl-u3-sw-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a standing wave, nodes are points where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amplitude is always zero" },
              { id: "b", text: "Amplitude is maximum" },
              { id: "c", text: "Wavelength is maximum" },
              { id: "d", text: "Frequency is minimum" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Node",
                statement:
                  "Point of permanent destructive interference → zero amplitude.",
              },
            ],
            steps: [
              {
                reasoning: "Nodes are stationary points of zero amplitude.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Amplitude always zero",
            commonErrors: [
              "Confusing nodes with antinodes — nodes are zero, antinodes are max.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why a string fixed at both ends can only vibrate at certain discrete frequencies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boundary conditions",
                statement:
                  "Fixed ends require nodes → only integer half-wavelengths fit → discrete frequencies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fixed ends must be nodes — amplitude zero at boundaries.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Only wavelengths satisfying $L = n\\lambda/2$ (n = 1,2,3...) produce standing waves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Since $f = v/\\lambda$, only discrete frequencies are allowed — harmonics.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Boundary nodes → only integer $\\lambda/2$ fit → discrete harmonics.",
            commonErrors: [
              "Saying 'any frequency works' — boundary conditions quantise allowed frequencies.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A guitar string of length 0.65 m has a fundamental frequency of 330 Hz. (a) Calculate the wave speed on the string. (b) Calculate the frequency of the 3rd harmonic. (c) How many antinodes are in the 3rd harmonic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "String harmonics",
                statement:
                  "$f_n = n f_1$; $\\lambda_n = 2L/n$; $v = f\\lambda$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Fundamental $\\lambda = 2L = 1.30$ m; $v = f\\lambda = 330 \\times 1.30 = 429$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) $f_3 = 3 \\times 330 = 990$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) 3rd harmonic has 3 antinodes (n antinodes for nth harmonic).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answers: 429 m/s, 990 Hz, 3 antinodes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 429 m/s. (b) 990 Hz. (c) 3 antinodes.",
            commonErrors: [
              "Using $\\lambda = L$ for fundamental — it's $2L$ (two fixed ends).",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A pipe open at both ends has length 0.80 m. The speed of sound is 340 m/s.",
          parts: [
            {
              label: "a",
              prompt: "Explain the boundary conditions for an open pipe.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the fundamental frequency.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the frequency of the first OVERTONE (2nd harmonic) and describe its pattern.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Compare with a pipe closed at one end — what harmonics are allowed?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pipe harmonics",
                statement:
                  "Open pipe: antinodes at both ends, all harmonics. Closed pipe: node at closed end, odd harmonics only.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Open ends → antinodes at both ends (pressure nodes).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning: "Fundamental: $L = \\lambda/2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\lambda = 2L = 1.60$ m; $f = v/\\lambda = 340/1.60 = 212.5$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$f_1 = 213$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "2nd harmonic: $f_2 = 2 \\times 213 = 425$ Hz; one node in middle.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Pattern has 2 antinodes, 1 internal node.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Closed pipe: node at closed end, antinode at open → only odd harmonics ($f = (2n+1)v/4L$).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Closed pipe fundamental $= v/4L = 106$ Hz — half of open pipe.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Antinodes at open ends. (b) 213 Hz. (c) 425 Hz, 1 node. (d) Closed pipe: odd harmonics only, f₁=106 Hz.",
            commonErrors: [
              "Thinking closed pipe has same harmonics — it only supports odd harmonics.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a standing wave, adjacent nodes are separated by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\lambda/2$" },
              { id: "b", text: "$\\lambda/4$" },
              { id: "c", text: "$\\lambda$" },
              { id: "d", text: "$2\\lambda$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Node spacing",
                statement:
                  "Adjacent nodes (and adjacent antinodes) are $\\lambda/2$ apart.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nodes repeat every half wavelength in a standing wave.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\lambda/2$",
            commonErrors: [
              "Confusing node-node spacing ($\\lambda/2$) with node-antinode spacing ($\\lambda/4$).",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A standing wave on a string has nodes spaced 0.30 m apart. (a) Calculate the wavelength. (b) Calculate the distance from a node to the nearest antinode.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.6, unit: "m" },
              { label: "b", answer: 0.15, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Node spacing",
                statement:
                  "Adjacent nodes: $\\lambda/2$; node to antinode: $\\lambda/4$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adjacent nodes are $\\lambda/2$ apart, so $\\lambda = 2 \\times 0.30 = 0.60$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\lambda = 0.60$ m.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Node to adjacent antinode is $\\lambda/4 = 0.60/4 = 0.15$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Distance = 0.15 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.60 m. (b) 0.15 m.",
            commonErrors: [
              "Using $\\lambda/2$ for node-to-antinode — that spacing is $\\lambda/4$.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a pipe closed at one end and open at the other, the closed end must be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A node" },
              { id: "b", text: "An antinode" },
              {
                id: "c",
                text: "Either a node or an antinode depending on frequency",
              },
              { id: "d", text: "Neither — the end does not vibrate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boundary conditions",
                statement: "Fixed/closed end → node; free/open end → antinode.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A closed end is a fixed boundary for the air column → displacement node.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** A node",
            commonErrors: [
              "Confusing the closed end (node) with the open end (antinode).",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A string of length 0.80 m is fixed at both ends and vibrates in its 2nd harmonic with wave speed 200 m/s. (a) Calculate the wavelength. (b) Calculate the frequency.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.8, unit: "m" },
              { label: "b", answer: 250, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "String harmonics",
                statement: "$\\lambda_n = 2L/n$; $f = v/\\lambda$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "2nd harmonic: $\\lambda = 2L/n = 2 \\times 0.80/2 = 0.80$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\lambda = 0.80$ m.", marks: 1, markCode: "A" },
              {
                reasoning: "$f = v/\\lambda = 200/0.80 = 250$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f = 250$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.80 m. (b) 250 Hz.",
            commonErrors: [
              "Using $\\lambda = 2L$ for the 2nd harmonic — that is the fundamental; nth harmonic has $\\lambda = 2L/n$.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two identical waves of amplitude $A$ travel in opposite directions and superpose. The maximum displacement at an antinode is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2A$" },
              { id: "b", text: "$A$" },
              { id: "c", text: "$A/2$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Superposition",
                statement:
                  "At an antinode the two waves always arrive in phase → amplitudes add.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Constructive interference gives $A + A = 2A$ at antinodes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $2A$",
            commonErrors: [
              "Forgetting the standing wave amplitude is the sum of both travelling waves.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A string fixed at both ends is made to vibrate in its 3rd harmonic.",
          parts: [
            {
              label: "a",
              prompt: "Describe the positions of the nodes.",
              marks: 2,
            },
            { label: "b", prompt: "State the number of antinodes.", marks: 1 },
            {
              label: "c",
              prompt:
                "Write an expression for the wavelength in terms of the string length $L$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boundary conditions",
                statement:
                  "Fixed ends are nodes; nth harmonic has $n+1$ nodes and $n$ antinodes, $\\lambda = 2L/n$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Nodes occur at both ends plus two equally spaced internal nodes — 4 nodes total.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "Adjacent nodes separated by $\\lambda/2$; three segments of $\\lambda/2$ fill $L$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "3rd harmonic has 3 antinodes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$L = 3\\lambda/2$ so $\\lambda = 2L/3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\lambda = 2L/3$ is correct for the 3rd harmonic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Nodes at both ends and two equally spaced interior nodes. (b) 3 antinodes. (c) $\\lambda = 2L/3$.",
            commonErrors: [
              "Drawing 3 nodes instead of 4 — n harmonics have n+1 nodes including the ends.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "An open pipe of length 0.60 m resonates with the speed of sound 340 m/s. (a) Calculate the fundamental frequency. (b) Calculate the frequency of the 3rd harmonic.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 283.3, unit: "Hz", tolerance: 0.5 },
              { label: "b", answer: 850, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Open pipe",
                statement: "$f_1 = v/2L$; $f_n = nf_1$.",
              },
            ],
            steps: [
              {
                reasoning: "$f_1 = v/2L = 340/(2 \\times 0.60) = 283$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f_1 = 283$ Hz.", marks: 1, markCode: "A" },
              {
                reasoning: "$f_3 = 3 \\times 283 = 850$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f_3 = 850$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 283 Hz. (b) 850 Hz.",
            commonErrors: ["Using $v/4L$ — that is for a closed pipe."],
          },
        },
        {
          id: "physhl-u3-sw-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The open end of an organ pipe acts as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An antinode" },
              { id: "b", text: "A node" },
              { id: "c", text: "A point of zero pressure only" },
              { id: "d", text: "Nothing — waves cannot reach it" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boundary conditions",
                statement: "Open/free end → antinode (maximum displacement).",
              },
            ],
            steps: [
              {
                reasoning:
                  "An open end is a free boundary → maximum amplitude (antinode).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** An antinode",
            commonErrors: [
              "Reversing node and antinode conditions at pipe ends.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "On a string of length 2.00 m fixed at both ends, a standing wave pattern has nodes at both ends and three additional equally spaced nodes between them. (a) Identify the harmonic number. (b) Calculate the wavelength.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 1, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "String harmonics",
                statement: "nth harmonic: $n+1$ nodes, $\\lambda = 2L/n$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total nodes = 5 (two ends + three internal); $n+1 = 5$ so $n = 4$ — 4th harmonic.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Harmonic number = 4.", marks: 1, markCode: "A" },
              {
                reasoning: "$\\lambda = 2L/n = 2 \\times 2.00/4 = 1.00$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\lambda = 1.00$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4th harmonic. (b) 1.00 m.",
            commonErrors: [
              "Counting 5 nodes as the 5th harmonic — nodes = n+1, so it is the 4th.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q14",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A string is fixed at one end and free at the other, with length 0.90 m and wave speed 180 m/s.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the boundary conditions at each end of the string.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the fundamental frequency.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the frequency of the first overtone.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Compare the allowed harmonics with those of a string fixed at both ends.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boundary conditions",
                statement:
                  "Fixed-free string: node at fixed end, antinode at free end → odd harmonics only, $\\lambda_1 = 4L$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Fixed end must be a node (zero amplitude).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning: "Free end must be an antinode (maximum amplitude).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "$L = \\lambda/4$ so $\\lambda = 4L = 3.6$ m; $f_1 = v/\\lambda = 180/3.6 = 50$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$f_1 = 50$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "First overtone is the 3rd harmonic: $f = 3 \\times 50 = 150$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$f = 150$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Fixed-free supports only odd harmonics; fixed-fixed supports all harmonics.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Fixed-free fundamental has $\\lambda = 4L$ vs $2L$ for fixed-fixed — half the frequency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Node at fixed end, antinode at free end. (b) 50 Hz. (c) 150 Hz. (d) Odd harmonics only, f₁ halved.",
            commonErrors: [
              "Assuming all harmonics are allowed — a free end restricts to odd harmonics.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A string of length 1.20 m carries waves at 240 m/s. For the 3rd harmonic: (a) calculate the wavelength; (b) calculate the frequency.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.8, unit: "m" },
              { label: "b", answer: 300, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "String harmonics",
                statement: "$\\lambda_n = 2L/n$; $f = v/\\lambda$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\lambda = 2L/3 = 2 \\times 1.20/3 = 0.80$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\lambda = 0.80$ m.", marks: 1, markCode: "A" },
              {
                reasoning: "$f = v/\\lambda = 240/0.80 = 300$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f = 300$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.80 m. (b) 300 Hz.",
            commonErrors: [
              "Using $\\lambda = 2L$ — the 3rd harmonic fits 3 half-wavelengths, so $\\lambda = 2L/3$.",
            ],
          },
        },
        {
          id: "physhl-u3-sw-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The superposition of two identical waves travelling in opposite directions along a string produces:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A stationary pattern of nodes and antinodes — a standing wave",
              },
              { id: "b", text: "A single wave travelling in one direction" },
              { id: "c", text: "A beat pattern with varying amplitude" },
              { id: "d", text: "Complete cancellation everywhere" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standing wave",
                statement:
                  "Two identical counter-propagating waves superpose into a stationary pattern.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Equal and opposite travelling waves interfere to give fixed nodes and antinodes.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** A standing wave",
            commonErrors: [
              "Thinking the waves keep travelling — the resultant pattern is stationary.",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u3-harmonics",
      title: "Harmonics in strings and pipes",
      skill:
        "Calculate harmonic frequencies for strings and pipes, distinguish open and closed pipes, and relate harmonic number to nodes and antinodes.",
      lesson: {
        sections: [
          {
            heading: "String fixed at both ends",
            body: "For a string of length $L$ fixed at both ends: allowed wavelengths $\\lambda_n = \\frac{2L}{n}$ where $n = 1, 2, 3, ...$. Frequencies $f_n = \\frac{nv}{2L}$ where $v = \\sqrt{T/\\mu}$ is wave speed ($T$ = tension, $\\mu$ = mass per unit length). The nth harmonic has n antinodes and n+1 nodes (including ends). Fundamental ($n=1$): $\\lambda = 2L$, one antinode.",
          },
          {
            heading: "Open pipe (both ends open)",
            body: "Same as string fixed at both ends — antinodes at both ends, all harmonics allowed: $f_n = \\frac{nv}{2L}$, $\\lambda_n = \\frac{2L}{n}$. Fundamental: $\\lambda = 2L$.",
          },
          {
            heading: "Closed pipe (one end closed)",
            body: "Node at closed end, antinode at open end. Only ODD harmonics: $f_n = \\frac{(2n+1)v}{4L}$ for $n = 0, 1, 2, ...$. Wavelengths $\\lambda_n = \\frac{4L}{2n+1}$. Fundamental ($n=0$): $\\lambda = 4L$ — the pipe supports a quarter wavelength. First overtone is the 3rd harmonic (3× fundamental), NOT the 2nd.",
          },
        ],
        keyFormulas: [
          {
            name: "String/open pipe",
            statement: "$f_n = \\frac{nv}{2L}$, $\\lambda_n = \\frac{2L}{n}$",
          },
          {
            name: "Closed pipe",
            statement: "$f_n = \\frac{(2n+1)v}{4L}$, $\\lambda_1 = 4L$",
          },
          { name: "String wave speed", statement: "$v = \\sqrt{T/\\mu}$" },
        ],
        workedExample: {
          problem:
            "A closed pipe of length 0.50 m resonates at its fundamental. Speed of sound = 340 m/s. Find the frequency and the next allowed frequency.",
          solution:
            "$f_1 = v/4L = 340/(4 \\times 0.50) = 170$ Hz. Next allowed = 3rd harmonic = $3 \\times 170 = 510$ Hz.",
        },
      },
      questions: [
        {
          id: "physhl-u3-harm-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A pipe closed at one end has fundamental wavelength:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\lambda = 4L$" },
              { id: "b", text: "$\\lambda = 2L$" },
              { id: "c", text: "$\\lambda = L$" },
              { id: "d", text: "$\\lambda = L/2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closed pipe",
                statement:
                  "Fundamental $\\lambda = 4L$ — quarter wavelength fits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Closed pipe: node at closed end, antinode at open → $L = \\lambda/4$ → $\\lambda = 4L$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\lambda = 4L$",
            commonErrors: ["Using $2L$ — that's for open pipes/strings."],
          },
        },
        {
          id: "physhl-u3-harm-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why a closed pipe produces only odd harmonics while an open pipe produces all harmonics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boundary conditions",
                statement:
                  "Closed end = node, open end = antinode → only odd multiples of $\\lambda/4$ fit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Closed pipe: node at closed end, antinode at open end.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Only odd multiples of $\\lambda/4$ satisfy both boundary conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Open pipe: antinodes at both ends → all integer $\\lambda/2$ fit → all harmonics.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Closed pipe boundary conditions allow only odd harmonics.",
            commonErrors: [
              "Thinking closed pipe has 'half' the harmonics — it has only ODD ones.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A string of length 1.2 m and mass 2.4 g is under tension 50 N. Calculate: (a) the wave speed; (b) the fundamental frequency; (c) the frequency of the 4th harmonic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "String harmonics",
                statement: "$v = \\sqrt{T/\\mu}$; $f_n = nv/2L$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\mu = 2.4\\text{g}/1.2\\text{m} = 2.0\\times10^{-3}$ kg/m.",
                working: "\\mu = 0.0024/1.2 = 0.002 kg/m",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(a) $v = \\sqrt{50/0.002} = \\sqrt{25000} = 158$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) $f_1 = v/2L = 158/2.4 = 66$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) $f_4 = 4 \\times 66 = 264$ Hz.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 158 m/s. (b) 66 Hz. (c) 264 Hz.",
            commonErrors: [
              "Using total mass instead of mass per unit length $\\mu$.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "An organ pipe is closed at one end and open at the other. Its fundamental frequency is 110 Hz.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the length of the pipe (speed of sound = 340 m/s).",
              marks: 2,
            },
            {
              label: "b",
              prompt: "List the first three allowed frequencies.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe the standing wave pattern for the first overtone.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If the pipe were open at both ends instead, what would the fundamental frequency be?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Closed pipe",
                statement:
                  "$f_1 = v/4L$; only odd harmonics; first overtone = 3rd harmonic.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$L = v/4f = 340/(4 \\times 110) = 0.773$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$L = 0.77$ m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Allowed: 110, 330, 550 Hz (odd harmonics only).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "All three correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "First overtone (3rd harmonic): $\\lambda = 4L/3$; one node, two antinodes.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Pattern: node at closed end, antinode at open, one internal node.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Open pipe $f_1 = v/2L = 340/(2 \\times 0.773) = 220$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$f_1 = 220$ Hz — exactly double the closed pipe fundamental.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 0.77 m. (b) 110, 330, 550 Hz. (c) 1 node, 2 antinodes. (d) 220 Hz.",
            commonErrors: [
              "Including even harmonics for closed pipe — only odd allowed.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The first overtone of a pipe closed at one end corresponds to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The 2nd harmonic" },
              { id: "b", text: "The 3rd harmonic" },
              { id: "c", text: "The fundamental" },
              { id: "d", text: "The 4th harmonic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Closed pipe",
                statement:
                  "Only odd harmonics allowed; first overtone = next allowed = 3rd harmonic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A closed pipe supports only odd harmonics (1st, 3rd, 5th...).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The 3rd harmonic",
            commonErrors: [
              "Assuming first overtone = 2nd harmonic — even harmonics are not allowed in a closed pipe.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A pipe closed at one end has length 0.85 m. The speed of sound is 340 m/s. Calculate the fundamental frequency.",
          response: {
            type: "numeric",
            parts: [
              { label: "Fundamental frequency", answer: 100, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closed pipe",
                statement: "$f_1 = v/4L$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f_1 = v/4L = 340/(4 \\times 0.85) = 340/3.4 = 100$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f_1 = 100$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f_1 = 100$ Hz",
            commonErrors: ["Using $v/2L$ — that is for an open pipe."],
          },
        },
        {
          id: "physhl-u3-harm-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A pipe open at both ends has length 1.0 m and the speed of sound is 340 m/s. (a) Calculate the fundamental frequency. (b) Calculate the frequency of the 2nd harmonic.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 170, unit: "Hz" },
              { label: "b", answer: 340, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Open pipe",
                statement: "$f_1 = v/2L$; $f_n = nf_1$",
              },
            ],
            steps: [
              {
                reasoning: "$f_1 = v/2L = 340/(2 \\times 1.0) = 170$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f_1 = 170$ Hz.", marks: 1, markCode: "A" },
              {
                reasoning: "$f_2 = 2 \\times 170 = 340$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f_2 = 340$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 170 Hz. (b) 340 Hz.",
            commonErrors: ["Using $v/4L$ — open pipes use $v/2L$."],
          },
        },
        {
          id: "physhl-u3-harm-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The speed of waves on a stretched string is given by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v = \\sqrt{T/\\mu}$" },
              { id: "b", text: "$v = T\\mu$" },
              { id: "c", text: "$v = \\sqrt{\\mu/T}$" },
              { id: "d", text: "$v = fL$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "String wave speed",
                statement:
                  "$v = \\sqrt{T/\\mu}$ where $T$ is tension and $\\mu$ mass per unit length.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wave speed on a string increases with tension and decreases with mass per unit length.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $v = \\sqrt{T/\\mu}$",
            commonErrors: [
              "Inverting the ratio — heavier strings carry waves more slowly.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A string fixed at both ends has length 0.50 m and a fundamental frequency of 220 Hz. (a) Calculate the wavelength of the fundamental. (b) Calculate the wave speed on the string.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.0, unit: "m" },
              { label: "b", answer: 220, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "String harmonics",
                statement: "Fundamental $\\lambda = 2L$; $v = f\\lambda$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fundamental: $\\lambda = 2L = 2 \\times 0.50 = 1.0$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\lambda = 1.0$ m.", marks: 1, markCode: "A" },
              {
                reasoning: "$v = f\\lambda = 220 \\times 1.0 = 220$ m/s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$v = 220$ m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1.0 m. (b) 220 m/s.",
            commonErrors: [
              "Using $\\lambda = L$ for the fundamental of a string fixed at both ends.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two identical strings are under the same tension. String X has twice the mass per unit length of string Y. Compared with Y, the wave speed on X is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1/\\sqrt{2}$ times that of Y" },
              { id: "b", text: "Half that of Y" },
              { id: "c", text: "$\\sqrt{2}$ times that of Y" },
              { id: "d", text: "The same as Y" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "String wave speed",
                statement:
                  "$v = \\sqrt{T/\\mu}$ — doubling $\\mu$ divides $v$ by $\\sqrt{2}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$v_X/v_Y = \\sqrt{\\mu_Y/\\mu_X} = \\sqrt{1/2} = 1/\\sqrt{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1/\\sqrt{2}$ times",
            commonErrors: [
              "Thinking wave speed halves — it falls by $\\sqrt{2}$ because $v \\propto 1/\\sqrt{\\mu}$.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A string of length 0.80 m has mass per unit length $2.0 \\times 10^{-3}$ kg/m and vibrates at its fundamental frequency of 150 Hz.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "String harmonics",
                statement: "$v = 2Lf_1$ for fundamental; $T = \\mu v^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fundamental $\\lambda = 2L = 1.6$ m, so $v = f\\lambda = 150 \\times 1.6 = 240$ m/s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$v = 240$ m/s.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "$T = \\mu v^2 = 2.0\\times10^{-3} \\times 240^2 = 115$ N.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$T = 115$ N.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Uses $v = \\sqrt{T/\\mu}$ rearranged correctly with $\\mu$ as mass per unit length, not total mass.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$v = 240$ m/s; $T = 115$ N.",
            commonErrors: [
              "Using total mass instead of mass per unit length $\\mu$.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The number of antinodes in the nth harmonic of a string fixed at both ends is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n$" },
              { id: "b", text: "$n+1$" },
              { id: "c", text: "$2n$" },
              { id: "d", text: "$n-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Harmonic pattern",
                statement:
                  "nth harmonic: n antinodes and n+1 nodes (including ends).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each harmonic adds one antinode: fundamental has 1, 2nd has 2, etc.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $n$",
            commonErrors: [
              "Confusing antinode count ($n$) with node count ($n+1$).",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A pipe closed at one end has length 0.425 m; the speed of sound is 340 m/s. (a) Calculate the fundamental frequency. (b) Calculate the frequency of the next allowed harmonic.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200, unit: "Hz" },
              { label: "b", answer: 600, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closed pipe",
                statement: "$f_1 = v/4L$; next allowed = 3rd harmonic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f_1 = v/4L = 340/(4 \\times 0.425) = 340/1.7 = 200$ Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f_1 = 200$ Hz.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Next allowed harmonic is the 3rd: $f = 3 \\times 200 = 600$ Hz (the 2nd harmonic is forbidden).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f = 600$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 200 Hz. (b) 600 Hz.",
            commonErrors: [
              "Multiplying by 2 — even harmonics are not allowed in a closed pipe.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Two organ pipes have the same length 0.68 m. Pipe P is open at both ends; pipe Q is closed at one end. The speed of sound is 340 m/s.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pipe harmonics",
                statement:
                  "Open: $f_1 = v/2L$; closed: $f_1 = v/4L$ — closed pipe fundamental is half.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Open pipe: $f_1 = 340/(2 \\times 0.68) = 250$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Open pipe $f_1 = 250$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Closed pipe: $f_1 = 340/(4 \\times 0.68) = 125$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closed pipe $f_1 = 125$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(b) The closed pipe needs a node at the closed end and antinode at the open end, so $\\lambda = 4L$ instead of $2L$ — half the frequency.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Longer effective wavelength → lower pitch.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Open: 250 Hz; closed: 125 Hz. (b) Closed pipe fits $\\lambda/4$ so fundamental halves.",
            commonErrors: [
              "Applying $v/2L$ to the closed pipe — boundary conditions give $v/4L$.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "An open pipe of length 0.34 m resonates with the speed of sound 340 m/s. (a) Calculate the fundamental frequency. (b) Calculate the frequency of the 4th harmonic.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 500, unit: "Hz" },
              { label: "b", answer: 2000, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Open pipe",
                statement: "$f_1 = v/2L$; $f_n = nf_1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$f_1 = 340/(2 \\times 0.34) = 500$ Hz; $f_4 = 4 \\times 500 = 2000$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$f_1 = 500$ Hz and $f_4 = 2000$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "4th harmonic = 4 × fundamental for an open pipe.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) 500 Hz. (b) 2000 Hz.",
            commonErrors: [
              "Using odd multiples — open pipes allow ALL harmonics including the 4th.",
            ],
          },
        },
        {
          id: "physhl-u3-harm-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A flute can be modelled as a pipe open at both ends of length 0.66 m. A clarinet is modelled as a pipe closed at one end of length 0.60 m. The speed of sound is 340 m/s.",
          parts: [
            {
              label: "a",
              prompt: "State the boundary condition at each end of the flute.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the flute's fundamental frequency.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the clarinet's fundamental frequency.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why the clarinet's first overtone is its third harmonic.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pipe harmonics",
                statement:
                  "Open pipe: antinodes at both ends, all harmonics. Closed pipe: node at closed end, antinode at open, odd harmonics only.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Both ends open → antinode (maximum displacement) at each end.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning: "Fundamental fits $\\lambda/2$ in the length.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$f_1 = v/2L = 340/(2 \\times 0.66) = 258$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$f_1 = 258$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$f_1 = v/4L = 340/(4 \\times 0.60) = 142$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$f_1 = 142$ Hz.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Closed pipe allows only odd harmonics, so the next allowed frequency after the fundamental is the 3rd harmonic.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "The 2nd harmonic is forbidden by the boundary conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Antinodes at both ends. (b) 258 Hz. (c) 142 Hz. (d) Only odd harmonics allowed.",
            commonErrors: [
              "Applying open-pipe formula to the clarinet — it is closed at one end.",
            ],
          },
        },
      ],
    },
  ],
};
