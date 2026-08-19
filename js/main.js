const heading = document.querySelector(".header-h1");

if (heading) {
    const fullText = heading.textContent;
    heading.textContent = "";

    let count = 0;

    const typing = setInterval(function () {
        count = count + 1;
        heading.textContent = fullText.slice(0, count);

        if (count === fullText.length) {
            clearInterval(typing);
            heading.classList.add("done");
        }
    }, 100);
}
