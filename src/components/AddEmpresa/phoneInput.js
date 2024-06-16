import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

const PhoneInput = ({ value, onChange }) => {
  const [mask, setMask] = useState('(99) 99999-9999');

  useEffect(() => {
    // Atualiza a máscara com base no valor inicial
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length > 10) {
      setMask('(99) 99999-9999');
    } else {
      setMask('(99) 9999-9999');
    }
  }, [value]);

  const handleChange = (event) => {
    const { value } = event.target;

    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, '');

    // Escolha a máscara correta com base no comprimento do valor numérico
    if (numericValue.length > 10) {
      setMask('(99) 99999-9999');
    } else {
      setMask('(99) 9999-9999');
    }

    // Chama o onChange passado pelo componente pai com o valor limpo
    if (onChange) {
      onChange(numericValue);
    }
  };

  return (
    <InputMask
      mask={mask}
      value={value}
      onChange={handleChange}
      placeholder="(99) 9999-9999 ou (99) 99999-9999"
      className="h-8 px-2 mr-2 w-72 bg-[#e7e7e7]"
    />
  );
};

export default PhoneInput;