#!/usr/bin/env node
var userArgv = process.argv.slice(2);

var searchPattern = userArgv[0];

var exec = require('child_process').exec;


var child = exec('ls -a | grep ' + searchPattern, function(err, stdout, stderr){
  if(err) throw `没有${searchPattern}类型的文件`;
  arr = stdout.split('\n');
  console.log(`${searchPattern}文件有${arr.length-1}个`);
  console.log(stdout);
});
