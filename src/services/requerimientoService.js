import API from './api'

const RequerimientoService = {
    detalle:(data) =>{
        return API.post('/requerimiento/detail',data)
        .then(({data}) =>{
            return data
        })
        .catch(err =>{
            console.log("Auth service err", err)
        })
    },
    registrar:(data) =>{
        return API.post('/requerimiento/create',data)
        .then(({data}) =>{
            return data
        })
        .catch(err =>{
            console.log("Auth service err", err)
        })
    },

    listar:()=>{
        return API.get('/requerimiento/list')
            .then(({data}) =>{
                return data
            })
            .catch(err =>{
                console.log("Auth service err", err)
            })
    },

    actualizar:(data)=>{
        return API.post('/requerimiento/update',data)
            .then(({data}) =>{
                return data
            })
    },

    obtenerSistema:(data)=>{
        return API.post('/requerimiento/search',data)
            .then(({data}) =>{
                return data
            })
            .catch(err =>{
                console.log("Auth service err", err)
            })
    },

    eliminarSistema:(data)=>{
        return API.post('/requerimiento/delete',data)
            .then(({data}) =>{
                return data
            })
    }
}

export default RequerimientoService