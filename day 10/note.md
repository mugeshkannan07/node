<!-- creating aa user defined module------------ -->

<!-- create a module(greet.js); -->

<script>

    function greet(name) {
        return `Hello, ${name}!`;
    }

    // export the greet function------------
    module.exports = greet;
</script>
import and use the module(back.js);

<script>
    const greet = require('./greet');

    console.log(greet('kannan'));
</script>