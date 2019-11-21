const presets = [
    "@babel/preset-react",
    [
        "@babel/preset-env",
        {
            useBuiltIns: "entry",
            loose: true
            // targets: {
            //     node: "current"
            // }
        }
    ]
]

const plugins = [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-object-rest-spread",
    [
        "import",
        {
            libraryName: "antd",
            libraryDirectory: "es"
        }
    ]
]

const env = {
    build: {
        ignore: ["*/.test.js", "snapshots", "tests"]
    }
}

const ignore = ["node_modules"]

module.exports = {
    presets,
    plugins,
    env,
    ignore
}
