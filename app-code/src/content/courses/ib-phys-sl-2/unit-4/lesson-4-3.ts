import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "physsl-u4-lesson-4-3",
  code: "4-3",
  title: "The Doppler Effect and Electromagnetic Waves",
  goal: "I CAN use the Doppler effect to explain frequency shifts from moving sources and observers, and describe the electromagnetic spectrum and photon energy $E = hf$.",
  standards: ["Topic 4.5", "Topic 4.6", "Topic 4.7", "Paper 1", "Paper 2 Section A"],
  vocabulary: [
    { term: "Doppler effect", definition: "The change in observed frequency of a wave when there is relative motion between the source and the observer." },
    { term: "Blue shift and red shift", definition: "The shift of spectral lines to shorter (blue) wavelengths for approaching sources or longer (red) wavelengths for receding sources." },
    { term: "Electromagnetic wave", definition: "A transverse wave consisting of oscillating electric and magnetic fields that can travel through a vacuum at speed $c = 3.0 \\times 10^8$ m s$^{-1}$." },
    { term: "Electromagnetic spectrum", definition: "The range of electromagnetic waves ordered by frequency or wavelength: radio, microwave, infrared, visible, ultraviolet, X-ray and gamma." },
    { term: "Photon", definition: "A discrete packet (quantum) of electromagnetic energy with energy $E = hf = hc/\\lambda$." },
    { term: "Photon energy", definition: "The energy of a single photon, $E = hf$, where $h = 6.63 \\times 10^{-34}$ J s is Planck's constant." },
  ],
  concepts: [
    {
      id: "physsl-u4-doppler",
      title: "The Doppler effect",
      skill: "Explain frequency shifts qualitatively and quantitatively for a moving source or moving observer, using $f' = f(v \\pm v_o)/(v \\mp v_s)$.",
      lesson: {
        sections: [
          {
            heading: "What the Doppler effect is",
            body: "When a source of waves moves relative to an observer, the observed frequency differs from the emitted frequency. Approaching sources or observers detect a **higher** frequency (shorter wavelength, blue shift for light); receding ones detect a **lower** frequency (longer wavelength, red shift). The classic example is the changing pitch of a passing ambulance siren.",
          },
          {
            heading: "Moving source, stationary observer",
            body: "When the **source** moves towards a stationary observer at speed $v_s$, the wavefronts are compressed ahead of it: the wavelength in front becomes $\\lambda' = (v - v_s)/f$, so the observed frequency is $f' = f\\,v/(v - v_s)$ — higher than $f$. When the source recedes, $f' = f\\,v/(v + v_s)$ — lower than $f$. The wave speed $v$ in the medium is unchanged.",
          },
          {
            heading: "Moving observer, stationary source",
            body: "When the **observer** moves towards a stationary source at speed $v_o$, they encounter wavefronts more frequently: $f' = f\\,(v + v_o)/v$. Moving away gives $f' = f\\,(v - v_o)/v$. In general, for motion along the line joining source and observer, $f' = f(v \\pm v_o)/(v \\mp v_s)$ with the upper signs for approach and lower for recession.",
          },
        ],
        keyFormulas: [
          { name: "Moving source", statement: "f' = fv/(v - v_s) approaching;  f' = fv/(v + v_s) receding" },
          { name: "Moving observer", statement: "f' = f(v + v_o)/v approaching;  f' = f(v - v_o)/v receding" },
          { name: "General form", statement: "f' = f(v \\pm v_o)/(v \\mp v_s)" },
        ],
        workedExample: {
          problem: "A source emits sound of frequency $440$ Hz and moves away from a stationary observer at $20$ m s$^{-1}$. The speed of sound is $340$ m s$^{-1}$. Find the observed frequency.",
          solution: "Receding source: $f' = fv/(v + v_s) = 440 \\times 340/(340 + 20) = 440 \\times 340/360 = 416$ Hz (3 s.f.).",
        },
      },
      questions: [
        {
          id: "physsl-u4-doppler-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "An ambulance sounding its siren drives towards a stationary observer and then passes and drives away. What happens to the pitch heard by the observer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower pitch while approaching, higher pitch while receding" },
              { id: "b", text: "Higher pitch while approaching, lower pitch while receding" },
              { id: "c", text: "The pitch stays constant throughout" },
              { id: "d", text: "The pitch rises continuously as the ambulance moves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Doppler shift", statement: "Approach increases the observed frequency (higher pitch); recession decreases it (lower pitch)." },
            ],
            steps: [
              { reasoning: "The wavefronts bunch ahead of the approaching source, raising the observed frequency; they stretch out behind, lowering it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** higher pitch while approaching, lower pitch while receding",
            commonErrors: ["Thinking the pitch is highest at the moment of passing; it drops abruptly as the source passes."],
          },
        },
        {
          id: "physsl-u4-doppler-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A siren of frequency $440$ Hz on a car moving directly away from a stationary observer travels at $20$ m s$^{-1}$. The speed of sound is $340$ m s$^{-1}$. Calculate the frequency heard by the observer.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$465$ Hz" },
              { id: "b", text: "$424$ Hz" },
              { id: "c", text: "$494$ Hz" },
              { id: "d", text: "$416$ Hz" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moving source receding", statement: "f' = fv/(v + v_s)" },
            ],
            steps: [
              { reasoning: "Apply the receding-source formula.", working: "f' = \\frac{440 \\times 340}{340 + 20} = \\frac{149600}{360}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 s.f.", working: "f' = 415.6 \\approx 416 \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $416$ Hz",
            commonErrors: ["Using $v - v_s$ in the denominator (that formula is for approach).", "Applying the moving-observer formula instead."],
          },
        },
        {
          id: "physsl-u4-doppler-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A stationary source emits sound of frequency $440$ Hz. An observer on a bicycle rides directly towards the source at $10$ m s$^{-1}$. The speed of sound is $340$ m s$^{-1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$453$ Hz" },
              { id: "b", text: "$494$ Hz" },
              { id: "c", text: "$427$ Hz" },
              { id: "d", text: "$410$ Hz" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moving observer approaching", statement: "f' = f(v + v_o)/v" },
            ],
            steps: [
              { reasoning: "The source is stationary, so use the moving-observer formula with $v_o = 10$ m s$^{-1}$.", working: "f' = 440 \\times \\frac{340 + 10}{340}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f' = 440 \\times \\frac{350}{340} = 453.5 \\approx 453 \\text{ Hz}", marks: 1, markCode: "A" },
              { reasoning: "Check the result is higher than $440$ Hz, as expected for approach.", working: "453 > 440 \\checkmark", marks: 1, markCode: "R" },
              { reasoning: "Option (b) is the only value consistent with the moving-observer formula.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $453$ Hz",
            commonErrors: ["Using the moving-source formula $fv/(v - v_s)$, which gives a different value.", "Adding the observer speed to the frequency directly."],
          },
        },
        {
          id: "physsl-u4-doppler-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A police car with its siren sounding a steady $800$ Hz drives directly towards a stationary observer at $25$ m s$^{-1}$. The speed of sound is $340$ m s$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency heard by the observer.", marks: 2 },
            { label: "b", prompt: "Calculate the wavelength of the sound heard by the observer.", marks: 2 },
            { label: "c", prompt: "Explain, in terms of wavefronts, why the observed frequency is higher than $800$ Hz.", marks: 2 },
            { label: "d", prompt: "After passing the observer the car moves directly away at the same speed. Calculate the frequency then heard by the observer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moving source approaching", statement: "f' = fv/(v - v_s)" },
              { kind: "formula", name: "Wavelength in medium", statement: "\\lambda' = (v - v_s)/f for an approaching source" },
              { kind: "formula", name: "Moving source receding", statement: "f' = fv/(v + v_s)" },
            ],
            steps: [
              { part: "a", reasoning: "Apply the approaching-source formula with $v_s = 25$ m s$^{-1}$.", working: "f' = \\frac{800 \\times 340}{340 - 25} = \\frac{272000}{315}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate to 3 s.f.", working: "f' = 863 \\text{ Hz}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $\\lambda' = v_{\\text{wave}}/f'$ with the speed of sound in air.", working: "\\lambda' = \\frac{340}{863} = 0.394 \\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct value with unit (accept $0.39$ m).", working: "\\lambda' = 0.394 \\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The moving source emits each wavefront from a position closer to the observer than the previous one, so wavefronts bunch together ahead of the source.", working: "\\text{wavefronts compressed ahead}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Bunched wavefronts mean a shorter wavelength and hence a higher observed frequency.", working: "\\lambda \\downarrow \\Rightarrow f \\uparrow", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Apply the receding-source formula.", working: "f' = \\frac{800 \\times 340}{340 + 25} = \\frac{272000}{365}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate; the frequency is now below $800$ Hz.", working: "f' = 745 \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f' = 863$ Hz (b) $\\lambda' = 0.394$ m (c) wavefronts bunch ahead of the approaching source, shortening the wavelength and raising the frequency (d) $f' = 745$ Hz",
            commonErrors: ["Using $v + v_s$ in the denominator for the approaching case.", "Computing the observed wavelength using the emitted frequency instead of the observed frequency."],
            examinerNote: "Accept $863$ Hz or $864$ Hz (3 s.f. rounding of $863.5$) for part (a); accept $0.39$ m for part (b).",
          },
        },
        {
          id: "physsl-u4-doppler-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the Doppler effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The change in the amplitude of a wave as it travels" },
              { id: "b", text: "The reflection of a wave from a moving surface" },
              { id: "c", text: "The change in observed frequency when there is relative motion between source and observer" },
              { id: "d", text: "The bending of a wave as it enters a new medium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Doppler effect", statement: "The observed frequency of a wave changes when there is relative motion between the source and the observer." },
            ],
            steps: [
              { reasoning: "The Doppler effect is a frequency shift caused by relative motion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** frequency change due to relative motion",
            commonErrors: ["Confusing the Doppler effect with refraction or reflection."],
          },
        },
        {
          id: "physsl-u4-doppler-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A source of sound moves directly towards a stationary observer. Compared with the emitted frequency, the frequency heard by the observer is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "unchanged, because the speed of sound is constant" },
              { id: "b", text: "lower, because the wavelength increases" },
              { id: "c", text: "higher only if the observer is also moving" },
              { id: "d", text: "higher, because the wavelength ahead of the source is shortened" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Moving source", statement: "An approaching source compresses wavefronts ahead of it, shortening the wavelength and raising the observed frequency." },
            ],
            steps: [
              { reasoning: "Wavefronts bunch ahead of an approaching source, so $\\lambda' < \\lambda$ and $f' > f$.", working: "f' = \\frac{fv}{v - v_s} > f", marks: 1, markCode: "M" },
              { reasoning: "Option (b) describes this correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** higher frequency",
            commonErrors: ["Thinking a moving source does not change the observed frequency."],
          },
        },
        {
          id: "physsl-u4-doppler-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A stationary source emits sound of frequency $400$ Hz. An observer walks directly towards the source at $20$ m s$^{-1}$. The speed of sound is $340$ m s$^{-1}$. Calculate the frequency heard by the observer.",
          response: {
            type: "numeric",
            parts: [
              { label: "Observed frequency", answer: 424, tolerance: 0.5, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moving observer approaching", statement: "f' = f(v + v_o)/v" },
            ],
            steps: [
              { reasoning: "Apply the moving-observer formula.", working: "f' = 400 \\times \\frac{340 + 20}{340} = 400 \\times \\frac{360}{340}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f' = 423.5 \\approx 424 \\text{ Hz}", marks: 1, markCode: "A" },
              { reasoning: "The result is higher than $400$ Hz, as expected for approach.", working: "424 > 400 \\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f' = 424$ Hz",
            commonErrors: ["Using the moving-source formula $fv/(v - v_s)$ instead.", "Adding $v_o$ to the frequency rather than to the wave speed."],
          },
        },
        {
          id: "physsl-u4-doppler-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A stationary source emits sound of frequency $500$ Hz. An observer moves directly away from the source at $34$ m s$^{-1}$. The speed of sound is $340$ m s$^{-1}$. Calculate the frequency heard.",
          response: {
            type: "numeric",
            parts: [
              { label: "Observed frequency", answer: 450, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moving observer receding", statement: "f' = f(v - v_o)/v" },
            ],
            steps: [
              { reasoning: "Apply the receding-observer formula.", working: "f' = 500 \\times \\frac{340 - 34}{340} = 500 \\times \\frac{306}{340}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f' = 450 \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f' = 450$ Hz",
            commonErrors: ["Using $v + v_o$ for recession instead of $v - v_o$."],
          },
        },
        {
          id: "physsl-u4-doppler-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A source of sound and an observer both move directly towards each other, each at $10$ m s$^{-1}$, in still air where the speed of sound is $340$ m s$^{-1}$. The emitted frequency is $440$ Hz.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f' = 440 \\times \\frac{340 + 10}{340 - 10} \\approx 467$ Hz" },
              { id: "b", text: "$f' = 440 \\times \\frac{340 - 10}{340 + 10} \\approx 415$ Hz" },
              { id: "c", text: "$f' = 440 \\times \\frac{340}{340 - 10} \\approx 453$ Hz" },
              { id: "d", text: "$f' = 440 \\times \\frac{340}{340}$, unchanged" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "General Doppler formula", statement: "f' = f(v \\pm v_o)/(v \\mp v_s), upper signs for approach" },
            ],
            steps: [
              { reasoning: "Both approach, so numerator uses $v + v_o$ and denominator $v - v_s$.", working: "f' = 440 \\times \\frac{340 + 10}{340 - 10} = 440 \\times \\frac{350}{330}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f' = 466.7 \\approx 467 \\text{ Hz (accept } 466\\text{--}467\\text{ Hz)}", marks: 1, markCode: "A" },
              { reasoning: "The shift is larger than for either motion alone, and the frequency is higher as expected for mutual approach.", marks: 1, markCode: "A" },
              { reasoning: "Only option (b) uses the correct signs for both motions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f' \\approx 466$ Hz",
            commonErrors: ["Applying only one of the two motions.", "Swapping the signs for approach and recession."],
          },
        },
        {
          id: "physsl-u4-doppler-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "A police car siren emits sound of frequency $800$ Hz and moves directly towards a stationary observer at $25$ m s$^{-1}$. The speed of sound is $340$ m s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Observed frequency", answer: 863, tolerance: 1, unit: "Hz" },
              { label: "Observed wavelength", answer: 0.394, tolerance: 0.001, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moving source approaching", statement: "f' = fv/(v - v_s)" },
              { kind: "formula", name: "Wavelength", statement: "\\lambda' = v/f'" },
            ],
            steps: [
              { reasoning: "Apply the approaching-source formula.", working: "f' = \\frac{800 \\times 340}{340 - 25} = \\frac{272000}{315}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 s.f.", working: "f' = 863 \\text{ Hz}", marks: 1, markCode: "A" },
              { reasoning: "The observed wavelength uses the observed frequency and the speed of sound.", working: "\\lambda' = \\frac{340}{863}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\lambda' = 0.394 \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Both values are consistent: $f'\\lambda' = 340$ m s$^{-1}$.", working: "863 \\times 0.394 \\approx 340", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Observed frequency $= 863$ Hz; observed wavelength $= 0.394$ m",
            commonErrors: ["Using the emitted frequency $800$ Hz to find the observed wavelength.", "Using $v + v_s$ in the denominator for approach."],
          },
        },
        {
          id: "physsl-u4-doppler-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A source of sound of frequency $600$ Hz moves away from a stationary observer at $30$ m s$^{-1}$. The speed of sound is $340$ m s$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency heard by the observer.", marks: 2 },
            { label: "b", prompt: "Explain, in terms of wavefronts, why the observed frequency is lower than $600$ Hz.", marks: 2 },
            { label: "c", prompt: "State what the observer would hear if the source were stationary and the observer moved away at $30$ m s$^{-1}$ instead, giving the formula used.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moving source receding", statement: "f' = fv/(v + v_s)" },
              { kind: "formula", name: "Moving observer receding", statement: "f' = f(v - v_o)/v" },
            ],
            steps: [
              { part: "a", reasoning: "Apply the receding-source formula.", working: "f' = \\frac{600 \\times 340}{340 + 30} = \\frac{204000}{370}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate to 3 s.f.", working: "f' = 551 \\text{ Hz}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A receding source emits each wavefront from a position farther from the observer than the previous one.", working: "\\text{wavefronts stretched behind source}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The stretched wavefronts mean a longer wavelength and hence a lower observed frequency.", working: "\\lambda \\uparrow \\Rightarrow f \\downarrow", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the moving-observer formula with $v_o = 30$ m s$^{-1}$: $f' = f(v - v_o)/v$.", working: "f' = 600 \\times \\frac{340 - 30}{340} = 600 \\times \\frac{310}{340}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate; the frequency is also lower than $600$ Hz but by a smaller amount.", working: "f' = 547 \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f' = 551$ Hz (b) wavefronts are stretched out behind the receding source, lengthening the wavelength and lowering the frequency (c) $f' = 600 \\times (340 - 30)/340 = 547$ Hz using $f' = f(v - v_o)/v$",
            commonErrors: ["Using the approaching formula for a receding source.", "Assuming the two cases give identical shifts — they differ because the medium frame differs."],
          },
        },
        {
          id: "physsl-u4-doppler-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A car sounding its horn drives towards a stationary observer. What happens to the wavelength of the sound in the air ahead of the car?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It decreases because wavefronts bunch together ahead of the car" },
              { id: "b", text: "It increases because the car is moving" },
              { id: "c", text: "It stays the same because the speed of sound is unchanged" },
              { id: "d", text: "It becomes zero at the position of the car" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Moving source wavelength", statement: "Ahead of an approaching source the wavelength is shortened: $\\lambda' = (v - v_s)/f$." },
            ],
            steps: [
              { reasoning: "The source moves into the wavefronts it emits, compressing them ahead.", working: "\\lambda' = \\frac{v - v_s}{f} < \\lambda", marks: 1, markCode: "M" },
              { reasoning: "Option (b) is correct; the speed of sound is unchanged but the wavelength in front is shorter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** wavelength decreases",
            commonErrors: ["Confusing wave speed with wavelength — the speed stays the same while $\\lambda$ changes."],
          },
        },
        {
          id: "physsl-u4-doppler-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In astronomy, a spectral line from a distant star is observed at a longer wavelength than the same line measured in the laboratory. This is called",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a green shift" },
              { id: "b", text: "a red shift" },
              { id: "c", text: "a blue shift" },
              { id: "d", text: "a Doppler effect of zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Red shift", statement: "A shift to longer (red) wavelengths indicates the source is receding." },
            ],
            steps: [
              { reasoning: "Longer wavelength means lower frequency, which occurs for a receding source — a red shift.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** red shift",
            commonErrors: ["Thinking longer wavelength means the source is approaching."],
          },
        },
        {
          id: "physsl-u4-doppler-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A source emits sound of frequency $740$ Hz and moves directly away from a stationary observer at $30$ m s$^{-1}$. The speed of sound is $340$ m s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Observed frequency", answer: 680, unit: "Hz" },
              { label: "Observed wavelength", answer: 0.5, tolerance: 0.01, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moving source receding", statement: "f' = fv/(v + v_s)" },
              { kind: "formula", name: "Wavelength", statement: "\\lambda' = v/f'" },
            ],
            steps: [
              { reasoning: "Apply the receding-source formula.", working: "f' = \\frac{740 \\times 340}{340 + 30} = \\frac{251600}{370}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f' = 680 \\text{ Hz}", marks: 1, markCode: "A" },
              { reasoning: "Observed wavelength uses $\\lambda' = v/f'$.", working: "\\lambda' = \\frac{340}{680} = 0.50 \\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Correct value with unit.", working: "\\lambda' = 0.50 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Observed frequency $= 680$ Hz; observed wavelength $= 0.50$ m",
            commonErrors: ["Using $v - v_s$ in the denominator (that is the approaching formula).", "Finding the wavelength from the emitted frequency."],
          },
        },
        {
          id: "physsl-u4-doppler-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An ambulance with its siren sounding a steady $700$ Hz drives directly towards a stationary observer at $30$ m s$^{-1}$, passes, and then drives directly away at the same speed. The speed of sound is $340$ m s$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency heard while the ambulance approaches.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency heard after the ambulance has passed and is receding.", marks: 2 },
            { label: "c", prompt: "Describe what the observer hears at the instant the ambulance passes.", marks: 2 },
            { label: "d", prompt: "Explain why the pitch changes abruptly as the ambulance passes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moving source approaching", statement: "f' = fv/(v - v_s)" },
              { kind: "formula", name: "Moving source receding", statement: "f' = fv/(v + v_s)" },
            ],
            steps: [
              { part: "a", reasoning: "Apply the approaching-source formula with $v_s = 30$ m s$^{-1}$.", working: "f' = \\frac{700 \\times 340}{340 - 30} = \\frac{238000}{310}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate; the frequency is above $700$ Hz.", working: "f' = 768 \\text{ Hz}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the receding-source formula.", working: "f' = \\frac{700 \\times 340}{340 + 30} = \\frac{238000}{370}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate; the frequency is below $700$ Hz.", working: "f' = 643 \\text{ Hz}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The observed frequency drops suddenly from about $768$ Hz to about $643$ Hz as the source passes.", working: "\\text{abrupt drop in pitch}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Before passing, wavefronts are compressed ahead of the source giving high frequency; after passing they are stretched behind giving low frequency.", working: "\\lambda_{\\text{front}} < \\lambda_{\\text{back}}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The switch from ahead to behind happens at the moment of passing, so the pitch drops abruptly.", working: "\\text{sudden change of sign of } v_s", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $768$ Hz (b) $643$ Hz (c) the pitch drops suddenly to a lower value (d) the wavefronts switch from compressed (ahead) to stretched (behind) at the instant of passing",
            commonErrors: ["Using the same formula for both approach and recession.", "Thinking the pitch rises continuously rather than dropping abruptly."],
          },
        },
        {
          id: "physsl-u4-doppler-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A train sounding a whistle of frequency $500$ Hz moves at $20$ m s$^{-1}$ along a straight track. A stationary observer stands beside the track. The speed of sound is $340$ m s$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency heard by the observer when the train approaches directly.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency heard when the train recedes directly.", marks: 2 },
            { label: "c", prompt: "The observer now runs towards the stationary train at $5.0$ m s$^{-1}$ while the train is at rest. Calculate the frequency heard.", marks: 2 },
            { label: "d", prompt: "State one assumption made in these calculations about the motion of the train and observer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moving source approaching", statement: "f' = fv/(v - v_s)" },
              { kind: "formula", name: "Moving source receding", statement: "f' = fv/(v + v_s)" },
              { kind: "formula", name: "Moving observer approaching", statement: "f' = f(v + v_o)/v" },
            ],
            steps: [
              { part: "a", reasoning: "Apply the approaching-source formula with $v_s = 20$ m s$^{-1}$.", working: "f' = \\frac{500 \\times 340}{340 - 20} = \\frac{170000}{320}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "f' = 531 \\text{ Hz}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the receding-source formula.", working: "f' = \\frac{500 \\times 340}{340 + 20} = \\frac{170000}{360}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "f' = 472 \\text{ Hz}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The train is stationary, so use the moving-observer formula with $v_o = 5.0$ m s$^{-1}$.", working: "f' = 500 \\times \\frac{340 + 5.0}{340} = 500 \\times \\frac{345}{340}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "f' = 507 \\text{ Hz}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The motion is along the line joining source and observer (head-on), so the simple one-dimensional formulas apply.", working: "\\text{motion along the line joining source and observer}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Also assume speeds are constant and small compared with the speed of sound, and that the medium (air) is stationary.", working: "\\text{constant speeds; stationary medium}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $531$ Hz (b) $472$ Hz (c) $507$ Hz (d) motion is along the line joining source and observer; speeds constant; air stationary",
            commonErrors: ["Using the moving-source formula for part (c) where the observer moves.", "Ignoring that the observer's motion also changes the observed frequency."],
          },
        },
      ],
    },
    {
      id: "physsl-u4-em-spectrum",
      title: "Electromagnetic waves and photons",
      skill: "Describe the electromagnetic spectrum, use $c = f\\lambda$ and $E = hf$ to calculate frequencies, wavelengths and photon energies.",
      lesson: {
        sections: [
          {
            heading: "Nature of electromagnetic waves",
            body: "Electromagnetic waves are **transverse** waves consisting of oscillating electric and magnetic fields. They require no medium and travel through a vacuum at the speed of light $c = 3.00 \\times 10^8$ m s$^{-1}$. In a vacuum all electromagnetic waves have the same speed regardless of frequency or wavelength, so $c = f\\lambda$.",
          },
          {
            heading: "The electromagnetic spectrum",
            body: "Ordering by increasing frequency (decreasing wavelength): **radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays**. Radio waves have wavelengths of metres or more; gamma rays have wavelengths smaller than atomic nuclei. Each region has characteristic uses and effects: radio for communication, microwaves for cooking and radar, infrared for remote controls and thermal imaging, visible light for vision, ultraviolet for sterilisation and fluorescence, X-rays for medical imaging, and gamma rays for radiotherapy and nuclear processes.",
          },
          {
            heading: "Photons and energy",
            body: "Electromagnetic radiation is quantised: it travels in packets called **photons**, each of energy $E = hf$, where $h = 6.63 \\times 10^{-34}$ J s is Planck's constant. Since $c = f\\lambda$, photon energy can also be written $E = hc/\\lambda$. Higher-frequency radiation carries more energetic photons: a gamma photon has far more energy than a radio photon.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation in vacuum", statement: "c = f\\lambda,  c = 3.00 \\times 10^8 m s^{-1}" },
          { name: "Photon energy", statement: "E = hf" },
          { name: "Photon energy via wavelength", statement: "E = hc/\\lambda" },
        ],
        workedExample: {
          problem: "A photon has wavelength $500$ nm in a vacuum. Find its frequency and energy.",
          solution: "Frequency $f = c/\\lambda = 3.00 \\times 10^8 / (500 \\times 10^{-9}) = 6.0 \\times 10^{14}$ Hz. Energy $E = hf = 6.63 \\times 10^{-34} \\times 6.0 \\times 10^{14} = 4.0 \\times 10^{-19}$ J.",
        },
      },
      questions: [
        {
          id: "physsl-u4-em-spectrum-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Which statement about electromagnetic waves in a vacuum is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their speed depends on their frequency." },
              { id: "b", text: "They are longitudinal waves." },
              { id: "c", text: "They all travel at the same speed $c$." },
              { id: "d", text: "They cannot travel through a vacuum." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Speed of EM waves", statement: "All electromagnetic waves travel at c = 3.0 \\times 10^8 m s^{-1} in a vacuum, independent of frequency." },
            ],
            steps: [
              { reasoning: "EM waves are transverse and all have the same speed in a vacuum.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** they all travel at the same speed $c$",
            commonErrors: ["Thinking higher-frequency EM waves travel faster."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which ordering of the electromagnetic spectrum is correct in order of increasing frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "radio, microwave, infrared, visible, ultraviolet, X-ray, gamma" },
              { id: "b", text: "gamma, X-ray, ultraviolet, visible, infrared, microwave, radio" },
              { id: "c", text: "microwave, radio, infrared, visible, ultraviolet, X-ray, gamma" },
              { id: "d", text: "radio, infrared, microwave, visible, ultraviolet, X-ray, gamma" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "EM spectrum order", statement: "Frequency increases (wavelength decreases) from radio through microwave, infrared, visible, ultraviolet, X-ray to gamma." },
            ],
            steps: [
              { reasoning: "Recall the standard ordering of the spectrum by increasing frequency.", working: "\\text{radio} < \\text{microwave} < \\text{IR} < \\text{visible} < \\text{UV} < \\text{X-ray} < \\text{gamma}", marks: 1, markCode: "M" },
              { reasoning: "Option (a) matches this ordering.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** radio, microwave, infrared, visible, ultraviolet, X-ray, gamma",
            commonErrors: ["Swapping the positions of microwave and infrared, or of visible and ultraviolet."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An electromagnetic wave in a vacuum has frequency $6.0 \\times 10^{14}$ Hz. Take $c = 3.0 \\times 10^8$ m s$^{-1}$ and $h = 6.63 \\times 10^{-34}$ J s.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wavelength $5.0 \\times 10^{-7}$ m; photon energy $2.0 \\times 10^{-19}$ J" },
              { id: "b", text: "Wavelength $5.0 \\times 10^{-7}$ m; photon energy $4.0 \\times 10^{-19}$ J" },
              { id: "c", text: "Wavelength $1.8 \\times 10^{23}$ m; photon energy $4.0 \\times 10^{-19}$ J" },
              { id: "d", text: "Wavelength $5.0 \\times 10^{-7}$ m; photon energy $1.3 \\times 10^{-27}$ J" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "c = f\\lambda" },
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
            ],
            steps: [
              { reasoning: "Wavelength from $c = f\\lambda$.", working: "\\lambda = \\frac{3.0 \\times 10^8}{6.0 \\times 10^{14}} = 5.0 \\times 10^{-7} \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Photon energy from $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 6.0 \\times 10^{14} = 3.98 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 2 s.f.: $E \\approx 4.0 \\times 10^{-19}$ J, consistent with $E = hc/\\lambda$.", working: "E \\approx 4.0 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Option (a) has both values correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** wavelength $5.0 \\times 10^{-7}$ m; photon energy $4.0 \\times 10^{-19}$ J",
            commonErrors: ["Using $E = hc\\lambda$ instead of $hc/\\lambda$.", "Misplacing powers of ten in $\\lambda = c/f$."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Light from a distant star arrives at Earth with wavelength $4.86 \\times 10^{-7}$ m. Take $c = 3.0 \\times 10^8$ m s$^{-1}$, $h = 6.63 \\times 10^{-34}$ J s and $1$ eV $= 1.6 \\times 10^{-19}$ J.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the light.", marks: 2 },
            { label: "b", prompt: "Calculate the energy of a single photon of this light, in joules.", marks: 2 },
            { label: "c", prompt: "State which region of the electromagnetic spectrum this light belongs to.", marks: 2 },
            { label: "d", prompt: "Explain why a photon of gamma radiation has more energy than a photon of radio waves.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "c = f\\lambda" },
              { kind: "formula", name: "Photon energy", statement: "E = hf = hc/\\lambda" },
              { kind: "property", name: "EM spectrum", statement: "Gamma rays have the highest frequencies and shortest wavelengths; radio waves the lowest frequencies and longest wavelengths." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $f = c/\\lambda$.", working: "f = \\frac{3.0 \\times 10^8}{4.86 \\times 10^{-7}} = 6.17 \\times 10^{14} \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Apply $E = hf$ using the frequency found, or $E = hc/\\lambda$ directly.", working: "E = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^8}{4.86 \\times 10^{-7}} = 4.09 \\times 10^{-19} \\text{ J}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "The wavelength $486$ nm lies within the visible range (approximately $400$–$700$ nm).", working: "\\text{visible (blue-green)}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Photon energy $E = hf$ is proportional to frequency.", working: "E \\propto f", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Gamma rays have much higher frequencies than radio waves, so each gamma photon carries much more energy.", working: "f_{\\gamma} \\gg f_{\\text{radio}} \\Rightarrow E_{\\gamma} \\gg E_{\\text{radio}}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $f = 6.17 \\times 10^{14}$ Hz (b) $E = 4.09 \\times 10^{-19}$ J (about $2.6$ eV) (c) visible light (d) $E = hf$ and gamma frequencies are far higher than radio frequencies",
            commonErrors: ["Multiplying by $\\lambda$ instead of dividing when finding frequency.", "Using the speed of sound instead of $c$.", "Claiming photon energy depends on intensity rather than frequency."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "The energy of a single photon is given by",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$E = hc\\lambda$" },
              { id: "b", text: "$E = hf$" },
              { id: "c", text: "$E = f/h$" },
              { id: "d", text: "$E = h/f$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hf, where h = 6.63 \\times 10^{-34} J s is Planck's constant." },
            ],
            steps: [
              { reasoning: "Photon energy is Planck's constant times frequency.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $E = hf$",
            commonErrors: ["Inverting the formula to $E = h/f$."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which region of the electromagnetic spectrum lies between visible light and X-rays in order of increasing frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ultraviolet" },
              { id: "b", text: "Infrared" },
              { id: "c", text: "Radio" },
              { id: "d", text: "Microwave" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "EM spectrum order", statement: "Frequency increases from visible to ultraviolet to X-ray to gamma." },
            ],
            steps: [
              { reasoning: "Ultraviolet has a higher frequency than visible light but lower than X-rays.", working: "\\text{visible} < \\text{UV} < \\text{X-ray}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** ultraviolet",
            commonErrors: ["Confusing the positions of ultraviolet and infrared."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A radio wave has frequency $1.5 \\times 10^{9}$ Hz. Taking $c = 3.0 \\times 10^8$ m s$^{-1}$, calculate its wavelength.",
          response: {
            type: "numeric",
            parts: [
              { label: "Wavelength", answer: 0.20, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "c = f\\lambda" },
            ],
            steps: [
              { reasoning: "Apply $\\lambda = c/f$.", working: "\\lambda = \\frac{3.0 \\times 10^8}{1.5 \\times 10^9}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\lambda = 0.20 \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "The wavelength is in the radio/microwave region, consistent with the frequency.", working: "\\lambda = 0.20 \\text{ m} \\Rightarrow \\text{radio}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 0.20$ m",
            commonErrors: ["Multiplying $c$ by $f$ instead of dividing.", "Misplacing the power of ten."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate the energy of a photon of frequency $3.0 \\times 10^{14}$ Hz. Take $h = 6.63 \\times 10^{-34}$ J s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Photon energy", answer: 2.0e-19, tolerance: 0.01e-19, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
            ],
            steps: [
              { reasoning: "Apply $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 3.0 \\times 10^{14}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 2 s.f.", working: "E = 1.99 \\times 10^{-19} \\approx 2.0 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 2.0 \\times 10^{-19}$ J",
            commonErrors: ["Using the speed of light instead of Planck's constant."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Two photons have frequencies $f_1 = 6.0 \\times 10^{14}$ Hz and $f_2 = 3.0 \\times 10^{15}$ Hz. Take $h = 6.63 \\times 10^{-34}$ J s.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photon 2 has more energy because $E = hf$ and $f_2 > f_1$" },
              { id: "b", text: "Photon 1 has more energy because it has a longer wavelength" },
              { id: "c", text: "Photon 1 has more energy because lower frequency means more energy" },
              { id: "d", text: "Both photons have the same energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
            ],
            steps: [
              { reasoning: "Photon energy is proportional to frequency; $f_2 = 5f_1$ so $E_2 = 5E_1$.", working: "E_2 = h \\times 3.0 \\times 10^{15} = 1.99 \\times 10^{-18} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Compare with $E_1 = 6.63 \\times 10^{-34} \\times 6.0 \\times 10^{14} = 3.98 \\times 10^{-19}$ J.", working: "E_1 \\approx 4.0 \\times 10^{-19} \\text{ J} < E_2", marks: 1, markCode: "A" },
              { reasoning: "Higher frequency means higher photon energy.", marks: 1, markCode: "M" },
              { reasoning: "Only option (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** photon 2 has more energy",
            commonErrors: ["Thinking longer wavelength means more photon energy — it is the opposite."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Green light has wavelength $600$ nm in a vacuum. Take $c = 3.0 \\times 10^8$ m s$^{-1}$ and $h = 6.63 \\times 10^{-34}$ J s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency", answer: 5.0e14, unit: "Hz" },
              { label: "Photon energy", answer: 3.3e-19, tolerance: 0.01e-19, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "f = c/\\lambda" },
              { kind: "formula", name: "Photon energy", statement: "E = hf = hc/\\lambda" },
            ],
            steps: [
              { reasoning: "Convert the wavelength to metres: $600$ nm $= 6.0 \\times 10^{-7}$ m.", working: "\\lambda = 6.0 \\times 10^{-7} \\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Apply $f = c/\\lambda$.", working: "f = \\frac{3.0 \\times 10^8}{6.0 \\times 10^{-7}} = 5.0 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Correct frequency with unit.", working: "f = 5.0 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "A" },
              { reasoning: "Apply $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 5.0 \\times 10^{14} = 3.32 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Correct energy with unit (accept $3.3 \\times 10^{-19}$ J).", working: "E \\approx 3.3 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Frequency $= 5.0 \\times 10^{14}$ Hz; photon energy $= 3.3 \\times 10^{-19}$ J",
            commonErrors: ["Forgetting to convert nm to m.", "Using $E = hc\\lambda$ instead of $hc/\\lambda$."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Match each region of the electromagnetic spectrum to one of its uses: ultraviolet, infrared, X-rays.",
          parts: [
            { label: "a", prompt: "State one common use of ultraviolet radiation.", marks: 1 },
            { label: "b", prompt: "State one common use of infrared radiation.", marks: 1 },
            { label: "c", prompt: "State one common use of X-rays.", marks: 1 },
            { label: "d", prompt: "State the correct order of these three regions in increasing frequency.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "EM spectrum order", statement: "Frequency increases: infrared < visible < ultraviolet < X-ray < gamma." },
            ],
            steps: [
              { part: "a", reasoning: "Accept sterilisation, fluorescence, or detecting forged banknotes.", working: "\\text{e.g. sterilisation / fluorescence}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Accept remote controls, thermal imaging, or cooking heaters.", working: "\\text{e.g. remote controls / thermal imaging}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Accept medical imaging or detecting fractures.", working: "\\text{e.g. medical imaging}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Infrared has the lowest frequency, then ultraviolet, then X-rays.", working: "\\text{infrared} < \\text{ultraviolet} < \\text{X-ray}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Stated order is correct.", working: "\\text{correct ordering}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) e.g. sterilisation (b) e.g. remote controls / thermal imaging (c) e.g. medical imaging (d) infrared < ultraviolet < X-ray in frequency",
            commonErrors: ["Placing X-rays below ultraviolet in frequency.", "Confusing infrared with ultraviolet."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Why are X-rays and gamma rays dangerous to living tissue while radio waves are not?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "X-rays and gamma rays travel faster than radio waves" },
              { id: "b", text: "X-rays and gamma rays have much higher frequencies, so their photons carry enough energy to ionise atoms" },
              { id: "c", text: "X-rays and gamma rays are longitudinal waves" },
              { id: "d", text: "Radio waves are absorbed completely by the body" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Photon energy", statement: "E = hf; higher-frequency radiation has more energetic photons capable of ionising atoms." },
            ],
            steps: [
              { reasoning: "X-ray and gamma photon energies are high enough to ionise atoms and damage cells; radio photon energies are too small.", working: "E = hf;\\ f_{\\text{X-ray}} \\gg f_{\\text{radio}}", marks: 1, markCode: "M" },
              { reasoning: "All EM waves travel at the same speed $c$ in a vacuum, so speed cannot be the reason.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** higher frequency means more energetic, ionising photons",
            commonErrors: ["Thinking the danger comes from the speed of the waves."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An electromagnetic wave in a vacuum has wavelength $3.0 \\times 10^{-7}$ m. Calculate its frequency. Take $c = 3.0 \\times 10^8$ m s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency", answer: 1.0e15, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "f = c/\\lambda" },
            ],
            steps: [
              { reasoning: "Apply $f = c/\\lambda$.", working: "f = \\frac{3.0 \\times 10^8}{3.0 \\times 10^{-7}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f = 1.0 \\times 10^{15} \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f = 1.0 \\times 10^{15}$ Hz",
            commonErrors: ["Multiplying $c$ by $\\lambda$ instead of dividing.", "Misplacing the power of ten in the result."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A photon has frequency $6.0 \\times 10^{14}$ Hz. Take $h = 6.63 \\times 10^{-34}$ J s and $1$ eV $= 1.6 \\times 10^{-19}$ J. Calculate the photon energy in electronvolts.",
          response: {
            type: "numeric",
            parts: [
              { label: "Photon energy", answer: 2.5, tolerance: 0.05, unit: "eV" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
              { kind: "property", name: "Unit conversion", statement: "1 eV = 1.6 \\times 10^{-19} J" },
            ],
            steps: [
              { reasoning: "Find the energy in joules.", working: "E = 6.63 \\times 10^{-34} \\times 6.0 \\times 10^{14} = 3.98 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Convert to electronvolts.", working: "E = \\frac{3.98 \\times 10^{-19}}{1.6 \\times 10^{-19}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E = 2.5 \\text{ eV}", marks: 1, markCode: "A" },
              { reasoning: "The value is consistent with visible-light photon energies (~2–3 eV).", working: "\\approx 2.5 \\text{ eV}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 2.5$ eV",
            commonErrors: ["Forgetting to convert joules to eV.", "Dividing by the wrong conversion factor."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A photon of ultraviolet radiation has wavelength $200$ nm. Take $c = 3.0 \\times 10^8$ m s$^{-1}$ and $h = 6.63 \\times 10^{-34}$ J s.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the radiation.", marks: 2 },
            { label: "b", prompt: "Calculate the energy of one photon.", marks: 2 },
            { label: "c", prompt: "Explain why ultraviolet radiation can cause sunburn while visible light of similar intensity does not.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "f = c/\\lambda" },
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
              { kind: "property", name: "EM spectrum", statement: "Ultraviolet photons are more energetic than visible photons of the same intensity." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $f = c/\\lambda$ with $\\lambda = 2.0 \\times 10^{-7}$ m.", working: "f = \\frac{3.0 \\times 10^8}{2.0 \\times 10^{-7}} = 1.5 \\times 10^{15} \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Apply $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 1.5 \\times 10^{15} = 9.9 \\times 10^{-19} \\text{ J}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "At the same intensity, the number of photons per second is similar, but each ultraviolet photon carries more energy because $E = hf$ and $f_{\\text{UV}} > f_{\\text{visible}}$.", working: "E_{\\text{UV}} > E_{\\text{visible}} \\text{ at same intensity}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The more energetic UV photons can damage skin cells, causing sunburn.", working: "\\text{UV photons damage cells}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f = 1.5 \\times 10^{15}$ Hz (b) $E = 9.9 \\times 10^{-19}$ J (c) UV photons are more energetic ($E = hf$) so they can damage skin cells",
            commonErrors: ["Using $E = hc\\lambda$ instead of $hf$.", "Thinking intensity alone determines the damage, ignoring photon energy."],
          },
        },
        {
          id: "physsl-u4-em-spectrum-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Light from a laser pointer has wavelength $650$ nm in a vacuum. Take $c = 3.0 \\times 10^8$ m s$^{-1}$, $h = 6.63 \\times 10^{-34}$ J s and $1$ eV $= 1.6 \\times 10^{-19}$ J.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the light.", marks: 2 },
            { label: "b", prompt: "Calculate the energy of a single photon in joules.", marks: 2 },
            { label: "c", prompt: "Express the photon energy in electronvolts.", marks: 2 },
            { label: "d", prompt: "State the region of the electromagnetic spectrum and explain how you identified it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "f = c/\\lambda" },
              { kind: "formula", name: "Photon energy", statement: "E = hf = hc/\\lambda" },
              { kind: "property", name: "Visible range", statement: "Visible light has wavelengths approximately 400–700 nm." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $f = c/\\lambda$ with $\\lambda = 6.5 \\times 10^{-7}$ m.", working: "f = \\frac{3.0 \\times 10^8}{6.5 \\times 10^{-7}} = 4.62 \\times 10^{14} \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Apply $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 4.62 \\times 10^{14} = 3.06 \\times 10^{-19} \\text{ J}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Convert to eV using $1$ eV $= 1.6 \\times 10^{-19}$ J.", working: "E = \\frac{3.06 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 1.9 \\text{ eV}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "The wavelength $650$ nm lies within the visible range ($400$–$700$ nm), so it is red light.", working: "650 \\text{ nm} \\in [400, 700] \\text{ nm}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correctly identified as visible (red) light.", working: "\\text{visible (red)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f = 4.62 \\times 10^{14}$ Hz (b) $E = 3.06 \\times 10^{-19}$ J (c) $E = 1.9$ eV (d) visible light (red), because $650$ nm lies in the visible range",
            commonErrors: ["Forgetting to convert nm to metres.", "Using $E = hc\\lambda$ instead of $hf$.", "Placing $650$ nm in the infrared region."],
          },
        },
      ],
    },
  ],
};
