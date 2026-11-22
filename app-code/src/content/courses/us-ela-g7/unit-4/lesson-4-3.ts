import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const DEBATETRANS: TextExtract = {
  title: "Transcript: Should the School Day Start Later?",
  author: "Recorded for class discussion",
  text: "Teacher: Our topic today is whether school should start later in the morning. Who wants to begin?\n\nSam: Yes, it should. Sleep researchers say teenagers' bodies aren't ready to wake up early, so a later start would help us focus better.\n\nRiley: I'm not convinced. If school starts later, it ends later, and then sports and homework run into the evening. We'd just be trading morning tiredness for evening stress.\n\nSam: That's a fair point, but studies show later start times improve attendance and grades — it might actually save time because we'd waste less of it being tired.\n\nRiley: But 'studies show' isn't proof. Which studies? How big were they? A few schools tried it and went back.\n\nSam: I can look up the research tonight. But even without perfect data, doesn't common sense say a rested student learns better?\n\nTeacher: Both of you are doing something important — Sam is citing research, and Riley is asking whether the evidence is strong enough. Let's keep both moves going.",
};

const EVALUATENOTE: TextExtract = {
  title: "Evaluating What Someone Says",
  author: "Written for Akademik Space",
  text: "In a discussion, listening is only half the job. The other half is evaluating what you hear — not to attack people, but to test whether their reasoning holds up.\n\nStrong evaluation asks three questions. First: what is the claim? 'School should start later' is a claim; 'I am tired' is a feeling. Claims can be tested; feelings can only be acknowledged.\n\nSecond: what evidence supports it? 'Sleep researchers say' is a claim about evidence. A strong response asks which researchers, what they found, and whether other evidence disagrees.\n\nThird: are there hidden assumptions? If someone argues that later start times are better because students are tired in the morning, they assume tiredness is the main problem — but maybe the real problem is homework load or screen time. Finding the assumption lets you test it.",
};

export const lesson43: Lesson = {
  id: "ela7-u4-lesson-4-3",
  code: "4-3",
  title: "Evaluating Reasoning in Discussion",
  goal: "I CAN evaluate the reasoning of others by identifying claims, testing evidence, and checking assumptions.",
  standards: ["SL.7.1d", "SL.7.3", "SL.7.6"],
  vocabulary: [
    {
      term: "Claim",
      definition: "A statement someone wants others to accept as true.",
    },
    {
      term: "Evidence",
      definition: "Facts, examples, or research used to support a claim.",
    },
    {
      term: "Assumption",
      definition: "Something taken for granted that may or may not be true.",
    },
    {
      term: "Counterargument",
      definition: "A reason that works against a claim.",
    },
    {
      term: "Reasoning",
      definition: "The logical connection between evidence and claim.",
    },
    {
      term: "Evaluation",
      definition: "Judging how strong a claim and its support are.",
    },
  ],
  concepts: [
    {
      id: "ela7-u4-eval",
      title: "Claims, evidence, and assumptions",
      skill:
        "Test what someone says by separating the claim, checking the evidence, and finding hidden assumptions.",
      lesson: {
        sections: [
          {
            heading: "Claim versus feeling",
            body: "The first step in evaluating is identifying the actual **claim** — the thing the person wants you to believe. 'I am tired in the morning' is a feeling; 'school should start later' is a claim. Feelings deserve acknowledgment but cannot be argued with. Claims can be tested: is the evidence strong? Are there counterarguments? Does the reasoning make sense?",
          },
          {
            heading: "Testing evidence and assumptions",
            body: "'Sleep researchers say' sounds authoritative but hides questions: which researchers? how many students? over how long? Strong evaluation asks for specifics. Then look for **assumptions** — the unspoken beliefs the argument needs to be true. If tiredness is assumed to be the only problem, the argument ignores homework load, screen time, or transportation.",
          },
        ],
        keyFormulas: [
          {
            name: "Evaluation questions",
            statement:
              "What is the claim? What evidence supports it? What is assumed?",
          },
          {
            name: "Strong evidence",
            statement:
              "Specific, recent, and from credible sources — not just 'experts say'.",
          },
          {
            name: "Assumption test",
            statement:
              "Ask what must be true for the argument to work; then ask if it is.",
          },
        ],
        workedExample: {
          problem:
            "Riley challenges Sam's claim that 'studies show' later start times help. What two evaluation moves is Riley making?",
          solution:
            "First, Riley tests the evidence: 'Which studies? How big were they? A few schools tried it and went back.' He is asking whether the research is real and strong enough. Second, he raises a counterargument — later start times push homework and sports into the evening — which tests whether the claimed benefit outweighs the cost.",
        },
      },
      questions: [
        {
          id: "ela7-u4-eval-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DEBATETRANS,
          stem: "What is Sam's main claim in the discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sports practice should be shorter" },
              { id: "b", text: "Homework takes too long" },
              { id: "c", text: "Students are tired in the morning" },
              {
                id: "d",
                text: "School should start later because it would help students focus",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identifying claims",
                statement:
                  "A claim is what the speaker wants you to believe or do.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sam argues school should start later and gives a reason — better focus — so the claim combines position and justification.",
                evidence: "school should start later",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. The claim is that school should start later, supported by the focus argument.",
            commonErrors: [
              "Choosing (a) — tiredness is evidence, not the claim itself.",
            ],
          },
        },
        {
          id: "ela7-u4-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DEBATETRANS,
          stem: "Riley asks, 'Which studies? How big were they?' Explain what this question tests about Sam's evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Testing evidence",
                statement:
                  "Strong evaluation asks whether evidence is specific and credible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Riley is checking whether Sam's 'studies show' is a real, identifiable body of research or a vague appeal.",
                evidence:
                  "studies show later start times improve attendance and grades",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'How big were they?' tests whether the studies involved enough students to be convincing — small or flawed studies are weaker evidence.",
                evidence: "A few schools tried it and went back.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "This is evaluation, not dismissal — Riley is asking Sam to strengthen the claim with specifics.",
                evidence: "I'm not convinced.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Riley tests whether the studies are real, specific, and large enough to be convincing — turning 'studies show' from a slogan into a checkable claim.",
            commonErrors: [
              "Saying Riley is just being negative — he is testing the strength of the evidence.",
            ],
          },
        },
        {
          id: "ela7-u4-eval-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EVALUATENOTE,
          stem: "A classmate argues: 'We should ban phones at school because phones distract students.' Using the note, identify the claim, one piece of evidence that would strengthen it, and one hidden assumption it makes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Deconstructing arguments",
                statement:
                  "Separate claim, evidence, and assumptions before judging.",
              },
              {
                kind: "skill",
                name: "Specific evaluation",
                statement:
                  "Strengthen or test arguments with concrete, checkable points.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Claim: banning phones would improve student focus — the policy is the claim, distraction is the reason.",
                evidence: "what is the claim?",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Strengthening evidence: research showing schools with phone bans have higher test scores, or surveys showing students check phones dozens of times a day.",
                evidence: "what evidence supports it?",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Hidden assumption: that phones are the main cause of distraction — maybe the real causes are boring lessons, sleep deprivation, or lack of engagement.",
                evidence: "hidden assumptions",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The assumption matters because if phones are not the main cause, banning them may not fix the problem.",
                evidence: "tiredness is the main problem",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Claim: banning phones would improve focus. Stronger evidence: research comparing schools with and without bans. Hidden assumption: that phones are the main cause of distraction — the argument ignores other possible causes.",
            commonErrors: [
              "Treating the whole sentence as the claim without separating policy from reason.",
              "Naming an assumption that is actually stated ('phones distract').",
            ],
          },
        },
        {
          id: "ela7-u4-eval-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DEBATETRANS,
          parts: [
            {
              label: "a",
              prompt:
                "Quote one sentence where Sam supports his claim with evidence.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Explain what makes that evidence stronger or weaker than Riley's challenge.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence comparison",
                statement:
                  "Judge whether evidence is specific enough to be convincing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Sleep researchers say teenagers' bodies aren't ready to wake up early' or 'studies show later start times improve attendance and grades'.",
                evidence:
                  "studies show later start times improve attendance and grades",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Sam's evidence is appealing but vague — it does not name the studies or their size; Riley's challenge forces Sam to make the evidence specific, which is stronger evaluation.",
                evidence: "Which studies? How big were they?",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Studies show later start times improve attendance and grades.' (b) Sam's evidence sounds credible but is vague; Riley's demand for specifics tests whether it can actually convince.",
            commonErrors: [
              "Claiming Sam's evidence is wrong — the issue is that it is not yet specific enough.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u4-discussion",
      title: "Discussion etiquette and roles",
      skill:
        "Participate respectfully, use discussion roles, and help the group reach useful conclusions.",
      lesson: {
        sections: [
          {
            heading: "Respectful disagreement",
            body: "Strong discussions depend on **respectful disagreement** — attacking ideas, not people. 'I see it differently because...' keeps the focus on reasoning. 'You're wrong' shuts down thinking. Even when you strongly disagree, acknowledge the other person's point first: 'That's a fair concern about evenings, but...' This does not weaken your position; it makes people willing to hear it.",
          },
          {
            heading: "Roles that keep discussion moving",
            body: "Every group needs someone to **facilitate** (keep the group on the main question), someone to **take notes** (record ideas and decisions), and someone to **summarize** (state what the group agreed). These roles rotate — they are tools, not status. The best participants notice what the group needs and step into that role without being asked.",
          },
        ],
        keyFormulas: [
          {
            name: "Respectful disagreement",
            statement:
              "Attack the reasoning, not the person — always acknowledge the point first.",
          },
          {
            name: "Discussion roles",
            statement:
              "Facilitator, note-taker, summarizer — rotate so everyone contributes.",
          },
          {
            name: "Useful conclusion",
            statement:
              "End by stating what was decided, what remains uncertain, and what to research next.",
          },
        ],
        workedExample: {
          problem:
            "In the school-start-time debate, how does the teacher's final comment help the discussion?",
          solution:
            "The teacher names the two good moves the students made — Sam citing research and Riley testing evidence — and says 'let's keep both moves going.' This validates both styles of participation and models that strong discussion combines building ideas with evaluating them.",
        },
      },
      questions: [
        {
          id: "ela7-u4-discussion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DEBATETRANS,
          stem: "What does the teacher mean by 'keep both moves going'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The group should both support claims with evidence and question weak evidence",
              },
              { id: "b", text: "The debate should end now" },
              {
                id: "c",
                text: "Sam should keep talking and Riley should stop",
              },
              { id: "d", text: "Students should research phones instead" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discussion moves",
                statement:
                  "Strong discussion combines building and evaluating.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sam cited research (building a claim) and Riley questioned the evidence (evaluating it) — the teacher wants both behaviors continued.",
                evidence:
                  "Sam is citing research, and Riley is asking whether the evidence is strong enough",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Both supporting claims and testing evidence are valuable discussion moves.",
            commonErrors: [
              "Thinking 'both moves' means both students should agree with each other.",
            ],
          },
        },
        {
          id: "ela7-u4-discussion-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DEBATETRANS,
          stem: "Rewrite Riley's line 'But studies show isn't proof' in a way that disagrees respectfully while still challenging Sam's evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Respectful disagreement",
                statement:
                  "Acknowledge the point, then challenge the reasoning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The rewrite should acknowledge Sam's research claim before questioning it — e.g., 'That's interesting research, but can you tell us which studies and how strong they are?'",
                evidence: "But 'studies show' isn't proof",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It should target the evidence quality, not Sam personally — 'the studies' or 'that evidence' rather than 'you'.",
                evidence: "Which studies? How big were they?",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It should leave room for Sam to respond with better evidence rather than ending the exchange.",
                evidence: "A few schools tried it and went back.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'That's an interesting point about the research. Can you tell us which studies you mean and how strong they are?' This challenges the evidence while respecting Sam's contribution.",
            commonErrors: [
              "Keeping the dismissive tone ('isn't proof') while adding 'please' — the phrasing itself must change.",
            ],
          },
        },
        {
          id: "ela7-u4-discussion-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DEBATETRANS,
          stem: "Your group must decide whether to recommend a later school start to the principal. Describe how each of these roles would contribute: facilitator, note-taker, summarizer. Then explain why rotating roles matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discussion roles",
                statement:
                  "Each role performs a specific function that keeps the group productive.",
              },
              {
                kind: "skill",
                name: "Role rotation",
                statement:
                  "Rotating roles builds skills and prevents one person dominating.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Facilitator: keeps the group on the start-time question, ensures quieter members speak, and parks off-topic ideas.",
                evidence: "keeps the group on the main question",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Note-taker: records the evidence for and against, the questions raised, and any agreements reached — so the group does not repeat itself.",
                evidence: "writes down ideas, questions, and decisions",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Summarizer: states what the group decided — e.g., 'We recommend a pilot program and want more research on homework impact' — and checks everyone agrees.",
                evidence: "restate what the group has decided",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rotation matters because it builds everyone's skills and prevents the same person always doing the work — the note says roles are 'tools', not jobs.",
                evidence: "They are tools.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Facilitator keeps the group on topic, note-taker records evidence and decisions, summarizer states the conclusion. Rotating matters because it builds everyone's skills and shares the work fairly.",
            commonErrors: [
              "Describing roles as permanent jobs rather than rotating tools.",
            ],
          },
        },
        {
          id: "ela7-u4-discussion-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DEBATETRANS,
          parts: [
            {
              label: "a",
              prompt:
                "Identify one strength and one weakness in Sam's reasoning.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Identify one strength and one weakness in Riley's reasoning.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balanced evaluation",
                statement: "Judge both sides of a discussion fairly.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sam's strength: he cites research and offers a reasoned benefit (better focus). Weakness: his evidence is vague — he does not name the studies or address evening costs.",
                evidence:
                  "studies show later start times improve attendance and grades",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Riley's strength: he raises a real counterargument (evening stress) and tests evidence quality. Weakness: he does not offer evidence for his own claim that later ends cause more stress.",
                evidence: "trading morning tiredness for evening stress",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Sam cites research but his evidence is vague. (b) Riley raises a strong counterargument and tests evidence, but offers no proof for the evening-stress claim.",
            commonErrors: [
              "Praising one side and attacking the other without balance.",
            ],
          },
        },
      ],
    },
  ],
};
