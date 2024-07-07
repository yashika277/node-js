const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dupygjsu7',
    api_key: '349391987791236',
    api_secret: '1iuRflTxmefWFcalC-FE4o-W7X8'
});


let uploadImage = (path) => {
    return cloudinary.uploader.upload(path,
        { public_id: "olympic_flag" },
        function (error, result) { return result });
}

module.exports = uploadImage