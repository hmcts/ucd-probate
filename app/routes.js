//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

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
        response.redirect("co-executor_journey/executor-contact2")
    } else {
        response.redirect("co-executor_journey/executor-alias2")
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