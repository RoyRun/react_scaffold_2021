
/*
* compiler 生命周期： 
1. 初始化： environment, entryOption,afterPlugins compile
2. 构建过程 'beforeRun',
      'beforeCompile',
      'make',
      'afterCompile',
3. 产物生成  'emit',
      'done',
*/
const chalk = require('chalk')

class LogPlugin {
    apply(compiler) {
        var start = Date.now()
        var statsHooks = ['environment', 'entryOption', 'afterPlugins', 'compile']
        var statsAsyncHooks = [
        'beforeRun',
        'beforeCompile',
        'make',
        'afterCompile',
        'emit',
        'done',
        ]
        statsHooks.forEach((hookName) =>{
            compiler.hooks[hookName].tap('log plugin', () => {
                console.log(`compiler hook ${hookName}, time: ${chalk.red(Date.now() - start)} ms`);
            }) //add plugin
        })
        statsAsyncHooks.forEach((hookName) => {
            compiler.hooks[hookName].tapAsync('log plugin',(data, callback) => {
                setTimeout(() => {
                    console.log(
                        `Compiler Async Hook ${hookName}, Time: ${chalk.red(
                          Date.now() - start
                        )}ms`
                      )
                      callback()
                }, 0)
            })
        })
        // compliation 构建过程实例
        compiler.hooks.compilation.tap('log plugin', compilation => {
            var compilationStatsHooks = [
                'addEntry',
                'succeedEntry',
                'finishModules',
                'seal',
                'optimize',
                'optimizeAssets',
                'afterSeal',
              ]
              compilationStatsHooks.forEach((hookName) => {
                compilation.hooks[hookName].tap('Sample Plugin', () => {
                  console.log(
                    `Compilation Hook ${hookName}, Time: ${chalk.red(
                      Date.now() - start
                    )}ms`
                  )
                })
            })
            // 构建单个模块
            compilation.hooks.buildModule.tap('Sample Plugin', (module) => {
                console.log(
                  `Compilation Hook buildModule, module ${module
                    .identifier()
                    .substr(__dirname.length + 1)} Time: ${chalk.red(
                    Date.now() - start
                  )}ms`
                )
              })
        })
    }
}
module.exports = LogPlugin