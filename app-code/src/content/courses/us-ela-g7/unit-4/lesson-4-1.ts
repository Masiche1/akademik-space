import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const TREEDEBATE: TextExtract = {
  title: "Transcript: Should Our School Plant a Community Garden?",
  author: "Recorded for class discussion",
  text: "Teacher: Our class has been asked to advise the principal on whether the school should convert the empty lot behind the gym into a community garden. Who would like to start?\n\nMaya: I think we should do it. A garden would give us fresh vegetables for the cafeteria, and students could learn where food comes from.\n\nJordan: But who would maintain it over the summer? Last year's club lost half its members after June.\n\nMaya: That's a real problem, but the neighborhood association said they could adopt the garden.\n\nJordan: Okay, that's better. But what about the cost of soil and tools? The budget meeting is next week.\n\nPriya: I have a different question. Wouldn't a garden take away space we could use for a basketball court? The gym is already crowded at lunch.\n\nTeacher: Good point, Priya. Let's put that on our list of questions to research.",
};

const ROBOTNOTE: TextExtract = {
  title: "Note on Group Discussion Roles",
  author: "Written for Akademik Space",
  text: "In a strong group discussion, every member has a job, even if the job changes from meeting to meeting.\n\nThe facilitator keeps the group on the main question and makes sure quieter members get a turn. The note-taker writes down ideas, questions, and decisions so the group does not repeat itself. The evidence-gatherer brings facts, examples, or research to support claims. The summarizer restates what the group has decided and checks that everyone agrees.\n\nThese roles are not jobs to be proud of or blamed for. They are tools. A discussion works best when members notice what the group needs next and step into that role, even if it is not 'their' turn.",
};

export const lesson41: Lesson = {
  id: "ela7-u4-lesson-4-1",
  code: "4-1",
  title: "Collaborative Discussions: Building on Ideas",
  goal: "I CAN participate in collaborative discussions by building on others' ideas, posing relevant questions, and staying focused on the topic.",
  standards: ["SL.7.1", "SL.7.1a", "SL.7.1b", "SL.7.1c", "SL.7.1d"],
  vocabulary: [
    {
      term: "Collaborative discussion",
      definition:
        "A conversation where group members work together toward a shared goal.",
    },
    {
      term: "Building on an idea",
      definition: "Adding to, extending, or improving what someone else said.",
    },
    {
      term: "On topic",
      definition: "Staying focused on the question or issue being discussed.",
    },
    {
      term: "Facilitator",
      definition:
        "The group member who keeps discussion moving and ensures everyone participates.",
    },
    {
      term: "Elaboration",
      definition: "Adding reasons, examples, or details to a point.",
    },
    {
      term: "Consensus",
      definition: "General agreement reached by the whole group.",
    },
  ],
  concepts: [
    {
      id: "ela7-u4-building",
      title: "Building on others' ideas",
      skill:
        "Extend, question, and connect what classmates say instead of just stating your own opinion.",
      lesson: {
        sections: [
          {
            heading: "More than taking turns",
            body: "A collaborative discussion is not a series of separate speeches. Strong participants **build on** what others say: they add reasons, give examples, point out problems, or connect two ideas that seemed unrelated. When Maya says a garden would teach students where food comes from, Jordan's reply is stronger because it accepts that point and raises a new problem about maintenance.",
          },
          {
            heading: "Ways to build",
            body: "Useful moves include: agreeing and extending ('Yes, and we could also...'), respectfully disagreeing with a reason ('I see it differently because...'), asking a clarifying question ('What do you mean by maintenance?'), and linking ideas ('That connects to what Priya said about space'). Avoid simply repeating your own point louder.",
          },
        ],
        keyFormulas: [
          {
            name: "Building moves",
            statement:
              "Extend, question, connect — always respond to what was just said.",
          },
          {
            name: "Evidence in discussion",
            statement:
              "Support claims with facts, examples, or reasons from the text or your own experience.",
          },
          {
            name: "Staying on topic",
            statement:
              "Every comment should connect back to the question the group is answering.",
          },
        ],
        workedExample: {
          problem:
            "In the garden debate, how does Jordan build on Maya's first point?",
          solution:
            "Maya claims a garden would teach students where food comes from and supply the cafeteria. Jordan does not ignore this; he accepts the benefit but adds a challenge: 'who would maintain it over the summer?' He then improves his own point when Maya mentions the neighborhood association, saying 'Okay, that's better. But what about the cost of soil and tools?' He is testing each idea against practical problems rather than just repeating opinions.",
        },
      },
      questions: [
        {
          id: "ela7-u4-building-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TREEDEBATE,
          stem: "Which statement best describes what Jordan does after Maya's first comment?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "He accepts the idea but raises a practical problem with it.",
              },
              {
                id: "b",
                text: "He repeats Maya's exact words to show he agrees.",
              },
              {
                id: "c",
                text: "He ignores Maya's idea and talks about something else.",
              },
              {
                id: "d",
                text: "He changes the subject to the cafeteria menu.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Building on ideas",
                statement: "A strong response adds to or tests what was said.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Jordan accepts the garden idea but questions whether it can be maintained, which builds on Maya's point rather than ignoring it.",
                evidence: "who would maintain it over the summer?",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. He accepts the idea but raises a practical problem — that is building, not ignoring.",
            commonErrors: [
              "Choosing (a) because Jordan disagrees, missing that disagreement can still build on an idea.",
            ],
          },
        },
        {
          id: "ela7-u4-building-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: TREEDEBATE,
          stem: "Write a sentence in which Priya builds on the discussion so far. Then explain what makes your sentence 'build' rather than just 'add your opinion.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Building language",
                statement:
                  "A building sentence references what was already said before adding something new.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sentence should reference an earlier point (e.g., the garden's benefits or maintenance) before adding the space concern.",
                evidence:
                  "Wouldn't a garden take away space we could use for a basketball court?",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It should use connecting language such as 'but', 'also', 'that connects to', or 'building on that'.",
                evidence: "The gym is already crowded at lunch.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The explanation should note that Priya's point responds to the group's direction rather than starting a new topic.",
                evidence:
                  "Let's put that on our list of questions to research.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Building on Maya's point about the garden's benefits, wouldn't it take space the gym already needs?' This builds because it names Maya's idea first, then adds a related concern.",
            commonErrors: [
              "Writing a sentence that ignores earlier comments entirely.",
              "Saying 'I think' without connecting to anyone else's point.",
            ],
          },
        },
        {
          id: "ela7-u4-building-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ROBOTNOTE,
          stem: "A group member says: 'I think we should have a garden.' Another member says: 'No, gardens are too much work.' Using the note, explain how the second member could respond in a way that builds the discussion instead of shutting it down. Cite two ideas from the note.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Applying discussion roles",
                statement:
                  "Use the note's guidance to turn disagreement into progress.",
              },
              {
                kind: "skill",
                name: "Evidence and explanation",
                statement:
                  "Support the suggested response with specific ideas from the text.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Instead of a flat 'no', the member should acknowledge the first point and add a question or condition.",
                evidence: "questions, and decisions",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The note says members should notice what the group needs — here, the group needs to test whether maintenance is a real problem.",
                evidence: "step into that role",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "A building response might be: 'Gardens can be a lot of work — who would maintain it, and could the neighborhood help?' This keeps the idea alive while raising the real issue.",
                evidence: "not repeat itself",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The note also warns against letting one voice dominate — building keeps quieter members involved.",
                evidence: "makes sure quieter members get a turn",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "A building response accepts the idea and tests it: 'Gardens can be a lot of work — who would maintain it, and could neighbors help?' This follows the note's advice to notice what the group needs, ask questions, and avoid shutting down ideas or repeating the same argument.",
            commonErrors: [
              "Suggesting the member should just agree to keep peace.",
              "Ignoring the note and giving generic advice about being nice.",
            ],
          },
        },
        {
          id: "ela7-u4-building-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: TREEDEBATE,
          parts: [
            {
              label: "a",
              prompt:
                "Quote one line where a speaker builds on another speaker's idea.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain how that line builds rather than ignores.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identifying building",
                statement:
                  "Look for responses that reference and extend earlier points.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Acceptable quotes include 'Okay, that's better. But what about the cost of soil and tools?' or 'Wouldn't a garden take away space...'.",
                evidence: "Okay, that's better.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The speaker first acknowledges the other person's point ('that's better'), then adds a new concern — this extends the idea rather than replacing it.",
                evidence: "But what about the cost of soil and tools?",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Okay, that's better. But what about the cost of soil and tools?' (b) Jordan first accepts Maya's point about the neighborhood association, then adds a new practical concern about cost — extending the discussion instead of ignoring it.",
            commonErrors: [
              "Quoting a line that introduces a brand-new topic unrelated to earlier points.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u4-focus",
      title: "Staying on topic and posing questions",
      skill:
        "Keep discussion focused on the main question and ask questions that move the group forward.",
      lesson: {
        sections: [
          {
            heading: "Staying on topic",
            body: "Every discussion has a **main question** — the thing the group is trying to decide or understand. Strong participants notice when the conversation drifts and steer it back: 'That's interesting, but does it answer whether we should plant the garden?' or 'Let's add that to our question list.' Staying on topic does not mean ignoring good ideas — it means parking them and returning to the main question.",
          },
          {
            heading: "Questions that move discussion forward",
            body: "The best questions in a discussion are **open** (they cannot be answered yes or no), **specific** (they point at a real decision or fact), and **answerable** (the group could find out). 'Who would maintain the garden?' is better than 'Is a garden good?' because it pushes toward a solution. The facilitator's job is often to turn comments into questions the group can research or decide.",
          },
        ],
        keyFormulas: [
          {
            name: "Main question",
            statement:
              "The single issue the group is trying to resolve — every comment should connect to it.",
          },
          {
            name: "Parked idea",
            statement:
              "A good but off-topic point noted for later so the discussion stays focused.",
          },
          {
            name: "Strong question",
            statement:
              "Open, specific, and something the group could actually answer or research.",
          },
        ],
        workedExample: {
          problem:
            "Priya asks about a basketball court while the class discusses a garden. Is her comment off-topic? How does the teacher handle it?",
          solution:
            "It is related but not central — the garden question is the main issue, and the court is a competing use of the same space. The teacher does not dismiss it; she says 'Good point, Priya. Let's put that on our list of questions to research.' This keeps the comment connected to the decision (what to do with the lot) while preventing the discussion from splitting into two separate debates.",
        },
      },
      questions: [
        {
          id: "ela7-u4-focus-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TREEDEBATE,
          stem: "What is the main question the class is trying to answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who will coach the garden club?" },
              { id: "b", text: "How much does soil cost?" },
              {
                id: "c",
                text: "Should the school convert the empty lot into a community garden?",
              },
              { id: "d", text: "Should the school build a basketball court?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Main question",
                statement: "The single issue the group is deciding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The teacher states the class was asked to advise on whether to convert the lot into a garden — that is the main question.",
                evidence:
                  "convert the empty lot behind the gym into a community garden",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. The basketball court is a related concern, not the main question.",
            commonErrors: [
              "Choosing (a) because Priya mentions it, missing that it is a sub-issue.",
            ],
          },
        },
        {
          id: "ela7-u4-focus-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: TREEDEBATE,
          stem: "The teacher says, 'Let's put that on our list of questions to research.' Explain what this technique is called and why it helps the discussion stay focused.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Parking ideas",
                statement:
                  "Acknowledge off-topic points without abandoning the main question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The technique is called 'parking' an idea — noting it for later instead of debating it now.",
                evidence: "put that on our list of questions to research",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It respects Priya's point (it is not dismissed) while keeping the group on the garden question.",
                evidence: "Good point, Priya.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It also turns the comment into a research question, which is more productive than an immediate argument.",
                evidence: "questions to research",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "It is 'parking' the idea — acknowledging it, noting it for research, and returning to the main question. This respects the speaker while keeping the discussion focused.",
            commonErrors: [
              "Calling it 'ignoring' the comment — parking is different from ignoring.",
            ],
          },
        },
        {
          id: "ela7-u4-focus-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ROBOTNOTE,
          stem: "Your group has been discussing whether to have a bake sale or a fun run to raise money. One member keeps talking about what they ate for breakfast. Using the note, describe two specific things the facilitator could say or do to bring the discussion back on topic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Facilitating focus",
                statement:
                  "The facilitator actively steers discussion back to the main question.",
              },
              {
                kind: "skill",
                name: "Applying roles",
                statement:
                  "Use the note's description of the facilitator's job to give concrete moves.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "The facilitator could restate the main question: 'We're deciding between a bake sale and a fun run — which one raises more money?'",
                evidence: "keeps the group on the main question",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "They could ask a bridging question that connects the drift back: 'Speaking of food, does that remind anyone of bake sale ideas?' — but only if it serves the topic.",
                evidence: "makes sure quieter members get a turn",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "They could 'park' the off-topic comment: 'Let's note that for later — first, what are the costs of each event?'",
                evidence: "not repeat itself",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "They could invite quieter members: 'We haven't heard from everyone — what do you think about the fun run?'",
                evidence: "step into that role",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The facilitator could restate the main question ('We're deciding between a bake sale and a fun run'), park the off-topic comment for later, or invite quieter members to weigh in — all moves that keep the group focused while staying respectful.",
            commonErrors: [
              "Saying the facilitator should just tell the member to stop talking — the note emphasizes keeping everyone involved.",
              "Giving vague advice like 'stay on topic' without concrete language.",
            ],
          },
        },
        {
          id: "ela7-u4-focus-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: TREEDEBATE,
          parts: [
            {
              label: "a",
              prompt:
                "Write one open, specific question the group could research about the garden.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why your question is stronger than 'Is a garden a good idea?'",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question quality",
                statement:
                  "Strong questions are open, specific, and answerable.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Acceptable questions: 'Who will water the garden during summer break?' or 'How much would soil and tools cost?'",
                evidence: "who would maintain it over the summer?",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The written question targets a specific decision the group can actually research or answer; 'Is a garden a good idea?' is too broad and invites opinion rather than evidence.",
                evidence: "what about the cost of soil and tools?",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Example: 'How much would soil and tools cost?' (b) It is specific and answerable with research; 'Is a garden a good idea?' is too broad and invites unsupported opinions.",
            commonErrors: ["Writing a yes/no question instead of an open one."],
          },
        },
      ],
    },
  ],
};
