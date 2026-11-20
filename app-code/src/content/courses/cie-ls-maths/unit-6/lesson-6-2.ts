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
              { id: "a", text: "Add the two rectangle areas" },
              { id: "b", text: "Multiply the two areas" },
              { id: "c", text: "Add all side lengths" },
              { id: "d", text: "Subtract one from the other" },
            ],
            correctChoiceId: "a",
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
              { id: "c", text: "$1$ cm on drawing $= 2$ m real" },
              { id: "d", text: "The drawing is $200$ times bigger" },
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
