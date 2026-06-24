'use client'

import React, { useState } from 'react';

// Dados em formato de árvore (Pai -> Filhos)
const dadosMenu = [
  {
    id: 'eletronicos',
    label: 'Eletrônicos',
    subItens: ['Smartphones', 'Notebooks', 'Tablets']
  },
  {
    id: 'roupas',
    label: 'Roupas',
    subItens: ['Camisetas', 'Calças', 'Casacos']
  }
  
];

export default function TreeSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [itemAberto, setItemAberto] = useState(null); // Controla qual categoria pai está expandida
  const [selecionado, setSelecionado] = useState('Selecione uma opção...');

  // Alterna a abertura de uma categoria pai
  const toggleCategoria = (id) => {
    setItemAberto(itemAberto === id ? null : id);
  };

  // Quando o usuário escolhe a sub-opção final
  const handleSelectSubItem = (subItem) => {
    setSelecionado(subItem);
    setIsOpen(false); // Fecha o menu completo
  };

  return (
    <div style={{ width: '250px', fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* O "Botão" que imita o Select */}
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
          backgroundColor: '#fff'
        }}
      >
        {selecionado} {isOpen ? '▲' : '▼'}
      </div>

      {/* Menu Suspenso (Dropdown) */}
      {isOpen && (
        <ul style={{
          listStyle: 'none',
          padding: '5px 0',
          margin: '5px 0 0 0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: '#fff',
          position: 'absolute',
          width: '100%',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
          zIndex: 10
        }}>
          
          {dadosMenu.map((categoria) => (
            <li key={categoria.id} style={{ padding: '5px 10px' }}>
              
              {/* Categoria Pai */}
              <div 
                onClick={() => toggleCategoria(categoria.id)}
                style={{ fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
              >
                {categoria.label}
                <span>{itemAberto === categoria.id ? '−' : '+'}</span>
              </div>

              {/* Sub-itens (Só aparecem se a categoria pai estiver aberta) */}
              {itemAberto === categoria.id && (
                <ul style={{ listStyle: 'none', paddingLeft: '15px', marginTop: '5px' }}>
                  {categoria.subItens.map((sub) => (
                    <li 
                      key={sub}
                      onClick={() => handleSelectSubItem(sub)}
                      style={{
                        padding: '5px 0',
                        cursor: 'pointer',
                        color: '#555'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#0070f3'}
                      onMouseLeave={(e) => e.target.style.color = '#555'}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}