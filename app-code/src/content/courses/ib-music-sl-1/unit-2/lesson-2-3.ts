import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "music-u2-lesson-2-3",
  code: "2-3",
  title: "Music and Society",
  goal: "I CAN analyse how music reflects, shapes and responds to social, political and cultural conditions.",
  standards: ["Contextual Studies", "Society"],
  vocabulary: [
    {
      term: "Music and politics",
      definition:
        "The relationship between musical expression and political power, protest or ideology.",
    },
    {
      term: "Censorship",
      definition:
        "The suppression or restriction of musical works for political, moral or religious reasons.",
    },
    {
      term: "Music and identity",
      definition:
        "How music expresses and constructs individual, group and national identities.",
    },
    {
      term: "Propaganda music",
      definition: "Music created to promote political ideologies or regimes.",
    },
    {
      term: "Protest music",
      definition:
        "Music that challenges authority, injustice or social conditions.",
    },
    {
      term: "Nationalism in music",
      definition:
        "The use of folk elements or cultural symbols to express national identity.",
    },
  ],
  concepts: [
    {
      id: "music-u2-music-politics",
      title: "Music and politics",
      skill:
        "Analyse how music serves political purposes — propaganda, protest and ideological expression.",
      lesson: {
        sections: [
          {
            heading: "Music as propaganda",
            body: "Regimes have always used music for political ends: national anthems unify; marches mobilise; film scores emotionalise ideology. Nazi Germany used Wagner and light music for propaganda; Soviet Russia mandated socialist realism; modern governments use music in campaigns and ceremonies. Music's emotional power makes it a potent political tool.",
          },
          {
            heading: "Music as protest",
            body: "Conversely, music challenges power: protest songs from 'We Shall Overcome' to 'Fortunate Son' give voice to dissent. Musicians have been imprisoned, censored and exiled for political expression. Protest music works by giving collective voice to grievances — it transforms individual anger into shared identity.",
          },
          {
            heading: "Censorship and control",
            body: "Authorities fear music's power: censorship has targeted jazz (racially), rock (morally), rap (politically). Banning music often backfires — it increases the music's appeal and martyrdom. The history of censorship reveals what societies find threatening about musical expression.",
          },
        ],
        keyFormulas: [
          {
            name: "Music and power",
            statement:
              "Propaganda unifies; protest challenges; censorship reveals fear",
          },
          {
            name: "Political music types",
            statement: "Anthems, marches, protest songs, film scores",
          },
        ],
        workedExample: {
          problem:
            "A government bans a popular protest song. Explain two likely consequences.",
          solution:
            "The ban may increase the song's popularity — censorship often creates martyrdom and forbidden fruit appeal. It may also drive the music underground or into coded forms, making it harder to suppress but more subversive. The ban itself becomes a political statement.",
        },
      },
      questions: [
        {
          id: "music-u2-music-politics-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Protest music primarily functions to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Entertain audiences" },
              {
                id: "b",
                text: "Give voice to dissent and challenge authority",
              },
              { id: "c", text: "Promote government policies" },
              { id: "d", text: "Celebrate national holidays" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Protest music",
                statement:
                  "Music that challenges authority and gives voice to social grievances.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protest music challenges authority and expresses social dissent.",
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
              "**(b)** Give voice to dissent and challenge authority",
            commonErrors: [
              "Confusing protest music with entertainment or propaganda.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways music has been used for political propaganda.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Propaganda music",
                statement:
                  "Anthems, marches and film scores mobilise and unify populations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "National anthems and patriotic songs create collective identity and loyalty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Marches and military music mobilise populations for war or political campaigns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Film scores and broadcast music emotionalise ideological messages.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Anthems, marches and media music serve political propaganda functions.",
            commonErrors: [
              "Describing music's emotional power without linking to political purpose.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why censorship of music often produces unintended consequences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Censorship backfire",
                statement:
                  "Banning music increases appeal and drives it underground rather than eliminating it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Censorship creates forbidden fruit appeal — banned music becomes more desirable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It may drive music underground into coded forms harder to detect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The censorship itself becomes a political statement that can mobilise opposition.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: suppression often amplifies rather than eliminates dissent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Censorship backfires by increasing appeal and driving music underground.",
            commonErrors: [
              "Assuming censorship effectively eliminates unwanted music.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described musical context",
            author: "Written for Akademik Space",
            source: "Political music analysis",
            text: "During a period of social unrest, a popular singer releases a song with lyrics calling for unity and change, set to anthemic music with mass singalong choruses. The song is played at protests and shared widely on social media.",
          },
          stem: "Analyse how music functions politically in a described context.",
          parts: [
            {
              label: "a",
              prompt: "Identify whether the music is propaganda or protest.",
              marks: 2,
            },
            { label: "b", prompt: "Explain its political function.", marks: 2 },
            {
              label: "c",
              prompt: "Evaluate its likely effectiveness.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Political music function",
                statement:
                  "Music mobilises emotion and creates collective identity for political purposes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Protest music — lyrics call for change, anthemic style designed for collective singing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Type correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Creates collective identity, channels emotion, provides anthem for movement — gives voice to dissent.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Political function explained convincingly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Effective for mobilising supporters and spreading message; limited for persuading opponents — music preaches to the converted.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned evaluation of effectiveness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Protest. (b) Collective identity and emotional mobilisation. (c) Effective for supporters, limited for opponents.",
            commonErrors: [
              "Describing the music without analysing its political function.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A national anthem primarily functions to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "entertain international tourists" },
              {
                id: "b",
                text: "unify citizens around a shared national identity",
              },
              { id: "c", text: "advertise the nation's products" },
              { id: "d", text: "accompany military parades only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "National anthem",
                statement:
                  "Anthems create collective identity and loyalty to the state.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Anthems bind citizens through shared melody and symbolic lyrics.",
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
              "**(b)** Unify citizens around a shared national identity",
            commonErrors: [
              "Treating anthems as mere ceremonial music without identity function.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Censorship of music is best defined as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "voluntary radio playlists chosen by listeners",
              },
              {
                id: "b",
                text: "the suppression or restriction of musical works for political, moral or religious reasons",
              },
              { id: "c", text: "a music award given by critics" },
              { id: "d", text: "the editing of recordings for sound quality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Censorship",
                statement:
                  "Suppression of works for political, moral or religious reasons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Censorship restricts access to music on ideological grounds, not merely technical ones.",
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
              "**(b)** The suppression or restriction of musical works for political, moral or religious reasons",
            commonErrors: [
              "Confusing censorship with ordinary editorial or broadcasting decisions.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which regime famously deployed music as a tool of state propaganda?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nazi Germany" },
              { id: "b", text: "Renaissance Florence" },
              { id: "c", text: "Victorian England" },
              { id: "d", text: "Medieval Byzantium" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Music propaganda",
                statement:
                  "Nazi Germany and Soviet Russia used music to mobilise ideology.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nazi Germany co-opted Wagner, marches and light music for propaganda purposes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Nazi Germany",
            commonErrors: [
              "Attributing modern propaganda techniques to pre-modern eras.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Protest songs such as 'We Shall Overcome' work politically by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "advertising consumer products" },
              {
                id: "b",
                text: "giving collective voice to dissent and shared grievance",
              },
              { id: "c", text: "supporting existing government policies" },
              { id: "d", text: "accompanying official ceremonies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Protest music",
                statement:
                  "Protest songs transform individual anger into shared identity and collective voice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protest songs give communal expression to dissent, strengthening movements.",
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
              "**(b)** Giving collective voice to dissent and shared grievance",
            commonErrors: [
              "Confusing protest music with patriotic or ceremonial music.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why might a government ban on a popular protest song produce unintended consequences?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Banned songs automatically sound better" },
              {
                id: "b",
                text: "Censorship creates forbidden-fruit appeal and may drive the music underground or into coded forms",
              },
              { id: "c", text: "The ban guarantees the song wins awards" },
              { id: "d", text: "Listeners immediately forget the song exists" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Censorship backfire",
                statement:
                  "Banning music often increases its appeal rather than eliminating it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Censorship creates martyrdom and forbidden appeal, and may push music into subtler coded forms.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Censorship creates forbidden-fruit appeal and may drive the music underground or into coded forms",
            commonErrors: [
              "Assuming official bans effectively suppress musical dissent.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Military marches have historically served which political function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "lulling soldiers to sleep" },
              {
                id: "b",
                text: "mobilising populations and projecting state power and discipline",
              },
              { id: "c", text: "accompanying classical ballet only" },
              { id: "d", text: "marking purely religious ceremonies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "March music",
                statement:
                  "Marches organise collective action and symbolise authority and mobilisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marches synchronise movement, build morale and project organised power.",
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
              "**(b)** Mobilising populations and projecting state power and discipline",
            commonErrors: [
              "Treating marches as purely ceremonial without political function.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two types of music that serve political purposes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Political music types",
                statement:
                  "Anthems, marches, protest songs and propaganda scores serve political ends.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two valid types identified, e.g. national anthems or marches.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second type identified, e.g. protest songs or film scores.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Types correctly described as serving political functions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any two of national anthems, marches, protest songs, propaganda scores.",
            commonErrors: [
              "Naming genres like jazz or rock without noting their political function.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two ways governments use music for propaganda.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Propaganda music",
                statement:
                  "Anthems, marches, film scores and broadcast music mobilise populations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "National anthems and patriotic songs manufacture collective loyalty and identity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Marches and military music synchronise and mobilise populations for war or campaigns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Film scores, ceremonies and broadcast music emotionalise ideological messages.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Music's emotional power bypasses rational argument, making it potent propaganda.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Anthems unify, marches mobilise and media music emotionalises ideology.",
            commonErrors: [
              "Describing musical features without linking them to political purpose.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how protest music transforms individual grievance into collective identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protest music function",
                statement:
                  "Shared songs give communal voice to dissent and build movement identity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protest songs articulate grievances that individuals may feel but cannot express alone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Singing together creates solidarity — the song becomes a shared voice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Anthemic structures and repeated choruses invite mass participation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shared repertoire becomes a badge of belonging to the movement.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: protest music converts private anger into public, collective identity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Protest songs give shared voice to grievance, building solidarity and movement identity.",
            commonErrors: [
              "Treating protest songs as personal expression only, ignoring collective function.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare national anthems and protest songs as political music.",
          parts: [
            { label: "a", prompt: "Compare their political aims.", marks: 2 },
            {
              label: "b",
              prompt: "Compare their musical and lyrical characteristics.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Compare who each typically serves.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Anthem vs protest",
                statement:
                  "Anthems consolidate state identity; protest songs challenge it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Anthems aim to unify citizens under existing authority; protest songs aim to challenge injustice or power.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Aims compared accurately.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Anthems are solemn, ceremonial and officially sanctioned; protest songs are direct, repetitive and often confrontational in lyrics.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Musical and lyrical comparison accurate.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Anthems serve the state and its citizens; protest songs serve dissenting movements and marginalised groups.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Served constituencies compared convincingly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Unify vs challenge. (b) Ceremonial vs confrontational. (c) State vs dissenting movements.",
            commonErrors: [
              "Treating both as simply 'patriotic' without distinguishing function.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Discuss why authorities censor music and why such censorship often fails.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Censorship dynamics",
                statement:
                  "Authorities fear music's power to mobilise dissent; suppression often backfires.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Authorities censor music seen as threatening — jazz was attacked racially, rock morally, rap politically.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The fear is that music's emotional power and mass appeal can mobilise opposition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Censorship creates forbidden-fruit appeal, increasing the music's desirability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bans drive music underground into coded forms — harder to detect but more subversive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The censorship itself becomes a political statement that can rally opponents.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Historical examples — jazz bans, rock controversies — show repeated backfire.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The pattern reveals what each society finds threatening about musical expression.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: suppression rarely eliminates dissent; it often amplifies it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Authorities censor threatening music; bans backfire through forbidden appeal, coded forms and protest amplification.",
            commonErrors: [
              "Assuming censorship is effective or that authorities act without motive.",
            ],
          },
        },
        {
          id: "music-u2-music-politics-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether any music can be considered 'apolitical'.",
          parts: [
            {
              label: "a",
              prompt: "Present the case that music can be apolitical.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Present counter-examples of political music.",
              marks: 2,
            },
            { label: "c", prompt: "Give your reasoned judgement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Music and politics",
                statement:
                  "Music operates within social contexts; 'apolitical' claims are themselves political positions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Case for apolitical music: abstract instrumental works may lack explicit political content.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Case presented fairly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Counter-examples: anthems, marches, protest songs, censorship targets show music's political entanglement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Counter-evidence presented convincingly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: even 'neutral' music acquires political meaning through context, patronage and reception.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned conclusion acknowledging nuance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Abstract music may lack explicit politics. (b) Anthems, marches and censorship show political entanglement. (c) Context gives all music political resonance.",
            commonErrors: [
              "Declaring all music political without acknowledging degrees of explicit content.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u2-music-identity",
      title: "Music and identity",
      skill:
        "Analyse how music expresses, constructs and contests individual, group and national identities.",
      lesson: {
        sections: [
          {
            heading: "Individual identity",
            body: "Music taste is a primary marker of personal identity: what you listen to signals your values, generation, subculture and taste. 'Music identity' — identifying as a 'metal fan' or 'classical lover' — is a social performance. Playlists are autobiographies; mixtapes were love letters.",
          },
          {
            heading: "Group and national identity",
            body: "Music binds groups: national anthems, folk traditions, religious music and protest songs create collective identity. Folk music preserves cultural memory; national composers are claimed as cultural heroes. Music can unify — or expose divisions when different groups claim different musical traditions.",
          },
          {
            heading: "Identity and appropriation",
            body: "Music crosses boundaries: cultural appropriation occurs when one group adopts another's music without understanding or credit. Conversely, musical hybridity — jazz, fusion, world music — creates new identities. The question is always: who profits, who is represented, and who gets to define the meaning?",
          },
        ],
        keyFormulas: [
          {
            name: "Music identity levels",
            statement: "Individual taste + group belonging + national culture",
          },
          {
            name: "Appropriation question",
            statement: "Who profits? Who is represented? Who defines meaning?",
          },
        ],
        workedExample: {
          problem:
            "A pop artist samples a traditional folk melody without attribution. What issues arise?",
          solution:
            "Cultural appropriation concerns: the folk tradition may belong to a marginalised community whose cultural heritage is being commercialised without credit. Issues include: lack of attribution, profit going to the sampler not the tradition-bearers, and potential distortion of the music's original meaning.",
        },
      },
      questions: [
        {
          id: "music-u2-music-identity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Music taste primarily functions as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A neutral preference" },
              {
                id: "b",
                text: "A marker of personal identity and social belonging",
              },
              { id: "c", text: "A measure of musical skill" },
              { id: "d", text: "A form of entertainment only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Music and identity",
                statement:
                  "Musical taste signals values, generation and group belonging.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Music taste functions as a marker of personal identity and social belonging.",
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
              "**(b)** A marker of personal identity and social belonging",
            commonErrors: [
              "Treating music taste as merely personal preference without social function.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways music constructs group identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Group identity",
                statement:
                  "Shared musical traditions create collective belonging and cultural memory.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shared genres or styles create subcultural communities — fans, scenes, movements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "National anthems, folk songs and religious music bind larger cultural groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Participating in musical traditions (choirs, bands, ceremonies) reinforces belonging.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shared genres and participatory traditions construct group identity.",
            commonErrors: [
              "Describing music's emotional effect without addressing identity function.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between musical hybridity and cultural appropriation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Hybridity vs appropriation",
                statement:
                  "Hybridity creates new forms respectfully; appropriation extracts without credit or understanding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hybridity involves genuine exchange — musicians from different traditions collaborate or respectfully adapt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Appropriation extracts elements without attribution, understanding or benefit to the source community.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The distinction lies in power relations — who profits, who is credited, who controls meaning.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: context and credit determine whether borrowing becomes appropriation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hybridity respects and credits; appropriation extracts without acknowledgment.",
            commonErrors: [
              "Treating all cross-cultural borrowing as equally problematic or equally fine.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described musical context",
            author: "Written for Akademik Space",
            source: "Identity analysis exercise",
            text: "A community choir sings traditional folk songs in the local dialect, accompanied by instruments specific to the region. Performances are open to all community members regardless of musical experience. The repertoire changes seasonally to reflect agricultural and religious cycles.",
          },
          stem: "Analyse how music expresses identity in a described context.",
          parts: [
            {
              label: "a",
              prompt: "Identify the type(s) of identity expressed.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how the music constructs this identity.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the identity construction is inclusive or exclusive.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Identity construction",
                statement:
                  "Music binds individuals to community through shared tradition and participation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Group and cultural identity — community belonging through shared tradition.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Type(s) correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Dialect, traditional instruments and seasonal repertoire construct a specifically local identity; open participation reinforces inclusivity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Identity construction explained convincingly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Inclusive — open to all regardless of skill; but may exclude outsiders unfamiliar with dialect or tradition.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned evaluation of inclusivity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Community/cultural identity. (b) Dialect, instruments, seasons construct local identity. (c) Inclusive internally, possibly exclusive externally.",
            commonErrors: [
              "Describing the music without analysing its identity function.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An individual's music taste primarily signals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only their income level" },
              {
                id: "b",
                text: "personal identity, values and social belonging",
              },
              { id: "c", text: "their musical performing skill" },
              { id: "d", text: "their nationality alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Music and identity",
                statement:
                  "Taste signals values, generation, subculture and belonging.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Music taste communicates identity markers — values, generation and group affiliation.",
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
              "**(b)** Personal identity, values and social belonging",
            commonErrors: [
              "Treating taste as a neutral preference without social signalling.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Cultural appropriation in music involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "paying royalties to tradition-bearers" },
              {
                id: "b",
                text: "adopting another group's musical traditions without credit, understanding or benefit to that community",
              },
              { id: "c", text: "writing original songs in a borrowed style" },
              { id: "d", text: "performing folk songs respectfully" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural appropriation",
                statement:
                  "Extraction of another culture's music without attribution or benefit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Appropriation takes cultural elements without credit, context or benefit to the source community.",
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
              "**(b)** Adopting another group's musical traditions without credit, understanding or benefit to that community",
            commonErrors: [
              "Equating all cross-cultural borrowing with appropriation.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "National anthems primarily express:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "individual musical taste" },
              { id: "b", text: "collective national identity and belonging" },
              { id: "c", text: "religious doctrine exclusively" },
              { id: "d", text: "entertainment for foreign visitors" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "National identity",
                statement:
                  "Anthems and folk songs bind citizens into a shared national identity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Anthems construct collective identity through shared symbolic performance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Collective national identity and belonging",
            commonErrors: [
              "Confusing national identity expression with individual taste expression.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Musical hybridity creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "inevitable cultural conflict" },
              {
                id: "b",
                text: "new musical identities through respectful exchange between traditions",
              },
              { id: "c", text: "only copyright disputes" },
              { id: "d", text: "the disappearance of all source traditions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Musical hybridity",
                statement:
                  "Respectful fusion of traditions creating new identities, e.g. jazz or fusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hybridity blends traditions through genuine exchange, producing new forms.",
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
              "**(b)** New musical identities through respectful exchange between traditions",
            commonErrors: ["Confusing hybridity with appropriation."],
          },
        },
        {
          id: "music-u2-music-identity-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which question best frames debates about cultural appropriation in music?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "'Who profits, who is represented, and who gets to define the meaning?'",
              },
              { id: "b", text: "'Which genre sells the most records?'" },
              { id: "c", text: "'Who owns the master recording?'" },
              { id: "d", text: "'Which instrument is hardest to play?'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriation questions",
                statement:
                  "Power, representation and meaning-making determine whether borrowing becomes appropriation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Appropriation debates centre on profit, representation and who controls meaning.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** 'Who profits, who is represented, and who gets to define the meaning?'",
            commonErrors: [
              "Reducing appropriation debates to commercial or legal questions.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Folk music primarily functions to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "top commercial charts" },
              {
                id: "b",
                text: "preserve cultural memory and communal tradition",
              },
              { id: "c", text: "advertise modern products" },
              { id: "d", text: "accompany religious ritual exclusively" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Folk music",
                statement:
                  "Folk traditions preserve cultural memory and communal identity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Folk music carries communal history, dialect and seasonal cycles across generations.",
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
              "**(b)** Preserve cultural memory and communal tradition",
            commonErrors: [
              "Treating folk music as merely old-fashioned popular music.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two levels at which music expresses identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Identity levels",
                statement:
                  "Music expresses individual taste, group belonging and national culture.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two levels identified, e.g. individual taste or group belonging.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second level identified, e.g. national or cultural identity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Levels correctly distinguished from each other.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any two of individual, group/subcultural, national/cultural identity.",
            commonErrors: [
              "Naming only individual taste without group or national levels.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two ways music constructs national identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "National identity",
                statement:
                  "Anthems, folk traditions and national composers bind citizens culturally.",
              },
            ],
            steps: [
              {
                reasoning:
                  "National anthems and patriotic songs create shared symbolic rituals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Folk songs and traditional instruments preserve and display cultural distinctiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Composers are claimed as national heroes, embedding music in cultural pride.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Nationalist musical styles assert identity within and against other nations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Anthems, folk traditions and national composers construct national identity.",
            commonErrors: [
              "Describing music's emotional effect without addressing identity construction.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain why music taste functions as a form of social performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Taste as performance",
                statement:
                  "Sharing music signals identity to others; playlists are social statements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Taste is displayed publicly — playlists, concert attendance, recommendations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It communicates values and group affiliation to observers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can affirm belonging within a subculture or distinguish oneself from others.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The performance is ongoing — taste is maintained and adjusted socially.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: music taste is identity enacted in social space.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Music taste publicly performs identity — signalling values and belonging to others.",
            commonErrors: ["Treating taste as purely private preference."],
          },
        },
        {
          id: "music-u2-music-identity-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse cultural appropriation in music.",
          parts: [
            {
              label: "a",
              prompt: "Define cultural appropriation in musical terms.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Describe one problematic scenario.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate when borrowing becomes appropriation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Appropriation",
                statement:
                  "Borrowing becomes appropriation through power imbalance, lack of credit and lost benefit.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Appropriation is adopting another group's musical traditions without attribution, understanding or benefit to that community.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Definition accurate.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Valid scenario described, e.g. sampling folk melodies commercially without credit.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Scenario's problematic elements identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Borrowing becomes appropriation when power, credit and benefit flow one way — context and consent are decisive.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned evaluation with nuance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Uncredited adoption of another culture's music. (b) Commercial sampling without attribution. (c) Power and credit determine appropriation.",
            commonErrors: [
              "Condemning all cross-cultural borrowing as appropriation.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Discuss how music can both unify and divide communities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Music's double edge",
                statement:
                  "Shared music binds groups; contested music exposes divisions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Music unifies through shared anthems, rituals, choirs and communal singing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It binds individuals to group identity — national, religious, subcultural.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Protest music unifies movements against a common injustice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Music divides when different groups claim different traditions — genre wars, national rivalries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Censorship reveals divisions — what one group celebrates another suppresses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The same song can unite supporters and alienate opponents simultaneously.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Musical meaning is contested — identity is negotiated through sound.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: music's social power lies precisely in this dual capacity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Music unifies through shared ritual and identity while exposing divisions through contested meaning and censorship.",
            commonErrors: [
              "Arguing music only unites or only divides without acknowledging both.",
            ],
          },
        },
        {
          id: "music-u2-music-identity-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether musical borrowing is always cultural appropriation.",
          parts: [
            {
              label: "a",
              prompt: "Define musical hybridity and give an example.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Identify criteria that distinguish hybridity from appropriation.",
              marks: 2,
            },
            { label: "c", prompt: "Give your reasoned judgement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Borrowing spectrum",
                statement:
                  "Hybridity respects and credits; appropriation extracts without acknowledgment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Hybridity is respectful fusion creating new forms — e.g. jazz blending African-American and European traditions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Example accurately given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Criteria: consent, credit, benefit-sharing, understanding of context, power relations.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Distinction between hybridity and appropriation clearly stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: borrowing is not always appropriation — credit, respect and benefit determine the moral status.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned, balanced conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Respectful fusion e.g. jazz. (b) Consent, credit, benefit distinguish hybridity. (c) Borrowing is not always appropriation.",
            commonErrors: [
              "Treating all borrowing as equally problematic or equally acceptable.",
            ],
          },
        },
      ],
    },
  ],
};
