import API from './api'

const WorkspaceService = {
    listar:()=>{
        return API.get('/workspace/list')
            .then(({data}) =>{
                return data
            })
            .catch(err =>{
                console.log("Auth service err", err)
            })
    }
}

export default WorkspaceService