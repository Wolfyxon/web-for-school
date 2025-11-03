const http = require("http");
const formidable = require("formidable");

function contentType(res, status, type) {
    res.writeHead(status, {
        "Content-Type": type
    });
}

const server = http.createServer((req, res) => {
    if(req.url == "/fileupload") {
        const ct = "text/plain";
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if(err) {
                contentType(res, 500, ct);
                res.write(`Form error: ${err}`)
                  res.end();
                return;
            }

            console.log("Fields:", fields);
            console.log("Files:", files);

            contentType(res, 200, ct);
            res.write("Skibidi");
              res.end();
        });
        
        return;
    }

    contentType(res, 200, "text/html");
    res.write(`
        <form action='/fileupload' method='post' enctype='multipart/form-data'>
            <input type='file' name='file' /> <br />
            <input type='submit' />
        </form>
    `)
    res.end();
});

server.listen(8080);