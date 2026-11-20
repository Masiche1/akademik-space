import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const CANAL: TextExtract = {
  title: "How the Harrow Canal Changed a Valley (fictional)",
  author: "Written for Akademik Space",
  source: "An invented historical essay",
  text: "When the Harrow Canal opened in 1828, its backers promised that cheap transport would lift the whole valley. For the mill owners at Pell, it did: coal arrived at half its former cost, and finished cloth reached the coast in two days instead of six. Within a decade the owners had doubled the number of looms.\n\nThe new looms needed workers, and workers needed homes. Farm families from the hills, pressed by falling grain prices, moved into hastily built rows along the towpath. The canal company, which owned the land beside the water, charged rents that rose with every new arrival. By 1840 a weaver's family might spend a third of its wages on a single damp room.\n\nThe crowding had a consequence that no one had planned. In the summer of 1849 a fever spread through the towpath rows, killing nearly two hundred people in a month. The mill owners, who had never taken an interest in housing, now found their workforce cut by a tenth. They petitioned the town council for drains and clean water, and the council, long dominated by the owners' friends, agreed.\n\nThe reforms were modest, but they set a precedent. For the first time, the town accepted that the cost of private profit could fall on the public, and that the public might have a claim in return. The canal that had been built to carry coal had carried, along with it, a new idea of civic responsibility.",
};

const SOURCES: TextExtract = {
  title: "Four Sources on a Proposed Bike Lane (fictional)",
  author: "Written for Akademik Space",
  source: "Invented sources for a city council briefing",
  text: "SOURCE A: City traffic report (table, described)\nThe report compares Marlow Street before and after a protected bike lane was added in 2022. Daily cyclists rose from 310 to 790. Daily car trips fell from 9,400 to 8,900. Reported injuries to cyclists fell from 14 per year to 6 per year. The report notes that the counts were taken in October of each year.\n\nSOURCE B: Letter from the Marlow Street Merchants' Association\n'Since the lane was built, our members report a drop in customers who arrive by car and need parking. Seven of the thirty-one shops on the street have seen lower sales. We ask the council not to extend the lane until its effect on small business is understood.'\n\nSOURCE C: Chart (described): average monthly sales\nA line graph from an independent survey of all thirty-one shops shows average monthly sales dipping 4 percent in the three months after construction, then rising to 6 percent above the earlier level by the end of the first year.\n\nSOURCE D: Photograph caption\nA photograph taken at noon shows the street with parked cars on both sides of the former lane. A caption from the neighborhood newsletter reads: 'The new lane is lightly used and has removed forty parking spaces.'",
};

export const lesson23: Lesson = {
  id: "ela11-u2-lesson-2-3",
  code: "2-3",
  title: "Complex Analysis",
  goal: "I CAN analyze how ideas and events interact over a complex text, and integrate and evaluate multiple sources in different formats to address a question.",
  standards: ["RI.11-12.3", "RI.11-12.7"],
  vocabulary: [
    { term: "Causal chain", definition: "A sequence in which each event helps bring about the next, so that an early cause leads through intermediate steps to a final result." },
    { term: "Unintended consequence", definition: "A result of an action that the people who acted did not plan or expect." },
    { term: "Precedent", definition: "An earlier event or decision treated as a model or justification for later ones." },
    { term: "Interaction", definition: "The way ideas, people or events affect and change one another over time." },
    { term: "Corroborate", definition: "To strengthen a claim by showing that independent evidence supports it." },
    { term: "Format", definition: "The form in which information is presented, such as a table, chart, letter, photograph or caption." },
    { term: "Discrepancy", definition: "A difference or conflict between two accounts or sets of data that needs explaining." },
  ],
  concepts: [
    {
      id: "ela11-u2-event-sequences",
      title: "Sequences of events and interacting ideas",
      skill: "Analyze a complex set of ideas or sequence of events, and explain how specific individuals, ideas or events interact and develop over the course of a text.",
      lesson: {
        sections: [
          {
            heading: "Beyond the timeline",
            body: "A timeline lists what happened. Analysis explains how each development **caused**, enabled or changed the next. In a complex text, look for **causal chains**: an early event (a canal opens) produces a second (industry grows), which produces a third (crowded housing), then a fourth no one planned (disease). Name each link and the word or phrase that shows it, such as 'needed', 'pressed by', 'had a consequence'.",
          },
          {
            heading: "Interactions and unintended consequences",
            body: "Ideas and groups also interact. Owners, workers, a company and a council each want different things, and the text may show how their interests collide or reinforce each other. Watch for the **unintended consequence**: the result no one planned, which often drives the plot of an informational text. Finally, ask what the sequence shows overall. The final paragraph of a text often turns a chain of events into a larger claim.",
          },
        ],
        keyFormulas: [
          { name: "Cause, link, effect", statement: "State the cause, the effect, and the word or detail in the text that connects them." },
          { name: "Interaction", statement: "Show how two individuals, groups or ideas change each other, not just that both appear." },
          { name: "Unintended consequence", statement: "A result that arises from an action but was not its goal; look for 'no one had planned' or 'never taken an interest'." },
          { name: "Sequence to claim", statement: "End by stating what the whole sequence demonstrates about a larger idea." },
        ],
        workedExample: {
          problem: "Trace how the opening of the canal led to the fever of 1849. (4 marks)",
          solution: "The canal made coal cheaper and transport faster, so the mill owners doubled their looms. The extra looms needed workers, and farm families, 'pressed by falling grain prices', moved to cramped rows along the towpath. Because the canal company owned the land and raised rents with each arrival, families lived in 'a single damp room', and this overcrowding led to the fever. The disaster was an unintended consequence: the text says 'no one had planned' it. Each step is linked by need or pressure, so the canal's economic success produced the conditions for the epidemic.",
        },
      },
      questions: [
        {
          id: "ela11-u2-event-sequences-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CANAL,
          stem: "According to the essay, what directly caused farm families to move into the towpath rows?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mill owners built the rows for them." },
              { id: "b", text: "The new looms needed workers, and falling grain prices pressed the families to leave the hills." },
              { id: "c", text: "The town council ordered them to move." },
              { id: "d", text: "The fever of 1849 had emptied the hills." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Tracing cause", statement: "Find the words in the text that state why one event followed another." }],
            steps: [{ reasoning: "Two causes combine: demand for workers and pressure on farmers.", evidence: "Farm families from the hills, pressed by falling grain prices", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** The rows were 'hastily built' for workers who came to fill new jobs. The fever came later, in 1849.",
            commonErrors: ["Choosing (d), which reverses the order of events."],
          },
        },
        {
          id: "ela11-u2-event-sequences-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: CANAL,
          stem: "Which statement best describes the relationship between the fever and the council's reforms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The reforms were planned from the start, and the fever was only an accident." },
              { id: "b", text: "The fever's effect on the owners' workforce gave them a reason to support reforms they had ignored." },
              { id: "c", text: "The council acted to punish the owners for the fever." },
              { id: "d", text: "The reforms prevented the fever from spreading." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Interaction of events and interests", statement: "Show how a development changes the interests of the people involved." }],
            steps: [
              { reasoning: "The fever hurt the owners' own interest by cutting the workforce.", evidence: "found their workforce cut by a tenth", marks: 1, markCode: "AO1" },
              { reasoning: "The owners then petitioned a council their friends dominated, which agreed; the reforms followed the epidemic, not preceded it.", evidence: "They petitioned the town council for drains and clean water", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Self-interest, not foresight, turned the owners toward reform. Choice (d) reverses the sequence.",
            commonErrors: ["Choosing (c): the council was 'long dominated by the owners' friends', so it did not oppose the owners."],
          },
        },
        {
          id: "ela11-u2-event-sequences-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: CANAL,
          stem: "Explain how the interests of the mill owners and the canal company interacted to create the housing conditions described in the essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analyzing interaction", statement: "Show how two groups' separate interests combine to produce a result neither alone intended." },
              { kind: "skill", name: "Using evidence", statement: "Support each link in the chain with a short quotation." },
            ],
            steps: [
              { reasoning: "The owners wanted more looms and needed workers, but took no interest in where workers lived, so housing was left to others.", evidence: "who had never taken an interest in housing", marks: 2, markCode: "AO1" },
              { reasoning: "The canal company owned the land beside the water and profited from each new arrival, so rents rose with demand and encouraged crowding.", evidence: "charged rents that rose with every new arrival", marks: 2, markCode: "AO1" },
              { reasoning: "Together, the owners' neglect and the company's profit motive left workers in costly, overcrowded rows. The interaction of two profit-seeking groups produced the squalid conditions that no one had planned.", evidence: "a third of its wages on a single damp room", marks: 2, markCode: "AO1" },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer: "The owners expanded production and needed workers but 'never took an interest in housing', leaving the matter to the canal company, which owned the land and raised rents with every new arrival. Neither group intended squalor, but their combined pursuit of profit meant families paid 'a third of its wages' for 'a single damp room'. The interaction of neglect and rent-seeking created the crowding that made the epidemic possible.",
            commonErrors: ["Describing the owners and the company separately without showing how they interact.", "Presenting the housing conditions as deliberate cruelty rather than an unintended result."],
          },
        },
        {
          id: "ela11-u2-event-sequences-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: CANAL,
          stem: "Answer all parts of this question about the essay on the Harrow Canal.",
          parts: [
            { label: "a", prompt: "Give two benefits the canal brought the mill owners at Pell.", marks: 2 },
            { label: "b", prompt: "Explain why the fever of 1849 can be called an unintended consequence of the canal.", marks: 4 },
            { label: "c", prompt: "Analyze how the essay's structure, moving from promise through growth and crisis to reform, shapes its argument about the canal.", marks: 6 },
            { label: "d", prompt: "Evaluate the claim in the final paragraph that the canal carried 'a new idea of civic responsibility'. Consider how well the earlier events support it.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Causal chain", statement: "Trace a series of events by naming each cause, effect and linking word." },
              { kind: "convention", name: "Narrative essay structure", statement: "Informational essays often arrange events chronologically toward a final claim." },
              { kind: "skill", name: "Evaluating a claim", statement: "Test whether the evidence in the text is sufficient to support the writer's conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Cheaper coal.", evidence: "coal arrived at half its former cost", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Faster delivery of cloth to the coast.", evidence: "two days instead of six", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The canal's success created demand for workers, which led to crowded housing; the fever came from the crowding.", evidence: "hastily built rows along the towpath", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "The text signals that the result was unplanned: the crowding 'had a consequence that no one had planned', and the owners were themselves harmed.", evidence: "a consequence that no one had planned", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The opening promise sets a hopeful expectation, 'lift the whole valley', that the middle sections complicate.", evidence: "promised that cheap transport would lift the whole valley", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The middle paragraphs move through cause and effect, each opening with the result of the last ('The new looms needed workers'), so the chain feels inevitable.", evidence: "The new looms needed workers, and workers needed homes", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The crisis and modest reform lead to the final paragraph's generalization, so the argument is that economic change can bring social obligation; the early promise is ironically fulfilled in a way the backers did not mean.", evidence: "The reforms were modest, but they set a precedent", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Support: the town accepted for the first time that private profit could impose public costs, and the council agreed to drains and clean water.", evidence: "the cost of private profit could fall on the public", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Limit: the reforms were 'modest', driven by owners' self-interest after a fall in their workforce, not by principle, and the council was dominated by the owners' friends.", evidence: "long dominated by the owners' friends", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Judgment: the claim is reasonable as a description of a precedent, but overstated as a change in ideas; the evidence shows a change in practice motivated by interest.", marks: 2, markCode: "AO3" },
            ],
            levels: [...rubric(6, [5, 3, 2], "c"), ...rubric(6, [5, 3, 2], "d")],
            finalAnswer: "(a) Cheaper coal and faster delivery of cloth. (b) Growth drew workers into crowded towpath housing, and the fever followed; the text says no one had planned it and it reduced the owners' own workforce. (c) The structure moves from hopeful promise through linked cause and effect to crisis and reform, ending with a larger claim about responsibility. (d) The claim is supported by the council's acceptance that profit's costs fall on the public, but the reforms were modest and motivated by self-interest, so the 'new idea' is better described as a precedent than a settled principle.",
            commonErrors: ["In (b), repeating that the fever killed people without explaining why it was unintended.", "In (c), summarizing the paragraphs instead of analyzing their order.", "In (d), accepting the final claim without testing it against the evidence."],
          },
        },
      ],
    },
    {
      id: "ela11-u2-multiple-sources",
      title: "Integrating sources in different formats",
      skill: "Integrate and evaluate multiple sources presented in different formats, including data, charts, letters and images described in words, to address a question.",
      lesson: {
        sections: [
          {
            heading: "Reading each format on its own terms",
            body: "A table gives exact numbers but little context; a letter gives a stakeholder's view and a request; a chart shows change over time; a photograph captures a single moment. Before you combine sources, ask of each one: **who** produced it, **when** and **how** the evidence was gathered, and what it can and cannot show. A noon photograph, for example, shows one hour, not a whole year.",
          },
          {
            heading: "Combine, compare and decide",
            body: "To address a question, group the sources by what they say about it. Look for **corroboration**, where independent sources agree, and for **discrepancies**, where they conflict. Then explain the conflict: different dates, sample sizes, or interests. Weigh the evidence, not only count it: a survey of all thirty-one shops outweighs a letter about seven. Finish with a qualified answer that says what the evidence supports and what it leaves open.",
          },
        ],
        keyFormulas: [
          { name: "Source questions", statement: "Who produced it, when, how was it gathered, and what is its purpose?" },
          { name: "Corroboration", statement: "Independent sources that agree strengthen a claim." },
          { name: "Discrepancy", statement: "When sources conflict, look for differences in timing, sample, method or interest." },
          { name: "Weighting", statement: "Prefer broader, systematic, longer-term evidence over a single moment or a selected group." },
        ],
        workedExample: {
          problem: "Use Sources A and B to say whether the bike lane helped or harmed Marlow Street. (4 marks)",
          solution: "The sources point in different directions. Source A shows safety gains and more cyclists: injuries fell from 14 to 6 a year and daily cyclists rose from 310 to 790, with car trips falling only slightly. Source B, a merchants' letter, claims lower sales at seven of thirty-one shops. These do not strictly conflict, since they measure different things, but they come from different perspectives: a city report and an interested group. The letter reports only seven of thirty-one shops, a minority, so it cannot show that the street as a whole was harmed. A balanced answer is that the lane improved safety and cycling, with a possible cost to some businesses that Source C should test.",
        },
      },
      questions: [
        {
          id: "ela11-u2-multiple-sources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SOURCES,
          stem: "Which source gives the most systematic evidence about the effect of the lane on sales across the whole street?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Source A, the city traffic report" },
              { id: "b", text: "Source B, the merchants' letter" },
              { id: "c", text: "Source C, the independent survey chart" },
              { id: "d", text: "Source D, the photograph and caption" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Weighing evidence", statement: "Prefer evidence that covers the whole population and is gathered independently over time." }],
            steps: [{ reasoning: "The independent survey covers all thirty-one shops over a year, so it is the most complete evidence about sales.", evidence: "independent survey of all thirty-one shops", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Source A does not measure sales, Source B covers only seven shops and is from an interested group, and Source D shows a single moment.",
            commonErrors: ["Choosing (b) because it mentions sales directly, without noticing its limited and interested sample."],
          },
        },
        {
          id: "ela11-u2-multiple-sources-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SOURCES,
          stem: "Sources B and D both suggest the lane may be a problem, while Sources A and C suggest otherwise. Which explanation best accounts for part of this discrepancy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sources B and D describe a short period or a selected group, while Sources A and C cover broader or longer evidence." },
              { id: "b", text: "Sources A and C are forgeries." },
              { id: "c", text: "Sources B and D use data and Sources A and C do not." },
              { id: "d", text: "There is no real disagreement among any of the sources." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Explaining discrepancy", statement: "Account for conflict by comparing timing, sample, method and interest." }],
            steps: [
              { reasoning: "Source D shows only a noon photograph, one moment, and Source B reports only seven of thirty-one shops.", evidence: "Seven of the thirty-one shops", marks: 1, markCode: "AO1" },
              { reasoning: "Source C covers every shop for a year, and Source A compares counts before and after, so they are broader evidence.", evidence: "rising to 6 percent above the earlier level by the end of the first year", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The disagreement comes partly from narrow or short-term evidence against broad or longer-term evidence. Choice (c) is false, since B and D present no systematic data.",
            commonErrors: ["Choosing (d): the sources do disagree about the lane's effect on business and on its use."],
          },
        },
        {
          id: "ela11-u2-multiple-sources-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SOURCES,
          stem: "Using Sources B and C, explain why the merchants' concern may be understandable but not a sufficient reason to stop extending the lane.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrating sources", statement: "Combine what two sources say, then weigh them rather than listing them." },
              { kind: "skill", name: "Weighing evidence", statement: "Broader and longer-term data outweighs a smaller, interested sample." },
            ],
            steps: [
              { reasoning: "Source B is understandable: seven shops reported lower sales, and Source C confirms a real dip in the three months after construction.", evidence: "dipping 4 percent in the three months after construction", marks: 2, markCode: "AO1" },
              { reasoning: "But Source B covers a minority, seven of thirty-one shops, and comes from an association with an interest in parking.", evidence: "Seven of the thirty-one shops on the street have seen lower sales", marks: 2, markCode: "AO1" },
              { reasoning: "Source C shows sales recovered and rose above the earlier level by the end of the first year, so the concern describes a short-term effect, not a lasting one.", evidence: "6 percent above the earlier level by the end of the first year", marks: 2, markCode: "AO3" },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer: "The merchants' concern is understandable because the survey in Source C confirms an initial dip of 4 percent in the three months after construction. But the letter reports only seven of thirty-one shops and comes from an interested group, while the survey covers all shops and shows sales rising to 6 percent above the earlier level within a year. The evidence therefore supports a temporary cost, not a reason to halt the lane.",
            commonErrors: ["Treating the letter as false rather than as partial evidence.", "Ignoring the time dimension of the chart."],
          },
        },
        {
          id: "ela11-u2-multiple-sources-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: SOURCES,
          stem: "A council briefing asks: 'Should the Marlow Street bike lane be extended?' Answer all parts using the four sources.",
          parts: [
            { label: "a", prompt: "State two ways the lane changed Marlow Street according to Source A.", marks: 2 },
            { label: "b", prompt: "Explain one limitation of Source A as evidence for extending the lane.", marks: 4 },
            { label: "c", prompt: "Evaluate the reliability and usefulness of Source D (the photograph and caption) compared with Source C.", marks: 6 },
            { label: "d", prompt: "Write a short, qualified recommendation to the council that integrates at least three of the sources and acknowledges what the evidence does not show.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating sources", statement: "Consider who produced a source, when and how the evidence was gathered, and what it cannot show." },
              { kind: "skill", name: "Synthesis", statement: "Combine sources to answer a question, weigh them, and qualify the conclusion." },
              { kind: "convention", name: "Recommendation writing", statement: "A recommendation states a position, gives reasons from the evidence, and acknowledges limits." },
            ],
            steps: [
              { part: "a", reasoning: "Cyclists rose substantially.", evidence: "Daily cyclists rose from 310 to 790", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Injuries to cyclists fell, and car trips fell slightly.", evidence: "Reported injuries to cyclists fell from 14 per year to 6 per year", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The counts were taken in October of each year, so they may not reflect seasonal variation, such as winter cycling or holiday traffic.", evidence: "the counts were taken in October of each year", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "It reports only traffic and safety, not business sales or parking, which are the concerns of the merchants, so it cannot alone justify extension.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Source D is a single noon photograph, one moment in one day, so it cannot show how lightly the lane is used overall; the claim depends on timing.", evidence: "A photograph taken at noon", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The caption comes from a neighborhood newsletter and states the lane is 'lightly used', which Source A's cyclist counts contradict. The claim about 'forty parking spaces' is specific but unsupported.", evidence: "The new lane is lightly used and has removed forty parking spaces", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Source C, an independent survey of every shop across a year, is far more reliable and useful for judging business effects, although it does not address safety or use of the lane.", evidence: "independent survey of all thirty-one shops", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "A clear position is stated: extend the lane, perhaps with support for businesses during construction.", marks: 2, markCode: "AO4" },
              { part: "d", reasoning: "It integrates sources A, B and C: safety and cycling gains (A), the dip that merchants fear (B), and the recovery over the year (C), weighing broader against narrower evidence.", evidence: "rising to 6 percent above the earlier level", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "It acknowledges what is not known, such as the effect on parking-dependent shops among the seven, seasonal changes or long-term use.", marks: 2, markCode: "AO3" },
            ],
            levels: [...rubric(6, [5, 3, 2], "c"), ...rubric(6, [5, 3, 2], "d")],
            finalAnswer: "(a) Daily cyclists rose from 310 to 790, and injuries fell from 14 to 6 a year. (b) The October-only counts may miss seasonal change, and the report does not measure sales or parking. (c) The photograph shows one noon moment and an advocacy caption that conflicts with Source A; the survey covers all shops over a year, so it is more reliable for business effects. (d) Recommend extension, citing safety and cycling gains (A), the early dip the merchants fear (B) and the recovery in sales (C), while admitting uncertainty about seasonal use and the seven affected shops.",
            commonErrors: ["In (b), saying only that the report 'could be wrong'.", "In (c), preferring the photograph because it is a picture.", "In (d), listing the sources one by one instead of combining them into a position."],
          },
        },
      ],
    },
  ],
};
