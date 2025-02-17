export interface MediaProps {
  src?: string;
  alt?: string;
  type?: string;
  children?: React.ReactNode;
  poster?: string;
}

export interface MarkdownContentProps {
  tabs: { label: string; content?: string }[];
  activeTab: number;
  assetBasePath: string;
}
