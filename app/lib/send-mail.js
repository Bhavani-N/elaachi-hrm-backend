const sgMail = require('@sendgrid/mail')

const API_KEY = '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';

sgMail.setApiKey(API_KEY)

async function send(to, mailOptions) {
    const defaultOptions = {
        from: {
            name: 'Elaachi Account',
            email: 'bhavani@itprofound.com'
        },
        subject: 'Email From elaachi'
    };

    if (!to) {
        throw new Error('To Address Should Not Be Empty');
    }

    const message = Object.assign({}, defaultOptions, mailOptions, { to });
    return sgMail.send(message); 
}

module.exports = {
    send
};

// const message = {
//     to: 'anubhavani5@gmail.com',
//     from: {
//         name: 'Elaachi HRM',
//         email: 'bhavani@itprofound.com'
//     },
//     subject: 'Hello from sendgrid',
//     text: 'Hello from sendgrid',
//     html: '<h1>Hello from sendgrid</h1>'
// };

// sgMail
//     .send(message)
//     .then((response) => console.log('Email Sent...'))
//     .catch((error) => console.log(error.message));