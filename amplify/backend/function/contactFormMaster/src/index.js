const AWS = require("aws-sdk");
const ses = new AWS.SES();
const SENDER = "Michael Huber <mshuber1981@gmail.com>";

function response(status, message) {
  const res = {
    isBase64Encoded: false,
    headers: {
      "Access-Control-Allow-Headers": "application/json",
      "Access-Control-Allow-Origin": "https://www.mikeyneedsajob.com",
      "Access-Control-Allow-Methods": "POST",
    },
    statusCode: status,
    body: JSON.stringify(message),
  };

  return res;
}

function sendEmail(event, body, context, callback) {
  const params = {
    Destination: {
      ToAddresses: [SENDER],
    },
    Message: {
      Body: {
        Text: {
          Data:
            "Name: " +
            body.name +
            "\nEmail: " +
            body.email +
            "\nMessage: " +
            body.message,
          Charset: "UTF-8",
        },
      },

      Subject: {
        Data: "Portfolio Contact Form: " + body.name,
        Charset: "UTF-8",
      },
    },
    Source: SENDER,
  };

  ses.sendEmail(params, function (err, data) {
    callback(null, response(200, "Thank you, I will contact you soon."));
    if (err) {
      console.log(err);
      context.fail(err);
    } else {
      console.log(data);
      context.succeed(event);
    }
  });
}

function sendAutoReply(event, body, context) {
  const params = {
    Destination: {
      ToAddresses: [`${body.email}`],
    },
    Source: SENDER,
    Template: "ContactForm",
    TemplateData: '{"message":"Thank you!"}',
    ConfigurationSetName: "ContactForm",
  };

  ses.sendTemplatedEmail(params, function (err, data) {
    if (err) {
      console.log(err);
      context.fail(err);
    } else {
      console.log(data);
      context.succeed(event);
    }
  });
}

exports.handler = (event, context, callback) => {
  const domain = event.headers.origin;
  const body = JSON.parse(event.body);

  if (domain === "https://www.mikeyneedsajob.com") {
    sendEmail(event, body, context, callback);
    sendAutoReply(event, body, context);
  } else {
    console.log(event.headers.origin);
    return response(403, "Acess Denied");
  }
};
