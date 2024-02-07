fetch("https://api.jsonbin.io/v3/b/65542c3a12a5d3765999a055",
    {
        method: 'GET',
        headers: {
            'X-Master-Key': "$2a$10$30hMbjJLFMBO5UrlMOnC6eRinL.njM0GTMpzstVyGZrZ4Pw6CZQla",
            'X-Access-Key': "$2a$10$zLjXs81/m72AxpevEqozVujHJJtTNedTf9oq//T3jP/yBD.2irVeK"
        }
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.record.forEach(post => {
            const markup = `<li class="item ${post.tag[0]}"><a href="${post.title}/${post.title}.html">${post.title.slice(1)}</a></li>`;
            document.querySelector('.content .posts ol').insertAdjacentHTML("beforeend", markup);
            // console.log(post.tag[0])
        })
    });

document.addEventListener('DOMContentLoaded', function () {
    const list = {
        "Turkey": false,
        "UAE": false,
        "CentralAsia": false,
    }
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(button => {
        button.addEventListener("change", function () {
            const filter = this.getAttribute("data-filter");
            items = document.querySelectorAll(`.item`);
            if (this.checked) { 
                list[filter] = true;
            } else {
                list[filter] = false;
            }
            console.log(filter);
            if (Object.keys(list).every(l => list[l] == false)) {
                items.forEach(item => {
                    item.style.display = "flex"
                })
            } else {
                items.forEach(item => {
                    item.style.display = "none"
                })
                for (l in list) {
                    if (list[l] == true) {
                        items.forEach(item => {
                            if (item.classList.contains(l)) {
                                item.style.display = "flex"
                            }
                        })
                    }
                }

            }
        })
    })
})




