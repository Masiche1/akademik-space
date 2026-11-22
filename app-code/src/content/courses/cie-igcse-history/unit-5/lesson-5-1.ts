import type { Lesson } from "../../../types.ts";

export const lesson501: Lesson = {
  id: "cieihis-u5-lesson-5-1",
  code: "5-1",
  title: "Cold War Proxy Conflicts in Depth",
  goal: "I CAN analyse the Korean War, Berlin crises and proxy conflicts as extensions of the Cold War.",
  standards: ["Cambridge IGCSE History 0470", "Paper 2: Cold War depth"],
  vocabulary: [
    {
      term: "Proxy conflict",
      definition: "A war fought by allied states on behalf of the superpowers.",
    },
    {
      term: "Containment",
      definition: "US policy of preventing the spread of communism.",
    },
    {
      term: "Berlin Blockade",
      definition: "Soviet attempt to cut off West Berlin in 1948-49.",
    },
    {
      term: "Airlift",
      definition: "Operation supplying West Berlin by air during the blockade.",
    },
    {
      term: "Buffer state",
      definition: "A country used to shield a larger power from rivals.",
    },
    {
      term: "Stalemate",
      definition: "A state of deadlock where neither side can win.",
    },
  ],
  concepts: [
    {
      id: "cieihs-u5-s1-proxy",
      title: "Proxy conflicts and crises",
      skill: "Analyse how superpower rivalry extended into regional conflicts.",
      lesson: {
        sections: [
          {
            heading: "Korean War",
            paragraphs: [
              "The Korean War (1950-1953) was the first major proxy conflict. After Japan's defeat in 1945, Korea was divided at the 38th parallel into a Soviet-backed north and a US-backed south. In June 1950 North Korean forces invaded the South. The UN Security Council authorised intervention, led by US forces under General MacArthur.",
              "The war demonstrated containment in action. Chinese 'volunteers' intervened after UN forces approached the Chinese border, turning the conflict into a prolonged stalemate. The armistice of July 1953 restored the division near the original border, with no peace treaty signed — the border remains one of the most militarised in the world.",
            ],
          },
          {
            heading: "Berlin crises",
            paragraphs: [
              "Berlin was a flashpoint because it sat 160 km inside East Germany yet was divided into four Allied zones. The Berlin Blockade (1948-49) saw the USSR cut road and rail links to West Berlin; the Western Allies responded with the Berlin Airlift, supplying the city by air for 11 months. The blockade failed and lifted in May 1949.",
              "The second crisis came in 1961 when East Germany built the Berlin Wall to stop the flow of refugees to the West. The Wall became the symbol of the division of Europe until its fall in 1989.",
            ],
          },
          {
            heading: "Vietnam as a proxy war",
            paragraphs: [
              "Vietnam was the longest and most divisive Cold War proxy conflict. France attempted to reassert colonial control after 1945 but was defeated at Dien Bien Phu in 1954. Vietnam was then divided at the 17th parallel, with the communist North under Ho Chi Minh and the US-backed South.",
              "The US escalated from advisers to over 500,000 troops by 1968. The war showed the limits of containment: despite massive firepower, the North Vietnamese and Viet Cong waged guerrilla warfare that US technology could not defeat. US withdrawal followed the Paris Peace Accords of 1973 and the fall of Saigon in 1975.",
            ],
          },
          {
            heading: "Afghanistan and the late Cold War",
            paragraphs: [
              "The Soviet invasion of Afghanistan in 1979 triggered the largest proxy conflict of the late Cold War. The US, China and Saudi Arabia armed the mujahideen resistance through Pakistan. The Soviet Union withdrew in 1989 after nearly a decade of inconclusive fighting, and Afghanistan descended into civil war.",
            ],
          },
        ],
      },
      questions: [
    {
      id: "cieihs-u5-pc-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a 'proxy conflict' in the context of the Cold War?",
      response: {
        type: "mcq",
        choices: [
          {
            id: "a",
            text: "A regional conflict where superpowers support opposing sides without direct war",
          },
          { id: "b", text: "A diplomatic negotiation between allies" },
          { id: "c", text: "A nuclear weapons test" },
          { id: "d", text: "A war fought between the US and USSR directly" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Proxy conflict",
            statement: "Regional conflict backed by superpowers.",
          },
        ],
        steps: [
          {
            reasoning:
              "A proxy conflict is a regional war where superpowers arm and support opposing sides while avoiding direct confrontation.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** A regional conflict where superpowers support opposing sides without direct war",
      },
    },
    {
      id: "cieihs-u5-pc-q2",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "State when the Korean War began and when the armistice was signed.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Korean War dates",
            statement: "1950-1953.",
          },
        ],
        steps: [
          {
            reasoning: "North Korea invaded the South in June 1950.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning: "The armistice was signed in July 1953.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "June 1950 to July 1953",
      },
    },
    {
      id: "cieihs-u5-pc-q3",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "At which parallel was Korea divided after 1945?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "49th parallel" },
          { id: "b", text: "Equator" },
          { id: "c", text: "38th parallel" },
          { id: "d", text: "17th parallel" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "38th parallel",
            statement: "Division of Korea.",
          },
        ],
        steps: [
          {
            reasoning:
              "Korea was divided at the 38th parallel into Soviet and US occupation zones.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** 38th parallel",
      },
    },
    {
      id: "cieihs-u5-pc-q4",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "How many months did the Berlin Airlift last?",
      response: { type: "numeric", parts: [{ label: "a", answer: 11 }] },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Berlin Airlift",
            statement: "11 months of supply.",
          },
        ],
        steps: [
          {
            reasoning:
              "The airlift supplied West Berlin for 11 months (June 1948 to May 1949).",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "11",
      },
    },
    {
      id: "cieihs-u5-pc-q5",
      difficulty: "core",
      totalMarks: 1,
      stem: "In which year was the Berlin Wall built?",
      response: { type: "numeric", parts: [{ label: "a", answer: 1961 }] },
      markscheme: {
        principles: [
          { kind: "definition", name: "Berlin Wall", statement: "Built 1961." },
        ],
        steps: [
          {
            reasoning:
              "East Germany built the Wall in August 1961 to stop refugee flight to the West.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "1961",
      },
    },
    {
      id: "cieihs-u5-pc-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how the Berlin Blockade demonstrated the limits of Soviet power.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Berlin Blockade",
            statement: "Airlift defeated the blockade.",
          },
        ],
        steps: [
          {
            reasoning:
              "The USSR cut land links to West Berlin expecting the city to be starved into submission.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The Western Allies supplied the city entirely by air — up to 4,500 tonnes daily at the peak.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The blockade failed after 11 months, showing the USSR could not force the West out of Berlin.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Airlift resupply made the blockade unworkable, embarrassing the USSR.",
        commonErrors: [
          "Claiming the blockade succeeded.",
          "Omitting the airlift response.",
        ],
      },
    },
    {
      id: "cieihs-u5-pc-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why the Korean War ended in a stalemate rather than a clear victory for either side.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Korean stalemate",
            statement: "Armistice near original border.",
          },
        ],
        steps: [
          {
            reasoning:
              "Chinese intervention in late 1950 pushed UN forces back below the 38th parallel.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Neither side could achieve total victory: the North could not conquer the South, and the South/UN could not reunify Korea under a non-communist government.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The July 1953 armistice froze the front near its starting point — a military draw.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Neither side could win outright, so an armistice restored the status quo.",
        commonErrors: ["Saying the South won or the North won decisively."],
      },
    },
    {
      id: "cieihs-u5-pc-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the role of China in the Korean War.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Chinese intervention",
            statement: "'Volunteers' crossed the Yalu in late 1950.",
          },
        ],
        steps: [
          {
            reasoning:
              "As UN forces advanced toward the Chinese border, China sent 'volunteer' forces across the Yalu River in October-November 1950.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Chinese intervention forced a UN retreat and turned the war into a stalemate.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It demonstrated China's willingness to fight the West directly and secured North Korea as a buffer ally.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "China intervened to save North Korea and push UN forces back, creating the stalemate.",
        commonErrors: ["Claiming China declared war formally."],
      },
    },
    {
      id: "cieihs-u5-pc-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why Vietnam became a major Cold War proxy conflict.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Vietnam proxy",
            statement: "Containment + decolonisation clash.",
          },
        ],
        steps: [
          {
            reasoning:
              "After France's defeat at Dien Bien Phu (1954), Vietnam was divided at the 17th parallel between a communist North and US-backed South.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The US applied containment, escalating from advisers to over 500,000 troops by 1968.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The North, backed by the USSR and China, fought a guerrilla war that US firepower could not defeat, making Vietnam the longest proxy conflict.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Containment doctrine plus decolonisation made Vietnam the Cold War's longest proxy war.",
        commonErrors: [
          "Treating Vietnam as a purely civil war without superpower dimensions.",
        ],
      },
    },
    {
      id: "cieihs-u5-pc-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which battle ended French colonial rule in Vietnam in 1954?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Tet Offensive" },
          { id: "b", text: "Battle of the Bulge" },
          { id: "c", text: "Battle of Saigon" },
          { id: "d", text: "Dien Bien Phu" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Dien Bien Phu",
            statement: "1954 French defeat.",
          },
        ],
        steps: [
          {
            reasoning:
              "The Viet Minh victory at Dien Bien Phu ended French control of Indochina in 1954.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Dien Bien Phu",
      },
    },
    {
      id: "cieihs-u5-pc-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) At which parallel was Vietnam divided in 1954? (b) In which year did Saigon fall to North Vietnamese forces?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 17 },
          { label: "b", answer: 1975 },
        ],
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Vietnam division",
            statement: "17th parallel; 1975 fall.",
          },
        ],
        steps: [
          {
            reasoning:
              "Vietnam was divided at the 17th parallel after the 1954 Geneva Accords.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning: "Saigon fell in April 1975, ending the war.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "a) 17, b) 1975",
      },
    },
    {
      id: "cieihs-u5-pc-q12",
      difficulty: "core",
      totalMarks: 1,
      stem: "What was the main method used by North Vietnamese and Viet Cong forces against US troops?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Conventional tank warfare" },
          { id: "b", text: "Naval blockades only" },
          { id: "c", text: "Diplomatic isolation" },
          { id: "d", text: "Guerrilla warfare and the Ho Chi Minh trail" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Guerrilla warfare",
            statement: "Unconventional tactics.",
          },
        ],
        steps: [
          {
            reasoning:
              "Viet Cong guerrillas used ambushes, tunnels and the Ho Chi Minh trail to supply forces in the South.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Guerrilla warfare and the Ho Chi Minh trail",
      },
    },
    {
      id: "cieihs-u5-pc-q13",
      difficulty: "core",
      totalMarks: 4,
      stem: "Explain why the Vietnam War was a 'quagmire' for the United States.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Vietnam quagmire",
            statement: "Escalation without victory.",
          },
        ],
        steps: [
          {
            reasoning:
              "US troop numbers escalated from advisers to over 500,000, yet victory remained elusive.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Guerrilla tactics and difficult terrain negated US technological superiority.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Domestic opposition and the Tet Offensive (1968) destroyed public support for the war.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The US was forced to withdraw and accept the unification of Vietnam under communist rule in 1975.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Escalating costs and guerrilla resistance trapped the US in a war it could not win.",
        commonErrors: ["Describing the war as a clear US victory."],
      },
    },
    {
      id: "cieihs-u5-pc-q14",
      difficulty: "core",
      totalMarks: 4,
      stem: "Explain why the Soviet invasion of Afghanistan (1979) weakened the USSR.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Afghanistan",
            statement: "Soviet 'Vietnam'.",
          },
        ],
        steps: [
          {
            reasoning:
              "The USSR invaded to prop up a communist government, but faced fierce mujahideen resistance.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "US, Chinese and Saudi funding armed the resistance, making it a global proxy war.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The war drained Soviet resources and morale for nearly a decade.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Withdrawal in 1989 and the collapse of the Afghan communist government in 1992 contributed to the USSR's decline.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "A decade of unwinnable guerrilla war accelerated Soviet decline.",
        commonErrors: ["Claiming the USSR won the war."],
      },
    },
    {
      id: "cieihs-u5-pc-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "'The Cold War was fought primarily through proxy wars rather than direct conflict.' Assess this statement.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Balanced judgement.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: proxy wars (Korea, Vietnam, Afghanistan, Angola) were the main theatre of superpower rivalry, as nuclear weapons made direct war unthinkable.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence: superpowers armed clients, fought intelligence wars and engaged in crises such as Berlin and Cuba.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: the arms race, space race and diplomatic confrontation were also central — not everything was a proxy war.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: the statement is largely accurate — proxy conflicts expressed the rivalry that direct war could not.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Mostly correct — nuclear deterrence pushed rivalry into regional proxy conflicts.",
        commonErrors: ["One-sided agreement or disagreement without evidence."],
      },
    },
    {
      id: "cieihs-u5-pc-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess the view that the Berlin crises were the most dangerous moments of the Cold War.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Evaluate significance.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: Berlin was a genuine flashpoint — deep inside East Germany, divided and occupied, it brought superpowers face to face.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence: the Blockade (1948-49) and Wall (1961) each risked escalation to war; Checkpoint Charlie (1961) saw tanks face off.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: the Cuban Missile Crisis (1962) was far more dangerous — it brought the world closest to nuclear war.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: Berlin crises were serious but the Cuban Missile Crisis was the most dangerous moment.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Berlin was dangerous but the Cuban Missile Crisis was more so.",
        commonErrors: ["Ignoring the Cuban Missile Crisis comparison."],
      },
    },
      ],
    },
  ],
};
