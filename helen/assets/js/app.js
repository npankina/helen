function addClassJustifyContentMdCenter() {
    let element = document.getElementsByClassName("row no-gutters align-items-center");
    // console.log(element)
    let w = document.documentElement.clientWidth;
    // console.log(w);
        if (w <= 991) {
            element.innerHTML = "<div class=\"row no-gutters justify-content-md-center\" id=\"1\">"
            console.log(element)
        }
}

addClassJustifyContentMdCenter()

function changesClasses() {
    let element = document.getElementsByClassName("first container-fluid");
    let el2 = document.getElementsByClassName("header container-fluid");
    let el3 = document.getElementsByClassName("div container");
    let el4 = document.getElementsByClassName("row video col-xl-12 align-items-center");
    let el5 = document.getElementsByTagName("iframe");
    let el6 = document.getElementsByClassName("container-fluid payment");
    let el7 = document.getElementsByClassName("ah container");
 
    // console.log(element)
    let w = document.documentElement.clientWidth;
    // console.log(w);
        if (w <= 399) {
            element.innerHTML = "<section class=\"first\">";
            el2.innerHTML = "<header class=\"header\">";
            el3.innerHTML = "<div class=\"div\">";
            el4.innerHTML = "<div class=\"video align-items-center\">";
            el5.innerHTML = "<iframe width=\"100%\" height=\"300px\" src=\"https:\//www.youtube.com/embed/DlWDnWhAs0U\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
            el6.innerHTML = "<div class=\"payment\">";
            el7.innerHTML = "<div>";
           
            console.log(element, el2, el3, el4, el5, el6, el7)
        }
}

changesClasses()


