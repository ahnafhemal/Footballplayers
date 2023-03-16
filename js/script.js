const allPlayers = () => {
    const searchvalue = document.getElementById('search-box').value
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchvalue}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayAllPlayer(data))
}


const displayAllPlayer = (players) => {

}