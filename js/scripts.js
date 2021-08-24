let pokemonRepository= (function(){
  let pokemonList=[
    {
        name: "Bulbasaur",
        height: 0.7,
        types: ["grass", "poison"]
    },{
        name: "Ivysaur",
        height: 1,
        types: ["grass","poison"]
    },{
        name: "Venusaur",
        height: 2,
        types: ["grass","poison"]
    }];
    pokemonList.forEach(item =>{
      console.log (item)
    })
    function getall(){
      return pokemonList;
    }
    function add(newpokemon){
      pokemonList.push(newpokemon)
    }
    return  {
      getall: getall,
      add:add
    }

})()
pokemonRepository.getall().forEach(item=>{
  console.log (item)
})
