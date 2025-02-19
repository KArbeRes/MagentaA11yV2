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
}

export interface MarkdownContentProps {
  tabs: ContentTab[];
  activeTab?: number;
  assetBasePath?: string;
}
