function beforesubmit()
{
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("Inputdate : ", inputdate.value); //Getting date into String => now to convert string to date
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formattedDate;
}