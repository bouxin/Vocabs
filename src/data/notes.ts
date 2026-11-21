// Hand-written meanings and example sentences.
// These attach to entries in acl-list.ts / afl-list.ts by phrase, ignoring
// articles and the (optional) parts the published lists put in brackets, so
// "raise (a) question" here can be written "raise a question".
// A phrase that is in no published list still becomes a card, marked "extra",
// and joins the deck named by the "#deck" line above it.
//
// Format: term | pattern | meaning | example | example
import { parseNotes } from './parse'

const RAW = String.raw`
#deck ACL
# ---------- adjective + noun ----------
abstract concept|adj + noun|an idea that exists in thought rather than in physical form|Students often struggle with abstract concepts such as justice and freedom.|The lecture moved from abstract concepts to concrete case studies.
academic achievement|adj + noun|success measured by grades, degrees or research output|Family income remains a strong predictor of academic achievement.|The programme rewards academic achievement with research funding.
academic community|adj + noun|the body of scholars working in a field|Her findings were quickly accepted by the academic community.|The academic community has debated this definition for decades.
accurate description|adj + noun|an account that matches the facts closely|The report gives an accurate description of the manufacturing process.|No single model offers an accurate description of the whole system.
active participation|adj + noun|taking a direct, involved part in something|The seminar depends on active participation from every student.|Active participation in local politics has declined since 1990.
additional information|adj + noun|further detail beyond what is already given|Additional information is provided in the appendix.|Participants could request additional information at any point.
adequate explanation|adj + noun|a reason sufficient to account for something|The theory offers no adequate explanation for these outliers.|An adequate explanation must account for both data sets.
adverse effect|adj + noun|a harmful or unwanted result|Long working hours have an adverse effect on health.|The drug produced no adverse effects in the control group.
alternative approach|adj + noun|a different method of doing or studying something|An alternative approach is to model the data qualitatively.|This chapter proposes an alternative approach to translation.
analytical framework|adj + noun|a structured set of concepts used to analyse data|The study adopts Bourdieu's analytical framework.|We needed a flexible analytical framework for mixed methods.
appropriate measure|adj + noun|a suitable action or unit of assessment|GDP is not an appropriate measure of national wellbeing.|The government took appropriate measures to limit the outbreak.
available data|adj + noun|the information that can actually be obtained|The available data do not support such a strong claim.|Available data on rural migration remain fragmentary.
basic assumption|adj + noun|a belief taken for granted at the start of an argument|The basic assumption of the model is that markets clear.|We should question the basic assumptions of this framework.
broad range|adj + noun|a wide variety of things|The journal covers a broad range of disciplines.|Respondents gave a broad range of answers.
central issue|adj + noun|the most important matter under discussion|The central issue is how resources should be distributed.|Accountability remains the central issue in this debate.
clear distinction|adj + noun|a sharp difference between two things|The author draws a clear distinction between cause and correlation.|There is no clear distinction between the two categories.
close relationship|adj + noun|a strong connection between two variables or people|There is a close relationship between literacy and income.|The study found a close relationship between sleep and memory.
common practice|adj + noun|something usually done in a field|Peer review is common practice in the sciences.|It was once common practice to omit raw data.
comparative analysis|adj + noun|a study that sets cases side by side|The thesis offers a comparative analysis of three school systems.|Comparative analysis reveals patterns a single case would hide.
complex process|adj + noun|a procedure with many interacting parts|Language acquisition is a complex process.|Urban planning is a complex process involving many actors.
comprehensive overview|adj + noun|a complete summary of a topic|Chapter two gives a comprehensive overview of the literature.|The handbook provides a comprehensive overview of the field.
conceptual framework|adj + noun|the set of ideas structuring a piece of research|The conceptual framework draws on three theories of motivation.|A clear conceptual framework guides the choice of variables.
considerable attention|adj + noun|a large amount of interest or focus|This question has received considerable attention since 2010.|Researchers have devoted considerable attention to bilingualism.
consistent pattern|adj + noun|a regularity that holds across cases|A consistent pattern emerged across all four regions.|The results show no consistent pattern over time.
contemporary society|adj + noun|present-day social life|Surveillance is a defining feature of contemporary society.|The novel critiques the values of contemporary society.
critical evaluation|adj + noun|careful judgement of strengths and weaknesses|The essay requires a critical evaluation of both theories.|Critical evaluation of sources is an essential research skill.
crucial role|adj + noun|an extremely important function|Vitamin D plays a crucial role in bone development.|Teachers play a crucial role in early literacy.
cultural context|adj + noun|the social and cultural setting of something|The text can only be understood in its cultural context.|Meaning shifts with the cultural context of the reader.
current debate|adj + noun|the discussion happening now in a field|The current debate centres on data privacy.|This paper contributes to the current debate on migration.
detailed account|adj + noun|a thorough description|The diary gives a detailed account of daily factory life.|She provides a detailed account of the experimental procedure.
direct consequence|adj + noun|a result that follows immediately from a cause|Soil erosion is a direct consequence of deforestation.|Unemployment rose as a direct consequence of the policy.
economic growth|adj + noun|an increase in a country's output over time|Economic growth slowed sharply after the crisis.|Education is widely linked to long-term economic growth.
effective strategy|adj + noun|a plan that achieves its aim|Vaccination proved the most effective strategy available.|Spaced review is an effective strategy for retention.
empirical evidence|adj + noun|evidence based on observation or experiment|There is little empirical evidence for this claim.|Empirical evidence from twelve trials supports the hypothesis.
equal opportunity|adj + noun|the same chances for everyone|The policy aims to guarantee equal opportunity in hiring.|Equal opportunity in education remains an unfinished project.
essential element|adj + noun|a necessary part of something|Trust is an essential element of any contract.|Reflection is an essential element of professional training.
ethical issue|adj + noun|a question of right and wrong conduct|Gene editing raises serious ethical issues.|The committee reviewed the ethical issues before approval.
existing literature|adj + noun|the research already published on a topic|The existing literature largely ignores rural samples.|Our findings extend the existing literature in two ways.
explicit reference|adj + noun|a direct, clearly stated mention|The author makes explicit reference to Freud's early work.|The policy contains no explicit reference to funding.
external factor|adj + noun|an influence coming from outside the system|External factors such as weather affected the yield.|The model fails to control for external factors.
final stage|adj + noun|the last step of a process|In the final stage, participants completed a written test.|The project is now in its final stage.
fundamental principle|adj + noun|a basic rule on which everything else rests|Informed consent is a fundamental principle of research ethics.|The fundamental principle here is proportionality.
general consensus|adj + noun|broad agreement among most people|There is now a general consensus that the climate is warming.|No general consensus exists on the best treatment.
growing concern|adj + noun|an increasing worry|There is growing concern about antibiotic resistance.|Water scarcity is a growing concern in the region.
high proportion|adj + noun|a large share of a total|A high proportion of respondents were under thirty.|A high proportion of the budget goes to salaries.
historical perspective|adj + noun|a view that takes the past into account|From a historical perspective, the reform was modest.|The chapter places the conflict in historical perspective.
immediate effect|adj + noun|a result that appears straight away|The reform had an immediate effect on enrolment.|Caffeine has an immediate effect on alertness.
increasing number|adj + noun|a quantity that keeps rising|An increasing number of students study part-time.|An increasing number of firms now report emissions.
individual difference|adj + noun|variation between one person and another|Individual differences in memory capacity were considerable.|The design controls for individual differences in age.
initial stage|adj + noun|the first step of a process|At the initial stage, we interviewed twelve teachers.|Errors are common in the initial stages of learning.
integral part|adj + noun|an essential, built-in component|Fieldwork is an integral part of the degree.|Feedback is an integral part of the writing process.
internal structure|adj + noun|the way something is organised inside|The internal structure of the cell was examined under a microscope.|The internal structure of the argument is unclear.
key factor|adj + noun|a main cause or influence|Cost was the key factor in their decision.|Motivation is a key factor in language learning.
large-scale study|adj + noun|research covering many cases or participants|A large-scale study of 40,000 patients confirmed the effect.|Large-scale studies are expensive but more reliable.
limited extent|adj + noun|a small degree|The policy succeeded only to a limited extent.|Training improved accuracy to a limited extent.
long-term effect|adj + noun|an outcome that lasts or appears much later|The long-term effects of the drug are still unknown.|Early schooling has measurable long-term effects on income.
major contribution|adj + noun|an important addition to knowledge|Her thesis makes a major contribution to the field.|The paper's major contribution is methodological.
marked increase|adj + noun|a clearly noticeable rise|There was a marked increase in applications this year.|The data show a marked increase after 2015.
methodological approach|adj + noun|the overall way research is designed and carried out|The study adopts a mixed methodological approach.|The two papers differ in their methodological approach.
mutual understanding|adj + noun|shared comprehension between two sides|Negotiations led to a greater mutual understanding.|Dialogue is needed to build mutual understanding.
natural phenomenon|adj + noun|an observable event in nature|Earthquakes are a natural phenomenon with social consequences.|The aurora is a natural phenomenon caused by solar wind.
negative correlation|adj + noun|a relationship where one value rises as the other falls|There is a negative correlation between screen time and sleep.|Income showed a negative correlation with commuting distance.
official statistics|adj + noun|numbers published by a government body|Official statistics understate informal employment.|According to official statistics, inflation fell to 3 per cent.
ongoing process|adj + noun|something still continuing|Integration is an ongoing process, not a single event.|Data collection is an ongoing process in this project.
particular emphasis|adj + noun|special importance given to something|The course places particular emphasis on academic writing.|She laid particular emphasis on ethical approval.
positive outcome|adj + noun|a good or desired result|The trial reported positive outcomes for most patients.|Early intervention is linked to positive outcomes.
potential benefit|adj + noun|an advantage that might occur|The potential benefits outweigh the known risks.|Researchers highlighted the potential benefits of the scheme.
previous research|adj + noun|studies carried out earlier|Previous research has focused mainly on urban areas.|Unlike previous research, this study uses longitudinal data.
primary source|adj + noun|original, first-hand material|The archive holds primary sources from the 1840s.|Historians distinguish primary sources from commentary.
relevant literature|adj + noun|published work related to the topic|The review covers all relevant literature since 2000.|Relevant literature in Chinese was excluded for practical reasons.
significant difference|adj + noun|a difference unlikely to be due to chance|There was no significant difference between the two groups.|A significant difference emerged at the six-month follow-up.
social context|adj + noun|the surrounding social conditions|Learning cannot be separated from its social context.|The social context of the survey shaped the responses.
specific example|adj + noun|a particular case used as illustration|Give a specific example to support your claim.|A specific example clarifies the abstract definition.
subsequent chapter|adj + noun|a chapter coming later|These themes are developed in subsequent chapters.|The subsequent chapter turns to policy implications.
sufficient evidence|adj + noun|enough proof to support a claim|There is insufficient evidence to reject the hypothesis.|The court found sufficient evidence of negligence.
theoretical framework|adj + noun|the body of theory guiding a study|The theoretical framework combines two models of identity.|Her theoretical framework is drawn from feminist geography.
underlying assumption|adj + noun|a belief hidden beneath an argument|The underlying assumption is that respondents answer honestly.|We must expose the underlying assumptions of the policy.
valid argument|adj + noun|reasoning whose conclusion follows from its premises|The essay presents a valid argument for reform.|A valid argument may still rest on false premises.
wide variety|adj + noun|many different kinds|The museum holds a wide variety of artefacts.|A wide variety of methods has been applied to this problem.
widespread belief|adj + noun|an opinion held by many people|There is a widespread belief that the system favours the rich.|Despite widespread belief, the evidence is weak.

# ---------- verb + noun ----------
achieve a goal|verb + noun|to succeed in reaching an aim|The programme achieved its central goal within two years.|Few countries achieved the emissions goals they had set.
address an issue|verb + noun|to deal with a problem|The paper addresses the issue of missing data directly.|The reform fails to address the underlying issue.
adopt an approach|verb + noun|to begin using a particular method|We adopt a qualitative approach in this chapter.|The team adopted a more cautious approach after the pilot.
analyse data|verb + noun|to examine information systematically|The data were analysed using regression models.|We analysed the interview data thematically.
apply a method|verb + noun|to put a technique into use|The same method was applied to both samples.|She applied Bayesian methods to the historical record.
carry out research|verb + noun|to conduct a study|The research was carried out between 2019 and 2022.|Few scholars have carried out research on this dialect.
challenge an assumption|verb + noun|to question something taken for granted|Recent findings challenge this long-held assumption.|The book challenges the assumption that growth is inevitable.
collect data|verb + noun|to gather information for study|Data were collected through online questionnaires.|We collected data at three separate time points.
conduct a study|verb + noun|to carry out formal research|A follow-up study was conducted the next year.|The authors conducted a study of 600 households.
draw a conclusion|verb + noun|to reach a judgement from evidence|It is too early to draw firm conclusions.|The same data allow very different conclusions to be drawn.
establish a link|verb + noun|to show that a connection exists|The study establishes a clear link between diet and risk.|No causal link has yet been established.
examine the relationship|verb + noun|to investigate how two things are connected|This paper examines the relationship between trade and conflict.|We examine the relationship using panel data.
explore the possibility|verb + noun|to investigate whether something might work|The chapter explores the possibility of reform.|Researchers are exploring the possibility of reuse.
gain insight|verb + noun|to come to understand something better|Interviews gave us real insight into teachers' decisions.|We gained valuable insight from the pilot phase.
generate interest|verb + noun|to create curiosity or attention|The findings generated considerable interest in the media.|The topic has generated renewed interest among economists.
identify a trend|verb + noun|to notice a general direction of change|We identify three trends in the historical data.|The report identifies a worrying trend in youth employment.
make a contribution|verb + noun|to add something of value|This thesis makes an original contribution to knowledge.|Volunteers made a substantial contribution to the project.
meet a requirement|verb + noun|to satisfy a condition|Only two samples met the inclusion requirements.|The building fails to meet current safety requirements.
play a role|verb + noun|to have a function or influence|Genetics plays a role, but environment matters more.|Local councils play a central role in implementation.
pose a problem|verb + noun|to create a difficulty|Small sample sizes pose a problem for generalisation.|Missing records posed a serious problem for the analysis.
provide evidence|verb + noun|to supply proof|The fossil record provides evidence of rapid change.|The survey provides evidence of growing inequality.
raise a question|verb + noun|to bring up a matter for discussion|These results raise questions about the earlier model.|The case raises important legal questions.
reach a consensus|verb + noun|to arrive at general agreement|The panel reached a consensus after three meetings.|Experts have not reached a consensus on the definition.
reject a hypothesis|verb + noun|to conclude that a proposed explanation fails|We reject the null hypothesis at the 5 per cent level.|The data do not allow us to reject the hypothesis.
review the literature|verb + noun|to survey published work on a topic|Chapter two reviews the literature on bilingual education.|Having reviewed the literature, we identify two gaps.
support a claim|verb + noun|to provide backing for an assertion|Little evidence supports this claim.|Two independent trials support the authors' claim.
take into account|verb + noun|to consider something when deciding|The model takes seasonal variation into account.|These figures do not take inflation into account.
test a hypothesis|verb + noun|to check an explanation against evidence|We tested the hypothesis in two separate samples.|The experiment was designed to test a single hypothesis.
undertake a project|verb + noun|to begin and carry out a piece of work|The department undertook a three-year project on literacy.|She undertook the project without external funding.
yield results|verb + noun|to produce findings|The new technique yielded surprising results.|The first trial yielded no usable results.

# ---------- noun + noun ----------
case study|noun + noun|a detailed examination of one example|The thesis presents a case study of a single hospital.|Case studies cannot easily be generalised.
data analysis|noun + noun|the process of examining collected information|Data analysis was performed in R.|The data analysis revealed two distinct clusters.
data collection|noun + noun|the process of gathering information|Data collection took nine months in total.|Ethical approval was obtained before data collection began.
decision-making process|noun + noun|the way choices are arrived at|Patients are now included in the decision-making process.|The decision-making process lacked transparency.
gender difference|noun + noun|variation between men and women|Gender differences in pay persist across sectors.|We found no gender difference in test scores.
government policy|noun + noun|an official plan of action by a state|Government policy shifted after the 2008 crisis.|Housing shortages reflect decades of government policy.
labour market|noun + noun|the supply of and demand for workers|Graduates entered a weak labour market.|Automation is reshaping the labour market.
life expectancy|noun + noun|the average length of life in a population|Life expectancy rose by eight years over this period.|Life expectancy varies sharply between regions.
market forces|noun + noun|the effects of supply and demand|Prices were left to market forces.|Market forces alone will not solve the housing crisis.
quality of life|noun + noun|how good or comfortable someone's life is|The treatment improved quality of life without extending it.|Quality of life was measured with a standard scale.
research question|noun + noun|the specific question a study sets out to answer|The research question guides the choice of method.|Two research questions frame this dissertation.
sample size|noun + noun|the number of cases in a study|The small sample size limits confidence in the result.|A larger sample size would reduce the margin of error.
side effect|noun + noun|an unintended extra result, usually negative|Nausea was the most common side effect reported.|One side effect of the reform was greater inequality.
standard deviation|noun + noun|a measure of how spread out values are|Scores had a mean of 62 and a standard deviation of 9.|The standard deviation was larger in the control group.
time period|noun + noun|a stretch of time under study|Over this time period, prices doubled.|The two time periods are not strictly comparable.
turning point|noun + noun|a moment when a decisive change occurs|The 1989 election was a turning point in the country's history.|The discovery marked a turning point in the field.

# ---------- adverb + adjective ----------
closely related|adv + adj|strongly connected|The two concepts are closely related but not identical.|Literacy and numeracy are closely related skills.
directly proportional|adv + adj|increasing at the same rate as something else|Pressure is directly proportional to temperature here.|Output was directly proportional to investment.
entirely different|adv + adj|completely unlike|The second experiment used an entirely different design.|Rural respondents gave entirely different answers.
equally important|adv + adj|mattering just as much|Method is equally important as theory.|Equally important is the question of funding.
fundamentally different|adv + adj|different in a basic way|The two theories are fundamentally different in scope.|Oral and written language are fundamentally different.
highly significant|adv + adj|very unlikely to be due to chance|The correlation was highly significant.|The effect was small but highly significant.
particularly relevant|adv + adj|especially applicable|This point is particularly relevant to small firms.|Her work is particularly relevant to the current debate.
potentially harmful|adv + adj|possibly damaging|The additive is potentially harmful at high doses.|The practice is widespread but potentially harmful.
relatively small|adv + adj|small in comparison|The effect size was relatively small.|A relatively small group accounted for most of the usage.
statistically significant|adv + adj|supported by statistical testing|The difference was not statistically significant.|Only two of the six results were statistically significant.
strongly correlated|adv + adj|closely linked in a measurable way|Income and education are strongly correlated.|The two indices were strongly correlated across countries.
substantially higher|adv + adj|considerably greater|Costs were substantially higher than forecast.|Rates were substantially higher among older adults.
theoretically possible|adv + adj|possible in principle|Full recovery is theoretically possible but rare.|It is theoretically possible to measure this directly.
widely accepted|adv + adj|agreed on by most people|This definition is now widely accepted.|It is widely accepted that early reading matters.
widely used|adv + adj|used by many people|SPSS is widely used in the social sciences.|The scale is widely used in clinical research.

# ---------- verb + adverb / noun + verb ----------
argue convincingly|verb + adv|to make a persuasive case|She argues convincingly that the reform failed.|The author argues convincingly against this reading.
differ significantly|verb + adv|to be clearly unlike|The groups did not differ significantly in age.|Practice differs significantly between the two countries.
increase steadily|verb + adv|to rise at a constant rate|Enrolment increased steadily throughout the decade.|Costs have increased steadily since 2010.
vary considerably|verb + adv|to differ a great deal|Results vary considerably between studies.|Rainfall varies considerably across the region.
evidence suggests|noun + verb|the available proof points towards something|Evidence suggests that early intervention works best.|Recent evidence suggests a weaker link than assumed.
problem arises|noun + verb|a difficulty appears|A problem arises when the samples overlap.|Problems arose during the second phase of testing.
research shows|noun + verb|studies demonstrate something|Research shows that sleep consolidates memory.|Research shows no benefit beyond six sessions.
results indicate|noun + verb|the findings point to something|The results indicate a modest improvement.|Our results indicate that the effect is context-dependent.
study reveals|noun + verb|research uncovers something previously unclear|The study reveals wide regional variation.|A new study reveals the scale of the problem.
theory predicts|noun + verb|a theory states what should happen|The theory predicts a sharp drop in demand.|Classical theory predicts convergence over time.

#deck AFL
# ---------- framing / reference ----------
in terms of|framing|with reference to a particular aspect|In terms of cost, the second option is clearly preferable.|The groups were similar in terms of age and education.
with respect to|framing|concerning a specific point|With respect to reliability, the instrument performed well.|Opinions differed with respect to the timing of the reform.
with regard to|framing|about a particular matter|With regard to funding, no decision has yet been made.|The law is silent with regard to digital records.
in relation to|framing|in connection with something|Income was examined in relation to housing quality.|These figures must be read in relation to population size.
in the context of|framing|within a particular setting|In the context of a pandemic, such measures seem reasonable.|The term has a different meaning in the context of law.
from the point of view of|framing|as seen from a particular position|From the point of view of the patient, waiting time matters most.|From an economic point of view, the subsidy is inefficient.
in the case of|framing|when speaking of a particular instance|In the case of older patients, the dosage was reduced.|In the case of Japan, the trend is reversed.
on the basis of|framing|using something as the foundation for a judgement|Participants were selected on the basis of age.|On the basis of these findings, we recommend caution.
in accordance with|framing|following a rule or standard|The study was conducted in accordance with APA guidelines.|Samples were stored in accordance with the protocol.
as a function of|framing|depending on, varying with|Error rate was plotted as a function of speed.|Costs rise as a function of distance.
in the form of|framing|having a particular shape or format|Support was given in the form of tax relief.|Data were recorded in the form of field notes.
in the absence of|framing|when something is not there|In the absence of direct evidence, we rely on proxies.|In the absence of regulation, standards fell quickly.
in the light of|framing|considering new information|In the light of these results, the model needs revision.|The policy was reviewed in the light of recent events.
by means of|framing|using a particular method|Samples were separated by means of centrifugation.|The effect was measured by means of a standard scale.
in conjunction with|framing|together with something else|The drug is used in conjunction with physiotherapy.|Interviews were used in conjunction with survey data.
in the present study|framing|in this piece of research|In the present study, we focus on first-year students.|In the present study, three measures were combined.
for the purpose of|framing|in order to achieve something|For the purpose of this analysis, the groups were merged.|The data were anonymised for the purpose of publication.
in this respect|framing|on this particular point|In this respect, the two theories agree.|The sample is unusual in this respect.

# ---------- causality ----------
as a result of|causality|because of something|Yields fell as a result of the drought.|As a result of the reform, waiting times halved.
due to the fact that|causality|because|The trial was stopped due to the fact that recruitment failed.|Results are tentative due to the fact that the sample is small.
on account of|causality|because of|The flight was cancelled on account of the weather.|The data were excluded on account of recording errors.
give rise to|causality|to cause something to begin|Industrialisation gave rise to new social classes.|The ruling gave rise to considerable controversy.
lead to|causality|to result in|Poor housing can lead to chronic illness.|Such policies often lead to unintended consequences.
result in|causality|to have as a consequence|The merger resulted in 200 job losses.|Higher taxes resulted in lower consumption.
be attributed to|causality|to be explained as caused by something|The decline can be attributed to falling birth rates.|Most of the variance was attributed to teacher quality.
account for|causality|to explain or make up a share of|This factor accounts for 40 per cent of the variance.|Migration accounts for most of the population growth.
be responsible for|causality|to be the cause of|Two genes are responsible for this condition.|Transport is responsible for a quarter of emissions.
depend on|causality|to be determined by|The outcome depends on the initial conditions.|Interpretation depends heavily on context.
play an important role in|causality|to be a significant influence on|Schools play an important role in social mobility.|Enzymes play an important role in digestion.
in response to|causality|as a reaction to|The bank cut rates in response to the slowdown.|The policy was introduced in response to public pressure.

# ---------- contrast ----------
on the other hand|contrast|introducing an opposing consideration|The method is cheap. On the other hand, it is imprecise.|On the other hand, rural respondents reported the opposite.
in contrast to|contrast|differently from|In contrast to earlier work, we find no gender gap.|In contrast to 2010, most firms now report emissions.
by contrast|contrast|marking a clear difference|Urban rates fell. Rural rates, by contrast, rose sharply.|By contrast, the control group showed no change.
as opposed to|contrast|rather than|We measured outcomes, as opposed to intentions.|This is a structural, as opposed to a temporary, problem.
in spite of|contrast|despite|In spite of the small sample, the effect was robust.|In spite of these limitations, the findings are suggestive.
despite the fact that|contrast|although|Despite the fact that funding rose, outcomes did not improve.|Despite the fact that it is widely used, the scale is unvalidated.
on the contrary|contrast|the opposite is true|The reform did not reduce costs. On the contrary, they rose.|On the contrary, participation increased after the change.
nevertheless|contrast|in spite of that|The evidence is thin. Nevertheless, the argument deserves attention.|Nevertheless, two findings are worth noting.
whereas|contrast|while on the other hand|Men reported more symptoms, whereas women sought help earlier.|Spending rose in cities, whereas it fell in the regions.
rather than|contrast|instead of|We model behaviour rather than attitudes.|The change was gradual rather than sudden.
at the same time|contrast|simultaneously, yet also|The policy is popular. At the same time, it is expensive.|At the same time, costs continued to rise.
to the contrary|contrast|showing the opposite|There is no evidence to the contrary.|Claims to the contrary are not supported by the data.

# ---------- addition / sequence ----------
as well as|addition|in addition to|The course covers writing as well as speaking.|Interviews were used as well as questionnaires.
in addition to|addition|besides|In addition to the survey, we analysed policy documents.|In addition to cost, timing was a concern.
not only ... but also|addition|emphasising two things together|Not only did costs fall, but satisfaction also rose.|The method is not only cheap but also quick.
first of all|sequencing|introducing the first point|First of all, the sample must be representative.|First of all, we outline the theoretical background.
in the first place|sequencing|as the first consideration|In the first place, the data were never comparable.|Why was the scheme introduced in the first place?
to begin with|sequencing|as a starting point|To begin with, the definition itself is contested.|To begin with, participants completed a baseline test.
more importantly|emphasis|introducing a stronger point|The method is faster and, more importantly, more accurate.|More importantly, the effect persisted after one year.
furthermore|addition|in addition, moreover|Furthermore, the results held across all three sites.|Furthermore, no adverse effects were recorded.
in turn|sequencing|as a consequence in a chain|Higher wages raise demand, which in turn raises prices.|This in turn affects how the data are interpreted.
last but not least|sequencing|introducing a final important point|Last but not least, ethical approval must be secured.|Last but not least, the cost of maintenance must be counted.

# ---------- exemplification / clarification ----------
for instance|exemplification|giving an example|Some languages, for instance Finnish, mark case extensively.|For instance, only two of the trials were blinded.
for example|exemplification|giving an example|Heavy metals, for example lead, accumulate in soil.|For example, the 2011 census undercounted migrants.
such as|exemplification|introducing examples|Soft skills such as teamwork are hard to measure.|Factors such as income and education were controlled for.
in other words|clarification|restating more simply|The sample was self-selected; in other words, it was biased.|In other words, correlation here is not causation.
that is to say|clarification|more precisely|The effect was small, that is to say under one point.|That is to say, the model fits only the early period.
in particular|emphasis|especially|Young workers in particular were affected.|In particular, two findings deserve comment.
as shown in figure|metadiscourse|directing the reader to a visual|As shown in Figure 3, the trend reverses after 2015.|As shown in Table 2, both groups improved.
as can be seen|metadiscourse|pointing to visible evidence|As can be seen, the two curves diverge sharply.|As can be seen from the table, variance was high.
the following|metadiscourse|introducing what comes next|The following section reviews the main findings.|Consider the following three objections.

# ---------- hedging / caution ----------
it is possible that|hedging|something may be true|It is possible that the effect reflects selection bias.|It is possible that other factors are involved.
it seems likely that|hedging|probably true|It seems likely that reporting improved rather than behaviour.|It seems likely that both mechanisms operate.
be likely to|hedging|probably will|Older patients are likely to require longer recovery.|Such schemes are likely to benefit the better-off.
tend to|hedging|usually do|Prices tend to rise before an election.|Respondents tend to overstate their reading habits.
to some extent|hedging|partly|The criticism is justified to some extent.|To some extent, all measures of poverty are arbitrary.
to a certain extent|hedging|partly but not completely|To a certain extent, the problem is one of definition.|The pattern holds, to a certain extent, across regions.
to a large extent|hedging|mostly|To a large extent, the outcome was determined in advance.|Success depends to a large extent on local leadership.
appear to be|hedging|seem to be|These differences appear to be stable over time.|The two effects appear to be independent.
suggest that|hedging|point towards a conclusion|The findings suggest that training transfers poorly.|These data suggest a ceiling effect.
be assumed to|hedging|to be taken as true without proof|Errors are assumed to be normally distributed.|Respondents are assumed to answer honestly.
in most cases|hedging|usually|In most cases, treatment began within a week.|In most cases, the two measures agreed.
with the exception of|hedging|apart from|With the exception of 2008, growth was steady.|All sites improved, with the exception of the smallest.
this is not to say|hedging|that does not mean|This is not to say that context is irrelevant.|This is not to say the earlier model was wrong.
there is some evidence that|hedging|limited proof exists|There is some evidence that the effect fades over time.|There is some evidence that reporting differs by region.
it remains unclear|hedging|still not known|It remains unclear whether the benefit is lasting.|It remains unclear how the two processes interact.

# ---------- emphasis / stance ----------
it should be noted that|stance|drawing the reader's attention to something|It should be noted that the sample excluded part-time staff.|It should be noted that these figures are provisional.
it is important to note that|stance|highlighting a key point|It is important to note that correlation is not causation.|It is important to note the small sample size.
there is no doubt that|stance|expressing certainty|There is no doubt that the climate is warming.|There is no doubt that costs will rise.
it is clear that|stance|stating something as evident|It is clear that the policy needs revision.|From Table 1 it is clear that participation fell.
it is worth noting that|stance|a point deserving attention|It is worth noting that both studies used the same sample.|It is worth noting that the trend began earlier.
it is widely accepted that|stance|most experts agree|It is widely accepted that early reading predicts later success.|It is widely accepted that the measure is imperfect.
it has been suggested that|stance|some researchers have proposed|It has been suggested that the effect is cultural.|It has been suggested that the scale overestimates anxiety.
it can be argued that|stance|a case can be made|It can be argued that the reform was premature.|It can be argued that both readings are valid.
the fact that|stance|referring to something established|The fact that response rates fell weakens the conclusion.|The fact that both measures agree is reassuring.
in fact|emphasis|actually, in reality|The gap did not narrow; in fact, it widened.|In fact, the earliest records date from 1820.
indeed|emphasis|reinforcing a point|The effect was large; indeed, it was the largest recorded.|Indeed, three later studies reached the same conclusion.
above all|emphasis|most importantly|Above all, the design must be replicable.|Above all, these findings need independent confirmation.

# ---------- quantification ----------
a number of|quantification|several|A number of studies report the same pattern.|A number of limitations should be acknowledged.
a wide range of|quantification|many different kinds of|The term covers a wide range of practices.|A wide range of methods has been used.
a great deal of|quantification|much|A great deal of attention has been paid to this question.|The project required a great deal of coordination.
the majority of|quantification|most of|The majority of respondents supported the change.|The majority of cases were resolved informally.
a significant proportion of|quantification|a large share of|A significant proportion of the budget is unspent.|A significant proportion of patients discontinued treatment.
the extent to which|quantification|how much|We examine the extent to which schools differ.|The extent to which this applies elsewhere is unclear.
the degree to which|quantification|how far|The degree to which the model fits varies by period.|We measured the degree to which answers agreed.
more or less|quantification|approximately|The two estimates are more or less identical.|Spending has remained more or less constant.
as much as|quantification|up to, as high as|Losses reached as much as 30 per cent.|The method can save as much as a week of work.
at least|quantification|not less than|At least four mechanisms have been proposed.|The data cover at least three generations.
in the range of|quantification|within approximate limits|Estimates fall in the range of 4 to 6 per cent.|Temperatures stayed in the range of 18 to 22 degrees.

# ---------- purpose / condition ----------
in order to|purpose|so as to achieve|In order to control for age, we matched the samples.|Fieldwork was staged in order to limit disruption.
so as to|purpose|in order to|Items were randomised so as to avoid order effects.|Figures are rounded so as to protect anonymity.
with the aim of|purpose|intending to|The scheme was launched with the aim of raising attendance.|Interviews were held with the aim of refining the survey.
provided that|condition|only if|The method works provided that the data are complete.|Consent was granted provided that names were removed.
in the event that|condition|if something happens|In the event that funding ends, the work will stop.|In the event that participants withdrew, data were deleted.
as long as|condition|on condition that|The result holds as long as the variance is stable.|Access is granted as long as the data stay anonymous.
otherwise|condition|if not|Record the value; otherwise the entry is void.|The sample must be cooled, otherwise the reaction continues.
if necessary|condition|should it be needed|The dose was reduced if necessary.|Interviews were repeated if necessary.

# ---------- conclusion / summary ----------
in conclusion|metadiscourse|introducing final remarks|In conclusion, the evidence favours early intervention.|In conclusion, three implications follow.
to sum up|metadiscourse|summarising briefly|To sum up, the method is cheap, fast and imprecise.|To sum up, the hypothesis was only partly supported.
in summary|metadiscourse|giving a short account|In summary, two of the four predictions held.|In summary, the data support a weaker version of the claim.
on the whole|metadiscourse|generally speaking|On the whole, the findings replicate earlier work.|On the whole, respondents were satisfied.
in general|metadiscourse|usually, broadly|In general, larger firms report more training.|In general, the two methods agree closely.
for the most part|metadiscourse|mostly|The records are, for the most part, complete.|For the most part, the groups behaved similarly.
in short|metadiscourse|briefly stated|In short, the model is elegant but untestable.|In short, the policy achieved little.
these findings suggest|metadiscourse|what the results imply|These findings suggest that practice matters more than talent.|These findings suggest a need for longer follow-up.
further research is needed|metadiscourse|more study is required|Further research is needed to establish causality.|Further research is needed on non-Western samples.
beyond the scope of|metadiscourse|outside what this work covers|A full history lies beyond the scope of this paper.|Such questions are beyond the scope of the present study.

# ---------- definition / classification ----------
be referred to as|definition|to be called|This process is referred to as code-switching.|Such items are referred to as distractors.
be known as|definition|to be named|The period is known as the interwar years.|This effect is known as regression to the mean.
be defined as|definition|to be given a precise meaning|Poverty is defined as income below 60 per cent of the median.|Fluency was defined as words produced per minute.
in the sense that|definition|in the specific way that|The term is historical in the sense that it names a period.|The model is simple in the sense that it has two parameters.
in a sense|definition|in one way of looking at it|In a sense, every translation is an interpretation.|The problem is, in a sense, self-created.
as such|definition|in that capacity, therefore|Attendance is voluntary and, as such, cannot be enforced.|It is a pilot study and as such makes no strong claims.
a type of|classification|one kind of|Phishing is a type of social engineering.|Mentoring is a type of informal learning.
be classified as|classification|to be placed in a category|These rocks are classified as sedimentary.|Twelve responses were classified as ambiguous.
# --- AFL core + written, written by formula-teaching-worth (FTW) rank ---
it should be noted|stance|used to flag something the reader must keep in mind|It should be noted that the sample excluded part-time staff.|It should be noted the figures are provisional.
should be noted|stance|marks a qualification the reader should carry forward|Two limitations should be noted before the results are read.|It should be noted that attendance was voluntary.
be noted that|stance|introduces a point the writer does not want overlooked|It must be noted that the groups differed at baseline.|It should be noted that funding came from the industry.
it is not possible to|hedging|states that something cannot be done or determined|It is not possible to separate the two effects with these data.|It is not possible to verify the earliest records.
it is not possible|hedging|says plainly that something cannot be done|With one measurement it is not possible to establish a trend.|It is not possible to generalise from a single case.
is not possible to|hedging|part of a statement that something cannot be done|It is not possible to isolate the variables in field conditions.|Where records are missing it is not possible to recalculate the rate.
it is impossible to|stance|a stronger claim that something cannot be done at all|It is impossible to know how many cases went unreported.|It is impossible to run a true control in this setting.
it is impossible|stance|states flatly that something cannot be done|Without a baseline it is impossible to measure change.|It is impossible to separate the policy from the recession.
it is possible to|hedging|says that something can be done|It is possible to estimate the figure from tax records.|It is possible to repeat the experiment at lower cost.
it is possible|hedging|allows that something may be true or feasible|It is possible that the effect reflects reporting rather than behaviour.|It is possible to detect the signal with cheaper equipment.
from the point of view|framing|introduces whose perspective is being taken|From the point of view of the patient, waiting time matters most.|From the point of view of cost, the second design wins.
the point of view of|framing|names the perspective being adopted|The chapter adopts the point of view of the regulator.|The data look different from the point of view of the employer.
the point of view|framing|the position from which something is judged|The point of view taken here is that of the practitioner.|The point of view shifts between chapters.
point of view|framing|a perspective or standpoint|Each witness gave a different point of view.|The paper argues from an economic point of view.
point of view of|framing|the perspective of a particular party|The point of view of the student is largely missing.|It reads very differently from the point of view of the hospital.
from the point of|framing|the opening of a phrase naming a perspective|From the point of view of policy, the result is awkward.|From the point of view of theory, the finding is unsurprising.
there are a number of|quantification|introduces several items worth listing|There are a number of reasons to treat this figure with care.|There are a number of competing explanations.
there are a number|quantification|says that several of something exist|There are a number of ways to measure deprivation.|There are a number of exceptions to this rule.
are a number of|quantification|part of a statement that several exist|There are a number of problems with this design.|Here there are a number of confounding factors.
a large number of|quantification|many of something|A large number of respondents skipped the final section.|A large number of studies report the same pattern.
a large number|quantification|a big quantity|A large number of records were lost in the transfer.|The survey reached a large number of rural households.
large number of|quantification|a big quantity of something|A large number of firms now publish emissions data.|There were a large number of missing values.
a small number|quantification|only a few|A small number of cases accounted for most of the cost.|Only a small number of schools took part.
small number of|quantification|only a few of something|A small number of outliers distorted the mean.|A small number of participants withdrew.
total number of|quantification|the complete count|The total number of admissions fell by a fifth.|We report the total number of words produced.
the total number|quantification|the full count of something|The total number of responses was 1,204.|The total number has not been published.
a wide range|quantification|many different kinds|The term covers a wide range of practices.|Applicants came from a wide range of backgrounds.
a high degree|quantification|a large amount of some quality|The two raters showed a high degree of agreement.|The task demands a high degree of precision.
high levels of|quantification|large amounts of something measured|High levels of lead were found in older housing.|High levels of stress were reported during exams.
a variety of|quantification|several different kinds|The data were collected in a variety of settings.|A variety of methods give the same answer.
different types of|classification|several kinds of one thing|Different types of evidence point the same way.|The study compares different types of feedback.
two types of|classification|a division into two kinds|Two types of error are possible here.|We distinguish two types of migration.
this type of|classification|the kind just mentioned|This type of design cannot establish cause.|This type of error is easy to miss.
a series of|quantification|several things one after another|The reform followed a series of scandals.|Participants completed a series of timed tasks.
a set of|quantification|a group of related things|Each school supplied a set of anonymised records.|The model rests on a set of strong assumptions.
a list of|quantification|an itemised set|Appendix B gives a list of excluded studies.|The interview began with a list of prompts.
in such a way that|purpose|describes a manner chosen to produce a result|Items were ordered in such a way that no two similar tasks followed.|The grant is structured in such a way that unspent funds return.
such a way that|purpose|names the manner that produces a result|The sample was drawn in such a way that each region was represented.|Data were coded in such a way that identities could not be recovered.
in such a way|purpose|in a manner that achieves something|The questions were worded in such a way as to avoid leading answers.|Funding was staged in such a way that progress could be reviewed.
in such a|purpose|the start of a phrase describing manner|The trial was designed in such a way as to minimise dropout.|Results are presented in such a way that comparison is easy.
can be used to|framing|states what a method or tool makes possible|Satellite data can be used to estimate crop yields.|The scale can be used to screen for anxiety.
can be used|framing|says that something is usable for a purpose|The same instrument can be used with younger children.|Either measure can be used without loss of accuracy.
be used as a|framing|says what role something can play|Height can be used as a rough proxy for nutrition.|The index can be used as a screening tool.
be used to|framing|names what something serves to do|The funds will be used to expand rural clinics.|Interviews were used to check the survey findings.
could be used|hedging|suggests a possible use|The method could be used in other clinical settings.|These records could be used to reconstruct the timeline.
can easily be|hedging|says something is readily done|The procedure can easily be repeated in a school laboratory.|Such effects can easily be mistaken for noise.
can be found in|framing|points to where something is located|Full tables can be found in the online appendix.|Similar patterns can be found in the Dutch data.
can be found|framing|says something exists somewhere|A fuller treatment can be found in Chapter 6.|Comparable figures can be found for 1991.
can be seen in|metadiscourse|directs the reader to visible evidence|The decline can be seen in Figure 2.|The same effect can be seen in the control group.
can be seen|metadiscourse|points to what the evidence shows|As can be seen, the two curves diverge after 2010.|A clear seasonal pattern can be seen.
as shown in|metadiscourse|refers the reader to a figure or table|As shown in Table 3, both groups improved.|Performance fell sharply, as shown in Figure 1.
shown in figure|metadiscourse|cites a figure as evidence|The distribution is shown in Figure 4.|As shown in Figure 2, the lines cross at week six.
shown in table|metadiscourse|cites a table as evidence|Mean scores are shown in Table 1.|As shown in Table 5, the difference persists.
in table 1|metadiscourse|points to a specific table|The characteristics of the sample are set out in Table 1.|In Table 1 the groups are compared at baseline.
are likely to|hedging|says something will probably happen|Older patients are likely to need longer recovery.|Such schemes are likely to benefit the better-off.
is likely to be|hedging|probably is or will be|The true figure is likely to be higher.|The effect is likely to be short-lived.
is likely to|hedging|probably will|The cost is likely to rise once subsidies end.|This pattern is likely to repeat in other regions.
more likely to|hedging|with a greater probability|Graduates are more likely to report job satisfaction.|Men were more likely to decline the interview.
less likely to|hedging|with a smaller probability|Older respondents were less likely to use the app.|Rural patients are less likely to be referred.
most likely to|hedging|with the greatest probability|First-year students are most likely to drop out.|The cases most likely to be missed are the mildest.
it is likely that|hedging|probably true|It is likely that reporting improved rather than behaviour.|It is likely that both mechanisms operate at once.
in the next section|metadiscourse|signposts what comes next|In the next section we set out the method.|The implications are taken up in the next section.
the next section|metadiscourse|refers to the part that follows|The next section reviews the relevant literature.|These questions are addressed in the next section.
in this paper we|metadiscourse|states what the writers do here|In this paper we compare three measures of deprivation.|In this paper we argue that the distinction is false.
in this paper|metadiscourse|refers to the present article|In this paper the focus is on written language.|The model used in this paper is deliberately simple.
this paper we|metadiscourse|part of a statement of the paper's aim|In this paper we test two competing explanations.|In this paper we draw on interview data.
in this article|metadiscourse|refers to the present piece of writing|In this article I take a historical approach.|The term is used narrowly in this article.
the purpose of this|metadiscourse|states the aim of the work|The purpose of this study is to test that claim.|The purpose of this section is to define the terms.
for this purpose|purpose|for the aim just stated|For this purpose a shorter questionnaire was developed.|Two coders were trained for this purpose.
for the purposes of|framing|for the limited aim of this work|For the purposes of this analysis the groups were merged.|For the purposes of comparison, prices are in 2010 terms.
over a period of|framing|across a stretch of time|Readings were taken over a period of six months.|The decline happened over a period of two decades.
over a period|framing|across a span of time|Symptoms were monitored over a period of weeks.|Attitudes shifted over a period of several years.
at the time of|framing|at the moment when something happened|Most were in full-time work at the time of the survey.|At the time of writing the policy was still in draft.
at this stage|sequencing|at this point in a process or argument|At this stage no causal claim can be made.|Only descriptive data were collected at this stage.
in the course of|framing|during something|Several problems emerged in the course of the fieldwork.|Attitudes changed in the course of the programme.
it is interesting to|stance|flags something the writer finds notable|It is interesting to note that the pattern reverses after 1990.|It is interesting to compare the two sets of figures.
it is interesting|stance|marks something as worth attention|It is interesting that both measures fail in the same cases.|It is interesting to see how little changed.
it is obvious that|stance|presents something as self-evident|It is obvious that cost alone cannot explain the gap.|It is obvious that the sample is too small for this claim.
it is important to|stance|marks something as necessary to do or note|It is important to distinguish correlation from cause.|It is important to record the time of each reading.
it is important|stance|marks something as mattering|It is important that the coders remain blind to condition.|It is important to note the small sample size.
it is necessary to|stance|says that something must be done|It is necessary to control for prior attainment.|It is necessary to obtain consent before recording.
it is necessary|stance|states a requirement|It is necessary that the two measures be taken together.|It is necessary to repeat the test after six months.
it is worth|stance|suggests something deserves attention|It is worth noting that both studies used the same corpus.|It is worth asking who benefits from the reform.
it is clear|stance|presents something as evident from the evidence|From Table 2 it is clear that the gap has widened.|It is clear that the policy needs revision.
it follows that|stance|draws a logical consequence|If the premise holds, it follows that the estimate is biased.|It follows that the earlier figures must be revised.
it appears that|hedging|says the evidence seems to show something|It appears that the effect fades after one year.|It appears that two separate processes are at work.
appears to be|hedging|seems to be|The relationship appears to be non-linear.|The difference appears to be an artefact of coding.
does not appear|hedging|seems not to be the case|The effect does not appear in the replication.|Price does not appear to drive the decision.
it has been|stance|opens a report of what others have done or said|It has been argued that the distinction is unhelpful.|It has been shown to work in smaller samples.
been shown to|stance|reports an established finding|The drug has been shown to reduce relapse.|Sleep has been shown to consolidate memory.
have shown that|stance|reports what studies demonstrate|Several trials have shown that the effect is small.|Earlier studies have shown that uptake varies by region.
has been used|framing|reports previous use of a method|The scale has been used widely in clinical research.|This corpus has been used in three earlier studies.
there has been|framing|reports that something has occurred|There has been a marked rise in applications.|There has been little work on rural samples.
has also been|addition|adds a further reported point|The method has also been applied to spoken data.|A weaker version has also been proposed.
due to the fact|causality|because|The trial stopped early due to the fact that recruitment failed.|Results are tentative due to the fact that the sample is small.
to the fact that|causality|part of a phrase giving a reason|This is due to the fact that the records are incomplete.|Attention is drawn to the fact that both groups improved.
as a result|causality|because of what was just described|Funding was cut, and as a result two clinics closed.|As a result, waiting times doubled.
a result of|causality|caused by something|The decline is a result of falling birth rates.|Soil loss is a result of intensive farming.
as a consequence|causality|as a result|Staff left, and as a consequence waiting lists grew.|As a consequence the trial lost statistical power.
be explained by|causality|can be accounted for by|Most of the variance can be explained by class size.|The gap cannot be explained by income alone.
is affected by|causality|is influenced by something|Reaction time is affected by fatigue.|Yield is affected by rainfall in the preceding month.
is determined by|causality|is fixed or settled by something|Eligibility is determined by household income.|The rate is determined by the slowest step.
depends on the|causality|varies according to something|The answer depends on the definition used.|Accuracy depends on the quality of the input data.
is consistent with|stance|agrees with other evidence or a theory|This finding is consistent with earlier work.|The pattern is consistent with a ceiling effect.
whether or not|condition|introduces two alternatives, both allowed for|Whether or not the policy succeeds, the data will be useful.|The question is whether or not the effect is causal.
whether or not the|condition|opens a two-way alternative about something specific|It is unclear whether or not the sample is representative.|We tested whether or not the groups differed at baseline.
to determine whether|purpose|in order to find out if something is the case|A second trial was run to determine whether the effect holds.|Records were checked to determine whether any case was counted twice.
to distinguish between|purpose|in order to tell two things apart|The test is designed to distinguish between the two conditions.|It is hard to distinguish between genuine change and better reporting.
the difference between|framing|the way two things are unlike|The difference between the groups was not significant.|The chapter explains the difference between validity and reliability.
the difference between the|framing|names the gap between two specific things|The difference between the two estimates is small.|The difference between the regions narrowed after 2005.
difference between the|framing|the gap between two named things|We measured the difference between the pre-test and post-test scores.|The difference between the sexes disappeared once age was controlled.
between the two|framing|involving both of the things named|The correlation between the two measures was strong.|There is little to choose between the two designs.
of the two|framing|belonging to the pair named|The second of the two trials was larger.|Neither of the two models fits the early data.
the relationship between|framing|how two things are connected|The paper examines the relationship between trade and conflict.|The relationship between the variables is non-linear.
related to the|framing|connected with something|These costs are related to the size of the organisation.|The complaint is related to the way data were stored.
associated with the|framing|occurring together with something|Higher scores were associated with the longer programme.|Risks associated with the procedure are set out below.
the effect of|causality|the result one thing produces on another|The chapter assesses the effect of tuition fees on access.|We measured the effect of temperature on yield.
the effects of|causality|the several results something produces|The effects of the drought were felt for years.|Little is known about the long-term effects of the drug.
the result of|causality|what something produced|The shortfall is the result of three separate decisions.|The pattern is the result of how cases were recorded.
the reason for|causality|why something is the case|The reason for the discrepancy is a change in definition.|No reason for the delay was given.
for this reason|causality|because of what has just been said|For this reason the 2009 data are excluded.|For this reason we report both estimates.
so that the|purpose|in order that something happens|Items were randomised so that the order could not bias results.|Funding was staged so that the pilot could be reviewed first.
to ensure that|purpose|in order to make certain of something|Two coders were used to ensure that the categories were applied consistently.|Checks were built in to ensure that no record was duplicated.
to ensure that the|purpose|in order to guarantee something specific|Weighting was applied to ensure that the sample matched the census.|Interviews were recorded to ensure that nothing was lost.
an attempt to|purpose|an effort to do something|The reform was an attempt to widen participation.|This is an attempt to reconcile the two accounts.
allows us to|framing|makes something possible for the writer|The panel design allows us to track the same households over time.|This approach allows us to separate age from cohort effects.
to do so|framing|to do what was just mentioned|Participants could withdraw, and eleven chose to do so.|The council must consult, but has no budget to do so.
to use the|framing|to employ something named|It is tempting to use the simplest available measure.|Permission was granted to use the full archive.
to show that|purpose|in order to demonstrate something|The example is given to show that the rule has exceptions.|Further data would be needed to show that the effect is causal.
to carry out|procedure|to perform a piece of work|Ethical approval is needed to carry out interviews in schools.|The team lacked the funding to carry out a follow-up.
was carried out|procedure|reports that work was performed|The survey was carried out between March and July.|Analysis was carried out in R.
been carried out|procedure|reports that work has been performed|Little research has been carried out on rural dialects.|Three replications have been carried out since.
be carried out|procedure|says that work is to be performed|Testing will be carried out by an independent laboratory.|Fieldwork could not be carried out during the lockdown.
carried out by|procedure|names who performed the work|The audit was carried out by an external team.|Interviews were carried out by trained research assistants.
carried out in|procedure|names where or when work was performed|The study was carried out in four secondary schools.|The work was carried out in two phases.
can be achieved|framing|says a result is attainable|The same accuracy can be achieved with a smaller sample.|Little can be achieved without stable funding.
be achieved by|framing|names how a result is reached|Savings can be achieved by pooling procurement.|This can be achieved by weighting the responses.
can be expressed|framing|says something may be stated another way|The relationship can be expressed as a simple ratio.|Risk can be expressed either as a percentage or as odds.
can be considered|framing|may be treated as something|The two dialects can be considered variants of one system.|This can be considered a conservative estimate.
be considered as|framing|treated as belonging to a category|Such payments should be considered as income.|The pilot can be considered as a separate study.
be regarded as|definition|treated or classified as something|The 1832 Act is generally regarded as the turning point.|These losses should be regarded as exceptional.
be seen as|definition|understood or interpreted as something|The reform can be seen as a response to public pressure.|Silence should not be seen as consent.
be related to the|framing|connected with something named|Dropout may be related to the length of the course.|The errors appear to be related to the recording device.
be argued that|stance|a case can be made|It can be argued that the reform was premature.|It might be argued that both readings are valid.
be the case|stance|be true or so|This may well be the case in larger cities.|If that is the case, the estimate must be revised.
is the case|stance|is true or so|Where this is the case, the record was excluded.|The opposite is the case in the control group.
that is the|framing|identifies what has just been described|That is the pattern the model predicts.|That is the question the next chapter addresses.
means that the|causality|states what follows from something|The missing data mean that the estimate is uncertain.|A small sample means that the interval is wide.
this means that|causality|draws out what something implies|This means that the two figures cannot be compared.|This means that any gain is within the margin of error.
this does not|contrast|denies something that might be assumed|This does not imply that the policy failed.|This does not hold for the youngest group.
that it is not|stance|part of a denial|The evidence suggests that it is not a seasonal effect.|It is important to recognise that it is not a random sample.
should not be|stance|says something must be avoided|These figures should not be read as a forecast.|Absence of evidence should not be taken as evidence of absence.
should also be|addition|adds a further requirement|Response rates should also be reported.|The cost of monitoring should also be counted.
need not be|hedging|says something is not required|The sample need not be large to be useful.|The two measures need not be taken on the same day.
needs to be|stance|says something is required|The definition needs to be stated before the data are coded.|More work needs to be done on non-Western samples.
in some cases|hedging|in part of the instances|In some cases the records went back to 1890.|In some cases treatment began before diagnosis.
in both cases|framing|in each of the two instances|In both cases the pattern reversed after a year.|In both cases the authors used the same corpus.
in more detail|metadiscourse|signposts a fuller treatment|This point is taken up in more detail in Chapter 4.|The method is set out in more detail below.
as a whole|framing|considered in its entirety|The sector as a whole continued to grow.|Taken as a whole, the evidence favours early intervention.
as part of the|framing|as one element of something larger|The survey was run as part of the national census.|Training is offered as part of the induction week.
as part of|framing|as one element of something|Interviews were held as part of a wider project.|Reflection is required as part of the assessment.
at the outset|sequencing|at the very beginning|Two assumptions were stated at the outset.|It was agreed at the outset that names would be withheld.
by virtue of|causality|because of a quality something has|The school qualifies by virtue of its intake.|They had access by virtue of their position on the board.
factors such as|exemplification|introduces example causes or influences|Factors such as income and housing were controlled for.|Factors such as fatigue may explain the drift.
such as those|exemplification|introduces examples of a type|Measures such as those used in the 2011 study were adopted.|Risks such as those described above are rare.
similar to those|framing|like the ones mentioned|The results are similar to those reported by Chen.|Conditions similar to those of 2008 are now returning.
are as follows|metadiscourse|introduces a list|The main findings are as follows.|The inclusion criteria are as follows.
see for example|metadiscourse|points the reader to sources|For a fuller account see for example Hall and Ross.|Others disagree; see for example the 2015 review.
for example if|exemplification|introduces a hypothetical case|For example, if the rate doubles, the cost doubles too.|For example, if a record is missing, the case is dropped.
for example in|exemplification|introduces an example setting|For example, in Finland the pattern is reversed.|For example, in the second trial no effect was found.
an example of|exemplification|a case that illustrates something|This is an example of a self-fulfilling forecast.|The ruling is an example of how the rule works in practice.
example of a|exemplification|an instance of a kind of thing|It is a clear example of a market failure.|This is an example of a measurement artefact.
as an example|exemplification|offered as an illustration|Take the 2010 census as an example.|As an example, consider a class of thirty.
the example of|exemplification|the particular case being used|Consider the example of the Dutch reforms.|The example of Japan complicates the argument.
and so on|exemplification|indicates the list continues|Costs include rent, salaries, insurance and so on.|The categories are age, sex, region and so on.
other words the|clarification|part of a restatement|In other words, the two measures capture the same thing.|In other words, the gain is temporary.
in this way|framing|by the method just described|In this way the two datasets could be compared directly.|Bias is reduced in this way without extra cost.
in this case|framing|in the instance being discussed|In this case the usual rule does not apply.|In this case the data were collected by post.
in this case the|framing|in this instance, something specific|In this case the sample was drawn from one city.|In this case the effect disappears after adjustment.
the case of|framing|the particular instance named|The case of Norway shows the opposite pattern.|In the case of missing data, the record was dropped.
in the case|framing|opens a reference to a particular instance|In the case of this study the response rate was high.|In the case described above, consent was withdrawn.
the use of|framing|the employing of something|The use of mobile phones in class remains contested.|The use of proxies introduces error.
the way in which|framing|the manner something happens|The way in which questions are worded affects the answers.|Much depends on the way in which the rule is applied.
way in which|framing|the manner of something|Each way in which the data can be grouped gives a different picture.|There is no single way in which the term is used.
ways in which|framing|the several manners of something|There are three ways in which the error could arise.|The chapter sets out the ways in which the groups differ.
the way that|framing|the manner in which|The way that marks are awarded varies by school.|The way that the question was asked shaped the answer.
the way in|framing|the start of a phrase about manner|The way in which the sample was drawn is not stated.|Consider the way in which the terms are defined.
the same way as|framing|in an identical manner to|Scores were calculated the same way as in the pilot.|The second group was treated the same way as the first.
same way as|framing|identically to something|The data were cleaned the same way as before.|Items were scored the same way as in the original scale.
at the same|framing|the opening of a phrase about simultaneity|Both measures were taken at the same visit.|The two trials ran at the same time.
the same time|framing|the identical moment or period|Enrolment and funding fell at the same time.|It is hard to do both at the same time.
the same as|framing|identical to|The 2020 figure is not the same as the 2010 one.|The definition is the same as that used by the OECD.
exactly the same|emphasis|identical in every respect|Both groups received exactly the same instructions.|The wording is exactly the same in both versions.
with the same|framing|sharing an identical feature|Pairs were matched with the same teacher.|Both samples were processed with the same equipment.
have the same|framing|share an identical property|The two scales have the same range but different anchors.|Not all errors have the same cost.
of the same|framing|belonging to one kind|Both are instances of the same underlying process.|Two readings of the same sample disagreed.
the other hand|contrast|signals the opposing side of an argument|On the other hand, the costs fall on a different group.|The other hand of the argument is rarely heard.
the other hand the|contrast|introduces a contrasting specific point|On the other hand, the written data show no such gap.|On the other hand the smaller schools improved.
on the other|contrast|opens a contrast with what preceded|On the other hand, uptake was higher among women.|On the one hand cost fell; on the other, quality did too.
on the basis|framing|using something as grounds|Decisions were made on the basis of incomplete data.|On the basis of one trial, no claim can be made.
the basis of|framing|the grounds for something|The basis of the estimate is a 2011 survey.|These assumptions form the basis of the model.
is based on the|framing|rests on something as its foundation|The index is based on the 2011 census.|The argument is based on the assumption of rational choice.
based on the|framing|resting on something|The forecast is based on the previous five years.|Based on the evidence, the claim is premature.
are based on|framing|rest on something as foundation|These figures are based on self-report.|The categories are based on the national classification.
was based on|framing|rested on something|The original scale was based on clinical interviews.|The decision was based on a single report.
the presence of|framing|the fact that something is there|The presence of lead was confirmed in twelve samples.|The presence of an observer changed how pupils behaved.
the presence of a|framing|the fact that a particular thing is there|The presence of a control group strengthens the design.|The presence of a second peak suggests two populations.
the existence of|framing|the fact that something exists|The paper questions the existence of a single academic register.|Fossils confirm the existence of the species in this region.
the development of|framing|the growth or creation of something|The chapter traces the development of the welfare state.|The development of cheap sequencing changed the field.
the process of|framing|the sequence by which something happens|The process of peer review is slow but necessary.|Language learning is best seen as a process of approximation.
the nature of|framing|what something essentially is|The nature of the evidence rules out a causal claim.|Much depends on the nature of the task.
the nature of the|framing|the essential character of something named|The nature of the relationship remains unclear.|The nature of the data limits what can be concluded.
nature of the|framing|the character of something named|Given the nature of the sample, caution is needed.|The nature of the question shapes the answer.
the concept of|definition|the idea being discussed|The concept of social capital is used loosely here.|The concept of fairness varies across cultures.
the notion of|definition|the idea under discussion|The notion of a typical student is unhelpful.|The paper rejects the notion of a single cause.
the idea that|definition|the belief being examined|The idea that growth is inevitable is now questioned.|We test the idea that practice matters more than talent.
the definition of|definition|the precise meaning given to a term|The definition of poverty used here is relative.|The definition of the unit changed in 2005.
the meaning of|definition|what something signifies|The meaning of the term has shifted over time.|The meaning of the result depends on the baseline.
a form of|classification|a kind or variety of something|Mentoring is a form of informal learning.|Phishing is a form of social engineering.
the form of|framing|the shape or format something takes|Support was given in the form of tax relief.|The data take the form of field notes.
the structure of|framing|how something is organised|The structure of the argument is set out below.|The structure of the sector changed after privatisation.
the role of|framing|the part something plays|The chapter examines the role of local councils.|The role of chance cannot be excluded.
important role in|causality|a significant part in something|Schools play an important role in social mobility.|Enzymes play an important role in digestion.
the importance of|stance|how much something matters|The findings underline the importance of early diagnosis.|The importance of context is easily overlooked.
the most important|stance|the one that matters most|Cost was the most important factor in their decision.|The most important limitation is the small sample.
the question of|framing|the matter being considered|The question of who pays is left open.|This raises the question of how the rule is enforced.
the issue of|framing|the matter at stake|The issue of consent is dealt with in Chapter 3.|The paper sidesteps the issue of funding.
the problem of|framing|the difficulty being addressed|The problem of missing data is handled by imputation.|The problem of definition recurs throughout.
the study of|framing|the academic investigation of something|The study of collocation has grown since the 1990s.|This belongs to the study of language change.
the work of|framing|the body of research by someone|The analysis draws on the work of Bourdieu.|The work of the commission was never published.
the context of|framing|the surrounding circumstances|The term means something else in the context of law.|In the context of a pandemic the measures seem modest.
in the context|framing|within a particular setting|The figures make sense only in the context of the reform.|In the context of this study, fluency means speed.
the real world|framing|actual practice as opposed to theory|The model performs less well in the real world.|Real-world conditions rarely match the laboratory.
the amount of|quantification|how much of something there is|The amount of data collected was unmanageable.|The amount of detail varies between records.
the level of|quantification|the degree or amount of something|The level of agreement between coders was high.|The level of funding has not kept pace with demand.
the rate of|quantification|how fast or how often something occurs|The rate of return has fallen since 2008.|The rate of change differs sharply by region.
the frequency of|quantification|how often something occurs|The frequency of testing was reduced to once a term.|We recorded the frequency of each form.
the distribution of|quantification|how something is spread across cases|The distribution of income is heavily skewed.|The distribution of responses was bimodal.
the value of|stance|the worth or usefulness of something|The value of longitudinal data is hard to overstate.|The value of the pound fell sharply.
the size of|quantification|how big something is|The size of the effect matters more than its significance.|The size of the sample limits the analysis.
the size of the|quantification|the magnitude of something named|The size of the gap has not changed since 2010.|The size of the sample was fixed in advance.
size of the|quantification|the magnitude of something named|Costs rise with the size of the organisation.|Results depend on the size of the unit chosen.
the order of|framing|the sequence or approximate magnitude of something|The order of questions affected the responses.|Savings are of the order of ten per cent.
the sum of|quantification|the total when parts are added|The score is the sum of the six subscales.|The whole is more than the sum of its parts.
the change in|framing|how something has altered|The change in policy came without warning.|We model the change in attitudes over ten years.
the area of|framing|the field or region in question|Work in the area of bilingualism has expanded.|The area of greatest need is rural housing.
an increase in the|quantification|a rise in something|There was an increase in the number of referrals.|An increase in the dose had no further effect.
the ability to|framing|the capacity to do something|The test measures the ability to infer meaning from context.|Funding gave the team the ability to follow up cases.
their ability to|framing|how far people can do something|Debt limits their ability to invest.|Students differ in their ability to plan an essay.
as a function|framing|in a way that depends on something|Error rate was plotted as a function of speed.|Cost rises as a function of distance.
a function of|framing|determined by something else|Attendance is largely a function of travel time.|The score is a function of both speed and accuracy.
according to the|framing|as stated by a source|According to the official statistics, inflation fell.|According to the model, demand should drop sharply.
each of these|framing|every one of the things just named|Each of these explanations is examined in turn.|Each of these measures has a known weakness.
each of the|framing|every one of a named set|Each of the four sites followed the same protocol.|Each of the items was rated twice.
both of these|framing|the two things just mentioned|Both of these accounts are partly right.|Both of these effects were small.
none of these|framing|not one of the things mentioned|None of these explanations fits the 1998 data.|None of these differences reached significance.
there are three|quantification|introduces a set of three|There are three reasons to doubt the figure.|There are three stages to the procedure.
there are several|quantification|introduces a set of a few|There are several ways to read this result.|There are several gaps in the record.
there are no|quantification|says none exist|There are no comparable figures for Wales.|There are no obvious outliers in the data.
in a number of|quantification|in several instances|The same pattern appears in a number of countries.|The term is used loosely in a number of studies.
we can see|metadiscourse|invites the reader to notice something|From Figure 3 we can see that the trend reverses.|Here we can see the limits of the method.
we have seen|metadiscourse|refers back to what was shown|As we have seen, the two measures disagree.|We have seen that context shapes the result.
we assume that|framing|states an assumption being made|We assume that respondents answer honestly.|We assume that the errors are normally distributed.
assume that the|framing|take something as given|We assume that the groups were comparable at baseline.|Models of this kind assume that the market clears.
insight into the|framing|understanding of something|Interviews gave real insight into the decisions teachers make.|The archive offers insight into the daily running of the mill.
focus on the|framing|concentrate attention on something|This chapter will focus on the written data.|Most work has focused on the urban poor.
it is difficult|hedging|says something is hard to do|It is difficult to separate the two influences.|It is difficult to generalise from one site.
even though the|contrast|despite something being true|Even though the sample was small, the effect was clear.|Even though the policy changed, practice did not.
at least in|hedging|limits a claim to certain cases|The effect holds, at least in the larger schools.|At least in principle, the two methods agree.
depending on the|condition|varying according to something|The fee differs depending on the country of residence.|Depending on the definition, the figure doubles.
if they are|condition|opens a condition about people or things|Records are discarded if they are incomplete.|Pupils gain little if they are not reading at home.
his or her|framing|a way of referring to one person of either sex|Each candidate submits his or her own portfolio.|The patient gives his or her consent in writing.
little or no|quantification|almost none|There is little or no evidence for this claim.|The scheme had little or no effect on uptake.
on the part of|framing|by or from the person or group named|There was some reluctance on the part of the staff.|This suggests an error on the part of the recorder.
which can be|framing|opens a description of what is possible|The result is a figure which can be compared across years.|It produces a residue which can be measured directly.
are able to|framing|can do something|Few councils are able to fund this from reserves.|Participants are able to withdraw at any point.
is more likely|hedging|has a greater probability|The second explanation is more likely given the timing.|Relapse is more likely in the first six months.
the validity of the|stance|how sound something is|The validity of the measure has been questioned.|This threatens the validity of the comparison.
in terms of the|framing|with reference to a specified aspect|The groups differ in terms of the time they had available.|Results are reported in terms of the original units.
terms of the|framing|with respect to something named|The change is small in terms of the overall budget.|Explain the result in terms of the model.
in the same|framing|within an identical thing or period|Both tests were taken in the same week.|The pattern appears in the same form across sites.
different from the|contrast|unlike something named|The 2020 cohort is different from the earlier ones.|Spoken usage is different from the written norm.
parts of the|framing|some sections of something|Parts of the record were destroyed in 1943.|Only parts of the interview were transcribed.
what are the|metadiscourse|opens a question about a set of things|What are the implications for policy?|What are the limits of this approach?
there is no|framing|states that something does not exist|There is no evidence of a seasonal pattern.|There is no agreed definition of the term.
there is a|framing|introduces the existence of something|There is a clear gap between policy and practice.|There is a long tradition of research on this question.
there is an|framing|introduces something that exists|There is an obvious objection to this reading.|There is an upper limit to what the method can detect.
there may be|hedging|allows that something might exist|There may be other explanations we have not considered.|There may be a delay before the effect appears.
it may be|hedging|allows that something might be so|It may be that the groups differed before the trial.|It may be too early to judge the reform.
may not be|hedging|allows that something might not be so|The sample may not be representative of the region.|The two measures may not be comparable.
it can be|framing|says something is possible|It can be shown that the two models converge.|It can be argued either way.
it does not|contrast|denies something expected|The model fits the trend but it does not explain the outliers.|It does not follow that the policy caused the change.
does not have|framing|lacks something|The dataset does not have a reliable date field.|The council does not have the power to refuse.
this is not|contrast|denies an interpretation|This is not an argument against measurement as such.|This is not the pattern the theory predicts.
that this is|stance|reports a claim about something|The authors conclude that this is a reporting effect.|It is widely assumed that this is a recent phenomenon.
which is not|contrast|adds a denial about something named|The figure includes part-time staff, which is not the usual practice.|It relies on self-report, which is not always accurate.
because it is|causality|gives a reason|The method is preferred because it is cheap and quick.|The case is unusual because it is so well documented.
due to the|causality|caused by something|Delays were due to the loss of two staff.|The rise is due to the change in recording practice.
can also be|addition|adds a further possibility|The scale can also be used with adults.|These results can also be read as a ceiling effect.
is much more|emphasis|to a far greater degree|The written form is much more conservative than the spoken.|Recruitment proved much more difficult than expected.
of these two|framing|belonging to the pair named|The first of these two accounts is the better documented.|Neither of these two measures is ideal.
is to be|stance|is intended or required to happen|The report is to be published in the spring.|If the finding is to be believed, the effect is large.
# --- ACL, alphabetical by headword ---
cognitive ability|adj + noun|the mental capacity to think, reason and remember|Cognitive ability was measured with a standard battery of tests.|Sleep loss impairs cognitive ability within two days.
sexual abuse|adj + noun|harmful sexual treatment of another person|The inquiry examined allegations of sexual abuse in care homes.|Survivors of sexual abuse often delay reporting for years.
(in) academic circles|adj + noun|among scholars and researchers|The theory is well known in academic circles but little read outside.|In academic circles the debate was settled a decade ago.
academic career|adj + noun|a working life in universities or research|She spent her entire academic career at one institution.|Short contracts make an academic career precarious.
academic debate|adj + noun|scholarly argument about a question|The definition remains a matter of academic debate.|Academic debate on the topic has intensified since 2015.
academic discipline|adj + noun|a field of study with its own methods|Linguistics became a separate academic discipline in the nineteenth century.|The problem cuts across several academic disciplines.
academic discourse|adj + noun|the characteristic language and argument of scholarship|Hedging is a defining feature of academic discourse.|Students must learn the conventions of academic discourse.
academic institution|adj + noun|a university, college or research body|Funding is allocated to academic institutions by formula.|The archive is held by an academic institution in Leiden.
academic journal|adj + noun|a periodical publishing peer-reviewed research|The findings appeared in a leading academic journal.|Most academic journals now require data to be deposited.
academic life|adj + noun|the working world of scholarship|Teaching and research together make up academic life.|Academic life has changed with the rise of metrics.
academic performance|adj + noun|how well a student does in their studies|Academic performance improved after the tutoring scheme began.|Family income remains a strong predictor of academic performance.
academic research|adj + noun|systematic scholarly investigation|Academic research informed the final version of the policy.|Funding for academic research has fallen in real terms.
academic skills|adj + noun|the abilities needed to study successfully|The course develops academic skills such as note-taking and referencing.|Academic skills are best taught within a subject.
academic study|adj + noun|scholarly investigation, or a piece of it|A recent academic study questions the official estimate.|The topic deserves serious academic study.
academic success|adj + noun|doing well in education|Academic success depends on more than ability.|The programme links attendance to academic success.
academic work|adj + noun|scholarly writing and research|Her academic work spans three disciplines.|Academic work on the subject is surprisingly thin.
academic world|adj + noun|the community of scholars and institutions|The finding was debated across the academic world.|He left the academic world for industry.
academic writing|adj + noun|the formal written style used in scholarship|Academic writing favours precision over elegance.|The module introduces the conventions of academic writing.
academic year|adj + noun|the yearly cycle of teaching|The changes take effect from the next academic year.|Enrolment is counted at the start of the academic year.
accept responsibility|verb + noun|to acknowledge that something is your fault or duty|The company accepted responsibility for the leak.|No department accepted responsibility for the delay.
acceptable behaviour|adj + noun|conduct that others will tolerate|The code sets out what counts as acceptable behaviour.|What is acceptable behaviour varies between cultures.
socially acceptable|adv + adj|approved of by most people in a society|Smoking indoors is no longer socially acceptable.|Respondents give the socially acceptable answer, not the true one.
widespread acceptance|adj + noun|agreement by many people|The theory gained widespread acceptance in the 1970s.|Widespread acceptance of the measure took a decade.
(be) commonly accepted|adv + adj|agreed on by most people|It is commonly accepted that early reading predicts later attainment.|The commonly accepted figure is almost certainly too low.
(be) generally accepted|adv + adj|agreed on by most people in the field|It is generally accepted that the climate is warming.|The generally accepted date is 1812.
(be) universally accepted|adv + adj|agreed on by everyone|No definition of poverty is universally accepted.|The convention is now universally accepted.
allow access (to)|verb + noun|to let someone reach or use something|The archive allows access to researchers by appointment.|The licence allows access to the full dataset.
deny access (to)|verb + noun|to refuse someone the right to reach something|Two journalists were denied access to the hearing.|Patients should never be denied access to their own records.
direct access|adj + noun|reaching something without an intermediary|Clinicians have direct access to the test results.|Direct access to the raw files was not granted.
easy access|adj + noun|the ability to reach something without difficulty|The site offers easy access to historical weather data.|Easy access to credit fuelled the boom.
electronic access|adj + noun|reaching material in digital form|Electronic access to the journal is included in the fee.|Electronic access replaced the paper catalogue in 2004.
equal access|adj + noun|the same opportunity for everyone to use something|The policy promises equal access to higher education.|Equal access to healthcare remains uneven across regions.
free access|adj + noun|use without payment or restriction|The database offers free access to students.|Free access does not mean free to reuse.
gain access (to)|verb + noun|to obtain the ability to reach something|Researchers gained access to the ward after lengthy negotiation.|The attacker gained access through an unpatched server.
give access (to)|verb + noun|to allow someone to reach something|The card gives access to all university libraries.|Participants gave access to their medical records.
have access (to)|verb + noun|to be able to reach or use something|Only half the households had access to the internet.|Not all schools have access to a laboratory.
internet access|noun + noun|the ability to connect to the internet|Internet access remains patchy in rural areas.|Internet access was treated as a basic utility in the survey.
limited access|adj + noun|restricted ability to reach something|Researchers had limited access to the original files.|Limited access to transport shapes employment patterns.
online access|adj + noun|reaching something over the internet|Online access to the archive opened in 2019.|Online access reduced the number of library visits.
open access|adj + noun|publication free for anyone to read|The paper is available in open access.|Funders increasingly require open access publication.
provide access (to)|verb + noun|to make something reachable|The grant provides access to specialist equipment.|The portal provides access to thirty years of records.
public access|adj + noun|the right of anyone to use or see something|Public access to the minutes was restricted.|Public access to the coast is protected by law.
ready access|adj + noun|being able to reach something quickly|Staff need ready access to up-to-date guidance.|Ready access to data changed how the team worked.
unlimited access|adj + noun|use without restriction|Subscribers get unlimited access to the archive.|Unlimited access was granted for the duration of the study.
easily accessible|adv + adj|simple to reach or understand|The data are easily accessible through a web interface.|The report is written to be easily accessible to non-specialists.
readily accessible|adv + adj|available without difficulty|Comparable figures are not readily accessible for earlier years.|The site is readily accessible by public transport.
brief account|adj + noun|a short description|The chapter opens with a brief account of the reform.|A brief account of the method appears in the appendix.
comprehensive account|adj + noun|a complete description|The book offers a comprehensive account of the period.|No comprehensive account of the dispute has been published.
historical account|adj + noun|a description of past events|Historical accounts of the famine differ sharply.|The chapter gives a historical account of the institution.
great accuracy|adj + noun|a high degree of correctness|The instrument measures temperature with great accuracy.|Ages were recorded with great accuracy in the parish registers.
accurate assessment|adj + noun|a judgement that matches the facts|An accurate assessment of risk requires better data.|The report offers an accurate assessment of the damage.
accurate information|adj + noun|correct facts|Patients need accurate information before consenting.|Accurate information about costs was hard to obtain.
accurate measurement|adj + noun|a correct reading of a quantity|Accurate measurement of small changes requires calibration.|The study depends on accurate measurement of exposure.
accurate picture|adj + noun|a true overall impression|Survey data alone give no accurate picture of informal work.|Combining both sources gives a more accurate picture.
accurate record|adj + noun|a correct written account|Clinics must keep an accurate record of every dose.|No accurate record of attendance survives.
achieve (an) objective|verb + noun|to reach an aim|The programme achieved its main objective within two years.|Few of the stated objectives were actually achieved.
achieve (an) outcome|verb + noun|to bring about a result|The same outcome can be achieved at lower cost.|The treatment achieved good outcomes in younger patients.
acquire knowledge|verb + noun|to gain understanding or information|Children acquire knowledge of grammar without instruction.|The course helps students acquire knowledge they can apply.
newly acquired|adv + adj|recently obtained|The museum displayed its newly acquired manuscripts.|Newly acquired skills fade quickly without practice.
sexual act|adj + noun|an act of sexual behaviour|The law distinguishes between consensual and coerced sexual acts.|The chapter treats the sexual act as a social practice.
appropriate action|adj + noun|a suitable thing to do|The regulator promised to take appropriate action.|Appropriate action depends on how early the fault is found.
collective action|adj + noun|people acting together for a shared aim|Collective action solved what individual effort could not.|The chapter applies the theory of collective action to unions.
legal action|adj + noun|the use of the courts|The firm threatened legal action over the report.|Legal action was dropped once the data were withdrawn.
military action|adj + noun|the use of armed force|Parliament voted against military action.|Military action displaced thousands of households.
positive action|adj + noun|deliberate steps to correct disadvantage|Positive action is lawful where a group is underrepresented.|The scheme is an example of positive action in recruitment.
active involvement|adj + noun|taking a direct part in something|The project depends on the active involvement of local staff.|Active involvement of patients improved the design.
active participant|adj + noun|someone who takes a direct part|Students are active participants, not an audience.|She was an active participant in the reform debates.
active role|adj + noun|a part played directly and energetically|Local councils took an active role in implementation.|Teachers play an active role in shaping the curriculum.
(be) actively involved|adv + adj|taking part directly|Parents were actively involved in the planning.|Only a third of members are actively involved.
political activism|adj + noun|campaigning for political change|Student political activism revived in the 1990s.|Political activism online is hard to measure.
commercial activity|adj + noun|business carried out for profit|Commercial activity on the site is restricted by the lease.|The port remains the centre of commercial activity.
cultural activity|adj + noun|participation in the arts and cultural life|Cultural activity declined sharply during the closures.|Funding for cultural activity was cut by a third.
economic activity|adj + noun|the production and exchange of goods and services|Economic activity contracted for three successive quarters.|The region's economic activity depends on a single industry.
engage in (an) activity|verb + noun|to take part in something|Few respondents engaged in any physical activity outside work.|Firms that engage in such activity risk a fine.
human activity|adj + noun|what people do, especially its effects|Most of the warming is attributable to human activity.|The valley shows traces of human activity from 3000 BC.
learning activity|adj + noun|a task designed to teach something|Each unit ends with a short learning activity.|Learning activities were adapted for online delivery.
physical activity|adj + noun|bodily exercise and movement|Physical activity fell during the pandemic and has not recovered.|Thirty minutes of physical activity a day is the usual guideline.
political activity|adj + noun|involvement in politics|Civil servants face limits on political activity.|Political activity among young voters rose before the referendum.
professional activity|adj + noun|work done as part of an occupation|The register records each member's professional activity.|Professional activity outside the university must be declared.
related activity|adj + noun|an action connected with something else|Training and related activities account for a tenth of the budget.|The grant covers fieldwork and related activity.
social activity|adj + noun|something done with other people|Loneliness fell as social activity resumed.|Eating together is a social activity as much as a nutritional one.
undertake (an) activity|verb + noun|to begin and carry out something|Volunteers undertook most of the recording activity.|No fieldwork activity was undertaken during the winter.
particularly acute|adv + adj|especially severe|The shortage is particularly acute in rural practices.|The problem is particularly acute for first-time buyers.
acutely aware|adv + adj|very conscious of something|The authors are acutely aware of the sample's limitations.|Staff were acutely aware of how little time remained.
add information|verb + noun|to supply further detail|The second interview added information the survey had missed.|Later editions add information about the manuscript's provenance.
additional cost|adj + noun|an extra expense|The change brought no additional cost to households.|Additional costs were met from reserves.
additional problem|adj + noun|a further difficulty|An additional problem is the loss of the earliest records.|Remote sites pose additional problems for fieldwork.
additional resources|adj + noun|extra money, staff or materials|Additional resources were allocated to the worst-affected areas.|Without additional resources the backlog will grow.
additional support|adj + noun|extra help|Pupils receiving additional support made faster progress.|Additional support was offered to carers.
structural adjustment|adj + noun|large-scale reform of an economy|Structural adjustment programmes dominated the 1980s.|Structural adjustment cut public employment sharply.
make adjustments|verb + noun|to change something slightly|We made adjustments for age and sex.|Minor adjustments were made to the wording after the pilot.
public administration|adj + noun|the running of government services|Public administration was reorganised in 1998.|The course covers public administration and policy.
administrative practices|adj + noun|the routine working methods of an organisation|Administrative practices differed between the two hospitals.|Poor administrative practices explain some of the missing data.
adopt (a) procedure|verb + noun|to begin using a set way of doing something|Both laboratories adopted the same procedure.|The committee adopted a new procedure for appeals.
(be) widely adopted|adv + adj|taken up by many people|The standard has been widely adopted across the industry.|The method was widely adopted after 2005.
advanced economy|adj + noun|a wealthy, industrialised country|Inflation fell across the advanced economies.|The pattern holds in advanced economies but not elsewhere.
advanced technology|adj + noun|highly developed technical equipment or methods|Advanced technology has lowered the cost of sequencing.|The hospital invested in advanced technology for diagnosis.
technological advances|adj + noun|improvements in technology|Technological advances made the survey possible.|Technological advances outpaced the regulation.
major advantage|adj + noun|an important benefit|The major advantage of the design is its low cost.|Speed is the method's major advantage.
adverse reaction|adj + noun|a harmful response|Three patients had an adverse reaction to the drug.|No adverse reactions were recorded in the trial.
adversely affect|adv + verb|to harm or damage something|Long hours adversely affect health and family life.|The delay adversely affected the response rate.
economic affairs|adj + noun|matters relating to the economy|The committee on economic affairs met in June.|The ministry handles economic affairs and trade.
financial affairs|adj + noun|matters relating to money|The trustees manage the charity's financial affairs.|Her financial affairs were in order at the time of death.
internal affairs|adj + noun|matters inside an organisation or country|The treaty bars interference in internal affairs.|Internal affairs investigated the complaint.
affect (the) development (of)|verb + noun|to influence how something grows|Early nutrition affects the development of the brain.|Trade policy affected the development of the region.
affect (the) outcome|verb + noun|to change the result|The missing cases could affect the outcome of the analysis.|Weather affected the outcome of the trial.
directly affect|adv + verb|to influence something immediately and without intermediaries|The ruling directly affects about 40,000 tenants.|Interest rates directly affect household spending.
severely affect|adv + verb|to harm something badly|The drought severely affected yields in the north.|Services were severely affected by the strike.
significantly affect|adv + verb|to influence something to a measurable degree|Class size did not significantly affect attainment.|The change significantly affected response times.
(be) directly affected|adv + adj|influenced immediately by something|About 2,000 households were directly affected by the closure.|Those directly affected were not consulted.
federal agency|adj + noun|a government body operating nationally|Three federal agencies share responsibility for the river.|The data come from a federal agency's annual return.
regulatory agency|adj + noun|a body that supervises an industry|The regulatory agency can impose fines but not criminal penalties.|Regulatory agencies were slow to respond to the new products.
political agenda|adj + noun|the issues politicians treat as priorities|Housing returned to the political agenda after the crash.|Climate change now dominates the political agenda.
set (the) agenda|verb + noun|to decide which issues get attention|Newspapers still help set the agenda for broadcasters.|The chair sets the agenda for each meeting.
generally agree|adv + verb|to be in broad agreement|Economists generally agree that the measure is crude.|Historians generally agree on the sequence of events.
strongly agree|adv + verb|to agree very much|Two-thirds of respondents strongly agree with the statement.|Participants could strongly agree, agree, disagree or strongly disagree.
strongly disagree|adv + verb|to disagree very much|Only eight respondents strongly disagree with the proposal.|The two authors strongly disagree about the cause.
broad agreement|adj + noun|general consent on the main points|There is broad agreement that the system needs reform.|Broad agreement was reached on the timetable.
general agreement|adj + noun|consent among most people|There is general agreement about the diagnosis but not the cure.|General agreement emerged after the second round.
international agreement|adj + noun|a treaty between countries|The international agreement sets binding emissions targets.|No international agreement covers this class of weapon.
reach (an) agreement|verb + noun|to arrive at a settlement|The parties reached an agreement after nine months.|No agreement was reached on compensation.
overall aim|adj + noun|the main purpose of a piece of work|The overall aim is to reduce waiting times by a third.|The overall aim of the thesis is stated in Chapter 1.
primary aim|adj + noun|the chief purpose|The primary aim was to test feasibility, not effectiveness.|Recruitment was the primary aim of the pilot.
allocate resources|verb + noun|to decide how money or staff are distributed|Funds are allocated to resources by formula, not by bid.|The council must allocate resources between competing services.
(be) closely allied (to, with)|adv + adj|strongly connected with something|The movement was closely allied with the trade unions.|Her method is closely allied to that of the Chicago school.
almost identical|adv + adj|nearly the same|The two estimates are almost identical.|The wording is almost identical in both editions.
alternative explanation|adj + noun|a different account of why something happens|An alternative explanation is that reporting improved.|The paper considers three alternative explanations.
alternative form|adj + noun|a different version of something|The questionnaire exists in an alternative form for children.|Alternative forms of the verb survive in dialect.
alternative interpretation|adj + noun|a different reading of the evidence|The same data support an alternative interpretation.|An alternative interpretation is offered in the appendix.
alternative means|adj + noun|a different way of doing something|Alternative means of transport were offered during the closure.|The study sought alternative means of verification.
alternative method|adj + noun|a different technique|An alternative method gives almost the same result.|Alternative methods were tested on the same sample.
alternative model|adj + noun|a different theoretical account|The chapter sets out an alternative model of change.|An alternative model fits the early data better.
alternative solution|adj + noun|a different way to solve a problem|An alternative solution is to pool the smallest categories.|No alternative solution was acceptable to both sides.
alternative source|adj + noun|a different place to get something|Alternative sources of funding were sought.|The figures were checked against an alternative source.
alternative strategy|adj + noun|a different plan of action|An alternative strategy is to target the worst cases first.|Both alternative strategies were modelled.
alternative view|adj + noun|a different opinion|An alternative view is that the reform came too late.|The chapter presents the alternative view fairly.
alternative way|adj + noun|a different manner of doing something|There is an alternative way to read the figures.|Alternative ways of grouping the data were tried.
provide (an) alternative|verb + noun|to offer a different option|The scheme provides an alternative to custody.|Open access provides an alternative to subscription.
(a) considerable amount (of)|adj + noun|a fairly large quantity|A considerable amount of data was lost in the transfer.|The work required a considerable amount of coordination.
(a) huge amount (of)|adj + noun|a very large quantity|A huge amount of material remains uncatalogued.|The project generated a huge amount of interest.
(a) significant amount (of)|adj + noun|a quantity large enough to matter|A significant amount of the budget is unspent.|Significant amounts of nitrogen reach the river each spring.
(a) substantial amount (of)|adj + noun|a large quantity|A substantial amount of evidence supports the claim.|Substantial amounts of time were spent on recruitment.
(a) vast amount (of)|adj + noun|an extremely large quantity|A vast amount of administrative data now exists.|The archive holds a vast amount of correspondence.
(an) enormous amount (of)|adj + noun|a very large quantity|An enormous amount of work went into the coding.|The reform generated an enormous amount of paperwork.
ample evidence|adj + noun|plenty of proof|There is ample evidence that early intervention helps.|Ample evidence of the practice survives in court records.
anecdotal evidence|adj + noun|proof based on individual reports rather than study|Anecdotal evidence suggests the problem is widespread.|Anecdotal evidence should not be dismissed, but it cannot settle the question.
careful analysis|adj + noun|examination done with close attention|Careful analysis shows the difference is an artefact.|The claim does not survive careful analysis.
conduct (an) analysis|verb + noun|to carry out an examination of data|We conducted a separate analysis for each region.|A sensitivity analysis was conducted to test the assumption.
critical analysis|adj + noun|examination that weighs strengths and weaknesses|The essay requires critical analysis, not summary.|Critical analysis of the sources reveals two forgeries.
detailed analysis|adj + noun|thorough, fine-grained examination|A detailed analysis appears in Chapter 5.|Detailed analysis of the transcripts took six months.
economic analysis|adj + noun|examination in terms of costs and markets|Economic analysis suggests the subsidy is poorly targeted.|The report includes an economic analysis of the options.
final analysis|adj + noun|the last or decisive examination|The final analysis included 812 cases.|In the final analysis, the policy failed on its own terms.
full analysis|adj + noun|a complete examination|A full analysis will be published next year.|Space does not permit a full analysis here.
further analysis|adj + noun|additional examination|Further analysis revealed a second cluster.|These findings warrant further analysis.
historical analysis|adj + noun|examination of how something developed over time|Historical analysis shows the pattern is not new.|The chapter combines historical analysis with interviews.
qualitative analysis|adj + noun|examination of non-numerical material|Qualitative analysis of the interviews identified four themes.|Qualitative analysis complements the survey findings.
quantitative analysis|adj + noun|examination using numbers and statistics|Quantitative analysis confirmed the trend.|The thesis combines quantitative analysis with case studies.
statistical analysis|adj + noun|examination using statistical methods|Statistical analysis was performed in R.|No statistical analysis was possible with so few cases.
subsequent analysis|adj + noun|examination carried out later|Subsequent analysis showed the error was in the coding.|Subsequent analyses excluded the outliers.
systematic analysis|adj + noun|examination following a consistent method|A systematic analysis of all 400 reports was undertaken.|Systematic analysis replaced the earlier ad hoc approach.
textual analysis|adj + noun|close examination of a written text|Textual analysis reveals two distinct authorial hands.|The module teaches textual analysis of policy documents.
thematic analysis|adj + noun|identifying recurring themes in qualitative data|Thematic analysis produced six categories.|Thematic analysis was conducted by two independent coders.
theoretical analysis|adj + noun|examination in terms of theory|Theoretical analysis predicts a sharp threshold.|The paper offers theoretical analysis rather than new data.
use (the) analysis|verb + noun|to apply the results of an examination|We use the analysis to inform the second phase.|The council used the analysis to justify the closure.
analytical approach|adj + noun|a way of examining something systematically|The thesis adopts a comparative analytical approach.|Her analytical approach owes much to Foucault.
analytical tool|adj + noun|a method or instrument used in analysis|Regression remains the standard analytical tool here.|The framework is best treated as an analytical tool.
common ancestor|adj + noun|a species or person from which others descend|The two species share a common ancestor.|All the manuscripts descend from a common ancestor.
annual conference|adj + noun|a yearly meeting of an organisation|The findings were presented at the annual conference.|The annual conference moved online in 2020.
annual meeting|adj + noun|a yearly gathering|The annual meeting approved the new rules.|Accounts are presented at the annual meeting.
annual rate|adj + noun|a figure expressed per year|Prices rose at an annual rate of four per cent.|The annual rate of turnover doubled.
annual report|adj + noun|a yearly published account of an organisation|The figures are taken from the annual report.|The annual report omits any mention of the dispute.
annual review|adj + noun|a yearly assessment|Each project undergoes an annual review.|The annual review recommended closing two sites.
final answer|adj + noun|the conclusive response|The data give no final answer to the question.|Her final answer differed from the one she first gave.
become apparent|verb + adj|to start to be obvious|It soon became apparent that the sample was biased.|The scale of the loss became apparent only later.
immediately apparent|adv + adj|obvious at once|The error was not immediately apparent.|The pattern is immediately apparent in Figure 2.
particularly apparent|adv + adj|especially obvious|The effect is particularly apparent among younger workers.|The gap is particularly apparent in rural areas.
physical appearance|adj + noun|how someone or something looks|Judgements were made on physical appearance alone.|The physical appearance of the samples did not differ.
apply (the) theory|verb + noun|to use a theory in a particular case|The chapter applies the theory to Japanese data.|Applying the theory to small firms raises problems.
apply equally|verb + adv|to be true in the same way for all cases|The rule applies equally to staff and students.|The criticism applies equally to the earlier study.
common approach|adj + noun|a widely used way of doing something|A common approach is to drop the incomplete cases.|The two teams agreed on a common approach.
comprehensive approach|adj + noun|a method that covers everything relevant|A comprehensive approach would include informal work.|The strategy promises a comprehensive approach to housing.
critical approach|adj + noun|a method that questions assumptions|The book takes a critical approach to official statistics.|A critical approach is needed when sources are partisan.
develop (an) approach|verb + noun|to work out a method|The team developed an approach suited to small samples.|A new approach was developed during the pilot.
flexible approach|adj + noun|a method that can be adapted|A flexible approach worked better than a fixed protocol.|Supervisors took a flexible approach to deadlines.
general approach|adj + noun|a broad method|The general approach is set out before the detail.|Our general approach follows that of Chen.
holistic approach|adj + noun|a method treating something as a whole|The clinic takes a holistic approach to treatment.|A holistic approach considers housing alongside health.
integrated approach|adj + noun|a method combining several elements|An integrated approach links health and social care.|The curriculum takes an integrated approach to literacy.
logical approach|adj + noun|a method following clear reasoning|The most logical approach is to start with the oldest records.|A logical approach would test the assumption first.
qualitative approach|adj + noun|a method using non-numerical evidence|A qualitative approach captured what the survey missed.|The second study takes a qualitative approach.
quantitative approach|adj + noun|a method using measurement and statistics|A quantitative approach requires a larger sample.|The quantitative approach dominates the field.
similar approach|adj + noun|a comparable method|A similar approach was used in the Dutch study.|Both authors take a similar approach to coding.
standard approach|adj + noun|the usual accepted method|The standard approach is to log-transform the values.|We depart from the standard approach for two reasons.
systematic approach|adj + noun|an orderly, consistent method|A systematic approach to screening reduced missed cases.|The review follows a systematic approach.
take (an) approach|verb + noun|to adopt a method|The chapter takes a historical approach.|We take a cautious approach to interpretation.
theoretical approach|adj + noun|a method grounded in theory|Her theoretical approach draws on feminist geography.|The two papers differ in theoretical approach.
traditional approach|adj + noun|the long-established method|The traditional approach treats the text as fixed.|A traditional approach to grammar teaching persists.
use (an) approach|verb + noun|to employ a method|We use a mixed-methods approach throughout.|The same approach was used in both sites.
appropriate behaviour|adj + noun|conduct that fits the situation|The guidance defines appropriate behaviour online.|What counts as appropriate behaviour differs by setting.
appropriate conditions|adj + noun|circumstances that suit a purpose|Under appropriate conditions the reaction completes in minutes.|Appropriate conditions for growth were maintained throughout.
appropriate data|adj + noun|information suited to the question|Appropriate data simply do not exist for this period.|Choosing appropriate data matters more than the technique.
appropriate form|adj + noun|a suitable version or format|Results were presented in an appropriate form for lay readers.|The appropriate form must be signed before access.
appropriate language|adj + noun|wording suited to the audience|Reports should use appropriate language for a general reader.|Appropriate language for a seminar differs from that of a paper.
appropriate level|adj + noun|a suitable degree or standard|Support was pitched at an appropriate level for beginners.|Finding the appropriate level of detail is a judgement call.
appropriate point|adj + noun|a suitable moment or place|The question is taken up at an appropriate point in Chapter 4.|Consent was sought at the appropriate point in the interview.
appropriate response|adj + noun|a suitable reaction|Closure was not an appropriate response to one complaint.|An appropriate response depends on how early the fault is found.
appropriate skills|adj + noun|abilities suited to a task|Staff lacked the appropriate skills for the new system.|Training ensures teachers have the appropriate skills.
appropriate treatment|adj + noun|suitable medical or other care|Delays in appropriate treatment worsen outcomes.|Appropriate treatment was available in only half the centres.
appropriate way|adj + noun|a suitable manner of doing something|There is no single appropriate way to present these data.|The most appropriate way forward is a pilot.
consider appropriate|verb + adj|to judge something suitable|The committee may take whatever action it considers appropriate.|Supervisors used whatever method they considered appropriate.
deem appropriate|verb + adj|to judge something suitable, often formally|The regulator may impose any penalty it deems appropriate.|Records were kept for as long as deemed appropriate.
particularly appropriate|adv + adj|especially suitable|The method is particularly appropriate for small samples.|This framing is particularly appropriate here.
seem appropriate|verb + adj|to appear suitable|It did not seem appropriate to contact the families again.|Where it seemed appropriate, the wording was simplified.
respond appropriately|verb + adv|to react in a suitable way|Staff were trained to respond appropriately to disclosures.|The system failed to respond appropriately to the alarm.
complex area|adj + noun|a difficult field or subject|Immigration law is a notoriously complex area.|This is a complex area where simple rules fail.
core area|adj + noun|a central part of a subject or place|Grammar remains a core area of the syllabus.|The core areas of the city lost population.
cover (an) area|verb + noun|to deal with or extend over a field|The review covers three main areas.|The survey covers an area of 400 square kilometres.
geographic(al) area|adj + noun|a region defined by location|Sampling was stratified by geographical area.|The service covers a wide geographic area.
identify (an) area|verb + noun|to pick out a field needing attention|The audit identified three areas for improvement.|We identify an area where the evidence is thin.
key area|adj + noun|an especially important field|Staffing is a key area of concern.|The strategy names four key areas for investment.
local area|adj + noun|the immediate surrounding district|Most pupils are drawn from the local area.|Local area statistics were released in March.
main area|adj + noun|the principal field or part|The main areas of disagreement are listed below.|Housing is the main area of spending.
major area|adj + noun|an important field|Energy is now a major area of research.|Three major areas of weakness emerged.
metropolitan area|adj + noun|a large city together with its suburbs|Rents rose fastest in metropolitan areas.|The metropolitan area now holds nine million people.
particular area|adj + noun|a specific field or district|Each reviewer covers a particular area.|Deprivation is concentrated in particular areas.
problem area|noun + noun|a part of something that causes difficulty|The report lists maintenance as a problem area.|Pronunciation remains a problem area for learners.
related area|adj + noun|a connected field|Work in related areas reaches the same conclusion.|Graduates often move into related areas.
rural area|adj + noun|the countryside rather than towns|Broadband coverage in rural areas remains poor.|Rural areas lost services faster than urban ones.
specific area|adj + noun|a precisely defined field or place|The grant targets specific areas of deprivation.|Each chapter examines one specific area.
subject area|noun + noun|a field of academic study|Entry requirements vary by subject area.|The library is arranged by subject area.
urban area|adj + noun|a town or city rather than countryside|Air quality is worst in dense urban areas.|Two-thirds of the population now live in urban areas.
vast area|adj + noun|a very large region|The fire destroyed a vast area of forest.|A vast area of the archive remains uncatalogued.
whole area|adj + noun|the entire field or region|The whole area of consent needs rethinking.|Flooding affected the whole area for a week.
wide area|adj + noun|a large region or broad field|The scheme covers a wide area of the county.|The term spans a wide area of meaning.
political arena|adj + noun|the sphere of public political activity|The issue moved from the courts to the political arena.|Few scientists are comfortable in the political arena.
compelling argument|adj + noun|reasoning that is hard to resist|The book makes a compelling argument for reform.|She presents a compelling argument from weak evidence.
counter argument|noun + noun|reasoning against a position|The chapter sets out the main counter arguments.|No serious counter argument has been offered.
develop (an) argument|verb + noun|to build up a case step by step|The argument is developed over three chapters.|She develops the argument from first principles.
general argument|adj + noun|the broad case being made|The general argument survives the criticism.|The general argument is clear even if the detail is not.
logical argument|adj + noun|reasoning that follows valid steps|A logical argument may still rest on false premises.|The essay is a model of logical argument.
main argument|adj + noun|the central case|The main argument appears on page 40.|The main argument rests on a single statistic.
make (an) argument|verb + noun|to put a case|The author makes an argument for narrow definitions.|A similar argument was made in 1998.
present (an) argument|verb + noun|to set out a case|The paper presents an argument against the orthodoxy.|Both sides presented their arguments to the panel.
similar argument|adj + noun|a comparable case|A similar argument applies to the second dataset.|Similar arguments were used in the earlier debate.
support (an) argument|verb + noun|to provide backing for a case|The data do not support the argument.|Two independent studies support this argument.
armed conflict|adj + noun|fighting between organised forces|The region has seen armed conflict since 2011.|Civilian deaths in armed conflict are undercounted.
institutional arrangement|adj + noun|the formal structures organising something|Institutional arrangements differ between the two countries.|The reform changed institutional arrangements for funding.
make arrangements|verb + noun|to organise what is needed|The school made arrangements for pupils to sit the exam remotely.|Arrangements were made to store the samples.
(a) vast array (of)|adj + noun|a very wide variety|The archive holds a vast array of material.|A vast array of methods has been tried.
(a) wide array (of)|adj + noun|a broad variety|The term covers a wide array of practices.|Respondents gave a wide array of reasons.
publish (an) article|verb + noun|to issue a piece of writing|She published an article on the topic in 2019.|The journal published the article without peer review.
artificial intelligence|adj + noun|computer systems that perform tasks needing human intelligence|Artificial intelligence is now used to screen applications.|The ethics of artificial intelligence are contested.
certain aspect|adj + noun|a particular part or feature|Certain aspects of the design were never explained.|Only certain aspects of the reform were implemented.
consider (an) aspect|verb + noun|to examine a particular feature|The chapter considers the economic aspect separately.|Few studies consider the gendered aspects of the work.
cultural aspect|adj + noun|a feature relating to culture|The cultural aspects of the illness are often ignored.|Training covers the cultural aspects of care.
focus on (an) aspect|verb + noun|to concentrate on a particular feature|This section focuses on the organisational aspect.|The study focuses on one aspect of a larger problem.
fundamental aspect|adj + noun|a basic, essential feature|Trust is a fundamental aspect of the relationship.|The fundamental aspects of the design were kept.
general aspect|adj + noun|a broad feature|The general aspects are covered first.|Some general aspects apply to all three sites.
key aspect|adj + noun|an especially important feature|Timing is a key aspect of the intervention.|The key aspect here is who holds the data.
negative aspect|adj + noun|a bad feature|The negative aspects of the scheme were underreported.|Every method has its negative aspects.
particular aspect|adj + noun|a specific feature|Each interview focused on one particular aspect.|No particular aspect stands out as decisive.
positive aspect|adj + noun|a good feature|The positive aspects of the change were quickly felt.|Staff identified several positive aspects.
related aspect|adj + noun|a connected feature|A related aspect is the cost of monitoring.|Related aspects are dealt with in Chapter 6.
social aspect|adj + noun|a feature relating to people and society|The social aspects of migration are the subject here.|The social aspect of the illness matters as much as the clinical.
specific aspect|adj + noun|a precisely defined feature|Each question targets a specific aspect of the service.|We measured three specific aspects of fluency.
technical aspect|adj + noun|a feature relating to method or equipment|The technical aspects are explained in the appendix.|Technical aspects of the build delayed the launch.
various aspects|adj + noun|several different features|The interviews covered various aspects of daily work.|Various aspects of the policy remain unclear.
assess (the) impact (of)|verb + noun|to judge the effect of something|The study assesses the impact of the levy on small firms.|It is too early to assess the impact of the change.
assessment process|noun + noun|the procedure for judging something|The assessment process takes about six weeks.|Students found the assessment process opaque.
make (an) assessment|verb + noun|to form a judgement|Clinicians make an assessment within 24 hours of admission.|No formal assessment was made of the risk.
risk assessment|noun + noun|a formal judgement of danger|A risk assessment is required before fieldwork.|The risk assessment underestimated the flood level.
(be) randomly assigned (to)|adv + adj|allocated by chance to a group|Participants were randomly assigned to one of three conditions.|Schools were randomly assigned to the early or late start.
financial assistance|adj + noun|help in the form of money|Financial assistance is available to low-income students.|The fund gave financial assistance to 400 households.
medical assistance|adj + noun|help from health professionals|Medical assistance arrived within the hour.|Those needing medical assistance were referred directly.
provide assistance|verb + noun|to give help|Volunteers provided assistance with transport.|The embassy provided assistance to stranded travellers.
technical assistance|adj + noun|expert practical help|Technical assistance was provided by the manufacturer.|The programme offers technical assistance to local authorities.
associated factors|adj + noun|influences that occur alongside something|The paper identifies the factors associated with dropout.|Associated factors include age, income and housing.
(be) closely associated (with)|adv + adj|strongly connected with something|Poverty is closely associated with poor health.|The style is closely associated with one workshop.
(be) commonly associated (with)|adv + adj|usually connected with something|Fatigue is commonly associated with the condition.|The term is commonly associated with the 1960s.
(be) positively associated (with)|adv + adj|increasing together with something|Income is positively associated with life expectancy.|Attendance was positively associated with attainment.
(be) strongly associated (with)|adv + adj|closely linked with something|Smoking is strongly associated with the disease.|Deprivation is strongly associated with early death.
assume (the) role (of)|verb + noun|to take on a function|The eldest child often assumes the role of carer.|She assumed the role of chair in 2018.
assume responsibility|verb + noun|to take on a duty|The agency assumed responsibility for inspections in 2003.|No one assumed responsibility for the archive.
(be) generally assumed|adv + adj|taken for granted by most people|It is generally assumed that respondents answer honestly.|The generally assumed date is probably too early.
common assumption|adj + noun|a widely held belief|A common assumption is that the groups are comparable.|The chapter challenges this common assumption.
fundamental assumption|adj + noun|a basic belief underlying an argument|The fundamental assumption is that markets clear.|Two fundamental assumptions are never tested.
make (an) assumption|verb + noun|to take something as true without proof|The model makes strong assumptions about mixing.|We make no assumption about the distribution.
certain assumptions|adj + noun|particular beliefs taken as given|Certain assumptions are built into the measure.|The forecast rests on certain assumptions about migration.
atomic energy|adj + noun|power from nuclear reactions|The atomic energy programme began in 1947.|Atomic energy supplies a fifth of the country's electricity.
deliberate attempt|adj + noun|an intentional effort|This was a deliberate attempt to widen participation.|There is no evidence of a deliberate attempt to mislead.
attend (a) conference|verb + noun|to go to a formal meeting|She attended the conference as a postgraduate.|Staff may attend one conference a year.
careful attention|adj + noun|close, thoughtful notice|Careful attention was paid to the wording.|These differences deserve careful attention.
critical attention|adj + noun|scholarly notice that evaluates|The novel has received little critical attention.|Critical attention turned to the method rather than the result.
draw attention (to)|verb + noun|to make people notice something|The report draws attention to the missing data.|We draw attention to three limitations.
focus attention (on)|verb + noun|to concentrate notice on something|The crisis focused attention on supply chains.|The chapter focuses attention on the earliest records.
change (an) attitude|verb + noun|to alter how people think about something|Campaigns rarely change attitudes on their own.|Attitudes changed faster than behaviour.
negative attitude|adj + noun|an unfavourable view|Negative attitudes to the vaccine were concentrated in two regions.|Staff reported negative attitudes from managers.
positive attitude|adj + noun|a favourable view|A positive attitude to error helps learning.|Most respondents held a positive attitude to the change.
changing attitudes|adj + noun|views that are shifting over time|Changing attitudes to marriage show up clearly in the data.|The chapter traces changing attitudes since 1950.
cultural attitudes|adj + noun|views shared within a culture|Cultural attitudes to debt vary widely.|Cultural attitudes shape what counts as illness.
public attitudes|adj + noun|views held by people generally|Public attitudes to immigration softened after 2016.|Public attitudes were measured annually.
social attitudes|adj + noun|views held across a society|The British Social Attitudes survey began in 1983.|Social attitudes shifted faster than the law.
target audience|noun + noun|the group a text or product is meant for|The target audience is first-year undergraduates.|The campaign missed its target audience entirely.
wider audience|adj + noun|a larger group of readers or viewers|The book reached a wider audience than expected.|The findings deserve a wider audience.
first author|adj + noun|the person listed first on a publication|The first author did most of the analysis.|First authorship is contested in large teams.
original author|adj + noun|the person who first wrote something|The original author could not be traced.|We contacted the original authors for the raw data.
central authority|adj + noun|a governing body at the centre|Funding decisions rest with the central authority.|The reform weakened the central authority.
exercise authority|verb + noun|to use power that one holds|The committee rarely exercises its authority to refuse.|Local officers exercise authority delegated by the board.
local authority|adj + noun|the elected body governing a district|The local authority is responsible for school places.|Local authority spending fell by a third.
political authority|adj + noun|legitimate political power|Political authority passed to the provinces.|The regime lost political authority before it lost office.
public authority|adj + noun|a body exercising powers on behalf of the state|Public authorities must publish their spending.|The duty applies to every public authority.
greater autonomy|adj + noun|more freedom to decide for oneself|Schools were promised greater autonomy over the curriculum.|Greater autonomy came with tighter inspection.
relative autonomy|adj + noun|a degree of independence within a system|The agency enjoys relative autonomy from the ministry.|The concept of relative autonomy is central to the theory.
available evidence|adj + noun|the proof that can actually be obtained|The available evidence does not support the claim.|On the available evidence, the policy had no effect.
available information|adj + noun|the facts that can be obtained|Decisions were made on the best available information.|Available information about the earlier period is thin.
available resources|adj + noun|the money, staff or materials to hand|Available resources were stretched by the second wave.|The plan must work within available resources.
become available|verb + adj|to come to be obtainable|The 2021 figures become available in March.|New evidence became available after the trial closed.
currently available|adv + adj|obtainable at present|No vaccine is currently available for this strain.|Currently available data cover only three years.
freely available|adv + adj|obtainable without cost or restriction|The dataset is freely available for research.|The software is freely available under an open licence.
make available|verb + adj|to allow something to be obtained|The authors made the raw data available on request.|Transcripts were made available to participants.
publicly available|adv + adj|obtainable by anyone|The report is publicly available on the department's site.|Only publicly available sources were used.
readily available|adv + adj|easy to obtain|Comparable figures are not readily available.|Cheap sequencing made the technique readily available.
widely available|adv + adj|obtainable in many places|Testing became widely available in the spring.|The drug is widely available but rarely prescribed.
average score|adj + noun|the mean of a set of marks|The average score rose by four points.|Average scores differed little between the groups.
national average|adj + noun|the mean figure for a whole country|Attainment in the district is below the national average.|Rents are twice the national average.
become aware|verb + adj|to come to know about something|Managers became aware of the fault only after the failure.|Patients became aware of the recall through the media.
fully aware|adv + adj|completely conscious of something|The authors are fully aware of the limitations.|Participants were fully aware that they could withdraw.
increasingly aware|adv + adj|more and more conscious of something|Employers are increasingly aware of the cost of turnover.|The public became increasingly aware of the risk.
keenly aware|adv + adj|very conscious of something|Staff were keenly aware of how little time remained.|She was keenly aware of the gap in the record.
well aware|adv + adj|fully conscious of something|The committee was well aware of the objection.|Respondents were well aware of what the survey was for.
greater awareness|adj + noun|increased understanding of something|Greater awareness of symptoms led to earlier diagnosis.|The campaign produced greater awareness but little change.
growing awareness|adj + noun|increasing understanding of something|There is growing awareness of the problem among clinicians.|Growing awareness of the risk changed the guidance.
increase awareness|verb + noun|to make more people understand something|The campaign aimed to increase awareness of the symptoms.|Training increased awareness without changing practice.
make aware|verb + adj|to inform someone of something|Staff were made aware of the risk in January.|Patients must be made aware of the side effects.
increased awareness|adj + noun|a greater understanding than before|Increased awareness of symptoms brought earlier referrals.|The campaign produced increased awareness but little behaviour change.
increasing awareness|adj + noun|understanding that keeps growing|There is increasing awareness of the cost of overwork.|Increasing awareness among employers has not changed practice.
public awareness|adj + noun|how much people in general know about something|Public awareness of the scheme remained low.|Public awareness rose sharply after the broadcast.
raise awareness|verb + noun|to make more people know about something|The charity works to raise awareness of the condition.|Posters raised awareness without increasing uptake.
background knowledge|noun + noun|what a reader or learner already knows|Comprehension depends heavily on background knowledge.|The test assumes background knowledge many pupils lack.
cultural background|adj + noun|the culture a person comes from|Participants were drawn from a range of cultural backgrounds.|Cultural background shaped how the question was understood.
diverse background|adj + noun|a varied origin or upbringing|Students come from diverse backgrounds.|The panel was chosen from diverse backgrounds.
historical background|adj + noun|the past events behind a situation|Chapter 2 provides the historical background.|Without the historical background the dispute makes no sense.
social background|adj + noun|the social position a person comes from|Social background still predicts entry to the professions.|The sample was stratified by social background.
(be) largely based (on)|adv + adj|resting mainly on something|The estimate is largely based on self-report.|The account is largely based on a single source.
basic component|adj + noun|an essential part of something|Trust is a basic component of the relationship.|The basic components of the system are described below.
basic concept|adj + noun|a fundamental idea|The chapter defines the basic concepts.|Students must grasp the basic concepts before the method.
basic element|adj + noun|an essential part|The basic elements of the argument are three.|Consent is a basic element of research ethics.
basic function|adj + noun|a primary purpose or operation|The basic function of the institution has not changed.|Two basic functions of language are described.
basic information|adj + noun|essential facts|Basic information about the sample is given in Table 1.|Respondents supplied basic information about their household.
basic premise|adj + noun|a fundamental starting assumption|The basic premise is that incentives change behaviour.|The basic premise of the argument is questionable.
basic principle|adj + noun|a fundamental rule|The basic principle is that no one pays twice.|Two basic principles govern the allocation.
basic research|adj + noun|research pursuing knowledge rather than application|Basic research rarely attracts commercial funding.|The distinction between basic and applied research is blurred.
basic structure|adj + noun|the fundamental organisation of something|The basic structure of the argument is set out below.|The basic structure of the molecule was known by 1953.
basic technique|adj + noun|a fundamental method|The basic technique has not changed in forty years.|Students learn the basic techniques in the first term.
legal basis|adj + noun|the law that authorises something|The legal basis for the detention was never stated.|Processing requires a legal basis under the regulation.
theoretical basis|adj + noun|the theory underpinning something|The theoretical basis of the model is set out first.|The practice has little theoretical basis.
bear resemblance (to)|verb + noun|to be similar to something|The final text bears little resemblance to the draft.|The pattern bears a strong resemblance to the 1970s.
become (a) source (of)|verb + noun|to turn into something that provides or causes|The scheme became a source of resentment.|The archive has become a source of new research.
become (the) focus (of)|verb + noun|to turn into the centre of attention|Housing became the focus of the campaign.|The clause became the focus of the dispute.
become blurred|verb + adj|to lose clear boundaries|The line between work and home has become blurred.|The distinction becomes blurred in practice.
become established|verb + adj|to come to be accepted or settled|The method became established in the 1990s.|Once a practice becomes established it is hard to change.
become evident|verb + adj|to become clear|It soon became evident that the records were incomplete.|The scale of the problem became evident only later.
become independent|verb + adj|to come to stand alone|The agency became independent of the ministry in 2004.|The colony became independent in 1962.
become involved (with/in)|verb + adj|to start taking part in something|Parents became involved in the planning at a late stage.|She became involved with the project through a colleague.
become obvious|verb + adj|to become easy to see|It became obvious that two coders were applying different rules.|The flaw became obvious during the pilot.
become visible|verb + adj|to come to be seen|The effect becomes visible only after six months.|Unpaid work becomes visible once time use is measured.
become widespread|verb + adj|to spread to many places|Home testing became widespread in 2021.|The practice became widespread before it was regulated.
begin (a) process|verb + noun|to start a sequence of actions|The council began the process of consultation in May.|Begin the process by cleaning the sample.
behave differently|verb + adv|to act in another way|The two materials behave differently under heat.|Respondents behave differently when they know they are observed.
human behaviour|adj + noun|the way people act|Human behaviour is hard to model from aggregate data.|The theory predicts human behaviour poorly at the margins.
individual behaviour|adj + noun|how one person acts|Aggregate trends say little about individual behaviour.|The campaign targeted individual behaviour rather than systems.
sexual behaviour|adj + noun|sexual conduct|Surveys of sexual behaviour suffer from reporting bias.|The study examined changes in sexual behaviour over a decade.
social behaviour|adj + noun|how people act with others|Social behaviour changed quickly during the closures.|The species shows complex social behaviour.
religious belief|adj + noun|faith-based conviction|Religious belief was not associated with the outcome.|The law protects religious belief and its absence.
(be) widely believed|adv + adj|thought to be true by many people|It is widely believed that the practice began in Italy.|The widely believed figure turns out to be a misprint.
beneficial effect|adj + noun|a helpful result|Exercise had a beneficial effect on sleep quality.|No beneficial effect was found in the older group.
provide (a) benefit|verb + noun|to give an advantage|The scheme provides a clear benefit to carers.|Screening provides little benefit at this age.
economic benefits|adj + noun|financial advantages|The economic benefits were concentrated in two regions.|Economic benefits were counted but social costs were not.
potential benefits|adj + noun|advantages that might occur|The potential benefits outweigh the known risks.|Researchers set out the potential benefits of the scheme.
(be) best described (as, in terms of)|adv + adj|most accurately characterised in a given way|The relationship is best described as cyclical.|The design is best described in terms of three stages.
binary opposition|adj + noun|a pair of contrasting terms treated as opposites|The chapter questions the binary opposition of nature and culture.|Binary oppositions structure much of the early theory.
binary system|adj + noun|a system based on two states or parts|Computers use a binary system of ones and zeros.|The star proved to be part of a binary system.
biological evolution|adj + noun|change in living things across generations|Biological evolution operates far more slowly than cultural change.|The analogy with biological evolution is imperfect.
biological science|adj + noun|the study of living things|Biological science has been transformed by cheap sequencing.|The department covers both biological and physical science.
biological sex|adj + noun|the physical categories of male and female|The record gives biological sex but not gender identity.|Biological sex was coded from the birth register.
international body|adj + noun|an organisation of several countries|The standard is set by an international body.|No international body has authority to enforce the rule.
professional body|adj + noun|an organisation governing an occupation|The professional body can strike members off the register.|Guidance is issued by the relevant professional body.
strong bond|adj + noun|a close connection|A strong bond formed between the two groups.|Strong bonds with staff predicted retention.
clear boundary|adj + noun|a sharp dividing line|There is no clear boundary between the two categories.|The study draws a clear boundary around the period.
cultural boundary|adj + noun|a dividing line between cultures|The style crossed cultural boundaries quickly.|Cultural boundaries rarely match national ones.
national boundary|adj + noun|a border between countries|Pollution does not respect national boundaries.|National boundaries were redrawn after the war.
brief description|adj + noun|a short account|Each item is given a brief description.|A brief description of the method follows.
brief discussion|adj + noun|a short treatment of a topic|The chapter ends with a brief discussion of limitations.|After a brief discussion the proposal was approved.
brief history|adj + noun|a short account of the past|The introduction gives a brief history of the institution.|A brief history of the term is set out below.
brief introduction|adj + noun|a short opening account|The book offers a brief introduction to the field.|Each session began with a brief introduction.
brief overview|adj + noun|a short general summary|This section gives a brief overview of the data.|A brief overview of the debate is enough here.
brief period|adj + noun|a short stretch of time|For a brief period the policy was reversed.|Prices fell for a brief period in 2009.
brief review|adj + noun|a short survey of work or evidence|A brief review of the literature follows.|The committee carried out a brief review of the case.
brief summary|adj + noun|a short account of the main points|A brief summary appears at the end of each chapter.|The minutes give only a brief summary.
brief time|adj + noun|a short while|She worked there for a brief time in 2011.|In the brief time available, only two sites were visited.
briefly describe|verb + adv|to give a short account|Participants were asked to briefly describe their routine.|The method is briefly described below.
briefly discuss|verb + adv|to treat a topic shortly|We briefly discuss the ethical issues here.|The paper briefly discusses alternative explanations.
(a) broad range (of)|adj + noun|a wide variety|The journal covers a broad range of disciplines.|Respondents gave a broad range of answers.
broad category|adj + noun|a wide grouping|Responses fell into three broad categories.|The broad category hides important differences.
broad definition|adj + noun|a wide meaning for a term|On a broad definition, a third of the workforce qualifies.|The broad definition was adopted for comparability.
broad spectrum|adj + noun|a wide span of things|The term covers a broad spectrum of conditions.|The drug is effective across a broad spectrum of bacteria.
broader context|adj + noun|the wider setting of something|The result must be read in a broader context.|The chapter places the reform in its broader context.
(be) broadly defined|adv + adj|given a wide meaning|Poverty is broadly defined here to include fuel costs.|Broadly defined, the sector employs two million people.
broadly similar|adv + adj|alike in general terms|The two samples are broadly similar in age.|Results were broadly similar across the three sites.
business sector|noun + noun|a part of the economy made up of firms|The business sector absorbed most of the loss.|Training is funded jointly by the business sector.
business transaction|noun + noun|a commercial exchange|Each business transaction is logged automatically.|The contract covers a single business transaction.
(be) commonly called|adv + adj|usually given a particular name|The condition is commonly called burnout.|What is commonly called the gig economy is poorly defined.
limited capacity|adj + noun|a restricted ability or volume|Working memory has limited capacity.|The clinic operated at limited capacity for a year.
global capitalism|adj + noun|the worldwide capitalist economic system|The book traces the rise of global capitalism.|Global capitalism reshaped local labour markets.
industrial capitalism|adj + noun|capitalism based on factory production|Industrial capitalism transformed the north in fifty years.|The study covers the first phase of industrial capitalism.
capitalist country|adj + noun|a state with a capitalist economy|The comparison covers five capitalist countries.|Welfare provision varies widely between capitalist countries.
capitalist economy|adj + noun|an economy organised around private capital|In a capitalist economy, prices allocate resources.|The transition to a capitalist economy was abrupt.
capitalist society|adj + noun|a society organised around capitalism|Class remains central to capitalist society.|The critique applies to any capitalist society.
capitalist system|adj + noun|the capitalist way of organising production|The capitalist system proved more adaptable than predicted.|Critics of the capitalist system offered no alternative.
capitalist world|adj + noun|the capitalist part of the world|Growth slowed across the capitalist world after 1973.|The capitalist world was divided by the tariff.
primary care|adj + noun|first-contact health services|Most cases are managed in primary care.|Primary care took the strain of the backlog.
provide care|verb + noun|to look after someone|Families provide most of the care for older relatives.|The home provides care for forty residents.
careful consideration|adj + noun|thoughtful attention before deciding|After careful consideration the appeal was refused.|The proposal deserves careful consideration.
careful thought|adj + noun|serious reflection|The wording was chosen with careful thought.|Careful thought was given to the ordering of questions.
(be) carefully controlled|adv + adj|strictly regulated to avoid error|Conditions were carefully controlled throughout.|Access to the samples was carefully controlled.
(be) carefully selected|adv + adj|chosen with great attention|Sites were carefully selected to represent both regions.|Carefully selected quotations can mislead.
career development|noun + noun|progress in a working life|The scheme supports career development for early researchers.|Career development stalled for those on short contracts.
career opportunity|noun + noun|a chance to advance at work|The post offers real career opportunities.|Career opportunities were cited as the main reason for leaving.
carry information|verb + noun|to hold or convey facts|The signal carries information about depth.|Each record carries information on date and place.
carry out (the) task|verb + noun|to perform a job|Participants carried out the task twice.|The task was carried out under time pressure.
carry out research (of)|verb + noun|to conduct a study|The research was carried out between 2019 and 2022.|Few scholars have carried out research on this dialect.
civil case|adj + noun|a non-criminal court action|The dispute was settled in a civil case.|Civil cases take longer than criminal ones to resolve.
exceptional case|adj + noun|an unusual instance|Fees are waived only in exceptional cases.|This is an exceptional case and sets no precedent.
individual case|adj + noun|one particular instance|Averages conceal wide variation between individual cases.|Each individual case was reviewed by two assessors.
specific case|adj + noun|a precisely identified instance|The rule is illustrated with a specific case.|In this specific case the exception applies.
cast doubt (on)|verb + noun|to make something seem uncertain|The replication casts doubt on the original finding.|New evidence casts doubt on the official account.
fall into (the) category (of)|verb + noun|to belong to a group|Most complaints fall into the category of delay.|These cases fall into a category the law does not cover.
general category|adj + noun|a broad grouping|Responses were coded into five general categories.|The general category masks important differences.
main category|adj + noun|the principal grouping|The main categories are set out in Table 2.|Three main categories emerged from the coding.
causal link|adj + noun|a connection where one thing produces another|No causal link has been established.|The study cannot demonstrate a causal link.
causal relation|adj + noun|a cause-and-effect connection|The causal relation runs in both directions.|Correlation alone cannot establish a causal relation.
causal relationship|adj + noun|a connection in which one thing causes another|A causal relationship cannot be inferred from these data.|The experiment was designed to test a causal relationship.
cause consequences|verb + noun|to produce results, usually unwanted|Small errors in coding cause serious consequences downstream.|The delay caused consequences the planners had not foreseen.
cause stress|verb + noun|to produce mental strain|Uncertainty about contracts causes stress.|Noise at night caused stress for residents.
major cause|adj + noun|a principal reason for something|Smoking remains a major cause of preventable death.|The major cause of delay was staff shortage.
underlying cause|adj + noun|the fundamental reason behind something|Treating symptoms leaves the underlying cause untouched.|The underlying cause of the imbalance is structural.
central concept|adj + noun|a key idea|Agency is the central concept of the chapter.|Two central concepts need defining first.
central concern|adj + noun|a main worry or focus|Data security was a central concern of participants.|The central concern of the book is inequality.
central control|adj + noun|direction from a single centre|Central control of the curriculum tightened after 1988.|The system works badly without some central control.
central core|adj + noun|the innermost essential part|The central core of the argument survives.|A central core of staff stayed throughout.
central feature|adj + noun|a main defining characteristic|Peer review is a central feature of the system.|Hedging is a central feature of academic prose.
central focus|adj + noun|the main object of attention|The central focus of the study is secondary schools.|Cost became the central focus of the debate.
central government|adj + noun|the national level of the state|Funding comes mainly from central government.|Central government set the targets but devolved the blame.
central importance|adj + noun|great significance|Consent is of central importance in this field.|The question is of central importance to the thesis.
central part|adj + noun|a main portion or element|Fieldwork is a central part of the degree.|The central part of the argument is in Chapter 3.
central point|adj + noun|the main thing being said|The central point is easily lost in the detail.|Her central point deserves a fuller answer.
central position|adj + noun|a leading or middle place|The concept holds a central position in the theory.|The city occupies a central position in the network.
central problem|adj + noun|the main difficulty|The central problem is one of measurement.|A central problem remains the lack of comparable data.
central question|adj + noun|the main matter under investigation|The central question is who benefits.|Two central questions frame the dissertation.
central role|adj + noun|a leading part|Local councils play a central role in delivery.|Chance played a central role in the discovery.
central tenet|adj + noun|a core belief of a theory or doctrine|A central tenet of the theory is that preferences are stable.|The central tenets are rarely tested directly.
central theme|adj + noun|a main recurring subject|Loss is the central theme of the collection.|Three central themes emerged from the interviews.
urban centre|adj + noun|a town or city as a focal point|Services are concentrated in the larger urban centres.|The urban centre lost population to the suburbs.
certain characteristics|adj + noun|particular features|Cases sharing certain characteristics were grouped.|Certain characteristics of the sample limit generalisation.
certain circumstances|adj + noun|particular conditions|Under certain circumstances the rule does not apply.|In certain circumstances consent may be waived.
face (a) challenge|verb + noun|to confront a difficulty|Rural practices face particular challenges in recruitment.|The sector faces a serious funding challenge.
major challenge|adj + noun|an important difficulty|Recruitment proved a major challenge.|The major challenge is comparability across years.
pose (a) challenge|verb + noun|to create a difficulty|Missing data pose a challenge for the analysis.|Small samples pose a challenge to inference.
present (a) challenge|verb + noun|to create a difficulty|Remote sites present a challenge for fieldwork.|The ruling presents a challenge to existing practice.
serious challenge|adj + noun|a significant difficulty|The findings pose a serious challenge to the model.|Funding remains a serious challenge for small charities.
change constantly|verb + adv|to alter all the time|The guidance changes constantly, which frustrates staff.|Prices change constantly in this market.
change dramatically|verb + adv|to alter greatly|Attitudes changed dramatically after the broadcast.|The figures changed dramatically once the definition was revised.
change rapidly|verb + adv|to alter quickly|The technology is changing rapidly.|Conditions changed rapidly during the second week.
climate change|noun + noun|long-term shifts in global weather patterns|Climate change is already affecting crop yields.|The report sets out the local impact of climate change.
cultural change|adj + noun|change in shared values and practices|Cultural change is slower than legal change.|The reform required cultural change the training did not deliver.
demographic change|adj + noun|change in a population's size or composition|Demographic change explains much of the rise in demand.|Rural areas face rapid demographic change.
dramatic change|adj + noun|a very large alteration|The period saw dramatic change in family structure.|No dramatic change followed the reform.
economic change|adj + noun|alteration in economic conditions|Economic change outpaced the retraining schemes.|The region absorbed rapid economic change.
fundamental change|adj + noun|a change at the deepest level|The reform brought no fundamental change in practice.|Fundamental change would require new legislation.
historical change|adj + noun|change over the course of history|The chapter traces historical change in the term's meaning.|Historical change is uneven across the regions.
major change|adj + noun|an important alteration|No major change was made after the pilot.|The major change is in how cases are counted.
minor change|adj + noun|a small alteration|Only minor changes were made to the wording.|Minor changes to the protocol are listed in the appendix.
radical change|adj + noun|a complete or extreme alteration|Radical change was promised but not delivered.|The sector needs radical change, not adjustment.
significant change|adj + noun|a change large enough to matter|No significant change was observed over the period.|There was a significant change in reported wellbeing.
structural change|adj + noun|change in the underlying organisation of something|Structural change in the labour market hit older workers hardest.|Without structural change the gains will not hold.
technological change|adj + noun|change driven by new technology|Technological change reshaped the industry in a decade.|Technological change outpaced the regulation.
environmental changes|adj + noun|alterations in the natural surroundings|Environmental changes were recorded at each site.|The species responds quickly to environmental changes.
changing circumstances|adj + noun|conditions that keep shifting|The plan must adapt to changing circumstances.|Changing circumstances made the original design unworkable.
changing nature|adj + noun|the shifting character of something|The chapter examines the changing nature of work.|The changing nature of the evidence complicates comparison.
changing needs|adj + noun|requirements that shift over time|Services must respond to the changing needs of an older population.|Changing needs were not matched by changing budgets.
changing pattern|adj + noun|a shifting regularity|The data show a changing pattern of migration.|Changing patterns of use emerged after the closure.
changing world|adj + noun|a world that keeps altering|The institution has adapted slowly to a changing world.|Skills must be updated in a changing world.
ever changing|adv + adj|constantly altering|The guidance is ever changing, which confuses practitioners.|An ever changing cast of ministers slowed the reform.
rapidly changing|adv + adj|altering quickly|Rapidly changing technology makes the textbook obsolete.|The team worked in a rapidly changing environment.
remain unchanged|verb + adj|to stay the same|The overall figure remained unchanged.|The wording remains unchanged from the 1998 edition.
final chapter|adj + noun|the last chapter|The final chapter draws the threads together.|Recommendations appear in the final chapter.
following chapter|adj + noun|the chapter that comes next|The method is set out in the following chapter.|These themes are developed in the following chapters.
introductory chapter|adj + noun|the opening chapter|The introductory chapter defines the key terms.|An introductory chapter sets out the debate.
opening chapter|adj + noun|the first chapter|The opening chapter is the most accessible.|The opening chapter sketches the historical background.
preceding chapter|adj + noun|the chapter before|The argument builds on the preceding chapter.|As the preceding chapter showed, the data are thin.
previous chapter|adj + noun|the chapter before this one|The previous chapter described the sample.|Unlike the previous chapter, this one uses interviews.
characteristic feature|adj + noun|a typical distinguishing quality|Hedging is a characteristic feature of research articles.|The characteristic features of the disease appear late.
common characteristic|adj + noun|a quality shared by many|The cases share one common characteristic.|Common characteristics of successful schemes are listed.
defining characteristic|adj + noun|the quality that makes something what it is|The defining characteristic of the genre is its brevity.|Peer review is a defining characteristic of science.
key characteristic|adj + noun|an especially important quality|Flexibility is the key characteristic of the design.|Three key characteristics distinguish the two groups.
salient characteristic|adj + noun|the most noticeable quality|The salient characteristic of the sample is its youth.|Salient characteristics were recorded at intake.
specific characteristic|adj + noun|a particular distinguishing quality|Each variant has specific characteristics.|We controlled for specific characteristics of the school.
demographic characteristics|adj + noun|features such as age, sex and income|Demographic characteristics of the sample appear in Table 1.|The groups matched on all demographic characteristics.
individual characteristics|adj + noun|features belonging to one person|Individual characteristics explain little of the variance.|The model controls for individual characteristics.
main characteristics|adj + noun|the principal features|The main characteristics of the method are speed and cost.|Table 2 lists the main characteristics of each site.
physical characteristics|adj + noun|features of appearance or structure|Physical characteristics of the soil were recorded.|The samples differ in their physical characteristics.
similar characteristics|adj + noun|comparable features|Firms with similar characteristics were paired.|The two cohorts have similar characteristics.
(be) highly charged|adv + adj|full of strong emotion|The debate is politically highly charged.|Interviews on this topic are highly charged.
chemical reaction|adj + noun|a process in which substances change|The chemical reaction completes within minutes.|Heat accelerates the chemical reaction.
individual choice|adj + noun|a decision made by one person|The policy frames obesity as individual choice.|Individual choice is constrained by what is available.
personal choice|adj + noun|a decision belonging to the person|Whether to disclose remained a personal choice.|The language of personal choice obscures structural limits.
(be) randomly chosen|adv + adj|selected by chance|Twelve schools were randomly chosen from the list.|A randomly chosen subset was checked by hand.
exceptional circumstances|adj + noun|unusual conditions|Extensions are granted only in exceptional circumstances.|The closure was justified by exceptional circumstances.
historical circumstances|adj + noun|the conditions of a past period|The law must be read in its historical circumstances.|Historical circumstances explain the unusual wording.
local circumstances|adj + noun|conditions in a particular place|Implementation varied with local circumstances.|Local circumstances were not taken into account.
personal circumstances|adj + noun|an individual's own situation|Support is tailored to personal circumstances.|Personal circumstances were the main reason for withdrawal.
political circumstances|adj + noun|the political conditions of the time|Political circumstances made the reform impossible.|The treaty reflects the political circumstances of 1919.
social circumstances|adj + noun|a person's social conditions|Outcomes depend heavily on social circumstances.|Social circumstances were recorded at referral.
special circumstances|adj + noun|unusual conditions justifying an exception|Fees may be waived in special circumstances.|No special circumstances were claimed.
(be) frequently cited|adv + adj|often referred to by others|The paper is frequently cited but rarely read.|Cost is the most frequently cited barrier.
civil society|adj + noun|voluntary organisations outside state and market|Civil society organisations filled the gap left by cuts.|The reform weakened civil society.
class consciousness|noun + noun|awareness of belonging to a social class|The chapter traces the growth of class consciousness.|Class consciousness declined as employment fragmented.
lower class|adj + noun|the least advantaged social group|The term lower class is now rarely used in official statistics.|Access to the professions remains closed to the lower class.
ruling class|adj + noun|the group holding power in a society|The ruling class absorbed its critics.|Education reproduced the ruling class.
classic example|adj + noun|a typical and well-known instance|This is a classic example of regulatory capture.|The case is a classic example of the problem.
classic study|adj + noun|a famous and influential piece of research|The classic study of this question dates from 1961.|Classic studies used samples we would now reject.
classic text|adj + noun|a famous and influential book|The book quickly became a classic text.|Students still read the classic texts of the period.
classic work|adj + noun|a famous and influential piece of scholarship|Her classic work on kinship is still cited.|The classic works of the school are now online.
classical theory|adj + noun|the long-established theoretical account|Classical theory predicts convergence over time.|The data do not fit classical theory.
clear evidence|adj + noun|unambiguous proof|There is clear evidence of a decline after 2010.|No clear evidence of harm was found.
clear focus|adj + noun|a sharply defined object of attention|The project lacks a clear focus.|A clear focus on outcomes improved the design.
clear indication|adj + noun|an unambiguous sign|There was no clear indication of how the money was spent.|The results give a clear indication of the direction.
clear relationship|adj + noun|an unambiguous connection|A clear relationship emerged between age and uptake.|No clear relationship was found in the smaller sample.
clear statement|adj + noun|an unambiguous declaration|The policy lacks a clear statement of purpose.|A clear statement of the hypothesis is needed.
clear structure|adj + noun|an easily followed organisation|The essay has a clear structure.|A clear structure helps the reader follow the argument.
entirely clear|adv + adj|completely obvious|It is not entirely clear how the sample was drawn.|The reason for the change is not entirely clear.
fairly clear|adv + adj|reasonably obvious|The overall pattern is fairly clear.|It is fairly clear that the effect is small.
(be) clearly defined|adv + adj|given precise limits or meaning|The categories are clearly defined in the manual.|The boundary is not clearly defined.
(be) clearly demonstrated|adv + adj|shown beyond doubt|The effect has been clearly demonstrated in two trials.|Nothing is clearly demonstrated by a single case.
(be) clearly established|adv + adj|firmly shown to be true|The link is now clearly established.|No causal pathway has been clearly established.
(be) clearly identified|adv + adj|picked out unambiguously|Each sample was clearly identified by a code.|Risks must be clearly identified before approval.
(be) clearly related (to)|adv + adj|unambiguously connected with something|The complaints are clearly related to staffing levels.|Dropout is clearly related to travel time.
clearly evident|adv + adj|plainly obvious|The decline is clearly evident in Figure 1.|Strain on the service was clearly evident by March.
clearly important|adv + adj|plainly significant|Timing is clearly important in this intervention.|Housing is clearly important but hard to measure.
clearly understand|verb + adv|to grasp something without confusion|Few respondents clearly understood the consent form.|Staff must clearly understand their obligations.
clearly visible|adv + adj|easy to see|The boundary is clearly visible in the aerial photograph.|The effect is clearly visible only at high doses.
remain unclear|verb + adj|to stay uncertain|It remains unclear whether the benefit lasts.|The mechanism remains unclear.
current climate|adj + noun|the present general conditions|In the current climate, funding is unlikely.|The current climate discourages long-term projects.
political climate|adj + noun|the prevailing political mood|The political climate shifted after the referendum.|Reform was impossible in that political climate.
climatic conditions|adj + noun|the weather patterns of a place|Climatic conditions limit the growing season.|Samples degrade quickly in these climatic conditions.
close contact|adj + noun|frequent or near interaction|Staff remained in close contact with families.|Infection spreads through close contact.
close proximity|adj + noun|nearness in space|Housing in close proximity to the plant was tested.|The two sites are in close proximity.
close scrutiny|adj + noun|careful detailed examination|The figures do not survive close scrutiny.|The scheme came under close scrutiny from auditors.
(be) closely connected (to, with)|adv + adj|strongly linked with something|Literacy is closely connected with family income.|The two reforms are closely connected.
(be) closely linked (to, with)|adv + adj|strongly associated with something|Air quality is closely linked to traffic volume.|The two concepts are closely linked but distinct.
(be) closely related (to)|adv + adj|strongly connected|The two species are closely related.|The question is closely related to the one above.
(be) closely tied|adv + adj|strongly bound to something|Funding is closely tied to student numbers.|Her reputation is closely tied to that single paper.
closely resemble|adv + verb|to be very similar to|The 2020 pattern closely resembles that of 2008.|The replica closely resembles the original.
(on/upon) closer inspection|adj + noun|when looked at more carefully|On closer inspection the two samples differ.|Closer inspection revealed a second signature.
(upon, on) closer examination|adj + noun|when studied more carefully|Upon closer examination the figures do not add up.|Closer examination showed the damage was older.
closer look|adj + noun|a more careful consideration|A closer look at the data reveals two clusters.|The chapter takes a closer look at the exceptions.
provide (a) clue|verb + noun|to give a hint about something|The spelling provides a clue to the scribe's origin.|Pollen records provide clues to past climate.
cognitive development|adj + noun|the growth of thinking abilities|Early nutrition affects cognitive development.|Piaget divided cognitive development into stages.
cognitive skills|adj + noun|mental abilities such as reasoning and memory|The programme aims to build cognitive skills.|Cognitive skills decline slowly with age.
collaborative learning|adj + noun|learning done jointly with others|Collaborative learning improved retention in the trial.|Collaborative learning requires careful group design.
professional colleague|adj + noun|someone in the same occupation|Findings were discussed with professional colleagues.|She consulted professional colleagues before publishing.
collect information|verb + noun|to gather facts|The census collects information on housing and work.|Information was collected at three time points.
collective identity|adj + noun|a sense of belonging shared by a group|Collective identity was forged during the strike.|Online groups build collective identity quickly.
collective memory|adj + noun|how a group remembers its past|Collective memory of the famine shaped later politics.|Monuments shape collective memory as much as record it.
combined effect|adj + noun|the result of two or more things together|The combined effect of the two measures was substantial.|Neither factor matters alone; the combined effect does.
come into conflict (with)|verb + noun|to begin to clash with something|The policy came into conflict with existing law.|The two aims come into conflict at this point.
come into contact (with)|verb + noun|to begin to meet or touch something|Staff who came into contact with the case were tested.|Few pupils come into contact with native speakers.
make (a) comment|verb + noun|to express an opinion|Reviewers made detailed comments on the draft.|No comment was made on the methodology.
written comment|adj + noun|an opinion given in writing|Written comments were invited for six weeks.|The form allows a free-text written comment.
commercial transaction|adj + noun|a business exchange|Each commercial transaction leaves a digital trace.|The law treats this as a commercial transaction.
commit (a) crime|verb + noun|to carry out an illegal act|Most of those who commit crimes are themselves victims.|The offence can be committed by omission.
commit (an) offence|verb + noun|to break a law|An offence is committed as soon as the data are shared.|Companies that fail to report commit an offence.
common culture|adj + noun|shared values and practices|A common culture developed within the team.|The idea of a single common culture is contested.
common error|adj + noun|a mistake many people make|Confusing correlation with cause is a common error.|Common errors are listed in the marking guide.
common feature|adj + noun|a characteristic shared by many|Overcrowding is a common feature of the housing stock.|A common feature of these studies is the small sample.
common goal|adj + noun|a shared aim|The partners worked towards a common goal.|A common goal held the coalition together.
common method|adj + noun|a widely used technique|Interviewing is the most common method in this field.|A common method is to impute the missing values.
common source|adj + noun|a shared origin|Both texts derive from a common source.|Traffic is the most common source of the pollutant.
common theme|adj + noun|a subject recurring across cases|Isolation was a common theme in the interviews.|Three common themes run through the chapters.
common usage|adj + noun|the way a word is ordinarily used|In common usage the word means something looser.|The technical sense differs from common usage.
fairly common|adv + adj|happening reasonably often|Minor errors of this kind are fairly common.|The practice is fairly common in smaller firms.
increasingly common|adv + adj|happening more and more often|Short contracts are increasingly common in the sector.|It is increasingly common to publish the raw data.
relatively common|adv + adj|common compared with something else|The condition is relatively common in older adults.|Such clauses are relatively common in these contracts.
(be) commonly encountered|adv + adj|often met with|This problem is commonly encountered in fieldwork.|Commonly encountered errors are described below.
(be) commonly found (in)|adv + adj|often present somewhere|The species is commonly found in upland streams.|The error is commonly found in student writing.
(be) commonly known (as)|adv + adj|usually called by a name|The condition is commonly known as shingles.|What is commonly known as the gig economy is hard to define.
(be) commonly referred (to) (as)|adv + adj|usually called something|These are commonly referred to as soft skills.|The period is commonly referred to as the long boom.
(be) commonly used|adv + adj|often employed|The scale is commonly used in clinical research.|Two commonly used measures give different answers.
communicate effectively|verb + adv|to convey meaning successfully|Clinicians must communicate effectively under pressure.|The report fails to communicate effectively with lay readers.
direct communication|adj + noun|contact without an intermediary|Direct communication between the teams was rare.|The protocol requires direct communication with the patient.
effective communication|adj + noun|successful conveying of meaning|Effective communication reduced the number of complaints.|Effective communication is a learned skill.
electronic communication|adj + noun|contact by digital means|Electronic communication replaced most internal memos.|Records of electronic communication were retained.
personal communication|adj + noun|information received directly from someone|The figure comes from a personal communication.|Unpublished data are cited as personal communication.
verbal communication|adj + noun|conveying meaning in words, especially spoken|Verbal communication was supplemented with diagrams.|Verbal communication breaks down under noise.
written communication|adj + noun|conveying meaning in writing|Written communication with families was translated.|The role demands strong written communication.
ethnic community|adj + noun|a group sharing a cultural or national origin|The borough is home to several ethnic communities.|Outreach was organised through ethnic community groups.
international community|adj + noun|the countries of the world taken together|The international community condemned the action.|The international community has no enforcement power here.
local community|adj + noun|the people living in a particular area|The local community was consulted before the build.|Local community groups ran the service.
rural community|adj + noun|people living in a country district|Rural communities lost their bus services first.|The study followed four rural communities.
scientific community|adj + noun|the body of working scientists|The claim was rejected by the scientific community.|The scientific community responded within weeks.
virtual community|adj + noun|a group that exists mainly online|Virtual communities formed around the diagnosis.|Virtual communities are hard to sample.
wider community|adj + noun|the broader population beyond a group|Benefits extended to the wider community.|The school opened its facilities to the wider community.
comparative research|adj + noun|research comparing cases or countries|Comparative research requires equivalent measures.|Comparative research on this question is scarce.
comparative study|adj + noun|a study setting cases side by side|The thesis is a comparative study of three school systems.|A comparative study would settle the question.
compelling evidence|adj + noun|proof that is hard to resist|There is compelling evidence of a decline.|The inquiry found no compelling evidence of fraud.
compelling reason|adj + noun|a very strong justification|There is no compelling reason to change the definition.|A compelling reason must be given for a late submission.
increased competition|adj + noun|more rivalry than before|Increased competition drove prices down.|Increased competition for places raised entry grades.
competitive market|adj + noun|a market with many rivals|In a competitive market, margins are thin.|The sector is less competitive than the model assumes.
competitive pressure|adj + noun|strain created by rivals|Competitive pressure forced the merger.|Competitive pressure squeezed training budgets.
highly competitive|adv + adj|involving intense rivalry|Entry to the programme is highly competitive.|The market is highly competitive and fragmented.
demonstrate competence|verb + noun|to show that one has the required ability|Trainees must demonstrate competence before practising alone.|The portfolio is used to demonstrate competence.
complete (a) task|verb + noun|to finish a piece of work|Participants completed the task in under four minutes.|Few completed every task in the set.
complex interaction|adj + noun|a complicated mutual influence|The outcome reflects a complex interaction of factors.|Complex interactions make prediction unreliable.
complex issue|adj + noun|a complicated matter|Immigration is a complex issue with no single cause.|The report treats a complex issue too simply.
complex pattern|adj + noun|a complicated regularity|The data show a complex pattern of change.|A complex pattern emerges once region is added.
complex problem|adj + noun|a complicated difficulty|Homelessness is a complex problem with many causes.|The complex problem was reduced to a single target.
complex question|adj + noun|a complicated matter to answer|This is a complex question that the data cannot settle.|The survey reduced a complex question to yes or no.
complex relationship|adj + noun|a complicated connection|There is a complex relationship between poverty and health.|The complex relationship is not captured by a single statistic.
complex set|adj + noun|a complicated group of things|A complex set of rules governs eligibility.|The outcome depends on a complex set of conditions.
complex situation|adj + noun|a complicated state of affairs|Staff faced a complex situation with little guidance.|The complex situation defies a simple summary.
complex structure|adj + noun|a complicated organisation|The protein has a complex structure.|The sector has a complex ownership structure.
complex system|adj + noun|a system with many interacting parts|The climate is a complex system with feedback loops.|Complex systems fail in ways their parts do not.
extremely complex|adv + adj|very complicated|The funding formula is extremely complex.|The causal picture is extremely complex.
highly complex|adv + adj|very complicated|The negotiation was highly complex.|Highly complex models are hard to validate.
increasingly complex|adv + adj|growing more complicated|The regulations have become increasingly complex.|Supply chains are increasingly complex and opaque.
increasing complexity|adj + noun|growing complication|The increasing complexity of the system deters users.|Increasing complexity raises the cost of compliance.
essential component|adj + noun|a necessary part|Feedback is an essential component of the course.|Trust is an essential component of the relationship.
fundamental component|adj + noun|a basic part|Memory is a fundamental component of learning.|The fundamental components are listed in Table 1.
individual component|adj + noun|a single part considered separately|Each individual component was tested in isolation.|The individual components work; the system does not.
key component|adj + noun|an especially important part|Supervision is a key component of the programme.|Cost is a key component of the decision.
main component|adj + noun|the principal part|The main component of the budget is salaries.|Nitrogen is the main component of the atmosphere.
major component|adj + noun|a large and important part|Housing is a major component of household spending.|Transport is a major component of emissions.
comprehensive review|adj + noun|a thorough survey of evidence|A comprehensive review of the literature is overdue.|The comprehensive review covered 240 studies.
comprehensive system|adj + noun|a system covering everything needed|The country has a comprehensive system of social insurance.|No comprehensive system of recording exists.
high concentration|adj + noun|a large amount in a small space|High concentrations of the metal were found downstream.|There is a high concentration of poverty in two wards.
defining concept|adj + noun|an idea central to a field|Agency is a defining concept in the discipline.|Two defining concepts organise the chapter.
key concept|adj + noun|an especially important idea|The key concepts are defined in the glossary.|Reliability is a key concept in measurement.
theoretical concept|adj + noun|an idea belonging to theory|The theoretical concept is hard to operationalise.|Theoretical concepts must be linked to observable measures.
use (the) concept|verb + noun|to employ an idea in analysis|The chapter uses the concept of social capital.|We use the concept loosely, as the authors do.
environmental concern|adj + noun|worry about the natural world|Environmental concerns delayed the development.|Environmental concern rose sharply among younger voters.
major concern|adj + noun|an important worry|Staff shortages remain a major concern.|Data security was a major concern for respondents.
primary concern|adj + noun|the chief worry|The primary concern is patient safety.|Cost was the primary concern of the committee.
(be) mainly concerned (with)|adv + adj|dealing chiefly with something|This chapter is mainly concerned with written data.|The review is mainly concerned with trials since 2000.
(be) particularly concerned (with)|adv + adj|dealing especially with something|The paper is particularly concerned with rural practice.|We are particularly concerned with how the rule is applied.
(be) primarily concerned (with)|adv + adj|dealing first of all with something|The agency is primarily concerned with enforcement.|The study is primarily concerned with measurement.
concerted effort|adj + noun|a determined, coordinated attempt|A concerted effort was made to trace the missing cases.|Only a concerted effort across departments will work.
concluding remarks|adj + noun|closing comments|The concluding remarks suggest three lines of work.|Concluding remarks were added after the discussion.
concluding section|adj + noun|the final part of a text|The concluding section draws out the implications.|Recommendations appear in the concluding section.
general conclusion|adj + noun|a broad judgement from the evidence|The general conclusion is that the effect is small.|Two general conclusions can be drawn.
lead to (the) conclusion|verb + noun|to result in a judgement|These findings lead to the conclusion that the model is wrong.|The evidence leads to a more cautious conclusion.
logical conclusion|adj + noun|the judgement that reasoning requires|Taken to its logical conclusion, the argument abolishes the category.|The logical conclusion is unpalatable but unavoidable.
sufficient condition|adj + noun|something that by itself guarantees a result|Funding is a necessary but not sufficient condition for success.|Neither factor is a sufficient condition.
conditional probability|adj + noun|the chance of something given that something else holds|The test reports a conditional probability, not a certainty.|Conditional probability is widely misunderstood.
create conditions|verb + noun|to bring about circumstances|The reform created conditions for rapid growth.|Cuts created conditions in which errors multiplied.
economic conditions|adj + noun|the state of the economy|Economic conditions worsened during the study period.|Economic conditions differ sharply between the regions.
experimental conditions|adj + noun|the controlled settings of a study|Participants were tested under identical experimental conditions.|Experimental conditions were maintained for 48 hours.
living conditions|adj + noun|the circumstances in which people live|Living conditions in the camps deteriorated.|Poor living conditions explain much of the health gap.
natural conditions|adj + noun|circumstances as found in nature|The species behaves differently under natural conditions.|Results from the laboratory may not hold in natural conditions.
normal conditions|adj + noun|the usual circumstances|Under normal conditions the process takes a week.|These were not normal conditions for testing.
conduct (a) survey|verb + noun|to carry out a systematic enquiry|The council conducted a survey of residents.|A survey was conducted in both languages.
conduct (an) interview|verb + noun|to carry out a formal conversation for research|Interviews were conducted by telephone.|She conducted forty interviews over two years.
conduct research|verb + noun|to carry out systematic study|The team conducted research in four countries.|Research was conducted under ethical approval.
hold (a) conference|verb + noun|to organise a formal meeting|The society holds a conference every two years.|A conference was held to review the findings.
international conference|adj + noun|a meeting of people from many countries|The results were first given at an international conference.|The international conference moved online.
national conference|adj + noun|a meeting of people from one country|The union debated the motion at its national conference.|Findings were presented at the national conference.
(be) largely confined (to)|adv + adj|mostly limited to something|The outbreak was largely confined to two wards.|Use of the term is largely confined to the literature.
conflict resolution|noun + noun|the process of settling disputes|The course covers negotiation and conflict resolution.|Conflict resolution was built into the governance rules.
internal conflict|adj + noun|a dispute within a group or person|Internal conflict weakened the organisation.|The decision reflects internal conflict rather than policy.
political conflict|adj + noun|a dispute over political power or aims|Political conflict delayed the reform for a decade.|The region has a long history of political conflict.
potential conflict|adj + noun|a clash that might arise|The guidance flags a potential conflict of interest.|There is a potential conflict between the two aims.
resolve (a) conflict|verb + noun|to settle a dispute|The mediator resolved the conflict in two sessions.|No mechanism exists to resolve conflicts between the codes.
social conflict|adj + noun|a dispute between groups in society|Social conflict intensified as wages stagnated.|The theory explains change through social conflict.
conflicting interests|adj + noun|aims that cannot all be satisfied|The board must balance conflicting interests.|Conflicting interests made agreement impossible.
(be) directly connected (to, with)|adv + adj|linked without anything in between|The fall is directly connected to the loss of funding.|The two systems are directly connected.
(be) intimately connected (to, with)|adv + adj|very closely linked|Language is intimately connected with identity.|The two questions are intimately connected.
negative connotation|adj + noun|an unfavourable association a word carries|The term carries a negative connotation in this context.|Negative connotations attached to the label deter users.
positive connotation|adj + noun|a favourable association a word carries|The word has positive connotations in everyday use.|Marketers chose the term for its positive connotation.
political consciousness|adj + noun|awareness of political issues and interests|Political consciousness rose during the strike.|The novel traces the growth of political consciousness.
political consensus|adj + noun|broad agreement across parties|A political consensus formed around the target.|The political consensus on the issue has broken down.
give consent|verb + noun|to agree formally to something|Participants gave consent in writing.|Parents gave consent for the data to be used.
informed consent|adj + noun|agreement given with full knowledge of the facts|Informed consent is a fundamental principle of research ethics.|Informed consent was obtained before each interview.
direct consequences|adj + noun|results that follow immediately|The direct consequences were felt within weeks.|Job losses were a direct consequence of the merger.
economic consequences|adj + noun|financial results of something|The economic consequences fell on the poorest households.|The paper models the economic consequences of closure.
environmental consequences|adj + noun|effects on the natural world|The environmental consequences were not assessed.|Drainage had severe environmental consequences downstream.
have consequences|verb + noun|to produce results|Small coding errors have consequences for every later step.|The decision will have consequences beyond this sector.
negative consequences|adj + noun|harmful results|The reform had negative consequences for small providers.|Negative consequences were concentrated in rural areas.
political consequences|adj + noun|effects on politics|The ruling had immediate political consequences.|The political consequences outlasted the policy.
possible consequences|adj + noun|results that might follow|The report sets out the possible consequences of delay.|Possible consequences were explained to participants.
serious consequences|adj + noun|grave results|Missing the deadline has serious consequences for funding.|The error had serious consequences for three patients.
social consequences|adj + noun|effects on people and society|The social consequences of unemployment outlast the jobless spell.|Social consequences were omitted from the appraisal.
unintended consequences|adj + noun|results that were not meant to happen|The reform produced unintended consequences for carers.|Unintended consequences are common in complex systems.
consider (a) possibility|verb + noun|to think about something that might be so|We must consider the possibility of reporting bias.|The report considers the possibility of a second wave.
consider (an) issue|verb + noun|to examine a matter|The committee considered the issue of access.|This issue is considered in Chapter 5.
consider (the) impact (of)|verb + noun|to think about an effect|The appraisal considers the impact on local employment.|Few studies consider the impact on carers.
consider (the) implications|verb + noun|to think through what follows|The chapter considers the implications for policy.|We must consider the implications for existing practice.
consider (the) role (of)|verb + noun|to examine the part something plays|The study considers the role of social media.|Few accounts consider the role of chance.
consider relevant|verb + adj|to judge something as applicable|Assessors include whatever they consider relevant.|Only evidence considered relevant was admitted.
ethical consideration|adj + noun|a question of right conduct to weigh|Ethical considerations ruled out a control group.|Ethical considerations are set out in Section 3.
further consideration|adj + noun|additional thought|The proposal was referred for further consideration.|These points deserve further consideration.
give consideration|verb + noun|to think carefully about something|The panel gave careful consideration to the appeal.|Consideration was given to running the trial remotely.
political consideration|adj + noun|a political factor influencing a decision|Political considerations shaped the timing.|The choice of site owed more to political considerations than to need.
practical consideration|adj + noun|a down-to-earth factor|Practical considerations ruled out daily testing.|Cost and travel were the main practical considerations.
require consideration|verb + noun|to need careful thought|Three issues require consideration before approval.|The ethics of reuse require consideration.
take into consideration|verb + noun|to allow for something when deciding|The model takes seasonal variation into consideration.|These figures do not take inflation into consideration.
(be) generally considered|adv + adj|usually regarded in a certain way|The method is generally considered reliable.|This is generally considered the first modern survey.
(a) considerable degree (of)|adj + noun|a large amount of something|There is a considerable degree of overlap between the groups.|The role allows a considerable degree of discretion.
(be of) considerable importance|adj + noun|mattering a great deal|The distinction is of considerable importance in law.|The archive is of considerable importance to local historians.
(in) considerable detail|adj + noun|with much specific information|The method is described in considerable detail.|She set out the objections in considerable detail.
(to a) considerable extent|adj + noun|to a large degree|The result depends to a considerable extent on the definition.|Outcomes are to a considerable extent determined in advance.
considerable debate|adj + noun|much discussion and disagreement|There has been considerable debate about the measure.|The definition remains a matter of considerable debate.
considerable effort|adj + noun|a lot of work|Considerable effort went into tracing the missing records.|Despite considerable effort, response rates stayed low.
considerable evidence|adj + noun|a good deal of proof|There is considerable evidence that early intervention works.|Considerable evidence points the other way.
considerable influence|adj + noun|a large effect on something|The report had considerable influence on later policy.|Her work exerted considerable influence on the field.
considerable interest|adj + noun|much attention or curiosity|The findings attracted considerable interest.|There is considerable interest in replicating the study.
considerable research|adj + noun|a good deal of study|Considerable research has been done on urban samples.|Considerable research remains to be done.
considerable support|adj + noun|a good deal of backing|The proposal attracted considerable support from staff.|There is considerable support for the hypothesis.
considerable variation|adj + noun|a lot of difference between cases|There is considerable variation between regions.|Considerable variation in practice was found.
differ considerably|verb + adv|to be very different|The two estimates differ considerably.|Practice differs considerably between the two hospitals.
consistent results|adj + noun|findings that agree with each other|Three trials produced consistent results.|Consistent results across settings strengthen the claim.
constant rate|adj + noun|an unchanging speed or frequency|Cells divided at a constant rate.|Prices rose at a near constant rate for a decade.
relatively constant|adv + adj|staying much the same|Spending has remained relatively constant since 2015.|The ratio is relatively constant across countries.
remain constant|verb + adj|to stay the same|The total remained constant while the mix changed.|Other factors were held constant.
constituent elements|adj + noun|the parts that make something up|The chapter separates out the constituent elements.|The constituent elements are listed in Table 1.
constituent parts|adj + noun|the pieces something is made of|The system is best understood through its constituent parts.|Breaking the index into its constituent parts is revealing.
impose constraints|verb + noun|to place limits on something|Funding rules impose constraints on the design.|The timetable imposed severe constraints.
social construct|adj + noun|something that exists because society treats it as real|Race is best understood as a social construct.|The category is a social construct, not a natural kind.
(be) socially constructed|adv + adj|created by social practices rather than nature|Childhood is socially constructed and varies historically.|The boundaries are socially constructed.
direct contact|adj + noun|interaction without an intermediary|Direct contact with families improved the data.|Few staff had direct contact with the public.
first contact|adj + noun|the initial meeting or interaction|First contact with the service is usually by phone.|The record notes the date of first contact.
maintain contact|verb + noun|to keep in touch|Researchers maintained contact with participants for two years.|Maintaining contact with leavers proved difficult.
make contact|verb + noun|to get in touch|We made contact with the original authors.|No one made contact after the first letter.
personal contact|adj + noun|direct human interaction, or someone you know|Personal contact mattered more than the leaflet.|The post was filled through personal contacts.
physical contact|adj + noun|touching|Physical contact was avoided during the outbreak.|The sport involves frequent physical contact.
sexual contact|adj + noun|sexual interaction|The survey asked about age at first sexual contact.|Transmission requires sexual contact.
social contact|adj + noun|interaction with other people|Social contact fell sharply during the closures.|Loneliness is more than a lack of social contact.
contain (an) element|verb + noun|to include a part|Every account contains an element of interpretation.|The scheme contains an element of compulsion.
contain information|verb + noun|to hold facts|The file contains information on each referral.|The record contains no information about outcome.
contemporary debate|adj + noun|present-day discussion|The book contributes to a contemporary debate.|Contemporary debate has moved past this question.
contemporary issue|adj + noun|a matter of present concern|The course covers contemporary issues in ethics.|Housing is the defining contemporary issue here.
contemporary life|adj + noun|present-day living|Surveillance is a feature of contemporary life.|The essay describes contemporary life in the suburbs.
contemporary world|adj + noun|the present-day world|Migration shapes the contemporary world.|These institutions fit badly with the contemporary world.
economic context|adj + noun|the surrounding economic conditions|The reform must be read in its economic context.|The economic context changed sharply in 2008.
global context|adj + noun|the worldwide setting|Placed in a global context, the figure is unremarkable.|The chapter sets the data in a global context.
historical context|adj + noun|the setting of past events|The law makes sense only in its historical context.|Historical context is given in the opening chapter.
institutional context|adj + noun|the organisational setting|Practice varies with institutional context.|The institutional context shapes what counts as evidence.
international context|adj + noun|the setting of other countries|In an international context the rate is low.|The chapter places the reform in international context.
original context|adj + noun|the setting something first appeared in|The quotation means something else in its original context.|Removed from its original context the figure misleads.
political context|adj + noun|the surrounding political conditions|The political context explains the timing.|Decisions must be read in their political context.
present context|adj + noun|the current setting|In the present context the distinction matters little.|The term is used narrowly in the present context.
provide context|verb + noun|to supply background|The interviews provide context for the survey findings.|Chapter 2 provides the context.
specific context|adj + noun|a particular setting|The rule applies only in this specific context.|Findings may not transfer to a different specific context.
wider context|adj + noun|the broader setting|The result must be read in a wider context.|The chapter supplies the wider context.
contextual factors|adj + noun|features of the setting that matter|Contextual factors explain much of the variation.|The model ignores contextual factors.
continued existence|adj + noun|going on being there|The continued existence of the archive is in doubt.|Funding secured the continued existence of the service.
continued growth|adj + noun|growth that keeps going|Continued growth depends on export demand.|The forecast assumes continued growth at three per cent.
continued use|adj + noun|going on using something|Continued use of the drug was not recommended.|Continued use of the old form caused confusion.
continuous process|adj + noun|something that happens without stopping|Learning is a continuous process, not a series of events.|Monitoring is a continuous process.
marked contrast|adj + noun|a clearly noticeable difference|In marked contrast to 2010, uptake was high.|There is a marked contrast between the two regions.
sharp contrast|adj + noun|a very clear difference|The findings stand in sharp contrast to earlier work.|There is a sharp contrast between policy and practice.
stark contrast|adj + noun|a severe and obvious difference|The figures stand in stark contrast to official claims.|Rural provision is in stark contrast to urban.
striking contrast|adj + noun|a difference that stands out|A striking contrast emerges between the two cohorts.|The styles are in striking contrast.
contribute significantly|verb + adv|to add a great deal|Transport contributes significantly to emissions.|Her thesis contributed significantly to the debate.
contribute to (the) development (of)|verb + noun|to help something grow|Early reading contributes to the development of vocabulary.|The grant contributed to the development of the method.
significant contribution|adj + noun|an important addition|The paper makes a significant contribution to the field.|Volunteers made a significant contribution to the project.
government control|noun + noun|direction by the state|The industry passed into government control in 1947.|Government control of the curriculum tightened.
internal control|adj + noun|checks within an organisation|Internal controls failed to detect the loss.|The audit examined internal control procedures.
personal control|adj + noun|an individual's power over their own situation|Perceived personal control predicts recovery.|Shift work reduces personal control over time.
(be) tightly controlled|adv + adj|strictly regulated|Access to the samples was tightly controlled.|Conditions were tightly controlled throughout the trial.
controversial issue|adj + noun|a matter people strongly disagree about|Assisted dying remains a controversial issue.|The committee avoided the controversial issues.
highly controversial|adv + adj|causing a great deal of disagreement|The method remains highly controversial.|The appointment was highly controversial at the time.
conventional view|adj + noun|the usual accepted opinion|The conventional view is challenged by these data.|On the conventional view, growth follows investment.
conventional wisdom|adj + noun|what most people take to be true|Conventional wisdom holds that small classes help.|The study overturns conventional wisdom.
convey (a) message|verb + noun|to communicate something|The campaign conveyed a simple message.|The figures convey a message the text avoids.
convey information|verb + noun|to communicate facts|Diagrams convey information faster than tables.|The form conveys little useful information.
convey meaning|verb + noun|to communicate sense|Intonation conveys meaning that spelling cannot.|Gesture conveys meaning alongside speech.
convincing evidence|adj + noun|proof that persuades|There is no convincing evidence of harm.|The inquiry found convincing evidence of negligence.
coping strategy|noun + noun|a way of dealing with stress or difficulty|Avoidance is a common coping strategy.|Coping strategies were recorded in the interviews.
core element|adj + noun|an essential central part|Supervision is a core element of the training.|The core elements were kept when the scheme was cut.
core issue|adj + noun|the central matter|The core issue is who holds the data.|Funding remains the core issue.
core skills|adj + noun|the basic abilities needed|The course develops core skills in analysis.|Core skills are assessed at the end of year one.
core value|adj + noun|a fundamental principle of a group|Transparency is a core value of the organisation.|The core values were rewritten after the scandal.
correct (an) error|verb + noun|to put a mistake right|Two coding errors were corrected before analysis.|The second edition corrects several errors.
correct interpretation|adj + noun|the right reading of something|The correct interpretation depends on the context.|There is no single correct interpretation of the clause.
politically correct|adv + adj|avoiding language that might offend groups|The phrase was replaced with a more politically correct one.|Debate about what is politically correct obscured the substance.
(be) highly correlated (with)|adv + adj|very closely linked in a measurable way|The two measures are highly correlated.|Income is highly correlated with educational attainment.
(be) negatively correlated (with)|adv + adj|one rising as the other falls|Screen time is negatively correlated with sleep duration.|Distance is negatively correlated with attendance.
(be) positively correlated (with)|adv + adj|rising and falling together|Class size was positively correlated with teacher workload.|Height is positively correlated with lung capacity.
(be) significantly correlated (with)|adv + adj|linked to a statistically meaningful degree|Age was significantly correlated with recovery time.|The two scales are significantly correlated.
(be) strongly correlated (with)|adv + adj|closely linked|Deprivation is strongly correlated with early death.|The indices were strongly correlated across countries.
high correlation|adj + noun|a close statistical association|There is a high correlation between the two tests.|The high correlation suggests the measures overlap.
positive correlation|adj + noun|an association where both values rise together|A positive correlation was found between income and health.|The positive correlation weakens above median income.
significant correlation|adj + noun|an association unlikely to be due to chance|No significant correlation was found in the smaller sample.|A significant correlation emerged at the second time point.
strong correlation|adj + noun|a close association|There is a strong correlation between the two variables.|A strong correlation is not evidence of cause.
rising cost|adj + noun|an expense that keeps increasing|Rising costs forced two clinics to close.|The rising cost of housing dominates the budget.
industrial country|adj + noun|a country with developed manufacturing|Emissions per head are highest in industrial countries.|The comparison covers twelve industrial countries.
industrialized country|adj + noun|a country that has undergone industrialisation|Birth rates fell across the industrialized countries.|The pattern holds only in industrialized countries.
cover (a) range (of)|verb + noun|to deal with a variety of things|The review covers a range of study designs.|The course covers a wide range of topics.
cover (a) topic|verb + noun|to deal with a subject|Chapter 4 covers the topic in detail.|The syllabus covers twelve topics in a term.
media coverage|noun + noun|the attention given by newspapers and broadcasters|Media coverage of the findings was extensive.|Media coverage shaped public understanding of the risk.
provide coverage|verb + noun|to supply reporting or protection across an area|The network provides coverage to 98 per cent of households.|Local papers no longer provide coverage of council meetings.
create (an) environment|verb + noun|to bring about surrounding conditions|Good supervision creates an environment where errors are reported.|The reform created an environment of constant assessment.
create (an) impression|verb + noun|to produce an effect on how something seems|The layout creates an impression of precision the data do not support.|The opening chapter creates a misleading impression.
create (an) opportunity|verb + noun|to bring about a chance|The closure created an opportunity to redesign the service.|Digitisation created an opportunity for new research.
create opportunities|verb + noun|to bring about chances|The scheme created opportunities for local suppliers.|Remote working created opportunities for carers.
create problems|verb + noun|to cause difficulties|Inconsistent coding creates problems downstream.|The timetable created problems for part-time staff.
newly created|adv + adj|recently brought into being|The newly created post was never filled.|Newly created agencies absorbed the functions.
creative process|adj + noun|the way creative work is made|The chapter describes the creative process behind the score.|The creative process resists measurement.
creative thinking|adj + noun|thinking that produces new ideas|The task is designed to measure creative thinking.|Creative thinking is hard to teach directly.
creative work|adj + noun|work producing original material|Creative work is poorly captured by these metrics.|Funding for creative work was cut first.
criminal offence|adj + noun|an act punishable by law|Failure to report is a criminal offence.|The conduct did not amount to a criminal offence.
economic crisis|adj + noun|a severe downturn in the economy|The economic crisis of 2008 reshaped the sector.|Services were cut during the economic crisis.
meet criteria|verb + noun|to satisfy required standards|Only twelve studies met the inclusion criteria.|The building does not meet current criteria.
objective criteria|adj + noun|standards independent of personal judgement|Selection was based on objective criteria.|Objective criteria are harder to define than they look.
use criteria|verb + noun|to apply standards in judging|The panel used published criteria throughout.|Different criteria were used in the two rounds.
critical essay|adj + noun|a piece of writing that evaluates|Students submit a critical essay of 3,000 words.|The critical essay should go beyond summary.
critical examination|adj + noun|close evaluative study|The chapter offers a critical examination of the sources.|A critical examination reveals two inconsistencies.
critical factor|adj + noun|a decisive influence|Timing was the critical factor in the outcome.|Staffing is the critical factor in recovery rates.
critical importance|adj + noun|very great significance|Record-keeping is of critical importance here.|The first hour is of critical importance.
critical inquiry|adj + noun|investigation that questions assumptions|The course trains students in critical inquiry.|Critical inquiry requires access to the raw sources.
critical introduction|adj + noun|an opening account that evaluates|The edition opens with a critical introduction.|The critical introduction situates the text historically.
critical issue|adj + noun|a decisively important matter|Funding is the critical issue for small providers.|Three critical issues remain unresolved.
critical perspective|adj + noun|a viewpoint that questions accepted ideas|The book takes a critical perspective on development aid.|A critical perspective is missing from the review.
critical point|adj + noun|a decisive moment or argument|The critical point is that consent was never sought.|At this critical point the system becomes unstable.
critical reflection|adj + noun|thoughtful self-evaluation|Critical reflection is required in the portfolio.|The module develops critical reflection on practice.
critical review|adj + noun|an evaluative survey|The article is a critical review of the evidence.|A critical review of the scheme was commissioned.
critical role|adj + noun|a decisively important part|Nurses play a critical role in early detection.|Timing plays a critical role in the result.
critical scrutiny|adj + noun|careful evaluative examination|The figures have not been subject to critical scrutiny.|The claim collapses under critical scrutiny.
critical theory|adj + noun|a tradition of theory that critiques society|The thesis draws on critical theory.|Critical theory shaped the questions asked.
critical thinking|adj + noun|reasoned, evaluative thought|Critical thinking is listed as a graduate attribute.|Critical thinking cannot be assessed by multiple choice.
critical writing|adj + noun|writing that evaluates rather than describes|The guide distinguishes descriptive from critical writing.|Critical writing weighs the evidence on both sides.
highly critical|adv + adj|strongly disapproving|The report was highly critical of the agency.|Reviewers were highly critical of the sampling.
critically evaluate|adv + verb|to judge something carefully, weighing both sides|Students must critically evaluate the two accounts.|The essay critically evaluates the standard model.
radical critique|adj + noun|a fundamental criticism|The book offers a radical critique of the discipline.|A radical critique of the measure is overdue.
crucial difference|adj + noun|an extremely important distinction|There is a crucial difference between the two definitions.|The crucial difference lies in who pays.
crucial factor|adj + noun|an extremely important influence|Cost was the crucial factor in their decision.|Motivation is a crucial factor in language learning.
crucial importance|adj + noun|very great significance|The first interview is of crucial importance.|Comparability is of crucial importance here.
crucial part|adj + noun|an extremely important element|Supervision is a crucial part of the training.|The pilot was a crucial part of the design.
crucial point|adj + noun|an extremely important argument or moment|The crucial point is that the samples differ.|At this crucial point the record breaks off.
crucial question|adj + noun|an extremely important matter|The crucial question is who decides.|A crucial question remains unanswered.
cultural differences|adj + noun|ways in which cultures vary|Cultural differences complicate the comparison.|Cultural differences in reporting were substantial.
cultural dimension|adj + noun|a cultural aspect of something|The cultural dimension of the illness is neglected.|The framework adds a cultural dimension.
cultural diversity|adj + noun|variety of cultures within a group|The city is marked by cultural diversity.|Cultural diversity was treated as an asset.
cultural factors|adj + noun|cultural influences on something|Cultural factors explain part of the variation.|The model omits cultural factors entirely.
cultural heritage|adj + noun|the inherited culture of a group|The site is part of the national cultural heritage.|Cultural heritage was damaged during the conflict.
cultural history|adj + noun|the history of culture and ideas|The book is a cultural history of the postwar period.|Cultural history looks beyond politics and economics.
cultural identity|adj + noun|a sense of belonging to a culture|Language is central to cultural identity.|Migration complicates cultural identity.
cultural influence|adj + noun|the effect of one culture on something|Cultural influence travelled along trade routes.|The region shows strong cultural influence from the south.
cultural institution|adj + noun|an organisation such as a museum or theatre|Cultural institutions closed for eighteen months.|Funding for cultural institutions fell sharply.
cultural issue|adj + noun|a matter relating to culture|Language teaching raises cultural issues.|The dispute is a cultural issue as much as a legal one.
cultural life|adj + noun|the artistic and cultural activity of a place|Cultural life recovered slowly after the closures.|The city's cultural life attracts migrants.
cultural norm|adj + noun|an expected standard of behaviour in a culture|Cultural norms shape what counts as polite.|The practice breaches a strong cultural norm.
cultural perspective|adj + noun|a viewpoint grounded in culture|From a cultural perspective the reform looks different.|The chapter adds a cultural perspective.
cultural phenomenon|adj + noun|something notable occurring in a culture|The programme became a cultural phenomenon.|The study treats fandom as a cultural phenomenon.
cultural practice|adj + noun|a customary way of doing something in a culture|The ritual is a long-established cultural practice.|Cultural practices around food vary widely.
cultural significance|adj + noun|importance within a culture|The building has considerable cultural significance.|The cultural significance of the text outlasted its politics.
cultural theory|adj + noun|theory about culture and meaning|The thesis is grounded in cultural theory.|Cultural theory supplies the vocabulary here.
cultural tradition|adj + noun|a long-established cultural practice|The festival continues a cultural tradition.|Two cultural traditions meet in the region.
cultural values|adj + noun|the beliefs a culture holds important|Cultural values shape attitudes to debt.|Cultural values were measured with a standard scale.
culturally specific|adv + adj|belonging to one culture only|The scale turned out to be culturally specific.|What counts as polite is culturally specific.
dominant culture|adj + noun|the culture of the most powerful group|Minority practices were absorbed into the dominant culture.|The dominant culture defines what counts as normal.
global culture|adj + noun|culture shared worldwide|Talk of a single global culture oversimplifies.|Global culture spread with satellite television.
local culture|adj + noun|the culture of a particular place|Local culture shaped how the scheme was received.|The project drew on local culture rather than imposing a model.
modern culture|adj + noun|present-day culture|Speed is a defining feature of modern culture.|The essay reads anxiety as a product of modern culture.
national culture|adj + noun|the culture of a country|National culture is invoked more often than defined.|The museum was built to express national culture.
political culture|adj + noun|shared political attitudes and habits|Political culture changed faster than institutions.|The chapter compares two political cultures.
popular culture|adj + noun|culture enjoyed by the general public|Popular culture is now a serious object of study.|The term entered popular culture in the 1990s.
traditional culture|adj + noun|long-established culture|Traditional culture was recorded before the resettlement.|Traditional culture adapted rather than disappeared.
foreign currency|adj + noun|money of another country|Reserves of foreign currency fell sharply.|Payments were made in foreign currency.
single currency|adj + noun|one shared money across countries|The single currency removed exchange risk.|Debate about the single currency dominated the decade.
current issue|adj + noun|a matter of present concern|The journal's current issue carries three replications.|Staffing is the current issue in every submission.
current policy|adj + noun|the policy now in force|Current policy requires annual inspection.|Current policy dates from 2011.
current research|adj + noun|study being done now|Current research focuses on the youngest age group.|Current research does not settle the question.
current status|adj + noun|the present condition of something|The table shows the current status of each application.|The current status of the project is under review.
current technology|adj + noun|the technology available now|Current technology cannot detect changes this small.|Current technology makes the survey affordable.
current trend|adj + noun|the direction things are moving in now|The current trend is towards shorter contracts.|If current trends continue, demand will double.
potential customer|adj + noun|someone who might buy something|The campaign reached few potential customers.|Potential customers were surveyed before launch.
daily living|adj + noun|ordinary everyday activity|The scale measures activities of daily living.|Costs of daily living rose faster than wages.
environmental damage|adj + noun|harm to the natural world|Environmental damage was not costed in the appraisal.|The spill caused lasting environmental damage.
potentially dangerous|adv + adj|possibly harmful|The practice is widespread but potentially dangerous.|At high doses the additive is potentially dangerous.
data gathering|noun + noun|the collection of information|Data gathering took nine months.|Data gathering stopped when the funding ended.
data set|noun + noun|a collection of related data|The data set covers 40,000 households.|Two data sets were merged on a common identifier.
empirical data|adj + noun|information from observation or experiment|The claim is not supported by empirical data.|Empirical data from twelve sites were pooled.
existing data|adj + noun|data already collected|The study reuses existing data rather than collecting more.|Existing data on rural work are thin.
experimental data|adj + noun|data from controlled studies|Experimental data confirm the prediction.|Experimental data were collected under identical conditions.
extract data|verb + noun|to take information out of a source|Two reviewers extracted data independently.|Data were extracted from the original reports.
gather data|verb + noun|to collect information|We gathered data at three time points.|Data were gathered by trained assistants.
historical data|adj + noun|information about the past|Historical data allow the trend to be extended back.|Historical data are patchy before 1890.
interpret data|verb + noun|to work out what information means|Interpreting data without context is risky.|The same data can be interpreted either way.
missing data|adj + noun|values absent from a dataset|Missing data were imputed using regression.|Missing data pose a serious problem for the analysis.
numerical data|adj + noun|information expressed in numbers|Numerical data were checked twice.|The system holds numerical data but no free text.
obtain data|verb + noun|to get information|Permission to obtain data was granted in May.|Data were obtained from the national register.
original data|adj + noun|the data as first collected|The original data are no longer available.|The thesis presents original data from fieldwork.
preliminary data|adj + noun|early, provisional information|Preliminary data suggest a small effect.|These preliminary data should not be quoted.
present data|verb + noun|to set out information|The chapter presents data from both surveys.|Data are presented as means with standard deviations.
primary data|adj + noun|data collected first-hand|The thesis combines primary data with archival sources.|Primary data were collected by interview.
process data|verb + noun|to handle and prepare information|Data were processed on a secure server.|It takes two weeks to process the data.
provide data|verb + noun|to supply information|The registry provides data on every admission.|Schools provided data on attendance.
qualitative data|adj + noun|non-numerical information such as text|Qualitative data were coded thematically.|The qualitative data explain what the numbers cannot.
quantitative data|adj + noun|information expressed as numbers|Quantitative data were analysed in Stata.|The quantitative data show a decline the interviews missed.
raw data|adj + noun|data before any processing|The raw data are deposited in the repository.|Raw data were checked for impossible values.
record data|verb + noun|to write down information|Field staff recorded data on tablets.|Temperature was recorded hourly throughout.
relevant data|adj + noun|information bearing on the question|Relevant data exist but are held privately.|Only relevant data were extracted from the files.
reliable data|adj + noun|information that can be trusted|Reliable data on informal work are scarce.|Without reliable data the forecast is guesswork.
report data|verb + noun|to present information formally|Trials must report data on all outcomes.|The agency reports data quarterly.
secondary data|adj + noun|data collected by someone else|The thesis relies on secondary data from the census.|Secondary data cost less but fit the question less well.
statistical data|adj + noun|numerical information for analysis|Statistical data are published each spring.|Statistical data were drawn from two registers.
store data|verb + noun|to keep information|Data are stored on an encrypted server.|Hospitals must store data for eight years.
survey data|noun + noun|information gathered by questionnaire|Survey data were weighted to match the population.|Survey data understate informal employment.
transmit data|verb + noun|to send information|The device transmits data every ten minutes.|Data are transmitted over an encrypted channel.
use (the) data|verb + noun|to make use of information|We use the data to estimate regional differences.|Permission to use the data was granted in 2020.
online database|adj + noun|a searchable collection of data on the internet|The records are held in an online database.|An online database replaced the card index.
deal (with an) issue|verb + noun|to handle a matter|The chapter deals with the issue of consent.|The reform fails to deal with the underlying issue.
premature death|adj + noun|death earlier than expected|Smoking remains a leading cause of premature death.|Premature death rates differ sharply by district.
heated debate|adj + noun|an argument conducted with strong feeling|The proposal provoked heated debate.|After heated debate the motion was withdrawn.
ongoing debate|adj + noun|an argument still continuing|There is ongoing debate about the definition.|The paper contributes to an ongoing debate.
political debate|adj + noun|public argument about policy|The figures entered political debate at once.|Political debate focused on cost rather than need.
public debate|adj + noun|open discussion among citizens|The report was intended to stimulate public debate.|Public debate on the issue has been thin.
theoretical debate|adj + noun|argument about theory|The theoretical debate has outrun the evidence.|Chapter 2 reviews the theoretical debate.
next decade|adj + noun|the ten years ahead|Demand is projected to double over the next decade.|The next decade will test the model.
previous decade|adj + noun|the ten years before|Spending had fallen through the previous decade.|Compared with the previous decade, mobility is lower.
early decades|adj + noun|the first ten-year periods of something|In the early decades of the century, literacy rose fast.|The early decades of the institution are poorly documented.
recent decades|adj + noun|the last few ten-year periods|Inequality has widened in recent decades.|Recent decades have seen a shift to service work.
final decision|adj + noun|the last, binding choice|The final decision rests with the committee.|No final decision has been taken.
major decision|adj + noun|an important choice|Major decisions were taken without consultation.|This was the major decision of her tenure.
strategic decision|adj + noun|a choice about long-term direction|The merger was a strategic decision, not a financial one.|Strategic decisions are made by the board.
deem necessary|verb + adj|to judge something to be needed|The panel may request whatever evidence it deems necessary.|Further testing was not deemed necessary.
(a) deep understanding (of)|adj + noun|thorough comprehension|The role requires a deep understanding of the sector.|Interviews gave a deeper understanding of the decisions.
(at/on a) deeper level|adj + noun|in a more fundamental way|At a deeper level the two accounts agree.|The problem operates on a deeper level than funding.
(be) deeply embedded|adv + adj|firmly fixed within something|The practice is deeply embedded in the institution.|These assumptions are deeply embedded in the measure.
(be) deeply rooted|adv + adj|having long-established causes|The inequality is deeply rooted in the tax system.|Mistrust of the census is deeply rooted here.
defining feature|adj + noun|the quality that makes something what it is|Brevity is the defining feature of the genre.|The defining feature of the reform was its speed.
general definition|adj + noun|a broad statement of meaning|A general definition is given before the technical one.|No general definition satisfies every discipline.
narrow definition|adj + noun|a restricted statement of meaning|On a narrow definition, only 200 cases qualify.|The narrow definition excludes part-time work.
precise definition|adj + noun|an exact statement of meaning|The term is used without a precise definition.|A precise definition is needed before measurement.
use (the) definition|verb + noun|to apply a stated meaning|We use the definition adopted by the OECD.|The two studies use different definitions.
environmental degradation|adj + noun|deterioration of the natural world|Environmental degradation accelerated after the clearances.|The index tracks environmental degradation over time.
(a) higher degree (of)|adj + noun|a greater amount of some quality|The second group showed a higher degree of agreement.|The task demands a higher degree of accuracy.
(a) significant degree (of)|adj + noun|an amount large enough to matter|There is a significant degree of overlap.|The role allows a significant degree of discretion.
varying degree|adj + noun|differing amounts between cases|All three sites improved, to varying degrees.|Staff accepted the change to varying degrees.
increased demand|adj + noun|greater need or desire than before|Increased demand overwhelmed the service.|Increased demand for testing followed the announcement.
increasing demand|adj + noun|need that keeps growing|Increasing demand has not been matched by funding.|Increasing demand for housing drove rents up.
liberal democracy|adj + noun|a democracy with protected individual rights|The book compares three liberal democracies.|Liberal democracy proved more fragile than assumed.
social democracy|adj + noun|a politics combining markets with strong welfare|Postwar social democracy rested on full employment.|Social democracy lost ground in the 1980s.
western democracy|adj + noun|a democratic country of the West|Turnout has fallen across the western democracies.|The pattern holds in most western democracies.
democratic institution|adj + noun|a body that sustains democratic government|Democratic institutions weakened over the decade.|Trust in democratic institutions has declined.
democratic process|adj + noun|the procedures of democratic decision-making|The reform bypassed the democratic process.|Participation is central to the democratic process.
democratic society|adj + noun|a society governed democratically|A free press is essential in a democratic society.|The restriction is not necessary in a democratic society.
democratic state|adj + noun|a country with democratic government|The transition to a democratic state took a decade.|Democratic states behave differently in trade disputes.
demographic factor|adj + noun|a population characteristic affecting something|Demographic factors explain much of the rise.|The model adjusts for demographic factors.
(be) densely populated|adv + adj|having many people per unit of area|The densely populated districts had the highest rates.|The island is densely populated and low-lying.
government department|noun + noun|a branch of national government|Three government departments share responsibility.|The data come from a government department's return.
dependent variable|adj + noun|the outcome a study is trying to explain|The dependent variable is reading score at age eleven.|Two dependent variables were modelled separately.
highly dependent|adv + adj|relying very much on something|The region is highly dependent on a single industry.|Results are highly dependent on the cut-off chosen.
describe (a) procedure|verb + noun|to give an account of a set of steps|The paper describes the procedure in enough detail to repeat.|The procedure is described in the appendix.
describe (a) method|verb + noun|to give an account of a technique|Chapter 3 describes the method used.|The method is described but not justified.
describe (a) process|verb + noun|to give an account of a sequence of events|The chapter describes the process of resettlement.|Participants described the process as opaque.
previously described|adv + adj|already given an account of|Samples were prepared as previously described.|The effect was previously described in rodents.
descriptive statistics|adj + noun|figures summarising a dataset|Descriptive statistics appear in Table 1.|Descriptive statistics precede the modelling.
experimental design|adj + noun|the structure of a controlled study|The experimental design rules out order effects.|Weak experimental design undermines the claim.
urban design|adj + noun|the planning of city spaces|Urban design shapes how people move through a city.|The course covers urban design and transport.
(be) specifically designed (to, for)|adv + adj|made for one particular purpose|The instrument was specifically designed for children.|The scheme was specifically designed to reach carers.
well designed|adv + adj|planned and built thoughtfully|A well designed study would have included a control group.|The questionnaire is well designed and short.
highly desirable|adv + adj|very much wanted|Replication is highly desirable but rarely funded.|A longer follow-up would be highly desirable.
socially desirable|adv + adj|likely to be approved of by others|Respondents give the socially desirable answer.|Socially desirable responding inflates the estimate.
desired outcome|adj + noun|the result that was wanted|The policy did not produce the desired outcome.|Desired outcomes were specified in advance.
sufficient detail|adj + noun|enough specific information|The report lacks sufficient detail to be checked.|Methods are given in sufficient detail to replicate.
technical detail|adj + noun|specific information about method or equipment|Technical details are confined to the appendix.|The summary omits the technical detail.
detailed examination|adj + noun|close, thorough study|A detailed examination of the records followed.|Detailed examination revealed two separate hands.
detailed information|adj + noun|thorough specific facts|Detailed information about each site is in Appendix A.|Detailed information on costs was withheld.
detailed study|adj + noun|a thorough piece of research|A detailed study of four schools followed the survey.|No detailed study of the period exists.
(be) largely determined (by)|adv + adj|mostly fixed by something|Eligibility is largely determined by income.|The outcome was largely determined before the meeting.
develop (a) method|verb + noun|to work out a technique|The team developed a method for small samples.|A new method was developed during the pilot.
develop (a) strategy|verb + noun|to work out a plan|The council developed a strategy for empty homes.|A communications strategy was developed late.
develop (a) technique|verb + noun|to work out a practical procedure|She developed a technique for dating the fragments.|The technique was developed in the 1970s.
develop (a) theory|verb + noun|to construct a theoretical account|The chapter develops a theory of institutional drift.|The theory was developed from case material.
(be) fully developed|adv + adj|complete in its growth or working out|The argument is not fully developed in the paper.|The system was never fully developed.
(be) highly developed|adv + adj|advanced and sophisticated|The country has a highly developed welfare system.|Their sense of smell is highly developed.
(be) originally developed|adv + adj|first created for some purpose|The scale was originally developed for clinical use.|The method was originally developed in physics.
encourage (the) development (of)|verb + noun|to help something grow|Subsidies encouraged the development of local industry.|Reading at home encourages the development of vocabulary.
facilitate (the) development (of)|verb + noun|to make growth easier|The grant facilitated the development of the database.|Good supervision facilitates the development of judgement.
further development|adj + noun|additional growth or refinement|Further development of the tool is planned.|Further developments are reported elsewhere.
future development|adj + noun|growth still to come|Future development depends on continued funding.|The site is protected from future development.
historical development|adj + noun|how something grew over time|The chapter traces the historical development of the term.|Historical development varied between the regions.
industrial development|adj + noun|the growth of industry|Industrial development transformed the valley.|Industrial development was concentrated near the coast.
normal development|adj + noun|growth following the usual pattern|The scale distinguishes normal development from delay.|Normal development varies more than parents expect.
physical development|adj + noun|the growth of the body|Nutrition affects physical development in the first years.|Physical development was measured at each visit.
professional development|adj + noun|training that improves work skills|Staff are entitled to five days of professional development.|Professional development was the first budget to be cut.
promote (the) development (of)|verb + noun|to encourage growth|The policy promotes the development of renewable energy.|Play promotes the development of language.
regional development|adj + noun|the economic growth of an area|Regional development funds were redirected.|Regional development remains uneven.
significant development|adj + noun|an important change or advance|The ruling is a significant development in the law.|Two significant developments followed the report.
subsequent development|adj + noun|a later change or advance|Subsequent developments confirmed the forecast.|The chapter covers subsequent developments to 2015.
technological development|adj + noun|advance in technology|Technological development outpaced the training.|Technological developments lowered the cost tenfold.
urban development|adj + noun|the growth and building of towns|Urban development consumed the surrounding farmland.|Urban development was halted by the moratorium.
developmental process|adj + noun|a process of growth over time|Language learning is a developmental process.|The developmental process is not strictly ordered.
developmental stage|adj + noun|a phase of growth|The task is suited to this developmental stage.|Children pass through the developmental stages at different rates.
diagnostic test|adj + noun|a test used to identify a condition|The diagnostic test has a high false positive rate.|Diagnostic tests were offered in primary care.
differ widely|verb + adv|to vary a great deal|Practices differ widely between the two countries.|Estimates differ widely depending on the definition.
fundamental difference|adj + noun|a difference at the deepest level|There is a fundamental difference between the two approaches.|The fundamental difference is one of purpose.
major difference|adj + noun|an important distinction|The major difference lies in the sampling.|No major differences were found between the groups.
obvious difference|adj + noun|an easily seen distinction|The obvious difference is one of scale.|There is no obvious difference between the two versions.
sexual difference|adj + noun|difference between the sexes|The chapter treats sexual difference as culturally shaped.|Sexual difference in the sample was not significant.
substantial difference|adj + noun|a large distinction|There is a substantial difference in cost.|Substantial differences emerged at follow-up.
ethnic differences|adj + noun|differences between ethnic groups|Ethnic differences in access persist after adjustment.|Ethnic differences were not the focus of the study.
individual differences|adj + noun|variation between persons|Individual differences in memory were considerable.|The design controls for individual differences.
racial differences|adj + noun|differences between racial groups|Racial differences in sentencing were documented.|Reported racial differences shrank once income was added.
radical differences|adj + noun|very large differences|Radical differences separate the two traditions.|There are radical differences in how the term is used.
regional differences|adj + noun|differences between areas|Regional differences in provision are stark.|Regional differences narrowed over the period.
(be) markedly different|adv + adj|clearly unlike|The two cohorts are markedly different in age.|Outcomes were markedly different in the second year.
qualitatively different|adv + adj|different in kind rather than amount|The second phase is qualitatively different from the first.|These are qualitatively different sorts of evidence.
radically different|adv + adj|completely unlike|The two accounts are radically different.|A radically different design would be needed.
slightly different|adv + adj|a little unlike|The wording is slightly different in the second edition.|A slightly different method gives the same answer.
substantially different|adv + adj|considerably unlike|The estimates are substantially different.|Practice is substantially different in the private sector.
totally different|adv + adj|entirely unlike|The result was totally different from the prediction.|Rural respondents gave a totally different account.
widely different|adv + adj|very unlike one another|The two estimates are widely different.|Widely different practices operate in neighbouring districts.
think differently|verb + adv|to have another way of looking at something|Younger respondents think differently about privacy.|Engineers and clinicians think differently about risk.
treat differently|verb + adv|to deal with in another way|Part-time staff were treated differently under the old rules.|The two groups must not be treated differently without justification.
increasingly difficult|adv + adj|harder and harder|Recruitment became increasingly difficult after 2020.|It is increasingly difficult to separate work from home.
encounter difficulties|verb + noun|to meet problems|The team encountered difficulties in tracing the records.|Participants encountered difficulties with the online form.
experience difficulties|verb + noun|to undergo problems|Many households experienced difficulties paying the bill.|Patients experiencing difficulties were referred on.
face difficulties|verb + noun|to confront problems|Rural practices face particular difficulties in staffing.|The scheme faced difficulties from the outset.
learning difficulties|noun + noun|problems that make study harder|Pupils with learning difficulties were supported separately.|The term learning difficulties covers a wide range.
practical difficulties|adj + noun|real-world problems of carrying something out|Practical difficulties ruled out daily testing.|The design is sound but the practical difficulties are severe.
present difficulties|verb + noun|to create problems|Remote sites present difficulties for fieldwork.|Missing records present difficulties for the analysis.
digital information|adj + noun|information held in electronic form|Digital information is easy to copy and hard to destroy.|The archive now holds mainly digital information.
digital media|adj + noun|electronic channels of communication|Digital media reshaped how campaigns are run.|The study compares print and digital media.
digital technology|adj + noun|electronic computing technology|Digital technology lowered the cost of the survey.|Digital technology spread unevenly across the region.
ethical dilemma|adj + noun|a hard choice between competing moral claims|Clinicians face ethical dilemmas daily.|The case presents a genuine ethical dilemma.
face (a) dilemma|verb + noun|to confront a hard choice|Regulators face a dilemma between speed and safety.|The committee faced a dilemma it could not resolve.
moral dilemma|adj + noun|a difficult choice about right and wrong|The scenario poses a moral dilemma with no clean answer.|Participants were given a moral dilemma to discuss.
political dimension|adj + noun|the political aspect of something|The dispute has a political dimension the report ignores.|Funding decisions always have a political dimension.
social dimension|adj + noun|the social aspect of something|The social dimension of the illness is neglected.|Policy appraisal rarely captures the social dimension.
direct evidence|adj + noun|proof bearing immediately on the point|There is no direct evidence of transmission.|Direct evidence of the practice survives in two letters.
direct impact|adj + noun|an immediate effect|The closure had a direct impact on 400 households.|Interest rates have a direct impact on spending.
direct involvement|adj + noun|taking part personally|Her direct involvement ended in 2011.|Direct involvement of patients improved the design.
direct link|adj + noun|an immediate connection|No direct link to the source has been established.|A direct link between the two events is unlikely.
direct observation|adj + noun|watching something at first hand|Direct observation complemented the interviews.|The estimate rests on direct observation, not report.
direct relationship|adj + noun|a connection without intermediaries|There is a direct relationship between dose and response.|No direct relationship was found.
direct role|adj + noun|a part played personally|The minister had no direct role in the decision.|Local staff took a direct role in recruitment.
(be) directly involved (in)|adv + adj|personally taking part|Only two staff were directly involved in the trial.|Those directly involved were interviewed first.
(be) directly linked (to)|adv + adj|immediately connected to something|Pay is directly linked to performance.|The outbreak was directly linked to a single source.
(be) directly linked (to, with)|adv + adj|immediately connected with something|Funding is directly linked with student numbers.|The symptoms are directly linked to exposure.
(be) directly proportional (to)|adv + adj|rising at the same rate as something|Pressure is directly proportional to temperature here.|Output was directly proportional to investment.
(be) directly related (to)|adv + adj|immediately connected to something|Complaints are directly related to waiting times.|Dropout is directly related to travel distance.
(be) directly responsible (for)|adv + adj|personally accountable for something|The department is directly responsible for inspections.|No one was directly responsible for the archive.
natural disaster|adj + noun|a destructive natural event|The region has suffered three natural disasters in a decade.|Insurance against natural disaster is unaffordable here.
disclose information|verb + noun|to make facts known|Firms must disclose information about emissions.|No information about the complaint was disclosed.
dominant discourse|adj + noun|the prevailing way of talking about something|The dominant discourse frames poverty as individual failure.|The chapter challenges the dominant discourse.
public discourse|adj + noun|open discussion in society|The term entered public discourse after the inquiry.|Public discourse on the issue is heavily polarised.
scientific discourse|adj + noun|the language and debate of science|Hedging is characteristic of scientific discourse.|The paper traces a shift in scientific discourse.
newly discovered|adv + adj|recently found|A newly discovered letter settles the question.|The newly discovered species is already endangered.
face discrimination|verb + noun|to be subject to unfair treatment|Older applicants face discrimination in recruitment.|Respondents reported facing discrimination at work.
positive discrimination|adj + noun|favouring a disadvantaged group deliberately|Positive discrimination is lawful only in narrow circumstances.|The policy stops short of positive discrimination.
racial discrimination|adj + noun|unfair treatment based on race|Racial discrimination in housing was widely documented.|The law prohibits racial discrimination in employment.
discuss (a) topic|verb + noun|to talk or write about a subject|The seminar discusses one topic a week.|These topics are discussed in Chapter 6.
discuss (an) issue|verb + noun|to consider a matter|The committee discussed the issue twice.|The paper discusses the issue of comparability.
(be) widely discussed|adv + adj|talked about by many people|The finding has been widely discussed in the media.|The proposal was widely discussed but never adopted.
previously discussed|adv + adj|talked about earlier|The limitations previously discussed apply here too.|As previously discussed, the sample is unusual.
earlier discussion|adj + noun|a conversation or treatment given before|The earlier discussion of method applies here.|This builds on the earlier discussion in Chapter 2.
fuller discussion|adj + noun|a more complete treatment|A fuller discussion appears in the appendix.|Space does not allow a fuller discussion.
preceding discussion|adj + noun|the treatment just given|The preceding discussion suggests three conclusions.|It follows from the preceding discussion that the measure is crude.
previous discussion|adj + noun|an earlier treatment of a topic|The previous discussion assumed a fixed population.|Previous discussions of the case ignored the archive.
(be) widely dispersed|adv + adj|spread over a large area|The population is widely dispersed across the islands.|Ownership is widely dispersed among small holders.
public display|adj + noun|showing something openly|The documents went on public display in 1998.|Public displays of dissent were rare.
disposable income|adj + noun|money left after tax and essentials|Disposable income fell for three consecutive years.|Housing takes a rising share of disposable income.
resolve (a) dispute|verb + noun|to settle a disagreement|The tribunal resolved the dispute in four months.|No mechanism exists to resolve disputes between agencies.
distinct group|adj + noun|a clearly separate set of cases|The analysis identified two distinct groups.|Migrants are not a single distinct group.
distinct type|adj + noun|a clearly separate kind|Three distinct types of error were found.|The two are distinct types, not points on a scale.
draw (a) distinction|verb + noun|to point out a difference|The author draws a distinction between cause and correlation.|A sharp distinction is drawn between the two senses.
make (a) distinction|verb + noun|to separate two things conceptually|The law makes a distinction between intent and effect.|We make no distinction between the two formats.
sharp distinction|adj + noun|a clear-cut difference|A sharp distinction between the categories is hard to sustain.|The sharp distinction breaks down in practice.
distinctive feature|adj + noun|a characteristic that sets something apart|The distinctive feature of the method is its speed.|Distinctive features of the dialect survive in place names.
distinguishing feature|adj + noun|a quality that tells one thing from another|The distinguishing feature is the absence of a control group.|Two distinguishing features separate the variants.
(be) widely distributed|adv + adj|spread across many places|The species is widely distributed across Europe.|The leaflet was widely distributed but little read.
geographic(al) distribution|adj + noun|how something is spread across places|The geographical distribution of cases was mapped.|Geographic distribution follows the main roads.
normal distribution|adj + noun|the standard bell-shaped statistical spread|Errors are assumed to follow a normal distribution.|The scores depart from a normal distribution.
(a) diverse range (of)|adj + noun|a varied set of things|The programme attracted a diverse range of applicants.|A diverse range of methods was used.
diverse group|adj + noun|a varied set of people|The panel was a deliberately diverse group.|Carers are a diverse group with little in common.
ethnic diversity|adj + noun|variety of ethnic backgrounds|Ethnic diversity is greatest in the inner boroughs.|The workforce lacks ethnic diversity at senior levels.
great diversity|adj + noun|a wide variety|There is great diversity in how the rule is applied.|The region shows great diversity of landscape.
(be) further divided (into)|adv + adj|split again into smaller parts|Each category is further divided into three bands.|The sample was further divided by age.
dividing line|noun + noun|a boundary between two things|The dividing line between the two categories is arbitrary.|There is no clear dividing line here.
(be) well documented|adv + adj|recorded thoroughly in sources|The practice is well documented in court records.|The effect is well documented but poorly explained.
documentary evidence|adj + noun|proof in the form of documents|Documentary evidence survives for only two of the sites.|The claim rests on documentary evidence alone.
public domain|adj + noun|material freely available to everyone|The figures are already in the public domain.|Works enter the public domain after seventy years.
domestic market|adj + noun|the market within one country|The firm sells mainly on the domestic market.|The domestic market absorbed the surplus.
domestic sphere|adj + noun|the home as a social realm|Women's work in the domestic sphere went unmeasured.|The chapter separates the domestic sphere from the public.
domestic violence|adj + noun|abuse within a household|Reports of domestic violence rose during the closures.|Domestic violence is heavily under-reported.
male dominance|adj + noun|men holding most of the power|Male dominance of the profession persisted into the 1990s.|The figures show continuing male dominance at senior levels.
dominant form|adj + noun|the most common or powerful version|Wage labour became the dominant form of employment.|Print remained the dominant form until the 1990s.
dominant group|adj + noun|the most powerful set of people|The dominant group set the terms of the debate.|Dominant groups rarely see their position as cultural.
dominant ideology|adj + noun|the prevailing set of beliefs|The dominant ideology treats inequality as natural.|The chapter examines how a dominant ideology is sustained.
dominant paradigm|adj + noun|the prevailing framework in a field|The dominant paradigm went unchallenged for thirty years.|A shift in the dominant paradigm followed the discovery.
dominant position|adj + noun|a place of greatest power|The firm abused its dominant position.|English holds a dominant position in publishing.
dominant role|adj + noun|the leading part|Central government plays a dominant role in funding.|Chance played a dominant role in the outcome.
first draft|adj + noun|the initial version of a text|The first draft was twice the final length.|Comments on the first draft reshaped the argument.
dramatic effect|adj + noun|a very large or striking result|The change had a dramatic effect on waiting times.|Lighting was used to dramatic effect.
dramatic increase|adj + noun|a very large rise|There was a dramatic increase in applications.|The figures show a dramatic increase after 2015.
increase dramatically|verb + adv|to rise very sharply|Referrals increased dramatically in the second year.|Costs increased dramatically once the subsidy ended.
draw (a) line|verb + noun|to set a boundary|It is hard to draw a line between the two categories.|The law draws a line at twelve weeks.
driving force|noun + noun|the main thing causing something to happen|Technology was the driving force behind the change.|She was the driving force of the campaign.
due process|adj + noun|proper legal procedure|The dismissal breached due process.|Due process requires that reasons be given.
long duration|adj + noun|lasting a long time|Unemployment of long duration damages later earnings.|The study followed cases of long duration.
maximum duration|adj + noun|the longest permitted time|The maximum duration of detention is 28 days.|Sessions have a maximum duration of one hour.
short duration|adj + noun|lasting a brief time|The effect was of short duration.|Contracts of short duration dominate the sector.
dynamic equilibrium|adj + noun|a balance maintained by continual change|The system settles into a dynamic equilibrium.|Dynamic equilibrium is not the same as stability.
dynamic nature|adj + noun|the constantly changing character of something|The dynamic nature of the market defeats long forecasts.|The dynamic nature of language frustrates fixed rules.
dynamic process|adj + noun|a process that keeps changing|Identity formation is a dynamic process.|Migration is a dynamic process, not a single move.
dynamic system|adj + noun|a system that changes over time|The climate is a dynamic system with feedback.|Dynamic systems are hard to model from snapshots.
earlier period|adj + noun|a time before the one discussed|Records from the earlier period are sparse.|Compared with the earlier period, mobility is lower.
earlier research|adj + noun|study done before|Earlier research focused on urban samples.|Unlike earlier research, this study uses panel data.
earlier stage|adj + noun|a point before in a process|At an earlier stage the design included a control group.|The problem should have been caught at an earlier stage.
earlier study|adj + noun|a piece of research done before|An earlier study reported the opposite.|The earlier study used a smaller sample.
earlier times|adj + noun|periods in the past|In earlier times the parish kept the records.|Earlier times are poorly documented.
earlier version|adj + noun|a previous form of something|An earlier version of the scale had forty items.|The earlier version of the paper omitted the caveat.
earlier work|adj + noun|research or writing done before|This builds on her earlier work on kinship.|Earlier work had reached a different conclusion.
early study|adj + noun|a piece of research from the beginning of a field|Early studies used samples we would now reject.|An early study of the question appeared in 1954.
(be) easily identified|adv + adj|simple to pick out|Outliers are easily identified in the plot.|The cases are not easily identified from the record.
(be) easily understood|adv + adj|simple to grasp|The figure is easily understood without the text.|The guidance is not easily understood by lay readers.
economic exploitation|adj + noun|unfair use of others for profit|The system rested on economic exploitation.|Economic exploitation of migrant labour was widespread.
economic factors|adj + noun|financial influences on something|Economic factors explain most of the regional gap.|The model controls for economic factors.
economic forces|adj + noun|the pressures of markets and money|Economic forces reshaped the town within a decade.|Economic forces alone will not solve the shortage.
economic goal|adj + noun|a financial aim|Growth remained the overriding economic goal.|Economic goals crowded out environmental ones.
economic inequality|adj + noun|unequal distribution of wealth or income|Economic inequality widened after 1980.|Economic inequality is measured here by the Gini coefficient.
economic integration|adj + noun|the joining of economies|Economic integration proceeded faster than political union.|Economic integration raised trade but not wages.
economic interests|adj + noun|financial stakes or concerns|Economic interests shaped the regulation.|The two countries have competing economic interests.
economic policy|adj + noun|government action on the economy|Economic policy shifted sharply after the crisis.|Economic policy was set without consultation.
economic power|adj + noun|financial strength and influence|Economic power shifted eastwards over the period.|Economic power translates unevenly into political power.
economic prosperity|adj + noun|financial wellbeing and success|Economic prosperity was unevenly shared.|The region's economic prosperity rested on one industry.
economic reform|adj + noun|change to how an economy is organised|Economic reform was imposed as a condition of the loan.|Economic reform stalled after the first year.
economic relations|adj + noun|financial dealings between parties|Economic relations between the two states deteriorated.|The treaty governs economic relations in the region.
economic relationships|adj + noun|financial connections between parties|Economic relationships in the supply chain are opaque.|The chapter maps economic relationships between firms.
economic resources|adj + noun|money, labour and materials available|Economic resources were concentrated in the capital.|Households with few economic resources were worst hit.
economic sector|adj + noun|a part of the economy|The service sector overtook manufacturing as the largest economic sector.|Each economic sector was modelled separately.
economic stability|adj + noun|an economy free from sharp swings|Economic stability returned only after 2013.|The target was economic stability rather than growth.
economic status|adj + noun|a person's or country's financial standing|Economic status was measured by household income.|Economic status predicts access more strongly than region.
economic structure|adj + noun|how an economy is organised|The economic structure of the region changed completely.|Economic structure constrains what policy can achieve.
economic success|adj + noun|financial achievement|Economic success was not shared across the country.|Economic success masked rising household debt.
economic system|adj + noun|the way an economy is arranged|The chapter compares two economic systems.|No economic system distributes risk evenly.
economic theory|adj + noun|theoretical account of economic behaviour|Economic theory predicts convergence over time.|The data sit awkwardly with standard economic theory.
economic value|adj + noun|worth measured in money|The economic value of unpaid care is rarely counted.|The archive has cultural rather than economic value.
economic welfare|adj + noun|the material wellbeing of people|Economic welfare improved more slowly than output.|The measure captures income but not economic welfare.
global economy|adj + noun|the worldwide economic system|The global economy contracted sharply in 2009.|Small producers are exposed to the global economy.
local economy|adj + noun|the economy of a particular area|The closure devastated the local economy.|Tourism now dominates the local economy.
national economy|adj + noun|the economy of a country|The sector contributes little to the national economy.|The national economy depends on two exports.
political economy|adj + noun|the study of how politics and economics interact|The thesis takes a political economy approach.|Political economy explains what the market model misses.
rural economy|adj + noun|the economy of country areas|The rural economy diversified away from farming.|The rural economy lost its younger workers.
revised edition|adj + noun|an updated version of a published work|The revised edition corrects several errors.|A revised edition appeared in 2018.
(be) highly educated|adv + adj|having a lot of formal education|The sample was unusually highly educated.|Highly educated migrants face the sharpest downgrading.
well educated|adv + adj|having a good education|The respondents were well educated and urban.|A well educated workforce was the stated aim.
higher education|adj + noun|university-level study|Participation in higher education doubled in twenty years.|Higher education funding shifted to tuition fees.
primary education|adj + noun|the first stage of schooling|Primary education became universal in the 1890s.|Spending per pupil in primary education fell.
secondary education|adj + noun|schooling after primary and before university|Secondary education was reorganised in 1965.|Completion of secondary education is now the norm.
educational institution|adj + noun|a school, college or university|Educational institutions closed for eighteen months.|The data cover 240 educational institutions.
educational opportunity|adj + noun|the chance to be educated|Educational opportunity remains unequally distributed.|The reform widened educational opportunity.
educational policy|adj + noun|government action on education|Educational policy changed with every minister.|Educational policy is devolved in three nations.
educational programme|adj + noun|an organised course of teaching|The educational programme ran for two terms.|An educational programme accompanied the exhibition.
educational provision|adj + noun|the education made available|Educational provision in rural areas is thin.|Educational provision for carers was inadequate.
educational qualification|adj + noun|a formal certificate of study|Educational qualifications were coded into four levels.|Educational qualifications explain part of the pay gap.
educational research|adj + noun|study of teaching and learning|Educational research rarely changes classroom practice.|Educational research has become more quantitative.
educational setting|adj + noun|a place where teaching happens|The task was tested in an educational setting.|Findings may not transfer to other educational settings.
educational system|adj + noun|the organised structure of education|The educational system was reformed twice in a decade.|Comparison across educational systems is difficult.
negative effect|adj + noun|a harmful result|The policy had a negative effect on small providers.|No negative effects were recorded.
overall effect|adj + noun|the total result|The overall effect was small but consistent.|The overall effect of the two changes cancels out.
positive effect|adj + noun|a beneficial result|Exercise had a positive effect on mood.|The scheme had a positive effect on retention.
profound effect|adj + noun|a very deep result|The war had a profound effect on the discipline.|Early loss has a profound effect on later health.
significant effect|adj + noun|a result large enough to matter|Class size had no significant effect on attainment.|A significant effect emerged at six months.
similar effect|adj + noun|a comparable result|A similar effect was found in the Dutch sample.|Both drugs had a similar effect on pain.
effective implementation|adj + noun|putting something into practice successfully|Effective implementation requires local staff.|The policy was sound; effective implementation was not.
effective intervention|adj + noun|an action that works|Early reading support is an effective intervention.|Few effective interventions exist for this group.
effective management|adj + noun|running something well|Effective management reduced waiting times.|The report blames ineffective management rather than funding.
effective method|adj + noun|a technique that works|Spaced review is an effective method for retention.|No effective method of detection existed before 1980.
effective participation|adj + noun|taking part in a way that counts|Effective participation requires access to the papers.|Consultation fell short of effective participation.
effective policy|adj + noun|a policy that achieves its aim|Effective policy depends on reliable data.|An effective policy would target the worst cases first.
effective treatment|adj + noun|care that works|No effective treatment existed before 1996.|Effective treatment is available but unevenly distributed.
highly effective|adv + adj|working very well|The vaccine proved highly effective against severe disease.|The method is highly effective with small samples.
particularly effective|adv + adj|especially successful|The approach is particularly effective with younger learners.|Text reminders were particularly effective.
use effectively|verb + adv|to employ something well|Few schools used the funding effectively.|The data have never been used effectively.
work effectively|verb + adv|to function well|The system works effectively only with full staffing.|Teams worked effectively despite the distance.
environmental effects|adj + noun|results affecting the natural world|Environmental effects were assessed after approval.|The environmental effects were felt downstream.
highly efficient|adv + adj|working with very little waste|The process is highly efficient at scale.|A highly efficient market would price this in.
research effort|noun + noun|work devoted to study|Most research effort has gone to urban samples.|The research effort was spread too thinly.
presidential election|adj + noun|a vote to choose a president|Turnout in the presidential election reached 68 per cent.|The data were collected before the presidential election.
electronic media|adj + noun|broadcast and digital channels|Electronic media displaced the evening paper.|The study compares print and electronic media.
electronic resources|adj + noun|material available in digital form|The library's electronic resources are available off campus.|Electronic resources now take most of the budget.
electronic version|adj + noun|a digital form of something|An electronic version of the form is available.|The electronic version differs from the print one.
individual element|adj + noun|a single part considered alone|Each individual element works; the whole does not.|The individual elements were costed separately.
key element|adj + noun|an especially important part|Supervision is a key element of the scheme.|Trust is the key element in the relationship.
main element|adj + noun|the principal part|The main elements of the argument are three.|Salaries are the main element of the budget.
single element|adj + noun|one part on its own|No single element explains the failure.|A single element of the test was revised.
structural element|adj + noun|a part of the underlying structure|The structural elements were left unchanged.|Class is treated here as a structural element.
newly emerging|adv + adj|just beginning to appear|Newly emerging technologies outpace regulation.|The chapter covers newly emerging markets.
reduce emissions|verb + noun|to cut the release of gases|The target is to reduce emissions by half.|Transport policy did little to reduce emissions.
emotional impact|adj + noun|the effect on feelings|The emotional impact on staff was underestimated.|Interviews captured the emotional impact of the loss.
emotional intelligence|adj + noun|the ability to understand and manage feelings|Emotional intelligence is hard to measure reliably.|Training in emotional intelligence improved teamwork.
emotional reaction|adj + noun|a response of feeling|The news provoked a strong emotional reaction.|Emotional reactions were recorded immediately after.
emotional response|adj + noun|a reply or reaction of feeling|The images produced a measurable emotional response.|Emotional responses were coded from the transcripts.
emotional support|adj + noun|help with feelings rather than practical needs|Families provide most of the emotional support.|Emotional support was the most valued service.
give emphasis|verb + noun|to stress something|The report gives emphasis to prevention.|Equal emphasis was given to both aims.
greater emphasis|adj + noun|more stress on something|The new curriculum places greater emphasis on writing.|Greater emphasis on outcomes changed the reporting.
increasing emphasis|adj + noun|growing stress on something|There is increasing emphasis on data sharing.|Increasing emphasis on metrics distorted behaviour.
place emphasis|verb + noun|to give something importance|The course places emphasis on academic writing.|She placed particular emphasis on ethics.
shift emphasis|verb + noun|to move the stress elsewhere|The reform shifted emphasis from inputs to outcomes.|Emphasis shifted towards prevention after 2010.
special emphasis|adj + noun|particular stress|Special emphasis was placed on consent.|The guidance gives special emphasis to record-keeping.
strong emphasis|adj + noun|heavy stress on something|There is a strong emphasis on replication.|The school places strong emphasis on attendance.
empirical investigation|adj + noun|study based on observation|An empirical investigation followed the theoretical work.|Empirical investigation of the claim is overdue.
empirical research|adj + noun|research based on observation or experiment|Empirical research on the question is scarce.|The chapter reviews the empirical research since 2000.
empirical study|adj + noun|a piece of observation-based research|An empirical study of 400 firms followed.|This is the first empirical study of the practice.
empirical support|adj + noun|backing from observed evidence|The model has little empirical support.|Empirical support for the hypothesis is mixed.
empirical work|adj + noun|research based on data|Her empirical work transformed the debate.|Empirical work lagged behind the theory.
employ (a) method|verb + noun|to use a technique|The study employs a mixed-methods design.|Both teams employed the same method.
employ (a) technique|verb + noun|to use a practical procedure|The team employed a technique borrowed from physics.|A new technique was employed in the second phase.
employment opportunities|noun + noun|chances to get work|Employment opportunities narrowed after the closure.|Employment opportunities were concentrated in the city.
full employment|adj + noun|a state where almost everyone who wants work has it|Postwar policy aimed at full employment.|Full employment was abandoned as a target in the 1980s.
paid employment|adj + noun|work done for wages|Only half the carers were in paid employment.|Entry into paid employment was delayed by caring.
high unemployment|adj + noun|a large proportion out of work|High unemployment persisted through the decade.|Regions with high unemployment lost population.
low unemployment|adj + noun|few people out of work|Low unemployment coexisted with falling real wages.|Low unemployment masks insecure work.
encounter problems|verb + noun|to meet difficulties|The team encountered problems with the recording equipment.|Users encountered problems at the login stage.
first encounter|adj + noun|an initial meeting with something|The chapter describes the first encounter between the two groups.|First encounters with the service shape later use.
nuclear energy|adj + noun|power from atomic reactions|Nuclear energy supplies a fifth of electricity.|Debate about nuclear energy revived after the crisis.
renewable energy|adj + noun|power from sources that are not used up|Renewable energy overtook coal in 2015.|Investment in renewable energy accelerated.
solar energy|adj + noun|power from the sun|Solar energy costs fell by ninety per cent.|Solar energy is unevenly available across the year.
enhance learning|verb + noun|to improve how much is learned|Spaced practice enhances learning more than rereading.|Technology does not automatically enhance learning.
enhance performance|verb + noun|to improve how well something works|Feedback enhanced performance on the second attempt.|The drug enhances performance only at high doses.
greatly enhance|adv + verb|to improve something a lot|Open data would greatly enhance replication.|The index greatly enhances the book's usefulness.
enormous impact|adj + noun|a very large effect|The paper had an enormous impact on the field.|The closure had an enormous impact on the town.
(the) entire range (of)|adj + noun|the whole variety of something|The archive covers the entire range of the period.|The scale spans the entire range of severity.
entire period|adj + noun|the whole stretch of time|Records survive for the entire period.|The effect held over the entire period.
entirely new|adv + adj|completely novel|The method is not entirely new.|An entirely new category had to be added.
separate entity|adj + noun|a distinct thing in its own right|The trust is a separate entity from the hospital.|The two funds are separate entities in law.
single entity|adj + noun|one unified thing|The sector is not a single entity.|The group was treated as a single entity for tax.
external environment|adj + noun|conditions outside an organisation|The external environment changed faster than the strategy.|Firms adapt slowly to the external environment.
immediate environment|adj + noun|the surroundings closest to something|Children respond to their immediate environment.|The immediate environment of the site was surveyed.
learning environment|noun + noun|the setting in which teaching happens|A quiet learning environment improved concentration.|The online learning environment suited some students badly.
natural environment|adj + noun|the non-human world|Development encroached on the natural environment.|The species is studied in its natural environment.
physical environment|adj + noun|the material surroundings|The physical environment of the ward affects recovery.|Changes to the physical environment reduced falls.
political environment|adj + noun|the surrounding political conditions|The political environment made reform impossible.|The political environment shifted after the election.
social environment|adj + noun|the surrounding social conditions|The social environment shapes health more than genes.|A supportive social environment aided recovery.
urban environment|adj + noun|the surroundings of a city|Air quality is worst in the urban environment.|The study compares urban and rural environments.
environmental factors|adj + noun|influences from the surroundings|Environmental factors explain most of the variation.|Environmental factors interact with genetic ones.
environmental impact|adj + noun|the effect on the natural world|An environmental impact assessment was required.|The environmental impact was felt downstream.
environmental issues|adj + noun|matters concerning the natural world|Environmental issues rose up the agenda after 2018.|The campaign linked environmental issues to health.
environmental policy|adj + noun|government action on the environment|Environmental policy was devolved in 1999.|Environmental policy rarely survives a downturn.
environmental pollution|adj + noun|contamination of the natural world|Environmental pollution was measured at ten sites.|Environmental pollution fell after the plant closed.
environmental protection|adj + noun|safeguarding the natural world|Environmental protection was weakened by the amendment.|The agency is responsible for environmental protection.
equal status|adj + noun|the same standing as others|The two languages have equal status in law.|Part-time staff were granted equal status.
equal treatment|adj + noun|being dealt with in the same way|The directive requires equal treatment of all applicants.|Equal treatment is not the same as equal outcomes.
roughly equal|adv + adj|about the same|The groups were roughly equal in size.|Costs and benefits are roughly equal on these figures.
gender equality|noun + noun|equal standing for women and men|Gender equality in pay remains unachieved.|The policy was assessed for its effect on gender equality.
greater equality|adj + noun|a more equal distribution|Greater equality followed the wartime settlement.|The reform promised greater equality of access.
promote equality|verb + noun|to work towards equal treatment|Public bodies have a duty to promote equality.|The scheme was designed to promote equality of opportunity.
racial equality|adj + noun|equal standing regardless of race|Racial equality was written into the 1976 Act.|Progress towards racial equality stalled.
social equality|adj + noun|equal standing across social groups|Social equality was the stated aim of the reform.|Education alone cannot deliver social equality.
equally likely|adv + adj|having the same probability|Both outcomes are equally likely under the null.|Men and women were equally likely to respond.
equally true|adv + adj|just as correct|The point is equally true of the second dataset.|This is equally true in the private sector.
equally valid|adv + adj|just as sound|Both readings are equally valid on the evidence.|An equally valid approach would weight by population.
treat equally|verb + adv|to deal with in the same way|The algorithm does not treat the two groups equally.|All submissions are treated equally at first review.
social inequality|adj + noun|unequal standing between social groups|Social inequality widened over the period.|The pandemic exposed existing social inequality.
unequal power|adj + noun|an uneven distribution of control|The relationship rests on unequal power.|Unequal power shaped what could be said in interview.
roughly equivalent|adv + adj|about the same in value|The two measures are roughly equivalent.|A roughly equivalent scheme operates in Scotland.
random error|adj + noun|unpredictable variation in measurement|Random error reduces precision but not accuracy.|Repeated readings average out random error.
standard error|adj + noun|a measure of how precise an estimate is|The standard error widens with smaller samples.|Standard errors are reported in parentheses.
essential feature|adj + noun|a necessary characteristic|Peer review is an essential feature of the system.|The essential features are listed in Table 1.
essential function|adj + noun|a necessary purpose or operation|Record-keeping is an essential function of the service.|The organ performs two essential functions.
essential information|adj + noun|facts that are necessary|Essential information was missing from the form.|The leaflet contains essential information about consent.
essential role|adj + noun|a necessary part|Carers play an essential role in recovery.|Enzymes have an essential role in digestion.
establish (a) relationship|verb + noun|to show or build a connection|The study establishes a relationship between the two measures.|Researchers established a relationship of trust first.
established order|adj + noun|the existing arrangement of power|The movement threatened the established order.|The established order absorbed its critics.
established practice|adj + noun|a customary way of doing things|It is established practice to anonymise the records.|The change broke with established practice.
established principle|adj + noun|an accepted rule|It is an established principle that consent must be informed.|The ruling rests on an established principle.
(be) firmly established|adv + adj|solidly settled and accepted|The method is now firmly established.|The practice was firmly established by 1900.
(be) well established|adv + adj|long accepted and secure|The link is well established in the literature.|The journal is well established in the field.
long established|adv + adj|existing for a long time|The firm is long established in the region.|Long established practices resisted the reform.
newly established|adv + adj|recently set up|The newly established agency had no staff.|A newly established unit took over the work.
once established|adv + adj|after becoming settled|Once established, the species spreads quickly.|Once established, such practices are hard to reverse.
ethical principle|adj + noun|a rule of right conduct|Informed consent is a basic ethical principle.|The guidance sets out four ethical principles.
ethical problem|adj + noun|a difficulty about right conduct|The design raises an ethical problem about deception.|Ethical problems delayed approval.
ethical question|adj + noun|a matter of right and wrong|Gene editing raises serious ethical questions.|The committee considered the ethical questions first.
ethnic group|adj + noun|a group sharing a cultural or national origin|Responses were analysed by ethnic group.|The borough is home to several ethnic groups.
ethnic identity|adj + noun|a sense of belonging to an ethnic group|Ethnic identity was self-reported.|Ethnic identity does not map onto country of birth.
ethnic minority|adj + noun|an ethnic group smaller than the majority|Ethnic minority applicants were underrepresented.|The term ethnic minority conceals wide differences.
ethnic origin|adj + noun|the ethnic background someone comes from|Data on ethnic origin were collected voluntarily.|Ethnic origin was recorded in only half the files.
historical event|adj + noun|a notable occurrence in the past|The chapter links the reform to three historical events.|Historical events are dated by the parish register.
ever increasing|adv + adj|constantly growing|An ever increasing share of spending goes on debt.|The ever increasing volume of data outpaced storage.
experimental evidence|adj + noun|proof from controlled studies|Experimental evidence supports the mechanism.|There is no experimental evidence in humans.
find evidence|verb + noun|to discover proof|We find evidence of a small effect.|The inquiry found no evidence of fraud.
further evidence|adj + noun|additional proof|Further evidence emerged after publication.|Further evidence is needed before the claim can stand.
give evidence|verb + noun|to testify or present proof|Two experts gave evidence to the committee.|She gave evidence at the inquiry in 2019.
historical evidence|adj + noun|proof drawn from the past|Historical evidence contradicts the official account.|Historical evidence for the practice is thin.
little evidence|adj + noun|not much proof|There is little evidence that the policy worked.|Little evidence survives from before 1850.
present evidence|verb + noun|to set out proof|The chapter presents evidence from three sources.|No evidence was presented to the committee.
recent evidence|adj + noun|proof from lately|Recent evidence points the other way.|Recent evidence suggests the effect fades.
research evidence|noun + noun|proof from systematic study|Research evidence rarely reaches practitioners.|The guidance cites little research evidence.
scientific evidence|adj + noun|proof meeting scientific standards|Scientific evidence for the claim is weak.|The ruling ignored the scientific evidence.
show evidence|verb + noun|to display proof of something|The samples show evidence of contamination.|The records show evidence of systematic underreporting.
strong evidence|adj + noun|convincing proof|There is strong evidence of a seasonal effect.|Strong evidence links the exposure to later disease.
substantial evidence|adj + noun|a considerable amount of proof|Substantial evidence supports the first hypothesis.|There is substantial evidence of underfunding.
supporting evidence|adj + noun|proof that backs a claim|Supporting evidence is given in the appendix.|The claim is made without supporting evidence.
(be) particularly evident|adv + adj|especially obvious|The gap is particularly evident among younger workers.|The effect is particularly evident in rural areas.
evolutionary process|adj + noun|change through natural selection over time|Antibiotic resistance is an evolutionary process.|The analogy with an evolutionary process is loose.
evolutionary theory|adj + noun|the theoretical account of evolution|Evolutionary theory explains the distribution of traits.|The argument borrows from evolutionary theory.
examine (the) role (of)|verb + noun|to study the part something plays|The paper examines the role of local media.|We examine the role of chance in the outcome.
obvious example|adj + noun|a clear illustration|The census is the obvious example.|An obvious example is the 2008 crisis.
prime example|adj + noun|a particularly clear illustration|The scheme is a prime example of regulatory capture.|This is a prime example of what the theory predicts.
provide (an) example|verb + noun|to give an illustration|The chapter provides examples from three countries.|Provide an example to support your claim.
striking example|adj + noun|an illustration that stands out|The case is a striking example of the problem.|A striking example appears in the 1931 census.
typical example|adj + noun|a representative illustration|This is a typical example of the genre.|The passage is a typical example of the style.
notable exception|adj + noun|an important case that does not fit|With the notable exception of Norway, all rates fell.|One notable exception appears in 1998.
social exclusion|adj + noun|being shut out of normal social participation|Social exclusion is wider than income poverty.|The strategy targeted social exclusion.
mutually exclusive|adv + adj|unable to be true or chosen together|The two explanations are not mutually exclusive.|The categories must be mutually exclusive.
existing research|adj + noun|studies already published|Existing research largely ignores rural samples.|Our findings extend existing research in two ways.
existing structure|adj + noun|the arrangement already in place|The reform worked within the existing structure.|Existing structures could not absorb the demand.
expand rapidly|verb + adv|to grow quickly|The sector expanded rapidly after deregulation.|Student numbers expanded rapidly in the 1990s.
rapid expansion|adj + noun|fast growth|Rapid expansion strained the infrastructure.|The rapid expansion of higher education changed the intake.
high expectations|adj + noun|strong hopes of good results|High expectations were raised and not met.|Teachers with high expectations get better results.
meet expectations|verb + noun|to be as good as hoped|The results did not meet expectations.|The service met expectations on speed but not cost.
social expectations|adj + noun|what society assumes people will do|Social expectations about caring fall on women.|Social expectations changed faster than the law.
government expenditure|noun + noun|state spending|Government expenditure rose as a share of output.|Government expenditure on housing halved.
public expenditure|adj + noun|spending by the state|Public expenditure was cut for seven consecutive years.|Public expenditure per head varies by region.
experience problems|verb + noun|to undergo difficulties|Users experienced problems with the login.|Rural practices experience problems recruiting.
individual experience|adj + noun|what one person has lived through|Aggregate data hide individual experience.|The interviews capture individual experience of the system.
personal experience|adj + noun|what someone has lived through themselves|The account draws on personal experience.|Personal experience is not evidence, but it is data.
previous experience|adj + noun|what someone has done before|Previous experience of the task was controlled for.|No previous experience was required.
prior experience|adj + noun|experience before the point in question|Prior experience strongly predicted performance.|Participants with prior experience were excluded.
professional experience|adj + noun|experience gained at work|Twenty years of professional experience informs the account.|Professional experience was coded in years.
shared experience|adj + noun|something lived through together|Shared experience bound the group together.|The interviews uncovered a shared experience of being ignored.
experiential learning|adj + noun|learning through direct experience|The placement provides experiential learning.|Experiential learning is hard to assess fairly.
experimental method|adj + noun|a controlled research technique|The experimental method rules out confounding.|The experimental method is not always ethical.
experimental research|adj + noun|research using controlled trials|Experimental research on the question is scarce.|Experimental research supports the mechanism.
experimental results|adj + noun|findings from controlled studies|The experimental results were not replicated.|Experimental results are given in Table 3.
experimental study|adj + noun|a controlled piece of research|An experimental study followed the survey.|The experimental study used 120 participants.
experimental work|adj + noun|research done by experiment|Experimental work began in 2018.|Experimental work confirmed the field observations.
expert opinion|adj + noun|the judgement of specialists|Expert opinion was divided on the question.|The guidance rests on expert opinion rather than trials.
technical expertise|adj + noun|specialist practical knowledge|The team lacked the technical expertise to rebuild it.|Technical expertise was bought in from outside.
further explanation|adj + noun|additional account of why|Further explanation is given in the footnotes.|The figures require further explanation.
give (an) explanation|verb + noun|to say why something is so|No explanation was given for the delay.|The author gives three possible explanations.
plausible explanation|adj + noun|a believable account|The most plausible explanation is a change in recording.|Two plausible explanations remain.
possible explanation|adj + noun|an account that might be right|One possible explanation is reporting bias.|The chapter weighs four possible explanations.
provide (an) explanation|verb + noun|to supply an account of why|The theory provides no explanation for the outliers.|The report provides an explanation of the method.
explanatory power|adj + noun|how much a theory accounts for|The model has little explanatory power.|Adding region increases the explanatory power.
make explicit|verb + adj|to state something openly|The assumptions should be made explicit.|The criteria were never made explicit.
state explicitly|verb + adv|to say something clearly and directly|The guidance states explicitly that consent is required.|The paper does not state explicitly how cases were chosen.
sexual exploitation|adj + noun|abusive sexual use of others|The inquiry examined sexual exploitation of children in care.|Sexual exploitation often goes unreported.
explore (an) issue|verb + noun|to investigate a matter|The chapter explores the issue of comparability.|Interviews explored the issue in more depth.
explore further|verb + adv|to investigate more|These findings deserve to be explored further.|We explore further in the second study.
facial expression|adj + noun|the look on someone's face|Facial expressions were coded from the video.|Facial expression conveys more than tone alone.
extended period|adj + noun|a long stretch of time|Symptoms persisted over an extended period.|The archive was closed for an extended period.
extensive research|adj + noun|a large amount of study|Extensive research has been done on urban samples.|Despite extensive research, the cause is unknown.
(be) extensively used|adv + adj|widely employed|The scale is extensively used in clinical practice.|The method has been extensively used since 2005.
external factors|adj + noun|influences from outside|External factors such as weather affected the yield.|The model does not control for external factors.
external forces|adj + noun|pressures from outside|External forces drove the restructuring.|The institution was reshaped by external forces.
external influences|adj + noun|effects from outside|External influences on the result cannot be excluded.|The region absorbed strong external influences.
external source|adj + noun|a source outside the organisation|Figures were checked against an external source.|Funding came from an external source.
external threat|adj + noun|a danger from outside|The rhetoric of external threat justified the measures.|Firms responded to the external threat by merging.
external world|adj + noun|the world outside the mind or system|Perception connects us to the external world.|The model takes no account of the external world.
extract information|verb + noun|to take facts out of a source|Two reviewers extracted information independently.|Information was extracted from the original reports.
extremely powerful|adv + adj|very strong in effect|The method is extremely powerful with large datasets.|The lobby proved extremely powerful.
extremely sensitive|adv + adj|very easily affected or very delicate|The test is extremely sensitive to contamination.|The topic is extremely sensitive for participants.
extremely useful|adv + adj|very helpful|The index is extremely useful for navigation.|The pilot proved extremely useful in refining the design.
extremely valuable|adv + adj|very useful or precious|The pilot interviews proved extremely valuable.|The archive is extremely valuable to local historians.
face (a) problem|verb + noun|to confront a difficulty|Rural schools face a recruitment problem.|The sector faces the same problem it faced in 1990.
factual information|adj + noun|information stating what is the case|The leaflet gives factual information without advice.|Factual information was separated from opinion in the coding.
main factor|adj + noun|the principal influence|Cost was the main factor in the decision.|The main factor is distance from the service.
major factor|adj + noun|an important influence|Housing is a major factor in the health gap.|Timing was a major factor in the outcome.
related factor|adj + noun|a connected influence|Income and a set of related factors were controlled for.|Debt is a related factor the model omits.
significant factor|adj + noun|an influence large enough to matter|Age was a significant factor in recovery.|Travel time proved a significant factor in attendance.
specific factor|adj + noun|a particular influence|No specific factor explains the whole difference.|The analysis isolates two specific factors.
historical factors|adj + noun|influences arising from the past|Historical factors explain the unusual boundary.|Historical factors shaped where the industry settled.
identify factors|verb + noun|to pick out the influences at work|The study identifies factors associated with dropout.|Three factors were identified in the regression.
political factors|adj + noun|political influences on something|Political factors determined the timing of the closure.|The appraisal ignored political factors.
relevant factors|adj + noun|influences that bear on the question|All relevant factors were entered into the model.|The guidance lists the relevant factors to weigh.
social factors|adj + noun|social influences on something|Social factors outweigh clinical ones here.|The model adjusts for social factors.
fair treatment|adj + noun|being dealt with justly|Staff complained of a lack of fair treatment.|Fair treatment requires consistent criteria.
fairly obvious|adv + adj|reasonably clear|The explanation is fairly obvious once the data are split.|It is fairly obvious that the sample is unusual.
fairly straightforward|adv + adj|reasonably simple|The calculation is fairly straightforward.|The procedure is fairly straightforward to replicate.
unfair treatment|adj + noun|being dealt with unjustly|Respondents reported unfair treatment at work.|The tribunal found unfair treatment on grounds of age.
religious faith|adj + noun|belief in a religion|Religious faith was not associated with the outcome.|The hospital respects religious faith in end-of-life care.
nuclear family|adj + noun|a household of parents and their children|The nuclear family was never as universal as assumed.|Policy still assumes a nuclear family.
(be) far removed (from)|adv + adj|very different from something|The model is far removed from clinical reality.|The language of the policy is far removed from practice.
general feature|adj + noun|a broad characteristic|The general features of the system are described first.|This is a general feature of markets of this kind.
key feature|adj + noun|an especially important characteristic|The key feature of the design is its simplicity.|Three key features distinguish the two versions.
main feature|adj + noun|the principal characteristic|The main feature of the reform was decentralisation.|The main features are summarised in Table 2.
major feature|adj + noun|a large and important characteristic|Seasonality is a major feature of the data.|A major feature of the period was mass migration.
particular feature|adj + noun|a specific characteristic|One particular feature deserves comment.|The particular features of each site are described.
positive feature|adj + noun|a good characteristic|The scheme has several positive features.|A positive feature of the design is its low burden.
prominent feature|adj + noun|a characteristic that stands out|Overcrowding was a prominent feature of the housing.|Hedging is a prominent feature of the genre.
salient feature|adj + noun|the most noticeable characteristic|The salient feature of the sample is its youth.|Salient features were recorded at intake.
significant feature|adj + noun|an important characteristic|A significant feature of the data is the gap after 1940.|The most significant feature is the fall in uptake.
specific feature|adj + noun|a particular distinguishing characteristic|Each variant has specific features.|We controlled for specific features of the school.
striking feature|adj + noun|a characteristic that stands out sharply|The most striking feature is the regional divide.|A striking feature of the record is its completeness.
structural feature|adj + noun|a characteristic of the underlying structure|Structural features of the market limit competition.|The structural features were left untouched by the reform.
identify features|verb + noun|to pick out characteristics|Coders identified features common to all four cases.|The software identifies features automatically.
physical features|adj + noun|characteristics of appearance or landscape|The physical features of the site constrain the design.|Physical features were recorded photographically.
federal government|adj + noun|the national government in a federal state|The federal government funds the programme.|Responsibility is split between federal government and states.
federal state|adj + noun|a country of states under a central government|Powers are divided in a federal state.|The comparison covers three federal states.
give feedback|verb + noun|to tell someone how they are doing|Supervisors give feedback within a week.|Feedback was given on the first draft only.
negative feedback|adj + noun|critical comment, or a self-correcting loop|Negative feedback from staff delayed the rollout.|The system is stabilised by negative feedback.
positive feedback|adj + noun|encouraging comment, or a self-reinforcing loop|Positive feedback improved later performance.|Positive feedback loops accelerate the warming.
provide feedback|verb + noun|to give a response on performance|The tool provides feedback immediately.|Reviewers provided feedback within three weeks.
receive feedback|verb + noun|to be told how one is doing|Students who received feedback improved more.|The department received feedback from 400 users.
feminist movement|adj + noun|an organised campaign for women's rights|The feminist movement reshaped family law.|The chapter traces the feminist movement since 1970.
relatively few|adv + adj|not many in comparison|Relatively few respondents gave a reason.|Relatively few studies use longitudinal data.
field research|noun + noun|research carried out in a real-world setting|Field research took eighteen months.|Field research complements the archival work.
significant figures|adj + noun|the meaningful digits in a number|Results are reported to three significant figures.|Rounding to two significant figures hides the difference.
final outcome|adj + noun|the eventual result|The final outcome was decided on appeal.|The final outcome differed from the pilot.
final phase|adj + noun|the last stage|The final phase of the trial begins in June.|Data were collected during the final phase.
final point|adj + noun|the last thing to be said|A final point concerns the cost.|The final point is the most important.
final position|adj + noun|the last or settled stance|The committee's final position was a compromise.|The final position of the marker was recorded.
final product|adj + noun|the finished item|The final product bears little resemblance to the prototype.|Quality is checked on the final product only.
final result|adj + noun|the outcome at the end|The final result was within the margin of error.|Final results will be published next year.
final section|adj + noun|the last part of a text|The final section sets out the implications.|Recommendations appear in the final section.
final step|adj + noun|the last stage in a process|The final step is to weight the responses.|In the final step, participants rated the task.
final version|adj + noun|the last form of a document|The final version omits the appendix.|The final version was agreed in March.
financial institution|adj + noun|a bank or similar body|Financial institutions were recapitalised after 2008.|The data come from twelve financial institutions.
financial management|adj + noun|the handling of money|Poor financial management led to the deficit.|The course covers financial management for charities.
financial market|adj + noun|a market for money and securities|Financial markets reacted within hours.|Financial market volatility rose sharply.
financial problem|adj + noun|a difficulty with money|The trust faced serious financial problems.|Financial problems were the main reason for dropping out.
financial resources|adj + noun|money available|Financial resources were stretched by the second wave.|Households with few financial resources were hardest hit.
financial support|adj + noun|help in the form of money|Financial support is available to low-income students.|Financial support was withdrawn in 2015.
find information|verb + noun|to locate facts|Users could not find information about appeals.|We found no information on the earlier period.
key findings|adj + noun|the most important results|The key findings are summarised on page 4.|Three key findings emerge from the analysis.
main findings|adj + noun|the principal results|The main findings are consistent with earlier work.|The main findings are set out in Chapter 5.
preliminary findings|adj + noun|early, provisional results|Preliminary findings suggest a small effect.|These preliminary findings should be treated with caution.
report findings|verb + noun|to present results|Trials must report findings on all outcomes.|The team reported findings to the funder first.
research findings|noun + noun|results from systematic study|Research findings rarely reach practitioners.|Research findings were summarised for a lay audience.
finite number|adj + noun|a countable, limited quantity|There is a finite number of possible combinations.|A finite number of cases was examined.
infinite number|adj + noun|an unlimited quantity|An infinite number of models fit the data equally well.|There is not an infinite number of explanations.
first generation|adj + noun|the earliest group of a kind|The first generation of migrants worked in the mills.|First generation students are underrepresented.
first impression|adj + noun|an initial judgement|The first impression is of order, but the data are messy.|First impressions shaped the later ratings.
first phase|adj + noun|the initial stage|The first phase involved twelve interviews.|The first phase ran from 2018 to 2020.
first priority|adj + noun|the most urgent aim|Safety is the first priority.|The first priority was to secure the records.
greater flexibility|adj + noun|more ability to adapt|Greater flexibility was promised but not delivered.|Staff wanted greater flexibility over hours.
information flow|noun + noun|the movement of information|Information flow between departments was poor.|The reform improved information flow to patients.
focal point|adj + noun|the centre of attention or activity|The square became the focal point of the protest.|Cost was the focal point of the debate.
main focus|adj + noun|the principal object of attention|The main focus is on secondary schools.|The main focus shifted during the project.
major focus|adj + noun|an important object of attention|Prevention is a major focus of the strategy.|Mental health became a major focus after 2015.
particular focus|adj + noun|a specific object of attention|The study has a particular focus on carers.|Particular focus was given to the transition year.
primary focus|adj + noun|the chief object of attention|The primary focus is measurement, not policy.|The primary focus of the review is trials.
provide (a) focus|verb + noun|to give something a centre of attention|The anniversary provided a focus for the campaign.|The case provides a focus for the wider argument.
specific focus|adj + noun|a precisely defined object of attention|Each chapter has a specific focus.|The specific focus is on written language.
follow (a) format|verb + noun|to use a set layout|All submissions must follow the same format.|The interviews followed a common format.
follow (a) procedure|verb + noun|to carry out a set of steps|Staff failed to follow the agreed procedure.|The same procedure was followed at both sites.
follow instructions|verb + noun|to do as directed|Participants were asked to follow the instructions carefully.|Few users follow instructions to the letter.
immediately following|adv + adj|coming straight after|In the period immediately following the reform, uptake fell.|The weeks immediately following discharge are critical.
military force|adj + noun|armed strength, or an armed body|The use of military force was authorised late.|Military forces were withdrawn in 2014.
powerful force|adj + noun|a strong influence|Migration is a powerful force for change.|Habit is a powerful force in consumption.
foreign investment|adj + noun|money invested from abroad|Foreign investment fell after the referendum.|Foreign investment was concentrated in two sectors.
foreign investor|adj + noun|someone from abroad who invests|Foreign investors bought much of the new housing.|Foreign investors were offered tax relief.
foreign policy|adj + noun|a country's approach to other states|Foreign policy shifted after the election.|The chapter examines foreign policy towards the region.
modified form|adj + noun|a changed version|A modified form of the scale was used.|The practice survives in modified form.
specific form|adj + noun|a particular version|This specific form of the illness is rare.|The data are held in a specific form that resists reuse.
traditional form|adj + noun|a long-established version|The traditional form of the ceremony is still used.|Traditional forms of tenure were displaced.
newly formed|adv + adj|recently created|The newly formed agency had no premises.|A newly formed group took over the campaign.
formal structure|adj + noun|the official arrangement of an organisation|The formal structure conceals how decisions are really made.|The formal structure was redrawn in 2012.
standard format|adj + noun|the usual layout|Data are supplied in a standard format.|A standard format eases comparison across years.
use (a) format|verb + noun|to employ a layout|Both teams used the same format for reporting.|The survey used a format tested in the pilot.
general formula|adj + noun|a broadly applicable rule or expression|The general formula is given in the appendix.|No general formula covers every case.
(be) frequently found|adv + adj|often present|The error is frequently found in student writing.|The species is frequently found near water.
(be) generally found|adv + adj|usually present|The pattern is generally found in larger samples.|Such clauses are generally found in older contracts.
provide (a) foundation (for)|verb + noun|to give a basis for something|The pilot provides a foundation for the full trial.|Early reading provides a foundation for later learning.
small fraction|adj + noun|a tiny part of the whole|Only a small fraction of cases reach court.|A small fraction of the budget goes to prevention.
institutional framework|adj + noun|the structure of organisations governing something|The institutional framework was not changed.|A weak institutional framework undermined the reform.
legal framework|adj + noun|the body of law governing something|The legal framework dates from 1998.|No legal framework covers this technology.
regulatory framework|adj + noun|the system of rules governing an activity|The regulatory framework lagged behind the market.|A new regulatory framework took effect in 2021.
free movement|adj + noun|the right to travel or move without restriction|Free movement of labour was ended by the agreement.|Free movement within the zone remains.
religious freedom|adj + noun|the right to practise a religion|Religious freedom is protected by the convention.|The law balances religious freedom against equality.
high/er frequency|adj + noun|occurring more often|Higher frequency of testing caught cases earlier.|Items of higher frequency are learned first.
low/er frequency|adj + noun|occurring less often|Lower frequency words are harder to recall.|Lower frequency of contact predicted dropout.
(be) frequently referred (to)|adv + adj|often mentioned|The paper is frequently referred to in the literature.|These are frequently referred to as soft skills.
(be) frequently used|adv + adj|often employed|The scale is frequently used in survey research.|Two frequently used measures disagree here.
occur frequently|verb + adv|to happen often|Such errors occur frequently in hand-entered data.|The form occurs frequently in speech but rarely in writing.
fulfil (an) obligation|verb + noun|to carry out a duty|The state failed to fulfil its obligations under the treaty.|Employers must fulfil their obligations on reporting.
(a, the) full range (of)|adj + noun|the complete variety|The service covers the full range of needs.|The archive spans the full range of the period.
full information|adj + noun|complete facts|Full information was not available at the time.|Decisions were made without full information.
full participation|adj + noun|taking part completely|Full participation requires access to the papers in advance.|Full participation was achieved at only two sites.
full potential|adj + noun|the most something could become|Few pupils reach their full potential.|The method has not been used to its full potential.
(be) fully informed|adv + adj|told everything relevant|Participants must be fully informed before consenting.|The board was not fully informed of the risk.
(be) fully integrated|adv + adj|completely joined into a whole|The service is not yet fully integrated with primary care.|The two databases are now fully integrated.
(be) fully realized|adv + adj|completely achieved or brought about|The promise of the reform was never fully realized.|The design was only partly realized in practice.
fully understand|adv + verb|to grasp something completely|We do not yet fully understand the mechanism.|Few respondents fully understood the consent form.
main function|adj + noun|the principal purpose|The main function of the body is to inspect.|Storage is the main function of the building.
perform (a) function|verb + noun|to carry out a purpose|The protein performs two distinct functions.|The committee performs a scrutiny function.
primary function|adj + noun|the chief purpose|The primary function of the archive is preservation.|Teaching remains the primary function of the department.
serve (a) function|verb + noun|to fulfil a purpose|The ritual serves a social function.|These clauses serve no useful function.
social function|adj + noun|a purpose relating to society|Eating together serves a social function.|The pub's social function outlasted its trade.
specific function|adj + noun|a particular purpose|Each unit has a specific function.|The gene has no known specific function.
functional requirement|adj + noun|something a system must be able to do|Functional requirements were agreed before the build.|The functional requirements changed mid-project.
public funds|adj + noun|money belonging to the state|The scheme was paid for from public funds.|Use of public funds requires an audit trail.
fundamental importance|adj + noun|very great significance|Consent is of fundamental importance in this field.|The distinction is of fundamental importance.
fundamental problem|adj + noun|a difficulty at the deepest level|The fundamental problem is one of measurement.|A fundamental problem with the design remains.
fundamental question|adj + noun|a basic matter to be settled|The fundamental question is who decides.|Two fundamental questions are left unanswered.
further information|adj + noun|additional facts|Further information is given in the appendix.|Participants could request further information at any point.
further investigation|adj + noun|additional study|The anomaly warrants further investigation.|Further investigation revealed a coding error.
further research|adj + noun|additional study|Further research is needed to establish causality.|Further research on non-Western samples is overdue.
further study|adj + noun|additional study|These findings deserve further study.|Further study would require longer follow-up.
future prospects|adj + noun|what is likely to come|Future prospects for the sector look weak.|The report assesses future prospects for employment.
future research|adj + noun|study still to be done|Future research should use a larger sample.|Future research might extend this to other settings.
future study|adj + noun|research still to be done|A future study could test the mechanism directly.|Future studies should report all outcomes.
gain information|verb + noun|to obtain facts|Interviews gained information the survey missed.|Little information was gained from the second round.
gain insight (into)|verb + noun|to come to understand something|Interviews gave us real insight into teachers' decisions.|We gained valuable insight from the pilot phase.
gather information|verb + noun|to collect facts|Field staff gathered information on each household.|Information was gathered over nine months.
information gathering|noun + noun|the process of collecting facts|Information gathering took longer than planned.|Information gathering stopped when funding ended.
gender stereotype|noun + noun|a fixed idea about what men or women are like|Gender stereotypes shape subject choice at school.|The campaign reinforced the gender stereotypes it targeted.
general overview|adj + noun|a broad summary|The chapter gives a general overview of the field.|A general overview precedes the detailed analysis.
general principle|adj + noun|a broadly applicable rule|The general principle is that the user pays.|Two general principles govern the allocation.
general statement|adj + noun|a broad assertion|The report makes general statements without evidence.|A general statement of aims opens the document.
general tendency|adj + noun|a broad inclination|There is a general tendency to overstate reading habits.|The general tendency is towards shorter contracts.
general theory|adj + noun|a theory covering many cases|No general theory accounts for all these findings.|The paper proposes a general theory of institutional drift.
general trend|adj + noun|a broad direction of change|The general trend is downward.|The general trend conceals sharp regional differences.
(be) generally known (as, by)|adv + adj|usually called something|The period is generally known as the long boom.|She is generally known by her maiden name in the literature.
next generation|adj + noun|the people or products that come after|The next generation of instruments will be cheaper.|The burden falls on the next generation.
previous generation|adj + noun|the people or products that came before|The previous generation entered a stronger labour market.|The previous generation of devices lacked the sensor.
younger generation|adj + noun|the people who are younger|The younger generation reports lower trust in institutions.|Attitudes among the younger generation shifted first.
genetic variation|adj + noun|differences in genes between individuals|Genetic variation within populations exceeds that between them.|Genetic variation explains only part of the difference.
geographic(al) location|adj + noun|where something is placed|Geographic location strongly predicts access.|Sites were chosen for their geographical location.
get involved (with/in)|verb + adj|to start taking part|Parents got involved only at a late stage.|Few staff got involved with the pilot.
give (a) presentation|verb + noun|to deliver a talk|She gave a presentation at the annual conference.|Each team gives a presentation in week ten.
give (an) indication (of)|verb + noun|to provide a sign of something|The results give a clear indication of the direction.|The figures give no indication of quality.
give (an) overview (of)|verb + noun|to provide a broad summary|Chapter 2 gives an overview of the literature.|The table gives an overview of the sample.
give (sb an) impression|verb + noun|to make someone form a view|The layout gives an impression of precision.|The opening chapter gives a misleading impression.
give (sb) treatment|verb + noun|to provide medical care|Patients were given treatment within the hour.|Treatment was given in primary care where possible.
give priority (to)|verb + noun|to treat something as most important|The policy gives priority to families with children.|Priority was given to the most urgent cases.
give guidance|verb + noun|to provide advice|The regulator gives guidance but not rules.|Guidance was given on handling the data.
give information|verb + noun|to provide facts|The leaflet gives information about side effects.|Staff gave information in the family's own language.
give insight (into)|verb + noun|to provide understanding|The diaries give insight into daily factory life.|The analysis gives insight into why uptake varied.
given information|adj + noun|the information supplied|On the given information, no conclusion is possible.|Participants acted on the given information.
given period|adj + noun|a particular stretch of time|Within any given period, the rate is roughly stable.|Over the given period, prices doubled.
global issue|adj + noun|a matter affecting the whole world|Climate change is a global issue with local effects.|The summit addressed three global issues.
global market|adj + noun|the worldwide market|The firm competes in a global market.|Global market conditions changed abruptly.
global marketplace|adj + noun|the worldwide arena of trade|Small producers are exposed in the global marketplace.|The global marketplace rewards scale.
global media|adj + noun|worldwide news and broadcasting|Global media carried the images within hours.|Global media coverage shaped the response.
global network|adj + noun|a worldwide system of connections|The researchers built a global network of collaborators.|Supply runs through a global network of suppliers.
global perspective|adj + noun|a worldwide point of view|From a global perspective the figure is unremarkable.|The book takes a global perspective on migration.
global shift|adj + noun|a worldwide change in pattern|A global shift in manufacturing followed the 1980s.|The chapter documents a global shift towards services.
global structure|adj + noun|a worldwide arrangement|The global structure of trade changed after 2001.|The global structure of the industry is highly concentrated.
global trade|adj + noun|worldwide commerce|Global trade contracted sharply in 2009.|Global trade rules constrain national policy.
global village|adj + noun|the world seen as one closely linked community|Talk of a global village understates inequality.|Satellite television created something like a global village.
set (a) goal|verb + noun|to decide on an aim|The department set a goal of halving waiting times.|Goals were set before the data were seen.
ultimate goal|adj + noun|the final aim|The ultimate goal is universal coverage.|The ultimate goal of the research is clinical.
imported goods|adj + noun|products brought in from abroad|Imported goods became dearer after the devaluation.|Tariffs were imposed on imported goods.
government intervention|noun + noun|action taken by the state|Government intervention prevented the collapse.|The sector was reshaped by government intervention.
local government|adj + noun|elected authorities below national level|Local government lost a third of its funding.|Local government is responsible for school places.
municipal government|adj + noun|the government of a town or city|Municipal government ran the utilities directly.|Municipal government was reorganised in 1974.
national government|adj + noun|the government of a country|National government sets the framework; councils deliver.|National government retained control of funding.
representative government|adj + noun|government by elected representatives|Representative government developed unevenly.|The reform strengthened representative government.
graphical representation|adj + noun|a picture or chart of information|A graphical representation makes the trend obvious.|Graphical representation was preferred to tables.
(a) great proportion (of)|adj + noun|a large share|A great proportion of the budget goes on salaries.|A great proportion of respondents were under thirty.
(a) great range (of)|adj + noun|a wide variety|The archive holds a great range of material.|A great range of methods has been applied.
great impact|adj + noun|a large effect|The paper had a great impact on the field.|The closure had a great impact on the town.
great majority|adj + noun|almost all|The great majority of cases are resolved informally.|The great majority of respondents agreed.
great potential|adj + noun|much possibility for development|The method has great potential for small samples.|The site has great potential as an archive.
great significance|adj + noun|much importance|The finding is of great significance for policy.|The date is of great significance locally.
greater likelihood|adj + noun|a higher probability|There is a greater likelihood of relapse in the first year.|Greater likelihood of dropout was linked to distance.
(be) greatly influenced (by)|adv + adj|strongly affected by something|Her work was greatly influenced by the Chicago school.|The result is greatly influenced by the cut-off chosen.
(be) greatly reduced|adv + adj|made much smaller|The risk is greatly reduced by early treatment.|Staffing was greatly reduced after 2010.
greatly increase|adv + verb|to raise something a lot|Open data would greatly increase replication.|The reform greatly increased reporting.
vary greatly|verb + adv|to differ a lot|Practice varies greatly between the two countries.|Estimates vary greatly with the definition used.
homogeneous group|adj + noun|a group whose members are alike|The sample is not a homogeneous group.|Treating carers as a homogeneous group is misleading.
minority group|adj + noun|a smaller group within a population|Minority groups were underrepresented in the sample.|The policy aims to protect minority groups.
powerful group|adj + noun|a group with much influence|Powerful groups shaped the consultation.|The reform was blocked by a powerful group of insiders.
racial group|adj + noun|a group defined by race|Outcomes were compared across racial groups.|The category racial group is itself contested.
religious group|adj + noun|a group sharing a religion|Several religious groups were consulted.|Religious groups ran many of the early schools.
vulnerable group|adj + noun|a group at particular risk|Vulnerable groups were prioritised for support.|The scheme failed to reach the most vulnerable groups.
grow rapidly|verb + adv|to increase quickly|The sector grew rapidly after deregulation.|Demand grew rapidly once the fee was dropped.
growing trend|adj + noun|a direction of change that is strengthening|There is a growing trend towards remote working.|The growing trend began before the pandemic.
rapidly growing|adv + adj|increasing quickly|A rapidly growing body of work addresses the question.|The rapidly growing population strained services.
significant growth|adj + noun|a large increase|The sector saw significant growth after 2015.|No significant growth was recorded in real terms.
provide guidance|verb + noun|to give advice|The regulator provides guidance on reporting.|Supervisors provided guidance at each stage.
guiding principle|adj + noun|a rule that directs action|Transparency was the guiding principle.|Three guiding principles shaped the design.
hardly surprising|adv + adj|not surprising at all|It is hardly surprising that uptake was low.|Given the funding, the result is hardly surprising.
potential harm|adj + noun|possible damage|The potential harm was weighed against the benefit.|Researchers must minimise potential harm.
have (a) strategy|verb + noun|to possess a plan|The council has no strategy for empty homes.|The department has a strategy but no budget.
have (a) tendency (to)|verb + noun|to be inclined to do something|Respondents have a tendency to overstate reading.|Prices have a tendency to rise before elections.
have (an) obligation|verb + noun|to be under a duty|Employers have an obligation to report incidents.|Researchers have an obligation to share data.
have limitations|verb + noun|to be restricted in some way|All three methods have limitations.|The study has limitations that should be acknowledged.
have potential|verb + noun|to be capable of developing|The approach has potential but needs testing.|The site has potential for redevelopment.
mental health|adj + noun|psychological wellbeing|Mental health referrals rose by a third.|Mental health was measured with a standard scale.
physical health|adj + noun|bodily wellbeing|Physical health improved more slowly than expected.|Physical and mental health were assessed separately.
(be) heavily influenced (by)|adv + adj|strongly affected by something|The design was heavily influenced by the pilot.|Her thinking was heavily influenced by fieldwork.
rely heavily (on)|verb + adv|to depend greatly on something|The estimate relies heavily on self-report.|The region relies heavily on a single employer.
seek help|verb + noun|to look for assistance|Men were slower to seek help.|Few sought help before the crisis point.
hierarchical structure|adj + noun|an arrangement in ranks|The hierarchical structure slowed decisions.|The organisation retained a hierarchical structure.
(a) high proportion (of)|adj + noun|a large share|A high proportion of respondents were under thirty.|A high proportion of the budget goes to salaries.
high incidence|adj + noun|a large rate of occurrence|The area has a high incidence of respiratory illness.|A high incidence of errors was found in hand entry.
high intensity|adj + noun|a great degree of strength or concentration|High intensity training produced faster gains.|The high intensity of the work caused burnout.
high level|adj + noun|a large degree or senior rank|A high level of agreement between coders was reached.|Discussions were held at a high level.
high order|adj + noun|an advanced or superior kind|The task demands reasoning of a high order.|High order skills are hard to assess by test.
high percentage|adj + noun|a large proportion out of a hundred|A high percentage of cases went unreported.|A high percentage of respondents were retired.
high priority|adj + noun|great urgency or importance|Housing was given high priority in the plan.|The case was marked high priority.
high probability|adj + noun|a strong chance of something|There is a high probability of relapse within a year.|The model assigns a high probability to the second outcome.
high profile|adj + noun|a lot of public attention|The case had a high profile in the national press.|High profile failures distort perception of the risk.
high quality|adj + noun|a very good standard|High quality data are expensive to collect.|The scheme delivered high quality housing.
high rate|adj + noun|a large frequency or speed|The ward had a high rate of readmission.|A high rate of attrition weakened the trial.
high score|adj + noun|a large number of points|A high score indicates greater severity.|High scores clustered in two schools.
high standard|adj + noun|a demanding level of quality|The work is of a consistently high standard.|High standards were maintained despite the cuts.
high status|adj + noun|an important or respected position|High status occupations recruit narrowly.|The role carries high status but little pay.
high turnover|adj + noun|a large rate of staff leaving|High turnover undermined continuity of care.|The sector has high turnover and low pay.
high value|adj + noun|great worth|High value items were stored separately.|The archive is of high value to researchers.
relatively high|adv + adj|high in comparison with others|The rate is relatively high for this age group.|Costs remain relatively high in rural areas.
significantly higher|adv + adj|greater to a measurable degree|Scores were significantly higher in the treatment group.|Rates were significantly higher among men.
slightly higher|adv + adj|a little greater|The second estimate is slightly higher.|Attendance was slightly higher in the spring term.
(be) highly structured|adv + adj|organised in a very ordered way|The interviews were highly structured.|A highly structured curriculum leaves little room to adapt.
(be) highly valued|adv + adj|thought very worthwhile|Continuity of care was highly valued by patients.|Practical skills are highly valued by employers.
highly influential|adv + adj|having a very large effect|Her 1978 paper was highly influential.|A highly influential report shaped the legislation.
highly likely|adv + adj|very probable|It is highly likely that the effect is real.|Relapse is highly likely without follow-up.
highly problematic|adv + adj|causing serious difficulty|The definition is highly problematic in practice.|Comparison across years is highly problematic.
highly relevant|adv + adj|very applicable|The finding is highly relevant to current policy.|Her work is highly relevant to this debate.
highly selective|adv + adj|choosing very few, or very choosy|The programme is highly selective.|The review is highly selective in its coverage.
highly sensitive|adv + adj|very easily affected, or very delicate|The test is highly sensitive to contamination.|The material is highly sensitive and was anonymised.
highly skilled|adv + adj|having a lot of expertise|Highly skilled workers were least affected.|The task requires highly skilled operators.
highly sophisticated|adv + adj|very advanced or complex|The attack used highly sophisticated methods.|Highly sophisticated models are hard to validate.
highly successful|adv + adj|achieving a great deal|The campaign was highly successful in rural areas.|The programme proved highly successful by its own measures.
highly unlikely|adv + adj|very improbable|It is highly unlikely that chance explains this.|A second outbreak is highly unlikely.
highly variable|adv + adj|changing a great deal|Quality was highly variable between sites.|Response times were highly variable.
historical interpretation|adj + noun|a reading of past events|Historical interpretation of the period remains divided.|The chapter offers a new historical interpretation.
historical knowledge|adj + noun|understanding of the past|Historical knowledge of the site is fragmentary.|The course builds historical knowledge alongside method.
historical period|adj + noun|a defined stretch of past time|The historical period covered is 1870 to 1914.|Each historical period had its own recording practice.
historical reality|adj + noun|what actually happened in the past|The myth diverges sharply from historical reality.|Historical reality was messier than the textbook allows.
historical record|adj + noun|the surviving evidence of the past|The historical record is silent on this question.|The historical record was damaged in the fire.
historical roots|adj + noun|origins in the past|The dispute has deep historical roots.|The institution's historical roots lie in the guilds.
historical study|adj + noun|research into the past|A historical study of the parish followed.|Historical study of the practice is overdue.
historical writing|adj + noun|the writing of history|Historical writing changed with the archive's opening.|The chapter surveys historical writing on the war.
historically specific|adv + adj|belonging to one period only|The category is historically specific, not universal.|These assumptions are historically specific.
natural history|adj + noun|the study of living things and nature|The museum's natural history collection dates from 1840.|Natural history was a gentleman's pursuit.
oral history|adj + noun|history recorded from people's spoken memories|The project collected oral history from former workers.|Oral history fills gaps the archive leaves.
human interaction|adj + noun|dealings between people|Human interaction cannot be fully replaced by the portal.|The study observes human interaction in waiting rooms.
human society|adj + noun|people living in organised groups|Human society adapts to scarcity in predictable ways.|The claim applies to every known human society.
human species|adj + noun|humankind as a biological group|The human species spread from Africa.|Climate shaped the early history of the human species.
(be) ideally suited|adv + adj|perfectly appropriate for something|The method is ideally suited to small samples.|The site is ideally suited for long-term monitoring.
identify (a) problem|verb + noun|to pick out a difficulty|The audit identified three problems with the records.|Users identified the same problem independently.
identify (a) way|verb + noun|to find a method|The team identified a way to shorten the process.|No way of verifying the figure was identified.
identify (an) issue|verb + noun|to pick out a matter needing attention|The review identified issues with consent.|Two issues were identified during the pilot.
multiple identities|adj + noun|several senses of who one is|People hold multiple identities at once.|The survey forced a choice where multiple identities exist.
national identity|adj + noun|a sense of belonging to a nation|National identity was invoked on both sides.|National identity is weakly correlated with birthplace.
political identity|adj + noun|a sense of belonging to a political group|Political identity hardened over the decade.|Political identity now predicts more than class.
religious identity|adj + noun|a sense of belonging to a religion|Religious identity was self-reported.|Religious identity persisted after attendance fell.
sexual identity|adj + noun|a person's sense of their sexuality|Sexual identity was recorded only from 2015.|The question on sexual identity was optional.
social identity|adj + noun|a sense of belonging to a social group|Social identity shapes how people read the same facts.|Social identity theory informs the analysis.
political ideology|adj + noun|a system of political beliefs|Political ideology predicted the response more than income.|The reform reflected a coherent political ideology.
(be) largely ignored|adv + adj|mostly not attended to|The warning was largely ignored.|Rural samples have been largely ignored in this literature.
mental illness|adj + noun|a psychological disorder|Mental illness remains under-recorded in primary care.|The study followed 400 adults with severe mental illness.
provide (an) illustration|verb + noun|to give an example|The case provides a clear illustration of the problem.|Figure 2 provides an illustration of the method.
positive image|adj + noun|a favourable public impression|The campaign built a positive image of the service.|A positive image masked serious failures.
public image|adj + noun|how an organisation is seen publicly|The scandal damaged the public image of the profession.|Public image was managed carefully after the inquiry.
visual image|adj + noun|a picture or visual impression|Visual images were coded by two raters.|The visual image stayed with respondents longer than the text.
immediately obvious|adv + adj|clear at once|The error was not immediately obvious.|The pattern is immediately obvious in Figure 1.
immediately preceding|adv + adj|coming straight before|In the year immediately preceding the reform, uptake rose.|The weeks immediately preceding admission are critical.
likely impact|adj + noun|the probable effect|The likely impact on small firms was not assessed.|The report models the likely impact of closure.
little impact|adj + noun|hardly any effect|The campaign had little impact on behaviour.|Training had little impact on recorded practice.
major impact|adj + noun|a large effect|The ruling had a major impact on data sharing.|The closure had a major impact on the town.
make (an) impact|verb + noun|to have an effect|The report made an immediate impact on policy.|Few papers make an impact outside their field.
negative impact|adj + noun|a harmful effect|The cuts had a negative impact on continuity of care.|No negative impact on learning was detected.
positive impact|adj + noun|a beneficial effect|The scheme had a positive impact on attendance.|Mentoring had a positive impact on retention.
potential impact|adj + noun|an effect that might occur|The potential impact on carers was overlooked.|The assessment models the potential impact of flooding.
profound impact|adj + noun|a very deep effect|The war had a profound impact on the discipline.|Early loss has a profound impact on later health.
significant impact|adj + noun|an effect large enough to matter|The reform had a significant impact on waiting times.|No significant impact was found at two years.
successful implementation|adj + noun|putting something into practice effectively|Successful implementation depended on local staff.|Successful implementation requires more than a circular.
major implications|adj + noun|important consequences|The ruling has major implications for employers.|The finding has major implications for the model.
political implications|adj + noun|consequences for politics|The report's political implications were obvious.|Political implications delayed publication.
social implications|adj + noun|consequences for society|The social implications of automation are debated.|The chapter draws out the social implications.
wider implications|adj + noun|broader consequences|The case has wider implications for the sector.|The wider implications are considered in Chapter 7.
imported products|adj + noun|goods brought in from abroad|Imported products dominate the market.|Tariffs raised the price of imported products.
(be of) paramount importance|adj + noun|more important than anything else|Patient safety is of paramount importance.|Accuracy is of paramount importance in this record.
(be of) vital importance|adj + noun|extremely important|Early diagnosis is of vital importance.|The archive is of vital importance to the community.
increased importance|adj + noun|greater significance than before|The role has taken on increased importance.|Data quality has increased importance under the new rules.
increasing importance|adj + noun|growing significance|Evidence of increasing importance is given in Chapter 4.|The sector is of increasing importance to the economy.
perceived importance|adj + noun|how important something is thought to be|Perceived importance differed from measured impact.|Perceived importance of the issue rose after the coverage.
strategic importance|adj + noun|significance for long-term aims|The port is of strategic importance to the region.|The site has strategic importance for the network.
increasingly important|adv + adj|mattering more and more|Data sharing is increasingly important for replication.|Housing costs are increasingly important in poverty measures.
impose limitations|verb + noun|to place restrictions on something|The design imposes limitations on what can be inferred.|Funding rules impose limitations on recruitment.
impose restrictions|verb + noun|to place limits on something|The government imposed restrictions on travel.|Restrictions were imposed on the reuse of the data.
virtually impossible|adv + adj|almost completely impossible|It is virtually impossible to verify the earliest entries.|Comparison across the two systems is virtually impossible.
make (an) impression|verb + noun|to produce an effect on someone|The visit made a strong impression on the panel.|The figures make an impression the text does not support.
improved performance|adj + noun|better results than before|Improved performance followed the second round of training.|Improved performance was not sustained.
significant improvement|adj + noun|a change for the better large enough to matter|There was a significant improvement in reading scores.|No significant improvement was found at follow-up.
low income|adj + noun|a small amount of money earned|Low income households spend more of their budget on fuel.|Low income was the strongest predictor of non-response.
middle income|adj + noun|an income in the middle range|Middle income families gained least from the reform.|The study covers low and middle income countries.
national income|adj + noun|the total income of a country|National income grew faster than wages.|Health spending is given as a share of national income.
total income|adj + noun|all income added together|Total income includes benefits and earnings.|Total income was recorded before tax.
increase (the) likelihood|verb + noun|to make something more probable|Early contact increases the likelihood of completion.|Debt increases the likelihood of dropping out.
significant increase|adj + noun|a rise large enough to matter|There was a significant increase in referrals.|No significant increase was recorded after the campaign.
significantly increase|adv + verb|to raise something to a measurable degree|The change significantly increased response rates.|Training did not significantly increase accuracy.
increased interest|adj + noun|more attention than before|Increased interest followed the media coverage.|There is increased interest in replication.
increased level|adj + noun|a higher amount than before|Increased levels of the hormone were detected.|Increased levels of funding did not reach the front line.
increased number|adj + noun|a larger quantity than before|An increased number of students study part-time.|An increased number of cases were referred on.
increased pressure|adj + noun|more strain than before|Increased pressure on beds delayed discharge.|Staff reported increased pressure after the merger.
increased production|adj + noun|a larger output than before|Increased production lowered unit costs.|Increased production came at an environmental cost.
increased productivity|adj + noun|more output per unit of input|Increased productivity did not translate into higher pay.|The investment promised increased productivity.
increased risk|adj + noun|a greater chance of harm|Smoking carries an increased risk of several cancers.|An increased risk was found in the oldest group.
(a) increasing proportion (of)|adj + noun|a growing share|An increasing proportion of spending goes on debt.|An increasing proportion of staff are on short contracts.
increasing interest|adj + noun|growing attention|There is increasing interest in the method.|Increasing interest has not produced more funding.
increasing pressure|adj + noun|growing strain|Increasing pressure on services was evident by March.|The sector faces increasing pressure to report.
increasing tendency|adj + noun|a growing inclination|There is an increasing tendency to settle out of court.|An increasing tendency to specialise was observed.
increasing trend|adj + noun|a strengthening direction of change|The data show an increasing trend since 2012.|An increasing trend towards remote work predates the pandemic.
increasingly popular|adv + adj|liked by more and more people|The method has become increasingly popular.|Remote consultations grew increasingly popular.
increasingly sophisticated|adv + adj|growing more advanced|Attacks have become increasingly sophisticated.|Increasingly sophisticated models fit the past better than the future.
independent state|adj + noun|a self-governing country|The colony became an independent state in 1962.|Three independent states emerged from the union.
independent variable|adj + noun|the factor a study treats as the cause|The independent variable is class size.|Two independent variables were entered in the model.
provide (an) indication (of)|verb + noun|to give a sign of something|The results provide an indication of the direction.|The figures provide no indication of quality.
indigenous people|adj + noun|the original inhabitants of a place|Indigenous people were excluded from the census.|Land rights of indigenous people were ignored.
indigenous population|adj + noun|the original inhabitants of a region|The indigenous population fell by two-thirds.|The indigenous population was not consulted.
individual interests|adj + noun|what one person wants or benefits from|Individual interests were set against collective ones.|The scheme balances individual interests and public need.
individual item|adj + noun|a single element in a set|Each individual item was rated twice.|Individual items were dropped if agreement was low.
individual needs|adj + noun|what one person requires|Support was tailored to individual needs.|Individual needs were assessed at intake.
individual response|adj + noun|one person's reply or reaction|Individual responses were anonymised before coding.|Individual response to the drug varies widely.
individual responsibility|adj + noun|a duty belonging to one person|The policy frames health as individual responsibility.|Individual responsibility cannot be separated from circumstance.
individual rights|adj + noun|entitlements belonging to each person|Individual rights were balanced against public safety.|The convention protects individual rights.
individual variable|adj + noun|a single factor in an analysis|Each individual variable was tested separately.|No individual variable explains much of the variance.
individual variation|adj + noun|differences between single cases|Individual variation was greater than group differences.|Individual variation in response time was substantial.
particular individual|adj + noun|one specific person|No particular individual was named in the report.|The decision rested with one particular individual.
private individual|adj + noun|a person acting in a personal capacity|The archive was bought by a private individual.|Private individuals hold most of the land.
single individual|adj + noun|one person alone|No single individual could have managed the scale.|The dataset tracks each single individual over time.
unique individual|adj + noun|a person unlike any other|Each patient is a unique individual, not an average.|The approach treats every learner as a unique individual.
industrial production|adj + noun|output from manufacturing|Industrial production fell for six quarters.|Industrial production shifted to the coast.
industrial society|adj + noun|a society based on manufacturing|Industrial society created new forms of poverty.|The transition from agrarian to industrial society was rapid.
industrialized nation|adj + noun|a country with developed industry|Birth rates fell across industrialized nations.|The comparison covers eight industrialized nations.
(be) inextricably linked (to, with)|adv + adj|connected in a way that cannot be separated|Language is inextricably linked with identity.|The two questions are inextricably linked.
major influence|adj + noun|a large effect on something|Her work was a major influence on the field.|Housing is a major influence on health.
positive influence|adj + noun|a beneficial effect|Mentoring had a positive influence on retention.|Teachers were the strongest positive influence reported.
powerful influence|adj + noun|a strong effect|Peer groups are a powerful influence on behaviour.|Advertising exerts a powerful influence on choice.
significant influence|adj + noun|an effect large enough to matter|Class size had no significant influence on attainment.|Parental education is a significant influence.
(be) strongly influenced (by)|adv + adj|greatly affected by something|The design was strongly influenced by the pilot.|Results are strongly influenced by the cut-off chosen.
particularly influential|adv + adj|especially effective in shaping something|Her 1978 paper was particularly influential.|Two reports proved particularly influential.
information processing|noun + noun|the handling of information by a system or mind|Information processing slows with fatigue.|The model treats the brain as an information processing system.
information retrieval|noun + noun|finding stored information|Information retrieval improved with the new index.|The field of information retrieval predates the web.
information sharing|noun + noun|the exchange of information|Information sharing between agencies was poor.|Information sharing agreements took a year to negotiate.
limited information|adj + noun|not much detail available|Limited information was available about the earlier period.|Decisions were made on limited information.
little information|adj + noun|hardly any detail|Little information survives about the first decade.|The form gives little information about appeals.
necessary information|adj + noun|the facts that are needed|The report lacks the necessary information to replicate.|Necessary information was withheld on privacy grounds.
obtain information|verb + noun|to get facts|Permission to obtain information was granted in May.|Information was obtained from the national register.
personal information|adj + noun|facts about an identifiable person|Personal information was removed before sharing.|The breach exposed personal information of 4,000 users.
process information|verb + noun|to handle and interpret facts|Children process information differently under time pressure.|The system processes information overnight.
provide information|verb + noun|to supply facts|The leaflet provides information about side effects.|Schools provided information on attendance.
receive information|verb + noun|to be given facts|Patients received information in their own language.|The committee received information too late to act.
related information|adj + noun|connected facts|Related information is held in a separate file.|Related information appears in Appendix B.
relevant information|adj + noun|facts bearing on the question|All relevant information was disclosed.|Relevant information was buried in an annex.
reliable information|adj + noun|facts that can be trusted|Reliable information on informal work is scarce.|Without reliable information the forecast is guesswork.
seek information|verb + noun|to look for facts|Patients increasingly seek information online.|The committee sought information from the regulator.
share information|verb + noun|to pass facts to others|Agencies are reluctant to share information.|Information was shared under a formal agreement.
specific information|adj + noun|precise facts|Specific information about costs was withheld.|The form asks for specific information about dates.
statistical information|adj + noun|numerical facts|Statistical information is published each spring.|Statistical information on the region is patchy.
store information|verb + noun|to keep facts|The system stores information for eight years.|Information is stored on an encrypted server.
sufficient information|adj + noun|enough facts|The report gives sufficient information to replicate.|Sufficient information was not available at the time.
transmit information|verb + noun|to send facts|The device transmits information every ten minutes.|Nerves transmit information to the brain.
useful information|adj + noun|helpful facts|The pilot produced useful information about timing.|Little useful information came from the open questions.
valuable information|adj + noun|facts worth a great deal|The diaries contain valuable information about daily life.|Interviews yielded valuable information the survey missed.
initial period|adj + noun|the first stretch of time|During the initial period, uptake was slow.|The initial period of the trial was extended.
initial phase|adj + noun|the first stage|The initial phase involved twelve interviews.|Errors were common in the initial phase.
initial position|adj + noun|the starting stance or place|The initial position of each marker was recorded.|The union's initial position hardened.
initial research|adj + noun|the first stage of study|Initial research suggested a larger effect.|Initial research was funded internally.
new initiative|adj + noun|a newly launched scheme|A new initiative was announced without funding.|The new initiative duplicated an existing service.
take initiative|verb + noun|to act first without being told|Staff were expected to take the initiative.|Few councils took the initiative on this.
technological innovation|adj + noun|a new technical development|Technological innovation lowered the cost tenfold.|Technological innovation outpaced the regulation.
new insight|adj + noun|a fresh understanding|The archive offers new insight into the dispute.|The method gives new insight into old data.
offer insight (into)|verb + noun|to provide understanding|The diaries offer insight into factory life.|The analysis offers insight into why uptake varied.
provide insight (into)|verb + noun|to give understanding|Interviews provided insight into teachers' decisions.|The pilot provided insight into the likely burden.
national institution|adj + noun|an organisation of nationwide standing|The library is a national institution.|National institutions lost public trust over the decade.
political institution|adj + noun|a body of political governance|Political institutions weakened over the period.|Trust in political institutions has declined.
public institution|adj + noun|an organisation serving the public|Public institutions absorbed most of the cuts.|The hospital remains a public institution.
social institution|adj + noun|an established social structure such as marriage|Marriage is a social institution, not merely a contract.|The school functions as a social institution.
institutional structure|adj + noun|the organisational arrangement|The institutional structure was left unchanged.|Institutional structures outlive the problems they solved.
institutional support|adj + noun|backing from an organisation|The project failed for lack of institutional support.|Institutional support made the archive possible.
integrated system|adj + noun|a system whose parts work together|An integrated system links health and social care.|No integrated system of recording exists.
social integration|adj + noun|the joining of people into a society|Social integration proceeded faster than language learning.|Social integration is measured by contact and membership.
intellectual property|adj + noun|legal rights over creative work|Intellectual property disputes delayed publication.|Intellectual property was assigned to the funder.
intellectual work|adj + noun|work of the mind|Intellectual work is poorly captured by time sheets.|The post involves sustained intellectual work.
(be) originally intended|adv + adj|meant at the start|The building was originally intended as a hospital.|The scale was originally intended for clinical use.
original intent|adj + noun|the purpose first meant|The original intent of the clause is disputed.|The scheme drifted from its original intent.
low intensity|adj + noun|a small degree of strength|Low intensity exercise suited the older group.|The conflict remained at low intensity for years.
intensive study|adj + noun|thorough, concentrated research|An intensive study of four schools followed.|The period has received intensive study.
significant interaction|adj + noun|a meaningful combined effect of two factors|A significant interaction between age and dose was found.|No significant interaction emerged.
social interaction|adj + noun|dealings between people|Social interaction fell sharply during the closures.|The study observes social interaction in waiting rooms.
sexual intercourse|adj + noun|sexual activity between people|The survey asked about age at first sexual intercourse.|Transmission requires sexual intercourse or blood contact.
national interest|adj + noun|the good of the country|The decision was justified on grounds of national interest.|National interest is invoked more often than defined.
personal interest|adj + noun|a private stake or curiosity|Members must declare any personal interest.|Her personal interest in the topic began in childhood.
renewed interest|adj + noun|attention revived after a lull|There is renewed interest in the method.|Renewed interest followed the anniversary.
vested interest|adj + noun|a personal stake in keeping things as they are|Vested interests blocked the reform.|Those with a vested interest dominated the consultation.
interested party|adj + noun|someone with a stake in a matter|All interested parties were consulted.|Interested parties may make written submissions.
internal market|adj + noun|a market created within an organisation or bloc|The internal market in healthcare was introduced in 1991.|The internal market removed trade barriers.
internal organ|adj + noun|an organ inside the body|Internal organs were examined at post-mortem.|The scan shows the internal organs clearly.
international journal|adj + noun|a journal with worldwide reach|The findings appeared in an international journal.|International journals now require data deposit.
international organization|adj + noun|a body spanning several countries|The standard is set by an international organization.|International organizations lack enforcement powers here.
international treaty|adj + noun|a formal agreement between countries|The international treaty was ratified in 1998.|No international treaty covers this technology.
interpersonal relationships|adj + noun|connections between people|Interpersonal relationships at work predict retention.|The illness strained interpersonal relationships.
interpersonal skills|adj + noun|abilities for dealing with people|Interpersonal skills were rated by supervisors.|The role demands strong interpersonal skills.
literal interpretation|adj + noun|a reading that takes words at face value|A literal interpretation of the clause is absurd.|The court rejected a literal interpretation.
intimate relationship|adj + noun|a close personal, often sexual, relationship|The survey asked about intimate relationships.|Abuse within intimate relationships is under-reported.
intrinsic value|adj + noun|worth in itself rather than for its use|The landscape has intrinsic value beyond tourism.|Research has intrinsic value as well as application.
introduce legislation|verb + noun|to bring in a new law|The government introduced legislation in 2003.|Legislation was introduced after the inquiry.
introductory section|adj + noun|the opening part of a text|The introductory section defines the key terms.|An introductory section sets out the debate.
introductory text|adj + noun|a book for beginners|The introductory text is still widely used.|An introductory text cannot cover the controversies.
private investment|adj + noun|money put in by non-state sources|Private investment did not materialise.|The scheme relied on private investment.
scientific investigation|adj + noun|systematic scientific study|Scientific investigation of the claim is overdue.|The site is under scientific investigation.
social isolation|adj + noun|being cut off from other people|Social isolation predicts poorer health outcomes.|Social isolation rose sharply among older people.
key issue|adj + noun|an especially important matter|Funding is the key issue for small providers.|Three key issues remain unresolved.
legal issue|adj + noun|a matter concerning the law|The reuse of the data raises legal issues.|Legal issues delayed the launch.
main issue|adj + noun|the principal matter|The main issue is comparability across years.|The main issues are set out in Chapter 2.
major issue|adj + noun|an important matter|Staffing is a major issue in every submission.|Housing became a major issue in the campaign.
methodological issue|adj + noun|a problem concerning research method|Several methodological issues limit the conclusions.|The paper discusses methodological issues at length.
practical issue|adj + noun|a real-world problem|Practical issues ruled out daily testing.|The design is sound but the practical issues are severe.
raise (an) issue|verb + noun|to bring up a matter|The case raises issues about consent.|Two issues were raised during the consultation.
real issue|adj + noun|the matter that actually counts|The real issue is not cost but capacity.|The debate avoided the real issue.
related issue|adj + noun|a connected matter|A related issue is the cost of monitoring.|Related issues are dealt with in Chapter 6.
relevant issue|adj + noun|a matter bearing on the question|All relevant issues were considered.|The guidance lists the relevant issues to weigh.
similar issue|adj + noun|a comparable matter|A similar issue arises with the second dataset.|Similar issues were reported at both sites.
single issue|adj + noun|one matter on its own|The campaign was built around a single issue.|No single issue explains the fall in turnout.
special issue|adj + noun|a journal number devoted to one theme|The findings appeared in a special issue on migration.|A special issue was published in 2020.
specific issue|adj + noun|a precisely defined matter|Each chapter addresses one specific issue.|The complaint concerned a specific issue of access.
technical issue|adj + noun|a problem of method or equipment|Technical issues delayed the launch.|Technical issues are discussed in the appendix.
theoretical issue|adj + noun|a question concerning theory|Theoretical issues are set aside in this chapter.|The paper raises a theoretical issue the data cannot settle.
wider issue|adj + noun|a broader matter|The case points to a wider issue of oversight.|Wider issues are considered in the conclusion.
online journal|adj + noun|a journal published on the internet|The online journal is free to read.|Online journals shortened publication times.
publish (a) journal|verb + noun|to produce a periodical|The society publishes a quarterly journal.|The journal has been published since 1904.
scholarly journal|adj + noun|an academic periodical|The article appeared in a scholarly journal.|Scholarly journals rely on unpaid reviewers.
make (a) judgement|verb + noun|to form an opinion or decision|Assessors must make a judgement on limited evidence.|No judgement was made about the quality of care.
key objective|adj + noun|a main aim|The key objective is to halve waiting times.|Key objectives were agreed before the pilot.
key player|adj + noun|an important participant|Local councils are key players in delivery.|The firm became a key player in the market.
key policy|adj + noun|an important government measure|Housing was the key policy of the administration.|Key policies were announced without consultation.
key principle|adj + noun|a fundamental rule|Transparency is a key principle of the scheme.|Three key principles guided the design.
key role|adj + noun|an especially important part|Nurses play a key role in early detection.|Local councils have a key role in delivery.
key source|adj + noun|an especially important origin of information|The parish register is the key source for this period.|Interviews were the key source of evidence.
key text|adj + noun|an especially important book or document|The 1972 report is the key text on the subject.|Key texts are listed in the reading guide.
key theme|adj + noun|an especially important recurring subject|Isolation emerged as a key theme.|Three key themes organise the chapter.
key topic|adj + noun|an especially important subject|Funding was the key topic at the meeting.|Key topics are covered in the first term.
(be) widely known|adv + adj|known by many people|The problem is widely known but rarely addressed.|She is widely known for her work on kinship.
previously known|adv + adj|known before now|The species was previously known only from fossils.|The letter names a figure previously known only by initials.
personal knowledge|adj + noun|what someone knows at first hand|The account rests on personal knowledge of the ward.|Personal knowledge of the area aided the fieldwork.
previous knowledge|adj + noun|what was known or learned before|Previous knowledge of the topic was controlled for.|Previous knowledge shapes what readers notice.
prior knowledge|adj + noun|knowledge held beforehand|Comprehension depends heavily on prior knowledge.|Participants with prior knowledge were excluded.
professional knowledge|adj + noun|expertise gained through an occupation|Professional knowledge is often tacit.|Professional knowledge was valued above the manual.
require knowledge|verb + noun|to need understanding of something|The task requires knowledge of the local system.|Interpreting the figures requires knowledge of the definitions.
specific knowledge|adj + noun|detailed understanding of a particular thing|Specific knowledge of the software was not required.|The role needs specific knowledge of the sector.
tacit knowledge|adj + noun|understanding that is hard to put into words|Much professional skill is tacit knowledge.|Tacit knowledge is lost when staff leave.
technical knowledge|adj + noun|specialist understanding of methods or equipment|Technical knowledge was concentrated in two people.|The role demands technical knowledge of the system.
national language|adj + noun|the official or dominant language of a country|The national language was imposed in schools.|Three national languages have equal status.
natural language|adj + noun|human language as ordinarily used|Natural language resists formal specification.|The system processes natural language input.
verbal language|adj + noun|language expressed in words|Verbal language was supplemented with gesture.|Verbal language develops before reading.
(a) large proportion (of)|adj + noun|a big share|A large proportion of the budget goes on salaries.|A large proportion of respondents were retired.
(a) large range (of)|adj + noun|a wide variety|The archive covers a large range of material.|A large range of methods has been applied.
large majority|adj + noun|most of a group by a wide margin|A large majority supported the change.|The large majority of cases are resolved informally.
large percentage|adj + noun|a big share out of a hundred|A large percentage of cases went unreported.|A large percentage of the sample was urban.
large portion|adj + noun|a big part of something|A large portion of the archive was destroyed.|A large portion of the cost falls on households.
large quantities (of)|adj + noun|big amounts|Large quantities of data are discarded unread.|The plant released large quantities of the gas.
(be) largely responsible (for)|adv + adj|mostly to blame or credit for something|Falling birth rates are largely responsible for the decline.|Transport is largely responsible for the increase.
later work|adj + noun|writing or research done afterwards|Her later work moved away from the theory.|Later work confirmed the early findings.
later writings|adj + noun|texts produced afterwards|His later writings are more cautious.|The later writings were published posthumously.
natural law|adj + noun|moral principles held to derive from nature|The argument appeals to natural law.|Natural law theory shaped early rights thinking.
opinion leader|noun + noun|someone whose views influence others|Opinion leaders shaped uptake in each village.|The campaign targeted local opinion leaders.
party leader|noun + noun|the head of a political party|The party leader resigned after the vote.|Party leaders agreed the timetable privately.
political leader|adj + noun|someone who leads in politics|Political leaders were slow to respond.|The study interviewed twelve political leaders.
leading role|adj + noun|the most important part|The agency took a leading role in the response.|She played a leading role in the reform.
learning objective|noun + noun|what a course aims to teach|Learning objectives are listed at the start of each unit.|The learning objectives were never assessed.
learning outcome|noun + noun|what a learner should be able to do afterwards|Learning outcomes are mapped to assessment.|Stated learning outcomes bear little relation to the exam.
learning process|noun + noun|the way learning happens|The learning process is slower than the syllabus assumes.|Feedback is central to the learning process.
learning resources|noun + noun|materials that support study|Learning resources were moved online.|Learning resources were unevenly distributed.
learning strategy|noun + noun|a planned approach to studying|Spaced review is an effective learning strategy.|Learners differ in the learning strategies they use.
lifelong learning|adj + noun|study continuing throughout life|Lifelong learning became a policy slogan.|Funding for lifelong learning was cut first.
legal obligation|adj + noun|a duty imposed by law|Employers have a legal obligation to report incidents.|There is no legal obligation to publish the data.
legal position|adj + noun|the situation under the law|The legal position remains unclear.|Counsel set out the legal position in writing.
legal proceedings|adj + noun|court action|Legal proceedings were dropped in 2019.|The report cannot comment during legal proceedings.
legal protection|adj + noun|safeguards provided by law|Tenants have little legal protection here.|Legal protection was extended to part-time workers.
legal requirement|adj + noun|something the law demands|Annual inspection is a legal requirement.|The notice fell short of the legal requirement.
legal right|adj + noun|an entitlement under law|Workers have a legal right to request flexible hours.|The legal right exists but is rarely exercised.
legal rule|adj + noun|a principle of law|The legal rule is clear; its application is not.|Legal rules lagged behind the technology.
legal status|adj + noun|a position recognised in law|The legal status of the agreement is disputed.|Legal status determines access to services.
legal system|adj + noun|the institutions and rules of law in a country|The two legal systems differ fundamentally.|The legal system was reformed in 2005.
national legislation|adj + noun|laws made at country level|National legislation implemented the directive.|National legislation varies across the union.
proposed legislation|adj + noun|a law that has been put forward|The proposed legislation was withdrawn.|Consultation on the proposed legislation lasted six weeks.
legislative measures|adj + noun|actions taken through law|Legislative measures followed the inquiry.|Legislative measures alone will not change practice.
legislative power|adj + noun|the authority to make laws|Legislative power was devolved in 1999.|The assembly has limited legislative power.
low level|adj + noun|a small degree or junior rank|Low levels of the vitamin were common.|Decisions were taken at a low level.
minimum level|adj + noun|the smallest acceptable amount|A minimum level of staffing must be maintained.|The grant guarantees a minimum level of service.
overall level|adj + noun|the total or general amount|The overall level of funding was unchanged.|The overall level of agreement was high.
stress level|noun + noun|the amount of mental strain|Stress levels rose during the inspection period.|Stress levels were measured by questionnaire.
reduce (the) likelihood|verb + noun|to make something less probable|Early contact reduces the likelihood of dropout.|Screening reduces the likelihood of late diagnosis.
likely outcome|adj + noun|the probable result|The likely outcome is a small net gain.|The report sets out the likely outcomes of delay.
seem unlikely|verb + adj|to appear improbable|It seems unlikely that chance explains the pattern.|A second wave seemed unlikely at the time.
(a) limited range (of)|adj + noun|a narrow variety|The clinic offers a limited range of services.|A limited range of methods was available.
limited opportunity|adj + noun|a restricted chance|There was limited opportunity to check the entries.|Rural pupils had limited opportunity to take the subject.
limited resources|adj + noun|not much money, staff or materials|The team worked with limited resources.|Limited resources forced a narrower design.
linear relationship|adj + noun|a connection that plots as a straight line|The linear relationship breaks down at high doses.|A linear relationship was assumed for simplicity.
strong link|adj + noun|a close connection|There is a strong link between housing and health.|The study found a strong link with deprivation.
(be) strongly linked|adv + adj|closely connected|Attainment is strongly linked to family income.|The two outbreaks are strongly linked.
(in a) literal sense|adj + noun|taking words at face value|In a literal sense the claim is false.|The term is not meant in a literal sense.
literal meaning|adj + noun|the plain sense of words|The literal meaning differs from the intended one.|Translators must choose beyond the literal meaning.
literary text|adj + noun|a work of literature|The module compares literary texts with court records.|Literary texts were read alongside pamphlets.
literary tradition|adj + noun|an established line of literary practice|The poem belongs to an older literary tradition.|Two literary traditions meet in the work.
published literature|adj + noun|work that has appeared in print|The published literature overstates the effect.|A search of the published literature found 240 studies.
scholarly literature|adj + noun|academic writing on a subject|The scholarly literature is divided on this.|Scholarly literature in other languages was excluded.
little research|adj + noun|hardly any study|Little research has been done on rural samples.|Little research supports the claim.
little significance|adj + noun|hardly any importance|The difference is of little significance in practice.|The date has little significance for the argument.
relatively little|adv + adj|not much by comparison|Relatively little is known about the first decade.|Relatively little funding reaches prevention.
living organism|adj + noun|a living thing|The samples contained no living organisms.|Living organisms respond to the change within hours.
living standard|adj + noun|the level of comfort people have|Living standards fell for a decade after 2008.|Living standards vary sharply between regions.
make (a) living|verb + noun|to earn enough to live on|Few can make a living from the work.|She made a living from teaching and translation.
longitudinal study|adj + noun|a study following the same cases over time|The longitudinal study has run since 1970.|A longitudinal study would settle the question.
low percentage|adj + noun|a small share out of a hundred|A low percentage of eligible families applied.|A low percentage of cases reached court.
low priority|adj + noun|little urgency or importance|Maintenance was given low priority.|The case was marked low priority and delayed.
low probability|adj + noun|a small chance|Events of low probability dominate the risk.|The model assigns a low probability to that path.
low profile|adj + noun|little public attention|The agency deliberately kept a low profile.|The dispute had a low profile outside the sector.
low quality|adj + noun|a poor standard|Low quality data undermined the analysis.|Much of the housing was of low quality.
low status|adj + noun|an unimportant or unrespected position|Care work remains a low status occupation.|The role carries low status despite its difficulty.
low turnover|adj + noun|few staff leaving, or small sales volume|Low turnover helped continuity of care.|The firm has low turnover but high margins.
relatively low|adv + adj|low in comparison with others|The rate is relatively low for this age group.|Costs were relatively low in the pilot.
main principle|adj + noun|the chief rule|The main principle is that the user pays.|Two main principles underpin the scheme.
main source|adj + noun|the chief origin of something|The census is the main source for this period.|Transport is the main source of emissions.
main task|adj + noun|the chief job|The main task was to trace the missing records.|Her main task was coordination.
main theme|adj + noun|the chief recurring subject|The main theme of the interviews was uncertainty.|Loss is the main theme of the collection.
major part|adj + noun|a large portion|Salaries are the major part of the budget.|Fieldwork formed the major part of the year.
major problem|adj + noun|an important difficulty|Missing data are a major problem here.|Recruitment proved the major problem.
major reason|adj + noun|a principal cause|Cost was the major reason given for leaving.|The major reason for the delay was staff shortage.
major role|adj + noun|an important part|Schools play a major role in social mobility.|Chance played a major role in the discovery.
major shift|adj + noun|a large change in direction|A major shift in policy followed the inquiry.|The data show a major shift after 2010.
major source|adj + noun|an important origin|The archive is a major source for the period.|Traffic is a major source of the pollutant.
major theme|adj + noun|an important recurring subject|Migration is a major theme of the book.|Two major themes emerged from the coding.
overwhelming majority|adj + noun|almost all of a group|An overwhelming majority supported the proposal.|The overwhelming majority of cases are mild.
simple majority|adj + noun|more than half of those voting|The motion passed by a simple majority.|A simple majority is enough to amend the rules.
vast majority|adj + noun|very nearly all|The vast majority of referrals were appropriate.|The vast majority of households now have broadband.
make (a) prediction|verb + noun|to say what will happen|The model makes testable predictions.|No prediction was made about timing.
make (a) recommendation|verb + noun|to advise a course of action|The panel made six recommendations.|No recommendation was made on funding.
make (a) statement|verb + noun|to declare something formally|The minister made a statement to the house.|The witness made a statement to police.
make (a) transition|verb + noun|to change from one state to another|Students make the transition to university at eighteen.|The economy made the transition slowly.
make (an) observation|verb + noun|to note something seen|The reviewer made a useful observation about the sampling.|Observations were made at three time points.
make policy|verb + noun|to set an official course of action|Civil servants advise; ministers make policy.|Policy was made without consulting practitioners.
make provision|verb + noun|to arrange for something in advance|The act makes provision for appeals.|No provision was made for carers.
make visible|verb + adj|to cause something to be seen|Time-use data make unpaid work visible.|The mapping made the gap visible for the first time.
middle management|adj + noun|managers between senior and front-line staff|Middle management absorbed most of the cuts.|Middle management resisted the change.
senior management|adj + noun|the most senior managers|Senior management was restructured twice.|Senior management had no clinical background.
strategic management|adj + noun|managing long-term direction|Strategic management was weak during the transition.|The course covers strategic management.
top management|adj + noun|the highest level of management|Top management was replaced after the inquiry.|Top management set targets without consultation.
manual worker|adj + noun|someone doing physical work|Manual workers were worst affected by the closures.|Manual workers report more physical pain.
manufacturing sector|noun + noun|the part of the economy making goods|The manufacturing sector shed a third of its jobs.|The manufacturing sector recovered more slowly.
national market|adj + noun|the market within one country|The firm dominates the national market.|National markets were integrated after 1992.
provide material|verb + noun|to supply substance or content|The interviews provide material for a second paper.|The quarry provided material for the road.
published material|adj + noun|material that has appeared in print|Only published material was included in the review.|Published material understates the failure rate.
relevant material|adj + noun|material bearing on the question|Relevant material was photographed in the archive.|The file contains no relevant material.
source material|noun + noun|the original materials a study draws on|Source material for the chapter is listed in the notes.|Much of the source material is in Dutch.
useful material|adj + noun|material that helps|The pilot produced useful material for the final design.|The open questions yielded little useful material.
mean score|adj + noun|the average of a set of marks|The mean score rose by four points.|Mean scores are reported with standard deviations.
original meaning|adj + noun|the sense a word or text first had|The original meaning has been lost through repetition.|The clause has drifted from its original meaning.
particular meaning|adj + noun|a specific sense|The word carries a particular meaning in this field.|No particular meaning should be read into the order.
shared meaning|adj + noun|a sense understood by everyone involved|Communication depends on shared meaning.|The term lacks shared meaning across the disciplines.
specific meaning|adj + noun|a precise sense|The term has a specific meaning in law.|Give the word its specific meaning here.
(in a) meaningful way|adj + noun|in a way that matters or makes sense|The two figures cannot be compared in a meaningful way.|Patients were involved in a meaningful way.
useful means|adj + noun|a helpful method|Interviews are a useful means of checking survey answers.|Mapping proved a useful means of presenting the data.
national media|adj + noun|news organisations with countrywide reach|The story was picked up by the national media.|National media coverage shaped the response.
popular media|adj + noun|mass-audience news and entertainment|The findings were distorted in the popular media.|Popular media shape what counts as a health risk.
visual media|adj + noun|communication through images|Visual media dominate the campaign.|The module compares print and visual media.
medical treatment|adj + noun|care given by health professionals|Medical treatment was delayed by the backlog.|Medical treatment is free at the point of use.
meet (a) target|verb + noun|to achieve a set goal|Only two regions met the target.|The target was met a year late.
meet (an) objective|verb + noun|to achieve an aim|The programme met its central objective.|Three objectives were not met.
prominent member|adj + noun|an important or well-known member|She was a prominent member of the commission.|Prominent members resigned over the decision.
mental state|adj + noun|someone's psychological condition|Mental state was assessed at admission.|The law considers the defendant's mental state.
previously mentioned|adv + adj|referred to earlier|The previously mentioned limitations apply here too.|As previously mentioned, the sample is unusual.
relative merits|adj + noun|the advantages of each compared with the other|The chapter weighs the relative merits of both designs.|Debate about relative merits obscured the costs.
modern method|adj + noun|a present-day technique|Modern methods detect changes the old ones missed.|Modern methods were applied to the archive material.
qualitative method|adj + noun|a technique using non-numerical evidence|Qualitative methods captured what the survey missed.|The second study uses qualitative methods.
quantitative method|adj + noun|a technique using measurement|Quantitative methods require a larger sample.|Quantitative methods dominate the field.
scientific method|adj + noun|the systematic approach of science|The scientific method requires that claims be testable.|The dispute concerns the scientific method itself.
standard method|adj + noun|the usual accepted technique|The standard method is to log-transform the values.|We depart from the standard method for two reasons.
statistical method|adj + noun|a technique of statistical analysis|The statistical methods are described in Section 3.|Newer statistical methods handle missing data better.
traditional method|adj + noun|the long-established technique|Traditional methods are slower but more transparent.|Traditional methods of dating were superseded.
use (a) method|verb + noun|to employ a technique|Both teams used the same method.|The method used is described in the appendix.
methodological problem|adj + noun|a difficulty with research method|Several methodological problems limit the conclusions.|The chief methodological problem is selection.
research methodology|noun + noun|the overall approach of a study|The research methodology is set out in Chapter 3.|Research methodology training is compulsory.
use (a) methodology|verb + noun|to employ an overall research approach|The study uses a mixed methodology.|Both papers use the same methodology.
migrant worker|adj + noun|someone who moves for work|Migrant workers filled most of the vacancies.|Migrant workers were excluded from the scheme.
military power|adj + noun|armed strength|Military power did not translate into political control.|The treaty limited military power in the region.
military service|adj + noun|time spent in the armed forces|Military service was compulsory until 1960.|Records of military service survive for most men.
minimum requirement|adj + noun|the least that must be satisfied|The submission fell below the minimum requirement.|Minimum requirements are listed in the handbook.
minimum standard|adj + noun|the lowest acceptable level|The housing failed to meet minimum standards.|Minimum standards were raised in 2018.
minimum value|adj + noun|the smallest figure|The minimum value recorded was 0.3.|A minimum value of five is needed for the test.
minimum wage|adj + noun|the lowest legal rate of pay|The minimum wage rose above inflation.|A third of the workforce earns the minimum wage.
minor role|adj + noun|a small part|Chance played only a minor role here.|Local staff had a minor role in the design.
relatively minor|adv + adj|fairly small or unimportant|The changes were relatively minor.|A relatively minor error produced a large discrepancy.
small minority|adj + noun|a small part of a group|Only a small minority objected.|A small minority of cases accounted for most of the cost.
social mobility|adj + noun|movement between social positions|Social mobility stalled after 1980.|Education is an imperfect route to social mobility.
political mobilization|adj + noun|organising people for political action|Political mobilization was rapid and short-lived.|The chapter studies political mobilization online.
original model|adj + noun|the first version of a theoretical account|The original model assumed a closed economy.|The original model has been revised twice.
theoretical model|adj + noun|a formal account of how something works|The theoretical model predicts a threshold.|The theoretical model fits the early data only.
modern society|adj + noun|present-day society|Modern society tolerates risks it once refused.|The thesis is about work in modern society.
modern technology|adj + noun|present-day technical means|Modern technology made the survey affordable.|Modern technology did not prevent the failure.
modified version|adj + noun|a changed form of something|A modified version of the scale was used.|The modified version omits two items.
moral philosophy|adj + noun|the study of right and wrong|The argument draws on moral philosophy.|Moral philosophy offers no settled answer here.
moral principle|adj + noun|a rule about right conduct|The objection rests on a moral principle.|Two moral principles conflict in this case.
(be) politically motivated|adv + adj|driven by political aims|The prosecution was widely seen as politically motivated.|The timing looks politically motivated.
national movement|adj + noun|an organised campaign across a country|A national movement for reform emerged in the 1880s.|The national movement split over tactics.
political movement|adj + noun|an organised group seeking political change|The political movement grew out of local protest.|Political movements rarely survive their founders.
religious movement|adj + noun|an organised religious group or revival|The religious movement spread through the coalfields.|New religious movements attracted young members.
social movement|adj + noun|a collective effort for social change|Social movements rarely achieve their stated aims directly.|The chapter compares two social movements.
multiple sources|adj + noun|several different origins of information|Evidence was drawn from multiple sources.|Multiple sources agree on the date.
mutual recognition|adj + noun|each side accepting the other's standards or status|Mutual recognition of qualifications was agreed.|The treaty rests on mutual recognition.
mutual support|adj + noun|help given to each other|Mutual support between neighbours sustained the area.|The group provides mutual support rather than therapy.
mutual trust|adj + noun|confidence each side has in the other|Mutual trust took years to build and days to lose.|The arrangement depends on mutual trust.
(a) narrow range (of)|adj + noun|a small variety|The clinic offers a narrow range of services.|A narrow range of sources was consulted.
national policy|adj + noun|government policy for the whole country|National policy changed three times in a decade.|National policy left implementation to councils.
national press|adj + noun|countrywide newspapers|The report was covered in the national press.|The national press ignored the local protest.
national security|adj + noun|the safety of a country|The files were withheld on national security grounds.|National security was invoked to limit disclosure.
national survey|adj + noun|a survey covering a whole country|The national survey has run annually since 1983.|National survey data were used for comparison.
native speaker|adj + noun|someone who learned a language from birth|Native speakers judged the sentences for acceptability.|The test was normed on native speakers.
natural order|adj + noun|the way things are arranged in nature|Hierarchy was defended as part of the natural order.|The idea of a natural order underpinned the doctrine.
natural philosophy|adj + noun|the older name for natural science|Natural philosophy became physics in the nineteenth century.|He held a chair in natural philosophy.
natural process|adj + noun|something that happens in nature|Erosion is a natural process accelerated by farming.|Ageing is a natural process, not a disease.
natural resources|adj + noun|materials supplied by nature|The region's natural resources were exported raw.|Natural resources were depleted within a generation.
natural right|adj + noun|an entitlement held to come from nature|The argument appeals to natural rights.|Property was defended as a natural right.
natural science|adj + noun|the study of the physical world|The faculty covers natural science and mathematics.|Natural science methods were imported into sociology.
natural tendency|adj + noun|an inbuilt inclination|There is a natural tendency to notice confirming cases.|The market has no natural tendency to stability.
natural world|adj + noun|nature as a whole|Development encroached on the natural world.|The chapter is about how we classify the natural world.
naturally occurring|adv + adj|found in nature rather than made|The compound is naturally occurring.|Naturally occurring variation was used as a quasi-experiment.
occur naturally|verb + adv|to happen without human intervention|The element occurs naturally in granite.|Such clusters occur naturally in random data.
precise nature|adj + noun|the exact character of something|The precise nature of the link remains unclear.|The precise nature of the role was never defined.
perceived need|adj + noun|a need as people see it|Perceived need differed from assessed need.|Services were allocated by perceived need.
physical needs|adj + noun|bodily requirements|Physical needs were met; emotional ones were not.|The assessment covers physical needs only.
specific needs|adj + noun|particular requirements|Support was tailored to specific needs.|Specific needs of carers were overlooked.
negative outcome|adj + noun|a bad result|Negative outcomes were concentrated in one group.|The trial reported no negative outcomes.
negative side|adj + noun|the unfavourable aspect|On the negative side, the method is slow.|Every scheme has a negative side worth stating.
negative stereotype|adj + noun|an unfavourable fixed idea about a group|Negative stereotypes affected hiring decisions.|The campaign reinforced negative stereotypes.
negative value|adj + noun|a figure below zero|Negative values indicate a net loss.|Negative values were treated as missing.
negative view|adj + noun|an unfavourable opinion|Staff took a negative view of the reorganisation.|Negative views of the scheme hardened over time.
new perspective|adj + noun|a fresh point of view|The archive offers a new perspective on the dispute.|The chapter brings a new perspective to an old question.
next phase|adj + noun|the stage that follows|The next phase begins in September.|Funding for the next phase is not secured.
social norm|adj + noun|an expected standard of behaviour|Social norms changed faster than the law.|The practice breaches a strong social norm.
normal practice|adj + noun|the usual way of doing things|It is normal practice to anonymise the records.|The decision departed from normal practice.
nuclear power|adj + noun|energy from atomic reactions|Nuclear power supplies a fifth of electricity.|Debate about nuclear power revived after 2022.
nuclear war|adj + noun|war fought with atomic weapons|Fear of nuclear war shaped postwar politics.|The scenario assumes limited nuclear war.
nuclear weapon|adj + noun|an atomic bomb or warhead|The treaty limits nuclear weapons.|No nuclear weapon has been used in war since 1945.
significant number|adj + noun|a quantity large enough to matter|A significant number of cases were missed.|A significant number of staff left within a year.
substantial number|adj + noun|a large quantity|A substantial number of records are incomplete.|A substantial number of households were affected.
vast number|adj + noun|a very large quantity|A vast number of documents remain uncatalogued.|The system handles a vast number of transactions.
numerical value|adj + noun|a quantity expressed as a number|Each category was given a numerical value.|The numerical value depends on the units used.
numerous studies|adj + noun|many pieces of research|Numerous studies report the same pattern.|Numerous studies have used this scale.
objective reality|adj + noun|how things are independently of opinion|The chapter questions appeals to objective reality.|Measurement assumes some objective reality to measure.
primary objective|adj + noun|the chief aim|The primary objective was to test feasibility.|The primary objective was not met.
set (an) objective|verb + noun|to decide on an aim|Objectives were set before the data were seen.|The department set three objectives for the year.
strategic objective|adj + noun|a long-term aim|Strategic objectives were revised annually.|The merger served a strategic objective.
scientific objectivity|adj + noun|freedom from bias in science|Scientific objectivity is an ideal, not a description.|Claims to scientific objectivity were contested.
obtain (a) result|verb + noun|to get a finding|The same result was obtained in both samples.|No usable result was obtained from the first run.
obvious point|adj + noun|something easily seen or said|The obvious point is that the samples differ.|An obvious point deserves stating.
obvious reason|adj + noun|an easily seen cause|For obvious reasons the names are withheld.|There is no obvious reason for the gap.
seem obvious|verb + adj|to appear clear|The explanation seems obvious in hindsight.|It seems obvious that cost alone cannot explain this.
serious offence|adj + noun|a grave crime|Falsifying records is a serious offence.|The conduct amounted to a serious offence.
offer (an) opportunity|verb + noun|to provide a chance|The closure offers an opportunity to redesign the service.|Digitisation offers opportunities for new research.
online version|adj + noun|a form available on the internet|The online version includes extra tables.|The online version differs from the print one.
opening section|adj + noun|the first part of a text|The opening section defines the terms.|The opening section is the most accessible.
provide (an) opportunity|verb + noun|to give a chance|The pilot provided an opportunity to test the wording.|The grant provides opportunities for early researchers.
unique opportunity|adj + noun|a chance unlike any other|The closure gave a unique opportunity for study.|The archive offers a unique opportunity to trace families.
(be) strongly opposed|adv + adj|very much against something|Staff were strongly opposed to the merger.|The measure was strongly opposed in consultation.
optimal solution|adj + noun|the best possible answer|There is no optimal solution, only trade-offs.|The optimal solution is unaffordable.
oral presentation|adj + noun|a spoken talk|Each student gives an oral presentation.|Oral presentations were assessed by two markers.
organising principle|adj + noun|the idea that gives something its structure|Chronology is the organising principle of the book.|Class was the organising principle of the old survey.
political organization|adj + noun|a body formed for political ends, or how politics is arranged|The political organization was banned in 1956.|Political organization at local level collapsed.
social organization|adj + noun|how a society is structured|Kinship remains the basis of social organization here.|The chapter compares two forms of social organization.
organizational structure|adj + noun|how an organisation is arranged|The organizational structure was flattened in 2015.|A complex organizational structure slowed decisions.
sexual orientation|adj + noun|a person's pattern of sexual attraction|Sexual orientation was recorded only from 2012.|Discrimination on grounds of sexual orientation is unlawful.
original position|adj + noun|the first stance or place|The union returned to its original position.|The original position of each find was recorded.
original research|adj + noun|new investigation rather than review|The thesis must contain original research.|The journal publishes original research only.
original source|adj + noun|the first-hand origin of information|Always check the original source before quoting.|The original source has not survived.
original text|adj + noun|the text as first written|The original text differs from the published one.|Translation obscures features of the original text.
original version|adj + noun|the first form of something|The original version ran to 400 pages.|The original version of the scale had forty items.
original work|adj + noun|new creative or scholarly work|The degree requires substantial original work.|Her original work on the topic is still cited.
possible outcome|adj + noun|a result that might occur|Three possible outcomes were modelled.|Each possible outcome carries a different cost.
overall performance|adj + noun|how well something does in total|Overall performance improved while variation widened.|Overall performance masks big differences between sites.
overall picture|adj + noun|the general impression from all the evidence|The overall picture is one of slow decline.|No single measure gives the overall picture.
overall rate|adj + noun|the total frequency|The overall rate fell while regional rates diverged.|The overall rate of return was four per cent.
overall structure|adj + noun|the general arrangement|The overall structure of the thesis is conventional.|The overall structure of the sector changed little.
provide (an) overview (of)|verb + noun|to give a broad summary|Chapter 2 provides an overview of the literature.|The table provides an overview of each site.
solar panel|adj + noun|a device converting sunlight to electricity|Solar panels were installed on 400 roofs.|The cost of solar panels fell sharply.
previous paragraph|adj + noun|the paragraph before|The claim in the previous paragraph needs qualifying.|As the previous paragraph showed, the data are thin.
set (the) parameters|verb + noun|to fix the limits or values of something|The funder set the parameters of the review.|Parameters were set from the pilot data.
previous part|adj + noun|the earlier section|The previous part dealt with method.|This builds on the previous part of the argument.
significant part|adj + noun|a portion large enough to matter|A significant part of the budget is unspent.|Housing forms a significant part of the cost.
substantial part|adj + noun|a large portion|A substantial part of the archive was lost.|Fieldwork took a substantial part of the year.
vital part|adj + noun|an essential portion|Supervision is a vital part of training.|Record-keeping is a vital part of the role.
(be) partly responsible (for)|adv + adj|partially to blame or credit for something|Weather was partly responsible for the shortfall.|The design is partly responsible for the confusion.
political participation|adj + noun|taking part in political life|Political participation fell among younger voters.|Political participation is measured by more than voting.
(be) particularly suited (to)|adv + adj|especially appropriate for something|The method is particularly suited to small samples.|The site is particularly suited to long-term monitoring.
particularly sensitive|adv + adj|especially easily affected or delicate|The topic is particularly sensitive for participants.|The test is particularly sensitive to contamination.
particularly significant|adv + adj|especially important|The 1979 figure is particularly significant.|This finding is particularly significant for policy.
particularly striking|adv + adj|especially noticeable|The regional divide is particularly striking.|Particularly striking is the fall after 2010.
particularly successful|adv + adj|especially effective|The scheme was particularly successful in rural areas.|Text reminders were particularly successful.
particularly useful|adv + adj|especially helpful|The index is particularly useful for navigation.|Interviews proved particularly useful in the pilot.
particularly valuable|adv + adj|especially worthwhile|The diaries are particularly valuable for this period.|Longitudinal data are particularly valuable here.
political party|adj + noun|an organised group seeking office|Political parties lost members throughout the period.|Three political parties contested the seat.
ruling party|adj + noun|the party in power|The ruling party lost its majority.|The ruling party controlled appointments.
third party|adj + noun|someone other than the two main parties involved|Data were shared with a third party without consent.|A third party was appointed to mediate.
past research|adj + noun|study done previously|Past research has focused on urban samples.|Past research reached the opposite conclusion.
similar pattern|adj + noun|a comparable regularity|A similar pattern appears in the Dutch data.|The second cohort shows a similar pattern.
peace treaty|noun + noun|a formal agreement ending a war|The peace treaty was signed in 1919.|The peace treaty left the border undefined.
reach (a) peak|verb + noun|to arrive at the highest point|Cases reached a peak in January.|Production reached a peak in 1973 and then fell.
perceived threat|adj + noun|a danger as people see it|Perceived threat mattered more than measured risk.|Perceived threat rose faster than actual incidents.
public perception|adj + noun|how the public sees something|Public perception of the risk was shaped by one story.|Public perception lagged behind the evidence.
visual perception|adj + noun|how we see and interpret images|Visual perception is faster than conscious reasoning.|The experiment tested visual perception under low light.
small percentage|adj + noun|a small share out of a hundred|Only a small percentage of cases reach court.|A small percentage of users generate most traffic.
perform (a) study|verb + noun|to carry out research|A follow-up study was performed in 2021.|The study was performed at four sites.
perform (a) task|verb + noun|to carry out a job|Participants performed the task twice.|The task was performed under time pressure.
superior performance|adj + noun|better results than others|Superior performance was attributed to training.|The method shows superior performance on noisy data.
short period|adj + noun|a brief stretch of time|For a short period the policy was reversed.|Data were collected over a short period.
whole period|adj + noun|the entire stretch of time|The effect held over the whole period.|Records survive for the whole period.
personal quality|adj + noun|a characteristic of a person|Personal qualities were rated by referees.|The post calls for personal qualities more than credentials.
personal relationship|adj + noun|a close connection between people|Personal relationships shaped how information travelled.|The study examines personal relationships at work.
personal responsibility|adj + noun|a duty belonging to the individual|The policy stresses personal responsibility for health.|Personal responsibility cannot be separated from circumstance.
personal safety|adj + noun|freedom from harm to oneself|Staff raised concerns about personal safety.|Personal safety was the main reason for refusing visits.
personal space|adj + noun|the area around a person they treat as their own|Personal space norms vary between cultures.|Ward design left patients no personal space.
theoretical perspective|adj + noun|a viewpoint grounded in theory|The thesis adopts a feminist theoretical perspective.|Two theoretical perspectives are compared.
social phenomenon|adj + noun|something notable occurring in society|Commuting is a social phenomenon as much as an economic one.|The study treats fandom as a social phenomenon.
political philosophy|adj + noun|the study of political principles|The argument draws on political philosophy.|Political philosophy offers no settled answer here.
physical presence|adj + noun|being there in person|Physical presence mattered more than the technology allowed.|The role requires physical presence on site.
physical properties|adj + noun|measurable characteristics of a material|The physical properties of the soil were recorded.|The samples differ in their physical properties.
physical proximity|adj + noun|nearness in space|Physical proximity predicted collaboration.|Physical proximity to the plant raised exposure.
physical science|adj + noun|the study of non-living matter|The faculty covers physical science and engineering.|Physical science methods were imported into the field.
physical space|adj + noun|actual room or area|The archive outgrew its physical space.|Physical space shapes how teams work.
physical symptom|adj + noun|a bodily sign of illness|Physical symptoms appeared before the diagnosis.|Physical symptoms were recorded at each visit.
physical world|adj + noun|the material world|The model abstracts away from the physical world.|Perception connects us to the physical world.
pilot study|noun + noun|a small trial run before the main research|The pilot study revealed problems with the wording.|A pilot study of twelve cases preceded the trial.
pioneering work|adj + noun|research that breaks new ground|Her pioneering work established the field.|The pioneering work of the 1950s is rarely read now.
pivotal role|adj + noun|a decisive part|The agency played a pivotal role in the response.|Timing played a pivotal role in the outcome.
planning stage|noun + noun|the phase when something is being designed|Problems should be caught at the planning stage.|The project is still at the planning stage.
strategic planning|adj + noun|planning for the long term|Strategic planning was abandoned during the crisis.|The course covers strategic planning for charities.
seem plausible|verb + adj|to appear believable|The second explanation seems plausible.|It seems plausible that reporting improved.
play (a) role (in)|verb + noun|to have a part in something|Genetics plays a role, but environment matters more.|Local councils play a central role in delivery.
public policy|adj + noun|government action on public matters|Public policy shifted after the inquiry.|The findings have clear public policy implications.
security policy|noun + noun|rules governing safety and protection|Security policy was tightened after the breach.|The organisation's security policy was never enforced.
social policy|adj + noun|government action on welfare and society|Social policy was reshaped by the reforms.|The department teaches social policy and sociology.
political instability|adj + noun|a state of political unrest|Political instability deterred investment.|Political instability followed the disputed election.
political reality|adj + noun|how politics actually works|The plan ignored political reality.|Political reality constrained what could be proposed.
political reform|adj + noun|change to political arrangements|Political reform was promised and postponed.|Political reform followed years of protest.
political representation|adj + noun|having one's interests spoken for in politics|Political representation of the region improved slowly.|Women's political representation doubled.
political significance|adj + noun|importance for politics|The ruling had political significance beyond the case.|The date has political significance locally.
political spectrum|adj + noun|the range of political opinion|Support came from across the political spectrum.|The party moved rightwards on the political spectrum.
political stability|adj + noun|an absence of political upheaval|Political stability attracted investment.|Political stability was bought at the cost of reform.
political status|adj + noun|a position recognised in politics|The territory's political status remains unresolved.|Political status determined access to funds.
political structure|adj + noun|how political power is arranged|The political structure survived the transition.|The chapter maps the political structure of the region.
(be) poorly understood|adv + adj|not well known or explained|The mechanism remains poorly understood.|The long-term effects are poorly understood.
(be) sparsely populated|adv + adj|having few people per unit of area|The sparsely populated north lost services first.|The region is sparsely populated and ageing.
rural population|adj + noun|people living in the countryside|The rural population fell by a third.|The rural population is older than the national average.
significant portion|adj + noun|a share large enough to matter|A significant portion of the budget is unspent.|A significant portion of cases went unrecorded.
small portion|adj + noun|a small part|Only a small portion of the archive is digitised.|A small portion of the sample was re-interviewed.
pose (a) question|verb + noun|to raise a matter for consideration|The case poses a question about consent.|These results pose questions for the earlier model.
pose (a) threat (to)|verb + noun|to be a danger to something|Antibiotic resistance poses a threat to routine surgery.|The development poses a threat to the wetland.
privileged position|adj + noun|an advantaged place|The profession occupies a privileged position.|Researchers write from a privileged position.
unique position|adj + noun|a place unlike any other|The archive is in a unique position to answer this.|The city holds a unique position in the network.
positive relationship|adj + noun|a connection where both rise together|A positive relationship was found between income and health.|The positive relationship weakens above the median.
positive result|adj + noun|a favourable or confirming finding|Positive results are more likely to be published.|The trial reported positive results at six months.
positive value|adj + noun|a figure above zero|Positive values indicate a net gain.|Only positive values were retained.
positive view|adj + noun|a favourable opinion|Staff took a positive view of the change.|Positive views were concentrated among newer employees.
possible source|adj + noun|a potential origin|Three possible sources of bias are considered.|The well was identified as a possible source.
potential problem|adj + noun|a difficulty that might arise|A potential problem is the loss of comparability.|Potential problems were flagged at the design stage.
potential risk|adj + noun|a danger that might occur|Potential risks were explained to participants.|The potential risk was judged acceptable.
potential source|adj + noun|a possible origin|Each potential source of error was examined.|Traffic is a potential source of the pollutant.
potential value|adj + noun|worth that might be realised|The archive has great potential value for research.|The potential value of the method is untested.
predictive power|adj + noun|how well something forecasts outcomes|The model has little predictive power.|Adding income increases the predictive power.
purchasing power|adj + noun|how much money can buy|Purchasing power fell as inflation rose.|Figures are adjusted for purchasing power.
solar power|adj + noun|energy from the sun|Solar power now supplies a tenth of demand.|Solar power costs fell faster than forecast.
powerful tool|adj + noun|a very effective means|Regression is a powerful tool but easily misused.|Mapping proved a powerful tool for communication.
practical significance|adj + noun|importance in real terms|Statistical significance is not practical significance.|The difference has little practical significance.
professional practice|adj + noun|how an occupation is carried out|Professional practice changed faster than the guidance.|The module links theory to professional practice.
reflective practice|adj + noun|learning by thinking critically about one's work|Reflective practice is required in the portfolio.|Reflective practice is hard to assess fairly.
religious practice|adj + noun|the observances of a religion|Religious practice declined faster than belief.|Religious practice was recorded in the survey.
traditional practice|adj + noun|a long-established way of doing something|Traditional practice survived alongside the new system.|Traditional practices were documented before they lapsed.
take precedence (over)|verb + noun|to be treated as more important|Safety takes precedence over speed.|The statute takes precedence over the guidance.
preceding section|adj + noun|the part just before|The preceding section set out the method.|As the preceding section showed, the data are incomplete.
preferential treatment|adj + noun|being favoured over others|No applicant received preferential treatment.|Allegations of preferential treatment prompted the audit.
preliminary result|adj + noun|an early, provisional finding|Preliminary results suggest a small effect.|These preliminary results should not be quoted.
present (a) summary|verb + noun|to give a short account|The chapter presents a summary of the findings.|A summary was presented to the funder first.
previous section|adj + noun|the part before this one|The previous section described the sample.|As the previous section showed, the data are thin.
previous study|adj + noun|an earlier piece of research|A previous study reported the opposite.|Previous studies used smaller samples.
previous work|adj + noun|research or writing done before|This extends previous work on the topic.|Previous work ignored the rural cases.
previously thought|adv + adj|believed before now|The practice is older than previously thought.|The effect is weaker than previously thought.
(be) primarily responsible (for)|adv + adj|chiefly accountable for something|The department is primarily responsible for inspections.|Transport is primarily responsible for the rise.
primary purpose|adj + noun|the chief aim|The primary purpose of the archive is preservation.|The primary purpose was never stated clearly.
primary reason|adj + noun|the chief cause|Cost was the primary reason given for leaving.|The primary reason for the delay was staffing.
primary research|adj + noun|research gathering new first-hand data|The thesis combines primary research with archival work.|Primary research was carried out in two regions.
primary responsibility|adj + noun|the chief duty|Primary responsibility rests with the employer.|Primary responsibility for the archive was never assigned.
primary task|adj + noun|the chief job|The primary task was to trace the missing files.|Teaching remains the primary task of the department.
prime time|adj + noun|the hours of highest audience|The programme ran in prime time.|Advertising in prime time costs several times more.
principal source|adj + noun|the chief origin of something|The parish register is the principal source.|Wages were the principal source of income.
underlying principle|adj + noun|the basic rule beneath something|The underlying principle is that the user pays.|Two underlying principles are never made explicit.
private sector|adj + noun|the part of the economy not state-owned|The private sector absorbed most of the growth.|Pay in the private sector grew faster.
private sphere|adj + noun|the realm of home and personal life|Work in the private sphere went unmeasured.|The distinction between public and private sphere is gendered.
related problem|adj + noun|a connected difficulty|A related problem is the cost of monitoring.|Related problems arose at the second site.
specific problem|adj + noun|a precisely defined difficulty|Each chapter addresses one specific problem.|The complaint concerned a specific problem with access.
technical problem|adj + noun|a difficulty with method or equipment|Technical problems delayed the launch.|The technical problems were solved within a week.
use (a) procedure|verb + noun|to employ a set of steps|Both laboratories used the same procedure.|The procedure used is described in the appendix.
slow process|adj + noun|something that takes a long time|Digitisation proved a slow process.|Cultural change is a slow process.
start (a) process|verb + noun|to begin a sequence of actions|The council started the process of consultation in May.|The process was started and then abandoned.
thinking process|noun + noun|the way someone reasons|Interviews revealed the thinking process behind the decision.|The task makes the thinking process visible.
thought process|noun + noun|the sequence of someone's reasoning|Participants described their thought process aloud.|The thought process is more revealing than the answer.
underlying process|adj + noun|the fundamental mechanism at work|The underlying process is not directly observable.|Two underlying processes may produce the same pattern.
professional qualification|adj + noun|a formal credential for an occupation|Professional qualifications were not recognised abroad.|The post requires a professional qualification.
professional staff|adj + noun|qualified employees in a profession|Professional staff were protected from the cuts.|Professional staff outnumber administrators.
professional standard|adj + noun|the level of conduct an occupation expects|The work fell below professional standards.|Professional standards are set by the regulator.
professional status|adj + noun|the standing of an occupation|Teaching lost professional status over the period.|Professional status brings autonomy as well as pay.
professional support|adj + noun|help from qualified people|Professional support was offered to affected staff.|Families received no professional support.
professional training|adj + noun|instruction for an occupation|Professional training lasts three years.|Professional training was the first budget cut.
professional work|adj + noun|work done in a profession|Professional work is increasingly audited.|Her professional work informs the account.
technological progress|adj + noun|advance in technology|Technological progress lowered the cost tenfold.|Technological progress was uneven across sectors.
prominent role|adj + noun|a notable part|The charity took a prominent role in the campaign.|Local media played a prominent role.
(be) properly understood|adv + adj|correctly grasped|The result must be properly understood before use.|The method is rarely properly understood.
similar properties|adj + noun|comparable characteristics|The two compounds have similar properties.|Materials with similar properties were grouped.
structural properties|adj + noun|characteristics of how something is built|The structural properties of the alloy were tested.|The structural properties of the network explain the spread.
(a) small proportion (of)|adj + noun|a small share|Only a small proportion of cases reach court.|A small proportion of the budget goes to prevention.
prove successful|verb + adj|to turn out to work|The pilot proved successful and was extended.|The approach proved successful in rural areas only.
prove useful|verb + adj|to turn out to be helpful|The pilot interviews proved useful.|The index proved useful beyond its intended purpose.
provide (a) service|verb + noun|to supply something people need|The charity provides a service the state abandoned.|Services were provided under contract.
provide (a) source|verb + noun|to supply an origin of something|The archive provides a source for local history.|Wages provided the only source of income.
provide (a) summary|verb + noun|to give a short account|The abstract provides a summary of the findings.|Each chapter provides a summary.
provide resources|verb + noun|to supply means or materials|The grant provided resources for two years.|No additional resources were provided.
provide support|verb + noun|to give help|Volunteers provided support with transport.|The scheme provides support for carers.
public sector|adj + noun|the state-owned part of the economy|Public sector pay was frozen for seven years.|The public sector employs a fifth of workers.
public sphere|adj + noun|the arena of public debate|The issue entered the public sphere late.|The public sphere has fragmented online.
public transport|adj + noun|shared transport services|Public transport was cut in rural areas first.|Access to public transport predicts employment.
public welfare|adj + noun|the wellbeing of the public|The measure was justified by public welfare.|Public welfare was weighed against private cost.
wider public|adj + noun|people in general beyond specialists|The findings never reached the wider public.|The exhibition was aimed at the wider public.
publish (a) report|verb + noun|to issue a formal document|The committee published its report in June.|The report was published without the annexes.
publish research|verb + noun|to make research public|Pressure to publish research distorts what is studied.|The team published research in three journals.
published research|adj + noun|research that has appeared in print|Published research overstates the effect.|Published research on the question is thin.
published work|adj + noun|writing that has appeared in print|Her published work spans four decades.|Only published work was counted.
specific purpose|adj + noun|a precisely defined aim|The fund was created for a specific purpose.|Data collected for a specific purpose may not be reused.
(for) research purposes|noun + noun|for the aims of study|The data were anonymised for research purposes.|Access is granted for research purposes only.
qualitative research|adj + noun|research using non-numerical evidence|Qualitative research captured what the survey missed.|Qualitative research requires its own quality criteria.
qualitative study|adj + noun|a piece of non-numerical research|A qualitative study followed the trial.|The qualitative study involved thirty interviews.
quantitative research|adj + noun|research using measurement and statistics|Quantitative research dominates the journal.|Quantitative research requires a larger sample.
quantitative result|adj + noun|a numerical finding|Quantitative results are given in Table 4.|The quantitative results confirmed the interviews.
quantitative study|adj + noun|a piece of numerical research|A quantitative study of 2,000 firms followed.|The quantitative study used administrative data.
small quantities (of)|adj + noun|little amounts|Small quantities of the drug were detected.|The compound is toxic even in small quantities.
vast quantities (of)|adj + noun|very large amounts|Vast quantities of data are discarded unread.|Vast quantities of paper records remain.
reflective question|adj + noun|a question prompting self-examination|Each chapter ends with reflective questions.|Reflective questions opened the interview.
related question|adj + noun|a connected matter|A related question is who pays for monitoring.|Related questions are taken up in Chapter 7.
specific question|adj + noun|a precisely defined matter|Each study addresses one specific question.|The specific question is whether the effect lasts.
racial stereotype|adj + noun|a fixed idea about a racial group|Racial stereotypes influenced the sentencing.|The coverage traded in racial stereotypes.
radical transformation|adj + noun|a complete change|The sector underwent radical transformation.|Radical transformation was promised but not delivered.
random sample|adj + noun|a sample chosen by chance|A random sample of 400 households was drawn.|A random sample avoids systematic bias.
random variable|adj + noun|a quantity whose value depends on chance|The outcome is modelled as a random variable.|Two random variables were assumed independent.
(be) randomly selected|adv + adj|chosen by chance|Participants were randomly selected from the register.|A randomly selected subset was checked by hand.
(a) vast range (of)|adj + noun|a very wide variety|The archive covers a vast range of material.|A vast range of methods has been tried.
(a) whole range (of)|adj + noun|a complete variety|The service covers a whole range of needs.|A whole range of explanations has been offered.
relatively rare|adv + adj|not common by comparison|The condition is relatively rare in this age group.|Such clauses are relatively rare now.
strong reaction|adj + noun|an intense response|The proposal provoked a strong reaction from staff.|A strong reaction followed publication.
widely read|adv + adj|read by many people|The book was widely read outside the discipline.|The report was widely read but little acted on.
(be) readily understood|adv + adj|easily grasped|The figure is readily understood without the text.|The guidance is not readily understood by lay readers.
underlying reason|adj + noun|the fundamental cause|The underlying reason is structural, not personal.|The underlying reasons were never examined.
receive treatment|verb + noun|to be given medical care|Patients received treatment within the hour.|Fewer than half received treatment at all.
well received|adv + adj|greeted favourably|The report was well received by practitioners.|The change was well received by staff.
recent research|adj + noun|study done lately|Recent research points the other way.|Recent research has focused on younger samples.
recent study|adj + noun|a piece of research done lately|A recent study questions the official estimate.|The recent study used administrative data.
recent survey|adj + noun|a questionnaire study done lately|A recent survey found widespread confusion.|The recent survey had a low response rate.
relatively recent|adv + adj|fairly new|The practice is relatively recent.|The category is a relatively recent invention.
reciprocal relationship|adj + noun|a connection where each affects the other|There is a reciprocal relationship between the two.|The reciprocal relationship complicates causal claims.
(be) widely recognized|adv + adj|acknowledged by many|It is widely recognized that the measure is crude.|Her contribution is now widely recognized.
recurrent theme|adj + noun|a subject that keeps coming up|Isolation was a recurrent theme in the interviews.|Mistrust is a recurrent theme of the period.
reduce stress|verb + noun|to lessen mental strain|Predictable hours reduce stress more than wellness apps.|The redesign reduced stress for front-line staff.
(be) significantly reduced|adv + adj|made measurably smaller|Waiting times were significantly reduced.|Risk was significantly reduced by early treatment.
significant reduction|adj + noun|a decrease large enough to matter|There was a significant reduction in referrals.|No significant reduction in cost was achieved.
specific reference|adj + noun|a precise mention|The policy makes specific reference to carers.|No specific reference to funding appears.
social reform|adj + noun|change to social arrangements|Social reform followed the wartime settlement.|Social reform was blocked in the upper house.
welfare reform|noun + noun|change to the benefits system|Welfare reform reduced entitlement for younger claimants.|Welfare reform was introduced in stages.
(be) widely regarded (as)|adv + adj|generally considered to be something|The 1972 report is widely regarded as the turning point.|She is widely regarded as the founder of the field.
regional variation|adj + noun|differences between areas|Regional variation in provision is stark.|Regional variation narrowed over the period.
related topic|adj + noun|a connected subject|Related topics are covered in Chapter 8.|The seminar ranged across related topics.
(be) strongly related (to)|adv + adj|closely connected with something|Attainment is strongly related to family income.|Dropout is strongly related to travel distance.
significant relationship|adj + noun|a statistically meaningful connection|No significant relationship was found.|A significant relationship emerged at follow-up.
social relationship|adj + noun|a connection between people in society|Social relationships predict health better than income.|The illness strained social relationships.
special relationship|adj + noun|a uniquely close connection|The two countries claim a special relationship.|A special relationship developed between the departments.
strong relationship|adj + noun|a close connection|There is a strong relationship between literacy and income.|The strong relationship weakens after adjustment.
symbiotic relationship|adj + noun|a connection where both sides benefit|The two species have a symbiotic relationship.|Press and politicians exist in a symbiotic relationship.
relative status|adj + noun|standing compared with others|The relative status of the two professions has reversed.|Relative status matters more than absolute income.
relatively simple|adv + adj|fairly straightforward|The calculation is relatively simple.|A relatively simple change would fix it.
relatively stable|adv + adj|not changing much|The ratio has remained relatively stable.|Employment was relatively stable through the period.
relatively straightforward|adv + adj|fairly easy|The procedure is relatively straightforward.|Replication would be relatively straightforward.
remain stable|verb + adj|to stay unchanged|The overall rate remained stable.|Prices remained stable for a decade.
remarkably similar|adv + adj|alike to a surprising degree|The two accounts are remarkably similar.|Results were remarkably similar across countries.
schematic representation|adj + noun|a simplified diagram|Figure 1 is a schematic representation of the process.|The schematic representation omits feedback loops.
visual representation|adj + noun|a picture or diagram of something|A visual representation made the trend obvious.|Visual representation was preferred to tables.
require resources|verb + noun|to need money, staff or materials|Monitoring requires resources the service lacks.|The design requires resources beyond the grant.
research topic|noun + noun|a subject for study|The research topic was chosen by the funder.|Research topics shifted towards applied questions.
scholarly research|adj + noun|academic investigation|Scholarly research rarely reaches practitioners.|Scholarly research on the question began late.
scientific research|adj + noun|systematic scientific study|Scientific research funding fell in real terms.|Scientific research informed the final guidance.
traditional research|adj + noun|research following established methods|Traditional research methods were supplemented with digital ones.|Traditional research designs cannot answer this.
undertake research|verb + noun|to carry out study|The department undertook research in four countries.|Research was undertaken without external funding.
scarce resources|adj + noun|limited money, staff or materials|Scarce resources were spread across too many sites.|Rationing scarce resources is unavoidable.
sufficient resources|adj + noun|enough money, staff or materials|The team lacked sufficient resources to follow up.|Sufficient resources were released only after the inquiry.
use resources|verb + noun|to employ money, staff or materials|Few schools used the resources effectively.|Resources were used to recruit rather than retain.
valuable resources|adj + noun|means worth a great deal|Staff time is the most valuable resource here.|Valuable resources were lost when the unit closed.
social responsibility|adj + noun|a duty towards society|Corporate social responsibility reporting became routine.|Social responsibility was invoked but rarely costed.
take responsibility|verb + noun|to accept a duty or blame|No department took responsibility for the delay.|The agency took responsibility for inspections in 2003.
socially responsible|adv + adj|acting with regard for society|The fund claims to invest in socially responsible firms.|Socially responsible practice costs money in the short term.
similar result|adj + noun|a comparable finding|A similar result was obtained in the Dutch sample.|Both methods give a similar result.
review (a) study|verb + noun|to examine a piece of research critically|Two reviewers reviewed each study independently.|The study was reviewed before publication.
revised version|adj + noun|an updated form of something|The revised version corrects two errors.|A revised version was circulated in March.
rich source|adj + noun|an origin yielding a great deal|The diaries are a rich source for social history.|Administrative records are a rich source of data.
significant role|adj + noun|an important part|Housing plays a significant role in health outcomes.|Chance played a significant role in the discovery.
take (a) role (in)|verb + noun|to take part in something|Local staff took a leading role in recruitment.|Parents took no role in the design.
take on (the) role (of, as)|verb + noun|to accept a new function|She took on the role of chair in 2018.|The eldest child often takes on the role of carer.
take up (the) role (of, as)|verb + noun|to begin a function|He took up the role of director last year.|The agency took up the role of regulator in 2001.
vital role|adj + noun|an essential part|Carers play a vital role in recovery.|Local papers had a vital role in scrutiny.
rural society|adj + noun|life and structure in the countryside|Rural society changed faster than the statistics show.|The book is a study of rural society before 1914.
safe sex|adj + noun|sexual activity with reduced risk of infection|Campaigns promoting safe sex began in the 1980s.|Knowledge of safe sex did not translate into practice.
scholarly work|adj + noun|academic writing or research|Her scholarly work spans four decades.|The scholarly work on this is surprisingly thin.
scientific theory|adj + noun|a tested explanatory framework in science|A scientific theory must make testable predictions.|The scientific theory was revised twice.
test score|noun + noun|the mark achieved on a test|Test scores rose while real attainment did not.|Test scores were standardised by year group.
secondary source|adj + noun|an account written by someone not present|Historians distinguish primary from secondary sources.|The chapter relies too heavily on secondary sources.
service sector|noun + noun|the part of the economy providing services|The service sector overtook manufacturing in the 1980s.|The service sector absorbed the displaced workers.
state sector|noun + noun|the part of the economy run by the state|The state sector employs a fifth of workers.|Pay in the state sector lagged behind.
seminal study|adj + noun|a highly influential early piece of research|The seminal study appeared in 1961.|Seminal studies used methods we would now reject.
seminal work|adj + noun|a highly influential early piece of scholarship|Her seminal work founded the field.|The seminal work is rarely read in the original.
specific sense|adj + noun|a precise meaning|The word is used here in a specific sense.|In this specific sense the claim is true.
set (a) target|verb + noun|to fix a goal|The department set a target of halving waiting times.|Targets were set without consulting staff.
social setting|adj + noun|the social situation something happens in|Behaviour varies with the social setting.|The task was tested in a natural social setting.
sexual violence|adj + noun|violence of a sexual nature|Sexual violence remains heavily under-reported.|The inquiry examined sexual violence in conflict.
shared values|adj + noun|beliefs held in common|Shared values held the coalition together.|The organisation claims shared values it does not practise.
widely shared|adv + adj|held in common by many|The assumption is widely shared but untested.|The benefits were not widely shared.
significant shift|adj + noun|a large change in direction|A significant shift in policy followed the report.|The data show a significant shift after 2010.
show (a) tendency|verb + noun|to display an inclination|Respondents show a tendency to overstate reading.|The series shows a tendency to revert to the mean.
show (a) trend|verb + noun|to display a direction of change|The data show a clear downward trend.|The figures show no trend over the period.
show variation|verb + noun|to display differences|The samples show considerable variation.|Practice shows wide variation between sites.
sign (a) treaty|verb + noun|to formally agree an international pact|Both states signed the treaty in 1998.|The treaty was signed but never ratified.
social significance|adj + noun|importance for society|The finding has social significance beyond the clinic.|The ritual's social significance outlasted its religious one.
statistical significance|adj + noun|the unlikelihood of a result being chance|Statistical significance is not practical importance.|Statistical significance depends heavily on sample size.
significant variation|adj + noun|differences large enough to matter|There is significant variation between regions.|No significant variation was found by sex.
vary significantly|verb + adv|to differ to a measurable degree|Rates vary significantly between the two hospitals.|Results did not vary significantly by age.
similar situation|adj + noun|a comparable state of affairs|A similar situation arose in 2008.|Other councils face a similar situation.
simplified version|adj + noun|an easier or reduced form|A simplified version of the model is given first.|The simplified version omits the feedback terms.
single source|adj + noun|one origin alone|The claim rests on a single source.|No single source covers the whole period.
single variable|adj + noun|one factor alone|No single variable explains the difference.|The model was run with a single variable first.
technical skill|adj + noun|a practical specialist ability|Technical skills were learned on the job.|The role demands technical skill rather than management.
transferable skill|adj + noun|an ability useful in many settings|The degree develops transferable skills.|Transferable skills are easier to claim than to evidence.
skilled worker|adj + noun|an employee with specialist training|Skilled workers were least affected by the closures.|Skilled workers migrated towards the cities.
unskilled worker|adj + noun|an employee without specialist training|Unskilled workers bore the brunt of automation.|Unskilled workers were recruited locally.
social status|adj + noun|a person's standing in society|Social status was measured by occupation.|Social status shapes access to the professions.
social structure|adj + noun|how a society is organised|The social structure survived the economic change.|The chapter maps the social structure of the village.
social theory|adj + noun|theoretical accounts of society|The thesis is grounded in social theory.|Social theory supplies the vocabulary here.
social transformation|adj + noun|deep change in society|The period saw rapid social transformation.|Social transformation outpaced the institutions.
social trend|adj + noun|a direction of change in society|The report tracks long-run social trends.|The social trend began before the policy.
social welfare|adj + noun|the wellbeing of people in society, or state provision for it|Social welfare spending rose as a share of output.|The reform narrowed social welfare entitlement.
traditional society|adj + noun|a society organised along long-established lines|Traditional society was less static than the term implies.|The study contrasts traditional and industrial society.
western society|adj + noun|the societies of Europe and North America|Ageing affects every western society.|The claim holds only for western societies.
wider society|adj + noun|society beyond the group in question|The findings matter for wider society.|The institution reflects the values of wider society.
socioeconomic status|adj + noun|a person's social and economic standing|Socioeconomic status predicts outcomes more than genetics.|Socioeconomic status was derived from postcode.
solar system|adj + noun|the sun and the bodies orbiting it|The probe left the solar system in 2012.|Models of the solar system changed with better optics.
use (a) source|verb + noun|to draw on an origin of information|Both studies use the same source.|The source used is named in the footnote.
useful source|adj + noun|a helpful origin of information|Court records are a useful source for this period.|The register proved a useful source of addresses.
sovereign state|adj + noun|an independent country|The territory became a sovereign state in 1962.|Sovereign states retain the final say.
use sparingly|verb + adv|to employ only a little|Technical terms should be used sparingly.|The drug is used sparingly in children.
special status|adj + noun|a distinctive recognised position|The language was granted special status.|The site has special status under the act.
specific type|adj + noun|a particular kind|This specific type of error is easy to miss.|The clinic treats one specific type of injury.
written statement|adj + noun|a declaration in writing|A written statement was submitted to the inquiry.|Written statements were taken from all witnesses.
statistical technique|adj + noun|a method of statistical analysis|Newer statistical techniques handle missing data better.|The statistical techniques are described in Section 3.
statistical test|adj + noun|a formal procedure for testing a hypothesis|The statistical test assumes equal variances.|Three statistical tests gave the same conclusion.
use statistics|verb + noun|to employ numerical data or methods|The report uses statistics selectively.|Statistics were used to justify a decision already made.
teaching strategy|noun + noun|a planned approach to instruction|The teaching strategy was adapted for online delivery.|Teaching strategies varied widely between tutors.
use (a) strategy|verb + noun|to employ a plan|Both teams used the same strategy.|The strategy used in the pilot was abandoned.
strong tendency|adj + noun|a marked inclination|There is a strong tendency to publish positive results.|The series shows a strong tendency to cluster.
strongly suggest|adv + verb|to point clearly towards a conclusion|The findings strongly suggest a reporting effect.|The evidence strongly suggests the opposite.
underlying structure|adj + noun|the fundamental arrangement beneath something|The underlying structure of the argument is simple.|Factor analysis revealed the underlying structure.
subsequent study|adj + noun|research done afterwards|A subsequent study failed to replicate the result.|Subsequent studies used larger samples.
systematic study|adj + noun|research following a consistent method|No systematic study of the practice exists.|A systematic study of all 400 cases followed.
theoretical study|adj + noun|research working from theory rather than data|The paper is a theoretical study with no new data.|Theoretical studies preceded the experimental work.
subsequent work|adj + noun|research or writing done afterwards|Subsequent work confirmed the early findings.|Her subsequent work moved in another direction.
useful summary|adj + noun|a helpful short account|The appendix gives a useful summary of the method.|The table is a useful summary of a complex literature.
technical support|adj + noun|expert practical help|Technical support was provided by the manufacturer.|Technical support was withdrawn after the first year.
widespread support|adj + noun|backing from many people|The proposal attracted widespread support.|Widespread support did not survive the detail.
transport system|noun + noun|the network of transport in an area|The transport system was built for a smaller city.|Investment in the transport system was deferred.
technical term|adj + noun|a word with a precise specialist meaning|Technical terms are defined in the glossary.|The technical term has drifted into everyday use.
use (a) technique|verb + noun|to employ a practical procedure|Both laboratories used the same technique.|The technique used is described in the appendix.
test (a) theory|verb + noun|to check a theory against evidence|The experiment was designed to test the theory.|No data exist that could test the theory.
theoretical understanding|adj + noun|grasp of the theory behind something|Theoretical understanding outran the evidence.|The course builds theoretical understanding before practice.
theoretical work|adj + noun|work developing theory|Theoretical work preceded the first experiments.|Her theoretical work is cited more than her data.
use (a) theory|verb + noun|to apply a theoretical account|The chapter uses the theory to read the case.|The same theory is used in two different fields.
useful tool|adj + noun|a helpful means or instrument|Mapping proved a useful tool for communication.|The index is a useful tool for comparison.
western tradition|adj + noun|the inherited culture of the West|The argument belongs to a long western tradition.|The western tradition is less unified than it looks.
traditional value|adj + noun|a long-established belief about what matters|Traditional values were invoked on both sides.|Traditional values changed more slowly than practice.
traditional view|adj + noun|the long-established opinion|The traditional view is challenged by these data.|On the traditional view, the author is sovereign.
undergo transformation|verb + noun|to be deeply changed|The sector underwent transformation in a decade.|The archive underwent transformation into a digital resource.
undertake work|verb + noun|to begin and carry out a task|The team undertook work in four countries.|No further work was undertaken after the grant ended.
widespread use|adj + noun|being used in many places|The widespread use of the scale makes comparison easy.|Widespread use preceded any evidence of benefit.
wide variation|adj + noun|a lot of difference between cases|There is wide variation in how the rule is applied.|Wide variation between sites was found.
vary widely|verb + adv|to differ a great deal|Results vary widely between studies.|Rainfall varies widely across the region.
part of the|fragment|frames a portion of something larger just named|Wages are only part of the cost of employing someone.|This chapter forms part of the wider project.
the part of the|fragment|picks out one section of a specified whole|The part of the archive that survives dates from 1890.|Only the part of the sample interviewed twice is used here.
part of a|fragment|frames something as one element of a larger whole|The interview formed part of a longer assessment.|Each school was part of a regional consortium.
this is a|fragment|opens a statement identifying what something is|This is a descriptive study, not a causal one.|This is a question the data cannot settle.
this is an|fragment|opens an identification before a vowel sound|This is an unusual pattern for the period.|This is an argument about method, not about findings.
it is not|fragment|opens a denial about the matter in hand|It is not the sample size that is the problem.|It is not clear which definition was used.
is not a|fragment|denies that something belongs to a category|Correlation is not a demonstration of cause.|This is not a representative sample.
is not the|fragment|denies that something is the specified thing|Cost is not the only consideration.|The 2011 figure is not the one usually quoted.
that there is|fragment|introduces a reported claim that something exists|The evidence suggests that there is a threshold effect.|We assume that there is no reporting bias.
that there is a|fragment|introduces a reported claim about one thing existing|The review concludes that there is a clear link.|It is widely held that there is a trade-off here.
that there are|fragment|introduces a reported claim that several things exist|The data show that there are two distinct clusters.|It is accepted that there are limits to self-report.
that there is no|fragment|introduces a reported claim that something is absent|The audit found that there is no record of the decision.|We conclude that there is no seasonal pattern.
is that the|fragment|links a statement to the claim that follows|The difficulty is that the samples are not comparable.|The assumption is that the groups started equal.
is that it|fragment|links a statement to a claim about the thing itself|The advantage is that it costs almost nothing.|The weakness is that it relies on recall.
is that it is|fragment|links a statement to a claim about what something is|The objection is that it is circular.|The merit of the design is that it is cheap to repeat.
is that there|fragment|links a statement to a claim about existence|The problem is that there are too few cases.|The finding is that there is no difference by sex.
is for the|fragment|states who or what something is intended for|The allowance is for the carer, not the patient.|This chapter is for the general reader.
in which the|fragment|opens a relative clause specifying a situation|Cases in which the record is incomplete were excluded.|The period in which the reform took effect was short.
such a way|fragment|part of a phrase describing manner|Items were ordered in such a way as to avoid priming.|The fund is structured in such a way that it cannot be spent quickly.
this would be|fragment|introduces a hypothetical consequence|If the estimate is right, this would be the largest fall recorded.|This would be a reasonable approach with more data.
a and b|fragment|names two items generically, as in a diagram or formula|Samples A and B were prepared identically.|Where A and B differ, the later reading is used.
b and c|fragment|names two further items generically|Conditions B and C produced similar results.|Groups B and C were merged for the analysis.
view of the|fragment|part of a phrase naming a perspective or an opinion of something|The view of the committee was never recorded.|This reading rests on a narrow view of the evidence.
of view of|fragment|part of the phrase "point of view of"|The scheme looks different from the point of view of the employer.|From the point of view of the patient, the delay is what matters.
from the point|fragment|the opening of a phrase naming a perspective|From the point of view of cost, the second option wins.|From the point of view of theory, the result is unsurprising.
but this is|fragment|concedes a point before qualifying it|The effect is statistically significant, but this is not the same as important.|Attendance rose, but this is explained by the reminder letters.
if this is|fragment|opens a conditional about the case in hand|If this is correct, the earlier figures must be revised.|If this is a reporting artefact, the trend disappears.
that we are|fragment|introduces a reported claim about the writers|The data suggest that we are measuring two things at once.|It does not follow that we are dealing with a single cause.
which is the|fragment|opens a relative clause identifying something|The 1911 census, which is the fullest, lists three occupants.|Attendance, which is the only outcome recorded, rose slightly.
here is that|fragment|points to the key claim in what follows|The point here is that the two measures disagree.|What matters here is that consent was never sought.
of the system|fragment|names a property or part of a system|The weakness of the system is its reliance on manual entry.|The cost of the system was never fully disclosed.
of the second|fragment|refers to the latter of two things|The results of the second trial were not published.|The design of the second study corrected these faults.
of the fact|fragment|part of a phrase pointing at an established fact|This is a consequence of the fact that records were kept locally.|Account must be taken of the fact that the sample is small.
and in the|fragment|adds a further place or time to a list|Rates fell in the north and in the west.|The practice appears in the ledgers and in the correspondence.
and the second|fragment|introduces the latter of two items|The first reason is cost and the second is time.|One trial used placebo and the second used usual care.
and the same|fragment|adds that something matches what preceded|Prices rose in 2008 and the same happened in 2011.|The error appears in the table and the same figure recurs in the text.
the first is|fragment|introduces the first of several items|Two objections arise. The first is methodological.|Three themes emerged; the first is isolation.
that in the|fragment|introduces a reported claim about a period or place|The report notes that in the first year uptake was low.|It is striking that in the rural sample the pattern reverses.
that in a|fragment|introduces a reported claim about a kind of case|The authors note that in a small sample this test is unreliable.|It is often forgotten that in a voluntary scheme the keenest join first.
out that the|fragment|part of a phrase reporting what someone showed|The review points out that the samples differ.|It turned out that the records had been duplicated.
they do not|fragment|denies something of a group just named|The figures are useful, but they do not measure quality.|These studies agree on the trend; they do not agree on the cause.
they did not|fragment|denies something of a group in the past|Staff were consulted, but they did not see the final version.|The authors reported the means; they did not report the spread.
we do not|fragment|denies something of the writers|We do not claim that the effect is causal.|We do not have data for the earliest period.
the united kingdom|proper noun|the state comprising Great Britain and Northern Ireland|The survey covers the United Kingdom as a whole.|Rates in the United Kingdom are among the highest in Europe.
be able to|spoken frame|to have the capacity or chance to do something|You should be able to see the difference on the second slide.|We weren't able to get hold of the raw data.
blah blah blah|lecture filler|stands in for words the speaker does not bother to say|The introduction says the usual thing, blah blah blah, and then gets to the point.|You write the preamble, blah blah blah, and the examiner skips it.
you know what I mean|lecture filler|checks that the listener is following|It's a sort of threshold effect, you know what I mean.|They're measuring intention, not behaviour, you know what I mean.
know what I mean|lecture filler|shortened check that the listener follows|It's circular, know what I mean, the premise assumes the conclusion.|Too clean, know what I mean, real data never look like that.
you know what|lecture filler|flags a point the speaker is about to make|You know what, let's just drop that variable.|And you know what, the pattern holds in the second sample too.
you know what i|lecture filler|the start of a check or an aside|You know what I think the real problem is here.|You know what I'd do, I'd split the sample by year.
see what I'm saying|lecture filler|checks that the listener has grasped the point|The two definitions aren't equivalent, see what I'm saying.|It's the denominator that changed, see what I'm saying.
what I'm saying|lecture frame|refers back to the speaker's own point|What I'm saying is that the sample selects itself.|That's not what I'm saying at all.
what I'm talking about|lecture frame|identifies the speaker's topic|This is exactly what I'm talking about when I say reporting bias.|What I'm talking about here is the written register.
you can see|lecture frame|directs attention to visible evidence|You can see the two lines cross around 1995.|Here you can see what happens when we drop the outliers.
you can see that|lecture frame|points out something in the evidence|You can see that the effect disappears after adjustment.|From the table you can see that the groups differ at baseline.
as you can see|lecture frame|refers the listener to what is displayed|As you can see, the trend reverses after 2010.|As you can see, most of the mass is in the lower tail.
you can look at|lecture frame|offers the listener a way of examining something|You can look at it either as a cost or as an investment.|You can look at the raw counts, but the rate is more useful.
trying to figure out|lecture frame|describes the problem being worked on|We're trying to figure out why the rural cases behave differently.|I spent a week trying to figure out where the duplicates came from.
to figure out|lecture frame|to work something out|The point of the exercise is to figure out which assumption fails.|We need to figure out what the denominator actually counts.
to figure out what|lecture frame|to work out the identity of something|The task is to figure out what drives the difference.|We're trying to figure out what the respondents understood by the question.
a little bit about|lecture frame|introduces a short treatment of a topic|Let me say a little bit about how the sample was drawn.|I want to talk a little bit about the limitations.
little bit about|lecture frame|part of a phrase introducing a short treatment|I'll say a little bit about the method before the results.|We heard a little bit about this last week.
talk a little bit|lecture frame|to discuss something briefly|I want to talk a little bit about why that matters.|Let's talk a little bit about what the numbers don't show.
does that make sense|lecture check|asks whether the listener has understood|We weight by population rather than by area. Does that make sense?|Does that make sense, or should I take it again more slowly?
what does that mean|lecture check|asks for or introduces an explanation|The coefficient is negative. What does that mean in practice?|What does that mean for the way we read the earlier studies?
what do you mean|lecture check|asks for clarification|What do you mean by representative here?|When you say bias, what do you mean exactly?
the university of michigan|proper noun|the US university whose corpus the spoken list came from|The recordings were made at the University of Michigan.|The corpus was compiled at the University of Michigan in the 1990s.
university of michigan|proper noun|the institution named, without the article|Michigan's spoken corpus underpins the AFL spoken list.|She did her doctorate at the University of Michigan.
at the university of|fragment|the opening of a phrase naming an institution|The study was carried out at the University of Leeds.|He taught at the University of Chicago for thirty years.
in ann arbor|proper noun|in the Michigan city where the corpus was recorded|The seminars were recorded in Ann Arbor.|The archive is held in Ann Arbor.
for those of you who|lecture frame|addresses part of the audience|For those of you who missed last week, here's the short version.|For those of you who work with survey data, this will be familiar.
those of you who|lecture frame|picks out part of the audience|Those of you who have done statistics will recognise this.|Those of you who are new should read Chapter 2 first.
do you want me to|lecture check|offers to do something for the listener|Do you want me to go through the derivation again?|Do you want me to put the table on the board?
do you want me|lecture check|the opening of an offer to the listener|Do you want me to send round the slides?|Do you want me to start with the method or the findings?
you want me to|lecture check|part of an offer or request|Did you want me to cover the second dataset today?|If you want me to explain the weighting, say so.
thank you very much|lecture closing|a formal expression of thanks|Thank you very much, and I'm happy to take questions.|Thank you very much for a very clear presentation.
look at the|lecture frame|directs attention to something|Look at the second column rather than the total.|If you look at the shape of the distribution, it's bimodal.
to look at|lecture frame|to examine something|It's worth taking a moment to look at the outliers.|One way to look at this is as a selection problem.
you look at|lecture frame|part of a phrase directing attention|When you look at the raw data the pattern is weaker.|If you look at it per head, the ranking reverses.
if you look at|lecture frame|invites the listener to examine something|If you look at the final row, the totals don't match.|If you look at Table 3, the effect is concentrated in one group.
if you look at the|lecture frame|invites examination of something specific|If you look at the rural subsample, the sign flips.|If you look at the 1990s, the series is much noisier.
if you look|lecture frame|invites the listener to examine something|If you look, the two series diverge after the reform.|If you look carefully, there's a gap in the record.
you look at the|lecture frame|part of a phrase directing attention to something|When you look at the detail, the summary is misleading.|Once you look at the subgroups, the average stops meaning much.
when you look at|lecture frame|introduces what emerges on inspection|When you look at the age profile, the difference makes sense.|When you look at it that way, the cost is modest.
let's look at|lecture frame|proposes examining something together|Let's look at what happens when we drop the first year.|Let's look at the two cases side by side.
take a look at|lecture frame|proposes a brief examination|Take a look at the footnote on page nine.|Let's take a look at how the question was worded.
we're gonna talk about|lecture frame|announces the topic, in speech|Today we're gonna talk about measurement error.|Next week we're gonna talk about sampling.
we'll talk about|lecture frame|announces a topic for later|We'll talk about the exceptions in the second half.|We'll talk about replication next time.
to talk about|lecture frame|to discuss something|I want to talk about why the definition matters.|There's a lot to talk about in this one table.
we're talking about|lecture frame|identifies the current topic|Remember we're talking about rates, not counts.|We're talking about a difference of two percentage points.
we were talking about|lecture frame|refers back to an earlier topic|Last week we were talking about selection into the sample.|We were talking about this before the break.
we talked about|lecture frame|refers back to something covered|We talked about this when we did sampling.|As we talked about earlier, the denominator changed.
we've talked about|lecture frame|refers back to what has been covered|We've talked about bias; now let's talk about precision.|We've talked about the method enough. Let's see the results.
I was talking about|lecture frame|refers back to the speaker's earlier topic|This is the effect I was talking about earlier.|I was talking about the written corpus, not the spoken one.
you're talking about|lecture frame|identifies what the listener means|If you're talking about the 2011 figures, those were revised.|You're talking about a different definition of poverty.
and this is|lecture frame|introduces what is being shown|And this is where the two methods disagree.|And this is the figure that gets quoted everywhere.
so this is|lecture frame|presents what is on display|So this is the raw series before smoothing.|So this is roughly what the model predicts.
no no no no|spoken emphasis|an emphatic repeated refusal or correction|No no no no, that's the wrong column.|No no no no, we excluded those cases.
no no no|spoken emphasis|an emphatic refusal or correction|No no no, the denominator is households, not people.|No no no, that was the pilot, not the main study.
yes yes yes|spoken emphasis|emphatic agreement|Yes yes yes, that's exactly the problem.|Yes yes yes, and that's why we reweighted.
oh my god|spoken reaction|an exclamation of surprise or dismay|Oh my god, the file's been overwritten.|Oh my god, look at the size of that residual.
at the end of|lecture frame|at the finish of a period or thing|At the end of the session we'll do questions.|At the end of the first year, half had dropped out.
at the end|lecture frame|at the finishing point|There's a summary at the end.|We'll come back to this at the end.
the end of|fragment|the final part of something|The end of the series is unreliable.|By the end of the decade the practice had gone.
the end of the|fragment|the final part of a specified thing|The end of the interview was not recorded.|At the end of the chapter there's a reading list.
it turns out that|lecture frame|introduces something discovered, often unexpected|It turns out that the two registers use different definitions.|It turns out that most of the gap is compositional.
it turns out|lecture frame|introduces an unexpected finding|It turns out the effect was an artefact of rounding.|It turns out nobody had checked the denominators.
you need to|lecture frame|states what the listener must do|You need to weight before you compare.|You need to read the footnote before quoting that number.
we need to|lecture frame|states what must be done|We need to be careful with the word significant here.|We need to separate the two questions.
you have a|lecture frame|posits something the listener has|Suppose you have a sample of a thousand.|If you have a skewed distribution, use the median.
if you have|lecture frame|opens a condition about the listener|If you have missing values, say how you handled them.|If you have access to the register, use it.
might be able to|hedging|possibly having the capacity to do something|We might be able to recover the earlier files.|You might be able to see a second peak there.
gonna be able to|spoken hedging|will have the capacity to, in speech|We're not gonna be able to answer that with this design.|You're gonna be able to replicate most of this.
you want to|lecture frame|states what the listener should do|You want to check the denominator first.|You want to be careful about reading causation into that.
if you want to|lecture frame|opens a condition about the listener's aim|If you want to compare across years, you need constant prices.|If you want to publish, preregister.
if you want|lecture frame|opens a condition about what the listener wishes|If you want, I can send the full table.|If you want the detail, it's in the appendix.
if you wanted to|lecture frame|opens a hypothetical about the listener's aim|If you wanted to test that, you'd need a control group.|If you wanted to be strict, you'd drop those cases.
to do with|lecture frame|concerning or connected to|The problem is to do with how cases are counted.|Most of it is to do with the funding formula.
nothing to do with|lecture frame|entirely unconnected with|The fall has nothing to do with the policy.|That's nothing to do with the sampling.
has to do with|lecture frame|concerns or is connected with|The discrepancy has to do with the reporting year.|It has to do with who is counted as a household.
the same thing|lecture frame|an identical matter|Reliability and validity are not the same thing.|Two groups did the same thing and got different answers.
a kind of|lecture frame|a sort of, often softening a term|It's a kind of natural experiment.|There's a kind of ceiling effect going on.
all sorts of|quantification|many different kinds of|There are all sorts of reasons for non-response.|The archive contains all sorts of material.
so if you|lecture frame|opens a condition and its consequence|So if you drop the outliers, the effect halves.|So if you weight by population, the ranking changes.
and then you|lecture frame|introduces the next step|And then you standardise each column.|And then you compare against the baseline year.
come up with|lecture frame|to produce an idea or answer|We need to come up with a better measure.|They came up with three competing explanations.
come up with a|lecture frame|to produce a particular idea or answer|Try to come up with a testable prediction.|She came up with a neat way round the problem.
in order to get|purpose|so as to obtain something|In order to get a usable sample we relaxed the criteria.|In order to get consent we simplified the form.
it doesn't matter|lecture frame|says something makes no difference|It doesn't matter which base year you use.|It doesn't matter for the conclusion, but it changes the figure.
I just wanted to|lecture frame|softens the speaker's purpose|I just wanted to flag one problem with that reading.|I just wanted to check we're using the same definition.
I was gonna say|lecture frame|introduces a point the speaker had in mind|I was gonna say the same thing about the second column.|I was gonna say, that's a selection effect.
the best way to|lecture frame|the most effective means of doing something|The best way to see it is to plot the residuals.|The best way to handle this is to report both estimates.
let me just|lecture frame|introduces a brief action by the speaker|Let me just put the table back up.|Let me just check the figure before I commit to it.
has to be|lecture frame|must be the case|There has to be a reason the series breaks in 1981.|The comparison has to be like for like.
it has to be|lecture frame|states a necessity about something|It has to be the same denominator in both years.|If it's a rate, it has to be per head.
there was a|fragment|states that something existed or happened|There was a change in the recording rules that year.|There was a lot of missing data in the first wave.
I have a question|seminar frame|introduces a question from the floor|I have a question about the weighting.|I have a question, if there's time.
keep in mind|lecture frame|asks the listener to remember something|Keep in mind that this is a volunteer sample.|Keep in mind the figures are provisional.
it looks like|hedging|appears to be the case|It looks like the effect is concentrated in one region.|It looks like we're measuring two things at once.
to make sure|purpose|so as to be certain|We ran it twice to make sure the result was stable.|Check the units to make sure they match.
make sure that|purpose|to ensure something is so|Make sure that the denominators are comparable.|We made sure that no one could be identified.
end up with|lecture frame|to finish with a particular result|You end up with a much smaller usable sample.|Drop those cases and you end up with 300.
and so on and so|lecture filler|indicates a list continues, in speech|Age, income, education and so on and so forth.|They asked about housing, work and so on and so on.
you might want to|lecture frame|a softened suggestion to the listener|You might want to check the units before you compare.|You might want to look at the appendix for the full table.
and you can see|lecture frame|adds something visible in the evidence|And you can see the gap widening after 2008.|And you can see that the two groups start from different points.
and you can|lecture frame|adds something the listener is able to do|And you can read the same pattern off the second chart.|And you can get the dataset from the repository.
came up with|lecture frame|produced an idea or answer|They came up with three competing explanations.|We came up with a workaround for the missing years.
doesn't have to be|hedging|is not necessarily so|It doesn't have to be a causal story.|The sample doesn't have to be huge to be useful.
I mean if you|lecture frame|clarifies with a condition|I mean if you weight it properly the difference goes.|I mean if you're comparing across countries you need PPP.
I mean if|lecture frame|opens a clarifying condition|I mean if the records are incomplete, nothing follows.|I mean if that's the definition, the figure makes sense.
what I mean|lecture frame|refers to the speaker's intended sense|What I mean is that the categories overlap.|That isn't what I mean by representative.
you know what I'm|lecture filler|the start of a comprehension check|You know what I'm getting at with the denominator.|You know what I'm saying about the selection problem.
do you know what|lecture check|asks whether the listener knows something|Do you know what the response rate actually was?|Do you know what they counted as a household?
how do you know|lecture check|asks on what basis something is claimed|How do you know the two samples are comparable?|How do you know that isn't a reporting effect?
you've got a|lecture frame|posits something the listener has|You've got a classic selection problem here.|If you've got a skewed distribution, don't use the mean.
if you've got|lecture frame|opens a condition about what the listener has|If you've got panel data, use fixed effects.|If you've got the raw files, check the coding.
gonna talk about|lecture frame|announces a topic, in speech|Today I'm gonna talk about measurement error.|We're gonna talk about sampling after the break.
we're gonna talk|lecture frame|announces what will be discussed|We're gonna talk through the method first.|Next week we're gonna talk about replication.
wanna talk about|lecture frame|wants to discuss something, in speech|I wanna talk about why the definition matters.|I don't wanna talk about the politics today.
talk about the|lecture frame|to discuss a specified thing|Let's talk about the limitations before the findings.|I want to talk about the second dataset.
we talk about|lecture frame|refers to how something is discussed|When we talk about poverty we mean relative poverty.|We talk about bias as if it were one thing.
talking about the|lecture frame|discussing a specified thing|We're talking about the written corpus, not the spoken.|She was talking about the pilot, not the main trial.
was talking about|lecture frame|refers back to an earlier topic|That's the effect he was talking about.|I was talking about the rural subsample.
I'm talking about|lecture frame|identifies the speaker's topic|I'm talking about rates, not raw counts.|When I say bias, I'm talking about selection.
what you're saying|lecture frame|restates the listener's point|So what you're saying is the denominator changed.|If what you're saying is right, the series is broken.
how many of you|seminar check|asks how much of the audience applies|How many of you have used this dataset?|How many of you read the appendix?
look at it|lecture frame|to examine something|Look at it as a rate rather than a count.|If you look at it over ten years, the trend is flat.
piece of paper|lecture frame|a sheet of paper|Write your answer on a piece of paper and pass it forward.|He sketched the design on a piece of paper.
and so forth|lecture filler|indicates a list continues|Age, income, education and so forth were controlled for.|They recorded date, place, occupation and so forth.
looking at the|lecture frame|examining a specified thing|Looking at the age profile, the difference makes sense.|We're looking at the first wave only.
we're looking at|lecture frame|identifies what is being examined|We're looking at a difference of two percentage points.|We're looking at the period before the reform.
we looked at|lecture frame|refers to what was examined|We looked at four sites in total.|We looked at this last week and found nothing.
we look at|lecture frame|states what is examined|When we look at rural cases, the sign reverses.|We look at outcomes rather than process.
can look at|lecture frame|is able to examine something|You can look at it either way.|We can look at the raw counts if that helps.
wanna look at|lecture frame|wants to examine something, in speech|I wanna look at what happens in the second year.|Let's look at the residuals first.
take a look|lecture frame|to examine briefly|Take a look at the footnote on page nine.|Let's take a look before we move on.
look at this|lecture frame|directs attention to something present|Look at this gap in the middle of the series.|Look at this and tell me what you see.
go back to the|lecture frame|to return to something|Let's go back to the original definition.|Go back to the table on the previous slide.
come back to|lecture frame|to return to a topic later|We'll come back to that at the end.|Let me come back to your question.
that you can|fragment|part of a clause about what is possible|It's the sort of thing that you can check in five minutes.|There's nothing here that you can generalise from.
you don't need to|lecture frame|says something is not required|You don't need to read the whole appendix.|You don't need to adjust if the groups are matched.
you need to do|lecture frame|states a required action|What you need to do is weight before comparing.|All you need to do is report both estimates.
you're looking at|lecture frame|identifies what the listener is seeing|You're looking at about a third of the sample.|You're looking at two different definitions here.
turns out that|lecture frame|introduces an unexpected finding|It turns out that the records were duplicated.|Turns out that most of the gap is compositional.
it could be|hedging|something might be the case|It could be a reporting artefact.|It could be that the two effects cancel out.
it might be|hedging|something may possibly be so|It might be worth splitting by year.|It might be that the question was misunderstood.
it's gonna be|spoken hedging|something will be, in speech|It's gonna be hard to replicate with this sample.|It's gonna be a while before the data are released.
figure out what|lecture frame|to work out the identity of something|We need to figure out what the question measured.|The task is to figure out what changed in 1981.
trying to figure|lecture frame|attempting to work something out|I'm still trying to figure out where the duplicates came from.|We're trying to figure out whether it's real.
I wanted to|lecture frame|softens the speaker's purpose|I wanted to flag one problem with that reading.|I wanted to check we mean the same thing.
I want you to|lecture frame|instructs the listener|I want you to look at the second column.|I want you to think about who is missing from this sample.
what I want to|lecture frame|introduces the speaker's aim|What I want to do today is set out the method.|What I want to stress is that these are estimates.
you could you could|spoken repetition|a repeated start while the speaker reformulates|You could, you could just drop that year entirely.|You could, you could weight it, but that assumes a lot.
might be able|hedging|possibly having the capacity|We might be able to recover the earlier files.|You might be able to see a second peak.
gonna be able|spoken hedging|will have the capacity, in speech|We're not gonna be able to answer that here.|You're gonna be able to replicate most of this.
we have to|lecture frame|states a necessity|We have to be careful with the word significant.|We have to compare like with like.
have to do with|lecture frame|to concern or be connected with|These differences have to do with how cases are counted.|It may have to do with the reporting year.
so you can|lecture frame|states a resulting possibility|The data are open, so you can check this yourself.|It's standardised, so you can compare across years.
so you can see|lecture frame|points out a visible consequence|So you can see why the average is misleading.|So you can see the two series part company here.
this kind of|lecture frame|this sort of thing|This kind of error is easy to miss.|This kind of design can't establish cause.
one of these|fragment|a single item from a group just named|One of these explanations has to be wrong.|Pick one of these and work it through.
don't worry about|lecture frame|tells the listener something is not important|Don't worry about the derivation, just the result.|Don't worry about the units for now.
to each other|fragment|reciprocally, between the parties|The two measures are closely related to each other.|The groups were compared to each other, not to a baseline.
at this point|sequencing|at this moment in the process or argument|At this point we can't say anything causal.|At this point the recording breaks off.
at some point|sequencing|at an unspecified moment|At some point the definition changed.|We'll need to address this at some point.
and if you|lecture frame|adds a condition|And if you split by region, it disappears.|And if you ask them directly, they say the opposite.
but if you|lecture frame|adds a contrasting condition|But if you use the median, the picture changes.|But if you look at the subgroups, it's not uniform.
you think about it|lecture frame|invites reflection|When you think about it, the sample selects itself.|If you think about it, nobody had an incentive to record this.
to think about|lecture frame|to consider something|There's a lot to think about in that one table.|It's worth taking time to think about what's missing.
you're trying to|lecture frame|identifies the listener's aim|If you're trying to estimate prevalence, this won't do.|You're trying to measure something that moves.
you're interested in|lecture frame|identifies the listener's concern|If you're interested in mechanism, the trial won't help.|Whatever you're interested in, start with the denominator.
for those of you|lecture frame|addresses part of the audience|For those of you new to this, start with Chapter 2.|For those of you who do fieldwork, this will be familiar.
I'm not gonna|lecture frame|says what the speaker will not do, in speech|I'm not gonna go through the algebra.|I'm not gonna pretend the data are clean.
I'm gonna go|lecture frame|announces what the speaker will do, in speech|I'm gonna go through this quickly.|I'm gonna go back a slide.
I'll talk about|lecture frame|announces a topic for later|I'll talk about the exceptions in a moment.|I'll talk about replication next week.
I'll show you|lecture frame|announces a demonstration|I'll show you what happens when we drop the outliers.|I'll show you the raw series first.
I think this is|lecture frame|offers the speaker's reading|I think this is the most important finding here.|I think this is an artefact, not a real effect.
tell me what|lecture check|asks the listener to report something|Tell me what you notice about the second column.|Tell me what you'd do with a sample this size.
okay I don't know|lecture filler|concedes uncertainty, in speech|Okay I don't know the exact figure, but it's around a third.|Okay I don't know why they coded it that way.
do you want|lecture check|asks the listener's preference|Do you want the short version or the long one?|Do you want me to go back over the weighting?
any questions about|seminar frame|invites questions on a topic|Any questions about the method before I move on?|Any questions about the coding scheme?
the reason why|lecture frame|introduces an explanation|The reason why the series breaks is a change in definition.|That's the reason why we report both estimates.
it in terms of|fragment|part of a phrase framing how to view something|Think of it in terms of cost per head.|It's easier to see it in terms of rates.
if you wanna|lecture frame|opens a condition, in speech|If you wanna compare across years, deflate first.|If you wanna check it, the code is online.
if you were to|lecture frame|opens a hypothetical|If you were to repeat this with a larger sample, the interval narrows.|If you were to drop those cases, the effect halves.
if you were|lecture frame|opens a hypothetical about the listener|If you were designing this now, you'd preregister.|If you were in their position, you'd record it the same way.
that make sense|lecture check|part of a comprehension check|Does that make sense, or shall I take it again?|Let me know if that make sense to everyone.
this is this is|spoken repetition|a repeated start while the speaker reformulates|This is, this is the point I keep coming back to.|This is, this is where the two accounts diverge.
how do we|lecture frame|asks how something is to be done|How do we know the groups were comparable?|How do we measure something this diffuse?
we were talking|lecture frame|refers back to an earlier discussion|We were talking about this before the break.|Last week we were talking about selection.
by the way|lecture aside|introduces an incidental remark|By the way, the dataset is now open access.|The figures, by the way, exclude Northern Ireland.
thank you very|lecture closing|the start of a formal expression of thanks|Thank you very much for your attention.|Thank you very much, that was extremely helpful.
what happens is|lecture frame|introduces an explanation of a process|What happens is the sample shrinks at each wave.|What happens is people round their answers to the nearest five.
on the board|lecture frame|written on the classroom board|I'll put the formula on the board.|The examples on the board are from the 1991 census.
um let me|lecture filler|a hesitation before the speaker acts|Um, let me find the right slide.|Um, let me check that figure before I answer.
`

export const NOTES = parseNotes(RAW)
