import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "va-u1-lesson-1-3",
  code: "1-3",
  title: "Mixed Media and Experimental Techniques",
  goal: "I CAN combine different materials and processes — collage, printmaking, digital tools — to expand visual possibilities.",
  standards: ["Studio Practice", "Experimentation"],
  vocabulary: [
    { term: "Mixed media", definition: "Artworks combining two or more distinct materials, e.g. paint, paper, fabric, found objects." },
    { term: "Collage", definition: "An artwork assembled by gluing cut or torn materials onto a surface." },
    { term: "Assemblage", definition: "A three-dimensional work combining found objects into a sculptural composition." },
    { term: "Frottage", definition: "A rubbing technique transferring texture from a surface onto paper using graphite or crayon." },
    { term: "Layering", definition: "Building up transparent or opaque layers so earlier marks show through later ones." },
    { term: "Found materials", definition: "Everyday objects or materials repurposed as art materials." },
  ],
  concepts: [
    {
      id: "va-u1-collage-mixed",
      title: "Collage and mixed media",
      skill: "Combine painted, drawn, printed and found elements into a unified mixed media composition.",
      lesson: {
        sections: [
          { heading: "Why mix media", body: "Different materials carry different meanings and textures: newspaper clippings bring real-world text, fabric brings touch, paint brings colour. Mixing them lets an artist layer literal and symbolic content, and lets chance (torn edges, overlaps) contribute to the image." },
          { heading: "Collage techniques", body: "Cut versus tear: clean cuts feel precise and designed; torn edges feel raw and spontaneous. Layering order matters — background first, focal elements on top. Adherents include glue stick, matte medium and gel medium; each affects surface and longevity." },
          { heading: "Unifying a mixed work", body: "A mixed media piece risks looking like a scrapbook. Unify it through a limited palette, a repeated motif, consistent edge quality, or a unifying ground colour. The strongest works let the material differences show while still reading as one image." },
        ],
        keyFormulas: [
          { name: "Cut vs tear", statement: "Cut edges = precise/designed; torn edges = raw/spontaneous" },
          { name: "Unifying devices", statement: "Limited palette, repeated motif, consistent edges, unifying ground" },
        ],
        workedExample: {
          problem: "A student glues photographs, fabric and paint onto a board but the result looks disjointed. Suggest three ways to unify it.",
          solution: "Restrict the palette to two or three colours across all elements; add a repeated motif (e.g. a border pattern or recurring shape) linking the sections; and unify edges by either trimming everything cleanly or distressing everything consistently.",
        },
      },
      questions: [
        {
          id: "va-u1-collage-mixed-q1", difficulty: "foundation", totalMarks: 2,
          stem: "The main difference between cutting and tearing paper for collage is that tearing tends to produce:",
          response: { type: "mcq", choices: [
            { id: "a", text: "More precise, designed edges" },
            { id: "b", text: "Rawer, more spontaneous edges" },
            { id: "c", text: "Waterproof edges" },
            { id: "d", text: "Symmetrical edges" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cut vs tear", statement: "Torn edges look raw and spontaneous; cut edges look precise." }],
            steps: [
              { reasoning: "Torn edges create irregular, raw contours associated with spontaneity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rawer, more spontaneous edges",
            commonErrors: ["Reversing the connotations of cut and tear."],
          },
        },
        {
          id: "va-u1-collage-mixed-q2", difficulty: "core", totalMarks: 3,
          stem: "Explain two reasons an artist might choose mixed media rather than a single medium such as oil paint.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Mixed media rationale", statement: "Materials carry meaning and texture; layering and chance expand possibilities." }],
            steps: [
              { reasoning: "Different materials bring real-world associations and textures impossible in one medium.", marks: 1, markCode: "M" },
              { reasoning: "Layering and juxtaposition allow literal and symbolic content to coexist.", marks: 1, markCode: "M" },
              { reasoning: "Chance effects (torn edges, overlaps) add spontaneous qualities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Material meaning, layered juxtaposition and productive chance.",
            commonErrors: ["Saying mixed media is just 'easier' rather than expressive."],
          },
        },
        {
          id: "va-u1-collage-mixed-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how an artist can unify a mixed media work that combines very different materials.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Unifying mixed media", statement: "Palette, motif, edge quality and ground colour can bind disparate materials." }],
            steps: [
              { reasoning: "Restrict the palette so all materials share colour relationships.", marks: 1, markCode: "M" },
              { reasoning: "Repeat a motif or pattern across sections to create visual links.", marks: 1, markCode: "M" },
              { reasoning: "Unify edge quality or ground colour so materials feel part of one surface.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: unification can come from colour, rhythm or surface rather than sameness of material.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limit palette, repeat motifs, unify edges or ground — bind materials into one image.",
            commonErrors: ["Assuming different materials must be made identical to feel unified."],
          },
        },
        {
          id: "va-u1-collage-mixed-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the artistic value of found materials in contemporary art.",
          parts: [
            { label: "a", prompt: "Define found materials and assemblage.", marks: 2 },
            { label: "b", prompt: "Explain how found objects carry meaning into an artwork.", marks: 2 },
            { label: "c", prompt: "Assess whether using found objects is an artistic choice or a shortcut.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Found materials", statement: "Repurposed objects bring their own histories and associations into the work." }],
            steps: [
              { part: "a", reasoning: "Found materials = everyday objects repurposed; assemblage = 3D arrangement of them.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both terms accurately defined.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Objects carry prior uses and associations that the artist can invoke or subvert.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains meaning transferred from object to artwork.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Found objects are a deliberate conceptual choice, not a shortcut — selection and arrangement are artistic acts.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement recognising the skill involved in selection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Repurposed objects and 3D assemblage. (b) They bring existing associations. (c) Selection and arrangement make it an artistic choice.",
            commonErrors: ["Dismissing found objects as lacking skill."],
          },
        },
        {
          id: "va-u1-collage-mixed-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Collage is best defined as:",
          response: { type: "mcq", choices: [
            { id: "a", text: "A three-dimensional arrangement of objects" },
            { id: "b", text: "An artwork assembled by gluing cut or torn materials onto a surface" },
            { id: "c", text: "A rubbing of a textured surface" },
            { id: "d", text: "A single-medium painting technique" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Collage", statement: "Cut or torn materials glued onto a surface to form an image." }],
            steps: [
              { reasoning: "Collage combines adhered cut or torn elements on a surface.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An artwork assembled by gluing cut or torn materials onto a surface",
            commonErrors: ["Confusing collage (2D surface) with assemblage (3D)."],
          },
        },
        {
          id: "va-u1-collage-mixed-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Assemblage differs from collage in that assemblage is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always made with paint" },
            { id: "b", text: "A three-dimensional arrangement of found objects" },
            { id: "c", text: "Limited to paper materials" },
            { id: "d", text: "Drawn rather than constructed" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Assemblage", statement: "Found objects combined into a three-dimensional sculptural composition." }],
            steps: [
              { reasoning: "Assemblage is the 3D counterpart to flat collage.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A three-dimensional arrangement of found objects",
            commonErrors: ["Confusing 2D collage with 3D assemblage."],
          },
        },
        {
          id: "va-u1-collage-mixed-q7", difficulty: "core", totalMarks: 2,
          stem: "The choice of adhesive in a collage — glue stick versus gel medium — mainly affects:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The colour of the image" },
            { id: "b", text: "The surface finish and longevity of the work" },
            { id: "c", text: "The composition of the image" },
            { id: "d", text: "The size of the elements" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adhesives", statement: "Different adherents affect surface sheen, texture and archival longevity." }],
            steps: [
              { reasoning: "Adhesives differ in finish, flexibility and permanence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The surface finish and longevity of the work",
            commonErrors: ["Treating adhesive choice as irrelevant to the finished surface."],
          },
        },
        {
          id: "va-u1-collage-mixed-q8", difficulty: "core", totalMarks: 2,
          stem: "In building a collage, the correct general layering order is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Focal elements first, background last" },
            { id: "b", text: "Background first, focal elements on top" },
            { id: "c", text: "All elements simultaneously" },
            { id: "d", text: "Random order with no hierarchy" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Layering order", statement: "Background layers are placed first so focal elements sit on top." }],
            steps: [
              { reasoning: "Layering builds from ground upward so focal elements remain visible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Background first, focal elements on top",
            commonErrors: ["Placing focal elements first so they get buried."],
          },
        },
        {
          id: "va-u1-collage-mixed-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Restricting the colour palette in a mixed media work unifies it because it:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Makes every material identical" },
            { id: "b", text: "Creates shared colour relationships across different materials" },
            { id: "c", text: "Removes the need for composition" },
            { id: "d", text: "Reduces the number of elements allowed" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Palette unification", statement: "Shared colours bind disparate materials into one visual field." }],
            steps: [
              { reasoning: "A limited palette gives all materials common colour relationships.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Creates shared colour relationships across different materials",
            commonErrors: ["Thinking unification requires identical materials rather than shared colour."],
          },
        },
        {
          id: "va-u1-collage-mixed-q10", difficulty: "core", totalMarks: 2,
          stem: "Torn paper edges in a collage tend to suggest:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Precision and control" },
            { id: "b", text: "Rawness and spontaneity" },
            { id: "c", text: "Mechanical reproduction" },
            { id: "d", text: "Formal symmetry" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cut versus tear", statement: "Torn edges read as raw and spontaneous; cut edges as precise." }],
            steps: [
              { reasoning: "Torn edges are irregular and read as spontaneous.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rawness and spontaneity",
            commonErrors: ["Reversing the connotations of torn and cut edges."],
          },
        },
        {
          id: "va-u1-collage-mixed-q11", difficulty: "core", totalMarks: 3,
          stem: "Describe how an artist could plan the composition of a collage before gluing anything down.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Collage planning", statement: "Arrange and photograph arrangements before committing adhesive." }],
            steps: [
              { reasoning: "Cut or tear elements first and arrange them loosely on the ground to test composition.", marks: 1, markCode: "M" },
              { reasoning: "Photograph or sketch arrangements to compare options before gluing.", marks: 1, markCode: "M" },
              { reasoning: "Check balance, focal point and overlaps once a strong arrangement is chosen.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arrange elements dry, photograph options, then commit the strongest composition.",
            commonErrors: ["Gluing elements immediately without testing arrangements."],
          },
        },
        {
          id: "va-u1-collage-mixed-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how found objects and materials carry meaning into an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Found meaning", statement: "Repurposed materials arrive with prior uses and associations." }],
            steps: [
              { reasoning: "Everyday objects carry histories — a ticket stub suggests travel, a key suggests access or secrecy.", marks: 1, markCode: "M" },
              { reasoning: "The artist selects and arranges objects to invoke or subvert those associations.", marks: 1, markCode: "M" },
              { reasoning: "Meaning is therefore doubled: the object's past plus the artist's new context.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: found materials are carriers of pre-existing narrative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Found objects bring their own histories; the artist's arrangement recontextualises that meaning.",
            commonErrors: ["Treating found materials as neutral rather than meaningful."],
          },
        },
        {
          id: "va-u1-collage-mixed-q13", difficulty: "foundation", totalMarks: 3,
          stem: "Name three materials usable in a mixed media work and state the association each brings.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Material associations", statement: "Each material carries texture, history and cultural meaning." }],
            steps: [
              { reasoning: "Names three valid materials, e.g. newspaper, fabric and paint.", marks: 1, markCode: "M" },
              { reasoning: "States that newspaper brings text and real-world information.", marks: 1, markCode: "M" },
              { reasoning: "States that fabric suggests touch and domesticity while paint brings colour and gesture.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Newspaper = text/information; fabric = touch/domesticity; paint = colour/gesture.",
            commonErrors: ["Listing materials without their associations."],
          },
        },
        {
          id: "va-u1-collage-mixed-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that mixed media is simply 'sticking things together' with no artistic skill.",
          parts: [
            { label: "a", prompt: "Define mixed media as an artistic practice.", marks: 2 },
            { label: "b", prompt: "Explain the skill involved in selecting and arranging disparate materials.", marks: 2 },
            { label: "c", prompt: "Assess whether the claim has any validity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Mixed media skill", statement: "Selection, arrangement and unification are deliberate artistic decisions." }],
            steps: [
              { part: "a", reasoning: "Mixed media combines two or more materials deliberately for meaning, texture and layering.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Definition captures intentional combination rather than random pasting.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Choosing materials for their associations and arranging them for composition requires judgement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Unifying disparate elements is a distinct compositional skill.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The claim confuses medium with method — the skill lies in decisions, not the materials.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement rejecting the dismissive claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Deliberate combination of materials for meaning. (b) Selection and unification require skill. (c) The claim mistakes medium for method.",
            commonErrors: ["Judging mixed media by its materials rather than its decisions."],
          },
        },
        {
          id: "va-u1-collage-mixed-q15", difficulty: "core", totalMarks: 4,
          stem: "A collage combining photographs, fabric and paint looks disjointed. Describe two ways to unify it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Unification devices", statement: "Palette, motif, edge quality and ground colour bind mixed materials." }],
            steps: [
              { reasoning: "Restrict the palette so all elements share colour relationships.", marks: 1, markCode: "M" },
              { reasoning: "Repeat a motif or border across sections to create visual links.", marks: 1, markCode: "M" },
              { reasoning: "Unify edge quality or apply a unifying ground colour/texture over all elements.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: unification comes from shared colour, rhythm or surface.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limit palette, repeat motifs, unify edges or add a common ground.",
            commonErrors: ["Trying to make all materials look identical rather than unified."],
          },
        },
        {
          id: "va-u1-collage-mixed-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate whether chance in collage — torn edges, overlaps, accidents — is a flaw or a feature.",
          parts: [
            { label: "a", prompt: "Explain how collage processes introduce chance into the image.", marks: 2 },
            { label: "b", prompt: "Analyse how an artist can guide chance rather than merely accept it.", marks: 2 },
            { label: "c", prompt: "Assess whether chance should be avoided in collage.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Guided chance", statement: "Chance generates forms the artist could not plan; guidance makes it expressive." }],
            steps: [
              { part: "a", reasoning: "Torn edges, overlaps and glue effects produce unpredictable contours and juxtapositions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explains specific mechanisms of chance in collage.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Artists select materials, arrange dry compositions and choose where chance operates.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains that preparation frames which accidents become meaningful.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Chance adds spontaneity and discovery; avoiding it removes collage's distinctive energy.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on chance as expressive resource.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Torn edges and overlaps generate unpredictability. (b) Artists frame chance through selection and arrangement. (c) Chance is a feature when guided.",
            commonErrors: ["Treating all chance outcomes as failures."],
          },
        },
      ],
    },
    {
      id: "va-u1-experimental-process",
      title: "Printmaking, frottage and digital techniques",
      skill: "Use transfer, rubbing and digital processes to generate imagery through chance and layering.",
      lesson: {
        sections: [
          { heading: "Process-led techniques", body: "Printmaking, frottage and monoprinting generate images partly through chance. Frottage rubs graphite over textured surfaces (leaves, bark, manhole covers) to transfer their patterns. Monoprinting inks a plate once, so each impression is unique — the matrix can be altered between prints." },
          { heading: "Digital tools", body: "Digital painting, photo manipulation and generative tools expand mark-making: layers function like transparent glazes, filters mimic textures, and code can generate patterns impossible by hand. The digital 'material' still has a character — smooth, undoable, infinitely reproducible — that shapes results." },
          { heading: "Combining analogue and digital", body: "Many artists print or draw analogically, scan, manipulate digitally, then print or paint over the result. Hybrid workflows combine the accident of physical process with the control of digital editing. Document each stage — the process itself often becomes part of the work's meaning." },
        ],
        keyFormulas: [
          { name: "Frottage", statement: "Rubbing graphite/crayon over a textured surface transfers its pattern" },
          { name: "Monoprint", statement: "One-off print from an inked plate; each impression is unique" },
          { name: "Hybrid workflow", statement: "Analogue process + digital manipulation + physical output = layered authorship" },
        ],
        workedExample: {
          problem: "An artist wants organic leaf-like textures without drawing them by hand. Describe a frottage-based approach.",
          solution: "Place paper over a real leaf or textured surface and rub gently with the side of a graphite stick or crayon; the raised veins and contours transfer as tonal marks. The resulting texture can be used directly or scanned and layered digitally.",
        },
      },
      questions: [
        {
          id: "va-u1-experimental-process-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Frottage involves:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Carving a design into wood" },
            { id: "b", text: "Rubbing a surface to transfer its texture" },
            { id: "c", text: "Pouring paint onto canvas" },
            { id: "d", text: "Cutting shapes from paper" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Frottage", statement: "A rubbing technique that transfers surface texture onto paper." }],
            steps: [
              { reasoning: "Frottage is a rubbing transfer of texture using graphite or crayon.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rubbing a surface to transfer its texture",
            commonErrors: ["Confusing frottage with printmaking or carving."],
          },
        },
        {
          id: "va-u1-experimental-process-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe two ways digital tools differ from traditional media in the studio.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Digital vs traditional", statement: "Digital media offer undo, layers and reproduction; traditional media offer physical accident." }],
            steps: [
              { reasoning: "Digital layers and undo allow non-destructive experimentation impossible with wet paint.", marks: 1, markCode: "M" },
              { reasoning: "Digital work is infinitely reproducible and easily altered or distributed.", marks: 1, markCode: "M" },
              { reasoning: "Traditional media have physical character — texture, accident, irreversibility — digital lacks unless simulated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Digital: layers, undo, reproduction. Traditional: physical accident and irreversibility.",
            commonErrors: ["Claiming digital is simply 'better' without noting trade-offs."],
          },
        },
        {
          id: "va-u1-experimental-process-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why process-led techniques like frottage and monoprinting appeal to artists.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Process-led art", statement: "Chance and irreversibility generate forms the artist could not plan." }],
            steps: [
              { reasoning: "Chance operations produce textures and compositions beyond deliberate control.", marks: 1, markCode: "M" },
              { reasoning: "The physical trace of the process (rubbing, ink) carries authenticity and indexicality.", marks: 1, markCode: "M" },
              { reasoning: "Constraints (one-off prints, surface texture) force inventive responses.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: process becomes a co-author of the image.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chance, physical trace and constraint make process a creative partner.",
            commonErrors: ["Treating process-led work as random rather than guided chance."],
          },
        },
        {
          id: "va-u1-experimental-process-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the value of combining analogue and digital processes in art-making.",
          parts: [
            { label: "a", prompt: "Describe one hybrid workflow an artist might use.", marks: 2 },
            { label: "b", prompt: "Explain what each stage of that workflow contributes.", marks: 2 },
            { label: "c", prompt: "Assess whether hybrid work is authentic art or merely technical skill.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Hybrid authorship", statement: "Analogue accident plus digital control creates layered meaning." }],
            steps: [
              { part: "a", reasoning: "E.g. draw/paint → scan → manipulate digitally → print or paint over.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "A coherent hybrid workflow described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Analogue stage contributes accident and physical trace; digital stage contributes control, layering and revision.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the distinct contribution of each stage.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Hybrid work is authentic when conceptual decisions guide the process; skill alone is not the measure.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on authenticity in process-based art.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Analogue-digital-analogue pipeline. (b) Accident + control + output. (c) Authenticity comes from guided intention.",
            commonErrors: ["Assuming digital manipulation removes authenticity."],
          },
        },
        {
          id: "va-u1-experimental-process-q5", difficulty: "foundation", totalMarks: 2,
          stem: "A monoprint differs from other print techniques in that it produces:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Identical numbered editions" },
            { id: "b", text: "Unique one-off impressions" },
            { id: "c", text: "Images carved into wood" },
            { id: "d", text: "Photographic reproductions" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Monoprint", statement: "A plate is inked once, so each impression is unique." }],
            steps: [
              { reasoning: "The single inking means every impression differs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Unique one-off impressions",
            commonErrors: ["Confusing monoprint (one-off) with editioned printmaking."],
          },
        },
        {
          id: "va-u1-experimental-process-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Frottage works best on which kinds of surfaces?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Smooth, flat glass" },
            { id: "b", text: "Textured surfaces such as bark, leaves or manhole covers" },
            { id: "c", text: "Wet, glossy surfaces" },
            { id: "d", text: "Purely digital textures" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Frottage surfaces", statement: "Raised texture transfers through rubbing; flat surfaces yield little." }],
            steps: [
              { reasoning: "Frottage transfers raised texture, so textured surfaces are required.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Textured surfaces such as bark, leaves or manhole covers",
            commonErrors: ["Expecting frottage to record smooth surfaces."],
          },
        },
        {
          id: "va-u1-experimental-process-q7", difficulty: "core", totalMarks: 2,
          stem: "In digital painting, layers function most like which traditional technique?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Underpainting with opaque colour" },
            { id: "b", text: "Transparent glazing layers" },
            { id: "c", text: "Dry brushing" },
            { id: "d", text: "Impasto" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Digital layers", statement: "Digital layers stack transparently like successive glazes." }],
            steps: [
              { reasoning: "Digital layers build colour transparently, analogous to glazing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Transparent glazing layers",
            commonErrors: ["Digital layers are non-destructive, unlike physical paint layers."],
          },
        },
        {
          id: "va-u1-experimental-process-q8", difficulty: "core", totalMarks: 2,
          stem: "A hybrid workflow combining analogue and digital processes gains its character from:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Eliminating all physical accident" },
            { id: "b", text: "Combining physical accident with digital control" },
            { id: "c", text: "Using only one medium consistently" },
            { id: "d", text: "Avoiding any printed output" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Hybrid workflow", statement: "Analogue accident plus digital control creates layered authorship." }],
            steps: [
              { reasoning: "Hybrid workflows deliberately combine the two media's strengths.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Combining physical accident with digital control",
            commonErrors: ["Treating hybrid work as replacing one medium with the other."],
          },
        },
        {
          id: "va-u1-experimental-process-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Process-led techniques like frottage and monoprinting appeal to artists mainly because they:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Are faster than drawing" },
            { id: "b", text: "Make process itself a creative partner through chance and constraint" },
            { id: "c", text: "Require no artistic skill" },
            { id: "d", text: "Produce identical results every time" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Process-led art", statement: "Chance and irreversibility generate forms the artist could not plan." }],
            steps: [
              { reasoning: "Chance operations and constraints make process a co-author of the image.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Make process itself a creative partner through chance and constraint",
            commonErrors: ["Dismissing process-led work as random rather than guided."],
          },
        },
        {
          id: "va-u1-experimental-process-q10", difficulty: "core", totalMarks: 2,
          stem: "In monoprinting, the artist can vary each impression by:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Using identical ink layers" },
            { id: "b", text: "Altering the inked plate between impressions" },
            { id: "c", text: "Printing at different times of day" },
            { id: "d", text: "Changing the paper size only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Variable monoprint", statement: "The plate can be re-inked or altered between unique impressions." }],
            steps: [
              { reasoning: "Altering the single-inked plate between prints creates variation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Altering the inked plate between impressions",
            commonErrors: ["Assuming monoprints are identical like editioned prints."],
          },
        },
        {
          id: "va-u1-experimental-process-q11", difficulty: "core", totalMarks: 3,
          stem: "Describe the steps for creating a frottage drawing of a leaf's texture.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Frottage process", statement: "Place textured surface under paper and rub with a soft medium." }],
            steps: [
              { reasoning: "Place paper over the textured surface (leaf, bark) and secure it flat.", marks: 1, markCode: "M" },
              { reasoning: "Rub gently with the side of a graphite stick or crayon to transfer raised texture.", marks: 1, markCode: "M" },
              { reasoning: "Lift the paper to reveal the transferred pattern, usable directly or digitally.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Paper over texture, rub with graphite/crayon, lift to reveal the transferred pattern.",
            commonErrors: ["Pressing too hard, which fills recesses and loses detail."],
          },
        },
        {
          id: "va-u1-experimental-process-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between chance and accident in process-led art techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Guided chance", statement: "Chance is framed by the artist's setup; accident is uncontrolled error." }],
            steps: [
              { reasoning: "Chance operates within parameters the artist sets — chosen surfaces, inks and procedures.", marks: 1, markCode: "M" },
              { reasoning: "Accident falls outside intention entirely and may need correction or rejection.", marks: 1, markCode: "M" },
              { reasoning: "Skilled artists widen the zone of chance while keeping outcomes within an expressive range.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: guided chance is a method; accident is its failure mode.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chance is framed by the artist's setup; accident is uncontrolled error.",
            commonErrors: ["Treating chance and accident as the same thing."],
          },
        },
        {
          id: "va-u1-experimental-process-q13", difficulty: "foundation", totalMarks: 3,
          stem: "Name three experimental techniques and state one use for each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Experimental techniques", statement: "Frottage, monoprinting and digital layering each generate imagery differently." }],
            steps: [
              { reasoning: "Names three valid techniques, e.g. frottage, monoprinting, digital collage or generative tools.", marks: 1, markCode: "M" },
              { reasoning: "States that frottage transfers surface texture and monoprinting gives unique impressions.", marks: 1, markCode: "M" },
              { reasoning: "States that digital tools offer layers, filters and reproducibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Frottage = texture transfer; monoprint = unique impressions; digital = layers and filters.",
            commonErrors: ["Naming techniques without their functions."],
          },
        },
        {
          id: "va-u1-experimental-process-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that digital tools make traditional experimental techniques obsolete.",
          parts: [
            { label: "a", prompt: "Describe what digital tools offer that traditional media cannot.", marks: 2 },
            { label: "b", prompt: "Explain what physical process offers that digital tools cannot replicate.", marks: 2 },
            { label: "c", prompt: "Assess whether obsolescence is an accurate description.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Media comparison", statement: "Digital offers control and reproduction; physical offers accident and indexical trace." }],
            steps: [
              { part: "a", reasoning: "Undo, non-destructive layers, infinite reproducibility and algorithmic generation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explains digital advantages over physical media.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Physical accident, material resistance and the trace of real contact are not fully simulatable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the irreplaceable qualities of physical process.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The claim ignores what each medium uniquely provides; they complement rather than replace.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement rejecting obsolescence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Digital: undo, layers, reproduction. (b) Physical: accident and trace. (c) They complement, not replace.",
            commonErrors: ["Declaring one medium universally superior."],
          },
        },
        {
          id: "va-u1-experimental-process-q15", difficulty: "core", totalMarks: 4,
          stem: "Explain why documenting each stage of a hybrid art process can become part of the work's meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Process documentation", statement: "Recording stages reveals authorship, decisions and the dialogue between media." }],
            steps: [
              { reasoning: "Documentation shows where physical accident was kept or corrected by digital means.", marks: 1, markCode: "M" },
              { reasoning: "It reveals the artist's decisions at each stage, making intention visible.", marks: 1, markCode: "M" },
              { reasoning: "The process trace itself becomes content — evidence of the dialogue between media.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the making is part of the meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Documentation exposes the artist's decisions and the process becomes part of the meaning.",
            commonErrors: ["Treating documentation as administrative rather than expressive."],
          },
        },
        {
          id: "va-u1-experimental-process-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that experimentation without a goal is just messing about.",
          parts: [
            { label: "a", prompt: "Define what experimental practice means in art-making.", marks: 2 },
            { label: "b", prompt: "Explain how open-ended experiments can feed finished work.", marks: 2 },
            { label: "c", prompt: "Assess whether goal-free experimentation has artistic value.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Experimental value", statement: "Open play discovers possibilities that directed work cannot reach." }],
            steps: [
              { part: "a", reasoning: "Experimental practice deliberately tests materials, processes and chance outcomes.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Definition distinguishes guided experiment from aimless activity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Experiments generate textures, compositions and techniques later developed into finished works.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the pipeline from play to purposeful artwork.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Play is research — discovery precedes intention; the claim mistakes process for product.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement defending exploratory practice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Deliberate testing of materials and process. (b) Experiments feed finished work. (c) Goal-free play is artistic research.",
            commonErrors: ["Confusing open exploration with lack of purpose."],
          },
        },
      ],
    },
  ],
};
