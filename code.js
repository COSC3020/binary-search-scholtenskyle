function binarySearch(list, element) {
    var listBeg = 0;
    var listEnd = (list.length - 1);

    var lowNum = -1;
    
    while (listBeg <= listEnd){
        var listCenter = Math.floor((listBeg + listEnd) / 2);
        if (element <= list[listCenter]){
            listEnd = listCenter - 1;
        }
        if (list[listCenter] == element){
            lowNum = listCenter;
        }
        else if (element > list[listCenter]){
            listBeg = listMid + 1;
        }
    }
    return lowNum;
}
