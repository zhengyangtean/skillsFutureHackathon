const path = require("path");
const serve = require("serve");

const server = serve(path.join(__dirname, "public"), {
    port:  process.env.PORT,
    ignore: ['node_modules']
});
