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
              { id: "a", text: "Interpretation of sensory information" },
              { id: "b", text: "Detection of stimuli" },
              { id: "c", text: "Memory storage" },
              { id: "d", text: "Physical sensation" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Interpretation of sensory information",
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
              { id: "a", text: "Judging distance and 3D from 2D image" },
              { id: "b", text: "Detecting colours" },
              { id: "c", text: "Recognising faces" },
              { id: "d", text: "Hearing sounds" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Judging distance and 3D",
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
