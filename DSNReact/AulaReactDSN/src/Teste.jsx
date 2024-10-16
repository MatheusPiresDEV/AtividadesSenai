export default function Teste (){

    var pessoas = [
        {
        nome: "Oscar Gado",
        idade: 89,
        escola: "SESC"
        },
        {
        nome: "Dromedario",
        idade: 23,
        escola: "SESC"
        }
    ]

        const MapP = ({listaP}) => {
            return listaP.map((ps,index) =>
            <div key={index}>
            <h1>{`Nome = ${ps.nome}`}</h1>
            <h1>{`Idade = ${ps.idade}`}</h1>
            <h1>{`Escola = ${ps.escola}`}</h1>
            </div>
            )
        }    
        return(
            <>
                <MapP listaP = {pessoas}/>
            </>
        
        )

    

}