
export interface PagerPresenationComponentProps {
  openFn: OpenComponentFn; 
  changePage: (id: string) => void;
  onSubmit: (state: any) => void;
  state: Record<string, any>
  setFormState: (state: Record<string, any>) => void
  errors: Record<string, boolean>,
  onUiStateChange: (state: Record<string, any>) => void;
}

export interface CurrentOpen {
  layout: 'modal' | 'rightPanel';
  component: React.FC<{openFn: OpenComponentFn, close: () => void}> | null;
  size?: Record<string, string>;
}

export type OpenComponentFn = (current: CurrentOpen) => void;

export enum EntityType {
  Rule = "Rule",
  Certificate = "Certificate",
  PortalDesign = "PortalDesign"
}