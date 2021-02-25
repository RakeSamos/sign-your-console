function sign(text, styleConfigArray) {
    return console.log(`%c ${text}`, styleConfigArray.join(';'));
  }
  
module.exports = sign;