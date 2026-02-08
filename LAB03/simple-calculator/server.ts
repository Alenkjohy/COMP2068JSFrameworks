import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Calculator function
function calculate(method: string, x: number, y: number): string {
    let result: number;
    let operator: string;

    switch (method) {
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
            return `Error: Invalid method '''${method}'''. Please use add, subtract, multiply, or divide`;
    }

    return `${x} ${operator} ${y} = ${result}`;
}

// Route handler
app.get('/lab2', (req: Request, res: Response) => {
    const method = req.query.method as string;
    const x = parseFloat(req.query.x as string);
    const y = parseFloat(req.query.y as string);

    // Validate parameters
    if (!method || isNaN(x) || isNaN(y)) {
        return res.status(400).send(`
            <h1>Missing or invalid parameters</h1>
            <p>Please provide: method, x, and y parameters</p>
            <p>Example: /lab2?method=add&x=16&y=4</p>
        `);
    }

    // Calculate and send result
    const result = calculate(method, x, y);
    res.send(`
        <h1>Calculator Result</h1>
        <h2>${result}</h2>
        <br>
    `);
});

// Root route
app.get('/', (req: Request, res: Response) => {
    res.send(`
        <h1>Simple Calculator</h1>
        <p>Go to <a href="/lab2?method=add&x=16&y=4">/lab2?method=add&x=16&y=4</a> to use the calculator</p>
        <p>Format: /lab2?method=[operation]&x=[number]&y=[number]</p>
        <p>Operations: add, subtract, multiply, divide</p>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});