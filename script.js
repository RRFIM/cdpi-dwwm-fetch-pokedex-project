function main() 
{
    handleLeftPanel();
    handleRightPanel();
    Evolutions();
}


function handleRightPanel() {
    const PokeInfo = document.body.querySelector(".poke-info")
    const PokeInput_elem = document.body.querySelector(".poke-search")
    const PokeImage_elem = document.body.querySelector(".poke-image")
    const PokeName_elem = document.body.querySelector(".poke-name")
    const PokeId_elem = document.body.querySelector(".poke-id")
    const PokeTemplateType_elem = document.body.querySelector(".poke-template-types") 
    PokeInput_elem.addEventListener("change", function() {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + PokeInput_elem.value).then(res => res.json())
        .then(data => {
            //Ballies
            const UserId = data.id
            const UserName = data.name
            const UserImg = data.image
            const UserTypes = data.apiTypes

            PokeId_elem.textContent = "n°"+UserId
            PokeName_elem.textContent =  UserName
            PokeImage_elem.setAttribute("src", UserImg)

            UserTypes.forEach(UserType_obj => {
                const PokeType = PokeTemplateType_elem.content.cloneNode(true)
                PokeType.querySelector(".poke-type").setAttribute("src", UserType_obj.image)

                PokeInfo.appendChild(PokeType)
            })
        })
    }); 
}


function handleLeftPanel() 
{
    const PokeList = document.querySelector(".poke-list");
    fetch("https://pokebuildapi.fr/api/v1/pokemon/").then(res => res.json())
        .then(PokeList_Array => {
            PokeList_Array.forEach(PokeItem_obj => {
                const PokeTemplateItem = document.querySelector(".poke-template-item")
                const PokeItem = PokeTemplateItem.content.cloneNode(true)
                PokeItem.querySelector(".poke-image").setAttribute("src", PokeItem_obj.image)
                PokeItem.querySelector(".poke-id").textContent = PokeItem_obj.id
                PokeItem.querySelector(".poke-name").textContent = PokeItem_obj.name

                PokeList.appendChild(PokeItem)
        });
    })
}

function Evolutions()
{
    const PokeEvolutions = document.querySelector("poke-evolution")
    const PokeTemplateEvolution = document.querySelector(".poke-evolution-template") 
    const PokeInput_elem = document.body.querySelector(".poke-search")
    PokeInput_elem.addEventListener("change", function() {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + PokeInput_elem.value).then(res => res.json())
        .then(dataEvolution => {       
            const PokeEvolutionItem = dataEvolution.apiEvolutions
            PokeEvolutionItem.forEach(PokeEvolution_obj => {
                const PokeEvolution = PokeTemplateEvolution.content.cloneNode(true)
                PokeEvolution.querySelector(".poke-next-name").textContent = PokeEvolution_obj.name
                PokeEvolution.querySelector(".poke-next-id").textContent = PokeEvolution_obj.pokedexId
                PokeEvolution.querySelector(".poke-next-image").setAttribute("src", dataEvolution.image+1)
    
                PokeEvolutions.appendChild(PokeEvolution)
            })
        })
    })
}

    
main()