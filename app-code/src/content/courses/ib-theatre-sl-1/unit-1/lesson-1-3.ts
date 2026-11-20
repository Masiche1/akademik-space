import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "theatre-u1-lesson-1-3",
  code: "1-3",
  title: "Ensemble Performance and Improvisation",
  goal: "I CAN perform collaboratively in ensemble and improvise spontaneously while supporting the group's creative work.",
  standards: [
    "Performance",
    "Ensemble",
  ],
  vocabulary: [
    { term: "Ensemble", definition: "A group of performers working together as a company." },
    { term: "Improvisation", definition: "Creating performance spontaneously without script." },
    { term: "Ensemble awareness", definition: "The ability to respond to and support other performers in real time." },
    { term: "Status", definition: "The relative power or social position a performer projects." },
    { term: "Game", definition: "An improvisational exercise with rules that generate performance material." },
    { term: "Ensemble building", definition: "Exercises that develop trust, communication and group cohesion." },
  ],
  concepts: [
    {
      id: "theatre-u1-ensemble-work",
      title: "Ensemble collaboration",
      skill: "Develop ensemble awareness and collaborative skills for group performance.",
      lesson: {
        sections: [
          {
            heading: "Ensemble awareness",
            body: "Ensemble performance requires awareness of the whole group: who's speaking, who's moving, where is the focus? Performers must listen actively, respond to others, and support the group image. The audience watches the whole stage — a performer focused only on their own part misses the bigger picture.",
          },
          {
            heading: "Status and relationships",
            body: "In ensemble work, performers play **status** — high or low social position. Status relationships create drama: a high-status character dominates; a low-status one submits or rebels. Status can shift — the servant who outsmarts the master. Clear status choices make ensemble scenes readable.",
          },
          {
            heading: "Trust and support",
            body: "Ensemble work requires trust: supporting others' choices even when you'd do it differently; making partners look good; sharing focus. Ensemble exercises build this: trust falls, mirror exercises, group improvisations. The strongest ensembles feel like one organism, not separate individuals.",
          },
        ],
        keyFormulas: [
          { name: "Ensemble skills", statement: "Awareness + status + trust + support = cohesive ensemble" },
          { name: "Status dynamics", statement: "High status dominates; low status submits; shifts create drama" },
        ],
        workedExample: {
          problem: "In a group scene, one performer dominates all the focus while others fade. How should they rebalance?",
          solution: "The dominant performer should reduce their physical presence and vocal volume; supporting performers should take clearer focus moments; establish clear status relationships — who leads, who follows; rehearse with awareness of the whole stage picture, not just individual parts.",
        },
      },
      questions: [
        {
          id: "theatre-u1-ensemble-work-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Ensemble awareness in theatre refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Knowing your lines perfectly" },
              { id: "b", text: "Awareness of the whole group and responding to other performers" },
              { id: "c", text: "Standing in the centre of stage" },
              { id: "d", text: "Wearing matching costumes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ensemble awareness", statement: "The ability to respond to and support other performers in real time." },
            ],
            steps: [
              { reasoning: "Ensemble awareness is responding to and supporting the whole group in real time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Awareness of the whole group and responding to other performers",
            commonErrors: [
              "Confusing ensemble awareness with individual line knowledge.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways performers can support each other in ensemble work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ensemble support", statement: "Active listening, making partners look good, sharing focus." },
            ],
            steps: [
              { reasoning: "Listen actively — respond to what others are doing in the moment.", marks: 1, markCode: "M" },
              { reasoning: "Make partners look good — support their choices rather than competing.", marks: 1, markCode: "M" },
              { reasoning: "Share focus — ensure the whole stage picture is balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Active listening, partner support and focus sharing build ensemble.",
            commonErrors: [
              "Competing for focus rather than supporting the group.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how status relationships create dramatic tension in ensemble scenes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Status dynamics", statement: "Clear status relationships create conflict, comedy and narrative tension." },
            ],
            steps: [
              { reasoning: "Status differences create natural conflict — who dominates, who submits.", marks: 1, markCode: "M" },
              { reasoning: "Status shifts create dramatic moments — the servant who outsmarts the master.", marks: 1, markCode: "M" },
              { reasoning: "Clear status choices make scenes readable for the audience.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: status is the invisible architecture of ensemble drama.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Status relationships create conflict and dramatic tension in ensemble scenes.",
            commonErrors: [
              "Playing all characters at the same status level.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate an ensemble's collaborative performance.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating ensemble", statement: "Assess awareness, support, status clarity and group cohesion." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. good communication, balanced focus, clear status.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. focus stealing, unclear status, no listening — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with ensemble effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests establishing status relationships, practising awareness exercises, balancing focus.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate ensemble by awareness, support, status clarity and cohesion.",
            commonErrors: [
              "Judging ensemble only by individual performances, not group dynamics.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An 'ensemble' in theatre is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single star performer" },
              { id: "b", text: "A group of performers working together as a company" },
              { id: "c", text: "The stage crew" },
              { id: "d", text: "The audience" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ensemble", statement: "A group of performers working together as a company." },
            ],
            steps: [
              { reasoning: "An ensemble is the company of performers who create the performance collaboratively.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A group of performers working together as a company",
            commonErrors: [
              "Thinking ensemble refers to one performer rather than the group.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Status' in ensemble performance refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The performer's costume rank" },
              { id: "b", text: "The relative power or social position a performer projects" },
              { id: "c", text: "The stage position only" },
              { id: "d", text: "The volume of the voice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Status", statement: "The relative power or social position a performer projects." },
            ],
            steps: [
              { reasoning: "Status is the social power a character projects through physical and vocal choices.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The relative power or social position a performer projects",
            commonErrors: [
              "Confusing status (projected power) with physical position alone.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'status shift' in a scene occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The lights change" },
              { id: "b", text: "The relative power between characters reverses — e.g. a servant outsmarts the master" },
              { id: "c", text: "A performer exits" },
              { id: "d", text: "The music changes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Status shifts", statement: "Reversals of power create the strongest dramatic moments in ensemble work." },
            ],
            steps: [
              { reasoning: "A status shift reverses who dominates — a key source of dramatic tension and comedy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The relative power between characters reverses — e.g. a servant outsmarts the master",
            commonErrors: [
              "Thinking status is fixed for a whole scene rather than capable of shifting.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Trust-building exercises such as trust falls primarily develop:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Individual line memorisation" },
              { id: "b", text: "The group's trust, communication and cohesion" },
              { id: "c", text: "Stage fighting skills" },
              { id: "d", text: "Costume care" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ensemble building", statement: "Trust exercises develop group cohesion and mutual reliance." },
            ],
            steps: [
              { reasoning: "Trust falls and similar exercises build the safety and reliance a cohesive ensemble needs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The group's trust, communication and cohesion",
            commonErrors: [
              "Seeing ensemble exercises as separate from actual performance skill.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "When one performer 'steals focus' in an ensemble scene, the effect on the audience is typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The scene becomes more exciting" },
              { id: "b", text: "The group image becomes unbalanced and the scene loses clarity" },
              { id: "c", text: "Nothing changes" },
              { id: "d", text: "The other performers benefit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Focus balance", statement: "The audience reads the whole stage picture; imbalance confuses." },
            ],
            steps: [
              { reasoning: "Focus stealing unbalances the stage picture and undermines the ensemble's shared storytelling.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The group image becomes unbalanced and the scene loses clarity",
            commonErrors: [
              "Judging ensemble scenes by individual star power rather than group balance.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a mirror exercise, performers primarily practise:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying lines exactly" },
              { id: "b", text: "Matching a partner's movement in real time to build awareness and responsiveness" },
              { id: "c", text: "Standing still" },
              { id: "d", text: "Individual choreography" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mirror exercise", statement: "Matching a partner's movement builds real-time awareness and ensemble responsiveness." },
            ],
            steps: [
              { reasoning: "Mirroring trains performers to watch and respond to partners instantaneously.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Matching a partner's movement in real time to build awareness and responsiveness",
            commonErrors: [
              "Seeing mirroring as an individual exercise rather than a relational one.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three skills essential for cohesive ensemble performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ensemble skills", statement: "Awareness, status clarity, trust and support create cohesion." },
            ],
            steps: [
              { reasoning: "Awareness — reading and responding to the whole group's action and focus.", marks: 1, markCode: "M" },
              { reasoning: "Trust and support — making partners look good and sharing focus.", marks: 1, markCode: "M" },
              { reasoning: "Status clarity — clear, consistent power relationships that may shift dramatically.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Awareness, trust/support and clear status relationships build ensemble cohesion.",
            commonErrors: [
              "Listing individual skills like projection instead of group skills.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how clear status relationships create dramatic tension in an ensemble scene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Status dynamics", statement: "Status differences generate conflict, comedy and narrative tension." },
            ],
            steps: [
              { reasoning: "Status differences create natural conflict — who commands, who obeys, who resists.", marks: 1, markCode: "M" },
              { reasoning: "Every status interaction is a negotiation; tension rises when the balance is challenged.", marks: 1, markCode: "M" },
              { reasoning: "Status shifts — the moment power reverses — produce the scene's dramatic peak.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: status is the invisible architecture that makes ensemble scenes readable and tense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clear status creates conflict and tension; status shifts create dramatic peaks.",
            commonErrors: [
              "Playing all characters at the same status level, flattening the scene.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q13",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "Described ensemble scene",
            author: "Written for Akademik Space",
            source: "Ensemble analysis",
            text: "Three performers: a manager stands centre with arms folded and chin raised; an employee sits at a desk, shoulders hunched, hands flat on the desk; a third performer enters late, stops at the door, and waits for permission to approach.",
          },
          stem: "Analyse a described ensemble scene.",
          parts: [
            { label: "a", prompt: "Identify the status relationships shown.", marks: 2 },
            { label: "b", prompt: "Explain how focus and spacing support them.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Status and spacing", statement: "Physical dominance, distance and waiting communicate hierarchy." },
            ],
            steps: [
              { part: "a", reasoning: "Manager = high status (standing, folded arms, raised chin); employee = low status (seated, hunched); newcomer = uncertain/lower status (waiting at door).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Hierarchy correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Central position and height give the manager command; desk and door distances separate the others; the newcomer's frozen waiting shows deference.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Focus/spacing linked to status convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could add eye contact dynamics or a deliberate status test — e.g. the employee's hands tightening — to create tension.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Clear hierarchy manager > employee/newcomer. (b) Height, position and distance reinforce status. (c) Add a status test or eye-line detail.",
            commonErrors: [
              "Describing positions without connecting them to status meaning.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'making your partner look good' is a core ensemble skill.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Partner support", statement: "Ensemble scenes succeed when performers elevate each other rather than compete." },
            ],
            steps: [
              { reasoning: "Supporting a partner's choices gives their moments clarity and confidence.", marks: 1, markCode: "M" },
              { reasoning: "Competing for focus fragments the stage picture and weakens both performances.", marks: 1, markCode: "M" },
              { reasoning: "Reacting genuinely to partners makes their actions land — support is also responsiveness.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the ensemble is only as strong as its weakest-supported member.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Making partners look good strengthens the whole stage picture; competing weakens it.",
            commonErrors: [
              "Treating ensemble scenes as individual showcases.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A four-person ensemble must perform a scene where a family argues about money. Outline a rehearsal approach for the group dynamics.",
          parts: [
            { label: "a", prompt: "Describe how to establish each character's status.", marks: 2 },
            { label: "b", prompt: "Describe how to build ensemble awareness in rehearsal.", marks: 2 },
            { label: "c", prompt: "Explain how to keep the stage picture balanced.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ensemble rehearsal", statement: "Status, awareness and focus balance must be deliberately rehearsed." },
            ],
            steps: [
              { part: "a", reasoning: "Assign clear status per character (e.g. earner, dependent, mediator, rebel) and physicalise it consistently.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ensure statuses can shift during the argument to create dramatic peaks.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Practise listening and reacting in the moment; run the scene watching the whole group, not individual lines.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use awareness exercises (mirror, freeze) to sharpen real-time response.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Track focus: ensure each performer gets clear moments; adjust positions so no one is hidden or dominating unintentionally.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balance convincingly explained with reference to stage picture.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Establish statuses, rehearse whole-group awareness, and actively balance focus across the stage picture.",
            commonErrors: [
              "Rehearsing lines individually rather than the group's dynamics.",
            ],
          },
        },
        {
          id: "theatre-u1-ensemble-work-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate this claim: 'In ensemble work, the strongest performer should always take the most focus.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Focus distribution", statement: "Ensemble strength is measured by group balance, not individual dominance." },
            ],
            steps: [
              { reasoning: "A performer taking most focus unbalances the stage picture and sidelines the ensemble.", marks: 1, markCode: "M" },
              { reasoning: "Scenes need distributed focus so the audience reads relationships and group action.", marks: 1, markCode: "M" },
              { reasoning: "Strong performers elevate others by giving them clear moments rather than hogging attention.", marks: 1, markCode: "R" },
              { reasoning: "The claim confuses individual brilliance with ensemble quality.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: the claim is false — focus should follow the drama, not the ego.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "False — focus should serve the scene's story and group balance, not individual prominence.",
            commonErrors: [
              "Valuing star performance over ensemble storytelling.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u1-improvisation",
      title: "Improvisation skills",
      skill: "Develop improvisation skills — spontaneity, listening and collaborative creation — for performance.",
      lesson: {
        sections: [
          {
            heading: "The improviser's toolkit",
            body: "Improvisation requires: **listening** (respond to what's happening, not your plan); **commitment** (go with your choice fully); **yes, and** (accept and build on offers); and **spatial awareness** (know where you are, who you're with). These skills transfer to scripted work — better improvisers are better actors.",
          },
          {
            heading: "Games and exercises",
            body: "Improvisation games generate material and build skills: **yes, and** (accept and build); **status games** (play high/low); **mirror** (match partner's movement); **emotion walk** (move as a character). Games have rules that force creativity — constraints spark invention.",
          },
          {
            heading: "From improv to script",
            body: "Improvisation isn't just entertainment — it's a creation method. Many plays begin as improvisations that are then scripted. Devised theatre uses improvisation as primary process. The skills learned — spontaneity, listening, collaboration — are essential for all performance work.",
          },
        ],
        keyFormulas: [
          { name: "Improv toolkit", statement: "Listening + commitment + yes-and + awareness = improviser" },
          { name: "Improvisation value", statement: "Spontaneity + collaboration = creative material and actor skill" },
        ],
        workedExample: {
          problem: "In an improvisation, a partner says 'I brought you flowers' while holding nothing. How should you respond?",
          solution: "Accept the offer ('yes') and build on it ('and') — reach for the imaginary flowers, smell them, perhaps arrange them in a vase. Don't break character by saying 'there are no flowers'. The imaginary object exists because you commit to it.",
        },
      },
      questions: [
        {
          id: "theatre-u1-improvisation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'yes, and' rule in improvisation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always agree with everything" },
              { id: "b", text: "Accept offers and build on them" },
              { id: "c", text: "Say yes to the director" },
              { id: "d", text: "Never say no" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Yes, and", statement: "Accepting and building on partners' offers rather than blocking them." },
            ],
            steps: [
              { reasoning: "Yes, and means accepting offers and building on them rather than blocking.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Accept offers and build on them",
            commonErrors: [
              "Confusing yes-and (accept and build) with simple agreement.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three skills essential for effective improvisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Improvisation skills", statement: "Listening, commitment and yes-and collaboration." },
            ],
            steps: [
              { reasoning: "Listening — respond to what's happening, not your plan.", marks: 1, markCode: "M" },
              { reasoning: "Commitment — go with choices fully without hesitation.", marks: 1, markCode: "M" },
              { reasoning: "Yes, and — accept and build on partners' offers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Listening, commitment and yes-and are essential improvisation skills.",
            commonErrors: [
              "Planning your response instead of responding to the moment.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why improvisation skills transfer to scripted performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Improv transfer", statement: "Listening, spontaneity and responsiveness improve scripted acting." },
            ],
            steps: [
              { reasoning: "Improvisers learn to listen actively — essential for reacting to partners.", marks: 1, markCode: "M" },
              { reasoning: "They learn spontaneity — being present rather than mechanical.", marks: 1, markCode: "M" },
              { reasoning: "These skills make scripted work more alive and responsive.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: improv is training for all performance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Improvisation skills — listening, spontaneity, responsiveness — improve scripted acting.",
            commonErrors: [
              "Treating improvisation as separate from scripted performance.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate an improvisation session.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating improv", statement: "Assess listening, commitment, yes-and and group energy." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. good listening, committed choices, yes-and collaboration.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. blocking offers, no listening, hesitant choices — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with improv effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests practising yes-and, commitment exercises, listening games.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate improv by listening, commitment, yes-and and group energy.",
            commonErrors: [
              "Judging improv only by humour, not collaborative skill.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Blocking' an offer in improvisation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Accepting and building on a partner's suggestion" },
              { id: "b", text: "Rejecting or negating a partner's suggestion, which stalls the scene" },
              { id: "c", text: "Standing in the centre of the stage" },
              { id: "d", text: "Speaking louder than your partner" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Blocking vs yes-and", statement: "Blocking rejects offers and kills momentum; yes-and builds." },
            ],
            steps: [
              { reasoning: "Blocking negates a partner's offer ('there's no door here'), stopping the scene's forward motion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rejecting or negating a partner's suggestion, which stalls the scene",
            commonErrors: [
              "Confusing blocking (negating) with yes-and (accepting).",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In improvisation, 'listening' primarily means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Waiting silently for your turn to speak" },
              { id: "b", text: "Responding to what is actually happening in the moment rather than your planned response" },
              { id: "c", text: "Memorising your partner's lines" },
              { id: "d", text: "Standing near the speaker" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Improvisational listening", statement: "Responding to the present moment, not a pre-planned response." },
            ],
            steps: [
              { reasoning: "True listening means reacting to what partners actually do and say right now.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Responding to what is actually happening in the moment rather than your planned response",
            commonErrors: [
              "Planning your response instead of listening to your partner.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An 'emotion walk' improvisation exercise asks performers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Walk to music" },
              { id: "b", text: "Move across the space as a character or emotional state" },
              { id: "c", text: "Repeat lines" },
              { id: "d", text: "Face the wall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotion walk", statement: "Moving as a character externalises emotion physically." },
            ],
            steps: [
              { reasoning: "Emotion walks let performers explore how feelings translate into movement and posture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Move across the space as a character or emotional state",
            commonErrors: [
              "Thinking improv games only produce spoken material.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In devised theatre, improvisation is used as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A warm-up only" },
              { id: "b", text: "The primary creative process from which material is shaped" },
              { id: "c", text: "A punishment for mistakes" },
              { id: "d", text: "Only for comedy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Devised theatre", statement: "Improvisation generates and shapes the performance material itself." },
            ],
            steps: [
              { reasoning: "Devised theatre builds performances from improvisation rather than starting with a script.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The primary creative process from which material is shaped",
            commonErrors: [
              "Seeing improvisation as separate from serious theatre-making.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The 'mirror' improvisation game primarily develops:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Line memorisation" },
              { id: "b", text: "Real-time responsiveness and partnership awareness" },
              { id: "c", text: "Vocal projection" },
              { id: "d", text: "Costume awareness" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mirror game", statement: "Matching a partner instantly builds listening and responsiveness." },
            ],
            steps: [
              { reasoning: "Mirroring forces performers to watch and match partners without planning — core improv skills.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Real-time responsiveness and partnership awareness",
            commonErrors: [
              "Underestimating physical games as improv training.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "'Commitment' in improvisation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Following the planned scene" },
              { id: "b", text: "Going with each choice fully without hesitation or half-measures" },
              { id: "c", text: "Agreeing with the director" },
              { id: "d", text: "Repeating the same bit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Improvisational commitment", statement: "Full commitment makes choices believable and gives partners something to work with." },
            ],
            steps: [
              { reasoning: "Hesitant or half-committed choices give partners nothing solid to build on.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Going with each choice fully without hesitation or half-measures",
            commonErrors: [
              "Playing choices tentatively 'to stay safe'.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe two improv games and the skill each develops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Improvisation games", statement: "Rule-based games generate material and build specific improv skills." },
            ],
            steps: [
              { reasoning: "Yes, and — builds acceptance and collaborative building.", marks: 1, markCode: "M" },
              { reasoning: "Status games — develop clear power dynamics and status awareness.", marks: 1, markCode: "M" },
              { reasoning: "Mirror or emotion walk — builds responsiveness and physical expression (any two games with matching skills).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Games like yes-and, status games and mirror each target specific improv skills.",
            commonErrors: [
              "Naming games without identifying the skill each develops.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why improvisation games have rules and constraints.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Improvisation constraints", statement: "Rules remove the burden of infinite choice and force creative invention." },
            ],
            steps: [
              { reasoning: "Unlimited freedom can paralyse performers; rules narrow the field of choice.", marks: 1, markCode: "M" },
              { reasoning: "Constraints force inventive solutions — creativity thrives under limitation.", marks: 1, markCode: "M" },
              { reasoning: "Rules also make scenes comparable and skills measurable in rehearsal.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: constraints are a tool for focus, not a restriction of art.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rules focus choice and force creative invention — constraints spark rather than limit improvisation.",
            commonErrors: [
              "Seeing rules as obstacles rather than creative tools.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q13",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "Described improvisation",
            author: "Written for Akademik Space",
            source: "Improvisation analysis",
            text: "Partner A: 'We're late for the interview.' Partner B: 'Then let's take the helicopter.' Partner A: 'We don't have one.' Partner B: 'Then we'll build one.' Both mime assembling parts as the 'helicopter' shakes; Partner A lands it and salutes.",
          },
          stem: "Analyse a described improvisation.",
          parts: [
            { label: "a", prompt: "Identify two improv skills demonstrated.", marks: 2 },
            { label: "b", prompt: "Explain how the scene builds collaboratively.", marks: 2 },
            { label: "c", prompt: "Suggest one way the scene could escalate further.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Improvisational analysis", statement: "Yes-and building, commitment and physical commitment create collaborative scenes." },
            ],
            steps: [
              { part: "a", reasoning: "Yes-and (building on the helicopter offer), commitment (full physical commitment to the mime), listening (responding to each offer).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two skills correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each performer accepts and escalates the other's offers; the mime is shared and physical, so both co-create the imaginary object.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Collaborative building explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could escalate with a new complication — e.g. the helicopter's engine fails, or a third 'passenger' is revealed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Yes-and and commitment. (b) Offers accepted and escalated into shared physical mime. (c) Add a complication or new character.",
            commonErrors: [
              "Analysing the joke rather than the collaborative skills.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the effect on a scene when a performer repeatedly blocks their partner's offers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Blocking effect", statement: "Blocking denies partners material to build on, stalling and frustrating the scene." },
            ],
            steps: [
              { reasoning: "Each block removes an offer, leaving the partner with nothing to respond to.", marks: 1, markCode: "M" },
              { reasoning: "Repeated blocking drains energy — the scene stalls, repeats itself or dies.", marks: 1, markCode: "M" },
              { reasoning: "It also breaks trust: partners stop offering because their contributions are rejected.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: blocking is the fastest way to kill an improvisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blocking stalls scenes, drains energy and breaks the trust that improvisation depends on.",
            commonErrors: [
              "Thinking blocking is a legitimate way to add conflict in improv.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A theatre company wants to create a new play through improvisation. Outline the process from first session to performance.",
          parts: [
            { label: "a", prompt: "Describe the initial improvisation phase.", marks: 2 },
            { label: "b", prompt: "Describe how material is selected and shaped.", marks: 2 },
            { label: "c", prompt: "Explain how the piece becomes performance-ready.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Improv-to-script process", statement: "Improvisation generates raw material that is then selected, structured and rehearsed." },
            ],
            steps: [
              { part: "a", reasoning: "Generate material through games and scenes exploring themes, characters and situations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ensemble builds shared vocabulary and trust during this exploratory phase.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Identify the strongest moments, relationships and themes; discard weaker material.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Structure the material into scenes with a dramatic arc, then fix the text.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rehearse as a scripted piece — blocking, voice, design — while keeping improvisational responsiveness.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Performance-ready means the devised material now has the precision of a script with the life of improv.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Improv generates material, selection and structuring shape it, then scripted rehearsal polishes it for performance.",
            commonErrors: [
              "Leaving the piece unstructured or performing raw improvisation as the final show.",
            ],
          },
        },
        {
          id: "theatre-u1-improvisation-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An improvised scene has stalled — performers are repeating the same lines and no new offers are appearing. Suggest three strategies to restart it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Improvisational recovery", statement: "Stalled scenes need new offers, physical commitment or a reset." },
            ],
            steps: [
              { reasoning: "Introduce a new offer — a new character, object, location or complication — to restart the forward motion.", marks: 1, markCode: "M" },
              { reasoning: "Change the physical picture — move to a new level, space or gesture — to reset the audience's attention.", marks: 1, markCode: "M" },
              { reasoning: "Heighten or heighten-and-switch: exaggerate an existing element or deliberately reverse it to shock the scene forward.", marks: 1, markCode: "R" },
              { reasoning: "As a last resort, restart the scene from the last strong moment.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: stalled scenes are restarted with new offers, physical change or a reset.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Restart with a new offer, a physical change, a heightening reversal, or a scene reset.",
            commonErrors: [
              "Repeating the same energy instead of introducing change.",
            ],
          },
        },
      ],
    },
  ],
};
