# WellTravel-Affiliates-2.0
# Cypress-Automation
Cypress is a next generation front end testing tool built for the modern web. This is a sample project which you can use to start your E2E testing with Cypress.

# How to Start
1. Clone the project
2. `npm i` - Install all the dependencies
3. There are a lot dependencies that are not updated frequently in parallel with cypress. So while installing if you are seeing conflicts use`npm i --force`.
4. Run `npm test` to execute the tests in Test Runner | Run `npx cypress run` to execute the tests in CLI
5. To create HTML reports execute first `npm run test:cli` and then `npm run create:html:report`

#####
please insert this code to package json file

"scripts": {

    "clean:reports": "rm cypress/reports/mocha/* || true",

    "pretest": "npm run clean:reports",

    "scripts": "cypress run --record --key 28cc2fb1-43f9-4af5-9303-eae00dae3029",

    "combine-reports": "npx mochawesome-merge \"cypress/reports/mocha/*.json\" > mochawesome.json",

    "generate-report": "npx marge mochawesome.json -f report -o cypress/reports/mochareports",

    "posttest": "npm run combine-reports && npm run generate-report",

    "test": "npm run scripts || npm run posttest",

    "cy:open": "cypress open",

    "cy:run:smoke": "cypress run --headless --spec cypress/integration/productNames.spec.js --browser chrome",

    "cy:run:chrome": "cypress run --browser chrome --headed",

    "cy:run:chrome--spec": "cypress run --browser chrome --headed --spec",

    "cy:run:firefox": "cypress run --browser firefox --headed",

    "cy:run:electron": "cypress run --browser electron",

    "cy:run:chrome:headless": "cypress run --browser chrome --headless",

    "cy:run:firefox:headless": "npx cypress run --spec 'cypress/integration/**.js'  --browser firefox --headless",


    "_________________________________________________________________": "____________________________________________",


    "cy:run:setting:Global_policy_set": "npx cypress run --spec 'cypress/e2e/Welltravel/Agent_Admin/Setting/Global_policy_set.js'  --browser chrome --headed",

    "cy:run:setting:Approval_config_pre": "npx cypress run --spec 'cypress/e2e/Welltravel/Agent_Admin/Setting/Approval_config_pre.js'  --browser chrome --headed",

    "cy:run:setting:Approval_config_post": "npx cypress run --spec 'cypress/e2e/Welltravel/Agent_Admin/Setting/Approval_config_post.js'  --browser chrome --headed",

    "cy:run:FlightBooking_Single_Route&Traveler_invoice": "npx cypress run --spec 'cypress/e2e/Welltravel/TravelApp/Flight/FlightBooking_Single_Route&Traveler_invoice.js'  --browser chrome --headed",

    "cy:run:HotelBooking_SingleTraveler&location_invoice": "npx cypress run --spec 'cypress/e2e/Welltravel/TravelApp/Hotel/HotelBooking_SingleTraveler&location_invoice.js'  --browser chrome --headed",

    "cy:run:CarBooking_Single_Route&Traveler_Invoice": "npx cypress run --spec 'cypress/e2e/Welltravel/TravelApp/Car/CarBooking_Single_Route&Traveler_Invoice.js'  --browser chrome --headed",

    "cy:run:Admin_FlightBooking_Single_Route&Traveler_invoice": "npx cypress run --spec 'cypress/e2e/Welltravel/Agent_Admin/Flight/Admin_FlightBooking_Single_Route&Traveler_invoice.js'  --browser chrome --headed",

    "cy:run:Admin_HotelBooking_SingleTraveler_invoice": "npx cypress run --spec 'cypress/e2e/Welltravel/Agent_Admin/Hotel/Admin_HotelBooking_SingleTraveler_invoice.js'  --browser chrome --headed",

    "cy:run:Admin_CarBooking_SingleTraveler_invoice": "npx cypress run --spec 'cypress/e2e/Welltravel/Agent_Admin/Car/Admin_CarBooking_SingleTraveler_invoice.js'  --browser chrome --headed"

},


# Running All Specs
- When you're running your tests from the Test Runner, make sure that none of the tests has `only`, as this basically tells cypress to run that particular test and skip all others.
