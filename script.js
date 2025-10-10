function main() {
    handleLeftPanel();
    handleRightPanel();
}


function handleRightPanel() {
    const PokeInput_elem = document.body.querySelector(".poke-search")
    const PokeImage_elem = document.body.querySelector(".poke-image")
    const PokeName_elem = document.body.querySelector(".poke-name")
    const PokeId_elem = document.body.querySelector(".poke-id")
    PokeInput_elem.addEventListener("change", function () {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + PokeInput_elem.value).then(res => res.json())
            .then(data => {
                //Ballies
                const UserId = data.id
                const UserName = data.name
                const UserImg = data.image
                
                PokeId_elem.textContent = "n°"+UserId
                PokeName_elem.textContent =  UserName
                PokeImage_elem.setAttribute("src", UserImg)
                
                
                
            });
            
            
            
        })
    }


function handleLeftPanel() {
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




function Types()
        {
        const PokeTypeAPI = data.apiTypes
        const PokeTypes = document.querySelector(".poke-types")
        PokeTypes.innerHTML = "";
        PokeTypeAPI.forEach(PokeType_Obj => {
            const PokeTypes = document.querySelector(".poke-types")
            const PokeTemplateType = document.querySelector(".poke-template-type")
            const PokeType = PokeTemplateType.content.cloneNode(true)
            
            PokeType.querySelector(".poke-type-icon").setAttribute("src", PokeType_Obj.image)
            
            PokeTypes.appendChild(PokeType)
        })
    }

function Evolutions()
    
main()