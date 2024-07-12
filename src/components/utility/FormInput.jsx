import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

const FormInput = ({label,type,name,errorMsg, inputVal, placeholder, inputData, isError}) => {
  const handleInputChange = (e) => {
    inputData(e)
  }

  return (
    <FormControl isInvalid={isError}>
      <FormLabel color='brand.grey.400' fontSize='12px'>{label}</FormLabel>
      <Input 
        focusBorderColor="brand.primary" 
        h='40px' 
        fontSize='12px' 
        color='brand.grey.400' 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        value={inputVal} 
        onChange={handleInputChange}/>
      { isError && (
        <FormErrorMessage fontSize='12px'>{errorMsg}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default FormInput
