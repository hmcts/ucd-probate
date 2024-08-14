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