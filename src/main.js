$(document).ready(function () {
    function handleGoBackButton(goBackButtonSelector, elementsToHideSelector, elementToShowSelector) {
        $(goBackButtonSelector).click(function () {
            $(elementsToHideSelector).hide();
            $(elementToShowSelector).show();
            $(window).scrollTop(0);
        });
    }

    function handleButtonClick(buttonSelector, elementsToHideSelector, elementsToShowSelector) {
        $(buttonSelector).click(function () {
            $(elementsToHideSelector).hide();
            $(elementsToShowSelector).fadeTo("slow", 1).show();
            $(window).scrollTop(0);
        });
    }

    // Handle global go back buttons
    handleGoBackButton(".global-goback", ".rm-class", "#rm-hero");

    // Handle new and used buttons
    handleButtonClick("#jv-btn-new", "#rm-hero, #rm-used-models", "#rm-all-video, #rm-select");
    handleButtonClick("#jv-btn-used", "#rm-hero, #rm-select", "#rm-used-models");

    // Handle vehicle brand buttons
    $(".vehicle-btn").click(function () {
        const brand = $(this).data("brand");
        handleButtonClick(this, "#rm-select", `#rm-${brand}-video, #rm-${brand}-models`);
    });
});

const source = document.getElementById("vehicle-template").innerHTML;
const template = Handlebars.compile(source);

const data = {
    brand: "Brand Name",
    imageSrc: "path/to/image.jpg",
    description: "Vehicle description"
};

const html = template(data);

// Now you can insert the generated HTML into the DOM
document.getElementById("vehicles").innerHTML = html;