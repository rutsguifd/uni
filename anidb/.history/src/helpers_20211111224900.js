HandleSearch(animelist, search_query) = async () => {
    animelist.value = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search_query.value}`)
        .then(res => res.json())
        .then(data => data.results);

console.log(animelist.value)
    search_query.value = "";
}

export default HandleSearch