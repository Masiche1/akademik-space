import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "va-u2-lesson-2-1",
  code: "2-1",
  title: "Analysing Artworks: Formal Elements",
  goal: "I CAN analyse an artwork's formal elements — line, colour, texture, space, composition — and explain their effects.",
  standards: ["Critical Studies", "Analysis"],
  vocabulary: [
    { term: "Formal analysis", definition: "Describing and interpreting an artwork through its visual elements and principles of organisation." },
    { term: "Line", definition: "A mark with direction and length; can be contour, implied or expressive." },
    { term: "Texture", definition: "The perceived surface quality of an artwork, actual or implied." },
    { term: "Picture plane", definition: "The flat surface of the artwork on which the image is constructed." },
    { term: "Proportion", definition: "The relative size of parts of a form or of forms to each other." },
    { term: "Stylisation", definition: "Deliberate departure from naturalistic representation toward a simplified or conventional style." },
  ],
  concepts: [
    {
      id: "va-u2-formal-elements",
      title: "The elements of visual analysis",
      skill: "Identify and describe the formal elements in an artwork and link each to its visual effect.",
      lesson: {
        sections: [
          { heading: "Line, shape and form", body: "**Line** directs the eye and conveys energy; contour lines define edges, implied lines connect elements. **Shape** is flat; **form** is three-dimensional. **Proportion** governs believable or expressive scale." },
          { heading: "Colour, value and texture", body: "**Colour** carries hue, value and saturation; **value** structures light and dark. **Texture** can be actual (raised surface) or implied (painted illusion). Texture invites touch and signals material." },
          { heading: "Space and composition", body: "**Space** is created through perspective, overlapping, size and colour temperature. **Composition** organises elements via balance, focal point and negative space. Together these elements produce the viewer's first impression before any subject matter is considered." },
        ],
        keyFormulas: [
          { name: "Formal elements", statement: "Line, shape/form, colour/value, texture, space, composition" },
          { name: "Analysis order", statement: "Describe elements first, then explain effects, then interpret meaning" },
        ],
        workedExample: {
          problem: "In a portrait, the artist uses warm red tones, soft blended edges and a centred composition. Describe two formal elements and their effects.",
          solution: "Warm red tones create intimacy and emotional intensity while advancing toward the viewer; blended edges soften the figure and suggest vulnerability; centred composition gives the sitter stability and directness.",
        },
      },
      questions: [
        {
          id: "va-u2-formal-elements-q1", difficulty: "foundation", totalMarks: 2,
          stem: "In formal analysis, 'implied texture' refers to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The illusion of texture created by paint or marks" },
            { id: "b", text: "Texture you can physically feel" },
            { id: "c", text: "Texture applied only in sculpture" },
            { id: "d", text: "Texture found in the artist's materials" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Implied texture", statement: "Painted or drawn illusion of surface quality rather than actual relief." }],
            steps: [
              { reasoning: "Implied texture is a visual illusion of surface quality within a two-dimensional work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The illusion of texture created by paint or marks",
            commonErrors: ["Confusing implied texture with actual texture."],
          },
        },
        {
          id: "va-u2-formal-elements-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe how an artist might use line to create a sense of energy in an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line and energy", statement: "Dynamic, gestural or directional lines convey movement and force." }],
            steps: [
              { reasoning: "Diagonal or curving lines suggest movement rather than static horizontals and verticals.", marks: 1, markCode: "M" },
              { reasoning: "Varied line weight and broken lines create rhythm and urgency.", marks: 1, markCode: "M" },
              { reasoning: "Converging or radiating lines direct energy toward a focal point.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dynamic diagonals, varied weight and directional convergence create energy.",
            commonErrors: ["Describing subject matter rather than the formal element of line."],
          },
        },
        {
          id: "va-u2-formal-elements-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how value contrast functions in a two-dimensional artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Value contrast", statement: "Light-dark structure creates depth, focus and mood." }],
            steps: [
              { reasoning: "Contrast between light and dark areas separates forms and creates volume.", marks: 1, markCode: "M" },
              { reasoning: "Highlights draw attention; shadows recede, structuring depth.", marks: 1, markCode: "M" },
              { reasoning: "Chiaroscuro (strong light-dark contrast) heightens drama; low contrast feels calm or hazy.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: value is the structural skeleton of a picture.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Value contrast separates forms, creates depth and sets emotional tone.",
            commonErrors: ["Describing colour hue while ignoring lightness/darkness."],
          },
        },
        {
          id: "va-u2-formal-elements-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Analyse the formal elements of an artwork to explain its visual impact.",
          extract: {
            title: "Described artwork",
            author: "Written for Akademik Space",
            source: "Studio analysis exercise",
            text: "A large oil painting shows a solitary figure on a beach at dusk. The figure is small in the lower third of the canvas; the sky occupies two-thirds and shifts from deep violet at the top to a thin band of orange at the horizon. Rough, visible brushstrokes texture the sky; the figure is rendered in smoother, darker paint.",
          },
          parts: [
            { label: "a", prompt: "Identify two formal elements present in the description.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the colour and texture choices.", marks: 2 },
            { label: "c", prompt: "Evaluate how the composition shapes the viewer's response.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Formal analysis", statement: "Elements and their effects combine to produce overall impact." }],
            steps: [
              { part: "a", reasoning: "Colour (violet-to-orange sky), texture (rough brushwork), composition (small figure, large sky) all valid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two elements correctly identified from the description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Warm horizon against cool violet creates tension; rough texture energises the sky while smooth paint isolates the figure.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effects of colour and texture explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Small figure in vast space creates loneliness or insignificance; viewer's eye travels from figure to expansive sky.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation of compositional effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Colour, texture, composition. (b) Warm-cool tension; texture contrast isolates figure. (c) Vast space makes figure seem small and lonely.",
            commonErrors: ["Listing elements without explaining effects."],
          },
        },
        {
          id: "va-u2-formal-elements-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Which formal element most directly creates the illusion of depth on a flat picture surface?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hue of the colour scheme" },
            { id: "b", text: "Actual raised surface texture" },
            { id: "c", text: "Overlapping forms and relative size" },
            { id: "d", text: "The material of the frame" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Illusion of space", statement: "Overlapping, relative size and placement signal depth on a flat surface." }],
            steps: [
              { reasoning: "Overlapping and diminishing size tell the viewer which forms are nearer or farther.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Overlapping forms and relative size",
            commonErrors: ["Confusing actual texture with spatial depth cues."],
          },
        },
        {
          id: "va-u2-formal-elements-q6", difficulty: "core", totalMarks: 3,
          stem: "Explain how an artist can use warm and cool colours to control the sense of space in a painting.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Colour temperature and space", statement: "Warm colours tend to advance while cool colours recede, shaping perceived depth." }],
            steps: [
              { reasoning: "Warm hues (red, orange, yellow) appear to come forward toward the viewer.", marks: 1, markCode: "M" },
              { reasoning: "Cool hues (blue, green, violet) appear to recede into the distance.", marks: 1, markCode: "M" },
              { reasoning: "Placing warm foregrounds against cool backgrounds therefore deepens spatial recession and also sets mood.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Warm colours advance and cool colours recede, so their placement controls depth and atmosphere.",
            commonErrors: ["Describing colour symbolism instead of spatial effects."],
          },
        },
        {
          id: "va-u2-formal-elements-q7", difficulty: "core", totalMarks: 3,
          stem: "A drawing in which all parallel lines converge toward a single vanishing point is using:",
          response: { type: "mcq", choices: [
            { id: "a", text: "All-over composition" },
            { id: "b", text: "Chiaroscuro lighting" },
            { id: "c", text: "Tonal gradation" },
            { id: "d", text: "One-point linear perspective" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Linear perspective", statement: "Converging parallel lines toward a vanishing point create measurable depth." }],
            steps: [
              { reasoning: "Parallel lines converging signals linear perspective as a spatial device.", marks: 1, markCode: "M" },
              { reasoning: "A single vanishing point indicates one-point perspective specifically.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** One-point linear perspective",
            commonErrors: ["Confusing perspective with tonal or contrast techniques."],
          },
        },
        {
          id: "va-u2-formal-elements-q8", difficulty: "core", totalMarks: 2,
          stem: "Negative space in a composition primarily:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is canvas area the artist failed to use" },
            { id: "b", text: "Defines forms, balances positive shapes and paces the viewer's eye" },
            { id: "c", text: "Describes three-dimensional shadows" },
            { id: "d", text: "Refers to the unpainted border only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Negative space", statement: "Empty areas define forms, balance positives and can become meaningful shapes themselves." }],
            steps: [
              { reasoning: "Negative space actively shapes silhouettes, balances weight and can hide secondary images.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Defines forms, balances positive shapes and paces the viewer's eye",
            commonErrors: ["Treating negative space as merely unused or wasted area."],
          },
        },
        {
          id: "va-u2-formal-elements-q9", difficulty: "foundation", totalMarks: 2,
          stem: "An implied line in an artwork is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "A line suggested by aligned elements, gazes or edges" },
            { id: "b", text: "The decorative border of the canvas" },
            { id: "c", text: "A line drawn strictly with a ruler" },
            { id: "d", text: "A physical ridge of paint or material" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Implied line", statement: "A line created by alignment or direction rather than a continuous drawn mark." }],
            steps: [
              { reasoning: "Implied lines arise from the eye's tendency to connect aligned points or directions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A line suggested by aligned elements, gazes or edges",
            commonErrors: ["Confusing implied lines with contour or outline lines."],
          },
        },
        {
          id: "va-u2-formal-elements-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how an artist's choice of texture can communicate both material and emotion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Texture as language", statement: "Actual and implied textures signal materials and carry emotional associations." }],
            steps: [
              { reasoning: "Actual texture communicates the real surface quality of the medium — rough stone, soft fabric, slick metal.", marks: 1, markCode: "M" },
              { reasoning: "Implied texture lets a flat image suggest surfaces the viewer cannot touch.", marks: 1, markCode: "M" },
              { reasoning: "Rough, agitated textures convey energy, anxiety or violence; smooth textures suggest calm, polish or vulnerability.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: texture is a tactile and emotional language parallel to colour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Texture signals material reality and emotional tone — roughness agitates, smoothness calms.",
            commonErrors: ["Listing textures without linking them to material or feeling."],
          },
        },
        {
          id: "va-u2-formal-elements-q11", difficulty: "core", totalMarks: 2,
          stem: "Chiaroscuro refers to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The repetition of a single motif" },
            { id: "b", text: "Strong contrast between light and dark areas" },
            { id: "c", text: "Perfect mirror symmetry" },
            { id: "d", text: "The use of complementary hues" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Chiaroscuro", statement: "Dramatic light-dark contrast that models form and heightens mood." }],
            steps: [
              { reasoning: "Chiaroscuro is the technique of strong value contrast between light and shadow.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Strong contrast between light and dark areas",
            commonErrors: ["Confusing chiaroscuro with colour contrast rather than value contrast."],
          },
        },
        {
          id: "va-u2-formal-elements-q12", difficulty: "core", totalMarks: 4,
          stem: "Explain three ways an artist can create a focal point that directs the viewer's eye.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Creating a focal point", statement: "Contrast, placement and isolation engineer where the viewer looks first." }],
            steps: [
              { reasoning: "Contrast in colour, value, size or sharpness makes one element stand out from its surroundings.", marks: 1, markCode: "M" },
              { reasoning: "Placement at the centre or at intersections of implied sight-lines (for example rule-of-thirds points) attracts attention.", marks: 1, markCode: "M" },
              { reasoning: "Isolation with negative space or converging directional lines funnels the eye toward the subject.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the focal point is engineered through emphasis and eye-path control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contrast, strategic placement and isolation each create a focal point.",
            commonErrors: ["Naming only one technique or giving no examples."],
          },
        },
        {
          id: "va-u2-formal-elements-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Proportion in art refers to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The relative size of parts to each other and to the whole" },
            { id: "b", text: "The price of the materials used" },
            { id: "c", text: "The dimensions of the canvas" },
            { id: "d", text: "The number of figures depicted" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Proportion", statement: "The relative size relationships among parts of a form or composition." }],
            steps: [
              { reasoning: "Proportion concerns comparative scale of parts within a whole.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The relative size of parts to each other and to the whole",
            commonErrors: ["Confusing proportion with scale or canvas size."],
          },
        },
        {
          id: "va-u2-formal-elements-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Analyse the formal elements of an artwork to explain its visual impact.",
          extract: {
            title: "Described photograph",
            author: "Written for Akademik Space",
            source: "Studio analysis exercise",
            text: "A photograph shows a crowded market street. The stalls on the left are rendered in saturated reds and yellows; the right side fades into pale grey haze. A single figure in dark clothing stands at the centre, sharply focused, while the crowd around is softly blurred.",
          },
          parts: [
            { label: "a", prompt: "Identify two formal elements present in the description.", marks: 2 },
            { label: "b", prompt: "Explain how colour and focus create depth and emphasis.", marks: 2 },
            { label: "c", prompt: "Evaluate how the composition directs the viewer's response.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Formal analysis", statement: "Elements and their effects combine to produce overall impact." }],
            steps: [
              { part: "a", reasoning: "Colour (saturated vs hazy), focus/depth of field, composition (central figure) all valid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two elements correctly identified from the description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Warm saturated colours on the left pull the eye while cool haze recedes on the right, creating spatial depth.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sharp focus on the dark figure isolates it as the focal point against the blurred crowd.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Central placement plus contrast of focus makes the lone figure the narrative hinge amid anonymity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation of compositional effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Colour, focus, composition. (b) Saturation vs haze creates depth; sharp focus isolates figure. (c) Central dark figure dominates the blurred crowd.",
            commonErrors: ["Describing the scene's story without formal elements."],
          },
        },
        {
          id: "va-u2-formal-elements-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the relative scale of a figure to its surroundings can change the meaning of an image.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Scale and meaning", statement: "Figure-to-ground proportion encodes power, vulnerability or relationship." }],
            steps: [
              { reasoning: "A small figure in a vast space conveys insignificance, loneliness or humility.", marks: 1, markCode: "M" },
              { reasoning: "A figure dominating its surroundings conveys power, monumentality or threat.", marks: 1, markCode: "M" },
              { reasoning: "Scale therefore encodes the relationship between the human subject and the environment.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: scale is a meaning-bearing formal choice, not merely a measurement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scale encodes power relations — small figures seem vulnerable, dominant figures seem powerful.",
            commonErrors: ["Treating scale as a neutral technical property."],
          },
        },
        {
          id: "va-u2-formal-elements-q16", difficulty: "core", totalMarks: 2,
          stem: "In a still life, a reflected image in a mirror or window primarily adds:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Implied space and depth" },
            { id: "b", text: "Actual surface texture" },
            { id: "c", text: "Higher colour saturation" },
            { id: "d", text: "Guaranteed symmetry" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reflections and space", statement: "Reflected images extend the depicted world and deepen spatial illusion." }],
            steps: [
              { reasoning: "A reflection implies space beyond the picture plane and adds a second viewpoint.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Implied space and depth",
            commonErrors: ["Assuming reflections only repeat the subject without spatial effect."],
          },
        },
      ],
    },
    {
      id: "va-u2-principles-organisation",
      title: "Principles of organisation",
      skill: "Analyse how balance, contrast, repetition and unity organise an artwork's visual structure.",
      lesson: {
        sections: [
          { heading: "Balance", body: "**Symmetrical balance** mirrors forms around a central axis — stable, formal, ceremonial. **Asymmetrical balance** distributes different elements so visual weight evens out — dynamic, natural. **Radial balance** arranges elements around a centre — energetic, mandala-like." },
          { heading: "Contrast, repetition, unity", body: "**Contrast** in colour, value, size or texture creates emphasis and energy. **Repetition and rhythm** of elements create movement and cohesion. **Unity** is the quality that makes diverse parts feel like one work — achieved through shared palette, motif, edge quality or compositional logic." },
          { heading: "Reading structure", body: "Analyse structure by asking: where is the visual weight? What repeats? What contrasts? How does the eye travel? These questions reveal how the artist engineered the viewer's experience." },
        ],
        keyFormulas: [
          { name: "Balance types", statement: "Symmetrical = stable; asymmetrical = dynamic; radial = central energy" },
          { name: "Organising principles", statement: "Balance + contrast + repetition + unity = visual structure" },
        ],
        workedExample: {
          problem: "A poster repeats a bold geometric shape in different colours and sizes across the page. Which organising principles are at work?",
          solution: "Repetition creates rhythm and brand unity; variation in size and colour creates contrast and hierarchy; the consistent shape links all elements into one unified design.",
        },
      },
      questions: [
        {
          id: "va-u2-principles-organisation-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Radial balance in a composition arranges elements:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Along a horizontal baseline" },
            { id: "b", text: "In mirror image on either side" },
            { id: "c", text: "Around a central point" },
            { id: "d", text: "In random scattered positions" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Radial balance", statement: "Elements distributed evenly around a central axis or point." }],
            steps: [
              { reasoning: "Radial balance centres elements around a point, like spokes of a wheel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Around a central point",
            commonErrors: ["Confusing radial with symmetrical balance."],
          },
        },
        {
          id: "va-u2-principles-organisation-q2", difficulty: "core", totalMarks: 3,
          stem: "Explain how repetition contributes to unity in a visual artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Repetition and unity", statement: "Repeated elements create rhythm and link parts into a coherent whole." }],
            steps: [
              { reasoning: "Repeating shapes, colours or marks creates visual rhythm.", marks: 1, markCode: "M" },
              { reasoning: "Repetition links separated areas, making the work read as one composition.", marks: 1, markCode: "M" },
              { reasoning: "It can also build emphasis — a repeated motif becomes a unifying signature.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repetition builds rhythm and links elements into a unified whole.",
            commonErrors: ["Seeing repetition only as decoration, not structure."],
          },
        },
        {
          id: "va-u2-principles-organisation-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between symmetry and asymmetry as compositional strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Symmetry vs asymmetry", statement: "Symmetry mirrors for stability; asymmetry distributes weight for dynamism." }],
            steps: [
              { reasoning: "Symmetrical composition mirrors elements around a central axis.", marks: 1, markCode: "M" },
              { reasoning: "Asymmetrical composition balances different elements by weight, position and contrast.", marks: 1, markCode: "M" },
              { reasoning: "Symmetry conveys order, formality, ritual; asymmetry conveys energy, naturalism, tension.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: neither is inherently better — each serves different expressive aims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Symmetry = mirrored stability; asymmetry = distributed dynamic balance.",
            commonErrors: ["Claiming symmetry is always more 'correct'."],
          },
        },
        {
          id: "va-u2-principles-organisation-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Analyse how principles of organisation shape meaning in an artwork.",
          extract: {
            title: "Described artwork",
            author: "Written for Akademik Space",
            source: "Studio analysis exercise",
            text: "A textile hanging features a repeated geometric motif in red, black and cream. The motif alternates direction in each row, creating a zigzag rhythm down the cloth. A single unbroken band of cream runs horizontally through the middle, dividing the pattern.",
          },
          parts: [
            { label: "a", prompt: "Identify two organising principles used in a described artwork.", marks: 2 },
            { label: "b", prompt: "Explain how contrast and repetition work together.", marks: 2 },
            { label: "c", prompt: "Evaluate whether unity always requires visual harmony.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Organisation and meaning", statement: "Balance, contrast, repetition and unity encode mood and intent." }],
            steps: [
              { part: "a", reasoning: "Repetition (repeated motif) and contrast (colour alternation, horizontal band) both valid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two organising principles correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Repetition builds rhythm; contrast within the repetition prevents monotony and creates emphasis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the interaction of the two principles.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Unity can come from tension or deliberate dissonance too — harmony is one route, not the only one.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on unity versus dissonance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Repetition and contrast. (b) Rhythm plus emphasis. (c) Unity can arise from tension as well as harmony.",
            commonErrors: ["Defining principles without linking them to meaning."],
          },
        },
        {
          id: "va-u2-principles-organisation-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Asymmetrical balance is achieved when:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Elements are placed randomly" },
            { id: "b", text: "Identical forms mirror each other exactly" },
            { id: "c", text: "Different elements are arranged so their visual weight is equal" },
            { id: "d", text: "All elements radiate from one centre" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Asymmetrical balance", statement: "Unequal but visually equivalent elements create dynamic equilibrium." }],
            steps: [
              { reasoning: "Asymmetrical balance distributes differing elements until their visual weights cancel out.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Different elements are arranged so their visual weight is equal",
            commonErrors: ["Confusing asymmetry with disorder or imbalance."],
          },
        },
        {
          id: "va-u2-principles-organisation-q6", difficulty: "core", totalMarks: 3,
          stem: "Explain how contrast functions as an organising principle in an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contrast", statement: "Differences in colour, value, size or texture create emphasis and energy." }],
            steps: [
              { reasoning: "Contrast separates one element from its surroundings, creating a focal point.", marks: 1, markCode: "M" },
              { reasoning: "It structures the viewer's path by marking what matters and what recedes.", marks: 1, markCode: "M" },
              { reasoning: "Without contrast a composition risks monotony; with it the work gains energy and hierarchy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contrast creates emphasis, hierarchy and energy by separating elements.",
            commonErrors: ["Describing contrast as purely decorative rather than structural."],
          },
        },
        {
          id: "va-u2-principles-organisation-q7", difficulty: "core", totalMarks: 2,
          stem: "Unity in an artwork is best described as:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The quality that makes diverse parts feel like one coherent whole" },
            { id: "b", text: "Perfect mirror symmetry" },
            { id: "c", text: "Realistic detail in every element" },
            { id: "d", text: "The absence of colour" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Unity", statement: "The cohesive quality that binds varied parts into a single work." }],
            steps: [
              { reasoning: "Unity is achieved through shared palette, motif, edge quality or compositional logic.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The quality that makes diverse parts feel like one coherent whole",
            commonErrors: ["Confusing unity with uniformity or sameness."],
          },
        },
        {
          id: "va-u2-principles-organisation-q8", difficulty: "core", totalMarks: 3,
          stem: "Describe how repetition can create rhythm and movement in a composition.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Rhythm", statement: "Repeated elements at intervals create a visual beat that moves the eye." }],
            steps: [
              { reasoning: "Repeated shapes, marks or colours at regular intervals create a beat or pulse.", marks: 1, markCode: "M" },
              { reasoning: "Gradual variation in spacing or size produces syncopation, which feels more dynamic.", marks: 1, markCode: "M" },
              { reasoning: "The rhythm leads the viewer's eye along a path through the work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repetition creates visual rhythm that guides the eye and energises the composition.",
            commonErrors: ["Seeing repetition only as a decorative pattern."],
          },
        },
        {
          id: "va-u2-principles-organisation-q9", difficulty: "foundation", totalMarks: 2,
          stem: "Visual weight refers to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The weight of the frame" },
            { id: "b", text: "The physical heaviness of the materials" },
            { id: "c", text: "The market price of the artwork" },
            { id: "d", text: "How much an element attracts the eye and balances others" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Visual weight", statement: "The perceived pull an element exerts on the composition." }],
            steps: [
              { reasoning: "Visual weight depends on size, colour, contrast, texture and position, not physical mass.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** How much an element attracts the eye and balances others",
            commonErrors: ["Confusing visual weight with literal physical weight."],
          },
        },
        {
          id: "va-u2-principles-organisation-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the choice of balance type can change the mood of an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Balance and mood", statement: "Each balance type carries psychological associations that shape the viewer's response." }],
            steps: [
              { reasoning: "Symmetrical balance conveys order, stability, formality and ceremony.", marks: 1, markCode: "M" },
              { reasoning: "Asymmetrical balance conveys dynamism, naturalism and tension.", marks: 1, markCode: "M" },
              { reasoning: "Radial balance concentrates energy around a centre, producing a mandala-like intensity.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: balance is not neutral — it encodes the temperament of the work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Symmetry calms, asymmetry energises, radial balance intensifies around a centre.",
            commonErrors: ["Describing balance types without linking them to emotional effect."],
          },
        },
        {
          id: "va-u2-principles-organisation-q11", difficulty: "core", totalMarks: 2,
          stem: "A poster uses one repeated logo shape in many colours and sizes. The quality that makes these varied elements feel like a single unified design is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Linear perspective" },
            { id: "b", text: "Unity" },
            { id: "c", text: "Asymmetry" },
            { id: "d", text: "Contrast" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Unity", statement: "The cohesive quality that binds varied elements into one whole." }],
            steps: [
              { reasoning: "Unity is the result of shared motif and logic despite variation in colour and size.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Unity",
            commonErrors: ["Naming repetition or contrast instead of the unifying quality they produce."],
          },
        },
        {
          id: "va-u2-principles-organisation-q12", difficulty: "core", totalMarks: 4,
          stem: "Explain how an artist can use negative space to create meaning rather than merely empty area.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Negative space as content", statement: "Empty areas can form images, pace the eye and signify absence." }],
            steps: [
              { reasoning: "In figure-ground compositions, negative space can resolve into a hidden second image.", marks: 1, markCode: "M" },
              { reasoning: "It shapes and rests the viewer's eye, controlling the pace of looking.", marks: 1, markCode: "M" },
              { reasoning: "Emptiness can signify absence, silence or vulnerability — a psychological content of its own.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: negative space is active compositional material, not leftover canvas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Negative space forms hidden images, paces the eye and can signify absence.",
            commonErrors: ["Treating empty space as a failure of composition."],
          },
        },
        {
          id: "va-u2-principles-organisation-q13", difficulty: "foundation", totalMarks: 2,
          stem: "A composition in which one large dark shape on one side is balanced by several small light shapes on the other is an example of:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Asymmetrical balance" },
            { id: "b", text: "Symmetrical balance" },
            { id: "c", text: "Random placement" },
            { id: "d", text: "Radial balance" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Balance types", statement: "Equal weight can come from mirroring or from distributed difference." }],
            steps: [
              { reasoning: "Dissimilar elements balancing each other by weight is the definition of asymmetrical balance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Asymmetrical balance",
            commonErrors: ["Assuming balance requires identical forms on both sides."],
          },
        },
        {
          id: "va-u2-principles-organisation-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Analyse how principles of organisation shape meaning in an artwork.",
          extract: {
            title: "Described artwork",
            author: "Written for Akademik Space",
            source: "Studio analysis exercise",
            text: "A ceramic tile panel shows a grid of hand-painted fish. The fish alternate direction row by row, creating a zigzag rhythm down the panel. Each fish is outlined in black with interiors filled in alternating blue and white. A single row of red fish runs vertically through the centre, breaking the pattern.",
          },
          parts: [
            { label: "a", prompt: "Identify two organising principles used in the description.", marks: 2 },
            { label: "b", prompt: "Explain how contrast and repetition work together here.", marks: 2 },
            { label: "c", prompt: "Evaluate whether breaking a pattern strengthens or weakens unity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Organisation and meaning", statement: "Balance, contrast, repetition and unity encode mood and intent." }],
            steps: [
              { part: "a", reasoning: "Repetition (gridded fish, alternating fills) and rhythm/contrast (zigzag, red row) all valid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two organising principles correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Repetition builds predictable rhythm; colour and directional contrast within it prevent monotony and create emphasis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the interaction of the two principles.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The red row can strengthen unity by becoming a deliberate focal axis; judgements depend on whether it reads as intentional emphasis or error.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on pattern-breaking and unity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Repetition and contrast/rhythm. (b) Repetition plus internal contrast. (c) A deliberate break can create emphasis and unify around a focal axis.",
            commonErrors: ["Listing principles without linking them to meaning."],
          },
        },
        {
          id: "va-u2-principles-organisation-q15", difficulty: "core", totalMarks: 2,
          stem: "Creating emphasis through scale within a composition works by:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Enlarging one element to raise its visual weight and establish hierarchy" },
            { id: "b", text: "Using only primary colours" },
            { id: "c", text: "Adding more layers of varnish" },
            { id: "d", text: "Repeating the picture frame" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Scale as emphasis", statement: "Enlarging one element raises its visual weight and establishes hierarchy." }],
            steps: [
              { reasoning: "Scale contrast makes one element dominate, creating hierarchy and directing attention.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Enlarging one element to raise its visual weight and establish hierarchy",
            commonErrors: ["Describing size differences without explaining their organisational role."],
          },
        },
        {
          id: "va-u2-principles-organisation-q16", difficulty: "core", totalMarks: 2,
          stem: "Rhythm in visual composition is most closely related to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Colour saturation" },
            { id: "b", text: "Musical notation" },
            { id: "c", text: "Linear perspective" },
            { id: "d", text: "Repeated elements creating a visual beat" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhythm", statement: "A visual beat produced by repeated elements at intervals." }],
            steps: [
              { reasoning: "Visual rhythm is the compositional equivalent of a beat — repetition at measured intervals.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Repeated elements creating a visual beat",
            commonErrors: ["Confusing visual rhythm with musical rhythm as an unrelated art form."],
          },
        },
      ],
    },
  ],
};
