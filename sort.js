const mas = [4, 7, 2, 6, 5, 1];
for (var i=0; i<mas.length-1; i++){
    for (var j=0; j<mas.length-1; j++){
        if (mas[j]<mas[j+1]){
        let a=mas[j];
        mas[j]=mas[j+1];
        mas[j+1]=a;
    }
}
}
console.log(mas)
