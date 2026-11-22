import type { Lesson, TextExtract } from "../../../types.ts";
import { levels6, levels8 } from "./levels.ts";

const RINK: TextExtract = {
  title: "The Night the Ice Held",
  author: "Written for Akademik Space",
  text: 'I was twelve the winter the pond froze solid, and I thought I knew everything about skating. My brother Marcus, who was sixteen and never afraid of anything, waved me toward the middle where the ice was darkest.\n\n"Come on, Nico," he called. "It\'s thick enough for a truck."\n\nI took one step. The ice groaned, a long low sound like a door opening in an empty house. My stomach dropped. Then another step. Then another. Each second stretched until I could count my own heartbeats.\n\nWhen I finally reached him, the ice was still smooth, and he was laughing at my face. I laughed too, though my knees were shaking.\n\nYears later I still think of that groan whenever someone tells me something is safe. Marcus was right that day, but I learned that being told something is safe and feeling it are two different things. Now I test the ice myself.',
};

const ARTICLE: TextExtract = {
  title: "Notes on Sea Turtle Nesting (research notes)",
  author: "Written for Akademik Space",
  text: 'Source A: Coastal Wildlife Institute, 2024. "Female sea turtles return to the beach where they hatched to lay their eggs. A single nest may hold 100 eggs, but only about 1 in 1,000 hatchlings survives to adulthood."\n\nSource B: Blog post by a beach tourist, 2021. "Turtles are so cute and I think the lights on the beach are probably fine for them."\n\nSource C: Marine Biology Journal, 2023. "Hatchlings are guided toward the sea by the brightest horizon. Artificial lights on shore can confuse them, causing hatchlings to crawl inland and die of exhaustion or dehydration."',
};

export const lesson32: Lesson = {
  id: "ela8-u3-lesson-3-2",
  code: "3-2",
  title: "Narrative and Research",
  goal: "I CAN write narratives that use point of view, reflection and pacing, and I can gather relevant information, quote and paraphrase accurately and avoid plagiarism.",
  standards: ["W.8.3", "W.8.7", "W.8.8", "L.8.3"],
  vocabulary: [
    {
      term: "Point of view",
      definition:
        "The perspective from which a story is told, such as first person (I) or third person (he, she).",
    },
    {
      term: "Reflection",
      definition:
        "Writing in which a narrator explains what an experience meant or what they learned from it.",
    },
    {
      term: "Pacing",
      definition:
        "The speed at which events unfold, controlled by slowing down key moments and summarizing minor ones.",
    },
    {
      term: "Paraphrase",
      definition:
        "To restate an idea in your own words and sentence structure while crediting the source.",
    },
    {
      term: "Direct quotation",
      definition:
        "The exact words of a source, placed in quotation marks and attributed.",
    },
    {
      term: "Plagiarism",
      definition:
        "Presenting another person's words or ideas as your own, or copying without credit.",
    },
  ],
  concepts: [
    {
      id: "ela8-u3-narrative-techniques",
      title: "Narrative techniques: point of view, reflection and pacing",
      skill:
        "Write a narrative that uses point of view, pacing and reflection to relate experiences and show what they mean.",
      lesson: {
        sections: [
          {
            heading: "Point of view and pacing",
            body: "Choose a **point of view** and keep it steady. First person puts the reader inside the narrator's thoughts; third person can stand back and observe. Use **pacing** to control attention: **slow down** with sensory detail, short sentences and thoughts at the most tense moment, and **speed up** with summary for time that matters less ('Years later...'). In 'The Night the Ice Held', the three short sentences 'Then another step. Then another.' stretch a few seconds into a long moment.",
          },
          {
            heading: "Reflection and relating experiences",
            body: "Strong narratives do more than list events. **Reflection** is where the narrator pauses to explain what the experience taught or changed. Eighth-grade writers also show **relationships among experiences and events**: how one moment leads to, contrasts with or echoes another. A narrator who is told the ice is safe, feels fear, and later 'tests the ice myself' connects past events to present choices. End by showing that change, not by repeating the plot.",
          },
        ],
        keyFormulas: [
          {
            name: "Pacing",
            statement:
              "Slow down important moments with detail and short sentences; speed up minor moments with summary.",
          },
          {
            name: "Reflection",
            statement:
              "Narrator's commentary on what an experience meant, learned or changed.",
          },
          {
            name: "Consistent point of view",
            statement:
              "The narrator's perspective (I or he/she) stays the same unless the writer deliberately changes it.",
          },
        ],
        workedExample: {
          problem:
            "Which version slows down the moment? (1) 'I stepped onto the ice and walked to Marcus.' (2) 'I took one step. The ice groaned. Another step. My heartbeat thudded in my ears.'",
          solution:
            "Version 2 slows the moment. It breaks the action into short sentences, adds sound (the groan) and the narrator's body (heartbeat), so the reader experiences each second. Version 1 summarizes the same event in one sentence, which speeds it up.",
        },
      },
      questions: [
        {
          id: "ela8-u3-narrative-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RINK,
          stem: "What point of view is used in this narrative?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Second person, speaking directly to the reader",
              },
              { id: "b", text: "First person, from Nico's perspective" },
              {
                id: "c",
                text: "Third person limited, from Marcus's perspective",
              },
              {
                id: "d",
                text: "Third person, from an outside observer's perspective",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Point of view",
                statement:
                  "First person uses I and me; the narrator is a character in the story.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The narrator uses 'I' and names himself through Marcus's dialogue.",
                evidence: "Come on, Nico",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)**. The narrator says 'I', and Marcus addresses him as Nico.",
            commonErrors: [
              "Choosing third person because other characters are named.",
            ],
          },
        },
        {
          id: "ela8-u3-narrative-techniques-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: RINK,
          stem: "How does the writer slow down the moment when Nico steps onto the ice?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "By using short repeated sentences and sensory detail to stretch each second",
              },
              {
                id: "b",
                text: "By describing the pond in a long paragraph of setting",
              },
              { id: "c", text: "By switching to Marcus's thoughts" },
              { id: "d", text: "By summarizing several hours in one sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pacing",
                statement:
                  "Short sentences, repetition and sensory detail slow a moment down.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The repeated short sentences break a few seconds into separate steps.",
                evidence: "Then another step. Then another.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The sound and the narrator's body make readers feel the time stretching.",
                evidence: "I could count my own heartbeats",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)**. The passage stays inside the moment; it does not summarize, change perspective or pause to describe the pond.",
            commonErrors: [
              "Choosing (d): the moment is slowed by detail of the action, not by describing the setting.",
            ],
          },
        },
        {
          id: "ela8-u3-narrative-techniques-q3",
          difficulty: "core",
          totalMarks: 6,
          extract: RINK,
          stem: "Explain how the last paragraph of the narrative uses reflection to show what the experience meant to Nico. Use two short quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reflection",
                statement:
                  "The narrator steps back to explain what an experience taught or changed.",
              },
              {
                kind: "skill",
                name: "Embedding quotations",
                statement:
                  "Use short quotations built into your own sentences and explain their effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The narrator moves from past events to the present, showing the experience still affects him.",
                evidence: "Years later I still think of that groan",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "He draws a general lesson: hearing that something is safe is different from feeling it.",
                evidence: "two different things",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The lesson is a theme about trust versus personal experience; Marcus was right but Nico still needed to know for himself.",
                evidence: "Marcus was right that day",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The final sentence shows the change in behavior, relating the early event to the present.",
                evidence: "Now I test the ice myself",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Explains the effect: the reflection gives the story meaning beyond the plot and leaves the reader with an idea.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Writing is clear, formal and uses quotations correctly embedded.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: levels6("analysis"),
            finalAnswer:
              "The last paragraph moves from the past to the present: Nico says that 'Years later I still think of that groan', showing the event has stayed with him. He reflects that being told something is safe and feeling it are 'two different things', which gives the story a theme about trusting your own experience. The ending, 'Now I test the ice myself', shows how he has changed, so the story is about learning, not only about a scary moment.",
            commonErrors: [
              "Retelling the ice scene instead of analyzing the final paragraph.",
              "Listing quotations without explaining what they show.",
            ],
          },
        },
        {
          id: "ela8-u3-narrative-techniques-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: RINK,
          stem: "Answer all parts about 'The Night the Ice Held'.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two sensory details that Nico uses to describe the moment when the ice groans.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the narrator relates the experience on the pond to his life years later.",
              marks: 6,
            },
            {
              label: "c",
              prompt:
                "Write a short narrative (about 150 words) of a moment when you or a character had to trust someone. Use first-person point of view, slow down one key moment and end with a brief reflection.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pacing and reflection",
                statement:
                  "Slow the key moment with detail; use reflection to show what the experience meant.",
              },
              {
                kind: "convention",
                name: "Narrative structure",
                statement:
                  "A narrative has a setting, a sequence of events, a turning point and a resolution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sound detail that conveys danger.",
                evidence:
                  "a long low sound like a door opening in an empty house",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Physical sensation that conveys fear.",
                evidence: "My stomach dropped",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The adult narrator links the old event to a present habit, showing how the past shapes him.",
                evidence: "Years later I still think of that groan",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The groan is a lasting symbol that returns whenever someone calls something safe.",
                evidence: "whenever someone tells me something is safe",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The ending connects the experience to a changed behavior: he tests things himself.",
                evidence: "Now I test the ice myself",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Keeps a consistent first-person point of view and a clear situation about trust.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Slows down one key moment with sensory detail and short sentences.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Includes a sequence of events that moves forward logically, with summary for less important time.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Ends with a reflection on what was learned that connects to the events.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Correct grammar, spelling and punctuation, including dialogue punctuation if used.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: [...levels6("analysis", "b"), ...levels8("writing", "c")],
            finalAnswer:
              "(a) The 'long low sound like a door opening in an empty house'; 'My stomach dropped'. (b) The narrator looks back from adulthood: he still thinks of the groan 'whenever someone tells me something is safe', and the closing line 'Now I test the ice myself' shows how the event changed his behavior. (c) A strong response uses first person, slows one moment with detail and ends with a reflection that explains the change.",
            commonErrors: [
              "In (b), repeating the event instead of explaining the link to later life.",
              "In (c), summarizing the key moment in one sentence so it is not slowed down.",
              "Ending with 'it was a good day' instead of a reflection.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u3-research-skills",
      title:
        "Research: relevant information, quoting, paraphrasing and plagiarism",
      skill:
        "Gather relevant, credible information, quote and paraphrase accurately, and credit sources to avoid plagiarism.",
      lesson: {
        sections: [
          {
            heading: "Gathering relevant, credible information",
            body: "When you research, start with a focused question, then gather information from several sources. Ask of each source: is it **relevant** to my question, and is it **credible**? A scientific journal or an institute that studies the topic is more credible than a casual blog written by a tourist. Take notes in your own words, record the source for every note and sort information by sub-topic so it is ready to use.",
          },
          {
            heading: "Quoting, paraphrasing and avoiding plagiarism",
            body: "Use a **direct quotation** when the exact wording matters; put it in quotation marks and name the source. **Paraphrase** when the idea matters more than the words: change both the words and the sentence structure, then still credit the source. Changing a few words while keeping the original sentence pattern is called patchwriting, and it still counts as **plagiarism** if it is not credited. Always add a signal phrase ('According to the Marine Biology Journal...') and a citation.",
          },
        ],
        keyFormulas: [
          {
            name: "Credible source",
            statement:
              "A source with named authors or institutions, relevant expertise, specific evidence and a recent date.",
          },
          {
            name: "Paraphrase",
            statement:
              "A restatement of an idea in new words and new sentence structure, with the source credited.",
          },
          {
            name: "Plagiarism",
            statement:
              "Using another person's words or ideas without credit, including copying text with only a few words changed.",
          },
        ],
        workedExample: {
          problem:
            "Original: 'Artificial lights on shore can confuse hatchlings, causing them to crawl inland.' Is 'Artificial lights on the shore may confuse hatchlings and cause them to crawl inland' an acceptable paraphrase?",
          solution:
            "No. It keeps the original structure and nearly every word, with only tiny changes, so it is patchwriting. A real paraphrase restructures the idea, for example: 'According to the Marine Biology Journal (2023), baby turtles can mistake bright coastal lighting for the ocean horizon and head the wrong way.' It uses new words, new sentence structure and credits the source.",
        },
      },
      questions: [
        {
          id: "ela8-u3-research-skills-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARTICLE,
          stem: "A student is researching how coastal lighting affects sea turtle hatchlings. Which source is the most credible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Source A, the Coastal Wildlife Institute" },
              { id: "b", text: "Source C, the Marine Biology Journal" },
              {
                id: "c",
                text: "None of them, because all were written after 2020",
              },
              { id: "d", text: "Source B, the blog post by a tourist" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating sources",
                statement:
                  "The best source is expert, specific and directly relevant to the question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Source C comes from a scientific journal and directly addresses the effect of artificial lights on hatchlings.",
                evidence: "Artificial lights on shore can confuse them",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Source A is credible but is about nesting and survival, not lighting; Source B is a personal opinion; the date does not make a source weak.",
            commonErrors: [
              "Choosing A because it is also credible, without checking relevance to the question.",
            ],
          },
        },
        {
          id: "ela8-u3-research-skills-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: ARTICLE,
          stem: "Which sentence is the best paraphrase of Source C, with proper credit?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "According to the Marine Biology Journal (2023), bright lighting on beaches can lead newly hatched turtles away from the sea, where they may become exhausted or dehydrated.",
              },
              {
                id: "b",
                text: "Lights on beaches are probably fine for turtles.",
              },
              {
                id: "c",
                text: 'Hatchlings are "guided toward the sea by the brightest horizon" and lights confuse them.',
              },
              {
                id: "d",
                text: "Artificial lights on shore can confuse hatchlings, causing hatchlings to crawl inland and die.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paraphrasing",
                statement:
                  "Use new words and structure, keep the meaning, and credit the source.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choice (b) restates the idea in new words and sentence structure and keeps the meaning accurate.",
                evidence: "newly hatched turtles away from the sea",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "It credits the source with a signal phrase and date; (a) copies the wording, (c) changes the meaning and (d) is a partial quotation with no credit.",
                evidence: "According to the Marine Biology Journal (2023)",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "**(a)**. It changes the wording and structure, keeps the meaning and names the source.",
            commonErrors: [
              "Choosing (a), which copies most of the original words and gives no credit.",
              "Choosing (d) because it uses quotation marks, but it does not name the source.",
            ],
          },
        },
        {
          id: "ela8-u3-research-skills-q3",
          difficulty: "core",
          totalMarks: 6,
          extract: ARTICLE,
          stem: 'A student writes: "Female sea turtles return to the beach where they hatched to lay their eggs, and only about 1 in 1,000 hatchlings survives to adulthood." The student does not name a source. Explain why this is plagiarism and rewrite it correctly in two ways: once as a paraphrase and once with a short direct quotation. Include credit in both.',
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plagiarism",
                statement:
                  "Using someone else's words or ideas without credit, including near-copying.",
              },
              {
                kind: "skill",
                name: "Quoting and paraphrasing",
                statement:
                  "Quote exact words with quotation marks and attribution; paraphrase with new words and structure and attribution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Explains that the sentence copies Source A almost exactly and presents it without credit or quotation marks.",
                evidence: "return to the beach where they hatched",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Paraphrase uses new words and sentence structure while keeping the facts accurate (return to birthplace; about 1 in 1,000 survive).",
                marks: 2,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Paraphrase names the Coastal Wildlife Institute (2024) with a signal phrase.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Direct quotation is short, exact and in quotation marks, with attribution.",
                evidence:
                  "only about 1 in 1,000 hatchlings survives to adulthood",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Correct grammar and punctuation, including quotation marks and commas around signal phrases.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: levels6("writing"),
            finalAnswer:
              "The sentence is plagiarized because it repeats the institute's wording with no quotation marks or credit. Paraphrase: 'The Coastal Wildlife Institute (2024) explains that female turtles go back to their birth beaches to nest, yet very few of their young, roughly one in a thousand, live to be adults.' Quotation: 'The Coastal Wildlife Institute (2024) reports that \"only about 1 in 1,000 hatchlings survives to adulthood.\"'",
            commonErrors: [
              "Changing only two or three words and calling it a paraphrase.",
              "Using quotation marks but forgetting to name the source.",
              "Quoting a whole sentence when a short phrase would work.",
            ],
          },
        },
        {
          id: "ela8-u3-research-skills-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: ARTICLE,
          stem: "Answer all parts about the research notes on sea turtles. Your research question is: How does artificial light affect hatchlings?",
          parts: [
            {
              label: "a",
              prompt:
                "Which sources are relevant and credible for the research question? Name them and give one reason for each choice or rejection.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Write two sentences that use Source C: one with a short direct quotation and one paraphrase. Credit the source in both.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write a paragraph (five to seven sentences) answering the research question. Use both Source A and Source C, quote or paraphrase accurately, credit each source and end with a concluding sentence.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating sources",
                statement:
                  "Judge each source for relevance to the question and for credibility.",
              },
              {
                kind: "skill",
                name: "Integrating sources",
                statement:
                  "Use signal phrases, accurate quotation and paraphrase, and combine sources to support one point.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Source C is relevant and credible: a journal that directly discusses lights and hatchlings.",
                evidence: "Artificial lights on shore can confuse them",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Source A is credible but only partly relevant; it gives background about survival rates.",
                evidence: "only about 1 in 1,000 hatchlings survives",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Source B is rejected: it is a casual opinion without expertise or evidence.",
                evidence: "I think the lights on the beach are probably fine",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Reasons are specific and linked to credibility and relevance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "A short, exact quotation in quotation marks, correctly punctuated.",
                evidence: "guided toward the sea by the brightest horizon",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "b",
                reasoning:
                  "A paraphrase that changes the wording and structure and keeps the meaning.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "b",
                reasoning:
                  "Credit to the Marine Biology Journal (2023) in both sentences.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "b",
                reasoning: "Accurate use of the source; meaning not distorted.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Opens with a clear point that answers the research question.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Uses Source C accurately to explain how lights draw hatchlings inland.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Uses Source A to show why each hatchling matters, given that very few survive.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Credits each source with signal phrases and avoids copying.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Concludes by linking the evidence to the point made in the first sentence.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning: "Correct grammar, punctuation and spelling.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: [...levels8("writing", "c")],
            finalAnswer:
              '(a) Choose C (journal, directly on lights) and A (institute, useful background); reject B (opinion without expertise). (b) Quotation: The Marine Biology Journal (2023) notes that hatchlings are "guided toward the sea by the brightest horizon." Paraphrase: According to the same journal, bright shore lighting can trick baby turtles into heading inland, where they may die. (c) Model paragraph: Artificial light seriously harms sea turtle hatchlings. The Marine Biology Journal (2023) reports that hatchlings follow the brightest horizon, so lights on shore can lead them away from the ocean. This matters because the Coastal Wildlife Institute (2024) states that only about 1 in 1,000 hatchlings survives to adulthood. Losing even a few to exhaustion therefore reduces the chances for the whole population. Reducing beach lighting during nesting season would protect the young turtles.',
            commonErrors: [
              "Treating Source B as equal because it mentions lights.",
              "Leaving out credit when paraphrasing.",
              "Piling up quotations without explaining how they answer the question.",
            ],
          },
        },
      ],
    },
  ],
};
