// <div class="form-group col-sm-6">
//     <div>
//         <input required type="hidden" name="country_code" value="">
//         <input required class="form-control" placeholder="Phone Number*" type="text" name="phone" id="contact-number" data-parsley-trigger="change focusout" maxlength="20" data-parsley-required-message="Phone number is required" required data-parsley-required  data-parsley-errors-container="#phone-valid-err" data-parsley-trigger="change focusout" value="{$users.phone}"/>
//     </div>
//     <span id="phone-valid-err"></span>
//     <span id="phone-err" class="err-list hide">Invalid number</span>
//     <span id="valid-msg" class="err-list hide" style="color : green">Valid</span>
// </div>


// <!-- Phone numbers secitons  -->
$(function() {
    var telInput = $("#contact-number"),
        errorMsg = $("#phone-err"),
        validMsg = $("#valid-msg");

    // initialise plugin
    telInput.intlTelInput({
        nationalMode: false,
        utilsScript: JSLOC+"utils.js"
    });

    // on blur: validate
    telInput.blur(function() {
        // console.log($('input[name=country_code]').val('+'+telInput.intlTelInput("getSelectedCountryData").dialCode));
        // console.log($.trim(telInput.val()));
        if ($.trim(telInput.val())) {
            // console.log("validation error----here----------");
            // console.log(telInput.intlTelInput("getValidationError"));
            // console.log(telInput.intlTelInput("isValidNumber"));
            // telInput.parsley().validate();
            if (telInput.parsley().isValid()) {
                if (telInput.intlTelInput("isValidNumber")) {
                    validMsg.removeClass("hide");
                    //$('#ad').find('input[type=submit]').prop('disabled', false);
                    $('.verify_btn').prop('disabled', false);
                    $('.verify_btn').prop('title', '');
                } else {
                    telInput.addClass("error");
                    errorMsg.removeClass("hide");
                    validMsg.addClass("hide");
                    $('.verify_btn').prop('disabled', true);
                    $('.verify_btn').prop('title', 'Please check phone number');
                }
            }
        }
    });

    // on keydown: reset
    telInput.keydown(function() {
        telInput.removeClass("error");
        errorMsg.addClass("hide");
        validMsg.addClass("hide");
    });

});

