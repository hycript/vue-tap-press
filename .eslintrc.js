module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "globalReturn": true,// 允许在全局作用域下使用 return 语句
            "jsx": true,// 启用 JSX
            // "impliedStrict": true,// impliedStric
        }
    },
    "extends": [
        "standard",
        "vue"
    ],
    "plugins": [
        "babel",
        "html",
        "react",
        "vue"
    ],
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "globals": {
        "$": false,
        "location": false,
        "__DEV__": false,
        "__PROD__": false,
        "__TEST__": false,
        "SERVICE_URL": false,
    },
    "rules": {
        "no-extra-semi": 2,//多余的分号
        "no-unexpected-multiline": 0,//行尾缺少分号可能导致一些意外情况
        "no-alert": 0,//禁止使用alert confirm prompt
        "no-empty": 0,//空代码块
        "no-unused-expressions": 2,//禁止无用的表达式
        "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
        "linebreak-style": [0, "windows"],//换行风格
        "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
        "no-multi-str": 2,//字符串不能用\换行
        "no-multi-spaces": 1,//不能用多余的空格
        "no-irregular-whitespace": 0,//不能有不规则的空格
        "comma-dangle": [0, "always"],//对象字面量项尾不能有逗号

        "keyword-spacing": [0, { "before": true, "after": true, "overrides": {} }],//
        "space-after-keywords": [0, "always"],//关键字后面是否要空一格
        "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
        "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
        "space-in-parens": [0, "never"],//小括号里面要不要有空格
        "space-infix-ops": 0,//中缀操作符周围要不要有空格
        "space-return-throw-case": 0,//return throw case后面要不要加空格
        "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
        "spaced-comment": 0,//注释风格要不要有空格什么的

        // "indent": [0, "tab", {"SwitchCase": 1}],//缩进
        "indent": [1, 4],
        "no-tabs": 0,
        "quotes": [1, "single"],//建议使用单引号
        "jsx-quotes": [0],
        "semi": [0, "always"],//分号

        "no-unexpected-multiline": 0,//避免多行表达式
        "no-unneeded-ternary": 0,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
        "no-useless-return": 0,//禁止空返回

        "no-dupe-args": 2,//参数重复
        "no-dupe-keys": 2,//对象属性重复
        "no-invalid-regexp": 2,//禁止无效的正则表达式
        "no-func-assign": 2,//禁止重复的函数声明
        "no-extra-boolean-cast": 0,//多余的感叹号转布尔型
        "no-unused-expressions": [0, {"allowShortCircuit": true, "allowTernary": true}],//未使用的表达式
        "camelcase": 0,//强制驼峰法命名

        "prefer-const": 0,//首选const
        "generator-star-spacing": 2,//生成器函数*的前后空格
        "new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        "array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
        "object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格 //always
        "object-shorthand": 0,//强制对象字面量缩写语法
        "arrow-parens": 0,//箭头函数用小括号括起来

        "no-await-in-loop": 2,
        "import/no-webpack-loader-syntax": 0,
    }
}
