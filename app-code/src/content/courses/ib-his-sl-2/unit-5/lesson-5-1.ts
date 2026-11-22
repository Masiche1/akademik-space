import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "his-u5-lesson-5-1",
  code: "5-1",
  title: "The US Civil Rights Movement: Montgomery to the Voting Rights Act",
  goal: "I CAN describe the campaigns and key figures of the US civil rights movement and evaluate the impact of landmark legislation.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    { term: "Jim Crow laws", definition: "State and local laws enforcing racial segregation in the US South after Reconstruction." },
    { term: "Montgomery Bus Boycott", definition: "1955–56 protest after Rosa Parks' arrest, ending segregated buses in Montgomery, Alabama." },
    { term: "Southern Christian Leadership Conference (SCLC)", definition: "Civil rights organisation co-founded by Martin Luther King Jr. in 1957." },
    { term: "Freedom Riders", definition: "Activists who rode interstate buses into the South in 1961 to test desegregation rulings." },
    { term: "Civil Rights Act 1964", definition: "Landmark US law banning discrimination in public places, employment and education." },
    { term: "Voting Rights Act 1965", definition: "US law removing barriers, especially literacy tests, that prevented Black Americans from voting." },
  ],
  concepts: [
    {
      id: "his-u5-early-struggles",
      title: "Early campaigns: boycott, sit-ins and freedom rides",
      skill: "Describe the tactics and achievements of early civil rights campaigns and identify their key figures.",
      lesson: {
        sections: [
          {
            heading: "Montgomery and the birth of mass protest",
            body: "In December 1955 **Rosa Parks** refused to give up her bus seat in Montgomery, Alabama. The resulting **bus boycott**, led by a young **Martin Luther King Jr.**, lasted 381 days and ended when the Supreme Court ruled segregated buses unconstitutional (1956). It demonstrated the power of nonviolent mass protest and launched King's national career.",
          },
          {
            heading: "Sit-ins, SNCC and the Freedom Riders",
            body: "In 1960 four Black students began **sit-ins** at a segregated Woolworth's lunch counter in Greensboro, sparking a movement across the South. The **Student Nonviolent Coordinating Committee (SNCC)** emerged from these campaigns, training activists in nonviolence. In 1961 **Freedom Riders** rode interstate buses into the South to test desegregation; they were met with mob violence, yet federal intervention eventually enforced the law.",
          },
          {
            heading: "Violence and federal intervention",
            body: "Progress came slowly and violently: the bombing of the Sixteenth Street Baptist Church in Birmingham (1963) killed four girls. Television coverage of police dogs and hoses against peaceful protesters shocked the nation. Federal action — troops escorting James Meredith at the University of Mississippi (1962) — showed Washington's reluctant enforcement of its own laws.",
          },
        ],
        keyFormulas: [
          { name: "Early campaign timeline", statement: "Montgomery boycott 1955–56 → sit-ins 1960 → Freedom Rides 1961" },
          { name: "Key tactics", statement: "Boycotts + sit-ins + freedom rides + nonviolent direct action" },
        ],
        workedExample: {
          problem: "Why did the Montgomery Bus Boycott succeed?",
          solution: "It combined mass participation (most Black commuters boycotted), economic pressure on the bus company, legal strategy (NAACP), and disciplined nonviolence that won national sympathy — forcing desegregation after 381 days.",
        },
      },
      questions: [
        {
          id: "his-u5-eq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Montgomery Bus Boycott began after the arrest of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Malcolm X" },
              { id: "b", text: "Rosa Parks" },
              { id: "c", text: "John Lewis" },
              { id: "d", text: "Martin Luther King Jr." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Rosa Parks", statement: "Parks' refusal to surrender her seat in December 1955 triggered the Montgomery boycott." },
            ],
            steps: [
              { reasoning: "Rosa Parks' arrest sparked the boycott.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rosa Parks",
            commonErrors: ["Confusing Rosa Parks with MLK — he led the boycott but Parks' arrest triggered it."],
          },
        },
        {
          id: "his-u5-eq2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Describe two tactics used by early civil rights activists.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Civil rights tactics", statement: "Boycotts, sit-ins, freedom rides, marches, nonviolent direct action." },
            ],
            steps: [
              { reasoning: "Boycotts: the Montgomery boycott used economic pressure on segregated businesses.", marks: 1, markCode: "M" },
              { reasoning: "Sit-ins: students occupied segregated lunch counters, forcing confrontation with segregation laws.", marks: 1, markCode: "M" },
              { reasoning: "Freedom Rides tested desegregation on interstate transport despite violent attacks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Economic boycotts, direct-action sit-ins and freedom rides testing segregation laws.",
            commonErrors: ["Listing events rather than tactics — explain the method, not just the event."],
          },
        },
        {
          id: "his-u5-eq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the role of television and media in the civil rights movement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Media role", statement: "Television exposed segregationist violence to a national audience, building pressure for federal action." },
            ],
            steps: [
              { reasoning: "Images of police dogs, hoses and church bombings in Birmingham (1963) horrified white Americans.", marks: 1, markCode: "M" },
              { reasoning: "King's speeches and marches (e.g. the March on Washington, 1963) were broadcast nationally.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: media turned a regional struggle into a national moral crisis, pressuring Kennedy and Congress.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: media coverage was essential in converting public opinion and enabling legislation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Television exposed violence and mobilised national opinion, pressuring federal action.",
            commonErrors: ["Claiming the movement succeeded without noting the media's amplifying role."],
          },
        },
        {
          id: "his-u5-eq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Examine the significance of the sit-ins and the Freedom Rides for the civil rights movement.",
          parts: [
            { label: "a", prompt: "Describe what the sit-ins and Freedom Rides involved.", marks: 2 },
            { label: "b", prompt: "Explain their impact on the movement and on federal policy.", marks: 3 },
            { label: "c", prompt: "Evaluate whether nonviolent tactics were the key to success.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct action impact", statement: "Sit-ins and Freedom Rides expanded the movement, radicalised youth (SNCC) and forced federal enforcement." },
            ],
            steps: [
              { part: "a", reasoning: "Sit-ins: students occupied segregated lunch counters from 1960.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Freedom Rides: integrated groups rode interstate buses into the South in 1961 to test desegregation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sit-ins spread across the South, energised youth and led to SNCC's formation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Freedom Rides' violence forced federal intervention to enforce desegregation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Together they shifted the movement from court cases to mass direct action.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Nonviolence won sympathy and moral authority but was met with extreme violence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: tactics mattered, but organisation, media and federal action were also essential.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Occupations of counters and integrated bus rides. (b) Mobilised youth, forced federal enforcement, shifted to direct action. (c) Powerful but not solely decisive.",
            commonErrors: ["Attributing success to tactics alone while ignoring structure and timing."],
          },
        },
        {
          id: "his-u5-eq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Rosa Parks refused to give up her bus seat in Montgomery in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1963" },
              { id: "b", text: "1950" },
              { id: "c", text: "1955" },
              { id: "d", text: "1960" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Montgomery boycott", statement: "Parks's arrest in December 1955 triggered the bus boycott." },
            ],
            steps: [
              { reasoning: "Parks refused to move in December 1955.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1955",
            commonErrors: ["Confusing the boycott (1955–56) with the sit-ins (1960)."],
          },
        },
        {
          id: "his-u5-eq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Montgomery Bus Boycott lasted for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "381 days" },
              { id: "b", text: "6 months" },
              { id: "c", text: "100 days" },
              { id: "d", text: "2 years" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Montgomery boycott", statement: "The boycott ran for 381 days before the Supreme Court ruling." },
            ],
            steps: [
              { reasoning: "The boycott lasted 381 days.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 381 days",
            commonErrors: ["Guessing a round number rather than recalling the figure."],
          },
        },
        {
          id: "his-u5-eq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 1960 sit-in movement began when four Black students occupied a segregated lunch counter at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Woolworth's in Greensboro, North Carolina" },
              { id: "b", text: "A lunch counter in Selma" },
              { id: "c", text: "The University of Mississippi" },
              { id: "d", text: "A bus station in Montgomery" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Sit-ins", statement: "The sit-ins began at Woolworth's in Greensboro in February 1960." },
            ],
            steps: [
              { reasoning: "Four students sat in at a Woolworth's counter in Greensboro.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Woolworth's in Greensboro",
            commonErrors: ["Confusing the sit-ins with the Freedom Rides."],
          },
        },
        {
          id: "his-u5-eq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Student Nonviolent Coordinating Committee (SNCC) emerged from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The March on Washington" },
              { id: "b", text: "The Montgomery Bus Boycott" },
              { id: "c", text: "The Selma voting-rights campaign" },
              { id: "d", text: "The sit-in campaigns of 1960" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "SNCC", statement: "SNCC grew out of the student sit-in movement and trained activists in nonviolence." },
            ],
            steps: [
              { reasoning: "SNCC was formed by students radicalised through the sit-ins.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The sit-in campaigns",
            commonErrors: ["Confusing SNCC with the NAACP or SCLC."],
          },
        },
        {
          id: "his-u5-eq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Freedom Rides of 1961 tested:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "School integration in northern cities" },
              { id: "b", text: "The right to vote in federal elections" },
              { id: "c", text: "Desegregation on interstate buses in the South" },
              { id: "d", text: "Voter registration in the North" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Freedom Rides", statement: "Riders travelled interstate buses into the South to enforce desegregation rulings." },
            ],
            steps: [
              { reasoning: "Freedom Riders deliberately used segregated interstate bus facilities to test the law.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Desegregation on interstate buses",
            commonErrors: ["Confusing the Freedom Rides with the sit-ins."],
          },
        },
        {
          id: "his-u5-eq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The bombing of the Sixteenth Street Baptist Church in Birmingham (1963) was significant because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Killed four young girls and shocked the nation" },
              { id: "b", text: "Forced Eisenhower to send troops to Little Rock" },
              { id: "c", text: "Ended the Montgomery boycott" },
              { id: "d", text: "Led to the founding of SNCC" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Birmingham bombing", statement: "The 1963 church bombing killed four girls and intensified national pressure for civil rights legislation." },
            ],
            steps: [
              { reasoning: "The bombing killed four girls and became a symbol of Southern violence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Killed four girls and shocked the nation",
            commonErrors: ["Attributing the bombing to a different year or city."],
          },
        },
        {
          id: "his-u5-eq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Rosa Parks refused to give up her seat; (b) the Supreme Court ruled segregated buses unconstitutional; (c) the sit-ins began in Greensboro.",
          response: { type: "numeric", parts: [{ label: "Parks arrested", answer: 1955 }, { label: "Supreme Court ruling", answer: 1956 }, { label: "Sit-ins begin", answer: 1960 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Early campaign chronology", statement: "1955 boycott begins; 1956 court victory; 1960 sit-ins." },
            ],
            steps: [
              { reasoning: "Parks was arrested in December 1955.", working: "1955", marks: 1, markCode: "M" },
              { reasoning: "The Supreme Court ruling came in 1956.", working: "1956", marks: 1, markCode: "M" },
              { reasoning: "The sit-ins began in 1960.", working: "1960", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1955; 1956; 1960",
            commonErrors: ["Confusing the boycott start (1955) with its legal victory (1956)."],
          },
        },
        {
          id: "his-u5-eq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Freedom Rides began; (b) federal troops escorted James Meredith at the University of Mississippi; (c) the Birmingham church bombing.",
          response: { type: "numeric", parts: [{ label: "Freedom Rides", answer: 1961 }, { label: "Meredith escorted", answer: 1962 }, { label: "Church bombing", answer: 1963 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Campaign chronology", statement: "1961 Freedom Rides; 1962 Meredith; 1963 Birmingham bombing." },
            ],
            steps: [
              { reasoning: "The Freedom Rides began in 1961.", working: "1961", marks: 1, markCode: "M" },
              { reasoning: "Troops escorted Meredith in 1962.", working: "1962", marks: 1, markCode: "M" },
              { reasoning: "The bombing occurred in 1963.", working: "1963", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1961; 1962; 1963",
            commonErrors: ["Swapping the Meredith (1962) and bombing (1963) dates."],
          },
        },
        {
          id: "his-u5-eq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of days the Montgomery Bus Boycott lasted; (b) the number of girls killed in the Birmingham church bombing; (c) the year the Supreme Court ended segregated buses.",
          response: { type: "numeric", parts: [{ label: "Boycott duration (days)", answer: 381 }, { label: "Girls killed", answer: 4 }, { label: "Bus ruling year", answer: 1956 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Campaign details", statement: "381-day boycott; four girls killed; 1956 ruling." },
            ],
            steps: [
              { reasoning: "The boycott ran for 381 days.", working: "381", marks: 1, markCode: "M" },
              { reasoning: "Four girls were killed in the bombing.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "The Supreme Court ruled in 1956.", working: "1956", marks: 1, markCode: "A" },
            ],
            finalAnswer: "381; 4; 1956",
            commonErrors: ["Misremembering the casualty count or boycott length."],
          },
        },
        {
          id: "his-u5-eq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Montgomery Bus Boycott began; the Supreme Court ruled on segregated buses; the sit-ins began; the Freedom Rides began.",
          response: { type: "numeric", parts: [{ label: "Boycott begins", answer: 1 }, { label: "Supreme Court ruling", answer: 2 }, { label: "Sit-ins begin", answer: 3 }, { label: "Freedom Rides", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Campaign chronology order", statement: "1955 → 1956 → 1960 → 1961." },
            ],
            steps: [
              { reasoning: "The boycott began in 1955 — earliest.", working: "1955", marks: 1, markCode: "M" },
              { reasoning: "The ruling (1956) ended the boycott before the sit-ins (1960).", working: "1956 < 1960", marks: 1, markCode: "M" },
              { reasoning: "The Freedom Rides (1961) are latest; all ordered correctly.", working: "1960 < 1961", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Boycott 1, ruling 2, sit-ins 3, Freedom Rides 4",
            commonErrors: ["Placing the sit-ins before the boycott's legal victory."],
          },
        },
        {
          id: "his-u5-eq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the start of the boycott (1955) and its legal victory (1956); (b) between the boycott's start (1955) and the sit-ins (1960); (c) between the sit-ins (1960) and the Freedom Rides (1961).",
          response: { type: "numeric", parts: [{ label: "1955 to 1956", answer: 1 }, { label: "1955 to 1960", answer: 5 }, { label: "1960 to 1961", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1956 - 1955 = 1$ year.", working: "1956 - 1955 = 1", marks: 1, markCode: "M" },
              { reasoning: "$1960 - 1955 = 5$ years.", working: "1960 - 1955 = 5", marks: 1, markCode: "M" },
              { reasoning: "$1961 - 1960 = 1$ year.", working: "1961 - 1960 = 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1; 5; 1 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u5-eq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): Rosa Parks's arrest; the Montgomery boycott ended; the sit-ins began; the Birmingham church bombing.",
          response: { type: "numeric", parts: [{ label: "Parks's arrest", answer: 1 }, { label: "Boycott ended", answer: 2 }, { label: "Sit-ins begin", answer: 3 }, { label: "Church bombing", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Campaign chronology order", statement: "1955 → 1956 → 1960 → 1963." },
            ],
            steps: [
              { reasoning: "Parks's arrest (1955) is earliest.", working: "1955", marks: 1, markCode: "M" },
              { reasoning: "The boycott's end (1956) preceded the sit-ins (1960).", working: "1956 < 1960", marks: 1, markCode: "M" },
              { reasoning: "The bombing (1963) is latest; all ordered correctly.", working: "1960 < 1963", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arrest 1, boycott ends 2, sit-ins 3, bombing 4",
            commonErrors: ["Placing the bombing before the sit-ins."],
          },
        },
      ],
    },
    {
      id: "his-u5-legislation-leaders",
      title: "Landmark legislation and key leaders",
      skill: "Explain the Civil Rights Act, Voting Rights Act and Selma campaign, and compare the approaches of key leaders.",
      lesson: {
        sections: [
          {
            heading: "King, Malcolm X and competing visions",
            body: "**Martin Luther King Jr.** preached nonviolent resistance and Christian love, winning the Nobel Peace Prize (1964). **Malcolm X**, later **Malcolm (El-Hajj Malik El-Shabazz)**, initially advocated Black nationalism, self-defence and separation, criticising integration as insufficient. Their approaches — integration vs. Black power — reflected a genuine debate within the movement about strategy and identity.",
          },
          {
            heading: "Selma and the Voting Rights Act",
            body: "Despite the 15th Amendment (1870), Southern states used poll taxes, literacy tests and intimidation to disenfranchise Black voters. In March 1965 state troopers attacked marchers at the **Edmund Pettus Bridge** in Selma ('Bloody Sunday'). The televised violence spurred President Johnson to push the **Voting Rights Act (1965)**, which suspended literacy tests and sent federal examiners to register voters — transforming Black political participation within years.",
          },
          {
            heading: "Civil Rights Act and aftermath",
            body: "The **Civil Rights Act (1964)**, passed after the March on Washington (August 1963, where King gave his 'I Have a Dream' speech), banned segregation in public accommodations and discrimination in employment. The **Fair Housing Act (1968)** followed King's assassination in Memphis. Yet economic inequality persisted — the movement's victories were legal, not fully economic.",
          },
        ],
        keyFormulas: [
          { name: "Landmark laws", statement: "Civil Rights Act 1964 + Voting Rights Act 1965 + Fair Housing Act 1968" },
          { name: "Leader contrast", statement: "King: nonviolence + integration | Malcolm X: nationalism + self-defence" },
        ],
        workedExample: {
          problem: "How did the Selma campaign lead to the Voting Rights Act?",
          solution: "The 'Bloody Sunday' attack on marchers was televised nationally, creating outrage that pressured President Johnson and Congress to pass the Voting Rights Act within months, banning literacy tests and enabling federal voter registration.",
        },
      },
      questions: [
        {
          id: "his-u5-lq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Voting Rights Act of 1965 primarily aimed to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guarantee equal pay" },
              { id: "b", text: "Remove barriers preventing Black Americans from voting" },
              { id: "c", text: "Desegregate public transport" },
              { id: "d", text: "End school segregation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Voting Rights Act", statement: "1965 law banning literacy tests and other discriminatory voting barriers." },
            ],
            steps: [
              { reasoning: "The Act targeted voting barriers like literacy tests and poll taxes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Remove voting barriers",
            commonErrors: ["Confusing the Voting Rights Act with the Civil Rights Act."],
          },
        },
        {
          id: "his-u5-lq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Compare the approaches of Martin Luther King Jr. and Malcolm X.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "King vs Malcolm X", statement: "King: nonviolent integration; Malcolm X: Black nationalism, self-defence." },
            ],
            steps: [
              { reasoning: "King advocated nonviolent civil disobedience and integration into American society.", marks: 1, markCode: "M" },
              { reasoning: "Malcolm X advocated Black nationalism, self-defence ('by any means necessary') and criticised integration.", marks: 1, markCode: "M" },
              { reasoning: "Both sought Black dignity and rights but differed on means and whether America could be reformed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "King: nonviolent integration; Malcolm X: nationalism and self-defence — same goal, different strategy.",
            commonErrors: ["Caricaturing Malcolm X as simply 'violent' without noting his critique of systemic racism."],
          },
        },
        {
          id: "his-u5-lq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Selma campaign contributed to the Voting Rights Act.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selma to VRA", statement: "Televised 'Bloody Sunday' violence created national outrage and pressured Congress." },
            ],
            steps: [
              { reasoning: "Marchers attempting the Selma-to-Montgomery march were attacked at the Edmund Pettus Bridge on 7 March 1965.", marks: 1, markCode: "M" },
              { reasoning: "Television coverage of the violence shocked the nation and undermined segregationist legitimacy.", marks: 1, markCode: "M" },
              { reasoning: "Public pressure forced President Johnson to push the Voting Rights Act, signed August 1965.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: Selma showed how media-amplified protest could convert moral outrage into legislation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Bloody Sunday' footage → national outrage → Voting Rights Act 1965.",
            commonErrors: ["Describing Selma without linking it to the Act's passage."],
          },
        },
        {
          id: "his-u5-lq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the impact of the Civil Rights Act 1964 and the Voting Rights Act 1965.",
          parts: [
            { label: "a", prompt: "Describe what each Act prohibited or guaranteed.", marks: 3 },
            { label: "b", prompt: "Explain the campaigns that pressured Congress to pass them.", marks: 3 },
            { label: "c", prompt: "Evaluate the Acts' achievements and limitations.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Civil rights legislation", statement: "1964 Act banned segregation/discrimination; 1965 Act protected voting rights — major legal victories with limits." },
            ],
            steps: [
              { part: "a", reasoning: "Civil Rights Act 1964: banned segregation in public places and employment discrimination.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Voting Rights Act 1965: suspended literacy tests and enabled federal voter registration.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Together they dismantled legal segregation and opened the franchise to Black voters.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "March on Washington (1963) and 'I Have a Dream' speech built public support.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Selma's 'Bloody Sunday' (1965) created outrage that forced the VRA.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Nonviolent direct action and media coverage made inaction politically costly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Achievement: transformed legal status, increased Black voting and political representation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: economic inequality and de facto segregation persisted — legal, not social, victory.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 1964: desegregation + employment; 1965: voting rights. (b) March on Washington, Selma, direct action. (c) Legal victory, incomplete social change.",
            commonErrors: ["Overstating the Acts as ending all racism rather than legal barriers."],
          },
        },
        {
          id: "his-u5-lq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Civil Rights Act of 1964 banned:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Segregation in public accommodations and employment discrimination" },
              { id: "b", text: "Only school segregation" },
              { id: "c", text: "All forms of racism in the South" },
              { id: "d", text: "Poll taxes in northern states" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Civil Rights Act 1964", statement: "Banned segregation in public places and discrimination in employment." },
            ],
            steps: [
              { reasoning: "The Act outlawed segregation in public accommodations and workplace discrimination.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Public segregation and employment discrimination",
            commonErrors: ["Confusing the 1964 Act with the 1965 Voting Rights Act."],
          },
        },
        {
          id: "his-u5-lq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Voting Rights Act was passed in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1963" },
              { id: "b", text: "1965" },
              { id: "c", text: "1964" },
              { id: "d", text: "1968" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Voting Rights Act", statement: "The 1965 Act suspended literacy tests and enabled federal voter registration." },
            ],
            steps: [
              { reasoning: "The Voting Rights Act was signed in 1965 after Selma.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1965",
            commonErrors: ["Confusing the Voting Rights Act (1965) with the Civil Rights Act (1964)."],
          },
        },
        {
          id: "his-u5-lq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "King's 'I Have a Dream' speech was delivered at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Selma march in 1965" },
              { id: "b", text: "The Greensboro sit-ins in 1960" },
              { id: "c", text: "The Montgomery boycott in 1955" },
              { id: "d", text: "The March on Washington in 1963" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "I Have a Dream", statement: "King delivered the speech at the August 1963 March on Washington." },
            ],
            steps: [
              { reasoning: "The speech was given at the March on Washington in August 1963.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** March on Washington 1963",
            commonErrors: ["Confusing the 1963 march with the 1965 Selma march."],
          },
        },
        {
          id: "his-u5-lq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Martin Luther King Jr. won the Nobel Peace Prize in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1963" },
              { id: "b", text: "1960" },
              { id: "c", text: "1968" },
              { id: "d", text: "1964" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "King's Nobel Prize", statement: "King received the Nobel Peace Prize in 1964 for nonviolent resistance." },
            ],
            steps: [
              { reasoning: "King won the Nobel Peace Prize in 1964.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1964",
            commonErrors: ["Confusing the Nobel year with the March on Washington year."],
          },
        },
        {
          id: "his-u5-lq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Malcolm X's approach differed from King's because he initially advocated:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Black nationalism, self-defence and separation" },
              { id: "b", text: "Integration into white society through nonviolence" },
              { id: "c", text: "Emigration to Africa as the only solution" },
              { id: "d", text: "Electoral politics only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "King vs Malcolm X", statement: "King preached nonviolent integration; Malcolm X advocated Black nationalism and self-defence." },
            ],
            steps: [
              { reasoning: "Malcolm X criticised integration and urged self-defence and Black self-determination.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Black nationalism and self-defence",
            commonErrors: ["Treating both leaders as having identical strategies."],
          },
        },
        {
          id: "his-u5-lq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Fair Housing Act of 1968 was passed in the aftermath of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Selma campaign" },
              { id: "b", text: "The March on Washington" },
              { id: "c", text: "The Birmingham bombing" },
              { id: "d", text: "King's assassination in Memphis" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Fair Housing Act", statement: "Passed in 1968 following King's assassination in Memphis." },
            ],
            steps: [
              { reasoning: "King was assassinated in April 1968; the Fair Housing Act followed that year.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** King's assassination",
            commonErrors: ["Confusing the Fair Housing Act (1968) with the Voting Rights Act (1965)."],
          },
        },
        {
          id: "his-u5-lq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the 15th Amendment barred racial discrimination in voting; (b) the March on Washington; (c) the Voting Rights Act signed.",
          response: { type: "numeric", parts: [{ label: "15th Amendment", answer: 1870 }, { label: "March on Washington", answer: 1963 }, { label: "Voting Rights Act", answer: 1965 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Voting rights chronology", statement: "1870 15th Amendment; 1963 march; 1965 VRA." },
            ],
            steps: [
              { reasoning: "The 15th Amendment dates from 1870.", working: "1870", marks: 1, markCode: "M" },
              { reasoning: "The march occurred in 1963.", working: "1963", marks: 1, markCode: "M" },
              { reasoning: "The VRA was signed in 1965.", working: "1965", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1870; 1963; 1965",
            commonErrors: ["Confusing the 15th Amendment (1870) with Reconstruction-era amendments."],
          },
        },
        {
          id: "his-u5-lq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the March on Washington; (b) the Civil Rights Act passed; (c) the Fair Housing Act passed.",
          response: { type: "numeric", parts: [{ label: "March on Washington", answer: 1963 }, { label: "Civil Rights Act", answer: 1964 }, { label: "Fair Housing Act", answer: 1968 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Legislation chronology", statement: "1963 march; 1964 CRA; 1968 FHA." },
            ],
            steps: [
              { reasoning: "The march occurred in August 1963.", working: "1963", marks: 1, markCode: "M" },
              { reasoning: "The Civil Rights Act passed in 1964.", working: "1964", marks: 1, markCode: "M" },
              { reasoning: "The Fair Housing Act passed in 1968.", working: "1968", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1963; 1964; 1968",
            commonErrors: ["Confusing the 1964 Act with the 1968 Fair Housing Act."],
          },
        },
        {
          id: "his-u5-lq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the 15th Amendment (1870) and the Voting Rights Act (1965); (b) between the Civil Rights Act (1964) and the Voting Rights Act (1965); (c) between the Voting Rights Act (1965) and the Fair Housing Act (1968).",
          response: { type: "numeric", parts: [{ label: "1870 to 1965", answer: 95 }, { label: "1964 to 1965", answer: 1 }, { label: "1965 to 1968", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1965 - 1870 = 95$ years of disenfranchisement.", working: "1965 - 1870 = 95", marks: 1, markCode: "M" },
              { reasoning: "$1965 - 1964 = 1$ year.", working: "1965 - 1964 = 1", marks: 1, markCode: "M" },
              { reasoning: "$1968 - 1965 = 3$ years.", working: "1968 - 1965 = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "95; 1; 3 years",
            commonErrors: ["Miscomputing the 1870–1965 interval."],
          },
        },
        {
          id: "his-u5-lq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the 15th Amendment; the March on Washington; the Civil Rights Act; the Voting Rights Act.",
          response: { type: "numeric", parts: [{ label: "15th Amendment", answer: 1 }, { label: "March on Washington", answer: 2 }, { label: "Civil Rights Act", answer: 3 }, { label: "Voting Rights Act", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Voting legislation order", statement: "1870 → 1963 → 1964 → 1965." },
            ],
            steps: [
              { reasoning: "The 15th Amendment (1870) is earliest.", working: "1870", marks: 1, markCode: "M" },
              { reasoning: "The march (1963) preceded the 1964 Act.", working: "1963 < 1964", marks: 1, markCode: "M" },
              { reasoning: "The CRA (1964) preceded the VRA (1965); all ordered correctly.", working: "1964 < 1965", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15th Am. 1, march 2, CRA 3, VRA 4",
            commonErrors: ["Placing the VRA before the CRA."],
          },
        },
        {
          id: "his-u5-lq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the year of 'Bloody Sunday' in Selma; (b) the year of King's assassination; (c) the number of years between the Civil Rights Act (1964) and the Voting Rights Act (1965).",
          response: { type: "numeric", parts: [{ label: "Bloody Sunday", answer: 1965 }, { label: "King assassinated", answer: 1968 }, { label: "CRA to VRA (years)", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Selma chronology", statement: "Bloody Sunday 1965; assassination 1968; CRA–VRA gap 1 year." },
            ],
            steps: [
              { reasoning: "Bloody Sunday occurred in March 1965.", working: "1965", marks: 1, markCode: "M" },
              { reasoning: "King was assassinated in 1968.", working: "1968", marks: 1, markCode: "M" },
              { reasoning: "$1965 - 1964 = 1$ year.", working: "1965 - 1964 = 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1965; 1968; 1",
            commonErrors: ["Confusing Bloody Sunday (1965) with Selma's earlier campaign."],
          },
        },
        {
          id: "his-u5-lq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): King's 'I Have a Dream' speech; the Civil Rights Act; 'Bloody Sunday' in Selma; the Fair Housing Act.",
          response: { type: "numeric", parts: [{ label: "I Have a Dream", answer: 1 }, { label: "Civil Rights Act", answer: 2 }, { label: "Bloody Sunday", answer: 3 }, { label: "Fair Housing Act", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Civil rights chronology", statement: "1963 → 1964 → 1965 → 1968." },
            ],
            steps: [
              { reasoning: "The speech (1963) is earliest.", working: "1963", marks: 1, markCode: "M" },
              { reasoning: "The CRA (1964) preceded Bloody Sunday (1965).", working: "1964 < 1965", marks: 1, markCode: "M" },
              { reasoning: "Bloody Sunday (1965) preceded the FHA (1968); all ordered correctly.", working: "1965 < 1968", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Speech 1, CRA 2, Bloody Sunday 3, FHA 4",
            commonErrors: ["Placing Bloody Sunday before the Civil Rights Act."],
          },
        },
      ],
    },
  ],
};
