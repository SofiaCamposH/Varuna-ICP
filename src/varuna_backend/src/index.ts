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

    type Article = {
        id: string,
        dateTime: Date,
        author: string,
        title: string,
        content: string,
    };

    type User = {
        id: string,
        name: string,
        location: string
    }

    let samples: Sample[] = [{
        id: "872910203810",
        dateTime: new Date('2024-07-27T16:56:00'),
        pH: 7.8,
        temperature: 23.5,
        turbidity: 430,
    }];

    let articles: Article[] = [{
        id: "345678990989",
        dateTime: new Date('2024-07-13T08:45:02'),
        author: "Juan Zepeda",
        title: "Principal fuente de microplásticos",
        content: "Las plantas tratadoras de agua son la mayor fuente de los microplásticos que llegan al ecosistema acuático",
    }];

    let users: User[] = [{
        id: "345678990989",
        name: "Los Arellano",
        location: "Delfino Naranjo 20, 20326 Aguascalientes, Ags",
    }];

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get('/greet', (req: Request, res: Response) => {
        return res.status(200).send({ message: '¡Bienvenido a Azle!' });
    });

    // Endpoints for "sample"

    app.get('/sample', (req: Request, res: Response) => {
        return res.status(200).send({ message: samples });
    });

    app.post('/sample/post', (req: Request, res: Response) => {
        const { id, dateTime, pH, temperature, turbidity } = req.body;
        if (!id || !dateTime || !pH || !temperature || !turbidity) {
            return res.status(400).send({ message: 'Incomplete sample data' });
        }

        const sample: Sample = {
            id,
            dateTime: new Date(dateTime),
            pH,
            temperature,
            turbidity,
        };

        samples.push(sample);

        return res.status(200).send({ message: 'Sample added successfully', sample });
    });

    app.delete('/sample/delete/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const sampleIndex = samples.findIndex(s => s.id === id);
        if (sampleIndex === -1) {
            return res.status(404).send({ message: 'Sample not found' });
        }

        samples.splice(sampleIndex, 1);
        return res.status(200).send({ message: 'Sample deleted successfully' });
    });

    // Endpoints for "article"

    app.get('/article', (req: Request, res: Response) => {
        return res.status(200).send({ message: articles });
    });

    app.post('/article/post', (req: Request, res: Response) => {
        const { id, dateTime, author, title, content } = req.body;
        if (!id || !dateTime || !author || !title || !content) {
            return res.status(400).send({ message: 'Incomplete article data' });
        }

        const article: Article = {
            id,
            dateTime: new Date(dateTime),
            author,
            title,
            content,
        };

        articles.push(article);

        return res.status(200).send({ message: 'Article added successfully', article });
    });

    app.delete('/article/delete/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const articleIndex = articles.findIndex(a => a.id === id);
        if (articleIndex === -1) {
            return res.status(404).send({ message: 'Article not found' });
        }

        articles.splice(articleIndex, 1);
        return res.status(200).send({ message: 'Article deleted successfully' });
    });

    // Endpoint for "user"

    app.get('/user', (req: Request, res: Response) => {
        return res.status(200).send({ message: users });
    });

    app.post('/user/post', (req: Request, res: Response) => {
        const { id, name, location } = req.body;
        if (!id || !name || !location) {
            return res.status(400).send({ message: 'Incomplete user data' });
        }

        const user: User = {
            id,
            name,
            location
        };

        users.push(user);

        return res.status(200).send({ message: 'User added successfully', user });
    });

    app.delete('/user/delete/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex === -1) {
            return res.status(404).send({ message: 'User not found' });
        }

        users.splice(userIndex, 1);
        return res.status(200).send({ message: 'User deleted successfully' });
    });

    // Endpoint for HTTPS outcall
    app.post('/https-outcall', async (req: Request, res: Response) => {
        try {
            const response = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/application-0-spqwjgx/endpoint/last_inferences', {
                headers: {
                    'X-Azle-Request-Key-0': 'X-Azle-Request-Value-0',
                    'X-Azle-Request-Key-1': 'X-Azle-Request-Value-1',
                    'X-Azle-Request-Key-2': 'X-Azle-Request-Value-2'
                }
            });
            const responseJson = await response.json();
            res.json(responseJson);
        } catch (error) {
            console.error('Error making HTTPS outcall:', error);
            res.status(500).send({ message: 'Error making HTTPS outcall', error });
        }
    });

    return app.listen();
});