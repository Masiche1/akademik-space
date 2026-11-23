import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ebz10-u4-lesson-4-2",
  code: "4-2",
  title: "Training, Motivation and Performance",
  goal: "I CAN explain staff training, motivation theories and performance management.",
  standards: ["Edexcel IGCSE Business 4BS0 — Human Resources Management"],
  
  vocabulary: [
    { term: "Induction training", definition: "Initial training introducing new employees to the organisation and job." },
    { term: "On-the-job training", definition: "Training while doing the actual job." },
    { term: "Off-the-job training", definition: "Training away from the workplace, such as courses or workshops." },
    { term: "Motivation", definition: "The forces that drive employees to work effectively." },
    { term: "Performance appraisal", definition: "Regular review of an employee's work against objectives." },
    { term: "SMART objective", definition: "Specific, measurable, achievable, realistic and time-bound target." },
  ],
  concepts: [
    {
      id: "ebz10-u4-training-development",
      title: "Staff Training and Development",
      skill: "Choose and evaluate different training methods.",
      lesson: {
        sections: [
          {
            heading: "Types of training",
            body: "**Induction** introduces new staff to the business. **On-the-job training** happens while working, such as shadowing or mentoring; it is relevant and cheap but can disrupt production. **Off-the-job training** includes courses, workshops and simulations; it gives focused learning but costs time and money.",
          },
          {
            heading: "Why training matters",
            body: "Training improves skills, productivity, quality and safety. It helps employees adapt to new technology and gives them career development, which can improve motivation and retention.",
          },
          {
            heading: "Evaluating training",
            body: "Businesses should check whether training changed knowledge, skills or behaviour and whether it improved performance. Methods include tests, observation, feedback from managers and measuring productivity or error rates.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A call-centre employee needs to learn a new customer database. Which training method fits?",
          solution: "Use off-the-job software training followed by supervised on-the-job practice using the database.",
        },
      },
      questions: [
        {
          id: "ebz10-u4-train-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is off-the-job training?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Learning while performing the normal job"
                    },
                    {
                              "id": "b",
                              "text": "Training away from the workplace"
                    },
                    {
                              "id": "c",
                              "text": "Reading the staff handbook"
                    },
                    {
                              "id": "d",
                              "text": "Watching a colleague work"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Off-the-job training",
                              "statement": "Formal training outside normal work activities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Off-the-job training takes place away from the workplace, such as courses or workshops.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Training away from the workplace",
          "commonErrors": [
                    "Confusing off-the-job with on-the-job training."
          ]
},
        },
        {
          id: "ebz10-u4-train-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three benefits of staff training to a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Training benefits",
                              "statement": "Better skills, productivity, quality and retention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Employees develop skills needed for their jobs and new technology.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Better skills can raise productivity and product or service quality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Development opportunities can motivate staff and reduce turnover.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Improved skills, productivity, quality, safety and retention.",
          "commonErrors": [
                    "Only one benefit.",
                    "No business outcome linked."
          ]
},
        },
        {
          id: "ebz10-u4-train-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare on-the-job and off-the-job training.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "On-the-job vs off-the-job",
                              "statement": "Workplace practice versus formal external learning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "On-the-job training is practical and directly relevant to the role.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It can disrupt work and mistakes may affect customers or production.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Off-the-job training gives focused time and often expert instruction.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It costs more and may not reflect the real workplace unless followed by practice.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "On-the-job is practical but disruptive; off-the-job is focused but costly.",
          "commonErrors": [
                    "No comparison.",
                    "Advantages listed without drawbacks."
          ]
},
        },
        {
          id: "ebz10-u4-train-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A restaurant introduces a new point-of-sale system and food-safety rules.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Recommend one on-the-job training method for the system.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Recommend one off-the-job training method for food safety.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Training selection",
                              "statement": "Match the method to the skill and risk involved."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use supervised practice or shadowing during quiet periods so staff learn the real system.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Pair new users with experienced colleagues for immediate feedback.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use an accredited food-hygiene course because safety rules require formal knowledge.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Follow with a short workplace check to confirm staff apply the rules correctly.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Supervised practice for the system; accredited food-hygiene training for safety.",
          "commonErrors": [
                    "Method does not match the skill.",
                    "No link to safety or system requirements."
          ]
},
        },
        {
          id: "ebz10-u4-train-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A business spends a large sum on training but sees no improvement in productivity.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two possible reasons for this failure.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways to improve the training programme.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Training evaluation",
                              "statement": "Training must be relevant, transferred to work and measured."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The training may not match actual job needs or skills gaps.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Staff may not apply learning because managers or systems do not support it.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Identify specific skills gaps through appraisal or observation before training.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evaluate outcomes using productivity measures, tests or feedback.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Give employees time and coaching to use new skills at work.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Training may be irrelevant or unsupported; align it with gaps and measure workplace transfer.",
          "commonErrors": [
                    "Assumes more spending always helps.",
                    "No evaluation method."
          ]
},
        },
        {
          id: "ebz10-u4-train-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A logistics firm is introducing electric delivery vans and a new route-planning software.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why induction should be updated for new drivers.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Compare on-the-job and off-the-job training for learning the software.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest one safety training method for electric vans.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how the firm could evaluate whether training worked.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Technology training",
                              "statement": "New equipment requires induction, practical training and safety evaluation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "New drivers must learn vehicle controls, charging procedures and safety rules.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Induction ensures everyone understands changes before driving.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "On-the-job gives real route practice but may slow deliveries.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Off-the-job gives focused software instruction but needs practice afterward.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A combination is best: course first, then supervised use.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use practical training on electric-vehicle safety, charging and emergency procedures.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Measure delivery times, software errors, safety incidents and driver feedback.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Update induction, combine software course with supervised practice, train EV safety and measure outcomes.",
          "commonErrors": [
                    "No safety training.",
                    "No evaluation or mixed-method justification."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u4-motivation-performance",
      title: "Motivation and Performance Management",
      skill: "Apply motivation theories and manage employee performance.",
      lesson: {
        sections: [
          {
            heading: "Motivation theories",
            body: "**Maslow's hierarchy** suggests employees move from basic needs to security, social needs, esteem and self-actualisation. **Herzberg** separates hygiene factors such as pay and conditions from motivators such as achievement, recognition and responsibility. **McGregor's Theory X and Y** contrast assumptions that workers dislike work with assumptions that they seek responsibility.",
          },
          {
            heading: "Financial and non-financial rewards",
            body: "Financial rewards include salary, bonuses, commission and overtime pay. Non-financial rewards include praise, recognition, flexible hours, training opportunities and interesting work. Different employees are motivated by different factors.",
          },
          {
            heading: "Performance management",
            body: "Businesses set **SMART objectives**, monitor progress, give feedback and review performance through appraisals. Appraisals identify strengths, development needs and future objectives. Effective feedback should be timely, specific and constructive.",
          },
        ],
        keyFormulas: [
          { name: "SMART objective", statement: "Specific, Measurable, Achievable, Realistic, Time-bound" },
        ],
        workedExample: {
          problem: "A sales assistant is given the objective 'increase sales'. How could it be improved?",
          solution: "Make it SMART: 'Increase monthly sales by 10% within three months by contacting 20 customers each week.'",
        },
      },
      questions: [
        {
          id: "ebz10-u4-mot-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In Herzberg's theory, which is a motivator rather than a hygiene factor?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Salary"
                    },
                    {
                              "id": "b",
                              "text": "Recognition"
                    },
                    {
                              "id": "c",
                              "text": "Working conditions"
                    },
                    {
                              "id": "d",
                              "text": "Company policy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Herzberg motivators",
                              "statement": "Achievement, recognition, responsibility and growth create motivation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Recognition is a motivator; salary, conditions and policy are hygiene factors.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Recognition",
          "commonErrors": [
                    "Confusing hygiene factors with motivators."
          ]
},
        },
        {
          id: "ebz10-u4-mot-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three non-financial ways to motivate employees.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Non-financial motivation",
                              "statement": "Recognition, autonomy, development and job interest motivate staff."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Praise or public recognition for good work.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Give responsibility, autonomy or interesting projects.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Offer training, promotion opportunities or flexible working.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Recognition, responsibility/autonomy, training, flexible hours and interesting work.",
          "commonErrors": [
                    "Only financial rewards.",
                    "No examples."
          ]
},
        },
        {
          id: "ebz10-u4-mot-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what is meant by a SMART objective and why businesses use them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SMART objectives",
                              "statement": "Clear targets that guide performance management."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SMART means specific, measurable, achievable, realistic and time-bound.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Specific and measurable targets remove ambiguity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Achievable, realistic and time-bound targets are fair and motivating.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They make performance easier to monitor, review and reward.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "SMART objectives are clear, fair targets that support appraisal and motivation.",
          "commonErrors": [
                    "Only expanding the acronym.",
                    "No performance management link."
          ]
},
        },
        {
          id: "ebz10-u4-mot-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A team leader wants to improve motivation in a repetitive warehouse team.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two Herzberg motivators that could be used.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest one financial and one non-financial reward.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Applying motivation theory",
                              "statement": "Use motivators and rewards suited to the role."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Give employees more responsibility, such as leading a shift or improving processes.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Recognise achievement publicly and provide training or promotion opportunities.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Financial reward could be a productivity bonus or overtime pay.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Non-financial reward could be flexible breaks, team events or involvement in decisions.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Use responsibility, recognition, development plus suitable financial and non-financial rewards.",
          "commonErrors": [
                    "Theory name only.",
                    "Rewards not linked to the warehouse role."
          ]
},
        },
        {
          id: "ebz10-u4-mot-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A company holds annual appraisals but employees say feedback is vague and objectives are unrealistic.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two problems with the current appraisal system.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Recommend two improvements to performance management.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Effective appraisals",
                              "statement": "Feedback and objectives should be specific, fair and regular."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Vague feedback does not tell employees what to improve.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Unrealistic objectives demotivate staff and make appraisal unfair.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Set SMART objectives agreed with the employee at the start of the period.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Give regular, specific feedback and discuss development needs.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hold more frequent reviews rather than relying on one annual meeting.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Improve objectives and feedback frequency; use SMART targets and regular constructive reviews.",
          "commonErrors": [
                    "No specific problem.",
                    "Recommendation not linked to appraisal."
          ]
},
        },
        {
          id: "ebz10-u4-mot-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A customer-service company wants to raise motivation and reduce staff turnover.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how Maslow's hierarchy could guide motivation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how Herzberg's theory differs from financial rewards alone.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two performance-management tools the company could use.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether motivation alone will reduce turnover.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Motivation and retention",
                              "statement": "Different needs require different rewards and management systems."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ensure pay meets basic and security needs before expecting higher motivation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Then support social, esteem and achievement needs through teamwork and recognition.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Different employees may be at different levels of the hierarchy.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Financial rewards prevent dissatisfaction but may not create lasting motivation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Herzberg motivators such as achievement, responsibility and growth create satisfaction.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The best approach combines fair pay with meaningful work and recognition.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use SMART objectives and regular appraisals to clarify expectations.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use feedback, coaching and development plans to support improvement.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Motivation helps but turnover also depends on pay, workload, management and career prospects.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Use needs-based rewards plus Herzberg motivators and appraisal; motivation alone may not fix turnover.",
          "commonErrors": [
                    "One theory only.",
                    "No evaluation of other turnover causes."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u4-training-motivation-notes",
      title: "Training, motivation and performance — notes",
      summary: "Choose training methods to match skills, use motivation theories to design rewards, and manage performance with SMART objectives and appraisals.",
      sections: [
        { heading: "Training", body: "Induction, on-the-job and off-the-job training serve different purposes." },
        { heading: "Motivation", body: "Maslow, Herzberg and McGregor explain different employee needs." },
        { heading: "Performance", body: "SMART objectives and regular feedback make appraisal effective." },
        { heading: "Evaluation", body: "Check whether training and motivation actually improve performance." },
      ],
    },
  ],
};
