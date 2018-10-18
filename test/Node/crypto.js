/**
 * Created by 熙冰 on 2018/10/18
 * crypto 模块提供了加密功能，包含对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。
 * http://nodejs.cn/api/crypto.html
 */
let crypto;
crypto = require('crypto');
try {
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
        .update('I love cupcakes')
        .digest('hex');
    console.log(hash);
} catch (err) {
    console.log('不支持 crypto!');
}


/*
* Cipher类的实例用于加密数据。这个类可以用在以下两种方法中的一种:
* 作为stream，既可读又可写，未加密数据的编写是为了在可读的方面生成加密的数据，或者
* 使用cipher.update()和cipher.final()方法产生加密的数据。
* */
const cipher = crypto.createCipher('aes192', 'a password');

let encrypted = '';
cipher.on('readable', () => {
    const data = cipher.read();
    if (data)
        encrypted += data.toString('hex');
});
cipher.on('end', () => {
    console.log(encrypted);
    // Prints: ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504
});

cipher.write('some clear text data');
cipher.end();
