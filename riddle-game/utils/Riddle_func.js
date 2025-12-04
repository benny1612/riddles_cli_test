 import input from 'analiza-sync';
//  קבלת תשובה לחידה עם בחירה
function askchoices_r(riddleObj){
    console.log(riddleObj.name,riddleObj.taskDescription,riddleObj.choices)
    let flag = true
    while (flag){
        let answer = input("enter an answer : ")
        switch(answer){
                case riddleObj.correctAnswer:
                    console.log("good")
                    flag=false
                    break;
    }
}}
// קבלת תשובה לחידה בלי בחירה
function no_choices_r(riddleObj){
    console.log(riddleObj.name,riddleObj.taskDescription)
    let flag = true
    while (flag){
        let answer = input("enter an answer : ")
        switch(answer){
                case riddleObj.correctAnswer:
                    console.log("good answer!")
                    flag=false
                    break;
    }
}}

// פונקציה שבודקת אם זה חידה עם בחירה או בלי ומחזירה פונקציה בהתאם 
export function askRiddle(riddleObj){
    if (riddleObj.hasOwnProperty('choices') ){
        askchoices_r(riddleObj)}
        else{no_choices_r(riddleObj)
    
    }}
        
          

// פונקציה שמודדת את הזמן ומחזירה בשניות
export function measureSolveTime(fn,r_num){
        const startTime = performance.now()
        fn(r_num)
        const endTime = performance.now()
        var result =(endTime - startTime)/1000
        return result
    }








