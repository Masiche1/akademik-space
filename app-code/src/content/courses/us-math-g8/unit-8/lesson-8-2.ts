import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "m8-u8-lesson-8-2",
  code: "8-2",
  title: "Geometric Transformations",
  goal: "I CAN perform and describe translations, reflections, rotations, and dilations, and understand their effects on coordinates.",
  standards: ["8.G.A.1", "8.G.A.2", "8.G.A.3", "8.G.A.4", "8.G.A.5"],
  vocabulary: [
    {
      term: "Translation",
      definition:
        "A slide; every point moves the same distance in the same direction.",
    },
    {
      term: "Reflection",
      definition: "A flip over a line; creates a mirror image.",
    },
    {
      term: "Rotation",
      definition: "A turn around a point by a specific angle.",
    },
    {
      term: "Dilation",
      definition:
        "A scaling transformation that changes size but preserves shape.",
    },
    {
      term: "Image",
      definition: "The result of a transformation applied to a figure.",
    },
    {
      term: "Preimage",
      definition: "The original figure before transformation.",
    },
  ],
  concepts: [
    {
      id: "m8-u8-translations-reflections",
      title: "Translations and reflections",
      skill: "Perform translations and reflections on coordinate planes.",
      lesson: {
        sections: [
          {
            heading: "Translations",
            body: "Translation moves every point by the same vector $(a, b)$: $(x, y) \\to (x + a, y + b)$. For $(3, 4)$ translated by $(2, -1)$: $(5, 3)$.",
          },
          {
            heading: "Reflections",
            body: "Reflection over x-axis: $(x, y) \\to (x, -y)$. Over y-axis: $(x, y) \\to (-x, y)$. Over line $y = x$: $(x, y) \\to (y, x)$.",
          },
          {
            heading: "Combining transformations",
            body: "Transformations can be combined: translate then reflect, or reflect then rotate. Order matters for non-commutative operations.",
          },
        ],
        keyFormulas: [
          { name: "Translation", statement: "$(x,y) \\to (x+a, y+b)$" },
          { name: "X-axis reflection", statement: "$(x,y) \\to (x,-y)$" },
          { name: "Y-axis reflection", statement: "$(x,y) \\to (-x,y)$" },
        ],
        workedExample: {
          problem: "Translate $(2, 5)$ by vector $(-3, 2)$.",
          solution: "$(2 + (-3), 5 + 2) = (-1, 7)$.",
        },
      },
      questions: [
        {
          id: "m8-u8-translations-reflections-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Translate point $(3, 4)$ by vector $(2, -1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(5, 3)$" },
              { id: "b", text: "$(1, 5)$" },
              { id: "c", text: "$(6, 3)$" },
              { id: "d", text: "$(5, 5)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Translation",
                statement: "Add vector to coordinates.",
              },
            ],
            steps: [
              {
                reasoning: "$(3+2, 4-1) = (5, 3)$.",
                evidence: "(5,3)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $(5, 3)$",
            commonErrors: ["Adding wrong components."],
          },
        },
        {
          id: "m8-u8-translations-reflections-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Reflect point $(4, -2)$ over the x-axis.",
          response: { type: "numeric", parts: [{ label: "Image", answer: 0 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "X-axis reflection",
                statement: "$(x,y) \\to (x,-y)$",
              },
            ],
            steps: [
              {
                reasoning: "$(4, -2) \\to (4, 2)$.",
                working: "(4,2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "(4,2)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(4, 2)$",
            commonErrors: ["Changing wrong coordinate."],
          },
        },
        {
          id: "m8-u8-translations-reflections-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Perform each transformation.",
          parts: [
            { label: "a", prompt: "Translate $(1, 2)$ by $(3, -1)$", marks: 1 },
            { label: "b", prompt: "Reflect $(5, 3)$ over y-axis", marks: 1 },
            { label: "c", prompt: "Reflect $(-2, 4)$ over x-axis", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Translation",
                statement: "Add vector.",
              },
              {
                kind: "formula",
                name: "Reflections",
                statement: "Negate appropriate coordinate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$(1+3, 2-1) = (4, 1)$.",
                evidence: "(4,1)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$(5,3) \\to (-5, 3)$.",
                evidence: "(-5,3)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$(-2,4) \\to (-2, -4)$.",
                evidence: "(-2,-4)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $(4, 1)$ (b) $(-5, 3)$ (c) $(-2, -4)$",
            commonErrors: ["In (b), negating wrong coordinate."],
          },
        },
        {
          id: "m8-u8-translations-reflections-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Perform each transformation.",
          parts: [
            {
              label: "a",
              prompt: "Translate $(2, -3)$ by $(-1, 4)$",
              marks: 2,
            },
            { label: "b", prompt: "Reflect $(3, -5)$ over y-axis", marks: 2 },
            { label: "c", prompt: "Reflect $(-4, 2)$ over x-axis", marks: 2 },
            { label: "d", prompt: "Translate $(0, 0)$ by $(5, -2)$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Translation",
                statement: "Add vector.",
              },
              {
                kind: "formula",
                name: "Reflections",
                statement: "Negate appropriate coordinate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$(2-1, -3+4) = (1, 1)$.",
                evidence: "(1,1)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$(3,-5) \\to (-3, -5)$.",
                evidence: "(-3,-5)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$(-4,2) \\to (-4, -2)$.",
                evidence: "(-4,-2)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$(0+5, 0-2) = (5, -2)$.",
                evidence: "(5,-2)",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $(1, 1)$ (b) $(-3, -5)$ (c) $(-4, -2)$ (d) $(5, -2)$",
            commonErrors: [
              "In (d), forgetting origin stays at origin before translation.",
            ],
          },
        },
      ],
    },
    {
      id: "m8-u8-rotations-dilations",
      title: "Rotations and dilations",
      skill:
        "Perform rotations about points and dilations centered at origin or other points.",
      lesson: {
        sections: [
          {
            heading: "Rotations",
            body: "90° counterclockwise about origin: $(x, y) \\to (-y, x)$. 180°: $(x, y) \\to (-x, -y)$. 90° clockwise: $(x, y) \\to (y, -x)$.",
          },
          {
            heading: "Dilations",
            body: "Dilation with scale factor $k$ centered at origin: $(x, y) \\to (kx, ky)$. For $k = 2$: doubles size. For $k = \\frac{1}{2}$: halves size.",
          },
          {
            heading: "Combined transformations",
            body: "A figure can be transformed multiple times: rotate then translate, or dilate then reflect. The order affects the final result.",
          },
        ],
        keyFormulas: [
          { name: "90° CCW", statement: "$(x,y) \\to (-y,x)$" },
          { name: "180°", statement: "$(x,y) \\to (-x,-y)$" },
          { name: "Dilation", statement: "$(x,y) \\to (kx,ky)$" },
        ],
        workedExample: {
          problem: "Rotate $(3, 1)$ 90° counterclockwise about origin.",
          solution: "$(3, 1) \\to (-1, 3)$.",
        },
      },
      questions: [
        {
          id: "m8-u8-rotations-dilations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rotate $(2, 5)$ 90° counterclockwise about origin.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-5, 2)$" },
              { id: "b", text: "$(5, -2)$" },
              { id: "c", text: "$(-2, -5)$" },
              { id: "d", text: "$(2, -5)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "90° CCW",
                statement: "$(x,y) \\to (-y,x)$",
              },
            ],
            steps: [
              {
                reasoning: "$(2,5) \\to (-5, 2)$.",
                evidence: "(-5,2)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $(-5, 2)$",
            commonErrors: ["Using wrong rotation rule."],
          },
        },
        {
          id: "m8-u8-rotations-dilations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Dilate $(3, 4)$ by scale factor $2$ centered at origin.",
          response: { type: "numeric", parts: [{ label: "Image", answer: 0 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dilation",
                statement: "$(x,y) \\to (kx,ky)$",
              },
            ],
            steps: [
              {
                reasoning: "$(3,4) \\to (6, 8)$.",
                working: "(6,8)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "(6,8)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(6, 8)$",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "m8-u8-rotations-dilations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Perform each transformation.",
          parts: [
            {
              label: "a",
              prompt: "Rotate $(1, 3)$ 180° about origin",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Dilate $(4, -2)$ by $k = \\frac{1}{2}$",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Rotate $(5, -1)$ 90° clockwise about origin",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "180°",
                statement: "$(x,y) \\to (-x,-y)$",
              },
              {
                kind: "formula",
                name: "Dilation",
                statement: "$(x,y) \\to (kx,ky)$",
              },
              {
                kind: "formula",
                name: "90° CW",
                statement: "$(x,y) \\to (y,-x)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$(1,3) \\to (-1, -3)$.",
                evidence: "(-1,-3)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$(4,-2) \\to (2, -1)$.",
                evidence: "(2,-1)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$(5,-1) \\to (-1, -5)$.",
                evidence: "(-1,-5)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $(-1, -3)$ (b) $(2, -1)$ (c) $(-1, -5)$",
            commonErrors: ["In (c), using wrong rotation direction."],
          },
        },
        {
          id: "m8-u8-rotations-dilations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Perform each transformation.",
          parts: [
            {
              label: "a",
              prompt: "Rotate $(2, 6)$ 90° CCW about origin",
              marks: 2,
            },
            { label: "b", prompt: "Dilate $(-3, 5)$ by $k = 3$", marks: 2 },
            {
              label: "c",
              prompt: "Rotate $(4, -2)$ 180° about origin",
              marks: 2,
            },
            { label: "d", prompt: "Dilate $(0, 0)$ by $k = 5$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "90° CCW",
                statement: "$(x,y) \\to (-y,x)$",
              },
              {
                kind: "formula",
                name: "Dilation",
                statement: "$(x,y) \\to (kx,ky)$",
              },
              {
                kind: "formula",
                name: "180°",
                statement: "$(x,y) \\to (-x,-y)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$(2,6) \\to (-6, 2)$.",
                evidence: "(-6,2)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$(-3,5) \\to (-9, 15)$.",
                evidence: "(-9,15)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$(4,-2) \\to (-4, 2)$.",
                evidence: "(-4,2)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$(0,0) \\to (0, 0)$ (origin stays fixed).",
                evidence: "(0,0)",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $(-6, 2)$ (b) $(-9, 15)$ (c) $(-4, 2)$ (d) $(0, 0)$",
            commonErrors: ["In (d), thinking dilation moves origin."],
          },
        },
      ],
    },
    {
      id: "m8-u8-transformation-properties",
      title: "Transformation properties",
      skill:
        "Understand how transformations affect congruence, similarity, and coordinate geometry.",
      lesson: {
        sections: [
          {
            heading: "Congruence vs similarity",
            body: "Translations, reflections, and rotations preserve **congruence** (same size and shape). Dilations preserve **similarity** (same shape, different size).",
          },
          {
            heading: "Isometry",
            body: "Isometries are transformations that preserve distance and angle: translations, reflections, rotations. Dilations are NOT isometries (they change size).",
          },
          {
            heading: "Coordinate effects",
            body: "Transformations change coordinates but preserve relationships. A triangle's area scales by $k^2$ under dilation; perimeter scales by $k$.",
          },
        ],
        keyFormulas: [
          { name: "Congruence", statement: "Same size and shape" },
          { name: "Similarity", statement: "Same shape, different size" },
          { name: "Isometry", statement: "Preserves distance and angle" },
        ],
        workedExample: {
          problem: "Does dilation by $k = 2$ preserve congruence?",
          solution:
            "No, it preserves similarity but not congruence (size changes).",
        },
      },
      questions: [
        {
          id: "m8-u8-transformation-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which transformation preserves congruence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation" },
              { id: "b", text: "Dilation" },
              { id: "c", text: "Both" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Congruence",
                statement: "Same size and shape.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Translations preserve congruence; dilations do not.",
                evidence: "translation",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Translation",
            commonErrors: ["Confusing congruence with similarity."],
          },
        },
        {
          id: "m8-u8-transformation-properties-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Does a rotation preserve congruence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes" },
              { id: "b", text: "No" },
              { id: "c", text: "Only for 180°" },
              { id: "d", text: "Only for 90°" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isometry",
                statement: "Preserves distance and angle.",
              },
            ],
            steps: [
              {
                reasoning: "Rotations are isometries → preserve congruence.",
                evidence: "yes",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Yes",
            commonErrors: ["Not recognizing rotations as isometries."],
          },
        },
        {
          id: "m8-u8-transformation-properties-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify which transformations preserve congruence vs similarity.",
          parts: [
            { label: "a", prompt: "Translation", marks: 1 },
            { label: "b", prompt: "Reflection", marks: 1 },
            { label: "c", prompt: "Dilation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Congruence/Similarity",
                statement: "Isometries vs dilations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Translation → congruence.",
                evidence: "congruence",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Reflection → congruence.",
                evidence: "congruence",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Dilation → similarity (not congruence).",
                evidence: "similarity",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Congruence (b) Congruence (c) Similarity",
            commonErrors: ["In (c), thinking dilation preserves congruence."],
          },
        },
        {
          id: "m8-u8-transformation-properties-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyze each transformation.",
          parts: [
            { label: "a", prompt: "Does rotation preserve area?", marks: 2 },
            {
              label: "b",
              prompt: "Does dilation by $k=2$ preserve perimeter?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Does translation preserve angles?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Does reflection preserve orientation?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isometry",
                statement: "Preserves distance and angle.",
              },
              {
                kind: "skill",
                name: "Transformation properties",
                statement: "Understand effects.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Yes, rotation preserves area (isometry).",
                evidence: "yes",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "No, dilation scales perimeter by $k$ (not preserved).",
                evidence: "no",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Yes, translation preserves angles.",
                evidence: "yes",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "No, reflection reverses orientation.",
                evidence: "no",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Yes (b) No (c) Yes (d) No",
            commonErrors: ["In (d), not recognizing orientation change."],
          },
        },
      ],
    },
  ],
};
