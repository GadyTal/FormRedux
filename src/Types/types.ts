export interface PagerPresenationComponentProps {
  openFn: OpenComponentFn; 
  changePage: (id: string) => void;
  onSubmit: (state: any) => void;
}

export interface CurrentOpen {
  layout: 'modal' | 'rightPanel';
  component: React.FC<PagerPresenationComponentProps>;
  size?: Record<string, string>;
}

export type OpenComponentFn = (current: CurrentOpen) => void;
