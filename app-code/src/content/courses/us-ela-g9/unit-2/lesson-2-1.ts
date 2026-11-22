import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const TREES: TextExtract = {
  title: "The Quiet Work of City Trees",
  author: "Written for Akademik Space",
  text: "When city planners draw maps, they usually begin with roads, pipes, and buildings. Trees tend to appear last, as decoration added once the serious work is done. A growing body of research suggests that this order is backward.\n\nConsider heat. On a summer afternoon, asphalt can be far hotter than the air above it. Streets lined with mature trees stay noticeably cooler, because leaves shade the pavement and release water vapor that cools the air. Residents of shaded neighborhoods use less electricity for air conditioning, which lowers their bills and eases demand on the power grid.\n\nTrees also work on water. A heavy storm sends rain racing across pavement into drains that can overflow. A tree's roots and soil absorb part of that water, and its canopy catches rain before it ever reaches the ground. Cities with more trees therefore face fewer floods and spend less on repairing storm drains.\n\nThe benefits are not only practical. Studies of hospital patients have found that those with a view of trees sometimes recover a little faster, and residents of leafy streets report feeling safer and more connected to their neighbors.\n\nPlanting a tree costs little compared with these returns. Cities should treat trees as essential infrastructure, funded and maintained as carefully as roads and pipes.",
};

const COLD: TextExtract = {
  title: "How Cold Changed What We Eat",
  author: "Written for Akademik Space",
  text: "For most of history, fresh food had to be eaten close to where it was grown. Farmers sold milk, meat, and vegetables within a day's travel, and anything that could not be eaten quickly was salted, dried, or smoked.\n\nIn the nineteenth century, a new trade began to change this. Workers cut blocks of ice from frozen northern lakes, packed them in sawdust, and shipped them to cities and even to distant ports. Ice made it possible to keep food cool for a few days, but it melted, and it had to be replaced constantly.\n\nThe next step came with mechanical refrigeration. Because machines could make cold on demand, factories no longer depended on winter lakes. Railroads then began to use insulated cars cooled by ice, and later by machines, which allowed meat and produce to cross the continent.\n\nThese changes reshaped everyday life. Cities grew larger because they could be fed from far away. Ranchers and fruit growers in distant regions gained customers they could never have reached before, and families began to eat foods out of season.\n\nHome refrigerators arrived in the early twentieth century and spread slowly at first because they were costly. As prices fell, they became standard in kitchens, and the weekly trip to buy fresh food gradually gave way to the occasional large shopping trip.",
};

export const lesson21: Lesson = {
  id: "ela9-u2-lesson-2-1",
  code: "2-1",
  title: "Central Ideas and Development",
  goal: "I CAN trace how a central idea develops across an informational text, write an objective summary, and explain how an author unfolds and connects a series of ideas or events.",
  standards: ["RI.9-10.2", "RI.9-10.3"],
  vocabulary: [
    {
      term: "Central idea",
      definition:
        "The main point an informational text makes about its topic, supported by the whole text rather than a single detail.",
    },
    {
      term: "Objective summary",
      definition:
        "A short, neutral restatement of the central idea and key supporting points, without personal opinion or judgment.",
    },
    {
      term: "Supporting detail",
      definition:
        "A fact, example, statistic, or explanation that helps develop the central idea.",
    },
    {
      term: "Development",
      definition:
        "The way an author builds, extends, or refines an idea across paragraphs and sections.",
    },
    {
      term: "Chronological order",
      definition:
        "A structure that presents events in the order in which they happened.",
    },
    {
      term: "Causal connection",
      definition:
        "A link in which one event or idea leads to or explains another.",
    },
  ],
  concepts: [
    {
      id: "ela9-u2-central-idea",
      title: "Central idea and objective summary",
      skill:
        "Determine a central idea of an informational text, analyze how it develops over the course of the text, and provide an objective summary.",
      lesson: {
        sections: [
          {
            heading: "Finding the central idea",
            body: "A topic is what a text is about (city trees). A **central idea** is what the author says about that topic (cities should treat trees as essential infrastructure). To find it, ask what point every paragraph helps to prove. Check the opening and closing paragraphs first, because authors often state or restate their main point there, but test your choice against the middle of the text. A good central idea covers the whole text. A detail that covers only one paragraph is a supporting point, not the central idea.",
          },
          {
            heading: "How a central idea develops",
            body: "Strong texts do not repeat the central idea; they **develop** it. An author may introduce it by challenging an assumption, support it with several kinds of evidence, then refine or extend it by adding a new dimension ('the benefits are not only practical') before closing with a conclusion or call to action. When you analyze development, name what each section adds and use a short quotation to prove it.",
          },
          {
            heading: "Writing an objective summary",
            body: "An **objective summary** states the central idea and the most important supporting points in your own words, in a few sentences. It is neutral: leave out your opinion, praise, or criticism, and leave out minor details and quotations. Use present tense and refer to the author ('The author argues...'). A summary that retells every paragraph is too long; one that adds your own view is not objective.",
          },
        ],
        keyFormulas: [
          {
            name: "Topic vs. central idea",
            statement:
              "Topic = the subject. Central idea = the author's point about the subject, supported across the whole text.",
          },
          {
            name: "Development",
            statement:
              "Introduce, support, refine or extend, conclude: name what each section adds.",
          },
          {
            name: "Objective summary",
            statement:
              "Central idea + key supporting points, in your own words, neutral, concise.",
          },
        ],
        workedExample: {
          problem:
            "In one or two sentences, give an objective summary of 'The Quiet Work of City Trees'. (4 marks)",
          solution:
            "The author argues that city trees provide practical benefits, such as cooling streets and reducing flooding, as well as health and community benefits, so cities should fund and maintain them as essential infrastructure. This summary names the central idea (trees are essential infrastructure), includes the key supporting points (heat, water, health and community) in the author's order, and stays neutral. It does not say whether the argument is convincing and it does not quote the text.",
        },
      },
      questions: [
        {
          id: "ela9-u2-central-idea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TREES,
          stem: "Which statement best expresses the central idea of 'The Quiet Work of City Trees'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Asphalt streets become much hotter than the air above them in summer.",
              },
              {
                id: "b",
                text: "Hospital patients recover faster when they can see trees.",
              },
              {
                id: "c",
                text: "City planners usually draw maps beginning with roads and pipes.",
              },
              {
                id: "d",
                text: "Trees give cities practical and social benefits, so they should be treated as essential infrastructure.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Central idea",
                statement:
                  "The point the whole text supports, not a detail from one paragraph.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only this choice covers the heat, water, health, and community points and matches the closing recommendation.",
                evidence:
                  "Cities should treat trees as essential infrastructure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** It covers the whole text. Choices (a), (b), and (d) are details from single paragraphs.",
            commonErrors: [
              "Choosing a true detail (such as hot asphalt) that supports only one paragraph.",
            ],
          },
        },
        {
          id: "ela9-u2-central-idea-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: TREES,
          stem: "Which sentence is the most objective summary of paragraph 3 ('Trees also work on water...')?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The paragraph begins with a heavy storm and ends with the cost of repairing drains.",
              },
              {
                id: "b",
                text: "Storms are becoming worse, and drains are often badly built.",
              },
              {
                id: "c",
                text: "Trees are wonderful, and every city should plant them to prevent terrible floods.",
              },
              {
                id: "d",
                text: "Tree roots, soil, and canopies absorb or catch rainwater, so cities with more trees have fewer floods and lower repair costs.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Objective summary",
                statement:
                  "State the main point and key support neutrally, without opinion or invented information.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choice (c) states the paragraph's main point: trees absorb and catch rain.",
                evidence: "A tree's roots and soil absorb part of that water",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It includes the result (fewer floods, lower costs) without adding opinion.",
                evidence:
                  "fewer floods and spend less on repairing storm drains",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** It is neutral and accurate. (a) adds opinion ('wonderful', 'terrible'), (b) adds claims not in the text, and (d) only describes where the paragraph begins and ends.",
            commonErrors: [
              "Choosing (a) because it agrees with the author; a summary must stay neutral.",
              "Choosing (d), which describes the paragraph's order instead of its content.",
            ],
          },
        },
        {
          id: "ela9-u2-central-idea-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: TREES,
          stem: "Explain how paragraph 4 adds a new dimension to the author's central idea and how paragraph 5 draws the ideas together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tracing development",
                statement:
                  "Name what a section adds to the central idea and prove it with a short quotation.",
              },
              {
                kind: "technique",
                name: "Extending an idea",
                statement:
                  "A transition such as 'not only' signals that the author is widening the claim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Paragraph 4 signals a shift from practical benefits (heat and water) to human benefits such as health and community.",
                evidence: "The benefits are not only practical",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The new evidence about patients and residents shows that trees affect well-being, which widens the idea beyond money and engineering. The cautious word 'sometimes' keeps the claim credible.",
                evidence:
                  "those with a view of trees sometimes recover a little faster",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Paragraph 5 weighs low cost against the combined returns and turns the whole argument into a recommendation, completing the development of the idea.",
                evidence:
                  "Cities should treat trees as essential infrastructure",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "Paragraph 4 extends the central idea by moving from practical benefits to human ones. The phrase 'not only practical' signals the shift, and the evidence about patients and residents shows that trees affect well-being, not just budgets. Paragraph 5 then gathers everything together: because planting is cheap compared with these returns, the author concludes that cities should treat trees as essential infrastructure.",
            commonErrors: [
              "Retelling the paragraphs without saying what they add to the central idea.",
              "Ignoring the transition that signals the shift.",
            ],
          },
        },
        {
          id: "ela9-u2-central-idea-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: TREES,
          stem: "Answer all parts of this question about 'The Quiet Work of City Trees'.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down two benefits of shaded streets given in paragraph 2.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the first paragraph introduces the author's central idea.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write an objective summary of the whole text in no more than 60 words.",
              marks: 6,
            },
            {
              label: "d",
              prompt:
                "Evaluate how well the author supports the central idea with evidence. Refer to strengths and any limitations.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Objective summary",
                statement: "Central idea plus key points, neutral and concise.",
              },
              {
                kind: "technique",
                name: "Opening that challenges an assumption",
                statement:
                  "An author can introduce a central idea by questioning a common practice or belief.",
              },
              {
                kind: "skill",
                name: "Evaluating evidence",
                statement:
                  "Judge whether evidence is specific, relevant, and sufficient, and note any limits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Streets with mature trees stay cooler.",
                evidence: "stay noticeably cooler",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Residents use less electricity for air conditioning, lowering bills.",
                evidence: "use less electricity for air conditioning",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The opening describes how planners treat trees as an afterthought, which presents a familiar practice for the reader to question.",
                evidence: "Trees tend to appear last, as decoration",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "It ends by stating that this order is 'backward', which signals the central idea that trees deserve a more important place in planning.",
                evidence: "this order is backward",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "States the central idea: trees are essential infrastructure that cities should fund.",
                evidence: "essential infrastructure",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Includes the key supporting points: cooling, flood reduction, and health or community benefits.",
                evidence: "cools the air",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Is concise, in the writer's own words, and neutral, with no opinion or quotation.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "d",
                reasoning:
                  "Strength: the author explains cause and effect (shade and water vapor cool the air; roots absorb rain), which makes each benefit believable.",
                evidence: "leaves shade the pavement and release water vapor",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Strength: the claims about health use cautious wording, which is honest about the strength of the evidence.",
                evidence: "sometimes recover a little faster",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Limitation: no figures, named studies, or specific cities are given, so the evidence is general and the reader must trust the author.",
                evidence: "A growing body of research suggests",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: [
              ...rubric(6, [5, 3, 2], "c"),
              ...rubric(6, [5, 3, 2], "d"),
            ],
            finalAnswer:
              "(a) Shaded streets stay cooler, and residents use less electricity for air conditioning. (b) The opening shows planners treating trees as decoration added last, then calls that order 'backward', setting up the claim that trees deserve a central role. (c) Sample summary (about 45 words): The author argues that city trees cool streets, reduce flooding, and improve health and community life at low cost, so cities should treat them as essential infrastructure and fund them like roads and pipes. (d) The causal explanations and cautious wording are strengths, but the lack of figures or named studies limits how strongly the evidence persuades.",
            commonErrors: [
              "In (c), adding personal opinion or copying sentences from the text.",
              "In (d), only saying the evidence is 'good' without explaining why.",
              "In (a), giving a benefit from a different paragraph.",
            ],
            examinerNote:
              "In (c), do not penalize a summary of 61-70 words if it is otherwise accurate, but it should not be a paragraph-by-paragraph retelling.",
          },
        },
      ],
    },
    {
      id: "ela9-u2-unfolding-ideas",
      title: "How an author unfolds ideas and events",
      skill:
        "Analyze how an author unfolds a series of ideas or events, including the order in which points are made and how connections are drawn between them.",
      lesson: {
        sections: [
          {
            heading: "Order and structure",
            body: "Authors choose the order of their ideas on purpose. **Chronological order** follows time. Other texts move from problem to solution, from cause to effect, or from a simple idea to a complex one. Look at transition words and phrases ('the next step', 'then', 'as prices fell', 'because') because they show how one point leads to the next. Ask: why does this paragraph come here, and what would be lost if the order changed?",
          },
          {
            heading: "Drawing connections",
            body: "Informational authors do not only list events; they connect them. A **causal connection** shows that one development led to another ('Because machines could make cold on demand, factories no longer depended on winter lakes'). A connection can also show that one idea builds on, solves a problem in, or contrasts with an earlier one. When you analyze connections, identify the two things linked, the kind of link (cause, solution, contrast), and the word or phrase that signals it.",
          },
          {
            heading: "Explaining the effect",
            body: "Strong analysis explains what the structure does for the reader. A chronological text with causal links helps readers see history as a chain rather than a list, which makes the final consequence feel inevitable and the author's overall point easier to follow. State the effect in a sentence, and support it with a short quotation that shows the signal word.",
          },
        ],
        keyFormulas: [
          {
            name: "Transition",
            statement:
              "A word or phrase (then, because, as a result, however) that shows how two ideas or events are connected.",
          },
          {
            name: "Causal connection",
            statement:
              "Event A led to event B; look for because, so, therefore, as a result, which allowed.",
          },
          {
            name: "Analyzing order",
            statement:
              "Name the pattern, give a quotation showing it, and explain what it does for the reader.",
          },
        ],
        workedExample: {
          problem:
            "Explain how the author connects the use of ice to the development of mechanical refrigeration. (3 marks)",
          solution:
            "The author presents mechanical refrigeration as the solution to a problem created by ice. Paragraph 2 explains that ice 'melted, and it had to be replaced constantly', which was a limit. Paragraph 3 begins 'The next step', a transition that shows progress, and says that machines 'could make cold on demand', so 'factories no longer depended on winter lakes'. The connection is cause and solution: the weakness of ice led to a better method, and this makes the history read as a chain of improvements.",
        },
      },
      questions: [
        {
          id: "ela9-u2-unfolding-ideas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COLD,
          stem: "According to paragraph 2, what was a limitation of shipping ice to keep food cool?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It melted and had to be replaced constantly." },
              { id: "b", text: "It could only be cut from lakes in summer." },
              { id: "c", text: "It could not be shipped to distant ports." },
              {
                id: "d",
                text: "It spoiled the flavor of meat and vegetables.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Retrieval",
                statement:
                  "Return to the text and match the exact detail the question asks for.",
              },
            ],
            steps: [
              {
                reasoning: "Paragraph 2 states the limitation directly.",
                evidence: "it melted, and it had to be replaced constantly",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** The text says ice melted and had to be replaced. Choice (d) is wrong because ice was shipped 'even to distant ports'.",
            commonErrors: ["Choosing (d), which contradicts the text."],
          },
        },
        {
          id: "ela9-u2-unfolding-ideas-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: COLD,
          stem: "How does paragraph 3 relate to paragraph 2?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It presents a development that overcame a weakness of the method described in paragraph 2.",
              },
              { id: "b", text: "It argues that ice was better than machines." },
              {
                id: "c",
                text: "It repeats the same information using different words.",
              },
              {
                id: "d",
                text: "It describes events that happened before those in paragraph 2.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Transitions",
                statement:
                  "Phrases such as 'the next step' show that a new development follows from the last.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The phrase 'The next step' marks a later development in time.",
                evidence: "The next step came with mechanical refrigeration",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Machines removed the need for winter lakes, which was a weakness of the ice trade.",
                evidence: "factories no longer depended on winter lakes",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Mechanical refrigeration solved the problem of depending on winter ice. (d) is wrong because paragraph 3 describes later events.",
            commonErrors: [
              "Choosing (a) because both paragraphs mention cold; the new paragraph adds a new development.",
            ],
          },
        },
        {
          id: "ela9-u2-unfolding-ideas-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: COLD,
          stem: "Explain how the author connects the development of refrigeration to the growth of cities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Causal connection",
                statement:
                  "A cause-and-effect link shows how one development produces another.",
              },
              {
                kind: "skill",
                name: "Explaining a link",
                statement:
                  "Name both ideas linked, the type of link, and the signal word.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Refrigerated railroad cars let meat and produce travel long distances, which is the first link in the chain.",
                evidence: "allowed meat and produce to cross the continent",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The author then states the result in paragraph 4: food could reach cities from far away, so they could support more people.",
                evidence:
                  "Cities grew larger because they could be fed from far away",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The word 'because' makes the connection explicit and shows technology as a cause of social change, linking paragraphs 3 and 4 as cause and effect.",
                evidence: "because",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "The author links refrigeration to city growth as cause and effect. Paragraph 3 explains that refrigerated railroad cars allowed meat and produce to cross the continent, and paragraph 4 states the result: 'Cities grew larger because they could be fed from far away.' The word 'because' makes the link explicit, so the reader sees a technological change producing a social one.",
            commonErrors: [
              "Mentioning refrigeration and cities separately without showing the link.",
              "Not identifying the signal word.",
            ],
          },
        },
        {
          id: "ela9-u2-unfolding-ideas-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: COLD,
          stem: "Answer all parts of this question about 'How Cold Changed What We Eat'.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down two methods people used to preserve food before ice was shipped, according to paragraph 1.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the author uses chronological order and transitions to organize paragraphs 2 and 3.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Analyze how the author connects changes in technology to changes in everyday life in paragraphs 4 and 5.",
              marks: 6,
            },
            {
              label: "d",
              prompt:
                "Explain how the author unfolds the series of events across the whole text, and evaluate how effectively each stage is connected to the next.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chronological structure",
                statement:
                  "Events are presented in time order, often with transitions that show progress.",
              },
              {
                kind: "technique",
                name: "Causal connection",
                statement:
                  "Words such as because and as prices fell show that one development leads to another.",
              },
              {
                kind: "skill",
                name: "Evaluating structure",
                statement:
                  "Judge how clearly the order helps the reader follow the author's point.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Food was salted.",
                evidence: "salted, dried, or smoked",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Food was dried or smoked (accept any two of salted, dried, smoked).",
                evidence: "salted, dried, or smoked",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Paragraph 2 opens with a time marker that begins the story of change.",
                evidence: "In the nineteenth century",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Paragraph 3 begins with a transition that shows the next stage of progress, so the reader follows a sequence from ice to machines.",
                evidence: "The next step came with mechanical refrigeration",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Paragraph 4 links the technology to larger cities and to new customers for distant ranchers and growers, showing economic and social effects.",
                evidence:
                  "gained customers they could never have reached before",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "It also links the technology to changes in eating habits, which brings the effects into readers' everyday experience.",
                evidence: "families began to eat foods out of season",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "In paragraph 5, the cause-and-effect phrase shows price falling led to home refrigerators becoming standard and changed shopping habits.",
                evidence: "As prices fell, they became standard in kitchens",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "The text moves from a past problem (food eaten near where it was grown) to successive solutions, which gives a clear overall arc.",
                evidence:
                  "fresh food had to be eaten close to where it was grown",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Each stage is linked to the previous one by a limitation and a solution (ice melts, then machines make cold on demand), so progress seems logical.",
                evidence: "it melted, and it had to be replaced constantly",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "The middle of the text moves from technology to its social consequences, widening the scale from factories to whole cities and households.",
                evidence: "These changes reshaped everyday life",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "Evaluation: the connections are effective and clear, though the chain simplifies a long, uneven history (for instance, refrigerators 'spread slowly'), and some links are asserted rather than proved.",
                evidence: "spread slowly at first",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: [
              ...rubric(6, [5, 3, 2], "c"),
              ...rubric(8, [7, 5, 3], "d"),
            ],
            finalAnswer:
              "(a) Food was salted, dried, or smoked. (b) Paragraph 2 begins with a time marker, 'In the nineteenth century', and paragraph 3 with the transition 'The next step', which lead the reader through a sequence from ice to machines. (c) Paragraphs 4 and 5 show technology causing change: cities grew, distant growers found customers, and falling prices made refrigerators standard, which changed how families shopped. (d) The text moves from an early problem through successive solutions to social consequences, with each stage linked by a limitation and a fix. This is clear and effective, although it simplifies a long, uneven history.",
            commonErrors: [
              "In (b), describing what happens in the paragraphs without discussing the order or transitions.",
              "In (d), retelling the text instead of evaluating how the connections work.",
            ],
          },
        },
      ],
    },
  ],
};
