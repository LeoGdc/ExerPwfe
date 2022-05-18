const url = `https://testeleonid.herokuapp.com/alunos/`

const lerAlunos = async (id='') => {
    const response = await fetch(`${url}/${id}`)
    return await response.json()

}



export{
    lerAlunos
}