const ininState = {
    projects: [
        { id: '1', title: 'react tutorial', content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. Wikipedia' },
        { id: '2', title: 'javascript tutorial', content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. Wikipedia' },
        { id: '3', title: 'angular tutorial', content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. Wikipedia' },
        {id:'4',title:'node tutorial', content:'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. Wikipedia'}
    ]
}
const projectReducer = (state = ininState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            break;
        default:
            break
    }
            return state

}
export default projectReducer