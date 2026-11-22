import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cieigeo-u5-lesson-5-2",
  code: "5-2",
  title: "Coasts: Processes, Landforms and Management",
  goal: "I CAN explain coastal processes, identify landforms and evaluate coastal management.",
  standards: [
    "Cambridge IGCSE Geography 0460",
    "Unit 5: physical geography depth",
  ],
  vocabulary: [
    { term: "L wave", definition: "Swash moving up beach at angle." },
    { term: "Backwash", definition: "Water returning down beach." },
    {
      term: "Longshore drift",
      definition: "Sediment moved along coast by angled waves.",
    },
    { term: "Cliff", definition: "Steep coastal slope formed by erosion." },
    { term: "Stack", definition: "Isolated pillar of rock offshore." },
    { term: "Groynes", definition: "Wooden barriers trapping beach sediment." },
  ],
  concepts: [
    {
      id: "cieigeo-u5l2-c1-processes",
      title: "Coastal processes and landforms",
      skill: "Explain coastal erosion, deposition and landform development.",
      lesson: {
        sections: [
          {
            heading: "Coastal processes",
            body: "**Erosion**: hydraulic action, abrasion (sand/gravel scrapes), attrition (rocks collide, round), solution (dissolves limestone). **Transportation**: longshore drift moves sediment along coast (swash at angle, backwash straight). **Deposition**: where wave energy drops — bays, sheltered areas; builds beaches, spits, bars.",
          },
          {
            heading: "Landforms",
            body: "Erosional: **headlands** (resistant rock), **caves** (weakness erosion), **arches**, **stacks**, **stumps**, **wave-cut platforms**. Depositional: **beaches**, **spits** (sediment extends into sea), **bars**, **tombolos** (connect island to mainland), **mudflats**.",
          },
        ],
        keyFormulas: [
          { name: "Longshore drift", statement: "Sediment along coast" },
          { name: "Stack", statement: "Eroded pillar" },
          { name: "Spit", statement: "Deposited extension" },
        ],
        workedExample: {
          problem: "How does a stack form?",
          solution:
            "Headland with weakness → cave erodes through → arch forms → arch collapses → isolated pillar = stack; further erosion → stump; wave-cut platform left behind.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u5l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Longshore drift is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tides rising" },
              { id: "b", text: "Rocks falling" },
              { id: "c", text: "Sediment moved along coast by angled waves" },
              { id: "d", text: "Water moving up beach" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Drift",
                statement: "Alongshore transport.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sediment along coast",
            commonErrors: ["Swash."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two coastal erosional landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Erosional", statement: "Cliffs+stacks." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. stack (isolated pillar offshore) and wave-cut platform (flat rock platform at cliff base) — also arches, headlands, stumps.",
            commonErrors: ["Depositional."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a spit forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spit", statement: "Deposition." },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Longshore drift carries sediment past a bend/headland — where coast curves, energy drops, sediment deposits forming narrow ridge extending into sea; may enclose lagoon.",
            commonErrors: ["Erosion."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the sequence of landform development from headland to stack.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coastal sequence",
                statement: "Erosion stages.",
              },
            ],
            steps: [
              { reasoning: "Cave.", marks: 1, markCode: "M" },
              { reasoning: "Arch.", marks: 1, markCode: "M" },
              { reasoning: "Stack+stump.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Headland erodes → cave forms in weakness → cave erodes through → arch → arch collapses → stack remains → stack erodes → stump → eventually wave-cut platform.",
            commonErrors: ["Random order."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the impact of groynes on coastal management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Groynes",
                statement: "Benefits+drawbacks.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Drawbacks.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Trap sediment, widen beach, protect cliffs — but starve down-drift beaches causing erosion elsewhere, visual impact, maintenance costs; effective locally but shifts problem along coast.",
            commonErrors: ["Perfect solution."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'swash' and 'backwash'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Swash/backwash",
                statement: "Wave movement.",
              },
            ],
            steps: [
              { reasoning: "Swash.", marks: 1, markCode: "M" },
              { reasoning: "Backwash.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Swash: wave water rushing up beach at angle (moves sediment onshore). Backwash: water draining back down beach (straighter path); together create longshore drift.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'tombolo' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A wave barrier" },
              { id: "b", text: "A tide type" },
              { id: "c", text: "A cliff type" },
              { id: "d", text: "A ridge connecting island to mainland" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Tombolo", statement: "Connecting ridge." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Connecting ridge",
            commonErrors: ["Other landform."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two depositional coastal landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Depositional",
                statement: "Beaches+spits.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. beach (accumulated sediment where energy drops) and spit (narrow ridge extending into sea) — also bars, tombolos, mudflats.",
            commonErrors: ["Erosional."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why deposition dominates in bays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bay deposition",
                statement: "Sheltered.",
              },
            ],
            steps: [
              { reasoning: "Reason.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Bays are sheltered — waves lose energy entering, can't carry sediment; deposition occurs building beaches, spits, mudflats; contrast with exposed headlands where erosion dominates.",
            commonErrors: ["More energy."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the relationship between wave energy and coastal landforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy-landform",
                statement: "Erosion vs deposition.",
              },
            ],
            steps: [
              { reasoning: "High energy.", marks: 1, markCode: "M" },
              { reasoning: "Low energy.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "High energy (headlands, exposed coasts) → erosion → cliffs, stacks, platforms. Low energy (bays, sheltered) → deposition → beaches, spits, mudflats; wave energy distribution determines landform sequence along coast.",
            commonErrors: ["Same everywhere."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Hydraulic action' is the process by which:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cliffs collapse instantly" },
              { id: "b", text: "Beaches are widened" },
              { id: "c", text: "Air in cracks is compressed and water forced into rock" },
              { id: "d", text: "Sediment is carried along the coast" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydraulic action",
                statement: "Wave pressure erosion.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Air compressed, water forced into rock",
            commonErrors: ["Abrasion."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two processes of coastal erosion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coastal erosion",
                statement: "Four mechanisms.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. abrasion (sand/gravel scrapes rock surface) and attrition (rocks collide, round and break) — also hydraulic action, solution (dissolves limestone).",
            commonErrors: ["Deposition."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how longshore drift transports sediment along a coast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Longshore drift",
                statement: "Angled wave transport.",
              },
            ],
            steps: [
              { reasoning: "Swash angle.", marks: 1, markCode: "M" },
              { reasoning: "Backwash path.", marks: 1, markCode: "M" },
              { reasoning: "Net result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Waves approach at an angle — swash carries sediment diagonally up the beach; backwash returns more steeply/perpendicular; repeated cycles produce net sideways transport of sediment along the coast.",
            commonErrors: ["Straight onshore."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a wave-cut platform forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wave-cut platform",
                statement: "Erosional remnant.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Waves erode cliff base through hydraulic action and abrasion — notch forms, cliff face collapses; repeated collapse leaves flat, wave-smoothed rock platform exposed at low tide.",
            commonErrors: ["Depositional beach."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how geology influences the development of headlands and bays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Geology and coasts",
                statement: "Resistance controls erosion.",
              },
            ],
            steps: [
              { reasoning: "Resistant rock.", marks: 1, markCode: "M" },
              { reasoning: "Weak rock.", marks: 1, markCode: "M" },
              { reasoning: "Process interaction.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hard/resistant rock erodes slowly → headlands project seaward, exposed to high wave energy; weak rock erodes quickly → bays form, sheltered; longshore drift then transports eroded sediment into bays where deposition builds beaches — geology sets the template, processes develop the landforms.",
            commonErrors: ["Random pattern."],
          },
        },
        {
          id: "cieigeo-q-u5l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the statement that coastal landforms record the balance between erosion and deposition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Erosion-deposition balance",
                statement: "Energy determines landform.",
              },
            ],
            steps: [
              { reasoning: "Erosion record.", marks: 1, markCode: "M" },
              { reasoning: "Deposition record.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "True — erosional landforms (cliffs, stacks, platforms) mark high-energy zones; depositional landforms (beaches, spits, tombolos) mark low-energy/sheltered zones; the coastline pattern literally records where energy exceeded sediment supply and vice versa, though human management can alter the record.",
            commonErrors: ["No connection."],
          },
        },
      ],
    },
    {
      id: "cieigeo-u5l2-c2-management",
      title: "Coastal management strategies",
      skill: "Evaluate hard and soft engineering coastal defences.",
      lesson: {
        sections: [
          {
            heading: "Hard engineering",
            body: "**Sea walls**: concrete barriers reflecting waves — expensive, can increase erosion at base. **Groynes**: trap beach sediment, protect cliffs — starve down-drift beaches. **Rock armour**: boulders absorb wave energy — cheaper, natural-looking but limited lifespan. **Revetments**: sloping barriers. Effective immediate protection but costly, may shift erosion.",
          },
          {
            heading: "Soft engineering and managed retreat",
            body: "**Beach nourishment**: add sand to beaches — natural but needs replenishing. **Dune regeneration**: plant marram grass stabilising dunes — natural buffer. **Managed realignment**: allow sea to flood low-value land, create salt marsh — sustainable but controversial (loses land). Soft approaches cheaper, sustainable but less absolute protection.",
          },
        ],
        keyFormulas: [
          { name: "Sea wall", statement: "Reflects waves" },
          { name: "Groynes", statement: "Trap sediment" },
          { name: "Managed retreat", statement: "Allow flooding" },
        ],
        workedExample: {
          problem: "Why might managed retreat be controversial?",
          solution:
            "Sacrifices land/homes to create salt marsh — sustainable long-term but loses property, requires compensation, political difficulty; works only where low-value land available.",
        },
      },
      questions: [
        {
          id: "cieigeo-q-u5l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Groynes are used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Block waves completely" },
              { id: "b", text: "Create islands" },
              { id: "c", text: "Raise sea level" },
              { id: "d", text: "Trap beach sediment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Groynes", statement: "Sediment trap." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Trap sediment",
            commonErrors: ["Block waves."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two examples of 'soft engineering' coastal management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Soft eng", statement: "Natural." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. beach nourishment (adding sand) and dune regeneration (planting grass to stabilise dunes) — also managed realignment.",
            commonErrors: ["Sea walls."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two disadvantages of sea walls.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Sea wall limits",
                statement: "Cost+erosion.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. very expensive to build/maintain, and reflecting waves can increase erosion at wall base and scour beach — also visual impact, limited lifespan.",
            commonErrors: ["No disadvantages."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate 'managed realignment' as coastal management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Realignment",
                statement: "Sacrifice land.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Drawbacks.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Creates salt marsh buffer absorbing wave energy — sustainable, cheaper long-term; but sacrifices land/homes, requires compensation, political difficulty; only viable where low-value land exists.",
            commonErrors: ["Always best."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why coastal management is a 'wicked problem'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wicked problem",
                statement: "No easy fix.",
              },
            ],
            steps: [
              { reasoning: "Competing interests.", marks: 1, markCode: "M" },
              { reasoning: "Uncertainty.", marks: 1, markCode: "M" },
              { reasoning: "Trade-offs.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Protect one area → erode another (groynes); preserve environment vs protect property; costs vs benefits; no perfect solution — requires balancing competing stakeholder needs, ongoing adaptation.",
            commonErrors: ["Simple fix."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'beach nourishment'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nourishment",
                statement: "Add sand.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Adding sand/gravel to beach to widen it — absorbs wave energy, protects cliffs behind; natural-looking but needs periodic replenishment, source material issues.",
            commonErrors: ["Sea wall."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is 'hard engineering' coastal defence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dune regeneration" },
              { id: "b", text: "Beach nourishment" },
              { id: "c", text: "Managed retreat" },
              { id: "d", text: "Sea wall" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Hard eng", statement: "Structures." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sea wall",
            commonErrors: ["Soft eng."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of soft engineering over hard engineering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Soft eng adv", statement: "Sustainable." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. lower cost (no massive structures) and more sustainable (works with natural processes) — also better for biodiversity, less visual impact; but less absolute protection.",
            commonErrors: ["Hard eng better always."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why groynes can cause problems down-drift.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Groynes drawback",
                statement: "Starvation.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Groynes trap sediment up-drift — less sediment reaches down-drift beaches; erosion accelerates there, beaches shrink, cliffs exposed; problem shifted not solved.",
            commonErrors: ["No problem."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of 'rock armour' as coastal defence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rock armour",
                statement: "Natural materials.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Boulders absorb/dissipate wave energy — cheaper than concrete, natural appearance, flexible; but limited lifespan (rocks shift, need replacement), may not withstand extreme storms; good mid-cost option.",
            commonErrors: ["Perfect."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Beach nourishment' involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building a concrete wall" },
              { id: "b", text: "Adding sand to widen the beach" },
              { id: "c", text: "Removing the cliff" },
              { id: "d", text: "Blocking all waves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nourishment",
                statement: "Sediment addition.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Adding sand",
            commonErrors: ["Hard structure."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two examples of 'hard engineering' coastal defences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Hard engineering",
                statement: "Structural defences.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. sea wall (concrete barrier reflecting waves) and rock armour (boulder pile absorbing energy) — also groynes, revetments.",
            commonErrors: ["Soft engineering."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how dune regeneration protects the coast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dune regeneration",
                statement: "Vegetation buffer.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Marram grass is planted — roots bind dune sand, stabilising the dune; dunes act as natural buffer absorbing wave energy and trapping wind-blown sand; cheap, self-sustaining once established.",
            commonErrors: ["Hard structure."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two limitations of beach nourishment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Nourishment limits",
                statement: "Maintenance needed.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. added sand is gradually washed away so must be repeatedly replenished (ongoing cost), and suitable sand source may be limited or expensive to transport — also storms can strip nourished beach quickly.",
            commonErrors: ["Permanent fix."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the cost-effectiveness of hard versus soft coastal engineering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Hard vs soft",
                statement: "Cost-benefit trade-off.",
              },
            ],
            steps: [
              { reasoning: "Hard costs.", marks: 1, markCode: "M" },
              { reasoning: "Soft benefits.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hard engineering gives immediate, strong protection but huge build/maintenance costs and may worsen erosion elsewhere; soft engineering is cheaper and sustainable but offers less absolute protection and needs ongoing management — best choice depends on exposure value and timescale.",
            commonErrors: ["One always better."],
          },
        },
        {
          id: "cieigeo-q-u5l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the factors that determine which coastal management strategy is chosen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strategy choice",
                statement: "Context-dependent.",
              },
            ],
            steps: [
              { reasoning: "Physical factors.", marks: 1, markCode: "M" },
              { reasoning: "Human factors.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Physical: wave energy, erosion rate, sediment supply, land availability. Human: value of property/infrastructure at risk, cost and funding, public opinion, environmental priorities, timescale of protection needed — no single strategy fits all coasts.",
            commonErrors: ["Same everywhere."],
          },
        },
      ],
    },
  ],
};
