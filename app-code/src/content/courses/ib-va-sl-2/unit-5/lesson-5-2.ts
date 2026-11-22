import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "va-u5-lesson-5-2",
  code: "5-2",
  title: "Spatial and Installation Considerations",
  goal: "I CAN plan spatial arrangements and installation works that transform gallery space effectively.",
  standards: [
    "Installation",
    "Spatial Design",
  ],
  vocabulary: [
    { term: "Installation", definition: "An artwork that transforms a space the viewer moves through or inhabits." },
    { term: "Site-specific", definition: "An artwork made for and inseparable from its particular location." },
    { term: "Spatial flow", definition: "The path and rhythm a viewer follows through an exhibition space." },
    { term: "Sightline", definition: "The view a viewer has from a given position, shaped by layout and objects." },
    { term: "Environmental artwork", definition: "A work that immerses the viewer in a transformed environment." },
    { term: "Threshold", definition: "The transition point between spaces or states — physical or psychological." },
  ],
  concepts: [
    {
      id: "va-u5-spatial-design",
      title: "Designing spatial experience",
      skill: "Plan spatial arrangements that guide viewer movement and create immersive experiences.",
      lesson: {
        sections: [
          {
            heading: "Space as medium",
            body: "In installation and exhibition, space is not empty background — it is the medium. Walls, floor, ceiling, light and sound all shape experience. A corridor can create anticipation; a dark room, intimacy; an open floor, exposure. The artist or curator designs the viewer's journey through space.",
          },
          {
            heading: "Flow and sightlines",
            body: "Plan sightlines: what does the viewer see first, second, last? Create thresholds — transitions between areas that mark shifts in mood or meaning. Control flow: open paths invite wandering; forced paths create narrative. Blocked sightlines create discovery; clear ones create overview.",
          },
          {
            heading: "Scale and immersion",
            body: "Scale affects power: a work larger than the viewer overwhelms; smaller work invites intimacy. Immersive installations surround the viewer — sound, light, projected imagery, physical objects — creating total environments. The viewer becomes part of the work rather than observer.",
          },
        ],
        keyFormulas: [
          { name: "Spatial design elements", statement: "Walls + light + sound + scale + flow = spatial experience" },
          { name: "Sightline planning", statement: "First view → journey → final impression = designed experience" },
        ],
        workedExample: {
          problem: "A student wants to create an installation about 'memory' in a school hallway. How could spatial design serve the theme?",
          solution: "Use the corridor's linear flow as a metaphor for memory's journey — objects along the walls representing fragments. Create a threshold at the entrance with dimmed light signalling transition into memory space. End with a lit 'present moment' area contrasting the shadowed 'past' sections.",
        },
      },
      questions: [
        {
          id: "va-u5-spatial-design-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'site-specific' artwork is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Can be moved to any location" },
              { id: "b", text: "Uses only natural materials" },
              { id: "c", text: "Is always outdoors" },
              { id: "d", text: "Is made for and inseparable from its particular location" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Site-specific", statement: "An artwork conceived for and bound to its specific location." },
            ],
            steps: [
              { reasoning: "Site-specific works are conceived for and depend on their particular location.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Is made for and inseparable from its particular location",
            commonErrors: [
              "Confusing site-specific with portable or outdoor art.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways an artist can control the viewer's path through an installation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Spatial flow", statement: "Sightlines, thresholds, barriers and open paths shape viewer movement." },
            ],
            steps: [
              { reasoning: "Use barriers, walls or objects to force a specific route or create discovery.", marks: 1, markCode: "M" },
              { reasoning: "Place focal works at sightline endpoints to guide attention and movement.", marks: 1, markCode: "M" },
              { reasoning: "Create thresholds — lighting or material transitions — that signal shifts and pace the journey.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Barriers, focal sightlines and thresholds control viewer movement through space.",
            commonErrors: [
              "Ignoring spatial planning and letting viewers wander randomly.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how scale affects the viewer's relationship to an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scale and power", statement: "Overwhelming scale diminishes the viewer; intimate scale draws them in." },
            ],
            steps: [
              { reasoning: "Work larger than the viewer overwhelms — creates awe, insignificance or monumentality.", marks: 1, markCode: "M" },
              { reasoning: "Work at intimate scale invites close looking — creates privacy, detail appreciation or vulnerability.", marks: 1, markCode: "M" },
              { reasoning: "Human-scale work creates identification — viewer sees themselves in the work.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: scale is a deliberate choice about power dynamics between work and viewer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scale controls the power relationship — overwhelming, intimate or identificatory.",
            commonErrors: [
              "Treating scale as accidental rather than a meaningful choice.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described exhibition layout",
            author: "Written for Akademik Space",
            source: "Spatial design evaluation",
            text: "An exhibition in a long classroom: all works on one wall, evenly spaced; entrance opens directly onto the strongest piece; a dead-end corner contains three small sculptures on the floor with no lighting; the exit is behind the entrance wall.",
          },
          stem: "Evaluate a described spatial design for an exhibition.",
          parts: [
            { label: "a", prompt: "Identify two spatial strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements to the spatial design.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Spatial evaluation", statement: "Assess flow, sightlines, thresholds and scale for effective spatial design." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. strong opening piece, even spacing on main wall.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. dead-end corner with unlit sculptures, single-wall monotony, confusing exit — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with spatial effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggest lighting the corner, distributing works across walls, creating a clear exit path.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete spatial improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Strong opening, even spacing. (b) Dead-end, monotony, confusing exit. (c) Light corner, distribute works, clarify flow.",
            commonErrors: [
              "Evaluating only individual works, not spatial experience.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In installation and exhibition design, treating space as a 'medium' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Walls, light, sound and scale are designed elements that shape the viewer's experience" },
              { id: "b", text: "Space is empty background to fill with objects" },
              { id: "c", text: "Only the artworks matter, not their surroundings" },
              { id: "d", text: "Space must always be maximised for capacity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Space as medium", statement: "The environment itself is a designed material shaping experience." },
            ],
            steps: [
              { reasoning: "Space is not background — walls, light, sound and scale are active design elements.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Walls, light, sound and scale are designed elements that shape the viewer's experience",
            commonErrors: [
              "Treating space as neutral background rather than medium.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'threshold' in spatial design is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The edge of the exhibition floor" },
              { id: "b", text: "A transition point marking a shift in mood, scale or meaning" },
              { id: "c", text: "The entrance door of the gallery" },
              { id: "d", text: "The minimum height for hanging art" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Threshold", statement: "A designed transition marking a shift in state, mood or meaning." },
            ],
            steps: [
              { reasoning: "Thresholds are transitions — lighting, material or spatial changes that signal shift.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A transition point marking a shift in mood, scale or meaning",
            commonErrors: [
              "Confusing a literal doorway with a designed transitional moment.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Blocked or partial sightlines in an exhibition primarily create:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Better lighting conditions" },
              { id: "b", text: "Faster visitor exit times" },
              { id: "c", text: "Discovery and anticipation as viewers move" },
              { id: "d", text: "Immediate overview of the whole show" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sightlines", statement: "Hidden views create discovery; open views create overview." },
            ],
            steps: [
              { reasoning: "Blocking sightlines makes viewers move to discover what lies ahead.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Discovery and anticipation as viewers move",
            commonErrors: [
              "Assuming all sightlines should be clear.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Clear, open sightlines across an exhibition space primarily create:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Intimacy between viewer and work" },
              { id: "b", text: "An immediate overview and sense of the whole" },
              { id: "c", text: "A forced linear route" },
              { id: "d", text: "Discovery through hidden corners" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sightlines", statement: "Open sightlines give viewers overview and orientation." },
            ],
            steps: [
              { reasoning: "Clear sightlines let viewers grasp the whole exhibition at once.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An immediate overview and sense of the whole",
            commonErrors: [
              "Assuming sightlines are only useful when blocked.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A long corridor leading into an exhibition space typically creates a feeling of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Instant familiarity" },
              { id: "b", text: "Anticipation and build-up toward what lies ahead" },
              { id: "c", text: "Monotony and boredom" },
              { id: "d", text: "Exposure and vulnerability" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Corridor effect", statement: "Linear approach spaces build anticipation before the main experience." },
            ],
            steps: [
              { reasoning: "A corridor delays and builds toward the destination, creating anticipation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Anticipation and build-up toward what lies ahead",
            commonErrors: [
              "Ignoring the psychological effect of transitional spaces.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An 'immersive' installation differs from a conventional display because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surrounds the viewer so they become part of the artwork" },
              { id: "b", text: "Places works behind glass" },
              { id: "c", text: "Requires no spatial planning" },
              { id: "d", text: "Only uses two-dimensional works" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Immersion", statement: "Immersive works surround the viewer, making them a participant rather than observer." },
            ],
            steps: [
              { reasoning: "Immersion surrounds the viewer in light, sound and space so they enter the work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Surrounds the viewer so they become part of the artwork",
            commonErrors: [
              "Confusing immersion with merely looking at large works.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Giving viewers an open path through an exhibition versus forcing a single route illustrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The difference between good and bad lighting" },
              { id: "b", text: "The difference between random chaos and planned design" },
              { id: "c", text: "The choice between inviting wandering exploration and imposing a narrative sequence" },
              { id: "d", text: "A legal requirement for gallery design" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Flow control", statement: "Open paths invite exploration; forced paths create narrative." },
            ],
            steps: [
              { reasoning: "Flow design chooses between viewer freedom and directed narrative.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The choice between inviting wandering exploration and imposing a narrative sequence",
            commonErrors: [
              "Assuming one flow type is always better than the other.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three spatial elements that shape a viewer's experience of an exhibition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Spatial elements", statement: "Walls, light, sound, scale and flow combine to create spatial experience." },
            ],
            steps: [
              { reasoning: "Walls and architecture define boundaries, rooms and transitions.", marks: 1, markCode: "M" },
              { reasoning: "Light and sound set mood and focus attention.", marks: 1, markCode: "M" },
              { reasoning: "Scale of works and paths shapes feelings of power, intimacy or exposure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Walls/architecture, light and sound, scale and flow all shape spatial experience.",
            commonErrors: [
              "Listing only artworks, not the spatial elements around them.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how an artist could create a 'threshold' moment in an installation about memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Threshold design", statement: "Transitions in light, material or space mark shifts in meaning." },
            ],
            steps: [
              { reasoning: "Use a physical transition — a doorway, curtain or change in floor — as the boundary.", marks: 1, markCode: "M" },
              { reasoning: "Shift lighting at the threshold — dimming into 'past', brightening into 'present'.", marks: 1, markCode: "M" },
              { reasoning: "Change sound or material at the boundary to signal the psychological shift.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the threshold paces the viewer's emotional journey.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mark a physical transition, shift light/sound/material there to signal the change into memory space.",
            commonErrors: [
              "Treating threshold as only a physical doorway without emotional design.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q14",
          difficulty: "core",
          totalMarks: 5,
          stem: "Plan a sightline journey for a small exhibition on the theme 'secrets'. Describe what the viewer should see first, second and last.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sightline planning", statement: "Sequence views to build a designed emotional arc." },
            ],
            steps: [
              { reasoning: "First view should intrigue — partially hidden or ambiguous work that poses a question.", marks: 1, markCode: "M" },
              { reasoning: "Middle views reveal or complicate — works that give partial access to the 'secret'.", marks: 1, markCode: "M" },
              { reasoning: "Final view should resolve or resonate — the secret fully or poignantly revealed.", marks: 1, markCode: "M" },
              { reasoning: "Blocked sightlines between views create discovery and pacing.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: sightline sequence is a narrative designed for the eyes and body.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intriguing partial view first, revealing middle, resonant resolution last — paced by blocked sightlines.",
            commonErrors: [
              "Planning views without considering emotional sequence.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how sound and light can transform a neutral room into a specific emotional environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Atmospheric design", statement: "Light and sound create mood independent of physical objects." },
            ],
            steps: [
              { reasoning: "Low, warm light creates intimacy or melancholy; bright even light creates exposure or clinical distance.", marks: 1, markCode: "M" },
              { reasoning: "Light colour temperature shifts mood — cool blues suggest cold or distance, warm ambers suggest comfort or nostalgia.", marks: 1, markCode: "M" },
              { reasoning: "Sound — silence, ambient noise, music — fills space emotionally and directs attention.", marks: 1, markCode: "M" },
              { reasoning: "Combined, light and sound can make an empty room feel sacred, oppressive or dreamlike.", marks: 1, markCode: "R" },
              { reasoning: "The environment becomes a material as powerful as any object in the room.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: atmosphere is designed, not incidental.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light and sound independently create mood; together they transform neutral space into emotional environment.",
            commonErrors: [
              "Treating atmosphere as accidental rather than designed.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An exhibition fills one long wall with evenly spaced works, has a dark unlit corner, and its exit is hidden behind a partition. Evaluate this spatial design.",
          parts: [
            { label: "a", prompt: "Identify two spatial strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect on the viewer.", marks: 2 },
            { label: "c", prompt: "Suggest three improvements to the spatial design.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Spatial evaluation", statement: "Assess flow, sightlines, thresholds, scale and atmosphere." },
            ],
            steps: [
              { part: "a", reasoning: "Even spacing gives consistency; a single wall may give clear orientation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Single-wall monotony limits journey; dark corner wastes or hides work; hidden exit disorients.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on viewing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Distribute works across walls to create journey and varied sightlines.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Light the corner or remove it as a deliberate dark threshold.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Make the exit visible and logical to complete the journey.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete spatial improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Consistent spacing, clear orientation. (b) Monotony, dead corner, hidden exit weaken experience. (c) Distribute works, light the corner, clarify exit.",
            commonErrors: [
              "Evaluating individual works rather than spatial experience.",
            ],
          },
        },
        {
          id: "va-u5-spatial-design-q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the viewer's physical body matters in installation art in a way it does not in a conventional painting display.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Embodied viewing", statement: "Installations are experienced through movement and presence." },
            ],
            steps: [
              { reasoning: "Viewers physically move through installations — their path is part of the work.", marks: 1, markCode: "M" },
              { reasoning: "Scale and proximity affect the body — works can overwhelm, envelop or require close inspection.", marks: 1, markCode: "M" },
              { reasoning: "In paintings, the body is mostly stationary; in installations it is the medium of experience.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the viewer's presence completes the installation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The body moves through and is affected by installations — presence is part of the medium.",
            commonErrors: [
              "Treating installation viewing as identical to looking at a painting.",
            ],
          },
        },
      ],
    },
    {
      id: "va-u5-installation-practice",
      title: "Installation art practice",
      skill: "Create installation works that use space, materials and viewer interaction to generate meaning.",
      lesson: {
        sections: [
          {
            heading: "Planning an installation",
            body: "Begin with concept: what experience should the viewer have? Then design space: entry, journey, climax, exit. Choose materials that serve the concept — found objects carry meaning; light transforms mood; sound immerses. Document the process; installations are temporary and exist partly through documentation.",
          },
          {
            heading: "Materials and meaning",
            body: "Every material choice communicates: raw industrial materials suggest labour or systems; organic materials suggest nature or decay; recycled materials suggest sustainability or critique. Found objects bring their own histories. The material palette is part of the concept, not just practical.",
          },
          {
            heading: "Viewer as participant",
            body: "The strongest installations activate the viewer: works that respond to movement, require choices, or surround completely. The viewer's body becomes part of the artwork. This participation is the medium — without the viewer's presence, the work is incomplete.",
          },
        ],
        keyFormulas: [
          { name: "Installation planning", statement: "Concept → space design → materials → viewer participation" },
          { name: "Material meaning", statement: "Every material carries associations that serve or subvert the concept" },
        ],
        workedExample: {
          problem: "A student wants to create an installation about 'consumption'. What materials and spatial design would serve this?",
          solution: "Materials: mountains of packaging waste, plastic bottles, receipts — literal traces of consumption. Space: a corridor of 'shopping' leading to a dead-end of waste — the journey mirrors the cycle of consumption ending in accumulation. Viewer must walk through the waste to exit, physically experiencing entrapment.",
        },
      },
      questions: [
        {
          id: "va-u5-installation-practice-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In installation art, the viewer's role is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A passive observer at a distance" },
              { id: "b", text: "A photographer documenting the work" },
              { id: "c", text: "A critic who evaluates the work" },
              { id: "d", text: "An active participant who moves through and may interact with the work" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Viewer participation", statement: "Installations activate the viewer as part of the artwork." },
            ],
            steps: [
              { reasoning: "Installations require the viewer to move through and often interact with the work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** An active participant who moves through and may interact with the work",
            commonErrors: [
              "Treating installation viewers as passive observers.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three material choices that could serve an installation about environmental decay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Material meaning", statement: "Materials carry associations that can serve or subvert the concept." },
            ],
            steps: [
              { reasoning: "Found natural materials — dead leaves, rusted metal, crumbling plaster — literal traces of decay.", marks: 1, markCode: "M" },
              { reasoning: "Recycled or waste materials — plastic, discarded objects — critique consumption.", marks: 1, markCode: "M" },
              { reasoning: "Organic materials that change over the exhibition — rotting, growing — make decay visible in time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Natural decay traces, waste materials and time-changing organics serve the theme.",
            commonErrors: [
              "Choosing materials for looks rather than conceptual fit.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why documentation is especially important for installation art.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Installation documentation", statement: "Installations are temporary; documentation preserves the work beyond its physical existence." },
            ],
            steps: [
              { reasoning: "Installations are dismantled after exhibition — they exist temporarily.", marks: 1, markCode: "M" },
              { reasoning: "Photographs, video and written descriptions preserve the experience for those who cannot attend.", marks: 1, markCode: "M" },
              { reasoning: "Documentation also becomes part of the work's meaning — the record is part of the art.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: without documentation, installations exist only in memory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Documentation preserves temporary installations and becomes part of their meaning.",
            commonErrors: [
              "Treating documentation as optional for temporary work.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's installation plan for a described theme.",
          parts: [
            { label: "a", prompt: "Identify two strengths in the plan.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating installation", statement: "Assess concept-material fit, spatial design and viewer engagement." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. materials serve concept, spatial journey planned, viewer participation designed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. weak spatial flow, materials don't serve theme, no viewer interaction — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with installation effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests specific improvements to materials, space or interaction.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate by concept-material fit, spatial design and viewer engagement.",
            commonErrors: [
              "Judging installation only by visual impact, not spatial experience.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An installation artwork is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A work that transforms a space the viewer moves through or inhabits" },
              { id: "b", text: "A framed picture hung on a wall" },
              { id: "c", text: "A sculpture placed on a pedestal" },
              { id: "d", text: "A temporary sketch or study" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Installation", statement: "An artwork that transforms space into an experience." },
            ],
            steps: [
              { reasoning: "Installations use space itself as the medium the viewer enters.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A work that transforms a space the viewer moves through or inhabits",
            commonErrors: [
              "Confusing installations with conventional sculpture on pedestals.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Found objects used in an installation are powerful because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carry their own histories and associations into the work" },
              { id: "b", text: "Are cheaper than manufactured materials" },
              { id: "c", text: "Are always natural materials" },
              { id: "d", text: "Require no conservation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Found objects", statement: "Discarded objects bring accumulated meaning and history to the work." },
            ],
            steps: [
              { reasoning: "Found objects carry prior use and associations that enrich meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Carry their own histories and associations into the work",
            commonErrors: [
              "Choosing found objects only for convenience rather than meaning.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Raw industrial materials such as metal, concrete and wire in an installation typically suggest:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Religious ceremony" },
              { id: "b", text: "Nature and growth" },
              { id: "c", text: "Comfort and domesticity" },
              { id: "d", text: "Labour, systems and modern infrastructure" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Material associations", statement: "Industrial materials evoke systems, labour and modernity." },
            ],
            steps: [
              { reasoning: "Industrial materials carry associations of construction, labour and systems.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Labour, systems and modern infrastructure",
            commonErrors: [
              "Choosing materials for appearance without reading their associations.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Organic materials such as wood, fabric and living plants in an installation typically suggest:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Precision and machinery" },
              { id: "b", text: "Wealth and luxury" },
              { id: "c", text: "Decay, growth and the natural world" },
              { id: "d", text: "Digital technology" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Material associations", statement: "Organic materials evoke nature, growth, decay and life cycles." },
            ],
            steps: [
              { reasoning: "Organic materials suggest natural processes — growth, decay and life.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Decay, growth and the natural world",
            commonErrors: [
              "Ignoring the conceptual associations carried by materials.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The recommended planning sequence for an installation begins with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photographing the finished work" },
              { id: "b", text: "Choosing the gallery" },
              { id: "c", text: "Buying materials" },
              { id: "d", text: "Deciding the concept — the experience the viewer should have" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Installation planning", statement: "Concept → space → materials → participation." },
            ],
            steps: [
              { reasoning: "Concept drives all later decisions about space, materials and interaction.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Deciding the concept — the experience the viewer should have",
            commonErrors: [
              "Starting with materials before clarifying the concept.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Documentation is especially critical for installation art because installations are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Usually made of expensive materials" },
              { id: "b", text: "Always interactive" },
              { id: "c", text: "Illegal in schools" },
              { id: "d", text: "Temporary — they are dismantled after exhibition, so the record preserves them" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ephemerality", statement: "Temporary works exist only through documentation once dismantled." },
            ],
            steps: [
              { reasoning: "Installations are dismantled; documentation preserves the experience beyond physical existence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Temporary — they are dismantled after exhibition, so the record preserves them",
            commonErrors: [
              "Assuming installations persist like paintings.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The claim that 'the viewer's body is part of the artwork' in installation art means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Viewers should touch every object" },
              { id: "b", text: "Only large works count as installations" },
              { id: "c", text: "The artist must appear in the work" },
              { id: "d", text: "The viewer's presence, movement and physical experience complete the work" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Embodied participation", statement: "Without the viewer's physical presence the installation is incomplete." },
            ],
            steps: [
              { reasoning: "The viewer's movement and presence are constitutive of the work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The viewer's presence, movement and physical experience complete the work",
            commonErrors: [
              "Reducing participation to physical touching of objects.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three examples of material choices and the associations each could carry in an installation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Material meaning", statement: "Every material carries associations that serve or subvert the concept." },
            ],
            steps: [
              { reasoning: "Industrial material (metal, wire) suggests systems, labour or modernity.", marks: 1, markCode: "M" },
              { reasoning: "Organic material (wood, plants) suggests nature, growth or decay.", marks: 1, markCode: "M" },
              { reasoning: "Found/recycled objects suggest history, waste or critique of consumption.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Industrial→systems/labour; organic→nature/decay; found/recycled→history/critique.",
            commonErrors: [
              "Listing materials without explaining their associations.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the entry–journey–climax–exit structure for planning an installation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Spatial narrative", statement: "Installations are paced like stories through space." },
            ],
            steps: [
              { reasoning: "Entry establishes context or threshold — the viewer crosses into the work's world.", marks: 1, markCode: "M" },
              { reasoning: "Journey develops the concept through sequence, materials or encounters.", marks: 1, markCode: "M" },
              { reasoning: "Climax concentrates intensity — the emotional or conceptual peak.", marks: 1, markCode: "M" },
              { reasoning: "Exit provides resolution or lingering resonance as the viewer returns.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Entry thresholds in; journey develops; climax intensifies; exit resolves or resonates.",
            commonErrors: [
              "Designing space without narrative pacing.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q14",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how a 'material palette' functions as part of an installation's concept rather than just a practical choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Material palette", statement: "The chosen materials communicate meaning alongside form." },
            ],
            steps: [
              { reasoning: "Each material carries associations — industrial, organic, found, precious — that viewers read.", marks: 1, markCode: "M" },
              { reasoning: "The palette as a whole can reinforce or subvert the stated theme.", marks: 1, markCode: "M" },
              { reasoning: "Contradictory materials can create productive tension and complexity.", marks: 1, markCode: "R" },
              { reasoning: "Materials also affect sensory experience — texture, sound, smell.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: material choice is conceptual communication, not just logistics.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Materials carry meanings and sensory qualities that communicate the concept directly.",
            commonErrors: [
              "Choosing materials only for availability or looks.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how an artist could design viewer participation so it deepens rather than distracts from the concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Meaningful participation", statement: "Interaction should enact the theme, not interrupt it." },
            ],
            steps: [
              { reasoning: "Participation should mirror the concept — e.g. choosing paths for a work about decisions.", marks: 1, markCode: "M" },
              { reasoning: "The action should generate reflection — what the viewer does should mean something.", marks: 1, markCode: "M" },
              { reasoning: "Avoid gimmicks unrelated to theme that reduce the work to amusement.", marks: 1, markCode: "R" },
              { reasoning: "Response can be subtle — slowed movement, altered sightlines, required attention.", marks: 1, markCode: "R" },
              { reasoning: "Without participation the work is incomplete; with bad participation it is trivialised.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: participation is the medium — it must serve the idea.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Design participation to enact the theme and generate reflection, avoiding unrelated gimmicks.",
            commonErrors: [
              "Adding interaction for its own sake.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student plans an installation on 'urban isolation' using only red paint and gallery walls, with no other materials or interaction. Evaluate this plan.",
          parts: [
            { label: "a", prompt: "Identify two strengths in the plan.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest three improvements.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating installation", statement: "Assess concept-material fit, spatial design and viewer engagement." },
            ],
            steps: [
              { part: "a", reasoning: "Single colour could create strong visual unity; red may evoke urban/industrial associations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Only paint ignores material meaning; no interaction ignores the medium of installation; walls alone may not transform space.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on the work.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add found urban objects — barriers, signage, doors — to embody isolation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Create spatial barriers or corridors that physically enact separation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add a participatory element — choose whether to cross a barrier or remain outside.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete, concept-serving improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Colour unity, possible urban association. (b) Paint-only ignores materials; no interaction ignores medium. (c) Add urban objects, spatial barriers, participation.",
            commonErrors: [
              "Judging installation by visual impact alone, not spatial experience.",
            ],
          },
        },
        {
          id: "va-u5-installation-practice-q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why documentation can be considered part of an installation's meaning rather than just a record of it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Documentation as meaning", statement: "The record extends and reframes the temporary work." },
            ],
            steps: [
              { reasoning: "Photographs and video choose what to preserve — framing becomes a second act of curation.", marks: 1, markCode: "M" },
              { reasoning: "For ephemeral works, the documentation is often the only lasting form.", marks: 1, markCode: "M" },
              { reasoning: "The gap between experience and record can itself be meaningful — loss, memory, absence.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: documentation is part of the artwork's life, not an appendix.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Documentation selects, reframes and extends the work — it is part of its meaning.",
            commonErrors: [
              "Treating documentation as neutral record-keeping.",
            ],
          },
        },
      ],
    },
  ],
};
