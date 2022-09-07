



function countDown(num){
    console.log(num)
 setInterval(()=>{
if(num > 0){
    num--
    console.log(num)
}else{
    clearInterval()
    console.log('DONE!')
}
 }, 1000, num)

}

let counter = 0





function randomGame(){
 let rnum = Math.random()
 let count = 0
    if (rnum > .75){
        count++
        console.log(count)
        clearInterval()
    } else{

    }

if(rnum > .75){
    count++
    console.log(count)
    console.log(rnum)
    clearInterval()
    console.log('DONE!')
} else {
    count++
    console.log(count)
    console.log(rnum)
}

}


//setInterval(randomGame, 1000)

//countDown(5)
randomGame()

setInterval(randomGame, 1000)