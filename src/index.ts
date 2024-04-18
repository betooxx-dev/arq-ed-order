import express from 'express';
import signale from 'signale';
import { OrderRouter } from './order/infrastructure/order.routes';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();
app.disable("x-powered-by");

app.use(express.json());
app.use(cors({ origin: 'https://comfy-cranachan-cb3bd1.netlify.app/', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD', 'PREFLIGHT', 'CONNECT'],
    credentials: true,
}));

app.use('/order', OrderRouter);

app.listen(port, () => {
    signale.success(`Server running on port ${port}`);
});