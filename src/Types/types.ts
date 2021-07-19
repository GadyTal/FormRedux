export interface PagerPresenationComponentProps {
  openFn: OpenComponentFn; 
  changePage: (id: string) => void;
  state: Record<string, any>
  setFormState: (state: Record<string, any>) => void
  errors: Record<string, boolean>
}

export interface CurrentOpen {
  layout: 'modal' | 'rightPanel';
  component: React.FC<{openFn: OpenComponentFn, close: () => void}> | null;
  size?: Record<string, string>;
}

export type OpenComponentFn = (current: CurrentOpen) => void;
