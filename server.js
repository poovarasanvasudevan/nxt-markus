require('marko/node-require').install();

const express = require('express')
const next = require('next')
const helmet = require('helmet')
const path = require('path')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextObj = next({dev})
const handle = nextObj.getRequestHandler()
const sassMiddleware = require('node-sass-middleware');
const markoExpress = require('marko/express');

const apiRouter = require('./routes/api/index')
const JsonRequestMiddleware = require('./middleware/JsonRequestMiddleware')

var isProduction = process.env.NODE_ENV === 'production';

nextObj.prepare()
    .then(() => {
        const app = express()
        app.use(sassMiddleware({
            src: path.join(__dirname , 'static','dep'),
            dest: path.join(__dirname, 'static' , 'css'),
            debug: true,
            indentedSyntax: true,
            outputStyle: 'compressed',
            prefix:  '/static/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
        }));
        app.use('/static', express.static(path.join(__dirname, 'static')))
        app.use(markoExpress());

        app.use(helmet())
        app.use('/', require('./routes/page/index'))
        app.use('/api/v1', [JsonRequestMiddleware], apiRouter)
        app.get('/service-worker.js',(req,res) => {
            const filePath = path.join(__dirname, '/static/js/sw.js')
            res.sendFile(filePath)
        })
        app.get('/a', (req, res) => {
            res.marko(require('./view/pages/landing.marko'), {
                name: 'Frank',
                count: 30,
                colors: ['red', 'green', 'blue']
            });
        })

        app.get('/b', (req, res) => {
            return nextObj.render(req, res, '/a', req.query)
        })

        app.get('/posts/:id', (req, res) => {
            return nextObj.render(req, res, '/posts', {id: req.params.id})
        })

        app.get('*', (req, res) => {
            return handle(req, res)
        })

        app.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })