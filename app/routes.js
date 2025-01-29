//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// eligibility journey

router.post('/EC_deathCertificate-answer', function(request, response) {

    var country = request.session.data['EC_deathCertificate']
    if (country == "yes"){
        response.redirect("eligibility_journey/2-death_certificate-english")
    } else {
        response.redirect("eligibility_journey/1a-not_eligible")
    }
})

router.post('/EC_deathCertificate-english-answer', function(request, response) {

    var country = request.session.data['EC_deathCertificate-english']
    if (country == "yes"){
        response.redirect("eligibility_journey/3-deceased_domicile")
    } else {
        response.redirect("eligibility_journey/2a-english_translation")
    }
})

router.post('/EC_deathCertificate-translation-answer', function(request, response) {

    var country = request.session.data['EC_deathCertificate-translation']
    if (country == "yes"){
        response.redirect("eligibility_journey/3-deceased_domicile")
    } else {
        response.redirect("eligibility_journey/2b-not_eligible")
    }
})

router.post('/EC_deceasedDomicile-answer', function(request, response) {

    var country = request.session.data['EC_deceasedDomicile']
    if (country == "yes"){
        response.redirect("eligibility_journey/4-died_after-2022")
    } else {
        response.redirect("eligibility_journey/3a-apply_by_post")
    }
})

router.post('/EC_diedAfter-2022-answer', function(request, response) {

    var country = request.session.data['EC_diedAfter-2022']
    if (country == "yes"){
        response.redirect("eligibility_journey/5-estate_value")
    } else {
        response.redirect("eligibility_journey/4a-IHT_form")
    }
})

router.post('/EC_ihtForm-answer', function(request, response) {

    var country = request.session.data['EC_ihtForm']
    if (country == "yes"){
        response.redirect("eligibility_journey/6-will")
    } else {
        response.redirect("eligibility_journey/4b-not_eligible")
    }
})

router.post('/EC_estateValue-answer', function(request, response) {

    var country = request.session.data['EC_estateValue']
    if (country == "yes"){
        response.redirect("eligibility_journey/6-will")
    } else {
        response.redirect("eligibility_journey/5a-not_eligible")
    }
})

router.post('/EC_will-answer', function(request, response) {

    var country = request.session.data['EC_will']
    if (country == "yes"){
        response.redirect("#")
    } else {
        response.redirect("eligibility_journey/intestacy/7-died_after-2014")
    }
})

router.post('/EC_diedAfter-2014-answer', function(request, response) {

    var country = request.session.data['EC_diedAfter-2014']
    if (country == "yes"){
        response.redirect("eligibility_journey/intestacy/8-relationship")
    } else {
        response.redirect("eligibility_journey/intestacy/7a-apply_by_post")
    }
})

router.post('/EC_relationship-answer', function(request, response) {

    var country = request.session.data['EC_relationship']
    if (country == "other"){
        response.redirect("eligibility_journey/intestacy/8a-cannot_apply_online")
    } else {
        response.redirect("eligibility_journey/eligible_to_apply")
    }
})

// Intestacy

// Deceased details

router.post('/deceased-marital_status-answer', function(request, response) {

    var sameName = request.session.data['deceased-marital_status']
    if (sameName == "Divorced or had ended their civil partnership (also known as a dissolution)"){
        response.redirect("intestacy/person_who_died/divorce_jurisdiction")
    } else if (sameName == "Legally separated (also known as judicially separated)"){
        response.redirect("intestacy/person_who_died/separation_jurisdiction")
    } else {
        response.redirect("intestacy/people_applying/task-list")
    }
})

router.post('/divorce_jurisdiction-answer', function(request, response) {

    var sameName = request.session.data['divorceJurisdiction-answer']
    if (sameName == "Yes"){
        response.redirect("intestacy/person_who_died/divorce_date")
    } else {
        response.redirect("intestacy/person_who_died/divorced-apply_by_post")
    }
})

router.post('/separation_jurisdiction-answer', function(request, response) {

    var sameName = request.session.data['separationJurisdiction-answer']
    if (sameName == "Yes"){
        response.redirect("intestacy/person_who_died/separation_date")
    } else {
        response.redirect("intestacy/person_who_died/separated-apply_by_post")
    }
})

// Applicants
 
router.post('/relationship-answer', function(request, response) {

    var sameName = request.session.data['relationship']
    if (sameName == "I am their child"){
        response.redirect("intestacy/people_applying/adopted_in")
    } else if (sameName == "I am their parent"){
        response.redirect("intestacy/people_applying/adopted_in")
    } else if (sameName == "other"){
        response.redirect("intestacy/people_applying/relationship-cannot_apply_online")
    } else {
        response.redirect("#")
    }
})

router.post('/adopted_in-answer', function(request, response) {

    var sameName = request.session.data['adoptedIn']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/adoption_jurisdiction")
    } else {
        response.redirect("intestacy/people_applying/adopted_out")
    }
})

router.post('/adoption_jurisdiction-answer', function(request, response) {

    var sameName = request.session.data['adoption_jursdiction']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/other_children")
    } else {
        response.redirect("intestacy/people_applying/adoption_jurisdiction-cannot_apply_online")
    }
})

router.post('/adopted_out-answer', function(request, response) {

    var sameName = request.session.data['adoptedOut']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/adopted_out-cannot_apply_online")
    } else {
        response.redirect("intestacy/people_applying/other_children")
    }
})

router.post('/other_children-answer', function(request, response) {

    var sameName = request.session.data['other_children']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/deceased_children")
    } else {
        response.redirect("intestacy/people_applying/applicant-name")
    }
})

router.post('/deceased_children-answer', function(request, response) {

    var sameName = request.session.data['deceased_children']
    if (sameName == "No"){
        response.redirect("intestacy/people_applying/children_over_18")
    } else {
        response.redirect("intestacy/people_applying/surviving_grandchildren")
    }
})

router.post('/surviving_grandchildren-answer', function (req, res) {

    var survivingGrandchildren = req.session.data['surviving_grandchildren']
    var deceasedChildren = req.session.data['deceased_children']
    
    if (survivingGrandchildren.includes("No") && deceasedChildren.includes("some")) {
    res.redirect('intestacy/people_applying/children_over_18')
    } else if (survivingGrandchildren.includes("No") && deceasedChildren.includes("all")){
    res.redirect("intestacy/people_applying/applicant-name")
    } else {
    res.redirect("intestacy/people_applying/grandchildren_over_18")
    }

})

router.post('/grandchildren_over_18-answer', function (req, res) {

    var survivingGrandchildren = req.session.data['grandchildren_over_18']
    var deceasedChildren = req.session.data['deceased_children']
    
    if (survivingGrandchildren.includes("Yes") && deceasedChildren.includes("some")) {
    res.redirect('intestacy/people_applying/children_over_18')
    } else if (survivingGrandchildren.includes("Yes") && deceasedChildren.includes("all")){
    res.redirect("intestacy/people_applying/applicant-name")
    } else {
    res.redirect("intestacy/people_applying/grandchild_under_18-cannot_apply_online")
    }

})

router.post('/children_over_18-answer', function(request, response) {

    var sameName = request.session.data['children_over_18']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/applicant-name")
    } else {
        response.redirect("intestacy/people_applying/child_under_18-cannot_apply_online")
    }
})

router.post('/applicant_summary', function(request, response) {

    var sameName = request.session.data['otherApplicants']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/joint_application/applicant_2-relationship")
    } else {
        response.redirect("intestacy/CYA-legal_dec/task-list")
    }
})

// joint application

router.post('/applicant_2-relationship_answer', function(request, response) {

    var sameName = request.session.data['applicant_2-relationship']
    if (sameName == "Other"){
        response.redirect("intestacy/people_applying/joint_application/applicant_2-not_entitled")
    } else {
        response.redirect("intestacy/people_applying/joint_application/applicant_2-name")
    }
})

router.post('/applicant_2-adopted_in-answer', function(request, response) {

    var sameName = request.session.data['applicant_2-adoptedIn']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/joint_application/applicant_2-adoption_jurisdiction")
    } else {
        response.redirect("intestacy/people_applying/joint_application/applicant_2-adopted_out")
    }
})

router.post('/applicant_2-adoption_jurisdiction-answer', function(request, response) {

    var sameName = request.session.data['applicant_2-adoption_jursdiction']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/joint_application/applicant_2-email")
    } else {
        response.redirect("intestacy/people_applying/joint_application/applicant_2-adoption_jurisdiction-cannot_apply_online")
    }
})

router.post('/applicant_2-adopted_out-answer', function(request, response) {

    var sameName = request.session.data['applicant_2-adoptedOut']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/joint_application/applicant_2-adopted_out-cannot_apply_online")
    } else {
        response.redirect("intestacy/people_applying/joint_application/applicant_2-email")
    }
})

router.post('/applicant_summary_2', function(request, response) {

    var sameName = request.session.data['applicant_summary_2']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/joint_application/applicant_3-relationship")
    } else {
        response.redirect("intestacy/CYA-legal_dec/task-list")
    }
})

router.post('/remove-applicant_2-answer', function(request, response) {

    var sameName = request.session.data['remove-applicant_2']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/applicant_summary")
    } else {
        response.redirect("intestacy/people_applying/joint_application/applicant_summary-2")
    }
})

router.post('/applicant_3-relationship_answer', function(request, response) {

    var sameName = request.session.data['applicant_3-relationship']
    if (sameName == "Other"){
        response.redirect("intestacy/people_applying/joint_application/applicant_3-not_entitled")
    } else {
        response.redirect("intestacy/people_applying/joint_application/applicant_3-name")
    }
})

router.post('/applicant_3-adopted_in-answer', function(request, response) {

    var sameName = request.session.data['applicant_3-adoptedIn']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/joint_application/applicant_3-adoption_jurisdiction")
    } else {
        response.redirect("intestacy/people_applying/joint_application/applicant_3-adopted_out")
    }
})

router.post('/applicant_3-adoption_jurisdiction-answer', function(request, response) {

    var sameName = request.session.data['applicant_3-adoption_jursdiction']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/joint_application/applicant_3-email")
    } else {
        response.redirect("intestacy/people_applying/joint_application/applicant_3-adoption_jurisdiction-cannot_apply_online")
    }
})

router.post('/applicant_3-adopted_out-answer', function(request, response) {

    var sameName = request.session.data['applicant_3-adoptedOut']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/joint_application/applicant_3-adopted_out-cannot_apply_online")
    } else {
        response.redirect("intestacy/people_applying/joint_application/applicant_3-email")
    }
})

router.post('/applicant_summary_3', function(request, response) {

    var sameName = request.session.data['applicant_summary_3']
    if (sameName == "No"){
        response.redirect("intestacy/CYA-legal_dec/task-list")
    } else {
        response.redirect("#")
    }
})

router.post('/remove-applicant_3-answer', function(request, response) {

    var sameName = request.session.data['remove-applicant_3']
    if (sameName == "Yes"){
        response.redirect("intestacy/people_applying/joint_application/applicant_summary-2")
    } else {
        response.redirect("intestacy/people_applying/joint_application/applicant_summary-3")
    }
})

// co-executor journey

router.post('/applicant-name_answer', function(request, response) {

    var sameName = request.session.data['sameName']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/applicant-number")
    } else {
        response.redirect("co-executor_journey/applicant-alias")
    }
})

router.post('/other-executors', function(request, response) {

    var sameName = request.session.data['otherExecutors']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-name")
    } else {
        response.redirect("co-executor_journey/E&D-questions")
    }
})

router.post('/other-executors_2', function(request, response) {

    var sameName = request.session.data['2otherExecutors']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-name_2")
    } else {
        response.redirect("co-executor_journey/deceased-executor")
    }
})

router.post('/other-executors_3', function(request, response) {

    var sameName = request.session.data['3otherExecutors']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-name_3")
    } else {
        response.redirect("co-executor_journey/deceased-executors")
    }
})

router.post('/other-executors_4', function(request, response) {

    var sameName = request.session.data['4otherExecutors']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-name_4")
    } else {
        response.redirect("co-executor_journey/deceased-executors")
    }
})

router.post('/other-executors_5', function(request, response) {

    var sameName = request.session.data['5otherExecutors']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-summary_5")
    } else {
        response.redirect("co-executor_journey/deceased-executors")
    }
})

router.post('/remove-executor_answer', function(request, response) {

    var sameName = request.session.data['removeExecutor']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-summary")
    } else {
        response.redirect("co-executor_journey/executor-summary_2")
    }
})

router.post('/remove-executor_answer2', function(request, response) {

    var sameName = request.session.data['removeExecutor2']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-summary_2")
    } else {
        response.redirect("co-executor_journey/executor-summary_3")
    }
})

router.post('/remove-executor_answer3', function(request, response) {

    var sameName = request.session.data['removeExecutor3']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-summary_3")
    } else {
        response.redirect("co-executor_journey/executor-summary_4")
    }
})

router.post('/remove-executor_answer4', function(request, response) {

    var sameName = request.session.data['removeExecutor4']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-summary_4")
    } else {
        response.redirect("co-executor_journey/executor-summary_5")
    }
})

router.post('/deceased-executor-answer', function(request, response) {

    var sameName = request.session.data['deceasedExecutor']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-deceased_before")
    } else {
        response.redirect("co-executor_journey/executor-applying")
    }
})

router.post('/deceased-executors-answer', function(request, response) {

    var sameName = request.session.data['deceasedExecutors']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/deceased-executors_select")
    } else {
        response.redirect("co-executor_journey/executors-applying")
    }
})

router.post('/selected-deceased_executors', function(request, response) {

    var exports = request.session.data['select-deceasedExecutors']
    if (exports.includes("johnDoe")){
        response.redirect("co-executor_journey/executor-deceased_before2")
    } else {
        response.redirect("co-executor_journey//executors-applying")
    }
})

router.post('/applying-executor', function(request, response) {

    var sameName = request.session.data['applyingExecutor']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-name_match")
    } else {
        response.redirect("co-executor_journey/executor-not_applying")
    }
})

router.post('/executor-name-answer', function(request, response) {

    var sameName = request.session.data['executorName-answer']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-alias")
    } else {
        response.redirect("co-executor_journey/executor-not_applying")
    }
})

router.post('/executor-name2-answer', function(request, response) {

    var sameName = request.session.data['executorName2-answer']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-alias2")
    } else {
        response.redirect("co-executor_journey/executor-contact2")
    }
})

router.post('/not-applying_reason', function(request, response) {

    var sameName = request.session.data['not-applyingReason']
    if (sameName == "powerReserved"){
        response.redirect("co-executor_journey/executor-power_reserved")
    } else {
        response.redirect("co-executor_journey/E&D-questions")
    }
})

router.post('/not-applying_reason2', function(request, response) {

    var sameName = request.session.data['not-applyingReason2']
    if (sameName == "powerReserved"){
        response.redirect("co-executor_journey/executor-power_reserved2")
    } else {
        response.redirect("co-executor_journey/E&D-questions")
    }
})