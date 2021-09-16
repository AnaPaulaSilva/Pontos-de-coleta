const express = require('express') 
const app = express() 

const local = [
  {nome: '',
  endereco: '',
  longitude: '',
  latitude:''}
]

export default class LocalColeta extends React.local{
  state = {
    local: []
  }
}

axios.get('https://localhost:4200')
  .then(res => {
    local = res.data;
    this.setState({local});
  })


axios.post('https://localhost:4200', {local})
  .then(res => {
    console.log(res);
    console.log(res.data);
  })

app.listen(3000) 


