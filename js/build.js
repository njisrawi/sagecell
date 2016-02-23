({
    name: "compute_server",
    out: "compute_server_build.js",
    optimize: "none",
    paths: {
        "codemirror" : "components/codemirror",
        "jquery" : "components/jquery/jquery.min",
        "jquery-ui" : "components/jquery-ui/ui/minified/jquery-ui.min",
        "moment" : "components/moment/min/moment.min",
        "requireLib": "components/requirejs/require",
        "underscore" : "components/underscore/underscore-min"
    },
    include: [
        "codemirror/addon/display/fullscreen",
        "codemirror/addon/edit/matchbrackets",
        "codemirror/addon/fold/foldcode",
        "codemirror/addon/fold/foldgutter",
        "codemirror/addon/fold/brace-fold",
        "codemirror/addon/fold/xml-fold",
        "codemirror/addon/fold/comment-fold",
        "codemirror/addon/fold/indent-fold",
        "codemirror/addon/hint/show-hint",
        "codemirror/addon/runmode/runmode",
        "codemirror/addon/runmode/colorize",
        "codemirror/mode/css/css",
        "codemirror/mode/htmlmixed/htmlmixed",
        "codemirror/mode/javascript/javascript",
        "codemirror/mode/python/python",
        "codemirror/mode/r/r",
        "codemirror/mode/xml/xml",
        "requireLib",
        "sockjs"
    ]
})