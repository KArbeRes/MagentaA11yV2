import {defineType} from 'sanity'

export const schemaTypes = [
  // Section Schema
  defineType({
    name: 'accessibilitySection',
    title: 'Web Accessibility Section',
    type: 'document',
    fields: [
      {
        name: 'sectionName',
        title: 'Section Name',
        type: 'string',
      },
      {
        name: 'items',
        title: 'Checklist Items',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'checklistItem'}]}],
      },
    ],
  }),

  // Checklist Item Schema
  defineType({
    name: 'checklistItem',
    title: 'Checklist Item',
    type: 'document',
    fields: [
      {
        name: 'itemName',
        title: 'Item Name',
        type: 'string',
      },
      {
        name: 'gherkin',
        title: 'Gherkin Syntax',
        type: 'text',
      },
      {
        name: 'condensedCriteria',
        title: 'Condensed Acceptance Criteria',
        type: 'text',
      },
      {
        name: 'videoTest',
        title: 'Video',
        type: 'file',
      },
    ],
  }),
]
