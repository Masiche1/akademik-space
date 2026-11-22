import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const HOMEWORK: TextExtract = {
  title: "Let Middle Schoolers Sleep In",
  author: "Written for Akademik Space",
  text: "Every school morning, millions of seventh graders drag themselves out of bed before the sun is fully up. It is time for our schools to change that. Starting classes at 8:45 a.m. instead of 7:30 a.m. would improve student health, raise grades, and make our communities safer.\n\nFirst, consider biology. Doctors who study sleep report that teenagers' body clocks shift later during puberty, so many twelve-year-olds cannot fall asleep before 10:30 p.m. Medical groups recommend that students aged twelve to eighteen sleep eight to ten hours each night. A 7:30 start makes that nearly impossible.\n\nSecond, a later start works. When a school district in Minnesota moved its start time later, a study of its students found that attendance rose and that more students reported feeling alert in first period. Some people worry that buses and sports schedules would be difficult to change. That is true, but the cost of a few new bus routes is small compared with the benefit of healthier, more alert students.\n\nEveryone remembers being tired at school. Now we have the chance to do something about it.",
};

const LIGHTHOUSE: TextExtract = {
  title: "Keeper of the Light",
  author: "Written for Akademik Space",
  text: "I have kept the light on Gull Rock for eleven years, and I would not trade the work for any other. Each evening I climb the 94 iron steps, trim the wick, and polish the great brass lens until it shines like a second sun. People in the villages call it lonely work. They are wrong. A ship's captain who sees my beam on a black, stormy night does not feel lonely. He feels safe, and I helped to make him so.\n\nThe government report on lighthouse costs calls our stations 'a drain on the treasury' and proposes to replace us with automatic lamps. The authors of this report have never climbed these steps in a gale. A lamp cannot see a fog bank rolling in. A lamp cannot signal a stranded boat or wake the village when a vessel strikes the rocks. A keeper can.",
};

export const lesson22: Lesson = {
  id: "ela7-u2-lesson-2-2",
  code: "2-2",
  title: "Purpose and Argument",
  goal: "I CAN determine an author's purpose and point of view, and trace and evaluate the claims, reasons, and evidence in an argument.",
  standards: ["RI.7.6", "RI.7.8"],
  vocabulary: [
    {
      term: "Author's purpose",
      definition:
        "The reason an author writes: to inform, to persuade, to entertain, or to explain.",
    },
    {
      term: "Point of view",
      definition: "The author's attitude or position on a topic.",
    },
    {
      term: "Claim",
      definition: "The main position an author wants the reader to accept.",
    },
    {
      term: "Reason",
      definition: "A statement that explains why the claim is true.",
    },
    {
      term: "Evidence",
      definition:
        "Facts, statistics, examples, or expert opinions that support a reason.",
    },
    {
      term: "Relevant",
      definition: "Directly connected to and supporting the claim.",
    },
    {
      term: "Sufficient",
      definition: "Enough evidence to make the claim convincing.",
    },
  ],
  concepts: [
    {
      id: "ela7-u2-authors-purpose",
      title: "Author's purpose and point of view",
      skill:
        "Determine an author's purpose and point of view and analyze how the author responds to opposing ideas.",
      lesson: {
        sections: [
          {
            heading: "Why the author wrote it",
            body: "Every informational text has a purpose: to **inform**, to **persuade**, to **explain**, or to **entertain**. Look at the title, the first and last sentences, and the verbs the author chooses. 'It is time for our schools to change' is persuasive because it calls for action. A text can have more than one purpose, but one is usually the main one.",
          },
          {
            heading: "Point of view and responding to others",
            body: "An author's **point of view** is shown through word choice, what details the author includes, and what the author leaves out. Strong authors also respond to other viewpoints. They acknowledge an opposing idea, then answer it with a reason or evidence. Look for phrases such as 'some people worry' or 'critics argue', then check how the author replies.",
          },
        ],
        keyFormulas: [
          {
            name: "Purpose",
            statement:
              "The main reason the author wrote the text: to inform, persuade, explain, or entertain.",
          },
          {
            name: "Point of view",
            statement:
              "The author's position, shown by word choice and selected details.",
          },
          {
            name: "Response to opposing views",
            statement:
              "The author names a different position and answers it, which makes the argument stronger.",
          },
        ],
        workedExample: {
          problem:
            "What is the author's purpose in 'Keeper of the Light', and how does the author reveal a point of view? (3 marks)",
          solution:
            "The main purpose is to persuade readers that human lighthouse keepers are valuable. The point of view is shown by emotional word choice: the work is described as making sailors 'safe', and the lamp is shown as unable to do what a keeper can. The author also responds to the opposing view in the government report, which calls the stations 'a drain on the treasury', by listing what a lamp cannot do.",
        },
      },
      questions: [
        {
          id: "ela7-u2-authors-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: HOMEWORK,
          stem: "What is the author's main purpose in 'Let Middle Schoolers Sleep In'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To persuade readers that schools should start later",
              },
              {
                id: "b",
                text: "To entertain readers with a story about school mornings",
              },
              { id: "c", text: "To explain how buses are scheduled" },
              { id: "d", text: "To describe the history of the school day" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identifying purpose",
                statement:
                  "Use the title, claim, and calls to action to decide why the author wrote.",
              },
            ],
            steps: [
              {
                reasoning: "The author states a position and calls for change.",
                evidence: "It is time for our schools to change that",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** The author argues for a later start time and gives reasons. Buses and history are only mentioned briefly.",
            commonErrors: [
              "Choosing a topic mentioned in the text (buses) rather than the purpose of the whole text.",
            ],
          },
        },
        {
          id: "ela7-u2-authors-purpose-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: HOMEWORK,
          stem: "In paragraph 3, the author writes: 'Some people worry that buses and sports schedules would be difficult to change.' How does the author respond to this opposing view?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The author ignores it and changes the subject.",
              },
              {
                id: "b",
                text: "The author agrees that the start time should not change.",
              },
              {
                id: "c",
                text: "The author says buses are not part of the issue.",
              },
              {
                id: "d",
                text: "The author admits the problem exists but argues that the benefits outweigh the cost.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Acknowledging a counterclaim",
                statement:
                  "A strong author admits an opposing point, then answers it.",
              },
            ],
            steps: [
              {
                reasoning: "The author accepts that the concern is real.",
                evidence: "That is true",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The author then argues that the cost is small compared to the benefit.",
                evidence:
                  "the cost of a few new bus routes is small compared with the benefit",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(d)** The author concedes the difficulty and then answers it by weighing cost against benefit. The author does not ignore the concern or change position.",
            commonErrors: [
              "Choosing (c) because the sentence begins by agreeing with the worry.",
            ],
          },
        },
        {
          id: "ela7-u2-authors-purpose-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: LIGHTHOUSE,
          stem: "Explain how the author's word choice reveals a point of view about lighthouse keepers. Use at least two quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Word choice and point of view",
                statement:
                  "Strong or emotional words reveal the author's attitude.",
              },
              {
                kind: "skill",
                name: "Embedding evidence",
                statement: "Use short quotations and explain what they show.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The keeper describes the work with pride and devotion, showing a positive view of the job.",
                evidence: "I would not trade the work for any other",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The image of the polished lens as 'a second sun' suggests the keeper sees the light as powerful and almost beautiful.",
                evidence: "shines like a second sun",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Dismissive wording about the report shows scorn for people who have never done the work.",
                evidence:
                  "The authors of this report have never climbed these steps in a gale",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(6, [6, 4, 2]),
            finalAnswer:
              "The author presents keepers as proud, essential workers. The statement 'I would not trade the work for any other' shows devotion, and the lens that 'shines like a second sun' makes the light seem powerful and almost beautiful. The sharp remark that report writers 'have never climbed these steps in a gale' reveals scorn for those who judge the job without experience.",
            commonErrors: [
              "Retelling the passage without commenting on specific words.",
              "Using only one quotation.",
            ],
          },
        },
        {
          id: "ela7-u2-authors-purpose-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: LIGHTHOUSE,
          stem: "Answer all parts of this question about 'Keeper of the Light'.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the opposing viewpoint that the author responds to.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the author answers the viewpoint that the work is 'lonely'.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Analyze how the author uses a point of view and choices of detail to persuade readers that lamps cannot replace keepers.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Responding to opposing views",
                statement:
                  "The author names a different position, then answers it with reasons.",
              },
              {
                kind: "technique",
                name: "Selection of detail",
                statement:
                  "Authors choose details that support their point of view.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The government report says the stations are costly and should be replaced.",
                evidence: "a drain on the treasury",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "The report proposes automatic lamps in place of keepers.",
                evidence: "replace us with automatic lamps",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The author flatly rejects the idea that the job is lonely.",
                evidence: "They are wrong",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The author reframes the job around the safety of the captain, giving a sense of purpose that outweighs loneliness.",
                evidence: "He feels safe, and I helped to make him so",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The author describes tasks a lamp cannot do, such as watching for fog.",
                evidence: "A lamp cannot see a fog bank rolling in",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Repetition of 'A lamp cannot' builds a list that gets more convincing with each example.",
                evidence: "A lamp cannot signal a stranded boat",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The strongest example is last and raises the stakes to saving lives.",
                evidence: "wake the village when a vessel strikes the rocks",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The short closing sentence sums up the claim confidently.",
                evidence: "A keeper can",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: rubric(8, [7, 5, 3], "c"),
            finalAnswer:
              "(a) The report calls the stations 'a drain on the treasury' and wants to replace keepers with automatic lamps. (b) The author says 'They are wrong' and points to the captain, who 'feels safe', so the job has a purpose beyond loneliness. (c) The author persuades by choosing details that stress what lamps cannot do, repeating 'A lamp cannot' in a growing list that ends with lives at risk, and finishing with the blunt 'A keeper can'.",
            commonErrors: [
              "In (a), giving the author's own view instead of the opposing one.",
              "In (c), listing the details without explaining how they persuade.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u2-evaluating-arguments",
      title: "Tracing and evaluating arguments",
      skill:
        "Trace an argument's claim, reasons, and evidence, and evaluate whether the evidence is relevant and sufficient.",
      lesson: {
        sections: [
          {
            heading: "Tracing the argument",
            body: "To trace an argument, find the **claim** first, usually near the start or the end. Then list each **reason** and the **evidence** that backs it. A reason answers 'why should I agree?'. Evidence answers 'how do we know?'. In 'Let Middle Schoolers Sleep In', the claim is that classes should start later; one reason is biology, and its evidence is what doctors report about teenage body clocks.",
          },
          {
            heading: "Evaluating the support",
            body: "Evaluate evidence with two questions. Is it **relevant**: does it directly support the claim? Is it **sufficient**: is there enough of it from reliable sources? A single story is weaker than a study. Be alert to claims with no support at all and to appeals that only play on feelings. 'Everyone remembers being tired at school' is relatable, but it is not evidence that a later start works.",
          },
        ],
        keyFormulas: [
          {
            name: "Claim",
            statement: "The position the author wants the reader to accept.",
          },
          {
            name: "Relevant evidence",
            statement:
              "Evidence that directly supports the reason it is used for.",
          },
          {
            name: "Sufficient evidence",
            statement:
              "Enough reliable evidence to make the reasoning convincing.",
          },
        ],
        workedExample: {
          problem:
            "Is the evidence in paragraph 3 of 'Let Middle Schoolers Sleep In' relevant and sufficient? (3 marks)",
          solution:
            "The evidence is relevant because it comes from a district that moved its start time later, which directly tests the claim that a later start works. It shows two specific results: attendance rose and more students were alert. It is only partly sufficient, however, because it describes one district; evidence from several districts would be stronger.",
        },
      },
      questions: [
        {
          id: "ela7-u2-evaluating-arguments-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: HOMEWORK,
          stem: "Which sentence states the author's claim?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Starting classes at 8:45 a.m. instead of 7:30 a.m. would improve student health, raise grades, and make our communities safer.",
              },
              { id: "b", text: "Everyone remembers being tired at school." },
              {
                id: "c",
                text: "Medical groups recommend that students aged twelve to eighteen sleep eight to ten hours.",
              },
              {
                id: "d",
                text: "Every school morning, millions of seventh graders drag themselves out of bed.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Claim",
                statement:
                  "The main position the author wants the reader to accept.",
              },
            ],
            steps: [
              {
                reasoning:
                  "This sentence states what the author wants and what will result.",
                evidence:
                  "would improve student health, raise grades, and make our communities safer",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** It is the central position. (b) is evidence, (a) is an attention-grabbing opening, and (d) is an emotional appeal.",
            commonErrors: [
              "Choosing the opening sentence because it comes first.",
            ],
          },
        },
        {
          id: "ela7-u2-evaluating-arguments-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: HOMEWORK,
          stem: "Which detail from the passage is NOT relevant evidence for the claim that a later start time would improve student health?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teen body clocks shift later during puberty." },
              {
                id: "b",
                text: "More students felt alert in first period after a district changed its start time.",
              },
              { id: "c", text: "Everyone remembers being tired at school." },
              { id: "d", text: "Students need eight to ten hours of sleep." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Relevance",
                statement:
                  "Relevant evidence directly supports the claim with facts or expert findings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The other choices give scientific or study-based facts about sleep and alertness.",
                evidence: "Medical groups recommend",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The remark about being tired is a shared feeling, not a fact showing that a later start works.",
                evidence: "Everyone remembers being tired at school",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** It appeals to common experience but is not evidence. The other three give research or expert recommendations.",
            commonErrors: ["Treating a relatable statement as evidence."],
          },
        },
        {
          id: "ela7-u2-evaluating-arguments-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: HOMEWORK,
          stem: "Evaluate the author's second reason, that 'a later start works'. Is the evidence relevant and sufficient? Support your answer with details from the passage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating evidence",
                statement:
                  "Judge whether evidence is relevant, specific, and sufficient.",
              },
              {
                kind: "technique",
                name: "Counterclaim",
                statement:
                  "Answering an opposing view strengthens an argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The evidence is relevant: it comes from a district that actually changed its start time.",
                evidence:
                  "a school district in Minnesota moved its start time later",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The results are specific, giving two outcomes that match the claim.",
                evidence: "attendance rose",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evaluation: it is limited because it refers to one district, so more examples would be more convincing, though the author does answer the cost concern.",
                evidence: "the cost of a few new bus routes is small",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: rubric(6, [6, 4, 2]),
            finalAnswer:
              "The evidence is relevant because a Minnesota district really did move its start time, and attendance rose and more students felt alert. It is only partly sufficient, since it comes from one district. The author strengthens the reason by answering the concern about buses, but additional studies would make it more convincing.",
            commonErrors: [
              "Saying the evidence is good without explaining why.",
              "Ignoring the limits of using a single example.",
            ],
          },
        },
        {
          id: "ela7-u2-evaluating-arguments-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: HOMEWORK,
          stem: "Answer all parts of this question about 'Let Middle Schoolers Sleep In'.",
          parts: [
            {
              label: "a",
              prompt: "State the author's claim in your own words.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Identify the author's two reasons and the evidence used for each.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Evaluate how convincingly the author supports the claim. Consider relevance, sufficiency, and any appeals that are not evidence.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tracing an argument",
                statement:
                  "List the claim, then each reason and the evidence behind it.",
              },
              {
                kind: "skill",
                name: "Evaluating",
                statement:
                  "Judge strengths and weaknesses of the support with textual evidence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Schools should start the day later for middle school students.",
                evidence: "Starting classes at 8:45 a.m. instead of 7:30 a.m.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Reason one is biology; evidence is that teenage body clocks shift later and medical groups recommend eight to ten hours of sleep.",
                evidence: "body clocks shift later during puberty",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Reason two is that a later start works; evidence is the Minnesota study.",
                evidence: "attendance rose",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Strength: expert and medical sources make the biology reason credible.",
                evidence: "Medical groups recommend",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Strength: the Minnesota study is specific and relevant.",
                evidence:
                  "more students reported feeling alert in first period",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Strength: the author answers an opposing view about bus and sports schedules.",
                evidence:
                  "Some people worry that buses and sports schedules would be difficult to change",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Weakness: the claim that grades would rise and communities be safer is promised but never supported with evidence.",
                evidence: "raise grades, and make our communities safer",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Weakness: the ending is an emotional appeal rather than evidence, and the study covers only one district.",
                evidence: "Everyone remembers being tired at school",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: [...rubric(10, [9, 7, 4], "c")],
            finalAnswer:
              "(a) Middle schools should begin later in the morning. (b) Reason one: teen body clocks run later and doctors recommend eight to ten hours; reason two: a Minnesota district saw higher attendance and alertness after moving its start. (c) The argument is fairly convincing. Expert sources and a specific study are relevant, and the author answers the scheduling objection. However, the promises of higher grades and safer communities have no evidence, only one district is cited, and the ending relies on shared feeling.",
            commonErrors: [
              "In (b), listing evidence without linking it to a reason.",
              "In (c), only praising the argument with no weaknesses.",
            ],
          },
        },
      ],
    },
  ],
};
