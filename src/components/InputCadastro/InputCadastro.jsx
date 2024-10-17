import React from 'react'

const InputCadastro = () => {
  return (
    <div>
      <input type="text" name="nome-cadastro" id="nome-cadastro" />
      <input type="email" name="email-cadastro" id="email-cadastro" />
      <input type="password" name="password-cadastro" id="password-cadastro" />
      <input type="password" name="confirma-password-cadastro" id="confirma-password-cadastro" />
    </div>
  )
}

export default InputCadastro
