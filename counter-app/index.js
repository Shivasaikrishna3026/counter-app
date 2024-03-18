let count=0
let totalsum=0

let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let totalEl=document.getElementById("total-el")
function increment()
{
    count += 1
    countEl.textContent=count
}

function save()
{

    saveEl.textContent += count + " - "
    alert("successfully saved")
    totalsum +=count
    count=0
    countEl.textContent=count
    
}

function total()
{
    
    totalEl.textContent ="Total entries are: "+totalsum

}