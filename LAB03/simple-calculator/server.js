"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 3000;
// Calculator function
function calculate(method, x, y) {
    var result;
    var operator;
    switch (method.toLowerCase()) {
        case 'add':
            result = x + y;
            operator = '+';
            break;
        case 'subtract':
            result = x - y;
            operator = '-';
            break;
        case 'multiply':
            result = x * y;
            operator = '*';
            break;
        case 'divide':
            if (y === 0) {
                return 'Error: Division by zero is not allowed';
            }
            result = x / y;
            operator = '/';
            break;
        default:
            return "Error: Invalid method '".concat(method, "'. Please use add, subtract, multiply, or divide");
    }
    return "".concat(x, " ").concat(operator, " ").concat(y, " = ").concat(result);
}
// Route handler for /lab2
app.get('/lab2', function (req, res) {
    var method = req.query.method;
    var xParam = req.query.x;
    var yParam = req.query.y;
    // Convert parameters to numbers
    var x = parseFloat(xParam);
    var y = parseFloat(yParam);
    // Validate all parameters
    if (!method || !xParam || !yParam) {
        return res.status(400).send("\n            <!DOCTYPE html>\n            <html>\n            <head>\n                <title>Calculator - Error</title>\n                <style>\n                    body { font-family: Arial, sans-serif; margin: 40px; }\n                    .error { color: #d32f2f; background: #ffebee; padding: 20px; border-radius: 5px; }\n                    .example { background: #e8f5e9; padding: 15px; border-radius: 5px; margin-top: 20px; }\n                </style>\n            </head>\n            <body>\n                <h1>Missing Parameters</h1>\n                <div class=\"error\">\n                    <p>Please provide all three parameters: method, x, and y</p>\n                    <p>Example: /lab2?method=add&x=16&y=4</p>\n                </div>\n                <div class=\"example\">\n                    <h3>Try these examples:</h3>\n                    <ul>\n                        <li><a href=\"/lab2?method=add&x=16&y=4\">Add: 16 + 4</a></li>\n                        <li><a href=\"/lab2?method=subtract&x=16&y=4\">Subtract: 16 - 4</a></li>\n                        <li><a href=\"/lab2?method=multiply&x=16&y=4\">Multiply: 16 \u00D7 4</a></li>\n                        <li><a href=\"/lab2?method=divide&x=16&y=4\">Divide: 16 \u00F7 4</a></li>\n                    </ul>\n                </div>\n            </body>\n            </html>\n        ");
    }
    // Check if x and y are valid numbers
    if (isNaN(x) || isNaN(y)) {
        return res.status(400).send("\n            <!DOCTYPE html>\n            <html>\n            <body>\n                <h1>Invalid Numbers</h1>\n                <p>Please provide valid numbers for x and y parameters</p>\n                <p>You provided: x=\"".concat(xParam, "\", y=\"").concat(yParam, "\"</p>\n            </body>\n            </html>\n        "));
    }
    // Calculate and send result
    var result = calculate(method, x, y);
    res.send("\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <title>Calculator Result</title>\n            <style>\n                body { font-family: Arial, sans-serif; margin: 40px; }\n                .result { font-size: 24px; color: #2e7d32; background: #e8f5e9; padding: 20px; border-radius: 5px; }\n                .examples { margin-top: 30px; }\n                .operation { margin: 10px 0; }\n                a { color: #1976d2; text-decoration: none; }\n                a:hover { text-decoration: underline; }\n            </style>\n        </head>\n        <body>\n            <h1>Simple Calculator</h1>\n            <div class=\"result\">\n                <h2>Result:</h2>\n                <p>".concat(result, "</p>\n            </div>\n            \n            <div class=\"examples\">\n                <h3>Try other operations:</h3>\n                <div class=\"operation\">\n                    <a href=\"/lab2?method=add&x=").concat(x, "&y=").concat(y, "\">Add: ").concat(x, " + ").concat(y, "</a>\n                </div>\n                <div class=\"operation\">\n                    <a href=\"/lab2?method=subtract&x=").concat(x, "&y=").concat(y, "\">Subtract: ").concat(x, " - ").concat(y, "</a>\n                </div>\n                <div class=\"operation\">\n                    <a href=\"/lab2?method=multiply&x=").concat(x, "&y=").concat(y, "\">Multiply: ").concat(x, " \u00D7 ").concat(y, "</a>\n                </div>\n                <div class=\"operation\">\n                    <a href=\"/lab2?method=divide&x=").concat(x, "&y=").concat(y, "\">Divide: ").concat(x, " \u00F7 ").concat(y, "</a>\n                </div>\n                \n                <h3>Example operations:</h3>\n                <ul>\n                    <li><a href=\"/lab2?method=add&x=16&y=4\">16 + 4 = 20</a></li>\n                    <li><a href=\"/lab2?method=subtract&x=16&y=4\">16 - 4 = 12</a></li>\n                    <li><a href=\"/lab2?method=multiply&x=16&y=4\">16 \u00D7 4 = 64</a></li>\n                    <li><a href=\"/lab2?method=divide&x=16&y=4\">16 \u00F7 4 = 4</a></li>\n                </ul>\n            </div>\n            \n            <div style=\"margin-top: 40px; padding: 15px; background: #f5f5f5; border-radius: 5px;\">\n                <h4>URL Format:</h4>\n                <code>/lab2?method=[add|subtract|multiply|divide]&x=[number]&y=[number]</code>\n            </div>\n        </body>\n        </html>\n    "));
});
// Root route
app.get('/', function (req, res) {
    res.send("\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <title>Simple Calculator</title>\n            <style>\n                body { font-family: Arial, sans-serif; margin: 40px; }\n                .container { max-width: 800px; margin: 0 auto; }\n                .header { background: #1976d2; color: white; padding: 20px; border-radius: 5px; }\n                .examples { background: #f5f5f5; padding: 20px; border-radius: 5px; margin-top: 20px; }\n                .example-link { display: block; margin: 10px 0; padding: 10px; background: white; border-radius: 3px; }\n                code { background: #e0e0e0; padding: 2px 5px; border-radius: 3px; }\n            </style>\n        </head>\n        <body>\n            <div class=\"container\">\n                <div class=\"header\">\n                    <h1>LAB03: Node.js Simple Calculator</h1>\n                    <p>A simple calculator built with Express.js and TypeScript</p>\n                </div>\n                \n                <h2>How to Use:</h2>\n                <p>Use the following URL format to perform calculations:</p>\n                <p><code>/lab2?method=[operation]&x=[number]&y=[number]</code></p>\n                \n                <div class=\"examples\">\n                    <h3>Example Calculations:</h3>\n                    <a class=\"example-link\" href=\"/lab2?method=add&x=16&y=4\">\n                        \u2795 Add: 16 + 4 = 20\n                    </a>\n                    <a class=\"example-link\" href=\"/lab2?method=subtract&x=16&y=4\">\n                        \u2796 Subtract: 16 - 4 = 12\n                    </a>\n                    <a class=\"example-link\" href=\"/lab2?method=multiply&x=16&y=4\">\n                        \u2716\uFE0F Multiply: 16 \u00D7 4 = 64\n                    </a>\n                    <a class=\"example-link\" href=\"/lab2?method=divide&x=16&y=4\">\n                        \u2797 Divide: 16 \u00F7 4 = 4\n                    </a>\n                </div>\n                \n                <h3>Supported Operations:</h3>\n                <ul>\n                    <li><strong>add</strong> - Addition</li>\n                    <li><strong>subtract</strong> - Subtraction</li>\n                    <li><strong>multiply</strong> - Multiplication</li>\n                    <li><strong>divide</strong> - Division</li>\n                </ul>\n                \n                <div style=\"margin-top: 40px; padding: 15px; background: #e8f5e9; border-radius: 5px;\">\n                    <h4>Quick Test:</h4>\n                    <p>Try this test URL: <a href=\"/lab2?method=multiply&x=7&y=8\">Multiply 7 \u00D7 8</a></p>\n                </div>\n            </div>\n        </body>\n        </html>\n    ");
});
// 404 handler
app.use(function (req, res) {
    res.status(404).send("\n        <!DOCTYPE html>\n        <html>\n        <body>\n            <h1>404 - Page Not Found</h1>\n            <p>The requested URL ".concat(req.url, " was not found on this server.</p>\n            <p>Go to <a href=\"/\">home page</a> to use the calculator.</p>\n        </body>\n        </html>\n    "));
});
// Start server
app.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server running at http://localhost:".concat(PORT));
    console.log("\uD83D\uDCDD Calculator available at http://localhost:".concat(PORT, "/lab2"));
    console.log("\uD83D\uDD22 Try: http://localhost:".concat(PORT, "/lab2?method=add&x=16&y=4"));
});
