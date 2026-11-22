import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "./levels.ts";

const FERRY: TextExtract = {
  title: "The Last Ferry",
  author: "Written for Akademik Space",
  text: "Captain Reyes had run the ferry across Marlow Bay for thirty-one years, and every morning he greeted the same gulls by name. When the county announced that a bridge would replace the ferry, he said nothing at all. He simply polished the brass rail, which already gleamed, and repainted the number on the hull, which had not faded.\n\nHis granddaughter Lucia, visiting for the summer, watched him from the dock. At the town meeting, other captains shouted and waved their hats. Captain Reyes sat in the back row with his arms folded. When a councilman thanked him for his years of service, he stood, nodded once, and walked out before the applause had finished.\n\nThat night Lucia found him in the wheelhouse, sorting through a drawer of old tickets. 'It's only a bridge,' she said gently.\n\n'Of course,' he said. He did not look up. 'Progress. Good for business.' He held one ticket to the lamp, a child's drawing of a boat scrawled on the back, and slid it into his shirt pocket. 'Go to bed, Lucia. Tomorrow we have the six o'clock run.'",
};

const ORCHARD: TextExtract = {
  title: "The Orchard",
  author: "Written for Akademik Space",
  text: "When Mira's family bought the farm, the apple trees along the back fence were already dying. 'Pull them out,' the realtor advised. 'Plant something new.' But Mira's father only shook his head and said the trees had been there longer than the house.\n\nThrough the first winter, Mira watched him prune the dead branches and wrap the trunks in burlap. He worked whenever the weather allowed and never promised her anything. In spring, only two trees bloomed, and the blossoms were thin and pale. Mira wanted to feel hopeful, but the other eleven trees stood bare, and she told her father it was hopeless.\n\n'Maybe,' he said. 'But the roots are alive. Roots take longer than leaves.'\n\nBy the third summer, nine of the trees wore leaves. Mira picked the first ripe apple, small and lopsided, and bit into it standing in the grass. It was sour. She laughed anyway and carried the rest of the bucket to the porch, where her mother was waiting with a knife and a pie tin. 'Next year,' her father said, 'they'll be sweeter.'",
};

export const lesson11: Lesson = {
  id: "ela8-u1-lesson-1-1",
  code: "1-1",
  title: "Evidence and Theme",
  goal: "I CAN cite the strongest textual evidence to support an analysis, and analyze how a theme develops through characters, setting, and plot to write an objective summary.",
  standards: ["RL.8.1", "RL.8.2"],
  vocabulary: [
    {
      term: "Strongest evidence",
      definition:
        "The details or quotations that most directly and convincingly prove a claim, chosen over details that are only loosely related.",
    },
    {
      term: "Inference",
      definition:
        "A conclusion you reach by combining clues in the text with your own reasoning.",
    },
    {
      term: "Theme",
      definition:
        "A message or insight about life that develops across a whole text, written as a complete sentence.",
    },
    {
      term: "Theme development",
      definition:
        "The way characters, setting, and plot events build a theme step by step over the course of a text.",
    },
    {
      term: "Objective summary",
      definition:
        "A brief, fair account of the key events or ideas in your own words, with no opinions.",
    },
    {
      term: "Resolution",
      definition:
        "The part of the plot in which the main conflict is settled and the outcome is shown.",
    },
  ],
  concepts: [
    {
      id: "ela8-u1-strongest-evidence",
      title: "Citing the strongest textual evidence",
      skill:
        "Choose, from many details, the evidence that most directly proves what the text says and what it implies.",
      lesson: {
        sections: [
          {
            heading: "Strong versus weak evidence",
            body: "In Grade 8 it is not enough to find a quotation that is merely connected to your claim. You must choose the **strongest** evidence: the detail that proves the claim most directly. Weak evidence is background information, or a detail that fits several different claims. Strong evidence is specific, shows the idea in action, and would still convince a skeptical reader. Test each quotation by asking: if I removed this, would my claim be less convincing?",
          },
          {
            heading: "Combining what is stated and what is implied",
            body: "Authors often show feelings through actions, dialogue, and small objects instead of naming them. The strongest analysis uses **explicit** details (what the text says) to support **inferences** (what the text suggests). When a character's words and actions disagree, the actions usually reveal the truth. Quote briefly and exactly, embed the quotation in your own sentence, and then explain what it shows. Evidence with no explanation is only a list.",
          },
        ],
        keyFormulas: [
          {
            name: "Strongest evidence",
            statement:
              "Evidence that is accurate, specific, and directly proves the claim, not just a detail from the same scene.",
          },
          {
            name: "Explicit and implicit",
            statement:
              "Explicit details are stated outright; implicit meaning is suggested and must be inferred from several clues.",
          },
          {
            name: "Claim, evidence, explanation",
            statement:
              "State a precise claim, support it with a short exact quotation, then explain how the quotation proves it.",
          },
        ],
        workedExample: {
          problem:
            "From 'The Last Ferry': What can you infer about Captain Reyes's feelings about the bridge? Cite the strongest evidence.",
          solution:
            "Captain Reyes is deeply sad about losing the ferry, but he hides it. The strongest evidence is the gap between his words and his actions. He tells Lucia, 'Progress. Good for business,' yet he 'did not look up,' which suggests he cannot meet her eyes while he says it. More tellingly, he keeps a ticket with 'a child's drawing of a boat' and slides it into his pocket, showing that the people he carried matter more to him than business. The detail that he 'simply polished the brass rail, which already gleamed' is weaker because it shows nervousness but not what he is nervous about.",
        },
      },
      questions: [
        {
          id: "ela8-u1-strongest-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FERRY,
          stem: "A reader claims that Captain Reyes is trying to hide how upset he is about the bridge. Which detail from the passage is the strongest evidence for this claim?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Captain Reyes had run the ferry across Marlow Bay for thirty-one years.",
              },
              {
                id: "b",
                text: "He simply polished the brass rail, which already gleamed, and repainted the number on the hull, which had not faded.",
              },
              { id: "c", text: "Tomorrow we have the six o'clock run." },
              {
                id: "d",
                text: "His granddaughter Lucia, visiting for the summer, watched him from the dock.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Choosing the strongest evidence",
                statement:
                  "The strongest evidence shows the claimed behavior in action, not just background about the character or setting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "He says nothing about the bridge but busies himself with pointless work, which shows him hiding his feelings behind a task.",
                evidence: "polished the brass rail, which already gleamed",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Polishing something that already gleams shows him channeling his feelings into busywork instead of speaking. Choice (a) is background, (c) is about Lucia, and (d) is an ordinary instruction that does not show hidden feeling.",
            commonErrors: [
              "Choosing (a) because it sounds important, without checking that it shows hiding feelings.",
            ],
          },
        },
        {
          id: "ela8-u1-strongest-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FERRY,
          stem: "Lucia says, 'It's only a bridge.' Make a claim about what the ferry means to Captain Reyes, and support it with the two strongest pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Claim and strongest evidence",
                statement:
                  "Make a precise inference, then back it with the quotations that prove it most directly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Claim: the ferry is a personal bond with the people and place he serves, not simply a job.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: he keeps a passenger's drawing, which shows he treasures the people he carried.",
                evidence: "a child's drawing of a boat scrawled on the back",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: he treats even the gulls as friends, showing how personal the daily routine is to him.",
                evidence: "he greeted the same gulls by name",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "For Captain Reyes the ferry is a way of life built on relationships, not just a job. He greets 'the same gulls by name,' and he slides a ticket bearing 'a child's drawing of a boat' into his pocket, treating a passenger's gift as a treasure.",
            commonErrors: [
              "Using 'thirty-one years' as the only evidence, which shows length but not feeling.",
              "Giving evidence with no claim.",
            ],
          },
        },
        {
          id: "ela8-u1-strongest-evidence-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: FERRY,
          stem: "Captain Reyes tells Lucia, 'Progress. Good for business.' Do his words or his actions better reveal how he really feels? Select at least three pieces of textual evidence and explain why they are the strongest.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Words versus actions",
                statement:
                  "When a character's words and actions disagree, the actions are usually the stronger evidence of true feeling.",
              },
              {
                kind: "skill",
                name: "Selecting evidence",
                statement:
                  "Choose quotations that prove the claim directly, and explain why each one matters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "He avoids eye contact while saying he accepts the change, which signals that the words are not sincere.",
                evidence: "He did not look up.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "He leaves the meeting before the applause ends, showing that praise for his service cannot comfort him about the loss.",
                evidence: "walked out before the applause had finished",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Keeping a passenger's drawing shows how much the ferry's people mean to him, contradicting 'only business'.",
                evidence: "slid it into his shirt pocket",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The conclusion weighs the evidence: his actions are stronger than his short, stiff words, so they reveal grief he refuses to name.",
                evidence: "Of course",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: levels8(),
            finalAnswer:
              "His actions reveal his real feelings far better than his words. He says 'Progress. Good for business,' but 'He did not look up,' as if he cannot say it honestly. He 'walked out before the applause had finished' because praise cannot ease his loss. Most telling, he slides a child's drawing 'into his shirt pocket,' showing he values the passengers more than business, so he is grieving behind a calm surface.",
            commonErrors: [
              "Taking his spoken words at face value.",
              "Listing quotations without saying why they are stronger than other details.",
              "Using only one piece of evidence.",
            ],
            examinerNote:
              "Top responses explicitly compare words and actions and justify their choice of evidence.",
          },
        },
        {
          id: "ela8-u1-strongest-evidence-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: FERRY,
          stem: "Answer all parts of this question about 'The Last Ferry'.",
          parts: [
            {
              label: "a",
              prompt:
                "Cite two details from the second paragraph that show how Captain Reyes behaves at the town meeting.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "What can you infer about Captain Reyes's relationship with his passengers? Cite two pieces of evidence.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Does the passage show Captain Reyes feeling more angry or more sad? Select at least three pieces of the strongest textual evidence and explain why they are stronger than other details.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Retrieval and inference",
                statement:
                  "Use directly stated details for retrieval and combine clues for inference.",
              },
              {
                kind: "skill",
                name: "Evaluating evidence",
                statement:
                  "Choose the quotations that most directly prove the claim and explain why.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "He is silent and withdrawn while others protest.",
                evidence: "sat in the back row with his arms folded",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "He leaves quickly after being thanked.",
                evidence: "walked out before the applause had finished",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "He remembers individual passengers, as shown by a ticket he saves.",
                evidence: "a child's drawing of a boat",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "He thinks of the ferry as a community: even the gulls get a daily greeting, suggesting warmth toward everyone aboard.",
                evidence: "greeted the same gulls by name",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Quiet, not shouting, behavior contrasts with the angry captains and points to sadness rather than anger.",
                evidence: "other captains shouted and waved their hats",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Care for objects that need no care shows grief expressed through tenderness.",
                evidence: "polished the brass rail, which already gleamed",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Saving the drawing shows loss of something loved, not resentment.",
                evidence: "slid it into his shirt pocket",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Explains why these details outrank weaker ones such as his thirty-one years: they show feeling in action.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: levels8("c"),
            finalAnswer:
              "(a) He 'sat in the back row with his arms folded' and 'walked out before the applause had finished'. (b) He treasures individual passengers ('a child's drawing of a boat') and greets 'the same gulls by name', showing deep personal connection. (c) He is more sad than angry. While the other captains 'shouted and waved their hats,' he is silent; he polishes a rail 'which already gleamed,' pours care into the ferry, and keeps a child's drawing. These details show tenderness and loss in action, which makes them stronger than background such as his years of service.",
            commonErrors: [
              "In (a), quoting details from other paragraphs.",
              "In (c), choosing background facts as evidence.",
              "Giving an opinion with no explanation of why the evidence is strongest.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u1-theme-development",
      title: "Theme development and objective summary",
      skill:
        "Trace how characters, setting, and plot build a theme, then summarize the text without opinion.",
      lesson: {
        sections: [
          {
            heading: "How a theme is built",
            body: "A **theme** is a message about life, written as a full sentence, for example: 'Patient care can restore what seems lost.' It is not a single word ('patience') and not a plot event. Themes are developed by **characters** (what they want, learn, and say), **setting** (places, seasons, and objects that reflect the idea), and **plot** (the conflict, turning point, and resolution). Ask: how does the situation change from the beginning to the end, and what does the change suggest about life?",
          },
          {
            heading: "Writing an objective summary",
            body: "An **objective summary** states the key events in order, in your own words, in a few sentences. It names the main character and conflict, the turning point, and the outcome. It leaves out opinions ('a lovely story'), judgments, minor details, and direct quotations. Use present tense. A summary tells what happens; a theme explains what it means, so keep them separate.",
          },
        ],
        keyFormulas: [
          {
            name: "Theme statement",
            statement:
              "A complete sentence about life that the whole text supports, not a topic word.",
          },
          {
            name: "Development",
            statement:
              "Characters, setting, and plot events together build the theme from the beginning to the resolution.",
          },
          {
            name: "Objective summary",
            statement:
              "Key events in order, in your own words, with no opinions or minor details.",
          },
        ],
        workedExample: {
          problem:
            "From 'The Orchard': State a theme and explain how setting and plot develop it.",
          solution:
            "A theme is that patient, steady care can bring back what seems lost. The setting begins with trees 'already dying,' so the situation looks hopeless. In the first spring, only two trees bloom, which shows that progress is small and slow. By the third summer nine trees have leaves, and the first apple is sour but welcomed with laughter. This plot of slow recovery proves that effort takes time to show results, and the father's line 'Roots take longer than leaves' states the idea inside the story.",
        },
      },
      questions: [
        {
          id: "ela8-u1-theme-development-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ORCHARD,
          stem: "Which statement best expresses a theme of 'The Orchard'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Apples taste best when they are picked ripe." },
              { id: "b", text: "Real estate agents often give poor advice." },
              {
                id: "c",
                text: "Patient effort can bring back what seems lost.",
              },
              { id: "d", text: "Buying a farm is difficult." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theme",
                statement:
                  "A theme is a message about life that the whole text develops, not a small detail of the plot.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The dying orchard slowly recovers because of the father's patient work, which gives the message.",
                evidence: "Roots take longer than leaves.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. The story follows slow recovery through patient care. (b) is a minor detail, and (c) and (d) are not developed across the story.",
            commonErrors: [
              "Choosing a plot detail instead of a message about life.",
            ],
          },
        },
        {
          id: "ela8-u1-theme-development-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: ORCHARD,
          stem: "How does the detail 'only two trees bloomed, and the blossoms were thin and pale' help develop the theme?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It introduces a new conflict between the family and the realtor.",
              },
              {
                id: "b",
                text: "It shows that Mira dislikes spring and the farm.",
              },
              {
                id: "c",
                text: "It proves the father's efforts were a mistake and the orchard should have been replaced.",
              },
              {
                id: "d",
                text: "It shows that early progress is small and discouraging, which makes the later recovery feel earned and supports the idea that results take time.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Setting and theme",
                statement:
                  "Details of setting can show stages of change that build the theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The slight, pale blossoms show only a tiny beginning of recovery, which tests the characters' hope.",
                evidence: "thin and pale",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Because progress is slow at first, the later leaves and apples reinforce the message that patience is rewarded.",
                evidence: "nine of the trees wore leaves",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. The weak spring shows how slowly recovery begins, so the later success supports the theme. (a) contradicts the ending, (b) is unsupported, and (d) is not in the passage.",
            commonErrors: [
              "Choosing (a) after reading only the discouraging detail and ignoring the ending.",
            ],
          },
        },
        {
          id: "ela8-u1-theme-development-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ORCHARD,
          stem: "State a theme of 'The Orchard' and analyze how the author develops it through the characters, the setting, and the plot. Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theme",
                statement:
                  "A full-sentence message about life, supported across the whole text.",
              },
              {
                kind: "skill",
                name: "Tracing development",
                statement:
                  "Show how conflict, turning point, and resolution build the message over time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The setting begins with failure: the dying trees and the realtor's advice set up a hopeless situation.",
                evidence: "already dying",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The father's character embodies patience, caring for the trees through winter without promises.",
                evidence: "never promised her anything",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "His line states the idea, and Mira's doubt makes the conflict between hope and giving up.",
                evidence: "Roots take longer than leaves.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The resolution shows partial but real success; the sour apple and laughter show that patience brings reward even if it is imperfect.",
                evidence: "It was sour. She laughed anyway",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: levels8(),
            finalAnswer:
              "A theme is that patient care can restore what seems lost. The setting begins with trees 'already dying,' but the father, who 'never promised her anything,' keeps working. His line 'Roots take longer than leaves' answers Mira's doubt and names the idea. By the third summer the first apple is sour, yet Mira 'laughed anyway,' showing that slow, imperfect progress is still success.",
            commonErrors: [
              "Writing the theme as a single word.",
              "Retelling the story without linking events to the message.",
              "Using evidence from only one part of the passage.",
            ],
          },
        },
        {
          id: "ela8-u1-theme-development-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: ORCHARD,
          stem: "Answer all parts of this question about 'The Orchard'.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two ways Mira's father's actions differ from the realtor's advice.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write an objective summary of the passage in three sentences.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "How do the father's words and the changes in the orchard together develop the theme? Cite at least three pieces of textual evidence.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Objective summary",
                statement:
                  "Cover the main events in order, in your own words, without opinion.",
              },
              {
                kind: "skill",
                name: "Linking events to theme",
                statement:
                  "Explain how specific events and words build the message.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "He refuses to remove the old trees, while the realtor says to replace them.",
                evidence: "only shook his head",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "He works to save the trees with pruning and burlap instead of planting something new.",
                evidence:
                  "prune the dead branches and wrap the trunks in burlap",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Names the conflict: Mira's father decides to save dying apple trees on their new farm.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Includes the middle: only two trees bloom in spring and Mira feels it is hopeless.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "States the outcome: by the third summer most trees have leaves and the family enjoys the first apples.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Uses own words, present tense, and no opinion, so earns the writing mark.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "The father's words state the idea that results come slowly.",
                evidence: "Roots take longer than leaves.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The bare trees after the first spring show the setting at its lowest point, testing hope.",
                evidence: "the other eleven trees stood bare",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The growing leaves show change over time, which proves the father right.",
                evidence: "nine of the trees wore leaves",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The final promise looks ahead, suggesting that patience continues to be rewarded.",
                evidence: "they'll be sweeter",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: levels8("c"),
            finalAnswer:
              "(a) He refuses to pull the trees out and instead prunes and wraps them. (b) Mira's family buys a farm with dying apple trees, and her father decides to save them instead of replacing them. Only two trees bloom in spring, and Mira thinks the effort is hopeless, but by the third summer nine trees have leaves and the family eats its first apples. (c) The theme is that patience restores what seems lost. After a poor spring, when 'the other eleven trees stood bare,' the father says 'Roots take longer than leaves.' Later 'nine of the trees wore leaves,' proving him right, and his promise that 'they'll be sweeter' looks ahead.",
            commonErrors: [
              "Including opinions such as 'a nice story' in the summary.",
              "Using quotations in the summary instead of own words.",
              "Describing the orchard without linking it to a message.",
            ],
          },
        },
      ],
    },
  ],
};
