import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ess9-u8-lesson-8-2",
  code: "8-2",
  title: "Earthquakes and Measurement",
  goal: "I CAN describe earthquake causes, waves, and measurement scales.",
  standards: [
    "HS-ESS2-3",
    "HS-ESS3-2",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Using Mathematics and Computational Thinking",
  ],
  vocabulary: [
    {
      term: "Fault",
      definition: "Fracture in Earth's crust where movement occurs.",
    },
    {
      term: "Focus",
      definition: "Point underground where earthquake originates.",
    },
    { term: "Epicenter", definition: "Point on surface above the focus." },
    {
      term: "Seismic waves",
      definition: "Energy waves from earthquakes: P, S, surface.",
    },
    { term: "Richter scale", definition: "Measures earthquake magnitude." },
    { term: "Moment magnitude", definition: "More accurate magnitude scale." },
    { term: "Seismograph", definition: "Instrument recording seismic waves." },
  ],
  concepts: [
    {
      id: "ess9-u8-quakes",
      title: "Earthquake causes and waves",
      skill: "Describe earthquake causes and seismic wave types.",
      lesson: {
        sections: [
          {
            heading: "Causes",
            body: "- Plate boundary movement → stress accumulation.\n- Fault slip releases stored energy.\n- Most earthquakes at convergent/divergent boundaries.",
          },
          {
            heading: "Seismic waves",
            body: "- **P waves**: primary, fastest, compressional.\n- **S waves**: secondary, slower, shear.\n- **Surface waves**: most destructive, slowest.",
          },
        ],
        keyFormulas: [
          { name: "P waves", statement: "Fastest, compressional" },
          { name: "S waves", statement: "Slower, shear" },
          { name: "Surface", statement: "Most destructive" },
        ],
        workedExample: {
          problem: "Which wave arrives first?",
          solution: "P waves — fastest.",
        },
      },
      questions: [
        {
          id: "ess9-u8-quakes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which seismic wave arrives first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "S waves" },
              { id: "b", text: "P waves" },
              { id: "c", text: "Surface waves" },
              { id: "d", text: "Love waves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "P waves", statement: "Fastest." },
            ],
            steps: [
              { reasoning: "P waves arrive first.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** P waves",
            commonErrors: ["S waves."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-quakes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What's the difference between focus and epicenter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Focus vs epicenter",
                statement: "Underground vs surface.",
              },
            ],
            steps: [
              {
                reasoning: "Focus: underground origin point.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Epicenter: surface point above focus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Focus = underground; epicenter = surface above.",
            commonErrors: ["Same."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u8-quakes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are surface waves most destructive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Surface waves",
                statement: "Most damage.",
              },
            ],
            steps: [
              {
                reasoning: "Travel along surface → buildings shake.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Larger amplitude than body waves.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Cause ground shaking/rupture.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: surface proximity + amplitude.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Surface waves shake ground → most destructive.",
            commonErrors: ["Fastest."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u8-quakes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the three types of seismic waves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Waves", statement: "Three types." },
            ],
            steps: [
              {
                reasoning: "P waves: primary, compressional, fastest.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "S waves: secondary, shear, slower.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Surface waves: most destructive.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: P, S, surface waves.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "P (compressional), S (shear), surface (destructive).",
            commonErrors: ["One type."],
            examinerNote: "B2 for each wave type.",
          },
        },
      ],
    },
    {
      id: "ess9-u8-scales",
      title: "Measuring earthquakes",
      skill: "Compare earthquake magnitude and intensity scales.",
      lesson: {
        sections: [
          {
            heading: "Magnitude vs intensity",
            body: "- **Magnitude**: energy released at source (Richter/MM).\n- **Intensity**: shaking felt at location (Modified Mercalli).\n- Magnitude: one value per quake; intensity: varies by location.",
          },
          {
            heading: "Scales",
            body: "- **Richter**: logarithmic, each +1 = 10x amplitude.\n- **Moment magnitude**: more accurate for large quakes.\n- **Mercalli**: Roman numerals I-XII, based on effects.",
          },
        ],
        keyFormulas: [
          { name: "Magnitude", statement: "Energy released" },
          { name: "Intensity", statement: "Shaking felt" },
          { name: "Logarithmic", statement: "+1 = 10x amplitude" },
        ],
        workedExample: {
          problem: "What's the difference between magnitude and intensity?",
          solution: "Magnitude = energy at source; intensity = shaking felt.",
        },
      },
      questions: [
        {
          id: "ess9-u8-scales-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does earthquake magnitude measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shaking felt" },
              { id: "b", text: "Energy released" },
              { id: "c", text: "Damage amount" },
              { id: "d", text: "Duration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Magnitude",
                statement: "Energy released.",
              },
            ],
            steps: [
              { reasoning: "Magnitude = energy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Energy released",
            commonErrors: ["Shaking felt."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-scales-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What's the difference between magnitude and intensity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Magnitude vs intensity",
                statement: "Source vs location.",
              },
            ],
            steps: [
              {
                reasoning: "Magnitude: energy at source (one value).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Intensity: shaking felt (varies by location).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Magnitude = energy; intensity = shaking felt.",
            commonErrors: ["Same."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u8-scales-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is the Richter scale logarithmic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Richter",
                statement: "Logarithmic scale.",
              },
            ],
            steps: [
              {
                reasoning: "Each +1 = 10x amplitude.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Energy release increases ~32x per magnitude.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Accommodates huge energy range.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: logarithmic for wide range.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Logarithmic → handles huge energy range.",
            commonErrors: ["Linear."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u8-scales-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare magnitude and intensity scales.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Scales",
                statement: "Different measures.",
              },
            ],
            steps: [
              {
                reasoning: "Magnitude: energy released at source.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Intensity: shaking felt at location.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: source vs location measure.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Magnitude = energy; intensity = shaking.",
            commonErrors: ["Same."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u8-monitoring",
      title: "Earthquake monitoring and prediction",
      skill: "Describe how earthquakes are monitored and predicted.",
      lesson: {
        sections: [
          {
            heading: "Monitoring",
            body: "- **Seismographs**: record ground motion.\n- **Seismic networks**: global monitoring stations.\n- **GPS**: measure ground deformation.\n- **Early warning**: seconds of advance notice possible.",
          },
          {
            heading: "Prediction limits",
            body: "Cannot predict exact time/place.\nCan identify risk zones based on:\n- Historical earthquakes.\n- Fault activity.\n- Plate boundaries.",
          },
        ],
        keyFormulas: [
          { name: "Seismograph", statement: "Records ground motion" },
          { name: "Networks", statement: "Global monitoring" },
          { name: "Prediction", statement: "Risk zones, not exact" },
        ],
        workedExample: {
          problem: "Can earthquakes be predicted exactly?",
          solution: "No — but risk zones can be identified.",
        },
      },
      questions: [
        {
          id: "ess9-u8-monitor-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What instrument records earthquakes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Barometer" },
              { id: "b", text: "Seismograph" },
              { id: "c", text: "Thermometer" },
              { id: "d", text: "Anemometer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Seismograph",
                statement: "Records seismic waves.",
              },
            ],
            steps: [
              {
                reasoning: "Seismograph records earthquakes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Seismograph",
            commonErrors: ["Barometer."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-monitor-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Can earthquakes be predicted exactly?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Prediction",
                statement: "Risk zones only.",
              },
            ],
            steps: [
              {
                reasoning: "No exact prediction; risk zones possible.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "No — but risk zones identified.",
            commonErrors: ["Exact prediction."],
            examinerNote: "A1 for answer.",
          },
        },
        {
          id: "ess9-u8-monitor-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does earthquake early warning work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Early warning",
                statement: "Seconds of notice.",
              },
            ],
            steps: [
              { reasoning: "Detect P waves first.", marks: 1, markCode: "R" },
              {
                reasoning: "Alert before S waves arrive.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Seconds of advance notice.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: P-S wave time gap.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "P waves detected → alert before S waves.",
            commonErrors: ["Days notice."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u8-monitor-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe earthquake monitoring methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Monitoring",
                statement: "Multiple methods.",
              },
            ],
            steps: [
              {
                reasoning: "Seismographs: record waves.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "GPS: ground deformation.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Seismic networks: global coverage.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: multiple monitoring tools.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Seismographs, GPS, networks.",
            commonErrors: ["One method."],
            examinerNote: "B2 for each method.",
          },
        },
      ],
    },
  ],
};
