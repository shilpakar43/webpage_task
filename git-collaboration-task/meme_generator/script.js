document.getElementById("newMeme").addEventListener("click", generateNewMeme);
document.getElementById("clearText").addEventListener("click", clearText);

function generateNewMeme() {
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch meme image.");
            return response.json();
        })
        .then(data => {
            document.getElementById("memeImage").src = data.message;
            document.getElementById("memeImage").alt = "Random Dog Meme";

            document.getElementById("topTextDisplay").innerText = topText;
            document.getElementById("bottomTextDisplay").innerText = bottomText;
        })
        .catch(error => {
            console.error("Fetch error:", error);
            alert("Could not load meme image.");
            document.getElementById("memeImage").src = "https://via.placeholder.com/400x300";
        });
}

function clearText() {
    document.getElementById("topText").value = "";
    document.getElementById("bottomText").value = "";
    document.getElementById("topTextDisplay").innerText = "";
    document.getElementById("bottomTextDisplay").innerText = "";
}
