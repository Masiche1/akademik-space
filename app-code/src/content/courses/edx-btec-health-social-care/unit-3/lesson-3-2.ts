import type { Lesson } from "../../../types.ts";

export const lesson302: Lesson = {
  id: "edxbtechsc-u3-lesson-3-2",
  code: "3-2",
  title: "Consent, Confidentiality and Safeguarding",
  goal: "I CAN explain consent, confidentiality and safeguarding duties in health and social care practice.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 3: Principles of Health and Social Care Practice",
  ],
  vocabulary: [
    {
      term: "Consent",
      definition:
        "Voluntary agreement to a proposed action after being given sufficient information — the foundation of lawful care.",
    },
    {
      term: "Capacity",
      definition:
        "The ability to understand, retain, weigh and communicate a decision about a particular matter.",
    },
    {
      term: "Confidentiality",
      definition:
        "The duty to protect personal information from unauthorised disclosure.",
    },
    {
      term: "Safeguarding",
      definition:
        "Protecting individuals from abuse, neglect and exploitation — a legal duty under the Care Act 2014.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u3-l2-consent",
      title: "Consent and Mental Capacity",
      skill:
        "Apply consent principles including capacity assessment and the Mental Capacity Act.",
      lesson: {
        sections: [
          {
            heading: "Consent",
            body: "**Valid consent** requires: the person has **capacity** to decide, consent is **voluntary** (free from coercion), they have been given **sufficient information**, and they **agree** to the specific action. Consent can be withdrawn at any time.\n\nTreating without consent is **assault** — even with good intentions. Implied consent (e.g. extending an arm for a blood test) is valid for routine procedures but explicit consent is needed for significant interventions.",
          },
          {
            heading: "Mental Capacity Act 2005",
            body: "The MCA presumes capacity unless proven otherwise. If someone lacks capacity for a specific decision, the **best interests** framework applies: consider their wishes, feelings, beliefs and values; consult family/carers; use least restrictive options.\n\n**Advance decisions** and **lasting power of attorney** let people plan ahead. Deprivation of liberty requires court authorisation — the liberty protection safeguards (LPS) replaced DoLS in 2022.",
          },
        ],
        keyFormulas: [
          {
            name: "Valid consent",
            statement: "Capacity + voluntary + informed + specific agreement.",
          },
          {
            name: "Best interests",
            statement: "Decision framework for those lacking capacity.",
          },
        ],
        workedExample: {
          problem:
            "A resident with dementia refuses medication but family says 'just give it'. Analyse.",
          solution:
            "Assuming incapacity requires assessment. If they lack capacity, best-interests framework applies — family view is one factor; medication must be in their best interests, least restrictive. Coercion invalidates consent.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u3-l2-consent-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Valid consent requires all EXCEPT:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sufficient information" },
              { id: "b", text: "Capacity" },
              { id: "c", text: "Written signature always" },
              { id: "d", text: "Voluntary agreement" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Valid consent",
                statement:
                  "Consent need not be written — verbal/implied can suffice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Written form is not legally required for most care.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Written signature",
            commonErrors: ["Thinking all consent must be written."],
          },
        },
        {
          id: "edxbtechsc-u3-l2-consent-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'presumption of capacity' under the Mental Capacity Act.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Presumption of capacity",
                statement:
                  "Adults are assumed capable of decisions unless assessed otherwise.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "M" },
              {
                reasoning: "Capacity is decision-specific and time-specific.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Burden of proof on those claiming incapacity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Everyone is presumed capable; incapacity must be assessed per decision, not globally assumed.",
            commonErrors: [
              "Global incapacity assumption.",
              "No decision-specificity.",
            ],
          },
        },
        {
          id: "edxbtechsc-u3-l2-consent-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A resident with learning disabilities wants to refuse a recommended operation. Their carer insists 'the doctor knows best'. Analyse the consent issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consent and autonomy",
                statement:
                  "Capable adults may refuse treatment even if others disagree.",
              },
            ],
            steps: [
              {
                reasoning: "Assess capacity first — may well have capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "If capable, refusal must be respected.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Carer's view doesn't override autonomy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "If lacking capacity, best-interests applies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Assuming capacity, refusal stands — autonomy outweighs 'doctor knows best'; if incapacity shown, best-interests framework applies.",
            commonErrors: [
              "Ignoring capacity assessment.",
              "Treating refusal as invalid automatically.",
            ],
          },
        },
        {
          id: "edxbtechsc-u3-l2-consent-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An elderly patient with dementia is admitted for surgery.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain how capacity should be assessed for the surgical decision.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Describe the best-interests process if capacity is lacking.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Identify two ways the patient's prior wishes could inform the decision.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MCA framework",
                statement:
                  "Presumption of capacity; decision-specific assessment; best interests if lacking.",
              },
            ],
            steps: [
              {
                reasoning: "Capacity assessed for this specific decision.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Understand/retain/weigh/communicate criteria.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Decision-specificity emphasised.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Best interests: wishes/feelings/beliefs considered.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Consultation of family/carers/advocate.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Least restrictive option principle.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Advance decision/living will mentioned.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Past expressed wishes considered.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) decision-specific capacity assessment (b) best interests + consultation + least restrictive (c) advance decision, past wishes",
            commonErrors: [
              "Global capacity judgment.",
              "Family decides automatically.",
            ],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u3-l2-safeguarding",
      title: "Confidentiality and Safeguarding",
      skill:
        "Apply confidentiality principles and identify safeguarding responsibilities and procedures.",
      lesson: {
        sections: [
          {
            heading: "Confidentiality",
            body: "Personal information shared in care is confidential — it should only be disclosed with consent, where required by law, or where necessary to protect someone from harm. The **Data Protection Act 2018** and **UK GDPR** govern information handling: data must be accurate, secure, minimal and purpose-limited.\n\nExceptions to confidentiality: safeguarding concerns (child protection, adult abuse), court orders, serious crime, public health threats (e.g. notifiable diseases). Information should be shared on a 'need to know' basis — not blanket disclosure.",
          },
          {
            heading: "Safeguarding",
            body: "**Safeguarding** means protecting people from abuse, neglect and exploitation — a statutory duty under the **Care Act 2014** (adults) and **Children Act 2004** (children). Abuse types: physical, emotional, sexual, financial, neglect, discriminatory, organisational, modern slavery.\n\nAll care workers have a **duty to report** concerns — failing to report is itself misconduct. Procedures: recognise signs → record accurately → report to safeguarding lead → follow local procedures → cooperate with investigations. The **six principles of adult safeguarding**: empowerment, prevention, proportionality, protection, partnership, accountability.",
          },
        ],
        keyFormulas: [
          {
            name: "Confidentiality exceptions",
            statement: "Consent, legal requirement, protection from harm.",
          },
          {
            name: "Six safeguarding principles",
            statement:
              "Empowerment, prevention, proportionality, protection, partnership, accountability.",
          },
        ],
        workedExample: {
          problem:
            "A resident tells a carer they are being financially exploited by a family member. What should the carer do?",
          solution:
            "Recognise safeguarding concern → reassure resident → record facts accurately → report to safeguarding lead immediately → follow local safeguarding procedures. Do not confront the family member or promise secrecy.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u3-l2-safeguarding-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When can confidential information be shared without consent?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "When required by law or to protect someone from harm",
              },
              { id: "b", text: "Never" },
              { id: "c", text: "For gossip" },
              { id: "d", text: "With family always" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Confidentiality limits",
                statement:
                  "Legal duty and harm protection override confidentiality.",
              },
            ],
            steps: [
              {
                reasoning: "Legal/safeguarding exceptions exist.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Law/harm protection",
            commonErrors: ["Absolute confidentiality misconception."],
          },
        },
        {
          id: "edxbtechsc-u3-l2-safeguarding-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the six principles of adult safeguarding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Six safeguarding principles",
                statement:
                  "Empowerment, prevention, proportionality, protection, partnership, accountability.",
              },
            ],
            steps: [
              {
                reasoning: "First three principles named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Last three principles named.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "All six correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Empowerment, prevention, proportionality, protection, partnership, accountability.",
            commonErrors: ["Missing principles.", "Vague paraphrase only."],
          },
        },
        {
          id: "edxbtechsc-u3-l2-safeguarding-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A care worker notices unexplained bruising on a non-verbal resident. Explain the correct safeguarding response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Safeguarding response",
                statement:
                  "Recognise, record, report to safeguarding lead, follow procedures.",
              },
            ],
            steps: [
              {
                reasoning: "Recognises potential abuse sign.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Records facts accurately (not speculation).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reports to safeguarding lead promptly.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Doesn't confront suspected abuser or promise secrecy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Record facts, report to safeguarding lead, follow procedures — do not confront or keep secret.",
            commonErrors: [
              "Confronting family.",
              "Waiting to see if it happens again.",
              "Vague 'tell someone'.",
            ],
          },
        },
        {
          id: "edxbtechsc-u3-l2-safeguarding-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A care worker's friend asks for details about a resident's health condition 'just between us'.",
          parts: [
            {
              label: "a",
              prompt: "Explain why this breaches confidentiality.",
              marks: 2,
            },
            { label: "b", prompt: "Describe the correct response.", marks: 3 },
            {
              label: "c",
              prompt:
                "Identify two situations where sharing would be legitimate.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Confidentiality",
                statement:
                  "Personal health information is protected; sharing requires consent or legal/safeguarding exception.",
              },
            ],
            steps: [
              {
                reasoning: "Personal data protected by law.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Breach = misconduct/legal violation.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Decline politely and firmly.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Can explain confidentiality duty without details.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Report if pressured/persistent.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Legitimate sharing 1: consent.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Legitimate sharing 2: safeguarding/legal requirement.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Need-to-know principle stated.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) breach of confidentiality law (b) decline + explain duty + report pressure (c) consent or safeguarding/legal",
            commonErrors: [
              "Sharing 'anonymised' details.",
              "No escalation for pressure.",
            ],
          },
        },
      ],
    },
  ],
};
