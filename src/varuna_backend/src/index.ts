import { Server } from 'azle';
import express, { Request, Response } from 'express';
import cors from 'cors';

export default Server(() => {
    type Sample = {
        id: string,
        dateTime: Date,
        pH: number,
        temperature: number,
        turbidity: number,
    };

    let sample: Sample = {
        id: "872910203810",
        dateTime: new Date('2024-07-27T16:56:00'),
        pH: 7.8,
        temperature: 23.5,
        turbidity: 430,
    };

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get('/greet', (req: Request, res: Response) => {
        return res.status(200).send({ message: 'Hello World from Azle!' });
    });

    app.get('/sample', (req: Request, res: Response) => {
        return res.status(200).send({ message: sample });
    });

    app.post('/sample/post', (req: Request, res: Response) => {
        const { id, dateTime, pH, temperature, turbidity } = req.body;
        if (!id || !dateTime || !pH || !temperature || !turbidity) {
            return res.status(400).send({ message: 'Incomplete sample data' });
        }

        sample = {
            id,
            dateTime: new Date(dateTime),
            pH,
            temperature,
            turbidity,
        };

        return res.status(200).send({ message: 'Sample updated successfully', sample });
    });

    return app.listen();
});