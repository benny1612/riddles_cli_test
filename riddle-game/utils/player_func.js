// יצירת שחקן
export function createPlayer(name){
    return {name:name,time:[]}
}
// הוספת זמן לאובייקט השחקן 
export function addSolveTime(player, seconds){
    player.time.push(seconds)
    return player
}
// הצגת זמן כולל וממוצע
export function showStats(player){
    const total = player.time.reduce((partialSum, a) => partialSum + a, 0);
    const len= player.time.length
    console.log(`total time = ${total} seconds`)
     console.log(`Average time per riddle =  ${total/len} seconds`)
}






