import sistema_operativo  from 'node:os'
console.log(sistema_operativo.version());
console.log(sistema_operativo.release());
console.log(sistema_operativo.arch());
console.log(sistema_operativo.hostname());

export default sistema_operativo



