import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "s8-u6-lesson-6-3",
  code: "6-3",
  title: "Light and Optics",
  goal: "I CAN describe how light travels, explain reflection and refraction, and solve problems involving mirrors and lenses.",
  standards: [
    "MS-PS4-2",
    "MS-PS4-3",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Light",
      definition:
        "Visible electromagnetic radiation that travels in straight lines.",
    },
    {
      term: "Reflection",
      definition:
        "Bouncing of light off a surface; angle of incidence equals angle of reflection.",
    },
    {
      term: "Refraction",
      definition: "Bending of light when it passes from one medium to another.",
    },
    {
      term: "Transparent",
      definition: "Allows light to pass through clearly.",
    },
    {
      term: "Translucent",
      definition: "Allows some light through but scatters it.",
    },
    { term: "Opaque", definition: "Blocks light completely." },
    {
      term: "Lens",
      definition:
        "Curved transparent object that refracts light to focus or spread it.",
    },
  ],
  concepts: [
    {
      id: "s8-u6-light-properties",
      title: "Light properties",
      skill:
        "Describe how light travels and interacts with different materials.",
      lesson: {
        sections: [
          {
            heading: "Light and materials",
            body: "Light travels in straight lines (rays) at $3 \\times 10^8$ m/s in vacuum. Materials interact with light differently:\n\n- **Transparent** (glass, water): light passes through clearly.\n- **Translucent** (frosted glass, wax paper): light passes but scatters.\n- **Opaque** (wood, metal, walls): blocks light completely.",
          },
          {
            heading: "Shadows and umbra",
            body: "When light hits an opaque object, it casts a shadow. The **umbra** is the darkest part (no light); the **penumbra** is the lighter edge (partial light). Shadow size depends on light source size and distance.",
          },
        ],
        keyFormulas: [
          {
            name: "Light speed",
            statement: "$c = 3 \\times 10^8$ m/s in vacuum.",
          },
          {
            name: "Transparent vs opaque",
            statement: "Transparent = clear passage; opaque = blocked.",
          },
          {
            name: "Shadow",
            statement: "Umbra = total darkness; penumbra = partial.",
          },
        ],
        workedExample: {
          problem:
            "Why does a shadow get smaller as you move closer to a light source?",
          solution:
            "Closer to the light, the object blocks a larger angle of light, creating a smaller, darker shadow.",
        },
      },
      questions: [
        {
          id: "s8-u6-light-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is transparent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wood" },
              { id: "b", text: "Metal" },
              { id: "c", text: "Glass" },
              { id: "d", text: "Cloth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transparent",
                statement: "Allows light to pass through clearly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Glass is transparent; wood, metal and cloth are opaque.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Glass.",
            commonErrors: ["Choosing an opaque material."],
          },
        },
        {
          id: "s8-u6-light-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between transparent, translucent and opaque materials.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Light materials",
                statement:
                  "Transparent = clear; translucent = scattered; opaque = blocked.",
              },
            ],
            steps: [
              {
                reasoning: "Transparent: light passes through clearly (glass).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Translucent: some light passes but scatters (frosted glass).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Opaque: blocks light completely (wood, metal).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Transparent = clear; translucent = scattered; opaque = blocked.",
            commonErrors: ["Confusing translucent and transparent."],
          },
        },
        {
          id: "s8-u6-light-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Moon has phases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Moon phases",
                statement: "We see different amounts of sunlit side.",
              },
            ],
            steps: [
              {
                reasoning: "Moon orbits Earth; half is always sunlit.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "We see different portions of the sunlit side as Moon orbits.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Phases: new → crescent → quarter → gibbous → full → gibbous → quarter → crescent → new.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This is why we see 'phases' — geometry of Sun-Earth-Moon.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "We see different portions of Moon's sunlit side as it orbits Earth.",
            commonErrors: ["Saying Earth's shadow causes phases."],
          },
        },
        {
          id: "s8-u6-light-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 2 m tall person stands 3 m from a wall. A light source is 1 m behind the person.",
          parts: [
            {
              label: "a",
              prompt: "Will the shadow be larger or smaller than the person?",
              marks: 3,
            },
            { label: "b", prompt: "Explain using light rays.", marks: 3 },
            {
              label: "c",
              prompt: "How would moving the light source change the shadow?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Shadow geometry",
                statement: "Shadow size depends on distances.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Shadow will be larger — light source is closer to person than wall.",
                marks: 3,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Light rays diverge from source; person blocks some; shadow spreads on wall.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Moving light farther → smaller shadow; closer → larger shadow.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Larger (b) Diverging rays spread shadow (c) Farther light = smaller shadow.",
            commonErrors: ["Saying shadow is always same size as object."],
          },
        },
      ],
    },
    {
      id: "s8-u6-reflection-refraction",
      title: "Reflection and Refraction",
      skill:
        "Apply the laws of reflection and refraction and explain their applications.",
      lesson: {
        sections: [
          {
            heading: "Law of reflection",
            body: "**Law of reflection**: angle of incidence = angle of reflection (measured from normal).\n\n- **Specular reflection**: smooth surface → clear image (mirror).\n- **Diffuse reflection**: rough surface → scattered light (most surfaces).",
          },
          {
            heading: "Refraction",
            body: "**Refraction** is bending of light when it passes between media of different densities. Light slows down in denser media and bends toward the normal; speeds up in less dense media and bends away.\n\nApplications: lenses (glasses, cameras), prisms (separating colors), mirages.",
          },
        ],
        keyFormulas: [
          {
            name: "Law of reflection",
            statement: "Angle of incidence = angle of reflection.",
          },
          {
            name: "Refraction",
            statement:
              "Bending at media boundary; toward normal in denser media.",
          },
          {
            name: "Specular vs diffuse",
            statement: "Smooth = clear image; rough = scattered.",
          },
        ],
        workedExample: {
          problem: "Why does a straw look bent in a glass of water?",
          solution:
            "Light from straw refracts as it passes from water to air, bending away from normal — making straw appear bent.",
        },
      },
      questions: [
        {
          id: "s8-u6-reflection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the law of reflection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Angle in = 2× angle out" },
              { id: "b", text: "Angle of incidence = angle of reflection" },
              { id: "c", text: "Light always reflects at 90°" },
              { id: "d", text: "Reflection depends on color" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Law of reflection",
                statement: "Angle of incidence = angle of reflection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Angles are measured from the normal; they're always equal.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Angle of incidence = angle of reflection.",
            commonErrors: ["Measuring from surface instead of normal."],
          },
        },
        {
          id: "s8-u6-reflection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between specular and diffuse reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Reflection types",
                statement:
                  "Specular = smooth (mirror); diffuse = rough (scattered).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Specular: smooth surface → parallel rays → clear image.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Diffuse: rough surface → scattered rays → no clear image.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Most surfaces are diffuse; mirrors are specular.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Specular = mirror-like; diffuse = scattered.",
            commonErrors: ["Saying diffuse reflection produces images."],
          },
        },
        {
          id: "s8-u6-reflection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a pencil looks bent when placed in water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Refraction",
                statement: "Light bends at media boundary.",
              },
            ],
            steps: [
              {
                reasoning: "Light from pencil travels through water then air.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "At water-air boundary, light refracts (bends away from normal).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Our brain assumes light traveled straight → pencil appears bent.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This is why objects look displaced at water surfaces.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Refraction at water-air boundary makes pencil appear bent.",
            commonErrors: ["Saying pencil actually bends."],
          },
        },
        {
          id: "s8-u6-reflection-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A light ray hits a mirror at 30° to the surface.",
          parts: [
            { label: "a", prompt: "What is the angle of incidence?", marks: 2 },
            {
              label: "b",
              prompt: "What is the angle of reflection?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If the mirror rotates 10°, how does the reflected ray change?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Why do we use mirrors instead of diffuse surfaces for images?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Reflection law",
                statement: "Angle measured from normal; in = out.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Angle from normal = $90° - 30° = 60°$.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Angle of reflection = 60° (equal to incidence).",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Reflected ray rotates 20° (mirror rotation × 2).",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Mirrors are smooth → specular reflection → clear image.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) 60° (b) 60° (c) 20° (d) Specular reflection.",
            commonErrors: ["Measuring from surface instead of normal."],
          },
        },
      ],
    },
    {
      id: "s8-u6-lenses",
      title: "Lenses and Image Formation",
      skill:
        "Describe how convex and concave lenses form images and their applications.",
      lesson: {
        sections: [
          {
            heading: "Convex (converging) lenses",
            body: "**Convex lenses** are thicker in the middle and converge light rays.\n\n- Object far away → small, inverted, real image at focal point.\n- Object inside focal length → magnified, upright, virtual image (magnifying glass).\n\nApplications: cameras, telescopes, eyeglasses for farsightedness, magnifying glasses.",
          },
          {
            heading: "Concave (diverging) lenses",
            body: "**Concave lenses** are thinner in the middle and diverge light rays.\n\n- Always form virtual, upright, diminished images.\n\nApplications: eyeglasses for nearsightedness, peepholes, laser beam expanders.",
          },
        ],
        keyFormulas: [
          {
            name: "Convex lens",
            statement: "Converges light; real images possible.",
          },
          {
            name: "Concave lens",
            statement: "Diverges light; always virtual images.",
          },
          {
            name: "Focal point",
            statement:
              "Where parallel rays converge (convex) or appear to diverge (concave).",
          },
        ],
        workedExample: {
          problem: "Why do nearsighted people need concave lenses?",
          solution:
            "Concave lenses diverge light before it reaches the eye, helping focus images on the retina.",
        },
      },
      questions: [
        {
          id: "s8-u6-lenses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which lens converges light rays?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Concave" },
              { id: "b", text: "Convex" },
              { id: "c", text: "Flat" },
              { id: "d", text: "Mirror" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Convex lens",
                statement: "Thicker middle converges light.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convex lenses are thicker in middle and converge light rays.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Convex.",
            commonErrors: ["Choosing (a): concave diverges."],
          },
        },
        {
          id: "s8-u6-lenses-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between real and virtual images.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Real vs virtual",
                statement: "Real = can be projected; virtual = cannot.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Real image: light rays actually converge; can be projected on screen.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Virtual image: rays only appear to diverge; cannot be projected.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Convex lenses form both; concave lenses form only virtual.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Real = projectable; virtual = cannot be projected.",
            commonErrors: ["Thinking virtual images are unreal."],
          },
        },
        {
          id: "s8-u6-lenses-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a camera works using a convex lens.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Camera",
                statement: "Convex lens forms real, inverted image on sensor.",
              },
            ],
            steps: [
              {
                reasoning: "Light from object passes through convex lens.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Lens converges rays to form real, inverted image.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Image forms on film/sensor (at focal plane).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Focusing adjusts lens position to bring image onto sensor.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Convex lens converges light → real inverted image on sensor.",
            commonErrors: ["Saying image is upright."],
          },
        },
        {
          id: "s8-u6-lenses-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare convex and concave lenses.",
          parts: [
            {
              label: "a",
              prompt: "How does each affect light rays?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What types of images can each form?",
              marks: 2,
            },
            { label: "c", prompt: "Give an application of each.", marks: 2 },
            { label: "d", prompt: "Which corrects farsightedness?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Lens comparison",
                statement: "Convex = converges; concave = diverges.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Convex converges; concave diverges.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Convex: real and virtual images. Concave: virtual only.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Convex: cameras, magnifiers. Concave: nearsighted glasses.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Convex corrects farsightedness (converges light onto retina).",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Converge vs diverge (b) Real+virtual vs virtual (c) Cameras vs nearsighted (d) Convex.",
            commonErrors: ["Reversing lens types."],
          },
        },
      ],
    },
  ],
};
