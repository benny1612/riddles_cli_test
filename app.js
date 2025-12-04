 import input from 'analiza-sync';
 import {createPlayer,addSolveTime,showStats} from "./riddle-game/utils/player_func.js"
import all_riidels from "./riddle-game/riddles/all_riidels.js"
import { askRiddle,measureSolveTime } from './riddle-game/utils/Riddle_func.js';
function main (){
    console.log("this is a welcome message:")
    const name = input ("hey enter your name: ")
    const player = createPlayer(name)
    console.log(`hey ${name}!`)
   const r1=measureSolveTime(askRiddle,all_riidels[0])
   addSolveTime(player,r1)
    const r2=measureSolveTime(askRiddle,all_riidels[1])
    addSolveTime(player,r2)
    const r3=measureSolveTime(askRiddle,all_riidels[2])
    addSolveTime(player,r3)
    showStats(player)
   





}
main()
