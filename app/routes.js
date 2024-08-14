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

    var sameName = request.session.data['otherExecutors']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-name_2")
    } else {
        response.redirect("co-executor_journey/deceased-executor")
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

router.post('/other-executors_3', function(request, response) {

    var sameName = request.session.data['otherExecutors']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-name_3")
    } else {
        response.redirect("#s")
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

router.post('/applying-executor', function(request, response) {

    var sameName = request.session.data['applyingExecutor']
    if (sameName == "yes"){
        response.redirect("co-executor_journey/executor-name_match")
    } else {
        response.redirect("co-executor_journey/executor-not_applying")
    }
})

router.post('/not-applying_reason', function(request, response) {

    var sameName = request.session.data['not-applyingReason']
    if (sameName == "powerReserved"){
        response.redirect("co-executor_journey/executor-power_reserved")
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