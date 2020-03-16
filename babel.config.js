module.exports = {
    plugins: [
        [
            'import',
            {
                libraryName: 'ant-design-vue',
                libraryDirectory: 'es',
                style: true,
            },
        ],
    ],
    presets: [
        [
            '@vue/app',
            {
                polyfills: [
                    'es6.promise',
                    'es6.symbol',
                    'es6.array.iterator',
                    'es6.object.assign',
                    'es7.promise.finally',
                ],
            },
        ],
    ],
}
