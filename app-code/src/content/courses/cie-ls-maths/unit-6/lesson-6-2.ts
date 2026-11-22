import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cilm-u6-lesson-6-2",
  code: "6-2",
  title: "Composite shapes and scale",
  goal: "I CAN find areas of composite shapes by splitting or subtracting, and work with scale drawings.",
  standards: ["0862 Measure: composite shapes and scale"],
  vocabulary: [
    { term: "Composite shape", definition: "A shape formed by combining simpler shapes." },
    { term: "Scale factor", definition: "The ratio between a drawing/model and the real object." },
    { term: "Scale drawing", definition: "A diagram where all lengths are multiplied by the same scale factor." },
    { term: "Enlargement factor", definition: "Scale factor $>1$ makes the drawing bigger than reality." },
    { term: "Subtraction method", definition: "Finding area by calculating a large shape minus a cut-out." },
    { term: "Addition method", definition: "Finding area by calculating each part and adding." },
  ],
  concepts: [
    {
      id: "cilm-u6-composite",
      title: "Composite shapes",
      skill: "Find areas by splitting into rectangles/triangles or subtracting holes from larger shapes.",
      lesson: {
        sections: [
          {
            heading: "Two methods",
            body: "**Addition**: split into simple shapes, add areas.\n\n**Subtraction**: big shape minus cut-out.\n\nAn L-shape: either two rectangles added, or big rectangle minus missing corner.",
          },
          {
            heading: "Choosing the method",
            body: "Use whichever gives fewer/simpler calculations. Draw the split lines first. Label all dimensions — don't lose track of which lengths are given.",
          },
          {
            heading: "Checking",
            body: "Estimate the answer — is it reasonable? Area should be less than the bounding rectangle. Perimeter needs actual boundary only, not internal split lines.",
          },
        ],
        keyFormulas: [
          { name: "Composite area", statement: "$A_{total} = \\sum A_{parts}$ or $A_{big} - A_{cutout}$." },
        ],
        workedExample: {
          problem: "An L-shape is made from a $10 \\times 8$ rectangle with a $4 \\times 3$ corner removed. Find the area.",
          solution: "Big rectangle: $10 \\times 8 = 80$. Cut-out: $4 \\times 3 = 12$. Area $= 80 - 12 = 68$ units².",
        },
      },
      questions: [
        {
          id: "cilm-u6-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A composite shape is made of two rectangles. To find its area you should...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Subtract one from the other" },
              { id: "b", text: "Add all side lengths" },
              { id: "c", text: "Add the two rectangle areas" },
              { id: "d", text: "Multiply the two areas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composite area", statement: "Area of joined shapes = sum of parts (no overlap)." },
            ],
            steps: [
              { reasoning: "Non-overlapping parts → add areas.", working: "A_1 + A_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Add the two rectangle areas",
            commonErrors: ["Choosing (c) — that's perimeter, not area."],
          },
        },
        {
          id: "cilm-u6-comp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A shape is a $12 \\times 6$ rectangle with a $3 \\times 4$ rectangle removed from a corner. Find the area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtraction method", statement: "$144 - 12 = 132$ units²." },
            ],
            steps: [
              { reasoning: "Big: $12\\times6=144$; cut-out: $3\\times4=12$; area $=144-12=132$.", working: "144-12=132", marks: 1, markCode: "M" },
              { reasoning: "$132$ units².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$132$ units²",
            commonErrors: ["Adding instead of subtracting — removed part must be subtracted."],
          },
        },
        {
          id: "cilm-u6-comp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An L-shaped room is made of a $9 \\times 6$ rectangle and a $4 \\times 3$ rectangle attached to one side. Find the area and explain your method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Addition method", statement: "$54 + 12 = 66$ units²." },
            ],
            steps: [
              { reasoning: "Split into two rectangles: $9\\times6=54$ and $4\\times3=12$.", working: "54+12", marks: 1, markCode: "M" },
              { reasoning: "$A = 54 + 12 = 66$ units².", working: "A=66", marks: 1, markCode: "M" },
              { reasoning: "$66$ units².", marks: 1, markCode: "M" },
              { reasoning: "Addition method used — parts don't overlap.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$66$ units² (addition of two rectangles)",
            commonErrors: ["Using wrong rectangle dims — ensure each part's length × width is correct."],
          },
        },
        {
          id: "cilm-u6-comp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A garden is an L-shape: a $15 \\times 10$ m rectangle with a $5 \\times 4$ m rectangle missing from one corner.",
          parts: [
            { label: "a", prompt: "Find the area of the garden.", marks: 3 },
            { label: "b", prompt: "A fence goes around the OUTSIDE only. Find the perimeter.", marks: 4 },
            { label: "c", prompt: "Explain why perimeter is harder than area here.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composite perimeter", statement: "Area: subtract missing corner. Perimeter: trace outer boundary, not formula shortcut." },
            ],
            steps: [
              { part: "a", reasoning: "Big: $15\\times10=150$; missing: $5\\times4=20$; area $=130$ m².", working: "150-20=130", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$130$ m².", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Trace outer boundary: depends on which corner — assume standard L: lengths $15+10+5+4+10+5$ or similar; perimeter $=$ sum of outer edges.", working: "\\text{trace boundary}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "For L with notch: outer edges $15+10+5+4+10+5=49$... must trace carefully.", working: "perimeter=49\\text{ or similar}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Perimeter found by tracing, not $2(l+w)$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reasonable perimeter.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area has simple subtract method; perimeter requires tracing actual boundary — internal edges don't count but outer notches do.", working: "\\text{trace vs formula}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $130$ m² (b) perimeter by tracing outer boundary (~$50$ m depending on notch position) (c) area = subtract; perimeter = trace boundary",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Area correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "3-4", descriptor: "Perimeter traced correctly.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["In (b) using $2(l+w)=50$ — that's only valid for full rectangles."],
          },
        },
        {
          id: "cilm-u6-comp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find the area of an L-shaped composite figure, the best first step is to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use $\\pi r^2$" },
              { id: "b", text: "Multiply length by width of the bounding box" },
              { id: "c", text: "Split it into rectangles or subtract a missing corner" },
              { id: "d", text: "Add all the side lengths" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composite method", statement: "Split into simple shapes, or big shape minus cut-out." },
            ],
            steps: [
              { reasoning: "Composite area = sum of parts or big minus cut-out.", working: "split/subtract", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Split it into rectangles or subtract a missing corner",
            commonErrors: ["Choosing (c) — bounding box overcounts the missing corner."],
          },
        },
        {
          id: "cilm-u6-comp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shape is a $10 \\times 8$ rectangle with a $3 \\times 2$ rectangle removed from a corner. Find the area.",
          response: { type: "numeric", parts: [{ label: "area", answer: 74 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtraction method", statement: "$80 - 6 = 74$ units²." },
            ],
            steps: [
              { reasoning: "$10\\times8 - 3\\times2 = 80-6 = 74$.", working: "80-6=74", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$74$ units²",
            commonErrors: ["$86$ — adding the cut-out instead of subtracting."],
          },
        },
        {
          id: "cilm-u6-comp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A composite shape is made of a $6 \\times 4$ rectangle joined to a $5 \\times 3$ rectangle (no overlap). Find the total area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Addition method", statement: "$24 + 15 = 39$ units²." },
            ],
            steps: [
              { reasoning: "$6\\times4 = 24$ and $5\\times3 = 15$.", working: "24+15", marks: 1, markCode: "M" },
              { reasoning: "$A = 39$ units².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$39$ units²",
            commonErrors: ["Adding side lengths instead of areas."],
          },
        },
        {
          id: "cilm-u6-comp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "When finding the perimeter of a composite shape, the internal lines you draw to split it are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Counted twice" },
              { id: "b", text: "Ignored for area only" },
              { id: "c", text: "Not counted — only the outer boundary counts" },
              { id: "d", text: "Counted in the perimeter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composite perimeter", statement: "Perimeter traces the outer boundary only — split lines are internal." },
            ],
            steps: [
              { reasoning: "Internal split lines are not part of the boundary.", working: "outer only", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Not counted — only the outer boundary counts",
            commonErrors: ["Including split lines — they aren't on the boundary."],
          },
        },
        {
          id: "cilm-u6-comp-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A $9 \\times 6$ rectangle has a $2 \\times 2$ square removed from one corner. Find the remaining area.",
          response: { type: "numeric", parts: [{ label: "area", answer: 50 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtraction method", statement: "$54 - 4 = 50$ units²." },
            ],
            steps: [
              { reasoning: "$9\\times6 - 2\\times2 = 54-4 = 50$.", working: "54-4=50", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$50$ units²",
            commonErrors: ["$58$ — added the cut-out instead of subtracting."],
          },
        },
        {
          id: "cilm-u6-comp-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A T-shape is made from a $12 \\times 5$ rectangle with a $4 \\times 3$ rectangle centred on top. Find the total area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Addition method", statement: "$60 + 12 = 72$ units²." },
            ],
            steps: [
              { reasoning: "Bottom: $12\\times5 = 60$; top: $4\\times3 = 12$.", working: "60+12", marks: 1, markCode: "M" },
              { reasoning: "$A = 72$ units².", working: "72", marks: 1, markCode: "M" },
              { reasoning: "$72$ units² — parts don't overlap.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72$ units²",
            commonErrors: ["Bounding box $12\\times8=96$ — overcounts the empty corners."],
          },
        },
        {
          id: "cilm-u6-comp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The subtraction method for composite area is used when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You need the perimeter" },
              { id: "b", text: "The shape is a simple rectangle" },
              { id: "c", text: "Two shapes overlap completely" },
              { id: "d", text: "A large shape has a piece cut out of it" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtraction method", statement: "Big rectangle minus cut-out gives the remaining area." },
            ],
            steps: [
              { reasoning: "Cut-outs → subtract from the larger shape.", working: "big - cutout", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A large shape has a piece cut out of it",
            commonErrors: ["Confusing it with the addition method."],
          },
        },
        {
          id: "cilm-u6-comp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $14 \\times 9$ rectangle has a $4 \\times 5$ rectangle removed from the middle of one side. Find the area.",
          response: { type: "numeric", parts: [{ label: "area", answer: 106 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtraction method", statement: "$126 - 20 = 106$ units²." },
            ],
            steps: [
              { reasoning: "$14\\times9 - 4\\times5 = 126-20 = 106$.", working: "126-20=106", marks: 1, markCode: "M" },
              { reasoning: "$106$ units².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$106$ units²",
            commonErrors: ["$146$ — added instead of subtracting."],
          },
        },
        {
          id: "cilm-u6-comp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the correct approach to finding the perimeter of an L-shaped composite figure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trace and sum only the outer boundary edges" },
              { id: "b", text: "Sum of areas of the parts" },
              { id: "c", text: "Multiply the longest and shortest sides" },
              { id: "d", text: "$2 \\times$ (bounding rectangle perimeter)" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composite perimeter", statement: "Trace the outer boundary; internal edges don't count." },
            ],
            steps: [
              { reasoning: "Perimeter = sum of outer boundary edges only.", working: "outer boundary", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Trace and sum only the outer boundary edges",
            commonErrors: ["Choosing (a) — bounding rectangle perimeter is wrong for L-shapes."],
          },
        },
        {
          id: "cilm-u6-comp-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A rectangular patio is $16 \\times 12$ m with a $4 \\times 6$ m rectangular corner cut out.",
          parts: [
            { label: "a", prompt: "Find the area using the subtraction method.", marks: 2 },
            { label: "b", prompt: "Find the area by splitting the shape into two rectangles.", marks: 2 },
            { label: "c", prompt: "Explain why both methods give the same answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Two methods", statement: "Subtraction: $192-24$; addition: e.g. $16\\times6 + 12\\times6 = 96+72 = 168$. Both count the same region." },
            ],
            steps: [
              { part: "a", reasoning: "$16\\times12 - 4\\times6 = 192-24 = 168$ m².", working: "168\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Split: $16\\times6 + (12-6)\\times12 = 96+72 = 168$ m² (or equivalent split).", working: "168\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct split giving same area.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both count exactly the same region — splitting adds the pieces that subtraction removes.", working: "same region", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $168$ m² (b) $168$ m² (c) both count the same region",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["In (b) overlapping rectangles — ensure the split parts don't double-count."],
          },
        },
        {
          id: "cilm-u6-comp-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A shape fits inside a $20 \\times 15$ bounding rectangle. Two rectangular cut-outs of $5 \\times 4$ and $3 \\times 3$ are removed. What is the area of the shape?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$300$ units²" },
              { id: "b", text: "$271$ units²" },
              { id: "c", text: "$280$ units²" },
              { id: "d", text: "$259$ units²" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtraction method", statement: "$300 - 20 - 9 = 271$." },
            ],
            steps: [
              { reasoning: "$300 - 5\\times4 - 3\\times3 = 300-20-9 = 271$.", working: "271", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $271$ units²",
            commonErrors: ["Choosing (b) — forgot to subtract the cut-outs."],
          },
        },
        {
          id: "cilm-u6-comp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An L-shaped desk is made from a $10 \\times 8$ rectangle with a $4 \\times 6$ rectangle attached along one full side. Find the total area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Addition method", statement: "Depending on split: $10\\times8 + 4\\times6 = 80+24 = 104$ units² (if attached externally)." },
            ],
            steps: [
              { reasoning: "Main rectangle: $10\\times8 = 80$.", working: "80", marks: 1, markCode: "M" },
              { reasoning: "Attached part: $4\\times6 = 24$; total $80+24 = 104$.", working: "104", marks: 1, markCode: "M" },
              { reasoning: "$104$ units² — assuming no overlap.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$104$ units²",
            commonErrors: ["Subtracting the attached part — it's added, not removed."],
          },
        },
      ],
    },
    {
      id: "cilm-u6-scale",
      title: "Scale and bearings",
      skill: "Use scale factors to convert between drawings and real measurements.",
      lesson: {
        sections: [
          {
            heading: "Scale factor",
            body: "A scale of $1:100$ means $1$ unit on drawing $= 100$ units real.\n\n- Drawing $\\to$ real: multiply by scale factor\n- Real $\\to$ drawing: divide by scale factor",
          },
          {
            heading: "Area and volume scale",
            body: "If lengths scale by $k$, areas scale by $k^2$ and volumes by $k^3$. A $1:10$ scale model has $100$ times less area and $1000$ times less volume.",
          },
          {
            heading: "Bearings",
            body: "Bearings measure clockwise from north: $3$ digits, e.g. $060°$, $135°$, $270°$. Always three figures with leading zeros.",
          },
        ],
        keyFormulas: [
          { name: "Scale conversion", statement: "Real $=$ drawing $\\times$ scale factor; drawing $=$ real $\\div$ scale factor." },
          { name: "Area scale", statement: "Areas scale by (scale factor)²; volumes by (scale factor)³." },
        ],
        workedExample: {
          problem: "A map scale is $1:50\\,000$. Two towns are $4$ cm apart on the map. Find the real distance in km.",
          solution: "$4 \\times 50\\,000 = 200\\,000$ cm $= 2$ km.",
        },
      },
      questions: [
        {
          id: "cilm-u6-scale-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A scale of $1:200$ means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ cm on drawing $= 200$ cm real" },
              { id: "b", text: "$200$ cm on drawing $= 1$ cm real" },
              { id: "c", text: "The drawing is $200$ times bigger" },
              { id: "d", text: "$1$ cm on drawing $= 2$ m real" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scale", statement: "$1:n$ means drawing unit represents $n$ real units." },
            ],
            steps: [
              { reasoning: "$1$ cm drawing $= 200$ cm real $= 2$ m real.", working: "1:200", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $1$ cm on drawing $= 200$ cm real",
            commonErrors: ["Choosing (b) — scale is drawing:real, not real:drawing."],
          },
        },
        {
          id: "cilm-u6-scale-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a $1:500$ scale drawing, a room is $8$ cm long. What is the real length in metres?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Scale conversion", statement: "$8 \\times 500 = 4000$ cm $= 40$ m." },
            ],
            steps: [
              { reasoning: "$8 \\times 500 = 4000$ cm $= 40$ m.", working: "8\\times500=4000\\text{ cm}=40\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "$40$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ m",
            commonErrors: ["Stopping at $4000$ cm — must convert to metres."],
          },
        },
        {
          id: "cilm-u6-scale-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A model car is built at scale $1:24$. The real car is $4.8$ m long. Find the model length and explain the area relationship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale models", statement: "Length: $4.8\\text{ m} \\div 24 = 0.2$ m $= 20$ cm. Area scales by $24^2=576$ times less." },
            ],
            steps: [
              { reasoning: "$4.8 \\text{ m} = 480$ cm; $480 \\div 24 = 20$ cm.", working: "20\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Model length $= 20$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Area: real/model area ratio $= 24^2 = 576$.", working: "24^2=576", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation of squared scaling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ cm; areas scale by $576$ (squared factor)",
            commonErrors: ["Saying area scales by $24$ — areas use squared scale factor."],
          },
        },
        {
          id: "cilm-u6-scale-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A floor plan uses scale $1:100$. A room measures $7$ cm × $5$ cm on the plan.",
          parts: [
            { label: "a", prompt: "Find the real dimensions in metres.", marks: 2 },
            { label: "b", prompt: "Find the real area of the room.", marks: 2 },
            { label: "c", prompt: "Find the real perimeter.", marks: 2 },
            { label: "d", prompt: "A second plan uses scale $1:50$ for the same room. Find its dimensions on that plan.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale plans", statement: "Convert cm→m, apply scale, compute area/perimeter, reverse scale for new plan." },
            ],
            steps: [
              { part: "a", reasoning: "$7 \\times 100 = 700$ cm $= 7$ m; $5 \\times 100 = 500$ cm $= 5$ m.", working: "7 \\times 5\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$A = 7 \\times 5 = 35$ m².", working: "35\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P = 2(7+5) = 24$ m.", working: "24\\text{ m}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Real $7$ m $=700$ cm; $700 \\div 50 = 14$ cm.", working: "14\\text{ cm}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$5$ m $=500$ cm; $500 \\div 50 = 10$ cm.", working: "10\\text{ cm}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Dimensions $14 \\times 10$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $7$ m × $5$ m (b) $35$ m² (c) $24$ m (d) $14$ cm × $10$ cm",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "New scale correct.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) multiplying instead of dividing — drawing is SMALLER than real."],
          },
        },
        {
          id: "cilm-u6-scale-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A map has scale $1:1000$. This means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ cm on the map $= 1000$ cm in reality" },
              { id: "b", text: "The map is $1000$ times bigger than reality" },
              { id: "c", text: "$1$ m on the map $= 1000$ m in reality" },
              { id: "d", text: "$1000$ cm on the map $= 1$ cm in reality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scale", statement: "$1:n$ means $1$ drawing unit represents $n$ real units." },
            ],
            steps: [
              { reasoning: "$1$ cm map $= 1000$ cm $= 10$ m real.", working: "1:1000", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $1$ cm on the map $= 1000$ cm in reality",
            commonErrors: ["Choosing (b) — scale is drawing:real, not real:drawing."],
          },
        },
        {
          id: "cilm-u6-scale-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a $1:200$ scale drawing, a line is $3$ cm long. What is the real length in metres?",
          response: { type: "numeric", parts: [{ label: "real length (m)", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Scale conversion", statement: "$3 \\times 200 = 600$ cm $= 6$ m." },
            ],
            steps: [
              { reasoning: "$3\\times200 = 600$ cm $= 6$ m.", working: "600\\text{ cm}=6\\text{ m}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$6$ m",
            commonErrors: ["Answering $600$ — that's cm, must convert to m."],
          },
        },
        {
          id: "cilm-u6-scale-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A real wall is $25$ m long. On a $1:500$ scale drawing, how long is the wall in cm?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Scale conversion", statement: "$25$ m $= 2500$ cm; $2500\\div500 = 5$ cm." },
            ],
            steps: [
              { reasoning: "$25$ m $= 2500$ cm; drawing $= 2500\\div500 = 5$ cm.", working: "5\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "$5$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ cm",
            commonErrors: ["Multiplying by $500$ — going real→drawing requires dividing."],
          },
        },
        {
          id: "cilm-u6-scale-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "If lengths on a drawing are scaled by factor $k$, the areas scale by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2k$" },
              { id: "b", text: "$k^2$" },
              { id: "c", text: "$k^3$" },
              { id: "d", text: "$k$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Area scale", statement: "Lengths $\\times k$ → areas $\\times k^2$." },
            ],
            steps: [
              { reasoning: "Area scales by the square of the length factor: $k^2$.", working: "k^2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $k^2$",
            commonErrors: ["Choosing (a) — that's for lengths."],
          },
        },
        {
          id: "cilm-u6-scale-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a $1:10\\,000$ map, two points are $2.5$ cm apart. What is the real distance in metres?",
          response: { type: "numeric", parts: [{ label: "distance (m)", answer: 250 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Scale conversion", statement: "$2.5\\times10\\,000 = 25\\,000$ cm $= 250$ m." },
            ],
            steps: [
              { reasoning: "$2.5\\times10000 = 25000$ cm $= 250$ m.", working: "25000\\text{ cm}=250\\text{ m}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$250$ m",
            commonErrors: ["Answering $25000$ — must convert cm to m."],
          },
        },
        {
          id: "cilm-u6-scale-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A model is built at scale $1:20$. The real object is $8$ m long. Find the model length and state how the surface areas compare.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale models", statement: "Model $=800\\div20 = 40$ cm; areas scale by $20^2 = 400$." },
            ],
            steps: [
              { reasoning: "$8$ m $= 800$ cm; $800\\div20 = 40$ cm.", working: "40\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Model length $=40$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Areas scale by $20^2 = 400$ — model area is $400$ times smaller.", working: "20^2=400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ cm; areas differ by factor $400$",
            commonErrors: ["Saying areas differ by $20$ — must square the scale factor."],
          },
        },
        {
          id: "cilm-u6-scale-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To convert a measurement from drawing to real size, you should...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add the scale factor" },
              { id: "b", text: "Divide by the scale factor" },
              { id: "c", text: "Square the scale factor" },
              { id: "d", text: "Multiply by the scale factor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Scale conversion", statement: "Real $=$ drawing $\\times$ scale factor." },
            ],
            steps: [
              { reasoning: "Drawing → real: multiply by the scale factor.", working: "\\times n", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Multiply by the scale factor",
            commonErrors: ["Choosing (a) — that's real → drawing."],
          },
        },
        {
          id: "cilm-u6-scale-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A real fence is $60$ m long. On a $1:300$ scale plan, how long is the fence in cm?",
          response: { type: "numeric", parts: [{ label: "plan length (cm)", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Scale conversion", statement: "$60$ m $= 6000$ cm; $6000\\div300 = 20$ cm." },
            ],
            steps: [
              { reasoning: "$6000\\div300 = 20$ cm.", working: "20\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "$20$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ cm",
            commonErrors: ["$18000$ cm — multiplied instead of dividing."],
          },
        },
        {
          id: "cilm-u6-scale-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If lengths scale by factor $k$, volumes scale by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$k^2$" },
              { id: "b", text: "$k^3$" },
              { id: "c", text: "$k$" },
              { id: "d", text: "$3k$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Volume scale", statement: "Lengths $\\times k$ → volumes $\\times k^3$." },
            ],
            steps: [
              { reasoning: "Volume scales by $k^3$ (three dimensions).", working: "k^3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $k^3$",
            commonErrors: ["Choosing (b) — that's the AREA scale factor."],
          },
        },
        {
          id: "cilm-u6-scale-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A map uses scale $1:25\\,000$. Two towns are $6$ cm apart on the map.",
          parts: [
            { label: "a", prompt: "Find the real distance in kilometres.", marks: 2 },
            { label: "b", prompt: "On a different map of scale $1:50\\,000$, how far apart would the towns be?", marks: 2 },
            { label: "c", prompt: "Explain the unit conversions you used.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale maps", statement: "Real $=$ map $\\times$ factor; convert cm→m→km ($\\div100$, $\\div1000$)." },
            ],
            steps: [
              { part: "a", reasoning: "$6\\times25000 = 150\\,000$ cm $= 1500$ m $= 1.5$ km.", working: "1.5\\text{ km}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Real $=1500$ m $=150\\,000$ cm; $150000\\div50000 = 3$ cm.", working: "3\\text{ cm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$100$ cm $= 1$ m and $1000$ m $= 1$ km — two division steps.", working: "\\div100, \\div1000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.5$ km (b) $3$ cm (c) cm→m→km conversions",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["In (b) using $6$ cm directly — must convert via real distance."],
          },
        },
        {
          id: "cilm-u6-scale-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A $1:10$ scale model represents a real surface area of $500$ cm². What is the model's surface area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ cm²" },
              { id: "b", text: "$5000$ cm²" },
              { id: "c", text: "$0.5$ cm²" },
              { id: "d", text: "$50$ cm²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Area scale", statement: "Areas scale by $k^2 = 100$: $500\\div100 = 5$ cm²." },
            ],
            steps: [
              { reasoning: "Area ratio $=10^2=100$; model $=500\\div100 = 5$ cm².", working: "500\\div100=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$ cm²",
            commonErrors: ["Choosing (b) — divided by $10$ (length factor) instead of $100$."],
          },
        },
        {
          id: "cilm-u6-scale-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ship sails due east from port. State its bearing, giving a reason for your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Bearings", statement: "Bearings are measured clockwise from north, written as three digits." },
            ],
            steps: [
              { reasoning: "Due east is $90°$ clockwise from north.", working: "90°", marks: 1, markCode: "M" },
              { reasoning: "Written as a three-figure bearing: $090°$.", working: "090°", marks: 1, markCode: "M" },
              { reasoning: "Bearing $=090°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$090°$",
            commonErrors: ["Writing $90°$ without the leading zero — bearings need three figures."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u6-composite-scale-notes",
      title: "Composite shapes and scale — revision notes",
      summary: "Add/subtract method, scale factors, area/volume scaling.",
      sections: [
        {
          heading: "Composite shapes",
          body: "Split and add, or big minus cut-out. Perimeter = trace outer boundary only. Area methods are flexible; perimeter needs care.",
        },
        {
          heading: "Scale",
          body: "$1:n$ drawing:real. Real $=$ drawing $\\times n$; drawing $=$ real $\\div n$. Lengths $\\times k$, areas $\\times k^2$, volumes $\\times k^3$.",
        },
      ],
    },
  ],
};
