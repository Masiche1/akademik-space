import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "s7-u9-lesson-9-1",
  code: "9-1",
  title: "Rocks and Minerals",
  goal: "I CAN describe the three rock types, explain the rock cycle, and identify minerals by their properties.",
  standards: [
    "MS-ESS2-1",
    "MS-ESS2-2",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Mineral",
      definition:
        "A naturally occurring, inorganic solid with a definite chemical composition and crystal structure.",
    },
    {
      term: "Rock",
      definition: "A solid aggregate of one or more minerals or mineraloids.",
    },
    {
      term: "Igneous rock",
      definition: "Rock formed from cooled and solidified magma or lava.",
    },
    {
      term: "Sedimentary rock",
      definition:
        "Rock formed from accumulated sediments, compacted and cemented.",
    },
    {
      term: "Metamorphic rock",
      definition: "Rock changed by heat and pressure without melting.",
    },
    {
      term: "Rock cycle",
      definition:
        "The continuous process of rock formation and transformation.",
    },
    {
      term: "Luster",
      definition:
        "How a mineral reflects light: metallic, glassy, pearly, dull.",
    },
  ],
  concepts: [
    {
      id: "s7-u9-rock-types",
      title: "The three rock types",
      skill:
        "Describe igneous, sedimentary and metamorphic rocks and how they form.",
      lesson: {
        sections: [
          {
            heading: "Igneous rocks",
            body: "**Igneous rocks** form when molten rock (magma or lava) cools and solidifies.\n\n- **Intrusive** (plutonic): forms underground from slow-cooling magma → large crystals (e.g., granite, gabbro).\n- **Extrusive** (volcanic): forms from lava on the surface → small crystals or glassy texture (e.g., basalt, obsidian, pumice).\n\nCooling rate determines crystal size: slow cooling = large crystals; fast cooling = small crystals or glass.",
          },
          {
            heading: "Sedimentary and metamorphic rocks",
            body: "**Sedimentary rocks** form from accumulated sediments (sand, mud, shells, organic matter) that are compacted and cemented over time. Examples: sandstone, limestone, shale, conglomerate. Often contain fossils.\n\n**Metamorphic rocks** form when existing rocks are changed by heat and pressure (without melting). Examples: marble (from limestone), slate (from shale), gneiss (from granite).",
          },
        ],
        keyFormulas: [
          {
            name: "Igneous",
            statement:
              "Cooled magma/lava; intrusive = large crystals, extrusive = small/glassy.",
          },
          {
            name: "Sedimentary",
            statement: "Compacted/cemented sediments; often contains fossils.",
          },
          {
            name: "Metamorphic",
            statement: "Changed by heat and pressure; no melting.",
          },
        ],
        workedExample: {
          problem: "Classify: granite, sandstone, marble.",
          solution:
            "Granite = igneous (intrusive); sandstone = sedimentary; marble = metamorphic (from limestone).",
        },
      },
      questions: [
        {
          id: "s7-u9-rocks-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rock forms from cooled lava?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sandstone" },
              { id: "b", text: "Basalt" },
              { id: "c", text: "Marble" },
              { id: "d", text: "Shale" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Igneous rock",
                statement: "Forms from cooled magma or lava.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Basalt is an extrusive igneous rock formed from cooled lava.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Basalt.",
            commonErrors: ["Choosing (a): sandstone is sedimentary."],
          },
        },
        {
          id: "s7-u9-rocks-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how sedimentary rocks form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sedimentary rock",
                statement: "Formed from compacted and cemented sediments.",
              },
            ],
            steps: [
              {
                reasoning: "Weathering and erosion break rocks into sediments.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Sediments are transported and deposited in layers.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Over time, pressure compacts them and minerals cement them into rock.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Weathering → deposition → compaction and cementation → sedimentary rock.",
            commonErrors: ["Saying sedimentary rocks form from magma."],
          },
        },
        {
          id: "s7-u9-rocks-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between intrusive and extrusive igneous rocks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Igneous types",
                statement:
                  "Intrusive = underground, slow cooling, large crystals. Extrusive = surface, fast cooling, small crystals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intrusive forms underground from magma cooling slowly.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Slow cooling allows large crystals to form.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Extrusive forms from lava on surface, cooling quickly.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Fast cooling produces small crystals or glassy texture.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Intrusive = slow cooling, large crystals. Extrusive = fast cooling, small/glassy.",
            commonErrors: ["Reversing the two types."],
          },
        },
        {
          id: "s7-u9-rocks-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A geologist finds a rock with large interlocking crystals of quartz and feldspar.",
          parts: [
            {
              label: "a",
              prompt: "What rock type is this most likely?",
              marks: 2,
            },
            { label: "b", prompt: "Explain how it formed.", marks: 2 },
            { label: "c", prompt: "Why are the crystals large?", marks: 2 },
            {
              label: "d",
              prompt: "How could this rock change to another type?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Igneous rocks",
                statement: "Large crystals = slow cooling = intrusive igneous.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Igneous rock — likely granite.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Formed from magma cooling slowly underground.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Slow cooling allowed atoms time to arrange into large crystals.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Heat/pressure could make it metamorphic (gneiss); weathering/erosion → sediments → sedimentary.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Igneous/granite (b) Slow-cooling magma (c) Large crystals from slow cooling (d) Metamorphic or sedimentary.",
            commonErrors: ["Saying it's sedimentary because of crystals."],
          },
        },
      ],
    },
    {
      id: "s7-u9-rock-cycle",
      title: "The Rock Cycle",
      skill:
        "Explain how rocks transform between igneous, sedimentary and metamorphic types.",
      lesson: {
        sections: [
          {
            heading: "The continuous cycle",
            body: "The **rock cycle** describes how rocks transform:\n\n- **Igneous** → weathering/erosion → sediments → **sedimentary**\n- **Any rock** → heat/pressure → **metamorphic**\n- **Any rock** → melting → magma → **igneous**\n- **Sedimentary** → heat/pressure → **metamorphic**\n- **Metamorphic** → melting → magma → **igneous**\n\nRocks can change multiple times; the cycle has no beginning or end.",
          },
          {
            heading: "Processes driving the cycle",
            body: "- **Weathering and erosion**: breaks rocks into sediments.\n- **Compaction and cementation**: forms sedimentary rocks.\n- **Heat and pressure**: forms metamorphic rocks.\n- **Melting**: forms magma, which cools into igneous rocks.",
          },
        ],
        keyFormulas: [
          {
            name: "Rock cycle",
            statement:
              "Igneous → sedimentary → metamorphic → igneous (continuous).",
          },
          {
            name: "Weathering/erosion",
            statement: "Breaks rocks into sediments.",
          },
          {
            name: "Heat/pressure",
            statement: "Forms metamorphic rocks; melting forms magma.",
          },
        ],
        workedExample: {
          problem:
            "Trace the path of a rock from igneous to sedimentary to metamorphic.",
          solution:
            "Igneous rock → weathering/erosion → sediments → compaction/cementation → sedimentary rock → heat/pressure → metamorphic rock.",
        },
      },
      questions: [
        {
          id: "s7-u9-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What process turns sediments into sedimentary rock?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Melting" },
              { id: "b", text: "Compaction and cementation" },
              { id: "c", text: "Heat and pressure" },
              { id: "d", text: "Cooling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sedimentary formation",
                statement: "Compaction and cementation of sediments.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sediments are compacted and cemented together to form sedimentary rock.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Compaction and cementation.",
            commonErrors: [
              "Choosing (a): melting forms magma, not sedimentary rock.",
            ],
          },
        },
        {
          id: "s7-u9-cycle-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two processes that can transform one rock type into another.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rock cycle processes",
                statement:
                  "Weathering/erosion, compaction/cementation, heat/pressure, melting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weathering and erosion break rocks into sediments (→ sedimentary).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Heat and pressure transform rocks into metamorphic.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Melting transforms any rock into magma (→ igneous).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Weathering/erosion, heat/pressure, melting — all transform rock types.",
            commonErrors: ["Listing only one process."],
          },
        },
        {
          id: "s7-u9-cycle-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the rock cycle is called a 'cycle'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rock cycle",
                statement:
                  "Continuous transformation with no beginning or end.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rocks transform from one type to another continuously.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Any rock type can become any other type through various processes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "There is no beginning or end — rocks cycle indefinitely.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The same material is reused and transformed over geological time.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Rocks continuously transform between types with no start or end.",
            commonErrors: ["Saying rocks go through the cycle only once."],
          },
        },
        {
          id: "s7-u9-cycle-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A piece of limestone is found in a mountain range.",
          parts: [
            { label: "a", prompt: "What type of rock is limestone?", marks: 2 },
            { label: "b", prompt: "How might it have formed?", marks: 2 },
            {
              label: "c",
              prompt:
                "If it's subjected to heat and pressure, what could it become?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "If it's melted and cooled, what could it become?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rock cycle",
                statement:
                  "Limestone = sedimentary; can become metamorphic or igneous.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sedimentary rock — formed from accumulated shells/organisms.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Marine organisms' shells accumulated, compacted and cemented.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Heat/pressure → marble (metamorphic).",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Melting → magma → cooling → igneous rock.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Sedimentary (b) Shells compacted/cemented (c) Marble (d) Igneous rock.",
            commonErrors: ["Saying limestone is igneous."],
          },
        },
      ],
    },
    {
      id: "s7-u9-minerals",
      title: "Minerals and Their Properties",
      skill:
        "Identify minerals by their physical properties and describe their uses.",
      lesson: {
        sections: [
          {
            heading: "Mineral properties",
            body: "Minerals are identified by physical properties:\n\n- **Luster**: metallic, glassy, pearly, dull.\n- **Hardness**: resistance to scratching (Mohs scale 1-10; talc=1, diamond=10).\n- **Color**: can vary; not always reliable.\n- **Streak**: color of powdered mineral on porcelain.\n- **Cleavage**: tendency to break along flat planes.\n- **Specific gravity**: density relative to water.",
          },
          {
            heading: "Important minerals",
            body: "- **Quartz** (SiO2): hard (7), glassy, used in glass and electronics.\n- **Feldspar**: most common mineral in Earth's crust; used in ceramics.\n- **Calcite** (CaCO3): soft (3), fizzes in acid, forms limestone.\n- **Hematite** (Fe2O3): iron ore, reddish streak.\n- **Diamond** (C): hardest (10), used in cutting tools.",
          },
        ],
        keyFormulas: [
          {
            name: "Mineral properties",
            statement:
              "Luster, hardness, color, streak, cleavage, specific gravity.",
          },
          {
            name: "Mohs scale",
            statement: "Hardness 1 (talc) to 10 (diamond).",
          },
          {
            name: "Streak",
            statement:
              "Color of mineral powder; more reliable than surface color.",
          },
        ],
        workedExample: {
          problem:
            "A mineral scratches glass but not quartz. What is its hardness?",
          solution:
            "Between 5.5 and 7 — harder than glass (~5.5) but softer than quartz (7).",
        },
      },
      questions: [
        {
          id: "s7-u9-minerals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the hardest known mineral?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quartz" },
              { id: "b", text: "Corundum" },
              { id: "c", text: "Diamond" },
              { id: "d", text: "Talc" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mohs scale",
                statement: "Diamond = 10, hardest mineral.",
              },
            ],
            steps: [
              {
                reasoning: "Diamond is the hardest mineral (Mohs 10).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Diamond.",
            commonErrors: ["Choosing (a): quartz is 7, not hardest."],
          },
        },
        {
          id: "s7-u9-minerals-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three physical properties used to identify minerals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mineral properties",
                statement: "Luster, hardness, streak, cleavage, color.",
              },
            ],
            steps: [
              {
                reasoning: "Luster: how it reflects light.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Hardness: resistance to scratching (Mohs scale).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Streak: color of powder on porcelain.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Luster, hardness, streak, cleavage, color.",
            commonErrors: ["Listing only one property."],
          },
        },
        {
          id: "s7-u9-minerals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is streak more reliable than color for identifying minerals?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Streak",
                statement:
                  "Streak color is consistent; surface color can vary.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Surface color can vary due to impurities or weathering.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Streak is the color of the powdered mineral, which is consistent.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Example: hematite can be red, brown or black but always has reddish-brown streak.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Therefore, streak is a more reliable identifying property.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Streak is consistent; surface color varies with impurities/weathering.",
            commonErrors: ["Saying color is always reliable."],
          },
        },
        {
          id: "s7-u9-minerals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A mineral has metallic luster, is very hard, and leaves a black streak.",
          parts: [
            {
              label: "a",
              prompt: "What properties help identify it?",
              marks: 2,
            },
            { label: "b", prompt: "Name a possible mineral.", marks: 2 },
            { label: "c", prompt: "What is this mineral used for?", marks: 2 },
            {
              label: "d",
              prompt: "How would you test its hardness?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mineral identification",
                statement: "Properties narrow down possibilities.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Luster, hardness, streak are key identifying properties.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Could be magnetite or another hard metallic mineral with black streak.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Iron ore for steel production.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Scratch test against known hardness minerals (Mohs scale).",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Luster/hardness/streak (b) Magnetite/iron mineral (c) Iron ore (d) Scratch test.",
            commonErrors: ["Saying color alone identifies it."],
          },
        },
      ],
    },
  ],
};
