import { buildConfig } from 'payload';
import { sqliteAdapter } from '@payloadcms/db-sqlite';

if (!process.env.PAYLOAD_SECRET) throw new Error('Configure PAYLOAD_SECRET no ambiente local.');

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET,
  admin: { user: 'usuarios' },
  db: sqliteAdapter({ client: { url: 'file:giro7.db' } }),
  collections: [
    { slug: 'usuarios', auth: true, fields: [] },
    {
      slug: 'noticias',
      admin: { useAsTitle: 'titulo' },
      versions: { drafts: true },
      access: {
        read: ({ req }) => req.user ? true : { _status: { equals: 'published' } },
      },
      fields: [
        { name: 'titulo', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true, validate: value =>
          typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) || 'Use letras minúsculas, números e hífens.' },
        { name: 'texto', type: 'textarea', required: true },
        { name: 'foto', type: 'text', label: 'URL da foto de capa' },
        { name: 'ligas', type: 'select', hasMany: true, options: [
          { label: 'Copa da Vila', value: 'copa-da-vila' },
          { label: 'Copa Sorvetes Brisa', value: 'copa-sorvetes-brisa' },
        ] },
      ],
    },
  ],
});
