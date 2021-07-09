import { shuffle } from "lodash";
import FontAwesome from "./fontAwesome";
const NUMBER_CARDS = 20;

export default ()=>{
    const fontAwesome = FontAwesome();
    let cards = []

    while(cards.length<NUMBER_CARDS){
        const index = Math.floor(Math.random()*fontAwesome.length)
        const card={
            icono: fontAwesome.splice(index, 1)[0],
            fueAdivinado: false
        }

        cards.push(card)
        cards.push({...card})
    }

    return shuffle(cards);
}