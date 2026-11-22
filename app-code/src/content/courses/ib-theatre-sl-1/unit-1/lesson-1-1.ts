import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "theatre-u1-lesson-1-1",
  code: "1-1",
  title: "Physical Theatre and Movement",
  goal: "I CAN use body, gesture and movement to create character, emotion and narrative in physical theatre.",
  standards: [
    "Performance",
    "Physical Theatre",
  ],
  vocabulary: [
    { term: "Physical theatre", definition: "Performance that prioritises the body, gesture and movement over text." },
    { term: "Gesture", definition: "A deliberate bodily movement that communicates meaning or emotion." },
    { term: "Mime", definition: "Performance using gesture and movement without speech or props to create illusion." },
    { term: "Still image", definition: "A frozen physical tableau that captures a moment or relationship." },
    { term: "Levels", definition: "The height at which performers work — standing, sitting, lying — creating power dynamics." },
    { term: "Proxemics", definition: "The use of distance and spatial relationships between performers to communicate." },
  ],
  concepts: [
    {
      id: "theatre-u1-physical-theatre",
      title: "Body as narrative",
      skill: "Use gesture, levels and spatial relationships to create character and meaning without words.",
      lesson: {
        sections: [
          {
            heading: "The body speaks",
            body: "Physical theatre communicates through the body: posture reveals character, gesture reveals emotion, movement reveals intention. A slumped figure suggests defeat; a raised chin suggests pride; a reaching arm suggests desire or desperation. The body is the actor's primary instrument — training it to be expressive and controlled is fundamental.",
          },
          {
            heading: "Levels and power",
            body: "**Levels** — standing, sitting, lying — create power dynamics: standing over someone suggests dominance; lying beneath suggests vulnerability. **Proxemics** — distance and spatial relationships — communicate intimacy or alienation. Two performers close together feel connected; far apart feel isolated. These spatial choices are deliberate dramatic decisions.",
          },
          {
            heading: "Gesture and mime",
            body: "**Gesture** is deliberate movement with meaning — a hand raised could be greeting, threat or blessing depending on context. **Mime** creates illusion without props: the rope that isn't there, the wall that isn't there. Effective physical theatre requires clarity — the audience must read the gesture correctly.",
          },
        ],
        keyFormulas: [
          { name: "Physical elements", statement: "Posture + gesture + levels + proxemics = physical communication" },
          { name: "Power dynamics", statement: "Standing over = dominance; lying beneath = vulnerability; distance = relationship" },
        ],
        workedExample: {
          problem: "Two performers must show a power struggle without dialogue. How could they use physical theatre?",
          solution: "One stands tall and still (dominance) while the other crouches or sits lower (submission). The dominant performer invades the other's personal space (proxemics). When the power shifts, they exchange levels — the submissive one rises while the dominant one lowers. Gesture reinforces: pointing, grabbing, releasing.",
        },
      },
      questions: [
        {
          id: "theatre-u1-physical-theatre-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In physical theatre, 'levels' refer to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The volume of speech" },
              { id: "b", text: "The tempo of movement" },
              { id: "c", text: "The height at which performers work — standing, sitting, lying" },
              { id: "d", text: "The lighting intensity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Levels", statement: "The height at which performers work, creating power dynamics." },
            ],
            steps: [
              { reasoning: "Levels are the heights performers work at — standing, sitting, lying — creating power dynamics.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The height at which performers work — standing, sitting, lying",
            commonErrors: [
              "Confusing levels (height) with volume or tempo.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways performers can show power dynamics through physical theatre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Power dynamics", statement: "Levels, proxemics and gesture communicate dominance and submission." },
            ],
            steps: [
              { reasoning: "Levels — standing over someone suggests dominance; lying beneath suggests vulnerability.", marks: 1, markCode: "M" },
              { reasoning: "Proxemics — invading personal space asserts power; maintaining distance suggests detachment.", marks: 1, markCode: "M" },
              { reasoning: "Gesture — pointing, grabbing or dismissive movements reinforce power relationships.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Levels, proxemics and gesture communicate power dynamics physically.",
            commonErrors: [
              "Using only dialogue to show power rather than physical means.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why clarity is essential in physical theatre and mime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Physical clarity", statement: "The audience must read gestures correctly; ambiguity fails." },
            ],
            steps: [
              { reasoning: "Physical theatre relies on the audience reading body language correctly.", marks: 1, markCode: "M" },
              { reasoning: "Unclear gestures create confusion — the audience sees movement but not meaning.", marks: 1, markCode: "M" },
              { reasoning: "Rehearsal and feedback ensure physical choices communicate as intended.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: physical theatre succeeds only when the audience reads it correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clarity ensures the audience reads physical communication as intended.",
            commonErrors: [
              "Assuming physical theatre is self-explanatory without rehearsal.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described physical sequence",
            author: "Written for Akademik Space",
            source: "Physical theatre analysis",
            text: "Two performers: one stands centre stage in a wide stance, arms crossed; the other crouches at the edge, reaching toward them. The standing figure turns slowly away, then gestures dismissively. The crouching figure remains still, head bowed.",
          },
          stem: "Analyse a described physical theatre sequence.",
          parts: [
            { label: "a", prompt: "Identify two physical elements used.", marks: 2 },
            { label: "b", prompt: "Explain their dramatic effect.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Physical analysis", statement: "Levels, gesture and proxemics create dramatic meaning without words." },
            ],
            steps: [
              { part: "a", reasoning: "Levels (standing vs crouching), gesture (arms crossed, reaching, dismissive), proxemics (distance) — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two elements correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Standing figure dominates through height and closed posture; crouching figure shows submission through low level and bowed head — clear power dynamic.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dramatic effect explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could add eye contact or facial expression to clarify the relationship; or shift levels at the end to show power change.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Levels, gesture, proxemics. (b) Clear power dynamic through physical contrast. (c) Add eye contact or level shift.",
            commonErrors: [
              "Describing movements without analysing their dramatic meaning.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In physical theatre, 'proxemics' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tempo of movement" },
              { id: "b", text: "The use of distance and spatial relationships between performers" },
              { id: "c", text: "The intensity of stage lighting" },
              { id: "d", text: "The pitch of the voice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proxemics", statement: "The use of distance and spatial relationships to communicate." },
            ],
            steps: [
              { reasoning: "Proxemics is the deliberate use of distance between performers to communicate intimacy or alienation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The use of distance and spatial relationships between performers",
            commonErrors: [
              "Confusing proxemics (distance) with vocal or lighting elements.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which staging choice most clearly signals dominance in physical theatre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A performer facing away from the audience" },
              { id: "b", text: "A performer lying curled in the centre of the stage" },
              { id: "c", text: "A performer making small, hesitant movements at the edge of the stage" },
              { id: "d", text: "A performer standing over another and invading their personal space" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Power dynamics", statement: "Height and space occupation communicate dominance and submission." },
            ],
            steps: [
              { reasoning: "Standing over someone and invading personal space asserts dominance through height and proxemics.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Standing over another and invading their personal space",
            commonErrors: [
              "Assuming dominance requires loudness rather than spatial and level choices.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Mime in physical theatre is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaking in a regional dialect" },
              { id: "b", text: "Dancing to recorded music" },
              { id: "c", text: "Creating illusion through gesture and movement without props" },
              { id: "d", text: "Performing with a script" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mime", statement: "Performance using gesture and movement without speech or props to create illusion." },
            ],
            steps: [
              { reasoning: "Mime creates the illusion of objects, walls or ropes through precise physical action alone.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Creating illusion through gesture and movement without props",
            commonErrors: [
              "Confusing mime (physical illusion) with dance or dialect work.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'still image' in physical theatre is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A frozen physical tableau that captures a moment or relationship" },
              { id: "b", text: "A costume change" },
              { id: "c", text: "A lighting state on stage" },
              { id: "d", text: "A sequence of fast movements" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Still image", statement: "A frozen physical tableau capturing a moment or relationship." },
            ],
            steps: [
              { reasoning: "A still image freezes performers mid-action so the audience can read relationships and meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A frozen physical tableau that captures a moment or relationship",
            commonErrors: [
              "Confusing still images with movement sequences or design elements.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For a gesture to communicate effectively in physical theatre it should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deliberate, clear and readable by the audience" },
              { id: "b", text: "Accidental and spontaneous" },
              { id: "c", text: "As small as possible" },
              { id: "d", text: "Performed only with the face" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gesture clarity", statement: "Gestures must be deliberate and readable to communicate meaning." },
            ],
            steps: [
              { reasoning: "Effective gestures are intentional and shaped so the audience reads the intended meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Deliberate, clear and readable by the audience",
            commonErrors: [
              "Believing small or accidental gestures communicate clearly.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two performers working in very close proximity are most likely communicating:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Intimacy, connection or tension" },
              { id: "b", text: "A scene transition" },
              { id: "c", text: "Hostility and threat" },
              { id: "d", text: "Nothing — distance is irrelevant" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Proxemic meaning", statement: "Close distance suggests intimacy or heightened tension; distance suggests isolation." },
            ],
            steps: [
              { reasoning: "Close proxemics reads as intimacy, connection or tension depending on the physical relationship.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Intimacy, connection or tension",
            commonErrors: [
              "Treating performer distance as accidental rather than meaningful.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how levels can communicate a change in power between two characters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Levels and power", statement: "Height communicates dominance or vulnerability; shifts create drama." },
            ],
            steps: [
              { reasoning: "The higher level (standing) reads as dominant; the lower level (sitting, crouching, lying) reads as submissive or vulnerable.", marks: 1, markCode: "M" },
              { reasoning: "A power shift is shown when characters exchange levels — e.g. the submissive one rises while the dominant one lowers.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: level changes let the audience 'see' power moving without dialogue.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Levels communicate power: higher reads dominant, lower reads vulnerable, and exchanges show power shifts.",
            commonErrors: [
              "Describing levels statically without explaining the power relationship.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how proxemics can communicate the relationship between two performers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Proxemic communication", statement: "Distance between performers signals intimacy, tension or isolation." },
            ],
            steps: [
              { reasoning: "Very close distance suggests intimacy, comfort or confrontation depending on the physical contact and energy.", marks: 1, markCode: "M" },
              { reasoning: "Moderate distance suggests a normal social or working relationship.", marks: 1, markCode: "M" },
              { reasoning: "Large distance, especially with turned-away bodies, suggests isolation, alienation or conflict.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: performers should treat distance as a deliberate dramatic choice, not an accident.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proxemics communicates relationship: close reads intimate or confrontational, distant reads isolated or detached.",
            commonErrors: [
              "Ignoring stage distances as meaningful rather than reading them as relationship signals.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q13",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "Described still image",
            author: "Written for Akademik Space",
            source: "Physical theatre analysis",
            text: "A still image of three family members at a dinner table: one figure stands over the table with arms raised; one sits slumped with head down; one stands just inside the doorway, turned away, holding a bag.",
          },
          stem: "Analyse a described physical theatre still image.",
          parts: [
            { label: "a", prompt: "Identify two physical elements used.", marks: 2 },
            { label: "b", prompt: "Explain their dramatic effect.", marks: 2 },
            { label: "c", prompt: "Suggest one addition to strengthen the image.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Physical analysis", statement: "Levels, gesture, proxemics and orientation create readable meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Levels (standing vs sitting), gesture (raised arms, turned body), proxemics (doorway distance) — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two elements correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Standing figure dominates through height and open gesture; seated figure shows defeat; doorway figure shows alienation — a clear family power/relationship dynamic.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dramatic effect explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could add eye lines or a shared object (the bag) to clarify the departure narrative.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Levels, gesture, proxemics. (b) Clear family dynamic through physical contrast. (c) Add eye lines or object focus.",
            commonErrors: [
              "Listing physical elements without explaining their dramatic meaning.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why might a gesture be misunderstood by an audience, and how can performers reduce this risk?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gesture ambiguity", statement: "The same gesture can mean different things; context and clarity determine the reading." },
            ],
            steps: [
              { reasoning: "Gestures are culturally and contextually dependent — a raised hand could be greeting, threat or blessing.", marks: 1, markCode: "M" },
              { reasoning: "Small, fast or unclear gestures may not read from the back of the house.", marks: 1, markCode: "M" },
              { reasoning: "Rehearsing in the actual space and checking sightlines reduces ambiguity.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: clarity of intention plus audience testing makes gestures readable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gestures can be ambiguous due to culture, size and context; rehearsal and clarity reduce misreading.",
            commonErrors: [
              "Assuming all audiences read gesture identically.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Design a wordless physical sequence: a character discovers a locked door.",
          parts: [
            { label: "a", prompt: "State the physical elements and intention you will use.", marks: 2 },
            { label: "b", prompt: "Describe the sequence of movement in order.", marks: 2 },
            { label: "c", prompt: "Explain how the audience will read the meaning.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Physical sequencing", statement: "Deliberate levels, gesture, proxemics and mime create readable narrative." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies elements, e.g. mime of key/handle, levels (kneeling to peer through), gesture (pounding, slumping).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear dramatic intention stated (curiosity turning to frustration).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sequence is logical and progressive — approach, try handle, peer, pound, collapse.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each movement is physically describable and committed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Explains how mime convention, facial focus and energy shifts make meaning legible without words.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Audience readability convincingly argued.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A wordless scene works through deliberate mime, levels and gesture that progress from curiosity to defeat.",
            commonErrors: [
              "Describing emotions vaguely instead of specific physical actions.",
            ],
          },
        },
        {
          id: "theatre-u1-physical-theatre-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A performer mimes lifting an invisible box. Evaluate how they might communicate the box's weight and texture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mime evaluation", statement: "Weight, texture and object properties are conveyed through effort, speed and hand shape." },
            ],
            steps: [
              { reasoning: "Weight is shown through effort — slow lift, braced knees, sustained hold.", marks: 1, markCode: "M" },
              { reasoning: "Texture is shown through hand shaping — flat palms for smooth, fingertips for rough.", marks: 1, markCode: "M" },
              { reasoning: "Consistency of the object boundary (same size, same grip points) convinces the audience it exists.", marks: 1, markCode: "M" },
              { reasoning: "Commitment and stillness sell the illusion better than speed.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: believable mime depends on consistent physical logic of the imagined object.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weight and texture are communicated through effort, hand shape, consistency and committed stillness.",
            commonErrors: [
              "Mime that is too fast or inconsistent breaks the audience's belief.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u1-movement-technique",
      title: "Movement technique",
      skill: "Develop controlled, expressive movement technique for performance — energy, focus and precision.",
      lesson: {
        sections: [
          {
            heading: "Energy and focus",
            body: "Physical performance requires controlled energy: movements should be intentional, not accidental. **Focus** — where the performer looks — directs audience attention. A performer looking at their hands while gesturing draws attention to the gesture's mechanics rather than its meaning. Eyes lead; body follows.",
          },
          {
            heading: "Precision and clarity",
            body: "Movements must be precise enough to read clearly but not so stiff they look mechanical. Practice movements slowly to find the essential shape, then perform with energy. Commit fully — half-hearted gestures look uncertain; committed gestures look powerful even if imperfect.",
          },
          {
            heading: "Spatial awareness",
            body: "Performers must be aware of the whole stage picture: where are the other performers? Where is the audience? Movements should be visible from the back row. Practice in the actual performance space — stage dimensions, sightlines and acoustics affect how movement reads.",
          },
        ],
        keyFormulas: [
          { name: "Movement principles", statement: "Intentional energy + clear focus + spatial awareness = effective physical performance" },
          { name: "Commitment", statement: "Full commitment reads better than hesitant precision" },
        ],
        workedExample: {
          problem: "A performer practices a gesture but it looks weak and unclear. What should they check?",
          solution: "Check energy — is the movement intentional and committed? Check focus — are eyes leading the gesture? Check size — is it visible from the back? Practice slowly to find the essential shape, then perform with full commitment.",
        },
      },
      questions: [
        {
          id: "theatre-u1-movement-technique-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In physical performance, 'focus' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tempo of movement" },
              { id: "b", text: "Where the performer directs their gaze and attention" },
              { id: "c", text: "The volume of voice" },
              { id: "d", text: "The lighting on stage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Focus", statement: "Where the performer looks — directing audience attention." },
            ],
            steps: [
              { reasoning: "Focus is where the performer directs their gaze — leading audience attention.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Where the performer directs their gaze and attention",
            commonErrors: [
              "Confusing focus (gaze) with lighting or tempo.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two principles of effective physical performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Physical principles", statement: "Intentional energy, clear focus and spatial awareness." },
            ],
            steps: [
              { reasoning: "Energy — movements should be intentional and committed, not accidental.", marks: 1, markCode: "M" },
              { reasoning: "Focus — eyes lead the body, directing audience attention.", marks: 1, markCode: "M" },
              { reasoning: "Spatial awareness — movements must be visible and purposeful in the whole stage picture.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy, focus and spatial awareness create effective physical performance.",
            commonErrors: [
              "Moving without intention or awareness of the audience.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why full commitment is more effective than hesitant precision in physical theatre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Commitment", statement: "Committed gestures read clearly; hesitant ones look uncertain." },
            ],
            steps: [
              { reasoning: "Committed gestures have clear intention — the audience reads them confidently.", marks: 1, markCode: "M" },
              { reasoning: "Hesitant gestures look uncertain — the audience sees doubt, not meaning.", marks: 1, markCode: "M" },
              { reasoning: "Perfection is less important than clarity of intention.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: commit fully; precision follows commitment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Full commitment communicates intention; hesitation undermines clarity.",
            commonErrors: [
              "Playing movements too small or tentative to be safe.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a performer's physical technique.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating movement", statement: "Assess energy, focus, precision and spatial awareness." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. committed energy, clear focus, good spatial awareness.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. unclear gestures, poor focus, movements too small — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with performance effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests practising slowly, enlarging movements, checking focus.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate movement by energy, focus, precision and spatial awareness.",
            commonErrors: [
              "Judging movement only by technical accuracy, not communicative clarity.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In physical performance, a performer's eyes should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Remain closed throughout" },
              { id: "b", text: "Look randomly at the floor" },
              { id: "c", text: "Stay fixed on their own hands" },
              { id: "d", text: "Lead the gesture and direct the audience's attention" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Focus leads", statement: "Eyes lead the body and direct audience attention." },
            ],
            steps: [
              { reasoning: "The gaze leads movement, telling the audience where to look and what the gesture means.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Lead the gesture and direct the audience's attention",
            commonErrors: [
              "Looking at the hands instead of leading with the eyes.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Spatial awareness' in physical performance means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memorising your blocking" },
              { id: "b", text: "Keeping a fixed distance from the audience" },
              { id: "c", text: "Avoiding movement" },
              { id: "d", text: "Being aware of the whole stage picture — other performers, audience sightlines and space" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Spatial awareness", statement: "Awareness of the whole stage picture including other performers and audience sightlines." },
            ],
            steps: [
              { reasoning: "Spatial awareness means reading the whole stage — where others are and how movement will be seen.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Being aware of the whole stage picture — other performers, audience sightlines and space",
            commonErrors: [
              "Confusing spatial awareness with memorised blocking alone.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Practising a movement sequence slowly before performing it at full speed mainly helps performers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memorise the music" },
              { id: "b", text: "Find the essential shape of each movement before adding energy" },
              { id: "c", text: "Avoid using focus" },
              { id: "d", text: "Reduce rehearsal time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Slow-to-fast practice", statement: "Slow practice finds the essential shape; energy is added after clarity." },
            ],
            steps: [
              { reasoning: "Slow practice isolates each movement's shape so energy can be added without losing clarity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Find the essential shape of each movement before adding energy",
            commonErrors: [
              "Adding speed and energy before the movement shape is clear.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Effective physical performance requires that movements be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As small as possible" },
              { id: "b", text: "Accidental and spontaneous" },
              { id: "c", text: "Identical for every performer" },
              { id: "d", text: "Intentional and controlled rather than accidental" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intentional energy", statement: "Movements should be deliberate choices, not accidents." },
            ],
            steps: [
              { reasoning: "Every movement should carry intention so the audience reads meaning rather than noise.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Intentional and controlled rather than accidental",
            commonErrors: [
              "Moving without intention, producing unclear stage pictures.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should physical movements be sized for the back row of the audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "So that gestures and levels remain readable from every seat" },
              { id: "b", text: "To fill the stage faster" },
              { id: "c", text: "To make performers look larger" },
              { id: "d", text: "To avoid microphones" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Audience sightlines", statement: "Movement must read clearly from the furthest seat." },
            ],
            steps: [
              { reasoning: "Gestures and level contrasts must be visible from the back or the audience cannot read them.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** So that gestures and levels remain readable from every seat",
            commonErrors: [
              "Performing movements too small to be seen by the whole house.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compared with hesitant, precise movement, full commitment in physical theatre is more effective because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hides mistakes completely" },
              { id: "b", text: "Is always technically perfect" },
              { id: "c", text: "Communicates clear intention that the audience can read confidently" },
              { id: "d", text: "Requires less rehearsal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Commitment", statement: "Committed gestures communicate intention; hesitation reads as uncertainty." },
            ],
            steps: [
              { reasoning: "Full commitment gives the audience a clear signal of intention, even if the shape is imperfect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Communicates clear intention that the audience can read confidently",
            commonErrors: [
              "Believing small cautious movement is safer than committed movement.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two elements of 'intentional energy' in physical performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Intentional energy", statement: "Movements are deliberate choices with clear purpose, not accidents." },
            ],
            steps: [
              { reasoning: "Each movement has a purpose — it communicates character, emotion or narrative.", marks: 1, markCode: "M" },
              { reasoning: "The energy level matches the intention — explosive for anger, sustained for tension, light for joy.", marks: 1, markCode: "M" },
              { reasoning: "The performer commits fully rather than performing half-heartedly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intentional energy means purposeful, committed movement with energy matched to intention.",
            commonErrors: [
              "Confusing energy (intensity of intention) with speed alone.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'eyes lead, body follows' is an effective rule for physical performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Focus leads movement", statement: "The gaze directs attention before the body moves." },
            ],
            steps: [
              { reasoning: "The eyes signal intention a fraction of a second before the movement, preparing the audience.", marks: 1, markCode: "M" },
              { reasoning: "Looking at the hands or away from the target draws attention to mechanics rather than meaning.", marks: 1, markCode: "M" },
              { reasoning: "Leading with the eyes makes gestures read clearly and gives the movement motivation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: eye focus is the performer's steering wheel for physical communication.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Eyes lead because the gaze signals intention and directs attention before the body moves.",
            commonErrors: [
              "Watching the hands or the floor instead of leading with the eyes.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q13",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "Described movement sequence",
            author: "Written for Akademik Space",
            source: "Movement technique analysis",
            text: "A performer miming pulling a heavy rope: eyes drop to the rope, hands grip and pull with slow effort, knees brace, then the whole body leans back with a sharp exhale and the rope 'snaps' taut.",
          },
          stem: "Analyse a described movement sequence for technique.",
          parts: [
            { label: "a", prompt: "Identify two strengths in the performer's technique.", marks: 2 },
            { label: "b", prompt: "Identify one weakness and explain its effect.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Movement evaluation", statement: "Assess focus, energy, precision and physical logic of movement." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. eyes lead to the rope, braced body shows effort, energy builds to the snap.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weakness could be e.g. fixed gaze never lifts to show reaction to the result, or weight shift not fully committed — effect: audience misses emotional payoff.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Weakness explained with performance effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could add a beat of stillness or eye lift after the snap to let the audience register the result.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Eye focus and physical logic of effort. (b) Any plausible weakness with effect. (c) Add reaction beat.",
            commonErrors: [
              "Praising effort without analysing whether the audience can read it.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why performers should rehearse in the actual performance space when possible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Space-specific rehearsal", statement: "Stage dimensions, sightlines and acoustics change how movement reads." },
            ],
            steps: [
              { reasoning: "Stage size affects how large movements must be to read from the back row.", marks: 1, markCode: "M" },
              { reasoning: "Sightlines determine where performers can stand and be seen; some positions are hidden.", marks: 1, markCode: "M" },
              { reasoning: "Practising in the real space reveals problems invisible in a rehearsal room.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: movement is space-relative; rehearsal must happen where the performance will.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rehearsing in the real space reveals how dimensions, sightlines and acoustics affect movement readability.",
            commonErrors: [
              "Assuming movement that works in a studio will work on the actual stage.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A performer must execute a precise object-manipulation sequence (e.g. writing a letter). Outline a rehearsal process for it.",
          parts: [
            { label: "a", prompt: "Describe the slow-practice stage.", marks: 2 },
            { label: "b", prompt: "Describe how energy and tempo are added.", marks: 2 },
            { label: "c", prompt: "Explain how the performer verifies audience readability.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rehearsal process", statement: "Slow shape-finding, then energy, then audience verification." },
            ],
            steps: [
              { part: "a", reasoning: "Practise each action slowly to find the essential shape — where the pen touches, how the page turns.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check consistency of the imagined object's boundaries at slow speed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add natural tempo and energy once shapes are clear; commit fully to each choice.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Energy level matched to the character's emotional state.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Watch from the back row or ask observers whether each action reads; adjust size and clarity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Verification method and adjustment convincingly described.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rehearse slowly for shape, add committed energy, then verify readability from the audience's view.",
            commonErrors: [
              "Performing fast before the movement logic is established.",
            ],
          },
        },
        {
          id: "theatre-u1-movement-technique-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate this statement: 'In physical theatre, precise technique matters more than emotional commitment.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Technique vs commitment", statement: "Clarity of intention outranks mechanical precision in physical performance." },
            ],
            steps: [
              { reasoning: "Precision matters because unclear shapes cannot be read by the audience.", marks: 1, markCode: "M" },
              { reasoning: "However, hesitant precision reads as uncertainty and fails to communicate intention.", marks: 1, markCode: "M" },
              { reasoning: "Committed, intentional movement communicates meaning even when imperfect.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: technique should serve clear intention — commitment is the higher priority.", marks: 1, markCode: "A" },
              { reasoning: "The statement is therefore only partly true; both are needed but intention leads.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Only partly true — committed intention matters more than mechanical precision, though clarity is still required.",
            commonErrors: [
              "Arguing one side absolutely without weighing both.",
            ],
          },
        },
      ],
    },
  ],
};
