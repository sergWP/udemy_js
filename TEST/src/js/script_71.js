function myModule() {
    this.hello = () => {
        console.log('Hello');
    };

    this.bye = () => {
        console.log('bye!');
    }
}

module.exports = myModule;