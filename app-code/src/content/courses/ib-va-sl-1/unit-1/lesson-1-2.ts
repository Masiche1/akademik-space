import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "va-u1-lesson-1-2",
  code: "1-2",
  title: "Colour, Form and Composition",
  goal: "I CAN use colour relationships, tonal structure and compositional devices to organise a visual artwork.",
  standards: ["Studio Practice", "Colour Theory"],
  vocabulary: [
    { term: "Hue", definition: "The name of a colour, e.g. red or blue, independent of lightness or saturation." },
    { term: "Value", definition: "The lightness or darkness of a colour or tone." },
    { term: "Complementary colours", definition: "Colours opposite each other on the colour wheel, e.g. red and green, that intensify each other." },
    { term: "Focal point", definition: "The area of an artwork that first draws the viewer's attention." },
    { term: "Rule of thirds", definition: "A compositional guide placing key elements at intersections of a nine-part grid." },
    { term: "Negative space", definition: "The empty or background space around and between subjects in a composition." },
  ],
  concepts: [
    {
      id: "va-u1-colour-theory",
      title: "Colour relationships",
      skill: "Apply colour wheel relationships — complementary, analogous and triadic — to control harmony and contrast.",
      lesson: {
        sections: [
          { heading: "The colour wheel", body: "Primary colours (red, yellow, blue) cannot be mixed from others; secondary colours (orange, green, violet) mix two primaries; tertiary colours mix a primary and secondary. The wheel organises hues by relationship: adjacent hues are analogous, opposite hues are complementary." },
          { heading: "Harmony and contrast", body: "Analogous schemes (neighbouring hues) feel calm and unified; complementary schemes (opposites) create maximum contrast and vibrancy; triadic schemes (three evenly spaced hues) balance variety with harmony. Value contrast — light against dark — often matters more than hue for readability." },
          { heading: "Colour as meaning", body: "Beyond formal relationships, colour carries cultural and emotional associations: warm hues advance and energise, cool hues recede and calm. Artists exploit or subvert these associations deliberately." },
        ],
        keyFormulas: [
          { name: "Analogous", statement: "3–5 adjacent hues on the wheel = calm, unified harmony" },
          { name: "Complementary", statement: "Opposite hues = maximum contrast and vibrancy" },
          { name: "Triadic", statement: "Three hues spaced evenly around the wheel = balanced variety" },
        ],
        workedExample: {
          problem: "A painting of a market scene feels flat and dull. The artist used red, orange and yellow in similar values. Suggest two colour changes to add interest.",
          solution: "Introduce a complementary accent — blue or blue-green — in shadows or details to create contrast, and increase value range by darkening some areas and lightening others so warm colours separate spatially.",
        },
      },
      questions: [
        {
          id: "va-u1-colour-theory-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Complementary colours are located:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Next to each other on the colour wheel" },
            { id: "b", text: "Opposite each other on the colour wheel" },
            { id: "c", text: "At the centre of the colour wheel" },
            { id: "d", text: "Only in the warm half of the wheel" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Complementary colours", statement: "Hues opposite on the colour wheel that intensify each other." }],
            steps: [
              { reasoning: "Complementary colours sit opposite each other on the colour wheel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Opposite each other on the colour wheel",
            commonErrors: ["Confusing complementary (opposite) with analogous (adjacent)."],
          },
        },
        {
          id: "va-u1-colour-theory-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe the visual effect of an analogous colour scheme and give one subject it would suit.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Analogous scheme", statement: "Adjacent hues create calm, unified colour harmony." }],
            steps: [
              { reasoning: "Uses 3–5 hues adjacent on the colour wheel, sharing undertones.", marks: 1, markCode: "M" },
              { reasoning: "Creates a calm, cohesive, low-contrast harmony.", marks: 1, markCode: "M" },
              { reasoning: "Suits serene subjects like landscapes at dusk or quiet interiors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adjacent hues give calm unity; suits serene or unified subjects.",
            commonErrors: ["Claiming analogous schemes create strong contrast."],
          },
        },
        {
          id: "va-u1-colour-theory-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why value contrast is often more important than hue in a successful composition.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Value over hue", statement: "Light-dark structure guides the eye before colour is even registered." }],
            steps: [
              { reasoning: "Value contrast creates clear separation between forms and directs attention.", marks: 1, markCode: "M" },
              { reasoning: "Works are often read in black and white first; weak value makes colour muddy.", marks: 1, markCode: "M" },
              { reasoning: "Hue harmonies collapse without value structure — a complementary scheme in one value looks flat.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: establish value structure before refining hue relationships.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Value contrast creates structure and readability that hue alone cannot provide.",
            commonErrors: ["Overemphasising hue harmony while ignoring light-dark structure."],
          },
        },
        {
          id: "va-u1-colour-theory-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Analyse how colour choices shape meaning in a visual artwork.",
          parts: [
            { label: "a", prompt: "Define hue, value and saturation as colour properties.", marks: 2 },
            { label: "b", prompt: "Explain how warm and cool colours affect spatial and emotional reading.", marks: 2 },
            { label: "c", prompt: "Evaluate whether colour symbolism is universal or culturally specific.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Colour meaning", statement: "Formal colour properties interact with cultural association to create meaning." }],
            steps: [
              { part: "a", reasoning: "Hue = colour name; value = lightness/darkness; saturation = intensity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three properties defined accurately.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Warm colours advance and energise; cool colours recede and calm, shaping space and mood.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the psychological/spatial effect of warm-cool contrast.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Some associations (e.g. white purity) vary by culture; artists exploit or subvert them.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on universality versus cultural specificity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Hue, value, saturation defined. (b) Warm advances/energises, cool recedes/calms. (c) Symbolism is partly universal, partly cultural.",
            commonErrors: ["Treating colour meaning as fixed and universal."],
          },
        },
        {
          id: "va-u1-colour-theory-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Primary colours are defined as colours that:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cannot be produced by mixing other colours" },
            { id: "b", text: "Are always warm in temperature" },
            { id: "c", text: "Appear only in nature" },
            { id: "d", text: "Have the highest saturation" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Primary colours", statement: "Red, yellow and blue cannot be mixed from other hues." }],
            steps: [
              { reasoning: "Primaries are the base hues that cannot be created by mixing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Cannot be produced by mixing other colours",
            commonErrors: ["Confusing primaries with secondaries or tertiaries."],
          },
        },
        {
          id: "va-u1-colour-theory-q6", difficulty: "foundation", totalMarks: 2,
          stem: "An analogous colour scheme uses hues that are:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Opposite each other on the colour wheel" },
            { id: "b", text: "Adjacent to each other on the colour wheel" },
            { id: "c", text: "Evenly spaced around the wheel" },
            { id: "d", text: "All neutral greys" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Analogous colours", statement: "Hues neighbouring each other on the wheel create calm unity." }],
            steps: [
              { reasoning: "Analogous schemes use adjacent hues on the wheel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adjacent to each other on the colour wheel",
            commonErrors: ["Confusing analogous (adjacent) with complementary (opposite)."],
          },
        },
        {
          id: "va-u1-colour-theory-q7", difficulty: "core", totalMarks: 2,
          stem: "A triadic colour scheme consists of:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Three hues evenly spaced around the colour wheel" },
            { id: "b", text: "Three shades of the same hue" },
            { id: "c", text: "Two complementary hues plus white" },
            { id: "d", text: "A hue and its two neighbours" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Triadic scheme", statement: "Three hues spaced evenly around the wheel balance variety and harmony." }],
            steps: [
              { reasoning: "Triadic schemes use three hues equidistant on the wheel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Three hues evenly spaced around the colour wheel",
            commonErrors: ["Confusing triadic (evenly spaced) with analogous (adjacent)."],
          },
        },
        {
          id: "va-u1-colour-theory-q8", difficulty: "core", totalMarks: 2,
          stem: "Warm colours such as red and orange tend to appear:",
          response: { type: "mcq", choices: [
            { id: "a", text: "To recede behind cool colours" },
            { id: "b", text: "To advance toward the viewer" },
            { id: "c", text: "To flatten the picture plane" },
            { id: "d", text: "To reduce contrast" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Warm-cool spatial effect", statement: "Warm hues advance and energise; cool hues recede and calm." }],
            steps: [
              { reasoning: "Warm colours visually advance toward the viewer.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To advance toward the viewer",
            commonErrors: ["Reversing warm/cool spatial effects."],
          },
        },
        {
          id: "va-u1-colour-theory-q9", difficulty: "challenge", totalMarks: 2,
          stem: "A complementary accent colour is most useful for:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Unifying a quiet background" },
            { id: "b", text: "Creating a focal point through maximum contrast" },
            { id: "c", text: "Reducing the value range" },
            { id: "d", text: "Mimicking natural lighting exactly" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complementary accent", statement: "A small dose of the opposite hue creates intense contrast and draws attention." }],
            steps: [
              { reasoning: "Opposite hues intensify each other, making accents pop as focal points.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Creating a focal point through maximum contrast",
            commonErrors: ["Using complementary colours everywhere rather than as an accent."],
          },
        },
        {
          id: "va-u1-colour-theory-q10", difficulty: "core", totalMarks: 2,
          stem: "Increasing the range of light and dark values in a painting mainly helps to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Make all colours equally bright" },
            { id: "b", text: "Separate forms and create spatial depth" },
            { id: "c", text: "Remove the need for a colour scheme" },
            { id: "d", text: "Simulate black and white printing" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Value and space", statement: "Value contrast separates forms and describes spatial recession." }],
            steps: [
              { reasoning: "A wider value range separates light from dark forms, creating depth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Separate forms and create spatial depth",
            commonErrors: ["Focusing on hue variety while ignoring value structure."],
          },
        },
        {
          id: "va-u1-colour-theory-q11", difficulty: "core", totalMarks: 3,
          stem: "Describe how an artist could construct a balanced triadic colour scheme for a poster.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Triadic construction", statement: "Choose three hues equidistant on the wheel, then vary value and saturation." }],
            steps: [
              { reasoning: "Select three hues evenly spaced around the colour wheel.", marks: 1, markCode: "M" },
              { reasoning: "Assign one hue dominance and use the others as accents or supporting tones.", marks: 1, markCode: "M" },
              { reasoning: "Vary value and saturation within the scheme to create hierarchy and avoid flatness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pick three evenly spaced hues, give one dominance, and vary value and saturation.",
            commonErrors: ["Using the three hues at equal intensity, producing visual chaos."],
          },
        },
        {
          id: "va-u1-colour-theory-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how warm-cool colour contrast can create the illusion of depth in a landscape.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Atmospheric colour", statement: "Cool colours recede; warm colours advance, mimicking aerial perspective." }],
            steps: [
              { reasoning: "Cool, desaturated hues in distant areas make them appear to recede.", marks: 1, markCode: "M" },
              { reasoning: "Warm, saturated hues in foreground areas make them advance toward the viewer.", marks: 1, markCode: "M" },
              { reasoning: "This mimics how atmosphere scatters light, giving convincing spatial depth.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: warm-cool contrast is a structural depth device, not just decoration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cool receding distance against warm advancing foreground creates aerial depth.",
            commonErrors: ["Using warm colours in the distance, which would wrongly bring it forward."],
          },
        },
        {
          id: "va-u1-colour-theory-q13", difficulty: "foundation", totalMarks: 3,
          stem: "Name the three key properties of colour and state what each one describes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Colour properties", statement: "Hue = colour name; value = lightness; saturation = intensity." }],
            steps: [
              { reasoning: "Names hue, value and saturation.", marks: 1, markCode: "M" },
              { reasoning: "States that hue is the colour's name and value its lightness or darkness.", marks: 1, markCode: "M" },
              { reasoning: "States that saturation is the colour's intensity or purity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hue = name; value = lightness; saturation = intensity.",
            commonErrors: ["Confusing value (lightness) with hue (colour name)."],
          },
        },
        {
          id: "va-u1-colour-theory-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Analyse how colour meaning operates in visual art beyond formal colour relationships.",
          parts: [
            { label: "a", prompt: "Identify the three properties used to describe any colour.", marks: 2 },
            { label: "b", prompt: "Explain how cultural context affects colour symbolism.", marks: 2 },
            { label: "c", prompt: "Evaluate whether artists should avoid colour symbolism as clichéd.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Colour meaning", statement: "Formal properties interact with cultural and emotional association." }],
            steps: [
              { part: "a", reasoning: "Hue, value and saturation correctly identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three defined accurately.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Associations like white purity or red danger vary across cultures and contexts.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains that artists can exploit or deliberately subvert these associations.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Symbolism becomes clichéd only when used predictably; subversion keeps it powerful.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on when symbolism serves or weakens a work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Hue, value, saturation. (b) Symbolism is cultural and contextual. (c) Predictable symbolism is clichéd; subversion revives it.",
            commonErrors: ["Assuming colour symbolism is fixed across all cultures."],
          },
        },
        {
          id: "va-u1-colour-theory-q15", difficulty: "core", totalMarks: 4,
          stem: "A student's painting looks muddy and flat. Explain how adjusting value could improve it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Value correction", statement: "Separating light and dark values restores form and clarity." }],
            steps: [
              { reasoning: "Identify areas that share similar values and muddy together.", marks: 1, markCode: "M" },
              { reasoning: "Darken shadows and lighten highlights to widen the value range.", marks: 1, markCode: "M" },
              { reasoning: "Greater value separation restores form, depth and focal clarity.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: fix value structure before adjusting hues.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Widen the value range by darkening shadows and lightening highlights to restore form.",
            commonErrors: ["Adding more colours instead of fixing the value structure."],
          },
        },
        {
          id: "va-u1-colour-theory-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that colour harmony matters more than colour meaning in a successful artwork.",
          parts: [
            { label: "a", prompt: "Define what colour harmony means in a composition.", marks: 2 },
            { label: "b", prompt: "Explain how colour can carry meaning independent of harmony.", marks: 2 },
            { label: "c", prompt: "Assess whether harmony or meaning should dominate artistic decisions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Harmony versus meaning", statement: "Harmony unifies formally; meaning communicates culturally and emotionally." }],
            steps: [
              { part: "a", reasoning: "Harmony is the pleasing arrangement of hues through analogous, complementary or triadic schemes.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Definition accurately captures formal unity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A single symbolic colour can carry meaning even in a discordant or minimal scheme.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains that association operates independently of formal harmony.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Neither dominates universally — intention decides; harmony serves readability, meaning serves communication.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement weighing formal and communicative aims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Formal unity of hue relationships. (b) Symbolic colour works independently. (c) Intention determines which should lead.",
            commonErrors: ["Declaring one aspect universally more important."],
          },
        },
      ],
    },
    {
      id: "va-u1-composition",
      title: "Composition and visual structure",
      skill: "Organise elements using focal point, balance, rhythm and negative space to control how a viewer reads a work.",
      lesson: {
        sections: [
          { heading: "Guiding the eye", body: "Composition is the arrangement of elements to control viewing order. A **focal point** anchors attention; leading lines, contrast and placement direct the eye around the work. The rule of thirds places key elements at grid intersections rather than dead centre for dynamic balance." },
          { heading: "Balance and rhythm", body: "Symmetrical balance feels stable and formal; asymmetrical balance feels energetic and natural. **Repetition and rhythm** of shapes, colours or marks create movement and unity. Negative space is an active element — it shapes the positive forms and can become a subject itself." },
          { heading: "Breaking the rules", body: "Centred, symmetrical or cluttered compositions are valid choices when intentional. The skill is knowing which rule you are using and why — a crowded composition can express chaos; a sparse one, isolation or reverence." },
        ],
        keyFormulas: [
          { name: "Rule of thirds", statement: "Key elements at grid intersections = dynamic balance" },
          { name: "Balance types", statement: "Symmetrical = stable/formal; asymmetrical = energetic/natural" },
          { name: "Negative space", statement: "Empty space shapes positive forms and can itself carry meaning" },
        ],
        workedExample: {
          problem: "A student wants the viewer's eye to travel from a figure in the foreground to a distant mountain. Suggest three compositional devices.",
          solution: "Place the figure off-centre on a rule-of-thirds intersection; use a diagonal path or leading line (road, arm, shadow) toward the mountain; and make the mountain lighter or more contrasted so it reads as a secondary focal point.",
        },
      },
      questions: [
        {
          id: "va-u1-composition-q1", difficulty: "foundation", totalMarks: 2,
          stem: "A focal point in a composition is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The geometric centre of the work" },
            { id: "b", text: "The area that first draws the viewer's attention" },
            { id: "c", text: "The largest shape in the work" },
            { id: "d", text: "The border of the picture plane" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Focal point", statement: "The area that first attracts the viewer's attention." }],
            steps: [
              { reasoning: "The focal point is where attention lands first, often created by contrast or placement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The area that first draws the viewer's attention",
            commonErrors: ["Confusing focal point with geometric centre."],
          },
        },
        {
          id: "va-u1-composition-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe two devices an artist can use to create a sense of movement in a static image.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Movement devices", statement: "Diagonal lines, repetition and directional marks create implied movement." }],
            steps: [
              { reasoning: "Diagonal lines or leading lines direct the eye along a path.", marks: 1, markCode: "M" },
              { reasoning: "Repetition or rhythm of shapes, marks or colours creates visual tempo.", marks: 1, markCode: "M" },
              { reasoning: "Directional marks (gestural strokes, oriented texture) reinforce the sense of motion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Leading diagonals, rhythmic repetition and directional marks imply movement.",
            commonErrors: ["Suggesting actual animation rather than visual devices."],
          },
        },
        {
          id: "va-u1-composition-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how negative space functions as an active compositional element.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Negative space", statement: "Empty areas define positive forms and can carry meaning themselves." }],
            steps: [
              { reasoning: "Negative space outlines and gives shape to the positive subjects.", marks: 1, markCode: "M" },
              { reasoning: "It provides visual rest and balance against dense areas.", marks: 1, markCode: "M" },
              { reasoning: "It can itself become a subject (e.g. Rubin's vase) or suggest absence, isolation or openness.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: empty space is designed, not leftover.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Negative space defines forms, balances density and can carry meaning itself.",
            commonErrors: ["Treating empty space as an accident rather than a design decision."],
          },
        },
        {
          id: "va-u1-composition-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate how compositional choices shape the viewer's experience of an artwork.",
          parts: [
            { label: "a", prompt: "Identify two compositional devices that guide the viewer's eye.", marks: 2 },
            { label: "b", prompt: "Explain the emotional difference between symmetrical and asymmetrical balance.", marks: 2 },
            { label: "c", prompt: "Assess when breaking compositional conventions can strengthen a work.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Composition shapes experience", statement: "Arrangement controls viewing order, balance and emotional tone." }],
            steps: [
              { part: "a", reasoning: "Focal point plus leading lines, contrast or rule-of-thirds placement.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both devices correctly identified and described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Symmetry feels stable, formal, ordered; asymmetry feels dynamic, natural, unsettled.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the emotional connotation of each balance type.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Deliberate rule-breaking can express chaos, tension or rebellion — but only if purposeful.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on intentional versus careless composition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Focal point and leading lines. (b) Symmetry = stable; asymmetry = dynamic. (c) Breaking rules strengthens work when it expresses intent.",
            commonErrors: ["Assuming all conventions must always be followed."],
          },
        },
        {
          id: "va-u1-composition-q5", difficulty: "foundation", totalMarks: 2,
          stem: "The rule of thirds places key compositional elements:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dead centre of the picture" },
            { id: "b", text: "At intersections of a nine-part grid" },
            { id: "c", text: "Only along the outer edges" },
            { id: "d", text: "Randomly across the surface" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rule of thirds", statement: "Key elements at grid intersections create dynamic balance." }],
            steps: [
              { reasoning: "The rule of thirds uses a nine-part grid and its intersections.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** At intersections of a nine-part grid",
            commonErrors: ["Confusing the thirds grid with simple centring."],
          },
        },
        {
          id: "va-u1-composition-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Symmetrical balance in a composition typically feels:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Chaotic and unstable" },
            { id: "b", text: "Stable, formal and ordered" },
            { id: "c", text: "Accidental and unresolved" },
            { id: "d", text: "Loud and confrontational" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Symmetrical balance", statement: "Mirrored arrangement feels stable and formal." }],
            steps: [
              { reasoning: "Symmetry produces equilibrium, reading as stable and formal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stable, formal and ordered",
            commonErrors: ["Confusing symmetry (stable) with asymmetry (dynamic)."],
          },
        },
        {
          id: "va-u1-composition-q7", difficulty: "core", totalMarks: 2,
          stem: "Leading lines in a composition function primarily to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Decorate empty areas" },
            { id: "b", text: "Direct the viewer's eye along a path" },
            { id: "c", text: "Create literal perspective only" },
            { id: "d", text: "Balance symmetrical masses" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Leading lines", statement: "Lines or edges that channel the viewer's gaze toward a focal point." }],
            steps: [
              { reasoning: "Leading lines guide the eye along a path to a focal point.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Direct the viewer's eye along a path",
            commonErrors: ["Leading lines guide viewing order, not just perspective."],
          },
        },
        {
          id: "va-u1-composition-q8", difficulty: "core", totalMarks: 2,
          stem: "Repeating a shape, mark or colour across a composition mainly creates:",
          response: { type: "mcq", choices: [
            { id: "a", text: "A single focal point" },
            { id: "b", text: "Rhythm and visual unity" },
            { id: "c", text: "Symmetrical balance only" },
            { id: "d", text: "Negative space" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repetition and rhythm", statement: "Repeated elements create tempo and bind the composition." }],
            steps: [
              { reasoning: "Repetition creates rhythm and unifies disparate areas.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rhythm and visual unity",
            commonErrors: ["Repetition creates rhythm, not necessarily a focal point."],
          },
        },
        {
          id: "va-u1-composition-q9", difficulty: "challenge", totalMarks: 2,
          stem: "A deliberately crowded, cluttered composition can effectively express:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Isolation and reverence" },
            { id: "b", text: "Chaos, intensity or information overload" },
            { id: "c", text: "Calm and meditation" },
            { id: "d", text: "Formal symmetry" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Density as meaning", statement: "Crowding can express chaos; sparseness can express isolation." }],
            steps: [
              { reasoning: "Crowded compositions can convey overwhelming energy or chaos when intentional.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Chaos, intensity or information overload",
            commonErrors: ["Assuming clutter is always a compositional failure."],
          },
        },
        {
          id: "va-u1-composition-q10", difficulty: "core", totalMarks: 2,
          stem: "Negative space in a composition should be understood as:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Unused area to be filled" },
            { id: "b", text: "An active element that shapes positive forms" },
            { id: "c", text: "A sign of incomplete work" },
            { id: "d", text: "Only relevant in minimalist art" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Negative space", statement: "Empty areas define positive forms and can carry meaning." }],
            steps: [
              { reasoning: "Negative space actively shapes and balances the positive subjects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An active element that shapes positive forms",
            commonErrors: ["Treating empty space as leftover rather than designed."],
          },
        },
        {
          id: "va-u1-composition-q11", difficulty: "core", totalMarks: 3,
          stem: "Describe three compositional devices an artist could use to establish a clear focal point.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Focal-point devices", statement: "Contrast, placement and isolation direct attention to a focal area." }],
            steps: [
              { reasoning: "Contrast — colour, value or size difference — draws the eye to the focal element.", marks: 1, markCode: "M" },
              { reasoning: "Placement on a rule-of-thirds intersection or at a convergence of leading lines.", marks: 1, markCode: "M" },
              { reasoning: "Isolation — surrounding the focal element with negative space — heightens attention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contrast, strategic placement and isolation through negative space.",
            commonErrors: ["Making the focal point merely the largest object without supporting devices."],
          },
        },
        {
          id: "va-u1-composition-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the emotional difference between symmetrical and asymmetrical balance in a composition.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Balance and emotion", statement: "Symmetry feels ordered and formal; asymmetry feels dynamic and natural." }],
            steps: [
              { reasoning: "Symmetrical balance mirrors elements, producing stability, formality and ceremony.", marks: 1, markCode: "M" },
              { reasoning: "Asymmetrical balance offsets different masses, producing energy, naturalness and tension.", marks: 1, markCode: "M" },
              { reasoning: "The viewer reads equilibrium versus dynamic equilibrium as different emotional states.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: balance type is a tonal as well as structural choice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Symmetry = stable/formal; asymmetry = dynamic/natural — each carries different emotion.",
            commonErrors: ["Describing balance mechanically without its emotional connotation."],
          },
        },
        {
          id: "va-u1-composition-q13", difficulty: "foundation", totalMarks: 3,
          stem: "Name three compositional devices and state the viewing effect of each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Compositional devices", statement: "Focal point, leading lines and repetition each control how the eye travels." }],
            steps: [
              { reasoning: "Names three valid devices, e.g. focal point, leading lines, repetition or negative space.", marks: 1, markCode: "M" },
              { reasoning: "States that focal point anchors attention and leading lines guide the eye.", marks: 1, markCode: "M" },
              { reasoning: "States that repetition creates rhythm/unity and negative space shapes forms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Focal point = attention; leading lines = guided eye; repetition = rhythm; negative space = shaped forms.",
            commonErrors: ["Naming devices without stating their viewing effect."],
          },
        },
        {
          id: "va-u1-composition-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that composition should always follow established rules such as the rule of thirds.",
          parts: [
            { label: "a", prompt: "Define what composition means in a visual artwork.", marks: 2 },
            { label: "b", prompt: "Explain what deliberate rule-breaking can achieve.", marks: 2 },
            { label: "c", prompt: "Assess whether rules should always be followed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Rules and intention", statement: "Compositional rules are tools; breaking them expresses intent only when deliberate." }],
            steps: [
              { part: "a", reasoning: "Composition is the deliberate arrangement of elements to control viewing order and meaning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Definition accurate and focused on arrangement and effect.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Deliberate rule-breaking can express chaos, tension or rebellion that rules cannot.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains that effect depends on the artist's control of the deviation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rules are defaults, not laws — following them ensures clarity; breaking them intentionally expands expression.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on when to follow versus break conventions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Deliberate arrangement controlling the viewing experience. (b) Intentional breaking expresses chaos/tension. (c) Follow for clarity, break for effect.",
            commonErrors: ["Treating compositional rules as absolute laws."],
          },
        },
        {
          id: "va-u1-composition-q15", difficulty: "core", totalMarks: 4,
          stem: "Describe how an artist could use negative space deliberately in a portrait composition.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Negative space design", statement: "Empty areas can isolate a subject, suggest mood or become a shape themselves." }],
            steps: [
              { reasoning: "Isolate the figure with generous empty space to suggest solitude or dignity.", marks: 1, markCode: "M" },
              { reasoning: "Shape the negative space so it echoes or contrasts the figure's outline.", marks: 1, markCode: "M" },
              { reasoning: "The emptiness then communicates mood — openness, isolation or contemplation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: negative space is composed, not leftover.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use emptiness to isolate, echo or give the figure emotional context.",
            commonErrors: ["Leaving background unconsidered rather than designed."],
          },
        },
        {
          id: "va-u1-composition-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that a centred composition is always weak.",
          parts: [
            { label: "a", prompt: "Explain when a centred composition can be powerful.", marks: 2 },
            { label: "b", prompt: "Analyse devices that create dynamic balance away from centre.", marks: 2 },
            { label: "c", prompt: "Assess whether centring should be avoided.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Centred versus dynamic", statement: "Centring gives symmetry and monumentality; off-centre placement gives energy." }],
            steps: [
              { part: "a", reasoning: "Centring suits symmetrical, monumental or confrontational subjects and creates stillness.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explains the formal power of a central axis.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rule-of-thirds placement, asymmetrical balance and leading lines create dynamic equilibrium.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains how off-centre devices generate visual tension and movement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Centring is a choice with specific effects, not an error — it depends on intended mood.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement rejecting the 'always weak' claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Centring gives monumentality and stillness. (b) Thirds, asymmetry and leading lines create dynamism. (c) Centring is valid when intended.",
            commonErrors: ["Treating centring as automatically inferior to off-centre placement."],
          },
        },
      ],
    },
  ],
};
