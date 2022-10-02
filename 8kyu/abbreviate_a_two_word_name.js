function abbrevName(name){

    let nameArr = name.split(' ').map(x => x.toUpperCase())
    return nameArr[0][0] + '.' + nameArr[1][0]
}