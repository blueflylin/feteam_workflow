define("static/post-package", [ "./demo/backbone/demo", "underscore", "backbone", "willkan/backbone-localStorage/1.1.6/backbone.localStorage" ], function(require, exports, module) {
    return {
        post: [ {
            options: {
                subs: {
                    sub1: "Backbone-Sub1"
                },
                plugins: {
                    plugin1: require("./demo/backbone/demo")
                }
            },
            title: "Backbone-View",
            postName: "Backbone-View"
        } ]
    };
});