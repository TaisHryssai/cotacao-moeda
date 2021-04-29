
const carries = (content, asDefault) => {
        return content != undefined ? content : asDefault;
}

//Apenas passar o formato em DD-MM-YYYY que o pai se vira pra fazer o resto
const convertDate = (date, pattern) => {

        date = date + ''
        pattern = pattern.toUpperCase();


        let day = date.substring(6);
        let month = date.substring(4,6);
        let year = pattern.includes('YYYY') ? date.substring(0,4) : date.substring(0,2);

        pattern = pattern.replace('DD',day);
        pattern = pattern.replace('MM',month);
        pattern = year.length>2 ? pattern.replace('YYYY',year) : pattern.replace('YY',year);


        return pattern;
}

//Deve ser passada a data digitada(01-01-2020) e o formato dela (dd-mm-yyyy)
const dateInt = (date, pattern) => {

        pattern = pattern.toUpperCase();

        let year =
        pattern.includes('YYYY') ? date.substring(pattern.indexOf('YYYY'),pattern.indexOf('YYYY') + 4)
        :
        date.substring(pattern.indexOf('YY'),pattern.indexOf('YY') + 2)

        let month = date.substring(pattern.indexOf('MM'),pattern.indexOf('MM') + 2)
        let day = date.substring(pattern.indexOf('DD'),pattern.indexOf('DD') + 2)

        return parseInt(year + month + day);

}




export {
        carries,
        convertDate,
        dateInt

}