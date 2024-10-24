function contarMe(string) {
    let count = string.split('me').length 
    if (string.indexOf('mex') != -1) {
        return 0;
    }else {
    return count - 1;
}
}

console.log(contarMe('me me me mxe me me me me me me me me me me'))
console.log(contarMe(' me me '));
console.log(contarMe('mexisherex'));

console.log(contarMe('meisher'));
console.log(contarMe('xmeisherx'));

console.log(contarMe('xismerxmeimerx'));
console.log(contarMe('xmeisherxmeishermeisherx'));