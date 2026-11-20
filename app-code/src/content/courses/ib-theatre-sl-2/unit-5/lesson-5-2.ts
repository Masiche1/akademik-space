import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "theatre-u5-lesson-5-2",
  code: "5-2",
  title: "Design Elements",
  goal: "I CAN apply design elements — set, costume, lighting, sound — to create a cohesive theatrical world.",
  standards: [
    "Design",
    "Production",
  ],
  vocabulary: [
    { term: "Set design", definition: "The physical environment created for the performance." },
    { term: "Costume design", definition: "The clothing and appearance of characters." },
    { term: "Lighting design", definition: "The use of light to create mood, focus and atmosphere." },
    { term: "Sound design", definition: "The use of music, effects and ambient sound." },
    { term: "Stage picture", definition: "The visual composition of the stage at any moment." },
    { term: "Design concept", definition: "The unifying visual vision guiding all design elements." },
  ],
  concepts: [
    {
      id: "theatre-u5-design-elements",
      title: "Set, costume, lighting, sound",
      skill: "Apply design elements to create a cohesive theatrical world that serves the production concept.",
      lesson: {
        sections: [
          {
            heading: "Set design",
            body: "The set creates the world: realistic (convincing environment), abstract (symbolic space), or minimal (suggested through lighting and props). Set design should serve the concept — a play about confinement might use a small, claustrophobic set; a play about freedom might use open space. The set is the play's physical container.",
          },
          {
            heading: "Costume and lighting",
            body: "**Costume** defines character and period — what characters wear reveals their status, personality and situation. **Lighting** creates mood and focus — bright and open suggests hope; dark and shadowed suggests danger; coloured lighting suggests emotional states. Lighting is the cheapest and most powerful design element.",
          },
          {
            heading: "Sound and integration",
            body: "**Sound** reinforces emotion and space — music underscores feeling; sound effects create realism; silence can be powerful. All design elements should integrate: set, costume, lighting and sound working together create a unified world. Inconsistent design creates confusion; cohesive design creates immersion.",
          },
        ],
        keyFormulas: [
          { name: "Design elements", statement: "Set + costume + lighting + sound = theatrical world" },
          { name: "Design integration", statement: "All elements should serve the unifying concept" },
        ],
        workedExample: {
          problem: "A production of a domestic drama uses a realistic kitchen set but expressionistic lighting. What effect?",
          solution: "The contrast creates tension — realistic setting suggests 'real life' while expressionistic lighting suggests 'psychological distortion'. The dissonance may be intentional — showing how characters' inner lives distort their perception of reality. Or it may be incoherent if not deliberate.",
        },
      },
      questions: [
        {
          id: "theatre-u5-design-elements-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Set design primarily serves to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Display the actors' costumes" },
              { id: "b", text: "Create the physical environment of the play" },
              { id: "c", text: "Provide seating for audience" },
              { id: "d", text: "Show the director's name" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Set design", statement: "The physical environment created for the performance." },
            ],
            steps: [
              { reasoning: "Set design creates the physical environment of the play.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Create the physical environment of the play",
            commonErrors: [
              "Confusing set design (environment) with costume or seating.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the four main design elements in theatre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Design elements", statement: "Set, costume, lighting and sound create the world." },
            ],
            steps: [
              { reasoning: "Set — creates the physical environment.", marks: 1, markCode: "M" },
              { reasoning: "Costume — defines character and period.", marks: 1, markCode: "M" },
              { reasoning: "Lighting and sound — create mood, focus and atmosphere.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Set, costume, lighting and sound are the main design elements.",
            commonErrors: [
              "Ignoring design elements or treating them as separate.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why design elements should serve the production's concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Design integration", statement: "All elements should work together to serve the unifying vision." },
            ],
            steps: [
              { reasoning: "Design elements create the world — they should reflect the concept.", marks: 1, markCode: "M" },
              { reasoning: "Inconsistent design creates confusion — elements fighting each other.", marks: 1, markCode: "M" },
              { reasoning: "Integrated design creates a unified, believable world.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: design is meaning made visible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Design elements should serve the concept for unified production.",
            commonErrors: [
              "Choosing design elements for looks rather than conceptual fit.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a production's design integration.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating design", statement: "Assess cohesion, conceptual fit and stage picture clarity." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. cohesive design, clear stage pictures, concept served.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. inconsistent elements, unclear focus, design contradicts concept — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with design effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests aligning elements to concept, clarifying stage pictures.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate design by cohesion, conceptual fit and stage picture clarity.",
            commonErrors: [
              "Judging design only by visual appeal, not conceptual coherence.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Costume design primarily serves to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Create the physical environment" },
              { id: "b", text: "Define character and period" },
              { id: "c", text: "Provide audience seating" },
              { id: "d", text: "Control the lighting levels" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Costume design", statement: "What characters wear reveals status, personality and situation." },
            ],
            steps: [
              { reasoning: "Costumes define character, period and situation through clothing choices.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Define character and period",
            commonErrors: [
              "Confusing costume design with set design.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Lighting design is often described as 'the cheapest and most powerful' design element because it can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace all set design" },
              { id: "b", text: "Create mood, focus and atmosphere" },
              { id: "c", text: "Eliminate the need for actors" },
              { id: "d", text: "Be changed without rehearsal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lighting design", statement: "Uses light to create mood, focus and atmosphere." },
            ],
            steps: [
              { reasoning: "Lighting creates emotional states and directs audience attention at low cost.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Create mood, focus and atmosphere",
            commonErrors: [
              "Undervaluing lighting compared with expensive physical elements.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For a play about 'confinement', which set design best serves the concept?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An open, airy space suggesting freedom" },
              { id: "b", text: "A small, claustrophobic set suggesting entrapment" },
              { id: "c", text: "No set at all" },
              { id: "d", text: "A set that changes location every scene" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Design serves concept", statement: "Set design should reflect the play's themes." },
            ],
            steps: [
              { reasoning: "Confinement is served by claustrophobic, enclosed physical space.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A small, claustrophobic set suggesting entrapment",
            commonErrors: [
              "Choosing sets for convenience rather than thematic fit.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A domestic drama uses a realistic kitchen set but expressionistic lighting. This contrast most likely creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An incoherent production with no purpose" },
              { id: "b", text: "Tension between perceived reality and psychological distortion" },
              { id: "c", text: "A purely decorative effect" },
              { id: "d", text: "A purely realistic production" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Design dissonance", statement: "Contrasting elements can deliberately create tension between outer and inner reality." },
            ],
            steps: [
              { reasoning: "Realistic setting plus distorted lighting can express characters' inner worlds distorting reality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Tension between perceived reality and psychological distortion",
            commonErrors: [
              "Assuming contrasting design elements are always incoherent.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sound design encompasses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the actors' voices" },
              { id: "b", text: "Music, sound effects and ambient sound" },
              { id: "c", text: "Only stage lighting" },
              { id: "d", text: "Only the set construction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sound design", statement: "Uses music, effects and ambient sound to support performance." },
            ],
            steps: [
              { reasoning: "Sound design includes music, effects and ambient/atmospheric sound.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Music, sound effects and ambient sound",
            commonErrors: [
              "Reducing sound design to dialogue alone.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cohesive theatrical world is created when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the set is impressive" },
              { id: "b", text: "Set, costume, lighting and sound work together to serve the concept" },
              { id: "c", text: "Each department designs independently" },
              { id: "d", text: "The lighting is very bright" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Design integration", statement: "All elements should work together to create a unified world." },
            ],
            steps: [
              { reasoning: "Integration of all four elements serving one concept creates cohesion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Set, costume, lighting and sound work together to serve the concept",
            commonErrors: [
              "Judging cohesion by one element alone.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Inconsistent design elements (e.g. realistic costumes with abstract set) most likely cause the audience to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Experience deeper immersion" },
              { id: "b", text: "Feel confused and lose trust in the production's world" },
              { id: "c", text: "Focus more on the dialogue" },
              { id: "d", text: "Notice nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Design coherence", statement: "Inconsistent elements create confusion; cohesive design creates immersion." },
            ],
            steps: [
              { reasoning: "Contradictory design signals break the audience's belief in the world.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Feel confused and lose trust in the production's world",
            commonErrors: [
              "Assuming audiences will automatically reconcile contradictions.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the role of costume design in revealing character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Costume design", statement: "What characters wear reveals status, personality and situation." },
            ],
            steps: [
              { reasoning: "Costumes indicate social status, period and profession.", marks: 1, markCode: "M" },
              { reasoning: "Costume colour, style and condition reveal personality and emotional state.", marks: 1, markCode: "M" },
              { reasoning: "Changes in costume across the play track character development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Costumes reveal status, personality, situation and character change.",
            commonErrors: [
              "Describing costume only as decoration.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how lighting can create mood and direct audience focus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lighting design", statement: "Uses light to create mood, focus and atmosphere." },
            ],
            steps: [
              { reasoning: "Colour and intensity create emotional states — dark suggests danger, bright suggests hope.", marks: 1, markCode: "M" },
              { reasoning: "Focusing light on one area guides the audience's eye to the focal point.", marks: 1, markCode: "M" },
              { reasoning: "Lighting shifts can mark transitions and underscore dramatic moments.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lighting shapes mood through colour/intensity and directs attention through focus.",
            commonErrors: [
              "Treating lighting as merely functional rather than expressive.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why set design should serve the production's concept, giving an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Design integration", statement: "All design elements should reflect the unifying concept." },
            ],
            steps: [
              { reasoning: "The set is the play's physical container — it embodies the concept's world.", marks: 1, markCode: "M" },
              { reasoning: "Example: a play about confinement might use a small, claustrophobic set.", marks: 1, markCode: "M" },
              { reasoning: "A mismatched set contradicts the concept and confuses the audience.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: set design is meaning made physical.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Set design must embody the concept — e.g. claustrophobic space for confinement.",
            commonErrors: [
              "Choosing sets for visual appeal rather than thematic fit.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe how sound design can reinforce emotion and sense of space.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sound design", statement: "Uses music, effects and ambient sound to support performance." },
            ],
            steps: [
              { reasoning: "Music underscores and amplifies emotional states.", marks: 1, markCode: "M" },
              { reasoning: "Sound effects create realism and anchor the action in a believable world.", marks: 1, markCode: "M" },
              { reasoning: "Ambient sound and silence shape the perceived size and atmosphere of the space.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Music reinforces emotion; effects and ambience create space and realism.",
            commonErrors: [
              "Seeing sound as background rather than a design element.",
            ],
          },
        },
        {
          id: "theatre-u5-design-elements-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the effect of combining a realistic set design with abstract lighting design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating design choices", statement: "Contrast can be deliberate and meaningful or incoherent." },
            ],
            steps: [
              { reasoning: "The contrast can express characters' inner distortion of an outwardly real world.", marks: 1, markCode: "M" },
              { reasoning: "It may also create tension between appearance and reality — a valid artistic choice.", marks: 1, markCode: "M" },
              { reasoning: "However, if unintentional it produces incoherence and confusion.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: justified only when the contrast serves the production's concept.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Justified if it expresses psychological distortion; incoherent if accidental.",
            commonErrors: [
              "Assuming mixing styles is always an error.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u5-stage-picture",
      title: "Stage picture and visual composition",
      skill: "Create and evaluate stage pictures that guide audience attention and tell visual stories.",
      lesson: {
        sections: [
          {
            heading: "The stage picture",
            body: "The stage picture is what the audience sees at any moment: composition, focus, balance, visual storytelling. A strong stage picture guides the eye: one clear focus, supporting elements, visual hierarchy. Every moment should have a clear 'picture' — who or what is the audience meant to watch?",
          },
          {
            heading: "Composition principles",
            body: "Stage composition uses principles similar to visual art: **balance** (visual weight distributed), **focus** (clear centre of attention), **rhythm** (repeating visual elements), **contrast** (light/dark, large/small, still/moving). A well-composed stage picture feels intentional; a poorly composed one feels chaotic.",
          },
          {
            heading: "Dynamic pictures",
            body: "Stage pictures should change with the drama: as characters move, relationships shift, emotions escalate. Static pictures (everyone standing still) feel dead; dynamic pictures (movement, level changes, focus shifts) feel alive. The director choreographs pictures as carefully as dialogue — every moment is a visual composition.",
          },
        ],
        keyFormulas: [
          { name: "Stage picture", statement: "Composition + focus + balance = visual storytelling" },
          { name: "Composition principles", statement: "Balance + focus + rhythm + contrast = visual order" },
        ],
        workedExample: {
          problem: "A scene has five actors on stage but the audience doesn't know where to look. What should the director do?",
          solution: "Establish clear focus — one character or group should be visually dominant. Use lighting to highlight the focus. Arrange other characters in supporting positions — lower levels, edges of stage, or in shadow. Choreograph movement so focus shifts clearly. Every moment needs one clear picture.",
        },
      },
      questions: [
        {
          id: "theatre-u5-stage-picture-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A strong stage picture should have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As many actors as possible" },
              { id: "b", text: "One clear visual focus that guides the audience's eye" },
              { id: "c", text: "No lighting" },
              { id: "d", text: "Actors facing the back wall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stage picture", statement: "Clear focus guides audience attention in the visual composition." },
            ],
            steps: [
              { reasoning: "A strong stage picture has one clear visual focus guiding the eye.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** One clear visual focus that guides the audience's eye",
            commonErrors: [
              "Creating cluttered stage pictures without clear focus.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three principles of stage composition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Composition principles", statement: "Balance, focus, rhythm and contrast create visual order." },
            ],
            steps: [
              { reasoning: "Balance — visual weight distributed across the stage.", marks: 1, markCode: "M" },
              { reasoning: "Focus — clear centre of attention guiding the eye.", marks: 1, markCode: "M" },
              { reasoning: "Contrast — light/dark, large/small, still/moving create visual interest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balance, focus and contrast create effective stage composition.",
            commonErrors: [
              "Composing without considering visual principles.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why stage pictures should change with the drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dynamic pictures", statement: "Changing pictures mirror emotional and narrative shifts." },
            ],
            steps: [
              { reasoning: "Static pictures feel dead — the stage needs visual movement.", marks: 1, markCode: "M" },
              { reasoning: "Changing pictures mirror emotional escalation and relationship shifts.", marks: 1, markCode: "M" },
              { reasoning: "The director choreographs pictures as carefully as dialogue.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: every moment is a visual composition that should serve the drama.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stage pictures should change dynamically to mirror the drama.",
            commonErrors: [
              "Keeping static stage pictures throughout a scene.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a described stage picture.",
          parts: [
            { label: "a", prompt: "Identify two effective composition choices.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating stage picture", statement: "Assess focus, balance, contrast and dramatic purpose." },
            ],
            steps: [
              { part: "a", reasoning: "Effective choices, e.g. clear focus, good balance, meaningful contrast.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two choices correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. unclear focus, unbalanced composition, static picture — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with visual effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adjusting focus, rebalancing, adding movement or contrast.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate stage picture by focus, balance, contrast and dramatic purpose.",
            commonErrors: [
              "Judging stage picture only by visual appeal, not composition principles.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'stage picture' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A photograph taken during rehearsal" },
              { id: "b", text: "The visual composition of the stage at any moment" },
              { id: "c", text: "The audience's programme" },
              { id: "d", text: "The set design blueprint" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stage picture", statement: "The visual composition of the stage at any moment." },
            ],
            steps: [
              { reasoning: "The stage picture is the live visual composition the audience sees.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The visual composition of the stage at any moment",
            commonErrors: [
              "Confusing stage picture with static set design.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "In stage composition, 'balance' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Actors standing on one leg" },
              { id: "b", text: "Distributing visual weight across the stage" },
              { id: "c", text: "The number of actors on stage" },
              { id: "d", text: "Even lighting levels" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balance", statement: "Visual weight distributed across the stage composition." },
            ],
            steps: [
              { reasoning: "Balance distributes visual weight so no area overwhelms the picture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Distributing visual weight across the stage",
            commonErrors: [
              "Confusing compositional balance with physical stability.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Five actors are on stage but the audience does not know where to look. The problem is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too much lighting" },
              { id: "b", text: "Lack of a clear visual focus" },
              { id: "c", text: "Too few actors" },
              { id: "d", text: "The actors' costumes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Visual focus", statement: "Every stage picture needs one clear centre of attention." },
            ],
            steps: [
              { reasoning: "Without a dominant focal point the audience's eye has nowhere to rest.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Lack of a clear visual focus",
            commonErrors: [
              "Blaming casting or costumes rather than composition.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which technique would most effectively redirect audience attention to a single actor in a crowded scene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Asking all other actors to leave the stage" },
              { id: "b", text: "Lighting the focal actor and placing others at the edges or in shadow" },
              { id: "c", text: "Increasing the volume of all actors equally" },
              { id: "d", text: "Turning all actors to face the back wall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Establishing focus", statement: "Lighting, level and position can isolate one focal point." },
            ],
            steps: [
              { reasoning: "Light plus peripheral positioning creates clear visual hierarchy without emptying the stage.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Lighting the focal actor and placing others at the edges or in shadow",
            commonErrors: [
              "Removing actors rather than composing focus.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Contrast' in stage composition includes differences such as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light and dark, large and small, still and moving" },
              { id: "b", text: "Dialogue volume only" },
              { id: "c", text: "Actor ages only" },
              { id: "d", text: "Costume colours only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contrast", statement: "Differences in light, scale, movement or colour that create visual interest." },
            ],
            steps: [
              { reasoning: "Contrast operates across visual dimensions like light, scale and movement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Light and dark, large and small, still and moving",
            commonErrors: [
              "Reducing contrast to costume colour alone.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Dynamic' stage pictures are those that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stay identical throughout the scene" },
              { id: "b", text: "Change with the drama — movement, level shifts, focus changes" },
              { id: "c", text: "Use only one actor" },
              { id: "d", text: "Require no lighting changes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dynamic pictures", statement: "Changing pictures mirror emotional and narrative shifts." },
            ],
            steps: [
              { reasoning: "Dynamic pictures evolve through movement, levels and focus as the drama unfolds.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Change with the drama — movement, level shifts, focus changes",
            commonErrors: [
              "Confusing dynamic pictures with static tableaux.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A completely static stage picture held for a whole scene most likely feels:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dynamic and alive" },
              { id: "b", text: "Dead and lifeless to the audience" },
              { id: "c", text: "Focused and clear" },
              { id: "d", text: "Balanced and intentional" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Static vs dynamic", statement: "Static pictures feel dead; dynamic pictures feel alive." },
            ],
            steps: [
              { reasoning: "Without visual change the stage feels inert regardless of dialogue.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Dead and lifeless to the audience",
            commonErrors: [
              "Assuming dialogue alone can sustain a static picture.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what makes an effective stage picture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stage picture", statement: "Clear focus, balance and contrast create intentional visual storytelling." },
            ],
            steps: [
              { reasoning: "One clear visual focus that tells the audience where to look.", marks: 1, markCode: "M" },
              { reasoning: "Balanced composition distributing visual weight across the stage.", marks: 1, markCode: "M" },
              { reasoning: "Contrast and purpose — the picture serves the drama at that moment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clear focus, balance and purposeful contrast make an effective stage picture.",
            commonErrors: [
              "Judging pictures only by how they look, not composition principles.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how movement and level changes create dynamic stage pictures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dynamic pictures", statement: "Movement and level changes keep the visual composition alive." },
            ],
            steps: [
              { reasoning: "Movement shifts focus and relationships as actors cross the stage.", marks: 1, markCode: "M" },
              { reasoning: "Level changes — standing, sitting, kneeling — alter visual hierarchy and power dynamics.", marks: 1, markCode: "M" },
              { reasoning: "Together they prevent static tableaux and mirror emotional escalation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Movement and level changes shift focus and power, keeping pictures dynamic.",
            commonErrors: [
              "Ignoring staging as part of visual composition.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a director can choreograph focus shifts within a scene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Choreographing focus", statement: "Focus should shift deliberately as dialogue and drama change." },
            ],
            steps: [
              { reasoning: "Use lighting to isolate or release focal points scene by scene.", marks: 1, markCode: "M" },
              { reasoning: "Arrange actors so the dominant figure moves or is repositioned at key moments.", marks: 1, markCode: "M" },
              { reasoning: "Use level and distance — central, elevated positions draw the eye.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: focus shifts should follow the dramatic intention of each moment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Focus shifts are choreographed through light, position, level and movement.",
            commonErrors: [
              "Leaving focus to chance rather than deliberate staging.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Identify two ways lighting can establish visual focus on stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Lighting focus", statement: "Light intensity and colour direct the audience's eye." },
            ],
            steps: [
              { reasoning: "Brightening the focal area while dimming surrounding areas isolates the focus.", marks: 1, markCode: "M" },
              { reasoning: "Using a spotlight or distinct colour on the focal actor draws attention.", marks: 1, markCode: "M" },
              { reasoning: "Both methods create clear visual hierarchy in the picture.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Isolate with intensity contrast or use spotlight/colour on the focal point.",
            commonErrors: [
              "Lighting everything equally, removing hierarchy.",
            ],
          },
        },
        {
          id: "theatre-u5-stage-picture-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss why stage pictures should mirror the emotional arc of a scene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pictures and drama", statement: "Visual composition should evolve with emotional and narrative shifts." },
            ],
            steps: [
              { reasoning: "Escalating tension needs tightening focus and more dynamic pictures.", marks: 1, markCode: "M" },
              { reasoning: "Reconciliation or resolution can open up the picture — wider focus, softer light.", marks: 1, markCode: "M" },
              { reasoning: "Visual rhythm that matches the drama reinforces meaning subliminally.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the picture is part of the storytelling, not decoration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pictures should shift with emotional arc to reinforce the drama visually.",
            commonErrors: [
              "Treating stage picture as separate from narrative.",
            ],
          },
        },
      ],
    },
  ],
};
