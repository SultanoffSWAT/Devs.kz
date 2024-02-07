// aaituov@gmail.com
// E88D44CA08FB40C2D62E1E54CEE4298703C9

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
            if (post.id <= 15) {
                const markup = `<li><a onclick="getPost(${post.id})" href="${post.title}/${post.title}.html">${post.title.slice(1)}</a></li>`;
                document.querySelector('.posts ol').insertAdjacentHTML("beforeend", markup)
            }
        })
    });

document.addEventListener("DOMContentLoaded", function (event) {
    var email = document.querySelector(".body #email");
    document.querySelector(".sendmail").addEventListener("click", printa);
    function printa(e) {
        e.preventDefault();
        Email.send({
            SecureToken: "ad110e05-3ed0-4deb-9608-3a0560e4d73f",
            To: `${email.value}`,
            From: "aaituov@gmail.com",
            Subject: "This is the subject",
            Body: "And this is the body"
        }).then(
            message => alert("Subscription confirmed! Please check spambox"),
            document.querySelector("#email").value = ""
        ).then();
    }
})

// aaituov@gmail.com
// E88D44CA08FB40C2D62E1E54CEE4298703C9
// ad110e05-3ed0-4deb-9608-3a0560e4d73f
