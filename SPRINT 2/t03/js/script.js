
do{
    var idiomNumber = prompt("Enter number 1-10 to get idiom:");
    var check_number = /^([1-9]|10)$/
    var check = false;
    if(check_number.test(idiomNumber)){
        idiomNumber = parseInt(idiomNumber);
        switch(idiomNumber){
            case 1:
                alert("Back to square 1");
                break;
            case 2:
                alert("Goody 2-shoes");
                break;
            case 3:
            case 6:
                alert("Two's company, three's a crowd");
                break;
            case 4:
            case 9:
                alert("Counting sheep");
                break;
            case 5:
                alert("Take five");
                break;
            case 7:
                alert("Seventh heaven");
                break;
            case 8:
                alert("Behind the eight-ball");
                break;
            default:
                alert("Cheaper by the dozen");
                break;
        }
    }
    else
        check = true;
}while(check)
