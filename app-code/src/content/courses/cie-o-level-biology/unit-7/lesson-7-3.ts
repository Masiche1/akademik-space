import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "olbio-u7-lesson-7-3",
  code: "7-3",
  title: "Sense Organs and the Brain",
  goal: "I CAN describe receptors, the pupil reflex, and the regions and functions of the brain.",
  standards: ["5090 7.1"],
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
      id: "olbio-u7-sense-organs",
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
          id: "olbio-u7-sense-organs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a receptor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A cell that detects a stimulus" },
              { id: "b", text: "A muscle that contracts" },
              { id: "c", text: "A gland producing hormones" },
              { id: "d", text: "A blood vessel" },
            ],
            correctChoiceId: "a",
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
          id: "olbio-u7-sense-organs-q2",
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
          id: "olbio-u7-sense-organs-q3",
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
          id: "olbio-u7-sense-organs-q4",
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
      ],
    },
    {
      id: "olbio-u7-brain",
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
          id: "olbio-u7-brain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which brain region controls breathing and heart rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Medulla oblongata" },
              { id: "b", text: "Cerebrum" },
              { id: "c", text: "Cerebellum" },
              { id: "d", text: "Spinal cord" },
            ],
            correctChoiceId: "a",
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
          id: "olbio-u7-brain-q2",
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
          id: "olbio-u7-brain-q3",
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
          id: "olbio-u7-brain-q4",
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
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u7-brain-notes",
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
