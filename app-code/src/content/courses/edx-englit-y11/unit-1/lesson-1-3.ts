import type { Lesson } from "../../../types.ts";
import { bands } from "./levels.ts";

export const lesson13: Lesson = {
  id: "et11-u1-lesson-1-3",
  code: "1-3",
  title: "Steinbeck's Methods and the Essay",
  goal: "I CAN analyse Steinbeck's use of setting, foreshadowing and cyclical structure, and plan and write a focused essay.",
  standards: ["4ET1 Paper 1 Section B", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Cyclical structure", definition: "A structure in which the ending returns to the setting or situation of the opening." },
    { term: "Foreshadowing", definition: "Hints early in a text about events that will happen later." },
    { term: "Pathetic fallacy", definition: "Using the natural world or weather to reflect human emotion." },
    { term: "Tragedy", definition: "A narrative in which a sympathetic character suffers a downfall, often because of fate or circumstance." },
    { term: "Thesis", definition: "A central argument that an essay sets out to prove." },
    { term: "Conclusion", definition: "The final paragraph, which answers the question and makes a judgement." },
  ],
  concepts: [
    {
      id: "et11-u1-setting-foreshadowing-structure",
      title: "Setting, foreshadowing and structure",
      skill: "Explain the effects of Steinbeck's settings, foreshadowing and cyclical structure.",
      lesson: {
        sections: [
          {
            heading: "Setting",
            body: "The novel opens beside the Salinas River, a place of green calm: a pool, sycamores, golden foothills. It is a refuge, and the same clearing returns in the final chapter. The bunkhouse and the barn are enclosed, harsh spaces that reflect the limited lives of the men. Crooks's cramped room physically expresses his isolation.",
          },
          {
            heading: "Foreshadowing",
            body: "Steinbeck hints at the tragedy early. Lennie kills a mouse and a puppy by petting them too hard; Candy's dog is shot; Slim says nothing about right or wrong when a creature must be put down. The title alludes to a poem about plans that go wrong. These events prepare the reader for the ending and create a sense of inevitability, which is tragic.",
          },
          {
            heading: "Cyclical structure",
            body: "The novel begins and ends at the same riverbank. The first visit is a place of hope; the last visit is a place of loss. The circular shape suggests that the men cannot escape their fate and that the dream was never going to change anything. The six-chapter structure, each set in one place, also resembles a play.",
          },
        ],
        keyFormulas: [
          { name: "Cyclical structure", statement: "An ending that returns to the opening setting, suggesting inevitability." },
          { name: "Foreshadowing", statement: "Early incidents that anticipate later tragedy." },
          { name: "Pathetic fallacy", statement: "Nature reflects the mood, as in the calm riverbank before the final act." },
        ],
        workedExample: {
          problem: "How does Steinbeck use setting to create mood in the novel?",
          solution: "Steinbeck uses the opening setting to introduce a mood of peace and refuge. The Salinas River is surrounded by natural beauty, which contrasts with the harsh bunkhouse where the men live and suggests a freedom the characters crave. When the final chapter returns to the same riverbank, the setting is the same but the mood is darkened; the reader remembers the earlier promise and feels the loss. The cyclical structure suggests that the characters are trapped in a pattern, while the contrast between peaceful nature and human tragedy intensifies the emotional effect.",
        },
      },
      questions: [
        {
          id: "et11-u1-setting-foreshadowing-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the effect of the novel beginning and ending in the same place by the river?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It shows that the characters have been in the same place throughout the whole story" },
              { id: "b", text: "It suggests that the river is the most dangerous place in the novel" },
              { id: "c", text: "It shows that nothing has changed since the opening" },
              { id: "d", text: "It creates a sense of inevitability, as the hope of the opening is echoed by the loss at the end" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Cyclical structure", statement: "Returning to the opening setting suggests inevitability and allows contrast of mood." }],
            steps: [{ reasoning: "The same setting at the beginning and end invites comparison between hope and loss.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Inevitability and a contrast between hope and loss.",
            commonErrors: ["Choosing (d); the setting is the same but the situation is utterly changed."],
          },
        },
        {
          id: "et11-u1-setting-foreshadowing-structure-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how Steinbeck uses the death of Lennie's puppy to foreshadow later events.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Foreshadowing", statement: "A smaller event anticipates a larger tragedy." },
              { kind: "skill", name: "Explaining effect", statement: "State what is suggested and why the writer includes it." },
            ],
            steps: [
              { reasoning: "Lennie kills the puppy by accident through petting it too hard, showing that his strength is stronger than his understanding.", marks: 1, markCode: "AO1" },
              { reasoning: "It follows the earlier death of the mouse, building a pattern of accidental destruction.", marks: 1, markCode: "AO1" },
              { reasoning: "It anticipates the death of Curley's wife, killed in the same way, as a horrifying escalation.", marks: 1, markCode: "AO2" },
              { reasoning: "The pattern makes the reader feel the ending is inevitable, creating tension and sympathy.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The puppy's death follows the mouse and shows Lennie's strength is beyond his control. It foreshadows Curley's wife's death and creates inevitability.",
            commonErrors: ["Retelling the incident without saying what it foreshadows."],
          },
        },
        {
          id: "et11-u1-setting-foreshadowing-structure-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "How does Steinbeck use setting to reflect the lives of the characters? Refer to at least TWO settings in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Setting as symbol", statement: "Places can reflect emotional states and social conditions." },
              { kind: "skill", name: "Comparing settings", statement: "Contrast two settings to show different effects." },
            ],
            steps: [
              { reasoning: "The riverbank is peaceful and natural, presented as a refuge and an image of the freedom the dream promises.", marks: 2, markCode: "AO2" },
              { reasoning: "The bunkhouse is bare and enclosed, suggesting the cramped, unglamorous lives of the workers.", marks: 2, markCode: "AO2" },
              { reasoning: "Crooks's room, next to the stable, expresses his segregation and isolation.", marks: 2, markCode: "AO1" },
              { reasoning: "The contrast between settings links to themes of freedom and entrapment and to the social conditions of the Depression.", marks: 2, markCode: "AO4" },
            ],
            levels: bands(8, "analysis of setting and its effects"),
            finalAnswer: "The riverbank suggests refuge and freedom; the bunkhouse and Crooks's room reflect confinement and exclusion. The contrast supports the themes of dreams and isolation.",
            commonErrors: ["Describing settings without analysing effect.", "Writing about only one place."],
          },
        },
        {
          id: "et11-u1-setting-foreshadowing-structure-q4",
          difficulty: "challenge",
          totalMarks: 15,
          stem: "This question is about Steinbeck's methods in Of Mice and Men.",
          parts: [
            { label: "a", prompt: "Name two events that foreshadow the ending of the novel.", marks: 2 },
            { label: "b", prompt: "Explain how the shooting of Candy's dog prepares the reader for the ending.", marks: 4 },
            { label: "c", prompt: "How does Steinbeck use the structure of the novel to create tension and a sense of tragedy?", marks: 9 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tragic structure", statement: "A pattern of events that leads inevitably to a sorrowful end." },
              { kind: "skill", name: "Analysing structure", statement: "Explain how the order and shape of a text affect the reader." },
            ],
            steps: [
              { part: "a", reasoning: "The deaths of the mouse and the puppy.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The shooting of Candy's dog, or Curley's threat to Lennie.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A man shoots a dog that is no longer wanted, with the gun at the back of the head, anticipating the manner of Lennie's death.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Carlson argues the act is kind, which introduces the idea of mercy killing.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Candy's regret that he did not do it himself parallels George's choice to act himself.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The parallel creates a sense of inevitability and invites sympathy for George.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Cyclical shape: the opening and closing at the river contrast hope and loss.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Foreshadowing and escalating pattern (mouse, puppy, woman) builds tension and inevitability.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The structure links to tragedy: the plans of ordinary people are crushed by circumstance, reflecting the Depression.", marks: 3, markCode: "AO4" },
            ],
            levels: bands(9, "analysis of structure and its effects", "c"),
            finalAnswer: "(a) The mouse and the puppy. (b) The dog's shooting anticipates Lennie's death and the question of mercy. (c) Steinbeck's cyclical, tightly patterned structure builds tension and inevitability, making the ending feel tragic and socially significant.",
            commonErrors: ["Narrating events instead of analysing structure.", "Naming techniques without explaining effects."],
          },
        },
      ],
    },
    {
      id: "et11-u1-essay-planning",
      title: "Planning and writing the essay",
      skill: "Plan and write a focused, well-structured analytical essay on Of Mice and Men.",
      lesson: {
        sections: [
          {
            heading: "Reading the question",
            body: "Underline the key words. A question such as 'How does Steinbeck present loneliness in the novel?' asks for method (how), a theme (loneliness) and the text as a whole. Decide on a thesis in a single sentence before you write.",
          },
          {
            heading: "Planning",
            body: "Choose three or four points covering different parts of the novel, each with a short quotation and a method. Add one contextual link per point where it fits naturally. Note a conclusion that answers the question directly.",
          },
          {
            heading: "Writing",
            body: "Open with a sentence that responds to the question. Write paragraphs that follow the pattern: point, quotation (embedded), analysis of language or structure, link to the writer's purpose or context. End with a conclusion that makes a judgement rather than repeating your points.",
          },
        ],
        keyFormulas: [
          { name: "Thesis", statement: "One clear sentence that answers the question." },
          { name: "Embedded quotation", statement: "Quote a few words inside your own sentence." },
          { name: "Judgement conclusion", statement: "Answer the question and evaluate Steinbeck's purpose." },
        ],
        workedExample: {
          problem: "Plan an answer to: 'How does Steinbeck present the theme of loneliness in Of Mice and Men?'",
          solution: "Thesis: Steinbeck presents loneliness as a social condition created by prejudice and the migrant way of life, and shows companionship as the only protection. Point 1: George and Lennie as an unusual pair among 'the loneliest guys in the world' (AO1, AO2). Point 2: Crooks, isolated by race, his room as a symbol of exclusion (AO2, AO4). Point 3: Curley's wife, lonely in marriage, seeking conversation (AO1, AO4). Point 4: the ending, in which George is left alone and the cyclical structure completes the pattern (AO2). Conclusion: loneliness is a universal human fear which Steinbeck links to the injustice of his time.",
        },
      },
      questions: [
        {
          id: "et11-u1-essay-planning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is the best way to include a quotation in an analytical essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copy out a full speech and leave the reader to interpret it" },
              { id: "b", text: "Quote long passages to prove you know the book" },
              { id: "c", text: "Place the quotation at the end of the essay" },
              { id: "d", text: "Embed a few words in your own sentence and then analyse a key word" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Embedding quotations", statement: "Short quotations placed in your own sentences, followed by analysis." }],
            steps: [{ reasoning: "Short, embedded quotations allow focused analysis.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Embed a few words and analyse a key word.",
            commonErrors: ["Thinking long quotations earn more marks."],
          },
        },
        {
          id: "et11-u1-essay-planning-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a clear opening paragraph (thesis and outline) for the question: 'How does Steinbeck present the importance of friendship in Of Mice and Men?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thesis statement", statement: "Directly answer the question in the opening and outline the line of argument." },
              { kind: "skill", name: "Focus", statement: "Refer to the question key words." },
            ],
            steps: [
              { reasoning: "A clear thesis that answers the question (friendship is presented as rare and essential protection against loneliness).", marks: 2, markCode: "AO1" },
              { reasoning: "A reference to Steinbeck's methods or purpose, such as contrast, dialogue or structure.", marks: 1, markCode: "AO2" },
              { reasoning: "A brief indication of context or the points to be developed.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Steinbeck presents friendship as a rare and vital defence against the isolation of ranch life. Through the contrast between George and Lennie, the loneliness of Crooks and Curley's wife, and the cyclical structure, he shows that without companionship dreams cannot survive in Depression America.",
            commonErrors: ["Retelling the plot instead of making a thesis.", "Not mentioning the question's key terms."],
          },
        },
        {
          id: "et11-u1-essay-planning-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write ONE well-developed paragraph in response to: 'How does Steinbeck present Curley?' Use a short quotation and analyse its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "PETAL paragraph", statement: "Point, evidence, technique, analysis, link." },
              { kind: "technique", name: "Characterisation", statement: "Description and action reveal personality." },
            ],
            steps: [
              { reasoning: "A clear point: Curley is presented as an aggressive, insecure man who uses his status to assert himself.", marks: 2, markCode: "AO1" },
              { reasoning: "A short, relevant quotation or reference, such as the glove full of Vaseline or his attack on Lennie.", marks: 2, markCode: "AO1" },
              { reasoning: "Analysis of method and effect (small stature, animal-like aggression, comparison with Lennie's size).", marks: 2, markCode: "AO2" },
              { reasoning: "A link to context or purpose: the abuse of power and insecurity in the hierarchy of the ranch.", marks: 2, markCode: "AO4" },
            ],
            levels: bands(8, "paragraph analysing Steinbeck's presentation of Curley"),
            finalAnswer: "Model: Steinbeck presents Curley as a man compensating for his lack of size with aggression. His eagerness to fight 'big guys' shows an insecurity that explains his cruelty, while his use of his father's position reveals how power in the ranch hierarchy is abused.",
            commonErrors: ["No quotation or reference.", "Describing Curley without explaining Steinbeck's purpose."],
          },
        },
        {
          id: "et11-u1-essay-planning-q4",
          difficulty: "challenge",
          totalMarks: 30,
          stem: "This question tests your ability to plan and write a full essay on Of Mice and Men.",
          parts: [
            { label: "a", prompt: "Identify two key words in the question 'How does Steinbeck present loneliness in Of Mice and Men?' and say why they matter.", marks: 2 },
            { label: "b", prompt: "Write a plan with a thesis and four points for an essay on this question.", marks: 8 },
            { label: "c", prompt: "Write the essay: 'How does Steinbeck present loneliness in Of Mice and Men?' Refer to the novel as a whole and to the context in which it was written.", marks: 20 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "A thesis and a limited set of well-chosen points that cover the whole text." },
              { kind: "skill", name: "Essay writing", statement: "Sustained argument supported by embedded quotations, analysis and context." },
              { kind: "context", name: "Depression and prejudice", statement: "Migrant labour, racism and sexism create isolation." },
            ],
            steps: [
              { part: "a", reasoning: "'How' signals that methods must be analysed.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "'Loneliness' focuses the theme; 'present' means the writer's choices.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A clear thesis responding to the question.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Four points that cover different parts of the novel and different characters.", marks: 4, markCode: "AO1" },
              { part: "b", reasoning: "Methods and context identified for the points.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Knowledge and understanding of loneliness for several characters with well-chosen references.", marks: 8, markCode: "AO1" },
              { part: "c", reasoning: "Analysis of Steinbeck's methods: setting, dialogue, symbolism and structure.", marks: 8, markCode: "AO2" },
              { part: "c", reasoning: "Integrated context of the Depression and prejudice, linked to purpose.", marks: 4, markCode: "AO4" },
            ],
            levels: [
              { level: "Level 5", marks: "17-20", descriptor: "Perceptive, sustained argument; assured and discriminating analysis of methods; context integrated seamlessly; precisely chosen, embedded references.", part: "c" },
              { level: "Level 4", marks: "13-16", descriptor: "Thorough, well-developed response; well-chosen references; confident analysis of methods; relevant context.", part: "c" },
              { level: "Level 3", marks: "9-12", descriptor: "Clear, relevant response; appropriate references; some analysis of methods; some context.", part: "c" },
              { level: "Level 2", marks: "5-8", descriptor: "Some understanding; some relevant references; limited comment on methods or context.", part: "c" },
              { level: "Level 1", marks: "1-4", descriptor: "Simple, limited response; few references; retelling rather than analysis.", part: "c" },
              { level: "Level 5", marks: "7-8", descriptor: "Perceptive plan with a focused thesis and a balanced selection of points across the text.", part: "b" },
              { level: "Level 4", marks: "5-6", descriptor: "Clear plan with a thesis and relevant points.", part: "b" },
              { level: "Level 3", marks: "3-4", descriptor: "Some planning; points partly relevant.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Limited plan; no clear thesis.", part: "b" },
            ],
            finalAnswer: "(a) 'How' (analyse methods) and 'loneliness' (the theme). (b) Thesis: Steinbeck presents loneliness as socially created and companionship as the only protection; points on George and Lennie, Crooks, Curley's wife, the ending. (c) A full essay that sustains this argument, embeds short quotations, analyses setting, symbolism and structure, and links to the Depression.",
            commonErrors: ["Writing about only George and Lennie.", "A list of techniques without effects.", "Context as a separate history paragraph."],
            examinerNote: "Part (b) is planned marks for the exercise; in an exam only the essay is assessed, but planning is strongly advised.",
          },
        },
      ],
    },
  ],
};
