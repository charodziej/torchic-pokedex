const genID = (day, month, year) =>
{
    let date
    if(month.length>1)
        date = (day + month + year)
    else
        date = (day + '0' + month + year)

    const md5 = require('md5');
    date = md5(date)

    let dateNum = "0"
    for (let index = 0; index < date.length; index++)
    {
        if('0' <= date[index] && date[index] <= '9')
            dateNum = dateNum + date[index]
    }

    dateNum = parseInt(dateNum, 10)

    return dateNum
}

export default genID