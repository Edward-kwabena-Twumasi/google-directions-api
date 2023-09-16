
function getDateFromTimeStamp(timestamp){
    var date = new Date(timestamp * 1000)
    return date.toUTCString()
}

console.log(getDateFromTimeStamp(1693771200))