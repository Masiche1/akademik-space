import type { Lesson } from "../../../types.ts";

export const lesson703: Lesson = {
  id: "edxbtecit-u7-lesson-7-3",
  code: "7-3",
  title: "Artificial Intelligence, IoT and Ethics",
  goal: "I CAN describe AI, machine learning and IoT and evaluate the ethical issues they raise.",
  standards: ["Pearson Level 3 AAQ BTEC National in Information Technology — applied IT content", "Artificial intelligence, machine learning, IoT and technology ethics"],
  
  vocabulary: [
    { term: "Artificial intelligence", definition: "Systems performing tasks requiring human-like intelligence." },
    { term: "Machine learning", definition: "AI subset that learns patterns from data rather than fixed rules." },
    { term: "Supervised learning", definition: "Training on labelled examples for prediction or classification." },
    { term: "Unsupervised learning", definition: "Finding patterns or clusters in unlabelled data." },
    { term: "Reinforcement learning", definition: "Learning through rewards and penalties from actions." },
    { term: "IoT", definition: "Network of physical devices collecting and exchanging data." },
  ],
  concepts: [
    {
      id: "edxbtecit-u7-l3-aiml",
      title: "Artificial Intelligence and Machine Learning",
      skill: "Explain AI and machine-learning concepts and evaluate responsible use.",
      lesson: {
        sections: [
          {
            heading: "AI and machine learning",
            body: "AI enables systems to perform tasks such as recognising images, understanding language and making predictions. Machine learning is a subset of AI that learns patterns from data rather than following only fixed rules. Deep learning uses layered neural networks for complex patterns.",
          },
          {
            heading: "Learning types",
            body: "Supervised learning trains on labelled examples for classification or prediction. Unsupervised learning finds clusters or patterns in unlabelled data. Reinforcement learning learns through rewards and penalties. The right approach depends on whether labelled data and clear outcomes exist.",
          },
          {
            heading: "Limits and governance",
            body: "ML systems depend on data quality, can inherit bias and may be hard to explain. Models need evaluation for accuracy, fairness and robustness. Governance includes impact assessments, human oversight, explainability, consent and audit trails.",
          },
        ],
        keyFormulas: [
          { name: "AI vs ML", statement: "AI performs intelligent tasks; ML learns patterns from data." },
          { name: "Learning types", statement: "Supervised=labels; unsupervised=patterns; reinforcement=rewards." },
          { name: "Bias risk", statement: "Biased training data can produce unfair model outcomes." },
        ],
        workedExample: {
          problem: "A bank wants to predict loan default. Should it use supervised or unsupervised learning?",
          solution: "Supervised learning, because historical labelled examples of defaults are available to train a predictive model.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u7-l3-aiml-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of machine learning?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Spam filter improving from labelled emails"
                    },
                    {
                              "id": "b",
                              "text": "A calculator adding numbers"
                    },
                    {
                              "id": "c",
                              "text": "A printed manual"
                    },
                    {
                              "id": "d",
                              "text": "A wired keyboard"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Machine learning",
                              "statement": "Systems learn patterns from data rather than only fixed rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spam filter improves from labelled examples.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Spam filter improving from labelled emails"
},
        },
        {
          id: "edxbtecit-u7-l3-aiml-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three applications of AI in business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AI applications",
                              "statement": "AI supports prediction, automation, recognition and decision support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fraud detection or risk scoring.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Customer service chatbots or recommendation systems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Image/speech recognition or process automation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Fraud detection, chatbots/recommendations, recognition/automation."
},
        },
        {
          id: "edxbtecit-u7-l3-aiml-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between supervised and unsupervised learning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Learning types",
                              "statement": "Supervised uses labels; unsupervised finds patterns without labels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Supervised trains on labelled input-output examples.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unsupervised finds clusters/patterns in unlabelled data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Supervised suits prediction/classification.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unsupervised suits exploration and segmentation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Supervised=labelled training; unsupervised=pattern discovery."
},
        },
        {
          id: "edxbtecit-u7-l3-aiml-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why AI systems can produce biased outcomes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Algorithmic bias",
                              "statement": "Models learn patterns from data; biased or unrepresentative data creates biased outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Training data may under-represent groups.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Historical discrimination can be encoded in labels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Proxy variables may correlate with protected attributes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Model optimisation may prioritise accuracy over fairness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bias testing and diverse data reduce risk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Bias comes from data, labels, proxies and objectives; mitigate with testing and governance."
},
        },
        {
          id: "edxbtecit-u7-l3-aiml-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Choose the most suitable learning approach for each task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict whether an email is spam using labelled examples.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Group customers with similar buying behaviour without labels.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Train a robot to improve through trial and reward.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Learning selection",
                              "statement": "Match supervised, unsupervised or reinforcement learning to data and goal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labelled spam examples = supervised classification.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Unlabelled customer data = unsupervised clustering.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Trial and reward = reinforcement learning.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Supervised, unsupervised, reinforcement."
},
        },
        {
          id: "edxbtecit-u7-l3-aiml-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A retailer wants an ML system to predict product demand.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify suitable data sources and features.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Choose supervised or unsupervised learning and justify.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State two evaluation and governance controls.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "ML project design",
                              "statement": "Data quality, appropriate learning type and evaluation controls determine useful predictions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sources: sales history, stock, promotions, seasonality.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Features: price, category, location, time.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Check data quality and representativeness.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Supervised because historical demand labels exist.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Unsupervised would not predict labelled demand well.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Evaluate accuracy/error on holdout data.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Monitor drift and retrain periodically.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Document model, data sources and decisions for audit.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Keep human review for high-impact forecasts.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Sales/stock/promotion data; supervised learning; evaluation, monitoring and governance."
},
        },
      ],
    },
    {
      id: "edxbtecit-u7-l3-iotethics",
      title: "IoT and Ethical Governance",
      skill: "Describe IoT and edge computing and evaluate ethical safeguards.",
      lesson: {
        sections: [
          {
            heading: "IoT systems",
            body: "IoT connects physical devices, sensors, connectivity and data platforms. Examples include smart meters, wearables, industrial sensors and connected vehicles. Devices collect data continuously and can trigger automated actions.",
          },
          {
            heading: "Edge computing",
            body: "Edge computing processes data near the device instead of sending everything to a central server. Benefits include lower latency, reduced bandwidth and continued operation during connectivity loss. Risks include limited resources and distributed security.",
          },
          {
            heading: "Ethics and governance",
            body: "IoT raises privacy, security, safety and accountability issues. Governance includes privacy impact assessments, data minimisation, encryption, access control, retention limits, human oversight and clear accountability for automated decisions.",
          },
        ],
        keyFormulas: [
          { name: "IoT components", statement: "Devices + sensors + connectivity + data processing." },
          { name: "Edge computing", statement: "Process data near the source to reduce latency/bandwidth." },
          { name: "Ethics", statement: "Privacy, security, fairness, transparency, accountability, human oversight." },
        ],
        workedExample: {
          problem: "A city installs smart bins that report fill levels. Identify one benefit and one privacy risk.",
          solution: "Benefit: efficient collection routes. Risk: location data could reveal movement patterns; mitigate with minimisation and retention limits.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u7-l3-iotethics-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of an IoT device?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Smart meter sending usage data"
                    },
                    {
                              "id": "b",
                              "text": "Printed paper map"
                    },
                    {
                              "id": "c",
                              "text": "Standalone calculator"
                    },
                    {
                              "id": "d",
                              "text": "Paper invoice"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IoT",
                              "statement": "Connected devices collect and exchange data over a network."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Smart meter is a connected sensor/device.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Smart meter sending usage data"
},
        },
        {
          id: "edxbtecit-u7-l3-iotethics-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three components of an IoT system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IoT system",
                              "statement": "Devices, sensors, connectivity and data processing work together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Physical devices/sensors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Connectivity/network.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Data processing/analytics platform.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Devices/sensors, connectivity, data processing."
},
        },
        {
          id: "edxbtecit-u7-l3-iotethics-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain one benefit of edge computing in IoT.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Edge computing",
                              "statement": "Processing near the device can reduce latency and bandwidth use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data is processed locally instead of server-first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Latency is reduced for time-sensitive actions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bandwidth use falls because less raw data is sent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "System can keep basic functions during connectivity loss.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Edge computing reduces latency/bandwidth and improves resilience."
},
        },
        {
          id: "edxbtecit-u7-l3-iotethics-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the benefits and risks of smart city IoT sensors.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "IoT trade-offs",
                              "statement": "IoT improves monitoring and efficiency but creates privacy/security risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefits: traffic optimisation, energy savings, faster emergency response.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Risks: surveillance, data breaches, device hacking.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Risks: dependency on connectivity and maintenance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Controls: encryption, access control, data minimisation, governance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conclusion: benefits require strong governance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "IoT improves efficiency but needs security, privacy and governance controls."
},
        },
        {
          id: "edxbtecit-u7-l3-iotethics-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A school installs IoT sensors to monitor classroom occupancy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two privacy risks.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two governance controls.",
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
                              "name": "IoT ethics",
                              "statement": "Occupancy monitoring needs purpose limitation, security and transparency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Risk: tracking individuals/staff movements.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Risk: data breach exposes presence patterns.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Risk: function creep beyond stated purpose.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Control: aggregate/anonymise data and limit retention.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Control: encryption, access control and audit logs.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Control: inform users and provide oversight/appeal.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Movement tracking/breach/function creep; anonymise, secure and inform users."
},
        },
        {
          id: "edxbtecit-u7-l3-iotethics-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A council proposes networked smart bins across the city.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three ethical or legal concerns.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest three technical or governance safeguards.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Give a balanced recommendation.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "IoT governance",
                              "statement": "Networked public sensors require privacy, security, proportionality and accountability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Privacy concern: fill/collection data could reveal usage patterns.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Security concern: compromised bins could disrupt services or attack network.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Accountability concern: automated collection decisions need review.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Legal concern: data protection and proportionality.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Safeguard: data minimisation and retention limits.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Safeguard: encryption, authentication and network segmentation.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Safeguard: audits, incident response and human oversight.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Safeguard: public transparency about purpose and data use.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Recommendation: proceed with safeguards and evaluate benefits.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Balanced view: efficiency gain must justify privacy/security cost.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Privacy/security/accountability concerns; minimise, encrypt, audit; proceed only with safeguards."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u7-l3-notes",
      title: "AI, IoT and ethics — notes",
      summary: "AI and machine learning learn patterns from data; IoT connects devices; both need security, fairness and governance.",
      sections: [
        { heading: "AI/ML", body: "Supervised uses labels, unsupervised finds patterns, reinforcement learns from rewards; bias can come from data." },
        { heading: "IoT", body: "Connected devices and sensors collect data for automation and monitoring; edge processing reduces latency." },
        { heading: "Ethics", body: "Manage bias, privacy, transparency, accountability, human oversight and impact assessments." },
      ],
    },
  ],
};
