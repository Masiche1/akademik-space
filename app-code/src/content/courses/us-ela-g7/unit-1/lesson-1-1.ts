import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "./levels.ts";

const VOLCANO: TextExtract = {
  title: "The Volcano",
  author: "Written for Akademik Space",
  text: "Marcus had promised his team that the model volcano would be finished by Friday. It was now Thursday night, and the cardboard cone in the garage was still bare, a gray lump with a crooked crater. He stood over it with a tube of glue in one hand and a paintbrush in the other, doing neither.\n\nHis sister Ana appeared in the doorway. 'Mom says it's after nine,' she said. 'You've been out here since dinner.'\n\n'I know.' He did not turn around. 'It's fine. I just need a few more minutes.'\n\nAna crossed the garage and looked at the cone, then at his hands. The glue had hardened at the tip of the tube. The brush was dry. Beside the workbench, the trash can held three crumpled sketches, each one torn from his notebook with a sharp, impatient rip.\n\n'You could ask Dylan to help,' she said.\n\n'He's got his own project.' Marcus finally set the glue down, carefully, as if it might break. 'Besides, if I can't finish one volcano by myself, what's the point of being in charge?'",
};

const BRIDGE: TextExtract = {
  title: "The Bridge",
  author: "Written for Akademik Space",
  text: "Two families lived on opposite banks of a narrow river, and for years they shared nothing but a rickety footbridge and a quarrel about a fence. The Hallorans said the Brandts had moved the fence post. The Brandts said it had never been moved. Neither family would cross the bridge, and its boards began to rot.\n\nOne spring the river rose after days of rain. Old Mr. Halloran, who could not see well anymore, went out at dawn to check his lambs and found the youngest stuck in the mud on the far bank. He stood at the water's edge, shouting, until Mrs. Brandt appeared on her porch. She did not speak. She walked straight onto the bridge, testing each board with her foot, and lifted the lamb into her arms.\n\nWhen she set it down at his feet, they stood for a moment with the water roaring beneath them. 'The fence post,' Mr. Halloran said at last, 'can stay where it is.' The next week, both families came out with hammers and new boards, and by June there was a path worn in the grass between the two doors.",
};

export const lesson11: Lesson = {
  id: "ela7-u1-lesson-1-1",
  code: "1-1",
  title: "Evidence and Theme",
  goal: "I CAN cite several pieces of textual evidence to support inferences, and determine a theme and write an objective summary of a story.",
  standards: ["RL.7.1", "RL.7.2"],
  vocabulary: [
    { term: "Textual evidence", definition: "Exact words or details from the text that support a claim or inference." },
    { term: "Inference", definition: "A reasonable conclusion based on clues in the text plus your own reasoning." },
    { term: "Theme", definition: "A message or big idea about life that a story develops, stated as a full sentence." },
    { term: "Objective summary", definition: "A short, fair retelling of the most important ideas or events without opinions." },
    { term: "Subjective", definition: "Based on personal feelings or opinions rather than on facts in the text." },
    { term: "Topic", definition: "The general subject of a text, such as friendship. A topic is not the same as a theme." },
  ],
  concepts: [
    {
      id: "ela7-u1-citing-evidence",
      title: "Citing evidence and making inferences",
      skill: "Support what the text says, and what it implies, with several strong pieces of textual evidence.",
      lesson: {
        sections: [
          {
            heading: "What the text says and what it suggests",
            body: "Some information is stated directly. Other information is **implied**: the author shows it through actions, dialogue, and small details, and the reader must infer it. A strong inference combines clues from the text with your own reasoning. Ask: what does this detail suggest, and does anything else in the passage point the same way?",
          },
          {
            heading: "Choosing several pieces of evidence",
            body: "Grade 7 readers cite **several** pieces of evidence, not just one. Choose quotations that directly prove your claim, keep them short, and quote them exactly. Then explain how each one supports your claim. Evidence without explanation is only a list. A useful pattern is claim, evidence, explanation, and then a second and third piece of evidence that points the same way.",
          },
        ],
        keyFormulas: [
          { name: "Explicit and implicit", statement: "Explicit information is stated outright; implicit information is suggested and must be inferred." },
          { name: "Strong evidence", statement: "Evidence that is accurate, short, and directly connected to the claim." },
          { name: "Claim, evidence, explanation", statement: "State a claim, support it with a quotation, then explain how the quotation proves the claim." },
        ],
        workedExample: {
          problem: "From 'The Volcano': What can you infer about Ana's feelings toward her brother? Cite two pieces of textual evidence.",
          solution: "Ana cares about Marcus and is worried about him. First, she came to find him even though it was late: she says, 'Mom says it's after nine,' which shows she is checking on him. Second, she notices details: she 'looked at the cone, then at his hands,' which suggests she is quietly working out how much trouble he is in. She then offers a helpful idea, 'You could ask Dylan to help,' which shows she wants to support him rather than criticize him.",
        },
      },
      questions: [
        {
          id: "ela7-u1-citing-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: VOLCANO,
          stem: "Which detail from the passage best supports the inference that Marcus has made little real progress on his project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marcus had promised his team that the volcano would be finished by Friday." },
              { id: "b", text: "The glue had hardened at the tip of the tube, and the brush was dry." },
              { id: "c", text: "Ana says he has been out in the garage since dinner." },
              { id: "d", text: "Marcus says Dylan has his own project." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Choosing supporting evidence", statement: "The best evidence directly proves the specific inference being made." }],
            steps: [{ reasoning: "Hardened glue and a dry brush show that neither tool has been used for a long time, which directly proves little progress.", evidence: "The glue had hardened at the tip of the tube", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)**. Hardened glue and a dry brush are physical proof that he has not been working. Choice (c) shows time passing but not lack of progress, and (a) and (d) are background details.",
            commonErrors: ["Choosing (c) because it shows how long he has been there, without checking that the claim is about progress."],
          },
        },
        {
          id: "ela7-u1-citing-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: VOLCANO,
          stem: "What does Marcus's last remark reveal about how he feels about leading the team? Cite two pieces of textual evidence to support your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Claim and evidence", statement: "Make a clear inference and support it with accurate, relevant quotations." },
            ],
            steps: [
              { reasoning: "Claim: he feels intense pressure and doubts himself as a leader because the project is not going well.", evidence: "what's the point of being in charge?", marks: 1, markCode: "AO1" },
              { reasoning: "He believes a leader should be able to finish alone, so struggling feels like failing.", evidence: "if I can't finish one volcano by myself", marks: 1, markCode: "AO1" },
              { reasoning: "He rejects help from others, which suggests he feels he must prove himself.", evidence: "He's got his own project.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Marcus feels pressure and doubts that he is a good leader. He asks, 'what's the point of being in charge?' and thinks that if he cannot finish 'one volcano by myself,' he has failed. He also avoids asking for help, saying 'He's got his own project.'",
            commonErrors: ["Saying he is 'stressed' without quoting the line that proves it.", "Quoting the whole final sentence instead of the key words."],
          },
        },
        {
          id: "ela7-u1-citing-evidence-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: VOLCANO,
          stem: "When Ana speaks to him, Marcus says, 'It's fine.' Using at least three pieces of textual evidence, explain what Marcus is really feeling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference from contradiction", statement: "When a character's words and actions disagree, the actions often reveal the true feeling." },
              { kind: "skill", name: "Multiple evidence", statement: "Support an inference with several quotations that point the same way, and explain each one." },
            ],
            steps: [
              { reasoning: "He holds the tools but cannot use them, which shows he is frozen by stress and not simply busy.", evidence: "doing neither", marks: 2, markCode: "AO1" },
              { reasoning: "The sketches were torn out with force, which suggests frustration at his own failed ideas, contradicting 'fine'.", evidence: "a sharp, impatient rip", marks: 2, markCode: "AO1" },
              { reasoning: "He puts the glue down as if even the object were fragile, which suggests he feels defeated and close to breaking.", evidence: "carefully, as if it might break", marks: 2, markCode: "AO1" },
              { reasoning: "His closing question reveals self-doubt and fear of failing as a leader, the real feeling behind 'fine'.", evidence: "what's the point of being in charge?", marks: 2, markCode: "AO1" },
            ],
            levels: levels8(),
            finalAnswer: "Marcus is not fine; he is overwhelmed and afraid of failing. He holds glue and a brush 'doing neither,' which shows he is frozen. The sketches were torn with 'a sharp, impatient rip,' suggesting frustration. He sets the glue down 'carefully, as if it might break,' as if he is close to giving up, and his question 'what's the point of being in charge?' shows how much he doubts himself.",
            commonErrors: ["Taking 'It's fine' at face value.", "Listing quotations without explaining what each suggests.", "Using only one piece of evidence."],
            examinerNote: "Top responses notice the gap between what Marcus says and what the narrator shows.",
          },
        },
        {
          id: "ela7-u1-citing-evidence-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: VOLCANO,
          stem: "Answer all parts of this question about 'The Volcano'.",
          parts: [
            { label: "a", prompt: "Cite two details from the first paragraph or the fourth paragraph that show Marcus has not made much progress.", marks: 2 },
            { label: "b", prompt: "What can you infer about Ana's feelings toward her brother? Cite evidence.", marks: 4 },
            { label: "c", prompt: "What does the passage suggest about the pressure Marcus puts on himself? Cite at least three pieces of textual evidence.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval and inference", statement: "Use directly stated details for retrieval questions and combine clues for inference." },
              { kind: "skill", name: "Evidence and explanation", statement: "Every quotation must be followed by an explanation of what it shows." },
            ],
            steps: [
              { part: "a", reasoning: "The volcano has not even been started properly.", evidence: "was still bare", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The painting tool is unused.", evidence: "The brush was dry.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Ana checks on him, which shows concern.", evidence: "Mom says it's after nine", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "She observes carefully and offers help, which suggests she cares and wants to solve the problem.", evidence: "You could ask Dylan to help", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "He avoids looking at his sister, perhaps hiding embarrassment at how little he has done.", evidence: "He did not turn around.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "He wants more time and refuses to admit the deadline is in danger.", evidence: "I just need a few more minutes", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Torn-up drafts suggest he is never satisfied with his own ideas.", evidence: "three crumpled sketches", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "He ties his worth to doing everything alone.", evidence: "if I can't finish one volcano by myself", marks: 2, markCode: "AO1" },
            ],
            levels: levels8("c"),
            finalAnswer: "(a) The cone was 'still bare'; the brush 'was dry'. (b) Ana is concerned and supportive: she checks on him ('Mom says it's after nine') and suggests 'You could ask Dylan to help.' (c) Marcus holds himself to an impossible standard. He will not face his sister ('He did not turn around'), insists he needs 'a few more minutes,' tears up sketches, and believes that if he cannot finish 'one volcano by myself' then there is no point in being the leader.",
            commonErrors: ["In (a), quoting details that are not about progress.", "In (c), retelling the passage instead of inferring the pressure.", "Giving evidence with no explanation."],
          },
        },
      ],
    },
    {
      id: "ela7-u1-theme-summary",
      title: "Determining theme and summarizing objectively",
      skill: "State a theme as a full sentence, trace how it develops, and write an objective summary.",
      lesson: {
        sections: [
          {
            heading: "Topic versus theme",
            body: "A **topic** is a word or phrase, such as 'neighbors' or 'pride'. A **theme** is a message about life that the story develops, written as a complete sentence: 'Pride can keep people apart, but kindness can bring them back together.' Look for what changes for the characters, what the conflict teaches, and details or objects that repeat.",
          },
          {
            heading: "How a theme develops",
            body: "Themes build over the whole text. Notice the **conflict** at the start, the **turning point** where a character makes a key choice, and the **resolution**. Ask what the characters learn, and why the author included specific details such as an object or a setting. A theme must be supported by evidence from more than one part of the text.",
          },
          {
            heading: "Writing an objective summary",
            body: "An **objective summary** states the most important events or ideas in your own words, in the order they happen, in a few sentences. It leaves out personal opinions ('I think'), minor details, and judgments ('foolish', 'wonderful'). Use present tense and name the key characters and conflict.",
          },
        ],
        keyFormulas: [
          { name: "Theme statement", statement: "A complete sentence about life, not a single word: avoid 'The theme is friendship.'" },
          { name: "Theme development", statement: "Conflict, turning point, and resolution show how the author builds the message." },
          { name: "Objective summary", statement: "Key events, in order, in your own words, with no opinions or minor details." },
        ],
        workedExample: {
          problem: "From 'The Bridge': State a theme and give two details that develop it.",
          solution: "A theme is that helping someone in need can heal an old quarrel. At the start, pride keeps the families apart: they share only 'a quarrel about a fence,' and 'Neither family would cross the bridge.' At the turning point, Mrs. Brandt acts to save the lamb without a word, and in the end Mr. Halloran says the fence post 'can stay where it is,' and both families rebuild the bridge. The change from silence to cooperation shows the theme.",
        },
      },
      questions: [
        {
          id: "ela7-u1-theme-summary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BRIDGE,
          stem: "Which statement best expresses a theme of 'The Bridge'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rivers can rise quickly in the spring." },
              { id: "b", text: "Helping someone in need can heal an old quarrel." },
              { id: "c", text: "Neighbors and fences." },
              { id: "d", text: "Lambs need protection from floods." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Theme", statement: "A theme is a complete statement about life that the whole text develops." }],
            steps: [{ reasoning: "The quarrel ends only after an act of kindness, so the story's message is that helping others can repair relationships.", evidence: "a path worn in the grass between the two doors", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)**. Choice (c) is only a topic, and (a) and (d) are small details of the plot, not a message about life.",
            commonErrors: ["Choosing a topic phrase instead of a full-sentence message.", "Choosing a plot detail as a theme."],
          },
        },
        {
          id: "ela7-u1-theme-summary-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: BRIDGE,
          stem: "Which of the following is the best objective summary of the passage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mrs. Brandt is a hero, and Mr. Halloran is foolish for letting his lamb get stuck." },
              { id: "b", text: "Two families who quarrel over a fence stay apart until Mrs. Brandt rescues a stranded lamb, and the families then make peace and repair the bridge." },
              { id: "c", text: "The story is about a river that rises in the spring after days of rain." },
              { id: "d", text: "I think the families should have settled their quarrel sooner, because fences cause trouble." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Objective summary", statement: "A summary covers the main events fairly and contains no personal opinion." }],
            steps: [
              { reasoning: "Choice (b) includes the conflict, the turning point, and the resolution in order.", evidence: "found the youngest stuck in the mud", marks: 1, markCode: "AO1" },
              { reasoning: "It contains no opinions, unlike (a) and (d), and covers more than one small detail, unlike (c).", evidence: "both families came out with hammers and new boards", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)**. (a) and (d) include opinions ('hero', 'foolish', 'I think'), and (c) mentions only one setting detail.",
            commonErrors: ["Choosing an answer that sounds confident but contains a judgment."],
          },
        },
        {
          id: "ela7-u1-theme-summary-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: BRIDGE,
          stem: "State a theme of 'The Bridge' and explain how the author develops it over the course of the passage. Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme", statement: "A message about life, written as a full sentence and supported across the text." },
              { kind: "skill", name: "Tracing development", statement: "Explain how the conflict, turning point, and resolution build the message." },
            ],
            steps: [
              { reasoning: "The conflict shows stubbornness dividing people: the families share only an old quarrel.", evidence: "a quarrel about a fence", marks: 2, markCode: "AO1" },
              { reasoning: "The rotting bridge symbolizes the damaged relationship, because neglect makes both fall apart.", evidence: "its boards began to rot", marks: 2, markCode: "AO1" },
              { reasoning: "The turning point is Mrs. Brandt's silent act of kindness, which puts compassion before pride.", evidence: "She did not speak. She walked straight onto the bridge", marks: 2, markCode: "AO1" },
              { reasoning: "The resolution shows the quarrel forgiven and the community rebuilt, proving the theme.", evidence: "can stay where it is", marks: 2, markCode: "AO1" },
            ],
            levels: levels8(),
            finalAnswer: "A theme is that kindness can heal a quarrel that pride has kept alive. At first the families share only 'a quarrel about a fence,' and the bridge's boards 'began to rot,' showing the damaged relationship. The turning point comes when Mrs. Brandt, without speaking, walks onto the bridge to save the lamb. Afterward Mr. Halloran says the fence post 'can stay where it is,' and the families rebuild together, which shows how one act of help restores the community.",
            commonErrors: ["Writing a one-word theme such as 'kindness'.", "Retelling the story without linking events to the message.", "Using evidence from only one part of the text."],
          },
        },
        {
          id: "ela7-u1-theme-summary-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: BRIDGE,
          stem: "Answer all parts of this question about 'The Bridge'.",
          parts: [
            { label: "a", prompt: "Cite two details from the first paragraph that establish the conflict between the families.", marks: 2 },
            { label: "b", prompt: "Write an objective summary of the passage in two or three sentences.", marks: 4 },
            { label: "c", prompt: "How does the bridge itself help the author develop the theme? Cite at least three details from the passage.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Objective summary", statement: "Include the most important events in order, in your own words, without opinion." },
              { kind: "technique", name: "Symbolism", statement: "An object can stand for a larger idea; here the bridge represents the connection between the families." },
            ],
            steps: [
              { part: "a", reasoning: "They are in dispute over a boundary.", evidence: "a quarrel about a fence", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "They refuse to speak or meet.", evidence: "Neither family would cross the bridge", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A summary names the conflict: two families are divided by a quarrel over a fence.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It includes the turning point: Mrs. Brandt saves Mr. Halloran's stranded lamb.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It states the resolution: the families end the quarrel and rebuild the bridge.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The summary is in the writer's own words and free of opinion, so it earns the writing mark.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "The bridge is the only link between the families, though it is old and weak.", evidence: "a rickety footbridge", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Its decay reflects the unhealthy relationship.", evidence: "its boards began to rot", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Mrs. Brandt tests the boards as she crosses, showing trust and courage in repairing the connection.", evidence: "testing each board with her foot", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The new boards and the worn path show the bond renewed.", evidence: "hammers and new boards", marks: 2, markCode: "AO2" },
            ],
            levels: levels8("c"),
            finalAnswer: "(a) 'a quarrel about a fence'; 'Neither family would cross the bridge'. (b) Two families on opposite sides of a river are divided by a quarrel over a fence. When Mrs. Brandt crosses the bridge to rescue Mr. Halloran's stranded lamb, he lets the dispute go, and both families rebuild the bridge together. (c) The bridge represents the relationship between the families. It starts out 'rickety' and its boards 'began to rot' as the quarrel continues. Mrs. Brandt's careful crossing, 'testing each board,' is the first step to trust, and the 'hammers and new boards' show the relationship being mended, which develops the theme that kindness can heal conflict.",
            commonErrors: ["Including opinions such as 'a lovely story' in the summary.", "Describing the bridge literally without linking it to the theme.", "Summarizing every sentence instead of the key events."],
          },
        },
      ],
    },
  ],
};
