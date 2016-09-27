---
title: 'Simple HTTP server with Python'
date: 2016-04-16
layout: Post
author:
  - JD
tag:
  - learn
  - python
  - http
  - server
category:
  - stuff
---

Sometimes it's convenient to run a very simple HTTP server just to serve web contents from your current directory.

In a system with [Python](https://www.python.org/) installed (Mac OS & many Linux Distros come with Python out of the box), we can run a simple command in the current directory to serve its web content via localhost.

For instance:

```bash
python -m SimpleHTTPServer 8000
```

However, SimpleHTTPServer is not asynchronous and often can't serve many large files.

We can wrap the SimpleHTTPServer with Python's threading feature in SocketServer to achieve a simple server that's capable of async serving files. 
Reference: [Multithreaded python simple http server](https://kdecherf.com/blog/2012/07/29/multithreaded-python-simple-http-server/)

```python
#!/usr/bin/env python

import SocketServer
import BaseHTTPServer
import SimpleHTTPServer

class ThreadingSimpleServer(SocketServer.ThreadingMixIn, BaseHTTPServer.HTTPServer):
    pass

import sys

if sys.argv[1:]:
    port = int(sys.argv[1])
else:
    port = 3000

server = ThreadingSimpleServer(('', port), SimpleHTTPServer.SimpleHTTPRequestHandler)
try:
    while 1:
        sys.stdout.flush()
        server.handle_request()
except KeyboardInterrupt:
    print "Interrupted, exiting..."
```

Create a file named `serve.py` with content above in the current folder. Apply a read permission if there isn't one

```bash
chmod +x serve.py
```

Then we can start serving the web content of current directory by running

```bash
./serve.py <<port>>
```

`<<port>>` is optional and set to `3000` by default. We can then access the web content by going to `http://localhost:<<port>>`
