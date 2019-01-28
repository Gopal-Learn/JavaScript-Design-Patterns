
/**
 * @desc 保证一个类有仅有一个实例，并提供一个访问它的全局访问点
 */
let Singleton = function (name) {
    this.name = name;
    this.instance = null;
} 

Singleton.prototype.getName = function() {
    return this.name;
}

// 使用getInstance方法来获取Singleton类的唯一对象
Singleton.getInstance = function (name) {
    console.log('instance:', this.instance);
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
}

let a = Singleton.getInstance('Gping1');
let b = Singleton.getInstance('Gping2');
console.log(a);
console.log(b);
console.log(`a:`, a.getName());
console.log(`b:`, b.getName());

console.log(a === b);

// 单例模式的另外一种实现方法，使用自执行函数（重点在于闭包）
let AnotherSingleton = function(name) {
    this.name = name;
}

AnotherSingleton.prototype.getName = function(){
    return this.name;
}

AnotherSingleton.getInstance = (function() {
    let instance = null;
    return function (name) {
        console.log(`instance1:`, instance);
        if (!instance) {    // 由于闭包的作用，这个instance保留了之前的状态，内存并没有释放
            instance = new AnotherSingleton(name);
        }
        return instance;
    }
})();

let c = AnotherSingleton.getInstance('Gping3');
let d = AnotherSingleton.getInstance('Gping4');
console.log(c);
console.log(d);
console.log(`c:`, c.getName());
console.log(`d:`, d.getName());

/**
 * @description 以上实现了简单的单例模式，但是必须通过 Singleton.getInstance 来调用这个函数
 */

/**
 * @description 透明的单例模式 以下实例需要在浏览器环境中执行
 * 
 */
// 第一种实现方式
// let CreateDiv = (function () {  // 使用自执行函数
//     console.log(111)
//     let instance = null;
//     let CreateDiv = function (html) {
//         if (!instance) {
//             this.html = html;
//             this.init();
//             instance = this;
//         }
//         return instance;
//     }
//     CreateDiv.prototype.init = function () {
//         let div = document.createElement('div');
//         div.innerHTML = this.html;
//         document.body.appendChild(div);
//     }
//     return CreateDiv;
// })();

// let e = new CreateDiv('Gping5');
// let f = new CreateDiv('Gping6');
// console.log(e === f);

/**
 * @description 使用代理实现单例模式
 */

/**
 * @description 惰性单例模式，指的是在需要的时候才创建对象实例
 * 关键点在于使用一个变量来判断是否已经创建对象实例
 */