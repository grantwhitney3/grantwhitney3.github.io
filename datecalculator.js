function getFirstDate() {
    let firstDate = document.getElementById("first_date");
    let firstDateObj = new Date(firstDate.value);

    let secondDate = document.getElementById("second_date");
    let secondDateObj = new Date(secondDate.value);
    // alert(firstDateObj);
    // alert(secondDateObj);
    let diff = Math.abs(((firstDateObj - secondDateObj) / 1000 / 60 / 60 / 24));
    alert(diff + " days between the two dates.");
}

function dateDiff() {

}