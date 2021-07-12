export interface PagerPresenationComponentProps {
  changePage: (id: string) => void;
}

export interface CurrentOpen {
  layout: 'modal' | 'rightPanel';
  component: React.FC<PagerPresenationComponentProps>;
  size: Record<string, string>;
}

export type OpenComponentFn = (current: CurrentOpen) => void;
