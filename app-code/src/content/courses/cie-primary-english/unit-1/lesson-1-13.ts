import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cipe-u1-lesson-1-13",
  code: "1-13",
  title: "Stage 2 — Speaking, Listening and Responding",
  goal: "I CAN speak clearly, listen carefully, follow instructions and respond appropriately in talk.",
  standards: ["Cambridge Primary English 0058 Stage 2: speaking and listening",
  "Cambridge Primary English 0058 framework substrands: 2SLm, 2SLs, 2SLg, 2SLp, 2SLr"],
  stage: 2,
  vocabulary: [
    { term: "Audience", definition: "The people listening to you speak or perform." },
    { term: "Respond", definition: "Reply or react to what someone else says." },
    { term: "Instruction", definition: "Words that tell you what to do." },
    { term: "Take turns", definition: "Wait for your chance to speak in a conversation." },
    { term: "Performance", definition: "Reading or acting aloud for listeners." },
    { term: "Evaluate", definition: "Think about how well something was done." },
  ],
  concepts: [
    {
      id: "cipe-u1-s13-speaking",
      title: "Clear talk, careful listening and response",
      skill: "Use speaking and listening skills for everyday communication at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Making yourself understood",
            body: "Speak clearly and loudly enough for listeners. Give relevant information — answer the question asked. Use words your listener understands; adapt to who is listening (teacher vs friend). Show you are listening by responding to what was said.",
          },
          {
            heading: "Group work and performance",
            body: "In group talk, take turns, build on others' ideas and stay on the topic. For performance — reading aloud or simple drama — speak clearly, face the audience and use expression. Afterwards, evaluate: what went well, what could improve?",
          },
        ],
        keyFormulas: [
          { name: "Clear talk", statement: "audible, relevant, audience-appropriate" },
          { name: "Listening", statement: "respond to what was said, not what you expected" },
        ],
        workedExample: {
          problem: "In a group discussion about pets, how should you take part?",
          solution: "Wait for a turn, say your idea clearly, listen to others, then build on or respond to their points — e.g. 'I agree with Sam, and I think dogs need more exercise than cats.'",
        },
      },
      questions: [
        {
          id: "cipe-u1-sl2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When someone gives you an instruction like 'line up quietly', what should you do first?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Listen carefully, then do it" }, { id: "b", text: "Start talking about something else" }, { id: "c", text: "Ignore it" }, { id: "d", text: "Ask a different person" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Showing understanding", statement: "Listen and respond appropriately." }],
            steps: [{ reasoning: "Follow the instruction after listening.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Listen carefully, then do it",
          },
        },
        {
          id: "cipe-u1-sl2-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways to show you are listening during a conversation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Active listening", statement: "Respond and show attention." }],
            steps: [
              { reasoning: "e.g. look at the speaker.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. respond to what they said or ask a question.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. eye contact, relevant response",
          },
        },
        {
          id: "cipe-u1-sl2-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your friend says 'I think football is the best sport.' Write a response that shows you listened and disagrees politely.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Polite response", statement: "Acknowledge then give own view." }],
            steps: [
              { reasoning: "Acknowledges friend's point.", marks: 1, markCode: "AO2" },
              { reasoning: "Gives own different view politely.", marks: 1, markCode: "AO2" },
              { reasoning: "Full sentence response.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'I see why you like it, but I think swimming is better because…'",
          },
        },
        {
          id: "cipe-u1-sl2-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Your class is preparing a short performance of a story. (a) Describe two ways to speak clearly to the audience. (b) Explain why taking turns matters in group rehearsal. (c) Give an example of building on someone else's idea in discussion. (d) After performing, write two sentences evaluating what went well and what could improve. (e) Why is it important to adapt how you speak for different listeners?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Speaking and listening", statement: "Clarity, turn-taking, building, evaluating, adapting." }],
            steps: [
              { reasoning: "(a) Two valid clarity techniques (volume, pace, facing audience).", marks: 1, markCode: "AO2" },
              { reasoning: "(b) Turn-taking lets everyone contribute and avoids confusion.", marks: 1, markCode: "AO2" },
              { reasoning: "(c) Example extends another's idea.", marks: 1, markCode: "AO2" },
              { reasoning: "(d) Two evaluative sentences (positive + improvement).", marks: 2, markCode: "AO3" },
              { reasoning: "(e) Different audiences need different language/detail.", marks: 1, markCode: "AO3" },
              { reasoning: "All parts addressed with appropriate detail.", marks: 1, markCode: "AO3" },
              { reasoning: "Accurate use of discussion/performance vocabulary.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Clear delivery, turn-taking, building on ideas, self-evaluation, audience adaptation.",
            levels: [
              { level: "3", marks: "7-8", descriptor: "All parts covered with clear, audience-aware detail and accurate vocabulary." },
              { level: "2", marks: "4-6", descriptor: "Most parts covered with some relevant detail; evaluation present but brief." },
              { level: "1", marks: "1-3", descriptor: "Limited coverage; few valid points; little detail." },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-sl2-notes",
      title: "Speaking and listening — notes",
      summary: "Speak clearly for the audience, take turns, build on others' ideas, evaluate performances.",
      sections: [
        { heading: "Clear talk", body: "Volume, pace, facing the listener, relevant content." },
        { heading: "Listening", body: "Respond to what was actually said; show attention." },
      ],
    },
  ],
};
