import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const START_TIMES: TextExtract = {
  title: "Later Start Times (draft)",
  author: "Written for Akademik Space",
  text: "Schools should start later. Everyone knows that teenagers are tired, and tired students cannot learn. Last spring my friend Dana moved to a school that starts at 8:45, and she says she feels much better. A two-year university study of one district found that after the first bell moved from 7:15 to 8:30, attendance rose and car crashes involving teen drivers fell. Some people argue that a later start would push sports practice into the dark, but that is a silly worry. Overall, later start times are obviously the right choice, and anyone who disagrees does not care about students.",
};

const LUNCH: TextExtract = {
  title: "School Lunch Reform (draft conclusion)",
  author: "Written for Akademik Space",
  text: "Honestly, you guys can't tell me the lunches here are fine. I think they're pretty gross, and my friends do too. The cafeteria serves fries four days a week. Also, nobody eats the salad. So, the district should totally fix the menu. In conclusion, lunch is bad and needs to change.",
};

export const lesson31: Lesson = {
  id: "ela9-u3-lesson-3-1",
  code: "3-1",
  title: "Argument Writing",
  goal: "I CAN write precise claims, address counterclaims fairly, judge the strengths and limitations of evidence, and sustain a formal, cohesive argument with a strong conclusion.",
  standards: ["W.9-10.1", "W.9-10.1a", "W.9-10.1b", "W.9-10.1c", "W.9-10.1d", "W.9-10.1e"],
  vocabulary: [
    { term: "Claim", definition: "The arguable position a writer takes on a topic, which the rest of the essay supports." },
    { term: "Counterclaim", definition: "A reasonable opposing position that a writer acknowledges and answers." },
    { term: "Rebuttal", definition: "The part of an argument that responds to a counterclaim with reasons or evidence." },
    { term: "Credible evidence", definition: "Evidence from a reliable, relevant, current and unbiased source that is specific enough to check." },
    { term: "Transition", definition: "A word or phrase that links ideas and shows relationships between sentences or paragraphs." },
    { term: "Objective tone", definition: "A tone that relies on reasons and evidence rather than personal feeling, insults or slang." },
    { term: "Cohesion", definition: "The way words, sentences and paragraphs fit together so that ideas flow logically." },
  ],
  concepts: [
    {
      id: "ela9-u3-claims-counterclaims",
      title: "Precise claims, counterclaims and evidence",
      skill: "Introduce a precise claim, distinguish it from opposing claims, develop both with the most relevant evidence, and judge the strengths and limitations of that evidence.",
      lesson: {
        sections: [
          {
            heading: "Precise claims and fair counterclaims",
            body: "A **precise claim** states a specific, arguable position and often previews its reasons: 'Our district should start high school classes at 8:30 because teenagers need more sleep and later starts improve safety.' A vague claim ('School should be better') cannot be proved. Good arguers also **distinguish the claim from alternate or opposing claims** and answer them. State the counterclaim fairly, in its strongest form, then offer a **rebuttal**: 'Critics worry that practice would run after dark; however, the district can add lighting to its fields at a modest cost.' Dismissing opponents as foolish weakens your credibility.",
          },
          {
            heading: "Strengths and limitations of evidence",
            body: "Develop each claim thoroughly with **relevant, sufficient evidence**: statistics, expert findings, documented examples. Then ask what the evidence can and cannot prove. A two-year study of one district is strong evidence about that district, but a limitation is that other districts may differ. A friend's story is vivid but is a single, unchecked anecdote. Words such as 'everyone knows' and 'obviously' signal a claim that has not been supported. Anticipate the audience's knowledge and concerns, and acknowledge limitations honestly: 'The study covered only one district; further research would confirm the pattern.'",
          },
        ],
        keyFormulas: [
          { name: "Precise claim", statement: "A specific, arguable position, usually with a preview of reasons." },
          { name: "Counterclaim + rebuttal", statement: "State the opposing view fairly, then answer it with reasons or evidence." },
          { name: "Strength of evidence", statement: "Relevant, specific, credible, sufficient and current." },
          { name: "Limitation", statement: "What the evidence cannot show: small sample, one case, an unnamed source, outdated data or bias." },
        ],
        workedExample: {
          problem: "Revise the weak claim 'Homework is bad' into a precise claim and add a fair counterclaim.",
          solution: "Precise claim: 'Middle school teachers should limit homework to thirty minutes a night, because longer assignments cut into sleep without raising test scores.' Counterclaim and rebuttal: 'Some teachers argue that long assignments build discipline. Discipline matters, but the research cited shows no gain in achievement after the first thirty minutes, so shorter, better-designed tasks can build the same habits.' The claim now names who, what and why, and the opposing view is stated fairly before it is answered.",
        },
      },
      questions: [
        {
          id: "ela9-u3-claims-counterclaims-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is the most precise, arguable claim for an essay about school lunches?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "School lunches are a topic many students care about." },
              { id: "b", text: "Our district should replace fried lunch items with fresh options because healthier meals improve afternoon concentration." },
              { id: "c", text: "Some students like school lunch and some do not." },
              { id: "d", text: "School lunches are bad." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Precise claim", statement: "A strong claim is specific, arguable and previews its reasons." }],
            steps: [{ reasoning: "Only (b) names an action, an actor and reasons. (a) and (c) state facts nobody would dispute, and (d) is arguable but vague.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)**. It is specific, debatable and previews the reasoning.",
            commonErrors: ["Choosing (d) because it is strongly worded, although it is vague.", "Choosing (a) or (c), which are topics or neutral facts rather than claims."],
          },
        },
        {
          id: "ela9-u3-claims-counterclaims-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: START_TIMES,
          stem: "Which revision of the sentence \"Some people argue that a later start would push sports practice into the dark, but that is a silly worry\" best acknowledges the counterclaim fairly and answers it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Some people argue that a later start would push sports practice into the dark, but they are wrong." },
              { id: "b", text: "A later start might push practice into the dark; however, the district could add field lighting or shift practice times, which would solve the problem." },
              { id: "c", text: "Sports practice is not important enough to worry about." },
              { id: "d", text: "No one has ever been hurt by practicing in the dark." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Counterclaim and rebuttal", statement: "State the opposing view fairly, then respond with reasoning or a solution." }],
            steps: [
              { reasoning: "(b) states the concern accurately and does not mock it.", evidence: "might push practice into the dark", marks: 1, markCode: "AO4" },
              { reasoning: "(b) rebuts with a practical solution, while (a) and (c) dismiss and (d) makes an unsupported claim.", evidence: "add field lighting or shift practice times", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "**(b)**. It acknowledges the counterclaim fairly and answers it with reasoning.",
            commonErrors: ["Choosing (a), which dismisses the opponents without any reasoning.", "Choosing (d), an overgeneralization with no evidence."],
          },
        },
        {
          id: "ela9-u3-claims-counterclaims-q3",
          difficulty: "core",
          totalMarks: 6,
          extract: START_TIMES,
          stem: "Evaluate the evidence in the draft. Identify one strength and one limitation of the university study, and one limitation of Dana's experience. Then explain why the phrase \"Everyone knows\" does not strengthen the claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating evidence", statement: "Judge evidence by relevance, credibility and sufficiency, and name what it cannot show." },
            ],
            steps: [
              { reasoning: "Strength of the study: it is specific (two years, named time change) and measures outcomes directly related to the claim, attendance and crashes.", evidence: "attendance rose and car crashes involving teen drivers fell", marks: 1, markCode: "AO1" },
              { reasoning: "Further strength: it comes from university researchers, a credible source with a clear method.", evidence: "A two-year university study", marks: 1, markCode: "AO1" },
              { reasoning: "Limitation of the study: it covers only one district, so the results may not apply everywhere.", evidence: "of one district", marks: 1, markCode: "AO1" },
              { reasoning: "Limitation of Dana's story: a single anecdote about one student is not representative and cannot be checked.", evidence: "she says she feels much better", marks: 1, markCode: "AO1" },
              { reasoning: "'Everyone knows' asserts agreement without evidence, so it is an unsupported generalization.", evidence: "Everyone knows that teenagers are tired", marks: 1, markCode: "AO4" },
              { reasoning: "Clear, organized evaluation that links each judgment to the claim.", marks: 1, markCode: "AO4" },
            ],
            levels: levels("analysis", 6),
            finalAnswer: "The study is a strength because it is specific, lasted two years, comes from university researchers and measures outcomes tied to the claim. Its limitation is that it covered one district. Dana's experience is a single anecdote that cannot be checked or generalized. 'Everyone knows' is an unsupported assertion, so it asks the reader to accept the point rather than proving it.",
            commonErrors: ["Saying the evidence is 'good' or 'bad' without explaining why.", "Treating an anecdote as proof for the whole population."],
          },
        },
        {
          id: "ela9-u3-claims-counterclaims-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: START_TIMES,
          stem: "Answer all parts about the draft \"Later Start Times\".",
          parts: [
            { label: "a", prompt: "Identify the writer's claim and the counterclaim the writer addresses.", marks: 2 },
            { label: "b", prompt: "Explain how the last sentence weakens the argument, and how the treatment of the counterclaim could be improved.", marks: 6 },
            { label: "c", prompt: "Write a body paragraph (about 120 words) for an argument that your school should start later. Include a precise claim, a fair counterclaim with a rebuttal, and at least one piece of specific evidence, noting one limitation of that evidence.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair treatment of opposition", statement: "Credibility grows when opposing views are stated accurately and answered with reasons." },
              { kind: "convention", name: "Argument paragraph", statement: "Claim, evidence, reasoning, counterclaim and rebuttal, each connected by transitions." },
            ],
            steps: [
              { part: "a", reasoning: "The claim: schools should start later.", evidence: "Schools should start later.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The counterclaim: a later start would push sports practice into the dark.", evidence: "push sports practice into the dark", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The last sentence attacks people who disagree rather than their reasoning, an insult that loses the reader's trust.", evidence: "anyone who disagrees does not care about students", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Obviously' asserts the claim is certain instead of proving it.", evidence: "obviously the right choice", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The tone becomes emotional and absolute, so the objective, formal style is lost.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "The counterclaim is dismissed as 'silly' and is not stated in its strongest form.", evidence: "that is a silly worry", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It offers no rebuttal, such as lighting or adjusted practice times.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Improvement is explained: state the concern fairly, then answer it with specific reasons.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "A precise, arguable claim that names the school and reasons.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "At least one specific, relevant piece of evidence (a statistic, study or documented example).", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "A limitation of the evidence is acknowledged honestly.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "A fair counterclaim is stated accurately.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "A reasoned rebuttal answers the counterclaim.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Transitions connect the parts and the tone is formal and objective.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Correct spelling, punctuation and grammar.", marks: 1, markCode: "AO5" },
            ],
            levels: [...levels("analysis", 6, "b"), ...levels("writing", 10, "c")],
            finalAnswer: "(a) Claim: schools should start later. Counterclaim: later starts would push sports into the dark. (b) The closing sentence insults opponents and says 'obviously', so it relies on tone rather than proof; the 'silly worry' dismisses the counterclaim without a rebuttal. A better version states the concern fairly and offers a solution such as field lighting. (c) Model: 'Our high school should start at 8:30 because teenagers need more sleep to learn effectively. A two-year university study of one district found that attendance rose and teen car crashes fell after the first bell moved later. The study covered only one district, but the pattern matches what sleep researchers report about adolescent body clocks. Critics note that practice could end after dark; however, adding field lights or shortening practice by fifteen minutes would solve that problem at modest cost. Therefore, the benefits to safety and attendance outweigh the scheduling challenges.'",
            commonErrors: ["Repeating the claim without evidence.", "Stating the counterclaim in a weak, easily defeated form.", "Listing evidence without saying what it shows or what it cannot show."],
          },
        },
      ],
    },
    {
      id: "ela9-u3-cohesion-style-conclusion",
      title: "Cohesion, formal style, objective tone and conclusions",
      skill: "Use words, phrases and clauses to link the sections of an argument, keep a formal style and objective tone, and end with a statement that follows from and supports the argument.",
      lesson: {
        sections: [
          {
            heading: "Cohesion and transitions",
            body: "**Cohesion** is the sense that every sentence belongs. Use **transitions** that show the relationship you intend: addition ('furthermore'), contrast ('however', 'in contrast'), cause and effect ('as a result', 'consequently'), example ('for instance') and concession ('although'). Link sections by repeating key terms or referring back to an earlier idea. Avoid filler openers such as 'Also' or 'So' used as a stand-in for real logic. Each paragraph should do one job in the argument, and the transition at its start should tell the reader which one.",
          },
          {
            heading: "Formal style, objective tone and concluding statements",
            body: "Establish and maintain a **formal style** and an **objective tone**, matched to your audience. Avoid slang ('totally', 'gross'), contractions in formal writing, direct address ('you guys') and personal opinion phrases ('I think'), and let the evidence carry the weight. State claims directly: 'The district should revise its menu' rather than 'I feel like they should maybe fix the food.' Finally, provide a **concluding statement** that follows from and supports the argument. A strong conclusion restates the claim in fresh words, summarizes the strongest reasons and leaves the reader with the significance of the issue or a call to action. Do not introduce new evidence, and avoid the empty phrase 'In conclusion, I have shown...'.",
          },
        ],
        keyFormulas: [
          { name: "Transitions", statement: "Choose by relationship: furthermore (addition), however (contrast), consequently (result), for instance (example)." },
          { name: "Formal style", statement: "No slang, no 'you guys', no unnecessary contractions, precise vocabulary." },
          { name: "Objective tone", statement: "Reasons and evidence lead; avoid insults, exaggeration and 'I think'." },
          { name: "Concluding statement", statement: "Restates the claim in fresh words, summarizes key reasons and shows why the issue matters." },
        ],
        workedExample: {
          problem: "Revise: 'Honestly, the gym is gross. So the school should totally clean it.'",
          solution: "Revised: 'The gym is in poor condition: the floor is stained and the equipment is worn. Consequently, the school should schedule regular cleaning and replace damaged equipment.' The revision removes slang and the opener 'Honestly', replaces the vague 'gross' with specific details, and uses 'Consequently' to show cause and effect rather than the filler 'So'.",
        },
      },
      questions: [
        {
          id: "ela9-u3-cohesion-style-conclusion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LUNCH,
          stem: "Which phrase from the draft is least appropriate for a formal, objective argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cafeteria serves fries four days a week." },
              { id: "b", text: "the district should totally fix the menu" },
              { id: "c", text: "nobody eats the salad" },
              { id: "d", text: "needs to change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal style", statement: "Formal writing avoids slang intensifiers such as 'totally'." }],
            steps: [{ reasoning: "'Totally' is slang that weakens the formal tone; the other phrases are factual or plain.", evidence: "the district should totally fix the menu", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)**. 'Totally' is a casual intensifier.",
            commonErrors: ["Choosing (c), which is overgeneralized but not slang; the question asks about tone."],
          },
        },
        {
          id: "ela9-u3-cohesion-style-conclusion-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: LUNCH,
          stem: "The writer uses \"Also,\" to link \"The cafeteria serves fries four days a week\" and \"nobody eats the salad.\" Which transition shows the relationship most precisely, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meanwhile, because it shows two events happening at once" },
              { id: "b", text: "Consequently, because the second idea is the result of the first" },
              { id: "c", text: "However, because the second idea contrasts with the first" },
              { id: "d", text: "For instance, because the second idea is an example of the first" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Precise transitions", statement: "Choose the transition that names the logical relationship between ideas." }],
            steps: [
              { reasoning: "The fries are on the menu so often that, as a result, the salad goes uneaten: cause and effect.", evidence: "fries four days a week", marks: 1, markCode: "AO4" },
              { reasoning: "'Consequently' names that relationship; the others misstate it.", evidence: "nobody eats the salad", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "**(b)**. 'Consequently' shows the unpopular salad results from the fried-food menu.",
            commonErrors: ["Choosing (c) because the two sentences cover different foods, though they are not opposed."],
          },
        },
        {
          id: "ela9-u3-cohesion-style-conclusion-q3",
          difficulty: "core",
          totalMarks: 8,
          extract: LUNCH,
          stem: "Rewrite the draft conclusion in a formal style and objective tone. Replace slang and personal opinion with precise language, use at least two transitions, and end with a concluding statement that restates the claim in new words and explains why the issue matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal style and objective tone", statement: "Use precise vocabulary, avoid slang and direct address, and let the evidence carry the argument." },
              { kind: "skill", name: "Concluding statement", statement: "Restate the claim in fresh words, summarize reasons and show significance." },
            ],
            steps: [
              { reasoning: "Removes slang and informal address such as 'Honestly', 'you guys' and 'totally'.", evidence: "Honestly, you guys can't tell me", marks: 2, markCode: "AO4" },
              { reasoning: "Replaces opinion words ('gross', 'I think') with precise, specific description.", evidence: "I think they're pretty gross", marks: 1, markCode: "AO4" },
              { reasoning: "Uses at least two accurate transitions, such as 'For instance' and 'Consequently'.", marks: 2, markCode: "AO4" },
              { reasoning: "Restates the claim in fresh words and ends with a statement of significance.", evidence: "the district should totally fix the menu", marks: 2, markCode: "AO4" },
              { reasoning: "Correct grammar and punctuation, with sentences varied and clear.", marks: 1, markCode: "AO5" },
            ],
            levels: levels("writing", 8),
            finalAnswer: "Model: 'The district's lunch menu does not meet students' needs. For instance, fried items appear four days a week, and the salad option goes largely uneaten. Consequently, the district should revise the menu to include appealing fresh choices. Better lunches would support students' health and concentration throughout the school day.'",
            commonErrors: ["Removing 'totally' but keeping 'gross'.", "Ending with 'In conclusion' and a copy of the first sentence.", "Adding new, unsupported statistics."],
          },
        },
        {
          id: "ela9-u3-cohesion-style-conclusion-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: LUNCH,
          stem: "Answer all parts about the draft \"School Lunch Reform\".",
          parts: [
            { label: "a", prompt: "Identify two features of the draft that make the tone informal rather than objective.", marks: 2 },
            { label: "b", prompt: "Explain why the final sentence is a weak concluding statement, and what a strong conclusion should do instead.", marks: 4 },
            { label: "c", prompt: "Write a two-paragraph conclusion section (about 130 words) for an argument that schools should offer more fresh food. Use a formal style, varied transitions to link the paragraphs, and a concluding statement that follows from the argument.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Objective tone", statement: "Objective writing relies on reasons and evidence, not personal feeling or slang." },
              { kind: "skill", name: "Cohesion", statement: "Transitions and repeated key terms link ideas so that the argument builds logically." },
            ],
            steps: [
              { part: "a", reasoning: "Informal address or slang such as 'you guys' or 'totally'.", evidence: "you guys can't tell me", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Personal opinion and casual words such as 'I think' or 'gross' replace evidence.", evidence: "I think they're pretty gross", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "It only repeats the claim in vague words and offers no summary of reasons.", evidence: "lunch is bad and needs to change", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "'In conclusion' is a formula opener that adds nothing.", evidence: "In conclusion", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "A strong conclusion restates the claim in fresh words and summarizes the strongest reasons.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "It also shows the significance of the issue or calls for action, without new evidence.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Clear, specific claim restated in fresh words.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Reasons are summarized accurately and precisely.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Varied, accurate transitions link sentences and the two paragraphs.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Formal style and objective tone are maintained throughout.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "A concluding statement shows significance or calls for action.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Correct conventions and varied sentences.", marks: 1, markCode: "AO5" },
            ],
            levels: [...levels("writing", 4, "b"), ...levels("writing", 10, "c")],
            finalAnswer: "(a) Slang or direct address ('you guys', 'totally') and personal opinion ('I think', 'gross'). (b) The last sentence merely repeats a vague claim with a formula opener and gives no summary or significance; a strong conclusion restates the claim in fresh words, summarizes key reasons and shows why the issue matters. (c) Model: 'Fresh food is not a luxury; it is a basic part of an effective school day. The evidence shows that students who eat balanced meals concentrate longer, and the district can provide such meals at a reasonable cost. Furthermore, current menus rely heavily on fried items, and the fresh options that do appear go largely uneaten. Nevertheless, some families worry about price. That concern is valid; however, bulk purchasing and local suppliers can keep prices stable. Ultimately, the district owes its students meals that support learning, and it should act this year.'",
            commonErrors: ["Repeating the introduction word for word.", "Using 'In conclusion' and then introducing new evidence.", "Changing slang but keeping direct address."],
          },
        },
      ],
    },
  ],
};
