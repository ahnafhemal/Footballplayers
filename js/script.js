const allPlayers = () => {
    const searchvalue = document.getElementById('search-box').value
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchvalue}`

    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))
}


const showPlayerDetails = (players) => {
    const perent = document.getElementById('player-container')



    for (const player of players) {
        console.log(player)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card border">
<div class="pro-pic">
    <img class="w-25" src="" alt="">
</div>
<h3>Name:</h3>
<h5>Country:</h5>
<p></p>
<div class="allbutton">
    <button class="btn btn-danger">Delete</button>
    <button class="btn btn-primary">Details</button>
</div>
</div>
        `
        perent.appendChild(div)
    }
}