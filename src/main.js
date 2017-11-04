$(function() {
    const submitBtn = $('input[type="submit"]');

    function validate(event) {
        event.preventDefault();
        if (checkForm()) {
            alert('Your form was submitted successfully');
        } else {
            alert('Please check your form and try again.');
        }
    }

    function checkForm() {
        /*getting all input text objects*/
        const person = $('#type_person'),
            comp = $('#type_company'),
            fName = $('#first_name'),
            lName = $('#last_name'),
            email = $('#email'),
            compName = $('#company_name'),
            phone = $('#phone');
        /*getting all error display objects*/
        const fNameError = $('#first_name_error'),
            lNameError = $('#last_name_error'),
            emailError = $('#email_error'),
            compNameError = $('#company_name_error'),
            phoneError = $('#phone_error');
        /* validation functions */
        function validateName() {
            if (fName.val() === '') {
                fName.addClass('invalid_input');
                fNameError.text('*first name is required.');
                fNameError.css('color', '#8c4242').css('font-size', '15px').css('font-weight', 'bold');
                return false;
            } else {
                fName.removeClass('invalid_input');
                fNameError.html('');
                return true;
            }
        }

        function validateLastName() {
            if (lName.val() === '') {
                lName.addClass('invalid_input');
                lNameError.text('*last name is required.');
                lNameError.css('color', '#8c4242').css('font-size', '15px').css('font-weight', 'bold');
                return false;
            } else {
                lName.removeClass('invalid_input');
                lNameError.html('');
                return true;
            }
        }

        function validateEmail() {
            if (email.val() === '' || email.val().match(/[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/) === null) {
                email.addClass('invalid_input');
                emailError.text('*e-mail name is required.');
                emailError.css('color', '#8c4242').css('font-size', '15px').css('font-weight', 'bold');
                return false;
            } else {
                email.removeClass('invalid_input');
                emailError.html('');
                return true;
            }
        }

        function validateCompName() {
            if (compName.val() === '') {
                compName.addClass('invalid_input');
                compNameError.text('*company name is required.');
                compNameError.css('color', '#8c4242').css('font-size', '15px').css('font-weight', 'bold');
                return false;
            } else {
                compName.removeClass('invalid_input');
                compNameError.html('');
                return true;
            }
        }

        function validatePhone() {
            if (phone.val() === '' || phone.val().match(/\(?([0-9]{3})\)?([ -]?)([0-9]{3})\2([0-9]{3})/) === null) {
                phone.addClass('invalid_input');
                phoneError.text('*the phone number you entered is in an incorrect format.');
                phoneError.css('color', '#8c4242').css('font-size', '15px').css('font-weight', 'bold');
                return false;
            } else {
                phone.removeClass('invalid_input');
                phoneError.html('');
                return true;
            }
        }
        /*setting events*/
        if (person.is(':checked')) {
            fName.blur(validateName);
            lName.blur(validateLastName);
            email.blur(validateEmail);
            fName.keyup(validateName);
            lName.keyup(validateLastName);
            /*clear*/
            compNameError.html('');
            compName.removeClass('invalid_input');
            phoneError.html('');
            phone.removeClass('invalid_input');

            return validateName() && validateLastName() && validateEmail() ? true : false;
        } else if (comp.is(':checked')) {
            compName.blur(validateCompName);
            phone.blur(validatePhone);
            compName.keyup(validateCompName);
            /*clear*/
            fNameError.html('');
            fName.removeClass('invalid_input');
            lNameError.html('');
            lName.removeClass('invalid_input');
            emailError.html('');
            email.removeClass('invalid_input');
            return validateCompName() && validatePhone() ? true : false;
        } else {
            alert('Please select person or company.');
        }
    }
    submitBtn.click(validate);
});
