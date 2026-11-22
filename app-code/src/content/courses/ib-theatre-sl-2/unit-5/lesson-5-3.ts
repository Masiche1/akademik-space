import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "theatre-u5-lesson-5-3",
  code: "5-3",
  title: "Rehearsal Process and Collaboration",
  goal: "I CAN manage the rehearsal process effectively and collaborate with cast and crew to create a cohesive production.",
  standards: [
    "Directing",
    "Rehearsal",
  ],
  vocabulary: [
    { term: "Rehearsal", definition: "Practice sessions where performers prepare and refine the production." },
    { term: "Blocking rehearsal", definition: "Rehearsal focused on movement and staging." },
    { term: "Run-through", definition: "A complete performance of the piece without stopping." },
    { term: "Tech rehearsal", definition: "Rehearsal integrating lighting, sound and set elements." },
    { term: "Dress rehearsal", definition: "The final rehearsal with costumes, makeup and full technical elements." },
    { term: "Ensemble", definition: "The group of performers working together as a company." },
  ],
  concepts: [
    {
      id: "theatre-u5-rehearsal-process",
      title: "The rehearsal process",
      skill: "Manage rehearsal stages effectively — from table work through blocking to technical and dress rehearsals.",
      lesson: {
        sections: [
          {
            heading: "Rehearsal stages",
            body: "Rehearsals progress through stages: **table work** (reading and analysing the text), **blocking** (staging movement), **run-throughs** (complete performances), **tech rehearsal** (integrating lighting, sound, set), **dress rehearsal** (full production simulation). Each stage has a purpose — don't rush to performance before the foundations are solid.",
          },
          {
            heading: "Effective rehearsal techniques",
            body: "Good rehearsals are structured: start with objectives (what are we trying to achieve today?); isolate problems (don't just repeat mistakes); work slowly on difficult sections; run complete pieces to build stamina and flow; end with a full run-through. Individual preparation frees group time for coordination.",
          },
          {
            heading: "Collaboration and communication",
            body: "Rehearsals require clear communication: the director gives notes clearly and specifically; actors ask questions and offer ideas; the ensemble respects each other's process. Feedback should be constructive — 'try this' rather than 'that's wrong'. The best rehearsals feel like creative collaboration, not top-down instruction.",
          },
        ],
        keyFormulas: [
          { name: "Rehearsal stages", statement: "Table work → blocking → run-throughs → tech → dress" },
          { name: "Rehearsal strategy", statement: "Isolate problems → slow practice → full run-throughs" },
        ],
        workedExample: {
          problem: "A rehearsal keeps stopping at the same difficult scene. How should the director handle this?",
          solution: "Isolate the scene: work it slowly without the full run; identify the specific problem (lines, blocking, motivation); try different approaches; once solved, run the section then continue. Don't repeat the same mistake — diagnose and fix.",
        },
      },
      questions: [
        {
          id: "theatre-u5-rehearsal-process-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'run-through' rehearsal involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only technical elements" },
              { id: "b", text: "Only costume fittings" },
              { id: "c", text: "Practising one line repeatedly" },
              { id: "d", text: "Performing the complete piece without stopping" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Run-through", statement: "A complete performance of the piece without stopping." },
            ],
            steps: [
              { reasoning: "A run-through is a complete performance without stopping for corrections.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Performing the complete piece without stopping",
            commonErrors: [
              "Confusing run-through (complete performance) with isolated practice.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the main stages of the rehearsal process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rehearsal stages", statement: "Table work, blocking, run-throughs, tech and dress rehearsals." },
            ],
            steps: [
              { reasoning: "Table work — reading and analysing the text.", marks: 1, markCode: "M" },
              { reasoning: "Blocking — staging movement and positioning.", marks: 1, markCode: "M" },
              { reasoning: "Run-throughs, tech and dress rehearsals — integrating and refining.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Table work → blocking → run-throughs → tech → dress.",
            commonErrors: [
              "Skipping stages or rushing to performance.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why isolating problems is more effective than repeating mistakes in rehearsal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rehearsal strategy", statement: "Diagnosing and fixing problems beats repeating errors." },
            ],
            steps: [
              { reasoning: "Repeating mistakes reinforces them — the body learns the error.", marks: 1, markCode: "M" },
              { reasoning: "Isolating problems allows focused work on the specific issue.", marks: 1, markCode: "M" },
              { reasoning: "Once solved, the section can be integrated into the whole.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: rehearsal should diagnose and fix, not just repeat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Isolating problems allows focused correction; repeating mistakes reinforces them.",
            commonErrors: [
              "Repeating entire scenes without addressing specific issues.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a rehearsal process.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating rehearsal", statement: "Assess structure, problem-solving and communication." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. structured stages, problem isolation, clear communication.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. repeating mistakes, no run-throughs, poor communication — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with rehearsal effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests isolating problems, adding run-throughs, improving feedback.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate rehearsal by structure, problem-solving and communication.",
            commonErrors: [
              "Judging rehearsal only by hours logged, not effectiveness.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Table work' in rehearsal refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading and analysing the text with the cast" },
              { id: "b", text: "Practising fight choreography" },
              { id: "c", text: "Fitting costumes" },
              { id: "d", text: "Setting up the lighting rig" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Table work", statement: "Reading and analysing the text before staging." },
            ],
            steps: [
              { reasoning: "Table work is the analytical reading stage at the start of rehearsal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reading and analysing the text with the cast",
            commonErrors: [
              "Confusing table work with physical staging.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'blocking rehearsal' focuses primarily on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Costume fittings" },
              { id: "b", text: "Reading the script aloud" },
              { id: "c", text: "Staging movement and positioning of actors" },
              { id: "d", text: "Auditioning new actors" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blocking rehearsal", statement: "Rehearsal focused on movement and staging." },
            ],
            steps: [
              { reasoning: "Blocking determines where actors move and stand on stage.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Staging movement and positioning of actors",
            commonErrors: [
              "Confusing blocking with line rehearsal.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'tech rehearsal' integrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only audience seating" },
              { id: "b", text: "Only the actors' voices" },
              { id: "c", text: "Only costume changes" },
              { id: "d", text: "Lighting, sound and set elements with the performance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tech rehearsal", statement: "Rehearsal integrating lighting, sound and set elements." },
            ],
            steps: [
              { reasoning: "Tech rehearsal brings all technical elements together with the performance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Lighting, sound and set elements with the performance",
            commonErrors: [
              "Confusing tech rehearsal with dress rehearsal.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should a director not rush to run-throughs before blocking is complete?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because actors refuse to run scenes" },
              { id: "b", text: "Because run-throughs are always boring" },
              { id: "c", text: "Because lighting is not ready" },
              { id: "d", text: "Because unsettled blocking undermines the foundations of the production" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rehearsal order", statement: "Each stage builds on the last; foundations must be solid before performance." },
            ],
            steps: [
              { reasoning: "Movement and staging must be settled before complete run-throughs are useful.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Because unsettled blocking undermines the foundations of the production",
            commonErrors: [
              "Thinking more rehearsal time always means better results regardless of stage.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'dress rehearsal' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only a lighting check" },
              { id: "b", text: "The first reading of the script" },
              { id: "c", text: "An open performance for critics" },
              { id: "d", text: "A rehearsal with costumes, makeup and full technical elements" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dress rehearsal", statement: "Final rehearsal simulating the full production." },
            ],
            steps: [
              { reasoning: "Dress rehearsal includes costumes, makeup and all technical elements.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A rehearsal with costumes, makeup and full technical elements",
            commonErrors: [
              "Confusing dress rehearsal with an actual performance.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rehearsal keeps stopping at the same difficult scene. The most effective response is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skip the scene entirely" },
              { id: "b", text: "Let the actors decide" },
              { id: "c", text: "Repeat the whole scene over and over" },
              { id: "d", text: "Isolate the scene and diagnose the specific problem" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Isolating problems", statement: "Diagnosing specific issues beats repeating mistakes." },
            ],
            steps: [
              { reasoning: "Isolating and diagnosing the specific problem allows targeted correction.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Isolate the scene and diagnose the specific problem",
            commonErrors: [
              "Repeating mistakes hoping they will fix themselves.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Individual preparation before group rehearsals is valuable because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eliminates the need for communication" },
              { id: "b", text: "Replaces the director's role" },
              { id: "c", text: "Frees group time for coordination and problem-solving" },
              { id: "d", text: "Allows actors to avoid rehearsals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Individual preparation", statement: "Private work frees ensemble time for coordination." },
            ],
            steps: [
              { reasoning: "Preparation done alone means group time can focus on ensemble issues.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Frees group time for coordination and problem-solving",
            commonErrors: [
              "Seeing individual prep as competing with collaboration.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why rehearsal stages should not be rushed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rehearsal stages", statement: "Each stage builds foundations for the next." },
            ],
            steps: [
              { reasoning: "Table work establishes understanding before movement is attempted.", marks: 1, markCode: "M" },
              { reasoning: "Blocking must settle before run-throughs and technical elements can integrate.", marks: 1, markCode: "M" },
              { reasoning: "Rushing produces unstable foundations that collapse under performance pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each stage builds on the last; rushing creates unstable foundations.",
            commonErrors: [
              "Treating rehearsals as simply counting down to performance.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe effective rehearsal techniques for difficult sections of a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rehearsal strategy", statement: "Isolate problems, work slowly, then integrate." },
            ],
            steps: [
              { reasoning: "Isolate the section — stop the run and work only on the problem area.", marks: 1, markCode: "M" },
              { reasoning: "Identify the specific issue — lines, blocking, motivation — and try different approaches slowly.", marks: 1, markCode: "M" },
              { reasoning: "Once resolved, run the section then continue into full run-throughs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Isolate, diagnose, work slowly, then reintegrate into full runs.",
            commonErrors: [
              "Repeating the whole scene without diagnosing the problem.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a director should structure an effective rehearsal session.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structuring rehearsal", statement: "Clear objectives, isolated problems, slow work and full runs." },
            ],
            steps: [
              { reasoning: "Start with a clear objective — what should this session achieve?", marks: 1, markCode: "M" },
              { reasoning: "Isolate and address specific problems rather than repeating errors.", marks: 1, markCode: "M" },
              { reasoning: "Work slowly on difficult material, then build to run-throughs for stamina and flow.", marks: 1, markCode: "R" },
              { reasoning: "End with a full run to integrate and assess progress.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Objective → isolate problems → slow work → full run-through.",
            commonErrors: [
              "Rehearsing without a plan or measurable goal.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how actors can give constructive feedback to each other during rehearsals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Constructive feedback", statement: "Specific, actionable suggestions preserve morale and improve work." },
            ],
            steps: [
              { reasoning: "Be specific — 'try this on that line' rather than 'that was wrong'.", marks: 1, markCode: "M" },
              { reasoning: "Focus on the work, not the person — critique choices, not character.", marks: 1, markCode: "M" },
              { reasoning: "Offer suggestions the actor can act on, keeping the ensemble collaborative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific, work-focused, actionable feedback strengthens the ensemble.",
            commonErrors: [
              "Giving vague or personal criticism.",
            ],
          },
        },
        {
          id: "theatre-u5-rehearsal-process-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of full run-throughs in the rehearsal process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Run-throughs", statement: "Complete performances build stamina, flow and reveal integration problems." },
            ],
            steps: [
              { reasoning: "Run-throughs build endurance and reveal pacing problems isolation cannot.", marks: 1, markCode: "M" },
              { reasoning: "They expose integration issues between actors, movement and timing.", marks: 1, markCode: "M" },
              { reasoning: "They show whether isolated fixes hold together in the whole.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: run-throughs are essential, but they complement rather than replace focused work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Run-throughs reveal integration and stamina issues; they complement focused rehearsal.",
            commonErrors: [
              "Thinking run-throughs alone are sufficient rehearsal.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u5-collaboration",
      title: "Collaboration and ensemble",
      skill: "Collaborate effectively with cast and crew to create a cohesive theatrical production.",
      lesson: {
        sections: [
          {
            heading: "Ensemble creation",
            body: "Theatre is collaborative art: actors, director, designers, technicians all contribute. Effective collaboration requires: clear communication (everyone knows the vision); mutual respect (everyone's contribution matters); and shared ownership (the production belongs to the ensemble, not just the director).",
          },
          {
            heading: "Giving and receiving feedback",
            body: "Feedback should be specific and constructive: 'try this' rather than 'that's wrong'. Actors should be open to direction while offering their own ideas. The director shapes but doesn't impose — the best productions emerge from dialogue between vision and interpretation.",
          },
          {
            heading: "Building ensemble",
            body: "Ensemble exercises build trust and communication: trust falls, mirror exercises, group improvisations, status games. These develop the awareness and responsiveness needed for performance. The strongest ensembles feel like one organism — each member supporting the whole.",
          },
        ],
        keyFormulas: [
          { name: "Collaboration elements", statement: "Communication + respect + shared ownership = ensemble" },
          { name: "Feedback quality", statement: "Specific + constructive + actionable = useful feedback" },
        ],
        workedExample: {
          problem: "An actor disagrees with the director's interpretation of their character. How should this be handled?",
          solution: "The actor should voice their concern respectfully — explain their interpretation and reasoning. The director should listen — the actor may have insight the director missed. If they disagree, the director decides but explains why. The relationship matters more than any single choice.",
        },
      },
      questions: [
        {
          id: "theatre-u5-collaboration-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Effective collaboration in theatre requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Actors never questioning direction" },
              { id: "b", text: "Designers working separately" },
              { id: "c", text: "The director making all decisions alone" },
              { id: "d", text: "Clear communication, mutual respect and shared ownership" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collaboration", statement: "Communication, respect and shared ownership create ensemble." },
            ],
            steps: [
              { reasoning: "Effective collaboration requires communication, respect and shared ownership.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Clear communication, mutual respect and shared ownership",
            commonErrors: [
              "Treating theatre as director-only decision making.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three elements of effective theatrical collaboration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Collaboration elements", statement: "Communication, respect and shared ownership." },
            ],
            steps: [
              { reasoning: "Communication — everyone knows the vision and goals.", marks: 1, markCode: "M" },
              { reasoning: "Mutual respect — everyone's contribution matters.", marks: 1, markCode: "M" },
              { reasoning: "Shared ownership — the production belongs to the ensemble.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Communication, respect and shared ownership create collaboration.",
            commonErrors: [
              "Working in isolation without communication.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why specific, constructive feedback is more effective than vague criticism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback quality", statement: "Specific feedback is actionable; vague criticism is not." },
            ],
            steps: [
              { reasoning: "Vague criticism ('that's wrong') doesn't tell the actor what to do.", marks: 1, markCode: "M" },
              { reasoning: "Specific feedback ('try this gesture on that line') is actionable.", marks: 1, markCode: "M" },
              { reasoning: "Constructive framing preserves morale and encourages risk-taking.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: good feedback helps; bad feedback discourages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific, constructive feedback is actionable; vague criticism is not.",
            commonErrors: [
              "Giving vague or demoralising feedback.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a production team's collaboration.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating collaboration", statement: "Assess communication, respect and shared ownership." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. clear communication, mutual respect, shared vision.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. poor communication, hierarchical control, no shared ownership — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with collaboration effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests improving communication, building trust, clarifying vision.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate collaboration by communication, respect and shared ownership.",
            commonErrors: [
              "Judging collaboration only by final product, not process.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Ensemble exercises such as trust falls and mirror games primarily develop:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trust, awareness and responsiveness within the group" },
              { id: "b", text: "Set construction skills" },
              { id: "c", text: "Audience seating plans" },
              { id: "d", text: "Individual vocal projection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ensemble exercises", statement: "Build trust, communication and group awareness." },
            ],
            steps: [
              { reasoning: "Ensemble exercises develop the trust and responsiveness needed for performance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Trust, awareness and responsiveness within the group",
            commonErrors: [
              "Seeing ensemble work as unrelated to performance skill.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Shared ownership' in a theatrical production means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each actor owns their costume" },
              { id: "b", text: "The theatre owns the set" },
              { id: "c", text: "The production belongs to the whole ensemble, not just the director" },
              { id: "d", text: "The director owns all decisions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shared ownership", statement: "The production belongs to the ensemble as a whole." },
            ],
            steps: [
              { reasoning: "Shared ownership distributes responsibility and investment across the company.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The production belongs to the whole ensemble, not just the director",
            commonErrors: [
              "Treating theatre as a director-only hierarchy.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which feedback is most useful to an actor during rehearsal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I preferred yesterday.'" },
              { id: "b", text: "'That was wrong.'" },
              { id: "c", text: "'Try slowing that gesture on the second line.'" },
              { id: "d", text: "'You should quit.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Constructive feedback", statement: "Specific and actionable feedback helps actors improve." },
            ],
            steps: [
              { reasoning: "Specific, actionable suggestions give the actor something to try.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 'Try slowing that gesture on the second line.'",
            commonErrors: [
              "Giving vague or demoralising criticism.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An actor strongly disagrees with the director's interpretation of their character. The best approach is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The actor voices concerns respectfully; the director listens, then decides and explains" },
              { id: "b", text: "The actor performs the opposite interpretation" },
              { id: "c", text: "The actor quits the production" },
              { id: "d", text: "The actor silently complies" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Handling disagreement", statement: "Dialogue between vision and interpretation produces the best work." },
            ],
            steps: [
              { reasoning: "Respectful dialogue allows insight while preserving the director's final authority.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The actor voices concerns respectfully; the director listens, then decides and explains",
            commonErrors: [
              "Treating disagreement as disobedience rather than dialogue.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Effective feedback in rehearsal should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Directed only at the lead actor" },
              { id: "b", text: "Vague and general" },
              { id: "c", text: "Saved until opening night" },
              { id: "d", text: "Specific and constructive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feedback quality", statement: "Specific, constructive feedback is actionable." },
            ],
            steps: [
              { reasoning: "Specific constructive feedback gives clear direction for improvement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Specific and constructive",
            commonErrors: [
              "Thinking vague praise or criticism counts as feedback.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Mirror exercises in theatre primarily train performers in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stage combat" },
              { id: "b", text: "Awareness and responsiveness to others" },
              { id: "c", text: "Costume design" },
              { id: "d", text: "Individual vocal technique" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ensemble exercises", statement: "Develop awareness and responsiveness needed for ensemble performance." },
            ],
            steps: [
              { reasoning: "Mirroring requires attunement to another performer's movement and timing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Awareness and responsiveness to others",
            commonErrors: [
              "Confusing ensemble exercises with technical skill drills.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The strongest theatrical ensembles most resemble:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One organism where each member supports the whole" },
              { id: "b", text: "A group of solo performers sharing a stage" },
              { id: "c", text: "A committee making decisions" },
              { id: "d", text: "A hierarchy with one leader" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ensemble", statement: "Strong ensembles act as one organism supporting each member." },
            ],
            steps: [
              { reasoning: "The best ensembles feel interdependent rather than collections of individuals.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** One organism where each member supports the whole",
            commonErrors: [
              "Confusing a strong ensemble with strong individual performers.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why mutual respect is essential in theatrical collaboration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mutual respect", statement: "Everyone's contribution matters to the production." },
            ],
            steps: [
              { reasoning: "Actors, designers and technicians all contribute essential work.", marks: 1, markCode: "M" },
              { reasoning: "Respect creates psychological safety to take creative risks and offer ideas.", marks: 1, markCode: "M" },
              { reasoning: "Without respect, collaboration becomes competition and the production suffers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Respect values every contribution and enables creative risk-taking.",
            commonErrors: [
              "Thinking respect is optional politeness rather than a working condition.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how specific feedback differs from vague criticism, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback quality", statement: "Specific feedback is actionable; vague criticism is not." },
            ],
            steps: [
              { reasoning: "Vague: 'that was wrong' — gives no direction for improvement.", marks: 1, markCode: "M" },
              { reasoning: "Specific: 'try this gesture on that line' — tells the actor exactly what to change.", marks: 1, markCode: "M" },
              { reasoning: "Example shows actionable feedback enables immediate experimentation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific feedback names what to change; vague criticism does not.",
            commonErrors: [
              "Describing the difference without a concrete example.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a director should handle disagreement with an actor about character interpretation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Handling disagreement", statement: "Dialogue between vision and interpretation produces the best work." },
            ],
            steps: [
              { reasoning: "Invite the actor to explain their interpretation and reasoning.", marks: 1, markCode: "M" },
              { reasoning: "Listen genuinely — the actor may have insight the director missed.", marks: 1, markCode: "M" },
              { reasoning: "If they still disagree, the director decides but explains the reasoning.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: preserve the relationship; the production outlasts any single choice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Listen, consider insight, decide with explanation, preserve the relationship.",
            commonErrors: [
              "Imposing decisions without explanation or dismissing actor input.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ensemble exercises and their purpose in rehearsal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ensemble building", statement: "Exercises develop trust, awareness and group responsiveness." },
            ],
            steps: [
              { reasoning: "Name one exercise, e.g. mirror exercises developing awareness and responsiveness.", marks: 1, markCode: "M" },
              { reasoning: "Name a second, e.g. trust falls or status games developing trust and group dynamics.", marks: 1, markCode: "M" },
              { reasoning: "Link each to ensemble performance — these skills transfer to stage work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mirror exercises build awareness; trust exercises build trust — both serve ensemble performance.",
            commonErrors: [
              "Naming exercises without explaining their purpose.",
            ],
          },
        },
        {
          id: "theatre-u5-collaboration-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate how shared ownership affects a production's quality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating collaboration", statement: "Shared ownership invests the whole ensemble in the result." },
            ],
            steps: [
              { reasoning: "Shared ownership motivates every member to contribute their best work.", marks: 1, markCode: "M" },
              { reasoning: "It surfaces diverse ideas that enrich the production beyond one vision.", marks: 1, markCode: "M" },
              { reasoning: "However, without clear direction it can produce incoherence — ownership needs leadership.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: shared ownership plus clear vision produces the strongest productions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shared ownership raises commitment and ideas, but needs the director's unifying vision.",
            commonErrors: [
              "Arguing for democracy without acknowledging the need for direction.",
            ],
          },
        },
      ],
    },
  ],
};
