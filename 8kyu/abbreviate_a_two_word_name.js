function abbrevName(name){

    let nameArr = name.split(' ').map(x => x.toUpperCase())
    return nameArr[0][0] + '.' + nameArr[1][0]
}

//alternative solution
function abbrevName(name){

    return name.split(' ').map(x => x[0].toUpperCase()).join('.')

}