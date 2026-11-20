import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const SOURCES: TextExtract = {
  title: "Three Sources on Four-Day School Weeks",
  author: "Written for Akademik Space",
  source: "Source A: a rural superintendent's report. Source B: a teacher survey summary. Source C: a parent's letter",
  text: "Source A (superintendent's report): After our district moved to a four-day week, we saved about 4 percent of our operating costs, mostly on transportation and utilities. Attendance rose, and teachers reported fewer sick days. Test scores in reading stayed flat during the first two years.\n\nSource B (teacher survey summary): Of 210 teachers surveyed, 71 percent said they preferred the four-day week. However, 58 percent also said that longer days left students too tired to focus in the last period, and many said they spent their fifth day catching up on grading rather than resting.\n\nSource C (parent's letter): My two sons love the long weekend, but I work on Fridays. Our family now pays for child care that did not exist before the change. Families with flexible jobs can adapt. Many of us cannot.",
};

const ESSAY: TextExtract = {
  title: "Opening of a Personal Essay",
  author: "Written for Akademik Space",
  source: "A draft for a college application essay prompt: describe a moment that changed how you see yourself",
  text: "I have always been a hard worker who learns from challenges. Last summer I worked at my uncle's bakery, and it taught me a lot about responsibility. Working there made me realize that hard work pays off and that I can accomplish anything if I try. It was a really great experience that changed me forever.",
};

const DRAFT_SYN: TextExtract = {
  title: "Draft synthesis paragraph",
  author: "Written for Akademik Space",
  text: "Source A says the district saved 4 percent. Source B says 71 percent of teachers prefer the new week. Source C says a parent pays for child care. These are the three sources about the four-day week.",
};

export const lesson32: Lesson = {
  id: "ela11-u3-lesson-3-2",
  code: "3-2",
  title: "Synthesis and Narrative Craft",
  goal: "I CAN build a position in conversation with several sources, and write a reflective personal narrative with a distinct voice, specific detail and insight.",
  standards: ["W.11-12.2", "W.11-12.3", "W.11-12.8"],
  vocabulary: [
    { term: "Synthesis", definition: "Combining ideas from multiple sources into a new position or understanding that is more than any single source says." },
    { term: "Conversation with sources", definition: "A writing approach in which the writer places sources in dialogue (agreeing, qualifying, challenging) around the writer's own argument." },
    { term: "Integration", definition: "Weaving evidence into your own sentences and logic, with attribution, rather than listing sources one after another." },
    { term: "Voice", definition: "The distinctive personality of a writer on the page, created by diction, rhythm, attitude and what the writer notices." },
    { term: "Concrete detail", definition: "A specific, sensory or factual particular, such as the smell of burnt sugar, that makes an experience vivid and believable." },
    { term: "Reflection", definition: "The writer's thoughtful consideration of what an experience means and how it changed the writer's understanding." },
    { term: "Cliche", definition: "An overused phrase or idea, such as 'hard work pays off', that has lost its power to show something new." },
  ],
  concepts: [
    {
      id: "ela11-u3-synthesis-essay",
      title: "Writing a synthesis essay",
      skill: "Develop a position from multiple sources and put sources in conversation with each other rather than listing them.",
      lesson: {
        sections: [
          {
            heading: "Position first, sources second",
            body: "A synthesis essay answers a question with **your own position**, built from several sources. Avoid the 'source parade' in which each paragraph summarizes one source in turn. Instead, organize by **ideas**. A paragraph might compare what two sources say about cost, then use the third to complicate the conclusion. Read sources for **claims, evidence, limits and perspective**: who wrote this, what do they know and what might they leave out? Then decide what the sources together support, and write a thesis that none of them states alone.",
          },
          {
            heading: "Integrating and conversing",
            body: "Integrate sources by attributing information ('the superintendent's report notes...') and then **commenting** on it. Use signal phrases that show relationships: agrees, qualifies, challenges, extends, 'by contrast', 'taken together'. Your own voice should carry the essay: more of your reasoning than quotations. Evaluate reliability and avoid over-reliance on one source. Finally, state the limits of what the sources show; good synthesis admits uncertainty where evidence is thin (for example, two years of data).",
          },
        ],
        keyFormulas: [
          { name: "Organize by idea", statement: "Group evidence from several sources under your own claim, instead of one paragraph per source." },
          { name: "Relationship words", statement: "Agrees, qualifies, challenges, extends, taken together: show how sources talk to each other." },
          { name: "Synthesis test", statement: "Could the point be found in a single source? If so, it is a summary, not a synthesis." },
        ],
        workedExample: {
          problem: "Combine Source A (4 percent savings) and Source C (new child care costs) into one synthesized sentence.",
          solution: "While the superintendent's report counts a 4 percent saving in district operating costs, the parent's letter reveals a cost that never appears in that budget: families who now pay for Friday child care. Together the sources suggest that the savings partly shift costs from the district to households. The sentence pairs two sources around a shared issue, compares them and draws a conclusion neither makes alone.",
        },
      },
      questions: [
        {
          id: "ela11-u3-synthesis-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT_SYN,
          stem: "What is the main weakness of this draft paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It lists each source in turn without any position or connection between them." },
              { id: "b", text: "It uses too many quotations from the sources." },
              { id: "c", text: "It includes information from only one source." },
              { id: "d", text: "It argues too strongly for a position." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Synthesis", statement: "Synthesis builds a position from sources; it does not list them." }],
            steps: [{ reasoning: "The draft names Sources A, B and C separately, states no position and connects nothing, so it is a source parade.", evidence: "Source A says", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)**. The paragraph lists sources with no position. It uses no quotations, uses all three sources and takes no position at all.",
            commonErrors: ["Choosing (b) because the draft names the sources often, though nothing is quoted."],
          },
        },
        {
          id: "ela11-u3-synthesis-essay-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SOURCES,
          stem: "Which sentence best synthesizes Sources B and C rather than summarizing them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Source B is a survey of teachers, and Source C is a letter from a parent." },
              { id: "b", text: "Teachers like the four-day week, and a parent writes about child care." },
              { id: "c", text: "Although most teachers prefer the shorter week, the parent's letter suggests that the schedule's benefits are not shared equally, since families without Friday flexibility must absorb new costs." },
              { id: "d", text: "The four-day week is good because many teachers prefer it." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Conversation with sources", statement: "Place sources in relation to each other and draw a conclusion neither makes alone." }],
            steps: [
              { reasoning: "Option (c) relates the two sources with a concession word ('Although') and shows how they qualify each other.", evidence: "58 percent also said", marks: 1, markCode: "AO1" },
              { reasoning: "It draws a new conclusion (benefits are unevenly shared) that neither source states.", evidence: "families who cannot adapt", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "**(c)**. It connects sources and draws a conclusion. (a) and (b) summarize each source separately and (d) relies on one source only.",
            commonErrors: ["Choosing (b), which mentions both sources but never connects them."],
          },
        },
        {
          id: "ela11-u3-synthesis-essay-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SOURCES,
          stem: "Write a synthesis paragraph (five to seven sentences) that takes a position on whether the four-day week benefits a rural district. Use all three sources by attributing information and commenting on it, and acknowledge at least one limit of the evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Build a position by connecting sources around ideas." },
              { kind: "technique", name: "Attribution and limits", statement: "Attribute evidence and state what the sources cannot show." },
            ],
            steps: [
              { reasoning: "A clear position that goes beyond any one source, for example that savings and teacher preference come with hidden costs.", marks: 2, markCode: "AO4" },
              { reasoning: "All three sources are integrated with attribution and accurate details, such as 4 percent savings, 71 percent preference and Friday child care.", evidence: "71 percent", marks: 2, markCode: "AO1" },
              { reasoning: "Acknowledges a limit, such as only two years of flat scores or a survey that includes only teachers, with accurate, fluent writing.", evidence: "stayed flat during the first two years", marks: 2, markCode: "AO4" },
            ],
            levels: levels("writing", 6),
            finalAnswer: "Model: The four-day week offers real but uneven benefits. The superintendent reports a 4 percent reduction in operating costs, and 71 percent of teachers prefer the schedule, yet the same survey finds that 58 percent believe long days exhaust students. A parent's letter adds that families who work on Fridays now pay for child care, which suggests that some savings simply move from the district to households. Because reading scores have stayed flat for only two years, the evidence cannot show whether learning will suffer later, so districts should adopt the schedule cautiously and plan support for working families.",
            commonErrors: ["Giving each source a separate sentence with no connecting analysis.", "Treating all sources as equally reliable.", "Ignoring the limits of the data."],
          },
        },
        {
          id: "ela11-u3-synthesis-essay-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: SOURCES,
          stem: "Answer all parts about writing a synthesis essay on the question: Should a rural district adopt a four-day school week?",
          parts: [
            { label: "a", prompt: "For each source, state its perspective and one limit on what it can prove.", marks: 3 },
            { label: "b", prompt: "Write a thesis statement that synthesizes the sources and explain why it is not a summary.", marks: 5 },
            { label: "c", prompt: "Write a body paragraph (six to eight sentences) that places at least two sources in conversation (for example one that agrees and one that qualifies) and draws a conclusion of your own.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source evaluation", statement: "Judge each source's perspective and the limits of its evidence." },
              { kind: "technique", name: "Synthesis", statement: "A thesis combines source ideas into a position none of them states alone." },
              { kind: "convention", name: "Attribution", statement: "Name where information comes from, and distinguish source ideas from your own." },
            ],
            steps: [
              { part: "a", reasoning: "Source A: an administrator concerned with costs; limit: only two years of reading data and no view of families or student fatigue.", evidence: "stayed flat during the first two years", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Source B: teachers' view; limit: it does not include students or parents and reports preferences rather than outcomes.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Source C: one parent's experience; limit: a single anecdote that cannot show how many families are affected.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A clear, arguable thesis that combines cost, staff preference and family impact into a position.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "The thesis goes beyond any single source, for instance by claiming the savings are partly shifted to families.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Explains that a summary would only repeat what each source says, while the thesis states what they imply together.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "A topic sentence that frames a shared idea (for example, who benefits and who pays).", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Accurate, attributed evidence from at least two sources.", evidence: "58 percent also said", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Relationship between sources shown with signal language (agrees, qualifies, by contrast) and explained.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "The writer's own conclusion, including a limit or uncertainty in the evidence.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Accurate conventions, smooth transitions and formal style.", marks: 2, markCode: "AO5" },
            ],
            levels: [...levels("writing", 5, "b"), ...levels("writing", 12, "c")],
            finalAnswer: "(a) A: an administrator focused on cost; two years of data cannot show long-term learning. B: teachers' preferences, not student outcomes. C: one parent's anecdote, not a measure of how many families are affected. (b) Thesis: Although a four-day week saves money and pleases teachers, it shifts costs to working families and strains students, so rural districts should adopt it only with support. This is synthesis because no source claims it. (c) Model: The sources agree that the schedule helps adults in the system but differ over who bears the cost. The superintendent reports a 4 percent saving, and 71 percent of teachers prefer the week. However, the same teachers say that longer days leave students too tired, and a parent adds that Friday child care is a new expense. By contrast with the budget figures, these accounts show costs that never appear on the district's ledger. Taken together, the evidence suggests that savings are real but partly transferred, although two years of flat scores cannot yet tell us about long-term learning.",
            commonErrors: ["Writing about Source A, then B, then C in sequence.", "Quoting at length with no commentary.", "Treating a single anecdote as proof of a trend."],
          },
        },
      ],
    },
    {
      id: "ela11-u3-personal-narrative",
      title: "Personal essay and reflective narrative",
      skill: "Write a college application or reflective narrative with a distinct voice, concrete detail and genuine reflection.",
      lesson: {
        sections: [
          {
            heading: "Show a moment, then think about it",
            body: "A personal essay is not a list of achievements or a lesson announced in general terms. Start with a **specific moment**: a scene with place, action and sensory detail. Replace abstractions ('responsibility', 'hard work') and clichés with **concrete details** that let readers draw the conclusion themselves. 'I scraped burnt sugar off the trays at 4 a.m. while my uncle slept in the back' shows more than 'I learned responsibility.' Use dialogue sparingly and vary pacing: slow down for the pivotal moment and summarize the rest.",
          },
          {
            heading: "Voice and reflection",
            body: "**Voice** is the sound of a particular person thinking: your diction, humor, rhythm and what you choose to notice. Write as you would speak in a thoughtful conversation, not in a stiff, inflated register. **Reflection** is where the essay earns its point: explain what the moment revealed, what you misunderstood before and how you see differently now. Avoid tidy morals ('I can accomplish anything'). Honest, specific insight, including uncertainty or what you still wonder, is more convincing than a triumph. End with an image or a deepened thought, not a summary.",
          },
        ],
        keyFormulas: [
          { name: "Scene before lesson", statement: "Open with a specific moment in action and sensory detail, not a statement of what you learned." },
          { name: "Show, then reflect", statement: "Concrete detail first, then explicit thinking about what it meant and changed." },
          { name: "Cliche test", statement: "If many applicants could write the sentence, replace it with a detail only you could supply." },
        ],
        workedExample: {
          problem: "Rewrite 'Working at the bakery taught me responsibility' with concrete detail and reflection.",
          solution: "At 4 a.m., I scraped burnt sugar from the trays while my uncle slept, and for the first time no one would check whether I had done it well. Only the customers who came at seven would know. I realized that responsibility was not about being watched; it was about caring for people I would never meet. The revision opens in a scene, uses sensory detail and ends with reflection that revises a belief.",
        },
      },
      questions: [
        {
          id: "ela11-u3-personal-narrative-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ESSAY,
          stem: "What is the main weakness of this opening?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is written in the first person." },
              { id: "b", text: "It relies on general statements and cliches rather than a specific moment with concrete detail." },
              { id: "c", text: "It is too short to be an opening." },
              { id: "d", text: "It uses too many sensory details." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Concrete detail", statement: "Specific detail shows an experience; general claims only announce it." }],
            steps: [{ reasoning: "The passage says the bakery taught 'a lot about responsibility' but shows no scene, action or detail, and it uses cliches such as 'hard work pays off'.", evidence: "hard work pays off", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)**. The opening is generic and abstract. First person is appropriate in a personal essay, and there is no sensory detail at all.",
            commonErrors: ["Choosing (a), assuming first person is informal."],
          },
        },
        {
          id: "ela11-u3-personal-narrative-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: ESSAY,
          stem: "Which revision of 'It was a really great experience that changed me forever' provides the most effective reflection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It was an amazing experience that I will never forget." },
              { id: "b", text: "I used to think that being good at something meant being praised for it; the bakery taught me that the best work is the kind nobody sees." },
              { id: "c", text: "The experience changed my life in many important ways." },
              { id: "d", text: "In conclusion, hard work is important for everyone." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflection", statement: "Reflection states what the writer believed before, what changed and why it matters." }],
            steps: [
              { reasoning: "Option (b) names a prior belief ('being praised') and a revised understanding, which is real reflection.", evidence: "I used to think", marks: 1, markCode: "AO4" },
              { reasoning: "It is specific and original in diction, with a distinct voice, rather than a generic statement such as 'changed me forever'.", evidence: "the kind nobody sees", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)**. It names a changed belief. (a) and (c) repeat vague praise and (d) announces a general moral.",
            commonErrors: ["Choosing (d), mistaking a general moral for reflection."],
          },
        },
        {
          id: "ela11-u3-personal-narrative-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ESSAY,
          stem: "Rewrite the draft as a new opening paragraph of five to seven sentences. Begin in a specific moment at the bakery (invent plausible details), include at least three concrete sensory details and end with one sentence of honest reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Scene and detail", statement: "Concrete, sensory detail in a specific moment makes a narrative vivid." },
              { kind: "skill", name: "Reflection and voice", statement: "A distinctive voice and a specific insight earn the reader's trust." },
            ],
            steps: [
              { reasoning: "Opens in a specific moment (time, place, action) rather than a general statement.", evidence: "I have always been a hard worker", marks: 2, markCode: "AO4" },
              { reasoning: "At least three concrete sensory details that show rather than tell.", marks: 2, markCode: "AO4" },
              { reasoning: "A closing sentence of specific, honest reflection in a natural voice, with accurate conventions.", marks: 2, markCode: "AO5" },
            ],
            levels: levels("writing", 6),
            finalAnswer: "Model: At four in the morning, the bakery smelled of scorched sugar and warm yeast, and my uncle's radio crackled in the back room. I knelt by the oven, scraping blackened caramel from a tray with a butter knife that was too dull to help. No one would ever know whether I did it well. By seven, a woman in scrubs would take her usual loaf and say thank you without looking at me. I used to believe that effort mattered only when someone could see it; that morning I began to suspect that some work is a promise to strangers.",
            commonErrors: ["Opening with 'Ever since I was a child'.", "Listing adjectives instead of concrete details.", "Ending with a tidy moral about hard work."],
          },
        },
        {
          id: "ela11-u3-personal-narrative-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: ESSAY,
          stem: "Answer all parts about developing this applicant's personal essay.",
          parts: [
            { label: "a", prompt: "Identify two specific problems with the draft's voice or detail.", marks: 2 },
            { label: "b", prompt: "List four concrete details, with a sense of how each could appear, that would make the bakery scene more vivid and personal.", marks: 6 },
            { label: "c", prompt: "Write the final paragraph of the essay (six to eight sentences), including one concrete image from the bakery, a reflection on how the applicant's thinking changed and an ending that avoids a summary or cliche.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Concrete detail", statement: "Specific particulars show experience and distinguish one writer from another." },
              { kind: "skill", name: "Reflection", statement: "Reflection explains how the experience changed the writer's understanding." },
              { kind: "convention", name: "Ending", statement: "A strong ending deepens or complicates insight, usually through an image, rather than summarizing." },
            ],
            steps: [
              { part: "a", reasoning: "Generic, abstract diction and cliches ('hard work pays off', 'accomplish anything') give no distinct voice.", evidence: "I can accomplish anything if I try", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "No specific scene, action or sensory detail; the bakery itself is never described.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Four specific, plausible details (for example sights, sounds, smells, a line of dialogue, a mistake or a task).", marks: 4, markCode: "AO4" },
              { part: "b", reasoning: "Brief explanation of how each detail would function (reveal character, relationship or time).", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "A concrete bakery image anchors the paragraph.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Reflection that names a changed belief or lingering question, specific rather than a generic lesson.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Authentic voice, with varied syntax and diction that sounds like one person.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "An ending that deepens or complicates the insight rather than summarizing or moralizing.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Accurate conventions and polished sentences.", marks: 1, markCode: "AO5" },
            ],
            levels: [...levels("writing", 6, "b"), ...levels("writing", 12, "c")],
            finalAnswer: "(a) Cliched, abstract voice; no scene or sensory detail. (b) Examples: the 4 a.m. smell of scorched sugar; the radio static in the back room; the dull butter knife used on a tray; a customer's quiet thank-you; each reveals time, setting, effort or relationship. (c) Model: I still think about the burnt caramel on tray nine. It was a small failure, and my uncle only shrugged, but I had expected a lecture and was almost disappointed. Until then I thought work was proven by results that people could measure. Now I notice the unseen jobs, like the person who wipes the counter before I arrive, and I wonder how much of what holds my life together was done by someone who never heard thanks. I do not have a lesson yet. I have the knife, the tray and the habit of looking.",
            commonErrors: ["Writing a summary of the summer instead of a scene.", "Ending with a moral that repeats the opening.", "Using impressive vocabulary that hides the writer's actual voice."],
          },
        },
      ],
    },
  ],
};
