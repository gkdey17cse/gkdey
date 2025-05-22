
$(document).ready(function () {
    emailjs.init('YGIvkaJo0BzfbQ-Do'); // Replace with your actual PUBLIC key

    $('#contactForm').validate({
        errorClass: 'text-amber-300 text-sm mt-1',
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            details: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Name is required",
                minlength: "At least 3 characters"
            },
            email: {
                required: "Email is required",
                email: "Enter a valid email"
            },
            subject: "Subject is required",
            details: {
                required: "Details are required",
                minlength: "At least 10 characters"
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            const btn = document.getElementById('submitBtn');
            btn.value = 'Sending...';

            const serviceID = 'default_service';
            const templateID = 'template_z0si4ar';

            emailjs.sendForm(serviceID, templateID, form)
                .then(() => {
                    btn.value = 'Send';
                    alert('Email sent successfully!');
                    form.reset();
                }, (err) => {
                    btn.value = 'Send';
                    alert('Error: Email not sent.\n' + JSON.stringify(err));
                });
        }
    });
});
