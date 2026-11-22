import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "theatre-u2-lesson-2-3",
  code: "2-3",
  title: "Theatre History and Cultural Context",
  goal: "I CAN situate plays within theatre history and analyse how cultural context shapes dramatic meaning.",
  standards: ["Context", "Theatre History"],
  vocabulary: [
    {
      term: "Theatre history",
      definition:
        "The development of dramatic performance from ancient ritual to contemporary practice.",
    },
    {
      term: "Cultural context",
      definition:
        "The social, political and historical circumstances surrounding a play's creation.",
    },
    {
      term: "Ritual origins",
      definition:
        "The theory that theatre emerged from religious and communal rituals.",
    },
    {
      term: "Realism",
      definition:
        "Late 19th-century movement seeking to portray life as it actually is.",
    },
    {
      term: "Epic theatre",
      definition:
        "Brecht's approach using alienation effects to encourage critical thinking.",
    },
    {
      term: "Absurdism",
      definition:
        "Mid-20th-century movement portraying life's meaninglessness through illogical drama.",
    },
  ],
  concepts: [
    {
      id: "theatre-u2-theatre-history",
      title: "Theatre history",
      skill:
        "Trace the development of theatre from ancient origins to contemporary movements.",
      lesson: {
        sections: [
          {
            heading: "Ancient origins",
            body: "Theatre emerged from ritual: ancient Greek drama grew from religious festivals honouring Dionysus; Roman theatre adapted Greek models for entertainment; medieval mystery and morality plays taught Christian doctrine. Early theatre was communal, ritualistic and often political — performances served civic and religious functions.",
          },
          {
            heading: "Modern movements",
            body: "**Realism** (late 19th century) sought to portray life as it actually is — ordinary people, everyday problems. **Epic theatre** (Brecht) used alienation effects to prevent emotional absorption and encourage critical thinking. **Absurdism** (mid-20th century) portrayed life's meaninglessness through illogical, circular drama.",
          },
          {
            heading: "Contemporary theatre",
            body: "Contemporary theatre is pluralistic: physical theatre, devised work, site-specific performance, digital media. The boundary between 'high' and 'low' art has blurred — street theatre, immersive experiences and digital performance all count. Theatre continues to evolve as a response to changing culture and technology.",
          },
        ],
        keyFormulas: [
          {
            name: "Theatre periods",
            statement:
              "Ancient ritual → classical → medieval → Renaissance → modern movements → contemporary",
          },
          {
            name: "Key movements",
            statement:
              "Realism + epic theatre + absurdism = modern theatrical developments",
          },
        ],
        workedExample: {
          problem:
            "A play uses direct address to audience, projected titles and song to prevent emotional immersion. What movement does this reflect?",
          solution:
            "Epic theatre (Brecht) — the alienation effects (direct address, titles, song) are designed to prevent emotional absorption and encourage critical thinking. The audience is meant to analyse, not empathise.",
        },
      },
      questions: [
        {
          id: "theatre-u2-theatre-history-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Ancient Greek theatre originated from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Religious rituals honouring Dionysus" },
              { id: "b", text: "Military training" },
              { id: "c", text: "Political campaigns" },
              { id: "d", text: "Entertainment for kings" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Theatre origins",
                statement:
                  "Greek drama grew from religious festivals honouring Dionysus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Greek theatre emerged from religious festivals honouring the god Dionysus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Religious rituals honouring Dionysus",
            commonErrors: [
              "Treating theatre as purely entertainment rather than ritual origin.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two characteristics of Brecht's epic theatre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Epic theatre",
                statement:
                  "Alienation effects prevent emotional absorption and encourage critical thinking.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Alienation effects — direct address, projected titles, visible stagecraft.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Prevents emotional immersion — audience analyses rather than empathises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Encourages critical thinking about social and political issues.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Epic theatre uses alienation effects to encourage critical analysis.",
            commonErrors: [
              "Confusing epic theatre with traditional emotional theatre.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how cultural context shapes a play's meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Cultural context",
                statement:
                  "Social, political and historical circumstances shape what plays mean.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plays respond to their moment — war, politics, social change appear in themes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Audience expectations are shaped by cultural norms — what seems shocking in one era may be normal in another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The same play can mean different things in different contexts.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: context is necessary to understand dramatic meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cultural context shapes themes, audience expectations and interpretation.",
            commonErrors: [
              "Analysing plays without considering their historical and cultural moment.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described play",
            author: "Written for Akademik Space",
            source: "Movement analysis exercise",
            text: "A play depicts ordinary factory workers dealing with layoffs and poverty. The dialogue is naturalistic; sets are minimal and realistic; no music or stylisation; the ending is unresolved and bleak.",
          },
          stem: "Analyse the theatrical movement of a described play.",
          parts: [
            {
              label: "a",
              prompt: "Identify the likely movement or period.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the features that identify it.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate how the movement serves the play's themes.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Movement identification",
                statement:
                  "Features reveal the theatrical movement and its aims.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Realism — ordinary people, everyday problems, naturalistic style.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Movement correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Naturalistic dialogue, minimal realistic sets, no stylisation — all realism markers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Features convincingly explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Realism serves social critique — showing working-class life honestly forces audience to confront social conditions.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Movement-theme connection evaluated convincingly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Realism. (b) Naturalistic features. (c) Serves social critique through honest portrayal.",
            commonErrors: [
              "Identifying features without connecting them to movement aims.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Medieval mystery and morality plays primarily served to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Teach Christian doctrine to largely illiterate audiences",
              },
              { id: "b", text: "Entertain royalty" },
              { id: "c", text: "Train actors for the Renaissance stage" },
              { id: "d", text: "Satirise political leaders" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Medieval theatre",
                statement:
                  "Mystery and morality plays taught Christian doctrine.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Medieval plays used biblical stories and allegory to teach doctrine to ordinary people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Teach Christian doctrine to largely illiterate audiences",
            commonErrors: [
              "Treating medieval theatre as purely secular entertainment.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how theatre emerged from ritual and communal practice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Ritual origins",
                statement: "Theatre grew from religious and communal rituals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Early performance was embedded in religious festivals and communal ceremonies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ritual elements — song, dance, enacted myth — gradually became drama.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: theatre retains ritual functions — gathering communities and addressing shared concerns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Theatre emerged from religious rituals that gradually became dramatic performance.",
            commonErrors: [
              "Separating theatre's origins from its ritual roots.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Realist movement in late 19th-century theatre sought to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Return to Greek tragedy" },
              {
                id: "b",
                text: "Portray life as it actually is — ordinary people and everyday problems",
              },
              { id: "c", text: "Break the fourth wall constantly" },
              { id: "d", text: "Use song and spectacle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Realism",
                statement:
                  "Late 19th-century movement portraying life as it actually is.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Realism aimed at honest depiction of ordinary life and social problems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Portray life as it actually is",
            commonErrors: [
              "Confusing realism with naturalism's scientific detachment or with epic theatre.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how Brecht's 'alienation effects' work in epic theatre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Epic theatre",
                statement:
                  "Alienation effects prevent emotional absorption and encourage critical analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Alienation effects — direct address, visible stagecraft, projected titles, songs — constantly remind audiences they are watching a construction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This prevents emotional immersion, so audiences analyse rather than empathise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The aim is critical judgement of social and political conditions, not catharsis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: epic theatre treats audiences as thinkers, not passive consumers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Alienation effects break immersion to encourage critical analysis of social conditions.",
            commonErrors: [
              "Describing epic theatre as merely 'political' without the mechanism of alienation.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Absurdist theatre typically portrays:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Musical entertainment" },
              {
                id: "b",
                text: "Life's meaninglessness through illogical, circular drama",
              },
              { id: "c", text: "Historical events realistically" },
              { id: "d", text: "Clear moral lessons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Absurdism",
                statement:
                  "Mid-20th-century movement portraying life's meaninglessness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Absurdism dramatises meaninglessness through illogical and repetitive structures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Life's meaninglessness through illogical drama",
            commonErrors: ["Confusing absurdism with comedy or slapstick."],
          },
        },
        {
          id: "theatre-u2-theatre-history-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe three characteristics of contemporary theatre practice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Contemporary theatre",
                statement:
                  "Pluralistic practice including physical, devised, site-specific and digital work.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pluralism — many forms coexist: physical theatre, devised work, site-specific performance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Blurred boundaries — street theatre, immersive experiences and digital media count as theatre.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Technology integration — projection, digital performance and interactive media are common.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: contemporary theatre continually redefines what performance is.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Contemporary theatre is pluralistic, boundary-blurring and technology-integrated.",
            commonErrors: [
              "Defining theatre only by traditional proscenium conventions.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how theatre evolved from communal ritual to a form of individual artistic expression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theatre evolution",
                statement:
                  "Performance moved from communal ritual to authored art.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Early theatre was communal ritual — performed by and for the whole community for religious or civic purposes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "As playwrights emerged — Aeschylus, Shakespeare — individual authorship shaped the art.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Professionalisation and commercial venues further separated performance from ritual.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Contemporary theatre partly returns to communal and immersive forms — a circular evolution.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: theatre's history moves between communal and individual poles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Theatre evolved from communal ritual to authored art, with contemporary work partly circling back.",
            commonErrors: ["Presenting evolution as strictly linear progress."],
          },
        },
        {
          id: "theatre-u2-theatre-history-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Epic theatre, with its alienation effects, is associated with which playwright?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bertolt Brecht" },
              { id: "b", text: "Oscar Wilde" },
              { id: "c", text: "William Shakespeare" },
              { id: "d", text: "Anton Chekhov" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Epic theatre",
                statement: "Brecht's approach using alienation effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Epic theatre is Bertolt Brecht's signature approach.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Bertolt Brecht",
            commonErrors: [
              "Confusing Brecht with realist or absurdist playwrights.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the aims of Realism and Epic theatre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Realism vs epic",
                statement:
                  "Realism seeks immersion in life; epic theatre seeks critical distance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Realism aims to make audiences believe they are watching real life — immersion and empathy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Epic theatre deliberately breaks illusion to produce critical judgement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both engage social reality but through opposite audience relationships — feeling vs analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: they represent two philosophies of theatre's social function.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Realism immerses audiences in life; epic theatre distances them for critical analysis.",
            commonErrors: ["Treating both as simply 'realistic' styles."],
          },
        },
        {
          id: "theatre-u2-theatre-history-q14",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described performance",
            author: "Written for Akademik Space",
            source: "Movement analysis exercise",
            text: "A performance takes place in a disused warehouse. Audience members move through the space following performers. No fixed seating; the action surrounds them. Recorded voices and projected images are part of the piece, and the 'play' has no single ending point — audiences leave when they choose.",
          },
          stem: "Analyse the theatrical approach of a described performance.",
          parts: [
            {
              label: "a",
              prompt: "Identify the likely movement or approach.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the features that identify it.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate how the approach shapes audience experience.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Contemporary approaches",
                statement:
                  "Site-specific and immersive work redefines audience-performer relations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Site-specific and/or immersive theatre — possibly promenade performance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Approach correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Non-traditional venue, audience mobility, no fixed ending — all markers of immersive/site-specific practice.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Features convincingly explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Audience becomes participant — agency and physical engagement replace passive spectatorship; meaning is co-created.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Evaluation convincingly argued.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Site-specific/immersive theatre. (b) Mobile audience, non-traditional venue, open ending. (c) Turns spectators into participants.",
            commonErrors: [
              "Describing features without linking to the approach's aims.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Direct address to the audience, visible stage machinery and projected titles are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Realist techniques" },
              { id: "b", text: "Medieval staging conventions" },
              { id: "c", text: "Epic theatre alienation effects" },
              { id: "d", text: "Absurdist techniques" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Alienation effects",
                statement:
                  "Devices that prevent emotional immersion in epic theatre.",
              },
            ],
            steps: [
              {
                reasoning: "These devices are Brechtian alienation effects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Epic theatre alienation effects",
            commonErrors: [
              "Confusing alienation effects with realism's transparent stagecraft.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three periods or movements in the history of theatre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Theatre periods",
                statement:
                  "Ancient, medieval, Renaissance, modern movements, contemporary.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any three: ancient Greek/Roman ritual drama; medieval mystery plays; Renaissance theatre; Realism; epic theatre; Absurdism; contemporary practice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Periods correctly named with basic identification.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Three accurate examples provided.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any three of: ancient ritual drama, medieval mystery plays, Renaissance theatre, Realism, epic theatre, Absurdism, contemporary practice.",
            commonErrors: [
              "Listing periods without identifying them correctly.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q17",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how theatre history reflects broader cultural and social change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "History and culture",
                statement:
                  "Performance forms respond to the values and conditions of their era.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Theatre begins in religion because communal ritual served spiritual needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Realism emerged with industrial society's concern for ordinary lives and social problems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Epic and absurdist theatre responded to political upheaval and post-war meaninglessness.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Contemporary plurality reflects digital culture and blurred high/low art boundaries.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: theatre history is a record of changing human concerns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Theatre movements respond to their era's values — religion, industry, politics, technology.",
            commonErrors: [
              "Listing movements without connecting them to cultural context.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q18",
          difficulty: "core",
          totalMarks: 2,
          stem: "A play with naturalistic dialogue, minimal realistic sets and an unresolved bleak ending most likely belongs to which movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absurdism" },
              { id: "b", text: "Medieval mystery play" },
              { id: "c", text: "Realism" },
              { id: "d", text: "Epic theatre" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Realism markers",
                statement:
                  "Naturalistic style, ordinary subjects, unresolved endings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Naturalistic style and ordinary-life focus are realism's markers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Realism",
            commonErrors: [
              "Confusing realism with absurdism, which is deliberately illogical.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q19",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what 'alienation' means in the context of Brecht's epic theatre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Alienation effect",
                statement:
                  "Verfremdungseffekt — making the familiar strange to provoke analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Alienation means making the familiar seem strange — preventing audiences from taking the stage world for granted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is achieved through visible stagecraft, direct address, songs and titles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The goal is not discomfort for its own sake but critical examination of social conditions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: alienation converts spectators into analysts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Alienation makes the familiar strange to provoke critical analysis instead of emotional absorption.",
            commonErrors: [
              "Interpreting alienation as simply making audiences uncomfortable.",
            ],
          },
        },
        {
          id: "theatre-u2-theatre-history-q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate how contemporary theatre's blurring of boundaries between 'high' and 'low' art affects its cultural role.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boundary blurring",
                statement:
                  "Contemporary theatre absorbs popular, digital and immersive forms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Street theatre, digital media and immersive work dissolve the divide between elite and popular culture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This broadens theatre's audience and relevance — performance meets people where they are.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It may dilute traditional standards, but it also expands what counts as meaningful performance.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The blurring mirrors contemporary culture's own hybrid, media-saturated nature.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: boundary blurring makes theatre more democratic but challenges definitions of the art form.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Boundary blurring democratizes theatre while challenging traditional definitions of the art form.",
            commonErrors: [
              "Judging the blurring only as decline or only as progress.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u2-contextual-analysis",
      title: "Contextual analysis",
      skill:
        "Analyse how a play's cultural, historical and social context shapes its themes and meaning.",
      lesson: {
        sections: [
          {
            heading: "Context as lens",
            body: "Every play emerges from its moment: political events, social movements, technological change, cultural values. **Contextual analysis** asks: what was happening when this was written? What was the playwright responding to? What did the original audience expect? Context transforms 'a play about love' into 'a play about arranged marriage in 18th-century France'.",
          },
          {
            heading: "Reading through context",
            body: "Context reveals hidden meanings: a seemingly simple comedy may satirise class hierarchy; a romance may challenge racial taboos; a historical drama may comment on contemporary politics. Without context, plays seem timeless; with context, they become documents of their era.",
          },
          {
            heading: "Contextual vs universal",
            body: "Some themes are universal (love, death, power) while their treatment is contextual (how love is expressed, what death means, how power works). Good analysis distinguishes: what is the play saying about human nature (universal) vs what is it saying about this specific society (contextual)?",
          },
        ],
        keyFormulas: [
          {
            name: "Context questions",
            statement:
              "When written? What was happening? What did audience expect?",
          },
          {
            name: "Universal vs contextual",
            statement: "Human nature themes vs society-specific treatment",
          },
        ],
        workedExample: {
          problem:
            "A play about a woman defying her father to marry for love seems romantic. What contextual questions might change this reading?",
          solution:
            "When was it written? If 18th century, it's radical — challenging patriarchal authority. If contemporary, it may be conventional. What were marriage laws? What did audiences expect? The 'romance' may actually be a political statement about individual autonomy vs family authority.",
        },
      },
      questions: [
        {
          id: "theatre-u2-contextual-analysis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Contextual analysis of a play primarily asks:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who directed the play" },
              {
                id: "b",
                text: "How the play's historical and cultural circumstances shape its meaning",
              },
              { id: "c", text: "What the play is about" },
              { id: "d", text: "How long the play is" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Contextual analysis",
                statement:
                  "Analysing how historical and cultural circumstances shape meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Contextual analysis examines how historical and cultural circumstances shape meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** How the play's historical and cultural circumstances shape its meaning",
            commonErrors: ["Confusing contextual analysis with plot summary."],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three contextual questions for analysing a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Context questions",
                statement:
                  "When written, what was happening, what did audience expect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When was it written and what was happening in society?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "What was the playwright responding to — political, social, personal events?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "What did the original audience expect and how might they have received it?",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "When, what happening, what expected — context questions.",
            commonErrors: [
              "Analysing plays without considering their historical moment.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between universal and contextual themes in drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Universal vs contextual",
                statement:
                  "Some themes transcend time; their treatment is always contextual.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Universal themes — love, death, power — appear in all cultures and periods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Contextual treatment — how love is expressed, what death means, how power works — varies by era and society.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Good analysis separates the universal concern from its contextual expression.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: plays speak to both human nature and their specific moment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Universal themes persist; their treatment is always contextual.",
            commonErrors: [
              "Treating all themes as either purely universal or purely contextual.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described play",
            author: "Written for Akademik Space",
            source: "Contextual analysis exercise",
            text: "A play written in 1950s America depicts a woman who leaves her husband and children to pursue her own ambitions. She's portrayed sympathetically but the ending is ambiguous — she achieves success but at obvious personal cost. The play was controversial when first produced.",
          },
          stem: "Analyse the contextual significance of a described play.",
          parts: [
            {
              label: "a",
              prompt: "Identify the play's apparent theme.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Suggest two contextual factors that might shape its meaning.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate how context changes interpretation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Contextual significance",
                statement:
                  "Historical moment shapes how themes are received and interpreted.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Theme: women's autonomy vs family duty; individual fulfilment vs social expectation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Theme correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Contextual factors: 1950s gender roles, post-war domestic ideology, women's limited opportunities — any two.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two contextual factors correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "In 1950s context, the play was radical — challenging domestic ideology; today it may seem prescient or conventional depending on current gender politics.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Contextual interpretation convincingly evaluated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Women's autonomy vs duty. (b) 1950s gender roles and domestic ideology. (c) Radical then, differently read now.",
            commonErrors: [
              "Analysing the play without considering its historical moment.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Contextual analysis of a play primarily examines:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The theatre's seating plan" },
              {
                id: "b",
                text: "The historical and cultural circumstances that shape its meaning",
              },
              { id: "c", text: "The plot summary" },
              { id: "d", text: "The actors' biographies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Contextual analysis",
                statement:
                  "Examining historical and cultural circumstances shaping meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Contextual analysis examines the era's social, political and cultural conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The historical and cultural circumstances shaping meaning",
            commonErrors: ["Confusing contextual analysis with plot summary."],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what asking 'when was this play written?' reveals about its meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Date as context",
                statement:
                  "The writing date anchors the play in specific social conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The date identifies the social, political and cultural moment the playwright responded to.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It reveals which norms were dominant — what seemed radical or conventional then.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: date transforms a timeless-looking play into a document of its era.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The writing date anchors the play in its era's norms and concerns.",
            commonErrors: ["Treating date as mere biographical trivia."],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do the expectations of a play's original audience matter for interpretation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They don't matter" },
              {
                id: "b",
                text: "Because reception shapes what the play could say and how it was understood",
              },
              { id: "c", text: "Because they set ticket prices" },
              { id: "d", text: "Because they determine the cast" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Original audience",
                statement:
                  "Reception context shapes meaning and possible content.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Original audiences' expectations and constraints shaped what playwrights could express and how it landed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Reception shapes what the play could say and how it was understood",
            commonErrors: [
              "Ignoring reception history when analysing meaning.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a universal theme receives contextual treatment in a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Universal vs contextual",
                statement:
                  "Themes like love persist; their expression is era-specific.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Universal themes — love, death, power — appear across all periods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Their treatment is contextual — how love is expressed, what marriage means, how power operates varies by society.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The same theme can carry opposite implications in different eras.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: analysis must separate the universal concern from its contextual expression.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Universal themes persist but their treatment is always shaped by context.",
            commonErrors: [
              "Treating themes as either purely universal or purely contextual.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Cultural context' of a play includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The theatre's architecture" },
              {
                id: "b",
                text: "The social, political and historical circumstances of its creation",
              },
              { id: "c", text: "Only the author's biography" },
              { id: "d", text: "The actors' training" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural context",
                statement:
                  "Social, political and historical circumstances surrounding creation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cultural context encompasses the era's social, political and historical conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Social, political and historical circumstances of creation",
            commonErrors: ["Reducing context to the author's personal life."],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the same play can be read differently by audiences in different eras.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reception across time",
                statement:
                  "Changing norms alter what audiences notice and value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each era brings its own concerns — audiences find relevance in what resonates with their moment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "What seemed shocking then may seem conventional now, and vice versa.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "New critical frameworks — gender, postcolonial, etc. — expose meanings invisible to earlier audiences.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: plays are living texts, reinterpreted by each generation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Changing norms and critical frameworks produce new readings of the same play.",
            commonErrors: ["Assuming a play's meaning is fixed at creation."],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a historical drama set in the past can function as commentary on contemporary politics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical allegory",
                statement: "Past settings can safely address present concerns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Historical settings provide distance — playwrights can critique current politics through analogy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Parallels between past events and present issues invite audiences to draw connections.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The historical frame can evade censorship or direct confrontation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "It also risks audiences missing the contemporary reference entirely.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: historical drama works as political commentary when parallels are clear but not crude.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Historical settings enable political commentary through safe analogy, though the parallels may be missed.",
            commonErrors: [
              "Assuming historical plays only concern their depicted era.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A playwright responding to the political or social events of their moment is practising:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contextual engagement" },
              { id: "b", text: "Dramatic irony" },
              { id: "c", text: "Genre subversion" },
              { id: "d", text: "Naturalistic staging" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contextual engagement",
                statement: "Responding to the social and political moment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Responding to contemporary events is contextual engagement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Contextual engagement",
            commonErrors: [
              "Confusing contextual response with formal techniques.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how class or gender norms of a particular era shape a play's themes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Norms and theme",
                statement:
                  "Social norms determine what conflicts and taboos a play can dramatise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Era-specific norms determine which conflicts are available — class struggle, gender roles, etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Taboos shape what can be said directly versus through subtext or metaphor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Challenging or reinforcing norms becomes a thematic choice.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: themes are inseparable from the social structure of their time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Era norms determine available conflicts, taboos and thematic possibilities.",
            commonErrors: [
              "Analysing themes without reference to the era's social structure.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q14",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described play",
            author: "Written for Akademik Space",
            source: "Contextual analysis exercise",
            text: "A play written during a period of political repression depicts neighbours informing on each other, but does so through the story of two feuding families and a disputed inheritance. No political terms are used. Audiences at the time recognised the parallels immediately.",
          },
          stem: "Analyse the contextual strategy of a described play.",
          parts: [
            {
              label: "a",
              prompt: "Identify the play's apparent surface theme.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Suggest the contextual concern beneath it.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate the effectiveness of the indirect approach.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Allegorical context",
                statement:
                  "Plays often encode political meaning beneath domestic stories.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Surface theme: family conflict, inheritance dispute, neighbourly betrayal in a domestic setting.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Surface theme correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Contextual concern: informing, surveillance and distrust under political repression — parallels obvious to contemporary audiences.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Contextual concern convincingly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Effective — the domestic frame evades censorship while rewarding audiences who decode it; risk: later audiences may miss the political layer without context.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Evaluation convincingly argued with both strengths and limits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Family/inheritance conflict. (b) Repression, informing, distrust. (c) Effective allegory but may lose meaning without context.",
            commonErrors: [
              "Missing the allegorical layer beneath the domestic story.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguishing universal from contextual themes helps analysts to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Separate enduring human concerns from era-specific treatments",
              },
              { id: "b", text: "Decide which plays are worth studying" },
              { id: "c", text: "Identify the playwright's nationality" },
              { id: "d", text: "Count the number of characters" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Universal vs contextual",
                statement:
                  "Separating human nature from era-specific treatment sharpens analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The distinction separates enduring human concerns from their era-specific expression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Separate enduring concerns from era-specific treatments",
            commonErrors: [
              "Confusing this distinction with judging a play's quality.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three contextual questions an analyst should ask about a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Context questions",
                statement:
                  "When written, what was happening, what did audience expect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When was it written and what was happening in society?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "What was the playwright responding to?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "What did the original audience expect and how might they have received it?",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "When written, what was happening, what the audience expected.",
            commonErrors: ["Listing questions about plot rather than context."],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q17",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why plays are often described as 'documents of their era'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plays as documents",
                statement:
                  "Plays record the concerns, values and conflicts of their time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plays dramatise what a society worried about — class, gender, war, politics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They encode assumptions — what was sayable, who had power, what endings were acceptable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Historians can read plays to recover attitudes and debates of the period.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The 'document' is dramatic, not neutral — it argues a position.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: plays preserve both a society's facts and its arguments.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Plays record their era's concerns, assumptions and arguments — making them historical documents.",
            commonErrors: [
              "Treating the metaphor literally rather than as interpretive insight.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q18",
          difficulty: "core",
          totalMarks: 2,
          stem: "A seemingly simple comedy that satirises class hierarchy demonstrates that context can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Determine the ticket price" },
              { id: "b", text: "Make plays longer" },
              { id: "c", text: "Change the actors' performances" },
              {
                id: "d",
                text: "Reveal hidden meanings beneath surface content",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context reveals meaning",
                statement:
                  "Social context uncovers satire beneath surface content.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Context reveals the satirical layer beneath the comedy's surface.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Reveal hidden meanings beneath surface content",
            commonErrors: [
              "Reading comedy at face value without contextual depth.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q19",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how modern audiences may receive a play differently from its original audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reception shift",
                statement:
                  "Different eras bring different concerns and sensitivities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Modern audiences bring different social concerns — issues the original audience never considered.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "What was once radical may now seem conventional, and vice versa.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Changed sensibilities — e.g. around race, gender, colonialism — alter what stands out.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: reception history is part of a play's meaning, not an add-on.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Modern audiences' different concerns and sensibilities produce different receptions.",
            commonErrors: [
              "Assuming original reception is the only 'correct' reading.",
            ],
          },
        },
        {
          id: "theatre-u2-contextual-analysis-q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the value of contextual analysis for interpreting a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Value of context",
                statement:
                  "Context deepens but does not replace textual analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Context reveals what the text alone conceals — political references, social assumptions, intended reception.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It prevents anachronistic readings — judging past plays by present standards alone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "However, over-reliance on context can reduce the play to a historical artefact, ignoring its enduring dramatic power.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The strongest analysis balances textual evidence with contextual awareness.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: context enriches interpretation when grounded in the text.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Contextual analysis deepens interpretation but must be balanced with textual evidence.",
            commonErrors: [
              "Arguing context is either essential or irrelevant — both extremes fail.",
            ],
          },
        },
      ],
    },
  ],
};
