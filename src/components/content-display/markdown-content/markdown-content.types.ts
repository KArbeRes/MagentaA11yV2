import { CriteriaType } from 'shared/types/shared-types';

export interface MediaProps {
  src?: string;
  alt?: string;
  type?: string;
  children?: React.ReactNode;
  poster?: string;
}

export interface ContentTab {
  label: string;
  content: string;
  tab: string;
}

export interface SavedCriteria extends ContentTab {
  id: string;
  criteria: CriteriaType;
  savedAt: Date;
}

export interface MarkdownContentProps {
  tabs: ContentTab[];
  activeTab?: number;
  assetBasePath?: string;
}
