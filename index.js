#!/usr/bin/env node

const { spawn } = require('child_process');
spawn('node', [ './node_modules/.bin/http-server', './dist/' ], { stdio: ['inherit', 'inherit', 'inherit']});
