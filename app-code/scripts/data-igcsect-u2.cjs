module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson91",
    lesson: {
      id: "cieict-u2-lesson-2-1", code: "2-1",
      title: "Graphics and Image Editing",
      goal: "I CAN edit images using graphics software for different purposes.",
      standards: ["Cambridge IGCSE ICT 0417: graphics", "0417 section: graphics software"],
      vocabulary: [
        { term: "Raster graphic", definition: "Image made of pixels — photos." },
        { term: "Vector graphic", definition: "Image made of mathematical shapes — logos." },
        { term: "Resolution", definition: "Number of pixels per inch — affects quality." },
        { term: "Cropping", definition: "Trimming edges of an image." },
        { term: "Layers", definition: "Stacked editable levels in an image." },
        { term: "Colour mode", definition: "RGB for screen, CMYK for print." },
      ],
      concept: {
        id: "cieict-u2-s1-graphics", title: "Graphics software",
        skill: "Edit and prepare images at IGCSE ICT level.",
        sections: [
          { heading: "Raster vs vector", body: "Raster images (photos) are pixel grids — good for complex images but lose quality when resized. Vector images (logos, diagrams) are mathematical shapes — scale perfectly but limited for photos." },
          { heading: "Editing techniques", body: "Crop to focus, resize proportionally, adjust brightness/contrast, remove backgrounds, add text layers. Use RGB for screen display, CMYK for professional printing." },
        ],
        keyFormulas: [
          { name: "Raster", statement: "pixels — photos" },
          { name: "Vector", statement: "shapes — logos" },
          { name: "RGB/CMYK", statement: "screen vs print" },
        ],
        workedExample: {
          problem: "Prepare a photo for a website banner.",
          solution: "Crop to 16:9 ratio, resize to 1920px wide, adjust brightness, save as JPEG (smaller) or PNG (if transparency needed).",
        },
        questions: [
          {
            id: "cieict-u2-gr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the difference between raster and vector graphics?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Raster=pixels, vector=mathematical shapes" }, { id: "b", text: "Raster=small, vector=large" }, { id: "c", text: "Raster=photos, vector=videos" }, { id: "d", text: "No difference" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Raster vs vector", statement: "Pixels vs shapes." }],
              steps: [{ reasoning: "Raster=pixel grid; vector=mathematical shapes.", marks: 1, markCode: "M" }],
              finalAnswer: "Pixels vs shapes",
            },
          },
          {
            id: "cieict-u2-gr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "When would you use vector graphics over raster? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Vector use", statement: "Scalable graphics." }],
              steps: [
                { reasoning: "When scaling without quality loss needed.", marks: 1, markCode: "M" },
                { reasoning: "e.g. logos, diagrams, icons.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Logos/diagrams needing scaling",
            },
          },
          {
            id: "cieict-u2-gr-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between RGB and CMYK colour modes? When use each?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Colour modes", statement: "Screen vs print." }],
              steps: [
                { reasoning: "RGB=screen (Red Green Blue); CMYK=print.", marks: 1, markCode: "M" },
                { reasoning: "RGB for digital; CMYK for professional printing.", marks: 1, markCode: "M" },
                { reasoning: "Both explained.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Screen vs print colour",
            },
          },
          {
            id: "cieict-u2-gr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define raster graphic, vector graphic, resolution, cropping, layers, colour mode. (b) When use raster vs vector? (c) What is resolution? (d) What is cropping? (e) What is a layer? (f) What is RGB vs CMYK? (g) When use JPEG vs PNG? (h) Design a workflow to create a school logo.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Graphics", statement: "Image types, editing, colour." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Raster for photos; vector for logos.", marks: 1, markCode: "M" },
                { reasoning: "(c) Pixels per inch/quality.", marks: 1, markCode: "M" },
                { reasoning: "(d) Trimming edges.", marks: 1, markCode: "M" },
                { reasoning: "(e) Editable stacked levels.", marks: 1, markCode: "M" },
                { reasoning: "(f) Screen vs print.", marks: 1, markCode: "M" },
                { reasoning: "(g) JPEG=photos smaller; PNG=graphics/sharp.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid logo workflow.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Graphics editing and image formats.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u2-gr-notes", title: "Graphics — notes",
      summary: "Raster=pixels (photos), vector=shapes (logos). RGB for screen, CMYK for print.",
      sections: [
        { heading: "Key idea", body: "Choose image type based on use — photos need raster, logos need vector." },
        { heading: "Formats", body: "JPEG=photos, PNG=graphics with transparency, SVG=vector web." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson92",
    lesson: {
      id: "cieict-u2-lesson-2-2", code: "2-2",
      title: "Desktop Publishing and Layout",
      goal: "I CAN create professional page layouts using DTP software.",
      standards: ["Cambridge IGCSE ICT 0417: desktop publishing", "0417 section: DTP"],
      vocabulary: [
        { term: "DTP", definition: "Desktop publishing — creating printed documents." },
        { term: "Layout", definition: "Arrangement of text and images on a page." },
        { term: "Frame", definition: "Container for text or images on a page." },
        { term: "Master page", definition: "Template applied to all pages." },
        { term: "Grid", definition: "Guides aligning elements consistently." },
        { term: "Bleed", definition: "Area extending beyond trim for full-colour printing." },
      ],
      concept: {
        id: "cieict-u2-s2-dtp", title: "Desktop publishing",
        skill: "Create page layouts at IGCSE ICT level.",
        sections: [
          { heading: "DTP concepts", body: "DTP software creates professional documents: newsletters, brochures, posters. Frames contain text/images; master pages apply consistent design; grids align elements." },
          { heading: "Layout principles", body: "Visual hierarchy guides the eye: headlines > subheads > body. White space improves readability. Consistent fonts/colours build brand identity. Balance text and images." },
        ],
        keyFormulas: [
          { name: "DTP", statement: "professional page layout" },
          { name: "Master page", statement: "consistent design template" },
          { name: "Grid", statement: "alignment guides" },
        ],
        workedExample: {
          problem: "Design a school newsletter front page.",
          solution: "Header with logo+date, 2-column body text, image box, footer with contact info. Master page for consistency.",
        },
        questions: [
          {
            id: "cieict-u2-dtp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is DTP?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Desktop publishing — creating printed documents" }, { id: "b", text: "A type of computer" }, { id: "c", text: "A network protocol" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "DTP", statement: "Desktop publishing." }],
              steps: [{ reasoning: "DTP = page layout software.", marks: 1, markCode: "M" }],
              finalAnswer: "Desktop publishing",
            },
          },
          {
            id: "cieict-u2-dtp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a master page and why use one?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Master page", statement: "Consistent template." }],
              steps: [
                { reasoning: "Master page = design applied to all pages.", marks: 1, markCode: "M" },
                { reasoning: "Ensures consistency, saves time.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Consistent page template",
            },
          },
          {
            id: "cieict-u2-dtp-q3", difficulty: "core", totalMarks: 3,
            stem: "What is visual hierarchy and why does it matter in layout?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Visual hierarchy", statement: "Guides reader's eye." }],
              steps: [
                { reasoning: "Hierarchy = importance ordering (headlines>body).", marks: 1, markCode: "M" },
                { reasoning: "Guides reader to key information first.", marks: 1, markCode: "M" },
                { reasoning: "Improves readability/comprehension.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Importance ordering for readability",
            },
          },
          {
            id: "cieict-u2-dtp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define DTP, layout, frame, master page, grid, bleed. (b) When use DTP vs word processor? (c) What is a frame? (d) What is a master page? (e) What is visual hierarchy? (f) What is white space? (g) What is bleed for? (h) Design a poster layout for a school play.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "DTP", statement: "Page layout principles." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) DTP for complex layouts; word processor for documents.", marks: 1, markCode: "M" },
                { reasoning: "(c) Container for text/images.", marks: 1, markCode: "M" },
                { reasoning: "(d) Consistent design template.", marks: 1, markCode: "M" },
                { reasoning: "(e) Importance ordering.", marks: 1, markCode: "M" },
                { reasoning: "(f) Empty space improving readability.", marks: 1, markCode: "M" },
                { reasoning: "(g) Full-colour edge printing.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid poster layout.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Desktop publishing and layout design.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u2-dtp-notes", title: "DTP — notes",
      summary: "Frames hold content; master pages ensure consistency; visual hierarchy guides readers.",
      sections: [
        { heading: "Key idea", body: "Good layout = clear hierarchy + consistent design + balanced whitespace." },
        { heading: "Use", body: "Newsletters, brochures, posters — anything needing professional layout." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson93",
    lesson: {
      id: "cieict-u2-lesson-2-3", code: "2-3",
      title: "Presentation Design",
      goal: "I CAN create effective presentations using slide software and multimedia elements.",
      standards: ["Cambridge IGCSE ICT 0417: presentations", "0417 section: presentation software"],
      vocabulary: [
        { term: "Slide", definition: "Single screen in a presentation." },
        { term: "Transition", definition: "Effect moving between slides." },
        { term: "Animation", definition: "Movement of elements within a slide." },
        { term: "Master slide", definition: "Template applied to all slides." },
        { term: "Speaker notes", definition: "Hidden text for presenter reminders." },
        { term: "Audience", definition: "People viewing the presentation." },
      ],
      concept: {
        id: "cieict-u2-s3-pres", title: "Presentation design",
        skill: "Create effective presentations at IGCSE ICT level.",
        sections: [
          { heading: "Structure and design", body: "Effective presentations: clear structure (intro→content→conclusion), consistent design via master slides, minimal text per slide, visual aids (images, charts), appropriate transitions/animations." },
          { heading: "Delivery", body: "Speaker notes help presenter; rehearse timing; engage audience with questions; adapt to audience needs; handle technical issues gracefully." },
        ],
        keyFormulas: [
          { name: "Structure", statement: "intro→content→conclusion" },
          { name: "Master slide", statement: "consistent design" },
          { name: "Minimal text", statement: "visuals > walls of text" },
        ],
        workedExample: {
          problem: "Design a 10-slide presentation on 'climate change'.",
          solution: "Slide 1: title; 2-3: problem; 4-6: causes/effects; 7-8: solutions; 9: data chart; 10: conclusion+Q&A.",
        },
        questions: [
          {
            id: "cieict-u2-pr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a master slide?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Template applied to all slides" }, { id: "b", text: "The first slide" }, { id: "c", text: "A type of animation" }, { id: "d", text: "A network device" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Master slide", statement: "Consistent template." }],
              steps: [{ reasoning: "Master slide = design applied to all.", marks: 1, markCode: "M" }],
              finalAnswer: "Template for all slides",
            },
          },
          {
            id: "cieict-u2-pr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between a transition and an animation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Transition vs animation", statement: "Between vs within slides." }],
              steps: [
                { reasoning: "Transition=between slides; animation=within slide.", marks: 1, markCode: "M" },
                { reasoning: "Examples for each.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Between vs within",
            },
          },
          {
            id: "cieict-u2-pr-q3", difficulty: "core", totalMarks: 3,
            stem: "Why should presentations have minimal text per slide? What should replace it?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Slide design", statement: "Visuals over text." }],
              steps: [
                { reasoning: "Audiences can't read and listen simultaneously.", marks: 1, markCode: "M" },
                { reasoning: "Replace with images, charts, keywords.", marks: 1, markCode: "M" },
                { reasoning: "Keeps audience engaged.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Visuals not walls of text",
            },
          },
          {
            id: "cieict-u2-pr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define slide, transition, animation, master slide, speaker notes, audience. (b) What is a good presentation structure? (c) Why use master slides? (d) When use transitions/animations? (e) What are speaker notes for? (f) How do you engage an audience? (g) What makes a bad presentation? (h) Design a 5-slide pitch for a school charity event.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Presentations", statement: "Structure, design, delivery." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Intro→content→conclusion.", marks: 1, markCode: "M" },
                { reasoning: "(c) Consistent professional design.", marks: 1, markCode: "M" },
                { reasoning: "(d) Subtle emphasis, not distraction.", marks: 1, markCode: "M" },
                { reasoning: "(e) Presenter reminders.", marks: 1, markCode: "M" },
                { reasoning: "(f) Questions, stories, visuals.", marks: 1, markCode: "M" },
                { reasoning: "(g) Walls of text, no structure, poor timing.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid charity pitch outline.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Effective presentation design and delivery.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u2-pr-notes", title: "Presentations — notes",
      summary: "Minimal text + strong visuals; master slides for consistency; structure intro→content→conclusion.",
      sections: [
        { heading: "Key idea", body: "Slides support the speaker — don't replace them." },
        { heading: "Design", body: "Consistent theme, clear hierarchy, appropriate media." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson94",
    lesson: {
      id: "cieict-u2-lesson-2-4", code: "2-4",
      title: "Integrated ICT Projects",
      goal: "I CAN plan and execute an integrated ICT project combining multiple applications.",
      standards: ["Cambridge IGCSE ICT 0417: integrated projects", "0417: project work"],
      vocabulary: [
        { term: "ICT project", definition: "Task combining multiple ICT applications." },
        { term: "Project plan", definition: "Document outlining tasks, timeline, resources." },
        { term: "Deliverable", definition: "Final product/outcome of project." },
        { term: "Iteration", definition: "Revising work based on feedback." },
        { term: "Evaluation", definition: "Assessing project success against criteria." },
        { term: "Stakeholder", definition: "Person/group with interest in project." },
      ],
      concept: {
        id: "cieict-u2-s4-proj", title: "Integrated projects",
        skill: "Manage multi-application ICT projects at IGCSE level.",
        sections: [
          { heading: "Project planning", body: "Define objectives, identify deliverables, plan timeline, assign tasks, gather resources. Choose appropriate tools: word processor for documents, spreadsheet for data, presentation for delivery, database for records." },
          { heading: "Execution and evaluation", body: "Build incrementally, test at each stage, gather feedback, iterate. Evaluate against original objectives: did it meet requirements? What worked? What could improve?" },
        ],
        keyFormulas: [
          { name: "Project plan", statement: "objectives + tasks + timeline + resources" },
          { name: "Evaluation", statement: "success vs objectives" },
        ],
        workedExample: {
          problem: "Create a school event promotion: poster + invitation letters + attendance spreadsheet.",
          solution: "Plan: DTP for poster, word processor+mail merge for invitations, spreadsheet for RSVPs. Execute each, then integrate.",
        },
        questions: [
          {
            id: "cieict-u2-ip-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a deliverable in a project?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Final product/outcome" }, { id: "b", text: "A type of software" }, { id: "c", text: "A project manager" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Deliverable", statement: "Final outcome." }],
              steps: [{ reasoning: "Deliverable = what project produces.", marks: 1, markCode: "M" }],
              finalAnswer: "Final product/outcome",
            },
          },
          {
            id: "cieict-u2-ip-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What should a project plan include? Give three elements.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Project plan", statement: "Tasks, timeline, resources." }],
              steps: [
                { reasoning: "Tasks/objectives.", marks: 1, markCode: "M" },
                { reasoning: "Timeline + resources.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Tasks + timeline + resources",
            },
          },
          {
            id: "cieict-u2-ip-q3", difficulty: "core", totalMarks: 3,
            stem: "Why evaluate a project against original objectives? What does evaluation reveal?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Evaluation", statement: "Success vs objectives." }],
              steps: [
                { reasoning: "Checks if project met requirements.", marks: 1, markCode: "M" },
                { reasoning: "Reveals what worked and what to improve.", marks: 1, markCode: "M" },
                { reasoning: "Informs future projects.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Success measurement + lessons learned",
            },
          },
          {
            id: "cieict-u2-ip-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define ICT project, project plan, deliverable, iteration, evaluation, stakeholder. (b) What makes a good project plan? (c) How do you choose ICT tools? (d) What is iteration? (e) How do you evaluate success? (f) What are stakeholders? (g) How do you handle project setbacks? (h) Design a project plan for 'school charity fundraising campaign'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Projects", statement: "Planning, execution, evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Clear tasks, timeline, resources.", marks: 1, markCode: "M" },
                { reasoning: "(c) Match tool to task requirements.", marks: 1, markCode: "M" },
                { reasoning: "(d) Revising based on feedback.", marks: 1, markCode: "M" },
                { reasoning: "(e) Against original objectives.", marks: 1, markCode: "M" },
                { reasoning: "(f) Interested parties.", marks: 1, markCode: "M" },
                { reasoning: "(g) Adjust plan, communicate, persevere.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid fundraising project plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Integrated ICT project management.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u2-ip-notes", title: "ICT projects — notes",
      summary: "Plan objectives→tasks→timeline; choose right tools; iterate; evaluate against objectives.",
      sections: [
        { heading: "Key idea", body: "ICT projects combine multiple applications into integrated solutions." },
        { heading: "Evaluation", body: "Did it meet requirements? What worked? What to improve?" },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson95",
    lesson: {
      id: "cieict-u2-lesson-2-5", code: "2-5",
      title: "ICT Systems and File Management",
      goal: "I CAN manage files and understand ICT system components and workflows.",
      standards: ["Cambridge IGCSE ICT 0417: ICT systems", "0417: file management"],
      vocabulary: [
        { term: "File management", definition: "Organising, storing and retrieving files." },
        { term: "Directory", definition: "Folder containing files and subfolders." },
        { term: "File extension", definition: "Suffix indicating file type — .docx, .xlsx." },
        { term: "Backup", definition: "Copy of data for recovery." },
        { term: "Version control", definition: "Tracking changes to files over time." },
        { term: "Workflow", definition: "Sequence of steps in a process." },
      ],
      concept: {
        id: "cieict-u2-s5-files", title: "File management and systems",
        skill: "Organise files and understand ICT workflows at IGCSE level.",
        sections: [
          { heading: "File organisation", body: "Use meaningful folder structures, consistent naming conventions, appropriate file formats. File extensions indicate type: .docx documents, .xlsx spreadsheets, .pptx presentations, .pdf final versions." },
          { heading: "Backups and versions", body: "Regular backups protect against data loss. Version control tracks changes — save dated versions or use 'Save As' with version numbers. Cloud storage enables access and automatic backup." },
        ],
        keyFormulas: [
          { name: "File extension", statement: ".docx/.xlsx/.pptx/.pdf" },
          { name: "Backup", statement: "copy for recovery" },
          { name: "Naming", statement: "consistent meaningful names" },
        ],
        workedExample: {
          problem: "Organise files for a school project with documents, images and spreadsheets.",
          solution: "Folders: /project/docs, /project/images, /project/data. Naming: projectname_v1.docx, projectname_v2.docx for versions.",
        },
        questions: [
          {
            id: "cieict-u2-fm-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does a file extension indicate?",
            response: { type: "mcq", choices: [
              { id: "a", text: "File type" }, { id: "b", text: "File size" }, { id: "c", text: "File date" }, { id: "d", text: "File author" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "File extension", statement: "Type indicator." }],
              steps: [{ reasoning: "Extension = file type (.docx, .xlsx).", marks: 1, markCode: "M" }],
              finalAnswer: "File type",
            },
          },
          {
            id: "cieict-u2-fm-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a backup and why is it important?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Backup", statement: "Data copy for recovery." }],
              steps: [
                { reasoning: "Backup = copy of data.", marks: 1, markCode: "M" },
                { reasoning: "Protects against loss/corruption.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Recovery copy; prevents data loss",
            },
          },
          {
            id: "cieict-u2-fm-q3", difficulty: "core", totalMarks: 3,
            stem: "What makes a good file naming convention? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Naming", statement: "Clear, consistent names." }],
              steps: [
                { reasoning: "Meaningful, consistent, dated/versioned.", marks: 1, markCode: "M" },
                { reasoning: "e.g. projectname_v1_2024.docx.", marks: 1, markCode: "M" },
                { reasoning: "Avoids confusion, enables sorting.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Meaningful consistent dated names",
            },
          },
          {
            id: "cieict-u2-fm-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define file management, directory, file extension, backup, version control, workflow. (b) What is a good folder structure? (c) What do .docx/.xlsx/.pptx/.pdf indicate? (d) Why use version control? (e) What is a workflow? (f) When use PDF vs editable format? (g) How do you organise a shared project folder? (h) Design a file management system for a school department.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "File management", statement: "Organisation, versions, workflows." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Logical folders by project/type.", marks: 1, markCode: "M" },
                { reasoning: "(c) Document/spreadsheet/presentation/PDF.", marks: 1, markCode: "M" },
                { reasoning: "(d) Track changes, recover versions.", marks: 1, markCode: "M" },
                { reasoning: "(e) Step sequence in process.", marks: 1, markCode: "M" },
                { reasoning: "(f) PDF=final/share; editable=working.", marks: 1, markCode: "M" },
                { reasoning: "(g) Clear structure + naming + permissions.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid department file system.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "File management and ICT systems.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u2-fm-notes", title: "File management — notes",
      summary: "Meaningful folders + consistent naming + backups + version control = organised ICT work.",
      sections: [
        { heading: "Key idea", body: "Good file management saves time and prevents data loss." },
        { heading: "Formats", body: "Editable for working; PDF for final distribution." },
      ],
    },
  },
];
