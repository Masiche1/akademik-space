import type { Lesson } from "../../../types.ts";

export const lesson94: Lesson = {
  id: "cieict-u2-lesson-2-4",
  code: "2-4",
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
  concepts: [
    {
      id: "cieict-u2-s4-proj",
      title: "Integrated projects",
      skill: "Manage multi-application ICT projects at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Project planning",
            body: "Define objectives, identify deliverables, plan timeline, assign tasks, gather resources. Choose appropriate tools: word processor for documents, spreadsheet for data, presentation for delivery, database for records.",
          },
          {
            heading: "Execution and evaluation",
            body: "Build incrementally, test at each stage, gather feedback, iterate. Evaluate against original objectives: did it meet requirements? What worked? What could improve?",
          },
        ],
        keyFormulas: [
          { name: "Project plan", statement: "objectives + tasks + timeline + resources" },
          { name: "Evaluation", statement: "success vs objectives" },
        ],
        workedExample: {
          problem: "Create a school event promotion: poster + invitation letters + attendance spreadsheet.",
          solution: "Plan: DTP for poster, word processor+mail merge for invitations, spreadsheet for RSVPs. Execute each, then integrate.",
        },
      },
      questions: [
        {
          id: "cieict-u2-ip-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a deliverable in a project?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Final product/outcome"
                    },
                    {
                              "id": "b",
                              "text": "A type of software"
                    },
                    {
                              "id": "c",
                              "text": "A project manager"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Deliverable",
                              "statement": "Final outcome."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Deliverable = what project produces.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Final product/outcome"
},
        },
        {
          id: "cieict-u2-ip-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should a project plan include? Give three elements.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Project plan",
                              "statement": "Tasks, timeline, resources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tasks/objectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Timeline + resources.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tasks + timeline + resources"
},
        },
        {
          id: "cieict-u2-ip-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why evaluate a project against original objectives? What does evaluation reveal?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Success vs objectives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Checks if project met requirements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reveals what worked and what to improve.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Informs future projects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Success measurement + lessons learned"
},
        },
        {
          id: "cieict-u2-ip-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define ICT project, project plan, deliverable, iteration, evaluation, stakeholder. (b) What makes a good project plan? (c) How do you choose ICT tools? (d) What is iteration? (e) How do you evaluate success? (f) What are stakeholders? (g) How do you handle project setbacks? (h) Design a project plan for 'school charity fundraising campaign'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Projects",
                              "statement": "Planning, execution, evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Clear tasks, timeline, resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Match tool to task requirements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Revising based on feedback.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Against original objectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Interested parties.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Adjust plan, communicate, persevere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid fundraising project plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Integrated ICT project management."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u2-ip-notes",
      title: "ICT projects — notes",
      summary: "Plan objectives→tasks→timeline; choose right tools; iterate; evaluate against objectives.",
      sections: [
        { heading: "Key idea", body: "ICT projects combine multiple applications into integrated solutions." },
        { heading: "Evaluation", body: "Did it meet requirements? What worked? What to improve?" },
      ],
    },
  ],
};
