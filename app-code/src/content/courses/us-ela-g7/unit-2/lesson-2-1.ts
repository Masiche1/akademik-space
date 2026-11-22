import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const BEES: TextExtract = {
  title: "Bees in the City",
  author: "Written for Akademik Space",
  text: "When people picture a bee, they usually imagine a meadow or an orchard. Yet in recent years, beekeepers have discovered that cities can be surprisingly good homes for bees. City parks, gardens, and even rooftop planters offer a long season of blooming flowers, while many urban neighborhoods use far fewer pesticides than large farms do. In one study, rooftop hives in a major city produced more honey than hives kept in nearby farmland.\n\nThe boom in city hives, however, has created a second problem. Honeybees are not the only insects that need flowers. Hundreds of species of wild bees, which nest in the ground or in hollow stems, rely on the same limited supply of nectar. When a single rooftop holds dozens of honeybee hives, the honeybees can crowd out their wild neighbors. Scientists who study pollinators now urge cities to plant more flowers before they allow more hives.",
};

const TELEGRAPH: TextExtract = {
  title: "The Telegraph Shrinks a Continent",
  author: "Written for Akademik Space",
  text: "Before 1844, news could travel no faster than a horse, a ship, or a train. A report about a battle or an election might take days or even weeks to reach the people who cared about it. That changed on May 24, 1844, when Samuel Morse tapped out a message in code in Washington, D.C., and it appeared almost instantly on a machine in Baltimore, Maryland.\n\nOver the next two decades, telegraph wires spread across the country. In October 1861, workers joined the lines from the East and the West, completing the first telegraph connection across the continent. Because messages could now cross the country in minutes, the Pony Express, which had carried mail by horseback only since April 1860, closed down within days.\n\nThe telegraph also changed newspapers. Since editors could receive news from far away within hours, papers began printing stories about distant events the very next morning. As a result, readers started to expect fresh news, and newspapers competed to be first.",
};

export const lesson21: Lesson = {
  id: "ela7-u2-lesson-2-1",
  code: "2-1",
  title: "Central Ideas and Structure",
  goal: "I CAN identify two or more central ideas in an informational text, write an objective summary, and explain how the structure of a text develops its ideas.",
  standards: ["RI.7.2", "RI.7.5"],
  vocabulary: [
    {
      term: "Central idea",
      definition:
        "A main point the author develops across a text, supported by details.",
    },
    {
      term: "Supporting detail",
      definition:
        "A fact, example, or reason that helps develop a central idea.",
    },
    {
      term: "Objective summary",
      definition:
        "A short retelling of the main ideas in your own words, with no opinions or personal judgments.",
    },
    {
      term: "Text structure",
      definition:
        "The way an author organizes ideas: chronological, compare/contrast, cause/effect, or problem/solution.",
    },
    {
      term: "Signal word",
      definition:
        "A word or phrase, such as 'because' or 'in contrast', that points to the structure of a text.",
    },
    {
      term: "Chronological order",
      definition:
        "Events or steps presented in the order in which they happened.",
    },
  ],
  concepts: [
    {
      id: "ela7-u2-central-ideas",
      title: "Central ideas and objective summary",
      skill:
        "Identify two or more central ideas, show how details develop them, and write an objective summary.",
      lesson: {
        sections: [
          {
            heading: "More than one central idea",
            body: "In Grade 7, a text often develops **two or more** central ideas at once. To find them, ask what the author keeps returning to. Look at topic sentences, repeated key words, and the words that signal a turn, such as 'however' or 'but'. A central idea is a full statement about the topic, not just the topic itself: 'bees' is a topic, but 'cities can be good homes for bees' is a central idea.",
          },
          {
            heading: "Writing an objective summary",
            body: "An **objective summary** states the central ideas and the most important supporting details in your own words. It is short, it follows the order of the ideas, and it leaves out your opinions, your feelings, and minor details. Avoid words like 'good', 'sad', or 'I think'. Begin with the author and the topic, then give each central idea with one key detail.",
          },
        ],
        keyFormulas: [
          {
            name: "Central idea",
            statement:
              "A complete statement of a main point that the details in the text support.",
          },
          {
            name: "Objective",
            statement:
              "Based on the text only, without the reader's opinions or feelings.",
          },
          {
            name: "Summary check",
            statement:
              "Does it include every central idea, use your own words, and leave out opinion?",
          },
        ],
        workedExample: {
          problem:
            "Read 'Bees in the City'. State the two central ideas in one sentence each. (2 marks)",
          solution:
            "First central idea: cities can be good homes for honeybees because they offer a long flowering season and fewer pesticides. Second central idea: too many city hives can harm wild bees, which compete for the same nectar. The word 'however' at the start of paragraph 2 signals the shift from the first idea to the second. Each idea is a full statement, and each is supported by details, such as the rooftop honey study and the hundreds of wild bee species.",
        },
      },
      questions: [
        {
          id: "ela7-u2-central-ideas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BEES,
          stem: "Which statement is a central idea of paragraph 2?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wild bees nest in the ground." },
              {
                id: "b",
                text: "Bees are the most important insects in the world.",
              },
              {
                id: "c",
                text: "Too many honeybee hives can crowd out wild bees that need the same flowers.",
              },
              {
                id: "d",
                text: "Honeybees make more honey on rooftops than on farms.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Finding a central idea",
                statement:
                  "A central idea is a complete main point that the details in the paragraph support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Paragraph 2 explains that wild bees depend on limited nectar, so dozens of hives can crowd them out.",
                evidence: "the honeybees can crowd out their wild neighbors",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** This is the point the whole paragraph supports. Choice (a) belongs to paragraph 1, (c) is not stated, and (d) is only a supporting detail.",
            commonErrors: [
              "Choosing a supporting detail, such as where wild bees nest, instead of the main point.",
            ],
          },
        },
        {
          id: "ela7-u2-central-ideas-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: BEES,
          stem: "Which sentence would belong in an objective summary of the passage?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "I think cities should ban rooftop hives right away.",
              },
              {
                id: "b",
                text: "Rooftop hives produced more honey than hives kept in nearby farmland.",
              },
              {
                id: "c",
                text: "City hives are wonderful, but sadly they hurt the poor wild bees.",
              },
              {
                id: "d",
                text: "The passage explains that cities can support honeybees but that too many hives can threaten wild bees.",
              },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Objective summary",
                statement:
                  "States all central ideas in the writer's own words, with no opinions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A summary sentence must cover both central ideas of the passage, not only one detail.",
                evidence: "cities can be surprisingly good homes for bees",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It must stay objective: choices (a) and (b) contain judgments such as 'wonderful', 'sadly', and 'I think'.",
                evidence: "created a second problem",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** It covers both central ideas and contains no opinion. Choice (d) is accurate but covers only a single detail.",
            commonErrors: [
              "Choosing an accurate detail (d) that is not a summary of the whole passage.",
              "Missing the opinion words 'wonderful' and 'sadly'.",
            ],
          },
        },
        {
          id: "ela7-u2-central-ideas-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: BEES,
          stem: "Write an objective summary of the passage in three to four sentences. Include both central ideas and a key supporting detail for each. Use your own words and do not include opinions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Objective summary",
                statement:
                  "A brief, accurate account of the central ideas in the writer's own words, without opinion.",
              },
              {
                kind: "skill",
                name: "Supporting details",
                statement:
                  "Select only the most important details that develop each central idea.",
              },
            ],
            steps: [
              {
                reasoning:
                  "States the first central idea: cities can be good homes for bees.",
                evidence: "cities can be surprisingly good homes for bees",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Gives a key detail for it, such as the long flowering season, fewer pesticides, or higher honey production on rooftops.",
                evidence: "rooftop hives in a major city produced more honey",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "States the second central idea: many hives can crowd out wild bees that depend on the same nectar.",
                evidence: "the honeybees can crowd out their wild neighbors",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Stays objective and in the student's own words, and gives the scientists' recommendation to plant more flowers first.",
                evidence: "plant more flowers before they allow more hives",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(8, [7, 5, 3]),
            finalAnswer:
              "The passage explains that cities can be good homes for honeybees because they offer many flowers for much of the year and use fewer pesticides, and rooftop hives have even out-produced farm hives. However, too many city hives can crowd out wild bees, which rely on the same limited nectar. Scientists therefore recommend planting more flowers before adding more hives.",
            commonErrors: [
              "Including opinions such as 'this is a terrible problem'.",
              "Summarizing only the first paragraph.",
              "Copying whole sentences instead of using their own words.",
            ],
          },
        },
        {
          id: "ela7-u2-central-ideas-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: BEES,
          stem: "Answer all parts of this question about 'Bees in the City'.",
          parts: [
            {
              label: "a",
              prompt:
                "State the first central idea of the passage in one sentence.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the word 'however' in paragraph 2 helps the reader follow the development of the central ideas.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Explain how the author develops the second central idea with details, and why the final sentence is a fitting conclusion to both central ideas.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tracing development",
                statement:
                  "Show how details build a central idea from one paragraph to the next.",
              },
              {
                kind: "technique",
                name: "Transitions",
                statement:
                  "Words such as 'however' signal a shift or contrast between ideas.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Cities can offer good homes for honeybees, with a long flowering season and fewer pesticides.",
                evidence: "cities can be surprisingly good homes for bees",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'However' signals a turn from the benefits of city hives to a drawback.",
                evidence:
                  "The boom in city hives, however, has created a second problem",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "This shows the reader that a second central idea is beginning and that it contrasts with the first.",
                evidence: "a second problem",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The author states that wild bees are many and varied, which shows how large the possible harm is.",
                evidence: "Hundreds of species of wild bees",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The author explains that they rely on the same limited supply of nectar, giving the cause of the competition.",
                evidence: "rely on the same limited supply of nectar",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The example of a rooftop with dozens of hives makes the abstract problem concrete.",
                evidence: "a single rooftop holds dozens of honeybee hives",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The final sentence answers both ideas: cities can host bees, but they should plant more flowers first to protect wild bees.",
                evidence: "plant more flowers before they allow more hives",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: rubric(8, [7, 5, 3], "c"),
            finalAnswer:
              "(a) Cities can be good homes for honeybees. (b) 'However' signals a contrast: after the benefits of city hives, it introduces a drawback and tells the reader a second central idea is starting. (c) The author develops the second idea with the number of wild species, the shared limited nectar, and the vivid example of a rooftop with dozens of hives. The closing advice to plant more flowers first fits both ideas because it keeps the benefits of city hives while protecting wild bees.",
            commonErrors: [
              "In (a), giving only the topic ('bees in cities') instead of a full statement.",
              "In (b), saying 'however' means 'and' instead of a contrast.",
              "In (c), listing details without saying what they show.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u2-text-structures",
      title: "Text structures",
      skill:
        "Identify how an author organizes a text and explain how that structure develops the ideas.",
      lesson: {
        sections: [
          {
            heading: "Four common structures",
            body: "Authors organize informational text in patterns. **Chronological** order tells events in time order. **Compare/contrast** shows how things are alike and different. **Cause/effect** explains why something happened and what resulted. **Problem/solution** describes a difficulty and ways to fix it. Many texts mix patterns, so name the structure that works in the part you are asked about.",
          },
          {
            heading: "Signal words and purpose",
            body: "Signal words reveal the pattern. Time words such as 'before', 'then', and 'in 1861' suggest chronological order. 'Because', 'since', 'as a result', and 'therefore' suggest cause and effect. 'However', 'unlike', and 'similarly' suggest comparison or contrast. 'The challenge' and 'one solution' suggest problem and solution. Do not stop at naming the structure: explain how it helps the reader understand an idea, for example by making a change easy to see.",
          },
        ],
        keyFormulas: [
          {
            name: "Chronological order",
            statement:
              "Events presented in the order they happened. Signals: before, then, after, in 1861.",
          },
          {
            name: "Cause/effect",
            statement:
              "Explains why something happened and its results. Signals: because, since, as a result.",
          },
          {
            name: "Compare/contrast",
            statement:
              "Shows similarities and differences. Signals: however, unlike, both, similarly.",
          },
          {
            name: "Problem/solution",
            statement:
              "Presents a difficulty and a response to it. Signals: the challenge, one answer, to solve.",
          },
        ],
        workedExample: {
          problem:
            "Which structure does the author use in the sentence beginning 'Because messages could now cross the country in minutes'? Explain its effect. (2 marks)",
          solution:
            "The author uses cause and effect. The signal word 'Because' links a cause, messages crossing the country in minutes, to an effect, the Pony Express closing down. This structure helps the reader see that the telegraph was not just a new tool but the reason an older system disappeared.",
        },
      },
      questions: [
        {
          id: "ela7-u2-text-structures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TELEGRAPH,
          stem: "Which phrase from paragraph 1 is a signal of chronological order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a report about a battle or an election" },
              { id: "b", text: "a machine in Baltimore" },
              { id: "c", text: "the people who cared about it" },
              { id: "d", text: "Before 1844" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Signal words",
                statement:
                  "Time phrases such as dates and 'before' signal chronological order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Before 1844' places events in time and starts the time sequence of the passage.",
                evidence: "Before 1844",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** 'Before 1844' is a time signal. The other choices name people, events, or places and do not show time order.",
            commonErrors: [
              "Choosing a detail about content instead of a word that signals organization.",
            ],
          },
        },
        {
          id: "ela7-u2-text-structures-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: TELEGRAPH,
          stem: "Read paragraph 3. Which text structure does the author mainly use, and which words signal it?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cause/effect, signaled by 'Since' and 'As a result'",
              },
              { id: "b", text: "Compare/contrast, signaled by 'also'" },
              {
                id: "c",
                text: "Chronological order, signaled by 'next morning'",
              },
              { id: "d", text: "Problem/solution, signaled by 'competed'" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cause/effect signals",
                statement:
                  "'Since', 'because', and 'as a result' link a cause to its effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Since editors could receive news from far away' states a cause.",
                evidence:
                  "Since editors could receive news from far away within hours",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'As a result' introduces the effect: readers expecting fresh news and newspapers competing to be first.",
                evidence: "As a result, readers started to expect fresh news",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** The paragraph links causes and effects with 'Since' and 'As a result'. 'Next morning' is only a detail inside that chain.",
            commonErrors: [
              "Choosing chronological order because of 'next morning', even though the paragraph's main pattern is cause and effect.",
            ],
          },
        },
        {
          id: "ela7-u2-text-structures-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: TELEGRAPH,
          stem: "Explain how the author uses cause and effect in paragraphs 2 and 3 to help the reader understand the impact of the telegraph. Use evidence from the passage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cause and effect",
                statement:
                  "Linking causes to effects shows why events happened and what followed.",
              },
              {
                kind: "skill",
                name: "Explaining effect",
                statement:
                  "Say what the structure helps the reader understand, not only what it is called.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies the first cause-and-effect chain: fast messages across the country caused the Pony Express to close.",
                evidence:
                  "Because messages could now cross the country in minutes",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Explains the effect on the reader: the telegraph is shown to replace an older system, which stresses how big the change was.",
                evidence: "closed down within days",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Identifies the second chain in paragraph 3: faster news reaching editors led to next-morning stories and then to competition for fresh news.",
                evidence: "As a result, readers started to expect fresh news",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Explains how the chain supports the central idea that the telegraph changed society, not just communication.",
                evidence: "newspapers competed to be first",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(8, [7, 5, 3]),
            finalAnswer:
              "The author uses cause and effect to show the telegraph's impact. In paragraph 2, 'Because messages could now cross the country in minutes', the Pony Express 'closed down within days', which shows that the telegraph replaced an older system almost at once. In paragraph 3, 'Since' editors received news within hours, readers expected fresh news and newspapers competed to be first. These linked chains show that the telegraph changed how people lived and not just how messages traveled.",
            commonErrors: [
              "Naming the structure without explaining what it shows.",
              "Retelling the history without using signal words as evidence.",
            ],
          },
        },
        {
          id: "ela7-u2-text-structures-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: TELEGRAPH,
          stem: "Answer all parts of this question about 'The Telegraph Shrinks a Continent'.",
          parts: [
            {
              label: "a",
              prompt: "Write down two time-order signals from the passage.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the author uses chronological order in paragraph 1 to show that something important changed.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Evaluate how effectively the author combines chronological order with cause and effect to develop the central idea that the telegraph changed daily life.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mixed structures",
                statement:
                  "Authors often combine time order with cause and effect, using each for a different purpose.",
              },
              {
                kind: "skill",
                name: "Evaluating",
                statement:
                  "Judge how well a choice works and support the judgment with evidence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A date phrase that begins the sequence.",
                evidence: "Before 1844",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "A later time marker that moves the sequence forward.",
                evidence: "In October 1861",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Paragraph 1 starts with slow news before 1844, setting a 'before' picture.",
                evidence:
                  "Before 1844, news could travel no faster than a horse",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The exact date and 'almost instantly' then mark the turning point, so the contrast is clear.",
                evidence: "That changed on May 24, 1844",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Chronological order gives a clear timeline from slow news, to the first message, to the continental line.",
                evidence: "Over the next two decades",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Cause and effect explains why each stage mattered, such as the closure of the Pony Express.",
                evidence:
                  "Because messages could now cross the country in minutes",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The final paragraph moves from events to consequences for newspapers and readers, supporting the idea of changed daily life.",
                evidence: "readers started to expect fresh news",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Evaluation: the combination works well because time order shows when the changes happened and cause/effect shows why they were important.",
                evidence: "newspapers competed to be first",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: rubric(8, [7, 5, 3], "c"),
            finalAnswer:
              "(a) 'Before 1844'; 'In October 1861'. (b) The author contrasts slow news before 1844 with the instant message of May 24, 1844, making the turning point clear. (c) The combination works well. Chronological order gives the reader a clear timeline, while cause and effect explains why events such as the Pony Express closing and newspapers racing for fresh news followed from the telegraph. Together they show the telegraph changed daily life.",
            commonErrors: [
              "In (a), choosing a cause signal such as 'Because' rather than a time signal.",
              "In (c), describing each structure without evaluating how well they work together.",
            ],
          },
        },
      ],
    },
  ],
};
