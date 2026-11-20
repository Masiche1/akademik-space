import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "physsl-u4-lesson-4-1",
  code: "4-1",
  title: "Properties of Waves and Wave Behaviour",
  goal: "I CAN describe transverse and longitudinal waves, use $v = f\\lambda$, and explain reflection, refraction and diffraction of waves.",
  standards: ["Topic 4.1", "Topic 4.2", "Paper 1", "Paper 2 Section A"],
  vocabulary: [
    {
      term: "Transverse wave",
      definition:
        "A wave in which the oscillations are perpendicular to the direction of energy transfer, e.g. a wave on a string or a light wave.",
    },
    {
      term: "Longitudinal wave",
      definition:
        "A wave in which the oscillations are parallel to the direction of energy transfer, e.g. a sound wave in air.",
    },
    {
      term: "Wavelength ($\\lambda$)",
      definition:
        "The distance between two consecutive points oscillating in phase, such as successive crests; measured in metres.",
    },
    {
      term: "Frequency ($f$)",
      definition:
        "The number of complete oscillations per unit time; measured in hertz (Hz). Related to the period by $f = 1/T$.",
    },
    {
      term: "Wave speed ($v$)",
      definition:
        "The speed at which the wave pattern and its energy travel through the medium, $v = f\\lambda$, measured in m s$^{-1}$.",
    },
    {
      term: "Diffraction",
      definition:
        "The spreading of a wave as it passes through a gap or around an obstacle; significant when the gap width is comparable to the wavelength.",
    },
  ],
  concepts: [
    {
      id: "physsl-u4-wave-basics",
      title: "Wave types and the wave equation",
      skill:
        "Distinguish transverse and longitudinal waves and use $v = f\\lambda$ to solve for wave speed, frequency, wavelength and period.",
      lesson: {
        sections: [
          {
            heading: "Transverse and longitudinal waves",
            body: "In a **transverse wave** the particles oscillate perpendicular to the direction in which the wave travels; examples include waves on a string, surface water waves and all electromagnetic waves. In a **longitudinal wave** the particles oscillate parallel to the direction of travel, producing compressions and rarefactions; sound in air is the standard example. Both types transfer energy without transferring matter.",
          },
          {
            heading: "Wavelength, frequency, period and speed",
            body: "The **wavelength** $\\lambda$ is the distance between consecutive points oscillating in phase. The **period** $T$ is the time for one complete oscillation and the **frequency** $f$ is the number of oscillations per second, so $f = 1/T$. The wave speed $v$ is the distance travelled by the wave pattern per unit time, giving the fundamental wave equation:",
          },
          {
            heading: "Wavefronts and rays",
            body: "A **wavefront** is a line (or surface) joining points oscillating in phase, and a **ray** is a line showing the direction of travel of the wave. Rays are always perpendicular to wavefronts. In a uniform medium rays travel in straight lines; changes in the medium are shown by changes in the spacing of wavefronts, which equals the wavelength.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "v = f \\lambda" },
          { name: "Period and frequency", statement: "f = 1/T,  T = 1/f" },
          {
            name: "Wave speed in a medium",
            statement: "v = \\frac{d}{t} for the wavefront travel",
          },
        ],
        workedExample: {
          problem:
            "A wave on a string has wavelength $0.80$ m and frequency $5.0$ Hz. Find its speed and period.",
          solution:
            "Speed $v = f\\lambda = 5.0 \\times 0.80 = 4.0$ m s$^{-1}$. Period $T = 1/f = 1/5.0 = 0.20$ s.",
        },
      },
      questions: [
        {
          id: "physsl-u4-wave-basics-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A sound wave travels through air. Which statement correctly describes the oscillations of the air molecules?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They oscillate perpendicular to the direction of travel.",
              },
              {
                id: "b",
                text: "They oscillate parallel to the direction of travel.",
              },
              { id: "c", text: "They do not oscillate at all." },
              {
                id: "d",
                text: "They travel with the wave to a distant point.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Longitudinal wave",
                statement:
                  "In a longitudinal wave the particle oscillations are parallel to the direction of energy transfer; sound in air is longitudinal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sound in air is a longitudinal wave, so the oscillations are parallel to the direction of travel.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** parallel to the direction of travel",
            commonErrors: [
              "Confusing transverse and longitudinal waves; sound is longitudinal, light is transverse.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A wave travels along a rope at $3.0$ m s$^{-1}$ with a wavelength of $0.60$ m. Calculate the frequency of the wave.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5.0$ Hz" },
              { id: "b", text: "$1.8$ Hz" },
              { id: "c", text: "$0.20$ Hz" },
              { id: "d", text: "$180$ Hz" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange the wave equation for frequency.",
                working: "f = \\frac{v}{\\lambda}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute the values and evaluate.",
                working: "f = \\frac{3.0}{0.60} = 5.0 \\text{ Hz}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $5.0$ Hz",
            commonErrors: [
              "Multiplying $v$ by $\\lambda$ instead of dividing ($1.8$ Hz is $v\\lambda$).",
              "Reversing the ratio to obtain $\\lambda/v$.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A wave on a stretched string has wavelength $0.40$ m. A student counts $12$ wave crests passing a fixed point in $4.0$ s.",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Frequency $3.0$ Hz, period $0.33$ s, speed $1.2$ m s$^{-1}$",
              },
              {
                id: "b",
                text: "Frequency $3.0$ Hz, period $0.33$ s, speed $0.12$ m s$^{-1}$",
              },
              {
                id: "c",
                text: "Frequency $12$ Hz, period $0.083$ s, speed $4.8$ m s$^{-1}$",
              },
              {
                id: "d",
                text: "Frequency $0.33$ Hz, period $3.0$ s, speed $0.13$ m s$^{-1}$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Frequency from counting",
                statement: "f = number of oscillations / time",
              },
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
            ],
            steps: [
              {
                reasoning:
                  "Twelve crests pass in $4.0$ s, so the frequency is $12/4.0 = 3.0$ Hz.",
                working: "f = \\frac{12}{4.0} = 3.0 \\text{ Hz}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The period is the reciprocal of the frequency.",
                working: "T = \\frac{1}{3.0} = 0.33 \\text{ s}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Wave speed is $v = f\\lambda$.",
                working: "v = 3.0 \\times 0.40 = 1.2 \\text{ m s}^{-1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only option (a) has all three quantities correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** frequency $3.0$ Hz, period $0.33$ s, speed $1.2$ m s$^{-1}$",
            commonErrors: [
              "Counting $13$ crests (or intervals) instead of $12$.",
              "Using $T = f$ instead of $T = 1/f$.",
              "Multiplying wavelength by the count $12$ rather than by frequency.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A continuous wave travels along a string. Successive crests are $0.75$ m apart, and a student observes that $6$ crests pass a fixed point in $3.0$ s.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the frequency of the wave.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the period of the wave.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the speed of the wave on the string.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The wave then passes into a second string where the tension is different. State what happens to the frequency and to the wavelength, and justify your answer.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Frequency",
                statement: "f = number of crests / time",
              },
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
              {
                kind: "property",
                name: "Frequency set by source",
                statement:
                  "The frequency of a wave is determined by the source and does not change when the wave enters a new medium; only the speed and wavelength change.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Frequency is the number of oscillations per second.",
                working: "f = \\frac{6}{3.0} = 2.0 \\text{ Hz}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct value with unit.",
                working: "f = 2.0 \\text{ Hz}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Period is the reciprocal of frequency.",
                working: "T = \\frac{1}{f} = \\frac{1}{2.0} = 0.50 \\text{ s}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct value with unit.",
                working: "T = 0.50 \\text{ s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Apply the wave equation with $\\lambda = 0.75$ m.",
                working:
                  "v = f\\lambda = 2.0 \\times 0.75 = 1.5 \\text{ m s}^{-1}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct value with unit.",
                working: "v = 1.5 \\text{ m s}^{-1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Frequency is set by the source and is unchanged; the speed changes in the new medium.",
                working: "\\text{frequency unchanged}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Since $v = f\\lambda$ and $f$ is fixed, the wavelength must change in proportion to the speed.",
                working: "\\lambda \\propto v \\text{ (changes with medium)}",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $f = 2.0$ Hz (b) $T = 0.50$ s (c) $v = 1.5$ m s$^{-1}$ (d) frequency unchanged; wavelength changes because $\\lambda = v/f$ and $v$ changes",
            commonErrors: [
              "Using $12$ crests (counting both endpoints) in the frequency calculation.",
              "Assuming the wavelength is also unchanged in the second medium.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A wave has a frequency of $2.5$ Hz. What is its period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.40$ s" },
              { id: "b", text: "$2.5$ s" },
              { id: "c", text: "$1.25$ s" },
              { id: "d", text: "$5.0$ s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Period and frequency",
                statement: "f = 1/T, so T = 1/f",
              },
            ],
            steps: [
              {
                reasoning:
                  "Period is the reciprocal of frequency.",
                working: "T = \\frac{1}{2.5} = 0.40 \\text{ s}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $0.40$ s",
            commonErrors: [
              "Giving the frequency instead of the period.",
              "Halving the frequency instead of taking the reciprocal.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A wave travels at $12$ m s$^{-1}$ with a frequency of $3.0$ Hz. Calculate the wavelength of the wave.",
          response: {
            type: "numeric",
            parts: [
              { label: "Wavelength", answer: 4.0, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange the wave equation for wavelength.",
                working: "\\lambda = \\frac{v}{f}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute the values and evaluate.",
                working:
                  "\\lambda = \\frac{12}{3.0} = 4.0 \\text{ m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\lambda = 4.0$ m",
            commonErrors: [
              "Multiplying $v$ by $f$ instead of dividing.",
              "Confusing wavelength with frequency.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about light travelling through a vacuum is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is a longitudinal wave with oscillations parallel to its direction of travel.",
              },
              {
                id: "b",
                text: "It is a transverse wave with oscillations perpendicular to its direction of travel.",
              },
              {
                id: "c",
                text: "It cannot travel in a vacuum because it needs a medium.",
              },
              {
                id: "d",
                text: "It is a standing wave formed by two travelling waves.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transverse wave",
                statement:
                  "In a transverse wave the oscillations are perpendicular to the direction of energy transfer; light is transverse.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Light is an electromagnetic wave and is transverse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only option (b) correctly describes a transverse wave.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** transverse wave, oscillations perpendicular to travel",
            commonErrors: [
              "Confusing transverse (light) and longitudinal (sound) waves.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A wave has wavelength $0.50$ m and period $0.25$ s. Calculate its frequency and its speed.",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency", answer: 4.0, unit: "Hz" },
              { label: "Speed", answer: 2.0, unit: "m s^{-1}" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Period and frequency",
                statement: "f = 1/T",
              },
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
            ],
            steps: [
              {
                reasoning: "Frequency is the reciprocal of the period.",
                working: "f = \\frac{1}{0.25} = 4.0 \\text{ Hz}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the wave equation.",
                working: "v = f\\lambda = 4.0 \\times 0.50 = 2.0 \\text{ m s}^{-1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both answers are correct with units.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Units Hz and m s$^{-1}$ are appropriate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Frequency $= 4.0$ Hz; speed $= 2.0$ m s$^{-1}$",
            commonErrors: [
              "Using $T$ instead of $f = 1/T$.",
              "Computing $v = T\\lambda$ instead of $v = f\\lambda$.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A wave travels along a rope. Successive crests are $0.40$ m apart, and $15$ crests pass a fixed point in $5.0$ s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency", answer: 3.0, unit: "Hz" },
              { label: "Period", answer: 0.33, tolerance: 0.01, unit: "s" },
              { label: "Speed", answer: 1.2, unit: "m s^{-1}" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Frequency from counting",
                statement: "f = number of oscillations / time",
              },
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
            ],
            steps: [
              {
                reasoning:
                  "Frequency is the number of crests passing per second.",
                working: "f = \\frac{15}{5.0} = 3.0 \\text{ Hz}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Period is the reciprocal of frequency.",
                working: "T = \\frac{1}{3.0} = 0.33 \\text{ s}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the wave equation with $\\lambda = 0.40$ m.",
                working: "v = 3.0 \\times 0.40 = 1.2 \\text{ m s}^{-1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "All three values are correct with appropriate units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Frequency $= 3.0$ Hz; period $= 0.33$ s; speed $= 1.2$ m s$^{-1}$",
            commonErrors: [
              "Counting $16$ crests by including both endpoints.",
              "Using the wavelength as the period.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about wavefronts and rays is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Rays are parallel to wavefronts and point in the direction of travel.",
              },
              {
                id: "b",
                text: "Rays are perpendicular to wavefronts and point in the direction of travel.",
              },
              {
                id: "c",
                text: "Wavefronts join points that oscillate in antiphase.",
              },
              {
                id: "d",
                text: "Rays are only used for sound waves, not light.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wavefront and ray",
                statement:
                  "A wavefront joins points oscillating in phase; a ray shows the direction of travel and is perpendicular to wavefronts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wavefronts connect points in phase and rays are perpendicular to them, pointing in the direction of travel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Option (b) is the only correct statement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** rays are perpendicular to wavefronts",
            commonErrors: [
              "Thinking wavefronts join points in antiphase.",
              "Confusing rays with wavefronts.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A wave oscillates with a frequency of $8.0$ Hz. Calculate its period.",
          response: {
            type: "numeric",
            parts: [
              { label: "Period", answer: 0.125, unit: "s" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Period and frequency",
                statement: "T = 1/f",
              },
            ],
            steps: [
              {
                reasoning: "Period is the reciprocal of frequency.",
                working: "T = \\frac{1}{8.0} = 0.125 \\text{ s}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value with unit.",
                working: "T = 0.125 \\text{ s}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$T = 0.125$ s",
            commonErrors: [
              "Reporting $8.0$ s instead of the reciprocal.",
              "Forgetting the unit seconds.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A transverse wave travels along a stretched string with wavelength $0.60$ m and frequency $4.0$ Hz.",
          parts: [
            {
              label: "a",
              prompt: "State what is meant by the wavelength of the wave.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the speed of the wave on the string.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The string is replaced by a rope of the same tension but different mass per unit length. State which quantities of the wave remain unchanged and which may change, giving a reason for each.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wavelength",
                statement:
                  "The distance between two consecutive points oscillating in phase, e.g. successive crests.",
              },
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
              {
                kind: "property",
                name: "Frequency set by source",
                statement:
                  "The frequency of a wave is fixed by the source driving the oscillation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Wavelength is the distance between consecutive points oscillating in phase.",
                working: "\\lambda = \\text{distance between successive in-phase points}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Accept reference to successive crests or troughs.",
                working: "\\text{e.g. successive crests}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Apply $v = f\\lambda$.",
                working: "v = 4.0 \\times 0.60 = 2.4 \\text{ m s}^{-1}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct value with unit.",
                working: "v = 2.4 \\text{ m s}^{-1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The frequency stays the same because it is set by the source of the waves.",
                working: "f \\text{ unchanged}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The wave speed changes because it depends on the properties of the medium (the rope), so the wavelength must change too since $\\lambda = v/f$.",
                working: "v \\text{ changes} \\Rightarrow \\lambda \\text{ changes}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) distance between consecutive in-phase points (b) $v = 2.4$ m s$^{-1}$ (c) frequency unchanged (set by source); speed and wavelength change because the medium changed",
            commonErrors: [
              "Saying the wavelength is unchanged when the medium changes.",
              "Describing wavelength as the distance travelled in one second.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A wave on a string has wavelength $0.25$ m. Which change would halve the frequency of the wave while keeping the same string and tension?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Double the wavelength to $0.50$ m" },
              { id: "b", text: "Halve the wavelength to $0.125$ m" },
              { id: "c", text: "Double the wave speed" },
              { id: "d", text: "Keep the same wavelength and halve the speed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
              {
                kind: "property",
                name: "Speed set by medium",
                statement:
                  "For a given string and tension the wave speed is fixed; frequency and wavelength are inversely related.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With the same medium, $v$ is constant, so $f = v/\\lambda$; halving $f$ requires doubling $\\lambda$.",
                working: "f \\propto \\frac{1}{\\lambda} \\Rightarrow \\lambda' = 2\\lambda",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (a) doubles the wavelength to $0.50$ m, halving the frequency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** double the wavelength to $0.50$ m",
            commonErrors: [
              "Thinking halving the frequency requires halving the wavelength.",
              "Ignoring that the wave speed is fixed by the medium.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the SI unit of frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Seconds (s)" },
              { id: "b", text: "Metres (m)" },
              { id: "c", text: "Hertz (Hz)" },
              { id: "d", text: "Metres per second (m s$^{-1}$)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frequency",
                statement:
                  "Frequency is the number of oscillations per second, measured in hertz (Hz); $1\\ \\text{Hz} = 1\\ \\text{s}^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "The hertz is the SI unit of frequency.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** hertz (Hz)",
            commonErrors: [
              "Confusing the unit of frequency (Hz) with the unit of period (s).",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A wave travels at $10$ m s$^{-1}$ and has a period of $0.50$ s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency", answer: 2.0, unit: "Hz" },
              { label: "Wavelength", answer: 5.0, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Period and frequency",
                statement: "f = 1/T",
              },
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
            ],
            steps: [
              {
                reasoning: "Find the frequency from the period.",
                working: "f = \\frac{1}{0.50} = 2.0 \\text{ Hz}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply $\\lambda = v/f$.",
                working: "\\lambda = \\frac{10}{2.0} = 5.0 \\text{ m}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Frequency is correct with unit.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Wavelength is correct with unit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Frequency $= 2.0$ Hz; wavelength $= 5.0$ m",
            commonErrors: [
              "Using $f = T$ instead of $f = 1/T$.",
              "Computing $\\lambda = vf$ instead of $\\lambda = v/f$.",
            ],
          },
        },
        {
          id: "physsl-u4-wave-basics-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A continuous wave travels along a string with wavelength $0.30$ m. A student observes that $20$ crests pass a fixed point in $5.0$ s.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the frequency of the wave.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the period and the speed of the wave.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The wave then enters a second string where the wave speed is half the original value. State what happens to the frequency and calculate the new wavelength.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The wave on the string is transverse. Give one example of a longitudinal wave and state how its particle oscillations differ from those of the string wave.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Frequency from counting",
                statement: "f = number of crests / time",
              },
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
              {
                kind: "property",
                name: "Frequency set by source",
                statement:
                  "Frequency is unchanged when the wave enters a new medium; speed and wavelength change.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Frequency is the number of crests passing per second.",
                working: "f = \\frac{20}{5.0} = 4.0 \\text{ Hz}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct value with unit.",
                working: "f = 4.0 \\text{ Hz}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Period is the reciprocal of frequency.",
                working: "T = \\frac{1}{4.0} = 0.25 \\text{ s}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Speed is $v = f\\lambda = 4.0 \\times 0.30 = 1.2$ m s$^{-1}$; both values correct.",
                working:
                  "T = 0.25 \\text{ s};\\quad v = 4.0 \\times 0.30 = 1.2 \\text{ m s}^{-1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Frequency is set by the source and does not change at the boundary.",
                working: "f = 4.0 \\text{ Hz (unchanged)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "With half the speed and the same frequency, $\\lambda = v/f$ halves to $0.60/2 = 0.15$ m.",
                working: "\\lambda' = \\frac{0.60}{2} = 0.15 \\text{ m}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Sound (in air) is a longitudinal wave.",
                working: "\\text{e.g. sound}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Its particles oscillate parallel to the direction of travel, unlike the transverse string wave where oscillations are perpendicular.",
                working:
                  "\\text{parallel vs perpendicular oscillations}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $f = 4.0$ Hz (b) $T = 0.25$ s, $v = 1.2$ m s$^{-1}$ (c) frequency unchanged at $4.0$ Hz; new wavelength $0.15$ m (d) e.g. sound is longitudinal, oscillations parallel to travel",
            commonErrors: [
              "Counting intervals rather than crests when finding the frequency.",
              "Changing the frequency when the wave enters a new medium.",
              "Forgetting that speed halves, not wavelength, when the medium changes.",
            ],
          },
        },
      ],
    },
    {
      id: "physsl-u4-refraction-diffraction",
      title: "Reflection, refraction and diffraction",
      skill:
        "Apply the laws of reflection, explain refraction at a boundary in terms of wave speed and wavelength, and describe diffraction qualitatively.",
      lesson: {
        sections: [
          {
            heading: "Reflection and refraction",
            body: "When a wave meets a boundary it is partly **reflected** and partly **transmitted**. For reflection the angle of incidence equals the angle of reflection, both measured from the normal to the surface; wavefronts and rays remain perpendicular. When a wave passes into a different medium its **speed changes**. Since the frequency is fixed by the source, the wavelength must change as $\\lambda = v/f$. A wave entering a slower medium has a shorter wavelength; the wavefronts bend towards the normal at the boundary (refraction).",
          },
          {
            heading: "Diffraction",
            body: "**Diffraction** is the spreading of a wave as it passes through a gap or around the edge of an obstacle. The effect is greatest when the gap width or obstacle size is comparable to the wavelength; when the gap is much larger than the wavelength the wave continues almost straight. Diffraction is most noticeable for waves with long wavelengths, which is why radio waves (long $\\lambda$) diffract around hills while light (short $\\lambda$) does not.",
          },
          {
            heading: "Superposition",
            body: "Where two or more waves meet they obey the **principle of superposition**: the resultant displacement at a point is the vector sum of the displacements of the individual waves. After the waves pass, each continues as if the others had not been present. This principle underlies interference and standing waves.",
          },
        ],
        keyFormulas: [
          {
            name: "Law of reflection",
            statement:
              "angle of incidence = angle of reflection (both from the normal)",
          },
          {
            name: "Refraction relation",
            statement:
              "frequency constant; \\lambda = v/f so wavelength changes with speed",
          },
          {
            name: "Diffraction condition",
            statement:
              "significant diffraction when gap width \\approx \\lambda",
          },
        ],
        workedExample: {
          problem:
            "A water wave of frequency $3.0$ Hz travels at $2.4$ m s$^{-1}$ in deep water and at $1.2$ m s$^{-1}$ in shallow water. Find its wavelength in each region.",
          solution:
            "Deep water: $\\lambda = v/f = 2.4/3.0 = 0.80$ m. Shallow water: $\\lambda = 1.2/3.0 = 0.40$ m. The frequency is unchanged because it is set by the source.",
        },
      },
      questions: [
        {
          id: "physsl-u4-refraction-diffraction-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A wave travels from a medium where its speed is high into a medium where its speed is low. Which pair of changes is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Frequency decreases; wavelength unchanged" },
              { id: "b", text: "Frequency unchanged; wavelength decreases" },
              { id: "c", text: "Frequency unchanged; wavelength increases" },
              { id: "d", text: "Frequency increases; wavelength decreases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Frequency constant across boundary",
                statement:
                  "Frequency is determined by the source; when speed changes, \\lambda = v/f changes in proportion to v.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lower speed with unchanged frequency means the wavelength becomes shorter.",
                working: "\\lambda' = \\frac{v'}{f} < \\frac{v}{f} = \\lambda",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** frequency unchanged; wavelength decreases",
            commonErrors: [
              "Thinking the frequency changes at the boundary.",
              "Thinking a shorter wavelength means a higher frequency.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Monochromatic water waves of wavelength $0.20$ m approach a barrier containing a single gap. Through which gap width will the waves diffract most strongly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.0$ m" },
              { id: "b", text: "$0.50$ m" },
              { id: "c", text: "$0.10$ m" },
              { id: "d", text: "$0.20$ m" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Diffraction condition",
                statement:
                  "Diffraction is greatest when the gap width is comparable to (or smaller than) the wavelength.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The wavelength is $0.20$ m, so the gap closest to or smaller than this gives the strongest diffraction.",
                working: "0.10 \\text{ m} \\approx \\lambda",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A gap of $0.10$ m is smaller than the wavelength, giving the widest spreading.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $0.10$ m",
            commonErrors: [
              "Choosing the widest gap, forgetting that diffraction is greatest for gaps comparable to or smaller than the wavelength.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A wave in a ripple tank has frequency $4.0$ Hz and travels at $3.0$ m s$^{-1}$ in the deep region. It enters a shallow region where its speed is $1.8$ m s$^{-1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wavelength $0.45$ m; frequency $4.0$ Hz" },
              { id: "b", text: "Wavelength $0.30$ m; frequency $4.0$ Hz" },
              { id: "c", text: "Wavelength $0.75$ m; frequency $4.0$ Hz" },
              { id: "d", text: "Wavelength $0.45$ m; frequency $2.4$ Hz" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
              {
                kind: "property",
                name: "Frequency constant",
                statement:
                  "Frequency is unchanged at a boundary; only speed and wavelength change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Frequency stays at $4.0$ Hz because the source frequency cannot change at the boundary.",
                working: "f = 4.0 \\text{ Hz}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Apply $\\lambda = v/f$ in the shallow region.",
                working: "\\lambda = \\frac{1.8}{4.0} = 0.45 \\text{ m}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check the deep-region wavelength is consistent: $3.0/4.0 = 0.75$ m.",
                working: "\\lambda_{\\text{deep}} = 0.75 \\text{ m}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only option (a) is consistent with a constant frequency and the lower speed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** wavelength $0.45$ m; frequency $4.0$ Hz",
            commonErrors: [
              "Applying the speed ratio to the frequency instead of the wavelength.",
              "Forgetting that the frequency is unchanged.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A water wave of frequency $3.0$ Hz and wavelength $0.60$ m in deep water moves into a shallow region where its speed is $1.2$ m s$^{-1}$. A barrier with a single gap of width $0.50$ m is then placed in the shallow region.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the wavelength of the wave in the shallow region.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why the frequency of the wave is the same in deep and shallow water.",
              marks: 2,
            },
            { label: "c", prompt: "Define diffraction.", marks: 2 },
            {
              label: "d",
              prompt:
                "State whether the wave will diffract significantly through the gap and justify your answer.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f \\lambda",
              },
              {
                kind: "property",
                name: "Frequency constant at boundary",
                statement:
                  "The frequency is set by the source; the wavefronts arrive at the boundary at the same rate on both sides.",
              },
              {
                kind: "property",
                name: "Diffraction condition",
                statement:
                  "Diffraction is significant when the gap width is comparable to the wavelength.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Frequency is unchanged at $3.0$ Hz; apply $\\lambda = v/f$.",
                working: "\\lambda = \\frac{1.2}{3.0} = 0.40 \\text{ m}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The frequency is determined by the source and the rate at which wavefronts arrive at the boundary is the same on both sides.",
                working: "\\text{f fixed by source}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Hence the wave keeps the same frequency when it changes speed.",
                working:
                  "f_{\\text{shallow}} = f_{\\text{deep}} = 3.0\\ \\text{Hz}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Diffraction is the spreading of a wave as it passes through a gap or around an obstacle.",
                working: "\\text{spreading through gap/around obstacle}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "It occurs most noticeably when the gap width is comparable to the wavelength.",
                working: "w \\approx \\lambda",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Compare the gap width with the wavelength in the shallow region.",
                working: "\\frac{0.50}{0.40} = 1.25 \\approx 1\\lambda",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Since the gap width is comparable to the wavelength, diffraction will be significant.",
                working: "\\text{significant diffraction}",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $\\lambda = 0.40$ m (b) frequency is set by the source and wavefronts cross the boundary at the same rate (c) diffraction is the spreading of a wave through a gap or around an obstacle (d) yes, because the gap width $0.50$ m is comparable to the wavelength $0.40$ m",
            commonErrors: [
              "Comparing the gap width with the deep-water wavelength ($0.60$ m) instead of the shallow-water wavelength.",
              "Claiming the frequency changes because the speed changes.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "When a wave is reflected from a surface, which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The angle of incidence is greater than the angle of reflection.",
              },
              {
                id: "b",
                text: "The angle of incidence equals the angle of reflection, both measured from the normal.",
              },
              {
                id: "c",
                text: "The angle of incidence equals the angle of reflection, both measured from the surface.",
              },
              {
                id: "d",
                text: "The reflected wave has a lower frequency than the incident wave.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of reflection",
                statement:
                  "Angle of incidence = angle of reflection, both measured from the normal to the surface.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The law of reflection states the angles are equal and measured from the normal.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** equal angles measured from the normal",
            commonErrors: [
              "Measuring the angles from the surface instead of the normal.",
              "Thinking reflection changes the frequency.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Water waves travel from deep water into shallow water, where the wave speed is lower. What happens to the wavefronts at the boundary?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They bend away from the normal and the wavelength increases.",
              },
              {
                id: "b",
                text: "They bend towards the normal and the wavelength decreases.",
              },
              {
                id: "c",
                text: "They continue straight and the wavelength is unchanged.",
              },
              {
                id: "d",
                text: "They bend towards the normal and the frequency decreases.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Frequency constant at boundary",
                statement:
                  "Frequency is set by the source; when speed falls, \\lambda = v/f falls and wavefronts bend towards the normal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lower speed with unchanged frequency gives a shorter wavelength.",
                working: "\\lambda' = \\frac{v'}{f} < \\lambda",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The wavefronts bend towards the normal entering the slower medium; only option (b) is fully correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** bend towards the normal; wavelength decreases",
            commonErrors: [
              "Thinking the frequency changes at the boundary.",
              "Thinking a slower medium always means bending away from the normal.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A wave of frequency $5.0$ Hz travels at $2.0$ m s$^{-1}$ in a medium. Calculate its wavelength in that medium.",
          response: {
            type: "numeric",
            parts: [
              { label: "Wavelength", answer: 0.40, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "\\lambda = v/f",
              },
            ],
            steps: [
              {
                reasoning: "Apply $\\lambda = v/f$.",
                working: "\\lambda = \\frac{2.0}{5.0}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate with unit.",
                working: "\\lambda = 0.40 \\text{ m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\lambda = 0.40$ m",
            commonErrors: [
              "Multiplying $v$ by $f$.",
              "Confusing the speed with the wavelength.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A student observes diffraction of water waves ($\\lambda = 2.0$ cm) through a gap. Which gap width would produce the most spreading of the waves?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$ cm" },
              { id: "b", text: "$5.0$ cm" },
              { id: "c", text: "$2.0$ cm" },
              { id: "d", text: "$1.0$ cm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Diffraction condition",
                statement:
                  "Diffraction is greatest when the gap width is comparable to or smaller than the wavelength.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The smallest gap relative to the wavelength gives the greatest spreading.",
                working: "1.0 \\text{ cm} < \\lambda = 2.0 \\text{ cm}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A $1.0$ cm gap is smaller than the wavelength and gives maximum diffraction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $1.0$ cm",
            commonErrors: [
              "Choosing the widest gap, thinking bigger gaps spread waves more.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A wave of wavelength $0.80$ m and frequency $4.0$ Hz passes into a medium where the wave speed is half its original value. What are the new wavelength and frequency?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Wavelength $0.40$ m; frequency $4.0$ Hz",
              },
              {
                id: "b",
                text: "Wavelength $0.40$ m; frequency $2.0$ Hz",
              },
              {
                id: "c",
                text: "Wavelength $1.6$ m; frequency $4.0$ Hz",
              },
              {
                id: "d",
                text: "Wavelength $0.80$ m; frequency $2.0$ Hz",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Frequency constant at boundary",
                statement:
                  "Frequency is fixed by the source; only speed and wavelength change.",
              },
              {
                kind: "formula",
                name: "Wave equation",
                statement: "\\lambda = v/f",
              },
            ],
            steps: [
              {
                reasoning:
                  "Frequency is unchanged at $4.0$ Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Halving the speed with fixed $f$ halves the wavelength: $\\lambda' = 0.80/2 = 0.40$ m. Only option (a) matches.",
                working: "\\lambda' = \\frac{v/2}{f} = \\frac{\\lambda}{2}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** wavelength $0.40$ m; frequency $4.0$ Hz",
            commonErrors: [
              "Halving the frequency along with the speed.",
              "Doubling the wavelength when the speed decreases.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A ripple-tank wave of frequency $4.0$ Hz has speed $3.2$ m s$^{-1}$ in the deep region and speed $1.6$ m s$^{-1}$ in the shallow region.",
          response: {
            type: "numeric",
            parts: [
              { label: "Wavelength in deep region", answer: 0.80, unit: "m" },
              { label: "Wavelength in shallow region", answer: 0.40, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "\\lambda = v/f",
              },
              {
                kind: "property",
                name: "Frequency constant",
                statement:
                  "The frequency is the same in both regions because it is set by the source.",
              },
            ],
            steps: [
              {
                reasoning: "Apply $\\lambda = v/f$ in the deep region.",
                working: "\\lambda_{\\text{deep}} = \\frac{3.2}{4.0} = 0.80 \\text{ m}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply $\\lambda = v/f$ in the shallow region.",
                working: "\\lambda_{\\text{shallow}} = \\frac{1.6}{4.0} = 0.40 \\text{ m}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Frequency used is the same $4.0$ Hz in both regions.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Both wavelengths correct with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deep: $\\lambda = 0.80$ m; shallow: $\\lambda = 0.40$ m",
            commonErrors: [
              "Using a different frequency in the shallow region.",
              "Dividing frequency by speed instead of speed by frequency.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Light of wavelength $500$ nm passes through a gap of width $50$ nm. Compared with the light passing through a gap of width $500$ nm, the light through the smaller gap will",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "diffract more because the gap is closer to the wavelength" },
              { id: "b", text: "diffract less because the gap is too small" },
              { id: "c", text: "diffract the same amount" },
              { id: "d", text: "not diffract at all" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Diffraction condition",
                statement:
                  "Diffraction is most noticeable when the gap width is comparable to the wavelength.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A gap of $50$ nm is much smaller than the wavelength $500$ nm, so the waves spread out widely; a gap of $500$ nm equals the wavelength.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The smaller gap gives greater spreading because diffraction is strongest for gaps comparable to or smaller than the wavelength.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** diffract more because the gap is closer to the wavelength",
            commonErrors: [
              "Thinking a gap smaller than the wavelength stops diffraction.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A wave is incident on a boundary between two media and partly passes through a narrow gap in a barrier.",
          parts: [
            {
              label: "a",
              prompt:
                "State the law of reflection for the reflected wave.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The wave passes into a medium where its speed is lower. Explain what happens to its wavelength and to the direction of the wavefronts.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Define diffraction and state the condition under which it is most noticeable.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Law of reflection",
                statement:
                  "Angle of incidence = angle of reflection, measured from the normal.",
              },
              {
                kind: "property",
                name: "Frequency constant",
                statement:
                  "\\lambda = v/f: lower speed gives shorter wavelength and wavefronts bend towards the normal.",
              },
              {
                kind: "definition",
                name: "Diffraction",
                statement:
                  "Spreading of a wave through a gap or around an obstacle; greatest when gap width \\approx \\lambda.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The angle of incidence equals the angle of reflection.",
                working: "\\theta_i = \\theta_r",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Both angles are measured from the normal to the surface.",
                working: "\\text{measured from the normal}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Frequency is unchanged; lower speed means shorter wavelength.",
                working: "\\lambda' = \\frac{v'}{f} < \\lambda",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The wavefronts bend towards the normal at the boundary.",
                working: "\\text{wavefronts bend towards normal}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Diffraction is the spreading of a wave as it passes through a gap or around an obstacle.",
                working: "\\text{spreading through gap / around obstacle}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "It is most noticeable when the gap width is comparable to the wavelength.",
                working: "w \\approx \\lambda",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) angle of incidence = angle of reflection, both from the normal (b) wavelength decreases and wavefronts bend towards the normal (c) diffraction is spreading through a gap or around an obstacle, greatest when the gap width is comparable to the wavelength",
            commonErrors: [
              "Measuring reflection angles from the surface.",
              "Forgetting that the frequency stays the same at the boundary.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Radio waves and light both meet a hill in their path. Why does the radio reception bend around the hill while the light does not?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Radio waves travel faster than light.",
              },
              {
                id: "b",
                text: "Radio waves have much longer wavelengths, comparable to the size of the hill, so they diffract significantly.",
              },
              {
                id: "c",
                text: "Light cannot diffract because it is not a wave.",
              },
              {
                id: "d",
                text: "Radio waves are reflected by the hill while light is absorbed.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Diffraction condition",
                statement:
                  "Diffraction is significant when the obstacle or gap size is comparable to the wavelength.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Radio wavelengths are comparable to hill sizes so they diffract; light wavelengths are far smaller so diffraction is negligible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Option (b) gives the correct explanation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** longer wavelengths comparable to the obstacle size",
            commonErrors: [
              "Thinking diffraction depends on wave speed rather than wavelength.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the principle of superposition?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Waves always cancel each other when they meet.",
              },
              {
                id: "b",
                text: "The resultant displacement at a point is the sum of the displacements of the individual waves.",
              },
              {
                id: "c",
                text: "Two waves cannot occupy the same region of space.",
              },
              {
                id: "d",
                text: "The faster wave is absorbed by the slower wave.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Superposition",
                statement:
                  "When two or more waves meet, the resultant displacement at a point is the vector sum of the individual displacements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Superposition means displacements add at each point.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** displacements add at each point",
            commonErrors: [
              "Thinking waves destroy each other permanently when they overlap.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A wave has speed $6.0$ m s$^{-1}$ and wavelength $1.5$ m in region A. In region B its speed is $3.0$ m s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency", answer: 4.0, unit: "Hz" },
              { label: "Wavelength in region B", answer: 0.75, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "v = f\\lambda",
              },
              {
                kind: "property",
                name: "Frequency constant",
                statement:
                  "Frequency is unchanged between regions; wavelength changes with speed.",
              },
            ],
            steps: [
              {
                reasoning: "Find the frequency from region A.",
                working: "f = \\frac{6.0}{1.5} = 4.0 \\text{ Hz}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Frequency stays $4.0$ Hz in region B.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply $\\lambda = v/f$ in region B.",
                working: "\\lambda_B = \\frac{3.0}{4.0} = 0.75 \\text{ m}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both answers correct with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Frequency $= 4.0$ Hz; wavelength in region B $= 0.75$ m",
            commonErrors: [
              "Changing the frequency in region B.",
              "Using the wavelength of region A in region B.",
            ],
          },
        },
        {
          id: "physsl-u4-refraction-diffraction-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student investigates diffraction using a ripple tank. Straight water waves of wavelength $0.20$ m approach a barrier with a single gap.",
          parts: [
            {
              label: "a",
              prompt:
                "State what happens to the waves after they pass through the gap.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The gap width is increased from $0.20$ m to $2.0$ m. State and explain the effect on the diffraction pattern.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The frequency of the waves is doubled while the wave speed stays the same. Calculate the new wavelength and explain how the diffraction through a $0.20$ m gap changes.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diffraction",
                statement:
                  "Spreading of a wave through a gap or around an obstacle; greatest when gap width \\approx \\lambda.",
              },
              {
                kind: "formula",
                name: "Wave equation",
                statement: "\\lambda = v/f",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The waves spread out (diffract) as they pass through the gap.",
                working: "\\text{waves spread into a fan shape}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "The spreading is significant because the gap width is comparable to the wavelength.",
                working: "w = 0.20 \\text{ m} = \\lambda",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "With a gap much larger than the wavelength, the waves continue almost straight through.",
                working: "w = 2.0 \\text{ m} \\gg \\lambda",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Diffraction is much less noticeable because the gap is no longer comparable to the wavelength.",
                working: "\\text{less spreading}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Doubling $f$ with constant $v$ halves the wavelength: $\\lambda' = 0.20/2 = 0.10$ m.",
                working: "\\lambda' = \\frac{v}{2f} = \\frac{\\lambda}{2} = 0.10 \\text{ m}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The gap of $0.20$ m is now twice the wavelength, so diffraction through it becomes less pronounced.",
                working: "\\frac{0.20}{0.10} = 2 \\Rightarrow \\text{less diffraction}",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) the waves spread out (diffract) because the gap width equals the wavelength (b) the wider gap gives much less diffraction because it is much larger than the wavelength (c) new wavelength $0.10$ m; the gap is now $2\\lambda$ so diffraction is less noticeable",
            commonErrors: [
              "Thinking a larger gap always gives more diffraction.",
              "Doubling the wavelength instead of halving it when the frequency doubles.",
            ],
          },
        },
      ],
    },
  ],
};
