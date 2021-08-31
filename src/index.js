exports.handler = (event, context, callback) => {

    // Your Account SID from www.twilio.com/console
    // See http://twil.io/secure for important security information
    const accountSid = process.env.ACCOUNT_SID;

    // Your Auth Token from www.twilio.com/console 
    // See http://twil.io/secure for important security information
    const authToken = process.env.AUTH_TOKEN;

    // Import Twilio's Node Helper library
    // Create an authenticated Twilio Client instance
    const client = require('twilio')(accountSid, authToken);

    const phrases = ["Hey girl", "I love you", " I am thinking about you", "You look great"]

    // Send a text message
    client.messages.create({
        body: phrases[Math.floor(Math.random()*phrases.length)],
        to: process.env.DESTINATION_PHONE_NUMBER,  // your phone number
        from: process.env.SOURCE_PHONE_NUMBER // a valid Twilio number
    })
        .then((message) => {
            // Success, return message SID
            callback(null, message.sid);
        })
        .catch((e) => {
                // Error, return error object
            callback(Error(e));
        });

};