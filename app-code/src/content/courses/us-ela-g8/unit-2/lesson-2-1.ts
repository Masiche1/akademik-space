import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const WOLVES: TextExtract = {
  title: "Wolves Return to Harlow Valley",
  author: "Written for Akademik Space",
  text: "For nearly seventy years, Harlow Valley had no wolves. Ranchers had hunted them out by the 1930s, and for a time most people considered the valley safer for it. Then the elk herds began to grow. With no predators to keep their numbers in check, the elk grazed the young willow and aspen trees down to stubs along every stream.\n\nIn 1998, wildlife managers released fourteen wolves into the valley. Within five years, the elk had changed their habits. Instead of lingering beside open streams where wolves could ambush them, they kept to higher, safer ground. Willows began to grow back along the banks.\n\nThe changes spread outward. Taller willows gave beavers material for dams, and the dams created ponds that sheltered fish, frogs, and nesting birds. Scientists who track the valley now describe the wolves as a keystone species, one whose presence shapes the whole community of living things around it.\n\nNot everyone welcomes the change. Some ranchers report losing calves, and the state pays them for confirmed losses. Still, studies of the valley show that the ecosystem is healthier and more varied than at any point since the 1930s.",
};

const ROOFS: TextExtract = {
  title: "Gardens in the Sky",
  author: "Written for Akademik Space",
  text: "A green roof is a roof covered with living plants. Cities build them for different reasons, and they fall into three main categories.\n\nThe first is the extensive roof: a thin layer of soil, about the depth of a textbook, planted with hardy mosses and grasses. It is light and cheap and needs little care. The second is the intensive roof, which holds deep soil, shrubs, and even small trees. It is heavy and costly, and it works more like a park in the sky. The third is the community roof, planted with vegetables and flowers and tended by neighbors or students.\n\nWhatever its category, a green roof works like a sponge. During a storm, ordinary roofs shed water straight into the drains, which can overflow. A green roof soaks up much of the rain and releases it slowly, the way a sponge holds water and lets it go when squeezed. The plants also shade the building, so it stays cooler in summer, just as a tree shades a parked car.\n\nThe idea is not new. Families in northern Europe once covered their houses with turf, which kept the heat in during winter. Modern green roofs borrow that old idea and add new engineering, such as waterproof layers that protect the building below.",
};

export const lesson21: Lesson = {
  id: "ela8-u2-lesson-2-1",
  code: "2-1",
  title: "Central Idea and Connections",
  goal: "I CAN trace how a central idea develops, write an objective summary, and explain the connections an author makes between ideas, events, and individuals.",
  standards: ["RI.8.2", "RI.8.3"],
  vocabulary: [
    { term: "Central idea", definition: "The most important point an informational text makes about its topic." },
    { term: "Supporting idea", definition: "A detail, example, or reason that helps develop the central idea." },
    { term: "Objective summary", definition: "A brief retelling of the key ideas that leaves out the reader's opinions." },
    { term: "Analogy", definition: "A comparison that explains something unfamiliar by showing how it is like something familiar." },
    { term: "Category", definition: "A group of items that share a feature, used to organize information." },
    { term: "Distinction", definition: "A difference the author points out between two things." },
  ],
  concepts: [
    {
      id: "ela8-u2-central-idea",
      title: "Central idea and objective summary",
      skill: "Determine a central idea, analyze how it develops through supporting ideas, and write an objective summary.",
      lesson: {
        sections: [
          {
            heading: "From topic to central idea",
            body: "The **topic** is what a text is about, such as wolves. The **central idea** is what the author says about the topic: for example, that bringing back one predator can restore balance to a whole ecosystem. A central idea is a complete statement, and it is bigger than any single detail. Test a possible central idea by asking whether most paragraphs help to support it.",
          },
          {
            heading: "How ideas develop, and how to summarize",
            body: "Authors develop a central idea step by step. Each paragraph adds a new **supporting idea**: a cause, an effect, an example, or a complication. Notice how the ideas build on each other. An **objective summary** states the central idea and the most important supporting ideas in your own words. It contains no opinions, no personal reactions, and no small details.",
          },
        ],
        keyFormulas: [
          { name: "Central idea", statement: "A full statement of the author's main point about the topic, supported by the whole text." },
          { name: "Development", statement: "The way supporting ideas, examples, and details build the central idea paragraph by paragraph." },
          { name: "Objective summary", statement: "A short, neutral, own-words account of the central idea and key supporting ideas." },
        ],
        workedExample: {
          problem: "Write a two-sentence objective summary of 'Wolves Return to Harlow Valley'. (4 marks)",
          solution: "Bringing wolves back to Harlow Valley changed the whole ecosystem, not only the number of elk. The wolves altered where elk grazed, which let willows regrow and gave beavers the material to build dams that created habitat for other animals, although some ranchers have lost calves. This summary states the central idea first, includes the chain of effects, mentions the rancher concern for balance, and contains no opinion about whether the program was right.",
        },
      },
      questions: [
        {
          id: "ela8-u2-central-idea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WOLVES,
          stem: "Which statement best expresses a central idea of 'Wolves Return to Harlow Valley'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ranchers in Harlow Valley dislike wolves." },
              { id: "b", text: "Elk herds grow quickly when they have no predators." },
              { id: "c", text: "Bringing back one predator can restore balance across an entire ecosystem." },
              { id: "d", text: "Beavers build dams out of willow branches." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Central idea", statement: "A central idea is supported by the whole text, not by one detail." }],
            steps: [{ reasoning: "Only this statement covers the elk, the willows, the beavers, and the overall health of the valley.", evidence: "shapes the whole community of living things around it", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** The text shows a chain of effects that restores the ecosystem. The other options are details from single paragraphs.",
            commonErrors: ["Choosing a true detail (such as the rancher complaints or elk growth) that supports the idea but is not the central idea."],
          },
        },
        {
          id: "ela8-u2-central-idea-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: WOLVES,
          stem: "How does paragraph 3 develop the central idea of the text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It introduces an opposing viewpoint that challenges the idea." },
              { id: "b", text: "It describes the history of wolf hunting in the valley." },
              { id: "c", text: "It gives the author's personal opinion about wildlife managers." },
              { id: "d", text: "It shows how the wolves' effects spread beyond the elk to other plants and animals." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Analyzing development", statement: "Ask what new supporting idea a paragraph adds." }],
            steps: [
              { reasoning: "Paragraph 3 adds a new link in the chain: willows lead to beaver dams.", evidence: "Taller willows gave beavers material for dams", marks: 1, markCode: "AO1" },
              { reasoning: "The ponds then shelter other animals, widening the effect on the ecosystem.", evidence: "sheltered fish, frogs, and nesting birds", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Paragraph 3 extends the effects from elk and willows to beavers, fish, frogs, and birds. The opposing viewpoint appears in paragraph 4, and the history is in paragraph 1.",
            commonErrors: ["Choosing (a), which describes paragraph 4 instead."],
          },
        },
        {
          id: "ela8-u2-central-idea-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: WOLVES,
          stem: "Write an objective summary of the text in two or three sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Objective summary", statement: "State the central idea and key supporting ideas in your own words without opinions." },
              { kind: "skill", name: "Selecting", statement: "Leave out minor details such as the number of wolves." },
            ],
            steps: [
              { reasoning: "States the central idea: reintroducing wolves restored the valley's ecosystem.", evidence: "shapes the whole community of living things", marks: 1, markCode: "AO1" },
              { reasoning: "Includes how the wolves changed elk behavior.", evidence: "they kept to higher, safer ground", marks: 1, markCode: "AO1" },
              { reasoning: "Includes the chain of effects: willows regrew, beavers built dams, other animals gained habitat.", evidence: "the dams created ponds", marks: 1, markCode: "AO1" },
              { reasoning: "Stays objective and own-worded, and may note the rancher concern without judging it.", evidence: "Some ranchers report losing calves", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Returning wolves to Harlow Valley restored the health of the whole ecosystem. The wolves changed where elk fed, so willows regrew and beavers built dams that created homes for other animals, although some ranchers have lost calves.",
            commonErrors: ["Adding an opinion such as 'this was a great idea'.", "Copying sentences from the text instead of using own words.", "Including small details such as the year 1998 while missing the central idea."],
          },
        },
        {
          id: "ela8-u2-central-idea-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: WOLVES,
          stem: "Answer all parts of this question about 'Wolves Return to Harlow Valley'.",
          parts: [
            { label: "a", prompt: "Give two details from paragraph 2 that show how the elk changed after the wolves arrived.", marks: 2 },
            { label: "b", prompt: "Explain how paragraph 1 prepares the reader for the central idea.", marks: 4 },
            { label: "c", prompt: "Analyze how the author develops the central idea over the course of the text. Refer to at least three paragraphs.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tracing development", statement: "Show how each paragraph adds to or complicates the central idea." },
              { kind: "definition", name: "Supporting idea", statement: "A cause, effect, or example that builds the central idea." },
            ],
            steps: [
              { part: "a", reasoning: "The elk stopped lingering near open streams.", evidence: "Instead of lingering beside open streams", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The elk moved to higher, safer ground.", evidence: "they kept to higher, safer ground", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It establishes the problem: without wolves, the elk herds grew.", evidence: "Then the elk herds began to grow", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "It shows the damage to trees, so the reader understands what is at stake before the wolves return.", evidence: "grazed the young willow and aspen trees down to stubs", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Paragraph 1 sets up the problem of an unbalanced valley.", evidence: "no predators to keep their numbers in check", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Paragraphs 2 and 3 show the chain of effects, from elk behavior to willows to beavers and ponds, building the idea of wide influence.", evidence: "The changes spread outward", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Paragraph 4 complicates the idea with the ranchers' losses but returns to the overall ecological benefit.", evidence: "healthier and more varied than at any point since the 1930s", marks: 2, markCode: "AO2" },
            ],
            levels: rubric(6, [5, 3, 2], "c"),
            finalAnswer: "(a) The elk stopped lingering beside open streams; they kept to higher, safer ground. (b) Paragraph 1 describes the elk growing without predators and destroying young trees, which sets up the problem the wolves will solve. (c) The author builds the central idea in stages: paragraph 1 states the problem, paragraphs 2 and 3 show a growing chain of effects through the ecosystem, and paragraph 4 admits a cost to ranchers while concluding that the valley is healthier overall.",
            commonErrors: ["In (c), summarizing each paragraph without explaining how it builds the central idea.", "Treating the ranchers' concern as the central idea."],
          },
        },
      ],
    },
    {
      id: "ela8-u2-connections",
      title: "Connections and distinctions",
      skill: "Analyze how a text makes connections and distinctions among ideas, events, and individuals through analogies, comparisons, and categories.",
      lesson: {
        sections: [
          {
            heading: "Categories and distinctions",
            body: "Authors often sort a topic into **categories**, groups of things that share a feature. Within each category, they point out **distinctions**: ways it differs from the others. Look for signal words such as 'the first', 'the second', 'unlike', and 'while'. Ask what feature defines each group and how the groups differ in size, cost, purpose, or effect.",
          },
          {
            heading: "Analogies and comparisons",
            body: "An **analogy** explains something unfamiliar by comparing it with something familiar, such as a green roof with a sponge. Good analogies match in function, not in appearance. To analyze one, name both things, then explain exactly what they share. Authors also connect events across time, as when an old practice leads to a modern one. Ask how the connection helps the reader understand.",
          },
        ],
        keyFormulas: [
          { name: "Category", statement: "A group of items sharing a defining feature, used to organize a topic." },
          { name: "Distinction", statement: "A difference an author draws between two categories, people, or events." },
          { name: "Analogy", statement: "A comparison that explains how one thing works by likening it to something familiar." },
        ],
        workedExample: {
          problem: "Why does the author compare a green roof to a sponge? (2 marks)",
          solution: "A sponge soaks up water and releases it slowly when squeezed. The author uses that familiar picture to explain what a green roof does in a storm: it absorbs rain and lets it go gradually instead of sending it all into the drains at once. The comparison matches function, not appearance, so it helps readers understand how the roof works.",
        },
      },
      questions: [
        {
          id: "ela8-u2-connections-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ROOFS,
          stem: "Which distinction does the author make between extensive and intensive green roofs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extensive roofs are light and cheap, while intensive roofs are heavy and costly." },
              { id: "b", text: "Extensive roofs hold trees, while intensive roofs hold only moss." },
              { id: "c", text: "Extensive roofs are planted by neighbors, while intensive roofs are planted by students." },
              { id: "d", text: "Extensive roofs are older than intensive roofs." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Distinction", statement: "A distinction is a stated difference between categories." }],
            steps: [{ reasoning: "Paragraph 2 describes extensive roofs as light and cheap and intensive roofs as heavy and costly.", evidence: "It is light and cheap and needs little care", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** The text contrasts weight and cost. Option (b) reverses the details, and (c) describes the community roof.",
            commonErrors: ["Choosing (b), which swaps the descriptions of the two roof types."],
          },
        },
        {
          id: "ela8-u2-connections-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: ROOFS,
          stem: "Why does the author compare a green roof to a sponge in paragraph 3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To suggest that green roofs are soft and unsafe to walk on" },
              { id: "b", text: "To explain how a green roof absorbs rain and releases it slowly" },
              { id: "c", text: "To show that green roofs are cheaper than ordinary roofs" },
              { id: "d", text: "To suggest that green roofs are often dirty" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Analogy", statement: "An analogy explains function by comparing it to something familiar." }],
            steps: [
              { reasoning: "The sponge comparison is about holding water, not about softness or cost.", evidence: "the way a sponge holds water and lets it go when squeezed", marks: 1, markCode: "AO2" },
              { reasoning: "It clarifies the contrast with ordinary roofs that send water straight into drains.", evidence: "A green roof soaks up much of the rain and releases it slowly", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** The analogy matches function: both absorb water and release it slowly. The other choices match appearance or invent a meaning.",
            commonErrors: ["Choosing (a) by matching the look of a sponge instead of what it does."],
          },
        },
        {
          id: "ela8-u2-connections-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: ROOFS,
          stem: "In paragraph 3, the author makes two comparisons. Identify both comparisons and explain what each helps the reader understand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Analogy and simile", statement: "Comparing to a familiar object explains an unfamiliar process." },
              { kind: "skill", name: "Explaining purpose", statement: "Say what the comparison clarifies, not only what it is." },
            ],
            steps: [
              { reasoning: "Identifies the first comparison: a green roof and a sponge.", evidence: "works like a sponge", marks: 1, markCode: "AO2" },
              { reasoning: "Explains that it clarifies how the roof absorbs and slowly releases storm water.", evidence: "releases it slowly", marks: 1, markCode: "AO2" },
              { reasoning: "Identifies the second comparison: the plants' shade and a tree shading a car.", evidence: "just as a tree shades a parked car", marks: 1, markCode: "AO2" },
              { reasoning: "Explains that it clarifies how the plants keep the building cooler in summer.", evidence: "stays cooler in summer", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The author compares a green roof to a sponge, which explains how it soaks up rain and releases it slowly. The author also compares the roof's plants to a tree shading a parked car, which explains how the plants keep the building cool in summer.",
            commonErrors: ["Naming the comparisons without explaining what they clarify.", "Describing the three roof categories, which are not comparisons."],
          },
        },
        {
          id: "ela8-u2-connections-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: ROOFS,
          stem: "Answer all parts of this question about 'Gardens in the Sky'.",
          parts: [
            { label: "a", prompt: "Name the three categories of green roof that the author describes.", marks: 2 },
            { label: "b", prompt: "Explain how the author distinguishes the community roof from the other two categories.", marks: 4 },
            { label: "c", prompt: "Analyze how the author makes connections between ideas and events in the text to help readers understand green roofs. Refer to at least three examples.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Categories", statement: "Sorting a topic into groups makes information easier to compare." },
              { kind: "technique", name: "Analogy", statement: "Familiar comparisons make technical processes easy to picture." },
              { kind: "skill", name: "Connecting ideas", statement: "Explain how a link between ideas or events builds understanding." },
            ],
            steps: [
              { part: "a", reasoning: "Names the extensive roof and the intensive roof (1 mark for any two correct categories).", evidence: "the extensive roof", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Names all three, including the community roof (second mark for all three).", evidence: "the community roof", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The community roof is defined by who tends it rather than by depth or weight.", evidence: "tended by neighbors or students", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "It is also defined by what it grows: vegetables and flowers, unlike the mosses and grasses or the shrubs and trees.", evidence: "planted with vegetables and flowers", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The categories group the topic and point out distinctions in cost and weight.", evidence: "light and cheap", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The sponge and shade analogies connect an unfamiliar process to familiar objects.", evidence: "works like a sponge", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The final paragraph connects the modern roof to an older event, turf houses, showing that the idea has a history.", evidence: "Modern green roofs borrow that old idea", marks: 2, markCode: "AO2" },
            ],
            levels: rubric(6, [5, 3, 2], "c"),
            finalAnswer: "(a) Extensive, intensive, and community roofs. (b) The community roof is defined by who looks after it (neighbors or students) and by what it grows (vegetables and flowers), not by its depth. (c) The author sorts roofs into categories with clear distinctions, uses the sponge and shade analogies to explain how roofs work, and connects the modern roof to older turf houses, which shows that new engineering builds on an old idea.",
            commonErrors: ["Listing connections without explaining how they help the reader.", "Describing the roofs again without analyzing the author's method."],
            examinerNote: "Part (c) rewards explanation of how each connection helps the reader, not just naming it.",
          },
        },
      ],
    },
  ],
};
