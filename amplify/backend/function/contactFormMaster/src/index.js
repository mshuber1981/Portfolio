const AWS = require("aws-sdk");
const ses = new AWS.SES();

exports.handler = (event, context, callback) => {
  const response = {
    isBase64Encoded: false,
    headers: {
      "Access-Control-Allow-Headers": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
    },
    statusCode: 200,
    body: JSON.stringify("Thank you, I will contact you soon."),
  };

  const body = JSON.parse(event.body);

  const params = {
    Destination: {
      ToAddresses: ["mshuber1981@gmail.com"],
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
    Source: "mshuber1981@gmail.com",
  };

  ses.sendEmail(params, (err, data) => {
    callback(null, response);
    if (err) {
      console.log(err);
      context.fail(err);
    } else {
      console.log(data);
      context.succeed(event);
    }
  });
};
