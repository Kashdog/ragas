$(function () {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});

var app = angular.module("Ragas", []);
app.controller("RagasCtrl", function ($scope, $anchorScroll, $location) {
    $scope.raga = "";
    $scope.ragas = [{
            "Name": "Adana"
            , "Color": "Red"
            , "Description": "Adana was a major raga in the 17th century, a combination of the then current ragas Kanada and Malhar. Flat Ga is usually omitted in ascent, and in descent it always appears in the distinctive Kanada phrase GMRS."
    }, {
            "Name": "Bhairav"
            , "Color": "Pink"
    }, {
            "Name": "Bhairavi"
            , "Color": "Purple"
    }, {
            "Name": "Shri"
            , "Color": "Deep-Purple"
    }
    ];
    $scope.findRaga = function (x) {
        var newHash = x;
        if ($location.hash() !== newHash) {
            $location.hash(x);
        } else {
            $anchorScroll();
        }
    };

});