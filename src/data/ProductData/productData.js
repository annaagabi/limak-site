import { categoryData } from '../CategoryData/categoryData.js';
import MochilaPersonalizada from '../../assets/images/mochila-personalizada-logo.svg';
import MochilaSacola from '../../assets/images/mochila-sacola-personalizada-logo.svg';
import SacolaTNT from '../../assets/images/sacola-tnt-logo.svg';
import { aventaisLink } from '../LinkImages/Aventais.js';
import { mochilasLink } from '../LinkImages/Mochilas.js';
import { capasLink } from '../LinkImages/CapasCadeira.js';
import { coletesLink } from '../LinkImages/Coletes.js';
import { sacolasTNTLink } from '../LinkImages/SacolasTNT.js';
import { sacolasAlgodaoLink } from '../LinkImages/SacolasAlgodao.js';
import { sacosLink } from '../LinkImages/Sacos.js';

export const productData = {
  'mochilas-personalizadas': [
    {
      id: 'mochila-001',
      name: 'Mochila Personalizada de TNT - 001',
      description: 'Uma mochila sacola versátil, ideal para uso diário e eventos promocionais.',
      mainImage: mochilasLink.Mochila5,
      altMainImage: 'Imagem de uma mochila personalizada',
      thumbnailImages: [
        { src: mochilasLink.Mochila5, alt: 'Imagem secundária da mochila 009' },
        { src: mochilasLink.Mochila3, alt: 'Imagem secundária da mochila 009' },
        { src: mochilasLink.Mochila4, alt: 'Imagem secundária da mochila 009' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Cinza', value: 'bg-gray-500' },
        { name: 'Vermelho', value: 'bg-red-500' },
        
      ],
      videos: [
        {
          provider: 'youtube',
          id: 'w54427OHnxo',
          thumbnail: mochilasLink.Mochila5, 
        },
        {
          provider: 'youtube',
          id: '48VCHEp9PiE',
          thumbnail: mochilasLink.Mochila3, 
        },
        {
          provider: 'youtube',
          id: 'hsiYgM6nFKs',
          thumbnail: mochilasLink.Mochila4, 
        },
    ],
      attributes: ['Material leve', 'Design versátil', 'Personalização em alta qualidade', 'Material: TNT', 'Medidas: 30cm de largura, 40cm de altura e 64 cm de alça de ombro'],
      carrosel: true,

    },
  ],

  'sacolas-de-algodao-personalizadas': [
    {
      id: 'sacola-de-algodao-097',
      name: 'Sacola de Algodão - 097',
      description:
        'Uma sacola ecológica e personalizável, ideal para uso diário. Feita com materiais sustentáveis.',
      mainImage: sacolasAlgodaoLink.SacolaAlgodao097,
      altMainImage: 'Imagem de uma sacola de algodão personalizada',
      thumbnailImages: [
        { src: sacolasAlgodaoLink.SacolaAlgodao097, alt: 'Imagem da sacola de algodão personalizada 097' },
        
      ],
      colors: [
        { name: 'Cru', value: 'bg-amber-50' },
      
      ],
      attributes: ['Material ecológico', 'Alta durabilidade', 'Design personalizável', 'Sacola de algodão com alça de gorgorão', 'Medidas: 34 cm de largura e 40 cm de altura', 'Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
    },
    {
      id: 'sacola-de-algodao-098',
      name: 'Sacola de Algodão - 098',
      description:
        'Uma sacola ecológica e personalizável, ideal para uso diário. Feita com materiais sustentáveis.',
      mainImage: sacolasAlgodaoLink.SacolaAlgodao098,
      altMainImage: 'Imagem de uma sacola de algodão personalizada',
      thumbnailImages: [
        { src: sacolasAlgodaoLink.SacolaAlgodao098, alt: 'Imagem da sacola de algodão personalizada 098' },
        
      ],
      colors: [
        { name: 'Cru', value: 'bg-amber-50' },
      
      ],
      attributes: ['Material ecológico', 'Alta durabilidade', 'Sacola de algodão cru','Design personalizável', 'Medidas: 34 cm de largura e 40 cm de altura', 'Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
    },
    {
      id: 'sacola-de-algodao-0111',
      name: 'Sacola de Algodão - 0111',
      description:
        'Uma sacola ecológica e personalizável, ideal para uso diário. Feita com materiais sustentáveis.',
      mainImage: sacolasAlgodaoLink.SacolaAlgodao0111,
      coverImage: sacolasAlgodaoLink.SacolaAlgodaoCapa, // faz com que a imagem apareça na capa
      altMainImage: 'Imagem de uma sacola de algodão personalizada',
      thumbnailImages: [
        { src: sacolasAlgodaoLink.SacolaAlgodao0111, alt: 'Imagem da sacola de algodão personalizada 0111' },
        { src: sacolasAlgodaoLink.SacolaAlgodao01112, alt: 'Imagem da sacola de algodão personalizada 0111' },
        
      ],
       videos: [
        {
          provider: 'youtube',
          id: '8065FmyP_Y0',
          thumbnail: sacolasAlgodaoLink.SacolaAlgodao0111, 
        },
       ],
      colors: [
        { name: 'Cru', value: 'bg-amber-50' },
      
      ],
      attributes: ['Material ecológico', 'Alta durabilidade', 'Sacola de algodão com alça de gorgorão', 'Design personalizável', 'Medidas:  30 cm de largura, 36 cm de altura e 8 cm de fundo', 'Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: true,
    },
    {
      id: 'sacola-de-algodao-0112',
      name: 'Sacola de Algodão - 0112',
      description:
        'Uma sacola ecológica e personalizável, ideal para uso diário. Feita com materiais sustentáveis.',
      mainImage: sacolasAlgodaoLink.SacolaAlgodao0112,
      altMainImage: 'Imagem de uma sacola de algodão personalizada',
      thumbnailImages: [
        { src: sacolasAlgodaoLink.SacolaAlgodao0112, alt: 'Imagem da sacola de algodão personalizada 0112' },
      ],
      colors: [
        { name: 'Cru', value: 'bg-amber-50' },
      ],
      attributes: ['Material ecológico', 'Alta durabilidade', 'Sacola de algodão com alça de gorgorão', 'Medidas: 34 cm de largura e 40 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
    },
    {
      id: 'sacola-de-algodao-0113',
      name: 'Sacola de Algodão - 0113',
      description:
        'Uma sacola ecológica e personalizável, ideal para uso diário. Feita com materiais sustentáveis.',
      mainImage: sacolasAlgodaoLink.SacolaAlgodao0113,
      altMainImage: 'Imagem de uma sacola de algodão personalizada',
      thumbnailImages: [
        { src: sacolasAlgodaoLink.SacolaAlgodao0113, alt: 'Imagem da sacola de algodão personalizada 0113' },
      
      ],
      colors: [
        { name: 'Cru', value: 'bg-amber-50' },
      ],
      attributes: ['Material ecológico', 'Alta durabilidade', 'Sacola de algodão com alça de gorgorão', 'Design personalizável', 'Material resistente', 'Medidas: 34 cm de largura e 40 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
    },
    {
      id: 'sacola-de-algodao-0114',
      name: 'Sacola de Algodão - 0114',
      description:
        'Uma sacola ecológica e personalizável, ideal para uso diário. Feita com materiais sustentáveis.',
      mainImage: sacolasAlgodaoLink.SacolaAlgodao0114,
      altMainImage: 'Imagem de uma sacola de algodão personalizada',
      thumbnailImages: [
        { src: sacolasAlgodaoLink.SacolaAlgodao0114, alt: 'Imagem da sacola de algodão personalizada 0114' },
      ],
      colors: [
        { name: 'Cru', value: 'bg-amber-50' },
      ],
      attributes: ['Material ecológico', 'Alta durabilidade', 'Design personalizável', 'Sacola de algodão cru', 'Medidas: 35 cm de largura, 29 cm de altura e 11 cm de fundo','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
    },
    {
      id: 'sacola-de-algodao-0115',
      name: 'Sacola de Algodão - 0115',
      description:
        'Uma sacola ecológica e personalizável, ideal para uso diário. Feita com materiais sustentáveis.',
      mainImage: sacolasAlgodaoLink.SacolaAlgodao0115,
      altMainImage: 'Imagem de uma sacola de algodão personalizada',
      thumbnailImages: [
        { src: sacolasAlgodaoLink.SacolaAlgodao0115, alt: 'Imagem da sacola de algodão personalizada 0115' },
      ],
      colors: [
        { name: 'Cru', value: 'bg-amber-50' },
      ],
      attributes: ['Material ecológico', 'Alta durabilidade', 'Design personalizável', 'Material resistente', 'Costura reforçada', 'Personalização em alta qualidade', 'O produto é bem embalado', 'Garantimos a integridade do produto', 'Sacola de algodão com alça de gorgorão', 'Medidas: 34 cm de largura e 40 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
    },
    
  ],
  'sacolas-tnt-personalizadas': [
    {
      id: 'sacola-tnt-1',
      name: 'Sacola TNT 1',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      coverImage: sacolasTNTLink.SacolaTNTCapa,
      mainImage: sacolasTNTLink.SacolaTNT1,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT1, alt: 'Imagem da sacola de TNT 1' },
        { src: sacolasTNTLink.SacolaTNT35, alt: 'Imagem da sacola de TNT 1' },
        { src: sacolasTNTLink.SacolaTNT39, alt: 'Imagem da sacola de TNT 1' },
      
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      videos: [
        {
          provider: 'youtube',
          id: 'lZliMgJdtsY',
          thumbnail: sacolasTNTLink.SacolaTNT1, 
        },
       ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em sublimação', 'Medidas:  34 cm de largura e 40 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: true,
      subCategory: 'Sublimação',
    },
    {
      id: 'sacola-tnt-2',
      name: 'Sacola TNT 2',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT2,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT2, alt: 'Imagem da sacola de TNT 2' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 45 cm de largura, 35 cm de altura e 15 cm de fundo','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Sublimação',
    },
    {
      id: 'sacola-tnt-3',
      name: 'Sacola TNT 3',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT12,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT12, alt: 'Imagem da sacola de TNT 3' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 38 cm de largura, 29 cm de altura e 10 cm de fundo','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Sublimação',
    },
    {
      id: 'sacola-tnt-4',
      name: 'Sacola TNT 4',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT24,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT21, alt: 'Imagem da sacola de TNT 4' },
        { src: sacolasTNTLink.SacolaTNT24, alt: 'Imagem da sacola de TNT 4' },
        
        { src: sacolasTNTLink.SacolaTNT18, alt: 'Imagem da sacola de TNT 4' },
       
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Azul Claro', value: 'bg-sky-300' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },
      
      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 34 cm de largura e 40 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Sublimação',
    },
     {
      id: 'sacola-tnt-5',
      name: 'Sacola TNT 5',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasAlgodaoLink.SacolaAlgodao0116,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasAlgodaoLink.SacolaAlgodao0116, alt: 'Imagem da sacola de TNT 5' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 30 cm de largura e de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Sublimação',
    },
    {
      id: 'sacola-tnt-6',
      name: 'Sacola TNT 6',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT3,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT3, alt: 'Imagem da sacola de TNT 6' },
        { src: sacolasTNTLink.SacolaTNT4, alt: 'Imagem da sacola de TNT 6' },
        { src: sacolasTNTLink.SacolaTNT5, alt: 'Imagem da sacola de TNT 6' },
        { src: sacolasTNTLink.SacolaTNT6, alt: 'Imagem da sacola de TNT 6' },
        { src: sacolasTNTLink.SacolaTNT8, alt: 'Imagem da sacola de TNT 6' },
      ],
      videos: [
        {
          provider: 'youtube',
          id: 'BaolNEM4ARc',
          thumbnail: sacolasTNTLink.SacolaTNT5, 
        },
        {
          provider: 'youtube',
          id: 'zbGoK5C12ok',
          thumbnail: sacolasTNTLink.SacolaTNT6, 
        },
       ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Rosa', value: 'bg-pink-500' },
        { name: 'Roxo Claro', value: 'bg-violet-300' },
        { name: 'Roxo Escuro', value: 'bg-violet-600' },

        { name: 'Azul Claro', value: 'bg-sky-300' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },
      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 34 cm de largura e 40 cm de altura'],
      carrosel: false,
      subCategory: 'Serigrafia/ Silkscreen',
      
    },
    
    {
      id: 'sacola-tnt-7',
      name: 'Sacola TNT 7',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT10,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT10, alt: 'Imagem da sacola de TNT 7' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 38 cm de largura e 42 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Serigrafia/ Silkscreen',
    },
    {
      id: 'sacola-tnt-8',
      name: 'Sacola TNT 8',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT38,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT38, alt: 'Imagem da sacola de TNT 8' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Rosa', value: 'bg-pink-400' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 34 cm de largura e 40 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Sublimação',
    },
    {
      id: 'sacola-tnt-9',
      name: 'Sacola TNT 9',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT37,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT37, alt: 'Imagem da sacola de TNT 9' },
        { src: sacolasTNTLink.SacolaTNT40, alt: 'Imagem da sacola de TNT 9' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 44 cm de largura e 40 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Serigrafia/ Silkscreen',
    },
    {
      id: 'sacola-tnt-10',
      name: 'Sacola TNT 10',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT15,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT15, alt: 'Imagem da sacola de TNT 10' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Roxo', value: 'bg-violet-700' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 29 cm de largura e 39 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Serigrafia/ Silkscreen',
    },
    
    {
      id: 'sacola-tnt-11',
      name: 'Sacola TNT 11',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT11,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT11, alt: 'Imagem da sacola de TNT 11' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 26 cm de largura e 34 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Serigrafia/ Silkscreen',
    },
    {
      id: 'sacola-tnt-12',
      name: 'Sacola TNT 12',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT36,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT36, alt: 'Imagem da sacola de TNT 12' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 34 cm de largura e 40 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Sublimação',
    },
    {
      id: 'sacola-tnt-13',
      name: 'Sacola TNT 13',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT26,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT26, alt: 'Imagem da sacola de TNT 13' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Cinza', value: 'bg-zinc-400' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 32 cm de largura, 38 cm de altura e 10 cm de lateral e fundo','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Serigrafia/ Silkscreen',
    },
    {
      id: 'sacola-tnt-14',
      name: 'Sacola TNT 14',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT27,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT27, alt: 'Imagem da sacola de TNT 14' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 45 cm de largura, 40 cm de altura e 15 cm de fundo','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Serigrafia/ Silkscreen',
    },
    {
      id: 'sacola-tnt-15',
      name: 'Sacola TNT 15',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT19,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
        { src: sacolasTNTLink.SacolaTNT19, alt: 'Imagem da sacola de TNT 15' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Cinza', value: 'bg-zinc-400' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 45 cm de largura e 40 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Serigrafia/ Silkscreen',
    },
    {
      id: 'sacola-tnt-16',
      name: 'Sacola TNT 16',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT23,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
       
        { src: sacolasTNTLink.SacolaTNT23, alt: 'Imagem da sacola de TNT 16' },
        { src: sacolasTNTLink.SacolaTNT7, alt: 'Imagem da sacola de TNT 16' },
        { src: sacolasTNTLink.SacolaTNT18, alt: 'Imagem da sacola de TNT 16' },
      
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Verde', value: 'bg-emerald-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },


      ],
      attributes: ['Material durável', 'Alta capacidade', 'Medidas: 34 cm de largura e 40 cm de altura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Serigrafia/ Silkscreen',
    },
    {
      id: 'sacola-tnt-17',
      name: 'Sacola TNT 17',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT32,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
       
        { src: sacolasTNTLink.SacolaTNT32, alt: 'Imagem da sacola de TNT 17' },
       
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Medidas: 34 cm de altura e 40 cm de largura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Alça Vazada',
    },
    {
      id: 'sacola-tnt-18',
      name: 'Sacola TNT 18',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT33,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
       
        { src: sacolasTNTLink.SacolaTNT33, alt: 'Imagem da sacola de TNT 18' },
       
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Medidas: 40 cm de altura, 34 cm de largura e 6 cm de fundo','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Alça Vazada',
    },
    {
      id: 'sacola-tnt-19',
      name: 'Sacola TNT 19',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT34,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
       
        { src: sacolasTNTLink.SacolaTNT34, alt: 'Imagem da sacola de TNT 19' },
       
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Medidas: 28 cm de altura e 25 cm de largura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Alça Vazada',
    },
    {
      id: 'sacola-tnt-20',
      name: 'Sacola TNT 20',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT40,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
       
        { src: sacolasTNTLink.SacolaTNT40, alt: 'Imagem da sacola de TNT 20' },
       
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Medidas: 40 cm de altura e 40 cm de largura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Sublimação',
    },
    {
      id: 'sacola-tnt-21',
      name: 'Sacola TNT 21',
      description: 'Uma sacola de TNT a personalizável, resistente e ideal para eventos.',
      mainImage: sacolasTNTLink.SacolaTNT37,
      altMainImage: 'Imagem de sacola de TNT personalizada',
      thumbnailImages: [
       
        { src: sacolasTNTLink.SacolaTNT37, alt: 'Imagem da sacola de TNT 21' },
       
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Bege', value: 'bg-amber-50' },
        { name: 'Amarelo', value: 'bg-yellow-400' },
        { name: 'Laranja', value: 'bg-orange-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
        { name: 'Azul Royal', value: 'bg-blue-600' },
        { name: 'Azul Marinho', value: 'bg-blue-900' },
        { name: 'Preto', value: 'bg-black' },

      ],
      attributes: ['Material durável', 'Alta capacidade', 'Medidas: 40 cm de altura e 40 cm de largura','Produzimos sacolas sob medida, com tamanhos personalizados'],
      carrosel: false,
      subCategory: 'Sublimação',
    },
    
  ],
  'aventais-personalizados': [

    {
      id: 'avental-1',
      name: 'Avental 1',
      description: 'Uma capa de cadeira personalizável, resistente e ideal para eventos.',
      mainImage: aventaisLink.Avental3,
      altMainImage: 'Imagem de um avental personalizado',
      thumbnailImages: [
        { src: aventaisLink.Avental3, alt: 'Imagem secundária de um avental 1' },
      ],
      colors: [
        { name: 'Azul', value: 'bg-blue-800' },
      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Material leve e de fácil utilização', 'Avental de TNT gramatura 0,40','Mede 50 cm de largura e 70 cm de altura', 'É costurado , com as mais modernas maquinas', 'O silkscreen  é da mais alta qualidade', 'Design personalizável com a logo da sua empresa',],
      carrosel: true,
    },
    {
      id: 'avental-2',
      name: 'Avental 2',
      description: 'Uma capa de cadeira personalizável, resistente e ideal para eventos.',
      mainImage: aventaisLink.Avental1,
      altMainImage: 'Imagem de um avental personalizado',
      thumbnailImages: [
        { src: aventaisLink.Avental1, alt: 'Imagem secundária de um avental 2' },
        { src: aventaisLink.Avental2, alt: 'Imagem secundária de um avental 2' },
      ],
      colors: [
        { name: 'Roxo', value: 'bg-purple-500' },
        { name: 'Vermelho', value: 'bg-red-600' },
      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Material leve e de fácil utilização', 'Avental de TNT gramatura 0,40','Mede 1,20cm de largura e 1,40 cm de altura', 'É costurado , com as mais modernas maquinas', 'O silkscreen  é da mais alta qualidade', 'Design personalizável com a logo da sua empresa',],
      carrosel: false,
    },
    
  ],
  'coletes-personalizados': [
    {
      id: 'colete-031',
      name: 'Colete Personalizado - 031',
      description:
        'Um colete personalizável, resistente e ideal para eventos.',
      mainImage: coletesLink.ColeteFrente1,
      altMainImage: 'Imagem de um colete personalizado',
      thumbnailImages: [
        { src: coletesLink.ColeteFrente1, alt: 'Imagem secundária do colete personalizado 031' },
        { src: coletesLink.ColeteCostas1, alt: 'Imagem secundária do colete personalizado 031' },
        
      ],
      colors: [
        { name: 'Laranja', value: 'bg-orange-500' },
      ],
      attributes: ['Material resistente', 'É costurado com as mais modernas maquinas', 'Personalização em alta qualidade', 'Material: TNT', 'Gramatura 0,60', '50 cm de largura e 70 cm de altura', 'Leva a marca de sua empresa', 'Silkscreen é da mais alta qualidade'],
      carrosel: true,
    },
    
  ],
  'sacos-tnt-personalizados': [  
    {
      id: 'saco-105',
      name: 'Saco em TNT - 105',
      description: 'Um saco de TNT personalizável, resistente e ideal para eventos.',
      mainImage: sacosLink.Saco105Amarrado,
      altMainImage: 'Imagem de um saco de TNT personalizado',
      thumbnailImages: [
        { src: sacosLink.Saco105Amarrado, alt: 'Imagem secundária do saco de TNT 105' },
        { src: sacosLink.Saco105, alt: 'Imagem secundária do saco de TNT 105' },
  
      ],
      colors: [
        { name: 'laranja', value: 'bg-orange-500' },
      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 20 cm de altura e de largura'],
     carrosel: false,
    },
    {
      id: 'saco-106',
      name: 'Saco em TNT - 106',
      description: 'Um saco de TNT personalizável, resistente e ideal para eventos.',
      mainImage: sacosLink.Saco106Amarrado,
      altMainImage: 'Imagem de um saco de TNT personalizado',
      thumbnailImages: [
        { src: sacosLink.Saco106Amarrado, alt: 'Imagem secundária do saco de TNT 106' },
        { src: sacosLink.Saco106, alt: 'Imagem secundária do saco de TNT 106' },
      ],
      colors: [
        { name: 'Preto', value: 'bg-black' },
      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 35 cm de altura e 30 cm de largura'],
     carrosel: false,
    },
    {
      id: 'saco-108',
      name: 'Saco em TNT - 108',
      description: 'Um saco de TNT personalizável, resistente e ideal para eventos.',
      mainImage: sacosLink.Saco108,
      altMainImage: 'Imagem de um saco de TNT personalizado',
      thumbnailImages: [
        { src: sacosLink.Saco108, alt: 'Imagem secundária do saco de TNT 108' },
  
      ],
      colors: [
        { name: 'Preto', value: 'bg-black' },
      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 20 cm de altura e de largura'],
     carrosel: false,
    },
    
    {
      id: 'saco-110',
      name: 'Saco em TNT - 110',
      description: 'Um saco de TNT personalizável, resistente e ideal para eventos.',
      mainImage: sacosLink.Saco110,
      altMainImage: 'Imagem de um saco de TNT personalizado',
      thumbnailImages: [
        { src: sacosLink.Saco110, alt: 'Imagem secundária do saco de TNT 110' },
  
      ],
      colors: [
        { name: 'Azul', value: 'bg-blue-600' },
        { name: 'laranja', value: 'bg-orange-500' },
        { name: 'Amarelo', value: 'bg-amber-400' },
      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 25 cm de altura e 15 cm de largura'],
     carrosel: true,
    },
    {
      id: 'saco-117',
      name: 'Saco em TNT - 117',
      description: 'Um saco de TNT personalizável, resistente e ideal para eventos.',
      mainImage: sacosLink.Saco117,
      altMainImage: 'Imagem de um saco de TNT personalizado',
      thumbnailImages: [
        { src: sacosLink.Saco117, alt: 'Imagem secundária do saco de TNT 7' },
      ],

      videos: {
        provider: 'youtube',
        id: 'fukvh8j2DrU',
        thumbnail: sacosLink.Saco117, 
      },
      colors: [
        { name: 'Branco', value: 'bg-white' },
      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 20 cm de altura e de largura'],
     carrosel: false,
    },
    
  ],
  'capas-de-cadeira-personalizadas': [
    {
      id: 'capa-1',
      name: 'Capa de Cadeira em TNT - 001',
      description: 'Uma capa de cadeira personalizável, resistente e ideal para eventos.',
      mainImage: capasLink.Capas1,
      altMainImage: 'Imagem de uma capa de cadeira personalizada',
      thumbnailImages: [
        { src: capasLink.Capas1, alt: 'Imagem secundária da capa de cadeira 1' },
  
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
      ],
      attributes: ['Material durável', 'Alta capacidade', 'Personalização em serigrafia', 'Medidas: 40 cm de altura e largura'],
     carrosel: true,
    },
    {
      id: 'capa-2',
      name: 'Capa de Cadeira em TNT - 002',
      description: 'Uma capa de cadeira personalizável, resistente e ideal para eventos.',
      mainImage: capasLink.Capas2,
      altMainImage: 'Imagem de uma capa de cadeira personalizada',
      thumbnailImages: [
        { src: capasLink.Capas2, alt: 'Imagem secundária da capa de cadeira 2' },
        { src: capasLink.Capas3, alt: 'Imagem secundária da capa de cadeira 2' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
      ],
      attributes: ['Material durável', 'Alta capacidade'],
      carrosel: false,
    },
    {
      id: 'capa-3',
      name: 'Capa de Cadeira em TNT - 003',
      description: 'Uma capa de cadeira personalizável, resistente e ideal para eventos.',
      mainImage: capasLink.Capas7,
      altMainImage: 'Imagem de uma capa de cadeira personalizada',
      thumbnailImages: [
        { src: capasLink.Capas7, alt: 'Imagem secundária da capa de cadeira 3' },
        { src: capasLink.Capas4, alt: 'Imagem secundária da capa de cadeira 3' },
        { src: capasLink.Capas5, alt: 'Imagem secundária da capa de cadeira 5' },
        { src: capasLink.Capas6, alt: 'Imagem secundária da capa de cadeira 6' },
      ],
      colors: [
        { name: 'Branco', value: 'bg-white' },
        { name: 'Verde', value: 'bg-emerald-600' },
      ],
      attributes: ['Material durável', 'Alta capacidade',],
      carrosel: false,
    },

  ],
};

// Atualiza as categorias com os produtos correspondentes
Object.entries(productData).forEach(([category, products]) => {
  if (categoryData[category]) {
    categoryData[category].products = products.map((product) => ({
      id: product.id,
      category,
      imgProduct: product.mainImage,
      productName: product.name,
      altImg: product.altMainImage,
      subCategory: product.subCategory ?? null,
    }));
  }
});