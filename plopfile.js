module.exports = function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'Add Component',
        prompts: [
            {
                type: 'input',
                name: 'folder',
                message: 'Component folder please'
            },
            {
                type: 'input',
                name: 'name',
                message: 'Component name please'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'components/{{folder}}/{{name}}.tsx',
                templateFile: 'generator/component.hbs'
            }
        ]
    });
};
