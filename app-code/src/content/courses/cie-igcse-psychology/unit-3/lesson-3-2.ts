import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cieipsych-u3-lesson-3-2",
  code: "3-2",
  title: "Cognitive psychology: perception and memory models",
  goal: "I CAN explain visual constancies, depth cues, illusions and models of memory and attention.",
  standards: [
    "Cambridge IGCSE Psychology 0266",
    "Section 3: Cognitive psychology",
  ],
  vocabulary: [
    {
      term: "Perception",
      definition: "Interpreting sensory information using past experience.",
    },
    {
      term: "Sensory constancy",
      definition: "Perceiving objects as stable despite changing conditions.",
    },
    {
      term: "Depth cue",
      definition: "Visual information helping judge distance.",
    },
    {
      term: "Illusion",
      definition: "Misperception where the brain misinterprets sensory data.",
    },
    {
      term: "STM (short-term memory)",
      definition: "Temporary store holding ~7 items for ~18 seconds.",
    },
    {
      term: "LTM (long-term memory)",
      definition: "Permanent store of unlimited capacity.",
    },
    {
      term: "Encoding",
      definition: "Converting information into a storable form.",
    },
    {
      term: "Retrieval",
      definition: "Getting information out of memory.",
    },
    {
      term: "Forgetting curve",
      definition: "Ebbinghaus's finding that memory decays rapidly at first.",
    },
    {
      term: "Selective attention",
      definition: "Focusing on some stimuli while ignoring others.",
    },
    {
      term: "Divided attention",
      definition: "Doing two tasks at once — performance drops.",
    },
    {
      term: "Chunking",
      definition: "Grouping items to fit more into STM.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u3-perception",
      title: "Visual constancies, depth cues and illusions",
      skill:
        "Explain how the brain achieves perceptual constancy and is fooled by illusions.",
      lesson: {
        sections: [
          {
            heading: "Visual constancies",
            body: "**Size constancy**: we perceive objects as the same size despite distance changes — a car far away looks small on the retina but we 'know' it's car-sized. **Shape constancy**: we perceive shape as constant even when the retinal image changes (e.g. a door seen at an angle still looks rectangular). **Colour constancy**: we perceive colours as constant under different lighting — a white shirt looks white in sunlight and lamplight.",
          },
          {
            heading: "Depth cues",
            body: "**Monocular cues** (one eye): relative size, interposition (overlap), linear perspective, texture gradient, aerial perspective (distant objects hazier), accommodation (lens changes for near objects). **Binocular cues** (both eyes): retinal disparity (slightly different images) and convergence (eyes angle inward for near objects).",
          },
          {
            heading: "Illusions",
            body: "Illusions show perception is an active construction, not passive recording. The **Müller-Lyer illusion** (arrow lines look different lengths) is explained by the **carpentered world hypothesis** — we interpret lines as inside/outside corners of rooms. The **rubber hand illusion** shows multisensory integration can be fooled. **Ambiguous figures** (Necker cube) show perception flips between interpretations.",
          },
        ],
        keyFormulas: [
          {
            name: "Size constancy",
            statement: "Object perceived same size despite distance",
          },
          {
            name: "Binocular cues",
            statement: "Retinal disparity · convergence",
          },
          {
            name: "Müller-Lyer",
            statement: "Arrow fins interpreted as corners",
          },
        ],
        workedExample: {
          problem:
            "Why does a coin look circular even when viewed at an angle?",
          solution:
            "Shape constancy: the brain compensates for the changing retinal image, perceiving the coin's true circular shape regardless of viewing angle.",
        },
      },
      questions: [
        {
          id: "cieipsych-u3-p1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Perception differs from sensation because perception involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No brain involvement" },
              { id: "b", text: "Only detecting stimuli" },
              {
                id: "c",
                text: "Interpreting sensory information using experience",
              },
              { id: "d", text: "Automatic responses" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perception",
                statement: "Interpreting sensory info via experience.",
              },
            ],
            steps: [
              {
                reasoning: "Perception = interpretation, not just detection.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Interpreting using experience.",
          },
        },
        {
          id: "cieipsych-u3-p1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Size constancy means we perceive an object as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growing as it approaches" },
              { id: "b", text: "The same size despite changes in distance" },
              { id: "c", text: "Always accurate" },
              { id: "d", text: "Smaller when far away" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Size constancy",
                statement: "Stable size perception despite distance.",
              },
            ],
            steps: [
              {
                reasoning: "Size constancy = stable size perception.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Same size despite distance changes.",
          },
        },
        {
          id: "cieipsych-u3-p1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Shape constancy means we perceive an object's shape as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dependent on colour" },
              { id: "b", text: "Constant even when the retinal image changes" },
              { id: "c", text: "Always circular" },
              { id: "d", text: "Changing with viewing angle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Shape constancy",
                statement: "Stable shape perception despite image changes.",
              },
            ],
            steps: [
              {
                reasoning: "Shape constancy = stable shape perception.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Constant despite retinal image changes.",
          },
        },
        {
          id: "cieipsych-u3-p1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Colour constancy means we perceive colours as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dependent on distance" },
              { id: "b", text: "Always bright" },
              { id: "c", text: "The same under different lighting conditions" },
              { id: "d", text: "Changing with light" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Colour constancy",
                statement: "Stable colour perception under different lighting.",
              },
            ],
            steps: [
              {
                reasoning: "Colour constancy = stable colour perception.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Same under different lighting.",
          },
        },
        {
          id: "cieipsych-u3-p1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a binocular depth cue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linear perspective" },
              { id: "b", text: "Relative size" },
              { id: "c", text: "Texture gradient" },
              { id: "d", text: "Retinal disparity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binocular cues",
                statement: "Retinal disparity and convergence.",
              },
            ],
            steps: [
              {
                reasoning: "Retinal disparity requires both eyes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Retinal disparity.",
          },
        },
        {
          id: "cieipsych-u3-p1-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a monocular depth cue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convergence" },
              { id: "b", text: "Linear perspective" },
              { id: "c", text: "Retinal disparity" },
              { id: "d", text: "Binocular vision" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monocular cues",
                statement: "Work with one eye: perspective, size, overlap.",
              },
            ],
            steps: [
              {
                reasoning: "Linear perspective is monocular.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Linear perspective.",
          },
        },
        {
          id: "cieipsych-u3-p1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Retinal disparity helps judge distance because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It requires no eyes" },
              { id: "b", text: "Colours differ" },
              { id: "c", text: "Each eye sees a slightly different image" },
              { id: "d", text: "Objects appear larger" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retinal disparity",
                statement: "Different retinal images enable depth.",
              },
            ],
            steps: [
              {
                reasoning: "Different images per eye enable stereopsis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Each eye sees a slightly different image.",
          },
        },
        {
          id: "cieipsych-u3-p1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Müller-Lyer illusion is explained by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Interpreting arrow fins as inside/outside corners",
              },
              { id: "b", text: "Binocular vision" },
              { id: "c", text: "Size constancy" },
              { id: "d", text: "Colour differences" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Müller-Lyer explanation",
                statement: "Carpentered world hypothesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "We interpret fins as corners, affecting length perception.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Interpreting fins as corners.",
          },
        },
        {
          id: "cieipsych-u3-p1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Illusions demonstrate that perception is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random" },
              {
                id: "b",
                text: "An active construction, not passive recording",
              },
              { id: "c", text: "Dependent only on eyes" },
              { id: "d", text: "Always accurate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Illusion significance",
                statement: "Perception is constructed by the brain.",
              },
            ],
            steps: [
              {
                reasoning: "Illusions show brain constructs perception.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) An active construction.",
          },
        },
        {
          id: "cieipsych-u3-p1-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by 'perceptual constancy'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perceptual constancy",
                statement: "Stable perception despite changing conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "We perceive objects as stable despite changes in distance, angle, lighting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This allows us to recognise objects in varying conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stable perception of objects despite changing viewing conditions.",
          },
        },
        {
          id: "cieipsych-u3-p1-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one monocular and one binocular depth cue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depth cues",
                statement: "Monocular = one eye; binocular = both eyes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Monocular: linear perspective, relative size, interposition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Binocular: retinal disparity, convergence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Monocular: perspective/size. Binocular: disparity/convergence.",
          },
        },
        {
          id: "cieipsych-u3-p1-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the Müller-Lyer illusion challenges the idea that perception is passive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Illusion and perception",
                statement:
                  "Perception involves interpretation, not just recording.",
              },
            ],
            steps: [
              {
                reasoning: "The two lines are actually the same length.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But we perceive them as different due to interpreting fins as corners.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This shows perception involves active interpretation, not passive recording.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Same length perceived differently → perception is interpretive, not passive.",
          },
        },
        {
          id: "cieipsych-u3-p1-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the role of depth cues in everyday perception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depth cues importance",
                statement: "Enable accurate distance judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Depth cues allow us to judge distance accurately in 3D space.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without them, we couldn't catch balls, drive, or navigate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But illusions show they can sometimes mislead perception.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The brain combines multiple cues for best estimate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Essential for distance judgement but can be fooled by illusions.",
          },
        },
        {
          id: "cieipsych-u3-p1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Interposition as a depth cue means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distant objects are hazier" },
              { id: "b", text: "Objects shrink" },
              { id: "c", text: "Lines converge" },
              { id: "d", text: "Overlapping objects appear nearer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interposition",
                statement: "Overlapping objects perceived as nearer.",
              },
            ],
            steps: [
              {
                reasoning: "Interposition = overlap cue.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Overlapping objects appear nearer.",
          },
        },
        {
          id: "cieipsych-u3-p1-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an ambiguous figure? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ambiguous figure",
                statement: "Image allowing two interpretations.",
              },
            ],
            steps: [
              {
                reasoning: "It can be perceived in two different ways.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: Necker cube, duck-rabbit figure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Image with two interpretations; e.g. Necker cube.",
          },
        },
        {
          id: "cieipsych-u3-p1-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Necker cube demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colour constancy" },
              {
                id: "b",
                text: "Ambiguous perception that flips between interpretations",
              },
              { id: "c", text: "Perfect depth perception" },
              { id: "d", text: "Size constancy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Necker cube",
                statement: "Ambiguous figure flipping interpretations.",
              },
            ],
            steps: [
              {
                reasoning: "Necker cube flips between two views.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Ambiguous perception flipping.",
          },
        },
        {
          id: "cieipsych-u3-p1-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a door looks rectangular even when viewed at an angle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shape constancy example",
                statement: "Retinal image changes but perceived shape stays.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The retinal image of a door changes shape with viewing angle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But shape constancy makes us perceive it as rectangular.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shape constancy compensates for changing retinal image.",
          },
        },
        {
          id: "cieipsych-u3-p1-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how experience affects perception, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Experience and perception",
                statement: "Past experience shapes interpretation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Perception uses past experience to interpret sensory data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: we interpret Müller-Lyer fins based on experience of corners.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different experiences can lead to different perceptions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Experience guides interpretation; different experiences → different perceptions.",
          },
        },
        {
          id: "cieipsych-u3-p1-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A person loses sight in one eye. Explain which depth cues they lose and which remain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depth cue types",
                statement: "Binocular vs monocular cues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Loses binocular cues: retinal disparity and convergence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Retains monocular cues: perspective, size, overlap, texture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can compensate by moving head for motion parallax.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Depth perception is reduced but not eliminated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Loses binocular cues; retains monocular; can compensate with head movement.",
          },
        },
        {
          id: "cieipsych-u3-p1-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which depth cue involves lines appearing to converge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interposition" },
              { id: "b", text: "Texture gradient" },
              { id: "c", text: "Linear perspective" },
              { id: "d", text: "Retinal disparity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Linear perspective",
                statement: "Parallel lines appear to converge with distance.",
              },
            ],
            steps: [
              {
                reasoning: "Linear perspective = converging lines.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Linear perspective.",
          },
        },
        {
          id: "cieipsych-u3-p1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'carpentered world hypothesis'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carpentered world",
                statement:
                  "We interpret lines based on rectangular environments.",
              },
            ],
            steps: [
              {
                reasoning:
                  "We interpret visual patterns based on experience of built environments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explains why Müller-Lyer works — fins interpreted as corners.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "We interpret lines based on experience of rectangular environments.",
          },
        },
        {
          id: "cieipsych-u3-p1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why colour constancy is useful for perception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Colour constancy function",
                statement: "Stable colour recognition under varying light.",
              },
            ],
            steps: [
              {
                reasoning: "Lighting changes constantly throughout the day.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Colour constancy lets us recognise objects' true colours.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without it, object recognition would be unreliable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Stable colour recognition despite changing lighting.",
          },
        },
        {
          id: "cieipsych-u3-p1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an experiment to test whether depth cues affect distance judgement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research design",
                statement: "Match method to question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "IV: presence/absence of depth cues; DV: distance estimation error.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use images with and without monocular cues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Random allocation; standardised viewing conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measure accuracy of distance estimates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "IV cue presence, DV distance error; controlled images and random allocation.",
          },
        },
        {
          id: "cieipsych-u3-p1-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of perceptual constancy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colour constancy" },
              { id: "b", text: "Size constancy" },
              { id: "c", text: "Shape constancy" },
              { id: "d", text: "Distance constancy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Constancy types",
                statement: "Size, shape, colour — no distance constancy.",
              },
            ],
            steps: [
              {
                reasoning: "Distance constancy is not a standard type.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Distance constancy.",
          },
        },
        {
          id: "cieipsych-u3-p1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might illusions be useful for studying perception?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Illusion utility",
                statement: "Reveal how perception works.",
              },
            ],
            steps: [
              {
                reasoning: "They reveal the brain's interpretive processes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They show perception is constructed, not passive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "They reveal the brain's active interpretive processes.",
          },
        },
        {
          id: "cieipsych-u3-p1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how texture gradient serves as a depth cue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Texture gradient",
                statement: "Distant textures appear denser/smaller.",
              },
            ],
            steps: [
              {
                reasoning: "Surfaces show texture that changes with distance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Distant texture appears finer/denser than near texture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Brain uses this gradient to judge distance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Distant texture appears denser/finer — brain uses gradient for depth.",
          },
        },
        {
          id: "cieipsych-u3-p1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a binocular depth cue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convergence" },
              { id: "b", text: "Relative size" },
              { id: "c", text: "Aerial perspective" },
              { id: "d", text: "Interposition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convergence",
                statement: "Eyes angle inward for near objects.",
              },
            ],
            steps: [
              {
                reasoning: "Convergence requires both eyes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Convergence.",
          },
        },
        {
          id: "cieipsych-u3-p1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'aerial perspective' as a depth cue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aerial perspective",
                statement: "Distant objects appear hazier/lighter.",
              },
            ],
            steps: [
              {
                reasoning: "Distant objects appear hazier due to atmosphere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Brain uses this to judge distance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Distant objects appear hazier — depth cue.",
          },
        },
        {
          id: "cieipsych-u3-p1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the claim that 'perception is just seeing — it has no interpretation.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perception as interpretation",
                statement: "Perception involves active construction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Perception involves interpreting sensory data using experience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Illusions show the same stimulus can be perceived differently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Constancies show the brain actively compensates for changes.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "So perception is interpretive, not passive 'just seeing'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "False — perception involves active interpretation, not just seeing.",
          },
        },
        {
          id: "cieipsych-u3-p1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how motion parallax helps judge distance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Motion parallax",
                statement: "Near objects move faster across retina.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When moving, near objects appear to move faster than distant ones.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Brain uses this difference to judge distance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Near objects move faster across retina — depth cue.",
          },
        },
      ],
    },
    {
      id: "cieipsych-u3-memory",
      title: "Models of memory and attention",
      skill:
        "Explain multi-store and working memory models and factors affecting memory.",
      lesson: {
        sections: [
          {
            heading: "The multi-store model",
            body: "Atkinson & Shiffrin's model: **sensory memory** (brief iconic/echoic stores) → **short-term memory (STM)** (capacity ~7 items, duration ~18 seconds) → **long-term memory (LTM)** (unlimited capacity, potentially permanent). Information moves via **rehearsal** — maintenance rehearsal keeps it in STM; elaborative rehearsal transfers it to LTM. Forgetting occurs through decay (STM), displacement (STM full), or retrieval failure/interference (LTM).",
          },
          {
            heading: "The working memory model",
            body: "Baddeley & Hitch replaced the unitary STM with a **central executive** (attention control) plus slave systems: the **phonological loop** (verbal info — the 'inner voice'), the **visuo-spatial sketchpad** (visual/spatial info), and later the **episodic buffer** (integrates info). This explains why we can hold a phone number while looking at a map — separate systems handle different info types.",
          },
          {
            heading: "Forgetting and attention",
            body: "Ebbinghaus showed **forgetting curves** — memory decays steeply at first then levels off; overlearning (extra rehearsal) slows decay. **Interference** (similar memories competing) causes forgetting. **Motivated forgetting** involves repression or deliberate avoidance. **Selective attention** lets us focus on one stimulus stream (the cocktail party effect — noticing your name in a noisy room); **divided attention** is doing two tasks at once, which reduces performance on both.",
          },
        ],
        keyFormulas: [
          {
            name: "STM",
            statement: "~7 items · ~18 seconds · maintenance rehearsal",
          },
          {
            name: "LTM",
            statement: "Unlimited · permanent · elaborative rehearsal",
          },
          {
            name: "Working memory",
            statement:
              "Central executive + phonological loop + visuo-spatial sketchpad",
          },
        ],
        workedExample: {
          problem:
            "Why can you remember a phone number long enough to dial it but forget it tomorrow?",
          solution:
            "The number is in STM via maintenance rehearsal — lasts ~18 seconds. Without elaborative rehearsal to transfer it to LTM, it decays or is displaced by new information.",
        },
      },
      questions: [
        {
          id: "cieipsych-u3-m1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The multi-store model of memory has three stores:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "STM, LTM and cache" },
              { id: "b", text: "Conscious, unconscious, preconscious" },
              { id: "c", text: "Visual, auditory and motor" },
              { id: "d", text: "Sensory, short-term and long-term memory" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multi-store model",
                statement: "Sensory → STM → LTM.",
              },
            ],
            steps: [
              {
                reasoning: "Three stores: sensory, STM, LTM.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sensory, STM and LTM.",
          },
        },
        {
          id: "cieipsych-u3-m1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The capacity of short-term memory is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7 items" },
              { id: "b", text: "1 item" },
              { id: "c", text: "Unlimited" },
              { id: "d", text: "100 items" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STM capacity",
                statement: "~7 items (Miller's magic number).",
              },
            ],
            steps: [
              {
                reasoning: "STM holds ~7 items.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 7 items.",
          },
        },
        {
          id: "cieipsych-u3-m1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The duration of short-term memory is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Permanent" },
              { id: "b", text: "1 hour" },
              { id: "c", text: "1 day" },
              { id: "d", text: "18 seconds" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STM duration",
                statement: "~18 seconds without rehearsal.",
              },
            ],
            steps: [
              {
                reasoning: "STM lasts ~18 seconds.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 18 seconds.",
          },
        },
        {
          id: "cieipsych-u3-m1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Maintenance rehearsal is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transfer to LTM" },
              { id: "b", text: "Keep information in STM" },
              { id: "c", text: "Forget information" },
              { id: "d", text: "Encode permanently" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maintenance rehearsal",
                statement: "Keeps info in STM.",
              },
            ],
            steps: [
              {
                reasoning: "Maintenance rehearsal keeps info in STM.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Keep information in STM.",
          },
        },
        {
          id: "cieipsych-u3-m1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Elaborative rehearsal transfers information to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensory memory" },
              { id: "b", text: "Long-term memory" },
              { id: "c", text: "Short-term memory" },
              { id: "d", text: "Nowhere" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Elaborative rehearsal",
                statement: "Transfers info to LTM.",
              },
            ],
            steps: [
              {
                reasoning: "Elaborative rehearsal → LTM.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Long-term memory.",
          },
        },
        {
          id: "cieipsych-u3-m1-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The working memory model was proposed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atkinson and Shiffrin" },
              { id: "b", text: "Pavlov" },
              { id: "c", text: "Ebbinghaus" },
              { id: "d", text: "Baddeley and Hitch" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Working memory",
                statement: "Baddeley & Hitch's model.",
              },
            ],
            steps: [
              {
                reasoning: "Baddeley & Hitch proposed working memory.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Baddeley and Hitch.",
          },
        },
        {
          id: "cieipsych-u3-m1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The central executive in working memory:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Controls attention and coordinates the slave systems",
              },
              { id: "b", text: "Is the phonological loop" },
              { id: "c", text: "Stores verbal information" },
              { id: "d", text: "Stores visual information" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Central executive",
                statement: "Controls attention, coordinates systems.",
              },
            ],
            steps: [
              {
                reasoning: "Central executive controls attention.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Controls attention and coordinates systems.",
          },
        },
        {
          id: "cieipsych-u3-m1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The phonological loop handles:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Visual information" },
              { id: "b", text: "All information equally" },
              { id: "c", text: "Spatial information" },
              { id: "d", text: "Verbal and auditory information" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phonological loop",
                statement: "Verbal/auditory storage.",
              },
            ],
            steps: [
              {
                reasoning: "Phonological loop = verbal info.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Verbal and auditory information.",
          },
        },
        {
          id: "cieipsych-u3-m1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The visuo-spatial sketchpad handles:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Visual and spatial information" },
              { id: "b", text: "Attention only" },
              { id: "c", text: "Verbal information" },
              { id: "d", text: "Long-term storage" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Visuo-spatial sketchpad",
                statement: "Visual/spatial storage.",
              },
            ],
            steps: [
              {
                reasoning: "Sketchpad = visual/spatial info.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Visual and spatial information.",
          },
        },
        {
          id: "cieipsych-u3-m1-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between maintenance and elaborative rehearsal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rehearsal types",
                statement: "Maintenance = STM; elaborative = LTM.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maintenance rehearsal repeats info to keep it in STM.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Elaborative rehearsal links info to meaning, transferring to LTM.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Maintenance keeps in STM; elaborative transfers to LTM.",
          },
        },
        {
          id: "cieipsych-u3-m1-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways forgetting occurs in the multi-store model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Forgetting mechanisms",
                statement: "Decay, displacement, interference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "STM: decay (trace fades) and displacement (new info pushes out old).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "LTM: retrieval failure or interference.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Decay/displacement (STM), interference/retrieval failure (LTM).",
          },
        },
        {
          id: "cieipsych-u3-m1-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the working memory model improves on the multi-store model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Working memory advantage",
                statement: "Multiple systems explain complex tasks.",
              },
            ],
            steps: [
              {
                reasoning: "It replaces unitary STM with specialised systems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explains how we handle verbal and visual info simultaneously.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Central executive explains attention and task-switching.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Specialised systems explain multitasking and attention better.",
          },
        },
        {
          id: "cieipsych-u3-m1-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student can hold a phone number while looking at a map. Explain using working memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Working memory multitasking",
                statement: "Separate systems handle different info types.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Phone number held in phonological loop (verbal info).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Map processed in visuo-spatial sketchpad (visual info).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Central executive coordinates both tasks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This is impossible under the unitary STM model.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Separate slave systems handle verbal and visual info simultaneously.",
          },
        },
        {
          id: "cieipsych-u3-m1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ebbinghaus's forgetting curve shows memory decays:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rapidly at first, then more slowly" },
              { id: "b", text: "Never" },
              { id: "c", text: "Only at the end" },
              { id: "d", text: "Steadily over time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Forgetting curve",
                statement: "Rapid initial decay, then levels off.",
              },
            ],
            steps: [
              {
                reasoning: "Forgetting is fastest initially.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Rapidly at first, then slowly.",
          },
        },
        {
          id: "cieipsych-u3-m1-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'overlearning' and why does it help memory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Overlearning",
                statement: "Extra rehearsal beyond mastery.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Overlearning means rehearsing beyond what is needed to learn.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It slows the forgetting curve — information lasts longer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Extra rehearsal slows forgetting.",
          },
        },
        {
          id: "cieipsych-u3-m1-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'cocktail party effect' demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selective attention" },
              { id: "b", text: "LTM" },
              { id: "c", text: "Divided attention" },
              { id: "d", text: "Sensory memory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cocktail party effect",
                statement: "Noticing own name in noise = selective attention.",
              },
            ],
            steps: [
              {
                reasoning: "Noticing name in noise = selective attention.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Selective attention.",
          },
        },
        {
          id: "cieipsych-u3-m1-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between selective and divided attention.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attention types",
                statement: "Selective = one stream; divided = two tasks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selective attention: focusing on one stimulus while ignoring others.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divided attention: doing two tasks at once — performance drops.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Selective = one stream; divided = multitasking (worse performance).",
          },
        },
        {
          id: "cieipsych-u3-m1-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why chunking increases STM capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chunking",
                statement: "Grouping items fits more into STM.",
              },
            ],
            steps: [
              {
                reasoning:
                  "STM holds ~7 items — chunking groups items into meaningful units.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A phone number 07700900123 becomes 4 chunks instead of 11 digits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fewer 'items' means more total information fits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Grouping reduces item count — more info fits in ~7 chunks.",
          },
        },
        {
          id: "cieipsych-u3-m1-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the multi-store model of memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multi-store evaluation",
                statement: "Simple but oversimplified.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: simple, clear model of memory flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: supported by evidence (digit span, primacy/recency).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: STM is not unitary — working memory shows multiple systems.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: rehearsal is not the only way to transfer to LTM.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Simple and supported but oversimplified — STM isn't unitary, rehearsal not only route.",
          },
        },
        {
          id: "cieipsych-u3-m1-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sensory memory holds information for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Permanently" },
              { id: "b", text: "A fraction of a second to a few seconds" },
              { id: "c", text: "Hours" },
              { id: "d", text: "Days" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sensory memory",
                statement: "Very brief store (<1 second to few seconds).",
              },
            ],
            steps: [
              {
                reasoning: "Sensory memory is very brief.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Fraction of a second to few seconds.",
          },
        },
        {
          id: "cieipsych-u3-m1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'interference' in forgetting?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interference",
                statement: "Memories competing and disrupting recall.",
              },
            ],
            steps: [
              {
                reasoning: "Similar memories interfere with each other.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Retroactive: new info disrupts old; proactive: old disrupts new.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Memories competing; retroactive (new disrupts old) and proactive (old disrupts new).",
          },
        },
        {
          id: "cieipsych-u3-m1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'digit span' is used to measure STM capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digit span",
                statement: "Measures STM capacity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Participants repeat back increasingly long digit sequences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The maximum recalled (~7) indicates STM capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rehearsal prevents decay during the task.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Maximum digits recalled (~7) measures STM capacity.",
          },
        },
        {
          id: "cieipsych-u3-m1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the working memory model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Working memory evaluation",
                statement: "Better than MSM but incomplete.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: explains multitasking and different info types.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: supported by dual-task and brain imaging evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: episodic buffer role still debated.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: doesn't fully explain how info transfers to LTM.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explains multitasking well; but LTM transfer and buffer role unclear.",
          },
        },
        {
          id: "cieipsych-u3-m1-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Long-term memory has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No storage" },
              { id: "b", text: "18 second duration" },
              {
                id: "c",
                text: "Unlimited capacity and potentially permanent duration",
              },
              { id: "d", text: "7 item limit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LTM",
                statement: "Unlimited, potentially permanent.",
              },
            ],
            steps: [
              {
                reasoning: "LTM is unlimited and permanent.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unlimited and potentially permanent.",
          },
        },
        {
          id: "cieipsych-u3-m1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'displacement' in STM forgetting?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Displacement",
                statement: "New info pushes old info out of STM.",
              },
            ],
            steps: [
              {
                reasoning: "When STM is full, new information displaces old.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Old info is lost if not rehearsed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "New info pushes old info out of limited STM.",
          },
        },
        {
          id: "cieipsych-u3-m1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the episodic buffer extends working memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Episodic buffer",
                statement: "Integrates info from slave systems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The episodic buffer was added later to working memory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It integrates verbal and visual info into episodes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It also links working memory to LTM.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Integrates verbal/visual info and links to LTM.",
          },
        },
        {
          id: "cieipsych-u3-m1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which system stores verbal information in working memory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Episodic buffer" },
              { id: "b", text: "Visuo-spatial sketchpad" },
              { id: "c", text: "Phonological loop" },
              { id: "d", text: "Central executive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phonological loop",
                statement: "Verbal storage.",
              },
            ],
            steps: [
              {
                reasoning: "Phonological loop = verbal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Phonological loop.",
          },
        },
        {
          id: "cieipsych-u3-m1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'motivated forgetting'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Motivated forgetting",
                statement: "Deliberate or unconscious avoidance of memories.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It involves repression or deliberate avoidance of distressing memories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Related to psychodynamic theory.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deliberate/unconscious avoidance of distressing memories.",
          },
        },
        {
          id: "cieipsych-u3-m1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the multi-store model's explanation of STM capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Capacity evaluation",
                statement: "Digit span supports but oversimplifies.",
              },
            ],
            steps: [
              {
                reasoning: "Digit span (~7) supports limited STM capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But chunking shows capacity depends on meaningful grouping.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Working memory shows STM isn't a single store.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "So '7 items' is a simplification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Digit span supports limit but chunking and working memory complicate it.",
          },
        },
        {
          id: "cieipsych-u3-m1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is rehearsal important for memory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rehearsal importance",
                statement: "Transfers and maintains memory.",
              },
            ],
            steps: [
              {
                reasoning: "Maintenance rehearsal keeps info in STM.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Elaborative rehearsal transfers to LTM for long-term retention.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Maintenance keeps in STM; elaborative transfers to LTM.",
          },
        },
      ],
    },
  ],
};
