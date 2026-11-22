import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const URBAN: TextExtract = {
  title: "Should Cities Ban Cars Downtown?",
  author: "Adapted for Akademik Space",
  text: "Every morning, millions of cars pour into city centers, turning streets into parking lots and air into soup. Proponents of car-free zones argue that cities built for people, not vehicles, are healthier, safer, and more prosperous. Madrid removed most downtown traffic in 2020 and reported a 24 percent drop in nitrogen dioxide within months. Paris expanded its pedestrian zones and saw local shop sales rise.\n\nOpponents counter that bans hurt the people who need cars most — delivery drivers, elderly residents, workers on night shifts. They point out that Madrid's NO2 drop may reflect pandemic lockdowns, not the car ban itself. Suburban commuters argue they have no realistic alternative; making them pay for parking or take expensive trains is a tax on the working class.\n\nThe strongest version of the car-free argument is not that cars are evil, but that cities have finite space and should spend it on the uses that benefit the most people. A parking space serves one car; a bus lane or a protected bike path can serve hundreds. The question is not whether to ban cars, but how to redesign streets so that driving is one option among many — not the only option.",
};

const REEFNOTE: TextExtract = {
  title: "Field Note: Observing the Reef",
  author: "Adapted for Akademik Space",
  text: "Snorkeling above a coral reef feels like flying over a city built by insects. The reef is not a single organism but a community: coral polyps provide the architecture, algae provide the food, fish provide the cleaning crew, and sharks keep the whole system in balance.\n\nOn this dive, the most striking thing was not the color but the sound — or rather, the absence of it. A healthy reef should crackle with snapping shrimp and grunts from fish. This reef was quieter than expected. A few algae-covered corals suggested recent bleaching. The fish were smaller and fewer than the guidebook described.\n\nThe lesson of the reef is that health is not just about presence but about abundance. A reef can have corals and fish and still be struggling. Counting species tells you what is there; measuring how many of each tells you whether the system is thriving or merely surviving.",
};

export const lesson53: Lesson = {
  id: "ela7-u5-lesson-5-3",
  code: "5-3",
  title: "Informational Text: Argument Analysis and Author's Perspective",
  goal: "I CAN trace how an author builds an argument and evaluate the strength of their reasoning and evidence.",
  standards: ["RI.7.8", "RI.7.6", "RI.7.3", "RI.7.9"],
  vocabulary: [
    {
      term: "Argument",
      definition:
        "A reasoned position supported by evidence — the author tries to convince you.",
    },
    {
      term: "Counterargument",
      definition:
        "The opposing view that an author acknowledges and responds to.",
    },
    {
      term: "Concession",
      definition:
        "Admitting a point on the other side before responding to it.",
    },
    {
      term: "Straw man",
      definition:
        "Misrepresenting an opponent's argument to make it easier to attack.",
    },
    {
      term: "Qualified claim",
      definition:
        "A claim that acknowledges limits — 'not X, but Y' or 'in most cases'.",
    },
    {
      term: "Evidence quality",
      definition: "How strong and relevant the support for a claim is.",
    },
  ],
  concepts: [
    {
      id: "ela7-u5-argument",
      title: "Tracing and evaluating arguments",
      skill:
        "Identify claims, evidence, counterarguments, and evaluate whether the reasoning holds.",
      lesson: {
        sections: [
          {
            heading: "How arguments are built",
            body: "A strong argument has a **claim** (what the author wants you to believe), **evidence** (facts, examples, research), **counterarguments** (the other side's best points), and a **conclusion** that responds to those counterarguments. In the car-ban text, the author doesn't just say 'cars are bad' — they acknowledge opponents' concerns, then reframe the question: it's not about banning cars but about allocating limited space fairly.",
          },
          {
            heading: "Evaluating strength",
            body: "Ask: is the evidence specific or vague? Does the author address the strongest counterargument or a weak version? Does the conclusion follow from the evidence? 'Madrid reported a 24 percent drop' is specific; 'studies show' is vague. Acknowledging that 'Madrid's NO2 drop may reflect pandemic lockdowns' shows intellectual honesty — but also gives opponents ammunition. The strongest arguments acknowledge complexity without abandoning their position.",
          },
        ],
        keyFormulas: [
          {
            name: "Argument anatomy",
            statement:
              "Claim + evidence + counterargument response = complete argument.",
          },
          {
            name: "Evidence test",
            statement:
              "Specific, checkable facts beat vague appeals to 'studies' or 'experts'.",
          },
          {
            name: "Concession strength",
            statement:
              "Acknowledging the other side's best point makes your own position more credible.",
          },
        ],
        workedExample: {
          problem:
            "How does the car-ban text handle the counterargument about delivery drivers and night-shift workers?",
          solution:
            "The text acknowledges the concern directly — 'bans hurt the people who need cars most' — then doesn't dismiss it. Instead, it reframes: the question isn't whether to ban cars but how to make driving 'one option among many.' This is a concession-plus-reframe: the author validates the concern while redirecting toward a solution that could include exemptions or alternatives for those who need cars.",
        },
      },
      questions: [
        {
          id: "ela7-u5-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: URBAN,
          stem: "What is the author's main claim about car-free zones?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cities should redesign streets so driving is one option among many",
              },
              { id: "b", text: "All cars should be banned everywhere" },
              { id: "c", text: "Public transit is always better than cars" },
              { id: "d", text: "Cars cause most air pollution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identifying claims",
                statement:
                  "The claim is the author's central position, not every supporting detail.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The concluding paragraph states the refined claim: redesign streets so driving is 'one option among many — not the only option.'",
                evidence:
                  "how to redesign streets so that driving is one option among many",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. The claim is about redesigning streets, not banning all cars.",
            commonErrors: [
              "Choosing (a) — the author explicitly moves beyond 'ban cars' to a more nuanced position.",
            ],
          },
        },
        {
          id: "ela7-u5-argument-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: URBAN,
          stem: "Explain how the author uses the Madrid and Paris examples as evidence. What makes them strong or weak evidence?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence evaluation",
                statement: "Judge whether examples actually support the claim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Madrid and Paris are specific, real-world cases with measurable results — '24 percent drop in nitrogen dioxide' and 'shop sales rise' are checkable claims.",
                evidence:
                  "Madrid removed most downtown traffic in 2020 and reported a 24 percent drop",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "However, the text itself notes a weakness: 'Madrid's NO2 drop may reflect pandemic lockdowns' — the timing confounds the causation.",
                evidence:
                  "may reflect pandemic lockdowns, not the car ban itself",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Paris's example is stronger because shop sales rising suggests economic benefit, not just environmental — but still only two cases, not a pattern.",
                evidence: "saw local shop sales rise",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Madrid and Paris are specific cases with measurable outcomes, making them stronger than vague claims. But Madrid's timing (2020, pandemic) weakens the causal link, and two cities may not represent all cities — the evidence is suggestive, not conclusive.",
            commonErrors: [
              "Calling the evidence 'strong' without noticing the confounding variable the text itself raises.",
            ],
          },
        },
        {
          id: "ela7-u5-argument-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: URBAN,
          stem: "The author writes: 'The question is not whether to ban cars, but how to redesign streets.' Explain how this reframe strengthens the argument and what it reveals about the author's strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument strategy",
                statement: "Recognize how reframing changes the debate.",
              },
              {
                kind: "skill",
                name: "Critical analysis",
                statement:
                  "Evaluate whether the reframe is fair or a rhetorical trick.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "The reframe moves from a yes/no question (ban or don't ban) to a design question (how to allocate space) — harder to oppose.",
                evidence: "The question is not whether to ban cars",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It acknowledges opponents' concerns — people who need cars — while still advancing the pro-reform position.",
                evidence:
                  "driving is one option among many — not the only option",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It uses the 'finite space' argument to make the case seem logical rather than ideological — a parking space serves one car, a bus lane serves hundreds.",
                evidence: "cities have finite space",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The strategy is fair but also clever — it concedes that some people need cars while arguing the system should change anyway.",
                evidence: "how to redesign streets",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The reframe shifts the debate from 'ban cars?' (polarizing) to 'how to use space fairly?' (practical). It acknowledges opponents' needs while advancing reform — a concession-plus-solution strategy that makes the author's position seem reasonable rather than extreme.",
            commonErrors: [
              "Calling the reframe 'unfair' without recognizing it also addresses legitimate concerns.",
            ],
          },
        },
        {
          id: "ela7-u5-argument-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: URBAN,
          parts: [
            {
              label: "a",
              prompt: "Identify one counterargument the author acknowledges.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain how the author responds to it.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterargument analysis",
                statement: "Strong arguments engage with opposition.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The counterargument: bans hurt people who need cars — delivery drivers, elderly, night-shift workers, suburban commuters.",
                evidence: "bans hurt the people who need cars most",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The author doesn't dismiss it — they validate the concern, then reframe: driving should be 'one option among many,' implying exemptions or alternatives for those who need cars.",
                evidence: "not the only option",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) The counterargument is that bans hurt people who depend on cars. (b) The author acknowledges the concern, then reframes the goal as making driving one option among many — implying the system should accommodate those needs rather than eliminate cars entirely.",
            commonErrors: [
              "Saying the author 'ignores' the counterargument — they engage with it directly.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u5-perspective",
      title: "Interactions and perspective across texts",
      skill:
        "Analyze how different texts or media present the same topic differently and what each perspective emphasizes.",
      lesson: {
        sections: [
          {
            heading: "Same topic, different lenses",
            body: "Two texts about reefs can emphasize different things. The coral biology text focuses on mechanism — how polyps and algae interact. The field-note text focuses on observation — what a diver sees and hears. Same subject, different perspective: one explains the system, the other describes the experience. Grade 7 readers compare what each text chooses to emphasize and what it leaves out.",
          },
          {
            heading: "Reading for perspective",
            body: "Ask: who is speaking? What do they know? What are they trying to make you feel? A scientist writing about bleaching emphasizes mechanism and data; a diver's field note emphasizes sensory experience and emotional response. Neither is 'wrong' — they serve different purposes. The skill is noticing the lens and adjusting your understanding accordingly.",
          },
        ],
        keyFormulas: [
          {
            name: "Perspective lens",
            statement:
              "Every text has a viewpoint shaped by who wrote it and why.",
          },
          {
            name: "Emphasis vs omission",
            statement:
              "What a text highlights reveals its purpose; what it leaves out reveals its limits.",
          },
          {
            name: "Compare across media",
            statement:
              "Different formats (article, field note, diagram) serve different purposes for the same topic.",
          },
        ],
        workedExample: {
          problem:
            "Compare the coral biology text and the reef field note — what does each emphasize that the other doesn't?",
          solution:
            "The biology text explains mechanism: polyps, algae, calcium carbonate, the partnership. The field note emphasizes observation: sound, color, abundance vs. presence. The biology text tells you *how* the reef works; the field note tells you *what it feels like* to be there. Together they give both understanding and experience.",
        },
      },
      questions: [
        {
          id: "ela7-u5-perspective-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REEFNOTE,
          stem: "What does the field note emphasize that a biology textbook would not?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The geological history of reefs" },
              { id: "b", text: "The chemical composition of coral" },
              { id: "c", text: "The taxonomy of reef fish" },
              {
                id: "d",
                text: "The sensory experience and emotional impact of the reef",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective identification",
                statement:
                  "Different texts emphasize different aspects of the same subject.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The field note describes sound, color, feeling — 'feels like flying over a city' — sensory and emotional details a textbook would omit.",
                evidence: "feels like flying over a city built by insects",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. The field note emphasizes sensory experience and emotional response.",
            commonErrors: [
              "Choosing (a) — the field note mentions polyps but doesn't focus on chemistry.",
            ],
          },
        },
        {
          id: "ela7-u5-perspective-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: REEFNOTE,
          stem: "The field note says 'health is not just about presence but about abundance.' Explain what this means and why it matters for understanding reef health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Concept explanation",
                statement: "Distinguish between existence and thriving.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Presence' means species exist — corals are there, fish are there. 'Abundance' means there are many of each — a thriving population.",
                evidence:
                  "A reef can have corals and fish and still be struggling",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "A reef with few fish and algae-covered corals is present but not healthy — the note's reef is 'quieter than expected' with 'smaller and fewer' fish.",
                evidence:
                  "The fish were smaller and fewer than the guidebook described",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "This distinction matters because counting species tells you what's there, but measuring abundance tells you if the system is thriving or barely surviving.",
                evidence:
                  "Counting species tells you what is there; measuring how many of each tells you whether the system is thriving",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Presence = species exist; abundance = healthy populations. A reef can have all the right species but still be struggling if populations are small — measuring abundance reveals true health.",
            commonErrors: [
              "Equating 'has corals' with 'healthy reef' — the note explicitly warns against this.",
            ],
          },
        },
        {
          id: "ela7-u5-perspective-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: URBAN,
          stem: "Compare how the car-ban text and the reef field note handle evidence. What does each value, and what does that reveal about their different purposes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cross-text comparison",
                statement:
                  "Compare how different texts use evidence for different purposes.",
              },
              {
                kind: "skill",
                name: "Purpose analysis",
                statement: "Explain what each text is trying to achieve.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "The car-ban text uses statistical evidence — '24 percent drop in NO2', 'shop sales rise' — to argue for policy change.",
                evidence: "reported a 24 percent drop in nitrogen dioxide",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The reef note uses observational evidence — 'quieter than expected', 'smaller and fewer fish' — to convey experience and concern.",
                evidence: "This reef was quieter than expected",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The car-ban text argues a position (reform needed); the reef note describes an experience (what the reef feels like) — different purposes need different evidence.",
                evidence: "Proponents of car-free zones argue",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both are 'informational' but serve different functions: one persuades, one immerses — the evidence type matches the purpose.",
                evidence:
                  "The lesson of the reef is that health is not just about presence",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The car-ban text uses statistics to persuade for policy change; the reef note uses sensory observation to immerse and warn. Different purposes — argument vs. experience — require different evidence types.",
            commonErrors: [
              "Saying one text is 'better' — they serve different purposes with appropriate evidence.",
            ],
          },
        },
        {
          id: "ela7-u5-perspective-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REEFNOTE,
          parts: [
            {
              label: "a",
              prompt:
                "What is the diver's main observation about the reef's health?",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Explain how the 'absence of sound' supports that observation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation analysis",
                statement: "Sensory details can reveal health status.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The reef is quieter and less abundant than expected — 'quieter than expected', 'smaller and fewer' fish, 'algae-covered corals'.",
                evidence: "This reef was quieter than expected",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Healthy reefs 'crackle with snapping shrimp and grunts' — sound indicates abundant life; silence suggests decline.",
                evidence:
                  "A healthy reef should crackle with snapping shrimp and grunts from fish",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The absence of sound is evidence of low abundance — fewer creatures making noise means fewer creatures overall.",
                evidence:
                  "The lesson of the reef is that health is not just about presence but about abundance",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "This shows how sensory observation (sound) can diagnose ecological health — the diver 'reads' the reef through what it doesn't say.",
                evidence: "or rather, the absence of it",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) The reef is quieter and less abundant than healthy. (b) Healthy reefs crackle with shrimp and fish sounds; silence indicates few creatures — sound absence is evidence of decline.",
            commonErrors: [
              "Treating silence as 'peaceful' rather than as a sign of low abundance.",
            ],
          },
        },
      ],
    },
  ],
};
