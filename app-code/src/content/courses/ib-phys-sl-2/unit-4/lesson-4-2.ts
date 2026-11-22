import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "physsl-u4-lesson-4-2",
  code: "4-2",
  title: "Superposition, Interference and Standing Waves",
  goal: "I CAN apply the principle of superposition to interference using path difference, and describe standing waves, nodes, antinodes and harmonics on strings and in pipes.",
  standards: ["Topic 4.3", "Topic 4.4", "Paper 1", "Paper 2 Section A"],
  vocabulary: [
    { term: "Superposition", definition: "The principle that when two or more waves meet, the resultant displacement at a point is the sum of the individual displacements." },
    { term: "Coherent sources", definition: "Sources that emit waves of the same frequency with a constant phase relationship, so a stable interference pattern is produced." },
    { term: "Constructive interference", definition: "Superposition in which displacements add to give a larger resultant, occurring when the path difference is a whole number of wavelengths." },
    { term: "Destructive interference", definition: "Superposition in which displacements cancel to give a smaller resultant, occurring when the path difference is a half-integer number of wavelengths." },
    { term: "Standing wave", definition: "A wave pattern formed by two identical waves travelling in opposite directions, with fixed positions of maximum and minimum displacement." },
    { term: "Node and antinode", definition: "A node is a point of zero displacement in a standing wave; an antinode is a point of maximum displacement." },
  ],
  concepts: [
    {
      id: "physsl-u4-superposition",
      title: "Superposition and interference",
      skill: "Use the principle of superposition and path difference to predict constructive and destructive interference from coherent sources.",
      lesson: {
        sections: [
          {
            heading: "The principle of superposition",
            body: "When two waves overlap, the displacement at any point is the **vector sum** of the displacements due to each wave. After the waves pass through each other they continue unchanged. Where two crests coincide the resultant amplitude is large (**constructive interference**); where a crest meets a trough the resultant is small (**destructive interference**).",
          },
          {
            heading: "Path difference and phase",
            body: "For two **coherent** sources emitting waves of wavelength $\\lambda$, the interference at a point depends on the **path difference** — the difference in distance from the point to each source. Constructive interference occurs when the path difference is $n\\lambda$ ($n = 0, 1, 2, \\dots$); destructive interference occurs when it is $(n + \\tfrac{1}{2})\\lambda$. Waves arriving in phase reinforce; waves arriving in antiphase cancel. Incoherent sources produce a changing pattern that averages out.",
          },
          {
            heading: "Conditions for a stable pattern",
            body: "A stable interference pattern requires the sources to have a constant frequency and a constant phase relationship — they must be coherent. This is why two loudspeakers driven by the same signal produce clear bands of loud and quiet sound, while two unrelated sources do not.",
          },
        ],
        keyFormulas: [
          { name: "Constructive condition", statement: "path difference = n\\lambda,  n = 0, 1, 2, ..." },
          { name: "Destructive condition", statement: "path difference = (n + 1/2)\\lambda" },
          { name: "Wavelength from speed and frequency", statement: "\\lambda = v/f" },
        ],
        workedExample: {
          problem: "Two loudspeakers emit sound of frequency $500$ Hz in phase. The speed of sound is $340$ m s$^{-1}$. A listener is $3.00$ m from speaker A and $3.68$ m from speaker B. Determine whether the sound is loud or quiet at the listener.",
          solution: "Wavelength $\\lambda = v/f = 340/500 = 0.68$ m. Path difference $= 3.68 - 3.00 = 0.68$ m $= 1\\lambda$, a whole number of wavelengths, so the waves arrive in phase: constructive interference (loud sound).",
        },
      },
      questions: [
        {
          id: "physsl-u4-superposition-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Two identical waves of wavelength $\\lambda$ arrive at a point with a path difference of $\\tfrac{3}{2}\\lambda$. What is the result at that point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Destructive interference" },
              { id: "b", text: "Constructive interference" },
              { id: "c", text: "The waves stop travelling" },
              { id: "d", text: "No change in amplitude" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Destructive condition", statement: "Destructive interference occurs when the path difference is a half-integer number of wavelengths." },
            ],
            steps: [
              { reasoning: "$\\tfrac{3}{2}\\lambda$ is a half-integer multiple of $\\lambda$, so the waves arrive in antiphase and cancel.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** destructive interference",
            commonErrors: ["Rounding $\\tfrac{3}{2}$ up to a whole number and choosing constructive."],
          },
        },
        {
          id: "physsl-u4-superposition-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two coherent sources emit waves of wavelength $0.80$ m. At a certain point the path difference is $2.4$ m. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constructive interference, because $2.4$ is even" },
              { id: "b", text: "Destructive interference, because $2.4$ is not a whole number of metres" },
              { id: "c", text: "Destructive interference, because $2.4 = 3 \\times 0.80$" },
              { id: "d", text: "Constructive interference, because $2.4 = 3 \\times 0.80$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Constructive condition", statement: "Constructive interference occurs when path difference = n\\lambda for integer n." },
            ],
            steps: [
              { reasoning: "Express the path difference as a multiple of the wavelength.", working: "\\frac{2.4}{0.80} = 3", marks: 1, markCode: "M" },
              { reasoning: "$3$ is a whole number, so the waves arrive in phase and reinforce.", working: "2.4 = 3\\lambda \\Rightarrow \\text{constructive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** constructive interference",
            commonErrors: ["Comparing the path difference with the wavelength in metres without dividing first.", "Thinking any even number of wavelengths gives destructive interference."],
          },
        },
        {
          id: "physsl-u4-superposition-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two loudspeakers connected to the same signal generator emit sound of frequency $425$ Hz in phase. A listener stands $3.00$ m from speaker A and $4.20$ m from speaker B. The speed of sound is $340$ m s$^{-1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No interference because the path difference exceeds one metre" },
              { id: "b", text: "Constructive interference; path difference is $0.5\\lambda$" },
              { id: "c", text: "Destructive interference; path difference is $1.5\\lambda$" },
              { id: "d", text: "Constructive interference; path difference is $1.5\\lambda$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wavelength", statement: "\\lambda = v/f = 340/425 = 0.80 m" },
              { kind: "definition", name: "Destructive condition", statement: "Destructive interference occurs for path difference = (n + 1/2)\\lambda." },
            ],
            steps: [
              { reasoning: "Find the wavelength of the sound.", working: "\\lambda = \\frac{340}{425} = 0.80 \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Find the path difference between the two distances.", working: "\\Delta = 4.20 - 3.00 = 1.20 \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Express the path difference as a multiple of $\\lambda$.", working: "\\frac{1.20}{0.80} = 1.5 \\Rightarrow \\text{half-integer multiple}", marks: 1, markCode: "M" },
              { reasoning: "A half-integer number of wavelengths means the waves arrive in antiphase and cancel.", working: "1.5\\lambda \\Rightarrow \\text{destructive}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** destructive interference; path difference is $1.5\\lambda$",
            commonErrors: ["Forgetting to divide the path difference by the wavelength.", "Confusing path difference with phase difference."],
          },
        },
        {
          id: "physsl-u4-superposition-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two loudspeakers, A and B, are driven by the same signal generator so that they emit sound of frequency $500$ Hz in phase. The speed of sound is $340$ m s$^{-1}$. Point P lies $2.00$ m from speaker A and $2.68$ m from speaker B.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength of the sound waves.", marks: 2 },
            { label: "b", prompt: "Calculate the path difference at point P and state whether the interference there is constructive or destructive.", marks: 2 },
            { label: "c", prompt: "Point Q lies on the perpendicular bisector of the line joining A and B. State the path difference at Q and the type of interference there.", marks: 2 },
            { label: "d", prompt: "Explain why the interference pattern is stable only if the two speakers are coherent.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wavelength", statement: "\\lambda = v/f" },
              { kind: "definition", name: "Constructive/destructive conditions", statement: "Constructive for path difference n\\lambda; destructive for (n + 1/2)\\lambda." },
              { kind: "definition", name: "Coherent sources", statement: "Coherent sources have a constant frequency and a constant phase relationship." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $\\lambda = v/f$.", working: "\\lambda = \\frac{340}{500} = 0.68 \\text{ m}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Path difference is the difference of the two distances.", working: "\\Delta = 2.68 - 2.00 = 0.68 \\text{ m} = 1\\lambda", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A whole number of wavelengths means the waves arrive in phase.", working: "0.68 = 1 \\times 0.68 \\Rightarrow \\text{constructive}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "On the perpendicular bisector of AB the distances to A and to B are equal.", working: "\\Delta = 0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Zero path difference means the waves arrive in phase: constructive interference.", working: "0 = 0 \\times \\lambda \\Rightarrow \\text{constructive}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A stable pattern requires the phase difference between the waves at P to be constant in time.", working: "\\text{constant phase relationship}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Incoherent sources drift in phase, so maxima and minima move and no stable pattern is seen.", working: "\\text{phase drifts} \\Rightarrow \\text{pattern unstable}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\lambda = 0.68$ m (b) path difference $0.68$ m $= 1\\lambda$, constructive (c) path difference $0$; constructive interference (d) coherent sources keep a constant phase relationship so the pattern does not move",
            commonErrors: ["Subtracting distances in the wrong order or adding them.", "Thinking the perpendicular bisector gives maximum path difference rather than zero.", "Saying interference requires equal amplitudes rather than coherence."],
          },
        },
        {
          id: "physsl-u4-superposition-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Two coherent sources emit waves of wavelength $\\lambda$. Constructive interference occurs at a point when the path difference is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "always exactly $\\lambda$" },
              { id: "b", text: "zero only" },
              { id: "c", text: "$(n + \\tfrac{1}{2})\\lambda$" },
              { id: "d", text: "$n\\lambda$, where $n = 0, 1, 2, \\dots$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Constructive condition", statement: "Constructive interference occurs when the path difference is a whole number of wavelengths, n\\lambda." },
            ],
            steps: [
              { reasoning: "A whole number of wavelengths means the waves arrive in phase and reinforce.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $n\\lambda$, $n = 0, 1, 2, \\dots$",
            commonErrors: ["Confusing the constructive and destructive conditions."],
          },
        },
        {
          id: "physsl-u4-superposition-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two coherent sources emit waves of wavelength $0.60$ m. At a point P the path difference is $0.30$ m. What is observed at P?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Destructive interference" },
              { id: "b", text: "Constructive interference" },
              { id: "c", text: "No interference because the sources are coherent" },
              { id: "d", text: "Constructive interference only if the amplitudes are equal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Destructive condition", statement: "Destructive interference occurs when the path difference is a half-integer number of wavelengths." },
            ],
            steps: [
              { reasoning: "Express the path difference as a multiple of the wavelength.", working: "\\frac{0.30}{0.60} = 0.5", marks: 1, markCode: "M" },
              { reasoning: "A half-integer multiple means the waves arrive in antiphase and cancel.", working: "0.5\\lambda \\Rightarrow \\text{destructive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** destructive interference",
            commonErrors: ["Rounding $0.5\\lambda$ up to a whole number of wavelengths."],
          },
        },
        {
          id: "physsl-u4-superposition-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A listener is $4.50$ m from loudspeaker A and $5.10$ m from loudspeaker B. Calculate the path difference of the two waves at the listener.",
          response: {
            type: "numeric",
            parts: [
              { label: "Path difference", answer: 0.60, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Path difference", statement: "The path difference is the difference in distance from the point to each of the two sources." },
            ],
            steps: [
              { reasoning: "Subtract the smaller distance from the larger.", working: "\\Delta = 5.10 - 4.50 = 0.60 \\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Correct value with unit.", working: "\\Delta = 0.60 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta = 0.60$ m",
            commonErrors: ["Adding the two distances instead of subtracting them.", "Giving a negative path difference."],
          },
        },
        {
          id: "physsl-u4-superposition-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What are coherent sources?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sources that emit waves of the same frequency with a constant phase relationship" },
              { id: "b", text: "Sources that emit waves of different frequencies" },
              { id: "c", text: "Sources that produce waves of maximum amplitude" },
              { id: "d", text: "Sources that are always in antiphase" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coherent sources", statement: "Coherent sources emit waves of the same frequency with a constant phase relationship, producing a stable interference pattern." },
            ],
            steps: [
              { reasoning: "Coherence requires a constant phase relationship between the sources.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** same frequency, constant phase relationship",
            commonErrors: ["Thinking coherence only means equal amplitudes."],
          },
        },
        {
          id: "physsl-u4-superposition-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Two loudspeakers driven by the same signal generator emit sound of frequency $340$ Hz in phase. The speed of sound is $340$ m s$^{-1}$. A listener stands $5.00$ m from speaker A and $5.50$ m from speaker B.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constructive interference; path difference $0.50\\lambda$" },
              { id: "b", text: "Constructive interference; path difference $1.0\\lambda$" },
              { id: "c", text: "Destructive interference; path difference $2.0\\lambda$" },
              { id: "d", text: "Destructive interference; path difference $0.50\\lambda$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wavelength", statement: "\\lambda = v/f = 340/340 = 1.0 m" },
              { kind: "definition", name: "Destructive condition", statement: "Destructive interference occurs for path difference = (n + 1/2)\\lambda." },
            ],
            steps: [
              { reasoning: "Find the wavelength.", working: "\\lambda = \\frac{340}{340} = 1.0 \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Find the path difference.", working: "\\Delta = 5.50 - 5.00 = 0.50 \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Express the path difference as a multiple of $\\lambda$.", working: "\\frac{0.50}{1.0} = 0.5 = (0 + \\tfrac{1}{2})\\lambda", marks: 1, markCode: "M" },
              { reasoning: "A half-integer multiple means antiphase arrival and destructive interference; only option (b) matches.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** destructive interference; path difference $0.50\\lambda$",
            commonErrors: ["Using the path difference in metres as if it were already in wavelengths.", "Forgetting that $0.5\\lambda$ is destructive, not constructive."],
          },
        },
        {
          id: "physsl-u4-superposition-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Two coherent loudspeakers emit sound of frequency $250$ Hz. The speed of sound is $340$ m s$^{-1}$. A point P is $3.00$ m from speaker A and $4.36$ m from speaker B.",
          response: {
            type: "numeric",
            parts: [
              { label: "Wavelength", answer: 1.36, unit: "m" },
              { label: "Path difference", answer: 1.36, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wavelength", statement: "\\lambda = v/f" },
              { kind: "definition", name: "Path difference", statement: "Difference in distance from the point to each source." },
            ],
            steps: [
              { reasoning: "Apply $\\lambda = v/f$.", working: "\\lambda = \\frac{340}{250} = 1.36 \\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Correct wavelength with unit.", working: "\\lambda = 1.36 \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Path difference is the difference of the distances.", working: "\\Delta = 4.36 - 3.00 = 1.36 \\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Correct path difference with unit.", working: "\\Delta = 1.36 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wavelength $= 1.36$ m; path difference $= 1.36$ m",
            commonErrors: ["Dividing the path difference by the frequency instead of subtracting distances.", "Rounding the wavelength too early."],
          },
        },
        {
          id: "physsl-u4-superposition-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Two coherent sources S1 and S2 emit waves of the same wavelength $\\lambda$.",
          parts: [
            { label: "a", prompt: "Define the path difference at a point.", marks: 1 },
            { label: "b", prompt: "State the condition on the path difference for constructive interference.", marks: 1 },
            { label: "c", prompt: "State the condition on the path difference for destructive interference.", marks: 1 },
            { label: "d", prompt: "Explain why a stable interference pattern is not seen when the two sources are incoherent.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Path difference", statement: "The difference in the distances from the point to each source." },
              { kind: "definition", name: "Constructive/destructive conditions", statement: "Constructive for n\\lambda; destructive for (n + 1/2)\\lambda." },
              { kind: "definition", name: "Coherent sources", statement: "Coherent sources have a constant frequency and a constant phase relationship." },
            ],
            steps: [
              { part: "a", reasoning: "Path difference is the difference between the distances from the point to S1 and to S2.", working: "\\Delta = d_1 - d_2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Constructive interference requires a whole number of wavelengths.", working: "\\Delta = n\\lambda", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Destructive interference requires a half-integer number of wavelengths.", working: "\\Delta = (n + \\tfrac{1}{2})\\lambda", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Incoherent sources have a phase relationship that drifts with time.", working: "\\text{phase drifts}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The positions of maxima and minima therefore move continuously, so no stable pattern is observed.", working: "\\text{moving pattern averages out}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) difference in distance from the point to each source (b) $n\\lambda$ (c) $(n + \\tfrac{1}{2})\\lambda$ (d) incoherent sources drift in phase so the pattern is not stable",
            commonErrors: ["Giving the phase difference instead of the path difference.", "Thinking incoherent sources produce no interference at all — the pattern just changes rapidly."],
          },
        },
        {
          id: "physsl-u4-superposition-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two loudspeakers play music from two different radios. No stable pattern of loud and quiet regions is heard in the room. Which explanation is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The wavelengths of the two sounds are identical" },
              { id: "b", text: "The sources are incoherent, so the phase relationship drifts and no stable pattern forms" },
              { id: "c", text: "The speakers are too far apart to interfere" },
              { id: "d", text: "Sound waves cannot interfere with each other" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coherent sources", statement: "A stable interference pattern requires sources of the same frequency with a constant phase relationship." },
            ],
            steps: [
              { reasoning: "Two independent radios are incoherent; the phase relationship changes with time so maxima and minima move.", marks: 1, markCode: "M" },
              { reasoning: "Option (b) states this correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** the sources are incoherent",
            commonErrors: ["Thinking interference requires the sources to be very close together."],
          },
        },
        {
          id: "physsl-u4-superposition-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Two waves of the same amplitude arrive at a point in antiphase. What is the resultant amplitude at that point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "Twice the amplitude of one wave" },
              { id: "c", text: "Half the amplitude of one wave" },
              { id: "d", text: "The same as one wave" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Superposition", statement: "Displacements add at each point; equal amplitudes in antiphase cancel to give zero." },
            ],
            steps: [
              { reasoning: "Equal amplitudes arriving in antiphase cancel completely.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** zero",
            commonErrors: ["Thinking the resultant is half the amplitude rather than zero."],
          },
        },
        {
          id: "physsl-u4-superposition-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Two coherent sources emit waves of wavelength $0.68$ m. A point is $1.02$ m further from source A than from source B.",
          response: {
            type: "numeric",
            parts: [
              { label: "Path difference in wavelengths", answer: 1.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Path difference", statement: "Path difference expressed as a multiple of the wavelength determines the interference type." },
            ],
            steps: [
              { reasoning: "Divide the path difference by the wavelength.", working: "\\frac{1.02}{0.68} = 1.5", marks: 1, markCode: "M" },
              { reasoning: "The path difference is $1.5\\lambda$, a half-integer multiple.", working: "1.5\\lambda = (1 + \\tfrac{1}{2})\\lambda", marks: 1, markCode: "A" },
              { reasoning: "Half-integer multiples give destructive interference.", working: "\\text{destructive}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Path difference $= 1.5\\lambda$; destructive interference",
            commonErrors: ["Reporting the path difference in metres instead of as a multiple of $\\lambda$."],
          },
        },
        {
          id: "physsl-u4-superposition-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Two loudspeakers connected to the same signal generator emit sound of frequency $500$ Hz in phase. The speed of sound is $340$ m s$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength of the sound.", marks: 2 },
            { label: "b", prompt: "A point P is $3.40$ m from speaker A and $3.74$ m from speaker B. Calculate the path difference at P and state the type of interference there.", marks: 2 },
            { label: "c", prompt: "Explain why moving the listener to the perpendicular bisector of AB would produce a loud sound.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wavelength", statement: "\\lambda = v/f" },
              { kind: "definition", name: "Constructive/destructive conditions", statement: "Constructive for n\\lambda; destructive for (n + 1/2)\\lambda." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $\\lambda = v/f$.", working: "\\lambda = \\frac{340}{500} = 0.68 \\text{ m}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Path difference is the difference of the distances.", working: "\\Delta = 3.74 - 3.40 = 0.34 \\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$0.34$ m $= 0.5\\lambda$, a half-integer multiple, so the interference is destructive.", working: "\\frac{0.34}{0.68} = 0.5 \\Rightarrow \\text{destructive}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "On the perpendicular bisector the distances to A and B are equal, so the path difference is zero.", working: "\\Delta = 0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Zero path difference means the waves arrive in phase, giving constructive interference and a loud sound.", working: "0 = 0 \\times \\lambda \\Rightarrow \\text{constructive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\lambda = 0.68$ m (b) path difference $0.34$ m $= 0.5\\lambda$; destructive interference (c) path difference is zero, so waves arrive in phase and reinforce",
            commonErrors: ["Forgetting to convert the path difference into a multiple of $\\lambda$.", "Thinking the perpendicular bisector gives the maximum path difference."],
          },
        },
        {
          id: "physsl-u4-superposition-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two coherent sources emit waves of wavelength $0.80$ m. Point P is $2.40$ m from source A and $1.60$ m from source B. Point Q is $3.20$ m from both sources.",
          parts: [
            { label: "a", prompt: "Calculate the path difference at P and state the type of interference there.", marks: 2 },
            { label: "b", prompt: "Calculate the path difference at Q and state the type of interference there.", marks: 2 },
            { label: "c", prompt: "State the condition needed for the interference pattern to remain stable in time.", marks: 2 },
            { label: "d", prompt: "Explain what would happen to the pattern if the two sources were replaced by two unrelated radios playing the same music.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Path difference", statement: "Difference in distance from the point to each source." },
              { kind: "definition", name: "Constructive/destructive conditions", statement: "Constructive for n\\lambda; destructive for (n + 1/2)\\lambda." },
              { kind: "definition", name: "Coherent sources", statement: "A stable pattern requires a constant phase relationship between the sources." },
            ],
            steps: [
              { part: "a", reasoning: "Path difference at P.", working: "\\Delta_P = 2.40 - 1.60 = 0.80 \\text{ m} = 1\\lambda", marks: 1, markCode: "M" },
              { part: "a", reasoning: "A whole number of wavelengths gives constructive interference.", working: "1\\lambda \\Rightarrow \\text{constructive}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Path difference at Q is zero because the distances are equal.", working: "\\Delta_Q = 3.20 - 3.20 = 0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Zero path difference gives constructive interference.", working: "0 \\Rightarrow \\text{constructive}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The sources must be coherent: same frequency and a constant phase relationship.", working: "\\text{constant phase relationship}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Two unrelated radios are incoherent; their phase relationship drifts with time.", working: "\\text{phase drifts}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The maxima and minima move continuously so no stable pattern is observed, even though interference still occurs instantaneously.", working: "\\text{no stable pattern}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) path difference $0.80$ m $= 1\\lambda$; constructive (b) path difference $0$; constructive (c) sources must be coherent — constant phase relationship (d) the pattern becomes unstable and averages out",
            commonErrors: ["Computing $2.40 + 1.60$ for the path difference.", "Claiming incoherent sources produce no interference at all."],
          },
        },
      ],
    },
    {
      id: "physsl-u4-standing-waves",
      title: "Standing waves and harmonics",
      skill: "Describe nodes and antinodes and calculate the frequencies of harmonics for strings and pipes using $f_n = nv/2L$ (and $f_n = nv/4L$ for a pipe closed at one end).",
      lesson: {
        sections: [
          {
            heading: "Formation of standing waves",
            body: "When two identical waves of the same frequency travel in opposite directions along the same medium they superpose to form a **standing wave**. Points that remain stationary are **nodes**; points of maximum amplitude are **antinodes**. No energy is transferred along the medium — the pattern oscillates in place. Standing waves arise, for example, when a wave is reflected back along a string or in an organ pipe.",
          },
          {
            heading: "Harmonics on a string fixed at both ends",
            body: "A string fixed at both ends must have nodes at the fixed ends. The **fundamental** (first harmonic) has one antinode and wavelength $\\lambda_1 = 2L$, giving $f_1 = v/2L$. The $n$-th harmonic has $n$ antinodes and wavelength $\\lambda_n = 2L/n$, so $f_n = nv/2L = nf_1$. Higher harmonics are integer multiples of the fundamental.",
          },
          {
            heading: "Pipes open and closed",
            body: "An **open pipe** (open at both ends) behaves like a string fixed at both ends: $f_n = nv/2L$ with all harmonics present. A pipe **closed at one end** must have a node at the closed end and an antinode at the open end, so only odd harmonics are present: $f_n = nv/4L$ for $n = 1, 3, 5, \\dots$. The fundamental of a closed pipe is half that of an open pipe of the same length.",
          },
        ],
        keyFormulas: [
          { name: "String / open pipe", statement: "f_n = nv/2L,  n = 1, 2, 3, ..." },
          { name: "Closed pipe", statement: "f_n = nv/4L,  n = 1, 3, 5, ..." },
          { name: "Harmonic wavelengths", statement: "\\lambda_n = 2L/n  (string/open pipe)" },
        ],
        workedExample: {
          problem: "A string of length $0.60$ m fixed at both ends vibrates with wave speed $120$ m s$^{-1}$. Find the fundamental frequency and the frequency of the second harmonic.",
          solution: "Fundamental: $f_1 = v/2L = 120/(2 \\times 0.60) = 100$ Hz. Second harmonic: $f_2 = 2f_1 = 200$ Hz.",
        },
      },
      questions: [
        {
          id: "physsl-u4-standing-waves-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In a standing wave on a string, what is a node?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A point where the wavelength is largest" },
              { id: "b", text: "The end of the string" },
              { id: "c", text: "A point where the displacement is always zero" },
              { id: "d", text: "A point of maximum amplitude" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Node", statement: "A node is a point in a standing wave that remains at rest (zero displacement) at all times." },
            ],
            steps: [
              { reasoning: "Nodes are the stationary points of a standing wave; antinodes have maximum amplitude.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** a point where the displacement is always zero",
            commonErrors: ["Confusing nodes with antinodes."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A string of length $0.80$ m is fixed at both ends and supports waves travelling at $160$ m s$^{-1}$. Calculate the frequency of the fundamental.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$200$ Hz" },
              { id: "b", text: "$100$ Hz" },
              { id: "c", text: "$50$ Hz" },
              { id: "d", text: "$128$ Hz" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fundamental frequency", statement: "f_1 = v/2L for a string fixed at both ends" },
            ],
            steps: [
              { reasoning: "Apply $f_1 = v/2L$.", working: "f_1 = \\frac{160}{2 \\times 0.80} = \\frac{160}{1.60} = 100 \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Correct value with unit.", working: "f_1 = 100 \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $100$ Hz",
            commonErrors: ["Using $f = v/L$ instead of $v/2L$.", "Multiplying by 2 instead of dividing."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An organ pipe of length $0.85$ m is closed at one end. The speed of sound in air is $340$ m s$^{-1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fundamental $400$ Hz; only even harmonics present" },
              { id: "b", text: "Fundamental $200$ Hz; only odd harmonics present" },
              { id: "c", text: "Fundamental $100$ Hz; all harmonics present" },
              { id: "d", text: "Fundamental $100$ Hz; only odd harmonics present" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Closed pipe", statement: "f_n = nv/4L for n = 1, 3, 5, ..." },
              { kind: "property", name: "Boundary conditions", statement: "A closed end is a node and an open end is an antinode; only odd harmonics fit." },
            ],
            steps: [
              { reasoning: "For a pipe closed at one end, $f_1 = v/4L$.", working: "f_1 = \\frac{340}{4 \\times 0.85} = \\frac{340}{3.4} = 100 \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "The closed end forces a node and the open end an antinode, so only odd harmonics (n = 1, 3, 5, ...) exist.", working: "n = 1, 3, 5, \\dots", marks: 1, markCode: "A" },
              { reasoning: "Eliminate options inconsistent with $f_1 = 100$ Hz and odd-only harmonics.", working: "f_1 = 100 \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Option (a) is the only one matching both results.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** fundamental $100$ Hz; only odd harmonics present",
            commonErrors: ["Using $f = v/2L$ (the open-pipe formula) to get $200$ Hz.", "Claiming all harmonics are present in a closed pipe."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A guitar string of length $0.65$ m is fixed at both ends. Transverse waves travel along it at $195$ m s$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the fundamental.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency of the third harmonic.", marks: 2 },
            { label: "c", prompt: "State the number of nodes and antinodes in the third harmonic pattern, including the fixed ends.", marks: 2 },
            { label: "d", prompt: "Calculate the wavelength of the second harmonic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Harmonic frequencies", statement: "f_n = nv/2L for a string fixed at both ends" },
              { kind: "formula", name: "Harmonic wavelengths", statement: "\\lambda_n = 2L/n" },
              { kind: "property", name: "Nodes and antinodes", statement: "The n-th harmonic has n antinodes and n + 1 nodes including the fixed ends." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $f_1 = v/2L$.", working: "f_1 = \\frac{195}{2 \\times 0.65} = \\frac{195}{1.30} = 150 \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The third harmonic is $3f_1$.", working: "f_3 = 3 \\times 150 = 450 \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "The third harmonic fits three half-wavelengths, giving three antinodes.", working: "\\text{3 antinodes}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "There is a node at each fixed end and between adjacent antinodes, giving four nodes.", working: "\\text{4 nodes (including ends)}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Apply $\\lambda_n = 2L/n$ with $n = 2$.", working: "\\lambda_2 = \\frac{2 \\times 0.65}{2} = 0.65 \\text{ m}", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) $f_1 = 150$ Hz (b) $f_3 = 450$ Hz (c) 4 nodes and 3 antinodes (d) $\\lambda_2 = 0.65$ m",
            commonErrors: ["Counting only the internal nodes and forgetting the fixed ends.", "Using $f_n = nv/L$ instead of $nv/2L$.", "Confusing the harmonic number with the number of nodes."],
            examinerNote: "For (c) accept '3 antinodes and 4 nodes' or equivalent description of the pattern; the nodes at the fixed ends must be included for full credit.",
          },
        },
        {
          id: "physsl-u4-standing-waves-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In a standing wave, what is an antinode?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A point of maximum amplitude" },
              { id: "b", text: "A point where the displacement is always zero" },
              { id: "c", text: "A point where the wave speed is zero" },
              { id: "d", text: "The midpoint of the string only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Antinode", statement: "An antinode is a point in a standing wave that oscillates with maximum amplitude." },
            ],
            steps: [
              { reasoning: "Antinodes are the points of maximum displacement; nodes remain at rest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** a point of maximum amplitude",
            commonErrors: ["Confusing antinodes with nodes."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A string of length $1.2$ m is fixed at both ends. Waves travel along it at $240$ m s$^{-1}$. Calculate the frequency of the fundamental.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$200$ Hz" },
              { id: "b", text: "$100$ Hz" },
              { id: "c", text: "$400$ Hz" },
              { id: "d", text: "$50$ Hz" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fundamental frequency", statement: "f_1 = v/2L for a string fixed at both ends" },
            ],
            steps: [
              { reasoning: "Apply $f_1 = v/2L$.", working: "f_1 = \\frac{240}{2 \\times 1.2} = \\frac{240}{2.4} = 100 \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Correct value.", working: "f_1 = 100 \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $100$ Hz",
            commonErrors: ["Using $f = v/L$ instead of $v/2L$.", "Forgetting that the ends are fixed (nodes)."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A string of length $0.90$ m is fixed at both ends and vibrates in its fundamental mode. Calculate the wavelength of the fundamental.",
          response: {
            type: "numeric",
            parts: [
              { label: "Wavelength", answer: 1.8, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fundamental wavelength", statement: "\\lambda_1 = 2L for a string fixed at both ends" },
            ],
            steps: [
              { reasoning: "The fundamental fits one half-wavelength into the length of the string.", working: "\\lambda_1 = 2L = 2 \\times 0.90", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with unit.", working: "\\lambda_1 = 1.8 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda_1 = 1.8$ m",
            commonErrors: ["Giving $\\lambda = L$ instead of $2L$."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An organ pipe is closed at one end and open at the other. Which harmonics can be produced in it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the fundamental" },
              { id: "b", text: "Only odd harmonics, $n = 1, 3, 5, \\dots$" },
              { id: "c", text: "All harmonics, $n = 1, 2, 3, \\dots$" },
              { id: "d", text: "Only even harmonics, $n = 2, 4, 6, \\dots$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Boundary conditions", statement: "A closed end is a node and an open end is an antinode, so only odd harmonics fit in a pipe closed at one end." },
            ],
            steps: [
              { reasoning: "The closed end must be a node and the open end an antinode; only odd $n$ satisfy this.", working: "f_n = \\frac{nv}{4L},\\ n = 1, 3, 5, \\dots", marks: 1, markCode: "M" },
              { reasoning: "Only option (b) gives the correct harmonic series.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** only odd harmonics",
            commonErrors: ["Assuming a closed pipe supports all harmonics like an open pipe."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A string of length $0.50$ m fixed at both ends carries waves at $100$ m s$^{-1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fundamental $100$ Hz; third harmonic $200$ Hz" },
              { id: "b", text: "Fundamental $100$ Hz; third harmonic $300$ Hz" },
              { id: "c", text: "Fundamental $200$ Hz; third harmonic $600$ Hz" },
              { id: "d", text: "Fundamental $50$ Hz; third harmonic $150$ Hz" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Harmonic frequencies", statement: "f_n = nv/2L for a string fixed at both ends" },
            ],
            steps: [
              { reasoning: "Fundamental frequency.", working: "f_1 = \\frac{100}{2 \\times 0.50} = 100 \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Third harmonic is $3f_1$.", working: "f_3 = 3 \\times 100 = 300 \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Check the options for consistency with both values.", marks: 1, markCode: "A" },
              { reasoning: "Only option (a) gives $f_1 = 100$ Hz and $f_3 = 300$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** fundamental $100$ Hz; third harmonic $300$ Hz",
            commonErrors: ["Using $f_3 = f_1 + 3$ instead of $3f_1$.", "Using the closed-pipe formula."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An organ pipe of length $0.425$ m is open at both ends. The speed of sound is $340$ m s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Fundamental frequency", answer: 400, unit: "Hz" },
              { label: "Second harmonic frequency", answer: 800, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Open pipe", statement: "f_n = nv/2L for a pipe open at both ends" },
            ],
            steps: [
              { reasoning: "Apply $f_1 = v/2L$.", working: "f_1 = \\frac{340}{2 \\times 0.425} = \\frac{340}{0.85} = 400 \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Correct fundamental with unit.", working: "f_1 = 400 \\text{ Hz}", marks: 1, markCode: "A" },
              { reasoning: "The second harmonic is $2f_1$.", working: "f_2 = 2 \\times 400 = 800 \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Correct second harmonic with unit.", working: "f_2 = 800 \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fundamental $= 400$ Hz; second harmonic $= 800$ Hz",
            commonErrors: ["Using the closed-pipe formula $v/4L$ for an open pipe.", "Taking the second harmonic as $f_1/2$."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "A string fixed at both ends vibrates in its second harmonic.",
          parts: [
            { label: "a", prompt: "State how many antinodes the second harmonic has.", marks: 1 },
            { label: "b", prompt: "State how many nodes the pattern has, including the fixed ends.", marks: 1 },
            { label: "c", prompt: "State the wavelength of the second harmonic in terms of the string length $L$.", marks: 1 },
            { label: "d", prompt: "Explain why the fixed ends of the string must be nodes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Harmonic pattern", statement: "The n-th harmonic on a string fixed at both ends has n antinodes and n + 1 nodes including the ends." },
              { kind: "property", name: "Boundary conditions", statement: "Fixed ends cannot move, so they are nodes of zero displacement." },
            ],
            steps: [
              { part: "a", reasoning: "The second harmonic ($n = 2$) has two antinodes.", working: "\\text{2 antinodes}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "There is a node at each end and one in the middle, giving three nodes.", working: "\\text{3 nodes including ends}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply $\\lambda_n = 2L/n$ with $n = 2$.", working: "\\lambda_2 = \\frac{2L}{2} = L", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The string is clamped at the ends so those points cannot oscillate.", working: "\\text{ends cannot move}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Points of zero displacement are nodes by definition.", working: "\\text{fixed ends are nodes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 antinodes (b) 3 nodes including the ends (c) $\\lambda_2 = L$ (d) the ends are clamped so they cannot oscillate, making them nodes",
            commonErrors: ["Counting only the internal node and forgetting the fixed ends.", "Giving $\\lambda_2 = 2L$ instead of $L$."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A string fixed at both ends has fundamental frequency $f_1$. If the length of the string is doubled while the wave speed stays the same, the new fundamental frequency is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f_1$" },
              { id: "b", text: "$4f_1$" },
              { id: "c", text: "$2f_1$" },
              { id: "d", text: "$f_1/2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fundamental frequency", statement: "f_1 = v/2L" },
            ],
            steps: [
              { reasoning: "With $v$ constant, $f_1 \\propto 1/L$; doubling $L$ halves the frequency.", working: "f_1' = \\frac{v}{2(2L)} = \\frac{f_1}{2}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $f_1/2$",
            commonErrors: ["Thinking frequency is proportional to length rather than inversely proportional."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A string fixed at both ends vibrates in its third harmonic. How many antinodes does the pattern have?",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of antinodes", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Harmonic pattern", statement: "The n-th harmonic has n antinodes." },
            ],
            steps: [
              { reasoning: "The third harmonic ($n = 3$) has three antinodes.", working: "\\text{3 antinodes}", marks: 1, markCode: "M" },
              { reasoning: "Correct count.", working: "n = 3 \\Rightarrow 3 \\text{ antinodes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 antinodes",
            commonErrors: ["Counting nodes instead of antinodes (the third harmonic has 4 nodes including the ends)."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two pipes have the same length. Pipe X is open at both ends; pipe Y is closed at one end. How does the fundamental frequency of pipe Y compare with that of pipe X?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is half that of pipe X" },
              { id: "b", text: "It is the same" },
              { id: "c", text: "It is twice that of pipe X" },
              { id: "d", text: "It is four times that of pipe X" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Open and closed pipes", statement: "f_1 = v/2L (open at both ends); f_1 = v/4L (closed at one end)" },
            ],
            steps: [
              { reasoning: "For the same $L$ and $v$, the closed pipe has $f_1 = v/4L$, half the open pipe's $v/2L$.", working: "\\frac{v/4L}{v/2L} = \\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** half that of pipe X",
            commonErrors: ["Using the same formula for both pipes."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "An organ pipe of length $0.85$ m is closed at one end. The speed of sound in air is $340$ m s$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the fundamental.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency of the next allowed harmonic.", marks: 2 },
            { label: "c", prompt: "Explain why the second harmonic ($n = 2$) cannot be produced in this pipe.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Closed pipe", statement: "f_n = nv/4L for n = 1, 3, 5, ..." },
              { kind: "property", name: "Boundary conditions", statement: "Closed end = node; open end = antinode." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $f_1 = v/4L$.", working: "f_1 = \\frac{340}{4 \\times 0.85} = \\frac{340}{3.4} = 100 \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The next allowed harmonic is $n = 3$, giving $3f_1$.", working: "f_3 = 3 \\times 100 = 300 \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "For $n = 2$ the open end would need to be a node (two quarter-wavelengths fit), but an open end must be an antinode.", working: "n = 2 \\Rightarrow \\text{open end would be a node}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Since the boundary condition is violated, the second harmonic cannot exist in a pipe closed at one end.", working: "\\text{boundary condition violated}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f_1 = 100$ Hz (b) next harmonic $= 300$ Hz (the third harmonic) (c) $n = 2$ would require a node at the open end, but an open end must be an antinode",
            commonErrors: ["Using $f_2 = 2f_1$ for a closed pipe — even harmonics are not allowed.", "Forgetting the factor of 4 in $v/4L$."],
          },
        },
        {
          id: "physsl-u4-standing-waves-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A guitar string of length $0.80$ m is fixed at both ends. Waves travel along it at $200$ m s$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the fundamental.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency and wavelength of the second harmonic.", marks: 2 },
            { label: "c", prompt: "State the number of nodes and antinodes in the second harmonic, including the fixed ends.", marks: 2 },
            { label: "d", prompt: "The string is then plucked so that it vibrates in its third harmonic. State the new frequency.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Harmonic frequencies", statement: "f_n = nv/2L" },
              { kind: "formula", name: "Harmonic wavelengths", statement: "\\lambda_n = 2L/n" },
              { kind: "property", name: "Harmonic pattern", statement: "The n-th harmonic has n antinodes and n + 1 nodes including the ends." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $f_1 = v/2L$.", working: "f_1 = \\frac{200}{2 \\times 0.80} = \\frac{200}{1.60} = 125 \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Second harmonic frequency is $2f_1$.", working: "f_2 = 2 \\times 125 = 250 \\text{ Hz}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Wavelength is $\\lambda_2 = 2L/2 = L = 0.80$ m.", working: "\\lambda_2 = \\frac{2 \\times 0.80}{2} = 0.80 \\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second harmonic has 2 antinodes and 3 nodes including the fixed ends.", working: "\\text{3 nodes, 2 antinodes}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Third harmonic is $3f_1$.", working: "f_3 = 3 \\times 125 = 375 \\text{ Hz}", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) $f_1 = 125$ Hz (b) $f_2 = 250$ Hz, $\\lambda_2 = 0.80$ m (c) 3 nodes and 2 antinodes (d) $f_3 = 375$ Hz",
            commonErrors: ["Using $\\lambda_n = 2L/n$ with the wrong harmonic number.", "Forgetting to include the fixed ends when counting nodes."],
          },
        },
      ],
    },
  ],
};
