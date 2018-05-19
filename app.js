const path = require("path");
const serve = require("serve");

const server = serve(path.join(__dirname, "public"), {
    port: 3000,
    ignore: ['node_modules']
});
