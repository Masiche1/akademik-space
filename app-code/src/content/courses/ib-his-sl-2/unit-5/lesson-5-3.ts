import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "his-u5-lesson-5-3",
  code: "5-3",
  title: "Resistance and Reform in the Eastern Bloc",
  goal: "I CAN explain the role of dissidents, human rights movements and Solidarity in challenging communist rule in Eastern Europe.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    { term: "Dissidents", definition: "Individuals who openly opposed communist regimes in Eastern Europe, often at personal risk." },
    { term: "Helsinki Accords", definition: "1975 agreement recognising European borders and committing signatories to human rights." },
    { term: "Charter 77", definition: "Czechoslovak civic initiative (1977) monitoring the government's failure to implement Helsinki human rights provisions." },
    { term: "Solidarity (Solidarność)", definition: "Polish independent trade union founded 1980 at the Gdańsk shipyard, led by Lech Wałęsa." },
    { term: "Brezhnev Doctrine", definition: "Soviet claim that it could intervene in any socialist state to defend communism (used in 1968, 1981)." },
    { term: "Samizdat", definition: "Underground publishing of censored texts in the Soviet bloc." },
  ],
  concepts: [
    {
      id: "his-u5-dissidents-helisinki",
      title: "Dissidents and the Helsinki human rights framework",
      skill: "Explain how the Helsinki Accords and dissident movements challenged communist rule in the Eastern bloc.",
      lesson: {
        sections: [
          {
            heading: "The Helsinki Accords and their aftermath",
            body: "The **Helsinki Accords (1975)** committed the USSR and its satellites to respect human rights, freedom of movement and self-determination — in exchange for Western recognition of post-war borders. Soviet leaders expected the human-rights clauses to be ignored. Instead, dissidents used the Accords as a weapon: **Charter 77** in Czechoslovakia (1977) documented violations, while Soviet dissidents and **Sakharov** demanded implementation.",
          },
          {
            heading: "Dissident strategies",
            body: "Dissidents worked through **samizdat** (underground publishing), open letters, church networks and human-rights monitoring. Repression was severe — imprisonment, psychiatric detention, exile (e.g. Solzhenitsyn expelled in 1974). Yet these movements kept a counter-public alive, exposed regime hypocrisy, and built networks that later became political forces when conditions changed.",
          },
          {
            heading: "Limits before 1989",
            body: "Despite their courage, dissidents could not defeat the regimes alone — the USSR still enforced the Brezhnev Doctrine. Their significance lay in preserving alternative ideas and moral opposition, preparing the ground for the revolutions of 1989 when Gorbachev's reforms removed the threat of Soviet intervention.",
          },
        ],
        keyFormulas: [
          { name: "Helsinki leverage", statement: "Accords 1975 → human-rights clauses → Charter 77 + samizdat → regime exposed" },
          { name: "Dissident methods", statement: "Open letters + samizdat + church + monitoring → imprisonment/exile" },
        ],
        workedExample: {
          problem: "Why did the Helsinki Accords backfire on the Soviet bloc?",
          solution: "Soviet leaders signed to secure borders but the human-rights clauses gave dissidents a legal and moral framework to demand accountability — Charter 77 and similar groups used the Accords to expose violations.",
        },
      },
      questions: [
        {
          id: "his-u5-dq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Charter 77 was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Soviet military document" },
              { id: "b", text: "A Polish trade union" },
              { id: "c", text: "A Czechoslovak civic initiative monitoring human rights" },
              { id: "d", text: "A Helsinki agreement clause" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Charter 77", statement: "1977 Czechoslovak initiative documenting the government's failure to implement Helsinki human rights commitments." },
            ],
            steps: [
              { reasoning: "Charter 77 was a Czechoslovak human-rights monitoring document.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Czechoslovak human rights initiative",
            commonErrors: ["Confusing Charter 77 (Czechoslovakia) with Solidarity (Poland)."],
          },
        },
        {
          id: "his-u5-dq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two methods used by dissidents in the Soviet bloc.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Dissident methods", statement: "Samizdat publishing, open letters, church networks, human rights monitoring." },
            ],
            steps: [
              { reasoning: "Samizdat: underground hand-copying and distribution of censored books, articles and petitions.", marks: 1, markCode: "M" },
              { reasoning: "Open letters and appeals to international opinion, e.g. Sakharov's statements on human rights.", marks: 1, markCode: "M" },
              { reasoning: "Church networks and Helsinki monitoring groups documented abuses and built opposition networks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Samizdat, open letters and human rights monitoring through church and Helsinki groups.",
            commonErrors: ["Describing armed resistance — dissidents primarily used nonviolent means."],
          },
        },
        {
          id: "his-u5-dq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why dissident movements failed to bring down communist regimes before 1989.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dissident limits", statement: "Regime repression and Soviet military backing (Brezhnev Doctrine) prevented success before Gorbachev." },
            ],
            steps: [
              { reasoning: "Regimes used imprisonment, exile, psychiatric abuse and surveillance to isolate dissidents.", marks: 1, markCode: "M" },
              { reasoning: "The Brezhnev Doctrine let the USSR intervene militarily (1968 Prague) to prevent reform.", marks: 1, markCode: "M" },
              { reasoning: "Dissidents lacked mass organisation or foreign support strong enough to challenge state power.", marks: 1, markCode: "R" },
              { reasoning: "Their real impact came later, when Gorbachev's reforms removed Soviet backing for repression.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repression and Soviet military guarantee kept regimes in power until Gorbachev changed the rules.",
            commonErrors: ["Ignoring the USSR's decisive role in propping up satellite regimes."],
          },
        },
        {
          id: "his-u5-dq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Examine the significance of the Helsinki Accords for the Eastern bloc.",
          parts: [
            { label: "a", prompt: "What did the Accords commit signatories to?", marks: 2 },
            { label: "b", prompt: "How did dissidents use the Accords against their governments?", marks: 3 },
            { label: "c", prompt: "Evaluate whether the Accords weakened or strengthened the Soviet bloc.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Helsinki impact", statement: "Intended to secure borders, but human-rights clauses armed dissidents with a legal framework." },
            ],
            steps: [
              { part: "a", reasoning: "Recognised post-war European borders (Soviet gain) in exchange for human rights, free movement and self-determination.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Signed by 35 states including the USSR and all satellite states (1975).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dissidents cited the Accords to demand the regime honour its commitments.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Charter 77 documented violations; samizdat spread texts monitoring compliance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The Accords gave Western governments and NGOs a basis to pressure communist states.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Weakening effect: exposed hypocrisy, legitimised opposition, contributed to 1989.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: intended to stabilise the bloc, it ultimately helped undermine it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Borders for human rights. (b) Charter 77, samizdat, monitoring, Western pressure. (c) Unintended weakening of the bloc.",
            commonErrors: ["Treating Helsinki as purely a Soviet diplomatic victory without noting the human-rights clauses."],
          },
        },
        {
          id: "his-u5-dq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Helsinki Accords were signed in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1977" },
              { id: "b", text: "1975" },
              { id: "c", text: "1972" },
              { id: "d", text: "1979" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Helsinki Accords", statement: "Signed in 1975, trading Western recognition of bloc borders for human-rights commitments." },
            ],
            steps: [
              { reasoning: "The Accords were signed in 1975.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1975",
            commonErrors: ["Confusing Helsinki (1975) with SALT I (1972)."],
          },
        },
        {
          id: "his-u5-dq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Soviet bloc signed the Helsinki Accords mainly to secure:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Membership in NATO" },
              { id: "b", text: "An end to the Cold War" },
              { id: "c", text: "Western recognition of post-war borders" },
              { id: "d", text: "Western economic aid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Helsinki bargain", statement: "The USSR gained Western acceptance of its bloc's borders in exchange for human-rights clauses." },
            ],
            steps: [
              { reasoning: "Soviet leaders expected the human-rights clauses to be ignored while securing border recognition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Recognition of post-war borders",
            commonErrors: ["Missing that the Accords were a bargain, not a Soviet concession."],
          },
        },
        {
          id: "his-u5-dq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Charter 77 was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Soviet military document" },
              { id: "b", text: "A Warsaw Pact defence treaty" },
              { id: "c", text: "A Czechoslovak dissident manifesto documenting Helsinki violations (1977)" },
              { id: "d", text: "A UN refugee convention" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Charter 77", statement: "A 1977 Czechoslovak manifesto that used the Helsinki Accords to document regime violations." },
            ],
            steps: [
              { reasoning: "Charter 77 was a dissident document published in Czechoslovakia in 1977.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A Czechoslovak dissident manifesto",
            commonErrors: ["Confusing Charter 77 with a government document."],
          },
        },
        {
          id: "his-u5-dq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "'Samizdat' in the Soviet bloc referred to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Underground self-publishing of censored texts" },
              { id: "b", text: "State security archives" },
              { id: "c", text: "Official state publishing houses" },
              { id: "d", text: "Foreign radio broadcasts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Samizdat", statement: "Underground circulation of self-published, censored literature in the USSR and Eastern Europe." },
            ],
            steps: [
              { reasoning: "Samizdat was clandestine publishing that evaded censorship.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Underground self-publishing",
            commonErrors: ["Confusing samizdat with official publishing."],
          },
        },
        {
          id: "his-u5-dq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The writer Aleksandr Solzhenitsyn was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expelled from the Soviet Union in 1974" },
              { id: "b", text: "Awarded the Nobel Prize in Literature in absentia in 1970" },
              { id: "c", text: "Made prime minister of the USSR" },
              { id: "d", text: "Imprisoned for life inside the USSR" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Solzhenitsyn", statement: "The author of The Gulag Archipelago was expelled from the USSR in 1974." },
            ],
            steps: [
              { reasoning: "Solzhenitsyn was stripped of citizenship and expelled in 1974.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Expelled from the USSR in 1974",
            commonErrors: ["Confusing exile with imprisonment."],
          },
        },
        {
          id: "his-u5-dq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Before 1989, dissident movements in the Eastern bloc were most significant because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Preserved alternative ideas and prepared the ground for the 1989 revolutions" },
              { id: "b", text: "Won Soviet military support" },
              { id: "c", text: "Immediately overthrew the communist regimes" },
              { id: "d", text: "Created functioning opposition parties" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dissident significance", statement: "Dissidents could not defeat the regimes alone but kept counter-publics alive for 1989." },
            ],
            steps: [
              { reasoning: "The Brezhnev Doctrine still enforced Soviet control, so dissidents' impact was moral and preparatory.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Preserved ideas and prepared 1989",
            commonErrors: ["Overstating dissident power before Gorbachev's reforms."],
          },
        },
        {
          id: "his-u5-dq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Helsinki Accords signed; (b) Solzhenitsyn expelled from the USSR; (c) Charter 77 published.",
          response: { type: "numeric", parts: [{ label: "Helsinki Accords", answer: 1975 }, { label: "Solzhenitsyn expelled", answer: 1974 }, { label: "Charter 77", answer: 1977 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Dissident chronology", statement: "1974 exile; 1975 Helsinki; 1977 Charter 77." },
            ],
            steps: [
              { reasoning: "The Accords were signed in 1975.", working: "1975", marks: 1, markCode: "M" },
              { reasoning: "Solzhenitsyn was expelled in 1974.", working: "1974", marks: 1, markCode: "M" },
              { reasoning: "Charter 77 was published in 1977.", working: "1977", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1975; 1974; 1977",
            commonErrors: ["Confusing the exile (1974) with the Accords (1975)."],
          },
        },
        {
          id: "his-u5-dq12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the Helsinki Accords (1975) and Charter 77 (1977); (b) between Solzhenitsyn's exile (1974) and the Accords (1975); (c) between Charter 77 (1977) and the 1989 revolutions.",
          response: { type: "numeric", parts: [{ label: "1975 to 1977", answer: 2 }, { label: "1974 to 1975", answer: 1 }, { label: "1977 to 1989", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1977 - 1975 = 2$ years.", working: "1977 - 1975 = 2", marks: 1, markCode: "M" },
              { reasoning: "$1975 - 1974 = 1$ year.", working: "1975 - 1974 = 1", marks: 1, markCode: "M" },
              { reasoning: "$1989 - 1977 = 12$ years.", working: "1989 - 1977 = 12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2; 1; 12 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u5-dq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): Solzhenitsyn expelled from the USSR; the Helsinki Accords signed; Charter 77 published; the revolutions of 1989.",
          response: { type: "numeric", parts: [{ label: "Solzhenitsyn expelled", answer: 1 }, { label: "Helsinki Accords", answer: 2 }, { label: "Charter 77", answer: 3 }, { label: "1989 revolutions", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Dissident chronology order", statement: "1974 → 1975 → 1977 → 1989." },
            ],
            steps: [
              { reasoning: "The exile (1974) is earliest.", working: "1974", marks: 1, markCode: "M" },
              { reasoning: "Helsinki (1975) followed the exile.", working: "1975", marks: 1, markCode: "M" },
              { reasoning: "Charter 77 (1977) preceded 1989; all ordered correctly.", working: "1977 < 1989", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exile 1, Helsinki 2, Charter 77 3, 1989 4",
            commonErrors: ["Placing Charter 77 before the Helsinki Accords."],
          },
        },
        {
          id: "his-u5-dq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of states that signed the Helsinki Accords; (b) the year the Accords were signed; (c) the year Charter 77 was published.",
          response: { type: "numeric", parts: [{ label: "Signatory states", answer: 35 }, { label: "Accords year", answer: 1975 }, { label: "Charter 77 year", answer: 1977 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Helsinki details", statement: "35 signatories; 1975 Accords; 1977 Charter 77." },
            ],
            steps: [
              { reasoning: "Thirty-five states signed the Accords.", working: "35", marks: 1, markCode: "M" },
              { reasoning: "The Accords date from 1975.", working: "1975", marks: 1, markCode: "M" },
              { reasoning: "Charter 77 appeared in 1977.", working: "1977", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35; 1975; 1977",
            commonErrors: ["Guessing the number of signatories."],
          },
        },
        {
          id: "his-u5-dq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between Solzhenitsyn's exile (1974) and Charter 77 (1977); (b) between the Helsinki Accords (1975) and the 1989 revolutions; (c) between Solzhenitsyn's exile (1974) and the 1989 revolutions.",
          response: { type: "numeric", parts: [{ label: "1974 to 1977", answer: 3 }, { label: "1975 to 1989", answer: 14 }, { label: "1974 to 1989", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1977 - 1974 = 3$ years.", working: "1977 - 1974 = 3", marks: 1, markCode: "M" },
              { reasoning: "$1989 - 1975 = 14$ years.", working: "1989 - 1975 = 14", marks: 1, markCode: "M" },
              { reasoning: "$1989 - 1974 = 15$ years.", working: "1989 - 1974 = 15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3; 14; 15 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u5-dq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Prague Spring crushed by Soviet troops; Solzhenitsyn expelled; the Helsinki Accords signed; Charter 77 published.",
          response: { type: "numeric", parts: [{ label: "Prague Spring crushed", answer: 1 }, { label: "Solzhenitsyn expelled", answer: 2 }, { label: "Helsinki Accords", answer: 3 }, { label: "Charter 77", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Eastern bloc chronology", statement: "1968 Prague → 1974 exile → 1975 Helsinki → 1977 Charter 77." },
            ],
            steps: [
              { reasoning: "The Prague invasion (1968) is earliest.", working: "1968", marks: 1, markCode: "M" },
              { reasoning: "The exile (1974) preceded Helsinki (1975).", working: "1974 < 1975", marks: 1, markCode: "M" },
              { reasoning: "Charter 77 (1977) is latest; all ordered correctly.", working: "1975 < 1977", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prague 1, exile 2, Helsinki 3, Charter 77 4",
            commonErrors: ["Placing the exile after the Helsinki Accords."],
          },
        },
      ],
    },
    {
      id: "his-u5-solidarity-collapses",
      title: "Solidarity and the collapse of communist rule",
      skill: "Analyse the rise of Solidarity in Poland and the chain of events that ended communist rule in Eastern Europe.",
      lesson: {
        sections: [
          {
            heading: "Solidarity and the Polish crisis",
            body: "In August 1980 strikes at the Gdańsk shipyard — led by electrician **Lech Wałęsa** — produced the **Solidarity** trade union, the first independent union in the Soviet bloc. Membership swelled to ten million. The regime declared martial law in December 1981, imprisoning leaders, but Solidarity survived underground and returned with Gorbachev's reforms.",
          },
          {
            heading: "Gorbachev and the revolutions of 1989",
            body: "Mikhail **Gorbachev's** reforms — **glasnost** (openness) and **perestroika** (restructuring) — loosened control. Crucially, he renounced the Brezhnev Doctrine: the USSR would not intervene to prop up satellites. In 1989, elections and mass protests toppled communist regimes: Poland's Solidarity won (June), Hungary opened its border with Austria, the Berlin Wall fell (November), and Czechoslovakia's Velvet Revolution and Romania's violent overthrow followed.",
          },
          {
            heading: "Legacy",
            body: "By 1991 the USSR itself collapsed. Solidarity's leaders (Wałęsa) became Poland's first post-communist president. The revolutions were largely peaceful — 'velvet' — though Romania saw violence. Eastern Europe's transition to democracy and markets proved difficult, but the era of Soviet domination had ended.",
          },
        ],
        keyFormulas: [
          { name: "Solidarity timeline", statement: "Gdańsk strikes Aug 1980 → union founded → martial law 1981 → returns 1988–89" },
          { name: "1989 revolutions", statement: "Poland June → Hungary border → Berlin Wall Nov → Velvet Revolution → Romania" },
        ],
        workedExample: {
          problem: "Why did the revolutions of 1989 succeed where earlier uprisings failed?",
          solution: "Gorbachev's renunciation of the Brezhnev Doctrine meant the USSR would not send troops to crush protests — removing the military guarantee that had defeated earlier movements like Prague 1968.",
        },
      },
      questions: [
        {
          id: "his-u5-so1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solidarity was founded in which country?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poland" },
              { id: "b", text: "Hungary" },
              { id: "c", text: "East Germany" },
              { id: "d", text: "Czechoslovakia" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Solidarity", statement: "Independent trade union founded at Gdańsk shipyard, Poland, in August 1980." },
            ],
            steps: [
              { reasoning: "Solidarity emerged from the Gdańsk shipyard strikes in Poland.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Poland",
            commonErrors: ["Confusing Solidarity (Poland) with Charter 77 (Czechoslovakia)."],
          },
        },
        {
          id: "his-u5-so2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Describe two reforms introduced by Gorbachev.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Gorbachev reforms", statement: "Glasnost (openness) and perestroika (restructuring) liberalised the USSR." },
            ],
            steps: [
              { reasoning: "Glasnost: policy of openness — relaxed censorship, allowed public debate and criticism.", marks: 1, markCode: "M" },
              { reasoning: "Perestroika: restructuring of the economy toward market elements and decentralisation.", marks: 1, markCode: "M" },
              { reasoning: "Combined effect: loosened ideological and political control, enabling dissent and reform movements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glasnost (openness) and perestroika (economic restructuring) — reforms that inadvertently enabled the bloc's collapse.",
            commonErrors: ["Listing reforms without noting their unintended consequences."],
          },
        },
        {
          id: "his-u5-so3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the significance of the fall of the Berlin Wall (November 1989).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Berlin Wall fall", statement: "Symbolic and practical end of the Cold War division; triggered collapse of remaining communist regimes." },
            ],
            steps: [
              { reasoning: "The Wall's fall (9 November 1989) physically opened the border between East and West Berlin after 28 years.", marks: 1, markCode: "M" },
              { reasoning: "It destroyed the symbolic Iron Curtain and triggered mass emigration and protest across Eastern Europe.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: within weeks, Czechoslovakia and Romania's regimes fell; by 1991 the USSR dissolved.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the Wall's fall marked the effective end of the Cold War order in Europe.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "End of the Iron Curtain physically and symbolically — cascade of 1989–91 collapses followed.",
            commonErrors: ["Treating the Wall's fall as an isolated event rather than part of a chain reaction."],
          },
        },
        {
          id: "his-u5-so4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Explain the collapse of communist rule in Eastern Europe between 1989 and 1991.",
          parts: [
            { label: "a", prompt: "Describe the role of Solidarity in Poland.", marks: 3 },
            { label: "b", prompt: "Explain why Gorbachev's reforms were decisive.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the revolutions of 1989 were inevitable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "1989 collapse", statement: "Solidarity + Gorbachev's non-intervention + economic failure ended communist rule." },
            ],
            steps: [
              { part: "a", reasoning: "Founded at Gdańsk 1980, Solidarity became a mass independent union of ten million.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Survived martial law (1981) underground and returned to force semi-free elections in 1989.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Its victory proved communist regimes could be beaten electorally, inspiring others.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Glasnost/perestroika loosened control and allowed public dissent.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Renouncing the Brezhnev Doctrine meant no Soviet troops to crush protests.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This removed the military guarantee that had kept satellites in power since 1968.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Long-term pressures (economic stagnation, dissent) made collapse likely eventually.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: structural decay plus Gorbachev's choices made 1989 the tipping point — not fully inevitable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mass union, survived martial law, won 1989 elections. (b) Glasnost + no intervention. (c) Likely but contingent on Gorbachev's decisions.",
            commonErrors: ["Attributing collapse solely to Gorbachev or solely to popular protest without weighing both."],
          },
        },
        {
          id: "his-u5-so5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solidarity was founded after strikes at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Warsaw steelworks" },
              { id: "b", text: "A coal mine in Silesia" },
              { id: "c", text: "The Lenin shipyard in Vladivostok" },
              { id: "d", text: "The Gdańsk shipyard" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Solidarity's origins", statement: "August 1980 strikes at the Gdańsk shipyard produced the Solidarity union." },
            ],
            steps: [
              { reasoning: "The Gdańsk shipyard strikes led by Wałęsa founded Solidarity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The Gdańsk shipyard",
            commonErrors: ["Confusing Gdańsk with other Eastern European industrial centres."],
          },
        },
        {
          id: "his-u5-so6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Gdańsk shipyard strikes of 1980 were led by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nicolae Ceaușescu" },
              { id: "b", text: "Mikhail Gorbachev" },
              { id: "c", text: "Václav Havel" },
              { id: "d", text: "Lech Wałęsa" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Lech Wałęsa", statement: "The electrician Wałęsa led the Gdańsk strikes and later became Poland's first post-communist president." },
            ],
            steps: [
              { reasoning: "Lech Wałęsa headed the strike committee at Gdańsk.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Lech Wałęsa",
            commonErrors: ["Confusing Polish and Czechoslovak dissident leaders."],
          },
        },
        {
          id: "his-u5-so7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Solidarity was remarkable because it was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A political party funded by the USSR" },
              { id: "b", text: "The first independent trade union in the Soviet bloc" },
              { id: "c", text: "A religious order" },
              { id: "d", text: "A youth movement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Solidarity's uniqueness", statement: "It was the first independent union in the Soviet bloc, swelling to ten million members." },
            ],
            steps: [
              { reasoning: "No independent unions were permitted in the bloc; Solidarity broke that rule.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** First independent union in the bloc",
            commonErrors: ["Describing Solidarity as a political party rather than a trade union."],
          },
        },
        {
          id: "his-u5-so8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Polish regime responded to Solidarity's growth by declaring:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free elections" },
              { id: "b", text: "A new constitution" },
              { id: "c", text: "Polish independence" },
              { id: "d", text: "A state of emergency in December 1981" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Martial law Poland", statement: "Martial law was declared in December 1981, imprisoning Solidarity's leaders." },
            ],
            steps: [
              { reasoning: "The regime imposed martial law in December 1981.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Martial law in December 1981",
            commonErrors: ["Confusing martial law (1981) with the 1989 elections."],
          },
        },
        {
          id: "his-u5-so9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Gorbachev's two signature reforms were:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "collectivisation and industrialisation" },
              { id: "b", text: "nationalisation and central planning" },
              { id: "c", text: "glasnost (openness) and perestroika (restructuring)" },
              { id: "d", text: "détente and containment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Glasnost and perestroika", statement: "Glasnost = openness; perestroika = restructuring of the Soviet economy." },
            ],
            steps: [
              { reasoning: "Glasnost loosened censorship; perestroika introduced partial market reforms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Glasnost and perestroika",
            commonErrors: ["Reversing or misremembering the two terms."],
          },
        },
        {
          id: "his-u5-so10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The key reason the 1989 revolutions succeeded where earlier uprisings had failed was that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Western powers sent troops to support protesters" },
              { id: "b", text: "The Warsaw Pact dissolved in 1988" },
              { id: "c", text: "All communist regimes held free elections voluntarily" },
              { id: "d", text: "Gorbachev renounced the Brezhnev Doctrine — the USSR would not intervene" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "1989 revolutions", statement: "Soviet non-intervention removed the military guarantee that had crushed earlier protests." },
            ],
            steps: [
              { reasoning: "Gorbachev's refusal to prop up satellites let protests succeed peacefully.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Renunciation of the Brezhnev Doctrine",
            commonErrors: ["Attributing 1989 to Western military intervention."],
          },
        },
        {
          id: "his-u5-so11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Gdańsk strikes founded Solidarity; (b) martial law declared in Poland; (c) the Berlin Wall fell.",
          response: { type: "numeric", parts: [{ label: "Gdańsk strikes", answer: 1980 }, { label: "Martial law", answer: 1981 }, { label: "Wall falls", answer: 1989 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Solidarity chronology", statement: "1980 strikes; 1981 martial law; 1989 revolutions." },
            ],
            steps: [
              { reasoning: "The strikes occurred in August 1980.", working: "1980", marks: 1, markCode: "M" },
              { reasoning: "Martial law was declared in December 1981.", working: "1981", marks: 1, markCode: "M" },
              { reasoning: "The Wall fell in November 1989.", working: "1989", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1980; 1981; 1989",
            commonErrors: ["Confusing martial law (1981) with the 1989 elections."],
          },
        },
        {
          id: "his-u5-so12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Solidarity won Poland's elections; (b) Hungary opened its border with Austria; (c) the USSR dissolved.",
          response: { type: "numeric", parts: [{ label: "Solidarity wins elections", answer: 1989 }, { label: "Hungary opens border", answer: 1989 }, { label: "USSR dissolved", answer: 1991 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "1989–91 chronology", statement: "1989 revolutions; 1991 Soviet dissolution." },
            ],
            steps: [
              { reasoning: "Solidarity won Poland's elections in June 1989.", working: "1989", marks: 1, markCode: "M" },
              { reasoning: "Hungary opened its Austrian border in 1989.", working: "1989", marks: 1, markCode: "M" },
              { reasoning: "The USSR dissolved in December 1991.", working: "1991", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1989; 1989; 1991",
            commonErrors: ["Confusing the 1989 revolutions with the 1991 dissolution."],
          },
        },
        {
          id: "his-u5-so13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the month (as a number) for each 1989 event: (a) Solidarity won Poland's elections; (b) the Berlin Wall fell; (c) Czechoslovakia's Velvet Revolution.",
          response: { type: "numeric", parts: [{ label: "Polish elections (month)", answer: 6 }, { label: "Wall falls (month)", answer: 11 }, { label: "Velvet Revolution (month)", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "1989 chronology", statement: "June Poland; November Wall and Velvet Revolution." },
            ],
            steps: [
              { reasoning: "Poland's elections occurred in June.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "The Wall fell in November.", working: "11", marks: 1, markCode: "M" },
              { reasoning: "The Velvet Revolution also peaked in November 1989.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6; 11; 11",
            commonErrors: ["Confusing the June elections with the November revolutions."],
          },
        },
        {
          id: "his-u5-so14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the Gdańsk strikes (1980) and martial law (1981); (b) between martial law (1981) and the fall of the Wall (1989); (c) between the strikes (1980) and the Wall's fall (1989).",
          response: { type: "numeric", parts: [{ label: "1980 to 1981", answer: 1 }, { label: "1981 to 1989", answer: 8 }, { label: "1980 to 1989", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1981 - 1980 = 1$ year.", working: "1981 - 1980 = 1", marks: 1, markCode: "M" },
              { reasoning: "$1989 - 1981 = 8$ years.", working: "1989 - 1981 = 8", marks: 1, markCode: "M" },
              { reasoning: "$1989 - 1980 = 9$ years.", working: "1989 - 1980 = 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1; 8; 9 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u5-so15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the approximate membership of Solidarity, in millions; (b) the year martial law was declared; (c) the year Solidarity won Poland's elections.",
          response: { type: "numeric", parts: [{ label: "Solidarity membership (millions)", answer: 10, unit: "million" }, { label: "Martial law year", answer: 1981 }, { label: "Elections year", answer: 1989 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Solidarity details", statement: "~10 million members; martial law 1981; elections 1989." },
            ],
            steps: [
              { reasoning: "Membership swelled to about ten million.", working: "10 million", marks: 1, markCode: "M" },
              { reasoning: "Martial law was declared in 1981.", working: "1981", marks: 1, markCode: "M" },
              { reasoning: "Solidarity won the 1989 elections.", working: "1989", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 million; 1981; 1989",
            commonErrors: ["Underestimating Solidarity's membership."],
          },
        },
        {
          id: "his-u5-so16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Gdańsk strikes; martial law declared; the Berlin Wall fell; the USSR dissolved.",
          response: { type: "numeric", parts: [{ label: "Gdańsk strikes", answer: 1 }, { label: "Martial law", answer: 2 }, { label: "Wall falls", answer: 3 }, { label: "USSR dissolved", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Collapse chronology", statement: "1980 → 1981 → 1989 → 1991." },
            ],
            steps: [
              { reasoning: "The strikes (1980) are earliest.", working: "1980", marks: 1, markCode: "M" },
              { reasoning: "Martial law (1981) followed the strikes.", working: "1981", marks: 1, markCode: "M" },
              { reasoning: "The Wall (1989) preceded the USSR's dissolution (1991); all ordered correctly.", working: "1989 < 1991", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strikes 1, martial law 2, Wall 3, USSR 4",
            commonErrors: ["Placing the USSR's dissolution before the Wall's fall."],
          },
        },
      ],
    },
  ],
};
