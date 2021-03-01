import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Contents')
    .items([
        S.listItem()
            .title('Works')
            .child(
                S.list()
                    .title('Category')
                    .items([
                        S.listItem()
                            .title('Design')
                            .schemaType('post')
                            .child(S.documentTypeList('post').title('Design')),
                        S.listItem()
                            .title('Conceptual Art')
                            .schemaType('artwork')
                            .child(S.documentTypeList('artwork').title('Artworks')),
                        S.listItem()
                            .title('Dance')
                            .schemaType('post')
                            .child(S.documentTypeList('post').title('Dance')),
                        S.listItem()
                            .title('Photography')
                            .schemaType('photo')
                            .child(S.documentTypeList('photo').title('Photography'))
                ])
            ),
        ...S.documentTypeListItems().filter( listItem => !['Artwork'])
    ])
