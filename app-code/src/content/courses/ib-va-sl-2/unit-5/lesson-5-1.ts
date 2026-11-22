import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "va-u5-lesson-5-1",
  code: "5-1",
  title: "Curating and Presenting Work",
  goal: "I CAN curate a cohesive exhibition and present artworks with professional labels, lighting and sequencing.",
  standards: [
    "Curating",
    "Exhibition Practice",
  ],
  vocabulary: [
    { term: "Curating", definition: "The selection, organisation and presentation of artworks for an exhibition." },
    { term: "Exhibition", definition: "A public display of artworks arranged for viewing." },
    { term: "Label", definition: "Text beside an artwork giving title, artist, medium, date and sometimes commentary." },
    { term: "Sequencing", definition: "The deliberate ordering of works to create a narrative or visual flow." },
    { term: "Salon hang", definition: "A dense grid arrangement of many works covering a wall, typical of traditional exhibitions." },
    { term: "White cube", definition: "The standardised gallery aesthetic of white walls and controlled lighting." },
  ],
  concepts: [
    {
      id: "va-u5-curation",
      title: "Principles of curation",
      skill: "Select and organise artworks into a cohesive exhibition with clear curatorial intent.",
      lesson: {
        sections: [
          {
            heading: "Selection and cohesion",
            body: "A strong exhibition has a clear idea: a theme, question, or dialogue between works. Select works that speak to each other — not just your best pieces, but pieces that create conversations. Cohesion can come from shared theme, medium, palette or conceptual thread.",
          },
          {
            heading: "Sequencing and flow",
            body: "The order of works shapes the viewer's journey. Open with a strong piece that establishes the exhibition's tone; build through development or contrast; end with a resonant conclusion. Consider sightlines, spacing and how works relate visually as the viewer moves.",
          },
          {
            heading: "Presentation details",
            body: "Labels should be accurate and consistent: title, artist, medium, dimensions, date. Lighting should reveal each work without glare or colour distortion. Walls, spacing and hanging height affect how work is seen. Professional presentation signals respect for the work and the viewer.",
          },
        ],
        keyFormulas: [
          { name: "Curation elements", statement: "Selection + cohesion + sequencing + presentation = exhibition" },
          { name: "Label essentials", statement: "Title, artist, medium, dimensions, date" },
        ],
        workedExample: {
          problem: "A student has 20 artworks and must select 10 for an exhibition themed 'thresholds'. How should they choose?",
          solution: "Select works that each engage the theme of transition, boundary or passage — doors, horizons, in-between spaces. Ensure variety of media and scale. Sequence from literal depictions of thresholds to more abstract explorations, ending with a work that encapsulates the theme's emotional resonance.",
        },
      },
      questions: [
        {
          id: "va-u5-curation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Curation primarily involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selecting, organising and presenting artworks for exhibition" },
              { id: "b", text: "Selling artworks to collectors" },
              { id: "c", text: "Writing art criticism" },
              { id: "d", text: "Making artworks from scratch" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Curation", statement: "The selection, organisation and presentation of artworks for public display." },
            ],
            steps: [
              { reasoning: "Curation is the selection and presentation of existing artworks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Selecting, organising and presenting artworks for exhibition",
            commonErrors: [
              "Confusing curating with creating art.",
            ],
          },
        },
        {
          id: "va-u5-curation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three elements of professional artwork labelling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Labelling", statement: "Title, artist, medium, dimensions and date provide essential context." },
            ],
            steps: [
              { reasoning: "Title and artist name for identification.", marks: 1, markCode: "M" },
              { reasoning: "Medium and dimensions for material and scale information.", marks: 1, markCode: "M" },
              { reasoning: "Date of creation for historical context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Title, artist, medium, dimensions and date form the label essentials.",
            commonErrors: [
              "Writing only the title or omitting technical details.",
            ],
          },
        },
        {
          id: "va-u5-curation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how sequencing affects the viewer's experience of an exhibition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sequencing", statement: "Order creates narrative, contrast and emotional arc for the viewer." },
            ],
            steps: [
              { reasoning: "Opening works establish tone and expectations; closing works leave the final impression.", marks: 1, markCode: "M" },
              { reasoning: "Juxtaposition creates dialogue — contrasting works highlight each other's qualities.", marks: 1, markCode: "M" },
              { reasoning: "Progression can build intensity or move from literal to abstract, shaping emotional journey.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: sequence is a narrative choice, not just logistics.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sequencing shapes narrative, contrast and emotional arc of the viewing experience.",
            commonErrors: [
              "Hanging works randomly without considering viewer journey.",
            ],
          },
        },
        {
          id: "va-u5-curation-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's approach to curating an exhibition.",
          parts: [
            { label: "a", prompt: "Identify two strengths in the selection or organisation.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain why they matter.", marks: 2 },
            { label: "c", prompt: "Suggest how to improve the exhibition.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating curation", statement: "Assess selection cohesion, sequencing logic and presentation quality." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies strengths, e.g. thematic cohesion, variety of media, strong opening piece.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two weaknesses, e.g. weak sequencing, inconsistent labels, overcrowding, poor lighting.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with reference to curation principles.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests specific improvements — reorder, relabel, respace, adjust lighting.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete, actionable improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate curation by selection cohesion, sequencing logic and presentation quality.",
            commonErrors: [
              "Judging exhibition only by individual artwork quality, not curation.",
            ],
          },
        },
        {
          id: "va-u5-curation-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In curation, 'cohesion' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A unifying theme, idea or thread connecting the works" },
              { id: "b", text: "All works being identical in size" },
              { id: "c", text: "All works being framed identically" },
              { id: "d", text: "All works being by the same artist" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cohesion", statement: "A shared theme, medium, palette or conceptual thread unites the selected works." },
            ],
            steps: [
              { reasoning: "Cohesion comes from shared theme, medium, palette or concept, not uniformity of size or frame.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A unifying theme, idea or thread connecting the works",
            commonErrors: [
              "Confusing cohesion with visual uniformity.",
            ],
          },
        },
        {
          id: "va-u5-curation-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'white cube' approach to exhibiting art is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Brightly coloured walls that energise viewers" },
              { id: "b", text: "Neutral white walls and controlled lighting that minimise distraction" },
              { id: "c", text: "A dense grid of many small works" },
              { id: "d", text: "Outdoor display in natural light" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "White cube", statement: "Neutral walls and controlled light focus attention on the work itself." },
            ],
            steps: [
              { reasoning: "The white cube uses neutral walls and controlled lighting to isolate the artwork.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Neutral white walls and controlled lighting that minimise distraction",
            commonErrors: [
              "Confusing white cube with salon hang or environmental display.",
            ],
          },
        },
        {
          id: "va-u5-curation-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A strong opening work in a sequenced exhibition should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Establish the exhibition's tone and theme that frames the journey" },
              { id: "b", text: "Be the largest and most expensive piece" },
              { id: "c", text: "Be hidden until viewers reach the middle" },
              { id: "d", text: "Be the most technically complex work" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Opening work", statement: "The first work sets tone and expectations for the whole viewing journey." },
            ],
            steps: [
              { reasoning: "The opening work establishes the theme and emotional register for what follows.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Establish the exhibition's tone and theme that frames the journey",
            commonErrors: [
              "Choosing the opening work for size or cost rather than thematic function.",
            ],
          },
        },
        {
          id: "va-u5-curation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which artwork label is most complete and professional?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Study in Blue, A. Student, oil on canvas, 60 x 80 cm, 2025" },
              { id: "b", text: "Oil on canvas" },
              { id: "c", text: "Untitled — nice picture" },
              { id: "d", text: "My painting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Label essentials", statement: "Title, artist, medium, dimensions and date give complete context." },
            ],
            steps: [
              { reasoning: "A complete label includes title, artist, medium, dimensions and date.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Study in Blue, A. Student, oil on canvas, 60 x 80 cm, 2025",
            commonErrors: [
              "Providing only partial information such as title or medium alone.",
            ],
          },
        },
        {
          id: "va-u5-curation-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sequencing an exhibition from literal depictions toward abstract explorations of a theme creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A requirement that all works be abstract" },
              { id: "b", text: "Visual repetition that bores viewers" },
              { id: "c", text: "A progressive arc that develops the theme for the viewer" },
              { id: "d", text: "A random, unplanned order" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Progressive sequencing", statement: "Moving from accessible to complex forms builds understanding and engagement." },
            ],
            steps: [
              { reasoning: "Literal-to-abstract ordering builds viewer understanding step by step.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A progressive arc that develops the theme for the viewer",
            commonErrors: [
              "Treating sequence order as arbitrary rather than developmental.",
            ],
          },
        },
        {
          id: "va-u5-curation-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should a curator select works that 'speak to each other' rather than simply choosing the strongest individual pieces?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because dialogue between works creates meaning beyond individual quality" },
              { id: "b", text: "Because identical works are easier to label" },
              { id: "c", text: "Because exhibitions cannot contain more than ten works" },
              { id: "d", text: "Because judges only score the best work" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dialogic curation", statement: "Juxtaposition creates conversations that enrich each individual work." },
            ],
            steps: [
              { reasoning: "Works in dialogue create meanings and contrasts that no single piece achieves alone.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Because dialogue between works creates meaning beyond individual quality",
            commonErrors: [
              "Selecting only the best individual works without considering relationships.",
            ],
          },
        },
        {
          id: "va-u5-curation-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Painting gallery walls deep red instead of neutral white is best understood as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An error that should always be corrected" },
              { id: "b", text: "A curatorial decision that shapes how viewers perceive the work" },
              { id: "c", text: "A purely decorative choice with no meaning" },
              { id: "d", text: "A lighting technique for revealing form" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Display context", statement: "Walls, colour and environment are themselves curatorial choices that shape meaning." },
            ],
            steps: [
              { reasoning: "Wall colour changes mood and perception — it is part of the exhibition's statement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A curatorial decision that shapes how viewers perceive the work",
            commonErrors: [
              "Treating the display environment as neutral background.",
            ],
          },
        },
        {
          id: "va-u5-curation-q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three essential elements of an artwork label and state what information each communicates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Labelling", statement: "Title, artist, medium, dimensions and date provide essential context." },
            ],
            steps: [
              { reasoning: "Title and artist identify the work and its maker.", marks: 1, markCode: "M" },
              { reasoning: "Medium and dimensions communicate material and physical scale.", marks: 1, markCode: "M" },
              { reasoning: "Date places the work in historical or chronological context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Title/artist for identification; medium/dimensions for material and scale; date for context.",
            commonErrors: [
              "Listing elements without explaining what each communicates.",
            ],
          },
        },
        {
          id: "va-u5-curation-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the function of the first work in a sequenced exhibition differs from that of the last work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sequencing arc", statement: "Opening works set expectations; closing works leave the final emotional residue." },
            ],
            steps: [
              { reasoning: "The first work establishes tone, theme and expectations for the whole journey.", marks: 1, markCode: "M" },
              { reasoning: "The last work leaves the final impression and should resonate with or resolve the theme.", marks: 1, markCode: "M" },
              { reasoning: "Middle works develop, contrast or complicate what the opening established.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: sequence is a narrative design, not random placement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Opening sets tone and expectations; middle develops; closing leaves the resonant final impression.",
            commonErrors: [
              "Treating all positions in the sequence as equivalent.",
            ],
          },
        },
        {
          id: "va-u5-curation-q14",
          difficulty: "core",
          totalMarks: 5,
          stem: "A student has 15 artworks and must select 8 for an exhibition themed 'home'. Describe the selection criteria they should apply.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Selection criteria", statement: "Choose works that engage the theme and create variety and dialogue." },
            ],
            steps: [
              { reasoning: "Identify which works most directly engage 'home' — literal or metaphorical.", marks: 1, markCode: "M" },
              { reasoning: "Ensure variety of media, scale and approach so the exhibition is not monotonous.", marks: 1, markCode: "M" },
              { reasoning: "Check that selected works can form conversations — contrasts and echoes.", marks: 1, markCode: "M" },
              { reasoning: "Reject strong works that do not serve the theme — cohesion over personal favourites.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: selection serves the exhibition's idea, not individual preference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Select for thematic engagement, variety of media/scale, dialogue between works and overall cohesion.",
            commonErrors: [
              "Choosing only the student's favourite works regardless of theme.",
            ],
          },
        },
        {
          id: "va-u5-curation-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how a curator can use both contrast and similarity when sequencing works to create an emotional journey.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contrast and similarity", statement: "Juxtaposition highlights difference; repetition builds rhythm and emphasis." },
            ],
            steps: [
              { reasoning: "Similar adjacent works create rhythm and allow viewers to compare subtle differences.", marks: 1, markCode: "M" },
              { reasoning: "Contrasting works create tension, surprise or dialogue that energises the sequence.", marks: 1, markCode: "M" },
              { reasoning: "Emotional arc can build through increasing intensity, colour saturation or scale.", marks: 1, markCode: "R" },
              { reasoning: "Pacing matters — moments of rest between intense works prevent viewer fatigue.", marks: 1, markCode: "M" },
              { reasoning: "The journey should move toward a resonant conclusion, not just end.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: sequencing is emotional design through visual relationships.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contrast creates dialogue and tension; similarity builds rhythm; together they shape an emotional arc.",
            commonErrors: [
              "Sequencing only by size or date without considering emotional effect.",
            ],
          },
        },
        {
          id: "va-u5-curation-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student selects 12 strong works for an exhibition on 'journeys' but hangs them in random order, uses title-only labels and crowds three large sculptures together. Evaluate this curation.",
          parts: [
            { label: "a", prompt: "Identify two strengths in the approach.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain why they matter.", marks: 2 },
            { label: "c", prompt: "Suggest how the student could improve the exhibition.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating curation", statement: "Assess selection cohesion, sequencing logic and presentation quality." },
            ],
            steps: [
              { part: "a", reasoning: "Twelve works suggests generous selection; the theme 'journeys' is clear and works presumably engage it.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Random order destroys narrative; title-only labels deny context; crowding large works overwhelms.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on the viewer's experience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sequence works into a journey arc with deliberate opening and closing.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete labels with title, artist, medium, dimensions, date.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Respace sculptures to give each presence and sightlines.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete, actionable improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Generous selection, clear theme. (b) Random order, thin labels, crowding weaken the experience. (c) Sequence deliberately, complete labels, respace works.",
            commonErrors: [
              "Judging curation only by artwork quality, not organisation and presentation.",
            ],
          },
        },
        {
          id: "va-u5-curation-q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why an exhibition benefits from variety in media and scale even when all works share a theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Variety within cohesion", statement: "Diverse media and scales keep the exhibition dynamic while a shared theme unifies it." },
            ],
            steps: [
              { reasoning: "Different media (painting, sculpture, print, digital) offer different viewing experiences.", marks: 1, markCode: "M" },
              { reasoning: "Varied scale creates rhythm — large works punctuate, small works invite intimacy.", marks: 1, markCode: "M" },
              { reasoning: "Monotony of medium or scale causes visual fatigue and reduces engagement.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: cohesion comes from theme; variety comes from form.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Variety in media and scale creates dynamic viewing; the shared theme provides unity.",
            commonErrors: [
              "Selecting only works of one medium, producing a monotonous exhibition.",
            ],
          },
        },
      ],
    },
    {
      id: "va-u5-presentation-craft",
      title: "Presentation and spatial design",
      skill: "Apply professional standards of lighting, spacing, hanging and display to present artworks effectively.",
      lesson: {
        sections: [
          {
            heading: "Lighting",
            body: "Lighting reveals and flatters: avoid direct glare, colour distortion and UV damage. Track lighting, picture lights and diffused ambient light each create different effects. Match lighting to medium — works on paper need protection from strong light; sculptures need modelling light to show form.",
          },
          {
            heading: "Spacing and hanging",
            body: "Spacing creates relationships: tight hangs create energy and comparison; generous spacing gives each work breathing room. Standard hanging height centres work at eye level (~145–150 cm). Consistent spacing and alignment signal professionalism; irregular hangs can be intentional but must be deliberate.",
          },
          {
            heading: "The white cube and alternatives",
            body: "The 'white cube' — neutral walls, controlled lighting — focuses attention on the work but can feel sterile. Alternative approaches: coloured walls that complement or contrast, salon hangs that energise, environmental displays that immerse. The display context is itself a curatorial choice.",
          },
        ],
        keyFormulas: [
          { name: "Hanging standard", statement: "Centre work at ~145–150 cm (eye level) for comfortable viewing" },
          { name: "Lighting principle", statement: "Reveal form, avoid glare and UV damage, match medium" },
        ],
        workedExample: {
          problem: "A student hangs small watercolours at mixed heights with bright overhead lighting. Suggest three improvements.",
          solution: "Align works consistently at eye level; add picture lights or diffused lighting to reveal subtle washes without glare; increase spacing so each work has visual breathing room. Avoid direct sunlight or strong spotlights that fade paper works.",
        },
      },
      questions: [
        {
          id: "va-u5-presentation-craft-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Standard hanging height for artworks aims to place the centre of the work at approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50 cm from the floor" },
              { id: "b", text: "The ceiling line" },
              { id: "c", text: "Any convenient height" },
              { id: "d", text: "Eye level, around 145–150 cm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Hanging height", statement: "Works are centred at eye level for comfortable viewing." },
            ],
            steps: [
              { reasoning: "Standard practice centres artworks at eye level, approximately 145–150 cm.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Eye level, around 145–150 cm",
            commonErrors: [
              "Hanging works too high or low for comfortable viewing.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three lighting considerations when exhibiting artworks on paper.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Paper lighting", statement: "Avoid UV damage and glare; use diffused, controlled light." },
            ],
            steps: [
              { reasoning: "Avoid direct sunlight and strong spotlights to prevent fading.", marks: 1, markCode: "M" },
              { reasoning: "Use diffused or picture lighting to reveal subtle tones without glare.", marks: 1, markCode: "M" },
              { reasoning: "Maintain consistent colour temperature so works appear as intended.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Protect from UV, diffuse light and consistent colour temperature for paper works.",
            commonErrors: [
              "Using harsh direct lighting that fades and glared paper works.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the 'white cube' gallery aesthetic affects how viewers see art.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "White cube", statement: "Neutral walls and controlled light focus attention but can feel sterile or decontextualise work." },
            ],
            steps: [
              { reasoning: "White walls and controlled lighting isolate the work, focusing attention on form.", marks: 1, markCode: "M" },
              { reasoning: "Neutral environment removes distraction but also removes context — work feels timeless and placeless.", marks: 1, markCode: "M" },
              { reasoning: "Alternative displays (coloured walls, environmental settings) can contextualise or energise differently.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: display context is itself a curatorial statement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "White cube focuses on form but decontextualises; display choices shape meaning.",
            commonErrors: [
              "Treating gallery presentation as neutral rather than meaningful.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described exhibition space",
            author: "Written for Akademik Space",
            source: "Presentation evaluation",
            text: "A classroom exhibition: paintings hung at varied heights, some too high to see comfortably; spotlights create glare on glossy surfaces; labels are handwritten inconsistently; works are crowded with only 10 cm between frames.",
          },
          stem: "Evaluate the presentation of a described exhibition space.",
          parts: [
            { label: "a", prompt: "Identify two presentation strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation evaluation", statement: "Assess lighting, spacing, hanging height and labelling for professional standard." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies strengths, e.g. works are displayed, labels exist, spotlights attempt dramatic effect.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two weaknesses, e.g. inconsistent hanging height, glare, overcrowding — each with effect on viewing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with reference to viewing experience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests standardising heights, diffusing light, consistent labels, increasing spacing.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Displayed works, labelled. (b) Height inconsistency, glare, crowding hinder viewing. (c) Standardise, diffuse, space, label consistently.",
            commonErrors: [
              "Focusing only on artwork quality, not presentation.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Picture lights in an exhibition are used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Illuminate individual works to reveal detail without glare" },
              { id: "b", text: "Replace the need for labels" },
              { id: "c", text: "Project images onto the walls" },
              { id: "d", text: "Heat the gallery so visitors stay longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Picture lighting", statement: "Focused, diffused light reveals each work without damaging or glaring." },
            ],
            steps: [
              { reasoning: "Picture lights direct controlled light onto individual works to reveal detail.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Illuminate individual works to reveal detail without glare",
            commonErrors: [
              "Confusing decorative or ambient lighting with task lighting for art.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Artworks on paper require special protection from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adjacent sculptures" },
              { id: "b", text: "Strong light and UV radiation that cause fading" },
              { id: "c", text: "Label placement" },
              { id: "d", text: "Visitor footsteps" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Paper conservation", statement: "Paper works fade under strong light and UV exposure." },
            ],
            steps: [
              { reasoning: "Paper and works on paper fade under strong light and UV radiation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Strong light and UV radiation that cause fading",
            commonErrors: [
              "Treating all media as equally light-sensitive.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tight 'salon' spacing arrangement between artworks tends to create:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Less need for labels" },
              { id: "b", text: "Calm, solitary contemplation of each work" },
              { id: "c", text: "Energy and direct comparison between works" },
              { id: "d", text: "Better lighting for each piece" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spacing effect", statement: "Close hangs create energy and comparison; wide spacing gives breathing room." },
            ],
            steps: [
              { reasoning: "Tight spacing places works in direct visual competition, creating energy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Energy and direct comparison between works",
            commonErrors: [
              "Assuming tighter spacing always improves an exhibition.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Generous spacing between artworks primarily gives each work:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Greater protection from light" },
              { id: "b", text: "Lower hanging height" },
              { id: "c", text: "Less wall space to occupy" },
              { id: "d", text: "Visual breathing room and individual focus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spacing effect", statement: "Wide spacing isolates each work for focused, intimate viewing." },
            ],
            steps: [
              { reasoning: "Generous spacing gives each work room to be seen individually.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Visual breathing room and individual focus",
            commonErrors: [
              "Confusing spacing with hanging height.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Maintaining a consistent colour temperature across exhibition lighting matters because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Makes the gallery look more expensive" },
              { id: "b", text: "Reduces electricity costs" },
              { id: "c", text: "Prevents visitors from photographing" },
              { id: "d", text: "Ensures works appear as the artist intended" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Colour temperature", statement: "Consistent lighting colour prevents works from appearing distorted." },
            ],
            steps: [
              { reasoning: "Mixed colour temperatures distort the colours viewers see in the work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Ensures works appear as the artist intended",
            commonErrors: [
              "Ignoring how lighting colour alters perceived colour in artworks.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An 'environmental' display approach differs from the white cube because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Displays only sculpture" },
              { id: "b", text: "Uses only white walls" },
              { id: "c", text: "Requires no lighting" },
              { id: "d", text: "Immerses the viewer in a transformed environment where context becomes part of the work" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Environmental display", statement: "The surroundings are designed as part of the artwork experience." },
            ],
            steps: [
              { reasoning: "Environmental displays immerse viewers so space itself becomes part of the work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Immerses the viewer in a transformed environment where context becomes part of the work",
            commonErrors: [
              "Assuming all professional display must be neutral.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q11",
          difficulty: "challenge",
            totalMarks: 2,
          stem: "Glare on glossy artworks is most effectively reduced by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hanging works higher" },
              { id: "b", text: "Moving lights to a different angle or diffusing them" },
              { id: "c", text: "Brighter direct spotlights" },
              { id: "d", text: "Using more labels" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Glare control", statement: "Adjusting light angle or diffusion removes reflected glare." },
            ],
            steps: [
              { reasoning: "Glare is reflection; changing angle or diffusing light removes it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Moving lights to a different angle or diffusing them",
            commonErrors: [
              "Increasing light intensity to solve a reflection problem.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three types of lighting used in exhibitions and describe the effect of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Lighting types", statement: "Ambient, picture and spot lighting each serve different viewing purposes." },
            ],
            steps: [
              { reasoning: "Ambient lighting provides general, even illumination for safe viewing.", marks: 1, markCode: "M" },
              { reasoning: "Picture lights focus on individual works to reveal detail and texture.", marks: 1, markCode: "M" },
              { reasoning: "Spot or track lighting can model form or create dramatic emphasis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ambient for general viewing; picture lights for detail; spot/track for modelling and drama.",
            commonErrors: [
              "Listing light types without describing their effects.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how you would plan the spacing of an exhibition containing both large paintings and small prints.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Spacing plan", statement: "Spacing should create rhythm, comparison and breathing room appropriate to scale." },
            ],
            steps: [
              { reasoning: "Give large works more space so they have presence and sightlines.", marks: 1, markCode: "M" },
              { reasoning: "Cluster or group small works so they read as a set rather than getting lost.", marks: 1, markCode: "M" },
              { reasoning: "Vary spacing to create rhythm — tight groups for energy, gaps for rest.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: spacing is planned to shape viewing rhythm across scales.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Space large works generously, group small works, vary spacing for rhythm across scales.",
            commonErrors: [
              "Spacing all works identically regardless of scale.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q14",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how the choice of wall colour and surrounding environment functions as a curatorial decision rather than mere decoration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Display context", statement: "Walls, colour and environment shape perception and meaning." },
            ],
            steps: [
              { reasoning: "Wall colour changes mood — warm walls energise, cool walls calm, bold colours contextualise.", marks: 1, markCode: "M" },
              { reasoning: "Complementary or contrasting colours can make specific elements of a work resonate.", marks: 1, markCode: "M" },
              { reasoning: "Environmental displays can immerse viewers, making space part of the artwork.", marks: 1, markCode: "M" },
              { reasoning: "Neutral white isolates form but can feel sterile or decontextualising.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the display environment is a statement about how the work should be seen.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wall colour and environment shape mood and meaning — they are curatorial choices, not decoration.",
            commonErrors: [
              "Treating the gallery environment as neutral background.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An exhibition uses harsh overhead spotlights, works hung at wildly different heights and frames crowded edge-to-edge. Evaluate this presentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation evaluation", statement: "Assess lighting, hanging height, spacing and consistency for professional standard." },
            ],
            steps: [
              { reasoning: "Harsh spotlights cause glare and uneven illumination, distorting how works appear.", marks: 1, markCode: "M" },
              { reasoning: "Inconsistent heights make viewing uncomfortable and signal carelessness.", marks: 1, markCode: "M" },
              { reasoning: "Crowded frames prevent individual works from being seen and compared.", marks: 1, markCode: "M" },
              { reasoning: "The overall effect undermines respect for the work and confuses the viewer.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: presentation problems damage the artwork's reception regardless of quality.", marks: 1, markCode: "A" },
              { reasoning: "Professional standard requires controlled light, consistent heights and deliberate spacing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Harsh light, inconsistent heights and crowding all undermine professional presentation and viewer experience.",
            commonErrors: [
              "Separating artwork quality from presentation quality.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student exhibits delicate watercolours and thick oil paintings in the same room. Evaluate how presentation choices could serve both media.",
          parts: [
            { label: "a", prompt: "Identify one presentation challenge of mixing these media.", marks: 2 },
            { label: "b", prompt: "Explain two lighting or spacing strategies that could address it.", marks: 2 },
            { label: "c", prompt: "Suggest how hanging or display could distinguish the two groups.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixed-media presentation", statement: "Different media have different lighting, spacing and display needs." },
            ],
            steps: [
              { part: "a", reasoning: "Watercolours are light-sensitive and subtle; oils are robust and glossy — one lighting approach cannot serve both.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Challenge clearly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use lower, diffused light for watercolours; stronger modelling light for oils.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Separate the groups spatially so lighting can differ.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Cluster watercolours with tighter spacing and picture lights; give oils more space and track lighting.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Differentiate wall colour or framing to signal the media shift.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "A threshold or transition zone marks the change between groups.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete, media-appropriate improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Conflicting light and scale needs. (b) Diffused vs modelling light, spatial separation. (c) Cluster paper works, space oils, differentiate display.",
            commonErrors: [
              "Using one lighting and spacing scheme for all media.",
            ],
          },
        },
        {
          id: "va-u5-presentation-craft-q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why professional presentation signals respect for both the artwork and the viewer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Presentation as respect", statement: "Careful display honours the work's value and the viewer's effort." },
            ],
            steps: [
              { reasoning: "Proper lighting, labelling and spacing show the work is valued, not discarded.", marks: 1, markCode: "M" },
              { reasoning: "Consistent, comfortable viewing conditions respect the viewer's time and effort.", marks: 1, markCode: "M" },
              { reasoning: "Sloppy presentation implies the work itself is not worth careful attention.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: presentation is part of the artwork's communication.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Professional presentation honours the work's value and makes viewing comfortable and meaningful.",
            commonErrors: [
              "Treating presentation as logistics separate from meaning.",
            ],
          },
        },
      ],
    },
  ],
};
