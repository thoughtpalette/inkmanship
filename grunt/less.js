module.exports = {
    build:
    {
        options: {
            rootpath: ""
        },
        files: {
            "build/project.css": [
                "source/styles/project/reset.css",
                "source/styles/project/main.less"
            ]
        }
    }
};
