import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "music-u6-lesson-6-2",
  code: "6-2",
  title: "Collaborative Performance",
  goal: "I CAN perform effectively in collaborative settings — duets, ensembles and groups — with awareness of communication and balance.",
  standards: [
    "Performance",
    "Collaboration",
  ],
  vocabulary: [
    { term: "Duet", definition: "A performance by two musicians." },
    { term: "Ensemble", definition: "A group of musicians performing together." },
    { term: "Balance", definition: "The relative loudness of parts so all voices are heard." },
    { term: "Blend", definition: "The quality of sounds merging into a unified whole." },
    { term: "Cue", definition: "A signal coordinating entries and changes in ensemble performance." },
    { term: "Rehearsal", definition: "Practice session where collaborators prepare and refine performance." },
  ],
  concepts: [
    {
      id: "music-u6-collaboration",
      title: "Collaborative musicianship",
      skill: "Develop the communication, balance and rehearsal skills needed for effective collaborative performance.",
      lesson: {
        sections: [
          {
            heading: "Communication in performance",
            body: "Collaborative music requires constant communication: eye contact before entries, breath cues, physical gestures, musical signals. In duets, the two players must feel each other — tempo, dynamics, expression must match. In ensembles, cues coordinate entries and changes. The best collaborations feel like one mind, not separate players.",
          },
          {
            heading: "Balance and blend",
            body: "**Balance** means adjusting volume so all parts are heard — melody projects, accompaniment supports. **Blend** means matching tone quality so parts merge. In duets, listen for who has the melody at each moment; in ensembles, know your role — soloist, accompanist, rhythmic foundation. These skills separate competent from great collaborators.",
          },
          {
            heading: "Rehearsal and preparation",
            body: "Effective collaboration requires rehearsal: establish cues, practise difficult passages slowly, run complete pieces, and simulate performance conditions. Individual preparation frees group time for coordination. The goal is automatic coordination — enough rehearsal that performance feels spontaneous.",
          },
        ],
        keyFormulas: [
          { name: "Collaboration skills", statement: "Communication + balance + blend + rehearsal = cohesive performance" },
          { name: "Rehearsal goal", statement: "Automatic coordination through sufficient practice" },
        ],
        workedExample: {
          problem: "In a duet, one player consistently rushes while the other maintains steady tempo. How should they resolve this?",
          solution: "Rehearse together slowly with a metronome or pulse; establish clear cues for tempo changes; practise the difficult passage in isolation then together; the rushing player should listen more actively to the other's pulse rather than focusing on their own part.",
        },
      },
      questions: [
        {
          id: "music-u6-collaboration-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In collaborative performance, 'blend' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sounds merging smoothly into a unified whole" },
              { id: "b", text: "Using the same instrument" },
              { id: "c", text: "Matching dynamics exactly" },
              { id: "d", text: "Playing at the same tempo" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blend", statement: "The quality of sounds merging smoothly into a unified whole." },
            ],
            steps: [
              { reasoning: "Blend is the quality of sounds merging into a unified whole.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Sounds merging smoothly into a unified whole",
            commonErrors: [
              "Confusing blend (tone merging) with balance (volume).",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways musicians communicate during collaborative performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Performance communication", statement: "Eye contact, breath cues, physical gestures and musical signals." },
            ],
            steps: [
              { reasoning: "Visual cues — eye contact, nods, breath before entries.", marks: 1, markCode: "M" },
              { reasoning: "Physical gestures — conductor signals, hand movements.", marks: 1, markCode: "M" },
              { reasoning: "Musical cues — dynamic swells, rhythmic emphasis signalling changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Visual, physical and musical cues coordinate collaboration.",
            commonErrors: [
              "Playing without awareness of partners.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why individual preparation is essential for effective ensemble performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Individual preparation", statement: "Learning your part alone first makes group time more productive." },
            ],
            steps: [
              { reasoning: "Individual practice builds technical security on your part.", marks: 1, markCode: "M" },
              { reasoning: "Rehearsal time then focuses on coordination — balance, timing, expression.", marks: 1, markCode: "M" },
              { reasoning: "Unprepared players slow the group and limit achievement.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: come prepared; rehearse together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Individual preparation frees rehearsal time for ensemble coordination.",
            commonErrors: [
              "Expecting rehearsal to teach what should be learned individually.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a duet's rehearsal and performance approach.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating collaboration", statement: "Assess communication, balance, preparation and rehearsal strategy." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. regular rehearsals, good communication, balanced parts.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. tempo mismatch, no cues established, unprepared sections — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with performance effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests establishing cues, slow practice of difficult passages, full run-throughs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate collaboration by communication, balance, preparation and rehearsal.",
            commonErrors: [
              "Judging duet only by individual playing quality, not coordination.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In ensemble performance, 'balance' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adjusting relative volumes so all parts are heard" },
              { id: "b", text: "All players using identical instruments" },
              { id: "c", text: "Playing at exactly the same tempo" },
              { id: "d", text: "Standing at equal distances from each other" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balance", statement: "The relative loudness of parts so all voices are heard." },
            ],
            steps: [
              { reasoning: "Balance is adjusting volume so all parts are heard.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Adjusting relative volumes so all parts are heard",
            commonErrors: [
              "Confusing balance with blend or tempo matching.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Eye contact before an entry in a duet primarily functions as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A way to check the audience" },
              { id: "b", text: "An indication of memory" },
              { id: "c", text: "A sign of politeness" },
              { id: "d", text: "A cue coordinating the entry" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Performance cues", statement: "Visual signals coordinate entries and changes." },
            ],
            steps: [
              { reasoning: "Eye contact acts as a cue for entries.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A cue coordinating the entry",
            commonErrors: [
              "Underestimating non-verbal cues in coordination.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'cue' in ensemble performance is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A written instruction in the score" },
              { id: "b", text: "A type of dynamic marking" },
              { id: "c", text: "A rehearsal schedule" },
              { id: "d", text: "A signal coordinating entries and changes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cue", statement: "A signal coordinating entries and changes in ensemble performance." },
            ],
            steps: [
              { reasoning: "A cue is a signal coordinating entries and changes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A signal coordinating entries and changes",
            commonErrors: [
              "Confusing cues with score markings.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a duet where one player has the melody, the accompanying player should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Play louder to be noticed" },
              { id: "b", text: "Stop playing entirely" },
              { id: "c", text: "Reduce volume so the melody projects" },
              { id: "d", text: "Play a different piece" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balance", statement: "Melody projects while accompaniment supports." },
            ],
            steps: [
              { reasoning: "Accompaniment should support so melody projects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reduce volume so the melody projects",
            commonErrors: [
              "Competing with the melody instead of supporting it.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The goal of rehearsal in collaborative performance is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To memorise parts separately" },
              { id: "b", text: "To choose a conductor" },
              { id: "c", text: "Automatic coordination so performance feels spontaneous" },
              { id: "d", text: "To play faster each time" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rehearsal goal", statement: "Automatic coordination through sufficient practice." },
            ],
            steps: [
              { reasoning: "Rehearsal aims for automatic, spontaneous coordination.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Automatic coordination so performance feels spontaneous",
            commonErrors: [
              "Thinking rehearsal only builds individual technique.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Practising difficult passages slowly together before playing at full tempo helps collaborators by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building shared timing and coordination" },
              { id: "b", text: "Making the passage longer" },
              { id: "c", text: "Avoiding the need for cues" },
              { id: "d", text: "Reducing rehearsal time needed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Slow practice", statement: "Slow coordinated practice builds shared timing." },
            ],
            steps: [
              { reasoning: "Slow practice builds shared timing and coordination.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Building shared timing and coordination",
            commonErrors: [
              "Practising fast from the start without coordination.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Blend' in ensemble playing means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Performing without a conductor" },
              { id: "b", text: "Playing exactly the same notes" },
              { id: "c", text: "Matching tone quality so parts merge into one sound" },
              { id: "d", text: "Sharing one instrument" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blend", statement: "The quality of sounds merging into a unified whole." },
            ],
            steps: [
              { reasoning: "Blend is matching tone so parts merge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Matching tone quality so parts merge into one sound",
            commonErrors: [
              "Confusing blend with balance or unison playing.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The best collaborative performances feel like 'one mind' because the musicians:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Share tempo, dynamics and expression through constant communication" },
              { id: "b", text: "All play the same part" },
              { id: "c", text: "Memorise the same score" },
              { id: "d", text: "Follow one conductor strictly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collaborative unity", statement: "Shared tempo, dynamics and expression create unified performance." },
            ],
            steps: [
              { reasoning: "Unified performances share tempo, dynamics and expression.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Share tempo, dynamics and expression through constant communication",
            commonErrors: [
              "Thinking unity means identical playing rather than coordinated parts.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three ways musicians communicate during a duet or ensemble performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Performance communication", statement: "Eye contact, breath cues, gestures and musical signals." },
            ],
            steps: [
              { reasoning: "Visual cues — eye contact, nods, breath before entries.", marks: 1, markCode: "M" },
              { reasoning: "Physical gestures — hand movements, conductor signals.", marks: 1, markCode: "M" },
              { reasoning: "Musical cues — swells or emphasis signalling changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Visual, physical and musical cues coordinate collaboration.",
            commonErrors: [
              "Playing without awareness of partners.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a musician should adjust balance when the melody instrument is quieter than the accompaniment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balance adjustment", statement: "Accompaniment supports; melody must project." },
            ],
            steps: [
              { reasoning: "Identify who carries the melody at each moment.", marks: 1, markCode: "M" },
              { reasoning: "Reduce accompaniment volume or change timbre to support.", marks: 1, markCode: "M" },
              { reasoning: "Ensure the melody line remains audible throughout.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Support the melody by reducing accompaniment prominence.",
            commonErrors: [
              "Playing all parts at equal volume.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why running complete pieces during rehearsal matters, not just practising difficult sections.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Full run-throughs", statement: "Complete runs build stamina, flow and performance simulation." },
            ],
            steps: [
              { reasoning: "Sections alone do not build continuity or stamina.", marks: 1, markCode: "M" },
              { reasoning: "Full runs practise transitions and timing under pressure.", marks: 1, markCode: "M" },
              { reasoning: "They simulate performance conditions and reveal weak spots.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: combine section work with complete runs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Full runs build continuity, stamina and performance readiness.",
            commonErrors: [
              "Rehearsing only isolated difficult passages.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a musician should handle tempo mismatch with a partner during rehearsal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tempo coordination", statement: "Establish shared pulse through slow practice and cues." },
            ],
            steps: [
              { reasoning: "Practise together slowly with a clear pulse or metronome.", marks: 1, markCode: "M" },
              { reasoning: "Establish cues for tempo changes and entries.", marks: 1, markCode: "M" },
              { reasoning: "Listen actively to the partner's pulse rather than own part.", marks: 1, markCode: "M" },
              { reasoning: "Gradually increase tempo once coordination is secure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slow practice, clear cues and active listening fix tempo mismatch.",
            commonErrors: [
              "Each player forcing their own tempo.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A duet has good individual playing but sounds uncoordinated in performance.",
          parts: [
            { label: "a", prompt: "Identify two likely causes of the poor coordination.", marks: 2 },
            { label: "b", prompt: "Explain how each cause affects the performance.", marks: 2 },
            { label: "c", prompt: "Suggest two rehearsal strategies to improve coordination.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Diagnosing coordination", statement: "Uncoordinated duets usually lack cues, shared timing or balance awareness." },
            ],
            steps: [
              { part: "a", reasoning: "Causes, e.g. no established cues, tempo mismatch, no balance discussion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two plausible causes identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each cause explained with its performance effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effects clearly linked to coordination problems.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests establishing cues and slow coordinated practice.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Two concrete strategies suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Establish cues, match tempo and balance through coordinated rehearsal.",
            commonErrors: [
              "Assuming individual skill automatically produces ensemble quality.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q18",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'knowing your role' matters in ensemble performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ensemble roles", statement: "Soloist, accompanist and rhythmic foundation roles require different behaviour." },
            ],
            steps: [
              { reasoning: "Roles determine whether to project or support.", marks: 1, markCode: "M" },
              { reasoning: "Knowing the role guides balance and blend decisions.", marks: 1, markCode: "M" },
              { reasoning: "Role awareness prevents parts competing unnecessarily.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: role clarity enables cohesion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Role awareness guides balance and prevents parts competing.",
            commonErrors: [
              "Every player projecting at full volume regardless of role.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q19",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three benefits of rehearsing together rather than only practising alone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Group rehearsal", statement: "Together rehearsal builds coordination unavailable in solo practice." },
            ],
            steps: [
              { reasoning: "Develops timing and ensemble coordination.", marks: 1, markCode: "M" },
              { reasoning: "Establishes cues and shared interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Builds balance, blend and communication skills.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Group rehearsal builds timing, cues and balance.",
            commonErrors: [
              "Assuming solo practice fully prepares ensemble performance.",
            ],
          },
        },
        {
          id: "music-u6-collaboration-q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare two rehearsal approaches for a string quartet: Approach A rehearses each part separately then plays through once; Approach B rehearses together daily with slow practice of difficult passages and full run-throughs.",
          parts: [
            { label: "a", prompt: "Identify what each approach develops well.", marks: 2 },
            { label: "b", prompt: "Explain which approach better prepares the quartet for performance and why.", marks: 3 },
            { label: "c", prompt: "Suggest one element Approach A could add.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rehearsal strategy", statement: "Individual preparation plus coordinated group rehearsal produces ensemble readiness." },
            ],
            steps: [
              { part: "a", reasoning: "A builds individual security; B builds coordination.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly characterised.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "B better prepares by practising coordination directly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Slow passage work and run-throughs build automaticity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclusion: B produces more cohesive performance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggest adding individual practice before group sessions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Suggest adding cue establishment or balance discussion.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete addition stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "B prepares better; A should add coordinated group rehearsal.",
            commonErrors: [
              "Valuing individual preparation over ensemble coordination.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u6-stage-presence",
      title: "Stage presence and performance",
      skill: "Develop stage presence and performance confidence for collaborative and solo settings.",
      lesson: {
        sections: [
          {
            heading: "Performance mindset",
            body: "Performance is communication, not just execution: the audience should feel the music, not just hear it. Visual engagement — eye contact, facial expression, body language — communicates emotion alongside sound. Stage presence is the performer's energy that connects musical intention to audience experience.",
          },
          {
            heading: "Managing nerves",
            body: "Performance anxiety is normal: physical symptoms (shaking, dry mouth), mental symptoms (racing thoughts, self-doubt). Strategies: thorough preparation reduces uncertainty; breathing exercises calm the body; reframing nerves as excitement channel energy positively; focusing on the music rather than self-evaluation.",
          },
          {
            heading: "Recovery and professionalism",
            body: "Mistakes happen: the professional response is to continue without visible reaction. Audiences forgive errors but not stopping or apologising. Preparation includes practising recovery — knowing how to continue when something goes wrong. The performance continues regardless; your job is to keep it going.",
          },
        ],
        keyFormulas: [
          { name: "Stage presence", statement: "Musical intention + visual engagement + audience connection" },
          { name: "Nerve management", statement: "Preparation + breathing + reframing = performance confidence" },
        ],
        workedExample: {
          problem: "A student forgets a passage during a solo performance and stops to restart. What should they have done?",
          solution: "Continue without stopping — either improvise a brief passage or skip to the next clear entry point. The audience likely didn't notice the error; stopping draws attention to it. Preparation should include practising recovery strategies for exactly this situation.",
        },
      },
      questions: [
        {
          id: "music-u6-stage-presence-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Stage presence in music performance refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The size of the venue" },
              { id: "b", text: "The audience's applause" },
              { id: "c", text: "The performer's energy and engagement that connects with the audience" },
              { id: "d", text: "The quality of the instruments" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stage presence", statement: "The performer's energy and engagement communicating with the audience." },
            ],
            steps: [
              { reasoning: "Stage presence is the performer's energy and engagement that connects with the audience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The performer's energy and engagement that connects with the audience",
            commonErrors: [
              "Confusing stage presence with venue or equipment quality.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three strategies for managing performance nerves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Nerve management", statement: "Preparation, breathing and reframing anxiety as energy." },
            ],
            steps: [
              { reasoning: "Thorough preparation reduces uncertainty and builds confidence.", marks: 1, markCode: "M" },
              { reasoning: "Breathing exercises calm physical symptoms before performance.", marks: 1, markCode: "M" },
              { reasoning: "Reframe nerves as excitement — channel the energy into performance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Preparation, breathing and reframing manage performance nerves.",
            commonErrors: [
              "Trying to eliminate nerves entirely rather than managing them.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why continuing through mistakes is better than stopping in performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Performance recovery", statement: "Audiences forgive errors but not stopping; continuation preserves integrity." },
            ],
            steps: [
              { reasoning: "Audiences may not notice small errors; stopping draws attention to them.", marks: 1, markCode: "M" },
              { reasoning: "Stopping breaks musical flow and loses the audience's engagement.", marks: 1, markCode: "M" },
              { reasoning: "Continuing preserves performance integrity and professionalism.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: recovery is part of performance skill.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Continuing through mistakes preserves performance integrity; stopping breaks flow.",
            commonErrors: [
              "Stopping or apologising visibly when mistakes occur.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's performance preparation and mindset.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating performance", statement: "Assess preparation, mindset, stage presence and recovery." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. well-prepared, positive mindset, engages audience.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no recovery plan, insufficient rehearsal, poor stage presence — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with performance effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests mock performances, recovery drills, stage presence practice.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate performance by preparation, mindset, stage presence and recovery.",
            commonErrors: [
              "Judging performance only by technical accuracy, not presentation.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Stage presence communicates emotion to an audience primarily through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using the largest instrument available" },
              { id: "b", text: "Playing from memory" },
              { id: "c", text: "Playing faster than rehearsed" },
              { id: "d", text: "Eye contact, facial expression and body language" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Visual engagement", statement: "Eye contact, expression and body language communicate emotion." },
            ],
            steps: [
              { reasoning: "Visual elements communicate emotion alongside sound.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Eye contact, facial expression and body language",
            commonErrors: [
              "Focusing only on technical execution.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Reframing performance nerves as excitement works because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It eliminates physical symptoms" },
              { id: "b", text: "It reduces the need for preparation" },
              { id: "c", text: "It makes the audience sympathetic" },
              { id: "d", text: "It channels the same energy into performance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reframing anxiety", statement: "Nerves and excitement share physiological arousal." },
            ],
            steps: [
              { reasoning: "Reframing channels arousal energy into performance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** It channels the same energy into performance",
            commonErrors: [
              "Trying to eliminate nerves rather than manage them.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The most professional response to a mistake during performance is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Restart the piece from the beginning" },
              { id: "b", text: "Ask the audience to wait" },
              { id: "c", text: "Continue without visible reaction" },
              { id: "d", text: "Stop and apologise to the audience" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Performance recovery", statement: "Audiences forgive errors but not stopping." },
            ],
            steps: [
              { reasoning: "Continuing preserves performance integrity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Continue without visible reaction",
            commonErrors: [
              "Stopping or apologising visibly when mistakes occur.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Focusing on the music rather than self-evaluation during performance helps because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eliminates the need for rehearsal" },
              { id: "b", text: "Redirects attention outward, reducing anxiety" },
              { id: "c", text: "Guarantees technical perfection" },
              { id: "d", text: "Makes the audience less critical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Performance focus", statement: "Outward focus on music reduces self-conscious anxiety." },
            ],
            steps: [
              { reasoning: "Outward focus reduces self-evaluation anxiety.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Redirects attention outward, reducing anxiety",
            commonErrors: [
              "Monitoring oneself constantly during performance.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Breathing exercises before a performance primarily help by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replacing the need for warm-up" },
              { id: "b", text: "Calming physical symptoms of anxiety" },
              { id: "c", text: "Increasing lung capacity for singing" },
              { id: "d", text: "Improving breath control for wind instruments only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Breathing exercises", statement: "Controlled breathing calms physical anxiety symptoms." },
            ],
            steps: [
              { reasoning: "Breathing exercises calm physical symptoms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Calming physical symptoms of anxiety",
            commonErrors: [
              "Thinking breathing exercises only apply to wind players.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Thorough preparation reduces performance anxiety primarily because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guarantees a perfect performance" },
              { id: "b", text: "Reduces uncertainty and builds confidence" },
              { id: "c", text: "Shortens the performance duration" },
              { id: "d", text: "Eliminates the audience's expectations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Preparation", statement: "Preparation reduces uncertainty and builds confidence." },
            ],
            steps: [
              { reasoning: "Preparation reduces uncertainty and builds confidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reduces uncertainty and builds confidence",
            commonErrors: [
              "Assuming preparation guarantees perfection rather than reducing anxiety.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Performance is best understood as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demonstration of speed" },
              { id: "b", text: "Memorisation of the piece" },
              { id: "c", text: "Technical execution of a score" },
              { id: "d", text: "Communication of musical intention to an audience" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Performance as communication", statement: "Performance communicates musical intention, not just execution." },
            ],
            steps: [
              { reasoning: "Performance is communication of musical intention.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Communication of musical intention to an audience",
            commonErrors: [
              "Treating performance as mere technical execution.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Audiences are most likely to remember a performance for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The length of the programme" },
              { id: "b", text: "The formality of the venue" },
              { id: "c", text: "Technical perfection with no emotional engagement" },
              { id: "d", text: "Emotional connection and musical communication" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Audience connection", statement: "Emotional engagement creates memorable performances." },
            ],
            steps: [
              { reasoning: "Emotional connection makes performances memorable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Emotional connection and musical communication",
            commonErrors: [
              "Believing technical accuracy alone creates memorable performance.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three strategies for managing performance nerves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Nerve management", statement: "Preparation, breathing and reframing anxiety as energy." },
            ],
            steps: [
              { reasoning: "Thorough preparation reduces uncertainty.", marks: 1, markCode: "M" },
              { reasoning: "Breathing exercises calm physical symptoms.", marks: 1, markCode: "M" },
              { reasoning: "Reframe nerves as excitement and channel energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Preparation, breathing and reframing manage nerves.",
            commonErrors: [
              "Trying to eliminate nerves entirely.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how a performer can use body language to enhance stage presence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Body language", statement: "Posture, movement and expression communicate with the audience." },
            ],
            steps: [
              { reasoning: "Maintain confident posture and purposeful movement.", marks: 1, markCode: "M" },
              { reasoning: "Use facial expression to convey musical emotion.", marks: 1, markCode: "M" },
              { reasoning: "Match body language to the music's character.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Confident posture, expression and movement enhance presence.",
            commonErrors: [
              "Standing rigidly or moving without musical purpose.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why practising recovery strategies is part of performance preparation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recovery preparation", statement: "Knowing how to continue through errors preserves performance integrity." },
            ],
            steps: [
              { reasoning: "Mistakes are inevitable in live performance.", marks: 1, markCode: "M" },
              { reasoning: "Practised recovery prevents visible panic or stopping.", marks: 1, markCode: "M" },
              { reasoning: "Recovery skill maintains audience engagement.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: rehearse recovery like any other skill.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Practising recovery ensures mistakes do not derail performance.",
            commonErrors: [
              "Assuming perfect preparation eliminates all errors.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a student could simulate performance conditions before a real performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Performance simulation", statement: "Mock performances replicate pressure and conditions." },
            ],
            steps: [
              { reasoning: "Perform complete pieces for friends or family.", marks: 1, markCode: "M" },
              { reasoning: "Use formal settings — standing, no stopping, full dress.", marks: 1, markCode: "M" },
              { reasoning: "Practise beginning-to-end without interruptions.", marks: 1, markCode: "M" },
              { reasoning: "Review and improve based on the simulation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mock performances with audience and formal conditions build readiness.",
            commonErrors: [
              "Only ever practising alone without audience simulation.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student plays technically well but the audience finds the performance flat and unengaging.",
          parts: [
            { label: "a", prompt: "Identify two likely causes of the flat performance.", marks: 2 },
            { label: "b", prompt: "Explain how each cause affects audience engagement.", marks: 2 },
            { label: "c", prompt: "Suggest two improvements to stage presence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Diagnosing stage presence", statement: "Flat performances usually lack visual engagement or expressive intention." },
            ],
            steps: [
              { part: "a", reasoning: "Causes, e.g. no eye contact, flat dynamics, no physical engagement.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two plausible causes identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each cause explained with audience effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effects clearly linked to disengagement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests eye contact and expressive body language.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Two concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add visual engagement and expressive intention to connect with audience.",
            commonErrors: [
              "Assuming technical accuracy guarantees audience engagement.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q18",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'focusing on the music rather than self' improves performance quality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Outward focus", statement: "Attention on musical goals reduces anxiety and improves execution." },
            ],
            steps: [
              { reasoning: "Self-monitoring increases anxiety and disrupts flow.", marks: 1, markCode: "M" },
              { reasoning: "Focus on musical intention frees attention for expression.", marks: 1, markCode: "M" },
              { reasoning: "Reduced anxiety improves technical execution.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: outward focus enhances performance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Outward focus reduces anxiety and frees attention for expression.",
            commonErrors: [
              "Constantly self-critiquing during performance.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q19",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three elements that make up 'musical intention' in performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Musical intention", statement: "Interpretation, expression and communication of the music's character." },
            ],
            steps: [
              { reasoning: "Interpretation — understanding and shaping the music.", marks: 1, markCode: "M" },
              { reasoning: "Expression — dynamics, phrasing, tempo choices.", marks: 1, markCode: "M" },
              { reasoning: "Communication — conveying intention to the audience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Interpretation, expression and communication form musical intention.",
            commonErrors: [
              "Confusing intention with technical accuracy alone.",
            ],
          },
        },
        {
          id: "music-u6-stage-presence-q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare two performers: Performer A practises only alone and plays mechanically; Performer B rehearses for audiences, practises recovery and focuses on musical intention.",
          parts: [
            { label: "a", prompt: "Identify what each performer has prepared well.", marks: 2 },
            { label: "b", prompt: "Explain which performer will likely deliver the stronger performance and why.", marks: 3 },
            { label: "c", prompt: "Suggest one preparation step Performer A should add.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Performance preparation", statement: "Audience simulation, recovery practice and musical intention create engaging performances." },
            ],
            steps: [
              { part: "a", reasoning: "A has technical practice; B has performance simulation and recovery.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly characterised.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "B likely performs better due to audience readiness.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Recovery practice prevents collapse after errors.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclusion: B's preparation is more complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggest performing for an audience before the real performance.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Suggest practising recovery or musical intention.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete step stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "B prepares better; A should add audience simulation and recovery practice.",
            commonErrors: [
              "Valuing solo practice over performance-condition preparation.",
            ],
          },
        },
      ],
    },
  ],
};
