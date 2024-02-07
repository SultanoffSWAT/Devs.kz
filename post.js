var string = window.location.href;
const id = string.slice(string.lastIndexOf('/') + 1, string.lastIndexOf('/') + 2);

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
        var post = data.record[id - 1];
        document.title = `${post.title.slice(1)}`
        document.querySelector(".content").insertAdjacentHTML('afterbegin', `<p style="font-size: 16px;">By: <a>${post.author}</a></p>`)
        document.querySelector(".content").insertAdjacentHTML('afterbegin', `<h1>${post.title.slice(1)}</h1>`)
        document.querySelector(".content ").insertAdjacentHTML('afterend', `<a style="color: blue; font-size: 20px; font-family: Poppins;" href=""> &#35;${post.tag}</a>`)
    });
    