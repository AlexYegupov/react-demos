var http = require('http'),
    browserify = require('browserify'),
    literalify = require('literalify'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');

// export default
import App from './app';

http.createServer(function(req, res) {
  if (req.url === '/' || req.url === '/page2') {
    res.setHeader('Content-Type', 'text/html');
    var props = {
      items: [
        'Item 0',
        'Item 1',
      ]
    };
    console.log(`Serer rendering:`, req.url)

    var html = ReactDOMServer.renderToStaticMarkup(
      <body>
        <div
          id="content"
          dangerouslySetInnerHTML={{
            __html: ReactDOMServer.renderToString(
              <App items={props.items} url={req.url} />
            )
        }} />

        <script dangerouslySetInnerHTML={{__html:
        'var APP_PROPS = ' + JSON.stringify(props) + ';' +
        'var URL = ' + JSON.stringify(req.url) + ';'
        }}/>
        <script src="https://cdn.jsdelivr.net/npm/react@16.7.0/umd/react.production.min.js"/>
        <script src="https://cdn.jsdelivr.net/npm/react-dom@16.7.0/umd/react-dom.production.min.js"/>
        <script src="/bundle.js"/>
      </body>
    );
    console.log(`s r:`, html)
    res.end(html);
  } else  if (req.url == '/bundle.js') {
    res.setHeader('Content-Type', 'text/javascript');
    browserify()
      .add('./browser.js')
      .transform(literalify.configure({
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
      }))
      .bundle()
      .pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
}).listen(3007, function(err) {
  if (err) throw err;
  console.log('Listening on 3007.c..');
})
