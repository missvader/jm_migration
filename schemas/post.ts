import {defineField} from 'sanity'
import { BiBookOpen } from "react-icons/bi";

const post ={
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  icon: BiBookOpen,
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      description: 'Indica el titulo de tu post. Recomendado 50 - 70 caracteres',
      validation: Rule =>[
        Rule.required()
          .min(5)
          .error('El titulo debe tener al menos 5 caracteres'),
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      description: 'Importante, dale click al botón Generate para que se genere solo',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripcion',
      type: 'text',
      description: 'Escribe una pequeña descripción , o simplemente copia las 2-3 primeras lineas de la publicación',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Fecha',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      description: 'Marca en el calendario la fecha de publicación, o directamente selecciona Set to current time en el calendario',
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' }, 
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          }
        }
      ]
    }),
    
  ]
}
/*const post = {
  name: 'post',
  type: 'document',
	title: 'Post',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titulo',
      description: 'Indica el título de tu post',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Importante, dale click al botón Generate ',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      description: 'Marca en el calendario la fecha de publicación, o directamente selecciona Set to current time en el calendario',
      type: 'datetime',
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      description: 'Escribe aquí el contenido del post',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
  
}*/
export default post