import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const CORAL: TextExtract = {
  title: "Coral Reefs: Rainforests of the Sea",
  author: "Adapted for Akademik Space",
  text: "Coral reefs cover less than one percent of the ocean floor, yet they support roughly a quarter of all marine species. Scientists sometimes call reefs 'the rainforests of the sea' because, like rainforests, they are crowded with life and extremely sensitive to change.\n\nA reef is built by tiny animals called coral polyps. Each polyp secretes a hard skeleton of calcium carbonate, and over thousands of years these skeletons accumulate into massive structures. The polyps do not live alone: most depend on a partnership with microscopic algae called zooxanthellae. The algae live inside the polyp's tissues and photosynthesize, providing the polyp with food in exchange for shelter and nutrients.\n\nThis partnership explains why reefs need clear, warm, shallow water. The algae need sunlight to photosynthesize, and the polyps need the algae's food to survive. When water temperatures rise even a few degrees above normal, the polyps expel their algae in a process called bleaching. The reef does not die immediately, but it turns white and begins to starve.",
};

const MARS: TextExtract = {
  title: "How a Rover Thinks: The Mars Exploration Program",
  author: "Adapted for Akademik Space",
  text: "A Mars rover is not a remote-controlled car. When mission controllers send a command on Earth, it takes between four and twenty-four minutes for that signal to reach Mars — by which time the rover may have already driven into trouble. Instead, rovers carry their own 'brains': onboard computers that let them navigate, avoid hazards, and even choose scientific targets on their own.\n\nThe rover's software divides its day into segments. During a 'drive' segment, the onboard computer takes images, identifies hazards like rocks and sand, and picks a safe path — all without waiting for instructions from Earth. During a 'science' segment, it points its instruments at rocks or soil that look interesting and collects data. Only at the end of the day does it send everything back to Earth, where scientists decide what to explore next.\n\nThis autonomy matters because of a problem called the 'communication delay.' Imagine trying to steer a car while wearing a blindfold and waiting fifteen minutes for every instruction. That is roughly what driving a rover from Earth feels like. Because rovers cannot rely on real-time control, they must sense, decide, and act locally — which is why engineers design them to be patient, careful, and self-sufficient.",
};

export const lesson51: Lesson = {
  id: "ela7-u5-lesson-5-1",
  code: "5-1",
  title: "Reading Informational Text: Citing Evidence",
  goal: "I CAN cite several pieces of textual evidence from informational texts to support analysis of central ideas and details.",
  standards: ["RI.7.1", "RI.7.1a", "RI.7.1b", "RI.7.1c", "RI.7.1d"],
  vocabulary: [
    {
      term: "Central idea",
      definition:
        "The most important point an informational text makes — the 'so what' of the passage.",
    },
    {
      term: "Supporting detail",
      definition:
        "Facts, examples, or explanations that back up a central idea.",
    },
    {
      term: "Text feature",
      definition:
        "Headings, captions, diagrams, or bold words that organize and highlight information.",
    },
    {
      term: "Objective tone",
      definition:
        "Writing that presents facts without personal opinion or emotion.",
    },
    {
      term: "Summarize",
      definition:
        "Retell the most important points in your own words, briefly.",
    },
    {
      term: "Synthesize",
      definition:
        "Combine information from the whole text to form a complete understanding.",
    },
  ],
  concepts: [
    {
      id: "ela7-u5-infoevidence",
      title: "Citing evidence in informational text",
      skill:
        "Support claims about informational texts with several accurate, relevant quotations.",
      lesson: {
        sections: [
          {
            heading: "Informational text is denser",
            body: "Informational texts pack more facts into fewer words than stories. A single sentence in 'Coral Reefs' contains a statistic, a comparison, and a claim. Because of this density, citing evidence means choosing the **exact** words that prove your point — not just the general topic. If you claim reefs are fragile, 'extremely sensitive to change' is better evidence than 'coral polyps secrete skeletons.'",
          },
          {
            heading: "Several pieces, explained",
            body: "Grade 7 expects **several** pieces of evidence for each claim, each followed by explanation. 'The polyps expel their algae' proves bleaching happens; 'the reef does not die immediately, but it turns white and begins to starve' proves the consequence. Together they show the full mechanism — that is synthesis, not just quotation.",
          },
        ],
        keyFormulas: [
          {
            name: "Choose exact words",
            statement:
              "Pick quotations that directly prove the specific claim, not just the topic.",
          },
          {
            name: "Several + explained",
            statement:
              "Multiple pieces of evidence, each followed by how it supports the claim.",
          },
          {
            name: "Synthesis",
            statement:
              "Combine evidence from different parts of the text to show the full picture.",
          },
        ],
        workedExample: {
          problem:
            "From 'Coral Reefs': What does the text suggest about why coral reefs are vulnerable? Cite two pieces of evidence.",
          solution:
            "Reefs are vulnerable because they depend on a fragile partnership. First, 'the polyps do not live alone: most depend on a partnership with microscopic algae' — the reef's survival depends on another organism. Second, 'When water temperatures rise even a few degrees above normal, the polyps expel their algae' — a small temperature change breaks the partnership, causing bleaching. Together these show that reefs are vulnerable because their survival depends on conditions that are easily disturbed.",
        },
      },
      questions: [
        {
          id: "ela7-u5-infoevidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CORAL,
          stem: "Which detail best supports the claim that coral reefs are 'extremely sensitive to change'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polyps secrete calcium carbonate skeletons." },
              {
                id: "b",
                text: "When water temperatures rise even a few degrees, polyps expel their algae.",
              },
              {
                id: "c",
                text: "Reefs support roughly a quarter of all marine species.",
              },
              {
                id: "d",
                text: "Coral reefs cover less than one percent of the ocean floor.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Choosing evidence",
                statement:
                  "The best evidence directly proves the specific claim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A few degrees of warming causing bleaching directly demonstrates sensitivity to change; the other choices show importance or structure, not sensitivity.",
                evidence:
                  "When water temperatures rise even a few degrees above normal, the polyps expel their algae",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Small temperature changes causing bleaching directly proves sensitivity.",
            commonErrors: [
              "Choosing (c) because it shows reefs are important — importance is not the same as sensitivity.",
            ],
          },
        },
        {
          id: "ela7-u5-infoevidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CORAL,
          stem: "Explain how the relationship between coral polyps and zooxanthellae makes reefs dependent on sunlight.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Explaining relationships",
                statement:
                  "Trace cause-and-effect chains in informational text.",
              },
            ],
            steps: [
              {
                reasoning: "The algae need sunlight to photosynthesize.",
                evidence: "The algae need sunlight to photosynthesize",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "The polyps depend on the algae for food.",
                evidence:
                  "providing the polyp with food in exchange for shelter",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Therefore the polyps depend on sunlight indirectly — no sunlight means no algae food, which means no reef.",
                evidence: "they need clear, warm, shallow water",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Polyps depend on algae for food, algae need sunlight to photosynthesize — so reefs need sunlight indirectly through the partnership.",
            commonErrors: [
              "Saying reefs need sunlight 'because they are plants' — they are animals dependent on algae.",
            ],
          },
        },
        {
          id: "ela7-u5-infoevidence-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MARS,
          stem: "The text says rovers must 'sense, decide, and act locally.' Using at least three pieces of evidence, explain what this means and why it is necessary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis from evidence",
                statement:
                  "Combine multiple pieces of evidence to explain a concept.",
              },
              {
                kind: "skill",
                name: "Cause and effect",
                statement:
                  "Show why the communication delay makes autonomy necessary.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Signals take 4-24 minutes — by the time an instruction arrives, the situation has changed.",
                evidence:
                  "it takes between four and twenty-four minutes for that signal to reach Mars",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Real-time control is impossible — 'the rover may have already driven into trouble' before the command arrives.",
                evidence: "the rover may have already driven into trouble",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Onboard computers handle navigation and hazard avoidance during 'drive' segments.",
                evidence:
                  "the onboard computer takes images, identifies hazards like rocks and sand, and picks a safe path",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The rover must therefore decide and act on its own — 'sense, decide, and act locally' — because waiting for Earth is too slow.",
                evidence: "they must sense, decide, and act locally",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Sense, decide, act locally' means the rover's onboard computer handles navigation and hazards itself, because commands from Earth take 4-24 minutes — too slow for real-time control. The rover identifies hazards, picks safe paths, and collects science data before sending results back at day's end.",
            commonErrors: [
              "Listing evidence without explaining how it connects to the communication delay.",
              "Treating 'autonomy' as a choice rather than a necessity imposed by physics.",
            ],
          },
        },
        {
          id: "ela7-u5-infoevidence-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MARS,
          parts: [
            {
              label: "a",
              prompt:
                "What is the 'communication delay' described in the text?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain two ways rovers compensate for this delay.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Retrieval and explanation",
                statement: "Retrieve facts accurately and explain mechanisms.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The delay is the 4-24 minutes it takes for a signal to travel between Earth and Mars.",
                evidence:
                  "it takes between four and twenty-four minutes for that signal to reach Mars",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Compensation 1: onboard computers navigate and avoid hazards without waiting for commands.",
                evidence:
                  "identifies hazards like rocks and sand, and picks a safe path",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Compensation 2: the rover collects science data on its own schedule and sends everything back at day's end.",
                evidence:
                  "points its instruments at rocks or soil that look interesting",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Both workarounds share the same logic: act locally because Earth is too far away to respond in time.",
                evidence: "they must sense, decide, and act locally",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) The 4-24 minute signal delay between Earth and Mars. (b) Onboard computers handle navigation and hazards autonomously; the rover schedules its own science work and reports back at day's end.",
            commonErrors: [
              "Saying rovers 'drive slower' — the compensation is autonomy, not speed.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u5-infotext",
      title: "Analyzing text structure and interactions",
      skill:
        "Explain how ideas, events, and individuals interact across an informational text.",
      lesson: {
        sections: [
          {
            heading: "How ideas connect",
            body: "Informational texts are not lists of facts — they show **interactions**: cause and effect, problem and solution, comparison and contrast. In 'Coral Reefs,' the algae-polyps partnership is not just a fact; it explains why reefs need sunlight and why bleaching is dangerous. In 'Mars Rover,' the communication delay is the problem that explains why autonomy is necessary. Ask: how does each part of the text relate to the others?",
          },
          {
            heading: "Text structure signals",
            body: "Authors signal structure through word choice: 'however' signals contrast, 'therefore' signals cause-effect, 'first... second... finally' signals sequence. Headings and transitions tell you where one idea ends and another begins. Tracking these signals helps you see how the author's argument is built — which parts support which claims.",
          },
        ],
        keyFormulas: [
          {
            name: "Interaction types",
            statement:
              "Cause-effect, problem-solution, comparison — ideas in informational text are connected, not isolated.",
          },
          {
            name: "Transition signals",
            statement:
              "'However' = contrast; 'therefore' = result; 'first' = sequence.",
          },
          {
            name: "Structure serves argument",
            statement:
              "The order and connections of ideas show how the author builds their point.",
          },
        ],
        workedExample: {
          problem:
            "In 'Mars Rover,' how do the 'drive' and 'science' segments interact?",
          solution:
            "They are sequential parts of the same daily cycle: the rover drives first (navigating autonomously), then conducts science (pointing instruments at targets), then reports back. The drive segment gathers navigation data; the science segment uses that positioning. They interact because the drive's safe path determines where the rover can do science — the structure mirrors the rover's actual workflow.",
        },
      },
      questions: [
        {
          id: "ela7-u5-infotext-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CORAL,
          stem: "Which statement best describes how the zooxanthellae and polyps interact?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The polyps produce the algae" },
              { id: "b", text: "The algae eat the polyps" },
              { id: "c", text: "They compete for sunlight" },
              {
                id: "d",
                text: "They have a partnership: algae provide food, polyps provide shelter",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identifying interactions",
                statement:
                  "Recognize mutual relationships in informational text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The text describes a partnership — algae photosynthesize for food, polyps provide shelter and nutrients.",
                evidence:
                  "providing the polyp with food in exchange for shelter and nutrients",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. It is a mutual partnership, not competition or predation.",
            commonErrors: [
              "Reading 'in exchange for' as one-sided — it is mutual benefit.",
            ],
          },
        },
        {
          id: "ela7-u5-infotext-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MARS,
          stem: "Explain how the communication delay causes the need for rover autonomy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cause and effect",
                statement: "Trace how one problem creates another requirement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The delay means commands arrive too late to be useful.",
                evidence: "it takes between four and twenty-four minutes",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Therefore the rover cannot wait for instructions — it must act on its own.",
                evidence: "the rover may have already driven into trouble",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "This is why onboard computers handle navigation and science autonomously.",
                evidence: "they must sense, decide, and act locally",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The 4-24 minute delay makes real-time control impossible, so the rover must sense, decide, and act locally with onboard computers.",
            commonErrors: [
              "Describing the delay and autonomy separately without linking them causally.",
            ],
          },
        },
        {
          id: "ela7-u5-infotext-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: CORAL,
          stem: "The text describes bleaching as a process with stages. Trace the causal chain from rising water temperature to reef decline, citing evidence at each stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Causal chain analysis",
                statement:
                  "Trace cause-and-effect through multiple steps with evidence.",
              },
              {
                kind: "skill",
                name: "Synthesis",
                statement:
                  "Connect evidence across the whole passage to show the full mechanism.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Stage 1: water temperatures rise above normal — 'even a few degrees above normal'.",
                evidence:
                  "When water temperatures rise even a few degrees above normal",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Stage 2: polyps expel their zooxanthellae — 'the polyps expel their algae in a process called bleaching'.",
                evidence: "the polyps expel their algae",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Stage 3: without algae, polyps lose their food source and begin to starve — 'it turns white and begins to starve'.",
                evidence: "it turns white and begins to starve",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Stage 4: the reef declines because its foundation organisms are dying — the partnership that built the reef collapses.",
                evidence: "the reef does not die immediately",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Rising temperatures → polyps expel algae (bleaching) → polyps lose food and starve → reef declines. Each stage is caused by the previous one, forming a chain from a small temperature change to ecosystem collapse.",
            commonErrors: [
              "Stopping at 'bleaching' without following through to starvation and reef decline.",
            ],
          },
        },
        {
          id: "ela7-u5-infotext-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MARS,
          parts: [
            {
              label: "a",
              prompt:
                "Name the two types of 'segments' a rover's day is divided into.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Explain how these segments interact to produce a complete work cycle.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure and interaction",
                statement: "Show how parts of a system work together.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Drive' segments (navigation) and 'science' segments (data collection).",
                evidence:
                  "During a 'drive' segment... During a 'science' segment",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Drive segments position the rover safely; science segments use that position to collect data — they are sequential and dependent.",
                evidence:
                  "the onboard computer takes images, identifies hazards",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "At day's end everything is transmitted to Earth, closing the loop and informing the next day's plan.",
                evidence:
                  "Only at the end of the day does it send everything back to Earth",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The interaction mirrors a workflow: move safely, gather data, report back — each stage feeds the next.",
                evidence: "decide what to explore next",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Drive and science segments. (b) Drive positions the rover safely, science collects data from that position, and the day's results go to Earth to plan the next cycle — a dependent sequence.",
            commonErrors: [
              "Listing the segments without explaining their dependency.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u5-vocab",
      title: "Vocabulary in informational text",
      skill:
        "Determine the meaning of words and phrases as used in informational texts, including technical terms and connotations.",
      lesson: {
        sections: [
          {
            heading: "Context clues in dense text",
            body: "Informational texts use **technical vocabulary** — words with precise scientific meanings. 'Secrete' means to produce and release; 'photosynthesize' means to convert light into food; 'autonomy' means self-governance. These words are usually defined by context: the sentence around 'zooxanthellae' explains they are 'microscopic algae.' When context fails, use word parts — 'photo' (light) + 'synthesize' (make) = make with light.",
          },
          {
            heading: "Connotation matters",
            body: "The same idea can be described with positive or negative connotations. 'The rover is patient and careful' sounds admiring; 'the rover is slow and stubborn' sounds critical — same facts, different attitude. Grade 7 readers notice these shades because informational texts often argue a position through word choice, not just facts.",
          },
        ],
        keyFormulas: [
          {
            name: "Context clue types",
            statement:
              "Definition, example, contrast, and word-part clues all help decode technical terms.",
          },
          {
            name: "Connotation",
            statement:
              "The feeling a word carries beyond its dictionary meaning — 'frugal' vs 'stingy'.",
          },
          {
            name: "Technical vocabulary",
            statement:
              "Precise terms like 'secrete' and 'autonomy' carry specific meanings in context.",
          },
        ],
        workedExample: {
          problem:
            "In 'Mars Rover,' what does 'autonomy' mean, and how does context reveal it?",
          solution:
            "Autonomy means the ability to act independently. The context reveals it through 'the rover carries its own brains' and 'they must sense, decide, and act locally' — the rover makes its own decisions without real-time human control. The word is technical but the surrounding sentences define it clearly.",
        },
      },
      questions: [
        {
          id: "ela7-u5-vocab-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CORAL,
          stem: "In the text, what does 'secrete' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To reproduce rapidly" },
              { id: "b", text: "To dissolve in water" },
              { id: "c", text: "To hide inside the body" },
              { id: "d", text: "To produce and release a substance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context clues",
                statement:
                  "Technical words are defined by surrounding sentences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The text says polyps 'secrete a hard skeleton of calcium carbonate' — they produce and release it outside their bodies.",
                evidence:
                  "Each polyp secretes a hard skeleton of calcium carbonate",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Secrete means to produce and release.",
            commonErrors: [
              "Choosing (d) — the skeleton is structural, not reproductive.",
            ],
          },
        },
        {
          id: "ela7-u5-vocab-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MARS,
          stem: "Explain what 'autonomy' means in the context of the rover text, using evidence from the passage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word meaning in context",
                statement:
                  "Technical terms take meaning from how they are used.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Autonomy means acting independently without direct control.",
                evidence: "they must sense, decide, and act locally",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The rover demonstrates autonomy by navigating and choosing science targets without waiting for Earth commands.",
                evidence:
                  "lets them navigate, avoid hazards, and even choose scientific targets on their own",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The communication delay makes autonomy necessary rather than optional.",
                evidence: "it takes between four and twenty-four minutes",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Autonomy = self-directed action. The rover navigates and picks science targets on its own because Earth commands take too long.",
            commonErrors: [
              "Defining autonomy as 'being alone' — it specifically means self-governance/independent decision-making.",
            ],
          },
        },
        {
          id: "ela7-u5-vocab-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: CORAL,
          stem: "The text calls reefs 'the rainforests of the sea.' Explain the comparison's connotation — what does it suggest about reefs that a neutral description would not?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Connotation analysis",
                statement:
                  "Word choice carries attitude beyond literal meaning.",
              },
              {
                kind: "skill",
                name: "Comparison interpretation",
                statement:
                  "Explain what two things share that makes the comparison meaningful.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "The comparison suggests reefs are crowded with life — 'crowded with life' echoes rainforest density.",
                evidence: "crowded with life",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It suggests they are fragile — rainforests are famously sensitive to destruction, implying reefs share that vulnerability.",
                evidence: "extremely sensitive to change",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It suggests they are valuable — rainforests are called 'the lungs of the Earth,' implying reefs have similar ecological importance.",
                evidence: "support roughly a quarter of all marine species",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The connotation is positive and urgent — it makes readers care about reefs the way they care about rainforests.",
                evidence: "Scientists sometimes call reefs",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The comparison suggests reefs are dense with life, fragile, and ecologically precious — borrowing the rainforest's connotations of biodiversity and vulnerability to make readers care.",
            commonErrors: [
              "Saying the comparison is just about location (sea vs land) — the meaningful connotation is about life-density and fragility.",
            ],
          },
        },
        {
          id: "ela7-u5-vocab-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MARS,
          parts: [
            {
              label: "a",
              prompt: "Define 'photosynthesize' using the coral text.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Explain how 'patience' and 'careful' describe the rover's programming.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technical vocabulary",
                statement: "Define terms precisely using context.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Photosynthesize means converting light into food/energy — the algae do it inside the polyp.",
                evidence: "photosynthesize, providing the polyp with food",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Patient' refers to the rover's ability to wait — it does not need real-time control and takes its time.",
                evidence:
                  "engineers design them to be patient, careful, and self-sufficient",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Careful' refers to hazard avoidance — the computer identifies rocks and sand before driving.",
                evidence:
                  "identifies hazards like rocks and sand, and picks a safe path",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "These human-sounding qualities describe programmed behaviors, not feelings — the rover is designed to act cautiously because mistakes are costly.",
                evidence: "sense, decide, and act locally",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Photosynthesize = convert light to food. (b) 'Patient' = waits without real-time input; 'careful' = checks for hazards before moving — programmed traits that keep the rover safe.",
            commonErrors: [
              "Treating 'patient' and 'careful' as literal emotions rather than design goals.",
            ],
          },
        },
      ],
    },
  ],
};
