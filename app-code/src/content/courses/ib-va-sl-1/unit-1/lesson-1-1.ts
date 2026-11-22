import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "va-u1-lesson-1-1",
  code: "1-1",
  title: "Drawing and Mark-Making",
  goal: "I CAN use a range of drawing materials and marks to develop observational skills and visual expression.",
  standards: ["Studio Practice", "Observation"],
  vocabulary: [
    { term: "Mark-making", definition: "The deliberate use of lines, dots, hatching and texture to build an image." },
    { term: "Contour drawing", definition: "Drawing that follows the outer edges of a form to describe its shape." },
    { term: "Gesture drawing", definition: "A rapid drawing capturing movement and energy rather than detail." },
    { term: "Hatching", definition: "Parallel lines used to create tone, shadow or texture." },
    { term: "Blind contour", definition: "Drawing an outline without looking at the page, training eye-hand coordination." },
    { term: "Value", definition: "The lightness or darkness of a tone, independent of hue." },
  ],
  concepts: [
    {
      id: "va-u1-drawing-marks",
      title: "Marks as visual language",
      skill: "Identify and deliberately apply different types of mark to create tone, texture and movement in a drawing.",
      lesson: {
        sections: [
          { heading: "What marks do", body: "Every mark carries information: a contour line defines an edge, hatching builds tone, a scribble suggests energy or chaos. Artists choose marks for what they communicate, not just to fill space. Practising the same subject with different marks — pencil hatching versus charcoal smudging — reveals how mark choice changes meaning." },
          { heading: "Materials and their character", body: "Graphite pencil gives precise, controllable lines; charcoal is soft, broad and easily blended; ink forces commitment because it cannot be erased; conte crayon sits between. Each material has a 'voice' that shapes the drawing's mood before composition is even considered." },
          { heading: "Developing mark vocabulary", body: "Keep a sketchbook of mark experiments: cross-hatching for density, stippling for texture, gestural lines for movement. Reviewing these regularly builds a personal vocabulary you can deploy purposefully in larger works." },
        ],
        keyFormulas: [
          { name: "Mark types", statement: "Contour = shape; hatching/stippling = tone and texture; gesture = movement and energy" },
          { name: "Material character", statement: "Pencil = precise; charcoal = soft and blendable; ink = committed; crayon = textured" },
        ],
        workedExample: {
          problem: "A student draws a still life of a vase and wants the shadow side to feel heavy and the highlights on the table to feel light. Which marks and materials suit each area?",
          solution: "Use dense cross-hatching or layered charcoal on the shadow side of the vase for weight; leave the paper white or use erasure on the table for highlights. The contrast between dense dark marks and untouched paper creates value range without colour.",
        },
      },
      questions: [
        {
          id: "va-u1-drawing-marks-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Which drawing mark is most effective for suggesting rapid movement or energy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Loose, gestural lines with varied pressure" },
            { id: "b", text: "Dense cross-hatching in one small area" },
            { id: "c", text: "Careful stippling of single dots" },
            { id: "d", text: "Controlling, even contour lines" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Gesture mark", statement: "Loose gestural lines record movement and energy in a drawing." }],
            steps: [
              { reasoning: "Gesture drawing uses loose, energetic lines to capture movement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Loose, gestural lines with varied pressure",
            commonErrors: ["Confusing contour (shape) with gesture (movement)."],
          },
        },
        {
          id: "va-u1-drawing-marks-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe three different marks an artist could use to create the illusion of texture in a drawing of tree bark.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Textural marks", statement: "Hatching, stippling and broken/gestural marks can each describe different textures." }],
            steps: [
              { reasoning: "Hatching or cross-hatching builds up layered lines suggesting rough, ridged bark.", marks: 1, markCode: "M" },
              { reasoning: "Stippling or spattering places dots to suggest porous or mossy texture.", marks: 1, markCode: "M" },
              { reasoning: "Broken, jagged or gestural marks suggest irregular, weathered surfaces.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hatching for ridges, stippling for pores, broken gestural marks for weathering.",
            commonErrors: ["Describing colour rather than mark type."],
          },
        },
        {
          id: "va-u1-drawing-marks-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how an artist's choice of drawing material affects the meaning and mood of a finished work.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Material and meaning", statement: "Material character shapes mark quality, which shapes emotional tone." }],
            steps: [
              { reasoning: "Graphite pencil produces precise, controlled marks associated with careful observation.", marks: 1, markCode: "M" },
              { reasoning: "Charcoal and ink produce bold, committed or smudged marks with different energies.", marks: 1, markCode: "M" },
              { reasoning: "The material's limits shape the marks: ink cannot be erased, forcing decisive mark-making.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: material choice is a meaning-making decision, not just a practical one.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Material character determines mark quality, which communicates mood and intention.",
            commonErrors: ["Treating material choice as purely technical rather than expressive."],
          },
        },
        {
          id: "va-u1-drawing-marks-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Analyse how mark-making contributes to meaning in drawings.",
          parts: [
            { label: "a", prompt: "Identify two types of mark used to build tone in a drawing.", marks: 2 },
            { label: "b", prompt: "Explain how gesture marks can convey emotion or movement.", marks: 2 },
            { label: "c", prompt: "Evaluate why an artist might deliberately restrict their mark vocabulary.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Marks build meaning", statement: "Different marks encode tone, texture, movement and emotion; restraint can sharpen focus." }],
            steps: [
              { part: "a", reasoning: "Hatching/cross-hatching and stippling or smudging build tone.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both tone-building mark types correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gestural marks record the energy of a movement or emotional state.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains that speed and irregularity of gesture communicate feeling.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Restriction focuses the viewer's attention and creates a coherent visual language.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighs limitation against expressive range in a reasoned judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Hatching and stippling. (b) Gesture marks encode energy and emotion. (c) Restraint sharpens focus and coherence.",
            commonErrors: ["Listing mark types without linking them to meaning."],
          },
        },
        {
          id: "va-u1-drawing-marks-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Which drawing material forces the artist to commit, because marks cannot be erased or lightened?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ink pen" },
            { id: "b", text: "Soft charcoal" },
            { id: "c", text: "Graphite pencil" },
            { id: "d", text: "Wax crayon" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Committed marks", statement: "Ink cannot be erased, so each mark is decisive." }],
            steps: [
              { reasoning: "Ink marks are permanent once dry, forcing decisive mark-making.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ink pen",
            commonErrors: ["Charcoal can be smudged and erased; only ink truly commits."],
          },
        },
        {
          id: "va-u1-drawing-marks-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Stippling — placing many small dots — is most effective for suggesting which texture?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Smooth metal" },
            { id: "b", text: "Polished glass" },
            { id: "c", text: "Flowing water" },
            { id: "d", text: "Porous stone or rough fabric" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Stippling", statement: "Dots of varied density describe granular, porous textures." }],
            steps: [
              { reasoning: "Stippled dots mimic the granular surface of porous or rough materials.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Porous stone or rough fabric",
            commonErrors: ["Stippling suggests texture, not smooth reflective surfaces."],
          },
        },
        {
          id: "va-u1-drawing-marks-q7", difficulty: "core", totalMarks: 2,
          stem: "Contour drawing primarily records:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Colour relationships within a scene" },
            { id: "b", text: "Light and shadow on a surface" },
            { id: "c", text: "Surface patterns and decoration" },
            { id: "d", text: "The outer edges and shape of a form" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Contour drawing", statement: "Lines following the edges of a form to describe its shape." }],
            steps: [
              { reasoning: "Contour lines map edges, defining shape rather than tone or colour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The outer edges and shape of a form",
            commonErrors: ["Confusing contour (edges) with tonal (light and shade)."],
          },
        },
        {
          id: "va-u1-drawing-marks-q8", difficulty: "core", totalMarks: 2,
          stem: "A soft, smoothly blended tonal area in a drawing is most likely achieved with:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Charcoal rubbed or smudged across the surface" },
            { id: "b", text: "Isolated stippled dots" },
            { id: "c", text: "Fine, precise ink lines" },
            { id: "d", text: "Dense cross-hatching only" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Blended tone", statement: "Charcoal smudging produces soft, continuous tonal transitions." }],
            steps: [
              { reasoning: "Charcoal can be rubbed and blended into smooth tonal areas.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Charcoal rubbed or smudged across the surface",
            commonErrors: ["Hatching and stippling give textured, not smoothly blended, tone."],
          },
        },
        {
          id: "va-u1-drawing-marks-q9", difficulty: "challenge", totalMarks: 2,
          stem: "An artist repeats the same gestural scribble across a large canvas. The repetition most likely aims to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Imitate a mechanical print" },
            { id: "b", text: "Create rhythm and reinforce a mood" },
            { id: "c", text: "Save time and effort" },
            { id: "d", text: "Conceal weak drawing skills" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Mark repetition", statement: "Repeating marks builds rhythm, unity and emotional intensity." }],
            steps: [
              { reasoning: "Repetition of a mark creates visual rhythm and can reinforce a mood.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Create rhythm and reinforce a mood",
            commonErrors: ["Repetition is a deliberate compositional device, not a shortcut."],
          },
        },
        {
          id: "va-u1-drawing-marks-q10", difficulty: "core", totalMarks: 2,
          stem: "Which pair of marks would best describe soft fabric versus rough tree bark?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gesture lines for the fabric, contour lines for the bark" },
            { id: "b", text: "Contour lines for both" },
            { id: "c", text: "Stippling for the fabric, jagged hatching for the bark" },
            { id: "d", text: "Heavy smudging for both" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mark-texture match", statement: "Marks should be chosen to match the texture they describe." }],
            steps: [
              { reasoning: "Stippled dots suggest soft granular fabric; jagged hatching suggests rough ridged bark.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stippling for the fabric, jagged hatching for the bark",
            commonErrors: ["Using one mark type for all textures regardless of surface."],
          },
        },
        {
          id: "va-u1-drawing-marks-q11", difficulty: "core", totalMarks: 3,
          stem: "Describe how an artist could use hatching to show the fall of light across a curved form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Directional hatching", statement: "Hatch direction and density can describe how light wraps around form." }],
            steps: [
              { reasoning: "Hatch lines follow the curvature of the form so tone turns with the surface.", marks: 1, markCode: "M" },
              { reasoning: "Increase hatch density and cross-hatch in the shadow side; leave the lit side sparse or blank.", marks: 1, markCode: "M" },
              { reasoning: "The gradient of tone then describes the fall of light convincingly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Follow the form's curvature with hatch direction and increase density toward the shadow.",
            commonErrors: ["Hatching in one flat direction ignores the form's curvature."],
          },
        },
        {
          id: "va-u1-drawing-marks-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why some artists prefer drawing with materials that cannot be corrected, such as ink.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Commitment as expression", statement: "Irreversible media force decisiveness and make accident part of the image." }],
            steps: [
              { reasoning: "Without erasure, every mark must be deliberate, producing confident, decisive lines.", marks: 1, markCode: "M" },
              { reasoning: "Mistakes and edges become part of the image rather than being hidden.", marks: 1, markCode: "M" },
              { reasoning: "The risk of error creates tension and authenticity that correctable media lack.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: limitation becomes an expressive advantage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Uncorrectable media force decisive, confident marks and make accident expressive.",
            commonErrors: ["Assuming uncorrectable media are simply harder rather than differently expressive."],
          },
        },
        {
          id: "va-u1-drawing-marks-q13", difficulty: "foundation", totalMarks: 3,
          stem: "Name three types of drawing mark and state what each is used to describe.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mark vocabulary", statement: "Contour describes shape; hatching/stippling describe tone and texture; gesture describes movement." }],
            steps: [
              { reasoning: "Names three valid mark types, e.g. contour, hatching, gesture or stippling.", marks: 1, markCode: "M" },
              { reasoning: "States that contour describes edges, hatching/stippling describe tone or texture.", marks: 1, markCode: "M" },
              { reasoning: "States that gesture marks describe movement or energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contour = shape; hatching/stippling = tone/texture; gesture = movement/energy.",
            commonErrors: ["Listing marks without explaining what each describes."],
          },
        },
        {
          id: "va-u1-drawing-marks-q14", difficulty: "challenge", totalMarks: 6,
          stem: "A portrait drawing must communicate both the sitter's age and their temperament. Analyse how mark-making choices could achieve this.",
          parts: [
            { label: "a", prompt: "Identify two mark types suitable for describing weathered skin.", marks: 2 },
            { label: "b", prompt: "Explain how gestural versus careful contour marks serve different portrait aims.", marks: 2 },
            { label: "c", prompt: "Evaluate whether uniform, restrained marks could still convey character.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Marks and character", statement: "Mark choice encodes physical surface and psychological temperament." }],
            steps: [
              { part: "a", reasoning: "Stippling or broken hatching suggests pores and weathering; jagged gestural marks suggest roughness.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both mark types correctly linked to aged skin.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gestural marks convey energy and temperament; careful contour conveys observation and dignity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the different expressive effects of each approach.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Restraint can convey quiet strength or severity, but needs contrast to avoid monotony.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balanced judgement on when uniform marks serve character.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Stippled or broken hatching for weathering. (b) Gesture = temperament; contour = observation. (c) Restraint works when contrast is preserved.",
            commonErrors: ["Describing marks without linking them to age or temperament."],
          },
        },
        {
          id: "va-u1-drawing-marks-q15", difficulty: "core", totalMarks: 4,
          stem: "Compare the expressive effects of drawing the same subject twice — once in graphite pencil and once in soft charcoal.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Material character", statement: "Pencil gives precise controlled marks; charcoal gives broad soft blended marks." }],
            steps: [
              { reasoning: "Pencil produces fine, precise lines suited to detailed observation.", marks: 1, markCode: "M" },
              { reasoning: "Charcoal produces broad, soft, easily blended marks with greater tonal range.", marks: 1, markCode: "M" },
              { reasoning: "The pencil version reads as careful and analytical; the charcoal version as bold and atmospheric.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: identical subject, different mood through material alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pencil = precise and analytical; charcoal = broad, soft and atmospheric.",
            commonErrors: ["Ignoring how material character changes the mood of the same subject."],
          },
        },
        {
          id: "va-u1-drawing-marks-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that in drawing, \"the mark is the message\".",
          parts: [
            { label: "a", prompt: "Explain how marks carry information beyond simply depicting a subject.", marks: 2 },
            { label: "b", prompt: "Analyse how mark choice reveals artistic intention.", marks: 2 },
            { label: "c", prompt: "Assess whether technique can ever overshadow meaning in a drawing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Mark as meaning", statement: "Marks encode tone, texture, movement and emotion, not just depiction." }],
            steps: [
              { part: "a", reasoning: "Marks encode tone, texture, movement and emotion beyond literal likeness.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explains how the same subject reads differently with different marks.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Deliberate mark selection signals intention — gesture for energy, stipple for texture, etc.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Links mark vocabulary to the artist's communicative aim.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Brilliant technique without meaning can become empty display; meaning usually requires but exceeds technique.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on the balance of technique and meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Marks encode tone, texture, movement, emotion. (b) Mark choice signals intention. (c) Technique can overshadow meaning if it becomes display.",
            commonErrors: ["Treating marks as neutral description rather than communication."],
          },
        },
      ],
    },
    {
      id: "va-u1-observational-drawing",
      title: "Observational drawing skills",
      skill: "Apply contour, tonal and blind contour drawing techniques to record what is seen accurately.",
      lesson: {
        sections: [
          { heading: "Seeing versus recognising", body: "Beginners draw what they know an object looks like, not what they see. Slow down: measure proportions with pencil-held-at-arm's-length, check angles, and draw what surprises you. Blind contour drawing forces you to look at the subject rather than the page." },
          { heading: "Proportion and measurement", body: "Use a pencil or thumbnail to compare lengths: 'the handle is half the height of the pot'. Break complex forms into simple shapes first — cylinders, spheres, boxes — then refine contours. Checking negative space (the shapes around an object) often reveals proportion errors." },
          { heading: "From observation to expression", body: "Accurate observation is the foundation, but drawings can distort deliberately: exaggerating a gesture, simplifying detail, or flattening space for expressive effect. Knowing the rules lets you break them with intention." },
        ],
        keyFormulas: [
          { name: "Measurement check", statement: "Compare parts of the subject with pencil held at arm's length to check proportions" },
          { name: "Negative space", statement: "Draw the space around the object to check proportion and placement" },
        ],
        workedExample: {
          problem: "A student's drawing of a chair has the backrest twice as tall as it should be. What two techniques could have prevented this?",
          solution: "Measure the ratio of backrest height to seat height using a pencil held at arm's length before drawing, and check the negative space around the chair to confirm the overall proportions.",
        },
      },
      questions: [
        {
          id: "va-u1-observational-drawing-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Blind contour drawing is primarily used to develop:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speed of execution" },
            { id: "b", text: "Eye-hand coordination and observation" },
            { id: "c", text: "Colour mixing skills" },
            { id: "d", text: "Knowledge of perspective" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Blind contour", statement: "Drawing without looking at the page trains the eye to follow the subject." }],
            steps: [
              { reasoning: "Blind contour drawing requires looking only at the subject, training coordination.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Eye-hand coordination and observation",
            commonErrors: ["It is a training technique, not a finished-work technique."],
          },
        },
        {
          id: "va-u1-observational-drawing-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe two practical techniques for checking proportion in an observational drawing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Proportion checks", statement: "Arm's-length measurement and negative-space checking prevent proportion errors." }],
            steps: [
              { reasoning: "Hold the pencil at arm's length and compare lengths of parts against the whole.", marks: 1, markCode: "M" },
              { reasoning: "Check angles by tilting the pencil to match edges in the subject.", marks: 1, markCode: "M" },
              { reasoning: "Draw or check the negative space around the subject to confirm overall proportions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arm's-length measurement, angle checks and negative-space verification.",
            commonErrors: ["Giving vague advice like 'measure carefully' without a method."],
          },
        },
        {
          id: "va-u1-observational-drawing-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between contour and tonal drawing and when each approach is most useful.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Contour vs tonal", statement: "Contour describes edges; tonal describes light and shade." }],
            steps: [
              { reasoning: "Contour drawing maps the outer edges and major internal lines of a form.", marks: 1, markCode: "M" },
              { reasoning: "Tonal drawing uses hatching, smudging or value to describe light falling on a form.", marks: 1, markCode: "M" },
              { reasoning: "Contour is most useful for structure and composition; tonal for volume and realism.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: many drawings combine both for fuller description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contour = edges; tonal = light and shade; often combined.",
            commonErrors: ["Treating them as interchangeable rather than complementary."],
          },
        },
        {
          id: "va-u1-observational-drawing-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that accurate observation is essential for expressive drawing.",
          parts: [
            { label: "a", prompt: "Define what observational drawing involves.", marks: 2 },
            { label: "b", prompt: "Explain how observation supports expressive mark-making.", marks: 2 },
            { label: "c", prompt: "Assess whether deliberate distortion can be more expressive than accuracy.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Observation and expression", statement: "Accurate seeing gives the artist knowledge to distort meaningfully." }],
            steps: [
              { part: "a", reasoning: "Recording what is actually seen rather than assumed or remembered.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Includes proportion, angle, light and edge checks.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Observation reveals the true structure and movement an artist can then exaggerate or stylise.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains that expressive distortion works because the viewer recognises the real form.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Deliberate distortion can heighten emotion but requires observational knowledge to remain legible.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balanced judgement on when distortion serves expression best.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Accurate recording of seen form. (b) It reveals structure to exaggerate. (c) Distortion can be more expressive when it departs knowingly from the real.",
            commonErrors: ["Arguing observation and expression are opposites rather than related."],
          },
        },
        {
          id: "va-u1-observational-drawing-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Holding a pencil at arm's length to compare parts of a subject is used to check:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The proportions of the subject" },
            { id: "b", text: "The sharpness of the pencil point" },
            { id: "c", text: "The colour temperature of light" },
            { id: "d", text: "The weight of the drawing paper" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Arm's-length measurement", statement: "Comparing lengths at arm's length checks proportions against the real subject." }],
            steps: [
              { reasoning: "The technique compares relative lengths to verify proportions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The proportions of the subject",
            commonErrors: ["It is a measurement technique, not a sharpening or material test."],
          },
        },
        {
          id: "va-u1-observational-drawing-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Checking the negative space around an object in a drawing helps the artist to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speed up the drawing process" },
            { id: "b", text: "Add decorative borders" },
            { id: "c", text: "Confirm proportion and placement" },
            { id: "d", text: "Choose a colour palette" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Negative-space check", statement: "The shapes around an object reveal proportion and placement errors." }],
            steps: [
              { reasoning: "Negative space mirrors the object's edges and scale, exposing proportion errors.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Confirm proportion and placement",
            commonErrors: ["Negative space is an analytical tool, not decoration."],
          },
        },
        {
          id: "va-u1-observational-drawing-q7", difficulty: "core", totalMarks: 2,
          stem: "A gesture drawing is most useful for capturing:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Movement and energy quickly" },
            { id: "b", text: "Accurate colour values" },
            { id: "c", text: "Symmetrical composition" },
            { id: "d", text: "Fine surface detail" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Gesture drawing", statement: "Rapid drawings record movement and energy rather than detail." }],
            steps: [
              { reasoning: "Gesture drawing sacrifices detail to capture motion and energy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Movement and energy quickly",
            commonErrors: ["Gesture drawing is about energy, not finished detail."],
          },
        },
        {
          id: "va-u1-observational-drawing-q8", difficulty: "core", totalMarks: 2,
          stem: "Breaking a complex form into simple shapes before drawing detail primarily helps to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Avoid using tonal marks" },
            { id: "b", text: "Establish accurate structure and proportion first" },
            { id: "c", text: "Speed up the sketching process only" },
            { id: "d", text: "Make the drawing look childish" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Shape construction", statement: "Simple underlying shapes establish structure before detail." }],
            steps: [
              { reasoning: "Cylinders, spheres and boxes establish proportion and structure first.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Establish accurate structure and proportion first",
            commonErrors: ["It is a structural method, not a style or shortcut."],
          },
        },
        {
          id: "va-u1-observational-drawing-q9", difficulty: "challenge", totalMarks: 2,
          stem: "A student keeps drawing a remembered symbol of an eye instead of the eye they see. The most effective correction is to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Add more detail to the symbolic eye" },
            { id: "b", text: "Work from memory more slowly" },
            { id: "c", text: "Draw blind contour, looking only at the subject" },
            { id: "d", text: "Trace a photograph of an eye" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Seeing versus recognising", statement: "Blind contour drawing forces attention on the subject rather than the mental symbol." }],
            steps: [
              { reasoning: "The student draws a symbol, not what is seen; blind contour retrains observation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Draw blind contour, looking only at the subject",
            commonErrors: ["More detail on a wrong symbol does not fix the underlying problem."],
          },
        },
        {
          id: "va-u1-observational-drawing-q10", difficulty: "core", totalMarks: 2,
          stem: "Deliberately exaggerating a proportion in an observational drawing is best described as:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Expressive distortion, valid once the real proportions are known" },
            { id: "b", text: "An unavoidable error" },
            { id: "c", text: "A failure of observational skill" },
            { id: "d", text: "Only appropriate in abstract work" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Deliberate distortion", statement: "Breaking rules knowingly is expressive; breaking them unknowingly is error." }],
            steps: [
              { reasoning: "Intentional distortion departs from the observed form for expressive effect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Expressive distortion, valid once the real proportions are known",
            commonErrors: ["Distinguishing accidental error from intentional distortion."],
          },
        },
        {
          id: "va-u1-observational-drawing-q11", difficulty: "core", totalMarks: 3,
          stem: "Outline the steps an artist should follow when beginning an observational drawing of an unfamiliar object.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Observational sequence", statement: "Measure, block in simple shapes, then refine contours and tone." }],
            steps: [
              { reasoning: "Measure key proportions with a pencil held at arm's length before drawing.", marks: 1, markCode: "M" },
              { reasoning: "Block in the object as simple shapes and check negative space.", marks: 1, markCode: "M" },
              { reasoning: "Refine contours and add tone only once structure is accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Measure proportions, block in simple shapes, check negative space, then refine.",
            commonErrors: ["Starting with detail before establishing structure."],
          },
        },
        {
          id: "va-u1-observational-drawing-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how carefully checking angles improves an observational drawing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Angle checks", statement: "Matching edge angles to the subject prevents structural distortion." }],
            steps: [
              { reasoning: "Tilting the pencil to match an edge's angle transfers the true angle to the page.", marks: 1, markCode: "M" },
              { reasoning: "Checking several angles keeps the structure coherent as the drawing develops.", marks: 1, markCode: "M" },
              { reasoning: "Without angle checks, edges drift and the form distorts even if proportions are right.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: angle checks are a continuous verification habit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Angle checks keep edges true to the subject and prevent structural drift.",
            commonErrors: ["Checking proportions but ignoring edge angles."],
          },
        },
        {
          id: "va-u1-observational-drawing-q13", difficulty: "foundation", totalMarks: 3,
          stem: "List three things an artist should observe about a subject before beginning a detailed drawing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Observation targets", statement: "Proportion, light direction and edges are key first observations." }],
            steps: [
              { reasoning: "Observes proportions — relative sizes of parts to whole.", marks: 1, markCode: "M" },
              { reasoning: "Observes where light falls and the direction of edges and angles.", marks: 1, markCode: "M" },
              { reasoning: "Identifies the major shapes and negative spaces to plan the composition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proportions, light direction, edge angles and major shapes/negative space.",
            commonErrors: ["Listing vague qualities like 'looking carefully' without specifics."],
          },
        },
        {
          id: "va-u1-observational-drawing-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that accurate observation limits an artist's creativity.",
          parts: [
            { label: "a", prompt: "Define what observational drawing involves.", marks: 2 },
            { label: "b", prompt: "Explain how accurate observation can support creative invention.", marks: 2 },
            { label: "c", prompt: "Assess whether observation and imagination are opposites.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Observation and invention", statement: "Knowing the real form enables meaningful distortion and stylisation." }],
            steps: [
              { part: "a", reasoning: "Recording what is actually seen — proportions, angles, light and edges.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Definition accurate and distinct from drawing from memory or symbol.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Observation reveals structure that the artist can exaggerate, simplify or rearrange.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains that invention is clearer when the real is known.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "They are complementary: observation supplies knowledge, imagination departs from it.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement rejecting the opposites framing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Accurate recording of seen form. (b) It reveals structure to invent from. (c) They are complementary, not opposed.",
            commonErrors: ["Treating observation as the enemy of creativity."],
          },
        },
        {
          id: "va-u1-observational-drawing-q15", difficulty: "core", totalMarks: 4,
          stem: "Compare blind contour drawing with measured contour drawing as learning exercises.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Contour methods", statement: "Blind contour trains eye-hand coordination; measured contour trains proportion judgement." }],
            steps: [
              { reasoning: "Blind contour removes the page as reference, forcing the eye to follow the subject.", marks: 1, markCode: "M" },
              { reasoning: "Measured contour uses pencil checks to verify proportion and angle.", marks: 1, markCode: "M" },
              { reasoning: "The first builds coordination and trust in the eye; the second builds analytical proportion skills.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: both develop observation through different demands.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blind contour trains coordination; measured contour trains proportion — both build observation.",
            commonErrors: ["Treating the two methods as interchangeable rather than complementary."],
          },
        },
        {
          id: "va-u1-observational-drawing-q16", difficulty: "challenge", totalMarks: 6,
          stem: "A student argues that drawing from a photograph is 'cheating' compared with drawing from life. Analyse this claim.",
          parts: [
            { label: "a", prompt: "Explain what direct observational drawing involves.", marks: 2 },
            { label: "b", prompt: "Analyse how drawing from a photograph differs from drawing from life.", marks: 2 },
            { label: "c", prompt: "Assess when each approach is appropriate.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Life versus photograph", statement: "Direct observation trains seeing; photographs offer fixed reference at a remove." }],
            steps: [
              { part: "a", reasoning: "Looking at the real subject, checking proportions, angles and light directly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate definition of observational drawing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A photograph fixes one viewpoint and flattens space; life offers shifting viewpoints and full tonal range.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the different demands each reference places on the artist.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Life drawing best trains observation; photographs suit inaccessible subjects or compositional planning — neither is cheating.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on appropriate use of each reference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Direct seeing of the real subject. (b) Photos fix one view and flatten space. (c) Both are legitimate; life trains observation best.",
            commonErrors: ["Declaring one reference method universally superior."],
          },
        },
      ],
    },
  ],
};
