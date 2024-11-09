import {defineCliConfig} from 'sanity/cli'
import sanityConfig from './sanity.config'

export default defineCliConfig({
  api: {
    projectId: 's9x0wz9u',
    dataset: 'production',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
