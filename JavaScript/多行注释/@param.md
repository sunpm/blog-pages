# @param

描述: 记录传递给一个函数的参数。 别名:

- arg
- argument

## 概述

`@param`标签提供了对某个函数的参数的各项说明，包括参数名、参数数据类型、描述等。

`@param`标签要求您指定要描述参数的名称。您还可以包含参数的数据类型，使用大括号括起来，和参数的描述。

参数类型可以是一个内置的JavaScript类型，如`string`或`Object`，或是你代码中另一个标识符的[JSDoc namepath（名称路径）](https://www.html.cn/doc/jsdoc/about-namepaths.html)。如果你已经在这namepath（名称路径）上为标识符添加了描述，JSDoc会自动链接到该标识符的文档。您还可以使用type的表达式来表示，例如，该参数不能为空或可以接受任何类型;详见[`@type` 标签文档](https://www.html.cn/doc/jsdoc/tags-type.html)。

如果您提供的描述，在描述之前插入一个连字符，可以使JSDoc注释更具可读性。请务必在连字符后加一个空格。

## 例子

### 名称, 类型, 和说明

下面的示例演示如何在 `@param`标签中包含名称，类型，和说明。

只注释变量名称,例如：

```js
/**
 * @param somebody
 */
 function sayHello(somebody) {
    alert('Hello ' + somebody);
}
```

注释变量名 和 变量类型 ,例如：

```js
/**
 * @param {string} somebody
 */
 function sayHello(somebody) {
    alert('Hello ' + somebody);
}
```

注释变量名 、 变量类型 和 变量说明 ,例如：

```js
/**
 * @param {string} somebody Somebody's name.
 */
 function sayHello(somebody) {
    alert('Hello ' + somebody);
}
```

你可以在变量说明前加个连字符，使之更加容易阅读， 例如：

```js
/**
 * @param {string} somebody - Somebody's name.
 */
 function sayHello(somebody) {
    alert('Hello ' + somebody);
}
```

### 变量是一个对象，带属性

如果参数是一个对象，有特定的属性，您可以通过`@param`标签提供额外的属性。例如，假如`employee`参数有`name`和`department`属性，您可以按以下方式描述。

例如，描述一个对象参数的属性：

```js
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
 Project.prototype.assign = function(employee) {    // ...};
```

同样，可以联想到如果假如`employee`参数是一个数组，这个数组中包含`name`和`department`元素，那么可以这么描述。

例如，描述参数的属性值在数组中：

```js
/**
 * Assign the project to a list of employees.
 * @param {Object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee's department.
 */Project.prototype.assign = function(employees) {    // ...};
```

### 可选参数和默认值

下面的例子说明如何描述一个参数是可选的，并且具有默认值。

一个可选参数（使用JSDoc语法），例如：

```js
/**
 * @param {string} [somebody] - Somebody's name.
 */
 function sayHello(somebody) {
     if (!somebody) {
        somebody = 'John Doe';
    }
    alert('Hello ' + somebody);
}
```

一个可选参数（ 使用Google Closure Compiler 语法）：

```js
/**
 * @param {string=} somebody - Somebody's name.
 */
 function sayHello(somebody) {
     if (!somebody) {
        somebody = 'John Doe';
    }
    alert('Hello ' + somebody);
}
```

一个可选参数和默认值：

```js
/**
 * @param {string} [somebody=John Doe] - Somebody's name.
 */
 function sayHello(somebody) {
     if (!somebody) {
        somebody = 'John Doe';
    }
    alert('Hello ' + somebody);
}
```

### 多少类型参数和可重复使用的参数

下面的例子演示了如何使用类型的表达式来表示一个参数可以接受多种类型（或任何类型），还有一个参数可以被多次使用。有关JSDoc支持的类型表达式细节请参阅[`@type` 标签文档](https://www.html.cn/doc/jsdoc/tags-type.html)。

例如，允许一个类型或另一个类型：

```js
/**
 * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
 */
 function sayHello(somebody) {
     if (!somebody) {
        somebody = 'John Doe';
    } else if (Array.isArray(somebody)) {
        somebody = somebody.join(', ');
    }
    alert('Hello ' + somebody);
}
```

例如，允许任何类型：

```js
/**
 * @param {*} somebody - Whatever you want.
 */
 function sayHello(somebody) {
     console.log('Hello ' + JSON.stringify(somebody));
}
```

例如，可重复使用的参数：

```js
/**
 * Returns the sum of all numbers passed to the function.
 * @param {...number} num - A positive or negative number.
 */
 function sum(num) {
     var i = 0, n = arguments.length, t = 0;    
     for (; i &lt; n; i++) {
        t += arguments[i];
    }    
    return t;
}
```

### 回调函数

如果参数接受一个回调函数，您可以使用[`@callback`标签](https://www.html.cn/doc/jsdoc/tags-callback.html)来定义一个回调类型，然后回调类型包含到`@param`标签中。

例如，参数接受一个回调函数：

```js
/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */
 /**
 * Does something asynchronously and executes the callback on completion.
 * @param {requestCallback} cb - The callback that handles the response.
 */
 function doSomethingAsynchronously(cb) {
     // code
     };
```