import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "his-u5-lesson-5-2",
  code: "5-2",
  title: "Global Movements: 1968, Women's Liberation and Anti-Colonialism",
  goal: "I CAN explain the causes and significance of the 1968 protests, the women's liberation movement, and the role of anti-colonial movements in the post-war world.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    { term: "1968 protests", definition: "Wave of student and worker uprisings across Europe, the US and beyond, questioning authority and consumer society." },
    { term: "May 1968", definition: "French student and worker revolt that briefly paralysed France and inspired global protest." },
    { term: "Women's liberation movement", definition: "Campaign for gender equality in law, work and society, gaining momentum in the late 1960s–70s." },
    { term: "Anti-colonial movements", definition: "Struggles by colonised peoples for independence, e.g. Algeria, Vietnam, Angola." },
    { term: "New Left", definition: "Political movement of the 1960s emphasising participatory democracy, civil rights and opposition to the Cold War establishment." },
    { term: "Counterculture", definition: "Cultural rebellion against mainstream values — hippies, rock music, anti-war sentiment." },
  ],
  concepts: [
    {
      id: "his-u5-1968-movements",
      title: "The 1968 protests and the New Left",
      skill: "Explain the causes, course and significance of the 1968 global protest movements.",
      lesson: {
        sections: [
          {
            heading: "Causes of 1968",
            body: "Post-war prosperity created a generation of students with time, education and expectations but few political channels. The **New Left** questioned Cold War conformity, consumer capitalism and the Vietnam War. Protests erupted worldwide: Paris (May), Prague (the Prague Spring crushed by the USSR), Mexico City (before the Olympics), US campuses (Berkeley, Columbia) and Japan.",
          },
          {
            heading: "Course and nature of the protests",
            body: "In France, students occupied the Sorbonne and were joined by millions of workers in a general strike; de Gaulle briefly fled. In the US, protests focused on Vietnam, racial injustice and university governance. The movements were diverse — some sought revolution, others reform — but shared opposition to authority and solidarity across borders, amplified by television.",
          },
          {
            heading: "Legacy",
            body: "1968 did not produce revolution in most countries, but it transformed politics: it energised civil rights and anti-war movements, forced universities to reform, and shifted cultural values toward personal freedom and questioning authority. The Prague Spring's suppression (August 1968) showed the limits of reform within the Soviet bloc.",
          },
        ],
        keyFormulas: [
          { name: "1968 triggers", statement: "Vietnam War + consumer society critique + generational conflict + New Left" },
          { name: "Key events", statement: "Paris May 1968 + Prague Spring + Mexico City + US campus protests" },
        ],
        workedExample: {
          problem: "Why did 1968 protests spread so widely despite different national contexts?",
          solution: "Shared grievances — opposition to the Vietnam War, Cold War conformity, and authoritarian institutions — combined with a transnational youth culture and television coverage, allowing movements to inspire and learn from each other across borders.",
        },
      },
      questions: [
        {
          id: "his-u5-sq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'May 1968' events primarily occurred in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "West Germany" },
              { id: "b", text: "France" },
              { id: "c", text: "Italy" },
              { id: "d", text: "Spain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "May 1968", statement: "Student and worker uprisings in Paris in May 1968 paralysed France." },
            ],
            steps: [
              { reasoning: "May 1968 refers to the French protests beginning in Paris.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** France",
            commonErrors: ["Confusing May 1968 France with the Prague Spring in Czechoslovakia."],
          },
        },
        {
          id: "his-u5-sq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two causes of the global protests of 1968.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "1968 causes", statement: "Vietnam War, consumer society critique, generational conflict, university expansion." },
            ],
            steps: [
              { reasoning: "Opposition to the Vietnam War and US foreign policy radicalised students worldwide.", marks: 1, markCode: "M" },
              { reasoning: "Critique of consumer capitalism and authoritarian institutions by the New Left.", marks: 1, markCode: "M" },
              { reasoning: "Generational conflict — a large student population with political expectations but few outlets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Anti-Vietnam sentiment, critique of consumer society and a politically conscious student generation.",
            commonErrors: ["Listing single-country causes when the question asks for global causes."],
          },
        },
        {
          id: "his-u5-sq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the significance of the Prague Spring and its suppression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Prague Spring", statement: "1968 attempt at 'socialism with a human face' crushed by Soviet invasion — showed limits of reform in the bloc." },
            ],
            steps: [
              { reasoning: "Alexander Dubček's reforms in Czechoslovakia sought democratisation and economic liberalisation within communism.", marks: 1, markCode: "M" },
              { reasoning: "The USSR and Warsaw Pact invaded in August 1968 to restore orthodoxy, ending the experiment.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: demonstrated that Soviet satellite states could not reform independently; 'Brezhnev Doctrine' justified intervention.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: a warning that the Eastern bloc's stability rested on force, not consent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Failed reform crushed by invasion — exposed the Soviet bloc's reliance on coercion.",
            commonErrors: ["Confusing the Prague Spring with the French May events."],
          },
        },
        {
          id: "his-u5-sq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Evaluate the impact of the 1968 protests on society and politics.",
          parts: [
            { label: "a", prompt: "Describe the main forms and locations of the protests.", marks: 2 },
            { label: "b", prompt: "Explain their immediate outcomes.", marks: 3 },
            { label: "c", prompt: "Evaluate their long-term significance.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "1968 assessment", statement: "No revolutions, but transformed cultural values, university governance and political debate." },
            ],
            steps: [
              { part: "a", reasoning: "Student occupations and protests in Paris, US campuses, Mexico City, Japan; Prague Spring in Czechoslovakia.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Worker strikes and general strikes joined students — most dramatically in France.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Most governments suppressed protests; de Gaulle survived, Prague Spring was crushed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "US anti-war and civil rights movements gained momentum and recruits.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Universities worldwide reformed curricula and governance in response.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Long-term: cultural shift toward personal freedom, questioning authority, environmental and feminist movements.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: failed as revolution, succeeded as cultural transformation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Global student/worker protests, 1968. (b) Suppressed politically but energized movements. (c) Cultural transformation, not revolution.",
            commonErrors: ["Judging 1968 only by whether regimes fell, ignoring cultural legacy."],
          },
        },
        {
          id: "his-u5-sq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'New Left' of the 1960s questioned:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only military spending" },
              { id: "b", text: "Cold War conformity, consumer capitalism and the Vietnam War" },
              { id: "c", text: "The legitimacy of democracy itself" },
              { id: "d", text: "Religious institutions exclusively" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "New Left", statement: "A movement questioning Cold War conformity, consumer society and the Vietnam War." },
            ],
            steps: [
              { reasoning: "The New Left targeted conformity, consumerism and the war.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Conformity, consumer capitalism and Vietnam",
            commonErrors: ["Describing the New Left as a single organised party."],
          },
        },
        {
          id: "his-u5-sq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In May 1968, French students occupied:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Eiffel Tower" },
              { id: "b", text: "The Sorbonne university" },
              { id: "c", text: "The French parliament" },
              { id: "d", text: "The Louvre museum" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Paris May 1968", statement: "Students occupied the Sorbonne before millions of workers joined a general strike." },
            ],
            steps: [
              { reasoning: "The Sorbonne was the centre of the student occupation in May 1968.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The Sorbonne",
            commonErrors: ["Confusing the student occupation with the workers' general strike."],
          },
        },
        {
          id: "his-u5-sq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Prague Spring of 1968 was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A successful Czech revolution that ended Soviet control" },
              { id: "b", text: "A reform movement crushed by a Soviet invasion in August 1968" },
              { id: "c", text: "A student protest in West Germany" },
              { id: "d", text: "A Soviet economic summit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Prague Spring", statement: "Czech reform movement suppressed by Soviet-led invasion in August 1968." },
            ],
            steps: [
              { reasoning: "The USSR invaded Czechoslovakia in August 1968 to crush the reforms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reform movement crushed by Soviet invasion",
            commonErrors: ["Describing the Prague Spring as a successful revolution."],
          },
        },
        {
          id: "his-u5-sq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Protests in Mexico City in 1968 occurred:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "After the Olympic Games ended" },
              { id: "b", text: "Just before the Mexico City Olympics" },
              { id: "c", text: "During the Cuban Missile Crisis" },
              { id: "d", text: "In the same month as May 1968 in Paris" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Mexico City 1968", statement: "Student protests erupted in Mexico City shortly before the 1968 Olympics." },
            ],
            steps: [
              { reasoning: "The protests took place in the lead-up to the Olympics.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Before the Mexico City Olympics",
            commonErrors: ["Confusing the Mexican protests with the Paris events of May."],
          },
        },
        {
          id: "his-u5-sq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "During the May 1968 crisis in France, President de Gaulle:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Was overthrown and exiled" },
              { id: "b", text: "Briefly fled the country before returning" },
              { id: "c", text: "Declared martial law permanently" },
              { id: "d", text: "Negotiated France's withdrawal from NATO" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "May 1968 France", statement: "De Gaulle briefly left France during the crisis before the movement subsided." },
            ],
            steps: [
              { reasoning: "De Gaulle fled temporarily amid the general strike but soon returned.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Briefly fled the country",
            commonErrors: ["Overstating the crisis as a successful revolution."],
          },
        },
        {
          id: "his-u5-sq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "A key legacy of the 1968 protest movements was that they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produced immediate revolutions in most countries" },
              { id: "b", text: "Transformed politics and cultural values despite limited immediate success" },
              { id: "c", text: "Ended the Cold War" },
              { id: "d", text: "Created permanent student governments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Legacy of 1968", statement: "1968 did not bring revolution but transformed politics, universities and cultural values." },
            ],
            steps: [
              { reasoning: "The movements energised later causes and shifted attitudes toward authority.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Long-term transformation without immediate revolution",
            commonErrors: ["Claiming 1968 produced revolutions in most countries."],
          },
        },
        {
          id: "his-u5-sq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) US combat troops entered Vietnam; (b) the Prague Spring was crushed; (c) the Paris May protests.",
          response: { type: "numeric", parts: [{ label: "US troops in Vietnam", answer: 1965 }, { label: "Prague Spring crushed", answer: 1968 }, { label: "Paris May protests", answer: 1968 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "1968 context chronology", statement: "1965 Vietnam escalation; 1968 global protests." },
            ],
            steps: [
              { reasoning: "US combat troops entered Vietnam in 1965.", working: "1965", marks: 1, markCode: "M" },
              { reasoning: "The Prague Spring was crushed in August 1968.", working: "1968", marks: 1, markCode: "M" },
              { reasoning: "The Paris protests occurred in May 1968.", working: "1968", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1965; 1968; 1968",
            commonErrors: ["Confusing the year of escalation (1965) with the protest year (1968)."],
          },
        },
        {
          id: "his-u5-sq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the US troop escalation in Vietnam (1965) and the Prague Spring (1968); (b) between the end of WWII (1945) and the 1968 protests; (c) between the start of the 1960s (1960) and the 1968 protests.",
          response: { type: "numeric", parts: [{ label: "1965 to 1968", answer: 3 }, { label: "1945 to 1968", answer: 23 }, { label: "1960 to 1968", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1968 - 1965 = 3$ years.", working: "1968 - 1965 = 3", marks: 1, markCode: "M" },
              { reasoning: "$1968 - 1945 = 23$ years of post-war peace.", working: "1968 - 1945 = 23", marks: 1, markCode: "M" },
              { reasoning: "$1968 - 1960 = 8$ years.", working: "1968 - 1960 = 8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3; 23; 8 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u5-sq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of distinct protest arenas named in the lesson (Paris, Prague, Mexico City, US campuses, Japan); (b) the number of months in which the Paris events peaked; (c) the number of years between the end of WWII (1945) and the 1968 protests.",
          response: { type: "numeric", parts: [{ label: "Protest arenas", answer: 5 }, { label: "Months of Paris events", answer: 1 }, { label: "1945 to 1968 (years)", answer: 23 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "1968 protests", statement: "Five arenas; May 1968; 23 years after WWII." },
            ],
            steps: [
              { reasoning: "Paris, Prague, Mexico City, US campuses and Japan — five arenas.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "The Paris events peaked in May — one month.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "$1968 - 1945 = 23$ years.", working: "1968 - 1945 = 23", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5; 1; 23",
            commonErrors: ["Under-counting the number of protest arenas."],
          },
        },
        {
          id: "his-u5-sq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Give the month (as a number) for each event within 1968: (a) the Paris protests; (b) the Soviet invasion crushing the Prague Spring; (c) the Mexico City protests before the Olympics.",
          response: { type: "numeric", parts: [{ label: "Paris protests (month)", answer: 5 }, { label: "Prague invasion (month)", answer: 8 }, { label: "Mexico City protests (month)", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "1968 chronology within the year", statement: "May Paris; August Prague; October Mexico City." },
            ],
            steps: [
              { reasoning: "The Paris protests occurred in May.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "The Prague invasion occurred in August.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "The Mexico City protests occurred in October, before the Games.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5; 8; 10",
            commonErrors: ["Confusing the month of the Prague invasion (August) with May."],
          },
        },
        {
          id: "his-u5-sq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the March on Washington (1963) and the 1968 protests; (b) between the Berlin Wall's construction (1961) and the Prague Spring (1968); (c) between the Bandung Conference (1955) and the 1968 protests.",
          response: { type: "numeric", parts: [{ label: "1963 to 1968", answer: 5 }, { label: "1961 to 1968", answer: 7 }, { label: "1955 to 1968", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1968 - 1963 = 5$ years.", working: "1968 - 1963 = 5", marks: 1, markCode: "M" },
              { reasoning: "$1968 - 1961 = 7$ years.", working: "1968 - 1961 = 7", marks: 1, markCode: "M" },
              { reasoning: "$1968 - 1955 = 13$ years.", working: "1968 - 1955 = 13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5; 7; 13 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u5-sq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Rank these 1968 events from earliest to latest within the year (1 = earliest): Paris protests; Soviet invasion of Czechoslovakia; Mexico City protests before the Olympics.",
          response: { type: "numeric", parts: [{ label: "Paris protests", answer: 1 }, { label: "Prague invasion", answer: 2 }, { label: "Mexico City protests", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "1968 within-year order", statement: "May → August → October." },
            ],
            steps: [
              { reasoning: "Paris (May) is earliest.", working: "May = 5", marks: 1, markCode: "M" },
              { reasoning: "The Prague invasion (August) preceded Mexico City (October).", working: "8 < 10", marks: 1, markCode: "M" },
              { reasoning: "All three correctly ordered.", working: "1, 2, 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Paris 1, Prague 2, Mexico City 3",
            commonErrors: ["Placing Mexico City before Prague."],
          },
        },
      ],
    },
    {
      id: "his-u5-women-anticolonial",
      title: "Women's liberation and anti-colonial movements",
      skill: "Describe the women's liberation movement and evaluate the role of anti-colonial struggles in the post-war world.",
      lesson: {
        sections: [
          {
            heading: "Women's liberation",
            body: "The **women's liberation movement** (late 1960s–70s) campaigned for equality in law, work, reproduction and culture. **Betty Friedan's** *The Feminine Mystique* (1963) had earlier challenged domestic ideals. Activists won legal gains (e.g. the Equal Pay Act 1963, abortion rights in several countries), founded consciousness-raising groups, and challenged assumptions about gender in family, education and media.",
          },
          {
            heading: "Anti-colonialism and Third World solidarity",
            body: "Colonised peoples' struggles — Algeria, Vietnam, Angola, Mozambique — became global symbols of resistance. The **Non-Aligned Movement** (Bandung Conference 1955) let newly independent states assert independence from both blocs. Intellectuals like **Frantz Fanon** (*The Wretched of the Earth*, 1961) theorised anti-colonial violence and liberation. Anti-colonial solidarity linked movements in the West to struggles abroad.",
          },
          {
            heading: "Connection and limits",
            body: "Women's liberation intersected with anti-colonialism: both challenged hierarchies. However, Western feminism often neglected race and class differences — critiques by Black feminists and postcolonial thinkers pushed for intersectionality. Anti-colonial movements won independence but often reproduced authoritarian structures after victory.",
          },
        ],
        keyFormulas: [
          { name: "Women's liberation goals", statement: "Equal pay + reproductive rights + legal equality + cultural change" },
          { name: "Anti-colonial landmarks", statement: "Bandung 1955 + Fanon 1961 + independence waves 1957–75" },
        ],
        workedExample: {
          problem: "How did anti-colonial struggles influence movements inside Western societies?",
          solution: "They provided models of resistance (boycotts, guerrilla tactics), inspired Third World solidarity among Western activists, and gave movements like Black Power and women's liberation a vocabulary of liberation and self-determination.",
        },
      },
      questions: [
        {
          id: "his-u5-wq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Non-Aligned Movement emerged primarily to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Allied with the USSR against the US" },
              { id: "b", text: "Allow newly independent states to avoid alliance with either Cold War bloc" },
              { id: "c", text: "Create a military alliance in Africa" },
              { id: "d", text: "Support colonial powers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-Aligned Movement", statement: "States refusing formal alliance with either superpower bloc, asserting independence." },
            ],
            steps: [
              { reasoning: "The NAM let new states avoid superpower blocs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Avoid alliance with either bloc",
            commonErrors: ["Interpreting 'non-aligned' as 'pro-Soviet' — it meant independent of both."],
          },
        },
        {
          id: "his-u5-wq2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Describe two aims of the women's liberation movement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Women's liberation aims", statement: "Pay equality, reproductive rights, legal equality, cultural transformation." },
            ],
            steps: [
              { reasoning: "Economic equality: equal pay for equal work and access to professions and education.", marks: 1, markCode: "M" },
              { reasoning: "Reproductive and legal rights: abortion access, control over one's body, equal legal status.", marks: 1, markCode: "M" },
              { reasoning: "Cultural change: challenging gender stereotypes in family, media and daily life.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pay equality, reproductive/legal rights and transformation of gender roles in culture.",
            commonErrors: ["Focusing only on suffrage (earlier movement) rather than 1960s–70s liberation aims."],
          },
        },
        {
          id: "his-u5-wq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse Frantz Fanon's influence on anti-colonial thought.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fanon's influence", statement: "Theorised the psychology and violence of decolonisation; influenced liberation movements worldwide." },
            ],
            steps: [
              { reasoning: "Fanon's *The Wretched of the Earth* (1961) argued colonialism dehumanised both coloniser and colonised.", marks: 1, markCode: "M" },
              { reasoning: "He analysed how violence could be a necessary stage of national liberation — controversial but influential.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: his ideas resonated with Algerian, Vietnamese and Black liberation movements; he became an icon of Third World thought.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: Fanon shaped how anti-colonial struggles understood identity, violence and liberation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Provided the psychological and political theory of decolonisation, influencing liberation movements globally.",
            commonErrors: ["Reducing Fanon to 'a theorist of violence' without his analysis of colonial psychology."],
          },
        },
        {
          id: "his-u5-wq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Compare the women's liberation movement and anti-colonial movements as challenges to existing power structures.",
          parts: [
            { label: "a", prompt: "Describe the main demands of each movement.", marks: 3 },
            { label: "b", prompt: "Explain how each challenged established power.", marks: 3 },
            { label: "c", prompt: "Evaluate the achievements of each by the end of the Cold War.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Movements comparison", statement: "Both challenged hierarchies — gender and colonial — but achieved different outcomes." },
            ],
            steps: [
              { part: "a", reasoning: "Women's liberation: equal pay, reproductive rights, legal equality, cultural change.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Anti-colonial: independence, self-determination, end of foreign rule and exploitation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both demanded recognition of groups previously excluded from power.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Women's liberation challenged patriarchal family, workplace and law through protest and consciousness-raising.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Anti-colonial movements challenged imperial control through political organisation and often armed struggle.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both drew strength from the same era's questioning of authority and inequality.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Anti-colonial: mostly succeeded — nearly all colonies independent by mid-1970s.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Women's liberation: partial — legal gains won but cultural and economic inequality persisted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Gender equality vs independence/self-determination. (b) Challenged patriarchy vs imperialism. (c) Colonialism largely ended; gender equality incomplete.",
            commonErrors: ["Treating the two movements as unrelated rather than parallel challenges to hierarchy."],
          },
        },
        {
          id: "his-u5-wq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Betty Friedan's *The Feminine Mystique*, which challenged domestic ideals for women, was published in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1955" },
              { id: "b", text: "1963" },
              { id: "c", text: "1968" },
              { id: "d", text: "1975" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "The Feminine Mystique", statement: "Friedan's 1963 book became a foundational text of second-wave feminism." },
            ],
            steps: [
              { reasoning: "The book was published in 1963.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1963",
            commonErrors: ["Confusing the book's date with the later women's liberation movement."],
          },
        },
        {
          id: "his-u5-wq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The US Equal Pay Act, an early legal gain for women, was passed in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1957" },
              { id: "b", text: "1963" },
              { id: "c", text: "1968" },
              { id: "d", text: "1972" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Equal Pay Act", statement: "The 1963 Act addressed pay discrimination between men and women." },
            ],
            steps: [
              { reasoning: "The Equal Pay Act was signed in 1963.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1963",
            commonErrors: ["Confusing the Equal Pay Act with the Civil Rights Act of 1964."],
          },
        },
        {
          id: "his-u5-wq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Non-Aligned Movement emerged from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Bandung Conference of 1955" },
              { id: "b", text: "The Treaty of Rome" },
              { id: "c", text: "The UN General Assembly of 1945" },
              { id: "d", text: "The Marshall Plan negotiations" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Non-Aligned Movement", statement: "The Bandung Conference (1955) launched the movement of states outside both blocs." },
            ],
            steps: [
              { reasoning: "Bandung (1955) gathered newly independent states asserting independence from both superpowers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The Bandung Conference",
            commonErrors: ["Confusing Bandung with a European treaty."],
          },
        },
        {
          id: "his-u5-wq8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Frantz Fanon's *The Wretched of the Earth* (1961) theorised:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peaceful reform within colonial systems" },
              { id: "b", text: "Anti-colonial violence and liberation" },
              { id: "c", text: "The economic benefits of continued colonialism" },
              { id: "d", text: "Western-style democracy for Africa" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Fanon", statement: "Fanon's work analysed colonial oppression and justified armed liberation struggles." },
            ],
            steps: [
              { reasoning: "Fanon argued colonised peoples might need violence to throw off colonial rule.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Anti-colonial violence and liberation",
            commonErrors: ["Misreading Fanon as advocating purely peaceful change."],
          },
        },
        {
          id: "his-u5-wq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Consciousness-raising groups were a tactic used by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The civil rights movement in the South" },
              { id: "b", text: "The women's liberation movement" },
              { id: "c", text: "Anti-colonial guerrilla armies" },
              { id: "d", text: "Soviet dissident networks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Consciousness-raising", statement: "Small-group discussions used by feminists to share experiences and analyse sexism." },
            ],
            steps: [
              { reasoning: "Consciousness-raising was a signature method of women's liberation activists.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The women's liberation movement",
            commonErrors: ["Confusing consciousness-raising with political lobbying."],
          },
        },
        {
          id: "his-u5-wq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A major critique of Western feminism in the 1970s came from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conservative religious leaders" },
              { id: "b", text: "Black feminists and postcolonial thinkers who highlighted race and class" },
              { id: "c", text: "Male trade unionists" },
              { id: "d", text: "European colonial administrations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Intersectionality critique", statement: "Black feminists and postcolonial thinkers criticised Western feminism for neglecting race and class." },
            ],
            steps: [
              { reasoning: "Critics argued mainstream feminism centred white, middle-class women's experiences.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Black feminists and postcolonial thinkers",
            commonErrors: ["Treating Western feminism as a unified movement without internal critique."],
          },
        },
        {
          id: "his-u5-wq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Bandung Conference; (b) Fanon's *The Wretched of the Earth* published; (c) *The Feminine Mystique* published.",
          response: { type: "numeric", parts: [{ label: "Bandung Conference", answer: 1955 }, { label: "Fanon's book", answer: 1961 }, { label: "Feminine Mystique", answer: 1963 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Liberation chronology", statement: "1955 Bandung; 1961 Fanon; 1963 Friedan." },
            ],
            steps: [
              { reasoning: "Bandung took place in 1955.", working: "1955", marks: 1, markCode: "M" },
              { reasoning: "Fanon's book appeared in 1961.", working: "1961", marks: 1, markCode: "M" },
              { reasoning: "Friedan's book was published in 1963.", working: "1963", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1955; 1961; 1963",
            commonErrors: ["Confusing Fanon (1961) with Friedan (1963)."],
          },
        },
        {
          id: "his-u5-wq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Equal Pay Act passed in the US; (b) Algeria won independence; (c) Ghana gained independence.",
          response: { type: "numeric", parts: [{ label: "Equal Pay Act", answer: 1963 }, { label: "Algeria independent", answer: 1962 }, { label: "Ghana independent", answer: 1957 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Post-war liberation chronology", statement: "1957 Ghana; 1962 Algeria; 1963 Equal Pay Act." },
            ],
            steps: [
              { reasoning: "The Equal Pay Act dates from 1963.", working: "1963", marks: 1, markCode: "M" },
              { reasoning: "Algeria became independent in 1962.", working: "1962", marks: 1, markCode: "M" },
              { reasoning: "Ghana became independent in 1957.", working: "1957", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1963; 1962; 1957",
            commonErrors: ["Confusing Ghana (1957) with Algeria (1962)."],
          },
        },
        {
          id: "his-u5-wq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the Bandung Conference (1955) and Fanon's book (1961); (b) between Fanon's book (1961) and *The Feminine Mystique* (1963); (c) between Bandung (1955) and *The Feminine Mystique* (1963).",
          response: { type: "numeric", parts: [{ label: "1955 to 1961", answer: 6 }, { label: "1961 to 1963", answer: 2 }, { label: "1955 to 1963", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1961 - 1955 = 6$ years.", working: "1961 - 1955 = 6", marks: 1, markCode: "M" },
              { reasoning: "$1963 - 1961 = 2$ years.", working: "1963 - 1961 = 2", marks: 1, markCode: "M" },
              { reasoning: "$1963 - 1955 = 8$ years.", working: "1963 - 1955 = 8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6; 2; 8 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u5-wq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Bandung Conference; Fanon's *The Wretched of the Earth*; *The Feminine Mystique*; the US Civil Rights Act.",
          response: { type: "numeric", parts: [{ label: "Bandung Conference", answer: 1 }, { label: "Fanon's book", answer: 2 }, { label: "Feminine Mystique", answer: 3 }, { label: "Civil Rights Act", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Liberation chronology order", statement: "1955 → 1961 → 1963 → 1964." },
            ],
            steps: [
              { reasoning: "Bandung (1955) is earliest.", working: "1955", marks: 1, markCode: "M" },
              { reasoning: "Fanon (1961) preceded Friedan (1963).", working: "1961 < 1963", marks: 1, markCode: "M" },
              { reasoning: "The CRA (1964) is latest; all ordered correctly.", working: "1963 < 1964", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bandung 1, Fanon 2, Feminine Mystique 3, CRA 4",
            commonErrors: ["Placing the Feminine Mystique before Fanon's book."],
          },
        },
        {
          id: "his-u5-wq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between Bandung (1955) and *The Feminine Mystique* (1963); (b) between Fanon's book (1961) and the women's liberation peak (1968); (c) between *The Feminine Mystique* (1963) and the women's liberation peak (1968).",
          response: { type: "numeric", parts: [{ label: "1955 to 1963", answer: 8 }, { label: "1961 to 1968", answer: 7 }, { label: "1963 to 1968", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1963 - 1955 = 8$ years.", working: "1963 - 1955 = 8", marks: 1, markCode: "M" },
              { reasoning: "$1968 - 1961 = 7$ years.", working: "1968 - 1961 = 7", marks: 1, markCode: "M" },
              { reasoning: "$1968 - 1963 = 5$ years.", working: "1968 - 1963 = 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8; 7; 5 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u5-wq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Bandung Conference; Fanon's *The Wretched of the Earth*; *The Feminine Mystique*; the Equal Pay Act.",
          response: { type: "numeric", parts: [{ label: "Bandung Conference", answer: 1 }, { label: "Fanon's book", answer: 2 }, { label: "Feminine Mystique", answer: 3 }, { label: "Equal Pay Act", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Liberation chronology", statement: "1955 → 1961 → 1963 (Friedan and Equal Pay Act share the year)." },
            ],
            steps: [
              { reasoning: "Bandung (1955) is earliest.", working: "1955", marks: 1, markCode: "M" },
              { reasoning: "Fanon (1961) preceded the 1963 publications.", working: "1961", marks: 1, markCode: "M" },
              { reasoning: "*The Feminine Mystique* and the Equal Pay Act both date from 1963 — they tie for rank 3.", working: "1963", marks: 1, markCode: "M" },
              { reasoning: "Ordering accepted with the 1963 tie.", working: "1, 2, 3, 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bandung 1, Fanon 2, Feminine Mystique 3, Equal Pay Act 3",
            commonErrors: ["Trying to force an order between two events from the same year."],
          },
        },
      ],
    },
  ],
};
