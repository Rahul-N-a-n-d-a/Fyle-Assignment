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