class Test {
    constructor() {
        this.something = 123;

        this.foo = new OtherTest();

        this.foo.something = {
            fancy: 123,
            fancier: '123'
        };

        var bar: Bar;
        bar.foo = 123;
    }
}

module Foo {
    interface Bar {
    }
}
