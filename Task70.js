var array1=[1,2,3,4,5,6];
var array2=[7,1,4,6,5];

var combine=[];

for ( i = 0; i < array1.length; i++) {
    combine[combine.length]=array1[i];

}
for ( j=0;j<array2.length;j++){
    combine[combine.length]=array2[j];
}

//find unique elements
var uniqueElements=[];
for( var k=0;k<combine.length;k++){
    var element=combine[k];
    var count=0;

for(var l=0;l<combine.length;l++){
    if(combine[l]===element){
        count++;
}
}
if(count===1){
    uniqueElements[uniqueElements.length]= element;

}

}
console.log(uniqueElements);