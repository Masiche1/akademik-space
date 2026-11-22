import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "music-u6-lesson-6-3",
  code: "6-3",
  title: "Reflective Evaluation of Musical Growth",
  goal: "I CAN write reflective evaluations documenting musical growth, analysing challenges and demonstrating learning for assessment.",
  standards: [
    "Reflection",
    "Assessment",
  ],
  vocabulary: [
    { term: "Reflective evaluation", definition: "Critical analysis of musical development, challenges and learning." },
    { term: "Musical growth", definition: "Development in technical skill, musicality, creativity and confidence." },
    { term: "Challenge", definition: "A difficulty or obstacle in musical development." },
    { term: "Breakthrough", definition: "A moment of significant progress or insight." },
    { term: "Evidence", definition: "Specific examples — recordings, scores, performances — supporting claims of growth." },
    { term: "Self-assessment", definition: "Honest evaluation of one's own musical abilities and progress." },
  ],
  concepts: [
    {
      id: "music-u6-reflective-evaluation",
      title: "Writing reflective evaluation",
      skill: "Write reflective evaluations that document growth, analyse challenges and demonstrate musical learning.",
      lesson: {
        sections: [
          {
            heading: "Purpose of reflection",
            body: "Reflective evaluation is not a diary — it is structured evidence of musical learning. It should show: what you set out to achieve, how your musicianship evolved, what challenges you faced, how you overcame them, and what you learned. Assessors look for evidence of critical thinking about your development.",
          },
          {
            heading: "Documenting growth",
            body: "Use specific evidence: 'In September I could play scales evenly; by March I was improvising confidently.' Compare early and recent recordings or performances. Reference specific pieces, techniques and breakthroughs. Vague claims ('I got better') fail; specific evidence succeeds.",
          },
          {
            heading: "Analysing challenges",
            body: "Don't hide failures — analyse them. 'My first composition was harmonically static; I learned to vary chord progressions.' Challenges demonstrate learning when analysed honestly. The best reflections show struggle and breakthrough, not just success.",
          },
        ],
        keyFormulas: [
          { name: "Reflection structure", statement: "Intention → process → challenges → breakthroughs → learning" },
          { name: "Evidence rule", statement: "Specific examples and comparisons, not vague claims" },
        ],
        workedExample: {
          problem: "A student writes: 'I improved my piano playing.' Strengthen this reflection.",
          solution: "'In Unit 1 I practised scales mechanically; by Unit 4 I was using them to improvise. My first recital piece had rhythmic inaccuracies — I learned to practise with metronome. In my final performance, the interpretation was expressive because I had analysed the harmony and shaped phrases accordingly.'",
        },
      },
      questions: [
        {
          id: "music-u6-reflective-evaluation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A reflective evaluation of musical growth should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Document and analyse musical development and learning" },
              { id: "b", text: "List all pieces performed" },
              { id: "c", text: "Praise the musician's talent" },
              { id: "d", text: "Describe practice room equipment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflective evaluation", statement: "Structured evidence of musical development and learning." },
            ],
            steps: [
              { reasoning: "Reflective evaluation documents and analyses musical growth and learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Document and analyse musical development and learning",
            commonErrors: [
              "Writing a diary or list rather than analytical reflection.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three elements a strong reflective evaluation should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reflection elements", statement: "Growth evidence, challenge analysis and learning outcomes." },
            ],
            steps: [
              { reasoning: "Specific evidence of growth — comparisons between early and recent work.", marks: 1, markCode: "M" },
              { reasoning: "Honest analysis of challenges and how they were addressed.", marks: 1, markCode: "M" },
              { reasoning: "Clear statement of what was learned and future goals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth evidence, challenge analysis and learning outcomes structure reflection.",
            commonErrors: [
              "Making vague claims without specific evidence.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why analysing musical failures is valuable in reflective evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Learning from failure", statement: "Analysed failures demonstrate critical thinking and genuine learning." },
            ],
            steps: [
              { reasoning: "Successes show what works; failures show what was learned.", marks: 1, markCode: "M" },
              { reasoning: "Analysing why something failed develops critical self-awareness.", marks: 1, markCode: "M" },
              { reasoning: "Assessors value evidence of learning from mistakes over polished narratives.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: honest struggle demonstrates growth better than success alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Analysed failures demonstrate learning and critical self-awareness.",
            commonErrors: [
              "Hiding failures or presenting only successes.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's reflective evaluation.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating reflection", statement: "Assess evidence specificity, challenge analysis and learning outcomes." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. specific examples, honest tone, references to process.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. vague claims, no challenge analysis, missing future goals — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with reflection effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding specific comparisons, analysing a challenge, stating future goals.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate reflection by evidence specificity, challenge analysis and learning outcomes.",
            commonErrors: [
              "Judging reflection by length or tone rather than analytical content.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A reflective evaluation is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of pieces performed" },
              { id: "b", text: "A daily practice diary" },
              { id: "c", text: "A formal music theory exam" },
              { id: "d", text: "Structured evidence of musical learning and development" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflective evaluation", statement: "Structured evidence of musical development and learning." },
            ],
            steps: [
              { reasoning: "Reflection is structured evidence of learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Structured evidence of musical learning and development",
            commonErrors: [
              "Confusing reflection with a diary or list.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "The phrase 'I improved my piano playing' in a reflective evaluation is weak because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is too long" },
              { id: "b", text: "Uses incorrect grammar" },
              { id: "c", text: "Lacks specific evidence of how and where improvement occurred" },
              { id: "d", text: "Mentions the instrument" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence rule", statement: "Specific examples and comparisons, not vague claims." },
            ],
            steps: [
              { reasoning: "Vague claims lack the specific evidence reflection requires.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Lacks specific evidence of how and where improvement occurred",
            commonErrors: [
              "Making vague claims without supporting examples.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The best structure for a reflective evaluation follows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Intention, process, challenges, breakthroughs and learning" },
              { id: "b", text: "Only the final performance" },
              { id: "c", text: "Random order of experiences" },
              { id: "d", text: "Alphabetical order of pieces" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reflection structure", statement: "Intention to process to challenges to learning." },
            ],
            steps: [
              { reasoning: "Reflection follows a structured progression.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Intention, process, challenges, breakthroughs and learning",
            commonErrors: [
              "Writing without a clear structure.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Comparing early and recent recordings in a reflection primarily provides:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of technical errors" },
              { id: "b", text: "Proof of practice room quality" },
              { id: "c", text: "Entertainment for the reader" },
              { id: "d", text: "Concrete evidence of musical growth" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence of growth", statement: "Comparisons provide concrete growth evidence." },
            ],
            steps: [
              { reasoning: "Comparisons evidence growth concretely.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Concrete evidence of musical growth",
            commonErrors: [
              "Asserting growth without comparative evidence.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Self-assessment' in musical reflection refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grading other students' work" },
              { id: "b", text: "Predicting exam results" },
              { id: "c", text: "Honest evaluation of one's own musical abilities and progress" },
              { id: "d", text: "Comparing oneself to famous musicians" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-assessment", statement: "Honest evaluation of one's own abilities and progress." },
            ],
            steps: [
              { reasoning: "Self-assessment is honest evaluation of own progress.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Honest evaluation of one's own musical abilities and progress",
            commonErrors: [
              "Overstating or understating abilities insincerely.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'breakthrough' in a reflective evaluation is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A moment of significant progress or insight" },
              { id: "b", text: "Any practice session completed" },
              { id: "c", text: "A high exam score" },
              { id: "d", text: "A new piece added to repertoire" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Breakthrough", statement: "A moment of significant progress or insight." },
            ],
            steps: [
              { reasoning: "A breakthrough is significant progress or insight.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A moment of significant progress or insight",
            commonErrors: [
              "Confusing routine progress with breakthrough moments.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The purpose of including challenges in a reflective evaluation is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fill space in the writing" },
              { id: "b", text: "Show the student is weak" },
              { id: "c", text: "Excuse poor performance" },
              { id: "d", text: "Demonstrate honest analysis and learning from difficulty" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Challenge analysis", statement: "Analysed challenges demonstrate learning and honesty." },
            ],
            steps: [
              { reasoning: "Challenges analysed honestly show learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Demonstrate honest analysis and learning from difficulty",
            commonErrors: [
              "Hiding challenges or presenting only successes.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Assessors value a reflection showing struggle and breakthrough more than one showing only success because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses more complex vocabulary" },
              { id: "b", text: "It hides the student's weaknesses" },
              { id: "c", text: "It provides verifiable evidence of learning and critical thinking" },
              { id: "d", text: "It is longer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Learning evidence", statement: "Struggle and breakthrough evidence genuine learning." },
            ],
            steps: [
              { reasoning: "Struggle-breakthrough evidence shows genuine learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It provides verifiable evidence of learning and critical thinking",
            commonErrors: [
              "Believing polished narratives are more convincing than honest ones.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three elements a strong reflective evaluation should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reflection elements", statement: "Growth evidence, challenge analysis and learning outcomes." },
            ],
            steps: [
              { reasoning: "Specific evidence of growth via comparisons.", marks: 1, markCode: "M" },
              { reasoning: "Honest analysis of challenges faced.", marks: 1, markCode: "M" },
              { reasoning: "Clear statement of learning and future goals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth evidence, challenge analysis and learning outcomes.",
            commonErrors: [
              "Vague claims without specific evidence.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how specific evidence strengthens a reflective evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Specific evidence", statement: "Specific examples make claims verifiable and credible." },
            ],
            steps: [
              { reasoning: "Specific examples make claims verifiable.", marks: 1, markCode: "M" },
              { reasoning: "They demonstrate critical awareness of own development.", marks: 1, markCode: "M" },
              { reasoning: "Vague claims cannot be assessed or trusted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific evidence makes reflection verifiable and credible.",
            commonErrors: [
              "Relying on general claims like 'I got better'.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why honest self-assessment matters more than presenting only achievements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Honest self-assessment", statement: "Honest evaluation demonstrates critical thinking and genuine growth." },
            ],
            steps: [
              { reasoning: "Achievements alone show product, not learning.", marks: 1, markCode: "M" },
              { reasoning: "Honest weaknesses show awareness and critical thinking.", marks: 1, markCode: "M" },
              { reasoning: "Assessors value realism over self-promotion.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: honesty evidences genuine development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Honest self-assessment evidences critical thinking and real growth.",
            commonErrors: [
              "Overstating abilities or hiding weaknesses.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a student should analyse a specific musical challenge in a reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Challenge analysis", statement: "Identify challenge, analyse cause and describe learning." },
            ],
            steps: [
              { reasoning: "Identify the specific challenge encountered.", marks: 1, markCode: "M" },
              { reasoning: "Analyse why it occurred — technical, musical or contextual.", marks: 1, markCode: "M" },
              { reasoning: "Describe what was learned or changed as a result.", marks: 1, markCode: "M" },
              { reasoning: "Show evidence of improvement afterwards.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identify, analyse and learn from the challenge with evidence.",
            commonErrors: [
              "Naming a challenge without analysing or learning from it.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student writes: 'My compositions improved a lot this year.'",
          parts: [
            { label: "a", prompt: "Identify two weaknesses in this statement.", marks: 2 },
            { label: "b", prompt: "Rewrite it with specific evidence of growth.", marks: 2 },
            { label: "c", prompt: "Explain why the rewrite is stronger.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Specific evidence", statement: "Specific, dated examples make claims verifiable." },
            ],
            steps: [
              { part: "a", reasoning: "Weaknesses, e.g. vague claim, no evidence, no specifics.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two weaknesses correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rewrite includes specific pieces, dates and changes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rewrite provides concrete evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Specifics make claim verifiable and credible.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Explanation links evidence to assessment value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific dated evidence makes the claim verifiable and credible.",
            commonErrors: [
              "Adding detail without actual evidence.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q18",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why reflection should include future goals or next steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forward planning", statement: "Future goals show ongoing development and self-direction." },
            ],
            steps: [
              { reasoning: "Goals show the student understands their own development.", marks: 1, markCode: "M" },
              { reasoning: "They demonstrate self-direction and continued learning.", marks: 1, markCode: "M" },
              { reasoning: "They complete the learning cycle of reflection.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: future goals strengthen reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Future goals show self-direction and complete the learning cycle.",
            commonErrors: [
              "Ending reflection without considering next steps.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q19",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three types of specific evidence that strengthen a reflective evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence types", statement: "Recordings, scores, performances and dated comparisons." },
            ],
            steps: [
              { reasoning: "Recordings or performances at different stages.", marks: 1, markCode: "M" },
              { reasoning: "Specific compositions or pieces referenced.", marks: 1, markCode: "M" },
              { reasoning: "Dated comparisons showing change over time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recordings, specific pieces and dated comparisons are evidence.",
            commonErrors: [
              "Using vague references without specifics.",
            ],
          },
        },
        {
          id: "music-u6-reflective-evaluation-q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate this reflective evaluation excerpt: 'I worked hard on my piece. It went better than last time. I am happy with my progress.'",
          parts: [
            { label: "a", prompt: "Identify two weaknesses in the excerpt.", marks: 2 },
            { label: "b", prompt: "Rewrite it with specific evidence and analysis.", marks: 3 },
            { label: "c", prompt: "Explain why the rewrite is stronger.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating reflection", statement: "Assess evidence specificity, challenge analysis and learning outcomes." },
            ],
            steps: [
              { part: "a", reasoning: "Weaknesses, e.g. vague claims, no specifics, no challenge analysis.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two weaknesses correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rewrite adds specific piece, dates and technical detail.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rewrite analyses what improved and why.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rewrite provides concrete evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Specifics make claims verifiable.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Analysis shows critical thinking.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Explanation links evidence to assessment value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific evidence and analysis make reflection verifiable and credible.",
            commonErrors: [
              "Adding length without adding evidence.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u6-portfolio-assessment",
      title: "Portfolio for assessment",
      skill: "Prepare a musical portfolio that meets DP music assessment requirements and demonstrates sustained musical development.",
      lesson: {
        sections: [
          {
            heading: "Assessment components",
            body: "The DP music SL course assesses through: the **performance** (solo and ensemble playing), the **composition portfolio** (original works), the **analysis** (listening and written analysis of set works), and the **reflective portfolio** (documentation of process and growth). The portfolio supports all components by evidencing sustained practice.",
          },
          {
            heading: "Portfolio requirements",
            body: "Include: recordings of performances at different stages; compositions with scores and recordings; written analyses of heard music; reflective entries documenting practice; a performance log; and a repertoire list. Ensure material is recent, represents current ability, and shows development.",
          },
          {
            heading: "Final preparation",
            body: "Review against criteria: Does the portfolio show range? Does it demonstrate growth? Is everything clearly labelled and organised? Are there gaps that need addressing? Seek feedback before submission. The portfolio is your professional musical identity — curate it accordingly.",
          },
        ],
        keyFormulas: [
          { name: "Assessment components", statement: "Performance + composition + analysis + reflection" },
          { name: "Portfolio checklist", statement: "Range + growth + documentation + organisation + reflection" },
        ],
        workedExample: {
          problem: "A student has strong recent performances but no early recordings or compositions. What should they add?",
          solution: "Include any available early recordings to show growth; add 2-3 compositions with scores and brief notes; include written analyses of set works; add reflective entries linking practice to improvement. The portfolio needs to show the journey, not just the destination.",
        },
      },
      questions: [
        {
          id: "music-u6-portfolio-assessment-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The DP music SL assessment includes which components?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A written essay only" },
              { id: "b", text: "Only a final performance exam" },
              { id: "c", text: "Performance, composition, analysis and reflection" },
              { id: "d", text: "Only music theory" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Assessment components", statement: "Performance, composition, analysis and reflection form the assessment." },
            ],
            steps: [
              { reasoning: "SL assessment comprises performance, composition, analysis and reflection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Performance, composition, analysis and reflection",
            commonErrors: [
              "Assuming assessment is only performance or only written.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three elements a complete music portfolio should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio contents", statement: "Recordings, compositions, analyses, reflections and documentation." },
            ],
            steps: [
              { reasoning: "Recordings of performances showing progress over time.", marks: 1, markCode: "M" },
              { reasoning: "Compositions with scores and recordings.", marks: 1, markCode: "M" },
              { reasoning: "Written analyses and reflective entries documenting learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recordings, compositions and written reflections complete the portfolio.",
            commonErrors: [
              "Submitting only performances without composition or analysis.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the portfolio should show development rather than only best work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth documentation", statement: "Development evidence demonstrates learning and sustained practice." },
            ],
            steps: [
              { reasoning: "Best work alone shows talent; development shows learning.", marks: 1, markCode: "M" },
              { reasoning: "Assessors value evidence of growth and critical engagement over raw ability.", marks: 1, markCode: "M" },
              { reasoning: "The journey demonstrates more than the destination.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: portfolio should evidence process, not just product.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Development evidence demonstrates learning and sustained practice.",
            commonErrors: [
              "Showing only polished final work without growth context.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's music portfolio for assessment readiness.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest final improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio evaluation", statement: "Assess range, growth, documentation, organisation and reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. includes recordings, shows some growth, has compositions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. missing early work, poor organisation, no reflections — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with assessment effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding growth evidence, improving organisation, adding reflections.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete final improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate portfolio by range, growth, documentation, organisation and reflection.",
            commonErrors: [
              "Assessing portfolio only by performance quality, not documentation.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The DP music SL assessment comprises which four components?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Theory, history, performance and essay" },
              { id: "b", text: "Solo, duet, ensemble and exam" },
              { id: "c", text: "Practice, rehearsal, performance and review" },
              { id: "d", text: "Performance, composition, analysis and reflection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Assessment components", statement: "Performance, composition, analysis and reflection form the assessment." },
            ],
            steps: [
              { reasoning: "SL assessment has four components including performance and reflection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Performance, composition, analysis and reflection",
            commonErrors: [
              "Assuming assessment is only performance or only written.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "The portfolio supports assessment primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Providing a written exam" },
              { id: "b", text: "Showing instrument quality" },
              { id: "c", text: "Replacing the need for performance" },
              { id: "d", text: "Evidencing sustained practice and development across components" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Portfolio role", statement: "The portfolio evidences sustained practice and growth." },
            ],
            steps: [
              { reasoning: "The portfolio evidences sustained practice and development.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Evidencing sustained practice and development across components",
            commonErrors: [
              "Thinking the portfolio replaces other assessment components.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'performance log' in an assessment portfolio records:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Instrument maintenance" },
              { id: "b", text: "Music theory grades" },
              { id: "c", text: "Only formal concerts" },
              { id: "d", text: "Performances given, repertoire and experiences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Performance log", statement: "A record of performances, repertoire and experiences gained." },
            ],
            steps: [
              { reasoning: "A performance log records performances and repertoire.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Performances given, repertoire and experiences",
            commonErrors: [
              "Recording only dates without detail.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Portfolio material should be 'recent' primarily because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assessment boards require recent dates" },
              { id: "b", text: "Recent recordings sound better" },
              { id: "c", text: "It represents the student's current ability level" },
              { id: "d", text: "Older material is always worse" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Currency", statement: "Recent material represents current ability." },
            ],
            steps: [
              { reasoning: "Recent material shows current ability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It represents the student's current ability level",
            commonErrors: [
              "Including outdated material that misrepresents current level.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The composition portfolio component requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A written essay on music history" },
              { id: "b", text: "Analysis of set works only" },
              { id: "c", text: "Only performance recordings" },
              { id: "d", text: "Original compositions with scores and recordings" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Composition portfolio", statement: "Original works with scores and recordings." },
            ],
            steps: [
              { reasoning: "Composition portfolio requires original works with scores.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Original compositions with scores and recordings",
            commonErrors: [
              "Submitting performances instead of original compositions.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Written analyses of heard music in the portfolio support which assessment component?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Composition only" },
              { id: "b", text: "Analysis of set works" },
              { id: "c", text: "Performance only" },
              { id: "d", text: "No component" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Analysis component", statement: "Written analyses evidence the analysis component." },
            ],
            steps: [
              { reasoning: "Analyses of heard music support the analysis component.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Analysis of set works",
            commonErrors: [
              "Thinking analysis materials support only performance.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The portfolio should demonstrate 'range' by including:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the most difficult pieces" },
              { id: "b", text: "Variety across performance, composition and analysis" },
              { id: "c", text: "Only recent work" },
              { id: "d", text: "Many similar performances" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio range", statement: "Range spans performance, composition and analysis domains." },
            ],
            steps: [
              { reasoning: "Range means variety across domains.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Variety across performance, composition and analysis",
            commonErrors: [
              "Confusing range with quantity within one domain.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Seeking feedback before portfolio submission is valuable because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replaces self-assessment" },
              { id: "b", text: "Guarantees a high grade" },
              { id: "c", text: "Is required by all teachers" },
              { id: "d", text: "Identifies gaps and weaknesses before assessment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio review", statement: "Feedback identifies gaps before final submission." },
            ],
            steps: [
              { reasoning: "Feedback reveals gaps before submission.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Identifies gaps and weaknesses before assessment",
            commonErrors: [
              "Assuming feedback guarantees grades rather than improving quality.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three elements a complete music portfolio should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio contents", statement: "Recordings, compositions, analyses, reflections and documentation." },
            ],
            steps: [
              { reasoning: "Recordings of performances showing progress.", marks: 1, markCode: "M" },
              { reasoning: "Compositions with scores and recordings.", marks: 1, markCode: "M" },
              { reasoning: "Written analyses and reflective entries.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recordings, compositions and written reflections complete the portfolio.",
            commonErrors: [
              "Submitting only performances without other components.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why portfolio material should represent current ability rather than past performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Currency", statement: "Current ability is what assessment evaluates." },
            ],
            steps: [
              { reasoning: "Assessment evaluates current ability.", marks: 1, markCode: "M" },
              { reasoning: "Outdated material misrepresents present level.", marks: 1, markCode: "M" },
              { reasoning: "Recent work better evidences sustained development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current material accurately represents assessed ability.",
            commonErrors: [
              "Including old material that no longer reflects ability.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the portfolio should show the journey of development, not just the destination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth documentation", statement: "Development evidence demonstrates learning and sustained practice." },
            ],
            steps: [
              { reasoning: "Destination alone shows product, not learning.", marks: 1, markCode: "M" },
              { reasoning: "Journey evidence demonstrates sustained practice.", marks: 1, markCode: "M" },
              { reasoning: "Assessors value process evidence over raw ability.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: portfolio should evidence process.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The journey evidences learning that the destination alone cannot.",
            commonErrors: [
              "Showing only polished final work.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a student should review their portfolio before final submission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio review", statement: "Check range, growth, documentation, organisation and reflection." },
            ],
            steps: [
              { reasoning: "Check range across all assessment components.", marks: 1, markCode: "M" },
              { reasoning: "Verify growth evidence is present and dated.", marks: 1, markCode: "M" },
              { reasoning: "Confirm organisation, labels and completeness.", marks: 1, markCode: "M" },
              { reasoning: "Seek feedback and address identified gaps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Review for range, growth, documentation and seek feedback.",
            commonErrors: [
              "Submitting without checking against assessment criteria.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student's portfolio contains only recent solo performances.",
          parts: [
            { label: "a", prompt: "Identify two components missing from this portfolio.", marks: 2 },
            { label: "b", prompt: "Explain how each missing component affects assessment coverage.", marks: 2 },
            { label: "c", prompt: "Suggest one addition for each missing component.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio completeness", statement: "Portfolio must cover performance, composition, analysis and reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Missing, e.g. compositions, written analyses, reflections.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two components correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each missing component explained with assessment effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effects clearly linked to coverage gaps.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding compositions with scores.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Suggests adding analyses and reflective entries.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add compositions and written analyses with reflections.",
            commonErrors: [
              "Thinking performances alone satisfy all components.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q18",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why reflective entries are essential to an assessment portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection component", statement: "Reflective entries evidence the reflection assessment component." },
            ],
            steps: [
              { reasoning: "Reflection is one of the four assessment components.", marks: 1, markCode: "M" },
              { reasoning: "Entries document learning and growth across practice.", marks: 1, markCode: "M" },
              { reasoning: "They provide context for other portfolio materials.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: without reflection, coverage is incomplete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflective entries are required for the reflection assessment component.",
            commonErrors: [
              "Thinking recordings alone satisfy the reflection requirement.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q19",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three questions a student should ask when reviewing their portfolio before submission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio checklist", statement: "Range, growth, documentation, organisation and reflection." },
            ],
            steps: [
              { reasoning: "Does it show range across all components?", marks: 1, markCode: "M" },
              { reasoning: "Does it evidence growth over time?", marks: 1, markCode: "M" },
              { reasoning: "Is everything labelled and organised clearly?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check range, growth evidence and organisation.",
            commonErrors: [
              "Reviewing only for completeness, not quality.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-assessment-q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate this portfolio submission for assessment readiness: three recent performance videos, two compositions with scores, one written analysis, and no early recordings or reflections.",
          parts: [
            { label: "a", prompt: "Identify two strengths of this portfolio.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their assessment effect.", marks: 3 },
            { label: "c", prompt: "Suggest two final improvements before submission.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio evaluation", statement: "Assess range, growth, documentation, organisation and reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. covers multiple components, includes compositions and analysis.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no growth evidence, no reflections.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with assessment effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both weaknesses linked to reduced evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggest adding early recordings and reflective entries.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Suggest seeking feedback or improving organisation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add growth evidence and reflections; current portfolio lacks development documentation.",
            commonErrors: [
              "Judging portfolio only by number of items, not coverage and growth.",
            ],
          },
        },
      ],
    },
  ],
};
