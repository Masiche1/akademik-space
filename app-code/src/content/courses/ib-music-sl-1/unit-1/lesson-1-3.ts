import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "music-u1-lesson-1-3",
  code: "1-3",
  title: "Solo and Ensemble Performance Practice",
  goal: "I CAN prepare and perform in solo and ensemble settings with awareness of balance, communication and ensemble skills.",
  standards: [
    "Performance",
    "Ensemble",
  ],
  vocabulary: [
    { term: "Ensemble", definition: "A group of musicians performing together, requiring coordination and communication." },
    { term: "Balance", definition: "The relative loudness of parts so all voices are heard appropriately." },
    { term: "Blend", definition: "The quality of sounds merging smoothly into a unified whole." },
    { term: "Cue", definition: "A signal — visual, physical or musical — that coordinates ensemble entries and changes." },
    { term: "Rehearsal", definition: "A practice session where ensemble members prepare and refine a performance." },
    { term: "Stage presence", definition: "The performer's physical and mental engagement that communicates with the audience." },
  ],
  concepts: [
    {
      id: "music-u1-ensemble-skills",
      title: "Ensemble musicianship",
      skill: "Develop the listening, balancing and communication skills required for effective ensemble performance.",
      lesson: {
        sections: [
          {
            heading: "Listening and balance",
            body: "Ensemble playing requires active listening: hearing other parts, not just your own. **Balance** means adjusting your volume so melody lines project and accompaniment supports without overpowering. **Blend** means matching tone quality and intonation so parts merge rather than clash. These skills separate competent ensemble players from great ones.",
          },
          {
            heading: "Communication and cues",
            body: "Ensembles coordinate through cues: breath before entries, eye contact, physical gestures, conductor signals. Clear cues prevent mistakes and create unity. Rehearsal is where cues are established — the performance should feel rehearsed enough that coordination is automatic.",
          },
          {
            heading: "Rehearsal strategies",
            body: "Effective rehearsals: start with the hardest sections; practise slowly to build accuracy; isolate and fix problems rather than repeating mistakes; run complete pieces to build stamina and flow; end with a full run-through to simulate performance. Individual preparation before rehearsal makes group time more productive.",
          },
        ],
        keyFormulas: [
          { name: "Ensemble skills", statement: "Listen + balance + blend + cue = cohesive ensemble" },
          { name: "Rehearsal strategy", statement: "Isolate problems → slow practice → full run-throughs" },
        ],
        workedExample: {
          problem: "In an ensemble, the melody is constantly drowned out by accompaniment. What should players do?",
          solution: "Accompaniment players should reduce volume and check they're not accenting melody notes; melody players should ensure their tone projects (more air/support on winds, firmer bow on strings). Rehearse the balance specifically — mark which parts are melody vs accompaniment.",
        },
      },
      questions: [
        {
          id: "music-u1-ensemble-skills-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In ensemble playing, 'balance' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Playing at the same tempo" },
              { id: "b", text: "Standing upright while playing" },
              { id: "c", text: "Keeping instruments in tune" },
              { id: "d", text: "Adjusting relative loudness so all parts are heard appropriately" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balance", statement: "The relative loudness of parts so all voices project appropriately." },
            ],
            steps: [
              { reasoning: "Balance is the adjustment of part volumes so each is heard appropriately.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adjusting relative loudness so all parts are heard appropriately",
            commonErrors: [
              "Confusing balance with intonation or posture.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways ensemble musicians can communicate during performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ensemble communication", statement: "Eye contact, breath cues, physical gestures and musical signals coordinate parts." },
            ],
            steps: [
              { reasoning: "Visual cues — eye contact, head nods, breath before entries.", marks: 1, markCode: "M" },
              { reasoning: "Physical gestures — conductor signals, bow/string arm movements, hand signals.", marks: 1, markCode: "M" },
              { reasoning: "Musical cues — rhythmic emphasis, dynamic swells that signal changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Visual, physical and musical cues coordinate ensemble performance.",
            commonErrors: [
              "Playing without awareness of other ensemble members.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why individual preparation before ensemble rehearsal improves group performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Individual preparation", statement: "Learning your part alone first makes rehearsal time more productive." },
            ],
            steps: [
              { reasoning: "Individual practice builds technical security on your part.", marks: 1, markCode: "M" },
              { reasoning: "Rehearsal time can then focus on ensemble issues — balance, timing, expression.", marks: 1, markCode: "M" },
              { reasoning: "Unprepared players slow the group and limit what can be achieved together.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: come prepared; rehearse together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Individual preparation frees rehearsal time for ensemble coordination.",
            commonErrors: [
              "Expecting rehearsal to teach what should be learned individually.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate an ensemble's rehearsal approach.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating rehearsal", statement: "Assess preparation, problem-solving and performance simulation." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. regular rehearsals, run-throughs, addresses balance.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. repeats mistakes without fixing, no slow practice, no performance simulation — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with rehearsal effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests isolating difficult sections, slow practice, mock performance.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate rehearsal by preparation, problem-solving and performance simulation.",
            commonErrors: [
              "Judging rehearsals only by duration, not effectiveness.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Blend' in ensemble playing refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Matching tone quality and intonation so parts merge into a unified whole" },
              { id: "b", text: "Playing at exactly the same dynamic level" },
              { id: "c", text: "Standing close together on stage" },
              { id: "d", text: "Using identical instruments" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blend", statement: "The quality of individual sounds merging smoothly into one unified sound." },
            ],
            steps: [
              { reasoning: "Blend means matching tone colour and pitch so parts sound like one voice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Matching tone quality and intonation so parts merge into a unified whole",
            commonErrors: [
              "Confusing blend with balance or unison playing.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'cue' in ensemble performance is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A signal — visual, physical or musical — that coordinates entries and changes" },
              { id: "b", text: "A written note in the score" },
              { id: "c", text: "A type of dynamic marking" },
              { id: "d", text: "A rehearsal schedule" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cue", statement: "A signal coordinating ensemble entries, exits and musical changes." },
            ],
            steps: [
              { reasoning: "Cues are the non-verbal or musical signals that keep ensemble members together.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A signal — visual, physical or musical — that coordinates entries and changes",
            commonErrors: [
              "Thinking cues are only conductor gestures.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Active listening in ensemble playing primarily means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only hearing your own part clearly" },
              { id: "b", text: "Waiting for the conductor's every instruction" },
              { id: "c", text: "Memorising all parts before rehearsing" },
              { id: "d", text: "Monitoring other parts while playing your own" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ensemble listening", statement: "Ensemble players must hear the whole texture, not just their own line." },
            ],
            steps: [
              { reasoning: "Ensemble musicianship requires awareness of all parts simultaneously.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Monitoring other parts while playing your own",
            commonErrors: [
              "Focusing only on your own part and ignoring the ensemble.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Effective ensemble rehearsals should generally begin with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The most difficult or problematic sections" },
              { id: "b", text: "A full performance run-through" },
              { id: "c", text: "Social conversation between players" },
              { id: "d", text: "The easiest sections to build confidence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rehearsal strategy", statement: "Address the hardest problems first while energy and focus are highest." },
            ],
            steps: [
              { reasoning: "Tackling difficult sections first ensures problems get solved before time runs out.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The most difficult or problematic sections",
            commonErrors: [
              "Saving problems for the end when fatigue reduces effectiveness.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Repeating a mistake many times in rehearsal without correcting it is problematic because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helps players memorise the score faster" },
              { id: "b", text: "Reinforces the error and wastes rehearsal time" },
              { id: "c", text: "Builds muscle memory for the correct version" },
              { id: "d", text: "Improves ensemble blend automatically" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Problem-solving rehearsal", statement: "Isolate and fix errors rather than repeating them." },
            ],
            steps: [
              { reasoning: "Repetition without correction entrenches the mistake and consumes valuable rehearsal time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reinforces the error and wastes rehearsal time",
            commonErrors: [
              "Believing repetition alone fixes ensemble problems.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Persistent intonation problems in an ensemble are best addressed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Players matching pitch and listening to each other while playing together" },
              { id: "b", text: "Each player tuning only to themselves in isolation" },
              { id: "c", text: "Playing louder to overpower the wrong notes" },
              { id: "d", text: "Skipping rehearsal until the concert" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ensemble intonation", statement: "Intonation is relative — players must tune to the ensemble, not just themselves." },
            ],
            steps: [
              { reasoning: "Players must listen and adjust pitch together within the ensemble context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Players matching pitch and listening to each other while playing together",
            commonErrors: [
              "Tuning alone and assuming the ensemble will match automatically.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define 'blend' in ensemble playing and give one example of how it could be achieved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blend", statement: "Sounds merging into a unified whole through matched tone and pitch." },
            ],
            steps: [
              { reasoning: "Blend is the quality of parts merging smoothly rather than clashing.", marks: 1, markCode: "M" },
              { reasoning: "It requires matching tone quality, dynamics and intonation.", marks: 1, markCode: "M" },
              { reasoning: "Example: wind players matching breath pressure and vowel shape to unify chord tone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blend = unified sound from matched tone and pitch; achieved by listening and matching timbre.",
            commonErrors: [
              "Confusing blend with playing identical notes in unison.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a conductor's cues help an ensemble perform together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Conducting cues", statement: "Clear beat patterns, preparatory gestures and expressions coordinate ensemble entries and changes." },
            ],
            steps: [
              { reasoning: "The conductor's beat pattern establishes tempo and pulse for all players.", marks: 1, markCode: "M" },
              { reasoning: "Preparatory gestures signal upcoming entries, giving players time to breathe and prepare.", marks: 1, markCode: "M" },
              { reasoning: "Expressions and hand shapes communicate dynamics and articulation changes.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: clear cues create unity without stopping the musical flow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conductor cues coordinate tempo, entries and expression so the ensemble performs as one.",
            commonErrors: [
              "Thinking cues are only for stopping and starting.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why running complete pieces during rehearsal matters, even when sections are still being fixed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Full run-throughs", statement: "Complete plays build stamina, flow and reveal structural issues." },
            ],
            steps: [
              { reasoning: "Run-throughs build the endurance needed for a full performance.", marks: 1, markCode: "M" },
              { reasoning: "They reveal problems that only appear in context — transitions, balance, pacing.", marks: 1, markCode: "M" },
              { reasoning: "They train the ensemble to maintain continuity and recover together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Full run-throughs build stamina, reveal contextual problems and train continuity.",
            commonErrors: [
              "Thinking rehearsing only problem sections is sufficient.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An ensemble plays through a piece and the melody is consistently buried under the accompaniment. Analyse the problem.",
          parts: [
            { label: "a", prompt: "Identify two likely causes of the balance problem.", marks: 2 },
            { label: "b", prompt: "Suggest two specific rehearsal solutions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ensemble balance", statement: "Balance requires active adjustment of part volumes and roles." },
            ],
            steps: [
              { part: "a", reasoning: "Likely causes: accompaniment players accenting melody notes or playing too loudly; melody players not projecting.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Another cause: no clear agreement on which part is melody at each moment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mark melody vs accompaniment lines in the score and rehearse balance specifically.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Accompaniment reduces volume and accents; melody increases projection through breath/bow support.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Record a run-through and listen back to verify balance objectively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Accents on melody notes, unclear roles. (b) Mark parts, adjust dynamics, verify by recording.",
            commonErrors: [
              "Solving balance by simply asking the melody to play louder.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate how well an ensemble communicates during a rehearsal where entries keep being missed.",
          parts: [
            { label: "a", prompt: "Identify two communication failures likely causing the missed entries.", marks: 2 },
            { label: "b", prompt: "Explain the effect of these failures on performance.", marks: 2 },
            { label: "c", prompt: "Suggest two cueing improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ensemble communication", statement: "Clear, rehearsed cues prevent missed entries and maintain unity." },
            ],
            steps: [
              { part: "a", reasoning: "Failures, e.g. no breath or eye contact before entries, unclear conductor preparatory gestures.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Another failure: players not watching the cue source or each other.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Missed entries break the musical line and expose ensemble weakness to the audience.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Repeated errors erode confidence and disrupt tempo and expression.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Establish consistent breath/eye-contact cues and rehearse them until automatic.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Clarify and practise the conductor's preparatory gestures for each entry.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Missing breath/eye cues, unclear gestures. (b) Broken lines, lost confidence. (c) Rehearse consistent cues and clear gestures.",
            commonErrors: [
              "Assuming missed entries will fix themselves with more repetitions.",
            ],
          },
        },
        {
          id: "music-u1-ensemble-skills-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two rehearsal strategies that fix ensemble problems rather than repeating them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Problem-solving rehearsal", statement: "Isolate, slow down and target specific issues." },
            ],
            steps: [
              { reasoning: "Isolate the problem — practise just the difficult bars or the transition between sections.", marks: 1, markCode: "M" },
              { reasoning: "Practise slowly to build accuracy, then gradually return to tempo.", marks: 1, markCode: "M" },
              { reasoning: "Address root causes — balance, cueing, intonation — not just the symptom.", marks: 1, markCode: "R" },
              { reasoning: "Conclude by running the full section to confirm the fix works in context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Isolate problems, practise slowly, fix root causes, then verify in context.",
            commonErrors: [
              "Repeating whole pieces hoping problems resolve themselves.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u1-solo-performance",
      title: "Solo performance preparation",
      skill: "Prepare solo performances with attention to interpretation, memorisation and stagecraft.",
      lesson: {
        sections: [
          {
            heading: "Interpretation",
            body: "A solo performance is an interpretation, not just reproduction. Decide what the piece means to you: its emotional arc, its climax, its character. Shape dynamics, tempo and articulation to communicate this interpretation. The score is a map; the performance is the journey.",
          },
          {
            heading: "Memorisation",
            body: "Memorise securely by understanding structure, not just finger memory: learn phrases, identify patterns, practise hands-separately then together, and test recall away from the instrument. Secure memorisation frees you to perform expressively rather than survive note-by-note.",
          },
          {
            heading: "Stagecraft",
            body: "Stage presence matters: walk on confidently, settle before starting, maintain focus through mistakes (keep going — audiences forgive errors but not stopping), and acknowledge applause genuinely. Rehearse the performance conditions — the room, the audience, the moment of beginning — to reduce anxiety.",
          },
        ],
        keyFormulas: [
          { name: "Interpretation", statement: "Decide the emotional arc and shape performance to communicate it" },
          { name: "Memorisation", statement: "Learn structure and phrases, not just finger patterns" },
        ],
        workedExample: {
          problem: "A student memorised a piece by repeating it daily but still forgets sections under pressure. What's wrong?",
          solution: "They memorised finger patterns, not structure. Practise away from the instrument, identify formal sections (exposition, development, recapitulation), learn phrase by phrase with understanding, and test recall at different times and places. Structural understanding is more secure than muscle memory alone.",
        },
      },
      questions: [
        {
          id: "music-u1-solo-performance-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A solo performance should primarily communicate:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The composer's biography" },
              { id: "b", text: "The instrument's capabilities" },
              { id: "c", text: "Technical accuracy alone" },
              { id: "d", text: "The performer's interpretation of the piece's meaning" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Performance interpretation", statement: "Solo performance communicates the performer's interpretation of meaning." },
            ],
            steps: [
              { reasoning: "Solo performance communicates interpretation — the performer's shaping of meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The performer's interpretation of the piece's meaning",
            commonErrors: [
              "Treating performance as mere technical reproduction.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two strategies for secure musical memorisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Memorisation strategies", statement: "Structural understanding and varied-context practice build secure recall." },
            ],
            steps: [
              { reasoning: "Learn the piece's structure — sections, phrases, patterns — not just finger movements.", marks: 1, markCode: "M" },
              { reasoning: "Practise recall away from the instrument and in different contexts.", marks: 1, markCode: "M" },
              { reasoning: "Test memorisation regularly by playing without looking at the score.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Structural understanding and varied-context testing build secure memorisation.",
            commonErrors: [
              "Memorising only finger patterns without understanding structure.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why maintaining composure after a mistake is crucial in solo performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Performance composure", statement: "Audiences forgive errors but not visible panic or stopping." },
            ],
            steps: [
              { reasoning: "Listeners may not notice small errors; visible panic draws attention to them.", marks: 1, markCode: "M" },
              { reasoning: "Stopping or restarting breaks the musical flow and loses the audience.", marks: 1, markCode: "M" },
              { reasoning: "Composure — continuing as if nothing happened — preserves the performance's integrity.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: recovery is part of performance skill.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Continuing through mistakes preserves performance integrity; panic draws attention.",
            commonErrors: [
              "Stopping or apologising visibly when a mistake occurs.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's solo performance preparation.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating preparation", statement: "Assess interpretation, memorisation security and stagecraft." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. knows the piece well, has an interpretation, practises regularly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no performance rehearsal, memorisation only finger-based, no recovery plan — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with performance effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests mock performances, structural memorisation practice, mistake recovery drills.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate preparation by interpretation, memorisation security and stagecraft.",
            commonErrors: [
              "Judging preparation only by practice hours, not performance readiness.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Stage presence' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The performer's physical and mental engagement that communicates with the audience" },
              { id: "b", text: "Wearing formal concert attire" },
              { id: "c", text: "The size of the performance venue" },
              { id: "d", text: "The number of pieces in the programme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stage presence", statement: "Physical and mental engagement that projects the performance to the audience." },
            ],
            steps: [
              { reasoning: "Stage presence is how the performer engages and communicates with the audience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The performer's physical and mental engagement that communicates with the audience",
            commonErrors: [
              "Confusing stage presence with costume or venue.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Memorisation is most secure when it is based on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading the score right up to the concert" },
              { id: "b", text: "Repeating finger movements many times" },
              { id: "c", text: "Watching a video of the performance" },
              { id: "d", text: "Understanding the piece's structure and phrases" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structural memorisation", statement: "Understanding form and phrases creates more secure memory than finger patterns alone." },
            ],
            steps: [
              { reasoning: "Structural understanding provides multiple memory pathways, making recall more reliable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Understanding the piece's structure and phrases",
            commonErrors: [
              "Memorising only motor patterns without musical understanding.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An 'interpretation' in solo performance means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The performer's personal shaping of the piece's meaning through expressive choices" },
              { id: "b", text: "Playing exactly what is written with no personal choices" },
              { id: "c", text: "Changing the notes to make the piece easier" },
              { id: "d", text: "Translating the piece into another language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Performance interpretation", statement: "Interpretation is the performer's personal communication of the music's meaning." },
            ],
            steps: [
              { reasoning: "Interpretation involves deliberate expressive choices that communicate meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The performer's personal shaping of the piece's meaning through expressive choices",
            commonErrors: [
              "Thinking interpretation means altering the notes rather than shaping expression.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Walking on confidently and settling before starting a solo performance helps by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Projecting composure and giving the performer a moment to focus" },
              { id: "b", text: "Making the audience wait longer" },
              { id: "c", text: "Showing off technical skill" },
              { id: "d", text: "Avoiding the need for warm-ups" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stagecraft", statement: "Composed entrances and settling moments reduce anxiety and prepare focus." },
            ],
            steps: [
              { reasoning: "A composed entrance projects confidence and gives the performer time to centre before playing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Projecting composure and giving the performer a moment to focus",
            commonErrors: [
              "Rushing onto the stage and starting before being ready.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Memorisation based only on finger patterns is risky because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guarantees the performer will not make mistakes" },
              { id: "b", text: "Always produces the most expressive performance" },
              { id: "c", text: "Is the only reliable method of memorisation" },
              { id: "d", text: "Can collapse under pressure because it lacks structural understanding" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Memorisation security", statement: "Motor memory alone is fragile; structural understanding provides backup." },
            ],
            steps: [
              { reasoning: "Finger-only memory breaks down under stress; structure provides alternative recall pathways.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Can collapse under pressure because it lacks structural understanding",
            commonErrors: [
              "Assuming repetition alone creates secure memory.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "If a solo performer forgets a section mid-performance, the best response is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Continue as smoothly as possible and recover into the next phrase" },
              { id: "b", text: "Stop immediately and apologise to the audience" },
              { id: "c", text: "Look down at the score and try to find the place" },
              { id: "d", text: "Restart the entire piece from the beginning" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mistake recovery", statement: "Continuing smoothly preserves performance integrity better than stopping." },
            ],
            steps: [
              { reasoning: "Audiences forgive errors but not visible panic; smooth recovery maintains the musical flow.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Continue as smoothly as possible and recover into the next phrase",
            commonErrors: [
              "Stopping or visibly panicking when memory fails.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What is 'stagecraft' and give two examples of stagecraft skills.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stagecraft", statement: "The performer's physical and mental engagement with the stage and audience." },
            ],
            steps: [
              { reasoning: "Stagecraft is how the performer presents themselves physically and mentally on stage.", marks: 1, markCode: "M" },
              { reasoning: "Example 1: confident entrance, settling before starting, maintaining focus.", marks: 1, markCode: "M" },
              { reasoning: "Example 2: graceful mistake recovery, genuine acknowledgement of applause.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stagecraft = performance presentation skills; e.g. composure, entrances, recovery, applause response.",
            commonErrors: [
              "Thinking stagecraft is only about dancing or choreography.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a solo performer can build an emotional arc through interpretation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotional arc", statement: "Shape dynamics, tempo and expression to create build, climax and resolution." },
            ],
            steps: [
              { reasoning: "Identify the piece's emotional structure — where tension builds and releases.", marks: 1, markCode: "M" },
              { reasoning: "Use dynamics and tempo to intensify toward the climax.", marks: 1, markCode: "M" },
              { reasoning: "Shape resolution with softer dynamics, slower tempo or longer final notes.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the arc mirrors the piece's meaning, creating a coherent journey for the listener.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shape dynamics and tempo to build tension, peak at climax and resolve — mirroring the piece's meaning.",
            commonErrors: [
              "Playing every section at the same emotional intensity.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why testing memorisation away from the instrument improves recall.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Memorisation testing", statement: "Testing recall in varied contexts proves memory is structural, not just motor." },
            ],
            steps: [
              { reasoning: "Playing away from the instrument tests whether memory is musical or just muscle memory.", marks: 1, markCode: "M" },
              { reasoning: "Different contexts and times reveal weak spots before performance day.", marks: 1, markCode: "M" },
              { reasoning: "This builds confidence that memory will hold under pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Away-from-instrument testing reveals true memorisation strength and builds confidence.",
            commonErrors: [
              "Only testing memory in the familiar practice room setting.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student performs a piece flawlessly technically but the audience finds it dull. Analyse what is missing.",
          parts: [
            { label: "a", prompt: "Identify two likely missing expressive elements.", marks: 2 },
            { label: "b", prompt: "Explain how each would improve the performance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Performance communication", statement: "Technical accuracy alone does not communicate meaning; expression does." },
            ],
            steps: [
              { part: "a", reasoning: "Likely missing: dynamic shaping, phrasing, rubato, articulation contrast.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Another possibility: no clear emotional arc or climax.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dynamics create emotional shape — without them music sounds flat and mechanical.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Phrasing groups notes into musical sentences, giving the listener structure to follow.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Rubato and articulation add life and personality to the performance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Missing dynamics/phrasing/rubato. (b) They add emotional shape, structure and life.",
            commonErrors: [
              "Assuming technical perfection equals musical communication.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's preparation for a solo recital performance.",
          parts: [
            { label: "a", prompt: "Identify two strengths in the preparation.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest two improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating preparation", statement: "Assess interpretation, memorisation security, rehearsal and stagecraft." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. knows the pieces well, has thought about interpretation, practises regularly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no full run-throughs, memorisation only finger-based, no recovery plan — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on performance readiness.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggest structural memorisation practice and mock performances.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Suggest practising mistake recovery and performance conditions.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Evaluate preparation by interpretation, memorisation security, rehearsal quality and stagecraft.",
            commonErrors: [
              "Judging preparation only by hours practised.",
            ],
          },
        },
        {
          id: "music-u1-solo-performance-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a performer can recover gracefully from a mistake during a solo performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Graceful recovery", statement: "Composure and continuity matter more than perfect accuracy." },
            ],
            steps: [
              { reasoning: "Keep playing — do not stop, restart or visibly react to the error.", marks: 1, markCode: "M" },
              { reasoning: "Maintain eye contact and composure so the audience sees confidence, not panic.", marks: 1, markCode: "M" },
              { reasoning: "If memory fails, continue on the underlying harmony or rhythm until the next clear entry point.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: recovery is a skill that preserves the performance's integrity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Continue smoothly, maintain composure, and use harmony/rhythm to find the next entry point.",
            commonErrors: [
              "Stopping, apologising or showing visible distress after a mistake.",
            ],
          },
        },
      ],
    },
  ],
};
