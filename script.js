document.addEventListener('DOMContentLoaded', function() {
    const openFormBtn = document.querySelector('#openFormBtn');
    const formContainer = document.querySelector('#contactForm');
    const closeFormBtn = document.querySelector('#closeFormBtn');
    const backdrop = document.querySelector('#backdrop');
  
    openFormBtn.addEventListener('click', function() {
      formContainer.classList.add('visible');
      backdrop.classList.add('visible');
    });
  
    closeFormBtn.addEventListener('click', function() {
      formContainer.classList.remove('visible');
      backdrop.classList.remove('visible');
    });
  });

  $("#contact-form").submit(function(e){
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    processData: false,
    contentType: false,
    headers: {
    "Accept": "application/json"
    }
}).done(function() {
    alert('The form was submitted successfully.');
    document.querySelector('#contactForm').classList.remove('visible');
    document.querySelector('#backdrop').classList.remove('visible');
}).fail(function() {
    alert('An error occurred! Please try again later.')
});
});

$(document).ready(function () {
    function activeProject(element) {
        $('.project-text').removeClass('active-project');
        element.addClass('active-project');
    }
    $('#first-image').on('click', function () {
        $('#project-img').attr('src', './Assets/Images/image1.jpg');
        activeProject($(this));
    });
    $('#second-image').on('click', function () {
        $('#project-img').attr('src', './Assets/Images/image2.png');
        activeProject($(this));
    });
    $('#third-image').on('click', function () {
        $('#project-img').attr('src', './Assets/Images/image3.jpg');
        activeProject($(this));
    });
    $('#second-image').click();
});