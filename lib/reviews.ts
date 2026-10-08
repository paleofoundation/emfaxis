export type ReviewAnswer={id:string;label:string;text:string;missingReason:string|null;locators:{url:string;section:string;pdfPage:number|null}[]};
export type StudyReview={paperId:string;version:string;sourceBasis:string;checked:string;preview:string;sections:{id:string;title:string;text:string;sourceSections:string[]}[];answers:ReviewAnswer[];sourceUrls:string[];funding:string;correctionsStatus:string};
export const reviews:StudyReview[]=[
  {
    "paperId": "million-women",
    "version": "1.0.1-private-draft",
    "sourceBasis": "Full-text XML read; AI source checks complete; original figure review pending",
    "checked": "2026-10-08",
    "preview": "This prospective study followed older UK women and compared later brain-tumor diagnoses with earlier reports of mobile-phone use. The main comparison did not show higher incidence among phone users. Recording use before diagnosis reduces one important source of recall bias, but the exposure questions were coarse and the cohort cannot settle questions about children, very heavy use or newer technologies. This is an AI-assisted full-text reading, with independent numerical and human review pending.",
    "sections": [
      {
        "id": "summary",
        "title": "Summary",
        "text": "The study asked whether reported mobile-phone use predicted later brain tumors in the UK Million Women Study. Its principal comparison included 776,156 women and did not show increased overall incidence among those reporting phone use. This is a prospective association study: exposure information was collected before the diagnoses being analyzed, rather than reconstructed after someone learned they had a tumor. That timing makes the study useful, but does not turn it into a randomized experiment. Its most defensible contribution is evidence about the patterns of use and population it actually followed. It cannot prove that every possible radiofrequency exposure is harmless, and it does not directly test Wi-Fi, Bluetooth or each generation of mobile technology.",
        "sourceSections": [
          "Introduction; Methods—Exposure Variables",
          "Results, paragraph beginning During 14 years; Methods—Statistical Analyses; Figure 1"
        ]
      },
      {
        "id": "methods",
        "title": "Methods",
        "text": "The researchers linked questionnaire information to national records of cancer and death. Women in the main analysis were aged 50–69 when they answered the baseline phone-use questionnaire. Phone use was self-reported around 2001 and asked about again around 2011. The first questionnaire distinguished never, less-than-daily and daily use and asked years of use; the later questionnaire also asked weekly talking time. Cox models accounted for measured demographic and lifestyle factors. The paper calls its model estimates relative risks, although the statistical method estimates hazard ratios. This distinction matters when reusing the numbers. No individual absorbed radiofrequency dose or detailed technology history was measured, so the exposure categories are behavioral proxies rather than direct dosimetry.",
        "sourceSections": [
          "Methods—Statistical Analyses; Results; Table 1",
          "Methods—Exposure Variables; Discussion",
          "Methods—Statistical Analyses",
          "Methods—Study Population"
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "text": "Over approximately 14 years of follow-up, the paper reports 3,268 incident brain tumors. For ever versus never phone use, the reported adjusted relative risk was 0.97, with a 95% confidence interval from 0.90 to 1.04. This comparison does not show an increase and its interval includes no difference. The study also examined tumor subtypes, location, daily use and duration of use. Those analyses should be read with their own precision and exposure definitions rather than treated as interchangeable confirmations. A below-one estimate for a subtype is not a basis for claiming that phones prevent tumors. Likewise, a near-one overall estimate does not eliminate every smaller effect or compensate for imperfect exposure measurement.",
        "sourceSections": [
          "Results, paragraph beginning During 14 years; Methods—Statistical Analyses; Figure 1"
        ]
      },
      {
        "id": "limits",
        "title": "Limits",
        "text": "The most consequential limitation is exposure classification. Some initially unexposed women later used phones, and a simple frequency question cannot distinguish the absorbed doses of different users. Such changes can make groups more similar over follow-up. The cohort consisted of middle-aged and older women; very heavy users were uncommon, rare tumor estimates were imprecise and tumor laterality was incompletely recorded. These constraints restrict transfer to children, men, modern use patterns and highly exposed subgroups. This publication also updates an existing cohort, so it must not be counted as an independent replication of the earlier Million Women Study report. Registry linkage helps ascertain diagnoses, but does not remove confounding or repair the exposure information.",
        "sourceSections": [
          "Methods—Statistical Analyses; Results; Table 1",
          "Discussion—strengths and limitations",
          "Discussion—limitations and conclusion",
          "Methods—Study Population; Discussion; references 14–16"
        ]
      },
      {
        "id": "sources",
        "title": "Sources",
        "text": "This draft was read from the complete Europe PMC XML of the original JNCI article. The principal numerical anchors are Methods—Statistical Analyses, Results, Table 1 and Figure 1. Funding and disclosures appear in Funding and Notes: the UK Medical Research Council and Cancer Research UK supported the study, and the authors declared no conflicts. Article-level Europe PMC metadata was checked for notices and showed commentary links, with no correction or retraction identified in that checked record. The linked correspondence and supplementary files have not been substantively reviewed in this batch. Formal risk-of-bias assessment, independent figure inspection and human approval remain pending.",
        "sourceSections": [
          "Funding; Notes",
          "Europe PMC core metadata PMID 35350069; article-meta related-article"
        ]
      }
    ],
    "answers": [
      {
        "id": "Q01",
        "label": "Objective",
        "text": "Whether reported mobile-phone use was associated with subsequent brain-tumor incidence in the UK Million Women Study.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Introduction; Methods—Exposure Variables",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q02",
        "label": "Population",
        "text": "The main analysis comprised 776,156 women aged 50–69 at the baseline questionnaire; this is an analysis subset, not the whole original recruited cohort.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Methods—Statistical Analyses; Results; Table 1",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q03",
        "label": "Exposure",
        "text": "Self-reported use around 2001 and 2011: frequency, years of use and later weekly talking time. Individual absorbed dose and detailed phone technology were not measured.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Methods—Exposure Variables; Discussion",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q04",
        "label": "Comparator",
        "text": "Ever-users were compared with never-users and higher-use categories with never-use. No random allocation or sham exposure applied to this observational cohort.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Methods—Statistical Analyses",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q05",
        "label": "Outcomes",
        "text": "Registered intracranial tumors, including nonmalignant and uncertain-behavior tumors, with subtype/location analyses. These are disease outcomes, not a cell or EEG surrogate.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Methods—Study Population",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q06",
        "label": "Results",
        "text": "The adjusted all-brain-tumor estimate for ever versus never use was reported as RR 0.97 (95% CI 0.90–1.04); Cox models produced the estimate. It does not establish protection or a universal absence of risk.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Results, paragraph beginning During 14 years; Methods—Statistical Analyses; Figure 1",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q07",
        "label": "Attrition",
        "text": "Missing phone responses and versions without phone questions were excluded at baseline. Follow-up used registry linkage; the later questionnaire analysis was a smaller selected subset. No attrition percentage has been synthesized here.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Methods—Statistical Analyses; Results; Table 1",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q08",
        "label": "Harms",
        "text": "No exposure intervention was administered. Intervention adverse-event ascertainment is not applicable; tumor incidence was the health outcome under study.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Methods—Study Population; Exposure Variables",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q09",
        "label": "Bias",
        "text": "Key concerns are coarse self-reported exposure, changes in phone use, residual confounding, subgroup precision and missing laterality. A formal risk-of-bias instrument has not been applied.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Discussion—strengths and limitations",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q10",
        "label": "Applicability",
        "text": "Directly concerns older UK women and the phone-use patterns captured by these questionnaires; does not directly answer lifetime childhood, very heavy use or every newer technology question.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Discussion—limitations and conclusion",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q11",
        "label": "Independence",
        "text": "This is an updated report from the Million Women Study cohort. It should share a provisional study family with its earlier reports, rather than add an independent cohort count.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Methods—Study Population; Discussion; references 14–16",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q12",
        "label": "Funding",
        "text": "Funded by the UK Medical Research Council and Cancer Research UK. Authors stated no conflicts and said funders had no role in study conduct/reporting decisions.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Funding; Notes",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q13",
        "label": "Updates",
        "text": "Article-level Europe PMC metadata checked 8 October 2026: no correction/retraction identified there; linked comments exist and have not been reviewed in this batch. This is bounded source checking, not an exhaustive notice guarantee.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Europe PMC core metadata PMID 35350069; article-meta related-article",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q14",
        "label": "Claims",
        "text": "Maps to T02 and the wireless guide. Supports a scoped statement about this cohort; does not directly support a Wi-Fi, childhood or every-technology safety claim.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Methods—Exposure Variables; Discussion",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q15",
        "label": "Meaning",
        "text": "The main comparison did not show increased brain-tumor incidence under the studied conditions. Interpret alongside other designs and populations without treating this cohort as universal reassurance.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/",
            "section": "Results; Discussion",
            "pdfPage": null
          }
        ]
      }
    ],
    "sourceUrls": [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086806/"
    ],
    "funding": "UK Medical Research Council; Cancer Research UK. No conflicts declared in the article.",
    "correctionsStatus": "No correction/retraction found in checked article-level Europe PMC metadata; commentary links not yet reviewed."
  },
  {
    "paperId": "eltiti",
    "version": "1.0.1-private-draft",
    "sourceBasis": "Full-text XML read; AI source checks complete; original figure review pending",
    "checked": "2026-10-08",
    "preview": "This laboratory study compared base-station-like signals with sham exposure in people reporting electromagnetic sensitivity and controls. Symptom differences seen when exposure was disclosed did not persist in the blinded symptom comparisons. An arousal finding was complicated by exposure order. The experiment tests acute responses to specified signals, not every chronic outcome or the reality of participants’ symptoms. Sample-size shortfall, withdrawals and an abstract/body denominator inconsistency require attention in this AI-assisted full-text draft.",
    "sections": [
      {
        "id": "summary",
        "title": "Summary",
        "text": "The experiment investigated whether short exposure to mobile-phone base-station-like signals changed symptoms or physiological measures in people who reported electromagnetic sensitivity. It included an open phase, where exposure was known, and blinded tests where neither participant nor experimenter knew the condition. Symptom differences appeared in the open phase but were not found between active and sham conditions in the blinded symptom analyses. This pattern bears on the proposed immediate trigger under the tested conditions. It does not imply that reported symptoms were unreal or establish their individual cause. The distinction between testing an exposure explanation and dismissing symptoms is essential to a fair account of the study.",
        "sourceSections": [
          "Introduction; Methods—Design",
          "Results—Visual analog scales; Symptom scales; Physiological measures; On/off judgments; Tables 2–5"
        ]
      },
      {
        "id": "methods",
        "title": "Methods",
        "text": "Participants were recruited through advertising, action groups, word of mouth and earlier research contacts. The full-text Participants section reports 56 sensitive and 120 control participants completing the open phase, and 44 sensitive and 115 controls completing the blinded tests. The abstract gives withdrawal counts that do not fully reconcile with that control total, so the discrepancy remains flagged. Each participant underwent GSM-like, UMTS-like and sham conditions. GSM used combined 900- and 1,800-MHz bands; UMTS used 2,020 MHz. Both active settings had a stated total power flux density of 10 mW/m². The longer blinded exposures lasted 50 minutes. A computer controlled condition assignment, and the report describes independent checking of the exposure system.",
        "sourceSections": [
          "Methods—Participants; Abstract—Methods; Figure 1",
          "Methods—Exposure system; Table 1",
          "Methods—Design; Procedure",
          "Methods—Subjective well-being; Physiological measures; Table 1"
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "text": "Sensitive participants reported poorer well-being when they knew an active signal was present. In blinded testing, the paper reports no active-versus-sham difference in symptom number or total symptom score for either group. Arousal was higher during UMTS exposure in an initial comparison, but sensitive participants disproportionately received UMTS in their first longer blinded session. Session-specific analyses did not retain that exposure effect. The analyzed physiological measures did not separate active from sham conditions; mean blood-volume pulse was not statistically analyzed. Exposure-detection analyses were compatible with chance. These are several distinct outcomes and analyses; they should not be compressed into an invented single effect size. The arousal result and its order explanation should both remain visible rather than selecting whichever supports a preferred narrative.",
        "sourceSections": [
          "Results—Visual analog scales; Symptom scales; Physiological measures; On/off judgments; Tables 2–5"
        ]
      },
      {
        "id": "limits",
        "title": "Limits",
        "text": "Recruitment fell short of the planned sample, especially for the sensitive group. That weakens precision and prevented the intended complete balance of exposure order. Withdrawal and missing responses also matter; a full participant-flow audit should precede a numerical claim about retention. The open phase can show that symptom reporting differed with known exposure, but it does not randomize expectations independently of exposure knowledge or diagnose a nocebo mechanism in each person. The blinded comparison is stronger for identifying acute signal-linked effects, yet its duration, signal setup and selected volunteers limit broader inference. Chronic disease, other frequencies and people excluded by the eligibility criteria require different evidence. No formal risk-of-bias grade has been assigned.",
        "sourceSections": [
          "Methods—Participants; Design; Results—Exposure; Abstract",
          "Methods—Design; Results—Exposure; Discussion",
          "Methods—Participants; Exposure system; Discussion",
          "Methods—Procedure; Table 1 note a"
        ]
      },
      {
        "id": "sources",
        "title": "Sources",
        "text": "The complete Environmental Health Perspectives article was acquired as Europe PMC XML. Methods—Participants and Exposure system anchor the sample and dosimetry; Table 1 anchors timing; Tables 2–5 and Results describe outcomes and order analyses. The project was funded by the Mobile Telecommunications and Health Research Programme, grant RUM 20, and authors declared no competing financial interests. Article-level Europe PMC metadata showed published comments but no correction or retraction in the checked record. Those comments and the original participant-flow image have not yet been independently examined in this batch. Numerical statements were checked against source text in two AI passes; original figure inspection, formal appraisal, and exact-version human approval remain pending.",
        "sourceSections": [
          "Acknowledgements; author-notes",
          "Europe PMC core metadata PMID 18007992"
        ]
      }
    ],
    "answers": [
      {
        "id": "Q01",
        "label": "Objective",
        "text": "Whether short-term GSM/UMTS base-station-like exposure changes well-being, symptoms or physiological measures compared with sham, including in self-reported sensitive participants.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Introduction; Methods—Design",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q02",
        "label": "Population",
        "text": "Full-text Participants: 56 sensitive/120 controls completed open testing and 44/115 completed blinded testing. Abstract withdrawal arithmetic differs for controls; the discrepancy is unresolved and must not be silently normalized.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Methods—Participants; Abstract—Methods; Figure 1",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q03",
        "label": "Exposure",
        "text": "GSM-like combined 900/1,800 MHz and UMTS-like 2,020 MHz exposures, each totaling 10 mW/m² at participants; longer double-blind tests lasted 50 minutes.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Methods—Exposure system; Table 1",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q04",
        "label": "Comparator",
        "text": "Within-person active versus sham exposures with computer-programmed, randomized exposure order. Participant and experimenter were blinded in later sessions; the initial provocation phase was openly labeled.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Methods—Design; Procedure",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q05",
        "label": "Outcomes",
        "text": "Subjective well-being, symptom number/severity, blood-volume pulse, skin conductance, heart rate and exposure judgments. Cognitive results were explicitly reserved for another report.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Methods—Subjective well-being; Physiological measures; Table 1",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q06",
        "label": "Results",
        "text": "Blinded symptom number and total score did not differ between active and sham conditions. Initial UMTS arousal finding was sensitive to session order; physiological comparisons and detection results did not demonstrate the proposed acute signal effect.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Results—Visual analog scales; Symptom scales; Physiological measures; On/off judgments; Tables 2–5",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q07",
        "label": "Attrition",
        "text": "Recruitment did not meet its target and some participants withdrew. The full-text control completion number conflicts with the abstract withdrawal arithmetic. Participant-flow image verification is pending.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Methods—Participants; Design; Results—Exposure; Abstract",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q08",
        "label": "Harms",
        "text": "Symptoms and physiological responses were outcomes, but a comprehensive independent adverse-event log was not identified in the acquired main-text extraction. Absence of such a log is not evidence of no possible harm.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Methods—Subjective well-being; Results—Symptom scales",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q09",
        "label": "Bias",
        "text": "Sample shortfall, exposure-order imbalance, withdrawal and multiple outcomes complicate interpretation. Blinding and sham comparison are strengths for the acute question. No formal risk-of-bias instrument applied.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Methods—Design; Results—Exposure; Discussion",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q10",
        "label": "Applicability",
        "text": "This tests specified short exposures in selected volunteers. It does not settle chronic disease, other signals, excluded populations or an individual diagnosis.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Methods—Participants; Exposure system; Discussion",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q11",
        "label": "Independence",
        "text": "Participants overlap across open and blinded phases; phases are not separate independent studies. Cognitive tests from the same sessions were reserved for another report; that related report is not reconciled here.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Methods—Procedure; Table 1 note a",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q12",
        "label": "Funding",
        "text": "Funded by the Mobile Telecommunications and Health Research Programme, grant RUM 20. Authors declared no competing financial interests; the article says views need not represent the funders.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Acknowledgements; author-notes",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q13",
        "label": "Updates",
        "text": "Article-level Europe PMC record checked 8 October 2026 contains Comment in links. No correction/retraction was identified in that record; comments were not substantively reviewed.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Europe PMC core metadata PMID 18007992",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q14",
        "label": "Claims",
        "text": "Maps to T07/T27 and symptoms guide. Supports a bounded account of the blinded acute experiment, not a claim that symptoms are invented or all chronic risks are excluded.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Results; Discussion",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q15",
        "label": "Meaning",
        "text": "The blinded symptom comparisons did not support these tested signals as an immediate symptom trigger in this experiment. Preserve symptoms as real experiences and retain the design limitations.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/",
            "section": "Results—Symptom scales; Discussion",
            "pdfPage": null
          }
        ]
      }
    ],
    "sourceUrls": [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC2072835/"
    ],
    "funding": "Mobile Telecommunications and Health Research Programme, grant RUM 20. No competing financial interests declared.",
    "correctionsStatus": "No correction/retraction found in checked article-level metadata; published comments and abstract/body control-count discrepancy remain to be reviewed."
  },
  {
    "paperId": "de-iuliis",
    "version": "1.0.1-private-draft",
    "sourceBasis": "Full-text XML read; AI source checks complete; original figure review pending",
    "checked": "2026-10-08",
    "preview": "This laboratory paper exposed isolated human sperm to radiofrequency fields and reported changes in motility, oxidative markers and DNA fragmentation. Its 2013 correction changes a figure result and clarifies that the experiments used three biological replicates, not four. The study is mechanistic evidence from cells outside the body, not a demonstration of infertility from ordinary phone use.",
    "sections": [
      {
        "id": "summary",
        "title": "Summary",
        "text": "The investigators asked whether radiofrequency exposure could alter isolated human sperm and whether oxidative processes accompanied those changes. The original report describes reduced motility and vitality and increased oxidative and DNA-damage markers. Its correction must be read alongside it: a figure panel contained a transcription error, and the legends overstated the number of biological replicates. Those changes matter for reproducibility and interpretation even when the authors retain their broader conclusion. This paper can generate mechanistic questions, but it is not a trial of phone use in men and does not measure conception, pregnancy or offspring health. Its clinical recommendations therefore extend beyond the outcomes directly measured here.",
        "sourceSections": [
          "Introduction; Results",
          "Correction, first and second paragraphs; corrected Figure 1"
        ]
      },
      {
        "id": "methods",
        "title": "Methods",
        "text": "Semen came from a pool of 22 donors without known reproductive pathology. Purified sperm were separated from seminal plasma and incubated in defined medium. Exposure used a 1.8-GHz pure tone in a waveguide at reported SAR settings spanning 0.4–27.5 W/kg, for 16 hours at 21°C. Control dishes sat outside the waveguide and Faraday enclosure. Motility and vitality were assessed microscopically, while fluorescent assays measured oxidative signals, oxidized DNA and fragmentation. The corrected figure legends specify three independent biological samples, not four. Donor-pool size, biological replicates and the many cells counted by an assay are different denominators; treating them as interchangeable would greatly overstate independent replication.",
        "sourceSections": [
          "Methods—Human spermatozoa; Correction, second paragraph",
          "Methods—Radio Frequency Electromagnetic Radiation and Waveguide; Figure 2",
          "Methods—Radio Frequency Electromagnetic Radiation and Waveguide",
          "Methods—Human spermatozoa; DHE; MitoSOX; 8-OH-dG; TUNEL"
        ]
      },
      {
        "id": "results",
        "title": "Results",
        "text": "The authors reported exposure-associated changes across the tested laboratory endpoints. However, their 2013 notice says Figure 1D was transcribed incorrectly and supplies revised mitochondrial-ROS values. It also corrects the biological replicate count across every figure. The source register preserves the original article and notice as linked records, and any reuse of those results must use the corrected values and denominator. This draft avoids presenting a laboratory percentage as a probability of infertility or a personal risk from carrying a phone. Correlations between oxidative markers and DNA measures describe relationships within this experimental dataset; they do not alone prove the complete causal pathway proposed by the authors.",
        "sourceSections": [
          "Correction, first and second paragraphs; corrected Figure 1"
        ]
      },
      {
        "id": "limits",
        "title": "Limits",
        "text": "The cells were outside an intact body, in an artificial medium and under prolonged controlled exposure. That arrangement helps isolate a possible cellular response but lacks tissue geometry, circulation, physiological regulation and a measured relationship to real-life testicular dose. The small number of biological replicates limits confidence in the stability of the estimates. Random allocation of dishes and blinded outcome assessment were not identified in the acquired Methods text, and their status should remain missing rather than assumed. Separating exposed and control dishes by location is also relevant when assessing comparability. These are reviewer considerations, not a completed formal risk-of-bias rating. Independent replication and studies of clinically meaningful reproductive outcomes are separate evidence needs.",
        "sourceSections": [
          "Methods—Human spermatozoa; Statistics; Correction",
          "Methods; Correction",
          "Methods—Exposure setup; Discussion",
          "Methods—Flow Cytometry; Statistics; Correction"
        ]
      },
      {
        "id": "sources",
        "title": "Sources",
        "text": "The original article and its publisher correction were acquired in full as XML; both are linked below. The original Methods and figure captions describe the experiment; the correction controls the revised results and replicate count. Funding came from the ARC Centre of Excellence in Biotechnology and Development and the NHMRC, and authors declared no competing interests. Article-level metadata identifies the correction. A retraction and expression-of-concern link found inside the bibliography concern a different cited paper on ERK activation, not this sperm study. That identity distinction was independently checked before integration. Numerical statements were checked against original and corrected source text in two AI passes. Original figure inspection, formal appraisal and human approval remain pending.",
        "sourceSections": [
          "Funding; Competing Interests",
          "article-meta related-article; Europe PMC core metadata PMID 19649291; Correction"
        ]
      }
    ],
    "answers": [
      {
        "id": "Q01",
        "label": "Objective",
        "text": "Whether controlled RF exposure changes isolated sperm function, oxidative markers and DNA integrity, and whether those laboratory endpoints suggest a mechanism.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Introduction; Results",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q02",
        "label": "Population",
        "text": "Methods describe a pool of 22 semen donors; the 2013 correction states three independent biological samples for Figures 1–5. These are distinct denominators, not 22 experimental replicates.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Methods—Human spermatozoa; Correction, second paragraph",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q03",
        "label": "Exposure",
        "text": "Purified sperm in defined medium received a 1.8-GHz pure tone at reported SAR values of 0.4–27.5 W/kg, for 16 hours at 21°C in a waveguide.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Methods—Radio Frequency Electromagnetic Radiation and Waveguide; Figure 2",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q04",
        "label": "Comparator",
        "text": "Controls were placed outside the waveguide/Faraday cage. Random allocation and blinded outcome assessment were not identified in the main Methods; do not assume they occurred.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Methods—Radio Frequency Electromagnetic Radiation and Waveguide",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q05",
        "label": "Outcomes",
        "text": "Motility, vitality, ROS-sensitive fluorescence, oxidative DNA markers and TUNEL fragmentation. These are cellular endpoints, not conception or clinical infertility.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Methods—Human spermatozoa; DHE; MitoSOX; 8-OH-dG; TUNEL",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q06",
        "label": "Results",
        "text": "For corrected Figure 1D, the mean percentage of mitochondrial-ROS-positive sperm was 28% ± 1% in exposed cells versus 5% ± 1% in controls (mean ± SEM; p = 0.0056; three biological samples). This panel used SAR 27.5 W/kg for 16 hours; do not reuse the uncorrected panel values.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/annotation/9a8a0172-3850-4059-b852-72c330769c1b",
            "section": "Correction, first and second paragraphs; corrected Figure 1",
            "pdfPage": null
          },
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/annotation/9a8a0172-3850-4059-b852-72c330769c1b",
            "section": "2013 publisher correction: Figure 1D and biological replicate count",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q07",
        "label": "Attrition",
        "text": "The report does not provide a participant-style recruitment/attrition flow for the donor specimens. The mapping from the donor pool to every experimental sample was not resolved in this batch.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Methods—Human spermatozoa; Statistics; Correction",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q08",
        "label": "Harms",
        "text": "No living participant was assigned this RF exposure; the exposed material was isolated sperm. Clinical harms and reproductive outcomes were not measured.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Methods—Human spermatozoa; Exposure setup",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q09",
        "label": "Bias",
        "text": "Small corrected biological replicate count, incomplete allocation/blinding reporting, control location and dose calibration require scrutiny. The correction is material. No formal risk-of-bias grade assigned.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Methods; Correction",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q10",
        "label": "Applicability",
        "text": "Indirect mechanistic relevance only. A dish exposure cannot establish infertility, miscarriage or child-health effects from ordinary phone carrying.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Methods—Exposure setup; Discussion",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q11",
        "label": "Independence",
        "text": "Cells counted within an assay are not independent donors. Figures represent related experiments from the same paper, with three corrected biological samples, not five independent studies.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Methods—Flow Cytometry; Statistics; Correction",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q12",
        "label": "Funding",
        "text": "ARC Centre of Excellence in Biotechnology and Development and NHMRC support reported. Authors declared no competing interests and no funder role in the work or publication decision.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Funding; Competing Interests",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q13",
        "label": "Updates",
        "text": "Corrected in 2013. The article-level Europe PMC record lists that erratum. A retraction/EOC nested in its bibliography belongs to the cited Friedman ERK paper, not De Iuliis; this identity was checked against metadata.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "article-meta related-article; Europe PMC core metadata PMID 19649291; Correction",
            "pdfPage": null
          },
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/annotation/9a8a0172-3850-4059-b852-72c330769c1b",
            "section": "2013 publisher correction: Figure 1D and biological replicate count",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q14",
        "label": "Claims",
        "text": "Maps to T09/T37 and fertility/background guides as laboratory evidence with explicit correction. It must not support a numerical personal-risk prediction or claims of clinical infertility.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Methods; Discussion; Correction",
            "pdfPage": null
          }
        ]
      },
      {
        "id": "Q15",
        "label": "Meaning",
        "text": "The corrected study reports cellular findings under its experimental conditions. It raises questions for replication and clinical research while leaving everyday fertility risk unresolved.",
        "missingReason": null,
        "locators": [
          {
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
            "section": "Results; Discussion; Correction",
            "pdfPage": null
          }
        ]
      }
    ],
    "sourceUrls": [
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0006446",
      "https://journals.plos.org/plosone/article?id=10.1371/annotation/9a8a0172-3850-4059-b852-72c330769c1b"
    ],
    "funding": "ARC Centre of Excellence in Biotechnology and Development; NHMRC. No competing interests declared.",
    "correctionsStatus": "Corrected in 2013; corrected n=3 across Figures1–5. No retraction of this paper found in its checked article-level metadata. Bibliography-linked retraction belongs to a different paper."
  }
];
export const reviewQuestions=[['Q01','Research question'],['Q02','Population and sample'],['Q03','Exposure and dosimetry'],['Q04','Comparator and blinding'],['Q05','Outcomes'],['Q06','Effect and uncertainty'],['Q07','Attrition and missingness'],['Q08','Harms'],['Q09','Bias'],['Q10','Applicability'],['Q11','Independent evidence'],['Q12','Funding and conflicts'],['Q13','Corrections and retractions'],['Q14','Claim mapping'],['Q15','Bounded interpretation']];
