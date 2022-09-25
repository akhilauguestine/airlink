function menuOnClick() {
  const menu_open = document.getElementsByClassName("header__btn-hamburger");
  menu_open[0].classList.toggle("hidden");
  const menu_close = document.getElementsByClassName("header__btn-close");
  menu_close[0].classList.toggle("hidden");
  const header_list = document.getElementsByClassName("header__list");
  header_list[0].classList.toggle("header__list--show");
}

$(document).ready(function () {

  $(".slick-slider").slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: false, Boolean
    arrows: false,
    responsive: [
      {
        breakpoint: 99999,
        settings: "unslick"
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //  const solution_toggle = document.getElementsByClassName("our-services__tiles-item");
  //   menu_open[0].classList.toggle("hidden");

  $(".our-services__tiles-item.row1").hover(
    function () {
      let dropDowns = Array.from(document.querySelectorAll('.our-services__tiles-item.row1'));
      dropDowns.forEach(node => {
        node.classList.remove('active');
      });
      $(this).addClass("active");
    }
  );

  $(".our-services__tiles-item.row2").hover(
    function () {
      let dropDowns = Array.from(document.querySelectorAll('.our-services__tiles-item.row2'));
      dropDowns.forEach(node => {
        node.classList.remove('active');
      });
      $(this).addClass("active");
    }
  );



  let dropdown_country = $('#country');
  dropdown_country.empty();
  dropdown_country.append('<option selected="true" disabled>Select Country</option>');
  dropdown_country.prop('selectedIndex', 0);

  let dropdown_phone = $('#countryCode');
  dropdown_phone.empty();
  dropdown_phone.append('<option selected="true" disabled>Code</option>');
  dropdown_phone.prop('selectedIndex', 0);

  const url = 'https://api.npoint.io/64dd14e16451a30ef487';
  // Populate dropdown with list of provinces
  $.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
      dropdown_country.append($('<option></option>').attr('value', entry.code).text(entry.name));
      dropdown_phone.append($('<option></option>').attr('value', entry.code).text(entry.dial_code));
    })
  });



  $(".footer__quiklink-head").click(function () {
    $(".footer__quiklink-head").not(this).siblings().removeClass("active");
    $(this).siblings().toggleClass("active");

  })
  $(".footer__quiklink-head").click(function () {
    if (!$(this).hasClass("arrow")) {
      $(".footer__quiklink-head").removeClass("arrow");
    }
    $(this).toggleClass("arrow");
  });
});



const contactForm = document.getElementById("airlink-form"),
  submitBtn = document.getElementById("formsubmit"),
  emailId = document.getElementById("mail"),
  countryCode = document.getElementById("countryCode"),
  phoneNo = document.getElementById("phone"),
  name = document.getElementById("name"),
  job = document.getElementById("job"),
  country = document.getElementById("country"),
  gender = document.querySelector('input[name="radio"]:checked'),
  // genderVal = document.querySelector('label[for="'+gender.id+'"]').innerHTML,
  desc = document.getElementById("desc"),
  modal = document.getElementById("modal"),
  formModalClose = document.getElementById("modal-close"),
  phoneError = document.getElementsByClassName("form__error phone")[0],
  emailError = document.getElementsByClassName("form__error email")[0];

let isPhoneValid = false,
  isEmailValid = false;

submitBtn.setAttribute("disabled", "true");

emailId.addEventListener("keyup", checkEmailValid);
phoneNo.addEventListener("keyup", checkPhoneValid);
countryCode.addEventListener("change", checkPhoneValid);

function checkPhoneValid() {
  let phPattern = /[1-9]{1}[0-9]{9}/;
  if (!(phPattern.test(phoneNo.value)) || (phoneNo.value == "") || countryCode.value == "") {
    phoneError.style.display = "block";
    isPhoneValid = false;
  }
  else {
    phoneError.style.display = "none";
    isPhoneValid = true;
  }
  checkSubmitStatus();
}

function checkEmailValid() {
  let emailIdvalue = emailId.value.includes("@beinex.com");
  let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!(emailPattern.test(emailId.value)) || emailId.value == "" || emailId.value == null || (emailIdvalue == false)) {
    emailError.style.display = "block";
    isEmailValid = false;
  }
  else {
    emailError.style.display = "none";
    isEmailValid = true;
  }
  checkSubmitStatus();
}
function checkSubmitStatus() {
  if (isEmailValid && isPhoneValid) {
    submitBtn.removeAttribute("disabled");
  }
  else {
    submitBtn.setAttribute("disabled", "true");
  }
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var gender_value = 'Nothing selected',
    selected = document.querySelector('input[name="radio_gender"]:checked'),
    selection = document.querySelector('#selection');
  if (selected) {
    gender_value = document.querySelector('label[for="' + selected.id + '"]').innerHTML;
  }
  modal.classList.add("active");
  document.querySelector("body").classList.add("overflow");
  let result = name.value ? `Name : ${name.value} <br>` : "";
  result += job.value ? `Job : ${job.value} <br>` : "";
  result += emailId.value ? `Email : ${emailId.value} <br>` : "";
  result += phoneNo.value ? `Phone : ${countryCode.options[countryCode.selectedIndex].text}  ${phoneNo.value} <br>` : "";
  result += country.value ? `Country : ${country.options[country.selectedIndex].text} <br>` : "";
  result += gender_value ? `Gender : ${gender_value} <br>` : "";
  result += desc.value ? `Comments : ${desc.value} <br>` : "";
  document.getElementById("result").innerHTML = result;

});
modal.addEventListener("click", function () {
  modalClose();
});
formModalClose.addEventListener("click", function () {
  modalClose();
});

function modalClose() {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.querySelector("body").classList.remove("overflow");
  }
}