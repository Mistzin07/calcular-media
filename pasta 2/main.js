let lista1 = ['bom','lider','otimo','sensacional','lindo','facil']
let i = 0
setInterval(()=>{
            document.querySelector('div').innerHTML = loadMesage[i]
            i++
            if(i >= lista1.length){
                i=0
            }
        },500)
