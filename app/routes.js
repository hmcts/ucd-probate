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
        response.redirect("eligibility_journey/intestacy/8a-apply_by_post")
    } else {
        response.redirect("eligibility_journey/eligible_to_apply")
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