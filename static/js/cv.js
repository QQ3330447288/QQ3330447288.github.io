$(document).ready(function () {
    var tab_python = $('#tab_python');
    var tab_ml = $('#tab_ml');
    var tab_reptile = $('#tab_reptile');
    var tab_php = $('#tab_php');
    var tab_java = $('#tab_java');
    var python_content = $('#python_content');
    var ml_content = $('#ml_content');
    var reptile_content = $('#reptile_content');
    var php_content = $('#php_content');
    var java_content = $('#java_content');
    tab_python.click(function () {
        tab_python.addClass('active');
        tab_ml.removeClass('active');
        tab_reptile.removeClass('active');
        tab_php.removeClass('active');
        tab_java.removeClass('active');
        python_content.removeAttr('hidden');
        ml_content.attr('hidden', 'hidden');
        reptile_content.attr('hidden', 'hidden');
        php_content.attr('hidden', 'hidden');
        java_content.attr('hidden', 'hidden');
    });
    tab_ml.click(function () {
        tab_python.removeClass('active');
        tab_ml.addClass('active');
        tab_reptile.removeClass('active');
        tab_php.removeClass('active');
        tab_java.removeClass('active');
        ml_content.removeAttr('hidden');
        python_content.attr('hidden', 'hidden');
        reptile_content.attr('hidden', 'hidden');
        php_content.attr('hidden', 'hidden');
        java_content.attr('hidden', 'hidden');

    });
    tab_reptile.click(function () {
        tab_python.removeClass('active');
        tab_ml.removeClass('active');
        tab_reptile.addClass('active');
        tab_php.removeClass('active');
        tab_java.removeClass('active');
        reptile_content.removeAttr('hidden');
        python_content.attr('hidden', 'hidden');
        ml_content.attr('hidden', 'hidden');
        php_content.attr('hidden', 'hidden');
        java_content.attr('hidden', 'hidden');
    });
    tab_php.click(function () {
        tab_python.removeClass('active');
        tab_ml.removeClass('active');
        tab_reptile.removeClass('active');
        tab_php.addClass('active');
        tab_java.removeClass('active');
        php_content.removeAttr('hidden');
        python_content.attr('hidden', 'hidden');
        ml_content.attr('hidden', 'hidden');
        reptile_content.attr('hidden', 'hidden');
        java_content.attr('hidden', 'hidden');
    });
    tab_java.click(function () {
        tab_python.removeClass('active');
        tab_ml.removeClass('active');
        tab_reptile.removeClass('active');
        tab_php.removeClass('active');
        tab_java.addClass('active');
        java_content.removeAttr('hidden');
        python_content.attr('hidden', 'hidden');
        ml_content.attr('hidden', 'hidden');
        reptile_content.attr('hidden', 'hidden');
        php_content.attr('hidden', 'hidden');
    });
    $('#cv').mouseover(function () {

    });
});