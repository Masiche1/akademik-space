import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cas-u3-lesson-3-1",
  code: "3-1",
  title: "Reflective Practice Techniques",
  goal: "I CAN use effective reflection techniques to learn from CAS experiences.",
  standards: ["CAS", "Reflection", "Learning"],
  vocabulary: [
    { term: "Reflection", definition: "Deliberate examination of an experience to extract learning." },
    { term: "Reflective journal", definition: "A written record of experiences and insights over time." },
    { term: "Gibbs' reflective cycle", definition: "A model: description, feelings, evaluation, analysis, conclusion, action plan." },
    { term: "Learning outcome", definition: "A skill or insight gained through reflection on experience." },
    { term: "Critical reflection", definition: "Examining assumptions and questioning what was learned." },
    { term: "Metacognition", definition: "Thinking about your own thinking and learning processes." },
  ],
  concepts: [
    {
      id: "cas-u3-reflection-basics",
      title: "The practice of reflection",
      skill: "Apply reflective techniques to extract learning from CAS experiences.",
      lesson: {
        sections: [
          {
            heading: "Why reflection matters",
            body: "CAS is not just doing activities — it is learning from them. Reflection transforms experience into learning: what did you do, what did you feel, what did you learn, how will you apply it? Without reflection, CAS becomes box-ticking rather than genuine development.",
          },
          {
            heading: "Reflective techniques",
            body: "**Journaling**: write after each activity. **Gibbs' cycle**: description → feelings → evaluation → analysis → conclusion → action plan. **Critical questions**: What surprised me? What would I do differently? How does this connect to other experiences? Choose techniques that work for you.",
          },
          {
            heading: "Depth of reflection",
            body: "Surface reflection describes what happened; deep reflection analyses why it matters and what it means for you. Aim for depth: not just 'I volunteered' but 'I learned that listening to community needs produces better outcomes than imposing solutions'.",
          },
        ],
        keyFormulas: [
          { name: "Gibbs' cycle", statement: "Description → feelings → evaluation → analysis → conclusion → action" },
          { name: "Reflection depth", statement: "From 'what happened' to 'what it means and what I'll do differently'" },
        ],
        workedExample: {
          problem: "Reflect on a service activity using Gibbs' cycle.",
          solution: "Description: volunteered at food bank Saturday. Feelings: initially nervous, felt rewarded. Evaluation: helped sort donations, learned about food insecurity. Analysis: realised service is about dignity not charity. Conclusion: want to continue and advocate. Action: volunteer monthly, share learning with peers.",
        },
      },
      questions: [
        {
          id: "cas-u3-l31c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Reflection in CAS means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Just describing what happened" },
              { id: "b", text: "Examining experience to extract learning" },
              { id: "c", text: "Taking photographs" },
              { id: "d", text: "Signing attendance sheets" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflection", statement: "Deliberate examination of experience to extract learning." },
            ],
            steps: [
              { reasoning: "Reflection extracts learning from experience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Examining experience to extract learning",
            commonErrors: ["Confusing reflection with mere description."],
          },
        },
        {
          id: "cas-u3-l31c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the stages of Gibbs' reflective cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gibbs' cycle", statement: "Description, feelings, evaluation, analysis, conclusion, action plan." },
            ],
            steps: [
              { reasoning: "Description and feelings: what happened and how you felt.", marks: 1, markCode: "M" },
              { reasoning: "Evaluation and analysis: what was good/bad and why.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion and action: what you learned and what you'll do differently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gibbs' cycle: describe, feel, evaluate, analyse, conclude, plan action.",
            commonErrors: ["Stopping at description without analysis or action planning."],
          },
        },
        {
          id: "cas-u3-l31c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that brief reflections are sufficient for CAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection depth", statement: "Deep reflection extracts meaningful learning; brief notes are insufficient." },
            ],
            steps: [
              { reasoning: "For: brief notes are better than none for busy students.", marks: 1, markCode: "M" },
              { reasoning: "Against: surface reflection misses the learning that makes CAS valuable.", marks: 1, markCode: "M" },
              { reasoning: "Deep reflection connects experience to skills, values and future action.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: aim for meaningful reflection, not minimal compliance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Brief reflections are insufficient — deep reflection is needed to extract meaningful learning.",
            commonErrors: ["Writing 'it was fun' as the entire reflection."],
          },
        },
        {
          id: "cas-u3-l31c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine effective reflective practice in CAS.",
          parts: [
            { label: "a", prompt: "Explain why reflection is essential in CAS.", marks: 2 },
            { label: "b", prompt: "Describe two reflective techniques.", marks: 3 },
            { label: "c", prompt: "Evaluate the difference between surface and deep reflection.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflective practice", statement: "Reflection transforms experience into learning." },
            ],
            steps: [
              { part: "a", reasoning: "Reflection transforms experience into learning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Without it, CAS becomes box-ticking.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Journaling: regular written reflection.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gibbs' cycle: structured six-stage model.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Critical questions: what surprised me, what would I do differently.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Surface: describes what happened.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Deep: analyses meaning, skills gained, future application.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: deep reflection demonstrates genuine learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Transforms experience into learning. (b) Journaling, Gibbs' cycle. (c) Deep > surface.",
            commonErrors: ["Confusing description with reflection."],
          },
        },
        {
          id: "cas-u3-l31c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is NOT a reflective technique?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keeping a reflective journal" },
              { id: "b", text: "Using Gibbs' reflective cycle" },
              { id: "c", text: "Asking critical reflection questions" },
              { id: "d", text: "Taking photographs of activities" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflective techniques", statement: "Journaling, Gibbs' cycle and critical questions are reflection methods; photos are evidence." },
            ],
            steps: [
              { reasoning: "Photos are evidence artifacts, not reflection techniques.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Taking photographs of activities",
            commonErrors: ["Confusing evidence collection with reflection."],
          },
        },
        {
          id: "cas-u3-l31c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Deep reflection differs from surface reflection because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is written in more detail" },
              { id: "b", text: "Analyses meaning, skills gained and future application" },
              { id: "c", text: "Takes longer to complete" },
              { id: "d", text: "Uses more photographs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflection depth", statement: "Deep reflection analyses why experience matters and what it means for you." },
            ],
            steps: [
              { reasoning: "Deep reflection analyses meaning and future application.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Analyses meaning, skills gained and future application",
            commonErrors: ["Equating length of writing with depth of reflection."],
          },
        },
        {
          id: "cas-u3-l31c1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student writes 'I volunteered at the food bank and it was fun.' This reflection is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deep and critical" },
              { id: "b", text: "Surface-level description" },
              { id: "c", text: "A completed CAS project" },
              { id: "d", text: "Metacognitive analysis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection depth", statement: "Surface reflection describes what happened without analysis." },
            ],
            steps: [
              { reasoning: "The statement describes the event without analysing learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Surface-level description",
            commonErrors: ["Accepting brief descriptions as adequate reflection."],
          },
        },
        {
          id: "cas-u3-l31c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement best captures why reflection is essential in CAS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is required by the supervisor" },
              { id: "b", text: "It transforms experience into learning" },
              { id: "c", text: "It increases the number of hours logged" },
              { id: "d", text: "It replaces the need for activities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose of reflection", statement: "Reflection transforms experience into learning; without it CAS becomes box-ticking." },
            ],
            steps: [
              { reasoning: "Reflection converts experience into learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It transforms experience into learning",
            commonErrors: ["Seeing reflection as an administrative requirement only."],
          },
        },
        {
          id: "cas-u3-l31c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Metacognition in CAS reflection refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thinking about your own thinking and learning" },
              { id: "b", text: "Writing about other students' activities" },
              { id: "c", text: "Memorising CAS requirements" },
              { id: "d", text: "Counting completed hours" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metacognition", statement: "Thinking about your own thinking and learning processes." },
            ],
            steps: [
              { reasoning: "Metacognition means thinking about your own thinking.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Thinking about your own thinking and learning",
            commonErrors: ["Confusing metacognition with general description."],
          },
        },
        {
          id: "cas-u3-l31c1q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which is an example of a critical reflection question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What time did the activity start?" },
              { id: "b", text: "What assumptions did I bring to this experience?" },
              { id: "c", text: "How many people attended?" },
              { id: "d", text: "What equipment was used?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical reflection", statement: "Questions about assumptions, surprises and connections push beyond surface description." },
            ],
            steps: [
              { reasoning: "Asking about assumptions challenges hidden biases.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What assumptions did I bring to this experience?",
            commonErrors: ["Choosing factual questions over analytical ones."],
          },
        },
        {
          id: "cas-u3-l31c1q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student reflects: 'I thought service meant giving charity, but I learned it is about dignity and listening.' This demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surface reflection" },
              { id: "b", text: "A changed perspective through analysis" },
              { id: "c", text: "Incomplete documentation" },
              { id: "d", text: "Lack of engagement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deep reflection", statement: "Examining how experience changed your perspective indicates deep learning." },
            ],
            steps: [
              { reasoning: "The reflection analyses a changed belief — deep learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A changed perspective through analysis",
            commonErrors: ["Undervaluing reflections that challenge prior assumptions."],
          },
        },
        {
          id: "cas-u3-l31c1q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe two benefits of keeping a reflective journal in CAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflective journaling", statement: "Journaling records experiences and insights over time." },
            ],
            steps: [
              { reasoning: "Provides a written record of experiences and insights over time.", marks: 1, markCode: "M" },
              { reasoning: "Helps track learning and growth across the programme.", marks: 1, markCode: "M" },
              { reasoning: "Makes later portfolio reflections easier to write.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Journaling records experiences over time, tracks growth and supports later portfolio reflection.",
            commonErrors: ["Listing activities without recording insights."],
          },
        },
        {
          id: "cas-u3-l31c1q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between describing an activity and reflecting on it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection vs description", statement: "Description states what happened; reflection extracts meaning and learning." },
            ],
            steps: [
              { reasoning: "Description answers 'what happened' — facts and events.", marks: 1, markCode: "M" },
              { reasoning: "Reflection answers 'what did I learn and why does it matter'.", marks: 1, markCode: "M" },
              { reasoning: "Only reflection produces learning outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description states facts; reflection analyses meaning, feelings and learning.",
            commonErrors: ["Writing detailed descriptions and calling them reflections."],
          },
        },
        {
          id: "cas-u3-l31c1q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student volunteers at an animal shelter once and writes 'good experience, learned about animals'. Suggest three ways to deepen this reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Deepening reflection", statement: "Add analysis of feelings, evaluation of what worked, connections and future action." },
            ],
            steps: [
              { reasoning: "Add feelings and evaluation: what was rewarding or difficult.", marks: 1, markCode: "M" },
              { reasoning: "Add analysis: why the experience mattered, what assumptions were challenged.", marks: 1, markCode: "M" },
              { reasoning: "Add connections: link to other CAS experiences or personal values.", marks: 1, markCode: "M" },
              { reasoning: "Add action plan: what will be done differently or continued.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deepen by adding feelings, evaluation, analysis, connections and an action plan.",
            commonErrors: ["Adding more descriptive detail instead of analysis."],
          },
        },
        {
          id: "cas-u3-l31c1q15",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how metacognition strengthens CAS reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metacognition", statement: "Thinking about your own learning processes deepens all reflection." },
            ],
            steps: [
              { reasoning: "Metacognition means thinking about how you learn, not just what you did.", marks: 1, markCode: "M" },
              { reasoning: "It reveals which techniques and experiences produce the most learning.", marks: 1, markCode: "M" },
              { reasoning: "It connects separate activities into an integrated learning journey.", marks: 1, markCode: "M" },
              { reasoning: "It helps identify gaps where more engagement or reflection is needed.", marks: 1, markCode: "R" },
              { reasoning: "Overall it turns reflection from description into genuine self-awareness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metacognition deepens reflection by making students aware of how and why they learn.",
            commonErrors: ["Treating metacognition as a separate activity rather than a reflective habit."],
          },
        },
        {
          id: "cas-u3-l31c1q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the view that reflection should focus mainly on positive, enjoyable experiences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balanced reflection", statement: "Challenges and failures often teach more than successes." },
            ],
            steps: [
              { reasoning: "Positive experiences are motivating and worth recording.", marks: 1, markCode: "M" },
              { reasoning: "However, difficulties reveal assumptions and skills needing development.", marks: 1, markCode: "M" },
              { reasoning: "Honest reflection includes what went wrong and why.", marks: 1, markCode: "R" },
              { reasoning: "Ignoring negatives produces an unrealistic learning record.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: reflect on all experiences — challenges often yield deeper learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection should include challenges — they often produce deeper learning than successes.",
            commonErrors: ["Only documenting enjoyable activities."],
          },
        },
        {
          id: "cas-u3-l31c1q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare surface and deep reflection in CAS.",
          parts: [
            { label: "a", prompt: "Define surface reflection.", marks: 2 },
            { label: "b", prompt: "Define deep reflection.", marks: 2 },
            { label: "c", prompt: "Explain why deep reflection is valued more highly.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection depth", statement: "Depth moves from 'what happened' to 'what it means and what I'll do differently'." },
            ],
            steps: [
              { part: "a", reasoning: "Surface reflection describes what happened.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It stops at description without analysis.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Deep reflection analyses why experience matters.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It extracts skills, values and future applications.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Deep reflection demonstrates genuine learning outcomes.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It is what CAS assessment values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Describes events. (b) Analyses meaning and learning. (c) Deep reflection shows real growth.",
            commonErrors: ["Assuming longer writing equals deeper reflection."],
          },
        },
        {
          id: "cas-u3-l31c1q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student claims: 'I don't need to reflect because I already do the activities.' Evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Experience vs learning", statement: "Experience alone does not produce learning — reflection does." },
            ],
            steps: [
              { reasoning: "Activities provide experience but not automatically learning.", marks: 1, markCode: "M" },
              { reasoning: "Without reflection, skills and insights remain unexamined.", marks: 1, markCode: "M" },
              { reasoning: "CAS explicitly requires reflection as evidence of learning.", marks: 1, markCode: "M" },
              { reasoning: "Doing without reflecting risks box-ticking rather than development.", marks: 1, markCode: "R" },
              { reasoning: "Reflection is brief relative to activity time yet essential.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: reflection is indispensable — experience must be examined to become learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The claim is wrong — reflection is what converts experience into learning.",
            commonErrors: ["Assuming participation alone satisfies CAS."],
          },
        },
        {
          id: "cas-u3-l31c1q19",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Examine how critical reflection questions improve learning from CAS experiences.",
          parts: [
            { label: "a", prompt: "Give two examples of critical reflection questions.", marks: 2 },
            { label: "b", prompt: "Explain how these questions challenge assumptions.", marks: 2 },
            { label: "c", prompt: "Evaluate the impact of critical questions on learning depth.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical reflection", statement: "Questions about assumptions, surprises and connections deepen learning." },
            ],
            steps: [
              { part: "a", reasoning: "Example: 'What assumptions did I bring?'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example: 'What surprised me?' or 'How does this connect to other experiences?'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "They surface hidden biases and prior beliefs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "They force examination of why events unfolded as they did.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "They push reflection beyond description into analysis.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "They connect experiences into broader understanding.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: critical questions produce deeper, more transferable learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Assumptions, surprises, connections. (b) Surface biases. (c) Deeper transferable learning.",
            commonErrors: ["Using only factual questions that confirm what is already known."],
          },
        },
        {
          id: "cas-u3-l31c1q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine effective reflective practice in CAS.",
          parts: [
            { label: "a", prompt: "Explain why reflection is essential in CAS.", marks: 2 },
            { label: "b", prompt: "Describe two reflective techniques and when to use them.", marks: 3 },
            { label: "c", prompt: "Evaluate how reflection quality affects CAS assessment.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflective practice", statement: "Reflection transforms experience into learning and is assessed." },
            ],
            steps: [
              { part: "a", reasoning: "Reflection transforms experience into learning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Without it, CAS becomes box-ticking.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Journaling: after each activity for ongoing record.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gibbs' cycle: for structured deep analysis of significant events.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Critical questions: to probe assumptions and connections.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Supervisors assess genuine engagement through reflections.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shallow reflections suggest shallow engagement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: quality reflection is central to CAS assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Converts experience to learning. (b) Journal regularly, Gibbs for depth. (c) Assessed via supervisor review.",
            commonErrors: ["Treating reflection as paperwork separate from the learning."],
          },
        },
      ],
    },
    {
      id: "cas-u3-reflective-techniques",
      title: "Advanced reflection techniques",
      skill: "Use structured methods to deepen reflection on CAS experiences.",
      lesson: {
        sections: [
          {
            heading: "Gibbs' reflective cycle in detail",
            body: "**Description**: what happened? **Feelings**: how did you feel? **Evaluation**: what was good/bad? **Analysis**: why did it happen that way? **Conclusion**: what could you do differently? **Action plan**: what will you do next time? This cycle moves from description to transformation.",
          },
          {
            heading: "Critical reflection questions",
            body: "Ask: What assumptions did I bring? What surprised me? How does this connect to my other experiences? What would someone else have done differently? How has this changed my perspective? These questions push beyond surface description.",
          },
          {
            heading: "Connecting experiences",
            body: "Reflection is most powerful when it connects experiences: how does this service activity relate to your creativity project? What patterns do you see in your learning? Metacognition — thinking about your own learning — deepens all CAS reflection.",
          },
        ],
        keyFormulas: [
          { name: "Gibbs' stages", statement: "Description → feelings → evaluation → analysis → conclusion → action" },
          { name: "Critical questions", statement: "Assumptions? Surprises? Connections? Changed perspectives?" },
        ],
        workedExample: {
          problem: "Use critical questions to reflect on a creativity activity.",
          solution: "What surprised me: I enjoyed the process more than the result. What assumptions: I thought art required talent, now see it as practice. Connection: relates to my service work — both require patience. Changed perspective: creativity is about expression not perfection.",
        },
      },
      questions: [
        {
          id: "cas-u3-l31c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Gibbs' reflective cycle ends with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Description" },
              { id: "b", text: "Action plan" },
              { id: "c", text: "Feelings" },
              { id: "d", text: "Evaluation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gibbs' cycle", statement: "Ends with conclusion and action plan." },
            ],
            steps: [
              { reasoning: "Gibbs' cycle ends with action plan.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Action plan",
            commonErrors: ["Confusing the order of reflective stages."],
          },
        },
        {
          id: "cas-u3-l31c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how critical questions deepen reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical reflection", statement: "Questions about assumptions, surprises and connections deepen learning." },
            ],
            steps: [
              { reasoning: "Questions challenge assumptions and surface hidden biases.", marks: 1, markCode: "M" },
              { reasoning: "Surprises reveal unexpected learning and growth.", marks: 1, markCode: "M" },
              { reasoning: "Connections link experiences into broader understanding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Critical questions challenge assumptions, reveal surprises and connect experiences for deeper learning.",
            commonErrors: ["Asking only descriptive questions."],
          },
        },
        {
          id: "cas-u3-l31c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that reflection should focus only on positive experiences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balanced reflection", statement: "Both positive and negative experiences offer learning opportunities." },
            ],
            steps: [
              { reasoning: "For: positive experiences are motivating and rewarding.", marks: 1, markCode: "M" },
              { reasoning: "Against: failures and challenges often teach more than successes.", marks: 1, markCode: "M" },
              { reasoning: "Honest reflection includes difficulties and what was learned from them.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: reflect on all experiences — challenges often yield deeper learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection should include challenges and failures — they often teach more than successes.",
            commonErrors: ["Ignoring negative experiences in reflection."],
          },
        },
        {
          id: "cas-u3-l31c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine advanced reflection techniques for CAS.",
          parts: [
            { label: "a", prompt: "Describe Gibbs' reflective cycle.", marks: 2 },
            { label: "b", prompt: "Explain three critical reflection questions.", marks: 3 },
            { label: "c", prompt: "Evaluate how connecting experiences deepens learning.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Advanced reflection", statement: "Structured cycles and critical questions deepen learning." },
            ],
            steps: [
              { part: "a", reasoning: "Description → feelings → evaluation → analysis → conclusion → action.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All six stages listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "What assumptions did I bring?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "What surprised me?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "How does this connect to other experiences?", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Connections reveal patterns across experiences.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "They build integrated understanding of learning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: metacognition deepens all CAS reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Six-stage cycle. (b) Assumptions, surprises, connections. (c) Connections deepen learning.",
            commonErrors: ["Reflecting on activities in isolation without connecting them."],
          },
        },
        {
          id: "cas-u3-l31c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In Gibbs' cycle, the 'evaluation' stage asks:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What will you do next time?" },
              { id: "b", text: "What was good or bad about the experience?" },
              { id: "c", text: "How did you feel during it?" },
              { id: "d", text: "What exactly happened?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gibbs' cycle", statement: "Evaluation assesses what was good or bad about the experience." },
            ],
            steps: [
              { reasoning: "Evaluation judges what was good or bad.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What was good or bad about the experience?",
            commonErrors: ["Confusing evaluation with description or action planning."],
          },
        },
        {
          id: "cas-u3-l31c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which comes earlier in Gibbs' cycle: description or action plan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Action plan comes first" },
              { id: "b", text: "Description comes first" },
              { id: "c", text: "They happen simultaneously" },
              { id: "d", text: "Neither is part of the cycle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Gibbs' order", statement: "Gibbs' cycle begins with description and ends with action plan." },
            ],
            steps: [
              { reasoning: "Description is the first stage; action plan is last.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Description comes first",
            commonErrors: ["Reversing the reflective sequence."],
          },
        },
        {
          id: "cas-u3-l31c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The 'analysis' stage of Gibbs' cycle involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Listing the activities done" },
              { id: "b", text: "Exploring why things happened as they did" },
              { id: "c", text: "Planning future actions" },
              { id: "d", text: "Recording attendance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gibbs' analysis", statement: "Analysis explores why the experience unfolded as it did." },
            ],
            steps: [
              { reasoning: "Analysis explains causes and underlying dynamics.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Exploring why things happened as they did",
            commonErrors: ["Confusing analysis with description."],
          },
        },
        {
          id: "cas-u3-l31c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Connecting CAS experiences is valuable because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduces the number of reflections needed" },
              { id: "b", text: "Reveals patterns and builds integrated understanding" },
              { id: "c", text: "Is required for certificates" },
              { id: "d", text: "Only matters for the project" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Connecting experiences", statement: "Connections reveal patterns and build integrated understanding of learning." },
            ],
            steps: [
              { reasoning: "Connecting experiences reveals patterns across strands.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reveals patterns and builds integrated understanding",
            commonErrors: ["Reflecting on each activity in complete isolation."],
          },
        },
        {
          id: "cas-u3-l31c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which critical question best deepens reflection on a creativity activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How long did the activity last?" },
              { id: "b", text: "What surprised me about the creative process?" },
              { id: "c", text: "Who else participated?" },
              { id: "d", text: "What materials were provided?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical questions", statement: "Questions about surprises reveal unexpected learning." },
            ],
            steps: [
              { reasoning: "'What surprised me' probes unexpected insights.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What surprised me about the creative process?",
            commonErrors: ["Choosing factual rather than analytical questions."],
          },
        },
        {
          id: "cas-u3-l31c2q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student notices that both their service and creativity activities require patience. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surface reflection" },
              { id: "b", text: "Connecting experiences to find patterns" },
              { id: "c", text: "Incomplete documentation" },
              { id: "d", text: "Box-ticking" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Connecting experiences", statement: "Linking activities reveals shared skills and patterns." },
            ],
            steps: [
              { reasoning: "Noticing shared skills across strands is pattern recognition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Connecting experiences to find patterns",
            commonErrors: ["Failing to see connections between strands."],
          },
        },
        {
          id: "cas-u3-l31c2q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The 'conclusion' stage of Gibbs' cycle asks:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What will you do next time?" },
              { id: "b", text: "What did you learn from the experience?" },
              { id: "c", text: "How did you feel?" },
              { id: "d", text: "What was good or bad?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gibbs' conclusion", statement: "Conclusion draws out what was learned from the experience." },
            ],
            steps: [
              { reasoning: "Conclusion summarises the learning gained.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What did you learn from the experience?",
            commonErrors: ["Confusing conclusion with the action plan stage."],
          },
        },
        {
          id: "cas-u3-l31c2q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List the six stages of Gibbs' reflective cycle in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Gibbs' cycle", statement: "Description, feelings, evaluation, analysis, conclusion, action plan." },
            ],
            steps: [
              { reasoning: "Description, feelings, evaluation listed.", marks: 1, markCode: "M" },
              { reasoning: "Analysis and conclusion listed.", marks: 1, markCode: "M" },
              { reasoning: "Action plan completes the cycle in correct order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description → feelings → evaluation → analysis → conclusion → action plan.",
            commonErrors: ["Placing action plan before analysis or omitting feelings."],
          },
        },
        {
          id: "cas-u3-l31c2q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how asking 'what surprised me?' deepens reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical questions", statement: "Surprises reveal unexpected learning and growth." },
            ],
            steps: [
              { reasoning: "Surprises expose gaps between expectations and reality.", marks: 1, markCode: "M" },
              { reasoning: "Analysing surprises reveals new skills or changed perspectives.", marks: 1, markCode: "M" },
              { reasoning: "They push reflection beyond routine description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'What surprised me' exposes unexpected insights and challenges prior assumptions.",
            commonErrors: ["Ignoring moments of surprise in reflection."],
          },
        },
        {
          id: "cas-u3-l31c2q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a student might connect their creativity and service CAS experiences in reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Connecting experiences", statement: "Links across strands reveal shared skills and integrated understanding." },
            ],
            steps: [
              { reasoning: "Identify shared skills, e.g. patience, communication or problem-solving.", marks: 1, markCode: "M" },
              { reasoning: "Note how methods in one strand transfer to another.", marks: 1, markCode: "M" },
              { reasoning: "Reflect on how values learned in service inform creative choices.", marks: 1, markCode: "M" },
              { reasoning: "Synthesis: connections build a richer, integrated learning narrative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Connect by identifying shared skills, transferable methods and shared values across strands.",
            commonErrors: ["Treating each strand as completely separate."],
          },
        },
        {
          id: "cas-u3-l31c2q15",
          difficulty: "core",
          totalMarks: 5,
          stem: "Evaluate the claim that Gibbs' cycle is the only effective reflection method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection techniques", statement: "Multiple techniques exist; choice depends on the student and situation." },
            ],
            steps: [
              { reasoning: "Gibbs' cycle is structured and thorough for significant events.", marks: 1, markCode: "M" },
              { reasoning: "However, journaling and critical questions suit daily or informal reflection.", marks: 1, markCode: "M" },
              { reasoning: "Different students respond to different techniques.", marks: 1, markCode: "R" },
              { reasoning: "The cycle can feel heavy for routine activities.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: Gibbs' is valuable but not the only effective method — flexibility matters.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gibbs' is effective but not exclusive — journaling and critical questions also work well.",
            commonErrors: ["Assuming one model fits every situation."],
          },
        },
        {
          id: "cas-u3-l31c2q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student asks: 'How does this connect to my other experiences?' after a service activity. Explain why this question matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Connecting experiences", statement: "Connections build integrated understanding and reveal patterns." },
            ],
            steps: [
              { reasoning: "The question moves reflection beyond the single event.", marks: 1, markCode: "M" },
              { reasoning: "It reveals recurring skills, values or challenges across strands.", marks: 1, markCode: "M" },
              { reasoning: "It shows how learning accumulates over the programme.", marks: 1, markCode: "M" },
              { reasoning: "It mirrors how real learning works — experiences rarely occur in isolation.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: connecting questions are essential for deep CAS reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Connection questions reveal patterns and build integrated understanding across experiences.",
            commonErrors: ["Reflecting on each activity as if it were the first and only one."],
          },
        },
        {
          id: "cas-u3-l31c2q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply Gibbs' cycle to a challenging CAS experience.",
          parts: [
            { label: "a", prompt: "Describe the description and feelings stages.", marks: 2 },
            { label: "b", prompt: "Explain the evaluation and analysis stages.", marks: 2 },
            { label: "c", prompt: "Explain the conclusion and action plan stages.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Gibbs' cycle", statement: "Six stages moving from description to transformation." },
            ],
            steps: [
              { part: "a", reasoning: "Description: what happened in the challenging experience.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Feelings: honest emotions such as frustration or anxiety.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evaluation: what was positive or negative about it.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Analysis: why it unfolded that way and what it reveals.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclusion: what was learned from the difficulty.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Action plan: what will be done differently next time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) What happened + feelings. (b) Good/bad + why. (c) Learning + future action.",
            commonErrors: ["Skipping analysis and jumping straight to action."],
          },
        },
        {
          id: "cas-u3-l31c2q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether critical reflection questions can be overused.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balanced reflection", statement: "Critical questions deepen learning but should be applied judiciously." },
            ],
            steps: [
              { reasoning: "For overuse: interrogating every trivial activity can feel mechanical.", marks: 1, markCode: "M" },
              { reasoning: "Against overuse: depth matters more than frequency of questioning.", marks: 1, markCode: "M" },
              { reasoning: "Routine activities may need only brief reflection.", marks: 1, markCode: "R" },
              { reasoning: "Significant experiences deserve full critical examination.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: use critical questions deeply on meaningful experiences, briefly on routine ones.", marks: 1, markCode: "A" },
              { reasoning: "The aim is genuine learning, not formulaic compliance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Critical questions should be applied deeply where they matter, not mechanically to everything.",
            commonErrors: ["Applying deep analysis to trivial events or none at all."],
          },
        },
        {
          id: "cas-u3-l31c2q19",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Examine how metacognition deepens CAS reflection.",
          parts: [
            { label: "a", prompt: "Define metacognition.", marks: 1 },
            { label: "b", prompt: "Explain two ways metacognition improves reflection.", marks: 3 },
            { label: "c", prompt: "Evaluate the role of metacognition in the CAS learning journey.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metacognition", statement: "Thinking about your own thinking and learning processes." },
            ],
            steps: [
              { part: "a", reasoning: "Metacognition is thinking about your own thinking and learning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It reveals which experiences produce the most learning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It connects activities into an integrated learning journey.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It identifies gaps needing more engagement or reflection.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It transforms reflection from description into self-awareness.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It helps students own their learning rather than follow instructions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: metacognition is the deepest level of CAS reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Thinking about your own thinking. (b) Reveals effective learning, connects experiences, finds gaps. (c) Deepest reflective level.",
            commonErrors: ["Confusing metacognition with simple self-description."],
          },
        },
        {
          id: "cas-u3-l31c2q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine advanced reflection techniques for CAS.",
          parts: [
            { label: "a", prompt: "Describe Gibbs' reflective cycle.", marks: 2 },
            { label: "b", prompt: "Explain three critical reflection questions.", marks: 3 },
            { label: "c", prompt: "Evaluate how connecting experiences deepens learning.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Advanced reflection", statement: "Structured cycles, critical questions and connections deepen learning." },
            ],
            steps: [
              { part: "a", reasoning: "Description → feelings → evaluation → analysis → conclusion → action.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All six stages listed in order.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "What assumptions did I bring?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "What surprised me?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "How does this connect to other experiences?", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Connections reveal patterns across experiences.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "They build integrated understanding of learning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: metacognition and connections deepen all CAS reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Six-stage cycle. (b) Assumptions, surprises, connections. (c) Connections deepen learning.",
            commonErrors: ["Using techniques in isolation without integrating them."],
          },
        },
      ],
    },
  ],
};
