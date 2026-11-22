import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "theatre-u3-lesson-3-2",
  code: "3-2",
  title: "Script Analysis for Performance",
  goal: "I CAN analyse a script's dramatic elements and translate analysis into performance choices.",
  standards: [
    "Script Analysis",
    "Performance",
  ],
  vocabulary: [
    { term: "Script analysis", definition: "The process of understanding a play's characters, structure and themes before performing." },
    { term: "Objective", definition: "What a character wants in a scene — their immediate goal." },
    { term: "Obstacle", definition: "What prevents a character from achieving their objective." },
    { term: "Superobjective", definition: "The character's overall goal across the whole play." },
    { term: "Given circumstances", definition: "The facts of the play — time, place, situation — that cannot be changed." },
    { term: "Tactics", definition: "The strategies characters use to achieve their objectives." },
  ],
  concepts: [
    {
      id: "theatre-u3-script-analysis",
      title: "Analysing for performance",
      skill: "Analyse scripts to identify objectives, obstacles, tactics and given circumstances for performance.",
      lesson: {
        sections: [
          {
            heading: "Objectives and obstacles",
            body: "Every character in every scene has an **objective** — what they want right now. The **obstacle** is what prevents them. Scene analysis asks: What does each character want? What stops them? How do they try? The **superobjective** is the character's overall goal across the play — the through-line that unifies all their choices.",
          },
          {
            heading: "Tactics and given circumstances",
            body: "**Tactics** are the strategies characters use: pleading, threatening, distracting, charming. The same objective can use different tactics — a character might beg then threaten. **Given circumstances** are the unchangeable facts: time, place, relationships, history. Actors can't change these — they must work within them.",
          },
          {
            heading: "From analysis to performance",
            body: "Script analysis isn't academic — it's preparation for performance. Understanding objectives tells you where to put emphasis; knowing obstacles tells you where the tension is; identifying tactics tells you how to play each moment. The best performances come from deep analysis, not just line reading.",
          },
        ],
        keyFormulas: [
          { name: "Scene analysis", statement: "Objective + obstacle + tactics = scene dynamics" },
          { name: "Character structure", statement: "Superobjective + given circumstances = character foundation" },
        ],
        workedExample: {
          problem: "In a scene, a character wants to borrow money but is refused. What are the objective, obstacle and possible tactics?",
          solution: "Objective: get money. Obstacle: lender's refusal (maybe pride, lack of trust, or their own problems). Tactics: pleading, offering collateral, guilt-tripping, threatening, appealing to past friendship. The actor plays the tactics while pursuing the objective against the obstacle.",
        },
      },
      questions: [
        {
          id: "theatre-u3-script-analysis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A character's 'objective' in a scene refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their relationship to the audience" },
              { id: "b", text: "Their height and build" },
              { id: "c", text: "What they want to achieve in that moment" },
              { id: "d", text: "Their costume choice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Objective", statement: "What a character wants to achieve in a scene." },
            ],
            steps: [
              { reasoning: "Objective is what a character wants to achieve in that scene.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** What they want to achieve in that moment",
            commonErrors: [
              "Confusing objective (scene goal) with superobjective (overall goal).",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the difference between objective, obstacle and tactics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scene elements", statement: "Objective = want; obstacle = prevention; tactics = strategies." },
            ],
            steps: [
              { reasoning: "Objective — what the character wants in the scene.", marks: 1, markCode: "M" },
              { reasoning: "Obstacle — what prevents them from achieving it.", marks: 1, markCode: "M" },
              { reasoning: "Tactics — the strategies they use to pursue the objective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Objective = want; obstacle = prevention; tactics = strategies.",
            commonErrors: [
              "Confusing the three elements or treating them as identical.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'given circumstances' matter for actors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Given circumstances", statement: "The unchangeable facts of the play that actors must work within." },
            ],
            steps: [
              { reasoning: "Given circumstances are the facts — time, place, relationships, history.", marks: 1, markCode: "M" },
              { reasoning: "Actors can't change these — they must accept and work within them.", marks: 1, markCode: "M" },
              { reasoning: "Ignoring them creates anachronisms and breaks the world of the play.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: good acting respects the given circumstances.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Given circumstances are unchangeable facts actors must work within.",
            commonErrors: [
              "Ignoring the play's setting and context.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described scene",
            author: "Written for Akademik Space",
            source: "Scene analysis exercise",
            text: "Two characters meet for the first time in months. Character A wants to apologize; Character B wants to maintain distance. A tries small talk; B gives short answers. A finally says 'I'm sorry'; B pauses, then says 'I don't know what to say.'",
          },
          stem: "Analyse a scene for performance.",
          parts: [
            { label: "a", prompt: "Identify each character's objective.", marks: 2 },
            { label: "b", prompt: "Identify the obstacles and tactics.", marks: 2 },
            { label: "c", prompt: "Suggest how an actor should play the scene.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scene analysis", statement: "Objectives, obstacles and tactics create scene dynamics." },
            ],
            steps: [
              { part: "a", reasoning: "A: apologize; B: maintain distance — objectives identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Objectives correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Obstacles: A's fear of rejection, B's hurt; Tactics: A uses small talk then direct apology, B uses brevity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Obstacles and tactics correctly identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Actor should play A's tentative hope and B's guarded response; the pause before 'I don't know' is crucial — neither forgiveness nor rejection yet.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Performance approach convincingly suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A apologizes, B distances. (b) Fear/hurt obstacles; small talk/apology tactics. (c) Play tentative hope vs guarded response.",
            commonErrors: [
              "Identifying objectives without connecting to performance choices.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An 'obstacle' in scene analysis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What a character wants" },
              { id: "b", text: "The set design" },
              { id: "c", text: "What prevents a character from achieving their objective" },
              { id: "d", text: "The character's costume" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Obstacle", statement: "What prevents a character from achieving their objective." },
            ],
            steps: [
              { reasoning: "The obstacle is the resistance — internal or external — that blocks the character's want.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** What prevents a character from achieving their objective",
            commonErrors: [
              "Confusing obstacle with objective.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A character's 'superobjective' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A goal within a single scene" },
              { id: "b", text: "The character's overall goal across the whole play" },
              { id: "c", text: "The audience's expectation" },
              { id: "d", text: "The director's vision" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Superobjective", statement: "The character's overall goal across the whole play." },
            ],
            steps: [
              { reasoning: "The superobjective is the through-line goal unifying all of a character's scene-by-scene choices.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The character's overall goal across the whole play",
            commonErrors: [
              "Confusing superobjective with a scene objective.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A character who uses 'pleading' and later 'threatening' to get money is changing their:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Superobjective" },
              { id: "b", text: "Given circumstances" },
              { id: "c", text: "Tactics" },
              { id: "d", text: "Objective" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tactics", statement: "The strategies characters use to pursue an objective; they can change within a scene." },
            ],
            steps: [
              { reasoning: "Pleading and threatening are different strategies for the same want — that is a change of tactics, not objective.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Tactics",
            commonErrors: [
              "Confusing tactics (strategies) with objective (the want).",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Given circumstances' include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The lighting design" },
              { id: "b", text: "The play's fixed facts — time, place, relationships, history" },
              { id: "c", text: "The director's concept" },
              { id: "d", text: "The costume choices" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Given circumstances", statement: "The unchangeable facts of the play actors must work within." },
            ],
            steps: [
              { reasoning: "Given circumstances are the fixed facts — time, place, relationships, history — that cannot be altered.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The play's fixed facts — time, place, relationships, history",
            commonErrors: [
              "Confusing given circumstances with production choices like design.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might the same objective use different tactics within one scene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because objectives change with every line" },
              { id: "b", text: "Because actors forget their lines" },
              { id: "c", text: "Because the director changes the script" },
              { id: "d", text: "Because the character adapts their strategy as the obstacle responds" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tactical adaptation", statement: "Characters shift tactics in response to the obstacle while pursuing the same objective." },
            ],
            steps: [
              { reasoning: "A tactic is a strategy; when one fails the character tries another while the objective stays the same.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The character adapts strategy as the obstacle responds",
            commonErrors: [
              "Assuming the objective changes whenever tactics change.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In script analysis for performance, identifying the objective tells the actor:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What costume to wear" },
              { id: "b", text: "When to exit the stage" },
              { id: "c", text: "What to pursue and where to place emphasis in the scene" },
              { id: "d", text: "How to design the set" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Analysis to performance", statement: "Objectives guide where emphasis and pursuit go in performance." },
            ],
            steps: [
              { reasoning: "The objective is the scene goal; knowing it tells the actor what to pursue and where emphasis belongs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** What to pursue and where to place emphasis",
            commonErrors: [
              "Treating analysis as academic rather than performance preparation.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define 'tactics' and give two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tactics", statement: "The strategies characters use to achieve their objectives." },
            ],
            steps: [
              { reasoning: "Tactics are the strategies a character uses to pursue their objective.", marks: 1, markCode: "M" },
              { reasoning: "Examples include pleading, threatening, charming or distracting.", marks: 1, markCode: "M" },
              { reasoning: "Definition is accurate and two valid examples are given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tactics are strategies for achieving objectives; e.g. pleading, threatening.",
            commonErrors: [
              "Confusing tactics with the objective itself.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how to identify a character's objective in a scene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Identifying objectives", statement: "Ask what the character wants right now; read actions and subtext." },
            ],
            steps: [
              { reasoning: "Ask what the character wants in this moment — the immediate goal.", marks: 1, markCode: "M" },
              { reasoning: "Read what characters do and imply, not only what they literally say.", marks: 1, markCode: "M" },
              { reasoning: "Objectives are identified scene by scene, then connected to the superobjective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identify what the character wants now by reading actions, words and subtext.",
            commonErrors: [
              "Reading only the literal dialogue without inferring wants.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the relationship between objective, obstacle and tactics in creating dramatic tension.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scene dynamics", statement: "Objective plus obstacle plus tactics create dramatic tension." },
            ],
            steps: [
              { reasoning: "The objective creates desire — something the character wants.", marks: 1, markCode: "M" },
              { reasoning: "The obstacle creates resistance — something preventing its achievement.", marks: 1, markCode: "M" },
              { reasoning: "Tactics are the character's attempts to overcome the obstacle.", marks: 1, markCode: "M" },
              { reasoning: "Tension lives in the gap between pursuit and prevention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tension = pursuit of objective against obstacle via tactics.",
            commonErrors: [
              "Describing the three elements without linking them to tension.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "A character's superobjective is 'to be loved'. Explain how this might shape their objectives in individual scenes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Superobjective", statement: "The overall goal unifies and motivates scene-level objectives." },
            ],
            steps: [
              { reasoning: "The superobjective is the through-line — the character's overall goal across the play.", marks: 1, markCode: "M" },
              { reasoning: "Scene objectives serve that goal — e.g. winning approval, avoiding conflict, impressing someone.", marks: 1, markCode: "M" },
              { reasoning: "Different tactics may be tried in each scene while the underlying want persists.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: scene wants should coherently serve the superobjective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scene objectives are steps toward the superobjective of being loved.",
            commonErrors: [
              "Treating scene objectives as unrelated to the superobjective.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse this scene for performance: A mother wants her son to stay for dinner; he wants to leave for a party. She pleads, then guilt-trips; he promises to be home early.",
          parts: [
            { label: "a", prompt: "Identify each character's objective and the obstacle.", marks: 2 },
            { label: "b", prompt: "Identify the tactics used.", marks: 2 },
            { label: "c", prompt: "Suggest how the actors should play the scene.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scene analysis", statement: "Objectives, obstacles and tactics create scene dynamics." },
            ],
            steps: [
              { part: "a", reasoning: "Mother wants him to stay; son wants to leave. Obstacle: his desire vs her disappointment.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Objectives and obstacle correctly identified for both characters.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tactics: mother pleads then guilt-trips; son uses promise/reassurance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Tactics correctly identified for both characters.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Play mother's shift from warmth to guilt and son's eager escape masked by reassurance; the promise may be hollow.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Performance approach convincingly suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) She wants him to stay, he wants to leave; obstacle is her disappointment. (b) Pleading/guilt-tripping vs promising. (c) Play shifting warmth and hollow reassurance.",
            commonErrors: [
              "Identifying objectives without connecting to performance choices.",
            ],
          },
        },
        {
          id: "theatre-u3-script-analysis-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why deep script analysis produces better performance than line-reading alone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Analysis to performance", statement: "Understanding objectives, obstacles and subtext informs every performance choice." },
            ],
            steps: [
              { reasoning: "Analysis reveals what characters really want and what stops them — the engine of the scene.", marks: 1, markCode: "M" },
              { reasoning: "It informs delivery, emphasis, movement and pauses rather than just memorised words.", marks: 1, markCode: "M" },
              { reasoning: "Performances become purposeful — every moment serves the character's pursuit.", marks: 1, markCode: "R" },
              { reasoning: "The audience perceives this intention and responds to the truth of it.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the best performances come from deep analysis, not just line reading.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Analysis turns words into intention, producing purposeful, believable performance.",
            commonErrors: [
              "Believing memorising lines is sufficient preparation.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u3-script-to-stage",
      title: "From script to stage",
      skill: "Translate script analysis into performance choices — blocking, delivery and interpretation.",
      lesson: {
        sections: [
          {
            heading: "Blocking and staging",
            body: "**Blocking** is the choreography of movement: where actors stand, how they move, when they enter and exit. Blocking serves the drama: proximity shows intimacy or threat; distance shows alienation; levels show power. Good blocking makes the stage picture readable — the audience should never wonder where to look.",
          },
          {
            heading: "Delivery and interpretation",
            body: "Delivery — how lines are spoken — reveals character and subtext: pace, volume, emphasis, pauses. Interpretation is the actor's choices: what does this line really mean? What's the subtext? The same line can be played as sincere, sarcastic, desperate or angry — interpretation reveals character and theme.",
          },
          {
            heading: "Integration",
            body: "The best performances integrate analysis, blocking and delivery: the actor knows the character's objective, blocks to serve the scene, and delivers lines with subtextual meaning. Technical skill serves interpretation — movement and voice should express character, not just execute instructions.",
          },
        ],
        keyFormulas: [
          { name: "Performance elements", statement: "Blocking + delivery + interpretation = staged performance" },
          { name: "Blocking purpose", statement: "Movement serves drama — proximity, distance, levels create meaning" },
        ],
        workedExample: {
          problem: "A scene has two characters having a tense argument. How should blocking serve the drama?",
          solution: "Start with distance (formality), close as tension rises (confrontation), perhaps one character backs away (retreat) while the other advances (pursuit). At the climax, they might be very close or one might exit. Blocking should mirror the emotional escalation.",
        },
      },
      questions: [
        {
          id: "theatre-u3-script-to-stage-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Blocking in theatre refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The script's structure" },
              { id: "b", text: "The lighting plot" },
              { id: "c", text: "The planned movement and positioning of actors on stage" },
              { id: "d", text: "The costume design" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blocking", statement: "The planned movement and positioning of actors on stage." },
            ],
            steps: [
              { reasoning: "Blocking is the planned movement and positioning of actors.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The planned movement and positioning of actors on stage",
            commonErrors: [
              "Confusing blocking (movement) with script or design.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways blocking can serve the drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Blocking function", statement: "Proximity, distance and levels create dramatic meaning." },
            ],
            steps: [
              { reasoning: "Proximity and distance — close suggests intimacy/threat; far suggests alienation.", marks: 1, markCode: "M" },
              { reasoning: "Levels — standing over suggests dominance; lying beneath suggests vulnerability.", marks: 1, markCode: "M" },
              { reasoning: "Movement patterns — advance/retreat mirror emotional escalation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proximity, distance and levels create dramatic meaning through blocking.",
            commonErrors: [
              "Blocking without considering dramatic purpose.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how delivery choices reveal subtext.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Delivery and subtext", statement: "How lines are spoken reveals what characters really mean." },
            ],
            steps: [
              { reasoning: "The same line can be sincere, sarcastic, desperate or angry depending on delivery.", marks: 1, markCode: "M" },
              { reasoning: "Pace, volume, emphasis and pauses all carry subtextual meaning.", marks: 1, markCode: "M" },
              { reasoning: "Good delivery plays the gap between words and meaning.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: delivery is interpretation made audible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Delivery choices reveal subtext — how lines are spoken matters as much as what's said.",
            commonErrors: [
              "Delivering lines without considering subtextual meaning.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a described staging of a scene.",
          parts: [
            { label: "a", prompt: "Identify two effective staging choices.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating staging", statement: "Assess blocking clarity, dramatic purpose and integration." },
            ],
            steps: [
              { part: "a", reasoning: "Effective choices, e.g. clear sightlines, meaningful proximity, level shifts.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two choices correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. unclear focus, blocking contradicts drama, static staging — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with staging effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adjusting blocking for clarity and dramatic purpose.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate staging by clarity, dramatic purpose and integration.",
            commonErrors: [
              "Judging staging only by visual interest, not dramatic function.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In theatre, 'delivery' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The set design" },
              { id: "b", text: "The audience's reaction" },
              { id: "c", text: "The costume choices" },
              { id: "d", text: "How lines are spoken — pace, volume, emphasis, pauses" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Delivery", statement: "How lines are spoken — pace, volume, emphasis and pauses." },
            ],
            steps: [
              { reasoning: "Delivery is the vocal performance of lines, carrying subtextual meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** How lines are spoken",
            commonErrors: [
              "Confusing delivery with set or costume design.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Close proximity between two characters in blocking typically suggests:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Intimacy or threat, depending on context" },
              { id: "b", text: "The end of the scene" },
              { id: "c", text: "Nothing in particular" },
              { id: "d", text: "A costume change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Blocking function", statement: "Proximity can show intimacy or threat; distance shows alienation." },
            ],
            steps: [
              { reasoning: "Proximity is charged — it can signal intimacy or confrontation depending on the scene.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Intimacy or threat, depending on context",
            commonErrors: [
              "Assuming proximity always means affection.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The use of 'levels' in blocking (standing over, lying beneath) creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lighting changes" },
              { id: "b", text: "Dramatic meaning such as dominance or vulnerability" },
              { id: "c", text: "Scene transitions" },
              { id: "d", text: "Sound effects" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Levels", statement: "Vertical positioning expresses power — dominance above, vulnerability below." },
            ],
            steps: [
              { reasoning: "Levels externalise power relationships — standing over suggests dominance, lying beneath suggests vulnerability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Dramatic meaning such as dominance or vulnerability",
            commonErrors: [
              "Ignoring vertical positioning as a dramatic tool.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Subtext' in performance refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The music played under scenes" },
              { id: "b", text: "What characters really mean beneath the spoken words" },
              { id: "c", text: "The audience's dialogue" },
              { id: "d", text: "The stage directions beneath the dialogue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subtext", statement: "The gap between what is said and what is meant." },
            ],
            steps: [
              { reasoning: "Subtext is the underlying meaning characters communicate beneath their literal words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What characters really mean beneath the spoken words",
            commonErrors: [
              "Confusing subtext with stage directions or music.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should blocking patterns mirror a scene's emotional escalation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it saves rehearsal time" },
              { id: "b", text: "Because it always looks better" },
              { id: "c", text: "Because movement can externalise rising tension — advance, retreat, closeness" },
              { id: "d", text: "Because theatre convention requires it" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Blocking serves drama", statement: "Movement patterns should mirror emotional escalation." },
            ],
            steps: [
              { reasoning: "Blocking is choreography that serves the drama; advance/retreat and proximity can externalise tension.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Movement externalises the drama's rising tension",
            commonErrors: [
              "Blocking without considering emotional trajectory.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A well-judged pause before a key line can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Create anticipation and weight, revealing subtext" },
              { id: "b", text: "Be safely cut in editing" },
              { id: "c", text: "Indicate the actor forgot their lines" },
              { id: "d", text: "Signal the end of the scene" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pauses and delivery", statement: "Pauses build anticipation and carry subtextual weight." },
            ],
            steps: [
              { reasoning: "A pause before a key line creates anticipation and lets subtext land.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Create anticipation and weight, revealing subtext",
            commonErrors: [
              "Treating pauses as dead time rather than dramatic tools.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three elements of a performer's delivery.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Delivery elements", statement: "Pace, volume, emphasis and pauses shape delivery." },
            ],
            steps: [
              { reasoning: "Pace and volume — speed and loudness of speech.", marks: 1, markCode: "M" },
              { reasoning: "Emphasis and pauses — stress on words and deliberate silences.", marks: 1, markCode: "M" },
              { reasoning: "Three elements of delivery correctly identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pace, volume, emphasis and pauses are elements of delivery.",
            commonErrors: [
              "Listing only one delivery element or confusing delivery with blocking.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how an actor might use blocking to show a power shift between two characters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Blocking and power", statement: "Levels and proximity externalise changing power relationships." },
            ],
            steps: [
              { reasoning: "Establish initial positions — e.g. one standing over the other seated.", marks: 1, markCode: "M" },
              { reasoning: "Movement reverses the dynamic — the lower character rises, or the dominant one sits or retreats.", marks: 1, markCode: "M" },
              { reasoning: "Blocking choices clearly track and dramatise the power shift.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blocking tracks the power shift through levels and movement reversal.",
            commonErrors: [
              "Keeping static positions that ignore the changing relationship.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how delivery choices can contradict the literal words of a line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Delivery and subtext", statement: "How a line is spoken can say the opposite of what it literally says." },
            ],
            steps: [
              { reasoning: "Words can say one thing while tone, pace and emphasis communicate another.", marks: 1, markCode: "M" },
              { reasoning: "Sarcasm and irony are created precisely through this gap between word and delivery.", marks: 1, markCode: "M" },
              { reasoning: "E.g. 'I'm so happy for you' delivered flatly signals the opposite.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: delivery plays the gap between words and meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Delivery can contradict literal words, creating subtext such as sarcasm.",
            commonErrors: [
              "Delivering lines at face value without subtext.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why technical skill in movement and voice should serve interpretation rather than replace it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Skill serves interpretation", statement: "Movement and voice are tools for expressing character, not ends in themselves." },
            ],
            steps: [
              { reasoning: "Technical skill — movement, vocal control — is a tool for expression.", marks: 1, markCode: "M" },
              { reasoning: "Skill should express character and subtext, not merely execute instructions.", marks: 1, markCode: "M" },
              { reasoning: "Mechanical execution without interpretation feels empty to an audience.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the best performances integrate analysis, blocking and delivery.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Technical skill serves interpretation; execution alone is meaningless.",
            commonErrors: [
              "Judging performance by technical display rather than dramatic purpose.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate this staging of an argument scene: the actors move closer as the argument escalates, one stands over the other who sits, but at the climax both turn upstage so the audience cannot see their faces.",
          parts: [
            { label: "a", prompt: "Identify two effective staging choices.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating staging", statement: "Assess blocking clarity, dramatic purpose and visibility." },
            ],
            steps: [
              { part: "a", reasoning: "Effective: proximity mirrors escalation; level shift shows dominance.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two effective choices correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses: climax faces hidden — audience loses key reactions; upstage turn may break focus.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its staging effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests keeping faces visible or angling for partial sightlines at the climax.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proximity and levels work; hidden faces at climax weaken it — keep key reactions visible.",
            commonErrors: [
              "Judging staging only by visual interest, not audience sightlines.",
            ],
          },
        },
        {
          id: "theatre-u3-script-to-stage-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how a director might combine blocking and delivery to communicate a character's inner conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Integrated performance", statement: "Blocking and delivery together can layer meaning." },
            ],
            steps: [
              { reasoning: "Blocking can externalise conflict — e.g. approaching then retreating from another character.", marks: 1, markCode: "M" },
              { reasoning: "Delivery can contradict or undercut the words, revealing the real inner state.", marks: 1, markCode: "M" },
              { reasoning: "E.g. calm delivery while pacing anxiously, or gentle words spoken harshly.", marks: 1, markCode: "R" },
              { reasoning: "The audience reads the layered meaning created by the combination.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: integrated choices communicate what words alone cannot.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blocking and delivery layered together externalise inner conflict.",
            commonErrors: [
              "Using blocking or delivery in isolation rather than together.",
            ],
          },
        },
      ],
    },
  ],
};
