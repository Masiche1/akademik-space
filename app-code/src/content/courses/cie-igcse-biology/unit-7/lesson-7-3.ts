import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "cieb-u7-lesson-7-3",
  code: "7-3",
  title: "Sense Organs and the Brain",
  goal: "I CAN describe receptors, the pupil reflex, and the regions and functions of the brain.",
  standards: ["0653 7.1"],
  vocabulary: [
    { term: "Receptor", definition: "Specialised cell detecting a stimulus (light, sound, touch, temperature)." },
    { term: "Pupil reflex", definition: "Automatic adjustment of pupil size in response to light intensity." },
    { term: "Cerebrum", definition: "Largest brain region; conscious thought, memory, voluntary actions." },
    { term: "Cerebellum", definition: "Coordinates balance and fine motor control." },
    { term: "Medulla oblongata", definition: "Controls involuntary functions: breathing, heart rate, blood pressure." },
    { term: "Iris", definition: "Muscular ring controlling pupil size." },
    { term: "Retina", definition: "Light-sensitive layer at back of eye containing photoreceptors." },
    { term: "Optic nerve", definition: "Carries impulses from retina to brain." },
  ],
  concepts: [
    {
      id: "cieb-u7-sense-organs",
      title: "Receptors and the pupil reflex",
      skill: "Describe receptors, the eye's response to light, and the pupil reflex arc.",
      lesson: {
        sections: [
          {
            heading: "Receptors",
            body: "Specialised cells detect stimuli: light (retina), sound (cochlea), touch/pressure/pain/temperature (skin). Receptors generate nerve impulses sent to CNS.",
          },
          {
            heading: "Eye response to light",
            body: "- **Bright light**: pupil constricts (smaller) → less light enters → protects retina.\n- **Dim light**: pupil dilates (larger) → more light enters → better vision.",
          },
          {
            heading: "Pupil reflex arc",
            body: "Light receptors in retina → sensory neuron → brain (medulla) → motor neuron → iris muscles → pupil constricts/dilates. Automatic and protective.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does the pupil constrict in bright light?",
          solution: "To reduce the amount of light entering the eye, preventing damage to the retina.",
        },
      },
      questions: [
        {
          id: "cieb-u7-sense-organs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a receptor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A blood vessel" },
              { id: "b", text: "A muscle that contracts" },
              { id: "c", text: "A cell that detects a stimulus" },
              { id: "d", text: "A gland producing hormones" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Receptor", statement: "Cell detecting stimuli (light, sound, touch)." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{detects stimulus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A cell that detects a stimulus",
            commonErrors: ["Choosing effector — that's the responder, not detector."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State what happens to the pupil in bright vs dim light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pupil reflex", statement: "Bright → constrict; dim → dilate." },
            ],
            steps: [
              { reasoning: "Bright light response.", working: "\\text{constrict}", marks: 1, markCode: "M" },
              { reasoning: "Dim light response.", working: "\\text{dilate}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In bright light the pupil constricts (smaller); in dim light it dilates (larger).",
            commonErrors: ["Reversing the responses."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the pupil reflex.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pupil reflex", statement: "Retina receptors → brain → iris muscles → pupil adjusts." },
            ],
            steps: [
              { reasoning: "Light detected by retinal receptors.", working: "\\text{retina}", marks: 1, markCode: "M" },
              { reasoning: "Impulse to brain via optic nerve.", working: "\\text{optic nerve}", marks: 1, markCode: "M" },
              { reasoning: "Motor impulse to iris muscles.", working: "\\text{iris muscles}", marks: 1, markCode: "M" },
              { reasoning: "Pupil constricts or dilates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light is detected by retinal receptors; impulses travel via optic nerve to the brain, which sends motor impulses to the iris muscles to constrict or dilate the pupil automatically.",
            commonErrors: ["Saying 'eye decides' — the brain coordinates via reflex arc."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how the eye responds to changes in light intensity.",
          parts: [
            { label: "a", prompt: "State the two responses of the pupil.", marks: 2 },
            { label: "b", prompt: "Explain the purpose of each response.", marks: 3 },
            { label: "c", prompt: "Describe the reflex arc involved.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pupil reflex", statement: "Constrict in bright (protect retina), dilate in dim (more light)." },
            ],
            steps: [
              { part: "a", reasoning: "Constriction + dilation.", working: "\\text{constrict/dilate}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Constriction: less light, protect retina.", working: "\\text{protect retina}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dilation: more light enters.", working: "\\text{more light}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Purpose of each.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Receptor: retinal cells.", working: "\\text{retina}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sensory → brain → motor → iris.", working: "\\text{arc}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Iris muscles contract/relax.", working: "\\text{iris}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete reflex description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) constrict/dilate (b) protect/more light (c) retina→brain→iris reflex arc",
            commonErrors: ["In (b) saying dilation is 'to see colours' — it's for more light in dim conditions."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which receptor detects light in the eye?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hair cells in the ear" },
              { id: "b", text: "Photoreceptors in the retina" },
              { id: "c", text: "Receptors in the iris" },
              { id: "d", text: "Receptors in the cornea" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Photoreceptors", statement: "Light-sensitive cells in the retina detect light." },
            ],
            steps: [
              { reasoning: "Match receptor to stimulus.", working: "\\text{retina} \\to \\text{light}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Photoreceptors in the retina",
            commonErrors: ["Choosing iris — the iris controls pupil size, it doesn't detect light."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two reasons why the pupil constricts in bright light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pupil constriction", statement: "Reduces light entry to protect the retina." },
            ],
            steps: [
              { reasoning: "Less light enters the eye.", working: "\\text{less light}", marks: 1, markCode: "M" },
              { reasoning: "Protects the retina from damage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "To reduce the amount of light entering the eye and to protect the light-sensitive retina from damage.",
            commonErrors: ["Saying 'to improve focus' — constriction controls light intensity, not focus."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pupil diameter changes from 8 mm in dim light to 2 mm in bright light. Calculate the decrease in pupil diameter.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, unit: "mm" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Change", statement: "$\\text{decrease} = \\text{initial} - \\text{final}$" },
            ],
            steps: [
              { reasoning: "Subtract the final value from the initial value.", working: "8 - 2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "6 mm",
            commonErrors: ["Dividing instead of subtracting."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which part of the eye contains the light-sensitive cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iris" },
              { id: "b", text: "Lens" },
              { id: "c", text: "Retina" },
              { id: "d", text: "Cornea" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Retina", statement: "Light-sensitive layer containing photoreceptors." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "\\text{retina}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Retina",
            commonErrors: ["Choosing iris — that controls pupil size."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the reflex arc of the pupil reflex when a person walks from a dim room into bright sunlight.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pupil reflex arc", statement: "Retinal receptors → optic nerve → brain → motor neurons → iris muscles → constriction." },
            ],
            steps: [
              { reasoning: "Light detected by retinal photoreceptors.", working: "\\text{retina}", marks: 1, markCode: "M" },
              { reasoning: "Impulse travels via optic nerve to brain.", working: "\\text{optic nerve}", marks: 1, markCode: "M" },
              { reasoning: "Motor impulse sent to iris muscles.", working: "\\text{iris muscles}", marks: 1, markCode: "M" },
              { reasoning: "Pupil constricts automatically.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bright light is detected by photoreceptors in the retina; impulses travel via the optic nerve to the brain, which sends motor impulses to the iris muscles, causing the pupil to constrict automatically.",
            commonErrors: ["Saying the eye 'decides' on its own — the brain coordinates the reflex."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's pupil diameter is 6 mm in dim light and 3 mm in bright light. Calculate the percentage decrease in pupil diameter.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ decrease} = \\dfrac{\\text{initial} - \\text{final}}{\\text{initial}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the percentage change formula.", working: "\\frac{6 - 3}{6} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Dividing by the final value (3) instead of the initial value (6)."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between receptors in the skin and photoreceptors in the retina.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Receptor types", statement: "Skin receptors detect touch/temperature/pain; retinal photoreceptors detect light." },
            ],
            steps: [
              { reasoning: "Different stimuli detected.", working: "\\text{touch/temp vs light}", marks: 1, markCode: "M" },
              { reasoning: "Different locations in body.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Skin receptors detect touch, pressure, temperature and pain, while retinal photoreceptors detect light — they respond to different stimuli in different parts of the body.",
            commonErrors: ["Saying both 'detect light' — skin receptors detect mechanical/thermal stimuli."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The optic nerve carries impulses from the retina to the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lens" },
              { id: "b", text: "Brain" },
              { id: "c", text: "Iris" },
              { id: "d", text: "Spinal cord only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Optic nerve", statement: "Carries visual impulses from retina to brain." },
            ],
            steps: [
              { reasoning: "Recall the pathway.", working: "\\text{retina} \\to \\text{brain}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Brain",
            commonErrors: ["Choosing iris — the iris is an effector for the pupil reflex, not a destination."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how different receptors in the skin allow us to detect touch, temperature and pain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Skin receptors", statement: "Different specialised receptors detect different stimuli and generate impulses." },
            ],
            steps: [
              { reasoning: "Different receptor types for different stimuli.", working: "\\text{specialised receptors}", marks: 1, markCode: "M" },
              { reasoning: "Each generates nerve impulses when stimulated.", working: "\\text{impulses}", marks: 1, markCode: "M" },
              { reasoning: "Impulses travel via sensory neurons to CNS.", working: "\\text{sensory} \\to \\text{CNS}", marks: 1, markCode: "M" },
              { reasoning: "Brain interprets the sensation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specialised receptors in the skin detect different stimuli (touch, temperature, pain); each generates nerve impulses carried by sensory neurons to the CNS, where the brain interprets the sensation.",
            commonErrors: ["Saying 'the skin thinks' — receptors just generate impulses; the brain interprets."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pupil dilates from 4 mm to 6 mm when light intensity decreases. Calculate the percentage increase in pupil diameter.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ increase} = \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the percentage change formula.", working: "\\frac{6 - 4}{4} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Dividing by the new value (6) instead of the original (4)."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the pupil reflex is described as protective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pupil reflex purpose", statement: "Automatically adjusts light entry to protect retina." },
            ],
            steps: [
              { reasoning: "Constriction in bright light reduces light intensity on retina.", working: "\\text{less light on retina}", marks: 1, markCode: "M" },
              { reasoning: "Prevents damage to photoreceptors.", working: "\\text{protects retina}", marks: 1, markCode: "M" },
              { reasoning: "Automatic — acts without conscious control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The pupil reflex automatically constricts the pupil in bright light to reduce light intensity on the retina, preventing damage to the photoreceptors — without needing conscious control.",
            commonErrors: ["Saying it 'helps you see better in the dark' — that's dilation's role; protection is about bright light."],
          },
        },
        {
          id: "cieb-u7-sense-organs-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A person walks quickly from a dark cinema into bright sunlight.",
          parts: [
            { label: "a", prompt: "State what happens to the pupil and why.", marks: 2 },
            { label: "b", prompt: "Describe the reflex arc involved.", marks: 3 },
            { label: "c", prompt: "Explain the purpose of this response.", marks: 2 },
            { label: "d", prompt: "Explain what would happen if the person then walked back into the dark.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pupil reflex scenario", statement: "Bright → constrict (protect); dim → dilate (more light)." },
            ],
            steps: [
              { part: "a", reasoning: "Pupil constricts.", working: "\\text{constricts}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "To reduce light entering the eye.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Retinal receptors detect light.", working: "\\text{retina}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Via optic nerve to brain.", working: "\\text{optic nerve}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Motor impulse to iris muscles.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Protects retina from bright light.", working: "\\text{protect retina}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Automatic and rapid.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Pupil dilates in dim light.", working: "\\text{dilates}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "To let more light in for vision.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pupil constricts to reduce light entry (b) retina→optic nerve→brain→iris (c) protects retina (d) pupil dilates to admit more light",
            commonErrors: ["In (d) saying pupil stays small — it dilates in dim light."],
          },
        },
      ],
    },
    {
      id: "cieb-u7-brain",
      title: "The brain",
      skill: "Describe the regions of the brain and their functions.",
      lesson: {
        sections: [
          {
            heading: "Brain regions",
            body: "| Region | Function |\n|---|---|\n| Cerebrum | conscious thought, memory, voluntary actions, senses |\n| Cerebellum | balance, posture, fine motor coordination |\n| Medulla oblongata | involuntary: breathing, heart rate, blood pressure |",
          },
          {
            heading: "CNS protection",
            body: "Brain and spinal cord protected by: skull/vertebrae (bones), meninges (membranes), cerebrospinal fluid (cushion), blood-brain barrier.",
          },
          {
            heading: "Conscious vs unconscious",
            body: "- **Conscious**: voluntary actions, thinking — cerebrum.\n- **Unconscious/involuntary**: breathing, heart rate — medulla; balance — cerebellum.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which brain region controls breathing?",
          solution: "Medulla oblongata — it controls involuntary functions including breathing and heart rate.",
        },
      },
      questions: [
        {
          id: "cieb-u7-brain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which brain region controls breathing and heart rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cerebellum" },
              { id: "b", text: "Medulla oblongata" },
              { id: "c", text: "Spinal cord" },
              { id: "d", text: "Cerebrum" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Medulla", statement: "Controls involuntary functions: breathing, heart rate." },
            ],
            steps: [
              { reasoning: "Match region to function.", working: "\\text{medulla}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Medulla oblongata",
            commonErrors: ["Choosing cerebrum — that's conscious thought."],
          },
        },
        {
          id: "cieb-u7-brain-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the cerebellum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cerebellum", statement: "Coordinates balance and fine motor control." },
            ],
            steps: [
              { reasoning: "Give function.", working: "\\text{balance/coordination}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The cerebellum coordinates balance, posture and fine motor movements.",
            commonErrors: ["Saying 'thinking' — that's cerebrum."],
          },
        },
        {
          id: "cieb-u7-brain-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between conscious and unconscious actions and which brain regions control them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Brain regions", statement: "Cerebrum: conscious. Medulla: involuntary. Cerebellum: coordination." },
            ],
            steps: [
              { reasoning: "Conscious: voluntary, cerebrum.", working: "\\text{cerebrum}", marks: 1, markCode: "M" },
              { reasoning: "Unconscious: involuntary, medulla.", working: "\\text{medulla}", marks: 1, markCode: "M" },
              { reasoning: "Examples each.", working: "\\text{thinking vs breathing}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conscious actions (thinking, voluntary movement) are controlled by the cerebrum; unconscious actions (breathing, heart rate) by the medulla; balance/coordination by the cerebellum.",
            commonErrors: ["Saying 'all actions are conscious' — breathing/heart rate are involuntary."],
          },
        },
        {
          id: "cieb-u7-brain-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the three main regions of the brain and their functions.",
          parts: [
            { label: "a", prompt: "Name and describe the cerebrum.", marks: 3 },
            { label: "b", prompt: "Name and describe the cerebellum.", marks: 3 },
            { label: "c", prompt: "Name and describe the medulla oblongata.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Brain regions", statement: "Cerebrum: conscious; cerebellum: balance; medulla: involuntary." },
            ],
            steps: [
              { part: "a", reasoning: "Cerebrum: largest region.", working: "\\text{cerebrum}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conscious thought/memory/voluntary.", working: "\\text{conscious}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cerebellum: coordination.", working: "\\text{cerebellum}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balance/posture/fine movement.", working: "\\text{balance}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Medulla: involuntary.", working: "\\text{medulla}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Breathing/heart rate/BP.", working: "\\text{breathing/HR}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cerebrum: conscious thought/memory (b) cerebellum: balance/coordination (c) medulla: breathing/heart rate",
            commonErrors: ["Swapping cerebellum and medulla functions."],
          },
        },
        {
          id: "cieb-u7-brain-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which brain region is responsible for conscious thought and memory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Medulla oblongata" },
              { id: "b", text: "Cerebrum" },
              { id: "c", text: "Cerebellum" },
              { id: "d", text: "Spinal cord" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cerebrum", statement: "Largest region; conscious thought, memory, voluntary actions." },
            ],
            steps: [
              { reasoning: "Match region to function.", working: "\\text{cerebrum}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cerebrum",
            commonErrors: ["Choosing cerebellum — that's balance and coordination."],
          },
        },
        {
          id: "cieb-u7-brain-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two functions of the cerebrum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cerebrum", statement: "Conscious thought, memory, voluntary actions, senses." },
            ],
            steps: [
              { reasoning: "Give two functions.", working: "\\text{thinking, memory, voluntary}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conscious thought/reasoning, memory, and control of voluntary actions (any two).",
            commonErrors: ["Giving 'breathing' — that's the medulla."],
          },
        },
        {
          id: "cieb-u7-brain-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person has a body mass of 60 kg and the brain makes up about 2% of body mass. Calculate the mass of the brain.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.2, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{part} = \\dfrac{\\%}{100} \\times \\text{whole}$" },
            ],
            steps: [
              { reasoning: "Calculate 2% of 60 kg.", working: "0.02 \\times 60", marks: 1, markCode: "M" },
              { reasoning: "Give the answer with units.", working: "1.2\\,\\text{kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.2 kg",
            commonErrors: ["Calculating 2% as 2 rather than 0.02, giving 120 kg."],
          },
        },
        {
          id: "cieb-u7-brain-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Damage to which brain region would most directly affect balance and coordination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cerebrum" },
              { id: "b", text: "Spinal cord" },
              { id: "c", text: "Medulla oblongata" },
              { id: "d", text: "Cerebellum" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cerebellum", statement: "Coordinates balance, posture and fine motor control." },
            ],
            steps: [
              { reasoning: "Match region to function.", working: "\\text{cerebellum}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cerebellum",
            commonErrors: ["Choosing cerebrum — that's conscious thought, not balance."],
          },
        },
        {
          id: "cieb-u7-brain-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the central nervous system (brain and spinal cord) is protected.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "CNS protection", statement: "Bones, meninges, cerebrospinal fluid cushion the CNS." },
            ],
            steps: [
              { reasoning: "Skull and vertebrae provide bony protection.", working: "\\text{bones}", marks: 1, markCode: "M" },
              { reasoning: "Meninges are protective membranes.", working: "\\text{meninges}", marks: 1, markCode: "M" },
              { reasoning: "Cerebrospinal fluid cushions the brain.", working: "\\text{CSF}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: layered protection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The brain is protected by the skull, meninges (membranes) and cerebrospinal fluid which cushions it; the spinal cord is protected by the vertebrae.",
            commonErrors: ["Only mentioning the skull — meninges and CSF also protect."],
          },
        },
        {
          id: "cieb-u7-brain-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "During exercise a person's heart rate increases from 60 to 90 beats per minute. Calculate the percentage increase.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ increase} = \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the percentage change formula.", working: "\\frac{90 - 60}{60} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Dividing by the new value (90) instead of the original (60)."],
          },
        },
        {
          id: "cieb-u7-brain-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cerebrospinal fluid surrounds the brain and spinal cord. Its main role is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cushion and protect the CNS" },
              { id: "b", text: "Produce hormones" },
              { id: "c", text: "Transmit nerve impulses" },
              { id: "d", text: "Carry oxygen to neurons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cerebrospinal fluid", statement: "Liquid cushion protecting brain and spinal cord." },
            ],
            steps: [
              { reasoning: "Recall its function.", working: "\\text{cushion/protect}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cushion and protect the CNS",
            commonErrors: ["Choosing 'carry oxygen' — blood does that, not CSF."],
          },
        },
        {
          id: "cieb-u7-brain-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's resting heart rate is 70 beats per minute. During exercise the rate rises by 40%. Calculate the new heart rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 98, unit: "beats/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\text{new} = \\text{old} \\times \\left(1 + \\dfrac{40}{100}\\right)$" },
            ],
            steps: [
              { reasoning: "Calculate 40% of 70 and add it.", working: "70 + 0.40 \\times 70 = 70 + 28", marks: 1, markCode: "M" },
              { reasoning: "Give the answer with units.", working: "98\\,\\text{beats/min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "98 beats per minute",
            commonErrors: ["Giving 28 (the increase) as the new rate instead of adding to 70."],
          },
        },
        {
          id: "cieb-u7-brain-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A person touches a hot object and immediately withdraws their hand, then feels pain a moment later. Explain the roles of the reflex arc and the brain in this sequence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex + brain", statement: "Spinal reflex acts first (fast); brain processes sensation afterwards." },
            ],
            steps: [
              { reasoning: "Withdrawal is a spinal reflex — no brain delay.", working: "\\text{spinal reflex}", marks: 1, markCode: "M" },
              { reasoning: "Pain signal travels to brain for awareness.", working: "\\text{pain to brain}", marks: 1, markCode: "M" },
              { reasoning: "Cerebrum processes the conscious sensation.", working: "\\text{cerebrum}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: protective then conscious.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The withdrawal is an automatic spinal reflex acting before brain processing; the pain signal then reaches the cerebrum which produces the conscious feeling of pain — so the hand moves before the pain is felt.",
            commonErrors: ["Saying the brain sends the withdrawal signal — the reflex bypasses it."],
          },
        },
        {
          id: "cieb-u7-brain-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the functions of the cerebrum and the cerebellum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cerebrum vs cerebellum", statement: "Cerebrum: conscious thought/memory. Cerebellum: balance/coordination." },
            ],
            steps: [
              { reasoning: "Cerebrum function.", working: "\\text{conscious/memory}", marks: 1, markCode: "M" },
              { reasoning: "Cerebellum function.", working: "\\text{balance/coordination}", marks: 1, markCode: "M" },
              { reasoning: "Conclude comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The cerebrum controls conscious thought, memory and voluntary actions; the cerebellum coordinates balance, posture and fine motor movements.",
            commonErrors: ["Reversing the two regions' functions."],
          },
        },
        {
          id: "cieb-u7-brain-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an involuntary action controlled by the medulla oblongata?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading" },
              { id: "b", text: "Writing" },
              { id: "c", text: "Voluntary movement of arm" },
              { id: "d", text: "Breathing" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Medulla", statement: "Controls involuntary functions: breathing, heart rate, blood pressure." },
            ],
            steps: [
              { reasoning: "Match action to control.", working: "\\text{breathing}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Breathing",
            commonErrors: ["Choosing writing — that's voluntary (cerebrum)."],
          },
        },
        {
          id: "cieb-u7-brain-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student is learning to ride a bicycle for the first time.",
          parts: [
            { label: "a", prompt: "State which brain region coordinates balance during riding.", marks: 2 },
            { label: "b", prompt: "State which region controls conscious learning of the skill.", marks: 2 },
            { label: "c", prompt: "State which region keeps breathing and heart rate steady while riding.", marks: 2 },
            { label: "d", prompt: "Explain how the CNS is protected during such activities.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Brain regions in context", statement: "Cerebellum: balance; cerebrum: learning; medulla: involuntary; bones+meninges+CSF protect." },
            ],
            steps: [
              { part: "a", reasoning: "Cerebellum.", working: "\\text{cerebellum}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Balance/coordination role.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cerebrum.", working: "\\text{cerebrum}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conscious learning/voluntary control.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Medulla oblongata.", working: "\\text{medulla}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Breathing/heart rate involuntary.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Skull + vertebrae bones.", working: "\\text{bones}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Meninges and cerebrospinal fluid.", working: "\\text{meninges + CSF}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Complete protection description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cerebellum — balance (b) cerebrum — conscious learning (c) medulla — breathing/heart rate (d) skull/vertebrae + meninges + CSF",
            commonErrors: ["In (d) forgetting CSF — it's a key protective layer."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u7-brain-notes",
      title: "Sense organs and brain — revision notes",
      summary: "Receptors, pupil reflex, brain regions and functions.",
      sections: [
        {
          heading: "Receptors and pupil reflex",
          body: "Receptors detect stimuli → impulses to CNS. Pupil reflex: bright → constrict (protect retina); dim → dilate (more light). Arc: retina → brain → iris.",
        },
        {
          heading: "Brain",
          body: "Cerebrum: conscious thought/memory/voluntary. Cerebellum: balance/coordination. Medulla: breathing/heart rate/BP (involuntary). Protected by skull, meninges, CSF.",
        },
        {
          heading: "Exam technique",
          body: "- Pupil reflex: constrict in BRIGHT, dilate in DIM — don't reverse.\n- Medulla = involuntary; cerebrum = voluntary/conscious.",
        },
      ],
    },
  ],
};
