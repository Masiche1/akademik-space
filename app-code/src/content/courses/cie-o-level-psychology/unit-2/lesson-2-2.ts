import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "olep-u2-lesson-2-2",
  code: "2-2",
  title: "Perception",
  goal: "I CAN describe how we perceive the world and visual illusions.",
  standards: ["2219: Cognitive processes — perception"],
  vocabulary: [
    {
      term: "Perception",
      definition: "Interpretation of sensory information by the brain.",
    },
    {
      term: "Top-down processing",
      definition: "Using prior knowledge/expectations to interpret stimuli.",
    },
    {
      term: "Bottom-up processing",
      definition: "Building perception from raw sensory data.",
    },
    { term: "Visual illusion", definition: "Misperception of visual stimuli." },
    {
      term: "Depth cues",
      definition: "Monocular/binocular cues for judging distance.",
    },
    {
      term: "Gestalt principles",
      definition: "Rules for organising visual elements into wholes.",
    },
  ],
  concepts: [
    {
      id: "olep-u2-perception",
      title: "Perception and processing",
      skill: "Describe top-down and bottom-up processing in perception.",
      lesson: {
        sections: [
          {
            heading: "Perception",
            body: "Perception = interpretation of sensory input. Same stimulus can be perceived differently based on context, expectations, culture. Brain actively constructs reality.",
          },
          {
            heading: "Top-down vs bottom-up",
            body: "Top-down: expectations/knowledge guide interpretation (reading fast, seeing faces in clouds). Bottom-up: raw sensory data processed upward (detecting a faint sound). Usually both work together.",
          },
          {
            heading: "Gestalt principles",
            body: "Figure-ground: separate object from background. Closure: fill in missing parts. Proximity: group nearby items. Similarity: group similar items. Continuity: follow smooth lines.",
          },
        ],
        keyFormulas: [
          {
            name: "Perception",
            statement:
              "Top-down=expectations; Bottom-up=sensory data; Gestalt=grouping rules.",
          },
        ],
        workedExample: {
          problem: "Why do we see faces in clouds?",
          solution:
            "Top-down processing — brain applies face-recognition expectations to ambiguous stimuli.",
        },
      },
      questions: [
        {
          id: "olep-u2-per-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is perception?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Detection of stimuli" },
              { id: "b", text: "Memory storage" },
              { id: "c", text: "Interpretation of sensory information" },
              { id: "d", text: "Physical sensation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perception",
                statement: "Interpretation of sensory info.",
              },
            ],
            steps: [
              {
                reasoning: "Perception = interpretation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Interpretation of sensory information",
            commonErrors: ["Confusing with sensation."],
          },
        },
        {
          id: "olep-u2-per-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is top-down processing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Top-down",
                statement: "Expectations guide interpretation.",
              },
            ],
            steps: [
              {
                reasoning: "Prior knowledge/expectations used.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Guides interpretation of stimuli.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Using expectations/knowledge to interpret stimuli.",
            commonErrors: ["Confusing with bottom-up."],
          },
        },
        {
          id: "olep-u2-per-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two Gestalt principles of perception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gestalt",
                statement:
                  "Figure-ground, closure, proximity, similarity, continuity.",
              },
            ],
            steps: [
              { reasoning: "Any two principles.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly explained.", marks: 1, markCode: "AO1" },
              { reasoning: "Examples.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Figure-ground, closure, proximity, similarity, continuity.",
            commonErrors: ["Only one principle."],
          },
        },
        {
          id: "olep-u2-per-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Perception.",
          parts: [
            { label: "a", prompt: "Define perception.", marks: 1 },
            { label: "b", prompt: "Top-down vs bottom-up?", marks: 3 },
            { label: "c", prompt: "Two Gestalt principles?", marks: 3 },
            { label: "d", prompt: "How do illusions occur?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perception",
                statement: "Definition+processing+Gestalt+illusions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Interpretation of sensory info.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Top-down=expectations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Bottom-up=sensory data.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Comparison clear.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two principles.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Explained.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Examples.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Brain misinterprets stimuli.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Top-down errors.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) perception (b) processing (c) Gestalt (d) illusions",
          },
        },
        {
          id: "olep-u2-per-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The figure-ground principle of Gestalt psychology refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "filling in missing parts of a shape" },
              { id: "b", text: "separating an object (figure) from its background" },
              { id: "c", text: "grouping nearby items together" },
              { id: "d", text: "following smooth continuous lines" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Figure-ground",
                statement: "Separate object from background.",
              },
            ],
            steps: [
              {
                reasoning: "Figure-ground = object vs background.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Separating figure from background",
            commonErrors: ["Confusing with closure."],
          },
        },
        {
          id: "olep-u2-per-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "When we perceive a complete shape even though parts of its outline are missing, we are using which Gestalt principle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Closure" },
              { id: "b", text: "Continuity" },
              { id: "c", text: "Similarity" },
              { id: "d", text: "Proximity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Closure",
                statement: "Fill in missing parts.",
              },
            ],
            steps: [
              {
                reasoning: "Closure fills gaps.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Closure",
            commonErrors: ["Confusing with proximity."],
          },
        },
        {
          id: "olep-u2-per-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Gestalt principle of proximity states that items...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "far apart are ignored" },
              { id: "b", text: "on smooth lines are grouped" },
              { id: "c", text: "close together are perceived as belonging together" },
              { id: "d", text: "that look similar are grouped" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proximity",
                statement: "Nearby items grouped.",
              },
            ],
            steps: [
              {
                reasoning: "Proximity = closeness grouping.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Close together perceived as a group",
            commonErrors: ["Confusing with similarity."],
          },
        },
        {
          id: "olep-u2-per-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Top-down processing in perception means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "raw sensory data is processed upward only" },
              { id: "b", text: "expectations and knowledge guide the interpretation of stimuli" },
              { id: "c", text: "perception is purely reflexive" },
              { id: "d", text: "attention is divided across tasks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Top-down processing",
                statement: "Expectations guide interpretation.",
              },
            ],
            steps: [
              {
                reasoning: "Top-down = knowledge-driven.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Expectations and knowledge guide interpretation",
            commonErrors: ["Confusing with bottom-up."],
          },
        },
        {
          id: "olep-u2-per-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When reading a word in a foreign alphabet you have never seen, you must rely mainly on which type of processing, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Top-down — because expectations guide reading" },
              { id: "b", text: "Bottom-up — because you have no expectations or knowledge of the symbols" },
              { id: "c", text: "Both equally — they never interact" },
              { id: "d", text: "Neither — perception does not involve processing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Processing",
                statement: "No knowledge → bottom-up dominates.",
              },
            ],
            steps: [
              {
                reasoning: "Unfamiliar symbols = no top-down expectations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Must process raw sensory features upward.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "**(b)** Bottom-up — no expectations available",
            commonErrors: ["Choosing top-down without justification."],
          },
        },
        {
          id: "olep-u2-per-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A display contains $20$ dots. By proximity, $12$ dots are grouped into one cluster and $8$ into another. What percentage of dots are in the larger cluster?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(cluster size / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "12 / 20 = 0.6.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 60%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "olep-u2-per-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an ambiguous-figure experiment, participants reported seeing two different interpretations on $34$ out of $40$ presentations. Calculate the percentage of two-interpretation reports.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 85, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(two-interpretation reports / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "34 / 40 = 0.85.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 85%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "85%",
          },
        },
        {
          id: "olep-u2-per-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A similarity study showed $18$ of $30$ shapes were grouped by similarity rather than colour. What percentage were grouped by similarity?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(similarity group / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "18 / 30 = 0.6.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 60%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "olep-u2-per-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a closure test, a figure with $25\\%$ of its outline missing was still correctly identified on $18$ out of $20$ trials. Calculate the percentage of correct identifications.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(correct / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "18 / 20 = 0.9.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows closure fills missing parts.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Percentage = 90%.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "90%",
          },
        },
        {
          id: "olep-u2-per-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define perception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perception",
                statement: "Interpretation of sensory input.",
              },
            ],
            steps: [
              {
                reasoning: "Perception = interpretation, not just detection.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Brain constructs reality from sensory data.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "The interpretation and organisation of sensory information by the brain.",
            commonErrors: ["Saying it is just seeing."],
          },
        },
        {
          id: "olep-u2-per-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between top-down and bottom-up processing in perception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Processing types",
                statement: "Top-down=expectations; bottom-up=sensory data.",
              },
            ],
            steps: [
              {
                reasoning: "Top-down: expectations/knowledge guide interpretation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Top-down example or explanation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bottom-up: raw sensory features processed upward.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both usually work together.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Top-down uses expectations; bottom-up uses raw sensory data; both operate together.",
            commonErrors: ["Describing only one type."],
          },
        },
        {
          id: "olep-u2-per-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Perception.",
          parts: [
            { label: "a", prompt: "Define perception.", marks: 1 },
            { label: "b", prompt: "Two Gestalt principles?", marks: 2 },
            { label: "c", prompt: "Explain top-down processing.", marks: 2 },
            { label: "d", prompt: "Explain bottom-up processing.", marks: 2 },
            { label: "e", prompt: "Why do illusions occur?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perception",
                statement: "Definition+Gestalt+processing+illusions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Interpretation of sensory input.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two: figure-ground, closure, proximity, similarity, continuity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Expectations/knowledge guide interpretation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Example: reading fast, faces in clouds.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Raw sensory data processed upward.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Example: detecting faint sound.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Brain applies expectations/rules to ambiguous stimuli.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Top-down overrides actual sensory data.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) definition (b) Gestalt (c) top-down (d) bottom-up (e) illusions",
          },
        },
      ],
    },
    {
      id: "olep-u2-depth-cues",
      title: "Depth perception and illusions",
      skill: "Describe depth cues and types of visual illusions.",
      lesson: {
        sections: [
          {
            heading: "Depth perception",
            body: "Ability to judge distance/3D from 2D retinal image. Binocular cues: retinal disparity, convergence (both eyes). Monocular cues: relative size, linear perspective, overlap, texture gradient, aerial perspective.",
          },
          {
            heading: "Visual illusions",
            body: "Geometrical: misjudge length/size/angle (Müller-Lyer, Ponzo). Ambiguous: multiple interpretations (Necker cube, Rubin vase). Movement: stationary appears moving (phi phenomenon).",
          },
          {
            heading: "Why illusions happen",
            body: "Brain applies learned rules/expectations to ambiguous stimuli — top-down processing overrides actual sensory data. Shows perception is constructed, not just received.",
          },
        ],
        keyFormulas: [
          {
            name: "Depth/illusions",
            statement:
              "Depth=binocular+monocular cues; Illusions=brain constructs wrong interpretation.",
          },
        ],
        workedExample: {
          problem: "Why do we perceive depth with one eye closed?",
          solution:
            "Monocular cues (perspective, overlap, relative size) still provide depth information.",
        },
      },
      questions: [
        {
          id: "olep-u2-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is depth perception?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hearing sounds" },
              { id: "b", text: "Recognising faces" },
              { id: "c", text: "Judging distance and 3D from 2D image" },
              { id: "d", text: "Detecting colours" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depth perception",
                statement: "Judging distance/3D.",
              },
            ],
            steps: [
              { reasoning: "Depth = distance/3D.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Judging distance and 3D",
            commonErrors: ["Confusing with vision."],
          },
        },
        {
          id: "olep-u2-dc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two monocular depth cues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monocular cues",
                statement:
                  "Relative size, perspective, overlap, texture gradient.",
              },
            ],
            steps: [
              { reasoning: "Any two cues.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Relative size, linear perspective, overlap, texture gradient, aerial perspective.",
            commonErrors: ["Naming binocular cues."],
          },
        },
        {
          id: "olep-u2-dc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why visual illusions occur.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Illusions",
                statement: "Brain applies expectations to ambiguous stimuli.",
              },
            ],
            steps: [
              {
                reasoning: "Ambiguous/limited sensory data.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Top-down processing overrides.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows perception is constructed.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Brain constructs wrong interpretation from ambiguous stimuli.",
            commonErrors: ["Saying eyes are broken."],
          },
        },
        {
          id: "olep-u2-dc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Depth and illusions.",
          parts: [
            { label: "a", prompt: "Define depth perception.", marks: 1 },
            { label: "b", prompt: "Two monocular cues?", marks: 2 },
            { label: "c", prompt: "Two binocular cues?", marks: 2 },
            { label: "d", prompt: "Types of illusions?", marks: 2 },
            { label: "e", prompt: "Why illusions occur?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depth/illusions",
                statement: "Definition+cues+types+explanation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Distance/3D judgement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two monocular.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Retinal disparity/convergence.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Geometrical/ambiguous/movement.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Examples.", marks: 1, markCode: "AO2" },
              {
                part: "e",
                reasoning: "Brain misinterprets.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Top-down errors.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) depth (b) monocular (c) binocular (d) types (e) why",
          },
        },
        {
          id: "olep-u2-dc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Retinal disparity is an example of which type of depth cue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Auditory cue" },
              { id: "b", text: "Binocular cue" },
              { id: "c", text: "Monocular cue" },
              { id: "d", text: "Gustatory cue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retinal disparity",
                statement: "Binocular depth cue.",
              },
            ],
            steps: [
              {
                reasoning: "Retinal disparity uses both eyes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Binocular cue",
            commonErrors: ["Confusing with monocular cues."],
          },
        },
        {
          id: "olep-u2-dc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "When both eyes turn inward to focus on a near object, the cue used is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "aerial perspective" },
              { id: "b", text: "linear perspective" },
              { id: "c", text: "texture gradient" },
              { id: "d", text: "convergence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convergence",
                statement: "Eyes turn inward for near objects.",
              },
            ],
            steps: [
              {
                reasoning: "Convergence = binocular cue.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Convergence",
            commonErrors: ["Confusing with monocular cues."],
          },
        },
        {
          id: "olep-u2-dc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The monocular depth cue in which nearer objects appear larger than farther objects of the same actual size is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "linear perspective" },
              { id: "b", text: "relative size" },
              { id: "c", text: "overlap" },
              { id: "d", text: "retinal disparity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative size",
                statement: "Monocular cue: size indicates distance.",
              },
            ],
            steps: [
              {
                reasoning: "Relative size works with one eye.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Relative size",
            commonErrors: ["Choosing retinal disparity (binocular)."],
          },
        },
        {
          id: "olep-u2-dc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Distant objects appearing hazier and less detailed is explained by which monocular depth cue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aerial perspective" },
              { id: "b", text: "Convergence" },
              { id: "c", text: "Texture gradient" },
              { id: "d", text: "Overlap" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aerial perspective",
                statement: "Distance = hazier, less detailed.",
              },
            ],
            steps: [
              {
                reasoning: "Aerial perspective = atmospheric haze.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Aerial perspective",
            commonErrors: ["Confusing with texture gradient."],
          },
        },
        {
          id: "olep-u2-dc-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the Müller-Lyer illusion, two lines of equal length are perceived as different lengths because of the arrowheads. Which category of visual illusion is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ambiguous illusion — multiple interpretations" },
              { id: "b", text: "Movement illusion — stationary appears moving" },
              { id: "c", text: "Not an illusion at all" },
              { id: "d", text: "Geometrical illusion — misjudgement of length" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geometrical illusion",
                statement: "Misjudge length/size/angle.",
              },
            ],
            steps: [
              {
                reasoning: "Müller-Lyer distorts length judgement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fits geometrical category.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(d)** Geometrical illusion",
            commonErrors: ["Confusing with ambiguous illusions."],
          },
        },
        {
          id: "olep-u2-dc-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A depth-cue list contains $5$ monocular cues (relative size, linear perspective, overlap, texture gradient, aerial perspective) and $2$ binocular cues (retinal disparity, convergence). What percentage of all listed cues are monocular?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 71.43, unit: "%", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(monocular cues / total cues) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Total cues = 5 + 2 = 7.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "5 / 7 x 100 = 71.43%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "71.43%",
          },
        },
        {
          id: "olep-u2-dc-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a depth-judgement task, participants judged the distance correctly on $48$ out of $60$ trials. Calculate the percentage of correct judgements.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(correct / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "48 / 60 = 0.8.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 80%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "80%",
          },
        },
        {
          id: "olep-u2-dc-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a Ponzo-illusion task, two identical $10$ cm lines were judged as $14$ cm (top) and $9$ cm (bottom). Calculate the percentage overestimation of the top line.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage error",
                statement: "(judged - actual) / actual x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Error = 14 - 10 = 4 cm.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "4 / 10 x 100 = 40% overestimate.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "40%",
          },
        },
        {
          id: "olep-u2-dc-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a Necker-cube study, $30$ observers viewed the ambiguous cube. $18$ reported one face orientation first. Calculate the percentage reporting the same first orientation.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(same orientation / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "18 / 30 = 0.6.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows ambiguous figures flip interpretation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Percentage = 60%.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "olep-u2-dc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define depth perception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depth perception",
                statement: "Judging distance/3D from 2D image.",
              },
            ],
            steps: [
              {
                reasoning: "Ability to judge distance and 3D.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "From the flat retinal image.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Judging distance and three-dimensional space from a two-dimensional retinal image.",
            commonErrors: ["Confusing with visual acuity."],
          },
        },
        {
          id: "olep-u2-dc-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two monocular depth cues and how each indicates distance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monocular cues",
                statement: "Relative size, perspective, overlap, texture, aerial.",
              },
            ],
            steps: [
              {
                reasoning: "First cue named (e.g. relative size).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "How it indicates distance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Second cue named (e.g. linear perspective).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "How it indicates distance.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Any two monocular cues correctly explained, e.g. relative size and linear perspective.",
            commonErrors: ["Naming binocular cues as monocular."],
          },
        },
        {
          id: "olep-u2-dc-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Depth perception and illusions.",
          parts: [
            { label: "a", prompt: "Define depth perception.", marks: 1 },
            { label: "b", prompt: "Two binocular cues?", marks: 2 },
            { label: "c", prompt: "Three monocular cues?", marks: 3 },
            { label: "d", prompt: "Types of visual illusion?", marks: 1 },
            { label: "e", prompt: "Why do illusions happen?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depth/illusions",
                statement: "Definition+cues+types+explanation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Judging distance/3D.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Retinal disparity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Convergence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Any three monocular cues.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Any three monocular cues.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Any three monocular cues.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Geometrical/ambiguous/movement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Brain applies expectations/rules to ambiguous stimuli.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Top-down overrides sensory data.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) depth (b) binocular (c) monocular (d) types (e) why",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u2-2-2-notes",
      title: "Perception — notes",
      summary: "Perception, processing, depth cues, illusions.",
      sections: [
        {
          heading: "Processing",
          body: "Perception=interpretation. Top-down=expectations; bottom-up=sensory data. Gestalt=grouping rules.",
        },
        {
          heading: "Depth/illusions",
          body: "Depth=binocular+monocular cues. Illusions=brain constructs wrong interpretation.",
        },
      ],
    },
  ],
};
