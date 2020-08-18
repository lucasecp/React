import React from 'react'
import {Container} from '../../styles/globalStyles'
import {Form} from './styled'
import axios from '../../services/axios'
import {get} from 'lodash'
import Loading from '../../components/Loading'
import history from '../../services/history'
import {toast} from 'react-toastify'
export default function (props) {
  const {id} = props.match.params
  const [foto, setFoto] = React.useState('')
  const [loading, setLoading] = React.useState(false)
   React.useEffect(()=>{
     async function getData(){
      if(id === undefined) return;
      setLoading(true)
       try{
       const {data} = await axios.get(`/alunos/${id}`)
       const photo = get(data,'Photos', '')
       setFoto(photo[photo.length - 1].url)
       setLoading(false)
       }catch(e){
        setLoading(false)
         const error = get(e, 'response.data.errors', [])
         const {status} = get(e,'response', '')
         if(status === 401){
           toast.warning('usuario não autorizado')
           error.map((err)=> toast.error(err))
           return history.push('/')
         }
       }
     }
     getData()
   },[id])
  const handleInputChange = async (e) =>{
    if(!e.target.files[0]) return
    setLoading(true)
    const photo = e.target.files[0]
    const photoUrl = URL.createObjectURL(photo)
    console.log(photoUrl)
    setFoto(photoUrl)

    const formData = new FormData()
    formData.append('aluno_id',id)
    formData.append('foto',photo)

    console.log(formData)
    try{
     const resp =  await axios.post('/photos', formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(resp)
      toast.success('Foto salva com sucesso')
      setLoading(false)
    }catch(e){
      const {errors} = get(e,'response.data', [])
      errors.map(err => toast.error(err))
    }
    setLoading(false)

  }
  return (
    <Container>
      <Loading isLoading={loading}/>
      <Form>
      <h1>Alterar Foto</h1>
      <label htmlFor='foto'>
        {foto ? <img src={foto} alt='foto' title='Alterar'/> : 'Selecionar'}
        <input type='file' id='foto' onChange={handleInputChange}/>
      </label>
      </Form>
    </Container>
  )
}
