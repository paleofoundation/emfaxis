export type Section={title:string;text:string;refs?:string[]};
export type Guide={id:string;title:string;category:string;intro:string;takeaway:string;sections:Section[];questions:{q:string;a:string}[]};
export const references:Record<string,{title:string;url:string}>={
 'de-iuliis-correction':{title:'PLOS ONE correction to De Iuliis et al. (2013): Figure 1D and biological replicates',url:'https://journals.plos.org/plosone/article?id=10.1371/annotation/9a8a0172-3850-4059-b852-72c330769c1b'},
 icnirp:{title:'ICNIRP radiofrequency exposure guidelines (2020)',url:'https://www.icnirp.org/en/publications/article/rf-guidelines-2020.html'},
 lf:{title:'ICNIRP: low-frequency fields',url:'https://www.icnirp.org/en/frequencies/low-frequency/index.html'},
 iarc:{title:'IARC radiofrequency hazard classification (2011)',url:'https://www.iarc.who.int/wp-content/uploads/2018/07/pr208_E.pdf'},
 fda:{title:'FDA: cell phones',url:'https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/cell-phones'}
};
export const guides:Guide[]=[
  {
    "id": "basics",
    "title": "EMFs, without the confusion",
    "category": "START HERE",
    "intro": "A field is not a diagnosis. Begin with frequency, intensity, duration, and what was actually measured.",
    "takeaway": "“EMF” describes many exposures. A result about one frequency, dose, or biological system cannot automatically answer a question about another.",
    "sections": [
      {
        "title": "One umbrella term, different exposures",
        "text": "Electrical power systems produce low-frequency fields. Wireless devices use radiofrequency fields. These differ from the ionizing radiation used in X-ray imaging. The starting point for any comparison is the frequency and the source, rather than the word “radiation” alone. For a specific claim, identify the actual signal, the device’s operating state and the quantity being measured. An electrical wiring study and a handset experiment can use the same broad EMF vocabulary while examining very different physical conditions. Keeping that description attached to the result prevents an apparent agreement that arises only from using an umbrella label.",
        "refs": [
          "lf",
          "icnirp"
        ]
      },
      {
        "title": "A biological change is not automatically an injury",
        "text": "A study can detect a physiological response without showing disease. An EEG finding, a change in isolated cells, and a diagnosed tumor are different endpoints. They answer different questions and should appear in separate evidence categories. The missing step is the connection between the observed measurement and the proposed harm. A physiological feature may be worth studying without being a validated marker of disease. Likewise, a negative result for one feature does not exclude all other endpoints. The useful account explains the actual change, its uncertainty and which clinical question was left unmeasured.",
        "refs": [
          "5g-sleep",
          "de-iuliis",
          "de-iuliis-correction"
        ]
      },
      {
        "title": "Hazard and everyday risk",
        "text": "IARC classified radiofrequency fields as possibly carcinogenic in 2011. A hazard classification describes the strength of evidence that an agent can cause cancer; it is not a probability that a particular exposure will harm you. Read that classification alongside the subsequent primary studies. The population and exposure history are also part of the risk question. A classification does not specify the probability for a particular age, task or absorbed dose. Later cohorts and animal experiments contribute different observations to that assessment. They need to retain their design and endpoint rather than being treated as simple votes for or against a label.",
        "refs": [
          "iarc",
          "cosmos",
          "ntp-rats"
        ]
      },
      {
        "title": "Four questions to ask of any headline",
        "text": "What exposure was tested? In whom—or in which cells or species? What outcome changed? How well does that setup resemble the question you are trying to answer? These questions are often more useful than a simple safe/unsafe label. Follow each answer back to the method that produced it. A questionnaire identifies reported use, a meter characterizes a physical quantity and a clinical record identifies an outcome. If the headline substitutes one for another, it has made an extra inference. Asking which source supports that step makes the claim more transparent and often identifies the evidence still needed."
      }
    ],
    "questions": [
      {
        "q": "Does non-ionizing mean no biological effects?",
        "a": "No. Sufficiently intense non-ionizing fields can have established effects. The relevant question is whether the exposure in question causes an adverse outcome, at what level, and with what uncertainty."
      },
      {
        "q": "Can all EMFs be given one safety score?",
        "a": "No. A meaningful assessment must specify frequency, exposure conditions, population, and outcome."
      }
    ]
  },
  {
    "id": "wireless",
    "title": "Mobile phones, Wi-Fi & cancer",
    "category": "WIRELESS EXPOSURE",
    "intro": "Read the human evidence, understand the disputed findings, and keep animal evidence in view.",
    "takeaway": "The large cohorts included here do not show increased brain-tumor risk under the conditions studied. Some case-control and animal findings warrant continued investigation.",
    "sections": [
      {
        "title": "What the human cohorts contribute",
        "text": "COSMOS and the Million Women Study followed participants forward and linked them to cancer records. Their results did not show an increase in the brain tumors examined. Cohorts reduce some recall problems, but exposure misclassification and limited numbers of rare tumors remain important. Their strength is the sequence from exposure information to subsequent diagnosis. That sequence reduces reliance on remembering use after learning of a tumour, while leaving other exposure errors, participant selection and follow-up limitations. Read the actual use categories and subtype-specific precision before extending the conclusion to unusually heavy use, a different age group or every wireless signal.",
        "refs": [
          "cosmos",
          "million-women"
        ]
      },
      {
        "title": "Why INTERPHONE is still discussed",
        "text": "The highest recalled call-time category had elevated glioma odds, while the overall results did not show an increase. The authors highlighted bias and implausible use reports. Reporting only the high-use result—or only the overall result—loses essential context. The highest category must remain attached to the result rather than becoming a statement about every participant. Recalled use after diagnosis, selective participation and subgroup analyses can complicate interpretation. The finding still belongs in the discussion, with those limitations explicit. Comparing it with prospective evidence means explaining the different methods rather than removing the result or treating it as decisive alone.",
        "refs": [
          "interphone"
        ]
      },
      {
        "title": "Where Wi-Fi and 5G fit",
        "text": "A study of older mobile-phone call patterns is not a direct long-term study of Wi-Fi or every 5G band. Read the technology, dosimetry, and exposure duration before transferring a conclusion. The 2020 ICNIRP RF guidance covers these technologies, but guidelines and original health-outcome studies serve different purposes. A generation or network name does not define the body region, absorbed quantity or endpoint. A controlled sleep comparison tests its stated signals and observation window. A long-term phone cohort describes its own historical use and diagnoses. Their shared radiofrequency category is useful context, with no basis for substituting one result for the clinical question the other did not measure.",
        "refs": [
          "icnirp"
        ]
      },
      {
        "title": "What remains unsettled",
        "text": "Very long latency, changing use patterns, early-life exposure, and rare outcomes are difficult to study. Animal findings can flag a hazard for investigation; they do not provide a numerical estimate of the risk from using your phone. The useful next comparison would state its exposure history, outcome, follow-up and planned analysis before interpreting a selected result. Rare diagnoses require enough events to give meaningful precision, and changing use patterns require suitable exposure measures. These limitations do not erase existing observations; they identify which questions the current evidence can answer and where another study would add information.",
        "refs": [
          "ramazzini",
          "ntp-rats"
        ]
      }
    ],
    "questions": [
      {
        "q": "Does this prove that phones can never cause cancer?",
        "a": "No study proves a universal negative. The relevant conclusion is limited to the populations, exposure measures, outcomes, and follow-up studied."
      },
      {
        "q": "Is Wi-Fi the same exposure as a phone held to the head?",
        "a": "No. Both involve RF, but distance, transmitted power, frequency, and usage affect exposure. Do not substitute one for the other."
      }
    ]
  },
  {
    "id": "power-lines",
    "title": "Power lines & childhood leukemia",
    "category": "POWER-FREQUENCY FIELDS",
    "intro": "An epidemiological signal deserves careful explanation—not dismissal or a universal distance rule.",
    "takeaway": "Higher residential magnetic-field categories have been associated with childhood leukemia in pooled observational data. Whether the relationship is causal remains unresolved.",
    "sections": [
      {
        "title": "The association behind the concern",
        "text": "Two influential pooled analyses found higher leukemia estimates in their highest magnetic-field categories. These used individual study data and partly overlapping evidence; they must not be counted as entirely independent replications. The result concerns the groups and exposure estimates used in those observational analyses. It should not be read as a prediction for an individual child or a causal conclusion obtained by experiment. The contributing source studies also overlap between pooled reports. Counting the pooled publications as fresh cohorts would exaggerate the amount of independent evidence supporting the association.",
        "refs": [
          "ahlbom",
          "greenland"
        ]
      },
      {
        "title": "Distance is an imperfect substitute for exposure",
        "text": "Draper and colleagues reported an association with birth-address proximity to power lines. Its extension to distances where line-related fields would be much lower complicates an EMF explanation. A map distance does not measure your home’s magnetic field. The location proxy also has a time window: a birth address does not describe every later residence or activity. A current reading can help characterize a present source but cannot reconstruct all of that earlier history. To compare studies, keep the actual proxy and its timing visible rather than silently translating distance into a continuous personal magnetic-field dose.",
        "refs": [
          "draper"
        ]
      },
      {
        "title": "A category boundary is not a clinical threshold",
        "text": "The 0.3–0.4 μT values often quoted came from exposure categories in observational research. They are not demonstrated boundaries between harmless and harmful exposure, and a momentary reading is not equivalent to a long-term residential average. The distinction matters when a household reading is compared with an epidemiological category. One is a physical observation under recorded conditions; the other organizes participants for a statistical comparison. Neither observation establishes where an individual disease begins. A regulatory assessment has its own applicable metric and averaging conditions, while the chronic association needs its own causal and bias appraisal.",
        "refs": [
          "ahlbom",
          "greenland"
        ]
      },
      {
        "title": "A better next question",
        "text": "If a specific property is the concern, establish what field is being measured, under what load, and over what period. A competent assessment should document those conditions and explain uncertainty. Use a clinician for health questions and an appropriately qualified professional for electrical investigations. A useful answer would identify the source, operating conditions, measurement location and the historical period relevant to the concern. It would also state which clinical evidence actually matches those conditions. That approach can improve an exposure description without claiming that a map, a present-day maximum or one selected research category supplies a validated prediction for a household."
      }
    ],
    "questions": [
      {
        "q": "Is there a universal safe distance from a power line?",
        "a": "The studies here do not establish one. Field strength depends on the installation, load, geometry, and other sources."
      },
      {
        "q": "Should I interpret one high meter reading as a cancer risk?",
        "a": "No. A spot reading cannot establish long-term dose or predict an individual health outcome."
      }
    ]
  },
  {
    "id": "symptoms",
    "title": "Symptoms, sensitivity & cognition",
    "category": "BRAIN & BEHAVIOR",
    "intro": "Take symptoms seriously while testing explanations carefully.",
    "takeaway": "Blinded symptom studies and observational memory studies ask different questions. Neither should be used to dismiss a person’s experience or diagnose its cause.",
    "sections": [
      {
        "title": "Why blinding matters",
        "text": "When people know an exposure is present, expectation can influence symptom reports. Eltiti and colleagues compared open and blinded conditions; a second small trial compared real and sham phone exposures. Their blinded results did not support the tested RF exposures as the immediate symptom trigger. The participant’s experience and the exposure assignment are separate observations in that test. A sham comparison helps determine whether symptoms differ with the actual signal under the protocol. It does not explain every symptom outside the laboratory, and a nonsignificant difference does not prove equivalence without considering precision. The participant group, masking and observation window belong with the result.",
        "refs": [
          "eltiti",
          "headache"
        ]
      },
      {
        "title": "Memory evidence asks a different question",
        "text": "HERMES examined estimated brain dose and memory change in adolescents over a year. Associations differed by analysis and exposure source. The full-sample confidence interval included no difference, while selected analyses suggested an association. A memory task has its own score and timing, and repeated testing can change performance. A prospective association with modeled dose is different from an acute symptom comparison with sham. These sources can appear together in a research library while answering different questions. Neither should be described as a direct replication or clinical explanation of the other’s endpoint.",
        "refs": [
          "hermes"
        ]
      },
      {
        "title": "Symptoms deserve appropriate care",
        "text": "Headaches, fatigue, sleep problems, and difficulty concentrating can have many contributors. Keep a useful record of timing and circumstances and discuss persistent symptoms with a clinician. A label such as “EMF sensitivity” does not by itself identify a mechanism. The scientific appraisal should therefore distinguish symptom burden, the proposed trigger and evidence for an intervention. Recognizing that someone is affected does not require assuming a particular physical mechanism. Testing an attribution likewise does not decide every clinical cause. The sources here inform a bounded research question and do not provide an individual diagnosis or establish a tested treatment plan."
      },
      {
        "title": "Avoid two common overinterpretations",
        "text": "A negative short laboratory test does not address every possible chronic outcome. Conversely, feeling better after changing several habits does not isolate which change helped. Exposure, expectation, screen use, stress, and sleep routines need to be considered separately. The right interpretation names what the study actually tested and how precisely it measured the difference. A narrow null result does not settle every source or chronic exposure; an unblinded association does not isolate the field from other changing factors. Both limits can be stated together while preserving the reported observation and the reality of the participant’s symptoms."
      }
    ],
    "questions": [
      {
        "q": "Does a nocebo explanation mean symptoms are imagined?",
        "a": "No. Expectations can contribute to real symptoms. It remains important to investigate other explanations and provide care."
      },
      {
        "q": "Can this website diagnose EMF sensitivity?",
        "a": "No. These guides explain research and do not provide a diagnostic test or individualized medical assessment."
      }
    ]
  },
  {
    "id": "sleep",
    "title": "EMFs, sleep & the brain",
    "category": "SLEEP RESEARCH",
    "intro": "Distinguish a brain-wave finding from insomnia, and radiation exposure from device habits.",
    "takeaway": "A controlled 2025 study reported a genotype-dependent EEG change. Its clinical meaning and generalizability remain uncertain.",
    "sections": [
      {
        "title": "What the 5G experiment measured",
        "text": "Sousouri and colleagues tested two signals before sleep in 34 volunteers. A change in sleep-spindle frequency appeared after the 3.6 GHz exposure in one genotype group. This is a physiological endpoint, not a demonstration that everyday 5G causes insomnia. The feature is part of a defined analysis, rather than a direct measure of lost sleep or a diagnosis of insomnia. Its genotype-specific population and short protocol limit wider interpretation. A useful summary retains that scope, the comparator and remaining uncertainty. It cannot convert an EEG observation into a population-wide clinical effect simply because the endpoint was recorded during sleep.",
        "refs": [
          "5g-sleep"
        ]
      },
      {
        "title": "Dose, timing, and people matter",
        "text": "Brief exposure before sleep differs from overnight exposure. Healthy volunteers selected by genotype are not the same as a population of people with insomnia. Replication should test both the signal and outcomes people notice in daily life. The observation window must fit the claim as well. Exposure before one recorded night does not reproduce years of household use. An external signal description does not automatically specify energy absorbed in every tissue. To compare another experiment, retain the frequency, geometry, schedule and sleep instrument, then identify which differences could affect what the result means."
      },
      {
        "title": "Separate the device from the signal",
        "text": "Turning off a device can also remove alerts, light, late-night activity, or worry. If several factors change at once, an improvement in sleep cannot identify RF as the cause. A sham-controlled exposure study is designed to isolate more of that question. A useful comparison records which components changed together, rather than assuming one caused any improvement. Light, activity and notifications are possible alternatives to examine, not established explanations for every observation. A trial designed to isolate a specified signal needs an appropriate sham or comparator and a defined sleep endpoint. A routine change alone cannot perform that separation."
      },
      {
        "title": "A practical way to read sleep claims",
        "text": "Ask whether the study measured sleep quality, time asleep, awakenings, or only an EEG feature. Check whether the comparison was blinded and whether the endpoint was selected before analysis. Do not convert a measurable brain-wave change into a diagnosis. Also ask when exposure information was collected and whether the sleep outcome was reported, instrumented or clinically assessed. A questionnaire domain, wrist-based estimate and EEG feature do not measure identical things. The claim becomes more useful when its wording follows the actual instrument and comparison, with no conversion into an unmeasured number of minutes or a promised sleep benefit."
      }
    ],
    "questions": [
      {
        "q": "Does an EEG change prove damage?",
        "a": "No. A measurable physiological change and an adverse clinical outcome are separate claims."
      },
      {
        "q": "Has every 5G frequency been tested in this study?",
        "a": "No. It tested specified 700 MHz and 3.6 GHz signals under a particular exposure protocol."
      }
    ]
  },
  {
    "id": "fertility",
    "title": "Phones, sperm & fertility",
    "category": "REPRODUCTIVE HEALTH",
    "intro": "Semen parameters, isolated sperm cells, and time to pregnancy are not interchangeable outcomes.",
    "takeaway": "The selected human studies give mixed results. Laboratory effects raise research questions but cannot establish infertility from ordinary phone use.",
    "sections": [
      {
        "title": "What the Swiss semen study found",
        "text": "Rahban and colleagues studied phone habits and semen samples in young men. More frequent use was associated with lower total count, with differences across measures. The design cannot isolate RF from phone-related behaviors or establish cause. The exposure variable is a reported behavior, rather than a measurement of energy absorbed by reproductive tissue. A cross-sectional analysis also leaves the time sequence and residual differences between participants to assess. Its sperm concentration and total count findings should therefore keep their endpoint and design attached, rather than being translated directly into inability to conceive or a causal RF effect.",
        "refs": [
          "rahban"
        ]
      },
      {
        "title": "Pregnancy outcomes offer another perspective",
        "text": "Two preconception cohorts found little overall association with carrying a phone in a front pocket. A leaner subgroup differed. This result deserves context, including imprecise exposure measurement and the uncertainty of subgroup analyses. Conception over time is a different endpoint from a semen marker measured once. Its prospective sequence is useful, while phone location remains an imperfect exposure proxy and selected subgroup estimates need caution. The result does not cancel a laboratory finding; each source addresses a different part of the reproductive question, with its own population, measurement and potential bias.",
        "refs": [
          "hatch"
        ]
      },
      {
        "title": "What a dish experiment can tell us",
        "text": "An experiment in purified sperm reported oxidative stress and DNA damage under its laboratory exposure conditions. The publisher later corrected a figure and clarified that the experiments used three biological replicates, rather than the four stated in the original figure legends. Isolated cells can help investigate mechanisms, but they do not reproduce an intact body or measure time to pregnancy. This corrected experiment therefore cannot establish infertility from ordinary phone carrying.",
        "refs": [
          "de-iuliis",
          "de-iuliis-correction"
        ]
      },
      {
        "title": "Keep decisions proportional to the evidence",
        "text": "These studies do not establish a fertility treatment or support claims that an EMF accessory improves conception. For fertility concerns, seek a clinical evaluation rather than relying on a device-location rule or a laboratory surrogate. A proportionate conclusion begins with the actual claim: changed semen properties, altered laboratory responses and improved reproductive success require different evidence. An accessory’s attenuation test cannot supply a clinical pregnancy result. The selected studies can identify research questions and limits, while leaving an individual fertility assessment and any treatment decision to evidence appropriate to those clinical purposes."
      }
    ],
    "questions": [
      {
        "q": "Does lower sperm count necessarily mean infertility?",
        "a": "No. Semen measures provide information but are not the same as whether a couple conceives."
      },
      {
        "q": "Do these studies prove that pocket carrying is harmless or harmful?",
        "a": "Neither universal claim is justified. The studies use imperfect exposure proxies and give mixed findings."
      }
    ]
  },
  {
    "id": "children",
    "title": "Children, adolescents & EMFs",
    "category": "EARLY-LIFE EXPOSURE",
    "intro": "Use age-specific evidence and avoid treating adult studies as lifetime reassurance.",
    "takeaway": "Childhood brain tumors, adolescent memory, and childhood leukemia involve different exposures and outcomes. Keep those research tracks separate.",
    "sections": [
      {
        "title": "Brain tumors in young phone users",
        "text": "MOBI-Kids included young people across 14 countries. The authors did not find evidence for a causal association with wireless-phone use, but acknowledged that bias limits the ability to exclude a small risk. The participants and diagnoses define the direct comparison. A case-control study in young people is not follow-up of an entire birth cohort throughout life, and its exposure reconstruction can still be affected by error and participation. The source’s reassuring conclusion and qualification about small increases should be read together rather than treating either phrase as a complete lifetime verdict.",
        "refs": [
          "mobi-kids"
        ]
      },
      {
        "title": "Memory and development",
        "text": "The adolescent HERMES cohort raises a question about figural memory and modeled brain dose. It needs independent confirmation and cannot be read as proof of developmental injury from any wireless device. The named task and exposure model matter as much as age. A memory score is not a measure of every developmental function, and repeated testing can improve performance independently of exposure. Related baseline and follow-up reports add information about their cohort without creating independent replications. The comparison needs to retain its specific population, timing, scale and uncertainty.",
        "refs": [
          "hermes"
        ]
      },
      {
        "title": "Power-frequency fields are a separate question",
        "text": "The childhood-leukemia signal concerns residential magnetic fields, not a general finding about Wi-Fi. Combining these exposures under a single “EMF” headline makes the evidence harder to understand. That boundary is physical and clinical: an association with residential power-frequency categories cannot assign a sleep, cognitive or cancer effect to a household radio network. A child-specific synthesis should describe each source and outcome separately. Evidence from the same age group is not directly transferable when the signal, exposure history and measured endpoint differ.",
        "refs": [
          "ahlbom"
        ]
      },
      {
        "title": "What good future studies need",
        "text": "Long follow-up, improved exposure estimates, prespecified outcomes, and adequate numbers of rare diagnoses are priorities. Studies should distinguish device behavior from absorbed dose and include children at different stages of development. A useful study also needs exposure and outcome measurements aligned to the relevant window. A short task experiment can test its immediate comparison, while a rare diagnosis needs adequate follow-up and events. A phone-use category may change meaning as networks and behavior change. Recording those details makes future comparisons more informative than simply adding another paper to the total."
      }
    ],
    "questions": [
      {
        "q": "Can adult data answer every question about children?",
        "a": "No. Age at exposure, time remaining for follow-up, and patterns of use can differ."
      },
      {
        "q": "Is the leukemia evidence evidence against Wi-Fi?",
        "a": "No. Those studies concern low-frequency residential magnetic fields. Frequency and exposure source must be matched."
      }
    ]
  },
  {
    "id": "measurement",
    "title": "How to interpret an EMF measurement",
    "category": "PRACTICAL GUIDE",
    "intro": "The useful question is not “What number did the meter show?” but “What did it measure?”",
    "takeaway": "A meaningful measurement needs the field type, frequency range, unit, location, operating conditions, and averaging period.",
    "sections": [
      {
        "title": "Start with the units",
        "text": "Magnetic flux density is often reported in microtesla (μT) or milligauss (mG): 1 μT equals 10 mG. Electric-field strength is reported in volts per meter (V/m). RF power density uses watts per square meter (W/m²). SAR is absorbed power per mass in watts per kilogram (W/kg). These are different quantities. The number is meaningful only with that quantity and the conditions under which it was obtained. An external field and an absorbed quantity are related through physical assumptions rather than a universal household conversion. Keep frequency, position, operating state and averaging attached when comparing reports, especially when a peak near equipment is set beside a long-term epidemiological exposure category.",
        "refs": [
          "lf",
          "icnirp"
        ]
      },
      {
        "title": "Match the meter to the question",
        "text": "A power-frequency magnetic-field meter does not characterize every RF source. An RF instrument needs an appropriate frequency range and a known response to the signal. Record model, calibration status, placement, and measurement conditions before drawing comparisons. The instrument must also resolve the part of the exposure relevant to the question. An unsupported frequency or response characteristic cannot be repaired by adding decimal places to the display. A reproducible report gives another reader enough information to repeat the observation and understand its uncertainty, without presenting the reading itself as a clinical assessment."
      },
      {
        "title": "Keep spot readings in context",
        "text": "Device activity, network conditions, electrical load, reflections, and distance can change readings. Peak and averaged values are not interchangeable. A household spot reading should not be compared directly to a long-term average in an epidemiological paper. A useful report therefore says whether the device was idle, connecting or carrying traffic, and how the location and time were chosen. Repeated samples can describe variation rather than independent people. A field survey can improve an exposure description while still leaving personal absorbed dose and any associated health outcome unmeasured. Those limits belong with the reported maximum or average.",
        "refs": [
          "ahlbom"
        ]
      },
      {
        "title": "Avoid an automatic risk verdict",
        "text": "A meter measures a physical quantity, not a diagnosis. Comparing a result with a guideline requires the correct frequency, exposure category, spatial and time averaging, and method. For workplace compliance or complex sources, obtain a qualified assessment. The next step depends on the question. Verifying an exposure description requires suitable measurement methods; a guideline comparison requires its specified rules; a claim about illness requires relevant health evidence. Combining those tasks without explaining their different inputs can make a precise display look like a precise risk estimate. The selected research does not establish that shortcut.",
        "refs": [
          "icnirp"
        ]
      }
    ],
    "questions": [
      {
        "q": "Can I convert μT directly into W/m²?",
        "a": "Not as a general household-field conversion. These describe different quantities, and the relationship depends on the field conditions."
      },
      {
        "q": "Does being below a reference level settle every research question?",
        "a": "A compliance result and a scientific assessment of a proposed chronic effect are different judgments. Use the documented scope and assumptions of the relevant guideline."
      }
    ]
  },
  {
    "id": "animal-studies",
    "title": "What animal studies can tell us",
    "category": "READING THE RESEARCH",
    "intro": "Animal experiments are important hazard evidence. Translating them into a human risk requires additional work.",
    "takeaway": "The NTP and Ramazzini studies reported tumor signals in rats. Those findings should be presented accurately, with their exposure conditions and translation limits.",
    "sections": [
      {
        "title": "The NTP experiment",
        "text": "NTP exposed rats to whole-body 900 MHz RF and evaluated tumors across sexes and tissues. The clearest conclusion concerned malignant heart schwannomas in male rats. Other outcomes received different evidence judgments. The evidence judgment belongs to a particular tissue, sex and experimental setting. Whole-body exposure across much of a rat’s life differs from local exposure during human handset use. Read the pathology, survival and dose methods with the finding. The result can contribute to a hazard discussion without providing an absolute probability for a person using a phone.",
        "refs": [
          "ntp-rats"
        ]
      },
      {
        "title": "The Ramazzini experiment",
        "text": "A separate lifespan study used far-field GSM exposure. Heart schwannomas increased in male rats at the highest tested level. The biological overlap is relevant, but the experiments differ in dose and design. The useful comparison identifies which features converge and which differ. A lower external intensity alone does not establish a lower absorbed quantity in every relevant tissue, and rare tumour results need their actual event and survival information. These studies should be compared as experiments with defined apparatus, schedules and pathology rather than as interchangeable copies of a single exposure.",
        "refs": [
          "ramazzini"
        ]
      },
      {
        "title": "Why neither study supplies your personal risk",
        "text": "A rat bioassay cannot directly provide an absolute risk for a person using a phone. The comparison needs tissue dose, exposure pattern, species biology, age, survival, and the endpoint measured. Lower external intensity does not make every exposure scenario equivalent. The missing translation cannot be supplied by a simple ratio of external field values. A credible model would have to connect the relevant tissue exposure and biological response to human incidence under an appropriate history. The studies can still be informative when that connection is incomplete; their contribution and the remaining unknowns should be described explicitly."
      },
      {
        "title": "Read the full evidence together",
        "text": "Human cohorts and animal experiments have complementary strengths and weaknesses. A credible synthesis should explain disagreement, rather than average unlike designs into a single score or count positive papers against negative papers. Independence needs checking before that comparison begins. A later paper may analyze the same animals, add a tissue endpoint or belong to a coordinated programme. Those reports can add detail without multiplying the independent experiments. A synthesis also needs design-appropriate bias and precision assessment, rather than treating every statistically significant assay or tumour category as an equal vote.",
        "refs": [
          "cosmos",
          "interphone"
        ]
      }
    ],
    "questions": [
      {
        "q": "Should animal findings be ignored because they are not human studies?",
        "a": "No. They are an important source of hazard and mechanistic evidence. Their translation to human risk needs explicit reasoning."
      },
      {
        "q": "Can I divide the dose difference to calculate my cancer risk?",
        "a": "No. These records do not establish a validated dose-to-risk model for that calculation."
      }
    ]
  }
];
