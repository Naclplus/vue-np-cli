#!/usr/bin/env node
const fs = require('fs');
const clone = require('git-clone')
const program = require('commander')
const shell = require('shelljs');
const log = require('tracer').colorConsole()


program
.command('init <dir>')
.action(function (dir) {
    let pwd = shell.pwd()
    clone(`https://github.com/Naclplus/vue-np-template.git`, pwd + `/${dir}`, null, function() {
        shell.rm('-rf', pwd + `/${dir}/.git`)
        log.info('模板工程建立完成')
    })
})

program.parse(process.argv)